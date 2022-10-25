const path = require('path');
const express = require('express');
const session = require('express-session');
const exphabs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers'); //to add

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphabs.create({ helpers }); //to add

const sess = {
    secret: 'secret',
    cookie: {
        maxAge: 300000, 
        httpOnly: true, 
        secure: false,
        sameSite: 'strict'
    }, 
    resave: false, 
    saveUninitialize: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

/*
WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
*/