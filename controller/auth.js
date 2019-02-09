const db = require('../start/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const email = req.body.email;
    db.users.find({
        where: {
            email: email
        }
    }).then(user => {
        const pass = req.body.password;
        const password = bcrypt.compareSync(pass, user.password);
        if(password){
            const token = jwt.sign(
                {
                id: user.email,
                role: user.password
                },
                'secret_key',
                { expiresIn: '1d' }
            );
            res.json({"token": token})
        }else{
            res.json({"status": "Password Wrong"})
        }
    })
}