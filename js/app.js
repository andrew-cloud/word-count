$(document).foundation();


// inputted words variable
let words = "";
// word count variable
let count = 0;
// goal variable
let goal = 0;
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


// gets goal number from input field
function refreshGoal() {
    if (goal >= 0) {
    goal = goal_input.value;
	} else {
		console.log("no negatives");
	}
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
	// THIS IS WHERE YOU LEFT OFF
	refreshCount();
	refreshCounter();
}

// set count to characters
function setToCharacters() {
	countByWords = false;
	countByCharacters = true;
	countByParagraphs = false;
	// THIS IS WHERE YOU LEFT OFF
	refreshCount();
	refreshCounter();
}

// set count to paragraphs
function setToParagraphs() {
	countByWords = false;
	countByCharacters = false;
	countByParagraphs = true;
	// THIS IS WHERE YOU LEFT OFF
	refreshCount();
	refreshCounter();
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
document.getElementById("unit-count").addEventListener("input", refreshGoal);

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