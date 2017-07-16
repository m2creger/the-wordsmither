window.onload = function() {
	updateChosenLetter();
	updateResultsPage();
	retrieveScores();
	var checkPlayedWord = document.querySelectorAll(".checkPlayedWord");
	
	for (var i = 0; i < checkPlayedWord.length; i++) {
		checkPlayedWord[i].onclick = function () {
			checkWordsClicked();
			defModal.style.display = "block";	
		}
	}
	submitScore.onclick = function() {
		submitScores();
	};	
	modalClose.onclick = function() {
		defModal.style.display = "none";
	}
	window.onclick = function(event) {
		if (event.target == defModal) {
			defModal.style.display = "none";
		}
	}
	
};

/**** Results page variables ********/
var oneInput;
var twoInput;
var threeInput;
var fourInput;
var fiveInput;
var sixInput;
var chosenLetter;

var player1Score = 0;
var computerScore = 0;
var computerResultsArray = [];
var resultCategory = [];
var categories = document.getElementsByClassName("categories");
var letter = document.getElementById('gameLetter');
var category1ResultLabel = document.getElementsByClassName("category1");
var category2ResultLabel = document.getElementsByClassName("category2");
var category3ResultLabel = document.getElementsByClassName("category3");
var category4ResultLabel = document.getElementsByClassName("category4");
var category5ResultLabel = document.getElementsByClassName("category5");
var category6ResultLabel = document.getElementsByClassName("category6");
var computerResults = document.getElementsByClassName("computerPlayedWord");
var cat1input = document.getElementById("playedWord1");
var cat2input = document.getElementById("playedWord2");
var cat3input = document.getElementById("playedWord3");
var cat4input = document.getElementById("playedWord4");
var cat5input = document.getElementById("playedWord5");
var cat6input = document.getElementById("playedWord6");
var player1AcceptedWords = document.getElementsByClassName('player1accept');
var computerAcceptedWords = document.getElementsByClassName('computerAccept');
var submitScore = document.getElementById('submitScores');
var modalClose = document.getElementsByClassName("close")[0];
var defModal = document.getElementById("definitionModal");

/********* Helper Functions ************/

function updateResultsPage() {

	var retrievedResultCategory = localStorage.getItem("categories");
	resultCategory = JSON.parse(retrievedResultCategory);
	var retrievedCat1 = localStorage.getItem('category1input');
	oneInput = JSON.parse(retrievedCat1);
	cat1input.innerHTML = oneInput;
	var retrievedCat2 = localStorage.getItem('category2input');
	twoInput = JSON.parse(retrievedCat2);
	cat2input.innerHTML = twoInput;
	var retrievedCat3 = localStorage.getItem('category3input');
	threeInput = JSON.parse(retrievedCat3);
	cat3input.innerHTML = threeInput;
	var retrievedCat4 = localStorage.getItem('category4input');
	fourInput = JSON.parse(retrievedCat4);
	cat4input.innerHTML = fourInput;
	var retrievedCat5 = localStorage.getItem('category5input');
	fiveInput = JSON.parse(retrievedCat4);
	cat5input.innerHTML = fiveInput;
	var retrievedCat6 = localStorage.getItem('category6input');
	sixInput = JSON.parse(retrievedCat6);
	cat6input.innerHTML = sixInput;

	console.log(resultCategory);
	setCategories();
	//console.log(resultCategory);
	//cat1input.innerText = category1.value;
	//submitGameResults();
};

function updateChosenLetter() {
	var retrievedRetrievedLetter = localStorage.getItem('chosenLetter');
	//chosenLetter = JSON.parse(chosenLetter);
	
	chosenLetter = JSON.parse(retrievedRetrievedLetter);
	letter.innerHTML = retrievedRetrievedLetter;
	console.log(chosenLetter);
	updateComputerResults();
};

function retrieveScores() {
	console.log("retrieving scores");
	var retrievedCompScore = sessionStorage.getItem('computerScore');
	console.log("The retrieved computer score is " + retrievedCompScore);
	var retrievedPlayer1Score = sessionStorage.getItem('player1Score');
	console.log("The retrieved player 1 score is " + retrievedPlayer1Score);
	if (retrievedPlayer1Score == null || retrievedPlayer1Score == "null" || retrievedPlayer1Score == NaN || retrievedPlayer1Score =="NaN"){
      console.log("Setting scores for player1");
      player1Score = 0;
    } else {
      player1Score = parseInt(retrievedPlayer1Score);
    }
    if (retrievedCompScore == null || retrievedCompScore == "null" || retrievedCompScore == NaN || retrievedCompScore =="NaN"){
 		computerScore = 0;
    } else {
      computerScore = parseInt(retrievedCompScore);
    }
    console.log("Retrieved player 1 Score is " + player1Score);
    console.log("retrieved computer score is " + computerScore);

}

function updateComputerResults() {
	switch (chosenLetter) {
		case "A":
			console.log("I'm Here A!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * aWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = aWords[rand];
			}
			break;
		case "B":
			console.log("I'm Here B!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * bWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = bWords[rand];
			}
			break;
		case "C":
			console.log("I'm Here C!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * cWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = cWords[rand];
			}
			break;
		case "D":
			console.log("I'm Here D!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * dWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = dWords[rand];
			}
			break;
		case "E":
			console.log("I'm Here E!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * eWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = eWords[rand];
			}
			break;
		case "F":
			console.log("I'm Here F!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * fWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = fWords[rand];
			}
			break;
		case "G":
			console.log("I'm Here G!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * gWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = gWords[rand];
			}
			break;
		case "H":
			console.log("I'm Here H!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * hWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = hWords[rand];
			}
			break;
		case "I":
			console.log("I'm Here I!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * iWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = iWords[rand];
			}
			break;
		case "J":
			console.log("I'm HereJ!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * jWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = jWords[rand];
			}
			break;
		case "K":
			console.log("I'm HereK!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * kWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = kWords[rand];
			}
			break;
		case "L":
			console.log("I'm HereL!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * lWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = lWords[rand];
			}
			break;
		case "M":
			console.log("I'm HereM!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * mWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = mWords[rand];
			}
			break;
		case "N":
			console.log("I'm HereN!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * nWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = nWords[rand];
			}
			break;
		case "O":
			console.log("I'm HereO!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * oWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = oWords[rand];
			}
			break;
		case "P":
			console.log("I'm HereP!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * pWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = pWords[rand];
			}
			break;
		case "R":
			console.log("I'm HereR!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * rWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = rWords[rand];
			}
			break;
		case "S":
			console.log("I'm HereS!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * sWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = sWords[rand];
			}
			break;
		case "T":
			console.log("I'm HereT!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * tWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = tWords[rand];
			}
			break;
		case "W":
			console.log("I'm HereW!!!!!");
			for (var i = 0; i < computerResults.length; i++) {
				var rand = Math.floor(Math.random() * wWords.length);
				var compResult = computerResults.item(i);
				compResult.innerHTML = wWords[rand];
			}
			break;
		default: 
			break;
	}
}

function submitScores() {
	for(var i = 0; i < player1AcceptedWords.length; i++) {
		if (player1AcceptedWords[i].checked) {
			console.log('checking scores');
			player1Score += 1;
		
		}
	}
	console.log(player1Score);
	for (var i = 0; i < computerAcceptedWords.length; i++) {
		if (computerAcceptedWords[i].checked) {
			console.log("checking scores");
			computerScore += 1;
	
		}
	}
	sessionStorage.setItem('player1Score', player1Score);
	sessionStorage.setItem('computerScore', computerScore);

	window.location = 'index.html';
}




