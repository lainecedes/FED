// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header nav button:nth-last-child(2)");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    var headerNav = document.querySelector("header nav");
    headerNav.classList.toggle("buttonOpen");
}

// search bar

var searchBar = document.querySelector("header nav button:nth-last-child(1)");

searchBar.addEventListener("click", openSearch);

function openSearch() {
    var searchNav = document.querySelector()
}