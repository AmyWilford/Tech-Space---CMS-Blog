const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes'); //route where you see homepage and blog posts > presented with existing blogs wtih post title and date created
const dashboardRoutes = require('./dashboard-routes'); //route where you 
const commentRoutes = require('./comment-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

// route to click on blog post - see all information and option to leave a comment