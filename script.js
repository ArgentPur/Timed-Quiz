

var counter = 60;
var score = 0
var question = [
   {q1: "JavaScript is used Jato make websites interactive.",
    r1: "True",
    r2: "False"},

   {q2: "CSS stands for 'cool style sheet'.",
    r1: "True",
    r2: "False"},

    {q3: "HTML is a type of markup language.",
    r1: "True",
    r2: "False"},

    {q4: "jQuery code can be more concise than JavaScript.",
    r1: "True",
    r2: "False"},

    {q5: "",
    r1: "True",
    r2: "False"},

    {q6: "",
    r1: "True",
    r2: "False"},

]

function startCounter() {
    setTime(60);

    if (totalSeconds > 0) {
        interval = setinterval(function() {
            seconds--;
            renderTime();
        }, 1000);
    } else {
        alert("Time has expired")
    }
}

document.getElementById("startBtn").addEventListener("click", function startCounter(){
    alert("All questions are True/False.")
    

    

});
