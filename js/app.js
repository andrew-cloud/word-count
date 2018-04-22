$(document).foundation();

// VARIABLES

// inputted title
let title = ""
// inputted words variable
let words = "";
// word count variable
let count = 0;
// goal variable
let goal = 250;
// units
let unit = "words";
// selected project
let project = document.getElementById('select-project');
// selected project
let project_name = project.options[project.selectedIndex].innerHTML;
// project title input
let project_input = document.getElementById('project-input');
// new project title
let new_project_name = document.getElementById('project-input').value;
// goal input
let goal_input = document.getElementById("goal-input");
// goal-display
let goal_display = document.getElementById("goal-display");
// has the goal input been clicked before?
let goal_clicked = false;
// title input
let title_input = document.getElementById("title-input");
// word input
let words_input = document.getElementById("words-input");
// character count boolean
let count_characters = false;
// word count boolean, true by default
let count_words = true;
// paragraph count boolean
let count_paragraphs = false;
// percentage of goal complete
let checkmark = document.getElementById("checkmark");
// goal-display with icon
let goal_display_container = document.getElementById("goal-display-container");
//save button
let save_button = document.getElementById("save-button");
// all entires
var entries = document.querySelectorAll('.entry');
// entries container
var entries_container = document.getElementById("entries-container");
//entries-container-inner 
var entries_container_inner = document.getElementById("entries-container-inner");
// test entry
let test_entry = document.getElementById("test-entry");
// close entries link
let close_entries_link = document.getElementById("close-entries-link");
// entries container height
let entries_container_height = entries_container.clientHeight;
// maximum number of entry cards
const maxEntries = 12;
// body
let body = document.body;
// modal container
let modal_container = document.getElementById("modal-container");
// hide icon
let hide_icon = document.getElementById("hide-icon");

// EDITOR FUNCTIONALITY

// gets inputted title
function refreshTitle() {
    title = title_input.value;
}

// gets goal number from input field
function refreshGoal() {
    if (goal_input.value == "") {
        goal = 0;
    } else {
        goal = goal_input.valueAsNumber;
    }
}

// refresh selected project
function refreshProject() {
    project_name = project.options[project.selectedIndex].value;
    newProject();
    console.log(project_name);
}

// display input field if starting new project
function newProject() {
    if (project_name == "new") {
        project_input.classList.remove("display-none");
    } else {
        project_input.classList.add("display-none");
    }
}

function refreshNewProjectName() {
    new_project_name = document.getElementById('project-input').value;
}

