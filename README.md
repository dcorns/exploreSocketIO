HI DALE!!!!!!!!










exploreSocketIO
===============

SocketIO usage examples

How to use:
All the examples in this repository require node to run. Also, after cloning, you should run node install in order to install all the dependencies.

The examples directory contains the server files. To run the server file cd examples and enter node <i>filename</i> in the console.
The client subdirectory contains the client files. All the code for the clients is stored in the .html file for ease of analysis.

Little will be gained from these examples by simply running the code. Logs to console have been included (sometimes that is all there is) to demonstrate a particular aspect of socket.io. One must take a look at the code in order to realize any real benefit as little to no explanation is provided in the output. The details of what each example is here to demonstrate is listed below or in the code itself or both. The examples build a little in complexity in order of the listing.

For a more complete example, see <a href="https://github.com/dcorns/simplechat">simplechat</a>

'nodeOnly'-Demonstrates how to establish communications in plain node.

'nodeExpress'-Demonstrates how to establish communications in node express.

'areYouDeaf'-Demonstrates basic interaction between the client and server.

'shutupalready'-Demonstrates the ability to spread a function across the client and server

'realtimeUpdate'-Demonstrates how changes on multiple clients are seamlessly update to all from the server without request

'nameSpace'-Demonstrates the implementation of name spacing

'bievents'-Example of using the built in events

