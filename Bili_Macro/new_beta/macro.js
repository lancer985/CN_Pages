try{ //错误提示
//欢迎
alert("Bilibili弹幕礼仪题答题脚本，请舔屏幕继续。");
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
        $(".examLi").eq(i).find("li:contains('" + rightA + "')").addClass("currSolution"); //这行应该是对的
    }else{
        counter += 1;
    }
}
alert("答题完成，有" + counter  +"道题没有找到，请亲自填写。")
//题库函数
function getAns (q){
switch(q){
case "下列哪一条不是剧透弹幕？": return "我非常喜欢这个角色";
case "以下哪种弹幕不会被禁言？": return "和谐吐槽";
default: return undefined;
}}
//错误提示
}catch(e){
    alert("系统错误！若您在正确的页面上运行的本脚本，请截图并和您的浏览器版本和型号一起发给我。错误信息：\n" + e);
}
