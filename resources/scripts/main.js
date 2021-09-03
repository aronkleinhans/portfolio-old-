import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let tag = document.createElement("p");
let projects = "";

for(item in data()) {
    projects += "\n" + item;
}

tag.innerText = projects;

let element = document.getElementById("test")

element.appendChild(tag);