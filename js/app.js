

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
 			appendTenths.innerHTML = "0" + 0;
 		}
 		if (seconds > 9) {
 			appendSeconds.innerHTML = seconds;
 			if (seconds === 10) {
 				submitGameResults();
 				clearRound();
 			}
 		}
 		
	}
}

function updateCategoryResults() {
	document.getElementById("playedWord1").innerHTML = category1;
	document.getElementById("playedWord2").innerHTML = category1;
	document.getElementById("playedWord3").innerHTML = category1;
	document.getElementById("playedWord4").innerHTML = category1;
	document.getElementById("playedWord5").innerHTML = category1;
	document.getElementById("playedWord6").innerHTML = category1;

}
function submitGameResults() {
	var submit = document.getElementById('submitGame');
	category1 = document.getElementById("category1Text").value;
	category2 = document.getElementById("category2Text").value;
	category3 = document.getElementById("category3Text").value;
	category4 = document.getElementById("category4Text").value;
	category5 = document.getElementById("category5Text").value;
	category6 = document.getElementById("category6Text").value;
	console.log(category1);
}
function clearRound() {
	clearInterval(interval);
	tens = "00";
	seconds = "00";
	appendTenths.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
}

var responseData;
var player1words = [];
var player2words = [];
var categories = ["sports", "U.S. cities", "gemstone", "vegetable", "a tool", "a zoo animal", "a fast food item", "an item found inside of a refrigerator", "a type of footwear", "a musical instrument", "something you would find in a garage", "item from a catalog", "a school supply item", "item you may find in an attic", "a kitchen appliance", "a type or item of clothing", "a type of drink or beverage"];
var letters = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, W"];
var category1; 
var category2; 
var category3; 
var category4; 
var category5; 
var category6; 

var timer = document.getElementById("timerDigits");

function getDictionaryData() {
	//console.log(this.responseText);
	responseData = this.responseText;
	parseFromXMLString();
};

var newRequest = new XMLHttpRequest();
newRequest.addEventListener("load", getDictionaryData);
newRequest.open("GET", "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/c?key=28940578-e2cc-49d4-8802-751d4b2d1bb4");
newRequest.send();

function startNewGame() {

};

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

function startTimer() {
	console.log("Timer started");
	var count = 0;

	if (count <= 60) {
		console.log("Timer")
		count++
		document.getElementById("startGameButton").innerHTML = count;
	}
};

