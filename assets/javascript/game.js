/////There will be four crystals displayed as buttons on the page- variables - that store a random number from 1 to 12 
$(document).ready(function() {

var crystal1, crystal2, crystal3, crystal4; 
var wins = 0;
var losses = 0;
// random computer number between 19-120
var randomComputerNumber;
var userTally;

Math.floor(Math.random() * 12);


// user clicks a crystal and score changes depending on the value of the crystal - on key up 
// create variable computerPick equal to a random number between 19 - 120. 
// compare userScore to computerPick if user score is not equal to computer pick -- variable value is added to the userScore, and continue 


// Goal Score - the player will be shown a random number at the start of the game.

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.


//When they do click one, update the player's score counter.



//The player wins if their total score matches the random number from the beginning of the game.



//The player loses if their score goes above the random number.
////  else if userScore is greater than the computerPick, loss++ and restart  game. 

//The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.