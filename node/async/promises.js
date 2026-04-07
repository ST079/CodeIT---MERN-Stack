//promises bhaneko asynchronous programming ko ek tarika ho
// jasma hami future ma complete huney operation ko result lai handle garna sakchhau.
// Promises le asynchronous code lai more readable and maintainable banaucha by providing a cleaner syntax and better error handling.
// it is basically a future value.

//its stages pending -> fulfilled or rejected

import fs from "fs/promises";

fs.readFile("data/data.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fs.readFile("data/users.json", "utf-8")
  .then((users) => {
    console.log(users);
    return fs.readFile("data/posts.json", "utf-8");
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => console.log(err));
