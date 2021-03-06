// app.js

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();

app.use( bodyParser.urlencoded() );
app.use( bodyParser.json() );

app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/templates' );
app.set( 'view engine', 'ejs' );

var alldata = [];

app.get( '/', function( req, res ){
  res.render( 'index', { title: 'K.Kimura のページ', alldata: alldata } );
});

app.post( '/data', function( req, res ){
  var found = false;
  for( var i = 0; i < alldata.length && !found; i ++ ){
    if( alldata[i].country == req.body.country ){
      alldata[i].capital = req.body.capital;
      found = true;
    }
  }
  if( !found ){
    alldata.push( req.body );
  }

  res.contentType( 'application/json' );
  res.write( JSON.stringify( req.body ) );
  res.end();
});

app.delete( '/data', function( req, res ){
  for( var i = 0; i < alldata.length; i ++ ){
    if( alldata[i].country == req.body.country ){
      alldata.splice( i, 1 );
    }
  }

  res.contentType( 'application/json' );
  res.write( JSON.stringify( {} ) );
  res.end();
});

var port = 3000;
app.listen( port );
console.log( 'server started on ' + port );
