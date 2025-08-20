const inventory = require('../inventory');
const problem5 = require('../problems/problem5');
const problem4 = require('../problems/problem4');
const totalCarYears = problem4(inventory);
const result = problem5(totalCarYears);
console.log(result);