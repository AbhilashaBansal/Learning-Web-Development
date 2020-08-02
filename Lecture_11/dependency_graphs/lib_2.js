const lib_1 = require('./lib_1');

console.log("Running lib 2 ...");
let b = 20;

// module.exports = {
//     b,
//     lib_1 //yaha empty object chala jaega
// };

module.exports.b = b;
module.exports.lib_1 = lib_1;