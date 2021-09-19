"""  Hosted separately at pythonanywhere.com
     A simple flask app service that grabs all your github 
     repos using the API and returns them as an object """

from flask import Flask
from flask_cors import CORS
# config is where you store your USERNAME and personal access TOKEN for security
from config import *
import requests

app = Flask(__name__)
CORS(app)

if __name__ == "__main__":
    app.run()

@app.route("/projects", methods = ["GET"])
def getProjects():
    # add simple exception handling so our flask app doesn't terminate upon an error
    try:
        url = "https://api.github.com/users/" + USERNAME + "/repos"
        headers = {"Accept":"application/vnd.github.inertia-preview+json"}
        repos = requests.get(url, headers=headers, auth=(USERNAME, TOKEN)).json()
        projects = []
        for repo in repos:
            # check for and exclude github.io repo and github config repo from the list
            if repo["name"] == USERNAME:
                continue
            elif repo["name"] == USERNAME + ".github.io":
                continue
            elif repo["name"][0] == "-":
                continue
            # otherwise populate the list
            else:
                project = {
                    "id": repo["id"],
                    "name": repo["name"],
                    "url": repo["html_url"],
                    "description": repo["description"],
                    "image": repo["homepage"],
                    "created_at": repo["created_at"]
                }
                projects.append(project)
        return {"projects": projects, "error": False}
    except Exception as e:
        return {"error": True, "message": str(e)}, 500