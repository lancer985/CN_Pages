//V0.0
//启动
alert("Bilibili自动答题脚本 V0.0 \n最后更新：2014.04.27 \n按确定开始执行。");
//
var hyObjList = ""; //问题的list
var hyObjRdo = ""; //答案按钮
//
var hyQName = ""; //问题名称
var hyQAns = ""; //问题答案
var hyQChoice = ""; //选项名称
//核心循环
//for(i = 0; 1 < 100; i += 1)
for(i = 0; i < 12; i += 1)
{
  hyObjList = document.getElementById("l_" + i);
  hyQName = hyObjList.innerHTML.splitOnce(" ", 2);
  hyQName = hyQName[2].substring(0, hyQName[2].length - 12)
  hyQAns = hyQBank(hyQName);
  alert(hyQName);
  for(ii = 0; i < 4; i += 1) //读取选项
  {
    hyObjRdo = document.getElementById("rdo" + i + ii);
    hyQChoise = hyObjRdo.innerHTML.split(">");
  };
};
//结束

//题库
function hyQBank(hyQ)
{
//题库开始

//未找到数据
return "hyNotFound";
//题库结束
};
