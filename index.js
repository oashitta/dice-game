// random image for Dice 1
let randomNumber1 = Math.floor(Math.random() * 6 ) +1; //provides random number between 1 and 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

let randomImageSource1 = "images/" + randomDiceImage; //to change the source of the image.

let image1 = document.querySelectorAll("img")[0]; // to change the attribute of the element.

image1.setAttribute("src", randomImageSource1); //replacing the exising source with the random image source. 

// random image for Dice 2

let randomNumber2 = Math.floor(Math.random() * 6) +1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // combined lines 4 and 6 into one to make the code shorter. 

// let image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomImageSource2); OR as written below. 

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "The Winner is Player 1! 🏆 ";
}

else if (randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = "The Winner is Player 2! 🏆 ";
}

else {
    document.querySelector("h1").innerHTML = "It's a tie. Try Again! 🤪 "
}




