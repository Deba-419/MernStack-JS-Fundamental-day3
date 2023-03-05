// Function
// We can compare function with a machine
// functions are like block a code thats are done a specifics works

// function add(){
//     console.log(2+3);
//     console.log("We love BAngladesh");
// }

// // calling / running / invoking function
// add();console.log("We are learning JS");
// add();
// add();
// add(); 
// console.log("We are learning JS");
// add();


// function sumOfTwoNumbers(x,y){

//     // var total=x+y;  // if we don't return the function, the output may undefinned
//     // return total= x+y;
//     return x+y;
// //     return x-y; // after return the function doesn't axecute anything
// }

// var result=sumOfTwoNumbers(10,20);
// console.log(result);





// Function Declaration vs. Expressions

// // Function Declaration // we can call function before function or after function

// declaration then call:

// function calcAge1(birthYear){
//     return 2037-birthYear;
// }

// var age1=calcAge1(1991);

// ============================
// call first then declear:
var age1=calcAge1(1991);

function calcAge1(birthYear){
    return 2037-birthYear;
}


//  =======================================
//  Function Expression  //===== cannot call before function
var calcAge2=function (birthYear){
     return 2037-birthYear;
}
var age2=calcAge2(1991);

console.log(age1, age2);