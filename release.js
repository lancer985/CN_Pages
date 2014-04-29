alert("Bilibili自动答题脚本 V1.4Beta \n题库题数：18（魂淡们，赶紧帮我收集啊！） \n最后更新：2014.04.29 \n有可能需要很长时间，若提示脚本或网页长时间无响应请选择等待。 \n我们的QQ群号：204524182 \n\n按确定开始执行。");
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

//18道 - 【群主】？（1043201997）提供 - 2014.04.29
case "Bilibili采用邀请码注册，注册满几个月以上的用户才能购买邀请码？": return "三个月";
case "自古红蓝出什么？": return "CP";
case "官方逼死了谁？": return "同人";
case "下面哪位是个中二少女": return "小鸟游六花";
case "暴漫中\“荆轲刺秦王\”的下一句是": return "两条毛腿肩上扛";
case "团战可以输，\_\_\_\_必须死？": return "提莫";
case "《命运石之门》中凤凰院凶真的配音是？": return "宫野真守";
case "以下哪部动漫不是京阿尼（京都动画公司）制作的？": return "FZ";
case "《海贼王》的作者是谁？": return "尾田荣一郎";
case "《科学的超电磁炮》中，Lever\.5被称为？": return "超能力者";
/*10*/case "《魔法少女小圆》的导演是谁？": return "新房昭之";
case "奥特曼来自哪个星云？": return "m78";
case "《龙与虎》中的龙指的是谁？": return "高须龙儿";
case "十万个冷笑话是哪家漫画网连载的": return "有妖气";
case "地球距离月球之间的距离为？": return "384\,400千米";
case "网络上11区指的是那个国家？": return "日本";
case "日语\“我爱你\”的空耳是什么？": return "阿姨洗铁路";
case "《某科学的超电磁炮》中，佐天同学经常对初春同学做的一件事情是什么？": return "掀裙";

//-----题库结束-----
//若没找到
default: return "hyErrNotFound";
};
};
