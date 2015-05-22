/*
更新日志：
V1.0 2015.05.20
1.完成基础框架。
V1.1 2015.05.21
1.大量细节调整
*/
try{ //错误处理
//欢迎和运行确认
if(prompt("Bilibili晋级考试 弹幕礼仪部分 答题脚本 V1.1（2015.05.21更新）\n点击确定运行。\n我们的网站（包含脚本使用说明，使用本脚本前请务必阅读说明）：", "http://x01x012013.github.io/CN_Pages/Bili_Macro/") !== null){
alert("题库题数：2（2015.05.20更新）\n若您为使用此脚本支付了任何费用，那么恭喜您，您被坑了。\n点击确定继续。");
//核心
var allQ = [];
$(".examLi").each(function(){
    allQ.push($(this).text());
});
var counter = 0;
for(var i = 1; i <= 20; i++){
    var thisQ = allQ[i].split(" ");
    var q = thisQ[64].substring(0, thisQ[64].length - 2); //问题 index 64
    var rightA = getAns(q); //获取答案
    if(rightA !== undefined){
        $(".examLi").eq(i).find("li:contains('" + rightA + "')").addClass("currSolution");
    }else{
        counter += 1;
    }
}
alert("答题完成，有" + counter  +"道题没有找到。")
//题库函数
function getAns (q){
// 2 + 0 = 2
switch(q){
//群主提供 2题 2015.05.20
case "下列哪一条不是剧透弹幕？": return "我非常喜欢这个角色";
case "以下哪种弹幕不会被禁言？": return "和谐吐槽";
//没找到的话返回undefined
default: return undefined;
}}
}//结束运行确认
}catch(e){ //错误处理
    alert("系统错误！\n错误信息：\n" + e);
}
