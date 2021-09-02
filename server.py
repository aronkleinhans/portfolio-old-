# hosted separately at pythonanywhere.com

from flask import Flask
from flask_cors import CORS
from config import *
import requests

app = Flask(__name__)
CORS(app)

if __name__ == "__main__":
    app.run()

@app.route("/projects", methods = ["GET"])
def getProjects():
    try:
        url = "https://api.github.com/users/aronkleinhans/repos"
        headers = {"Accept":"application/vnd.github.inertia-preview+json"}
        repos = requests.get(url, headers=headers, auth=(USERNAME, TOKEN)).json()
        projects = []
        for repo in repos:
            if repo["name"] == USERNAME:
                continue
            elif repo["homepage"]:
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