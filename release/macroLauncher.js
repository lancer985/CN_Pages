alert("点击确定开始加载，有可能需要加载一段时间，请不要重复执行。 \n若使用谷歌浏览器，请不要勾选“禁止此页再显示对话框。”。");
var file = "http://X01X012013.github.io/BiliMacro/release/macroCore.js";
var all = t("script");
for(var i = all.length; i >= 0; i -= 1)
{
  if(all[i] && all[i].getAttribute("src")!=null && all[i].getAttribute("src").indexOf("core.js") != -1)
  {
   all[i].parentNode.removeChild(all[i]);
  };
};
var obj = document.createElement("script");
obj.setAttribute("type","text\/javascript");
obj.setAttribute("src", file);
obj.setAttribute("charset", "UTF-8");
t("head")[0].appendChild(obj);
function t(id)
{
  return document.getElementsByTagName(id)
};
