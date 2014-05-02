alert("点击确定开始加载，有可能需要加载一段时间，请不要重复执行。 \n若使用谷歌浏览器，请不要勾选“禁止此页再显示对话框。”。");
var o = document.createElement("script");
o.setAttribute("type","text/javascript");
o.setAttribute("src", "http://X01X012013.github.io/BiliMacro/release/macroCore.js");
o.setAttribute("charset", "UTF-8");
document.getElementsByTagName("head")[0].appendChild(o);
