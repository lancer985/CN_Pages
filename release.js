//V0.0
//启动
//
var hyObjList = ""; //问题的list
var hyObjRdo = ""; //答案按钮
//
var hyQName = ""; //问题名称
var hyQAns = ""; //问题答案
//核心循环
for(i = 0; 1 < 100; 1 += 1)
{
  hyObjList = document.getElementById("l_" + i);
  hyQName = hyObjList.innerHTML.split(" ");
  hyQName = hyQName.split(chr(13));
  alert(hyQName[2]);
};
//结束

//题库
function hyQBank(hyQ)
{
  
};
