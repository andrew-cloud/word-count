$(document).foundation();


// inputted words
let words = "";
// keeps track of word count
let count = "0"

// gets inputted words
function refreshWords() {
	words = document.getElementById("words-input").value;
}

// refreshed word count
function refreshCount() {
	count = wordCount(words);
}

// determines word count
function wordCount(str) {
	str.split(" ").length;
}

// event listeners to updated values
document.addEventListener("keyup", refreshWords);
document.addEventListener("keyup", refreshCount);

console.log(count);
