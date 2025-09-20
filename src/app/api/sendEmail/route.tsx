import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment");
      return Response.json(
        { success: false, error: "API key missing" },
        { status: 500 }
      );
    }

    // Send email via Resend using React component
    const { data, error } = await resend.emails.send({
      from: "contact@yongkukkim.com",
      to: "ykkim6@hotmail.com",
      subject: `New message from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err: any) {
    console.error("API route crashed:", err);
    return Response.json(
      { success: false, error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
