var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');
var scripts = require('../public/javascript/scripts.js');

exports.template = function(req,res){
  var page = 'partials/home';
  var whatpage = "home";
  var style = "color:#4CD4B0;border-color:#4CD4B0;";
  res.render('template', {
    title: "CMH",
    billboard: "CMH",
    page: page,
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.snow = function(req,res){
  var d = new Date();
  var m = d.Month();
  if(m == 11 || m == 12 || m == 1){
    //activeate snow effect
  }
}

exports.projects = function(req, res){
  var obj = projectsJSON.projects;
  var page = 'partials/projects';
  var whatpage = "projects";
  var style = "color:#B05F6D;border-color:#B05F6D;";
  res.render('projects', {
    title: 'CMH',
    projects: obj,
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.about = function(req,res){
  var style = "color:#FFC153;border-color:#FFC153;";
  var whatpage = "about";
  res.render('about', {
    title: 'CMH',
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.contact = function(req,res){
  var style = "color:#BF4A67;border-color:#BF4A67;";
  var whatpage = "contact";
  res.render('contact', {
    title: 'CMH',
    whatpage: whatpage,
    colorstyle: style
  });
};

exports.notFound = function(req, res){
  res.send("Error 404 Page Not Found");
};
