/**
 * Created by dcorns on 6/8/14.
 */
'use strict';

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/rooms.html');
});

io.on('connection', function(socket) {
  socket.on('room', function(data){
    socket.join(data);
    socket.emit('joined', 'Joined room1');
  });


});
io.sockets.in('room1').emit('message','Whats up!');