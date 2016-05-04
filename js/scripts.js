jQuery( document ).ready(function( $ ) {

  $.ajax( {
    url: 'https://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts',
    method: 'GET',
    beforeSend: function ( xhr ) {
    xhr.setRequestHeader( 'X-WP-Nonce' );
    }
  } )

});
