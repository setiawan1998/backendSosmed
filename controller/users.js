const db = require('../start/connection');
const bcrypt = require('bcrypt');
const axios = require('axios');

exports.index = (req, res) => {
    db.users.findAll({
        include: {
            model: db.posts,
            attributes: [ "id", "text", "createdAt" ],
            include: {
                model: db.comments,
                attributes: [ "id", "text", "createdAt" ],
                include: {
                    model: db.users,
                    attributes: [ "id", "name" ]
                }
            }
        }
    }).then(users => {
        // res.json(users)
        const data = 
        {
                "name" : "Hafid",
                "email": "hafidtoyib@gmail.com",
                "password": "password",
                "address": "Pekalongan",
                "phone": "085657578797",
                "website": "",
                "company": ""
        }
        axios.post('https://socialmedia-endpoint.herokuapp.com/users', data)
            .then(response => {
                res.json({"msg": "data"})
            })
    })
}
exports.show = (req, res) => {
    const id = req.params.id;
    db.users.find({
        where: {
            'id': id
        },
        include: {
            model: db.posts,
            attributes: [ "id", "text", "createdAt" ],
            include: {
                model: db.comments,
                attributes: [ "id", "text", "createdAt" ],
                include: {
                    model: db.users,
                    attributes: [ "id", "name" ]
                }
            }
        }
    }).then(users => {
        res.json(users);
    })
}
exports.friends = (req, res) => {
    const id = req.params.id;
    db.users.findAll({
        where: {
            'id': {
                $ne: id
            }
        },
        include: {
            model: db.posts,
            attributes: [ "id", "text", "createdAt" ],
            include: {
                model: db.comments,
                attributes: [ "id", "text", "createdAt" ],
                include: {
                    model: db.users,
                    attributes: [ "id", "name" ]
                }
            }
        }
    }).then(users => {
        res.json(users);
    })
}
exports.store = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
    const address = req.body.address;
    const phone = req.body.phone;
    const website = req.body.website;
    const company = req.body.company;

    db.users.create({
        "name" : name,
        "email": email,
        "password": password,
        "address": address,
        "phone": phone,
        "website": website,
        "company": company
    }).then(user => {
        res.json(user)
    })
}
exports.update = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
    const address = req.body.address;
    const phone = req.body.phone;
    const website = req.body.website;
    const company = req.body.company;

    db.users.update({
        "name" : name,
        "email": email,
        "password": password,
        "address": address,
        "phone": phone,
        "website": website,
        "company": company
    }, {
        where: {
            "id": id
        }
    }).then(user => {
        res.json(user)
    })
}
exports.destroy = (req, res) => {
    const id = req.params.id;
    db.users.destroy({
        where: {
            "id": id
        }
    }).then(user => {
        res.json(user)
    })
}