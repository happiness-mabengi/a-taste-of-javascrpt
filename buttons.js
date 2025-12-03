/*
Some big block comment


*/

// Line comments

// Sends a brief message to validate JS loading
console.log("Hello!!!");

function logPress() {
    console.log("Good job!");
    console.log("You clicked a button");
}

function showAlert() {
    // Will show an alert in a moment,
    // but first just check if it can log to console
    console.log("showAlert button pressed");
    alert("Hello user!");
}

    // make a new function toggleDark
    // log "toggleDark called"
function toggleDark() {
    console.log("toggleDark called");
    document.body.classList.toggle("dark-mode")
    document.getElementById("instructions").classList.toggle("flipped")
}

// make a new function wackyEffects
// log "wackyEffects called"
function wackyEffects() {
    console.log("wackyEffects called");
    document.getElementById("instructions").classList.toggle("flipped")
    document.getElementById("pageTitle").innerHTML = "Something wacky happened!";
}
