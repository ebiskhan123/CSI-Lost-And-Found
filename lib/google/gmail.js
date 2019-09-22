const {google} = require('googleapis');
const authenticate = require('./authorize')
const FROM = '<btc.mailerbot@gmail.com>';

const scopes = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.send',
];

module.exports.sendMail = (subject, text, recepient) => {  
  return new Promise((resolve, reject) => {
    authenticate.getOAuth2Client(scopes)
    .then((oAuth2Client) => {
      let encodedMessage = generateEncodedMessage(subject, text, recepient);

      const gmail = google.gmail({
        version: 'v1',
        auth: oAuth2Client,
      });
      
      doSendMail(encodedMessage, gmail, (data) => {
        console.log(data);        
        resolve(data);
      })
    })
    .catch((error) => reject(error))
  })
}

const generateEncodedMessage = (subject, text, recepient) => {
  const messageParts = [
    `From: ${FROM}`,
    `To: <${recepient}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    `${text}`,
  ];
  
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedMessage;
}

async function doSendMail(encodedMessage, gmail, callback) {
  var res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });
  callback(res.data);
}

