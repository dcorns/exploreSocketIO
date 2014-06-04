/**
 * Created by dcorns on 6/3/14.
 */

'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/game.html');
});

io.on('connection',function(socket){
  console.log('a user connected');

    socket.emit('start', {howdy:'partner'});

socket.on('start', function(data){
  data.x = 160; data.y = 80;
  socket.emit('setdot',data);
});
  var r = .5;
  socket.on('setdot',function(data){
    console.log('dot:'+data.x+','+data.y);
    for(var c=0;c<360;c++){
      data.x = data.x + r * Math.cos(2 * Math.PI * c / 360);
      data.y = data.y + r * Math.sin(2 * Math.PI * c / 360);
      console.log(c+','+data.x+','+data.y);
      socket.emit('drawstar',data);
      console.log(data);
    }
  });
  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});