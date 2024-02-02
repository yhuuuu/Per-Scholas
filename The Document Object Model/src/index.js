// First find the element from html
const submitBtn = document.getElementById("submitBtn");
const plantNameInput = document.getElementById("pname")
const plantTypeSelect = document.getElementById("ptype")
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll("condition");
const problem = document.querySelectorAll("problem")
const preferenceCheckBox = document.querySelectorAll("problem")
const postDate = document.getElementById("pdate")
const swapListContainer = document.getElementsByClassName("swaplist-container")[0]

// // Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);


function handleClick(event) {
    //prevent the default from submissoin behavior
    event.preventDefault();

    //get  value from each input
    const plantNameValue = plantNameInput.value
    const plantTypeValue = plantTypeSelect.value

    //insert a row into an HTML table when a add button is cliked  
    const infoTableBody = document.getElementById('info-tbody')
    const newRow = infoTableBody.insertRow(infoTableBody.rows.length);

    // Insert cells and set their content
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = plantNameValue
    cell2.innerHTML = plantTypeValue

}

