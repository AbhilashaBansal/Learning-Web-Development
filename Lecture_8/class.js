//class syntax and OOPS concepts in JS
//JS does not support OOPS

class Person {
    constructor(name, age, money){
        this.name = name;
        this.age = age;
        this.getName = function(){
            return this.name;
        };
        this.isRich = function() { 
            return money>=25000; //access modifiers (data abstraction)
        }
    }

    getAge(){
        //normal fn
        //not inside the constructor, but can be used by the objects
        return this.age;
    }

    //getters and setters
    get FirstName() {
        //getter that returns first name
        return this.name.split(" ")[0];
    }

    set LastName(ln){
        //setter that sets last name
        let n_list = this.name.split(' ');
        n_list[1] = ln;
        this.name = n_list.join(' ');
    }

    //STATIC FN
    static getStatic() {
        //can be called only with class
        return "This is a static fn!";
    }
}


var p1 = new Person("Abhilasha Mayer", 18, 10000);
var p2 = new Person("John Mayer", 42, 250000);

Person.getStatic();
console.log(p1.getName());
console.log(p2.getAge());
console.log(p1.FirstName)
p2.LastName = "Darlin' ";
console.log(p2.getName());

console.log(p1.isRich());
console.log(p2.isRich());
console.log("P2 has money: " + p2.money);


// INHERITENCE
class Student extends Person {  
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
        this.isPass = function(){
            return marks>33;
        }
    }
}

var S1 = new Student("Jack D", 40, 100);
var S2 = new Student("Abigail D", 18, 25);
console.log(S2.getName());
console.log(S1.FirstName);
S1.LastName = "Dora";
console.log(S1.getName());
console.log("Did student 1 pass? " + S1.isPass());
console.log("Did student 2 pass? " + S2.isPass());


//Arrow/ Lambda functions
function normalFun() {
    console.log(this);
}

let arrowFun = () => {
    console.log(this);
};

let a = {
    k: normalFun,
    l: 100,
    m: arrowFun
};

let b = {
    k: normalFun,
    l: 500,
    m: arrowFun
};

a.k();
a.m();
b.k();
b.m();

//just remove fn keyword and add arrow ('=>') after arguments

let a1 = (i) => Math.sqrt(i);
//can skip braces in single line fn
console.log(a1(10));
console.log(a1(25));

let a2 = (no) => {
    console.log("Printing the square of no: ");
    console.log(no**2);
    console.log("Returning the cube of no: ");
    return no**3;
}

console.log(a2(3));
console.log(a2(4));