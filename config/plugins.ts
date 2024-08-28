export default () => ({
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: 'smtp.mail.ru',
            port: 465, 
            secure: true, 
            auth: {
              user: 'noreply@aquadaddy.app', 
              pass: 'wVifAjRB3iS5YtHZ2dCy',
            },
            tls: {
                rejectUnauthorized: true, 
              },
          },
          settings: {
            defaultFrom: 'noreply@aquadaddy.app',
            defaultReplyTo: 'support@aquadaddy.app',
          },
        }
    }
});
