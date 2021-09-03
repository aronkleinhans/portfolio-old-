class ProjectApi {
    static async getProjects () {
        let srv = "http://aronkleinhans.pythonanywhere.com/projects";
        try{
            let response = await fetch(srv);
            if(response.status != 200) {
                throw Error("Failed to get projects.")
            }
            let json = await response.json();
            return json;
        }
        catch(error) {
            throw Error(error.message);
        }
    }
}
export default ProjectApi;