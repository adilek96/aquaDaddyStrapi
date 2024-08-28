export default ({env}) => ({
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('EMAIL_HOST'),
            port: env('EMAIL_PORT'), 
            secure: true, 
            auth: {
              user: env('EMAIL_USERNAME'), 
              pass: env('EMAIL_PASSWORD'),
            },
            tls: {
                rejectUnauthorized: true, 
              },
          },
          settings: {
            defaultFrom: env('EMAIL_DEFAULT_FROM'),
            defaultReplyTo: env('EMAIL_DEFAULT_REPLY'),
          },
        }
    }
});
