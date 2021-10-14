import ProjectApi from "./getRepos.js";

const projects = document.getElementById('projects');
let divs = [];

async function renderProjects() {
    const data = await ProjectApi.getProjects();

    for(let i = 0; i <= data.projects.length-1; i++) {
        let addDiv = document.createElement("div");
        let addImg = document.createElement("img");
        let addP = document.createElement("p");
        let addName = document.createElement("p");
        let addGHLink = document.createElement("a");
        let addHomepage = document.createElement("a");

        if(i % 2 === 0) {
            addDiv.style = "border-left: solid 5px rgb(170, 59, 133); border-bottom: solid 5px rgb(170, 59, 133);"
        }
        else {
            addDiv.style = "border-right: solid 5px rgb(170, 59, 133); border-bottom: solid 5px rgb(170, 59, 133);"
        }

        addHomepage.appendChild(addImg);
        addGHLink.appendChild(addName);
        addDiv.appendChild(addHomepage);
        addDiv.appendChild(addGHLink);
        addDiv.appendChild(addP);
        projects.appendChild(addDiv);

        addName.textContent = data.projects[i].name;
        addName.classList += "sText links";

        addHomepage.href = "aronkleinhans.github.io/" + data.projects[i].name;
        addHomepage.target = "_blank";

        addGHLink.href = data.projects[i].url;
        addGHLink.target = "_blank";

        addDiv.classList += "item";

        addImg.classList += "itemImage";
        addImg.src = data.projects[i].image;
        addImg.alt = "screenshot of the code in action";

        addP.textContent = data.projects[i].description;

        divs.push(addDiv);
    }
    let load = document.getElementById("loading");
    load.classList += "hidden"
}

function addIcons () {
    //wip
}

renderProjects();
