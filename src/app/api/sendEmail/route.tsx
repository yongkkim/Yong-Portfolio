// import { Resend } from "resend";
// import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  return new Response(
    JSON.stringify({
      exists: !!process.env.RESEND_API_KEY,
      value: process.env.RESEND_API_KEY ? "hidden" : "missing",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     const { data, error } = await resend.emails.send({
//       from: "contact@yongkukkim.com",
//       to: "ykkim6@hotmail.com",
//       subject: `New message from ${name}`,
//       text: `Message from ${name} (${email}):\n\n${message}`,
//       react: EmailTemplate({ name, email, message }),
//     });

//     if (error) {
//       return Response.json({ success: false, error }, { status: 500 });
//     }

//     return Response.json({ success: true, data });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: String(error) },
//       { status: 500 }
//     );
//   }
// }
