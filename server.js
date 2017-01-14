const express           = require('express');
const bodyParser        = require('body-parser');
const webpackMiddleWare = require('./webpackMiddleWare/config.js');
const app               = express();

const root = `${__dirname}/src/client/public`;

app.set('port', 3000);

webpackMiddleWare(app); 

app.use(express.static(root)); 

app.listen(app.get('port'), () =>{
  console.log(`listening on port: ${app.get('port')}`);
});
