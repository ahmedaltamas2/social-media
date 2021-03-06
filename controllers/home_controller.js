const { populate } = require('../models/post');
const Post = require('../models/post');
const User = require('../models/user');



module.exports.home = async function(req,res){
    //   console.log(req.cookies);


    // Post.find({}, function(err,posts){

        
    // });

    try{

        let posts = await Post.find({})
        .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
         populate: { path: 'user'}
    });
    
    let users = await User.find({});


    return res.render('home',{
        title: 'Social | Home',
        posts: posts,
        all_users: users
    });



    } catch(err){
        console.log('Error',err);
    }

   
};