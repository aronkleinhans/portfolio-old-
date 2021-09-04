import ProjectApi from "./getRepos.js";

const data = ProjectApi.getProjects().then(result  => {
    return result;
});

console.log(data)

