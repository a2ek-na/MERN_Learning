//Implement sum(10)(20)(30);

function sum(a){
    return function (b){
        return function (c) {
            return a+b+c;
        }
   }
}

// console.log(sum(10)(20)(20));

function evaluate(operation){
    if(operation == "sum"){
        return function(a){
            return function(b){
                console.log(`The sum of ${a} and ${b} is ${a+b}`);
            }
        }
    }
    if(operation == "subtract"){
        return function(a){
            return function(b){
                console.log(`The Subtravtion of ${a} from ${b} is ${b-a}`);
            }
        }
    }
    if(operation == "multiply"){
        return function(a){
            return function(b){
                console.log(`The product of ${a} and ${b} is ${a*b}`);
            }
        }
    }
    if(operation == "divide"){
        return function(a){
            return function(b){
                console.log(`The quotient of ${a} divided by ${b} is ${a/b}`);
            }
        }
    }
}