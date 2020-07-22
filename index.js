var randomNumber1 = Math.floor((Math.random()*6) + 1);
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor((Math.random()*6) + 1);
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

var title = "";

if (randomNumber1 > randomNumber2) {
  title = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title = "Player 2 Wins!";
} else {
  title = "Draw!";
}

document.querySelector("h1").textContent = title;
