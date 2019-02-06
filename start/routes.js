const controllerUsers = require('../controller/users');
const controllerPosts = require('../controller/posts');
const controllerComments = require('../controller/comments');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({"msg": "Success"});
    });

    app.get('/users', controllerUsers.index);
    app.get('/users/:id', controllerUsers.show);
    app.post('/users/', controllerUsers.store);
    app.patch('/users/:id', controllerUsers.update);
    app.delete('/users/:id', controllerUsers.destroy);

    app.get('/posts', controllerPosts.index);
    app.get('/posts/:id', controllerPosts.show);
    app.post('/posts/', controllerPosts.store);
    app.patch('/posts/:id', controllerPosts.update);
    app.delete('/posts/:id', controllerPosts.destroy);
    
    app.get('/comments', controllerComments.index);
    app.post('/comments', controllerComments.store);
};