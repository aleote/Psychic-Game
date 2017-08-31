// this is my variables 
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//variable that holds the wins and losses
var wins = 0;
var losses = 0;
var guesses= 9;
var guessesLeft=9;
var alreadyGuessed= [];
var letterToGuess = null;
var userGuess = "";


// Randomly pick a letter from the array
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//start of the functions
//function for guessesLeft - this is
var updateGuessesLeft = function(){
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
};

//this function chooses a new letter once the previous one is guessed correctly
var updateletterToGuess = function(){
	letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// this shows in the html page what letters the user has already guessed 
var updateAlreadyGuessed = function(){
	document.querySelector("#alreadyGuessed").innerHTML = "What you have already guessed so far:" + alreadyGuessed.join(",");
};


//This is my recall of my functions - the reset of everything 

var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	alreadyGuessed = [];

	
	letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	updateGuessesLeft ();
	updateAlreadyGuessed();
};



// When key is pressed
document.onkeyup = function(event) {
	guessesLeft --;

// determines which key was pressed 
 userGuess = String.fromCharCode(event.keyCode).toLowerCase ();

	alreadyGuessed.push(userGuess);
	updateGuessesLeft();
	updateAlreadyGuessed();



//our if else statements begin here

if(guessesLeft > 0){
	if(userGuess == letterToGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins:" + wins;
		alert("mmmhmm, I think we have a psychic here!");
		reset ();
	}
}
else if (guessesLeft == 0){
	losses++;
	document.querySelector("#losses").innerHTML = "Losses:" + losses;
	alert("Should have seen that comming....get it?");
	reset();
	}

};











// // This logic determines the outcome of the game (win/loss), and increments the appropriate number
//       if ((userGuess === "h") || (userGuess === "k") || (userGuess === "n")) || ((userGuess === "q")) {

//         if ((userGuess === "h") && (computerGuess === "h")) {
//           wins++;
//         } else if ((userGuess === "r") && (computerGuess === "p")) {
//           losses++;
//         } else if ((userGuess === "s") && (computerGuess === "r")) {
//           losses++;
//         } else if ((userGuess === "s") && (computerGuess === "p")) {
//           wins++;
//         } else if ((userGuess === "p") && (computerGuess === "r")) {
//           wins++;
//         } else if ((userGuess === "p") && (computerGuess === "s")) {
//           losses++;
//         } else if (userGuess === computerGuess) {
//           ties++;
//         }

// // this links the html that shows up on my page with the data being inputed 
// var html =
//           "<p>Guess what letter I'm thinking of: " + playerGuess + "</p>" +
//           "<p> Wins: " + wins + "</p>" +
//           "<p>Losses: " + losses + "</p>" +
//           "<p>Amount of Guesses Left: " + guessesLeft + "</p>" +
//           "<p> Letters you have already guessed: " + alreadyGuessed  + "</p>";