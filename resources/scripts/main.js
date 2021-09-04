import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects().json();
    

console.log(data)

