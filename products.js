


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
