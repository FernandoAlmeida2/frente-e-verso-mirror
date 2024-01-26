import { NextApiRequest } from "next";

export async function POST(Request: NextApiRequest) {

  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'demo@demo.gmail',
      pass: 'password',
    },
    secure: true,
  })

  return new Response(`Welcome to my Next application, user: ${Request.body}`, {
    status: 200,
  });
  //res.status(200).json(req.body)
  //console.log(req.body)
  console.log("ok");
}

/* export async function GET(Request: NextApiRequest) {
    return new Response("This is a new API route");
  } */
