const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./start/routes');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"msg": "Success"});
});
routes(app);


app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('Server Running')
})