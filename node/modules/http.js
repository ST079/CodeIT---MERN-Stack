import http from "http";
// http module chai node ko built-in module ho,
// jasko madat le hami server create garna sakchhau,
// api haru banauxum, request handle garna sakchhau, 
// response pathauna sakchhau, etc.

//server create garepachi req ra res handel garnu parxa.
const server = http.createServer((req,res)=>{
    res.end("Hello Sujan Tamang");
});

server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});
