const { Comment } = require('../models');

const commentSeeds = [
    {
        comment_content: 'something', 
        user_id: 1, 
        post_id: 1
    },
    {
        comment_content: 'else', 
        user_id: 2, 
        post_id: 2
    },
    {
        comment_content: 'nothing', 
        user_id: 1, 
        post_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentSeeds)

module.exports = seedComments;
