

<<<<<<< HEAD

=======
>>>>>>> 1ae4e2e53ca67c4d553c8618acdf2ff9e77df27d
// $("#search").on('click', function () {
//   // movie title for api query-can we make this equal to an li?
//   var movieTitle = $('#movie-title').val();
//
// $('#movieTitle').on('change', 'input', function () {
//     var movieTitle = $('#movie-title').val();
//
// $('#movieCategory').on('change', 'input', function () {
//     var movieCategory = $('#movie-category').val();
//
// $('#movieRating').on('change', 'input', function () {
//     var movieRating = $('#movie-rating').val();



// create a variable for the container for DOM manipulation
  var container = $('#container');

  // Make our GET request


// request url by search movie title(s or t parameter) maybe we have to hard code searches to an li?
  var sURL = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
// create a variable for the container for DOM manipulation
  var container = $('.products');
  // Make our GET reqs

  $.ajax ({
    method: 'GET',
    url: 'http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage',
    success: function (results) {
      console.log("Done: ", results);
      var movies = results;
      console.log(results);
       $.each(movies,function (index, value) {
        console.log(value);

        container.append(<div class=row><div class=col-sm-4>

        <img src= + value.poster + </div></div>+
        // '<li>' + value.show_title + '</li>' +
        // '<li>' + value.release_year + '</li>' +
        // '<li>' + value.category+ '</li>' +
        // '<li>' + value.show_cast + '</li>' +
        // '<li>' + value.summary + '</li></div>');
      })()
    },
    error: function (error) {
      console.log("Error: ", error);
    }
  });
// });

<<<<<<< HEAD
$.ajax ({
  method: 'GET',
  url: 'http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage',
  success: function (results) {
    console.log("Done: ", results);
    var movies = results;
    console.log(results);
     $.each(movies,function (index, value) {
      console.log(value);

      container.append(<div class=row><div class=col-sm-4>

      <img src= + value.poster + </div></div>+
      // '<li>' + value.show_title + '</li>' +
      // '<li>' + value.release_year + '</li>' +
      // '<li>' + value.category+ '</li>' +
      // '<li>' + value.show_cast + '</li>' +
      // '<li>' + value.summary + '</li></div>');
    })()
  },
  error: function (error) {
    console.log("Error: ", error);
  }
});
=======

// $( "div " ).append( $newdiv1, [ newdiv2, existingdiv1 ] );
// $('.share_list_popup ul').append('<li><a href="' + facebookLink + '">Facebook</a></li>');
// ${votingTime}

// Inside:
// <div class="row">
// <div class="col-xs-4 text-center">
// ----> <div class="col-xs-8">

// Movie Title Header IDs: <h4> ppTitle1, 2, 3
// Movie Img: ppImg1, 2, 3
// Price IDs: <small> smPPprice1, 2, 3
// Rating IDs: <p> ppRating1, 2 ,3
// Description IDs: <p> ppDesc1, 2, 3


let ppTitle = 'Nic Cage Movie'
let ppImg = "'http:www.placecage.com/c/300/175'"
let smPPprice = '00.00'
let ppRating = '★★★★☆'
let ppDesc = 'description description description'

// let cageArray = [
//   { title: "'Nic Cage Movie'",
//     img: "'http:www.placecage.com/c/300/175'",
//     price: '00.00',
//     rating: '★★★★☆'
//     desc: 'description description description'
//   },
// ]

for (var i = 0; i < 8 ; i++) {
  let $product = $(
    `<br>\
    <div class="row">\
    <div class="col-xs-4 text-center">\
    <img id="ppImg" class="img-rounded" src=${ppImg}>\
    </div>\
    <div class="col-xs-8">\
    <h4 id="ppTitle">${ppTitle}</h4>\
    <small class="smPPprice"><strong>$</strong> 00.00</small>\
    <p id="ppRating">${ppRating}</p>\
    <p id="ppDesc">${ppDesc}</p>\
    </div>\
    </div>`
  );
  $("body").append($product);

>>>>>>> 1ae4e2e53ca67c4d553c8618acdf2ff9e77df27d
