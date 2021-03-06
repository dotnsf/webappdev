// app.js

var express = require( 'express' );
//var bodyParser = require( 'body-parser' );
var app = express();

/*
app.use( bodyParser.urlencoded() );
app.use( bodyParser.json() );
*/

app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/templates' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( req, res ){
  res.render( 'index', { title: 'K.Kimura のページ' } );
});

var port = 3000;
app.listen( port );
console.log( 'server started on ' + port );
