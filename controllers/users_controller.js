module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: "Profile"
    });
}
//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title: "Social | Sign Up"
    })
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title: "Social | Sign In"
    })
}