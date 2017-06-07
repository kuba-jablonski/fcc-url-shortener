const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
    let url = req.params.url;
    res.status(200).send({
        original: url,
        new: 2134
    });
})

app.listen(3000, () => {
    console.log('Server up on port 3000');
})