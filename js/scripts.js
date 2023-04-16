$(function() {

  $(".slide-option").rlSmooth('slide', {
    in: 0,

  });

  $(".slideOut-option").rlSmooth('slideOut',{
  	in: 1700,
    out: 1800,
  	on: 1000,
  	off: 800
  });

  $(".slideHide-option").rlSmooth('slideHide',{
  	in: 1900,
    out: 2100
  });

  $(".fade-option").rlSmooth('fade',{
    in: 500,
    out: 800
  });

  $(".fadeUp-option").rlSmooth('fadeUp',{
    in: 700,
    out: 1000
  });

  $(".fadeHide-option").rlSmooth('fadeHide',{
    in: 900,
    out: 1300
  });

  $(".showHide-option").rlSmooth('showHide',{
    in: 1100,
    out: 1800
  });

  $(".showUp-option").rlSmooth('showUp',{
    in: 1300,
    out: 1500
  });

  $(".showOut-option").rlSmooth('showOut',{
    in: 1500,
    out: 2100
  });

});
