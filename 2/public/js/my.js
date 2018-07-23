$(function(){
  $('#datetime').html( date2string( new Date() ) );
});

function date2string( dt ){
  var y = dt.getFullYear();
  var m = dt.getMonth() + 1;
  var d = dt.getDate();
  var h = dt.getHours();
  var n = dt.getMinutes();
  var s = dt.getSeconds();

  var ymdhns = y
    + '-' + ( m < 10 ? '0' : '' ) + m
    + '-' + ( d < 10 ? '0' : '' ) + d
    + ' ' + ( h < 10 ? '0' : '' ) + h
    + ':' + ( n < 10 ? '0' : '' ) + n
    + ':' + ( s < 10 ? '0' : '' ) + s;

  return ymdhns;
}
