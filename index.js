const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./start/routes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(6000, () => {
    console.log('Server Running')
})