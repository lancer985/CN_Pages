//V0.0
//启动
alert("Bilibili自动答题脚本 V1.0 \n题库题数：1（魂淡们，赶紧帮我收集啊！） \n最后更新：2014.04.27 \n按确定开始执行。 \n有可能需要很长时间，若提示脚本长时间无响应请等待。 \n我们的QQ群号：204524182");
//
var hyObjList = ""; //问题的list
//
var hyQList = ""; //问题的object的innerHTML缓冲
var hyQName = ""; //问题名称
var hyQAns = ""; //问题答案
var hyQChoice = ""; //选项名称
//
var hyNFCounter = 0 //没找到数量
//核心循环
for(i = 0; i < 100; i += 1)
{
  try
  {
  //
  hyObjList = document.getElementById("l_" + i);
  hyQList = hyObjList.innerHTML.split(">");
  hyQName = hyQList[3].split("<");
  hyQName = hyQName[0].substring(1, hyQName[0].length - 8);
  hyQAns = hyQBank(hyQName);
  if(hyQAns != "hyErrNotFound")
  {
    for(ii = 0; ii < 4; ii += 1)
    {
      hyQChoice = hyQList[6 + ii * 3].split("<");
      hyQChoice = hyQChoice[0].substring(0, hyQChoice[0].length - 9);
      if(hyQChoice == hyQAns)
      {
        $('#rdo' + i + ii).attr('checked', 'checked');
      };
    };
  }else{
    hyNFCounter += 1;
  };
  //
  }catch(hyEX){
    alert("系统错误： \n" + hyEX)
  };
};
//结束
alert("自动答题结束，有" + hyNFCounter + "道题没找到…… \n请您等二十分钟检查一遍后提交（如果发现题库有错误请告诉我；如果脚本太给力还是等一会再提交，答题太快有可能被封号呢。）。 \n欢迎您加入我们的讨论群一起讨论完善题库！ \n我们的QQ群号：204524182");
//题库 - 格式：if(hyQ == "题目"){return "答案");
function hyQBank(hyQ)
{
//题库开始
if(hyQ == "Bilibili采用邀请码注册，注册满几个月以上的用户才能购买邀请码？"){return "三个月"};
if(hyQ == "自古红蓝出什么？"){return "CP"};
//未找到数据
return "hyErrNotFound";
//题库结束
};
