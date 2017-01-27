<<<<<<< HEAD
var activeSubstitute = function(pageName){
  console.log('aksdl;fmakl');
=======
function loadJSON(df){
  var dataFile = df;
  return jQuery.getJSON(df);
}

function imageSlider(json){
  var images;
  for(var i = 0; i < json.length; i++){
    images.push(json[i].picture);
  }
  console.log(images);
>>>>>>> 3586e61f2fe8d0b8a8613336823d7d248e4cf5f2
}
