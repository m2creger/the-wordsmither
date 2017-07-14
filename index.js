var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
 
});
/*
app.configure(function() {
	app.use(express.static(path.join(__dirname,'public')));
});
*/

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
/*
function hostCreateNewGame() {
	console.log("new game created")
	var gameID = (Math.random() * 100000) | 0;
	this.emit('newGameCreated', {gameId: gameID, mySocketId: this.id});
	this.join(gameID.toString());

}
*/