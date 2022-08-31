const nodemailer = require('nodemailer')
const ejs = require('ejs')
const read = require('fs').readFileSync;
const join = require('path').join;
require('dotenv').config()
class Nodemailer{
  constructor(data, email, bod ,token){
    this.email = email,
    this.subject = data.subject,
    this.token = token
    this.data = data
    this.bod = bod
  }

  async sendEmail(order, nro) {
    const str = read(join(__dirname, '../template/welcomeTemplate.ejs'), 'utf8');
    const body = ejs.compile(str)(this.data);
    const transporter = await nodemailer.createTransport({
      service : "gmail",
      auth: {
          user: process.env.EMAIL,
          pass: process.env.KEY_MAIL
      }
    });
    let mailOptions ;
    if(order){
      mailOptions = {
        from: `"E-commercer" <${process.env.EMAIL}>`,
        to: this.email,
        subject: this.subject,
        html: body,
        attachments: [
          {
            filename: `${nro}.pdf`,
            path: `../server/recibe/${nro}.pdf`,
            cid: `uniq-${nro}.pdf` 
          }
        ]
      };
    } else{
      mailOptions = {
        from: `"E-commercer" <${process.env.EMAIL}>`,
        to: this.email,
        subject: this.subject,
        html: body
      };
    }
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", "https://mailtrap.io/inboxes/test/messages/");
  
  }
  
}

module.exports = Nodemailer



