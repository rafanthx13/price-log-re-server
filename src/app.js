const app = require('express')();
const consign = require('consign');
const db = require('./db/connection.js');

// Security
const helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

app.db = db;

// a ordem faz diferença
// use verbose : true para debugar chamadas de arquivos do cosign
consign({ cwd: process.cwd() + '/src', verbose: false })
  .include('./config/middlewares.js')
  .then('./env/env.config.js')
  .then('./config/passport.js')
  .then('./config/swagger.js')
  .then('./errors')
  .then('./services')
  .then('./controller')
  .then('./routes')
  .into(app);

module.exports = app;
