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
    var rightA = getAns(q); //获取答案
    if(rightA !== undefined){
        $(".examLi").eq(i).find("li:contains('" + rightA + "')").addClass("currSolution"); //这行应该是对的
    }
}
//题库函数 - 制作中
function getAns (q){

//仅测试
return "A.";

switch(q){
case "下列哪一条不是剧透弹幕？": return "我非常喜欢这个角色";
case "以下哪种弹幕不会被禁言？": return "和谐吐槽";
default: return undefined;
}

}
