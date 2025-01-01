const urlParams = new URLSearchParams(window.location.search);
const levelFromUrl = urlParams.get('level');
const timeLeftFromUrl = urlParams.get('timeLeft');


var quest = "";
var solution = -1;

let newgame = function (x) {

    startup();
}
let handleInput = function (x) {

    let inp = document.getElementById("input");
    var note = document.getElementById("note");


    if (inp.value == solution) { // chking the solution


        newgame(); // Reset the Tomato game
        if (timeLeftFromUrl <= 0) {
            // If timeLeftFromUrl is 0 or less, go to the user's level index.html
            window.location.href = `index${levelFromUrl}.html`;
        } else {
            // If timeLeftFromUrl is greater than 0, go to the next level index.html
            window.location.href = `index${parseInt(levelFromUrl) + 1}.html`;
        }
    } else {
        note.innerHTML = "Not Correct!";
    }
}


let startQuest = function (data) {
    var parsed = JSON.parse(data);  // Parse the JSON data

    quest = parsed.question;
    solution = parsed.solution;
    let img = document.getElementById("quest");

    img.src = quest;

    let note = document.getElementById("note");
    note.innerHTML = "Quest is ready.";
}


// calling the api
let fetchText = async function () {
    let response = await fetch('https://marcconrad.com/uob/tomato/api.php');//sends the request
    let data = await response.text(); //reads the response as text.
    startQuest(data);//processes the parsed JSON data and updates the game state.
}

let startup = function () {
    fetchText();            // Fetch a new quest from the API
}