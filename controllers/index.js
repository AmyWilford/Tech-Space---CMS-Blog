const router = require("express").Router();

// Import folders for required routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes"); 
const dashboardRoutes = require("./dashboard-routes"); 

// Establish endpoints for home, dashboard, and API routes
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
