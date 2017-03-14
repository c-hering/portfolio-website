var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');
var scripts = require('../public/javascript/scripts.js');

exports.template = function(req,res){
  var page = 'partials/home';
  var whatpage = "home";
  var obj = projectsJSON.projects;
  var style = "color:#4CD4B0;border-color:#4CD4B0;";
  // var style = "color:black;border-color:black;";
  res.render('template', {
    title: "CMH",
    billboard: "CMH",
    page: page,
    whatpage: whatpage,
    projects: obj,
    colorstyle: style
  });
};

exports.projects = function(req, res){
  var obj = projectsJSON.projects;
  var page = 'partials/projects';
  var whatpage = "projects";
  // var style = "color:#B05F6D;border-color:#B05F6D;";
  var style = "color:black;border-color:black;";
  res.render('projects', {
    title: 'CMH',
    projects: obj,
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.about = function(req,res){
  // var style = "color:#FFC153;border-color:#FFC153;";
  var style = "color:black;border-color:black;";
  var whatpage = "about";
  res.render('about', {
    title: 'CMH',
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.contact = function(req,res){
  // var style = "color:#BF4A67;border-color:#BF4A67;";
  var style = "color:black;border-color:black;";
  var whatpage = "contact";
  res.render('contact', {
    title: 'CMH',
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.notFound = function(req, res){
  var style = "color:black;border-color:black;";
  res.render('404',{
    text: 'Error 404',
    title: 'CMH',
    colorstyle:style
  });
};
