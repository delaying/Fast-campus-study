//JSON

import myData from "./myData.json";

console.log(myData);

const user = {
  name: "jiyeon",
  age: 23,
  emails: ["pgy5638@naver.com", "neo@naver.com"],
};
console.log("user", user);

const str = JSON.stringify(user);
console.log("str", str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log("obj", obj);

//Local Stroage
// localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));

const stri = localStorage.getItem("user");
const obje = JSON.parse(stri);
obje.age = 20;
console.log(obje);
localStorage.setItem("user", JSON.stringify(obje));
