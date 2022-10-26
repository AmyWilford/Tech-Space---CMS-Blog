const router = require("express").Router();
const sequelize = require('../config/connection');
const { Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET route for my dashboard (TO SHOW: All MY blog posts i already wrote, and the option to add a new blog)
router.get("/", withAuth, async (req, res) => {
  try {
    console.log('this is a user id' + req.session.user_id);
    const userPostData = await Post.findAll({
        where: {
          user_id: req.session.user_id,
        },
      include: [
        {
          model: Comment,
        },
      ],
    });
    console.log(userPostData);
    const userPosts = userPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      userPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("problem");
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try{  
    
    const singlePost = await Post.findByPk(req.params.id);

    const post = singlePost.get({plain:true});

    res.render('singlepost', {
      ...post, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }

});

router.get('/newpost', (req, res) => {
  res.render('newpost')
})

module.exports = router;
