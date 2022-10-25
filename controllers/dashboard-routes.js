const router = require("express").Router();
const { Post, Comment } = require('../models')

// GET route for my dashboard (TO SHOW: All MY blog posts i already wrote, and the option to add a new blog)
router.get('/mydashboard', async (req, res)=> {
    try{

    }catch (err){
        res.status(404).json(err);
    }
})

// POST route to create a new blog post (TO ENTER: Title, contents, save - urlreplace with updated dashboard with new blog post)
router.post('/mydashboard', async (req, res)=>{
    try{

    }catch(err) {
        res.status(404).json(err);
    }
})

// PUT route to update an existing blog post - url replace with updated dashboard with updated blog post
router.put('/mydashboard/:id', async (req, res)=> {
    try{

    }catch (err) {
        res.status(404).json(err);
    }
});
// DELETE route to remove a blog post - urel replace with updated dashboard 
router.delete('/mydashboard/:id', async (req, res)=> {
    try{

    }catch (err) {
        res.status(404).json(err);
    }
});