/**
 * Created by dcorns on 5/31/14.
 */
//Custom event example
//This example shows a dialog between client and server

'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/index.html');
});

io.on('connection',function(socket){
  console.log('a user connected');
  socket.emit('event', 'Hello Client');//Note that emit event name on the server matches the emit event name
  socket.on('event',function(data){    //of the client in this case.
    console.log(data);
  });
  socket.emit('thingy','Hello Client');         //As you can see here, it does not have to be the same.
  socket.on('thingyresponse', function(data){
    console.log(data);
  });
  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});