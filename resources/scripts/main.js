import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects;

console.log(data().blob.text)

