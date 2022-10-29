// Function to check if user is logged in to view their content. If not logged in, redirect to login page

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
