jQuery( document ).ready(function( $ ) {
  jQuery.get( "https://dev-apicalling.pantheonsite.io//wp-json/wp/v2/posts", function( response ) {
      console.log( response );
  } );
});
