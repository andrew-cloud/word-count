$(document).foundation();

// ALL ENTRIES
let all_entries = document.getElementsByClassName("entry");
let search_input = document.getElementById("search-input");
let container = document.getElementById("all-entries-inner-container");
let search_term = search_input.value.toLowerCase();
let project_dropdown = document.getElementById("project-dropdown");
let project_value = project_dropdown.value;

// console.log(all_entries[0].innerText);

// refreshes search term
function refreshSearchTerm() {
    search_term = search_input.value.toLowerCase();
}

// searches entries for words in search bar
function searchEntry() {
    var i;
    for (i = 0; i < all_entries.length; i++) {
        if (all_entries[i].innerText.toLowerCase().includes(search_term)) {
            console.log(all_entries[i].innerText)
            all_entries[i].classList.remove("hide");
            all_entries[i].parentElement.classList.remove("hide");
        } else {
            all_entries[i].classList.add("hide");
            all_entries[i].parentElement.classList.add("hide");
        }
    }
}

// searches entries for entries within a specific project
function searchProject() {
    project_value = project_dropdown.value;
    var i;
    if (project_value == "all") {
        displayAllEntries();
    } else {
        for (i = 0; i < all_entries.length; i++) {
            if (all_entries[i].dataset.project == project_value) {
                console.log(all_entries[i].innerText)
                all_entries[i].classList.remove("hide");
                all_entries[i].parentElement.classList.remove("hide");
            } else {
                all_entries[i].classList.add("hide");
                all_entries[i].parentElement.classList.add("hide");
            }
        }

    }
}

// displays all entries
function displayAllEntries() {
    var i;
    for (i = 0; i < all_entries.length; i++) {
        all_entries[i].classList.remove("hide");
        all_entries[i].parentElement.classList.remove("hide");
    }
}

// refreshes search term on input
search_input.addEventListener('input', refreshSearchTerm);
// listens for words entered in search bar
search_input.addEventListener('input', searchEntry);
// listens for new dropdown selection
project_dropdown.addEventListener('input', searchProject);