// $("#search").on('click', function () {
//   // movie title for api query-can we make this equal to an li?
//   var movieTitle = $('#movie-title').val();
//
// $('#movieTitle').on('change', 'input', function () {
//     var movieTitle = $('#movie-title').val();
//
// $('#movieCategory').on('change', 'input', function () {
//     var movieCategory = $('#movie-category').val();
  var sURL = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
  // Make our GET request
//     var movieRating = $('#movie-rating').val();
// create a variable for the container for DOM manipulation
  var container = $('#container');
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
       $.each(movies,function (index, value) {
        let $product = (`<br>\
            <div class="row product">\
            <div class="col-xs-4 text-center">\
            <img class="img-rounded poster" src=${value.poster}>\
            </div>\
            <div class="col-xs-8">\
            <h4 class="movie_title">${value.show_title}</h4>\
            <p>★★★★★</p>\
            <p class="summary">${value.summary}</p>\
            <p class="release_year">${value.release_year}</p>\
            </div>\
            </div>`);
        $(".container-products").append($product);

      })()
    },
    error: function (error) {
      console.log("Error: ", error);
    }
  });

  var $productTitles = $(".movieTitle").text();

var $titleSelection = $("#title option:selected").text();
var $categorySelection = $("#category option:selected").text();
var $yearSelection = $("#year option:selected").text();
