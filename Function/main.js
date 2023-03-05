// simple function

// function myName(){
//     var x=10;
//     var y=10;
//     var z=x+y;
//     console.log(z);
// }

// myName();


// parameterized functions


function myName(x,y){

    var z=x+y;
    console.log(z);
}

myName(10,20);


//  rest parameters functions


function something(...x){

    console.log(x);
    console.log(x[6]);




}

something(1,3,4,5,3,54,4,3,2,'A','C','D','V')



// function return

function myFunction(){

    return "Bangladesh";

}

console.log(myFunction());


function funOne(){
    
    return 20;
}
function funTwo(){

    return 30;
}

console.log(funOne()+funTwo());


//  function returns function


function funOne(){
    
    return 20;
}
function funTwo(){

    return funOne();
}

console.log(funTwo());
