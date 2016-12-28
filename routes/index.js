var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');

exports.template = function(req, res){
  var page = 'partials/home';
  var pages = pages;
  res.render('template', {
    title: "CMH",
    billboard: "CMH",
    page:page
  });
};

exports.projects = function(req, res){
  var projects = projectsJSON.projects;
  var page = 'partials/projects';
  res.render('projects', {
    title:"Projects",
    projects:projects,
    page:page
  });
};

exports.menuBar = function(req, res){
  var pages = pagesJSON.pages;
  res.send(console.log(pages));
  res.render('header', {
    pages: pages
  });
};

exports.notFound = function(req, res){
  res.send("Error 404 Page Not Found");
};
