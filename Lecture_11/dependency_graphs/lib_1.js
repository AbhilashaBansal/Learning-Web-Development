const lib_2 = require('./lib_2');

console.log("Running lib 1 ...");
let a = 10;

// module.exports = {
//     a,
//     lib_2
// };

module.exports.a = a;
module.exports.lib_2 = lib_2;

