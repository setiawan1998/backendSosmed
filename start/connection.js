'use strict'
const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_social_media', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../models/users.js')(sequelize, Sequelize);
db.posts = require('../models/posts.js')(sequelize, Sequelize);
db.comments = require('../models/comments')(sequelize, Sequelize);

db.comments.belongsTo(db.users);
db.comments.belongsTo(db.posts);

db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);

module.exports = db;