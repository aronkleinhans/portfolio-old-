import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;

let tag = document.createElement("p");

for(item of data()) {
    tag.innerText += "/n" + item;
}

let element = document.getElementById("test")

element.appendChild(tag);
