
// Expected output is "Your ideal animal companion is [physical adjective] [emotional adjective] [animal]!"

const physArr = ['a blue', 'a fat', 'a small', 'a huge', 'a chunky', 'a green', 'a fluffy'];
const emotArr = ['lazy', 'happy', 'funny', 'funky', 'confused', 'aggressive', 'curious'];
const animalArr = ['chihuahua', 'kitty', 'bear', 'monkey', 'dog', 'elephant', 'snake'];

// Randomly select target words


const selectPhys = () => {
    let physical = physArr[Math.floor(Math.random()*physArr.length)]
    return physical
}

const selectEmot = () => {
    let emotional = emotArr[Math.floor(Math.random()*emotArr.length)]
    return emotional
}

const selectAnimal = () => {
    let animal = animalArr[Math.floor(Math.random()*animalArr.length)]
    return animal
}
