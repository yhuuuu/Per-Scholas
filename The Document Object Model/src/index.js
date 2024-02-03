// First find the element from html
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn")
const plantNameInput = document.getElementById("pname")
const plantTypeSelect = document.getElementById("ptype")
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll(".condition");
const pproblem = document.querySelectorAll(".problem");
const preferenceCheckBoxs = document.querySelectorAll(".option");
const postDate = document.getElementById("pdate");
const swapListContainer = document.getElementsByClassName("swaplist-container")[0];
const additonalBox = document.getElementById("additionalContent")
const problemDesBox = document.getElementById('problem_des')
const pdesTextarea = document.getElementById("pdes")

// // Get the input value from the form after clicking the button
addBtn.addEventListener('click', handleAddButton);
resetBtn.addEventListener('click', () => handleRestButton(document.getElementById('swap-from'), plantsArray));

//Create a Plant class
class Plant {
    constructor(name, type, height, width, conditon, problem, problem_des, exchange_method, postDate, description) {
        this.name = name
        this.type = type
        this.height = height
        this.width = width
        this.condition = conditon
        this.problem = problem
        this.problem_des = problem_des
        this.exchange_method = exchange_method
        this.postDate = postDate
        this.description = description
    }
}
// Array to store plant objects
const plantsArray = []

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
    const plantProblemDescription = problemDesBox.value
    const exchange_prefrence = getExhangePreference(preferenceCheckBoxs)

    const plantPostDayValue = postDate.value
    const plantDescription = pdesTextarea.value

    // Create the plant object
    const plant = new Plant(plantNameValue, plantTypeValue, plantHeightValue, plantWidthValue, plantCondition, plantProblem, plantProblemDescription, exchange_prefrence, plantPostDayValue, plantDescription);

    // Add the plant object to the array
    plantsArray.push(plant);

    // Log the plant object to check if values are captured correctly
    console.log(plantsArray);

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
}

//Get selected answer for plant radio button is click
function handleProblemChange(buttonValue) {
    let selectedValue = buttonValue
    // if yes -->box show, return value and box value
    // if no --> box hid. return value only
    additonalBox.style.display = (buttonValue === 'yes') ? 'block' : 'none';

    return selectedValue
}
//Get selected plant problem anwser 
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


//helper function for reset button event
function handleRestButton(plant) {
    plant.forEach(element => {
        element = ""
    });

}

// Helper function for reset button event
function handleRestButton(form, plants) {
    // Reset form values
    form.reset();

    // Reset plant objects
    plants.forEach(plant => {
        for (const property in plant) {
            if (plant.hasOwnProperty(property)) {
                plant[property] = "";
            }
        }
    });

    // Reset additional box style
    additonalBox.style.display = 'none';
}


//Create a message window

function problemBtn(){
    const pbtn = window.open("","MsgWindow","width=400, height = 400")
    }