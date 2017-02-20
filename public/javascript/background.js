function setBackground(page){
  var elm = document.getElementById("body");
  switch(page){
    case "home":
      elm.style.background = "none";
      elm.style.backgroundImage = "url('../images/seattle.jpg')";
      elm.style.backgroundSize = "cover";
      elm.style.backgroundPosition = "top";
      elm.style.backgroundRepeat = "no-repeat";
      elm.style.backgroundAttachment = "fixed";
      break;
    case "projects":
      elm.style.background = "#462446";
      break;
    case "about":
      elm.style.background = "#47B39D";
      break;
    case "contact":
      elm.style.background = "#3B3C3D";
      break;
  }
}
