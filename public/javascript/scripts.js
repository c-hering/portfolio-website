function checkCopyRightOverlap(){
  var copyright = document.getElementById('footer-copyright');
  var text = document.getElementById('about-me-text');
  if(intersect(getPositions(copyright), getPositions(text))){
    copyright.style.opacity = 0;
  }else{
    copyright.style.opacity = 1;
  }
}

function getPositions(elem) {
   var clientRect = elem.getBoundingClientRect();
   return [
       [ clientRect.left, clientRect.left + clientRect.width ],
       [ clientRect.top, clientRect.top + clientRect.height ]
   ];
}

function intersect(elemA, elemB) {
   var posA = getPositions(elemA),
       posB = getPositions(elemB),
       isOverlap = false;

   if (posA[0][0] < posB[0][1] && posA[0][1] > posB[0][0] &&
       posA[1][0] < posB[1][1] && posA[1][1] > posB[1][0])
       isOverlap = true;

   return isOverlap;
}
