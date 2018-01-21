$(document).foundation();


// inputted words
let words = "";
// word count
let count = "0";
// unit-counter
let unit_counter = document.getElementById("unit-counter");

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
	document.getElementById("unit-counter").innerHTML = `${count}/250`;
}

// hide unit-counter
document.getElementById("unit-counter").addEventListener("click", makeTransparent);

// refreshes values after input
document.addEventListener("keyup", refreshWords);
document.addEventListener("keyup", refreshCount);
document.addEventListener("keyup", refreshCounter);

// hide method
function hide() {
	if (this.style.display = "block") {
		this.style.display = "none";
	}
	else this.style.display = "block";
}

function makeTransparent() {
	if (this.style.color != "white") {
		this.style.color = "white";
	}
	else this.style.color = "black";
}

console.log(count);
