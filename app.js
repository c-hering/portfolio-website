var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static('public/'));

app.get('/projects', routes.projects);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/', routes.template);
app.get('*', routes.notFound)

app.listen(process.env.PORT || 3000, function(){
  console.log('App runnning on localhost:3000 \n^C on close');
});
