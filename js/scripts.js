jQuery( document ).ready(function( $ ) {

  $.ajax( {
    url: 'https://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts',
    method: 'GET',
    headers: {"Access-Control-Allow-Origin": "*"},

    beforeSend: function ( xhr ) {
      xhr.setRequestHeader( 'X-WP-Nonce' ,'Access-Control-Allow-Origin: *');
    }
  } )


});
