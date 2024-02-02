// First find the element from html
const pname = document.getElementById("pname");
const submitBtn = document.getElementById("submitBtn");

const swapListContainer = document.getElementsByClassName("swaplist-container")
// Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);

function handleClick(event) {
    //prevent the default from submissoin behavior
    event.preventDefault();
    //content
    const pname_value = pname.value
    
    console.log(pname_value);
    
     //Create new div
     const newDiv = document.createElement("div")
     newDiv.textContent = pname.value 
     console.log(newDiv);
    //  newDiv.textContent = pname.value;
    // //add value to the new div
    // swapListContainer.appendChild(newDiv)

}
