// 定义一个变量，表示当前显示的是第几个轮播项，从0开始
var index = 0;
// 功能1： 点击右侧按钮切换下一项
$('.slider .arrow-right').click(function () {
  index++;
  if (index > $('.slider li').length - 1) {
    index = 0;
  }
  $('.slider li')
    .eq(index)  // 找到对应的li
    .fadeIn(1000)  // 淡入显示
    .siblings()
    .fadeOut(1000);
});
$('.slider .arrow-left').click(function () {
  index--;
  if (index < 0) {
    index = $('.slider li').length - 1;
  }
  $('.slider li')
    .eq(index)  // 找到对应的li
    .fadeIn(1000)  // 淡入显示
    .siblings()
    .fadeOut(1000);
});
time();
var timer;
function time() {
  timer = setInterval(function () {
    index++;
    // 限制索引
    if (index > $('.slider li').length - 1) {
      index = 0;
    }
    // 动画
    $('.slider li')
      .eq(index)  // 找到对应的li
      .fadeIn(1000)  // 淡入显示
      .siblings()
      .fadeOut(1000);
  }, 2000)
}
// 功能5： 鼠标进入轮播区，停止自动轮播
$('.slider').mouseenter(function () {
  clearInterval(timer);
});
// 功能6： 鼠标离开轮播区，重新启动自动轮播
$('.slider').mouseleave(function () {
  time();
});