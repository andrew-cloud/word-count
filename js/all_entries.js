$(document).foundation();

// ALL ENTRIES
let all_entries = document.getElementsByClassName("entry");
console.log(all_entries[0].innerText);

var i;
for (i = 0; i < all_entries.length; i++) { 
    console.log(all_entries[i].innerText)
}