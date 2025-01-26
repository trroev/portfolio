import type { MailDataRequired } from '@sendgrid/mail'
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

type ResponseData = {
  status?: string
  message?: string
}

type RequestBody = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const sendgridApiKey = process.env.SENDGRID_API_KEY
if (!sendgridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined')
}
sgMail.setApiKey(sendgridApiKey)

const toEmail = process.env.TO_EMAIL
if (!toEmail) {
  throw new Error('TO_EMAIL is not defined')
}

const fromEmail = process.env.FROM_EMAIL
if (!fromEmail) {
  throw new Error('FROM_EMAIL is not defined')
}

export async function POST(req: Request) {
  let response: ResponseData = {}

  const body: RequestBody = (await req.json()) as RequestBody

  const msg = `
    Name: ${body.name}\r\n
    Number: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
    `

  const data: MailDataRequired = {
    to: toEmail,
    from: fromEmail ?? '',
    subject: `${body.name} sent you a message via trevormathiak.dev`,
    text: `Email => ${body.email}`,
    html: msg.replace(/\r\n/g, '<br>'),
  }

  try {
    await sgMail.send(data).then(() => {
      response = {
        status: 'success',
        message: "Your message was sent. I'll be in contact shortly.",
      }
    })
  } catch (error) {
    response = {
      status: 'error',
      message: `Message failed to send with error, ${String(error)}`,
    }
  }

  return NextResponse.json(response)
}
