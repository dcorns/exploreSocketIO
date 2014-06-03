/**
 * Created by dcorns on 6/3/14.
 */
//use index.html
'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/moreStuff.html');
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