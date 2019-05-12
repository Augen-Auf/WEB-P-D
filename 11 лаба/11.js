var counter = 0;
function enter(event) {
    var newContact = document.getElementById("contact").value;
    if (event.keyCode === 13) {
        var takeInfo = $("#contact").val();
        var regContact = /.{1,99}\s[0-9,+]{1,15}\s.[a-zA-Z1-9\-\._]+@[a-z1-9]+?(\.[a-z1-9]+){1,40}/;
        var checkContact = regContact.test(takeInfo);
        if (newContact == "") {
            alert("Введите данные в текстовое поле!");
            return;
        }
        if (checkContact == true) {
            document.getElementById("contacts").style.display = "block";
            document.getElementById("contacts").innerHTML += '<li id = "changes' + counter + '" ondblclick="edit(' + "'" + 'changes' + counter + "')" + '"><input type = "checkbox" id="check' + counter +
                '" onChange = "check(' + "'changes" + counter + "'" + ')">' + "<span id='edit" + counter + "'>" + newContact +
                '</span><img src = "delete.png" onClick = "del(' + "'changes" + counter + "'" + ')">' + '<hr>' + '</li>';
            counter++;
        }
        else {
            alert("Данные введены некорректно!");
        }
    }
}
function check(id) {
    $('#' + id).css({ "color": "red" })
    $('#' + id).css({ "text-decoration": "underline" });
    var rePlace = id.replace("changes", "check");
    $('#' + rePlace).css("visibility", "hidden");
}
function del(id) {
    $('#' + id).css('display', 'none');
}
function edit(id) {
    var rePlace = id.replace("changes", "edit");
    var contact = $('#' + rePlace).text();
    var newField = $('#' + id).html();
    $('#' + id).html("<input type ='text' id='editContact'>");
    $('#editContact').val(contact);
    $('#editContact').focus();
    $('#editContact').on("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            var info = $("#editContact").val();
            var regContact = /.{1,99}\s[0-9,+]{1,15}\s.[a-zA-Z1-9\-\._]+@[a-z1-9]+?(\.[a-z1-9]+){1,40}/;
            var agreeEdit = regContact.test(info);
            if ((agreeEdit) == true) {
                var editContact = $('#editContact').val();
                $('#' + id).html(newField);
                $('#' + rePlace).text(editContact);
            }
            else {
                alert("Данные введены некорректно!");
            }
        }
    });
}
