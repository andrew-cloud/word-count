$(document).foundation();


// inputted words variable
let words = "";
// word count variable
let count = "0";
// goal variable
let goal = 0;
// goal input
let goal_input = document.getElementById("unit-count");
// unit-counter
let unit_counter = document.getElementById("unit-counter");


// gets goal number from input field
function refreshGoal() {
goal = goal_input.value;
}

// gets inputted words form text area
function refreshWords() {
	words = document.getElementById("words-input").value;
}

// refreshes word count
function refreshCount() {
	count = wordCount(words);
}

// word count
function wordCount(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," "); // 2 or more spaces to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').length; 
}

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
	}
	else this.style.display = "block";
}

function hideCounter() {
	if (this.classList.contains("unit-counter-hidden")) {
		this.classList.remove("unit-counter-hidden");
	}
	else this.classList.add("unit-counter-hidden");
}
