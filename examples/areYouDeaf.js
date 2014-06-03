/**
 * Created by dcorns on 5/31/14.
 */
//Custom event example
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
  socket.emit('other event', 'Hello Client');
  socket.on('other event',function(data){
    console.log(data);
  });
  socket.emit('thingy','Hello Client');
  socket.on('thingy', function(data){
    console.log(data);
  });
  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});