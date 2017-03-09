

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
}
