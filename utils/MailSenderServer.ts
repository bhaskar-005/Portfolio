'use server'
import { mailSend } from "./NodeMailer";
const adminMail = process.env.ADMIN_EMAIL!;

export const MailSender = async ({ userMail, Html  }: { userMail: string; Html: string }) => {
  try {
    
  if (!userMail || !Html ) {
    console.log('Missing details.');
    return null;
}

console.log('sanding to admin');

// Sending mail to admin
const adminRes = await mailSend({
    receiversMail: adminMail,
    Html: Html,
    subject: `Mail from ${userMail}`
});

if (adminRes) {
    const userRes = await mailSend({
        receiversMail: userMail,
        Html: Html,
        subject: `Your mail queued successfully.`
    });

    if (userRes) {
        console.log(userRes);
        return userRes;
    }
}
  } catch (error) {
    console.log(error);
   return null; 
  }
};
