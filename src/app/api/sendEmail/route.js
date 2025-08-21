import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ykkim6@hotmail.com",
      subject: `New message from ${name}`,
      text: `${message}, Reply to ${email}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("Email hasn't been sent", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
};
