'use strict'
const Sequelize = require('sequelize');

const sequelize = new Sequelize('d60sp6reb60cpg', 'knmylgjxckjfmp', '7a31dc8e444fae16ddffa0e351460f23192d4f303717bb81c89c69258deb3af7', {
    host: 'ec2-54-235-77-0.compute-1.amazonaws.com',
    dialect: 'postgres',
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