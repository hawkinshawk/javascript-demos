window.onload = function () {


    document.getElementById("submitButtonId").onclick = function (e) {
        var resObj = new XMLHttpRequest();
        resObj.open("GET", "lib/text.json", true);
        resObj.onreadystatechange = function () {
            //document.getElementById("div1").innerHTML = resObj.responseText;
            var kunde = JSON.parse(resObj.responseText);
            document.getElementById("div1").innerHTML = kunde.name + "<br/>" + kunde.vorname;
        };
        resObj.send();


    }

}