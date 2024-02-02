// First find the element from html
const submitBtn = document.getElementById("submitBtn");
const plantNameInput = document.getElementById("pname")
const plantTypeSelect = document.getElementById("ptype")
const pheight = document.getElementById("pheight");
const pwidth = document.getElementById("pwidth");
const conditionCheckBoxes = document.querySelectorAll(".condition");
const problem = document.querySelectorAll("problem")
const preferenceCheckBoxs = document.querySelectorAll(".option")
const postDate = document.getElementById("pdate")
const swapListContainer = document.getElementsByClassName("swaplist-container")[0]

// // Get the input value from the form after clicking the button
submitBtn.addEventListener('click', handleClick);

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


function handleClick(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from each input
    const plantNameValue = plantNameInput.value;
    const plantTypeValue = plantTypeSelect.value;
    const plantHeightValue = pheight.value;
    const plantWidthValue = pwidth.value;

    const plantCondition = getPlantCondition(conditionCheckBoxes)
    const plantProblem = problem.value;
    const exchange_prefrence = getExhangePreference(preferenceCheckBoxs)
    const plantPostDayValue = postDate.value

    // Create the plant object
    const plant = new Plant(plantNameValue, plantTypeValue, plantHeightValue, plantWidthValue, plantCondition, plantProblem, exchange_prefrence, plantPostDayValue);

    // Log the plant object to check if values are captured correctly
    console.log(plant);
    console.log(plantCondition);
    console.log(exchange_prefrence);

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

//Get all exhange preference that is checked and store in a array
function getExhangePreference(preferenceCheckBoxs){
    const selectedExchangePerference = []
    for (const checkbox of preferenceCheckBoxs) {
        if (checkbox.checked) {
            selectedExchangePerference.push(checkbox.value)
        }     
    }
    return selectedExchangePerference
}

function showProblembox(){
    
}


