var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static('public/'));

app.get('/', routes.template);
app.get('/projects', routes.projects);
app.get('*', routes.notFound)

app.listen(3000, function(){
  console.log('App runnning on localhost:3000 \n^C on close');
});
