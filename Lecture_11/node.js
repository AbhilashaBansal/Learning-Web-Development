console.log("Hey! I'm learning node.js . . .");

//windows me environment variable set karna padta hai

//node ke interpreter ke liye type 'node' (as a command on terminal) 

//node ke interpreter se nikalne ke liye press ctrl + D (or ctrl+C twice)

function fb(){
    let n = parseInt(process.argv[2]) || 10;
    //more efficient/ faster way to write fizzbuzz code, since modulo operator takes time
    //addition is the simplest process, very time efficient
    let count_3 = 0;
    let count_5 = 0;
    for(let i=0; i<=n; i++){
        let str="";
        if(count_3==3 || count_3==0){
            str += "Fizz"; 
            count_3 = 0;
        }
        if(count_5==5 || count_5==0){
            str += "Buzz";
            count_5 = 0;
        }
        if(str==""){
            str = i;
        }
        console.log(str);
        count_3++;
        count_5++;
    }
}

// fb();

var obj = {
    a: 10,
    b: "Abhilasha",
    c: true
};

// let obk = {
//     a: 10,
//     b: "Abhilasha",
//     c: true
// };

// console.log(obj);
// console.log(obk);

// console.log(process.argv);
// fb();


function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}

module.exports = {
    add, 
    subtract
};

