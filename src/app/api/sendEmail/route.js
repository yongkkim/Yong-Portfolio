// app/api/sendEmail/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email with a verified domain (replace with your domain from Resend)
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // <-- verified domain
      to: "ykkim6@hotmail.com",
      subject: `New message from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    });

    console.log("Resend result:", result); // logs success response

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Resend error:", error);

    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
