// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory) {
    let carModel = []

    for (let i = 0; i < inventory.length; i++){
        let cardetail = inventory[i].car_model.toLowerCase();
        carModel.push(cardetail);
    }
    
    for (let i = 0; i < carModel.length; i++) {
        for (let j = 0; j < carModel.length - 1; j++) {
            if (carModel[j] > carModel[j+1]) {
                let temp = carModel[j];
                carModel[j] = carModel[j+1];
                carModel[j+1] = temp;
            }
        }
    }
    return carModel
}

module.exports = problem3;


