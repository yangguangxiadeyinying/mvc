window.onload=function(){
    let parent=document.querySelector(".parent");
    let inputs=document.querySelector("input[type=hidden]");
    let obj=new upload();
    obj.createView({parent:parent});
    obj.up("aaa.php",function(e){
            let str=e.join(";");
            inputs.value+=str;
        });
    var ue = UE.getEditor('editor');
    }
