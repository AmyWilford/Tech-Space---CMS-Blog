const router = require("express").Router();
const { Comment } = require("../../Moxdels");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("this is connecting ===========");
  console.log(req.body);
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
