import * as Carousel from "./Carousel.js";
import axios from "axios";

// The breed selection input cat.
const breedSelect = document.getElementById("breedSelect");
// The information section div cat.
const infoDump = document.getElementById("infoDump");
// The progress bar div cat.
const progressBar = document.getElementById("progressBar");
// The get favourites button cat.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_SEFMavtXbAGcLwJphkxhXOIzBzOUudV2AyWi28qPJiayq0jKQUNVweZxHccfexaT";

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

// async function initialLoad() {
//   const response = await fetch("https://api.thecatapi.com/v1/breeds");
//   const data = await response.json();
//   //console.log(data);

//   data.forEach((breed) => {
//     const option = document.createElement("option");
//     option.value = breed.id;
//     option.text = breed.name;
//     breedSelect.appendChild(option);
//   });

// }



/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 * - Make sure your request is receiving multiple array items!
 * - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new cat for the carousel.
 * - Append each of these new cats to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump cat.
 * - Be creative with how you create DOM cats and HTML.
 * - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 * - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */

// breedSelect.addEventListener('change', selectedCat)

// async function selectedCat(event) {

//   const id = event.target.value
//   console.log(`catid:`,id);

//   //Clear the carousel before fetching and appending new items
//   Carousel.clear()

//   //Fetching data
//   const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=${API_KEY}`);
//   const data = await response.json()
//   console.log(`cat dataset:`,data);

//   //get url for each cat
//   data.forEach(cat => {
//     const eachCat = Carousel.createCarouselItem(cat.url, "cat", cat.id)
//     console.log('eachcat:',eachCat);
//     Carousel.appendCarousel(eachCat)  
//   });

//   displayCatBreedDes(data[0].breeds[0].description)
// }



function displayCatBreedDes(catDes) {
  //clear the existing description before adding the new one
  infoDump.innerHTML = ''

  // create an h1 element for "Cat Description:"
  const catDesHeading = document.createElement('h2')
  catDesHeading.textContent = "Cat Description:"
  infoDump.appendChild(catDesHeading)

  const catBreedDesEle = document.createElement('span')
  catBreedDesEle.textContent = catDes
  infoDump.appendChild(catBreedDesEle);
}

// initialLoad()

/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */

/**
 * 
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */
// Set config defaults when creating the instance

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-rapidapi-key'] = API_KEY;


const fetchQuotes = async () => {
  try {
    const response = await axios.get('/breeds');
    const data = response.data;

    data.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.text = breed.name;
      breedSelect.appendChild(option);
    });

  } catch (error) {
    console.log('Erroe fetching quotes:', error);
    throw error;
  }
}

breedSelect.addEventListener('change', fetchCatImage)

async function fetchCatImage(event) {

  const id = event.target.value
  Carousel.clear()

  try {
    const response = await axios.get(`/images/search?limit=10&breed_ids=${id}&api_key=${API_KEY}`);

    const data = await response.data
    //console.log(`cat dataset:`, data);

    //get url for each cat
    data.forEach(cat => {
      const eachCat = Carousel.createCarouselItem(cat.url, "cat", cat.id)
      //console.log('eachcat:', eachCat);
      Carousel.appendCarousel(eachCat)
    });

    displayCatBreedDes(data[0].breeds[0].description)
  }
  catch (error) {
    console.log('Error fetching cat images', error);
    throw error
  }
}
fetchQuotes()


/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */


// request interceptor
axios.interceptors.request.use(request => {
  request.metadata = request.metadata || {};
  request.metadata.startTime = new Date().getTime();

  //set the body element' cursor style to "progress"
  document.body.style.cursor = 'progress';

  //Reset the progress bar to 0%
  progressBar.style.width = '0%';

  // Pass the updateProgress function to the onDownloadProgress config option
  request.onDownloadProgress = updateProgress;

  return request;
});

//response interceptor
axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date().getTime();
    response.config.metadata.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;

    console.log(`Request took ${response.config.metadata.durationInMS} milliseconds.`)

    // Log the response data
    console.log('Response data:', response.data);

    // Remove the progress cursor style from the body
    document.body.style.cursor = 'default';

    return response;

  },
  (error) => {
    error.config.metadata.endTime = new Date().getTime();
    error.config.metadata.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;

    console.log(`Request took ${error.config.metadata.durationInMS} milliseconds.`)
    throw error;
  });

/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar cat has already been created for you.
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar cat to 0%.
 *  - This is to reset the progress with each request.
 * 
 * - Research the axios onDownloadProgress config option.
 * 
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 * 
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */

// Function to update progress
const updateProgress = (progressEvent) => {
  // Log the ProgressEvent object to understand its structure
  console.log('ProgressEvent:', progressEvent);

  // Calculate the progress percentage
  const progress = (progressEvent.loaded / progressEvent.total) * 100;

  // Log the progress percentage
  console.log('Progress:', progress);

};




/**
 * 7. As a final cat of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body cat's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body cat.
 * --Done
 */


/**
 * 
 * 8. To practice posting data, we'll create a system to "favourite" certain images.
 * - The skeleton of this function has already been created for you.
 * - This function is used within Carousel.js to add the event listener as items are created.
 *  - This is why we use the export keyword for this function.
 * 
 * - Post to the cat API's favourites endpoint with the given ID.
 * - The API documentation gives examples of this functionality using fetch(); use Axios!
 * 
 * 
 * - Add additional logic to this function such that if the image is already favourited,
 *   you delete that favourite using the API, giving this function "toggle" functionality.
 * - You can call this function by clicking on the heart at the top right of any image.
 */
export async function favourite(imgId) {
  // your code here
  try {
    var requestBody = JSON.stringify({
      "image_id": imgId,
      //"sub_id":"user-123"
    });

    const response = await axios.post(
      "https://api.thecatapi.com/v1/favourites",
      requestBody,
      {
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;

  } catch (error) {
    // Handle errors
    console.error('Error adding image to favorites:', error);
    throw error;
  }
}

/**
 * 9. Test your favourite() function by creating a getFavourites() function.
 * - Use Axios to get all of your favourites from the cat API.
 * - Clear the carousel and display your favourites when the button is clicked.
 *  - You will have to bind this event listener to getFavouritesBtn yourself.
 *  - Hint: you already have all of the logic built for building a carousel.
 *    If that isn't in its own function, maybe it should be so you don't have to
 *    repeat yourself in this section.
 */

/**
 * 10. Test your site, thoroughly!
 * - What happens when you try to load the Malayan breed?
 *  - If this is working, good job! If not, look for the reason why and fix it!
 * - Test other breeds as well. Not every breed has the same data available, so
 *   your code should account for this.
 */