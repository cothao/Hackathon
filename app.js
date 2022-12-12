import strings from "./src/strings.js";

document.title = "Hackathon";

const div = document.createElement("div");
const para = document.createElement("h1");
const node = document.createTextNode("Cycle11 Hackathon");
para.appendChild(node);
div.appendChild(para);
document.body.appendChild(div);
para.style.textAlign = "center";
para.style.color = "red";
strings();
console.log(
  strings("I am calling this function and passing this text as an argument")
);
