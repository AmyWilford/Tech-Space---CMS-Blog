// Import Express and all API routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Establish api/endpoints for all api routes
router.use('/user', userRoutes);
router.use('/post', postRoutes)
router.use('/comment', commentRoutes)

module.exports = router;