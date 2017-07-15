window.onload = function() {
	updateResultsPage();
};
function updateResultsPage() {

	localStorage.getItem('chosenLetter');
	var resultCategory = localStorage.getItem('categories')
	console.log(resultCategory);
	//console.log(resultCategory);
	//cat1input.innerText = category1.value;
	//submitGameResults();
};