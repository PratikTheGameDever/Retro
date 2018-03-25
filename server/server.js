const express = require('express')
const app = express()

var data = [];

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/add', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept');

    console.log(req.query);
    switch(req.query.type){
        case "good" : data.push({type: 'good', content: req.query.content}); break;
        case "bad" : data.push({type: 'bad', content: req.query.content}); break;
        case "happiness" : data.push({type: 'happiness', content: req.query.content}); break;
    }
});

app.get('/getAll', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept');
 
    res.send(JSON.stringify(data));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))