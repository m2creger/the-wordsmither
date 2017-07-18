
window.onload = function() {
	setScores();
	startGame.onclick = function () {
		console.log("set game called");
		setLetter();
		setCategories()
		startTimer();
	};

	newGame.onclick = function () {
		clearRound();
		setCategories();
	};
	modalClose.onclick = function() {
		howToPlayModal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == howToPlayModal) {
			howToPlayModal.style.display = "none";
		}
	}
	howToPlay.onclick = function() {
		howToPlayModal.style.display = "block";
	}
};
	

/****************** Global Variables ************************/

var category1;
var category2;
var category3;
var category4;
var category5;
var category6;

var timer = 0;
var seconds = 0;
var interval;
var gameCategories = [];

var seconds = 00;
var tens = 00;
var player1words = [];
var player2words = [];
var categories = ["Things You Store Items In","Tropical Locations","Game Terms","4-Letter Words","Medicine/Drugs","t.v. Shows","Famous Females","Things You're Allergic To","Musical Instruments","Countries","Athletes","Sandwiches","Offensive Words","Names Used in Songs","Pro Sports Teams","Languages","Appliances","Items in a Catalog","Things You See at the Zoo","Spices/Herbs","Kinds of Candy","Things That Have Stripes","Places in Europe","Articles of Clothing","Stones/Gems","Foreign Cities","Song Titles","Words Associated With Money","Street Names","Things That Use a Remote","Things That Have Wheels","Beers","Things That Grow","Sports Equipment","Things That Can Kill You","Movie Titles","sports", "U.S. cities", "vegetable", "a tool", "a zoo animal", "a fast food item", "an item found inside of a refrigerator", "a type of footwear", "a musical instrument", "something you would find in a garage", "item from a catalog", "a school supply item", "item you may find in an attic", "a kitchen appliance", "a type or item of clothing", "a type of drink or beverage"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "W"];

/************** index page variables *********/



var submit = document.getElementById("submitGame");
var timer = document.getElementById("timerDigits");
var startButton = document.getElementById('start'); 
var stopButton = document.getElementById('stop') 
var resetButton = document.getElementById('reset')
var appendTenths = document.getElementById("tens");
var secondsLabel = document.getElementById("seconds");
var startGame = document.getElementById('startGame');
var newGame = document.getElementById('reset');
var player1ScoreLabel = document.getElementById('score1');
var computerScoreLabel = document.getElementById('scoreComputer');
var howToPlayModal = document.getElementById("howToPlayModal");
var modalClose = document.getElementsByClassName("close")[0];
var howToPlay = document.getElementById("howToPlay");
/*********** Game Setup *************/


function setLetter() {
	var rand = Math.floor(Math.random() * 20);
	console.log(rand);
	var chosenLetter = letters[rand];
	
	localStorage.setItem('chosenLetter', JSON.stringify(chosenLetter));
	
	console.log(chosenLetter);
	var gameLetter = document.getElementById('gameLetter');
	gameLetter.innerHTML = chosenLetter;
};
function setCategories() {
	console.log("setting categories");
	var catLabels = document.getElementsByClassName("catLabels");
	console.log(catLabels.length);
	for (var i = 0; i < catLabels.length; i++) {
		var rand = Math.floor(Math.random() * categories.length);
		console.log("categories");
		var catLabel = catLabels.item(i);
		catLabel.innerHTML = categories[rand];
		var catObject = categories[rand];
		console.log("The cat label is " + catObject);
		gameCategories.push(catObject);
		
	}
	localStorage.setItem('categories', JSON.stringify(gameCategories));
	console.log(gameCategories);
	
};

function setScores() {
	console.log("setting scores");
	var retrievedCompScore = sessionStorage.getItem('computerScore');
	console.log("The retrieved computer score is " + retrievedCompScore);
	var retrievedPlayer1Score = sessionStorage.getItem('player1Score');
	console.log("The retrieved player 1 score is " + retrievedPlayer1Score);
	if (retrievedPlayer1Score == null || retrievedPlayer1Score == "null" || retrievedCompScore == NaN || retrievedCompScore =="NaN"){
      console.log("Setting scores");
      player1Score = 0;
      computerScore = 0;
    } else {
      computerScore = parseInt(retrievedCompScore);
      player1Score = parseInt(retrievedPlayer1Score);
    }
	console.log(player1Score);
	console.log(computerScore);
	computerScoreLabel.innerHTML = computerScore;
	player1ScoreLabel.innerHTML = player1Score;

};


/******** Timer ************/

function startTimer() {
	timer = setInterval(function() {
		seconds++;
		setTime();
		console.log(seconds);
		if (seconds === 60) {
			clearInterval(timer);
			updateResultsPage();
			
		}
	}, 1000);
};

function setTime() {
	secondsLabel.innerHTML = seconds;
};


/************** Submit Game Results ****************/

function updateResultsPage() {
	var category1 = document.getElementById("category1Text");
	var category2 = document.getElementById("category2Text"); 
	var category3 = document.getElementById("category3Text"); 
	var category4 = document.getElementById("category4Text"); 
	var category5 = document.getElementById("category5Text"); 
	var category6 = document.getElementById("category6Text");

	// Check if user entered anything if not
	
	if (category1.value.length === 0) {
		console.log("im here");

		localStorage.setItem('category1input', JSON.stringify("no value"));
	} else {

		localStorage.setItem('category1input', JSON.stringify(category1.value));
	}

	if (category2.value.length === 0) {

		localStorage.setItem('category2input', JSON.stringify("no value"));

	} else {

		localStorage.setItem('category2input', JSON.stringify(category2.value));

	}

	if (category3.value.length === 0) {

		localStorage.setItem('category3input', JSON.stringify("no value"));
	} else {

		localStorage.setItem('category3input', JSON.stringify(category3.value));
	}
	if (category4.value.length === 0) {

		localStorage.setItem('category4input', JSON.stringify("no value"));

	} else {

		localStorage.setItem('category4input', JSON.stringify(category4.value));
	}
	if (category5.value.length === 0) {

		localStorage.setItem('category5input', JSON.stringify("no value"));

	} else {

		localStorage.setItem('category5input', JSON.stringify(category5.value));
	}
	if (category6.value.length === 0) {

		localStorage.setItem('category6input', JSON.stringify("no value"));
		
	} else {

		localStorage.setItem('category6input', JSON.stringify(category6.value));
	}

	submitGameResults();
};

function submitGameResults() {

	window.location = 'results.html';
};

function clearRound() {
	clearInterval(interval);
	secondsLabel.innerHTML = 0;
};




