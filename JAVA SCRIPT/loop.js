// for loop 

for(let a = 1; a <= 10; a++){
    console.log(a);
}

// while loop
let b = 1;
while(b <= 10){
    console.log(b);
    b++;
}

//Do while loop
let c = 1;
do{
    console.log(c);
    c++;
}while(c < 1);



let person = {
    name : "Abhishek Gupta",
    age : 23,
    city : "Shimla",
    rollNumber : "22bcs005"
}

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// For of Loop

//ERROR
// for(let a of person){
//     console.log(a);
// }

for(let a of arr){
    console.log(a);
}

// For in Loop
for(let a in person){
    console.log(a);
}

//return the Index of array
for(let b in arr){
    console.log(b);
}