import { Component } from "react"
import BlogBox from "../components/blog-box";
import BlogsList from "./blogs.json";

class Blogs extends Component {
    queryParameters = new URLSearchParams(window.location.search)
    render() {
        return (
            <div className="page">
                <h1 style={{ textAlign: "center" }}>Blogs</h1>
                <article className="blogs-container">
                    {
                        BlogsList.map((blog) => (
                            (this.queryParameters.get("hidden") == "true" ? true : !blog.hidden) && <BlogBox name={blog["blog-title"]} description={blog.description} image={isExternal(blog.image) ? blog.image : require(`../blogs/${blog.image}`)}/>
                        ))
                    }
                </article>
            </div>
        )
    }
}

function isExternal(url) {
    return url.match(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm)
}

export default Blogs;