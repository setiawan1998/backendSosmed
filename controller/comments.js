const db = require('../start/connection');

exports.index = (req, res) => {
    db.comments.findAll({
        include: {
            model: db.users,
            attributes: [ 'id', 'name' ]
        }
    }).then(comment => {
        res.json(comment)
    })
}
exports.store = (req, res) => {
    const postId = req.body.postId;
    const userId = req.body.userId;
    const text = req.body.text;
    db.comments.create({
        "postId": postId,
        "userId": userId,
        "text": text
    }).then(comment => {
        res.json(comment)
    })
}