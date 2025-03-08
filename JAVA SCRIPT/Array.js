let array = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

console.log(array);
array.push(111);
console.log(array);
let returned  = array.pop();
console.log(returned);
console.log(array);

returned = array.shift();
console.log(returned);
console.log(array);
array.unshift(101);
console.log(array);

console.log(array.toString());

let newArray = array.slice(2, 5);
console.log(newArray);

let newArray2 = array.slice(5);
console.log(newArray2);// 5th index se start krke end takk sare elements

array.splice(2, 3, 200);
console.log(array);