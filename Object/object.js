// Declaration of object, set and get object properties, Dot vs Bracket Notation
// Object.keys() Object.values()

var shakib={
    name:'Sakib Al Hassan',
    age:32,
    country:'Bangladesh',
    isAllRounder:true,
    isCaptain:true
}

console.log(shakib.isCaptain);   //dot notation
console.log(shakib['country']);  //bracket notation



//bracket notation only

var properties= 'age';

// console.log(shakib[properties]); //bracket notation only here dot notation can't work


shakib.isActive=true;  // set property in object
// console.log(shakib)

console.log(Object.keys(shakib));


console.log(Object.values(shakib));




// var shoppingCart={
//     books:3,
//     sunglass:1,
//     keyboard:4,
//     mouse:1,
//     pen:20
// }

// // When you know the specific name, use dot notation to get the properties

// var penCount=shoppingCart.pen;

// // Alternative System


// var penCount2=shoppingCart['pen'];

// var propertyName='mouse';