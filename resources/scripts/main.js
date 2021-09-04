import ProjectApi from "./getRepos.js";

const projects = document.getElementById('projects')

async function renderProjects() {
    const data = await ProjectApi.getProjects();
    projects.textContent = data.projects[0];
}

renderProjects();
