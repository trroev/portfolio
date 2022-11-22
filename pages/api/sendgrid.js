const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Number: ${body.number}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "tmathiak@gmail.com",
    from: "trevor@trevormathiak.dev",
    subject: "New Portfolio Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await sgMail.send(data);
  res.status(200).json({ status: "OK" });
};
