// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory) {
    
    let carModel = inventory.map(value => value.car_model.toLowerCase())
    carModel.sort((a,b) => a.localeCompare(b))
    return carModel
}

module.exports = problem3;


