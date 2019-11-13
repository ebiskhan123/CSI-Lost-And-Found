var nodemailer = require('nodemailer');
const gmail = require('../google/gmail');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'btc.mailerbot@gmail.com',
    pass: 'BTC!mailer'
  }
});


module.exports.sendItemClaimRequestMail = (owner, claimer, item, message) => {
  let subject = 'Lost and Found: Item claim request';
  let text = `Hi ${owner.name},<br><br>
              ${claimer.name} believes that the <b>${item.title}</b> 
              you have posted in Lost and Found site is theirs 
              and would like to claim it.<br><br>
              Their message for you is,<br>
              "${message}"<br><br>
              You can view your post via the link below<br><br>
              http://lostfoundtn.com/dashboard<br><br>
              Please make sure to contact them at ${claimer.email}
              and respond to their request.`;
  return gmail.sendMail(subject, text, owner.email);
}

module.exports.sendItemFoundMail = (owner, claimer, item, message) => {
  let subject = 'Lost and Found: Item claim request';
  let text = `Hi ${owner.name}<br><br>
              ${claimer.name} believes that they have found the 
              <b>${item.title}<b> you have posted in the 
              Lost and Found site.<br><br>
              Their message for you is,<br>"${message}"<br><br>
              You can view your post via the link below<br><br>
              http://lostfoundtn.com/dashboard<br><br>
              Please make sure to contact them at ${claimer.email}
              and claim your ${item.title}.`;
  return gmail.sendMail(subject, text, owner.email);
}

function sendMail(subject, text, recepient)
{
  let mailOptions = {
      from: 'btc.mailerbot@gmail.com',
      to: recepient,
      subject: subject,
      text: text
    };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        reject(error)
      } 
      else {
        resolve(info)
      }
    });
  })
}
