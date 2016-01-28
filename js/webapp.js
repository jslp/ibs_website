var drawn = false;

for(i = 0; i <=1; i++){
    if(!drawn){
        getStats();
        drawn = true;
    }
    else{
        setInterval(getStats, 30000);
    }
}


function getStats() {

    var xhr = new XMLHttpRequest();
    var url = "https://arsnova.eu/api/statistics";

    xhr.onreadystatechange=function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            drawStats(xhr.responseText);
        }
    }
    xhr.open("GET", url, true);
    xhr.timeout = 20000;
    xhr.send();
}



function drawStats(response) {
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

    var qaData = [
        {
            value: questions,
            color: "#FF8909",
            highlight: "#FF9B09",
            label: "Fragen"
        },
        {
            value: answers,
            color:"#125DA6",
            highlight: "#125DDD",
            label: "Antworten"
        }
    ]


    var questionData = [
        {
            value: lectureQuestions,
            color:"#FF8909",
            highlight: "#FF9B09",
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
            color:"#FF8909",
            highlight: "#FF9B09",
            label: "Konzeptfragen"
        },
        {
            value: interposedQuestions,
            color: "#393939",
            highlight: "#7e7e7e",
            label: "Zwischenfragen"
        }
    ]

     var sessionData = [
        {
            value: openSessions,
            color: "#FF8909",
            highlight: "#FF9B09",
            label: "offene Sitzungen"
        },
        {
            value: closedSessions,
            color:"#125DA6",
            highlight: "#125DDD",
            label: "geschlossene Sitzungen"
        }
    ]

    var userData = [
        {
            value: activeStudents,
            color: "#125DA6",
            highlight: "#125DDD",
            label: "Studenten"
        },
        {
            value: creators,
            color:"#FF8909",
            highlight: "#FF9B09",
            label: "Lehrende"
        }
    ]

    var first = $("#questionChart1").get(0).getContext("2d");
    var qaChart = new Chart(first).Doughnut(qaData);

    var second = $("#questionChart2").get(0).getContext("2d");
    var questionChart = new Chart(second).Pie(questionData);

    var third = $("#userChart").get(0).getContext("2d");
    var userChart = new Chart(third).Doughnut(userData);

    var fourth = $("#sessionChart").get(0).getContext("2d");
    var sessionChart = new Chart(fourth).Pie(sessionData);
}
