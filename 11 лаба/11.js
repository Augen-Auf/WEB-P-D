function enter()
{
    document.getElementById("contact").addEventListener("keyup",function(event)
    {
        event.preventDefault();
        if(event.keyCode === 13) {
            var newContact = document.getElementById('contact').value;
            document.getElementById("contacts").style.display = "block";
            document.getElementById('contacts').innerHTML += ('<input type = "checkbox" id="check" onChange="checkBox()" style = "display:block">') + newContact + ('<img src ="delete.png" onClick = "del()" style = "display:block"></img><br>');
            //newContact.value = "";
        }
    })
}
function checkContact(){
    var newContact = document.getElementById('contact').value;
            //var regContact = /([А-ЯЁ][а-яё]+[\s]|([0-9]+[/s])|[a-zA-Z1-9\-\._]+@[a-z1-9]+?(\.[a-z1-9]+))/;
            //newContact = newContact.match(regContact);
}
function checkBox(){
    if(document.getElementById(check).checked)
    {
        document.getElementById(check).style.visibility = "hidden";
    }
   
}
function del()
{
    document.getElementById("contacts").style.display = "none";
}