function setCategories() {
	for (var i = 0; i < category1ResultLabel.length; i++) {
		var catResultLabel = category1ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[0];
	}
	for (var i = 0; i < category2ResultLabel.length; i++) {
		var catResultLabel = category2ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[1];
	}
	for (var i = 0; i < category3ResultLabel.length; i++) {
		var catResultLabel = category3ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[2];
	}
	for (var i = 0; i < category4ResultLabel.length; i++) {
		var catResultLabel = category4ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[3];
	}
	for (var i = 0; i < category5ResultLabel.length; i++) {
		var catResultLabel = category5ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[4];
	}
	for (var i = 0; i < category6ResultLabel.length; i++) {
		var catResultLabel = category6ResultLabel[i];
		catResultLabel.innerHTML = resultCategory[5];
	}

};

function checkWordsClicked() {
	console.log('hello');
	
};

/********* Dictionary.com API call ************/

/*
function getDictionaryData() {
	//console.log(this.responseText);
	responseData = this.responseText;
	parseFromXMLString();
};

var newRequest = new XMLHttpRequest();
newRequest.addEventListener("load", getDictionaryData);
newRequest.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/c?key=28940578-e2cc-49d4-8802-751d4b2d1bb4");
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
	
};

*/



/********** computer words ***************/

var aWords = ["atelostomia","atemoya","atemporal","aten","atenism","atenist","aterian","ates","atestine","ateuchi","ateuchus","atfalati","athabasca","athabascan","athalamous","athalline","athamantid","athamantin","athamaunte","athanasy","athanasia","athanasian","athanasianism","athanasianist","athanasies","athanor","athapascan","athapaskan","athar","atharvan","athbash","athecae","athecata","athecate","atheism","atheisms","atheist","atheistic","atheistical","atheistically","atheisticalness","atheisticness","atheists","atheize","atheizer","athel","athelia","atheling","athelings","athematic","athena","athenaea","athenaeum","athenaeums","athenee","atheneum","atheneums","athenian","athenianly","athenians","athenor","athens","atheology","atheological","atheologically","atheous","athericera","athericeran","athericerous","atherine","atherinidae","atheriogaea","atheriogaean","atheris","athermancy","athermanous","athermic","athermous","atherogenesis","atherogenic","atheroma","atheromas","atheromasia","atheromata","atheromatosis","atheromatous","atheroscleroses","atherosclerosis","atherosclerotic","atherosclerotically","atherosperma","atherurus","athetesis","atheticize","athetize","athetized","athetizing","athetoid","athetoids","athetosic","athetosis","athetotic","athymy","athymia","athymic","athing","athink","athyreosis","athyria","athyrid","athyridae","athyris","athyrium","athyroid","athyroidism","athyrosis","athirst","athlete","athletehood","athletes","athletic","athletical","athletically","athleticism","athletics","athletism","athletocracy","athlothete","athlothetes","athodyd","athodyds","athogen","athold","athonite","athort","athrepsia","athreptic","athrill","athrive","athrob","athrocyte","athrocytosis","athrogenic","athrong","athrough","athumia","athwart","athwarthawse","athwartship","athwartships","athwartwise","ati","atik","atikokania","atilt","atimy","atimon","ating","atinga","atingle","atinkle","atip","atypy","atypic","atypical","atypicality","atypically","atiptoe","atis","atka","atlanta","atlantad","atlantal","atlantean","atlantes","atlantic","atlantica","atlantid","atlantides","atlantis","atlantite","atlantoaxial","atlantodidymus","atlantomastoid","atlantoodontoid","atlantosaurus","atlas","atlases","atlaslike","atlatl","atlatls","atle","atlee","atli"];
var bWords = ["bicarbs","bicarbureted","bicarburetted","bicarinate","bicarpellary","bicarpellate","bicaudal","bicaudate","bicched","bice","bicellular","bicentenary","bicentenaries","bicentenarnaries","bicentennial","bicentennially","bicentennials","bicentral","bicentric","bicentrically","bicentricity","bicep","bicephalic","bicephalous","biceps","bicepses","bices","bicetyl","bichy","bichir","bichloride","bichlorides","bichord","bichos","bichromate","bichromated","bichromatic"];
var cWords = ["cartouches","cartridge","cartridges","carts","cartsale","cartulary","cartularies","cartway","cartware","cartwheel","cartwheeler","cartwheels","cartwhip","cartwright","cartwrighting","carua","caruage","carucage","carucal","carucarius","carucate","carucated","carum","caruncle","caruncles","caruncula","carunculae","caruncular","carunculate","carunculated","carunculous","carus","carvacryl","carvacrol","carvage","carval","carve","carved","carvel","carvels","carven","carvene","carver","carvers","carvership","carves","carvestrene","carvy","carvyl","carving","carvings","carvist","carvoeira","carvoepra","carvol","carvomenthene","carvone","carwash","carwashes","carwitchet","carzey","casa","casaba","casabas","casabe","casablanca","casal","casalty","casamarca","casanova","casanovanic","casanovas","casaque","casaques","casaquin","casas","casasia","casate","casaun"];
var dWords = ["disdiplomatize","disdodecahedroid","disdub","disease","diseased","diseasedly","diseasedness","diseaseful","diseasefulness","diseases","diseasy","diseasing","disecondary","diseconomy","disedge","disedify","disedification","diseducate","disegno","diselder","diselectrify","diselectrification","diselenid","diselenide","disematism","disembay","disembalm","disembargo","disembargoed","disembargoing","disembark","disembarkation","disembarkations","disembarked","disembarking","disembarkment","disembarks","disembarrass","disembarrassed","disembarrassment","disembattle","disembed","disembellish","disembitter","disembocation","disembody","disembodied","disembodies","disembodying","disembodiment","disembodiments","disembogue","disembogued","disemboguement","disemboguing","disembosom","disembowel","disemboweled","disemboweling","disembowelled","disembowelling","disembowelment","disembowelments","disembowels","disembower","disembrace","disembrangle","disembroil","disembroilment","disemburden","diseme","disemic","disemplane","disemplaned","disemploy","disemployed","disemploying","disemployment","disemploys","disempower","disemprison","disenable","disenabled","disenablement","disenabling","disenact","disenactment","disenamor","disenamour","disenchain","disenchant","disenchanted","disenchanter","disenchanting","disenchantingly","disenchantment","disenchantments","disenchantress","disenchants","disencharm","disenclose","disencourage","disencrease","disencumber","disencumbered","disencumbering","disencumberment","disencumbers","disencumbrance","disendow","disendowed","disendower","disendowing","disendowment","disendows","disenfranchise","disenfranchised","disenfranchisement","disenfranchisements","disenfranchises","disenfranchising","disengage","disengaged","disengagedness","disengagement","disengagements","disengages","disengaging","disengirdle","disenjoy","disenjoyment","disenmesh","disennoble","disennui","disenorm","disenrol","disenroll","disensanity","disenshroud","disenslave","disensoul","disensure","disentail","disentailment","disentangle","disentangled","disentanglement","disentanglements","disentangler","disentangles","disentangling","disenter","dysentery","dysenteric","dysenterical","dysenteries","d"];
var eWords = ["echoisms","echoist","echoize","echoized","echoizing","echolalia","echolalic","echoless","echolocate","echolocation","echometer","echopractic","echopraxia","echos","echovirus","echowise","echt","echuca","eciliate","ecyphellate","eciton","ecize","eckehart","ecklein","eclair","eclaircise","eclaircissement","eclairissement","eclairs","eclampsia","eclamptic","eclat","eclated","eclating","eclats","eclectic","eclectical","eclectically","eclecticism","eclecticist","eclecticize","eclectics","eclectism","eclectist","eclegm","eclegma","eclegme","eclipsable","eclipsareon","eclipsation","eclipse","eclipsed","eclipser","eclipses","eclipsing","eclipsis","eclipsises","ecliptic","ecliptical","ecliptically","ecliptics","eclogic","eclogite","eclogites","eclogue","eclogues","eclosion","eclosions","ecmnesia","eco","ecocidal","ecocide","ecoclimate","ecod","ecodeme","ecoid","ecol","ecole","ecoles","ecology","ecologic","ecological","ecologically","ecologies","ecologist","ecologists","ecomomist","econ","economese","econometer","econometric","econometrical","econometrically","econometrician","econometrics","econometrist","economy","economic","economical","economically","economicalness","economics","economies","economise","economised","economiser","economising","economism","economist","economists","economite","economization","economize","economized","economizer","economizers","economizes","economizing","ecophene","ecophysiology","ecophysiological","ecophobia","ecorch","ecorche","ecorticate","ecosystem","ecosystems","ecospecies","ecospecific","ecospecifically","ecosphere","ecossaise","ecostate","ecotype","ecotypes","ecotypic","ecotipically","ecotypically","ecotonal","ecotone","ecotones","ecotopic","ecoute","ecphasis","ecphonema","ecphonesis","ecphorable","ecphore","ecphory","ecphoria","ecphoriae","ecphorias","ecphorization","ecphorize","ecphova","ecphractic","ecphrasis","ecrase","ecraseur","ecraseurs","ecrasite","ecrevisse","ecroulement","ecru","ecrus","ecrustaceous","ecstasy","ecstasies","ecstasis","ecstasize","ecstatic","ecstatica","ecstatical","ecstatically","ecstaticize","ecstatics","ecstrophy","ectad","ectadenia","ectal","ectally","ectases","ectasia","ectasis","ectatic","ectene","ectental","ectepicondylar","ecteron","ectethmoid","ectethmoidal","ecthesis","ecthetically","ecthyma","ecthymata","ecthymatous","ecthlipses","ecthlipsis","ectypal","ectype","ectypes","ectypography","ectiris","ectobatic","ectoblast","ectoblastic","ectobronchium","ectocardia","ectocarpaceae","ectocarpaceous","ectocarpales","ectocarpic","ectocarpous","ectocarpus","ectocelic","ectochondral","ectocinerea","ect"];
var fWords = ["frocks","froe","froebelian","froebelism","froebelist","froeman","froes","frog","frogbit","frogeater","frogeye","frogeyed","frogeyes","frogface","frogfish","frogfishes","frogflower","frogfoot","frogged","frogger","froggery","froggy","froggier","froggies","froggiest","frogginess","frogging","froggish","froghood","froghopper","frogland","frogleaf","frogleg","froglet","froglets","froglike","frogling","frogman","frogmarch","frogmen","frogmouth","frogmouths","frognose","frogs","frogskin","frogskins","frogspawn","frogstool","frogtongue","frogwort","frohlich","froideur","froise","froisse","frokin","frolic","frolicful","frolicked","frolicker","frolickers","frolicky","frolicking","frolickly","frolicks","frolicly","frolicness","frolics","frolicsome","frolicsomely","frolicsomeness","from","fromage","fromages","fromenty","fromenties","fromfile","fromward","fromwards","frond","frondage","frondation","fronde","fronded","frondent","frondesce","frondesced","frondescence","frondescent","frondescing","frondeur","frondeurs","frondiferous","frondiform","frondigerous","frondivorous","frondless","frondlet","frondose","frondosely","frondous","fronds","frons","front"];
var gWords = ["gloated","gloater","gloaters","gloating","gloatingly","gloats","glob","global","globalism","globalist","globalists","globality","globalization","globalize","globalized","globalizing","globally","globate","globated","globe","globed","globefish","globefishes","globeflower","globeholder","globelet","globelike","globes","globetrotter","globetrotters","globetrotting","globy","globical","globicephala","globiferous","globigerina","globigerinae","globigerinas","globigerine","globigerinidae","globin","globing","globins","globiocephalus","globoid","globoids","globose","globosely","globoseness","globosite","globosity","globosities","globosphaerite","globous","globously","globousness","globs","globular","globularia","globulariaceae","globulariaceous","globularity","globularly","globularness","globule","globules","globulet","globulicidal","globulicide","globuliferous","globuliform","globulimeter","globulin","globulins","globulinuria","globulysis","globulite","globulitic","globuloid","globulolysis","globulose","globulous","globulousness","globus","glochchidia","glochid","glochideous","glochidia","glochidial","glochidian","glochidiate","glochidium","glochids","glochines","glochis","glockenspiel","glockenspiels","glod","gloea","gloeal","gloeocapsa","gloeocapsoid","gloeosporiose","gloeosporium","glogg","gloggs","gloy","gloiopeltis","gloiosiphonia","gloiosiphoniaceae","glom","glome","glomeli","glomera","glomerate","glomeration","glomerella","glomeroporphyritic","glomerular","glomerulate","glomerule","glomeruli","glomerulitis","glomerulonephritis","glomerulose","glomerulus","glomi","glommed","glomming","glommox","gloms","glomus","glonoin","glonoine","glood","gloom","gloomed","gloomful","gloomfully","gloomy","gloomier","gloomiest","gloomily","gloominess","glooming","gloomingly","gloomings","gloomless","glooms","gloomth","glop","glopnen","gloppen","gloppy","glops","glor","glore","glory","gloria","gloriam","gloriana","glorias","gloriation","gloried","glories","gloriette","glorify","glorifiable","glorification","glorifications","glorified","glorifier","glorifiers","glorifies","glorifying","gloryful","glorying","gloryingly","gloryless","gloriole","glorioles","gloriosa","glor"];
var hWords = ["horry","horribility","horrible","horribleness","horribles","horribly","horrid","horridity","horridly","horridness","horrify","horrific","horrifically","horrification","horrified","horrifiedly","horrifies","horrifying","horrifyingly","horripilant","horripilate","horripilated","horripilating","horripilation","horrisonant","horror","horrorful","horrorish","horrorist","horrorize","horrormonger","horrormongering","horrorous","horrors","horrorsome","hors","horse","horseback","horsebacker","horsebane","horsebean","horseboy","horsebox","horsebreaker","horsebush","horsecar","horsecars","horsecart","horsecloth","horsecloths","horsecraft","horsed","horsedom","horsedrawing","horseess","horsefair","horsefeathers","horsefettler","horsefight","horsefish","horsefishes","horseflesh","horsefly","horseflies","horseflower","horsefoot","horsegate","horsehair","horsehaired","horsehead","horseheads","horseheal","horseheel","horseherd","horsehide","horsehides","horsehood","horsehoof","horsey","horseier","horseiest","horsejockey","horsekeeper","horsekeeping","horselaugh","horselaugher","horselaughs","horselaughter","horseleach","horseleech","horseless","horsely","horselike","horseload","horselock","horseman","horsemanship","horsemastership","horsemen","horsemint","horsemonger","horsenail","horsepipe","horseplay","horseplayer","horseplayers","horseplayful","horsepond","horsepower","horsepowers","horsepox","horser","horseradish","horseradishes","horses","horseshit","horseshoe","horseshoed","horseshoeing","horseshoer","horseshoers","horseshoes","horseshoing","horsetail","horsetails","horsetongue","horsetown","horsetree","horseway","horseweed","horsewhip","horsewhipped","horsewhipper","horsewhipping","horsewhips","horsewoman","horsewomanship","horsewomen","horsewood","horsfordite","horsy","horsier","horsiest","horsify","horsyism","horsily","horsiness","horsing","horst","horste","horstes","horsts","hort","hortation","horta"];
var iWords = ["ichthus","ichu","ichulle","icy","icica","icicle","icicled","icicles","ycie","icier","iciest","icily","iciness","icinesses","icing","icings","icker","ickers","icky","ickier","ickiest","ickle","yclad","ycleped","ycleping","yclept","icod","icon","icones","iconian","iconic","iconical","iconically","iconicity","iconism","iconize","iconoclasm","iconoclast","iconoclastic","iconoclastically","iconoclasticism","iconoclasts","iconodule","iconoduly","iconodulic","iconodulist","iconograph","iconographer","iconography","iconographic","iconographical","iconographically","iconographies","iconographist","iconolagny","iconolater","iconolatry","iconolatrous","iconology","iconological","iconologist","iconomachal","iconomachy","iconomachist","iconomania","iconomatic","iconomatically","iconomaticism","iconomatography","iconometer","iconometry","iconometric","iconometrical","iconometrically","iconophile","iconophily","iconophilism","iconophilist","iconoplast","iconoscope","iconostas","iconostases","iconostasion","iconostasis","iconotype","icons","iconv","iconvert","icosaheddra","icosahedra","icosahedral","icosahedron","icosahedrons","icosandria","icosasemic","icosian","icositedra","icositetrahedra","icositetrahedron","icositetrahedrons","icosteid","icosteidae","icosteine","icosteus","icotype","icteric","icterical","icterics","icteridae","icterine","icteritious","icteritous","icterode","icterogenetic","icterogenic","icterogenous","icterohematuria","icteroid","icterous","icterus","icteruses","ictic","ictonyx","ictuate","ictus","ictuses","id","yd","ida","idaean","idaein","idaho","idahoan","idahoans","yday","idaic","idalia","idalian","idant","idcue","iddat","iddhi","iddio","ide","idea","ideaed","ideaful","ideagenous","ideaistic","ideal","idealess","idealy","idealisation","idealise","idealised","idealiser","idealises","idealising","idealism","idealisms","idealist","idealistic","idealistical","idealistically","idealists","ideality","idealities","idealization","idealizations","idealize","idealized","idealizer","idealizes","idealizing","idealless","ideally","idealness","idealogy","idealogical","idealogies","idealogue","ideals","ideamonger","idean","ideas","ideata","ideate","ideated","ideates","ideating","ideation","ideational","ideationally","ideations","ideative","ideatum","idee","ideefixe","ideist","idem","idemfactor","idempotency","idempotent","idence","idenitifiers","ident","identic","identical","identicalism","identically","identicalness","identies","identifer","identifers","identify","identifiability","identifiable","identifiableness"];
var jWords = ["jaspachate","jaspagate","jaspe","jasper","jasperated","jaspered","jaspery","jasperite","jasperize","jasperized","jasperizing","jasperoid","jaspers","jasperware","jaspidean","jaspideous","jaspilite","jaspilyte","jaspis","jaspoid","jasponyx","jaspopal","jass","jassid","jassidae","jassids","jassoid","jasz","jat","jataco","jataka","jatamansi","jateorhiza","jateorhizin","jateorhizine","jatha","jati","jatki","jatni","jato","jatoba","jatos","jatropha","jatrophic","jatrorrhizine","jatulian","jaudie","jauk","jauked","jauking","jauks","jaun","jaunce","jaunced","jaunces","jauncing","jaunder","jaunders","jaundice","jaundiced","jaundiceroot","jaundices","jaundicing","jauner","jaunt","jaunted","jaunty","jauntie","jauntier","jauntiest","jauntily","jauntiness","jaunting","jauntingly","jaunts","jaup","jauped","jauping","jaups","java","javahai","javali","javan","javanee","javanese","javanine","javas","javel","javelin","javelina","javelinas","javeline","javelined","javelineer","javelining","javelins","javelot","javer","javitero","jaw","jawab","jawan","jawans","jawbation","jawbone","jawboned","jawbones","jawboning","jawbreak","jawbreaker","jawbreakers","jawbreaking","jawbreakingly","jawcrusher","jawed","jawfall","jawfallen","jawfeet","jawfish","jawfishes","jawfoot","jawfooted","jawhole","jawy","jawing","jawless","jawlike","jawline","jawlines","jawn","jawp","jawrope","jaws","jawsmith","jawtwister","jazey","jazeys","jazeran","jazerant","jazy","jazies","jazyges","jazz","jazzbow","jazzed","jazzer","jazzers","jazzes","jazzy","jazzier","jazziest","jazzily","jazziness","jazzing","jazzist","jazzlike","jazzman","jazzmen","jcl","jct","jctn","jealous","jealouse","jealousy","jealousies","jealously","jealousness","jeames","jean","jean-christophe","jeanette","jeany","jeanie","jeanne","jeannette","jeannie","jeanpaulia","jean-pierre","jeans","jear","jebat","jebel","jebels","jebus","jebusi","jebusite"];
var kWords = ["keepsake","keepsakes","keepsaky","keepworthy","keerie","keerogue","kees","keeshond","keeshonden","keeshonds","keeslip","keest","keester","keesters","keet","keets","keeve","keeves","keewatin","kef","keffel","keffiyeh","kefiatoid","kefifrel","kefir","kefiric","kefirs","kefs","kefti","keftian","keftiu","keg","kegeler","kegelers","kegful","keggmiengg","kegler","keglers","kegling","keglings","kegs","kehaya","kehillah","kehilloth","kehoeite","key","keyage","keyaki","keyboard","keyboarded","keyboarder","keyboarding","keyboards","keybutton","keid","keyed","keyhole","keyholes","keying","keyless","keylet","keilhauite","keylock","keyman","keymen","keymove","keynesian","keynesianism","keynote","keynoted","keynoter","keynoters","keynotes","keynoting","keypad","keypads","keypress","keypresses","keypunch","keypunched","keypuncher","keypunchers","keypunches","keypunching","keir","keirs","keys","keyseat","keyseater","keyserlick","keyset","keysets","keyslot","keysmith","keist","keister","keyster","keisters","keysters","keystone","keystoned","keystoner","keystones","keystroke","keystrokes","keita","keith","keitloa","keitloas","keyway","keyways","keywd","keyword","keywords","keywrd","kekchi","kekotene","kekuna","kelchin","kelchyn","keld","kelder","kele","kelebe","kelectome","keleh","kelek","kel"];
var lWords = ["lactoside","lactosuria","lactothermometer","lactotoxin","lactovegetarian","lactuca","lactucarium","lactucerin","lactucin","lactucol","lactucon","lacuna","lacunae","lacunal","lacunar","lacunary","lacunaria","lacunaris","lacunars","lacunas","lacunate","lacune","lacunes","lacunome","lacunose","lacunosis","lacunosity","lacunule","lacunulose","lacuscular","lacustral","lacustrian","lacustrine","lacwork","lad","ladakhi","ladakin","ladang","ladanigerous","ladanum","ladanums","ladder","laddered","laddery","laddering","ladderless","ladderlike","ladderman","laddermen","ladders","ladderway","ladderwise","laddess","laddie","laddies","laddikie","laddish","laddock","lade","laded","lademan","laden","ladened","ladening","ladens","lader","laders","lades","ladhood","lady","ladybird","ladybirds","ladybug","ladybugs","ladyclock","ladydom","ladies","ladyfern","ladify","ladyfy","ladified","ladifying","ladyfinger","ladyfingers","ladyfish","ladyfishes","ladyfly","ladyflies","ladyhood","ladyhoods","ladyish","ladyishly","ladyishness","ladyism","ladik","ladykiller","ladykin","ladykind","ladykins","ladyless","ladyly","ladylike","ladylikely","ladylikeness","ladyling","ladylintywhite","ladylove","ladyloves","ladin","lading","ladings","ladino","ladinos","ladypalm","ladypalms","ladysfinger","ladyship","ladyships","ladyslipper","ladysnow","ladytide","ladkin","ladle","ladled","ladleful","ladlefuls","ladler","ladlers","ladles","ladlewood","ladling","ladner","ladron","ladrone","ladrones","ladronism","ladronize","ladrons","lads","laelia","laemodipod","laemodipoda","laemodipodan","laemodipodiform","laemodipodous","laemoparalysis","laemostenosis","laen","laender","laeotropic","laeotropism","laeotropous","laertes","laestrygones","laet","laetation","laeti","laetic","laetrile","laevigate","laevigrada","laevo","laevoduction","laevogyrate","laevogyre","laevogyrous","laevolactic","laevorotation","laevorotatory","laevotartaric","laevoversion","laevulin","laevulose","lafayette","lafite","laft","lag","lagan","lagans","lagarto","lagen","lagena","lagenae","lagenaria","lagend","lagends","lagenian","lageniform","lageniporm","lager","lagered","lagering","lagers","lagerspetze","lagerstroemia","lagetta","lagetto","laggar","laggard","laggardism","laggardly","laggardness","laggards","lagged","laggen","lagger","laggers","laggin","lagging","laggingly","laggings","laggins","laglast","lagly","lagna","lagnappe","lagnappes","lagniappe","lagniappes","lagomyidae","lagomorph","lagom"];
var mWords = ["masaridinae","masaris","masc","mascagnine","mascagnite","mascally","mascara","mascaras","mascaron","maschera","mascle","mascled","mascleless","mascon","mascons","mascot","mascotism","mascotry","mascots","mascotte","mascouten","mascularity","masculate","masculation","masculy","masculine","masculinely","masculineness","masculines","masculinism","masculinist","masculinity","masculinities","masculinization","masculinize","masculinized","masculinizing","masculist","masculofeminine","masculonucleus","masdeu","masdevallia","maselin","maser","masers","mash","masha","mashak","mashal","mashallah","masham","mashed","mashelton","masher","mashers","mashes","mashgiach","mashgiah","mashgichim","mashgihim","mashy","mashie","mashier","mashies","mashiest","mashiness","mashing","mashlam","mashlin","mashloch","mashlum","mashman","mashmen","mashona","mashpee","mashrebeeyah","mashrebeeyeh","mashru","masjid","masjids","mask","maskable","maskalonge","maskalonges","maskanonge","maskanonges","masked","maskeg","maskegon","maskegs","maskelynite","masker","maskery","maskers","maskette","maskflower","masking","maskings","maskinonge","maskinonges","maskins","masklike","maskmv","maskoi","maskoid","masks","maslin","masochism","masochist","masochistic","masochistically","masochists","mason","masoned","masoner","masonic","masonically","masoning","masonite","masonry","masonried","masonries","masonrying","masons","masonwork","masooka","masoola","masora","masorete","masoreth","masoretic","maspiter","masque","masquer","masquerade","masqueraded","masquerader","masqueraders","masquerades","masquerading","masquers","masques","mass","massa","massachuset","massachusetts","massacre","massacred","massacrer","massacrers","massacres","massacring","massacrous","massage","massaged","massager","massagers","massages","massageuse","massaging","massagist","massagists","massalia","massalian","massaranduba","massas","massasauga","masscult","masse","massebah","massecuite","massed","massedly","massedness","massekhoth","massel","masselgem","masser","masses","masseter","masseteric","masseterine","masseters","masseur","masseurs","masseuse","masseuses","massy","massicot","massicotite","massicots","massier","massiest","massif","massifs","massig","massily","massilia","massilian","massymore","massiness","massing","massive","massively","massiveness","massivity","masskanne","massless","masslessness","masslike","massmonger","massoy","massoola","massotherapy","massotherapist","massula","mast","mastaba","mastabah","mastabahs","mastabas","mastadenitis","mastadenoma","mastage","mastalgia","mastatrophy","mastatrophia","mastauxe","mastax","mastectomy","mastectomies","masted","master","masterable","masterate","masterdom","mastered","masterer","masterfast","masterful","masterfully","masterfulness","masterhood","mastery","masteries","mastering","masterings","masterless","masterlessness","masterly","masterlike","masterlily","masterliness","masterling","masterman","mastermen","mastermind","masterminded","masterminding","masterminds","masterous","masterpiece","masterpieces","masterproof","masters","mastership","mastersinger","mastersingers","masterstroke","masterwork","masterworks","masterwort","mastful","masthead","mastheaded","mastheading","mastheads","masthelcosis","masty","mastic","masticability","masticable","masticate","masticated","masticates","masticating","mastication","mastic"];
var nWords = ["neurogenesis","neurogenetic","neurogenic","neurogenically","neurogenous","neuroglandular","neuroglia","neurogliac","neuroglial","neurogliar","neuroglic","neuroglioma","neurogliosis","neurogram","neurogrammic","neurography","neurographic","neurohypnology","neurohypnotic","neurohypnotism","neurohypophyseal","neurohypophysial","neurohypophysis","neurohistology","neurohormonal","neurohormone","neurohumor","neurohumoral","neuroid","neurokeratin","neurokyme","neurol","neurolemma","neuroleptanalgesia","neuroleptanalgesic","neuroleptic","neuroleptoanalgesia","neurolymph","neurolysis","neurolite","neurolytic","neurology","neurologic","neurological","neurologically","neurologies","neurologist","neurologists","neurologize","neurologized","neuroma","neuromalacia","neuromalakia","neuromas","neuromast","neuromastic","neuromata","neuromatosis","neuromatous","neuromere","neuromerism","neuromerous","neuromyelitis","neuromyic","neuromimesis","neuromimetic","neuromotor","neuromuscular","neuromusculature","neuron","neuronal","neurone","neurones","neuronic","neuronym","neuronymy","neuronism","neuronist","neuronophagy","neuronophagia","neurons","neuroparalysis","neuroparalytic","neuropath","neuropathy","neuropathic","neuropathical","neuropathically","neuropathist","neuropathology","neuropathological","neuropathologist","neurope","neurophagy","neuropharmacology","neuropharmacologic","neuropharmacological","neuropharmacologist","neurophil","neurophile","neurophilic","neurophysiology","neurophysiologic","neurophysiological","neurophysiologically","neurophysiologist","neuropil","neuropile","neuroplasm","neuroplasmatic","neuroplasmic","neuroplasty","neuroplexus","neuropod","neuropodial","neuropodium","neuropodous","neuropore","neuropsychiatry","neuropsychiatric","neuropsychiatrically","neuropsychiatrist","neuropsychic","neuropsychical","neuropsychology","neuropsychological","neuropsychologist","neuropsychopathy","neuropsychopathic","neuropsych"];
var oWords = ["obtainer","obtainers","obtaining","obtainment","obtains","obtect","obtected","obtemper","obtemperate","obtend","obtenebrate","obtenebration","obtent","obtention","obtest","obtestation","obtested","obtesting","obtests","obtrect","obtriangular","obtrude","obtruded","obtruder","obtruders","obtrudes","obtruding","obtruncate","obtruncation","obtruncator","obtrusion","obtrusionist","obtrusions","obtrusive","obtrusively","obtrusiveness","obtund","obtunded","obtundent","obtunder","obtunding","obtundity","obtunds","obturate","obturated","obturates","obturating","obturation","obturator","obturatory","obturbinate","obtusangular","obtuse","obtusely","obtuseness","obtuser","obtusest","obtusifid","obtusifolious","obtusilingual","obtusilobous","obtusion","obtusipennate","obtusirostrate","obtusish","obtusity","obumbrant","obumbrate","obumbrated","obumbrating","obumbration","obus","obv","obvallate","obvelation","obvention","obversant","obverse","obversely","obverses","obversion","obvert","obverted","obvertend","obverting","obverts","obviable","obviate","obviated","obviates","obviating","obviation","obviations","obviative","obviator","obviators","obvious","obviously","obviousness","obvolute","obvoluted","obvolution","obvolutive","obvolve","obvolvent","oc","oca","ocarina","ocarinas","ocas","occamy","occamism","occamist","occamistic","occamite","occas","occasion","occasionable","occasional","occasionalism","occasionalist","occasionalistic","occasionality","occasionally","occasionalness","occasionary","occasionate","occasioned","occasioner","occasioning","occasionings","occasionless","occasions","occasive","occident","occidental","occidentalism","occidentalist","occidentality","occidentalization","occidentalize","occidentally","occidentals","occidents","occiduous","occipiputs","occipita","occipital","occipitalis","occipitally","occipitoanterior","occipitoatlantal","occipitoatloid","occipitoaxial","occipitoaxoid","occipitobasilar","occipitobregmatic","occipitocalcarine","occipitocervical","occipitofacial","occipitofrontal","occipitofrontalis","occipitohyoid","occipitoiliac","occipitomastoid","occipitomental","occipitonasal","occipitonuchal","occipitootic","occipitoparietal","occipitoposterior","occipitoscapular","occipitosphenoid","occipitosphenoidal","occipitotemporal","occipitothalamic","occiput","occiputs","occision","occitone","occlude","occluded","occludent","occludes","occluding","occlusal","occluse","occlusion","occlusions","occlusive","occlusiveness","occlusocervical","occlusocervically","occlusogingival","occlusometer","occlusor","occult"];
var pWords = ["palaeoplain","palaeopotamology","palaeopsychic","palaeopsychology","palaeopsychological","palaeoptychology","palaeornis","palaeornithinae","palaeornithine","palaeornithology","palaeornithological","palaeosaur","palaeosaurus","palaeosophy","palaeospondylus","palaeostyly","palaeostylic","palaeostraca","palaeostracan","palaeostriatal","palaeostriatum","palaeotechnic","palaeothalamus","palaeothentes","palaeothentidae","palaeothere","palaeotherian","palaeotheriidae","palaeotheriodont","palaeotherioid","palaeotherium","palaeotheroid","palaeotype","palaeotypic","palaeotypical","palaeotypically","palaeotypography","palaeotypographic","palaeotypographical","palaeotypographist","palaeotropical","palaeovolcanic","palaeozoic","palaeozoology","palaeozoologic","palaeozoological","palaeozoologist","palaestra","palaestrae","palaestral","palaestras","palaestrian","palaestric","palaestrics","palaetiology","palaetiological","palaetiologist","palafitte","palagonite","palagonitic","palay","palayan","palaic","palaihnihan","palaiotype","palais","palaiste","palaite","palaka","palala","palama","palamae","palamate","palame","palamedea","palamedean","palamedeidae","palamite","palamitism","palampore","palander","palank","palanka","palankeen","palankeened","palankeener","palankeening","palankeeningly","palanquin","palanquined","palanquiner","palanquining","palanquiningly","palanquins","palapala","palapalai","palapteryx","palaquium","palar","palas","palatability","palatable","palatableness","palatably","palatal","palatalism","palatality","palatalization","palatalize","palatalized","palatally","palatals","palate","palated","palateful","palatefulness","palateless","palatelike","palates","palatia","palatial","palatially","palatialness","palatian","palatic","palatinal","palatinate","palatinates","palatine","palatines","palatineship","palatinian","palatinite","palation","palatist","palatitis","palatium","palative","palatization","palatize","palatoalveolar","palatodental","palatoglossal","palatoglossus","palatognathous","palatogram","palatograph","palatography","palatomaxillary","palatometer","palatonasal","palatopharyngeal","palatopharyngeus","palatoplasty","palatoplegia","palatopterygoid","palatoquadrate","palatorrhaphy","palatoschisis","palatua","palau","palaung","palaver","palavered","palaverer","palavering","palaverist","palaverment","palaverous","palavers","palazzi","palazzo","palberry","palch","pale","palea","paleaceous","paleae","paleal","paleanthropic","palearctic","paleate","palebelly","palebreast","palebuck","palechinoid","paled","paledness","paleencephala","paleencephalon","paleencephalons","paleentomology","paleethnographer","paleethnology","paleethnologic","paleethnological","paleethnologist","paleface","palefaces","palegold","palehearted","paleichthyology","paleichthyologic","paleichthyologist","paleiform","palely","paleman","paleness","palenesses","palenque","paleoalchemical","paleoandesite","paleoanthropic","paleoanthropography","paleoanthropology","paleoanthropological","paleoanthropologist","paleoanthropus","paleoatavism","paleoatavistic","paleobiogeography","paleobiology","paleobiologic","paleobiological","paleobiologist","paleobotany","paleobotanic","paleobotanical","paleobotanically","paleobotanist","paleoceanography","paleocene","paleochorology","paleochorologist","paleocyclic","paleocli"];
var rWords = ["recognizant","recognize","recognized","recognizedly","recognizee","recognizer","recognizers","recognizes","recognizing","recognizingly","recognizor","recognosce","recohabitation","recoil","recoiled","recoiler","recoilers","recoiling","recoilingly","recoilless","recoilment","recoils","recoin","recoinage","recoined","recoiner","recoining","recoins","recoke","recollapse","recollate","recollation","recollect","recollectable","recollected","recollectedly","recollectedness","recollectible","recollecting","recollection","recollections","recollective","recollectively","recollectiveness","recollects","recollet","recolonisation","recolonise","recolonised","recolonising","recolonization","recolonize","recolonized","recolonizes","recolonizing","recolor","recoloration","recolored","recoloring","recolors","recolour","recolouration","recomb","recombed","recombinant","recombination","recombinational","recombinations","recombine","recombined","recombines","recombing","recombining","recombs","recomember","recomfort","recommand","recommence","recommenced","recommencement","recommencer","recommences","recommencing","recommend","recommendability","recommendable","recommendableness","recommendably","recommendation","recommendations","recommendative","recommendatory","recommended","recommendee","recommender","recommenders","recommending","recommends","recommission","recommissioned","recommissioning","recommissions","recommit","recommiting","recommitment","recommits","recommittal","recommitted","recommitting","recommunicate","recommunion","recompact","recompare","recompared","recomparing","recomparison","recompass","recompel","recompence","recompensable","recompensate","recompensated","recompensating","recompensation","recompensatory","recompense","recompensed","recompenser","recompenses","recompensing","recompensive","recompete","recompetition","recompetitor","recompilation","recompilations","recompile","recompiled","recompilement","recompiles","recompiling","recomplain","recomplaint","recomplete","recompletion","recomply","recompliance","recomplicate","recomplication","recompose","recomposed","recomposer","recomposes","recomposing","recomposition","recompound","recompounded","recompounding","recompounds","recomprehend","recomprehension","recompress","recompression","recomputation","recompute","recomputed","recomputes","recomputing","recon","reconceal","reconcealment","reconcede","reconceive","reconcentrado","reconcentrate","reconcentrated","reconcentrates","reconcentrating","reconcentration","reconception","reconcert","reconcession","reconcilability","reconcilable","reconcilableness","reconcilably","reconcile","reconciled","reconcilee","reconcileless","reconcilement","reconcilements","reconciler","reconcilers","reconciles","reconciliability","reconciliable","reconciliate","reconciliated","reconciliating","reconciliation","reconciliations","reconciliatiory","reconciliative","reconciliator","reconciliatory","reconciling","reconcilingly","reconclude","reconclusion","reconcoct","reconcrete","reconcur","recond","recondemn","recondemnation","recondensation","recondense","recondensed","recondenses","recondensing","recondite","reconditely","reconditeness","recondition","reconditioned","reconditioning","reconditions","reconditory","recondole","reconduct","reconduction"];
var sWords = ["safranyik","safranin","safranine","safranins","safranophil","safranophile","safrol","safrole","safroles","safrols","saft","saftly","sag","saga","sagaciate","sagacious","sagaciously","sagaciousness","sagacity","sagacities","sagai","sagaie","sagaman","sagamen","sagamite","sagamore","sagamores","sagan","saganash","saganashes","sagapen","sagapenum","sagas","sagathy","sagbut","sagbuts","sage","sagebrush","sagebrusher","sagebrushes","sagebush","sageer","sageleaf","sagely","sagene","sageness","sagenesses","sagenite","sagenitic","sager","sageretia","sagerose","sages","sageship","sagesse","sagest","sagewood","saggar","saggard","saggards","saggared","saggaring","saggars","sagged","sagger","saggered","saggering","saggers","saggy","saggier","saggiest","sagginess","sagging","saggon","saghavart","sagy","sagier","sagiest","sagina","saginate","sagination","saging","sagital","sagitarii","sagitarius","sagitta","sagittae","sagittal","sagittally","sagittary","sagittaria","sagittaries","sagittarii","sagittariid","sagittarius","sagittate","sagittid","sagittiferous","sagittiform","sagittocyst","sagittoid","sagless","sago","sagoin","sagolike","sagos","sagoweer","sagra","sags","saguaro","saguaros","saguerus","saguing","sagum","saguran","saguranes","sagvandite","sagwire","sah","sahadeva","sahaptin","sahara","saharan","saharian","saharic","sahh","sahib","sahibah","sahibs","sahidic","sahiwal","sahiwals","sahlite","sahme","saho","sahoukar","sahras","sahuaro","sahuaros","sahukar","sai","say","saya","sayability","sayable","sayableness","sayal","saibling","saic","saice","saices","said","saidi","saids","sayee","sayer","sayers","sayest","sayette","saify","saiga","saigas","saignant","saigon","saiid","sayid","sayids","saiyid","sayyid","saiyids","sayyids","saying","sayings","sail","sailable","sailage","sailboard","sailboat","sailboater","sailboating","sailboats","sailcloth","sailed","sailer","sailers","sailfin","sailfish","sailfishes","sailflying","saily","sailyard","sailye","sailing","sailingly","sailings","sailless","sailmaker","sailmaking","sailor","sailorfish","sailoring","sailorizing","sailorless","sailorly","sailorlike","sailorman","sailorproof","sailors","sailour","sailplane","sailplaned","sailplaner","sailplaning","sails","sailship","sailsman","saim","saimy","saimiri","sain","saynay","saindoux","sained","saynete","sainfoin","sainfoins","saining","sains","saint","saintdom","saintdoms","sainte","sainted","saintess","sainthood","sainting","saintish","saintism","saintless","saintly","saintlier","saintliest","saintlike","saintlikeness","saintlily","saintliness","saintling","saintology","saintologist","saintpaulia","saints","saintship","sayonara","sayonaras","saip","saiph","sair","sairy","sairly","sairve","says","sayst","saite","saith","saithe","saitic","saiva","saivism","saj","sajou","sajous","sak","saka","sakai","sakalava","sake","sakeber","sakeen","sakel","sakelarides","sakell","sakellaridis","saker","sakeret","sakers","sakes","sakha","saki","sakyamuni","sakieh","sakiyeh","sakis","sakkara","sakkoi","sakkos","sakti","saktism","sakulya","sal","sala","salaam","salaamed","salaaming","salaamlike","salaams","salability","salabilities","salable","salableness","salably","salaceta","salacious","salaciously","salaciousness","salacity","salacities","salacot","salad","salada","saladang","saladangs","salade","saladero","saladin","salading","salads","salago","salagrama","salay","salal","salamandarin","salamander","salamanderlike","salamanders","salamandra","salamandrian","salamandridae","salamandriform","salamandrin","salamandrina","salamandrine","salamandroid","salamat","salambao","salame","salami","salaminian","salamis","salamo","salampore","salamstone","salangane","salangid","salangidae","salar","salary","salariat","salariats","salaried","salariego","salaries","salarying","salaryless","salat","salband","salchow","saldid","sale","saleability","saleable","saleably","salebrous","saleeite","salegoer","saleyard","salele","salem","salema","salempore","salenixon","salep","saleps","saleratus","saleroom","salerooms","sales","salesclerk","salesclerks","salesgirl","salesgirls","salesian","salesite","saleslady","salesladies","salesman","salesmanship","salesmen","salespeople","salesperson","salespersons","salesroom","salesrooms","saleswoman","saleswomen","salet","saleware","salework","salfern","salian","saliant","saliaric","salic","salicaceae","salicaceous","salicales","salicariaceae","salicetum","salicyl","salicylal","salicylaldehyde","salicylamide","salicylanilide","salicylase","salicylate","salicylic","salicylide","salicylidene","salicylyl","salicylism","salicylize","salicylous","salicyluric","salicin","salicine","salicines","salicins","salicional","salicorn","salicornia","salience","saliences","saliency","saliencies","salient","salientia","salientian","saliently","salientness","salients","saliferous","salify","salifiable","salification","salified","salifies","salifying","saligenin","saligenol","saligot","sali"];
var tWords = ["tater","taters","tates","tath","tathata","tatian","tatianist","tatie","tatinek","tatler","tatmjolk","tatoo","tatoos","tatou","tatouay","tatouays","tatpurusha","tats","tatsanottine","tatsman","tatta","tatted","tatter","tatterdemalion","tatterdemalionism","tatterdemalionry","tatterdemalions","tattered","tatteredly","tatteredness","tattery","tattering","tatterly","tatters","tattersall","tattersalls","tatterwag","tatterwallop","tatther","tatty","tattie","tattied","tattier","tatties","tattiest","tattily","tattiness","tatting","tattings","tattle","tattled","tattlement","tattler","tattlery","tattlers","tattles","tattletale","tattletales","tattling","tattlingly","tattoo","tattooage","tattooed","tattooer","tattooers","tattooing","tattooist","tattooists","tattooment","tattoos","tattva","tatu","tatuasu","tatukira","tatusia","tatusiidae","tau","taube","tauchnitz","taught","taula","taulch","tauli","taulia","taum","taun","taungthu","taunt","taunted","taunter","taunters","taunting","tauntingly","tauntingness","taunton","tauntress","taunts","taupe","taupes","taupo","taupou","taur","tauranga","taurean","tauri","taurian","tauric","tauricide","tauricornous","taurid","tauridian","tauriferous","tauriform","tauryl","taurylic","taurin","taurine","taurines","taurini","taurite","tauroboly","taurobolia","taurobolium","taurocephalous","taurocholate","taurocholic","taurocol","taurocolla","tauroctonus","taurodont","tauroesque","taurokathapsia","taurolatry","tauromachy","tauromachia","tauromachian","tauromachic","tauromaquia","tauromorphic","tauromorphous","taurophile","taurophobe","taurophobia","tauropolos","taurotragus","taurus","tauruses","taus","taut","tautaug","tautaugs","tauted","tautegory","tautegorical","tauten","tautened","tautening","tautens","tauter","tautest","tauting","tautirite","tautit","tautly","tautness","tautnesses","tautochrone","tautochronism","tautochronous","tautog","tautogs","tautoisomerism","tautology","tautologic","tautological","tautologically","tautologicalness","tautologies","tautologise","tautologised","tautologising","tautologism","tautologist","tautologize","tautologized","tautologizer","tautologizing","tautologous","tautologously","tautomer","tautomeral","tautomery","tautomeric","tautomerism","tautomerizable","tautomerization","tautomerize","tautomerized","tautomerizing","tautomers","tautometer","tautometric","tautometrical","tautomorphous","tautonym","tautonymy","tautonymic","tautonymies","tautonymous","tautonyms","tautoousian","tautoousious","tautophony","tautophonic","tautophonical","tautopody","tautopodic","tautosyllabic","tautotype","tautourea","tautousian","tautousious","tautozonal","tautozonality","tauts","tav","tavast","tavastian","tave","tavell","taver","tavern","taverna","taverner","taverners","tavernize","tavernless","tavernly","tavernlike","tavernous","tavernry","taverns","tavernwards","tavers","tavert","tavestock","tavghi","tavy","tavistockite","tavoy","tavola","tavolatite","tavs","taw","tawa","tawdered","tawdry","tawdrier","tawdries","tawdriest","tawdrily","tawdriness","tawed","tawer","tawery","tawers","tawgi","tawhai","tawhid","tawie","tawyer","tawing","tawite","tawkee","tawkin","tawn","tawney","tawneier","tawneiest","tawneys","tawny","tawnie","tawnier","tawnies","tawniest","tawnily","tawniness","tawnle","tawpi","tawpy","tawpie","tawpies","taws","tawse","tawsed","tawses","tawsing","tawtie","tax","taxa","taxability","taxable","taxableness","taxables","taxably","taxaceae","taxaceous","taxameter","taxaspidean","taxation","taxational","taxations","taxative","taxatively","taxator","taxeater","taxeating","taxed","taxeme","taxemes","taxemic","taxeopod","taxeopoda","taxeopody","taxeopodous","taxer","taxers","taxes","taxgatherer","taxgathering","taxi","taxy","taxiable","taxiarch","taxiauto","taxibus","taxicab","taxicabs","taxicorn","taxidea","taxidermal","taxidermy","taxidermic","taxidermist","taxidermists","taxidermize","taxidriver","taxied","taxies","taxiing","taxying","taximan","taximen","taximeter","taximetered","taxin","taxine","taxing","taxingly","taxinomy","taxinomic","taxinomist","taxiplane","taxir","taxis","taxistand","taxite","taxites","taxitic","taxiway","taxiways","taxless","taxlessly"];
var wWords = ["whapukee","whapuku","whar","whare","whareer","wharf","wharfage","wharfages","wharfe","wharfed","wharfhead","wharfholder","wharfie","wharfing","wharfinger","wharfingers","wharfland","wharfless","wharfman","wharfmaster","wharfmen","wharfrae","wharfs","wharfside","wharl","wharp","wharry","wharrow","whart","whartonian","wharve","wharves","whase","whasle","what","whata","whatabouts","whatchy","whatd","whatever","whatkin","whatlike","whatman","whatna","whatness","whatnot","whatnots","whatre","whatreck","whats","whatsis","whatso","whatsoeer","whatsoever","whatsomever","whatten","whatzit","whau","whauk","whaup","whaups","whaur","whauve","wheal","whealed","whealy","whealing","wheals","whealworm","wheam","wheat","wheatbird","wheatear","wheateared","wheatears","wheaten","wheatflakes","wheatgrass","wheatgrower","wheaty","wheaties","wheatland","wheatless","wheatlike","wheatmeal","wheats","wheatstalk","wheatstone","wheatworm","whedder","whee","wheedle","wheedled","wheedler","wheedlers","wheedles","wheedlesome","wheedling","wheedlingly","wheel","wheelabrate","wheelabrated","wheelabrating","wheelage","wheelband","wheelbarrow","wheelbarrower","wheelbarrowful","wheelbarrows","wheelbase","wheelbases","wheelbird","wheelbox","wheelchair","wheelchairs","wheeldom","wheeled","wheeler","wheelery","wheelerite","wheelers","wheelhorse","wheelhouse","wheelhouses","wheely","wheelie","wheelies","wheeling","wheelingly","wheelings","wheelless","wheellike","wheelmaker","wheelmaking","wheelman","wheelmen","wheelrace","wheelroad","wheels","wheelsman","wheelsmen","wheelsmith","wheelspin","wheelswarf","wheelway","wheelwise","wheelwork","wheelworks","wheelwright","wheelwrighting","wheelwrights","wheem","wheen","wheencat","wheenge","wheens","wheep","wheeped","wheeping","wheeple","wheepled","wheeples","wheepling","wheeps","wheer","wheerikins","wheesht","wheetle","wheeze","wheezed","wheezer","wheezers","wheezes","wheezy","wheezier","wheeziest","wheezily","wheeziness","wheezing","wheezingly","wheezle","wheft","whey","wheybeard","wheybird","wheyey","wheyeyness","wheyface","wheyfaced","wheyfaces","wheyish","wheyishness","wheyisness","wheylike","whein","wheyness","wheys","wheyworm","wheywormed","whekau","wheki","whelk","whelked","whelker","whelky","whelkier","whelkiest","whelklike","whelks","whelm","whelmed","whelming","whelms","whelp","whelped","whelphood","whelping","whelpish","whelpless","whelpling","whelps","whelve","whemmel","whemmle","when","whenabouts","whenas","whence","whenceeer","whenceforth","whenceforward","whencesoeer","whencesoever","whencever","wheneer","whenever","whenness","whens","whenso","whensoever","whensomever","where","whereabout","whereabouts","whereafter","whereanent","whereas","whereases","whereat","whereaway","whereby","whered","whereer","wherefor","wherefore","wherefores","whereforth","wherefrom","wherehence","wherein","whereinsoever","whereinto","whereis","whereness","whereof","whereon","whereout","whereover","wherere","wheres","whereso","wheresoeer","wheresoever","wheresomever","wherethrough","wheretill","whereto","wheretoever","wheretosoever","whereunder","whereuntil","whereunto","whereup","whereupon","wherever","wherewith","wherewithal","wherret","wherry","wherried","wherries","wherrying","wherryman","wherrit","wherve","wherves","whesten","whet","whether","whetile","whetrock","whets","whetstone","whetstones","whetted","whetter","whetters","whetting","whew","whewellite","whewer","whewl","whews","whewt","whf","why","whiba","which","whichever","whichsoever","whichway","whichways","whick","whicken","whicker","whickered","whickering","whickers","whid","whidah","whydah","whidahs","whydahs","whidded","whidder","whidding","whids","whyever","whiff","whiffable","whiffed","whiffenpoof","whiffer","whiffers","whiffet"];

