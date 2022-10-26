const { User } = require('../models');

const userSeeds = [
    {
        username: 'Murphy Dog',
        password: 'qwertyu'
    },
    {
        username: 'Salem Cat',
        password: 'mnbvcxza'

    },
    {
        username: 'Hershey Rabbit',
        password: 'poiuytre'
    }
]

const seedUsers = () => User.bulkCreate(userSeeds)

module.exports = seedUsers;