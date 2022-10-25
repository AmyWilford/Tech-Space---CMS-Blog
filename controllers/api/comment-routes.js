const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require("../utils/auth");


router.post('/comment', withAuth, async (req, res) => {
    try{
        const newComment = await Comment.create({...req.body, user_id: req.session.user_id});
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
} )