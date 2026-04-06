import http from "http";
// day 18
// http module chai node ko built-in module ho,
// jasko madat le hami server create garna sakchhau,
// api haru banauxum, request handle garna sakchhau,
// response pathauna sakchhau, etc.

//client/User/Browser same ho.

//server create garepachi req ra res handel garnu parxa.
const server = http.createServer((req, res) => {
  //     console.log(req.method);
  //     console.log(req.url);
  // // res.writeHead(200, {"Content-Type": "text/html"});
  // //  kasto response pathaune bhanne kura ho, 200 chai status code ho,
  // //  text/html chai content type ho, jasko madat le browser lai thaha huncha ki
  // // response ma html content aayeko cha.
  // // res.end("<h1>Hello Sujan Tamang</h1>");
  // const user ={
  //     name: "Sujan Tamang",
  //     age: 24,
  //     email: "suzanyba079@gmail.com"
  // }
  //res.writeHead(200, { "Content-Type": "application/json" });
  //res.end(JSON.stringify(user));
  //json string ma convert garna parcha, json format ma data pathaune bhanne kura ho.

//   switch (req.method) {
//     case "GET":
//       res.end("Hello GET request");
//       break;
//     default:
//       res.writeHead(405);
//       res.end("Method Not Allowed");
//       break;
//   }

//yo ta ekdum messy code ho, so express come to light.
switch(req.method){
    case "GET":
        switch(req.url){
            case "/":
                return res.end("Home Page");
            case "/about":
                return res.end("About Page");
            case "/contact":
                return res.end("Contact Page");
            default:
                res.writeHead(404);
                return res.end("Page Not Found");
        }
    case "POST":
        return res.end("Hello POST request");

    default:
        res.writeHead(405);
        res.end("Method Not Allowed");
        break;
}
});

//request client bata aauxa, response server bata client lai pathaune kura ho.

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
