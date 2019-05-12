document.body.onmouseover = document.body.onmouseout = mouse;
function mouse (event)
{
    let el = event.target;
    let image = document.getElementById('blockOfPick');
    if(event.type == "mouseover" && el.tagName == "TD") {
        if(el.innerText == "Слон") {
            image.src = "1.jpg";
        }
        if(el.innerText == "Носорог") {
            image.src = "2.jpg";
        }
        if(el.innerText == "Лемур") {
            image.src = "3.jpg";
        }
        if(el.innerText == "Антилопа") {
            image.src = "4.jpg";
        }
        if(el.innerText == "Лев") {
            image.src = "5.jpg";
        }
    }
    else if(event.type == "mouseout" && el.tagName == "TABLE" || el.tagName == "TD") {
        image.src = "AF.PNG";
    }
}
var setTime;
var indexImg = 0;
function nextPic(){
    var img = document.getElementById('blockOfPick');
    if(indexImg == 0 || indexImg == 5) {
        indexImg = 1;
        img.src = `1.jpg`;
    } else if(indexImg == 1){
        indexImg++;
        img.src = `2.jpg`;
    } else if(indexImg == 2){
        indexImg++;
        img.src = `3.jpg`;
    } else if(indexImg == 3){
        indexImg++;
        img.src = `4.jpg`;
    } else if(indexImg == 4){
        indexImg++;
        img.src = `5.jpg`;
    }
}  
function backPic(){
    var img = document.getElementById('blockOfPick');
    if(indexImg == 0 || indexImg == 1) {
        indexImg = 5;
        img.src = `5.jpg`;
    } else if(indexImg == 2){
        indexImg--;
        img.src = `1.jpg`;
    } else if(indexImg == 3){
        indexImg--;
        img.src = `2.jpg`;
    } else if(indexImg == 4){
        indexImg--;
        img.src = `3.jpg`;
    }
    else if(indexImg == 5){
        indexImg--;
        img.src = `4.jpg`;
    }
}  
function start()
{
    nextPic();
}
function carousel()
{
    nextPic();
    setTime = setInterval(nextPic,3000);
}
function stop()
{
    clearInterval(setTime);
    backPic();
}
