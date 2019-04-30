document.body.onmouseover = document.body.onmouseout = mouse;
function mouse (event)
{
    let el = event.target;
    let image = document.getElementById('mouse');
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
    var img = document.getElementById('mouse');
    var transition = document.getElementsByClassName("chooseAnimal");
    if(indexImg == 0 || indexImg == 5) {
        indexImg = 1;
        img.src = `${indexImg}.jpg`;
        transition[indexImg-1].classList.toggle("chooseAnimal");
    } else if(indexImg == 1){
        indexImg++;
        img.src = `${indexImg}.jpg`;
        transition[indexImg-2].classList.toggle("chooseAnimal");
        transition[indexImg-1].classList.toggle("chooseAnimal");
    } else if(indexImg == 2){
        indexImg++;
        img.src = `${indexImg}.jpg`;
        transition[indexImg-2].classList.toggle("chooseAnimal");
        transition[indexImg-1].classList.toggle("chooseAnimal");
    } else if(indexImg == 3){
        indexImg++;
        img.src = `${indexImg}.jpg`;
        transition[indexImg-2].classList.toggle("chooseAnimal");
        transition[indexImg-1].classList.toggle("chooseAnimal");
    } else if(indexImg == 4 || indexImg == -1){
        indexImg++;
        img.src = `${indexImg}.jpg`;
        transition[indexImg-2].classList.toggle("chooseAnimal");
        transition[indexImg-1].classList.toggle("chooseAnimal");
    }
}  
function start()
{
    nextPic();
    setTime = setInterval(nextPic,2000);
}
function stop()
{
    var img = document.getElementById("mouse");
    var transition = document.getElementsByClassName("chooseAnimal");
    clearInterval(setTime);
    if(indexImg = 0)
    {
        image.src = "5.jpg";
        transition[0].classList.toggle("chooseAnimal");
        transition[4].classList.toggle("chooseAnimal");
        clearInterval(setTime);
        indexImg = 5;
    }
    else 
    {
		image.src = `${indexImg-1}.jpg`;
		transition[indexImg-2].classList.toggle("chooseAnimal");
		transition[indexImg-1].classList.toggle("chooseAnimal");
		clearInterval(setTime);
		indexImg--;
	}
}
