class ProjectApi {
    static async getProjects () {
        try{
            let response = await fetch("http://aronkleinhans.pythonanywhere.com/projects");
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