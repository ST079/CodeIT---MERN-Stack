//euta function xai euta function junchai call back hunxa kunai kaam bhayepaxi..
//call back function is a function that is passed as an argument to another function
// and is executed after the completion of that function.
// It is used to handle asynchronous operations in JavaScript.

//higher order function/method is a function that takes another function as an argument
// or returns a function as a result.
//Asychronous programming

import fs from "fs";
// non-blocking block (asynchronous)
fs.readFile(
  "data/data.txt",
  "utf-8",
  //callback function
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
);
//blocking block(synchronous)
console.log("Hello World");
console.log("This is an asynchronous example");

//example
// here we have call back inside call back which is called callback hell or pyramid of doom
// not usable in real world application but it is used to understand the concept of call back function
// we use promise and async await to avoid callback hell and make our code more readable and maintainable
fs.readFile("data/users.json", "utf-8", (err, users) => {
  if (err) throw err;
  const userData = JSON.parse(users);
  fs.readFile("data/posts.json", "utf-8", (err, posts) => {
    if (err) throw err;
    const postData = JSON.parse(posts);
    const result = userData.map((users) => {
      return {
        ...users,
        posts: postData.map((post) => {
          return post.userId === users.id ? post : null;
        }).filter(Boolean),
      };
    });
    console.log(result);
  });
});
