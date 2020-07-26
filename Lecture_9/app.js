document.getElementById("btn-1").onclick = function (){
    let inp = document.getElementById("inp").value;
    let u_list = document.getElementById("list-1");
    inp = parseInt(inp);
    u_list.innerText = "";
    for(let i=1; i<=inp; i++){
        let l = document.createElement('li');
        let str = "";
        if(i%3==0){
            str += "Fizz";
        }
        if(i%5==0){
            str += "Buzz";
        }
        if(str==""){
            str = i;
        }
        l.innerText = str;
        u_list.appendChild(l);
    }

}

let ar1 = [1, 2, 3, 4, 5];
ar1.forEach(function(value, index){
    console.log("For each loop -->" + "Index is: " + index + " & Value is: " + value);
});

//map fn that maps value with squares
let ar2 = ar1.map( (value, index, ar) => {
    //fn to map
    return value**2;
});

let ar3 = ar1.filter( (value, index, ar) => {
    //condition to check for filtering
    return value%2==1;
    //odd numbers
});

let ar4 = ar1.reduce( (accumulator, value, index_of_value, ar) => {
    console.log("Index: " + index_of_value + " Accumulated value: " + accumulator);
    return accumulator + value;
    //hence this fn basically sums all the elements of the array
});

let ar5 = [2,458, 923,37, -35];
let ar6 = [238, 839, -4459, 25, 48];
ar5.sort((a, b)=>{
    return a-b; //for ascending order
});

ar6.sort((a, b) => {
    return b-a; //for descending order
});

console.log(ar1);
console.log(ar2);
console.log(ar3);
console.log(ar4);
console.log(ar5);
console.log(ar6);

ar1.unshift("Kiwi", 222); //inserts these elements at the front of array
console.log(ar1);
ar1.shift(); //removes first element
console.log(ar1);