// selects entire goal input field if it's the first click
function goalFirstClick(e) {
    if (goal_clicked == false) {
        this.select();
    }
    goal_clicked = true;

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

// sets count to words
function setToWords() {
    count_words = true;
    count_characters = false;
    count_paragraphs = false;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// sets count to characters
function setToCharacters() {
    count_words = false;
    count_characters = true;
    count_paragraphs = false;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// sets count to paragraphs
function setToParagraphs() {
    count_words = false;
    count_characters = false;
    count_paragraphs = true;
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
}

// determines word count
function wordCount(s) {
    unit = "words";
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); // 2 or more spaces to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    if (words == "") {
        return 0;
    } else {
        return s.split(' ').length;
    }
}

// determines character count
function characterCount(s) {
    unit = "characters";
    s = s.replace(/\s/g, "");
    return s.length;
}

// determines paragraph count
function paragraphCount(s) {
    unit = "paragraphs";
    s = s.replace(/\n$/gm, '');
    if (words == "") {
        return 0;
    } else {
        return s.split(/\n/).length;
    }
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

// checks to see if goal is met
function isGoalMet() {
    return (count >= goal);
}

// changes color of icon when goal is
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


// get current project
project.addEventListener("input", refreshProject);

// button click - set count to words
document.getElementById("words-button").addEventListener("click", setToWords);

// button click - set count to words
document.getElementById("characters-button").addEventListener("click", setToCharacters);

// button click - set count to words
document.getElementById("paragraphs-button").addEventListener("click", setToParagraphs);



// updates goal progress
function refreshGoalDisplay() {
    goal_display.innerHTML = `${count}/${goal}`;
}

// hides counter
function hideCounter() {
    goal_display.classList.toggle("goal-display-hidden");
    checkmark.classList.toggle("checkmark-hidden");
}

// hides goal-display
goal_display_container.addEventListener("click", hideCounter);

// refreshes all values (inputted words, inputted goal, inputted goal display, and checks if goal is met)
function refreshAll() {
    refreshWords();
    refreshCount();
    refreshGoalDisplay();
    goalMetAlert();
    autoExpand(words_input);
}

// refreshes values after input
document.addEventListener("keyup", refreshAll);

// refreshes title
title_input.addEventListener("input", refreshTitle);

// refreshes new project name
project_input.addEventListener("input", refreshNewProjectName);

// refreshed goal in goal-display when new amount is entered
document.getElementById("goal-input").addEventListener("input", refreshGoal);

// highlights everything in goal input on first click
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

// auto-expands large input field as it gets filled
let autoExpand = function(field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

};

// clears input and updates progress feedback after submission
function clearInput() {
    words_input.value = "";
    refreshAll();

}

// ENTRIES

// sets auto height of entry container to pixels, allowing for smooth transition
entries_container.style.setProperty("--fullHeight", entries_container.clientHeight + "px");

function refreshEntriesHeight() {
    entries_container.style.setProperty("--fullHeight", "auto");
    entries_container.style.setProperty("--fullHeight", entries_container.clientHeight + "px");

}
// closes entries container
close_entries_link.addEventListener("click", hideDiv);

function hideDiv() {
    if (entries_container.classList.contains("open-div")) {
        entries_container.classList.remove("open-div");
        entries_container.classList.add("closed-div");
        hide_icon.innerHTML = `<i class="fas fa-angle-up fa-lg"></i>`
    } else {
        entries_container.classList.remove("closed-div");
        entries_container.classList.add("open-div");
        hide_icon.innerHTML = `<i class="fas fa-angle-down fa-lg"></i>`
    }
}

// creates a new entry card
save_button.addEventListener("click", createEntry);

// generates the content teaser for entry cards, first 55 characters
function generateTeaser(s) {
    let teaser = s.substring(0, 56) + "...";
    teaser.trim();
    return teaser;
}

// generates an ID for new modals
let modal_number = 0;

function generateID() {
    modal_number++;
    let current_modal = `modal${modal_number}`;
    return current_modal;
}

// generates icon for new entry based on goal status
function generateIcon() {
    if (isGoalMet() == true) {
        return `<i class="fas fa-check-circle"></i>`;
    } else {
        return `<i class="fas fa-times-circle"></i>`;

    }
}

// determines class for new entry based on goal status
function generateGoalClass() {
    if (isGoalMet() == true) {
        return "goal-met";
    } else {
        return "goal-unmet";

    }
}

function generateEntryBorder() {
    if (isGoalMet() == true) {
        return "entry-met";
    } else {
        return "entry-unmet";

    }
}

function generateProjectName() {
    if (project.options[project.selectedIndex].value == "none") {
        return "";
    }
    if (project.options[project.selectedIndex].value == "new") {
        refreshNewProjectName();
        return ` - ${new_project_name}`;
    } else {
        return ` - ${project.options[project.selectedIndex].value}`;
    }
}


// caps number of entries on editor page to twelve
function limitEntries() {
    let entries_list = document.querySelectorAll(".entry");
    let modal_list = document.querySelectorAll(".reveal");
    if (entries_list.length >= 13) {
        let lastEntry = entries_container_inner.lastElementChild;
        entries_container_inner.removeChild(lastEntry);
        // let lastModal = modal_container.lastElementChild;
        // modal_container.removeChild(lastModal);
        refreshEntriesHeight();
    } else {
        return;
    }
    console.log(entries_list.length);
}

// resizes entry container when screen is resized
window.addEventListener("resize", refreshEntriesHeight);

// creates all the elements for a new entry
function createEntry() {
    // creates the cell for the entry card
    let newEntryCell = document.createElement("div");
    newEntryCell.className = "large-4 medium-6 small-12 cell";
    // creates the entry div
    let newEntryDiv = document.createElement("div");
    newEntryDiv.className = `entry ${generateEntryBorder()}`;
    // creates the entry title
    let newEntryTitle = document.createElement("p");
    newEntryTitle.className = "title";
    newEntryTitle.innerHTML = title;
    // creates the entry date
    let newEntryDate = document.createElement("p");
    newEntryDate.className = "date";
    newEntryDate.innerHTML = "Jan 14th, 2018";
    // creates the entry teaser
    let newEntryTeaser = document.createElement("p");
    newEntryTeaser.className = "teaser";
    newEntryTeaser.innerHTML = generateTeaser(words);
    // creates goal met/unmet tag
    let newEntryTag = document.createElement("div");
    newEntryTag.className = generateGoalClass();
    newEntryTag.innerHTML = `${count}/${goal} ${unit} ${generateIcon()}`;

    // combines everything together and appends it to the entries container
    entries_container_inner.insertBefore(newEntryCell, entries_container_inner.firstChild).appendChild(newEntryDiv).appendChild(newEntryTitle);
    newEntryDiv.appendChild(newEntryDate);
    newEntryDiv.appendChild(newEntryTeaser);
    newEntryDiv.appendChild(newEntryTag);
    // creates the modal content
    let content = document.createElement("div");
    let id = generateID();
    content.id = id;
    content.className = "reveal";
    // create 'close' button
    let contentClose = document.createElement("button");
    contentClose.className = "close-button";
    contentClose.setAttribute("data-close", "");
    contentClose.setAttribute("aria-label", "Close modal");
    contentClose.setAttribute("type", "button");
    // create 'x' for close button
    let contentCloseX = document.createElement("span");
    contentCloseX.setAttribute("aria-hidden", "true");
    contentCloseX.innerHTML = "×";
    // creates modal title
    let contentTitle = document.createElement("p");
    contentTitle.className = "content-title";
    contentTitle.innerHTML = title;
    // creates modal date
    let contentDate = document.createElement("p");
    contentDate.className = "content-date";
    contentDate.innerHTML = `Jan 14th, 2018 ${generateProjectName()}`;
    // creates modal goal information
    let contentGoal = document.createElement("p");
    contentGoal.className = "content-goal";
    contentGoal.innerHTML = `${count}/${goal} ${unit} ${generateIcon()}`;
    // creates modal body information
    let contentBody = document.createElement("p");
    contentBody.className = "content-body";
    contentBody.innerHTML = words;
    // new elements have to be appended to something, in this case, the body
    body.appendChild(content).appendChild(contentClose).appendChild(contentCloseX);
    content.appendChild(contentTitle);
    content.appendChild(contentDate);
    content.appendChild(contentBody);
    content.appendChild(contentGoal);


    // options for newly generated modal
    let options = {
        AnimationIn: "scaleIn",
        AnimationOut: "scaleOut"
    };

    let modal = new Foundation.Reveal($(`#${id}`), options);

    // sets entry div to open newly generated modal
    newEntryDiv.setAttribute("data-open", id);
    // $(`#${id}`).foundation();

    refreshEntriesHeight();
    clearInput();
    limitEntries()
}

// ENTRIES PAGE