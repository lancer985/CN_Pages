//V0.0
//启动
alert("Bilibili自动答题脚本 V0.0 \n最后更新：2014.04.27 \n按确定开始执行。 \n有可能需要很长时间，若提示脚本长时间无响应请等待。");
//
var hyObjList = ""; //问题的list
var hyObjRdo = ""; //答案按钮
//
var hyQName = ""; //问题名称
var hyQAns = ""; //问题答案
var hyQChoice = ""; //选项名称
//核心循环
//for(i = 0; 1 < 100; i += 1)
for(i = 0; i < 2; i += 1)
{
  hyObjList = document.getElementById("l_" + i);
  hyQName = hyObjList.innerHTML.split(">");
  hyQName = hyQName[3].split("<");
  hyQName = hyQName[0].substring(0, hyQName[0].length - 8);
  alert("\"" + hyQName + "\"")
  hyQAns = hyQBank(hyQName);
  if(hyQAns != "hyErrNotFound")
  {
    for(ii = 0; i < 4; i += 1)
    {
      hyObjRdo = document.getElementById("rdo" + i + ii);
      hyQChoise = hyObjRdo.innerHTML.split(">");
      hyQChoise = hyQChoise[1].split("<");
      hyQChoise = hyQChoise[0].substring(1, hyQChoise.length - 2);
      alert("\"" + hyQChoise + "\"")
    };
  };
};
//结束

//题库
/*题库说明：
格式如下：
if(hyQ == "题目"){return "答案");
*/
function hyQBank(hyQ)
{
//题库开始

//未找到数据
return "hyErrNotFound";
//题库结束
};
