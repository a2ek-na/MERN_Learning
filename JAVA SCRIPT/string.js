let a ="Hey, My name is Abhishek Gupta, and My age is 23 and My Roll Number is 22bcs005";

console.log(a);
console.log(a.length);
console.log(a.indexOf("Abhishek"));
console.log(a.indexOf("My"));
console.log(a.lastIndexOf("My"));

console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log(a.trim());//remove extra space from start and end

console.log(a.slice(20,30));

a.replace("Abhishek","Abhi");
console.log(a.replace("My","Abhi"));
console.log(a.replaceAll("My","Abhi"));



//Literals
let name = "Prerna";
let age = 22;
let city = "Dhanain";
console.log("My name is "+name+" and My age is "+age+" and I live in "+city);
console.log(`My name is ${name} and My age is ${age} and I live in ${city}`);