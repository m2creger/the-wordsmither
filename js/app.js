window.addEventListener("load", function(getDictionaryData) {
	console.log("All resources finished loading!");
})
window.onload = function() {
	var seconds = 00;
	var tens = 00;
	var appendTenths = document.getElementById("tens");
	var appendSeconds = document.getElementById("seconds");
	var startButton = document.getElementById("startGameButton");
	var stopButton = document.getElementById("stopGameButton");
	var newRound = document.getElementById("startNewRound");
	var interval;
	startButton.onclick = function() {
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}
	stopButton.onclick = function() {
		clearInterval(interval);
	}
	newRound.onclick = function() {
		clearInterval(interval);
		tens = "00";
		seconds = "00";
		appendTenths.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	}

	function startTimer() {
		tens++;
		if (tens < 9) {
			appendTenths.innerHTML = "0" + tens;
 		}
 		if (tens > 9) {
 			appendTenths.innerHTML = tens;
 		}
 		if (tens > 99) {
 			console.log("seconds");
 			seconds++;
 			appendSeconds.innerHTML = "0" + seconds;
 			tens = 0;
 			appendTens.innerHTML = "0" + 0;
 		}
 		if (seconds > 9) {
 			appendSeconds.innerHTML = seconds;
 		}
	}
}
var responseData;
var player1words = [];
var player2words = [];
var categories = ["sports", "U.S. cities", "gemstone", "vegetable", "a tool", "a zoo animal", "a fast food item", "an item found inside of a refrigerator", "a type of footwear", "a musical instrument", "something you would find in a garage", "item from a catalog", "a school supply item", "item you may find in an attic", "a kitchen appliance", "a type or item of clothing", "a type of drink or beverage"];
var letters = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, W"];
var category1 = document.getElementById("category1Text");
var category2 = document.getElementById("category2Text");
var category3 = document.getElementById("category3Text");
var category4 = document.getElementById("category4Text");
var category5 = document.getElementById("category5Text");
var category6 = document.getElementById("category6Text");
var timer = document.getElementById("timerDigits");

function getDictionaryData() {
	//console.log(this.responseText);
	responseData = this.responseText;
	parseFromXMLString();
}

var newRequest = new XMLHttpRequest();
newRequest.addEventListener("load", getDictionaryData);
newRequest.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/lamb?key=28940578-e2cc-49d4-8802-751d4b2d1bb4");
newRequest.send();

function parseFromXMLString() {
	var newParser = new DOMParser();
	var data = newParser.parseFromString(responseData, "text/xml");
	console.log(data);
	var parsedData = data.getElementsByTagName("dt");
	var nodes = [];
	var text;
	for (var i = 0; i < parsedData.length; i++) {
		console.log(parsedData[i]);
		text = parsedData[i].childNodes[0].nodeValue;
		console.log(text);
		nodes.push(text);
	}
	console.log(nodes);
	return nodes;
	
}

function startTimer() {
	console.log("Timer started");
	var count = 0;
	


	if (count <= 60) {
		console.log("Timer")
		count++
		document.getElementById("startGameButton").innerHTML = count;
	}
}


