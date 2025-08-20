//Let vs var;
//let is block scoped and var is function scoped

console.log("-------------------Let-------------------");
{
    let a = "Abhishek Gupta";
    console.log(a);

    // Re-declaring the variable is not allowed in LET
    // Updating the variable is allowed in LET 
    // let a = "Abhishek ";
    // console.log(a);
}

console.log("-------------------Var-------------------");
{
    var a = "Abhishek Gupta";
    console.log(a);

    // Re-declaring ans updating the variable is allowed in VAR
    var a = "Abhishek ";
    console.log(a);
}

console.log("-------------------Const-------------------");
{
    const a = "Abhishek Gupta";
    console.log(a);

    // Re-declaring as well as updating the variable is not allowed in CONST
    // a = "Abhishek ";
    console.log(a);
}



console.log("-------------------Scope of Var and Let-------------------");


var alpha = "1234";
{
    // console.log(alpha);
    let alpha = "5678";
    console.log(alpha);

    // var is gloablly scoped and let is block scoped
}


console.log("-------------------Hoisting-------------------");
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

/*Temporal Dead Zone (TDZ): Although the let declaration is hoisted to the top of the block, it is not initialized until its actual line of declaration is executed. The period between entering the block and the let declaration is known as the temporal dead zone. During this time, trying to access alpha (even if a global alpha exists) results in a ReferenceError
*/
{
    console.log(betta);
    var betta = "1234";
    console.log(betta);
    // The above is allowed , because the betta is globally scopped so it is hoisted to the top of the code



    // The below code is not allowed because let is block scoped
    // ******console.log(gamma);
    let gamma = "56789";
    console.log(gamma);

}