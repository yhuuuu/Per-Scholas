 import * as Favorite from "./fav.js";


const randomImgBox = document.getElementById('random_img_container')
const dogCardContainer = document.createElement('div')


const API_KEY = `live_6olo9RBewaIncUjmWKJFmPBas3EtGEQI3bU5nFZtdtXP0JuhZsN6f9PUXyq8sekg`

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//Function for randomly populate dog img and user and fav the img
async function displayRadomImg() {

    const response = await axios.get(`images/search?limit=30`)
    const data = response.data

    data.forEach(randomDog => {

        const randomDogUrl = randomDog.url

        // Create a div to contain the image and button
        const dogCard = document.createElement('div')
        dogCard.classList.add('dog_card')
        dogCardContainer.classList.add('dog_cards_container')

        // Create the image element
        const randomImg = document.createElement('img')
        randomImg.src = randomDogUrl

        //Create the'add to fav' button element
        const favBtn = document.createElement('button')
        favBtn.textContent = 'add to fav!'


        // Append the image and button to the container div
        dogCard.appendChild(randomImg)
        dogCard.appendChild(favBtn)

        dogCardContainer.appendChild(dogCard)


        favBtn.classList.add('addToFav')

    });
    randomImgBox.appendChild(dogCardContainer)
    Favorite.show()
}

displayRadomImg()
