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
    $('#shequ').stop().show(200);
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