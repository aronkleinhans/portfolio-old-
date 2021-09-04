import ProjectApi from "./getRepos.js";

let data;

async function getResult () {
    data = await ProjectApi.getProjects();
}
    

console.log(data)

