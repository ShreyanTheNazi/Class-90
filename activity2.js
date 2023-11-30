function getscore()
{
    prev = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score = " + prev + "</h1>";
}

function back()
{
    window.location = "activity_1.html"
}