var xhr = new XMLHttpRequest();
var url = "https://arsnova.eu/api/statistics";


xhr.onreadystatechange=function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        getdata(xhr.responseText);
    }
}
xhr.open("GET", url, true);
xhr.timeout = 20000;
xhr.send();



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

    var questionData = [
        {
            value: lectureQuestions,
            color:"#FF9B09",
            highlight: "#FF8909",
            label: "Hörsaalfragen"
        },
        {
            value: preparationQuestions,
            color: "#125DA6",
            highlight: "#125DDD",
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


    var sessionData = [
         {
            value: sessions,
            color:"#FF9B09",
            highlight: "#FF8909",
            label: "Sitzungen gesamt"
        },
        {
            value: openSessions,
            color: "#125DA6",
            highlight: "#125DDD",
            label: "offene Sitzungen"
        },
        {
            value: closedSessions,
            color:"#FF5909",
            highlight: "#FF5909",
            label: "geschlossene Sitzungen"
        }
    ]

    var first = $("#questionChart").get(0).getContext("2d");
    var questionChart = new Chart(first).Doughnut(questionData, {segmentStrokeWidth: 2});

    var second = $("#sessionChart").get(0).getContext("2d");
    var sessionChart = new Chart(second).PolarArea(sessionData);
}



