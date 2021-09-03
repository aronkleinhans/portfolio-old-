import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let tag = document.createElement("p");

tag.innerText = data();

let element = document.getElementById("test")

element.appendChild(tag);
