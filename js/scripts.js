jQuery( document ).ready(function( $ ) {
  jQuery.get( "http://dev-apicalling.pantheonsite.io//wp-json/wp/v2/posts", function( response ) {
      console.log( response );
  } );

});
