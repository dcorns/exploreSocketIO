/**
 * Created by dcorns on 6/3/14.
 */

'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/realtimeUpdate.html');
});

io.on('connection',function(socket){
  console.log('a user connected');

    socket.emit('start', {howdy:'partner'});

  socket.on('start', function(data){
  data.x = 200; data.y = 200;
  socket.emit('setdot',data);
});
  var r = 0;
  socket.on('setdot',function(data){
    console.log('dot:'+data.x+','+data.y+','+data.t+','+data.c);
    data.t = data.t * 1;
    r = data.t || r;
    for(var c=0;c<data.c;c++){
      console.dir(data);
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