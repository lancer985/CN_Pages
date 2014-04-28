//V0.0
//启动
alert("Bilibili自动答题脚本 V0.0 \n最后更新：2014.04.27 \n按确定开始执行。 \n有可能需要很长时间，若提示脚本长时间无响应请等待。");
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
  //try
  //{
  //
  hyObjList = document.getElementById("l_" + i);
  hyQList = hyObjList.innerHTML.split(">");
  hyQName = hyQList[3].split("<");
  hyQName = hyQName[0].substring(1, hyQName[0].length - 8);
  hyQAns = hyQBank(hyQName);
  if(hyQAns != "hyErrNotFound")
  {
    for(ii = 0; ii < 3; ii += 1)
    {
      hyQChoice = hyQList[6 + i * 3].split("<");
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
  //}catch(hyEX){
  //  alert("系统错误： \n" + hyEX)
  //};
};
//结束
alert("脚本结束，有" + hyNFCounter + "道题没找到。 \n请您检查后提交。 \n欢迎您加入我们的讨论群一起讨论完善这个脚本！ \n我们的群号：204524182");
//题库 - 格式：if(hyQ == "题目"){return "答案");
function hyQBank(hyQ)
{
//题库开始
return "花泽香菜"; //测试
//未找到数据
return "hyErrNotFound";
//题库结束
};
