// First find the element from html
const submitBtn = document.getElementById("submitBtn");
const plantNameInput = document.getElementById("pname")
const plantTypeSelect = document.getElementById("ptype")
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll(".condition");
const pproblem = document.querySelectorAll(".problem");
const pdesTextarea = document.getElementById("pdes");
const preferenceCheckBoxs = document.querySelectorAll(".option");
const postDate = document.getElementById("pdate");
const swapListContainer = document.getElementsByClassName("swaplist-container")[0];

//const radioButtons = document.getElementsByClassName("problem")
const additonalBox = document.getElementById("additionalContent")

// // Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleAddButton);

//Plant class
class Plant {
    constructor(name, type, height, width, conditon, problem, exchange_method, postDate) {
        this.name = name
        this.type = type
        this.height = height
        this.width = width
        this.condition = conditon
        this.problem = problem
        this.exchange_method = exchange_method
        this.postDate = postDate
    }
}


function handleAddButton(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from each input
    const plantNameValue = plantNameInput.value;
    const plantTypeValue = plantTypeSelect.value;
    const plantHeightValue = pheight.value;
    const plantWidthValue = pwidth.value;

    const plantCondition = getPlantCondition(conditionCheckBoxes)
    const plantProblem = getSelectedRadioValue(pproblem)
    const exchange_prefrence = getExhangePreference(preferenceCheckBoxs)
    const plantPostDayValue = postDate.value

    // Create the plant object
    const plant = new Plant(plantNameValue, plantTypeValue, plantHeightValue, plantWidthValue, plantCondition, plantProblem, exchange_prefrence, plantPostDayValue);

    // Log the plant object to check if values are captured correctly



    /**
     * Creating a new row (<tr>) and appending it to an HTML table. 
     * infoTableBody: <tbody> element 
     * infoTableBody.rows.length: retrieves the number of rows currently in the table body 
     * infoTableBody.insertRow(infoTableBody.rows.length): creates a new table row (<tr>) and inserts it at the end of the table body. 
     */
    const newRow = infoTableBody.insertRow(infoTableBody.rows.length);

    //iterate over the properties of plant object (plantNameValue, plantTypeValue, plantHeightValue...)
    for (const property in plant) {
        // checks if the property being iterated over is a direct property of the object itself
        if (plant.hasOwnProperty(property)) {
            //creates a new table cell (<td>) and assigns it to the variable cell
            const cell = newRow.insertCell();
            //sets the content of the newly created cell to the value of the current property of the plant object being iterated over
            cell.innerHTML = plant[property];
        }
    }
}


//Get all conditoins that is checked and store in a array
function getPlantCondition(conditionCheckBoxes) {
    const selectedConditions = []
    for (const checkbox of conditionCheckBoxes) {
        if (checkbox.checked) {
            selectedConditions.push(checkbox.value)
        }
    }
    return selectedConditions
}

//add event listener to all answer
for (const radioButton of pproblem) {
    radioButton.addEventListener('change', () => handleProblemChange(radioButton.value))

    // console.log("click");
    // console.log(pproblem);
}

//Get selected answer for plant radio button is click
function handleProblemChange(buttonValue) {
    let selectedValue = buttonValue
    // if yes -->box show, return value and box value
    if (selectedValue == 'yes') {
    }
    // if no --> box hid. return value only
    else {
        additonalBox.style.display = "none"
    }
    return selectedValue
}

function getSelectedRadioValue(radioButtons) {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    }
}





//Get all exhange preference that is checked and store in a array
function getExhangePreference(preferenceCheckBoxs) {
    const selectedExchangePerference = []
    for (const checkbox of preferenceCheckBoxs) {
        if (checkbox.checked) {
            selectedExchangePerference.push(checkbox.value)
        }
    }
    return selectedExchangePerference
}
