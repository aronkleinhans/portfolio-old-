import ProjectApi from "./getRepos.js";

let projects = [];

async function test() {
    let data = await ProjectApi.getProjects();
    console.log(data)
    return data;
}

    

console.log(test())

