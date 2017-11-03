$(function(){
    $("form").validate({
        rules:{
            lname:{
                required:true,
                minlength:2
            },
            lpass:{
                required:true,
                minlength:2
            }
        },
        messages:{
            lname:{
                required:"用户名必填",
                minlength:"不得少于2位"
            },
            lpass:{
                required:"密码必填",
                minlength:"不得少于2位"
            }
        }
    })



/*手机验证  有问题出现*/
    $(".send").click(function(){
        var phone=$("input[name=lphone]").val();
        $.ajax({
            url:"index.php?m=admir&f=login&a=sendcode",
            type:"post",
            data:{lphone:phone},
            success:function (e) {
                if(e){
                    console.log(e);
                    $(".send").html("发送成功");
                }
            }
        })
    })
})