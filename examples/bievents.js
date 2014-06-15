/**
 * Created by dcorns on 6/14/14.
 */
'use strict';
//Demonstrates the use of socket.io's built in events
//See if you can cause an error so the error event will fire. I couldn't
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/ttest.html'); //Handshake using http
});

io.sockets.on('connection', function(socket){ //Communications established, now probably using websocket.
  console.log('connection made');
  socket.emit('event1', {howdy:socket.emit});
  socket.on('error',function(data){
    console.dir(data);
  });
  socket.on('disconnect',function(){
    console.log('someone disconnected');
  });

});