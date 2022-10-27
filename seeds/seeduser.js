const { User } = require('../models');

const userSeeds = [
    {
        username: 'Murphydog',
        password: 'password'
    },
    {
        username: 'Salemcat',
        password: 'password'

    },
    {
        username: 'HersheyRabbit',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(userSeeds)

module.exports = seedUsers;