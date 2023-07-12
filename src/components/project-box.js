import "./project-box.css"
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Component, Fragment } from "react"
import LinkType from "../enums/link-type";
import { faArrowUpRightFromSquare, faDownload, faImage } from "@fortawesome/free-solid-svg-icons";

function LinkIcon(props) {
    return (
        <Fragment>
            {
                (() => {
                    switch (props.type) {
                        case LinkType.Github:
                            return (<FontAwesomeIcon icon={faGithub} size="3x" style={{ padding: "0.7rem" }} />);
                        case LinkType.LinkedIn:
                            return (<FontAwesomeIcon icon={faLinkedin} size="3x" style={{ padding: "0.7rem" }} />);
                        case LinkType.Youtube:
                            return (<FontAwesomeIcon icon={faYoutube} size="3x" style={{ padding: "0.7rem" }} />);
                        case LinkType.Image:
                            return (<FontAwesomeIcon icon={faImage} size="3x" style={{ padding: "0.7rem" }} />);
                        case LinkType.Download:
                            return (<FontAwesomeIcon icon={faDownload} size="3x" style={{ padding: "0.7rem" }} />);
                        default:
                            return (<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" style={{ padding: "0.7rem" }} />);
                    }
                })()
            }
        </Fragment>
    )

}

class Projects extends Component {
    render() {
        return (
            <div className="project-box">
                <div className="main">
                    <b>
                        {this.props.name}
                    </b>
                    <div>
                        <img className="image"
                            src={isExternal(this.props.image) ? this.props.image : require(`../assets/${this.props.image}`)} alt={`${this.props.name}`} />
                    </div>
                    <span className="description">
                        {this.props.description}
                    </span>
                </div>
                <div className="overlay">
                    <div className="buffer"></div>
                    <div className="links">
                        <div style={{width: "100%"}}>
                            {this.props.links.map((link) => (
                                isExternal(link.href) ?
                                    <a href={link.href} key={`${this.props.name} ${link.href}`} target="_blank" rel="noreferrer">
                                        <LinkIcon type={link.type} />
                                    </a>
                                    :
                                    <Link to={link.href} key={`${this.props.name} ${link.href}`}>
                                        <LinkIcon type={link.type} />
                                    </Link>
                            ))}
                        </div>
                        {
                            this.props.message !== undefined && this.props.message.length !== 0 &&
                            <div style={{ fontSize: "1.1rem" }}>{this.props.message}</div>

                        }
                    </div>
                    <div className="technologies">
                        {
                            this.props.technologies !== undefined && this.props.technologies.map((name) => (
                                <span className="name">
                                    {name}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div >
        )
    }
}

function isExternal(url) {
    return url.match(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm)
}

export default Projects;