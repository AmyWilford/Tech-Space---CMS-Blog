const seedUsers = require('./seeduser');
const seedPosts = require('./seedpost');
const seedComments = require('./seedcomment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();