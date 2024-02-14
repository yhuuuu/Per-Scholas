const favBox = document.getElementById('fav-container')

const favCardContainer = document.createElement('div')

const API_KEY = `live_6olo9RBewaIncUjmWKJFmPBas3EtGEQI3bU5nFZtdtXP0JuhZsN6f9PUXyq8sekg`
axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function favorite(randomDogImgID) {
    try {
        const favouritesInfo = await axios.get(`/favourites`, { params: { image_id: randomDogImgID } })
        const data = favouritesInfo.data;

        console.log(`randomDogImgID`, randomDogImgID);
        console.log(`before fav check`, data);

        if (data.length == 0) {
            console.log(`Image ${randomDogImgID} has not been favourited before. Favouriting it...`);
            // Provide the image_id parameter in the request body
            await axios.post('/favourites', { image_id: randomDogImgID });
        } else {
            console.log(`Image ${randomDogImgID} was favourited before. Deleting the favourite...`);
            // Provide the image_id parameter in the request body
            await axios.delete(`/favourites/${data[0].id}`);
        }

        console.log(`after fav check`, data);
    } catch (error) {
        // Log the error message
        console.error('Error:', error.response.data);
    }
}

// display all favorites item
export async function getFavourites() {
    favCardContainer.innerHTML = '';
    try {
        // Clear existing favorites list before updating
        

        const response = await axios.get(`/favourites`);
        const data = response.data;

        for (const fav of data) {
            //get each fav image url
            const favCard = document.createElement('div');
            favCardContainer.classList.add('dog_cards_container');

            const favImgID = fav.image_id;
            const favImgUrl = fav.image.url;
            const favImgEl = document.createElement('img');
            favImgEl.src = favImgUrl;

            //each image a add delete btn
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete from fav!';
            deleteBtn.classList.add('delFromFav');

            favCard.appendChild(favImgEl);
            favCard.appendChild(deleteBtn);

            favCardContainer.appendChild(favCard);
            favBox.appendChild(favCardContainer);

            deleteBtn.addEventListener('click', async (event) => {
                // Prevent default action to avoid unwanted behavior
                event.preventDefault();

                // Delete the favorite and then refresh the favorites list
                await favorite(favImgID);
            
                await getFavourites();
            });
        }

    } catch (error) {
        console.error('Error fetching favorites:', error);
    }
}



// Execute getFavourites only if the current page is fav.html
if (window.location.pathname.endsWith('fav.html')) {
    // Execute the getFavourites function when the page is loaded
    window.onload = async () => {
        await getFavourites();
    };
}