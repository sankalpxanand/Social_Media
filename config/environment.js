const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
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
    jwt_secret: 'social'
}
const production = {
    name: 'production'
}

module.exports = development;