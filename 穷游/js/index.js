// 顶部搜索框
$('.icon-fangdajing').mouseenter(function () {
    // $('#input').css('display','block');
    $('#input').stop().show(200);
    $(this).css('color', 'green');
});
$('.icon-fangdajing').mouseleave(function () {
    // $('#input').css('display','none');
    $('#input').stop().hide(200);
    $('.icon-fangdajing').css('color', 'white');
});
$('#input').mouseenter(function () {
    // $('#input').css('display','block');
    $('#input').stop().show(200);
    $(this).css('color', 'green');
});
$('#input').mouseleave(function () {
    // $('#input').css('display','none');
    $('#input').stop().hide(200);
    $('.icon-fangdajing').css('color', 'white');
});
// 顶部搜索框结束


// 下面的社区之类的开始
$('#shequ').mouseenter(function () {
    $('#shequ').css('color','green').stop().show(200);
});
$('#shequ').mouseleave(function () {
    $('#shequ').stop().hide(200);
});
$('#nav_list li:eq(2)').mouseenter(function () {
    $('#shequ').stop().show(200);
});
$('#nav_list li:eq(2)').mouseleave(function () {
    $('#shequ').stop().hide(200);
});
$('#nav_list li:eq(4)').mouseenter(function () {
    $('#shop').stop().show(200);
});
$('#shop').mouseenter(function () {
    $('#shop').stop().show(200);
});
$('#shop').mouseleave(function () {
    $('#shop').stop().hide(200);
});
$('#nav_list li:eq(4)').mouseleave(function () {
    $('#shop').stop().hide(200);
});
$('#nav_list li:eq(5)').mouseenter(function () {
    $('#host').stop().show(200);
});
$('#nav_list li:eq(5)').mouseleave(function () {
    $('#host').stop().hide(200);
});
$('#host').mouseenter(function () {
    $('#host').stop().show(200);
});
$('#host').mouseleave(function () {
    $('#host').stop().hide(200);
});
$('#nav_list li:eq(6)').mouseenter(function () {
    $('#news').stop().show(200);
});
$('#nav_list li:eq(6)').mouseleave(function () {
    $('#news').stop().hide(200);
});
$('#news').mouseenter(function () {
    $('#news').stop().show(200);
});
$('#news').mouseleave(function () {
    $('#news').stop().hide(200);
});
$('#nav_list li:eq(7)').mouseenter(function () {
    $('#app').stop().show(200);
});
$('#nav_list li:eq(7)').mouseleave(function () {
    $('#app').stop().hide(200);
});
$('#app').mouseenter(function () {
    $('#app').stop().show(200);
});
$('#app').mouseleave(function () {
    $('#app').stop().hide(200);
});
// 下面社区之类的结束
// 菜单栏的跳转
$('.menu li').click(function(){
        var index = $(this).index();
        $('#menu li').eq(index).show(200).siblings().hide(200);
});

var index = 0;
var timer;
function autoplay(){
    timer = setInterval(function(){
            // 找到轮播当前项，淡出隐藏
            $('.content ul').eq(index).fadeOut(500);
           console.log('lalala');
            index ++;
            console.log(index);
            // 限制索引
            if (index > $('.content ul').length) {
              index = 0;
            }
           
            // 下一个轮播项淡入显示
            $('.content ul').eq(index).fadeIn(500);
            console.log('ssssss');    
    },1000)
}
autoplay();
$('.content').mouseenter(function () {
    clearInterval(timer);
  });
  //  鼠标离开轮播区，重新启动自动轮播
  $('.content').mouseleave(function () {
    autoplay();
  });
  $('#showlist span').mouseenter(function(){
    var index = $(this).index();
    $('#piclist img').eq(index).css('display','block').siblings().css('display','none');
  });