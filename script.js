
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {

  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 1000);
}

var checkDead = setInterval(function () {

  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 50 && blockLeft > 0 && characterTop >= 195)
{
 
  block.style.animation = "none";
  alert("Game over. Score : " + Math.floor(counter / 100));
  counter = 0;
  block.style.animation = "block 3s infinite linear";
}
  else {
  counter++;
  document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
}
}, 10);

