export const MailReceiv = (Mail:string,userText:string)=>{
    return `
    <html lang="en">
    <head>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #fff;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #0F162B;;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-image: url('https://tailwindcss.ru/_next/static/media/blog-post-form-dark@90.5b274bea.jpg');
          background-repeat: no-repeat;
        }
        h1 {
          color: #d3d3d3;
          text-align: center;
        }
        h2{
            color: #9a9999;
        }
        p {
          color: #b8b8b8;
          line-height: 1.6;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          color: #999;
        }
        .span{
         color:#21B952;
         direction: underline;
        }
        .button {
          display: inline-block;
          background-color: #21B952;
          color: #fff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your Email Has Been Received!</h1>
        <h2>Dear <span class="span">${Mail}</span>,</h2>
        <p>Your provided information: ${userText}</p>
        <p>We have received your email and our team will make every effort to respond to you as soon as possible.</p>
        <p>Thank you for reaching out to us.</p>
        <a href="${process.env.PORTFOLIO_LINK}" class="button">Open Portfolio</a>
        <div class="footer">
          <p>This email is automatically generated. Please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
    `
}