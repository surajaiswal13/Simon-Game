var gamePattern = []

// alert("Hi")
var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4)
  return randomNumber
}

var randomChosenColour = buttonColours[nextSequence()]

console.log(randomChosenColour)

gamePattern.push(randomChosenColour)

// console.log(gamePattern)

// $("div #" + randomChosenColour).css("background-color", "purple")
$("div #" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
console.log("yes")

switch(randomChosenColour) {

  case "red":
    var red = new Audio("sounds/red.mp3");
    red.play();
    break;

  case "green":
    var green = new Audio("sounds/green.mp3");
    green.play();
    break;

  case "blue":
    var blue = new Audio("sounds/blue.mp3");
    blue.play();
    break;

  case "yellow":
    var yellow = new Audio("sounds/yellow.mp3");
    yellow.play();
    break;


}
