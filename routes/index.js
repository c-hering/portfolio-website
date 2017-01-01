var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');
var scripts = require('../public/javascript/scripts.js');

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
    page:page,
    title: 'CMH'
    // projects:projects
  });
};

exports.jsonTest = function(req,res){
  var obj = JSON.stringify(projectsJSON);
  console.log(obj.projects[1]);
}

exports.about = function(req,res){
  var page = 'partials/projects';
  res.render('about', {
    page:page,
    title: 'CMH'
  })
}

exports.notFound = function(req, res){
  res.send("Error 404 Page Not Found");
};
