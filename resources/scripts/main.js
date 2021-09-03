import ProjectApi from "./getRepos.js";
import defaultExport from "./getRepos.js";

const data = ProjectApi.getProjects();

console.log(data)