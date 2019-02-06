const db = require('../start/connection');

exports.index = (req, res) => {
    db.posts.findAll({
        include: [
            {
                model: db.users,
                attributes: [ "id", "name" ]
            },
            {
                model: db.comments,
                attributes: [ "id" ,"text", "createdAt" ], 
                include: {
                    model: db.users,
                    attributes: [ "id", "name" ]
                }
            }
        ]
    }).then(posts => {
        res.json(posts)
    })
}
exports.show = (req, res) => {
    const id = req.params.id;
    db.posts.findAll({
        where: {
            "id" : id
        },
        include: [
            {
                model: db.users,
                attributes: [ "id", "name" ]
            },
            {
                model: db.comments,
                attributes: [ "id" ,"text", "createdAt" ], 
                include: {
                    model: db.users,
                    attributes: [ "id", "name" ]
                }
            }
        ]
    }).then(posts => {
        res.json(posts)
    })
}
exports.store = (req, res) => {
    const userId = req.body.userId;
    const text = req.body.text;
    const createdAt = req.body.createdAt;
    const updatedAt = req.body.updatedAt;
    db.posts.create({
        "id": req.body.id,
        "userId": userId,
        "text": text,
        "createdAt" : createdAt,
        "updatedAt" : updatedAt
    }).then(post => {
        res.json(post)
    })
}
exports.update = (req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    db.posts.update({
        "text": text
    },{
        where: {
            "id" : id
        }
    }).then(post => {
        res.json(post)
    })
}
exports.destroy = (req, res) => {
    const id = req.params.id;
    db.posts.destroy({
        where : {
            "id" : id
        }
    }).then(post => {
        res.json(post)
    })
}