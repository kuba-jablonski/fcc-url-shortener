const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
    let originalUrl = req.params.url;
})

app.listen(3000, () => {
    console.log('Server up on port 3000');
})