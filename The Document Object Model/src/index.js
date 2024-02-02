// First find the element from html
const pname = document.getElementById("pname");
const submitBtn = document.getElementById("submitBtn");
const swapListContainer = document.getElementsByClassName("swaplist-container")[0]


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
     //new div = input value
     newDiv.textContent = pname.value 
     //console.log(newDiv);
  
    //add value to the new div
    swapListContainer.appendChild(newDiv)
    

}
