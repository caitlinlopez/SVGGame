function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

var gc = 0;
var ghostText = document.getElementById("gc");

var health = 50;
var hText = document.getElementById("health");

var start = Date.now();
var timeText = document.getElementById("time");
var healthText = document.getElementById("end");

document.addEventListener("keydown", function(r){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var g = document.getElementById("g");
  var ghostX = Number(g.getAttribute("x"));
  var ghostY = Number(g.getAttribute("y"));
  var ghostWidth = 60;
  var ghostHeight = 60;

  var p = document.getElementById("p");
  var foodX = Number(p.getAttribute("x"));
  var foodY = Number(p.getAttribute("y"));
  var foodWidth = 42;
  var foodHeight = 60;

  //left
  if(r.keyCode == 37){
    positionX = positionX - 15;
    h.setAttribute("x", positionX);
    health = health - 1;
  }
  //right
  else if(r.keyCode == 39){
    positionX = positionX + 15;
    h.setAttribute("x", positionX);
    health = health - 1;
  }
  //up
  if(r.keyCode == 38){
    positionY = positionY - 15;
    h.setAttribute("y", positionY);
    health = health - 1;
  }
  //down
  else if(r.keyCode == 40){
    positionY = positionY + 15;
    h.setAttribute("y", positionY);
    health = health - 1;
  }

  if (positionX > ghostX && positionX < ghostX + ghostWidth){
    if(positionY > ghostY && positionY < ghostY + ghostHeight){
      var newP = randomNumber(40,810);
      g.setAttribute("x", newP);
      g.setAttribute("y", 0);
      gc += 1;
    }
    }
  if (positionX > foodX && positionX < foodX + foodWidth){
    if(positionY > foodY && positionY < foodY + foodHeight){
      var newPx = randomNumber(40,810);
      var newPy = randomNumber(40,500);
      p.setAttribute("x", newPx);
      p.setAttribute("y", newPy);
      health = health + 11;
      console.log("hello")
    }
    }

    if(gc == 5){
      var stop = Date.now();
      var duration = stop - start;
      var seconds = duration / 1000;
      var time = Math.floor(seconds);

      document.getElementById("screen").pauseAnimations()
      timeText.textContent ="You caught five ghosts in " + time + " seconds";

      document.getElementById("box").setAttribute("fill-opacity", "1");
      document.getElementById("time").setAttribute("fill-opacity", "1");
      document.getElementById("gc").setAttribute("fill-opacity", "0");
    }
    else if(health == 0){
      document.getElementById("screen").pauseAnimations()

      document.getElementById("box").setAttribute("fill-opacity", "1");
      document.getElementById("end").setAttribute("fill-opacity", "1");
      document.getElementById("health").setAttribute("fill-opacity", "0");
    }

  ghostText.textContent ="GHOSTS CAUGHT: " + gc;
  hText.textContent ="HEALTH: " + health;
});

document.addEventListener("keydown", function(r){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var g = document.getElementById("gg");
  var ghostX = Number(g.getAttribute("x"));
  var ghostY = Number(g.getAttribute("y"));
  var ghostWidth = 60;
  var ghostHeight = 60;

  var p = document.getElementById("pp");
  var foodX = Number(p.getAttribute("x"));
  var foodY = Number(p.getAttribute("y"));
  var foodWidth = 42;
  var foodHeight = 60;

  if (positionX > ghostX && positionX < ghostX + ghostWidth){
    if(positionY > ghostY && positionY < ghostY + ghostHeight){
      var newP = randomNumber(40,810);
      g.setAttribute("x", newP);
      g.setAttribute("y", 0);
      gc += 1;
    }
    }

  if (positionX > foodX && positionX < foodX + foodWidth){
    if(positionY > foodY && positionY < foodY + foodHeight){
      var newPx = randomNumber(40,810);
      var newPy = randomNumber(40,500);
      p.setAttribute("x", newPx);
      p.setAttribute("y", newPy);
      health = health + 11;
    }
    }

  hText.textContent ="HEALTH: " + health;
});

document.addEventListener("keydown", function(r){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var p = document.getElementById("ppp");
  var foodX = Number(p.getAttribute("x"));
  var foodY = Number(p.getAttribute("y"));
  var foodWidth = 42;
  var foodHeight = 60;

  if (positionX > foodX && positionX < foodX + foodWidth){
    if(positionY > foodY && positionY < foodY + foodHeight){
      var newPx = randomNumber(40,810);
      var newPy = randomNumber(40,500);
      p.setAttribute("x", newPx);
      p.setAttribute("y", newPy);
      health = health + 11;
    }
    }

  hText.textContent ="HEALTH: " + health;
});

document.addEventListener("keydown", function(r){
  var h = document.getElementById("h");
  var positionX = Number(h.getAttribute("x"));
  var positionY = Number(h.getAttribute("y"));

  var p = document.getElementById("pppp");
  var foodX = Number(p.getAttribute("x"));
  var foodY = Number(p.getAttribute("y"));
  var foodWidth = 42;
  var foodHeight = 60;

  if (positionX > foodX && positionX < foodX + foodWidth){
    if(positionY > foodY && positionY < foodY + foodHeight){
      var newPx = randomNumber(40,810);
      var newPy = randomNumber(40,500);
      p.setAttribute("x", newPx);
      p.setAttribute("y", newPy);
      health = health + 11;
    }
    }

  hText.textContent ="HEALTH: " + health;
});
