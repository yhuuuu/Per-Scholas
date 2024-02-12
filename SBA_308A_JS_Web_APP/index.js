
const dogsSelectBox= document.getElementById('dog_breed_select');
const dogSearchBtn = document.getElementById('dog_breed_select_btn')

const API_KEY = `live_6olo9RBewaIncUjmWKJFmPBas3EtGEQI3bU5nFZtdtXP0JuhZsN6f9PUXyq8sekg`

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


async function displayDog() {
    //get dog list
    const allDogsInfo = await axios.get(`/breeds`)
    const data = allDogsInfo.data;
    //console.log(data);

   //appent to the dogsSelectBox
   data.forEach(breed => {
    
    const option = document.createElement('option')
    
    //let the value = breed_id
    option.value = breed.id
    option.text = breed.name
   // console.log(option);
   dogsSelectBox.appendChild(option)
   });


}

displayDog()

dogSearchBtn.addEventListener('click',async()=>{
    const breedType = dogsSelectBox.value
    console.log('show img for',breedType);
    // const dogImg = document.createElement('img')
})


// async function fetchImg(){
//     const imgUrl = await axios.get(`v1/images/:image_id${img_id}?`)

// }


