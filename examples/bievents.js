/**
 * Created by dcorns on 6/14/14.
 */
'use strict';
//Demonstrates the use of socket.io's built in events
//To see the error event fire, change the setfile callback to a non existing file.
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/bievents.html'); //Handshake using http
});

io.sockets.on('connection', function(socket){ //Communications established, now probably using websocket.
  console.log('connection made');
  socket.emit('event1', {howdy:'Partner'});
  socket.on('error',function(data){
    console.dir(data);
  });
  socket.on('disconnect',function(){
    console.log('someone disconnected');
  });

});