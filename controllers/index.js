const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes'); //route where you see homepage and blog posts > presented with existing blogs wtih post title and date created
const dashboardRoutes = require('./dashboard-routes'); //route where you 

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

