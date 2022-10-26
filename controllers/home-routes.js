const router = require("express").Router();
const { Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET route to show all blog posts (TO SHOW: Post Tile, Date Created) - show blog posts without login status
router.get("/", async (req, res) => {
  try {
    const allPostData = await Post.findAll({
      attributes: ["id", "post_title", "post_content", "created_at"],
    });

    const posts = allPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

// GET route to show single blog post by ID (TO SHOW:  Post Title, Contents, Author, Date Created  + Option to add comment)
// Only show information if logged in
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("singlepost", { post, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

// QUESTION > TO enter a comment - IS THAT A ROUTE?

// redirect user to homepage once loggedin - and update session status as loggedin
// QUESTION SHOULD THE VIEW ACTUALLY CHANGE? COMMENTS?

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;

// router.get("/login", (req, res) => {
//   try {
//     if (req.session.logged_in) {
//       res.redirect("/");
//     } else {
//       res.render("login");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// module.exports = router;
