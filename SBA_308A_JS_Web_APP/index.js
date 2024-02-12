

const characterBox = document.getElementById('disney-character-container');

async function initialLoad() {
    try {
        const response = await fetch(`https://api.disneyapi.dev/character`);
      
        const characters = await response.json();
        console.log(characters);

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
}



initialLoad()

async function nextPage(){
    

}