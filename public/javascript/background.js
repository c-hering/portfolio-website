function setBackground(page){
  var elm = document.getElementById("body");
  switch(page){
    case "home":
      elm.style.background = "none";
      elm.style.backgroundSize = "cover";
      elm.style.backgroundImage = "url('../images/seattle.jpg')";
      // elm.style.backgroundSize = "cover";
      elm.style.backgroundPosition = "top";
      // elm.style.backgroundRepeat = "repeat";
      elm.style.backgroundAttachment = "fixed";
      break;
    case "projects":
      elm.style.background = "#462446";
      elm.style.backgroundImage = "url('../images/90sback.jpg')";
      elm.style.backgroundSize = "600px auto";
      elm.style.backgroundPosition = "top";
      elm.style.backgroundRepeat = "repeat";
      elm.style.backgroundAttachment = "fixed";
      break;
    case "about":
      elm.style.background = "#47B39D";
      elm.style.backgroundImage = "url('../images/trianglesbackground.jpg')";
      elm.style.backgroundPosition = "top";
      elm.style.backgroundRepeat = "repeat";
      elm.style.backgroundAttachment = "fixed";
      break;
    case "contact":
      elm.style.background = "#3B3C3D";
      break;
  }
}
