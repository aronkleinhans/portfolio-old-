import ProjectApi from "./getRepos.js";

async function test() {
    let response = await ProjectApi.getProjects();
    let json = await response.json();  
    return json;
}

    

console.log(test)

