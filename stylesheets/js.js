

$(document).ready(function(){

$(".fire").click(function(){
$(this).addClass("start");

setTimeout(function(){
    $(".fire.start").addClass("burning");
}, 1000);

setTimeout(function(){
if ($(".fire.a").hasClass("burning")) {
$(".cows.oh").addClass("block");
setTimeout(function(){
  $(".cows.oh").css("opacity", "1");
}, 2000);
}
}, 1200);

setTimeout(function(){
if ($(".fire.c").hasClass("burning")) {
$(".cows.eh").addClass("block");
setTimeout(function(){
  $(".cows.eh").css("opacity", "1");
}, 1000);
}
}, 1200);

setTimeout(function(){
if ($(".fire.f").hasClass("burning")) {
$(".cows.ah").addClass("block");
setTimeout(function(){
  $(".cows.ah").css("opacity", "1");
}, 1000);
}
}, 1200);

setTimeout(function(){
if ($(".fire.e").hasClass("burning")) {
$(".cows.uh").addClass("block");
setTimeout(function(){
  $(".cows.uh").css("opacity", "1");
}, 1000);
}
}, 1200);
});

$(".cow").hover(function(){
$(this).addClass("kill");

//   setTimeout(function(){
//     if ($(".lol, .lel, .lal").hasClass("kill")) {
//     $(".cows").removeClass("block");
//   }
// }, 3000);

});


$(".gigi").click(function(){
$(".info.venus").css("left", "0");
$(".info.venus").css("opacity", "1");
});

$(".time").click(function(){
$(".time").toggleClass("moon");
$(".time").toggleClass("sun");

setTimeout(function(){
if ($(".time").hasClass("moon")) {
$(".pant").addClass("pantnight");
$(".papa").css('top', '38vh');
$(document.body).css('background-color', 'black');
$(".white").addClass("whitenight");
$(".pupil").addClass("pupilnight");
$(".vulkan").addClass("vulkannight");
$(".vulkan").addClass("vulkannight");
$(".name").css('color', 'white');
$(".degree").css('color', 'white');
$(".info").css('background-color', '#D1D1D1');
$(".info p").css('color', 'black');
$(".info h2").css('color', 'black');
$(".info h1").css('color', 'black');
$(".straight").css('background-color', 'white');

$(".cross").addClass("crossnight");
$(".cuznimg").css("background-image", "url(images/kuznimgnight.svg)");



$(".bogo").addClass("bogonight");
$(".boo").css("background-image", "url(images/boon.svg)");
$(".vo").css("background-image", "url(images/von.svg)");
$(".voo").css("background-image", "url(images/voon.svg)");
$(".panto").css("background-image", "url(images/panton.svg)");
$(".pantoo").css("background-image", "url(images/pantoon.svg)");
$(".kuzo").css("background-image", "url(images/kuzon.svg)");
$(".kuzoo").css("background-image", "url(images/kuzoon.svg)");
$(".greeno").css("background-image", "url(images/greenon.svg)");
$(".greenoo").css("background-image", "url(images/greenoon.svg)");

$(".clotho").css("background-image", "url(images/clothon.svg)");
$(".clothoo").css("background-image", "url(images/clothoon.svg)");

$(".homo").css("background-image", "url(images/homon.svg)");
$(".homoo").css("background-image", "url(images/homoon.svg)");

$(".sticko").css("background-image", "url(images/stickon.svg)");
$(".stickoo").css("background-image", "url(images/stickoon.svg)");

$(".cubo").css("background-image", "url(images/cubon.svg)");
$(".gameoo").css("background-image", "url(images/gameoon.svg)");

$(".kolizo").css("background-image", "url(images/kolizon.svg)");
$(".kolizoo").css("background-image", "url(images/kolizoon.svg)");

$(".veno").css("background-image", "url(images/venon.svg)");
$(".venoo").css("background-image", "url(images/venoon.svg)");

$(".diso").css("background-image", "url(images/dison.svg)");
$(".discoo").css("background-image", "url(images/discoon.svg)");

$(".co").css("background-image", "url(images/connn.svg)");
$(".coo").css("background-image", "url(images/coon.svg)");

$(".clothes").css("background-image", "url(images/clothnight.svg)");

$(".cubeo").css("background-image", "url(images/cubeon.svg)");
$(".cubet").css("background-image", "url(images/cubetn.svg)");
$(".stickleft, .stickright").css("background-image", "url(images/stickn.svg)");
$(".disco").css("background-image", "url(images/discon.svg)");
$(".kuzn").css("background-image", "url(images/kuznn.svg)");
$(".bog").css("background-image", "url(images/bogn.svg)");
$(".girl").css("background-image", "url(images/girln.svg)");
$(".selfanimate").css("background-image", "url(images/candlen.svg)");
$(".koliz").css("background-image", "url(images/colizn.svg)");
$(".houses").css("background-image", "url(images/housesn.svg)");

































$(".ornament.testtest").addClass("testtestwhite");
$(".ornament.eight").addClass("eightnight");
setTimeout(function(){
$(".ornament").removeClass("testtest");
$(".ornament").removeClass("eight");
}, 100);
}
}, 1200);
setTimeout(function(){
if ($(".time").hasClass("sun")) {
$(".pant").removeClass("pantnight");
$(".papa").css('top', '39vh');
$(document.body).css('background-color', '#8768E1');
$(".straight").css('background-color', 'black');
$(".white").removeClass("whitenight");
$(".pupil").removeClass("pupilnight");
$(".vulkan").removeClass("vulkannight");
$(".vulkan").removeClass("vulkannight");
$(".name").css('color', 'black');
$(".degree").css('color', 'black');
$(".info").css('background-color', 'black');
$(".info p").css('color', 'white');
$(".info h2").css('color', 'white');
$(".info h1").css('color', 'white');
$(".cross").removeClass("crossnight");
$(".cuznimg").css("background-image", "url(images/kuznimg.svg)");

$(".bogo").removeClass("bogonight");
$(".boo").css("background-image", "url(images/boo.svg)");
$(".vo").css("background-image", "url(images/vo.svg)");
$(".voo").css("background-image", "url(images/voo.svg)");
$(".panto").css("background-image", "url(images/panto.svg)");
$(".pantoo").css("background-image", "url(images/pantoo.svg)");
$(".kuzo").css("background-image", "url(images/kuzo.svg)");
$(".kuzoo").css("background-image", "url(images/kuzoo.svg)");
$(".greeno").css("background-image", "url(images/greeno.svg)");
$(".greenoo").css("background-image", "url(images/greenoo.svg)");

$(".clotho").css("background-image", "url(images/clotho.svg)");
$(".clothoo").css("background-image", "url(images/clothoo.svg)");

$(".homo").css("background-image", "url(images/homo.svg)");
$(".homoo").css("background-image", "url(images/homoo.svg)");

$(".sticko").css("background-image", "url(images/sticko.svg)");
$(".stickoo").css("background-image", "url(images/stickoo.svg)");

$(".cubo").css("background-image", "url(images/cubo.svg)");
$(".gameoo").css("background-image", "url(images/gameoo.svg)");

$(".kolizo").css("background-image", "url(images/kolizo.svg)");
$(".kolizoo").css("background-image", "url(images/kolizoo.svg)");

$(".veno").css("background-image", "url(images/veno.svg)");
$(".venoo").css("background-image", "url(images/venoo.svg)");

$(".diso").css("background-image", "url(images/diso.svg)");
$(".discoo").css("background-image", "url(images/discoo.svg)");

$(".co").css("background-image", "url(images/conn.svg)");
$(".coo").css("background-image", "url(images/coo.svg)");

$(".clothes").css("background-image", "url(images/cloth.svg)");

$(".cubeo").css("background-image", "url(images/cubeo.svg)");
$(".cubet").css("background-image", "url(images/cubet.svg)");
$(".stickleft, .stickright").css("background-image", "url(images/stick.svg)");
$(".disco").css("background-image", "url(images/disco.svg)");
$(".kuzn").css("background-image", "url(images/kuzn.svg)");
$(".bog").css("background-image", "url(images/bog.svg)");
$(".girl").css("background-image", "url(images/girl.svg)");
$(".selfanimate").css("background-image", "url(images/candle.svg)");
$(".koliz").css("background-image", "url(images/coliz.svg)");
$(".houses").css("background-image", "url(images/houses.svg)");



$(".ornament").addClass("testtest");
$(".ornament").addClass("eight");

setTimeout(function(){
$(".ornament.testtest").removeClass("testtestwhite");
$(".ornament.eight").removeClass("eightnight");
}, 100);
}
}, 1300);
});




$(".papa, .white").click(function(){
$(".info.mama").css("left", "0");
$(".info.mama").css("opacity", "1");
});

$(".bobo").click(function(){
$(".info.loved").css("left", "0");
$(".info.loved").css("opacity", "1");
});


$(".vuvu").click(function(){
$(".info.fest").css("left", "0");
$(".info.fest").css("opacity", "1");
});

$(".gregre").click(function(){
$(".info.rost").css("left", "0");
$(".info.rost").css("opacity", "1");
});

$(".moveit, .cloth, .draggableble").click(function(){
$(".info.naked").css("left", "0");
$(".info.naked").css("opacity", "1");
});

$(".hoho").click(function(){
$(".info.sleep").css("left", "0");
$(".info.sleep").css("opacity", "1");
});

$(".stst").click(function(){
$(".info.kids").css("left", "0");
$(".info.kids").css("opacity", "1");
});

$(".cubeo, .cucu").click(function(){
$(".info.games").css("left", "0");
$(".info.games").css("opacity", "1");
});

$(".koko").click(function(){
$(".info.kino").css("left", "0");
$(".info.kino").css("opacity", "1");
});

$(".kuku").click(function(){
$(".info.work").css("left", "0");
$(".info.work").css("opacity", "1");
});

$(".didi").click(function(){
$(".info.dance").css("left", "0");
$(".info.dance").css("opacity", "1");
});

$(".cece").click(function(){
$(".info.hot").css("left", "0");
$(".info.hot").css("opacity", "1");
});

$(".crossarea").click(function(){
$(".cursor").addClass("active");
$(".info").css("left", "-33.33vw");
$(".info").css("opacity", "0");
});






$(".crossarea").mouseover(function(){
$(".cursor").addClass("active");
});
$(".crossarea").mouseout(function(){
$(".cursor").removeClass("active");
});


$(".vo, .vuvu").mouseover(function(){
$(".voo").css("opacity", "1");
$(".v").css("opacity", "0.5");
});
$(".vo, .vuvu").mouseout(function(){
$(".voo").css("opacity", "0");
$(".v").css("opacity", "1");

});

$(".veno, .gigi").mouseover(function(){
$(".venoo").css("opacity", "1");
$(".gigigi").css("opacity", "0.5");
$(".bog").addClass("boglove");
setTimeout(function(){
$(".bog").removeClass('boglove');
}, 3000);
});
$(".veno, .girl").mouseout(function(){
$(".venoo").css("opacity", "0");
$(".gigigi").css("opacity", "1");
});

$(".f1o, .fire.a").mouseover(function(){
$(".f1oo").css("opacity", "1");
});
$(".f1o, .fire.a").mouseout(function(){
$(".f1oo").css("opacity", "0");
});

$(".f2o, .fire.b").mouseover(function(){
$(".f2oo").css("opacity", "1");
});
$(".f2o, .fire.b").mouseout(function(){
$(".f2oo").css("opacity", "0");
});

$(".f3o, .fire.f").mouseover(function(){
$(".f3oo").css("opacity", "1");
});
$(".f3o, .fire.f").mouseout(function(){
$(".f3oo").css("opacity", "0");
});

$(".f4o, .fire.e").mouseover(function(){
$(".f4oo").css("opacity", "1");
});
$(".f4o, .fire.e").mouseout(function(){
$(".f4oo").css("opacity", "0");
});

$(".f5o, .fire.c").mouseover(function(){
$(".f5oo").css("opacity", "1");
});
$(".f5o, .fire.c").mouseout(function(){
$(".f5oo").css("opacity", "0");
});

$(".f6o, .fire.d").mouseover(function(){
$(".f6oo").css("opacity", "1");
});
$(".f6o, .fire.d").mouseout(function(){
$(".f6oo").css("opacity", "0");
});

$(".bobo").mouseover(function(){
$(".boo").css("opacity", "1");
});
$(".bobo").mouseout(function(){
$(".boo").css("opacity", "0");
});

$(".papa, .white").mouseover(function(){
$(".pantoo").css("opacity", "1");
$(".pa").css("opacity", "0.5");
});
$(".papa, .white").mouseout(function(){
$(".pantoo").css("opacity", "0");
$(".pa").css("opacity", "1");

});

$(".gregre, .grenoo").mouseover(function(){
$(".greenoo").css("opacity", "1");
$(".gree").css("opacity", "0.5");
});
$(".gregre, .grenoo").mouseout(function(){
$(".greenoo").css("opacity", "0");
$(".gree").css("opacity", "1");
});

$(".kuku, .kuzo").mouseover(function(){
$(".kuzoo").css("opacity", "1");
$(".ku").css("opacity", "0.5");
});
$(".kuku, .kuzo").mouseout(function(){
$(".kuzoo").css("opacity", "0");
$(".ku").css("opacity", "1");
});

$(".diso, .didi").mouseover(function(){
$(".discoo").css("opacity", "1");
$(".dis").css("opacity", "0.5");
});
$(".diso, .didi").mouseout(function(){
$(".discoo").css("opacity", "0");
$(".dis").css("opacity", "1");
});

$(".co, .cece").mouseover(function(){
$(".coo").css("opacity", "1");
$(".ce").css("opacity", "0.5");
$(".bog").addClass("boganim");
setTimeout(function(){
$(".bog").removeClass('boganim');
}, 3000);
});
$(".co, .cece").mouseout(function(){
$(".coo").css("opacity", "0");
$(".ce").css("opacity", "1");
});

$(".cubeo, .cucu").mouseover(function(){
$(".gameoo").css("opacity", "1");
$(".cu").css("opacity", "0.5");
$(".koliz").addClass("kolizanime");
setTimeout(function(){
$(".koliz").removeClass("kolizanime");
}, 2000);
});
$(".cubeo, .cucu").mouseout(function(){
$(".gameoo").css("opacity", "0");
$(".cu").css("opacity", "1");
});

$(".stst, .sticko").mouseover(function(){
$(".stickoo").css("opacity", "1");
$(".sto").css("opacity", "0.5");
$(".houses").css("opacity", "0.2");
});
$(".stst, .sticko").mouseout(function(){
$(".stickoo").css("opacity", "0");
$(".sto").css("opacity", "1");
$(".houses").css("opacity", "1");
});

$(".koko, .kolizo").mouseover(function(){
$(".kolizoo").css("opacity", "1");
$(".kol").css("opacity", "0.5");
$(".kuzn").css("opacity", "0.2");
$(".houses").css("opacity", "0.2");

});
$(".koko, .kolizo").mouseout(function(){
$(".kolizoo").css("opacity", "0");
$(".kol").css("opacity", "1");
$(".kuzn").css("opacity", "1");
$(".houses").css("opacity", "1");
});

$(".homo, .hoho").mouseover(function(){
$(".homoo").css("opacity", "1");
$(".ho").css("opacity", "0.5");
$(".fire").removeClass("burning");
$(".fire").removeClass("start");
});
$(".homo, .hoho").mouseout(function(){
$(".homoo").css("opacity", "0");
$(".ho").css("opacity", "1");
});

$(".clotho, .draggableble, .moveit, .cloth").mouseover(function(){
$(".clothoo").css("opacity", "1");
$(".cloth").css("opacity", "0.5");
$(".celcium").addClass("anicelc");
setTimeout(function(){
$(".celcium").removeClass("anicelc");
}, 3000);
});
$(".clotho, .draggableble, .moveit, .cloth").mouseout(function(){
$(".clothoo").css("opacity", "0");
$(".cloth").css("opacity", "1");
});



$(".bog").mouseover(function() {
$(".girl").addClass("animate");
setTimeout(function(){
$(".girl").removeClass("animate");
}, 2000);
});

$(".girl").mouseover(function() {
$(".girl").addClass("selfanimate");
setTimeout(function(){
$(".girl").removeClass("selfanimate");
}, 2000);
});

$(".vuvu").mouseover(function() {
$(".vulkan").addClass("vulactive");
$(".kuzn").addClass("anikuzn");
$(".celcium").addClass("anicelc");
$(".houses").addClass("anihouse");
$(".girl").addClass("animate");
$(".stickleft").addClass("leftanim");
$(".stickright").addClass("rightanim");
$(".koliz").addClass("kolizanime");
$(".bog").addClass("boganim");



setTimeout(function(){
$(".vulkan").removeClass("vulactive");
$(".girl").removeClass("animate");
$(".kuzn").removeClass("anikuzn");
$(".stickleft").removeClass("leftanim");
$(".stickright").removeClass("rightanim");
$(".koliz").removeClass("kolizanime");
}, 2000);

setTimeout(function(){
$(".celcium").removeClass("anicelc");
}, 1500);

setTimeout(function(){
$(".bog").removeClass("boganim");
}, 3000);

setTimeout(function(){
$(".houses").removeClass("anihouse");

}, 2500);
});

$(".kuku").mouseover(function() {
$(".kuzn").addClass("anikuzn");
$(".disco").css('opacity', '0.2');
$(".sticks").css('opacity', '0.2');
setTimeout(function(){
$(".kuzn").removeClass("anikuzn");
}, 2000);
})
$(".kuku").mouseout(function() {
$(".disco").css('opacity', '1');
$(".sticks").css('opacity', '1');

})

$(".bog").mouseover(function() {
$(".bog").addClass("boganim");
setTimeout(function(){
$(".bog").removeClass("boganim");
}, 3000);
});

$(".koliz").mouseover(function() {
$(".koliz").addClass("kolizanime");
$(".kol").css('opacity', '0.5');
setTimeout(function(){
$(".koliz").removeClass("kolizanime");
}, 2000);
});
$(".koliz").mouseout(function() {
$(".kol").css('opacity', '1');
});

$(".celcium").mouseover(function() {
$(".celcium").addClass("anicelc");
setTimeout(function(){
$(".celcium").removeClass("anicelc");
}, 1500);
});

$(".disco").mouseover(function() {
$(".disco").addClass("disanim");
setTimeout(function(){
$(".disco").removeClass("disanim");
}, 1500);
});


$(".stst").mouseover(function() {
$(".stickleft").addClass("leftanim");
$(".stickright").addClass("rightanim");

setTimeout(function(){
  $(".stickleft").removeClass("leftanim");
  $(".stickright").removeClass("rightanim");
}, 2000);
});

$(".houses").mouseover(function() {
$(this).addClass("anihouse");
setTimeout(function(){
$(".houses").removeClass("anihouse");
}, 2500);
});

$(".sq.bobo").mouseover(function() {
$(".oval.bo").css("opacity", "0.5");
});
$(".sq.bobo").mouseout(function() {
$(".oval.bo").css("opacity", "1");
});

$(".sq.gigi").mouseover(function() {
$(".oval.gigigi").css("opacity", "0.5");
});
$(".sq.gigi").mouseout(function() {
$(".oval.gigigi").css("opacity", "1");
});



// if ($(window).height() < 846) {
//   $(document.body).css('background-color', 'red');
// }


$(".time, .sticks, .disco, .koko, .fire, .bog, .girl, .papa, .white, .vuvu, .gregre, .moveit, .draggableble, .hoho, .cece, .wow, .kuku").mouseover(function() {
$(".cursor").addClass("active");
    $(".km").css('opacity', '0');
});
$(".time, .sticks, .disco, .koko, .fire, .bog, .girl, .papa, .white, .vuvu, .gregre, .moveit, .draggableble, .hoho, .cece, .wow, .kuku").mouseout(function() {
$(".cursor").removeClass("active");
$(".km").css('opacity', '1');
});


// $(".sq.didi").mouseover(function() {
//   $(".lightning").css('display', 'block');
// });
$(".disco").one('mouseover', function(){
$('.lightning').css('display', 'block');
setTimeout(function(){
$(".lightning").css('display', 'none');
}, 400);
setTimeout(function(){
$(".lightning").css('display', 'block');
}, 600);
setTimeout(function(){
$(".lightning").css('display', 'none');
}, 900);

});

// $(".draggable").mouseover(function(event) {
//
//   $(".ananaa").css({
//   left:event.pageX,
//
// });
// });


$(document).mousemove(function(e) {
$('#line2').css({
left:e.pageX - 1680,
top:e.pageY - 0
});
$('#line').css({
left:e.pageX - -4,
top:e.pageY - 1050
});
$(".cursor.normal").css({
left:e.pageX - -1,
top:e.pageY - 3
});
$(".cursor.active").css({
left:e.pageX - -1,
top:e.pageY - 3
});
$(".km").css({
left:e.pageX - -10,
top:e.pageY - -6
});
if ($('.draggableble').is(":hover")) {
$(".moveit").css({
left:event.pageX,
});
} else {
$(".moveit").css('left', '16.5vw')
}

// if ($('.wow').is(":hover")) {
//   $(".cubeo").css({
//   left:event.pageX,
//   top:event.pageY
// });
// } else {
//   $(".cubeo").css({
//     left: 68.2 + "vw",
//     top: 84.5 + "vh"
//   });
// }

});

$(document).mousemove(function (event) {
let leaff = $(".leaftwo, .leafone");
let x = (leaff.offset().left) + (leaff.width() / 2);
let y = (leaff.offset().top) + (leaff.height() / 2);
let rad = Math.atan2(event.pageX - x, event.pageY - y);
let rot = (rad * (45 / Math.PI) * -1) + 45;
if ($('.sq.gregre').is(":hover")) {
leaff.css({
  '-webkit-transform': 'rotate(' + rot + 'deg)',
  '-moz-transform': 'rotate(' + rot + 'deg)',
  '-ms-transform': 'rotate(' + rot + 'deg)',
  'transform': 'rotate(' + rot + 'deg)'
});
} else {
$(".leafone, .leaftwo").css({'transform' : 'rotate('+ 0 +'deg)'});
}
});
});


