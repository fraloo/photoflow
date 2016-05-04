var fs = require('fs');
var http = require('http');

//Lets define a port we want to listen to
const PORT = process.env.OPENSHIFT_NODEJS_PORT || 1337; 
// const PORT = 7331; 

//We need a function which handles requests and send response
function handleRequest( request, response ){
    response.writeHead( 418, {
        'Content-Type': 'text/plain' 
    } );
    response.write( 'WAT' );
    response.end( 'Obey: ' + request.url);
}

//Create a server
var server = http.createServer( handleRequest );

//Lets start our server
server.listen( PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log( "Server listening on: http://localhost:%s", PORT );
} );