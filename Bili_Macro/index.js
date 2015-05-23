var defaultTable = "<tr><th id=\"genTableQ\">问题</th><th id=\"genTableA\">答案</th></tr>";
var tableRowCount = 0;
var tableAdd = function(){
  for(var i = 0; i < 10; i++ ){
    var buffer = "<tr>";
    for(var ii = 0; ii < 2; ii++ ){
      buffer += "<th><input type=\"text\" id=\"genTextbox" + tableRowCount.toString() + ii.toString() + "\" /></th>";
    }
    buffer += "</tr>";
    $("#genTable tr:last").after(buffer);
    tableRowCount += 1;
  }
  return null;
}
var scroll = function(target){
  $("html,body").animate({scrollTop: $("#" + target).offset().top}, "fast");
}
/*main*/
window.onload = function(){
  /*init*/
  $("#genTable").html(defaultTable);
  tableAdd();
  $("#genOutput").val("加载完成！可以开始制作题库啦！");
  /*add 10 rows*/
  $("#bAdd10").click(tableAdd);
  /*clear the table*/
  $("#bClear").click(function(){
    if(confirm("您真的想重置表格么？")){
      $("#genTable").html(defaultTable);
      tableRowCount = 0;
      tableAdd();
      scroll("generator");
    }
    return null;
  });
  /*generate*/
  $("#bGen").click(function(){
    var buffer = "";
    for(var i = 0; i < tableRowCount; i++ ){
      buffer += "case \"" + $("#genTextbox" + i.toString() + "0").val() + "\": return \"" +  $("#genTextbox" + i.toString() + "1").val() + "\";\n";
    }
    scroll("outputHeader");
    return null;
  });
  /*save to local storage*/
  $("#bLSSave").click(function(){
    if(confirm('您真的要保存输出框中的数据么？ \n这将覆盖已保存的数据。')){
      try{
        localStorage.setItem("BilibiliMacroSave", $("#genOutput").val());
        alert("保存完成");
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
  /*scroll*/
  $("#scroll_part1Help").click(function(e){
    e.preventDefault();
    scroll("part1Help");
    return null;
  });
  $("#scroll_generator").click(function(e){
    e.preventDefault();
    scroll("generator");
    return null;
  });
  $("#scroll_comments").click(function(e){
    e.preventDefault();
    scroll("comments");
    return null;
  });
  return null;
}
/*unload protection*/
window.onbeforeunload = function(){
  return "若离开网页，题库生成器中的未保存的数据将会丢失，您真的要离开么？";
}
