const { populate } = require('../models/post');
const Post = require('../models/post');



module.exports.home = function(req,res){
    //   console.log(req.cookies);


    // Post.find({}, function(err,posts){

        
    // });

    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title: 'Social | Home',
            posts: posts
        });

    });



    
};