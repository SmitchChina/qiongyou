
//导航栏鼠标进入显示部分
$('.topNav')
    .find('.publicLi')
    .mouseenter(function () {
        $(this)
            .find('.public')
            .css('display', 'block')
    });

$('.topNav')
    .find('.publicLi')
    .mouseleave(function () {
        $(this)
            .find('.public')
            .css('display', 'none')
    });

//搜索框鼠标进入变宽效果
$('.searchDiv').mouseenter(function(){
    

    $('.scarch').animate({
        width: 220,
    }, 200, 'linear')

})
$('.searchDiv').mouseleave(function(){

    $('.scarch').animate({
        width: 0,
    }, 200, 'linear')
    
});

//轮播图淡入淡出js效果

//鼠标进入小图片

// 1 小图片显示边框效果
// 2 三角形出现
// 3 指定大图出现

//小图添加鼠标进入效果
$('.smallimg')
.find('li')
.mouseenter(function (){
    //记录小图下标位置 是大图显示
    var index = $(this).index();
    //改变边框以及三角形样式
    $(this)
    .css('border','2px solid #e0ffff')
    .children('.triangleimg')
    .css('display','block')  //显示边框和三角形
    .parent('li')      ////隐藏边框和三角形
    .siblings('li')
    .css('border','none')
    .children('.triangleimg')
    .css('display','none');
    console.log(index)
     //淡入淡出效果
    $('.mainImg .bg')
    .eq(index)
    .fadeIn(200,'linear')
    .siblings()
    .eq(index)
    .fadeOut(200,'linear')

});

//自动轮播效果
// 1 小图显示边框三角形
// 2 大图指定轮动

// var index = 0;
// setInterval(fn,500)
// function fn (){
//    index++;
//    if(index>4){
//        index = 0;
//    }
//    $('.mainImg .bg')
//    .eq(index)
//    .fadeIn(190,'linear')
//    .siblings()
//    .eq(index)
//    .fadeOut(190,'linear')
// }


// $('.smallimg')
// .find('li')
// .mouseleave(function(){
//     var index = $(this).index();
//     $('.mainImg .bg')
   
// })

// 鼠标进入显示版面列表
$('.rightWord')
.find('.item1')
.children('a')
.mouseenter(function (){
 $('.contury-list')
 .fadeIn(200,'linear');
});
//鼠标离开事件
$('.rightWord')
.find('.item1')
.children('a')
.mouseleave(function (){
 $('.contury-list')
 .fadeOut(600,'linear');
});

// 问题遗留  鼠标不能再dl上面入







