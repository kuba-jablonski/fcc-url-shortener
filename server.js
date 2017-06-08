const express = require('express');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Url} = require('./models/url');
const {parseUrl} = require('./helpers/parseUrl');

const host = 'localhost:3000/'

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
    let _id = new ObjectID;
    let originalUrl = parseUrl(req.params.url);
    let code = _id.toHexString().slice(-5);

    if (originalUrl === 'Invalid URL') {
        return res.send('URL is Invalid');
    }
    
    let url = new Url({_id, originalUrl, code});

    url.save().then((doc) => {
        res.send({
            originalUrl: doc.originalUrl,
            shortUrl: host + doc.code
        })
    }).catch((e) => res.send(e));
});

app.listen(3000, () => {
    console.log('Server up on port 3000');
})