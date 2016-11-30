function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

var gc = 0;
var ghostText = document.getElementById("gc");

document.addEventListener("keydown", function(r){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var g = document.getElementById("g");
  var ghostX = Number(g.getAttribute("x"));
  var ghostY = Number(g.getAttribute("y"));
  var ghostWidth = 60;
  var ghostHeight = 60;

  //left
  if(r.keyCode == 37){
    positionX = positionX - 15;
    h.setAttribute("x", positionX);
  }
  //right
  else if(r.keyCode == 39){
    positionX = positionX + 15;
    h.setAttribute("x", positionX);
  }
  //up
  if(r.keyCode == 38){
    positionY = positionY - 15;
    h.setAttribute("y", positionY);
  }
  //down
  else if(r.keyCode == 40){
    positionY = positionY + 15;
    h.setAttribute("y", positionY);
  }

  if (positionX > ghostX && positionX < ghostX + ghostWidth){
    if(positionY > ghostY && positionY < ghostY + ghostHeight){
      var newP = randomNumber(40,810);
      g.setAttribute("x", newP);
      g.setAttribute("y", 0);
      gc += 1;
    }
    }

  ghostText.textContent ="GHOSTS CAUGHT: " + gc;
});

document.addEventListener("keydown", function(rr){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var g = document.getElementById("gg");
  var ghostX = Number(g.getAttribute("x"));
  var ghostY = Number(g.getAttribute("y"));
  var ghostWidth = 60;
  var ghostHeight = 60;

  //left
  if(rr.keyCode == 37){
    positionX = positionX - 15;
    h.setAttribute("x", positionX);
  }
  //right
  else if(rr.keyCode == 39){
    positionX = positionX + 15;
    h.setAttribute("x", positionX);
  }
  //up
  if(rr.keyCode == 38){
    positionY = positionY - 15;
    h.setAttribute("y", positionY);
  }
  //down
  else if(rr.keyCode == 40){
    positionY = positionY + 15;
    h.setAttribute("y", positionY);
  }

  if (positionX > ghostX && positionX < ghostX + ghostWidth){
    if(positionY > ghostY && positionY < ghostY + ghostHeight){
      var newP = randomNumber(40,810);
      g.setAttribute("x", newP);
      g.setAttribute("y", 0);
      gc += 1;
    }
    }

  ghostText.textContent ="GHOSTS CAUGHT: " + gc;
});
