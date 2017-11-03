$(function(){
    $(".lbox").hover(function(){
        $(".menu").css("display","block");
    },function(){
        $(".menu").css("display","none");
    });
    /*关注*/
    /*var flag=true;*/
    for(let i=0;i<$(".button").length;i++){
        $(".button").eq(i).click(function(){
           if($(this).html()=="已关注"){
               $(this).html("+关注").css({"background":"limegreen","color":"white"});
           }else{
               $(this).html("已关注").css({"background":"#cccccc","color":"#222222"});
           }
        })
    }

})