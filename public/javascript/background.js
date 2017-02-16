function setBackground(page){
  var elm = document.getElementById("body");
  switch(page){
    case "home":
      elm.style.background = "none";
      elm.style.backgroundImage = "url('../images/seattle.jpg')";

    case "projects":
      elm.style.background = "#B05F6D";

    case "about":
      elm.style.background = "#EB6B56";

  }
}
