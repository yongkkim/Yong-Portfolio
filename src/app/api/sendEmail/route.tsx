import { Resend } from "resend";
// import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "contact@yongkukkim.com", // verified domain email
      to: "ykkim6@hotmail.com",
      subject: `New message from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
      // react field will come later
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("FULL ERROR OBJECT:", error);
    if (error instanceof Error) {
      console.error(error.stack);
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : error,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
