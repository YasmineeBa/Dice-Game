//Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. 

// querySelector : return the first matching element as a single element
// querySelectorAll : returns all matching elements as a Nodelist


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() *6)  + 1;
//Test it out in the console to make sure it works as expected.
//console.log(randomNumber1);


var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


//image2
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";

}else if (randomNumber1< randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}