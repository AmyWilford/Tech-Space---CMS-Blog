const router = require("express").Router();
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
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res
        .status(404)
        .json({ message: "Invalid Request: Could not locate post ID" });
    }

    const post = postData.get({ plain: true });
    console.log("this is a post"+post);
    res.render("edit-post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("Could not locate post by ID");
    // res.redirect("login");
    res.status(500).json(err);
  }
});

module.exports = router;
