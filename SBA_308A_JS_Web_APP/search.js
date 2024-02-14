
const dogsSelectBox = document.getElementById('dog_breed_select');
const dogSearchBtn = document.getElementById('dog_breed_select_btn')
const dogImgBox = document.getElementById('dogImg-container')

const API_KEY = `live_6olo9RBewaIncUjmWKJFmPBas3EtGEQI3bU5nFZtdtXP0JuhZsN6f9PUXyq8sekg`

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/// Function to display all dog breeds in the select box
async function displayDog() {
    //get dog list
    const allDogsInfo = await axios.get(`/breeds/`)
    const data = allDogsInfo.data;

    //appent dog breeds to the select box
    data.forEach(breed => {
        const option = document.createElement('option')

        //let the value = breed_id
        option.value = breed.id
        option.text = breed.name
        // console.log(option);
        dogsSelectBox.appendChild(option)
    });


}


// Function to display all dog breeds in the select box and set up event listener for button click
async function setUpDogApp() {

    // display all dog breeds in the select ox
    await displayDog();


    // add event listener for button click to fetch images
    dogSearchBtn.addEventListener('click', async(event) => {
        event.preventDefault();
        //fetch image for the select breed
        await fetchImg(dogsSelectBox.value)
    })

}





// Function to fetch images for the selected breed and display them
async function fetchImg(dogsBreed) {

    dogImgBox.innerHTML = ''; // clear existing imges

    //ferch imges for the selected dog breed by breed id
    const dogImgList = await axios.get(`images/search?breed_ids=${dogsBreed}`)

    //display images of the selected dog breed
    dogImgList.data.forEach(element => {

        const dogImg = document.createElement('img')
        dogImg.src = element.url
        dogImgBox.appendChild(dogImg)
        
        const favBtn = document.createElement('button')
        favBtn.textContent = 'add to fav!'
        dogImgBox.appendChild(favBtn)
        favBtn.classList.add('addToFav'); // Add CSS class to the button


    });


}

// Call the setupDogApp function to initialize the application
setUpDogApp()

