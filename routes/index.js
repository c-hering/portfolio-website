var projectsJSON = require('../projects.json');
var pagesJSON = require('../pages.json');
var scripts = require('../public/javascript/scripts.js');

exports.template = function(req,res){
  var page = 'partials/home';
  var pages = pages;
  var style = "color:#4CD4B0;border-color:#4CD4B0;";
  res.render('template', {
    title: "CMH",
    billboard: "CMH",
    page:page,
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
  var style = "color:#90C695;border-color:#90C695;";
  res.render('projects', {
    title: 'CMH',
    projects:obj,
    colorstyle: style
  });
};

exports.about = function(req,res){
  var style = "color:#BF55EC;border-color:#BF55EC;";
  res.render('about', {
    title: 'CMH',
    colorstyle: style
  });
};

exports.contact = function(req,res){
  var style = "color:#BF55EC;border-color:#BF55EC;";
  res.render('contact', {
    title: 'CMH',
    colorstyle: style
  });
};

exports.notFound = function(req, res){
  res.send("Error 404 Page Not Found");
};
