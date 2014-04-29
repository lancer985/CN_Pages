alert("Bilibili自动答题脚本 V1.4 Beta \n题库题数：18（魂淡们，赶紧帮我收集啊！） \n最后更新：2014.04.29 \n有可能需要很长时间，若提示脚本或网页长时间无响应请选择等待。 \n我们的QQ群号：204524182 \n\n按确定开始执行。");
//变量
var l = ""; //问题object的innerHTML
var n = ""; //问题名称
var a = ""; //返回的答案
var s = ""; //选项名称
var c = 0; //没找到计数器
//核心循环
try
{
  for(i = 0; i < 100; i += 1)
  {
    l = document.getElementById("l_" + i).split(">");
    n = l[3].split("<");
    n = n[0].substring(1, n[0].length - 8);
    a = b(n);
    if(a != "hyErrNotFound")
    {
      for(j = 0; j < 4; j += 1)
      {
        s = l[6 + j * 3].split("<");
        s = s[0].substring(0, s[0].length - 9);
        if(s == a)
        {
          $('#rdo' + i + j).attr('checked', 'checked');
          break;
        };
      };
    }else{
      c += 1;
    };
  };
  alert("自动答题结束，有" + c + "道题没找到…… \n请您检查一遍后提交（如果发现题库有错误请告诉我；如果脚本太给力还是等二十分钟再提交，答题太快有可能被封号呢）。 \n欢迎您加入我们的讨论群一起讨论完善题库！ \n我们的QQ群号：204524182");
}catch(e){
  alert("发生错误，脚本将终止。 \n若您在答题页面运行的这个脚本，请截图并发给我。 \n错误信息： \n" + e);
};
//
//题库
function b(q)
{
  switch(q)
  {
//-----题库开始-----

//-----题库结束-----
//若没找到
    default: return "hyErrNotFound";
  };
};
