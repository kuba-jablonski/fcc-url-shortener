const express = require('express');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Url} = require('./models/url');
const {parseUrl} = require('./helpers/parseUrl');

const port = process.env.PORT || 3000;
const host = 'jjurl.herokuapp.com/'

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
    let _id = new ObjectID;
    let originalUrl = parseUrl(req.params.url);
    let code = _id.toHexString().slice(-5);

    if (originalUrl === 'Invalid URL') {
        return res.send({
            error: 'Invalid URL'
        });
    }

    let url = new Url({_id, originalUrl, code});

    url.save().then((doc) => {
        res.send({
            originalUrl: doc.originalUrl,
            shortUrl: host + doc.code
        })
    }).catch((e) => {
        res.send('Oops! Something went wrong');
        console.log(e);
    });
});

app.get('/:redirect', (req, res) => {
    code = req.params.redirect;

    Url.findOne({code}).then((doc) => {
        res.redirect(doc.originalUrl);
    }).catch((e) => {
        res.status(400).send({
            error: 'URL not found'
        });
        console.log(e);
    });
});

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});