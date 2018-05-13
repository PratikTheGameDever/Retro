const path = require('path');
const express = require('express')
const app = express()

if(process.env.NODE_ENV !== 'production'){
    process.env.NODE_ENV = 'development';
    process.env.PORT = '3000';
}

const port = process.env.PORT || 8080;

var data = {};
var teams = [];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/add', (req, res) => {

    if(data[req.query.team] === undefined){
      data[req.query.team] = [];
    }

    switch(req.query.type){
        case "good" : data[req.query.team].push({type: 'good', content: req.query.content}); break;
        case "bad" : data[req.query.team].push({type: 'bad', content: req.query.content}); break;
        case "happiness" : data[req.query.team].push({type: 'happiness', content: req.query.content}); break;
    }

    res.send('added');
});

app.get('/getAll', (req, res) => {
    res.send(JSON.stringify(data[req.query.team]));
});

app.get('/addNewTeam', function(req, res){
  if(teams[req.query.name] === undefined){
    teams[req.query.name] = [];
    res.send('team added');
  }else{
    res.send('team already exists');
  }
});

app.get('/getTeams', function(req, res){
  res.send(JSON.stringify(Object.keys(teams)));
});

app.get('/showAll', (req, res) => {
  res.send(JSON.stringify(data));
});

app.get('/clearAll', (req, res) => {
  data = {};
  teams = {};
  res.send('data cleaned');
});

app.get('/clearTeamData', (req, res) => {
  delete data[req.query.name];
  delete teams[req.query.name];
  res.send('team cleared');
});

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => console.log(`app listening on port ${port}`));