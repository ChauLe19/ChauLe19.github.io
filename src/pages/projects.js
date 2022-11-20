import { Component } from "react"
import ProjectBox from "../components/project-box"
import ProgrammingProjects from "./projects.json"
import OtherProjects from "./other-projects.json"

class Projects extends Component {
    programmingProjects = ProgrammingProjects
    otherProjects = OtherProjects

    render() {
        return (
            <div className="page">
                <h1 style={{ textAlign: "center" }}>Programming Projects</h1>
                <div className="projects-section">
                    {this.programmingProjects.map((project) => (
                        <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} />
                    ))}
                </div>
                <h1 style={{ textAlign: "center" }}>Other Projects</h1>
                <div className="projects-section">
                    {this.otherProjects.map((project) => (
                        <ProjectBox name={project.name} links={project.links} description={project.description} image={project.image} message={project.message} key={project.name} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;