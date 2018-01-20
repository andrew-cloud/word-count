$(document).foundation();


// inputted words
let words = "";
// word count
let count = "0";

// gets inputted words form text area
function refreshWords() {
	words = document.getElementById("words-input").value;
}

// refreshes word count
function refreshCount() {
	count = wordCount(words);
}

// word count
function wordCount(str) {
	return str.split(" ").length;
}

// refreshes values after input
document.addEventListener("keyup", refreshWords);
document.addEventListener("keyup", refreshCount);

console.log(count);
