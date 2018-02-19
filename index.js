require('dotenv').config();

require('./src/server/server.js').start(process.env.PORT || 3000);
