jQuery( document ).ready(function( $ ) {
  jQuery.get( "http://dev-apicalling.pantheonsite.io//wp-json/wp/v2/posts", function( posts ) {
    // console.log( posts );
    posts.forEach(function(post) {
      console.log(post.title.rendered);
      console.log(post.content.rendered);
      console.log(post.date);
    $(".posts").append("<div class='col-xs-4 col-md-4'>"+post.title.rendered+ post.content.rendered+"</div>")


    });
  } );
});
