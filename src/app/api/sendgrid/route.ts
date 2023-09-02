import { NextResponse } from "next/server";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(req: Request) {
  let response: ResponseData = {};

  const body = await req.json();

  const msg = `
    Name: ${body.name}\r\n
    Number: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
    `;

  const data: MailDataRequired = {
    to: process.env.TO_EMAIL as string,
    from: process.env.FROM_EMAIL as string,
    subject: `${body.name} sent you a message via trevormathiak.dev`,
    text: `Email => ${body.email}`,
    html: msg.replace(/\r\n/g, "<br>"),
  };

  try {
    await sgMail.send(data).then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    });
  } catch (error) {
    response = {
      status: "error",
      message: `Message failed to send with error, ${error}`,
    };
  }

  return NextResponse.json(response);
}
