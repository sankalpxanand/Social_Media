const nodeMailer = require('../config/nodemailer');

//this is another way of exporting a method
exports.newComment = (comment) => {
    console.log('inside newComment mailer', comment);

    nodeMailer.transporter.sendMail({
            from: 'sankalpananddd29@gmail.com',
            to: 'sankrocks29@gmaail.com',
            //to: comment.user.email,
            subject: 'New Comment Published',
            html: '<h1>Yup, your comment is now published</h1>'
        },
        (err, info) => {
            if(err){
                console.log('Error in sending mail', err);
                return;
            }
            console.log('Mail delivered', info);
            return;
        }
    );
}