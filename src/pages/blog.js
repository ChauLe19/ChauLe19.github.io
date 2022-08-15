import { Component } from "react"
import ReactMarkdown from 'react-markdown'
import {
  useParams
} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    componentDidMount(){
        const file = require(`../blogs/${this.props.params.id}.md`);
        fetch(file)
            .then(resp => resp.text())
            .then(data => this.setState({text: data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="page">
                <ReactMarkdown>{this.state.text}</ReactMarkdown>
            </div>
        )
    }
}

export default withParams(Blog);