$(document).mousemove(function (event) {
let now = $(".cubeo");
let xx = (now.offset().left) + (now.width() / 2);
let yy = (now.offset().top) + (now.height() / 2);
let radd = Math.atan2(event.pageX - xx, event.pageY - yy);
let rott = (radd * (180 / Math.PI) * -1) + 180;
if ($('.wow').is(":hover")) {
  now.css({
    '-webkit-transform': 'rotate(' + rott + 'deg)',
    '-moz-transform': 'rotate(' + rott + 'deg)',
    '-ms-transform': 'rotate(' + rott + 'deg)',
    'transform': 'rotate(' + rott + 'deg)'
  });
}
});


$(document).mousemove(function(e) {
let body_size_x = $( window ).width();
let body_size_y = $( window ).height();
let half_body_size_x = parseInt(body_size_x / 2);
let half_body_size_y = parseInt(body_size_y / 2);
let q_body_size_x = parseInt(half_body_size_x / 2);
let q_body_size_y = parseInt(half_body_size_y / 2);
let left_dir = e.pageX;
let top_dir = e.pageY;


let eq1 = left_dir < q_body_size_x;
let eq2 = left_dir < parseInt (q_body_size_x * 2) ;
let eq3 = left_dir < parseInt (q_body_size_x * 3) ;
let eq4 = left_dir < parseInt (q_body_size_x * 4) ;

let eq5 = top_dir < q_body_size_y;
let eq6 = top_dir < parseInt (q_body_size_y * 2) ;
let eq7 = top_dir < parseInt (q_body_size_y * 3) ;
let eq8 = top_dir < parseInt (q_body_size_y * 4) ;

let kmm = parseInt ((left_dir + top_dir) / 6)

$(".km").html(kmm + ' расстояние от города')

 if (eq1 && eq5) {
   $(".degree").html('40&deg;');
 } else if (eq2 && eq5) {
   $(".degree").html('43&deg;');
 } else if (eq3 && eq5) {
   $(".degree").html('42&deg;');
 } else if (eq4 && eq5) {
   $(".degree").html('39&deg;');
 } else if (eq1 && eq6) {
   $(".degree").html('38&deg;');
 } else if (eq2 && eq6) {
   $(".degree").html('41&deg;');
 } else if (eq3 && eq6) {
   $(".degree").html('40&deg;');
 } else if (eq4 && eq6) {
   $(".degree").html('38&deg;');
 } else if (eq1 && eq7) {
   $(".degree").html('37&deg;');
 } else if (eq2 && eq7) {
   $(".degree").html('38&deg;');
 } else if (eq3 && eq7) {
   $(".degree").html('36&deg;');
 } else if (eq4 && eq7) {
   $(".degree").html('35&deg;');
 } else if (eq1 && eq8) {
   $(".degree").html('36&deg;');
 } else if (eq2 && eq8) {
   $(".degree").html('37&deg;');
 } else if (eq3 && eq8) {
   $(".degree").html('35&deg;');
 } else if (eq4 && eq8) {
   $(".degree").html('34&deg;');
 }

});





