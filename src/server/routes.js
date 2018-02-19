const express = require('express');
const app = module.exports = express.Router();
const path = require('path');
const jsonParser = require('body-parser').json();

const Pokemon = require(`${__dirname}/models/wizard.js`);

app.use(express.static(__dirname + '/../bundle/'));

app.post('/wizard', jsonParser, (req, res, next)=>{
  const newMon = new Pokemon(req.body);
  newMon.save()
  .then(data => res.send(data))
  .catch(error=>res.send(error));
});

app.get('/wizard', jsonParser, (req, res, next)=>{
  Pokemon.find(req.query || {})
  .then(data => res.send(data))
  .catch(error => res.send(error));
});

app.get('/wizard:id', jsonParser, (req, res, next)=>{
  Pokemon.findOne({_id: req.params.id})
  .then(pokemon => res.send(pokemon))
  .catch(err=>res.send(err));
});

app.put('/wizard:id', jsonParser, (req, res, next)=>{
  let query = {_id:req.params.id};
  let update = {name:req.body.name};
  Pokemon.findOneAndUpdate(query, update)
  .then(data => res.send(data))
  .catch(err => res.send(err));
});

app.delete('/wizard:id', jsonParser, (req, res, next)=>{
  Pokemon.findOneAndRemove({_id:req.params.id})
  .then(data=>res.send(data))
  .catch(err=>res.send(err));
});
