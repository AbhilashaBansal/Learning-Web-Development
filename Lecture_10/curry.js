function add(x) {
    if(!x){
        return 0;
    }
    function add_further(res){
        if(!res){
            res=0;
            return x;
        }
        x += res;
        return add_further;
    }
    return add_further;
}

//IIFE --> Immediately Invoked Fn Expressions

;(function(name){
    console.log(`Hey ${name}!`);
})("Abhilasha");

console.log(add());
console.log(add(20)());
console.log(add(1)(2)(3)(4)(5)(6)());
console.log(add(5)(10)(15)());
