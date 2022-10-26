const router = require('express').Router();
const { Post, Comment } = require("../models");
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
      ],
    });
    const userPosts = userPostData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      userPosts,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
    res.redirect('login')
  }
});

// POST route to create a new blog post (TO ENTER: Title, contents, save - urlreplace with updated dashboard with new blog post)
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
    res.redirect("/dashboard");
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT route to update an existing blog post - url replace with updated dashboard with updated blog post
router.put("/post/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        post_id: req.params.post_id,
      },
    });
    if (!updatedPost) {
      res.status(404).json({ message: "Invalid ID. Could not update post" });
    }
    res.status(200).json(updatedPost);
    res.redirect("/post/:id");
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE route to remove a blog post - urel replace with updated dashboard
router.delete("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        post_id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "Could not locate blog post" });
    }
    res.status(200).json(postData);
    res.redirect("/dashboard");
    return;
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
