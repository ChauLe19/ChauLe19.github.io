import { Component } from "react"
import ProjectBox from "../components/project-box"
import ProgrammingProjects from "./projects.json"
import OtherProjects from "./other-projects.json"

class Projects extends Component {
    queryParameters = new URLSearchParams(window.location.search)
    programmingProjects = ProgrammingProjects
    otherProjects = OtherProjects

    render() {
        return (
            <div className="page">
                <h1 style={{ textAlign: "center" }}>Programming Projects</h1>
                <div className="projects-section">
                    {this.programmingProjects.map((project) => (
                        // show hidden projects if url = (....?hidden=true)
                        (this.queryParameters.get("hidden") == "true" ? true : !project.hidden) && <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} technologies={project.technologies} />
                    ))}
                </div>
                <h1 style={{ textAlign: "center" }}>Other Projects</h1>
                <div className="projects-section">
                    {this.otherProjects.map((project) => (
                        <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} technologies={project.technologies}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;