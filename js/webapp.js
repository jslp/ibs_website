var xhr;

if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.open("GET","https://arsnova.eu/api/statistics", false);

