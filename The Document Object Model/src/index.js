// First find the element from html
const pname = document.getElementById("pname");
const submitBtn = document.getElementById("submitBtn");

const swapList = document.getElementByClass("swaplist-container")
// Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);

function handleClick() {
    //Create new div
    const newDiv = document.createElement("div")
    //content
    const pname_value = pname.value
    
    
    // //add value to the new div
    // newDiv.appendChild(pname_value)


}