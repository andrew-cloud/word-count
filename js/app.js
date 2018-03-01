$(document).foundation();


// inputted words variable
let words = "";
// word count variable
let count = 0;
// goal variable
let goal = 250;
// goal input
let goal_input = document.getElementById("unit-count");
// unit-counter
let unit_counter = document.getElementById("unit-counter");
// character count boolean
let countByCharacters = false;
// word count boolean, true by default
let countByWords = true;
// paragraph count boolean
let countByParagraphs = false;
// has the goal input been clicked before?
let goalClicked = false;


// gets goal number from input field
function refreshGoal() {
    goal = goal_input.valueAsNumber;
}

// gets inputted words form text area
function refreshWords() {
    words = document.getElementById("words-input").value;
}

// refreshes word count
function refreshCount() {
    if (countByCharacters == true) {
        count = characterCount(words);
    } else if (countByWords == true) {
        count = wordCount(words);
    } else {
        count = paragraphCount(words);
    }
}

// word count
function wordCount(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); // 2 or more spaces to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    if (words == "") {
        return 0;
    } else {
        return s.split(' ').length;
    }
}

// character count
function characterCount(s) {
    s = s.replace(/\s/g, "");
    return s.length;
}

// paragraph count
function paragraphCount(s) {
    s = s.replace(/\n$/gm, '');
    if (words == "") {
        return 0;
    } else {
        return s.split(/\n/).length;
    }
}

// set count to words
function setToWords() {
    countByWords = true;
    countByCharacters = false;
    countByParagraphs = false;
    refreshCount();
    refreshCounter();
    goalMetAlert();
}

// set count to characters
function setToCharacters() {
    countByWords = false;
    countByCharacters = true;
    countByParagraphs = false;
    refreshCount();
    refreshCounter();
    goalMetAlert();
}

// set count to paragraphs
function setToParagraphs() {
    countByWords = false;
    countByCharacters = false;
    countByParagraphs = true;
    refreshCount();
    refreshCounter();
    goalMetAlert();
}

// checks to see if goal is met
function isGoalMet() {
    return (count >= goal);
}

// changes color of text when goal is met
function goalMetAlert() {
    if ((isGoalMet()) & (goal != 0)) {
        console.log("Goal is met!")
        document.getElementById("words-input").classList.add("green-text");
    } else {
        document.getElementById("words-input").classList.remove("green-text");
    }
}

function goalFirstClick(e) {
	if (goalClicked == false) {
		this.select();
	}
	goalClicked = true;
	
}

// applies active class to unit buttons
function unitButtonActive() {
    removeActiveUnitButton();
    if (this.classList.contains("active")) {
        this.classList.remove("active");
    } else this.classList.add("active");
}

// remove active class from unit buttons
function removeActiveUnitButton() {
    var list = document.getElementsByClassName("active");
    var i;
    for (i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
    }
}



// button click - set count to words
document.getElementById("words-button").addEventListener("click", setToWords);

// button click - set count to words
document.getElementById("characters-button").addEventListener("click", setToCharacters);

// button click - set count to words
document.getElementById("paragraphs-button").addEventListener("click", setToParagraphs);



// refresh displayed count
function refreshCounter() {
    document.getElementById("unit-counter").innerHTML = `${count}/${goal}`;
}

// hide unit-counter
document.getElementById("unit-counter").addEventListener("click", hideCounter);

// refreshes values after input
document.addEventListener("keyup", refreshWords);
document.addEventListener("keyup", refreshCount);
document.addEventListener("keyup", refreshCounter);
document.addEventListener("keyup", goalMetAlert);
document.getElementById("unit-count").addEventListener("input", refreshGoal);

// add comment
document.getElementById("unit-count").addEventListener("click", goalFirstClick);

// adds active class to unit buttons
document.getElementById("characters-button").addEventListener("click", unitButtonActive);
document.getElementById("words-button").addEventListener("click", unitButtonActive);
document.getElementById("paragraphs-button").addEventListener("click", unitButtonActive);

// hide method
function hide() {
    if (this.style.display = "block") {
        this.style.display = "none";
    } else this.style.display = "block";
}

// hides counter
function hideCounter() {
    if (this.classList.contains("unit-counter-hidden")) {
        this.classList.remove("unit-counter-hidden");
    } else this.classList.add("unit-counter-hidden");
}