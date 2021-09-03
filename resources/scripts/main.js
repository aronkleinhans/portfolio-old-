import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let element = document.getElementById("test");
let tag = document.createElement("p");
let tag2 = document.createElement("p");
let projects = "";

for(item in data()) {
    projects += "\n" + item;
};
console.log(data());
console.log(projects);

tag.innerText = projects;
element.appendChild(tag);

tag2.innerText = `I'm tag2 and i got : ${data().projects[0]}`;
element.appendChild(tag2);