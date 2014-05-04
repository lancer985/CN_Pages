//script for index.html by X01X012013
//-----on startup-----
//关闭保护
window.onbeforeunload = function(hyEvent) 
{
  var hyUnloadMSG = "您真的要离开么？";
  if(typeof hyEvent == "undefined")
  {
    hyEvent = window.event;
  };
  if(hyEvent)
  {
    hyEvent.returnValue = hyUnloadMSG;
  };
  return hyUnloadMSG;
};