var aWords = ["atelostomia","atemoya","atemporal","aten","atenism","atenist","aterian","ates","atestine","ateuchi","ateuchus","atfalati","athabasca","athabascan","athalamous","athalline","athamantid","athamantin","athamaunte","athanasy","athanasia","athanasian","athanasianism","athanasianist","athanasies","athanor","athapascan","athapaskan","athar","atharvan","athbash","athecae","athecata","athecate","atheism","atheisms","atheist","atheistic","atheistical","atheistically","atheisticalness","atheisticness","atheists","atheize","atheizer","athel","athelia","atheling","athelings","athematic","athena","athenaea","athenaeum","athenaeums","athenee","atheneum","atheneums","athenian","athenianly","athenians","athenor","athens","atheology","atheological","atheologically","atheous","athericera","athericeran","athericerous","atherine","atherinidae","atheriogaea","atheriogaean","atheris","athermancy","athermanous","athermic","athermous","atherogenesis","atherogenic","atheroma","atheromas","atheromasia","atheromata","atheromatosis","atheromatous","atheroscleroses","atherosclerosis","atherosclerotic","atherosclerotically","atherosperma","atherurus","athetesis","atheticize","athetize","athetized","athetizing","athetoid","athetoids","athetosic","athetosis","athetotic","athymy","athymia","athymic","athing","athink","athyreosis","athyria","athyrid","athyridae","athyris","athyrium","athyroid","athyroidism","athyrosis","athirst","athlete","athletehood","athletes","athletic","athletical","athletically","athleticism","athletics","athletism","athletocracy","athlothete","athlothetes","athodyd","athodyds","athogen","athold","athonite","athort","athrepsia","athreptic","athrill","athrive","athrob","athrocyte","athrocytosis","athrogenic","athrong","athrough","athumia","athwart","athwarthawse","athwartship","athwartships","athwartwise","ati","atik","atikokania","atilt","atimy","atimon","ating","atinga","atingle","atinkle","atip","atypy","atypic","atypical","atypicality","atypically","atiptoe","atis","atka","atlanta","atlantad","atlantal","atlantean","atlantes","atlantic","atlantica","atlantid","atlantides","atlantis","atlantite","atlantoaxial","atlantodidymus","atlantomastoid","atlantoodontoid","atlantosaurus","atlas","atlases","atlaslike","atlatl","atlatls","atle","atlee","atli"];
var bWords = ["bicarbs","bicarbureted","bicarburetted","bicarinate","bicarpellary","bicarpellate","bicaudal","bicaudate","bicched","bice","bicellular","bicentenary","bicentenaries","bicentenarnaries","bicentennial","bicentennially","bicentennials","bicentral","bicentric","bicentrically","bicentricity","bicep","bicephalic","bicephalous","biceps","bicepses","bices","bicetyl","bichy","bichir","bichloride","bichlorides","bichord","bichos","bichromate","bichromated","bichromatic"];
var cWords = ["cartouches","cartridge","cartridges","carts","cartsale","cartulary","cartularies","cartway","cartware","cartwheel","cartwheeler","cartwheels","cartwhip","cartwright","cartwrighting","carua","caruage","carucage","carucal","carucarius","carucate","carucated","carum","caruncle","caruncles","caruncula","carunculae","caruncular","carunculate","carunculated","carunculous","carus","carvacryl","carvacrol","carvage","carval","carve","carved","carvel","carvels","carven","carvene","carver","carvers","carvership","carves","carvestrene","carvy","carvyl","carving","carvings","carvist","carvoeira","carvoepra","carvol","carvomenthene","carvone","carwash","carwashes","carwitchet","carzey","casa","casaba","casabas","casabe","casablanca","casal","casalty","casamarca","casanova","casanovanic","casanovas","casaque","casaques","casaquin","casas","casasia","casate","casaun"];
var dWords = ["disdiplomatize","disdodecahedroid","disdub","disease","diseased","diseasedly","diseasedness","diseaseful","diseasefulness","diseases","diseasy","diseasing","disecondary","diseconomy","disedge","disedify","disedification","diseducate","disegno","diselder","diselectrify","diselectrification","diselenid","diselenide","disematism","disembay","disembalm","disembargo","disembargoed","disembargoing","disembark","disembarkation","disembarkations","disembarked","disembarking","disembarkment","disembarks","disembarrass","disembarrassed","disembarrassment","disembattle","disembed","disembellish","disembitter","disembocation","disembody","disembodied","disembodies","disembodying","disembodiment","disembodiments","disembogue","disembogued","disemboguement","disemboguing","disembosom","disembowel","disemboweled","disemboweling","disembowelled","disembowelling","disembowelment","disembowelments","disembowels","disembower","disembrace","disembrangle","disembroil","disembroilment","disemburden","diseme","disemic","disemplane","disemplaned","disemploy","disemployed","disemploying","disemployment","disemploys","disempower","disemprison","disenable","disenabled","disenablement","disenabling","disenact","disenactment","disenamor","disenamour","disenchain","disenchant","disenchanted","disenchanter","disenchanting","disenchantingly","disenchantment","disenchantments","disenchantress","disenchants","disencharm","disenclose","disencourage","disencrease","disencumber","disencumbered","disencumbering","disencumberment","disencumbers","disencumbrance","disendow","disendowed","disendower","disendowing","disendowment","disendows","disenfranchise","disenfranchised","disenfranchisement","disenfranchisements","disenfranchises","disenfranchising","disengage","disengaged","disengagedness","disengagement","disengagements","disengages","disengaging","disengirdle","disenjoy","disenjoyment","disenmesh","disennoble","disennui","disenorm","disenrol","disenroll","disensanity","disenshroud","disenslave","disensoul","disensure","disentail","disentailment","disentangle","disentangled","disentanglement","disentanglements","disentangler","disentangles","disentangling","disenter","dysentery","dysenteric","dysenterical","dysenteries","d"];
var eWords = ["echoisms","echoist","echoize","echoized","echoizing","echolalia","echolalic","echoless","echolocate","echolocation","echometer","echopractic","echopraxia","echos","echovirus","echowise","echt","echuca","eciliate","ecyphellate","eciton","ecize","eckehart","ecklein","eclair","eclaircise","eclaircissement","eclairissement","eclairs","eclampsia","eclamptic","eclat","eclated","eclating","eclats","eclectic","eclectical","eclectically","eclecticism","eclecticist","eclecticize","eclectics","eclectism","eclectist","eclegm","eclegma","eclegme","eclipsable","eclipsareon","eclipsation","eclipse","eclipsed","eclipser","eclipses","eclipsing","eclipsis","eclipsises","ecliptic","ecliptical","ecliptically","ecliptics","eclogic","eclogite","eclogites","eclogue","eclogues","eclosion","eclosions","ecmnesia","eco","ecocidal","ecocide","ecoclimate","ecod","ecodeme","ecoid","ecol","ecole","ecoles","ecology","ecologic","ecological","ecologically","ecologies","ecologist","ecologists","ecomomist","econ","economese","econometer","econometric","econometrical","econometrically","econometrician","econometrics","econometrist","economy","economic","economical","economically","economicalness","economics","economies","economise","economised","economiser","economising","economism","economist","economists","economite","economization","economize","economized","economizer","economizers","economizes","economizing","ecophene","ecophysiology","ecophysiological","ecophobia","ecorch","ecorche","ecorticate","ecosystem","ecosystems","ecospecies","ecospecific","ecospecifically","ecosphere","ecossaise","ecostate","ecotype","ecotypes","ecotypic","ecotipically","ecotypically","ecotonal","ecotone","ecotones","ecotopic","ecoute","ecphasis","ecphonema","ecphonesis","ecphorable","ecphore","ecphory","ecphoria","ecphoriae","ecphorias","ecphorization","ecphorize","ecphova","ecphractic","ecphrasis","ecrase","ecraseur","ecraseurs","ecrasite","ecrevisse","ecroulement","ecru","ecrus","ecrustaceous","ecstasy","ecstasies","ecstasis","ecstasize","ecstatic","ecstatica","ecstatical","ecstatically","ecstaticize","ecstatics","ecstrophy","ectad","ectadenia","ectal","ectally","ectases","ectasia","ectasis","ectatic","ectene","ectental","ectepicondylar","ecteron","ectethmoid","ectethmoidal","ecthesis","ecthetically","ecthyma","ecthymata","ecthymatous","ecthlipses","ecthlipsis","ectypal","ectype","ectypes","ectypography","ectiris","ectobatic","ectoblast","ectoblastic","ectobronchium","ectocardia","ectocarpaceae","ectocarpaceous","ectocarpales","ectocarpic","ectocarpous","ectocarpus","ectocelic","ectochondral","ectocinerea","ect"];
var fWords = ["frocks","froe","froebelian","froebelism","froebelist","froeman","froes","frog","frogbit","frogeater","frogeye","frogeyed","frogeyes","frogface","frogfish","frogfishes","frogflower","frogfoot","frogged","frogger","froggery","froggy","froggier","froggies","froggiest","frogginess","frogging","froggish","froghood","froghopper","frogland","frogleaf","frogleg","froglet","froglets","froglike","frogling","frogman","frogmarch","frogmen","frogmouth","frogmouths","frognose","frogs","frogskin","frogskins","frogspawn","frogstool","frogtongue","frogwort","frohlich","froideur","froise","froisse","frokin","frolic","frolicful","frolicked","frolicker","frolickers","frolicky","frolicking","frolickly","frolicks","frolicly","frolicness","frolics","frolicsome","frolicsomely","frolicsomeness","from","fromage","fromages","fromenty","fromenties","fromfile","fromward","fromwards","frond","frondage","frondation","fronde","fronded","frondent","frondesce","frondesced","frondescence","frondescent","frondescing","frondeur","frondeurs","frondiferous","frondiform","frondigerous","frondivorous","frondless","frondlet","frondose","frondosely","frondous","fronds","frons","front"];
var gWords = ["gloated","gloater","gloaters","gloating","gloatingly","gloats","glob","global","globalism","globalist","globalists","globality","globalization","globalize","globalized","globalizing","globally","globate","globated","globe","globed","globefish","globefishes","globeflower","globeholder","globelet","globelike","globes","globetrotter","globetrotters","globetrotting","globy","globical","globicephala","globiferous","globigerina","globigerinae","globigerinas","globigerine","globigerinidae","globin","globing","globins","globiocephalus","globoid","globoids","globose","globosely","globoseness","globosite","globosity","globosities","globosphaerite","globous","globously","globousness","globs","globular","globularia","globulariaceae","globulariaceous","globularity","globularly","globularness","globule","globules","globulet","globulicidal","globulicide","globuliferous","globuliform","globulimeter","globulin","globulins","globulinuria","globulysis","globulite","globulitic","globuloid","globulolysis","globulose","globulous","globulousness","globus","glochchidia","glochid","glochideous","glochidia","glochidial","glochidian","glochidiate","glochidium","glochids","glochines","glochis","glockenspiel","glockenspiels","glod","gloea","gloeal","gloeocapsa","gloeocapsoid","gloeosporiose","gloeosporium","glogg","gloggs","gloy","gloiopeltis","gloiosiphonia","gloiosiphoniaceae","glom","glome","glomeli","glomera","glomerate","glomeration","glomerella","glomeroporphyritic","glomerular","glomerulate","glomerule","glomeruli","glomerulitis","glomerulonephritis","glomerulose","glomerulus","glomi","glommed","glomming","glommox","gloms","glomus","glonoin","glonoine","glood","gloom","gloomed","gloomful","gloomfully","gloomy","gloomier","gloomiest","gloomily","gloominess","glooming","gloomingly","gloomings","gloomless","glooms","gloomth","glop","glopnen","gloppen","gloppy","glops","glor","glore","glory","gloria","gloriam","gloriana","glorias","gloriation","gloried","glories","gloriette","glorify","glorifiable","glorification","glorifications","glorified","glorifier","glorifiers","glorifies","glorifying","gloryful","glorying","gloryingly","gloryless","gloriole","glorioles","gloriosa","glor"];
var hWords = ["horry","horribility","horrible","horribleness","horribles","horribly","horrid","horridity","horridly","horridness","horrify","horrific","horrifically","horrification","horrified","horrifiedly","horrifies","horrifying","horrifyingly","horripilant","horripilate","horripilated","horripilating","horripilation","horrisonant","horror","horrorful","horrorish","horrorist","horrorize","horrormonger","horrormongering","horrorous","horrors","horrorsome","hors","horse","horseback","horsebacker","horsebane","horsebean","horseboy","horsebox","horsebreaker","horsebush","horsecar","horsecars","horsecart","horsecloth","horsecloths","horsecraft","horsed","horsedom","horsedrawing","horseess","horsefair","horsefeathers","horsefettler","horsefight","horsefish","horsefishes","horseflesh","horsefly","horseflies","horseflower","horsefoot","horsegate","horsehair","horsehaired","horsehead","horseheads","horseheal","horseheel","horseherd","horsehide","horsehides","horsehood","horsehoof","horsey","horseier","horseiest","horsejockey","horsekeeper","horsekeeping","horselaugh","horselaugher","horselaughs","horselaughter","horseleach","horseleech","horseless","horsely","horselike","horseload","horselock","horseman","horsemanship","horsemastership","horsemen","horsemint","horsemonger","horsenail","horsepipe","horseplay","horseplayer","horseplayers","horseplayful","horsepond","horsepower","horsepowers","horsepox","horser","horseradish","horseradishes","horses","horseshit","horseshoe","horseshoed","horseshoeing","horseshoer","horseshoers","horseshoes","horseshoing","horsetail","horsetails","horsetongue","horsetown","horsetree","horseway","horseweed","horsewhip","horsewhipped","horsewhipper","horsewhipping","horsewhips","horsewoman","horsewomanship","horsewomen","horsewood","horsfordite","horsy","horsier","horsiest","horsify","horsyism","horsily","horsiness","horsing","horst","horste","horstes","horsts","hort","hortation","horta"];

