var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');
var scripts = require('../public/javascript/scripts.js');

exports.template = function(req,res){
  var page = 'partials/home';
  var pages = pages;
  res.render('template', {
    title: "CMH",
    billboard: "CMH",
    page:page
  });
};

exports.projects = function(req, res){
  var obj = projectsJSON.projects;
  var page = 'partials/projects';
  res.render('projects', {
    title: 'CMH',
    projects:obj
  });
};

exports.about = function(req,res){
  res.render('about', {
    title: 'CMH'
  });
};

exports.notFound = function(req, res){
  res.send("Error 404 Page Not Found");
};
