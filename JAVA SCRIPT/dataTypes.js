let a ="1234";
let b =1234;
let c = 12.34;
let d = "Abhishek Gupta";
let e = true;
let f = null;
let g ;
let h = [1,2,3,4,5];
let i =1234e10;

let person = {
    name : "Abhishek Gupta",
    age : 23,
    city : "Shimla",
    rollNumber : "22bcs005"
}
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(i);
console.log(typeof(i));


console.log(typeof(person));
console.log(person);
// value of key in object can be changed
person.newName = person.name;
delete person.name;
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.rollNumber);
console.log(typeof(person.newName));
