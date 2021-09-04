import ProjectApi from "./getRepos.js";

let data;

async function getResult () {
    data = await ProjectApi.getProjects();
    return data;
}
    

console.log(getResult())

