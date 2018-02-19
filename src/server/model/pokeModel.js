'use strict';

const db = require('mongoose');

const Schema = db.Schema;
const pokeModel = new Schema({
  name: String,
});

const Pokemon = module.exports = db.model('Pokemon', pokeModel);
