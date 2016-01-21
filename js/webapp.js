var xmlhttp = new XMLHttpRequest();
var url = "https://arsnova.eu/api/statistics";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        getdata(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getdata(response) {
    var data = JSON.parse(response);
    document.getElementById("stat-text").innerHTML = response;
}
