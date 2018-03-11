"use strict";function refreshGoal(){goal=goal_input.valueAsNumber}function refreshWords(){words=words_input.value}function refreshCount(){count=1==count_characters?characterCount(words):1==count_words?wordCount(words):paragraphCount(words)}function wordCount(e){return e=e.replace(/(^\s*)|(\s*$)/gi,""),e=e.replace(/[ ]{2,}/gi," "),e=e.replace(/\n /,"\n"),""==words?0:e.split(" ").length}function characterCount(e){return e=e.replace(/\s/g,""),e.length}function paragraphCount(e){return e=e.replace(/\n$/gm,""),""==words?0:e.split(/\n/).length}function setToWords(){count_words=!0,count_characters=!1,count_paragraphs=!1,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function setToCharacters(){count_words=!1,count_characters=!0,count_paragraphs=!1,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function setToParagraphs(){count_words=!1,count_characters=!1,count_paragraphs=!0,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function calculatePercentage(){percentage_complete=count/goal}function isGoalMet(){return count>=goal}function goalMetAlert(){isGoalMet()&0!=goal?(console.log("Goal is met!"),refreshGoalDisplay(),checkmark.classList.remove("checkmark-unmet"),checkmark.classList.add("checkmark-met")):(refreshGoalDisplay(),checkmark.classList.remove("checkmark-met"),checkmark.classList.add("checkmark-unmet"))}function goalFirstClick(e){0==goal_clicked&&this.select(),goal_clicked=!0}function unitButtonActive(){removeActiveUnitButton(),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}function removeActiveUnitButton(){var e=document.getElementsByClassName("active"),t;for(t=0;t<e.length;t++)e[t].classList.remove("active")}function refreshGoalDisplay(){document.getElementById("goal-display").innerHTML=count+"/"+goal}function refreshAll(){refreshWords(),refreshCount(),refreshGoalDisplay(),goalMetAlert()}function hide(){(this.style.display="block")?this.style.display="none":this.style.display="block"}function hideCounter(){this.classList.contains("goal-display-hidden")?this.classList.remove("goal-display-hidden"):this.classList.add("goal-display-hidden")}function toggleFullscreen(){this.classList.contains("fullscreen")?this.classList.remove("fullscreen"):this.classList.add("fullscreen")}$(document).foundation();var words="",count=0,goal=250,goal_input=document.getElementById("goal-input"),goal_display=document.getElementById("goal-display"),goal_clicked=!1,words_input=document.getElementById("words-input"),count_characters=!1,count_words=!0,count_paragraphs=!1,percentage_complete=0,checkmark=document.getElementById("checkmark"),goal_display_container=document.getElementById("goal-display-container"),entries=document.querySelectorAll(".entry"),test_entry=document.getElementById("test-entry");document.getElementById("words-button").addEventListener("click",setToWords),document.getElementById("characters-button").addEventListener("click",setToCharacters),document.getElementById("paragraphs-button").addEventListener("click",setToParagraphs),goal_display.addEventListener("click",hideCounter),document.addEventListener("keyup",refreshAll),document.getElementById("goal-input").addEventListener("input",refreshGoal),goal_input.addEventListener("click",goalFirstClick),document.getElementById("characters-button").addEventListener("click",unitButtonActive),document.getElementById("words-button").addEventListener("click",unitButtonActive),document.getElementById("paragraphs-button").addEventListener("click",unitButtonActive),test_entry.addEventListener("click",toggleFullscreen);
//# sourceMappingURL=./app-min.js.map