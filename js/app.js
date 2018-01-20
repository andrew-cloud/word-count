$(document).foundation();



let words = "";
let count = "0";


function refreshWords() {
	words = document.getElementById("words-input").value;
}

function refreshCount() {
	count = wordCount(words);
}

function wordCount(str) {
	return str.split(" ").length;
}

document.addEventListener("keyup", refreshWords);
document.addEventListener("keyup", refreshCount);

console.log(count);
