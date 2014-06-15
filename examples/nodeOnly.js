/**
 * Created by dcorns on 5/29/14.
 */
//Using node alone
//uses the ioclient.html
//Demonstrates how to implement bidirectional communication with node and socket.io
'use strict';
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

//Node Code
app.listen(3000);

//All sessions start with an http GET request
function handler(req, res){
  fs.readFile(__dirname + '/client/ioclient.html',
    function(err, data) {
      if(err){
        res.writeHead(500);
        return res.end('Error loading ioclient.html');
      }
      res.writeHead(200);
      res.end(data);
    });
}


//Socket.io code; more than likely websocket protocol will be used at this point, if not, long polling will kick in
io.sockets.on('connection', function(socket){

  socket.emit('event1', {hello: 'world'});//Send object to ioclient.html

  socket.on('event2', function (data){
    console.log(data);                    //log data received from ioclient.html
  });
});