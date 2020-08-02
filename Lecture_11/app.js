const node_ = require('./node');
//file require karte samay pehle vo file run hoti hai
//isliye "Hey! I'm learning node.js . . ." will be printed first of all

const {add, subtract} = require('./node');
//destructuring of file

let x1 = node_.add(10, 30);
let x2 = add(10, 50);

let y1 = node_.subtract(40, 20);
let y2 = subtract(20, 5);

console.log(x1);
console.log(x2);
console.log(y1);
console.log(y2);
