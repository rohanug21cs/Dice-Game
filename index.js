var randomNumber=Math.random();
randomNumber=randomNumber*6;
randomNumber=Math.floor(randomNumber)+1;
var randomImage="dice"+randomNumber+".png";
var randomDiceImage="images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);
if(randomNumber>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber<randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}