import ProjectApi from "./getRepos.js";

const projects = document.getElementById('projects');
let makeP = document.createElement("p");
projects.appendChild(makeP)

async function renderProjects() {
    const data = await ProjectApi.getProjects();
    makeP.textContent = data.projects[0].description;
}

renderProjects();
