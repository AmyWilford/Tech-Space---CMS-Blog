const router = require("express").Router();
const { Post, Comment } = require('../models')

// GET route to show all blog posts (TO SHOW: Post Tile, Date Created)
router.get('/', async (req, res)=>{
    try{
        const allPostData = await Post.findAll()
        const posts = allPostData.map((post)=> 
            post.get({plain: true})
        );
        res.render()
    } catch(err){
        console.log(err);
        res.status(404).json(err);
    }
});

// GET route to show single blog post by ID (TO SHOW:  Post Title, Contents, Author, Date Created  + Option to add comment)
// QUESTION > how to enter a comment?
router.get('/post/:id', async (req, res) =>{
    try {

    }catch (err){
        console.log(err);
        res.status(404).json(err);
    }
})

// =============================
// HOW - is this a different route? How?
// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created