import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "ykukkim6@gmail.com",
      to: "ykkim6@hotmail.com",
      subject: `New message from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2>New Message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
  `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.log("Email hasn't been sent", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
};
