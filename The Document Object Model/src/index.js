// First find the element from html
const pname = document.getElementById("pname");
const submitBtn = document.getElementById("submitBtn");
const ptype = document.getElementById("ptype");
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll("condition")







const swapListContainer = document.getElementsByClassName("swaplist-container")[0]


// Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);

function handleClick(event) {
    //prevent the default from submissoin behavior
    event.preventDefault();

    //Create new div
    const newDiv = document.createElement("div")

    //new div = input value ==> <div> pname.value </div>
    newDiv.textContent = `Plant name :${pname.value} Plant Type:${ptype.value}`

    //add value to the new div
    swapListContainer.appendChild(newDiv)
}
