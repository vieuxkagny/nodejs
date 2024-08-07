// email-sender.js
const nodemailer = require('nodemailer');

// Créez un transporteur
const transporter = nodemailer.createTransport({
  service: 'gmail', // Vous pouvez utiliser un autre service
  auth: {
    user: 'votre-email@gmail.com', // Votre adresse e-mail
    pass: 'votre-mot-de-passe', // Votre mot de passe
  },
});

// Définissez les options de l'e-mail
const mailOptions = {
  from: 'votre-email@gmail.com',
  to: 'destinataire@example.com', // Adresse du destinataire
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email envoyé: ' + info.response);
});
