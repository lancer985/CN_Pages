//欢迎
alert("脚本内测中，请舔屏幕继续。");
//核心
$.each($(".examLi"), function(index, data){
    if(index === 0){
        //第一个是空的
        return undefined;
    }
    //处理开始
    var tempList = data.split(">");
    console.log(tempList);
})
