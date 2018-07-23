$(function(){
  $('#datetime').html( date2string( new Date() ) );

  $('#form1').submit( function(){
    var data = {
      country: $('#country').val(),
      capital: $('#capital').val()
    };
    $.ajax( {
      type: 'POST',
      url: '/data',
      data: data,
      success: function( result ){
        //console.log( result );
        getAllData();
      },
      error: function(){
        console.log( 'error' );
      }
    });

    return false;
  });

  getAllData();
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

function getAllData(){
  $('#tbody1').html( '' );
  $.ajax( {
    type: 'GET',
    url: '/alldata',
    success: function( result ){
      //console.log( result );
      result.forEach( function( data ){
        var tr = '<tr>'
          + '<td>' + data.country + '</td><td>' + data.capital + '</td>'
          + '<td><input type="button" class="editbutton" value="編集"/>'
          + '<input type="button" class="deletebutton" value="削除"/></td>'
          + '</tr>';
        $('#tbody1').append( tr );
      });

      var tr = '<tr>'
        + '<td><input type="text" name="country" id="country"/></td>'
        + '<td><input type="text" name="capital" id="capital"/></td>'
        + '<td><input type="submit" class="updatebutton" value="更新"/></td>'
        + '</tr>';
      $('#tbody1').append( tr );
    },
    error: function(){
      console.log( 'error' );
    }
  });
}

