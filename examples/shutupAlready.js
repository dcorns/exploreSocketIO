/**
 * Created by dcorns on 6/3/14.
 */
//use moreStuff.html
//Demonstrates the ability to extend a function on the server to the client through the socket
//Note that the client carries out commands repeatedly as if it were contained in the for loop
//on the server
//Also the server is only pushing and not needing a request or any kind of reply from the client.
'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/shutupAlready.html');
});

io.on('connection',function(socket){
  console.log('a user connected');

  for(var a=0;a<40;a++){
    socket.emit('rant','Hello Client');
  }

  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});