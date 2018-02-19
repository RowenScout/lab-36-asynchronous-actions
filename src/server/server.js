'use strict';

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require('express');
const server = module.exports = server();
const routes = require('./routes.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mConfig = {useMongoClient:true};
const mURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokemon'

mongoose.connect(mURI, mConfig);

 server.use(cors());
 server.use(require('./routes.js'));

module.exports = {
  start: (port)=> {
    server.listen(port, ()=>{
      console.log('server is running on ' + port);
    });
  },
  stop: ()=>{
    server.close(()=>{
      console.log('Server going down.');
    });
  },
};
