'use server'
import nodemailer from "nodemailer";

const host = process.env.MAIL_HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;

var transport = nodemailer.createTransport({
    host: host,
    port: 587,
    auth: {
      user: user,
      pass: password
    }
  });

export const mailSend = async ({receiversMail,Html,subject}:{receiversMail:string,Html:string,subject:string}) => {
  try {

    const info = await transport.sendMail({
      from: process.env.MAILTRAP_EMAIL,
      to: receiversMail,
      subject: subject, // Subject line
      html: Html, // html body
    });

    console.log(info);
    
    return info
  } catch (error) {
    console.log(error);
    return null;
  }
};
