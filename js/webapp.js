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
    var answers = data.answers
    var lectureQuestions = data.lectureQuestions;
    var preparationQuestions = data.preparationQuestions;
    var openSessions = data.openSessions;
    var closedSessions = data.closedSessions;
    var creators = data.creators;
    var activeUsers = data.activeUsers;
    var activeStudents = data.activeStudents;
    var loggedinUsers = data.loggedinUsers;
    var interposedQuestions = data.interposedQuestions;
    var conceptQuestions = data.conceptQuestions;
    var sessions = data.sessions;
    var questions = data.questions;

    document.getElementById("stat-text").innerHTML = "Fragen gesamt: " + questions;
    var questionData = [
        {
            value: lectureQuestions,
            color:"#FF9B09",
            highlight: "#FF9B09",
            label: "Hörsaalfragen"
        },
        {
            value: preparationQuestions,
            color: "#125DA6",
            highlight: "#125DCC",
            label: "Vorbereitungsfragen"
        },
        {
            value: conceptQuestions,
            color:"#FF5909",
            highlight: "#FF5909",
            label: "Konzeptfragen"
        },
        {
            value: interposedQuestions,
            color: "#125DA6",
            highlight: "#125DCC",
            label: "Zwischenfragen"
        }
    ]
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#questionChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var questionChart = new Chart(ctx).Pie(questionData);
}