// $(document).mousemove(function(e) {
//   let d_size_x = $(".draggable").width();
//   let d_size_y = $(".draggable").height();
//   let half_d_size_x = parseInt(d_size_x / 2);
//   let left_dir = e.pageX;
//   let top_dir = e.pageY;
//
//   let dd1 = left_dir < half_body_size_x;
//   let dd2 = left_dir > half_body_size_x;
//
//
//   if (dd1) {
//     $(".ananaa").css('background-color', 'black');
//   } else if (dd2) {
//     $(".ananaa").html('background-color', 'green');
//   }
// });

let balls = document.getElementsByClassName("pupil");
document.onmousemove = function(){
let x = event.clientX * 100 / window.innerWidth + "%";
let y = event.clientY * 100 / window.innerHeight + "%";

for(let i=0;i<2;i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].style.transform = "translate(-"+x+",-"+y+")";
}
}

// $(document).mousemove(function(event) {
//   let leaff = $(".leaftwo, .leafone");
//   let x = (leaff.offset().left) + (leaff.width() / 2);
//   let y = (leaff.offset().top) + (leaff.height() / 2);
//   let rad = Math.atan2(event.pageX - x, event.pageY - y);
//   let rot = (rad * (180 / Math.PI) * -1) + 180;
//   leaff.css({
//     '-webkit-transform': 'rotate(' + rot + 'deg)',
//     '-moz-transform': 'rotate(' + rot + 'deg)',
//     '-ms-transform': 'rotate(' + rot + 'deg)',
//     'transform': 'rotate(' + rot + 'deg)'
//   });
// });



$(window).resize(function() {
 if ($(window).height() < 400 && $(window).width() > 1024) {
    alert('Дорогой друг! Ты масштабировал окно браузера слишком увлеченно и сломал сайт. Исправься.');
 }
 if ($(this).height() < 846) {
        $('.ornament').addClass("eight");
        $('.ornament').removeClass("testtest");

    } else {
        $('.ornament').toggleClass("testtest");
        $('.ornament').removeClass("eight");
    }
});
