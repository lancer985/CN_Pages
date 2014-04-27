//V0.0
//启动
alert("Bilibili自动答题脚本 V0.0 \n最后更新：2014.04.27 \n按确定开始执行。");
//
var hyObjList = ""; //问题的list
var hyObjRdo = ""; //答案按钮
//
var hyQName = ""; //问题名称
var hyQAns = ""; //问题答案
//核心循环
//for(i = 0; 1 < 100; i += 1)
for(i = 0; i < 2; i += 1)
{
  hyObjList = document.getElementById("l_" + i);
  hyQName = hyObjList.innerHTML.split(" ", 3);
  hyQName = hyQName[2].substring(0, hyQName[2].length - 5)
  alert("\"" + hyQName + "\"");
};
//结束

//题库
function hyQBank(hyQ)
{
  
};
