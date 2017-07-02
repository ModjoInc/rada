$.preload( 'img/rada1.jpg',
  'img/rada2.jpg',
  'img/rada3.jpg',
  'img/rada4.jpg',
  'img/rada.jpg'
);

$(document).ready(function(){
    $('#slide1').parallax("center", 0, 0.1, true);
    $('#slide2').parallax("center", 900, 0.1, true);
    $('#slide3').parallax("center", 2900, 0.1, true);
});
