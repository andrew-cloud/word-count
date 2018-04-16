"use strict";function refreshTitle(){title=title_input.value}function refreshGoal(){goal=""==goal_input.value?0:goal_input.valueAsNumber}function goalFirstClick(e){0==goal_clicked&&this.select(),goal_clicked=!0}function refreshWords(){words=words_input.value}function refreshCount(){count=1==count_characters?characterCount(words):1==count_words?wordCount(words):paragraphCount(words)}function setToWords(){count_words=!0,count_characters=!1,count_paragraphs=!1,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function setToCharacters(){count_words=!1,count_characters=!0,count_paragraphs=!1,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function setToParagraphs(){count_words=!1,count_characters=!1,count_paragraphs=!0,refreshCount(),refreshGoalDisplay(),goalMetAlert()}function wordCount(e){return unit="words",e=e.replace(/(^\s*)|(\s*$)/gi,""),e=e.replace(/[ ]{2,}/gi," "),e=e.replace(/\n /,"\n"),""==words?0:e.split(" ").length}function characterCount(e){return unit="characters",e=e.replace(/\s/g,""),e.length}function paragraphCount(e){return unit="paragraphs",e=e.replace(/\n$/gm,""),""==words?0:e.split(/\n/).length}function unitButtonActive(){removeActiveUnitButton(),this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}function removeActiveUnitButton(){var e=document.getElementsByClassName("active"),t;for(t=0;t<e.length;t++)e[t].classList.remove("active")}function isGoalMet(){return count>=goal}function goalMetAlert(){isGoalMet()&0!=goal?(console.log("Goal is met!"),refreshGoalDisplay(),checkmark.classList.remove("checkmark-unmet"),checkmark.classList.add("checkmark-met")):(refreshGoalDisplay(),checkmark.classList.remove("checkmark-met"),checkmark.classList.add("checkmark-unmet"))}function refreshGoalDisplay(){goal_display.innerHTML=count+"/"+goal}function hideCounter(){goal_display.classList.toggle("goal-display-hidden"),checkmark.classList.toggle("checkmark-hidden")}function refreshAll(){refreshWords(),refreshCount(),refreshGoalDisplay(),goalMetAlert(),autoExpand(words_input)}function hide(){(this.style.display="block")?this.style.display="none":this.style.display="block"}function clearInput(){words_input.value="",refreshAll()}function refreshEntriesHeight(){entries_container.style.setProperty("--fullHeight","auto"),entries_container.style.setProperty("--fullHeight",entries_container.clientHeight+"px")}function hideDiv(){entries_container.classList.contains("open-div")?(entries_container.classList.remove("open-div"),entries_container.classList.add("closed-div"),hide_icon.innerHTML='<i class="fas fa-angle-up fa-lg"></i>'):(entries_container.classList.remove("closed-div"),entries_container.classList.add("open-div"),hide_icon.innerHTML='<i class="fas fa-angle-down fa-lg"></i>')}function generateTeaser(e){var t=e.substring(0,56)+"...";return t.trim(),t}function generateID(){return"modal"+ ++modal_number}function generateIcon(){return 1==isGoalMet()?'<i class="fas fa-check-circle"></i>':'<i class="fas fa-times-circle"></i>'}function generateGoalClass(){return 1==isGoalMet()?"goal-met":"goal-unmet"}function limitEntries(){var e=document.querySelectorAll(".entry"),t=document.querySelectorAll(".reveal");if(e.length>=13){var n=entries_container_inner.lastElementChild;entries_container_inner.removeChild(n),refreshEntriesHeight(),console.log(e.length)}}function createEntry(){var e=document.createElement("div");e.className="large-4 medium-6 small-12 cell";var t=document.createElement("div");t.className="entry";var n=document.createElement("p");n.className="title",n.innerHTML=title;var r=document.createElement("p");r.className="date",r.innerHTML="Jan 1, 18";var a=document.createElement("p");a.className="teaser",a.innerHTML=generateTeaser(words);var i=document.createElement("div");i.className=generateGoalClass(),i.innerHTML=count+"/"+goal+" "+unit+" "+generateIcon(),entries_container_inner.insertBefore(e,entries_container_inner.firstChild).appendChild(t).appendChild(n),t.appendChild(r),t.appendChild(a),t.appendChild(i);var o=document.createElement("div"),s=generateID();o.id=s,o.className="reveal";var c=document.createElement("button");c.className="close-button",c.setAttribute("data-close",""),c.setAttribute("aria-label","Close modal"),c.setAttribute("type","button");var l=document.createElement("span");l.setAttribute("aria-hidden","true"),l.innerHTML="×";var d=document.createElement("p");d.className="content-title",d.innerHTML=title;var u=document.createElement("p");u.className="content-date",u.innerHTML="Jan 1st, 2018";var m=document.createElement("p");m.className="content-goal",m.innerHTML=count+"/"+goal+" "+unit+" "+generateIcon();var p=document.createElement("p");p.className="content-body",p.innerHTML=words,body.appendChild(o).appendChild(c).appendChild(l),o.appendChild(d),o.appendChild(u),o.appendChild(p),o.appendChild(m);var h={AnimationIn:"scaleIn",AnimationOut:"scaleOut"},g=new Foundation.Reveal($("#"+s),h);t.setAttribute("data-open",s),refreshEntriesHeight(),clearInput(),limitEntries()}$(document).foundation();var title="",words="",count=0,goal=250,unit="words",goal_input=document.getElementById("goal-input"),goal_display=document.getElementById("goal-display"),goal_clicked=!1,title_input=document.getElementById("title-input"),words_input=document.getElementById("words-input"),count_characters=!1,count_words=!0,count_paragraphs=!1,percentage_complete=0,checkmark=document.getElementById("checkmark"),goal_display_container=document.getElementById("goal-display-container"),save_button=document.getElementById("save-button"),entries=document.querySelectorAll(".entry"),entries_container=document.getElementById("entries-container"),entries_container_inner=document.getElementById("entries-container-inner"),test_entry=document.getElementById("test-entry"),close_entries_link=document.getElementById("close-entries-link"),entries_container_height=entries_container.clientHeight,maxEntries=12,body=document.body,modal_container=document.getElementById("modal-container"),hide_icon=document.getElementById("hide-icon");document.getElementById("words-button").addEventListener("click",setToWords),document.getElementById("characters-button").addEventListener("click",setToCharacters),document.getElementById("paragraphs-button").addEventListener("click",setToParagraphs),goal_display_container.addEventListener("click",hideCounter),document.addEventListener("keyup",refreshAll),title_input.addEventListener("input",refreshTitle),document.getElementById("goal-input").addEventListener("input",refreshGoal),goal_input.addEventListener("click",goalFirstClick),document.getElementById("characters-button").addEventListener("click",unitButtonActive),document.getElementById("words-button").addEventListener("click",unitButtonActive),document.getElementById("paragraphs-button").addEventListener("click",unitButtonActive);var autoExpand=function e(t){t.style.height="inherit";var n=window.getComputedStyle(t),r=parseInt(n.getPropertyValue("border-top-width"),10)+parseInt(n.getPropertyValue("padding-top"),10)+t.scrollHeight+parseInt(n.getPropertyValue("padding-bottom"),10)+parseInt(n.getPropertyValue("border-bottom-width"),10);t.style.height=r+"px"};entries_container.style.setProperty("--fullHeight",entries_container.clientHeight+"px"),close_entries_link.addEventListener("click",hideDiv),save_button.addEventListener("click",createEntry);var modal_number=0;window.addEventListener("resize",refreshEntriesHeight);
//# sourceMappingURL=./app-min.js.map