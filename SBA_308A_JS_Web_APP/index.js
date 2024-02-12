

const characterBox = document.getElementById('disney-character-container');
const perPageBtn = document.getElementById('prePgBtn')
const nextPageBtn = document.getElementById('nextPgBtn')


async function initialLoad() {
    try {
        const response = await fetch(`https://api.disneyapi.dev/character`);

        const characters = await response.json();
        //console.log(characters);

        characters.data.forEach((character) => {
            // Check if character data contains imageUrl property
            if (character.imageUrl) {
                const characterCard = document.createElement('img');
                characterCard.src = character.imageUrl;
                characterCard.alt = character.name;
                characterBox.appendChild(characterCard);
            }

        });
       
    } catch (error) {
        console.error('Error fetching and displaying characters:', error);
    }
    //Update pagination controls

}

initialLoad()



async function handelNextPage(charactersPageData) {

    const nextPageUrl = charactersPageData.nextPage
    const response = await axios.get(`${nextPageUrl}`)
    const nextPageCharacters = response.data;
    // Clear existing characters from the container
    characterBox.innerHTML = '';
    nextPageCharacters.data.forEach((character) => {
        // Check if character data contains imageUrl property
        if (character.imageUrl) {
            const characterCard = document.createElement('img');
            characterCard.src = character.imageUrl;
            characterCard.alt = character.name;
            characterBox.appendChild(characterCard);
        }

    });
    
    // if (nextPageCharacters.info.nextPage){
    //     await handelNextPage(nextPageCharacters.info)
    // }


}

nextPageBtn.addEventListener('click', handelNextPage)