import ProjectApi from "./getRepos.js";

async function test() {
    const data = await ProjectApi.getProjects().json();
    return data;
}

    

console.log(test)

