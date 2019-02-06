const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./start/routes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"msg": "Success"});
});
routes(app);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running')
})