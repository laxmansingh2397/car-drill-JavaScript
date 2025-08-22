// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"


function problem2(inventory) {
    // const carData = inventory[inventory.length - 1]
    // return `Last car is a ${carData["car_make"]} ${carData["car_model"]}`
    const lastCar = inventory.map(value => value)
    const lastIndex = lastCar.length -1
    return `Last car is a ${lastCar[lastIndex].car_make} ${lastCar[lastIndex].car_model}`
}


module.exports = problem2;