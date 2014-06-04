/**
 * Created by dcorns on 5/30/14.
 */
'use strict';
//Using Node Express
//Of course their is less code required from you
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/ioclient.html');
});

io.sockets.on('connection', function(socket){
  socket.emit('event1', {howdy:'partner'});
  socket.on('event2', function (data){
  console.log(data);
  });
});



