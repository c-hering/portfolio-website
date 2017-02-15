// function changeImage(){
//   var images = ["images/blackandwhite.png",
//                 "images/snatcheddaily.png",
//                 "images/team1389.png",
//                 "images/githubacc.png",
//                 "images/isolated.png"];
//     $(this).attr('src', images[i]);
//   }
// }

function getPositions(elm) {
   var clientRect = elm.getClientRects();
   return [
       [ clientRect.left, clientRect.left + clientRect.width ],
       [ clientRect.top, clientRect.top + clientRect.height ]
   ];
}

function intersect(elmA, elmB) {
   var posA = getPositions(elmA),
       posB = getPositions(elmB),
       isOverlap = false;

   if (posA[0][0] < posB[0][1] && posA[0][1] > posB[0][0] &&
       posA[1][0] < posB[1][1] && posA[1][1] > posB[1][0])
       isOverlap = true;

   return isOverlap;
}
