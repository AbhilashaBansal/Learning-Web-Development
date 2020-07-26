function fun(){
    let x=0; 
    function innerFun() {
        x++;
        console.log(x);
    }
    return innerFun;
}

let f1 = fun();
let f2 = fun();
f1(); //x=1
f1(); //x=2
f1(); //x=3
f1(); //x=4
f2(); //x=1
f2(); //x=2
console.log("");

function Fun(){
    let x = 0;
    function inf(){
        x++;
        function imostfun(){
            x++;
            console.log(x);
        }
        return imostfun;
    }
    return inf;
}

let f3 = Fun(); 
let f4 = Fun();

let f31 = f3(); //returns same closure, jo iske pass present tha, naya closure nahi banega
let f32 = f3();
let f41 = f4(); //inke paas f4 wala closure hoga
let f42 = f4();

f31();
f31();
f32();
f32();
f31(); 
f41();
f42();

console.log(new Date());
console.log("Date: " + (new Date()).getDate());
console.log("Month: " + (new Date()).getMonth());
console.log("Hour: " + (new Date()).getHours());

//Asynchronous fns 
setTimeout(function(){
    console.log("Inside set timeout delay fn!");
}, 3000);

function hey(){
    console.log("Hey there!");
}

let x = setInterval(() => {
    hey();
}, 1000);

setTimeout(() => {
    //after 10 seconds, hey should stop executing at intervals
    console.log("10 secs are over, 'hey' must stop now ...");
    clearInterval(x);
}, 10000);