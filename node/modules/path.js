import path from 'path';
import url from 'url';


// path module ko kaam chai file path haru handle garne ho,


const filePath = "folder1/folder2/file.txt";
//filename: path.basename();

const filename = path.basename(filePath);
console.log(filename); // file.txt

//extension: path.extname();

const extension = path.extname(filePath);
console.log(extension); // .txt

//folders: path.dirname();

const folders = path.dirname(filePath);
console.log(folders); // folder1/folder2

//commonjs ko node ma chai __dirname ra __filename use garna sakinchha,
//  jasko madat le hami current file ko directory path ra file path pauna sakchhau.
//console.log(__dirname);
//console.log(__filename);


// es6 module ma chai __dirname ra __filename use garna mildaina, 
// tesaile url module ko madat le hami current file ko directory path ra file path pauna sakchhau.
const __filename = url.fileURLToPath(import.meta.url); // current file ko path
console.log(__filename);

const __dirname = path.dirname(__filename); // current file ko directory path
console.log(__dirname);