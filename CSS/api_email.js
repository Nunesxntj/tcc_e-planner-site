const nodemailer = require('nodemailer');


// Configuração do transporte do email
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // servidor SMTP da Outlook
    port: 587, // porta do servidor SMTP da Outlook
    secure: false, // conexão segura false porque o TLS requer o campo de inicio de sessão "auth"
    auth: {
        user: 'byatriz.vieira@etec.sp.gov.br', // substituir pelo seu email
        pass: '*By0001099878160' // substituir pela sua senha
    }
});

// Configuração do email
const mailOptions = {
    from: 'byatriz.vieira@etec.sp.gov.br',
    to: 'murilo.lima62@etec.sp.gov.br',
    subject: 'Assunto do email',
    text: 'Teste API'
};

// Envio do email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});

