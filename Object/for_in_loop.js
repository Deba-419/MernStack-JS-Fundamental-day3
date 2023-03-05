// Looping through an Object
//for in loop

/*
var billGates={shirt:true,shirtColor:"offwhite",smile:true,swatter:true, swatterColor:"gray", chosma:true};

for(let props in billGates){     //property=====>props
    console.log(props);
    console.log(billGates[props]);
    console.log(props+"="+billGates[props]);

}      

*/

//// Looping through an Object
//for in loop

var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:4,
    mouse:1,
    pen:20,
    shoes:2
}

for(propertyName in shoppingCart){
    // console.log(propertyName);
    var value=shoppingCart[propertyName];
    console.log(propertyName,value);

}