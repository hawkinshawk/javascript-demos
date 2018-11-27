window.onload = function () {

    var resObj = new XMLHttpRequest();
    resObj.open("GET","lib/text.txt", true);
    resObj.onreadystatechange=function(){
        console.log(resObj.responseText);
    };
    resObj.send();

    document.getElementById("submitButtonId").onclick = function (e) {
        if (confirm("Sind Sie sicher?")) {
            //document.getElementsByTagName("input")
            if (document.getElementById("drinksid").value == "" || document.getElementById("nameid").value == "" || document.getElementById("passwortid").value == "") {
                alert("bitte alle Felder ausfüllen!")
                return false;
            } else {
                document.getElementById("myForm").action = "www.microsoft.com";
                document.getElementById("myForm").method = "POST"
                document.getElementById("myForm").action += "?user=" + document.getElementById("nameid").value;
                document.getElementById("myForm").action += "&passwort=" + document.getElementById("passwortid").value;
                document.getElementById("myForm").action += "&drinks=" + document.getElementById("drinksid").value;
                document.getElementById("myForm").action += "&geschlecht=" + document.getElementById("r1").value;
                document.getElementById("myForm").submit();
            }
        } else {
            return false;
        }

    }

    document.getElementById("submitButtonId").onmouseenter = function (e) {
        document.getElementById("submitButtonId").style.color="red";
    }
    document.getElementById("submitButtonId").onmouseout = function (e) {
        document.getElementById("submitButtonId").style.color="black";
    }

}