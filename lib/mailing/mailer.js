var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'btc.mailerbot@gmail.com',
    pass: 'BTC!mailer'
  }
});


module.exports.sendItemClaimRequestMail = (owner, claimer, item, message) => {
  let subject = 'Lost and Found: Item claim request';
  let text = `Hi ${owner.name}\n\r\t
              ${claimer.name} believes that the ${item.title} 
              you have posted in Lost and Found site is theirs 
              and would like to claim it.\n\r\n\r
              Their message for you is,\n\r\t${message}\r\n\r\n
              You can view your post via the link below
              Please make sure to contact them at ${claimer.email}
              and respond to their request.`;
  return sendMail(subject, text, owner.email);
}

module.exports.sendItemFoundMail = (owner, claimer, item, message) => {
  let subject = 'Lost and Found: Item claim request';
  let text = `Hi ${owner.name}\n\r\t
              ${claimer.name} believes that they have found the 
              ${item.title} you have posted in the 
              Lost and Found site.\n\r\n\r
              Their message for you is,\n\r\t${message}\r\n\r\n
              You can view your post via the link below
              Please make sure to contact them at ${claimer.email}
              and claim your ${item.title}.`;
  return sendMail(subject, text, owner.email);
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
        reject(error)
      } 
      else {
        resolve(info)
      }
    });
  })
}
