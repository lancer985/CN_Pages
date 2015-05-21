//欢迎
alert("脚本内测中，请舔屏幕继续。");
//核心
//将全部20题存到一个Array
var allQ = [];
$(".examLi").each(function(){
    allQ.push($(this).text());
});
//提取单个题的问题和选项
for(var i = 1; i <= 20; i++){
    var thisQ = allQ[i].split(" ");
    var q = thisQ[64].substring(0, thisQ[64].length - 2); //问题 index 64
    /*
    var a = [];
    for(var ii = 112; ii <= 172; ii += 20){ //第一个答案的index是112，之后每20一个答案，一共四个答案
        a.push(thisQ[i].substring(2, thisQ[i].length - 2));
    }
    */
    var rightA = getAns(q); //获取答案
    $(".examLi").eq(i).find("li:contains('" + rightA + "')").addClass("currSolution");
    /*
    for(var iii = 0; iii <= 4; iii++){
        //如果答案找不到就跳过
        if(rightA === undefined){
            break;
        }
        //如果返回的答案不存在就提醒用户报告给我
        if(iii === 4){
            alert("系统错误，请截图并发给我！\n问题：\"" + q + "\"\n正确答案：\"" + rightA + "\"\n答案列表：" + a);
            break;
        }
        //填上答案
        if(rightA === a[iii]){
            $(".examLi").eq(i).find("li:contains('" + rightA + "')").addClass("currSolution");
            break;
        }
    }
    */
}
//题库函数 - 制作中
function getAns (q){

switch(q){
case "下列哪一条不是剧透弹幕？": return "我非常喜欢这个角色";
case "以下哪种弹幕不会被禁言？": return "和谐吐槽";
default: return undefined;
}

}
