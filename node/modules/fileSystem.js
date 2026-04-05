import fs from "fs";

/*
Using the ecma script module syntax.
File ko sabai crud operation haru garna sakincha.

fs: filesystem is a node js module for file operations,
like creating, reading, updating, and deleting files.

fs operations can be done using two methods: sunchronous and asynchronous.
Synchronous method: It blocks the execution of the code until the operation is completed.
Asynchronous method: It does not block the execution of the code and allows other operations to run 
while waiting for the operation to complete.
synchronous - blocking operation
asynchronous - non-blocking operation
*/

/*
//synchronous method
//read file
const result = fs.readFileSync("data/data.txt","utf-8"); //utf-8 is the encoding format, it is used to read the file in a human-readable format
console.log(result);

const image = fs.readFileSync("data/logo.png","base64");
// console.log(image);

//writing file
fs.writeFileSync("data/image.txt", image); //it will create a new file named image.txt and write the base64 string of the image in it

//append file
fs.appendFileSync("data/data.txt", "\nThis is an appended text."); //it will append the text to the existing file data.txt

//delete file
fs.unlinkSync("data/image.txt"); //remove only file
fs.rmSync("data/image.txt"); //remove file or folder.
//  if you want to delete a folder inside folder {recursive: true} option is used
fs.rmSync("test/testFolder", { recursive: true });

*/

//Asynchronous method
//read file
const result = fs.readFile("data/data.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

fs.appendFile("data/data.txt", "\nThis is an appended text.", ()=>{});

//console.log(result);
//undefined because it is an asynchronous operation,
// it will not wait for the operation to complete and move to the next line of code
