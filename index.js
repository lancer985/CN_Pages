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

var hyRowCount = 0;
var hyBuffer = "";

hyTableH("add");
//-----functions-----
//main
function hyID(hyID)
{
  return document.getElementById(hyID);
};

function hyTableH(hyCMD)
{
  hyTB = "<input type='text' class='hyNoMar' style='width:98%' "
  if(hyCMD == "add")
  {
    var hyRow = hyID('hyTable').insertRow(hyID('hyTable').rows.length);
    var hyTableCell1 = hyRow.insertCell(0);
    hyTableCell1.innerHTML = hyTB + "id='hyCell" + hyRowCount + "0' />";
    var hyTableCell2 = hyRow.insertCell(1);
    hyTableCell2.innerHTML = hyTB + "id='hyCell" + hyRowCount + "1' />";
    hyRowCount += 1;
  }else if(hyCMD == "del"){
    if(confirm("您真的想重置表格么？"))
    {
      while(1 < hyID('hyTable').rows.length)
      {
        hyID('hyTable').deleteRow(1);
      };
      hyRowCount = 0;
    };
  }else{
    for(var i = 0; i <= hyRowCount; i += 1)
    {
      hyBuffer += "case \"" + hyID('hyCell' + i + "0").value + "\": reuturn \"" + hyID('hyCell' + i + "1").value + "\";" + "<br>";
    };
    hyID('hyOP').innerHTML = hyBuffer;
    hyBuffer = "";
    alert("生成完成！");
  };
};
