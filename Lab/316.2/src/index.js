// Create your game here!

alert('Are you aready to play');
alert('To play, read this hits and guess the animal')


let animal = `elephant`

let hints = [
    `This animal is a mammal`,
    `This animal can grow taller`,
    `This animal lives in Africa and Asia`,
    `This animal can weigh 6,000 -133,000 bls`,
    `This animal is has tusks`,
    `This animal is the largest land mammal`
]
// Create a variable for round left
let roundsLeft = hints.length
// Create Loop for each hint
for (let hit of hints) {
    roundsLeft--;

    let guess = prompt(`Hint:${hit}`)
    //console.log(guess)

    //Win state
    if (guess === animal) {
        alert(`Congragulations you have guessed correctly! This anwser is ${animal}`)
        break

    } else { //Continue lose state
        alert(`You have ${roundsLeft - 1} guesses left`)
        if (roundsLeft === 0) {
            alert(`Sorry bu tyou lost pal :(`)
        }
    }

}
