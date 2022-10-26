const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// POST route to create a new blog post (TO ENTER: Title, contents, save - urlreplace with updated dashboard with new blog post)
router.post("/", withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newPost);
      return;
    } catch (err) {
      res.status(500).json(err);
    }
  });


// PUT route to update an existing blog post - url replace with updated dashboard with updated blog post
router.put("/:id", withAuth, async (req, res) => {
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
      return;
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// DELETE route to remove a blog post - urel replace with updated dashboard
router.delete("/:id", withAuth, async (req, res) => {
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
      return;
    } catch (err) {
      res.status(404).json(err);
    }
  });

  
  module.exports = router;