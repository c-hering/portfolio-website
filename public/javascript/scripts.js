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
}
