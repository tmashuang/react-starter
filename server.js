const compression = require('compression');
const express = require('express');
const app = express();

app.use(compress());

app.use(express.static(__dirname ) + '/' ));
 
 app.listen(process.env.PORT || 8080);