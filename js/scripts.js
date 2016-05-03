//
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//
//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);
//
//   } else if (typeof XDomainRequest != "undefined") {
//
//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//
//   } else {
//
//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;
//
//   }
//   return xhr;
// }
// var url = 'https://http://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts';
// var xhr = createCORSRequest('GET', url);
// xhr.send();

// $(document).on("pageload",function(event,data){
//   alert("pageload event fired!");
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://http://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts", false);
//   xhr.send();
// });

$( document ).ready(function() {
    console.log( "ready!" );
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://http://dev-apicalling.pantheonsite.io/wp-json/wp/v2/posts", false);
    xhr.send();
    console.log(xhr.status);
    console.log(xhr.statusText);
});

// Add your code below!
