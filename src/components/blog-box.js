import "./blog-box.css"
import { Component, Fragment } from "react"
import {
    Link
} from "react-router-dom";

class BlogBox extends Component {
    render() {
        return (
            <Link to={`/blog/${this.props.name}`} className="blog-box">
                <div className="main">
                    <p className="content">

                        <img className="image"
                            src={this.props.image} alt={`${this.props.name} thumbnail`} />
                        <b className="title">
                            {this.props.name}
                        </b>
                        <br />
                        <p className="description">
                            {this.props.description}
                        </p>
                        <div style={{ clear: "both" }}></div>
                    </p>
                </div>
            </Link >
        )
    }
}

export default BlogBox;