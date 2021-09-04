import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let element = document.getElementById("test");
let tag = document.createElement("p");

console.log(data())
console.log(data().projects)
console.log(data().projects[0])


tag.innerText = `I'm your p tag and i got : ${data().projects[0]}`;
element.appendChild(tag);