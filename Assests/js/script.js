const dropdown = document.getElementById("dropdown");
const dropdownLayer = document.getElementById("dropdown-lay1");
const items = document.querySelectorAll(".nav-dropdown-anchor");
const navUnorderedList = document.getElementById("nav-ul-id");

const lineOne = document.getElementById("line-first");
const lineTwo = document.getElementById("line-second");
const lineThree = document.getElementById("line-third");


function toggleClass(){
    dropdown.classList.toggle("hide");
    dropdownLayer.classList.toggle("hide");
    if(dropdownLayer.classList.contains("hide") && navUnorderedList.classList.contains("nav-ul-slider")){
        toggleClass();
        hamburgerFunct();
    }
}

function removeToggleClass(){
    if(!dropdown.classList.contains("hide")){
        dropdown.classList.add("hide");
        dropdownLayer.classList.add("hide");
    }
}

items.forEach(ele=>ele.addEventListener('click', ()=>{
    toggleClass();
}));

function hamburgerFunct(){
    // dropdownLayer2.classList.toggle("hide");
    lineOne.classList.toggle("line-f");
    lineTwo.classList.toggle("line-s");
    lineThree.classList.toggle("line-t");
    navUnorderedList.classList.toggle("nav-ul-slider");
    removeToggleClass();
}