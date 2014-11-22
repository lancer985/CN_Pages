var tableRowCount = 0;
/*main*/
window.onload = function(){
  var tableAdd = function(){
    for(var i = 0; i < 10; i++ ){
      var buffer = "<tr>";
      for(var ii = 0; ii < 2; ii++ ){
        buffer += "<th><input type=\"text\" id=\"genTextbox" + tableRowCount.toString() + ii.toString() + "\" /></th>";
      }
      buffer += "</tr>";
      $("#genTable tr:last").after(buffer);
      tableRowCount += 1;
    };
    return null;
  }
  /*init*/
  $("#genTable").html("<tr><th id=\"genTableQ\">问题</th><th id=\"genTableA\">答案</th></tr>");
  tableAdd();
  $("#genOutput").val("按“生成”按钮生成，生成的数据将出现在这里。\n生成时会覆盖这里原有的数据。\n\n您可以点击“增加十行”来在表格的末尾插入十行空白表格行。\n您可以点击“清空”来重置表格的所有行。\n\n“保存”可以把这里的数据存到浏览器的Local Storage中；您以后可以点击“读取”按钮读取（正常情况下，若您不手动清理您浏览器的浏览数据，Local Storage中的数据永远不会消失）。");
  /*add 10 rows*/
  $("#bAdd10").click(tableAdd);
  /*clear the table*/
  $("#bClear").click(function(){
    if(confirm("您真的想重置表格么？")){
      $("#genTable").html("<tr><th id=\"genTableQ\">问题</th><th id=\"genTableA\">答案</th></tr>");
    }
    tableRowCount = 0;
    return null;
  });
  /*generate*/
  $("#bGen").click(function(){
    var buffer = "";
    for(var i = 0; i < tableRowCount; i++ ){
      buffer += "case \"" + $("#genTextBox" + i + "0").val() + "\": return \"" +  $("#genTextBox" + i + "1").val() + "\";\n";
    };
    $("#genOutput").val(buffer).focus();
    return null;
  });
  /*save to local storage*/
  $("#bLSSave").click(function(){
    if(confirm('您真的要保存输出框中的数据么？ \n这将覆盖已保存的数据。')){
      try{
        localStorage.setItem("BilibiliMacroSave", $("#genOutput").val());
      }catch(e){
        alert("保存失败，请将以下错误信息截图并发给我：\n" + e);
      }
    }
    return null;
  });
  /*load from local storage*/
  $("#bLSLoad").click(function(){
    if(confirm('您真的要读取保存的输出数据么？ \n这将覆盖输出框中原有的数据。')){
      try{
        $("#genOutput").val(localStorage.getItem("BilibiliMacroSave"));
        alert("读取完成");
      }catch(e){
        alert("读取失败，请将以下错误信息截图并发给我：\n" + e);
      }
    }
    return null;
  });
  return null;
}
/*unload protection*/
window.onbeforeunload = function(){
  return "您真的要离开么？";
}
