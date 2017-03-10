
let movies;

$.ajax ({
  method: 'GET',
  url: 'http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage',
  success: function (results) {
    console.log("Done: ", results);
    movies = results;
    $.each(movies,function (index, value) {
      let $product = (`<br>\
        <div class="row product${index}">\
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

  $('#title').change(function () {
    console.log('changed')
    var $titleSelection = $("#title option:selected").text();
    $.each(movies,function (index, value) {
      if ($titleSelection !== value['show_title']) {
        $(`.product${index}`).hide()
      }
    })
  });
