const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        post_content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'user_id'
            },
        },
    // QUESTION > do we link comments here too?
    },
    {
        sequelize,
        timestamps: true,
        createdAt: true, //is this right?
        updatedAt: true, // is this right?
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post