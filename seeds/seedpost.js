const { Post } = require('../models');

const postSeeds = [
    {
        post_title: 'Test 1',
        post_content: 'lots of stuff',
        user_id: 1

    },
    {
        post_title: 'Test 2',
        post_content: 'Less of stuff',
        user_id: 2
    },
    {
        post_title: 'Test 3',
        post_content: 'nothing left to say',
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postSeeds)

module.exports = seedPosts;