import { FormData } from "@/app/fale_conosco/page";

export async function POST(Request: Request) {
  let nodemailer = require("nodemailer");
  const formData = await Request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: false,
  });

  const mailData = {
    from: formData.email,
    to: "observatoriodefortaleza@iplanfor.fortaleza.ce.gov.br",
    subject: `Mensagem do usuário ${formData.name} (Frente e Verso)`,
    html: `<div>${formData.message}</div><p>Enviado de:
    ${formData.email}</p>`,
  };

  transporter.sendMail(mailData, function (err: Error) {
    if (err) console.log(err);
  });

  return new Response("Mensagem enviada com sucesso!", {
    status: 200,
  });
}

/* export async function GET(Request: NextApiRequest) {
    return new Response("This is a new API route");
  } */
