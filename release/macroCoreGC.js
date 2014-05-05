var v = "Bilibili自动答题脚本（Google Chrome 34专用） V2.3";
p = document.createElement("script");
p.setAttribute('src', 'http://X01X012013.github.io/BiliMacro/release/macroBank.js');
p.setAttribute('charset', 'utf-8');
document.getElementsByTagName('head')[0].appendChild(p);
function k()
{
  var c = 0;
  var d = 0;
  if(confirm("若有题没有找到答案或答案无效，是否自动填选第一个选项（若选择否将会留空）？ \n确定：是；取消：否。"))
  {
    f = true;
  }else{
    f = false;
  };
  try
  {
    for(i = 0; i < 100; i += 1)
    {
      var l = document.getElementById("l_" + i).innerHTML.split(">");
      var n = l[3].split("<");
      n = n[0].substring(1, n[0].length - 8);
      var a = b(n);
      if(a != "hyErrNotFound")
      {
        for(j = 0; j < 5; j += 1)
        {
          if(j == 4)
          {
            alert("题库错误，若您使用的是Google Chrome 34浏览器，请截图并发给我。 \n\n问题：\"" + n + "\" \n返回的答案：\"" + a + "\" \n最后一次判定调用：\"" + s + "\" \n缓存：\"" + l + "\"");
            if(f)
            {
              z(i, 0);
            };
            d += 1;
            break;
          };
          //测试开始
          var temp = "";
          for(iiii = 0; iiii < l.length; iiii += 1){
            temp += iiii + ":" l[iiii];
          }
          alert(temp);
          //测试结束
          var s = l[8 + j * 3].split("<");
          s = s[0].substring(0, s[0].length - 9);
          if(s == a)
          {
            z(i, j);
            break;
          };
        };
      }else{
        if(f)
        {
          z(i, 0);
        };
        c += 1;
      };
    };
    alert("自动答题结束，有" + c + "道题没找到，有" + d + "道题返回无效（题库错误）…… \n请您检查一遍后提交（如果发现题库有错误请告诉我；如果脚本太给力还是等二十分钟再提交，答题太快有可能被封号呢）。 \n欢迎您加入我们的讨论群一起讨论完善题库！ \n我们的QQ群号：204524182");
  }catch(e){
    alert("发生错误，脚本将终止。 \n若您在答题页面运行的这个脚本且您的浏览器是Google Chrome 34，请截图并发给我。 \n错误信息： \n" + e);
  };
  t();
};
function z(x, y)
{
  document.getElementById("rdo" + x + y).checked = "checked";
};
