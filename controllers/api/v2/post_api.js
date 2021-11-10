module.exports.index = function(req, res){
    return res.json(200,{
        message: "Version2:- List of Post",
        posts: []
    })
}