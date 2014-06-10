/**
 * Created by dcorns on 6/8/14.
 */
'use strict';

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/nameSpace.html');
});

var nsp = io.of('/namespace1');
nsp.on('connection', function(socket){
  console.log('someone connected to namespace1');
  nsp.emit('nsp1','Connected to namespace1');
});

var nsp2 = io.of('/namespace2');
nsp2.on('connection', function(socket){
  console.log('someone connected to namespace2');
  nsp2.emit('nsp2','Connected to namespace2');
});

