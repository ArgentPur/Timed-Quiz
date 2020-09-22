

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

    {q5: "APIs allow websites to access databases from other websites.",
    r1: "True",
    r2: "False"},

    {q6: "Bootstrap is cool.",
    r1: "True",
    r2: "False"},

]

        var yourScore = document.getElementById("yourScore").textContent;
        var seconds = document.getElementById("timeLeft").textContent;
        var countdown = setInterval(function() {
            seconds--;
            document.getElementById("timeLeft").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);

        testCard.style.display = "none";
        document.getElementById("startBtn").addEventListener("click", function startTest(){
            testCard.style.display = "";
        alert("The timer has been running since the page loaded! Hope you didn't spend too much time reading the headers.")
        });


        document.getElementById("correct").addEventListener("click", function()  {
          alert("correct");
          document.getElementById("yourScore").textContent = yourScore;
          yourScore++;
        })


document.getElementById("startBtn").addEventListener("click", function startCounter(){
    alert("All questions are True/False.")
    

    

});
