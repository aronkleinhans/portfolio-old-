import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;
let element = document.getElementById("test");
let tag = document.createElement("p");
let projects = "";

tag.innerText = `I'm your p tag and i got : ${data().projects[0]}`;
element.appendChild(tag);