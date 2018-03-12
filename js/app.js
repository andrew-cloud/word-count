$(document).foundation();


// inputted words variable
let words = "";
// word count variable
let count = 0;
// goal variable
let goal = 250;
// goal input
let goal_input = document.getElementById("goal-input");
// goal-display
let goal_display = document.getElementById("goal-display");
// has the goal input been clicked before?
let goal_clicked = false;
// word input
let words_input = document.getElementById("words-input");
// character count boolean
let count_characters = false;
// word count boolean, true by default
let count_words = true;
// paragraph count boolean
let count_paragraphs = false;
// percentage of goal complete
let percentage_complete = 0;
// checkmark
let checkmark = document.getElementById("checkmark");
// goal-display with icon
let goal_display_container = document.getElementById("goal-display-container");
// all entires
var entries = document.querySelectorAll('.entry');

// test entry
let test_entry = document.getElementById("test-entry");


// gets goal number from input field
function refreshGoal() {
    goal = goal_input.valueAsNumber;
}

// gets inputted words form text area
function refreshWords() {
    words = words_input.value;
}

// refreshes word count
function refreshCount() {
    if (count_characters == true) {
        count = characterCount(words);
    } else if (count_words == true) {
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
    count_words = true;
    count_characters = false;
    count_paragraphs = false;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// set count to characters
function setToCharacters() {
    count_words = false;
    count_characters = true;
    count_paragraphs = false;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// set count to paragraphs
function setToParagraphs() {
    count_words = false;
    count_characters = false;
    count_paragraphs = true;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// calculate percentage complete
function calculatePercentage() {
	percentage_complete = count/goal;
}

// checks to see if goal is met
function isGoalMet() {
    return (count >= goal);
}

// changes color of text when goal is met
function goalMetAlert() {
    if ((isGoalMet()) & (goal != 0)) {
        console.log("Goal is met!")
        // have to run refreshCounter because the inner html has to be refreshed
        refreshGoalDisplay();
        checkmark.classList.remove("checkmark-unmet");
        checkmark.classList.add("checkmark-met");
    } else {
    	refreshGoalDisplay();
        checkmark.classList.remove("checkmark-met");
        checkmark.classList.add("checkmark-unmet");
    }
}

function goalFirstClick(e) {
	if (goal_clicked == false) {
		this.select();
	}
	goal_clicked = true;
	
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
function refreshGoalDisplay() {
    document.getElementById("goal-display").innerHTML = `${count}/${goal}`;
}

// hide goal-display
goal_display.addEventListener("click", hideCounter);

// refreshes all values (inputted words, inputted goal, inputted goal display, and checks if goal is met)
function refreshAll() {
	refreshWords();
	refreshCount();
	refreshGoalDisplay();
	goalMetAlert();
}

// refreshes values after input
document.addEventListener("keyup", refreshAll);

// refreshed goal in goal-display when new amount is entered
document.getElementById("goal-input").addEventListener("input", refreshGoal);

// add comment
goal_input.addEventListener("click", goalFirstClick);

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
    if (this.classList.contains("goal-display-hidden")) {
        this.classList.remove("goal-display-hidden");
    } else this.classList.add("goal-display-hidden");
}

// ENTRIES

// applies active class to unit buttons
function toggleFullscreen(){
    if (document.getElementById("test-modal").classList.contains("display-block")) {
        document.getElementById("test-modal").classList.remove("display-block");
    } else document.getElementById("test-modal").classList.add("display-block");
}

test_entry.addEventListener("click", toggleFullscreen);

