$(function(){
    $(".lbox").hover(function(){
        $(".menu").css("display","block");
    },function(){
        $(".menu").css("display","none");
    });
    $(".left>li").on("mouseenter",function(){
        $(this).css("background","#cccccc").siblings("li:not(.put)").css("background","white");
    });
    $(".left>li").on("mouseleave",function(){
        $(this).css("background","white");
        $(".put").css("background","#cccccc");
    });
    $(".left>li").on("click",function(){
        $(this).addClass("put").css("background","#cccccc").siblings("li").css("background","white").removeClass("put");
    })
})