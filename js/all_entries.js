$(document).foundation();

// ALL ENTRIES
let all_entries = document.getElementsByClassName("entry");
let search_input = document.getElementById("search-input");
let container = document.getElementById("all-entries-inner-container");
let search_term = search_input.value;
// console.log(all_entries[0].innerText);

// refreshes search term
function refreshSearchTerm() {
    search_term = search_input.value;
}

// loops through all entiries on page
function searchEntry() {
    var i;
    for (i = 0; i < all_entries.length; i++) {
        if (all_entries[i].innerText.includes(search_term)) {
        	console.log(all_entries[i].innerText)
            all_entries[i].classList.remove("hide");
            all_entries[i].parentElement.classList.remove("hide");
        } else {
        	all_entries[i].classList.add("hide");
        	all_entries[i].parentElement.classList.add("hide");
        }
    }
}

// refreshes search term on input
search_input.addEventListener('input', refreshSearchTerm);
// loops searching for match
search_input.addEventListener('input', searchEntry);

console.log(all_entries[0]);