const os = require('os');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

let counter = 0;

app.get('/', async(req, res) => {
    counter++;
    res.render('index', { 'counter': counter, 'hostname': os.hostname });
});

app.listen(8080, () => {
    console.log('Listening on 127.0.0.1:8080');
});