var c = document.getElementById("h");
var positionX = 250;
var positionY = 20;

document.addEventListener("keydown", function(r){
  //left
  if(r.keyCode == 37){
    positionX = positionX - 15;
    c.setAttribute("x", positionX);
  }
  //right
  else if(r.keyCode == 39){
    positionX = positionX + 15;
    c.setAttribute("x", positionX);
  }
  //up
  else if(r.keyCode == 38){
    positionY = positionY - 15;
    c.setAttribute("y", positionY);
  }
  //down
  else if(r.keyCode == 40){
    positionY = positionY + 15;
    c.setAttribute("y", positionY);
  }
});
