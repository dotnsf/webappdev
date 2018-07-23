$(function(){
  $('#datetime').html( date2string( new Date() ) );

  $('#form1').submit( function(){
    var data = {
      country: $('#country').val(),
      capital: $('#capital').val()
    };
    $.ajax({
      type: 'POST',
      url: '/data',
      data: data,
      success: function( result ){
        //console.log( result );
        location.href = '/';
      },
      error: function(){
        console.log( 'error' );
      }
    });

    return false;
  });
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

function editData( data ){
  $('#country').val( data.country );
  $('#capital').val( data.capital );
}

function deleteData( country ){
  if( window.confirm( country + 'のデータを削除してもよろしいですか？' ) ){
    $.ajax({
      type: 'DELETE',
      url: '/data',
      data: { country: country },
      success: function( result ){
        //console.log( result );
        location.href = '/';
      },
      error: function(){
        console.log( 'error' );
      }
    });
  }
}

