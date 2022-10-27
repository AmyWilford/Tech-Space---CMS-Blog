const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// GET route for my dashboard (TO SHOW: All MY blog posts i already wrote, and the option to add a new blog)
router.get("/", withAuth, async (req, res) => {
  try {
    const userPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });
    console.log(userPostData);
    const userPosts = userPostData.map((post) => post.get({ plain: true }));
    console.log(userPosts);
    res.render("dashboard", {
      // layout: "dashboard",
      userPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("could not load posts");
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  console.log("arriving at new post");
  res.render("newpost", {
    // layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!singlePost) {
      res
        .status(404)
        .json({ message: "Invalid Request: Could not locate post ID" });
    }

    const post = postData.get({ plain: true });
    console.log(post);
    res.render("edit-post", {
      // layout: "dashboard",
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("Could not locate post by ID");
    res.redirect("login");
    // res.status(500).json(err);
  }
});

module.exports = router;
