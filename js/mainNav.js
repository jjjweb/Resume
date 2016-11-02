/**
 * Created by tarena on 2016/11/2.
 */
    //Header:顶部动画效果
$('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 50, //Height of Navigation Bar
    filter: ':not(.external)',
    changeHash: true
});
/* NAVIGATION VISIBLE ON SCROLL */
mainNav();
$(window).scroll(function () {
    mainNav();
});
function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 40) $('.sticky-navigation').stop().animate({
        "opacity": '1',
        "top": '0'
    });
    else $('.sticky-navigation').stop().animate({
        "opacity": '0',
        "top": '-75'
    });
}