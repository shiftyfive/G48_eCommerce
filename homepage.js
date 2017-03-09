
var cageArray = [
  "imgs/cage-carousel-1.jpg",
  "imgs/cage-carousel-2.jpg",
  "imgs/cage-carousel-3.jpg",
  "imgs/cage-carousel-4.png",
  "imgs/cage-carousel-5.jpg",
]


var $cageSelector = $(".myCarousel img")

var i = 0

setInterval(function () {
  // $(".myCarousel img").fadeIn("slow", function(){
  if(i === cageArray.length) {
    i = 0
  } else {
    $(".myCarousel img").attr("src", `${cageArray[i]}`)
    i++
  }
  // })
}, 1000);
