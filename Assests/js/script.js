const dropdown = document.getElementById("dropdown");
const dropdownLayer = document.getElementById("dropdown-lay1");
// const items = document.querySelectorAll(".nav-dropdown-anchor");
const navUnorderedList = document.getElementById("nav-ul-id");

const lineOne = document.getElementById("line-first");
const lineTwo = document.getElementById("line-second");
const lineThree = document.getElementById("line-third");


function toggleClass(event){
    dropdown.classList.toggle("hide");
    dropdownLayer.classList.toggle("hide");
}

function hamburgerFunct(event){
    dropdownLayer.classList.toggle("hide");
    lineOne.classList.toggle("line-f");
    lineTwo.classList.toggle("line-s");
    lineThree.classList.toggle("line-t");
    navUnorderedList.classList.toggle("nav-ul-slider");
    removeToggleClass();
}