$(function(){
    $(".lbox").hover(function(){
        $(".menu").css("display","block");
    },function(){
        $(".menu").css("display","none");
    });
    var flag=true;
    $(".attention1").click(function(){
        if(flag){
           $(this).html("取消关注");
           flag=false;
       }else{
           $(this).html("+关注");
           flag=true;
       }
    });
    $("textarea").focus(function () {
        $(".b-box").css("display","block");
    })
    $("textarea").blur(function () {
        $(".b-box").css("display","none");
    })
})