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

hyTableH("add");
//-----functions-----
//main
function hyID(hyID)
{
  return document.getElementById(hyID);
};

function hyTableH(hyCMD)
{
  hyTB = "<input type='text' class='hyNoMar' style='width:98%' />"
  if(hyCMD == "add")
  {
    var hyRow = hyID('hyTable').insertRow(hyID('hyTable').rows.length);
    var hyTableCell1 = hyRow.insertCell(0);
    hyTableCell1.innerHTML = hyTB;
    var hyTableCell2 = hyRow.insertCell(1);
    hyTableCell2.innerHTML = hyTB;
  }else if(hyCMD == "del"){
    if(confirm("您真的想重置表格么？"))
    {
      while(1 < hyID('hyTable').rows.length)
      {
        hyID('hyTable').deleteRow(1);
      };
    };
  }else{
    for(i = 1; i < hyID('hyTable').rows.length; i += 1)
    {
      
    };
  };
};
