var nodemailer = require('nodemailer');
const gmail = require('../google/gmail');

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
  let subject = 'Lost and Found: Item claim request'
  let text = `Hi ${owner.name}<br><br>
              ${claimer.name} believes that they have found the 
              <b>${item.title}<b> you have posted in the 
              Lost and Found site.<br><br>
              Their message for you is,<br>"${message}"<br><br>
              You can view your post via the link below<br><br>
              http://lostfoundtn.com/dashboard<br><br>
              Please make sure to contact them at ${claimer.email}
              and claim your ${item.title}.`
  return gmail.sendMail(subject, text, owner.email)
}

module.exports.sendPasswordResetLink = (user) => {
  let subject = 'Lost and Found: Password reset link'
  let text = `Hi ${user.name}<br><br>
              You can follow the link below to reset your password
              for lostfoundtn.com<br><br>
              http://lostfoundtn.com/resetPassword/${user._id}/${user.passwordResetToken.token}<br><br>
              If this was a mistake, please ignore this mail 
              and the link will expire within an hour`
  return gmail.sendMail(subject, text, user.email)
}


module.exports.sendEmailVerificationLink = (user) => {
  let subject = 'Lost and Found: Verify Email'
  let text = `Hi ${user.name}<br><br>
              You can follow the link below to verify your email
              for lostfoundtn.com<br><br>
              http://lostfoundtn.com/verifyEmail/${user._id}/${user.emailVerificationToken}<br><br>
              If this was a mistake, please ignore this mail 
              and your account will auto expire`
  return gmail.sendMail(subject, text, user.email)
}


module.exports.mailUser = (user, message) => {
  let subject = `Lost and Found: ${message.subject}`
  let text = fillUserData(message.text, user)
  return gmail.sendMail(subject, text, user.email)
}

fillUserData = (text, user) => {
  let subStrings = text.split('$')
  for(let i = 0; i < subStrings.length; i++) {
    if(subStrings[i] === 'name')
      subStrings[i] = user.name
    if(subStrings[i] === 'id')
      subStrings[i] = user._id
  }
  return subStrings.join('')
}


