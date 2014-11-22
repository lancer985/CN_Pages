

var hyRowCount = 0;
var hyBuffer = "";

hyTableH("add");
//-----functions-----
function hyID(hyID)
{
  return document.getElementById(hyID);
};

function hyLS(hyName, hyCMD, hyData)
{
  var hyErrMSG = "Local Storage错误: \n";
  if(hyCMD == "r")
  {
    try
    {
      return localStorage.getItem(hyName);
    }catch(hyEX){
      alert(hyErrMSG + hyEX);
    };
  }else{
    try
    {
      localStorage.setItem(hyName, hyData);
    }catch(hyEX){
      alert(hyErrMSG + hyEX);
    };
  };
};

var table = function(c)
{
  hyTB = "<input type=\"text\" "
  if(c === "add")
  {
    for(var i = 0; i < 10; i += 1)
    {
      var hyRow = hyID('hyTable').insertRow(hyID('hyTable').rows.length);
      var hyTableCell1 = hyRow.insertCell(0);
      hyTableCell1.innerHTML = hyTB + "id='hyCell" + hyRowCount + "0' />";
      var hyTableCell2 = hyRow.insertCell(1);
      hyTableCell2.innerHTML = hyTB + "id='hyCell" + hyRowCount + "1' />";
      hyRowCount += 1;
    };
  }else if(hyCMD == "del"){
    if(confirm("您真的想重置表格么？"))
    {
      while(1 < hyID('hyTable').rows.length)
      {
        hyID('hyTable').deleteRow(1);
      };
      hyRowCount = 0;
      hyTableH("add");
    };
  }else{
    for(var i = 0; i < hyRowCount; i += 1)
    {
      hyBuffer += "case \"" + hyID('hyCell' + i + "0").value + "\": return \"" + hyID('hyCell' + i + "1").value + "\";\n";
    };
    hyID('hyOP').value = hyBuffer;
    hyBuffer = "";
    hyID('hyOP').focus();
  };
};
/*main*/
window.onload = function(){
  /*init*/
  table("add");
  $("#genOutput").val("按“生成”按钮生成，生成的数据将出现在这里。\n生成时会覆盖这里原有的数据。\n\n您可以点击“增加十行”来在表格的末尾插入十行空白表格行。\n您可以点击“清空”来重置表格的所有行。\n\n“保存”可以把这里的数据存到浏览器的Local Storage中；您以后可以点击“读取”按钮读取（正常情况下，若您不手动清理您浏览器的浏览数据，Local Storage中的数据永远不会消失）。");
  /*add*/
  $("#bAdd10").onclick(function(){
    table("add");
  });
  /*del*/
  $("#bClear").onclick(function(){
    table("del");
  });
  $("#bGen").onclick(function(){
    table("gen");
  });
  $("#bLSSave").onclick(function(){
    if(confirm('您真的要保存输出框中的数据么？ \n这将覆盖Local Storage中原有的数据。')){
      hyLS('hyBiliMacroSave', 'w', hyID('hyOP').value);
      alert('已将输出框中的数据保存到Local Storage。');
    }
  });
  $("#bLSLoad").onclick(function(){
    if(confirm('您真的要读取保存的输出数据么？ \n这将覆盖输出框中原有的数据。')){
      hyID('hyOP').value = hyLS('hyBiliMacroSave', 'r');
      alert('已从Local Storage读取输出数据。');
    }
  });
}
window.onbeforeunload = function(){
  return "您真的要离开么？";
}
