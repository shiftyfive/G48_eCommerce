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
// request url by search movie title(s or t parameter) maybe we have to hard code searches to an li?
  var sURL = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
// create a variable for the container for DOM manipulation
  var container = $('#container');
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
        let $product = (`<br>\
            <div class="row">\
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
            // if ($product)
        $(".container .products").append($product);
      })()
    },
    error: function (error) {
      console.log("Error: ", error);
    }
  });
