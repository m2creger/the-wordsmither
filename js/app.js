window.addEventListener("load", function(getDictionaryData) {
	console.log("All resources finished loading!");
})
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

function getDictionaryData() {
	//console.log(this.responseText);
	responseData = this.responseText;
	parseFromXMLString();
}

var newRequest = new XMLHttpRequest();
newRequest.addEventListener("load", getDictionaryData);
newRequest.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/chicken?key=28940578-e2cc-49d4-8802-751d4b2d1bb4");
newRequest.send();

function parseFromXMLString() {
	var newParser = new DOMParser();
	var parsedData = newParser.parseFromString(responseData, "text/xml");
	console.log(parsedData);
}


