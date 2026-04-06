//day 18
const portfolio = "https://www.tamangsujan.com.np/projects?category=web-development&sort=asc";

const urlObj = new URL(portfolio);
console.log(urlObj);

const params = new URLSearchParams(urlObj.search);
console.log(params);

//to add new params
params.set("page", "2");
console.log(params);

//update ni garnu milxa
params.set("sort", "desc");
console.log(params);