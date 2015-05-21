//欢迎
alert("脚本内测中，请舔屏幕继续。");
//核心
var allQ = [];
$(".examLi").each(function(){
    //将全部20题存到一个Array
    allQ.push($(this).text());
});
for(var i = 1;i <= 21; i++){
    //提取单个题的问题和选项
    var q = "", a = []; //初始化变量
    var thisQ = allQ[i].split(" ");
    q = thisQ[64].substring(0, thisQ[64].length - 2);
    alert(q)
}
