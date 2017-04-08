var randomWordArray = ["black", "candy", "time", "round", "white", "after", "pencil"]; //array of words to choose from.
var randomWord = randomWordArray[Math.floor(Math.random() *randomWordArray.length)]; //computer chooses word from first array.
var x;
var count = 0;
var answerArray = [];//Empty array to store guesses from player.

function startGame(){ //This function creates the empty spaces for the secret word at the start of the game. 
	for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";//The number of the letters from the secret word matches the number of empty spaces represented by the underscores.
	}

	x = answerArray.join(" ");//The joing properthy puts the letters together in a new string
	document.getElementById("answer").innerHTML = x;
} 
function Letter(){
	var letter = document.getElementById("letter").value;//we collect the player's guess letter from the html input element

	if (letter.length > 0){//here we check that we have a guess
		for (var i = 0; i < randomWord.length; i++){
			if (randomWord[i] === letter){//here, if the random word contains a letter that the player typed in
				answerArray[i] = letter;//we assign it to the empty space represented by the underscore
			}
		}
		count++;//this is where we count the number of times it takes to guess the secret word
		document.getElementById("counter").innerHTML = "Your number of guesses: " + count;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
	}
	if(count>5){
		document.getElementById("start").innerHTML = "Sorry, you ran out of guesses!";
	}
}