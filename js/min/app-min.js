"use strict";function refreshWords(){words=document.getElementById("words-input").value}function refreshCount(){count=wordCount(words)}function wordCount(e){e.split(" ").length}$(document).foundation();var words="",count="0";document.addEventListener("keyup",refreshWords),document.addEventListener("keyup",refreshCount),console.log(count);
//# sourceMappingURL=./app-min.js.map