// index.js

jQuery(function($) {
  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
      $('<img/>')[0].src = this;
    });
  }

  imgArray = [
      'imgs/stefanandmichael2.jpg',
      'imgs/stefanandmichael3.jpg',
      'imgs/stefanandmichael4.jpg',
      'imgs/stefanandmichael5.jpg',
      'imgs/stefanandmichael6.jpg',
      'imgs/stefanandmichael7.jpg',
      'imgs/stefanandmichael8.jpg',
      'imgs/stefanandmichael9.jpg',
      'imgs/stefanandmichael10.jpg'
  ];

  preload(imgArray);

  var timer, imgsrc, cntr = 0;
    $('.stefan img').bind('mouseover', function() {
      if (!timer) {
        var $t = $(this);
        imgsrc = $t.attr('src').replace('1.jpg','');
        timer = setInterval(function() {
          $t.attr('src', imgsrc + (cntr+1) + ".jpg");
          cntr = ( cntr + 1 ) % 10;
        }, 300);
      }
    }).bind('mouseout',function() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      $(this).attr('src', imgsrc + '1.jpg');
    });
});
