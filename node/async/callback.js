//euta function xai euta function junchai call back hunxa kunai kaam bhayepaxi..
//call back function is a function that is passed as an argument to another function 
// and is executed after the completion of that function. 
// It is used to handle asynchronous operations in JavaScript.

//higher order function/method is a function that takes another function as an argument 
// or returns a function as a result.
//Asychronous programming

import fs from 'fs';

fs.readFile("data/data.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("Hello World");
console.log("This is an asynchronous example");