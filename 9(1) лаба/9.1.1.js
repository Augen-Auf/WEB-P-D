function create(){
    var path = window.location.pathname;
	path = path.substring(1, path.length - 10);
    var info = document.getElementById("mainT").value;
    var picture = document.getElementsByName("backPick");
    var fontPict="";
    var pct=["pic1.jpg","pic2.jpg","pic3.jpg"];
    for(var i=0;i<pct.length;i++){
        if(pct[i].checked)
           fontPict+=pct[i];
    }
    var decor="";
    var el=['font-style:italic','text-decoration:underline','font-weight:bold'];
    for(i=0;i<el.length;i++){
        if(el[i].checked)
          decor=el[i];
    }
    var newWindow = window.open("about:blank", "popup","width= 500,height= 450");
    var doc=newWindow.document;
    doc.open();
    doc.write('<head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="9.(1).css"><title>Результат</title></head><body>');
    doc.write('<div class="new_div"; background-size:100% 100%;>');
    doc.write('<h2>${info}</h2>');
    doc.write('<img style="height:300px;" src=${fontPict}></fontPict>');
    doc.write('</div>');
    doc.write('</body></html>');
    doc.close();

}
function Remove(block){
    block.parentNode.removeChild(block);
}

function closeNewWin()
{
    newWindow.document.close();
}