const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'social_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'sankrocks29@gmail.com',
            pass: 'strings29!'
        }
    },
    google_client_id: "883711482731-r5515og17c9lqvfn141smrqehv4vv9sl.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'social',
    morgan: {
        mode: 'dev',
        options: {
            stream: accessLogStream
        }
    }
}
const production = {
    name: 'production',
    asset_path: process.env.SOCIAL_ASSET_PATH,
    session_cookie_key: process.env.SOCIAL_SESSION_COOKIE_KEY,
    db: process.env.SOCIAL_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SOCIAL_GMAIL_USERNAME,
            pass: process.env.SOCIAL_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.SOCIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.SOCIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.SOCIAL_GOOGLE_CALL_BACK_URL,
    jwt_secret: process.env.SOCIAL_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {
            stream: accessLogStream
        }
    }
}

module.exports = eval(process.env.SOCIAL_ENVIRONMENT) == undefined ? development : eval(process.env.SOCIAL_ENVIRONMENT);