import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let tag = document.createElement("p");

tag.innerText = data();

let element = document.getElementsByTagName("body");

element.appendChild(tag);
