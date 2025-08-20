let result = 1;
let arr = [1,2,3,4,5,6];
const factorial = (a,b) =>{
    return a*b;
}

console.log(`By Reduce Function :--> ${arr.reduce(factorial)}`);

for(let i = 0; i < arr.length; i++){
    result *= arr.at(i);
}
console.log(`By Loop :--> ${result}`);