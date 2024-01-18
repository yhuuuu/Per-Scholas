//https://www.canva.com/design/DAFxivmQk2E/view
// Part 1: Growing Pains

const PI = 3.1415
const radius = 5
const growthArea = PI * radius * radius

const startingPlants = 20
const eachPlantSpace = 0.8



let numberOfWeek = 2;
let totalPlants = startingPlants * 2 ** numberOfWeek
let totalPlantSpace = totalPlants * eachPlantSpace


    if (totalPlantSpace > growthArea * 1.8) {
        console.log(`Pruned, stop them from growing . growthArea is ${growthArea} and Plant Space is ${totalPlantSpace}`)
    }
    else if (totalPlantSpace < growthArea * 1.8 && totalPlantSpace > growthArea * 1.5) {
        console.log(`Monitored, growing at an acceptable rate . growthArea is ${growthArea} and Plant Space is ${totalPlantSpace}`)
    } else if (totalPlantSpace < growthArea * 1.5) {
        console.log(`Planted, there is room to plant more plants . growthArea is ${growthArea} and Plant Space is ${totalPlantSpace}`)
    }
    








