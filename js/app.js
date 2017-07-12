window.addEventListener("load", function(newRequestListener) {
	console.log("All resources finished loading!");
})

var category1 = document.getElementById("category1Text");
var category2 = document.getElementById("category2Text");
var category3 = document.getElementById("category3Text");
var category4 = document.getElementById("category4Text");
var category5 = document.getElementById("category5Text");
var category6 = document.getElementById("category6Text");

function newRequestListener() {
	console.log(this.responseText);
}

var newRequest = new XMLHttpRequest();
newRequest.addEventListener("load", newRequestListener);
newRequest.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=28940578-e2cc-49d4-8802-751d4b2d1bb4");
newRequest.send();