jQuery( document ).ready(function( $ ) {
  jQuery.get( "https://dev-apicalling.pantheonsite.io//wp-json/wp/v2/posts", function( posts ) {
    posts.forEach(function(post) {
      console.log(post.title.rendered);
      console.log(post.content.rendered);
      console.log(post.date);
    $(".posts").append("<div class='col-xs-4 col-md-4'>"+post.title.rendered+ post.content.rendered+"</div>")
    });
  } );
});
$.ajax({
    type: 'POST',
    url: 'http://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts/',
    data: {"status":"publish", 'title' : "This is the dev team","content": "They are cool"},
    crossDomain: true,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('abeer' + ':' + 'abeer'))))
    }
  });
  $.ajax({
    type: 'Delete',
    url: 'http://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts/6',
    // data: {'title' : "kelly","content": "she is cool"},
    crossDomain: true,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('abeer' + ':' + 'abeer'))))
    }
  });
