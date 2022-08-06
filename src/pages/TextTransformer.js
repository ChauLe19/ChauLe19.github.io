import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react"
import TextBox from "../components/text-box";

class TextTransformer extends Component {
    constructor(props) {
        super(props);
        const options = Object.keys(localStorage);
        this.state = {
            input: '',
            output: '',
            code: localStorage.getItem(options[0]) || 'return text'
        }
    }
    
    componentDidMount()
    {
        document.title = "Text Transformer"
    }
    
    componentWillUnmount()
    {
        document.title = "Chau Le"
    }

    handleInputChange(event) {
        this.setState({ input: event.target.value });
    }

    handleOutputChange(event) {
        this.setState({ output: event.target.value });
    }

    handleCodeChange(event) {
        this.setState({ code: event.target.value });
    }

    handleOptionChange(event) {
        this.setState({
            code:  localStorage.getItem(event.target.value)
        })
    }

    transform(event) {
        const fn = new Function(['text'], this.state.code)
        const result = fn(this.state.input);
        this.setState({
            output: typeof result === 'object' ? JSON.stringify(result) : result
        })
    }
    
    saveCode(event) {
        let name = prompt("Please enter the transformation name: ");
        if (name === null || name === "") {
        } else {
            if (localStorage.getItem(name)) {
                alert("This name already exists! Please change its name or delete the existing one and try again.");
            }
            else {
                localStorage.setItem(name, this.state.code);
                alert("Saved!");
                this.setState({})
            }
        }
    }

    render() {
        return (
            <div className="page" style={{ textAlign: "center" }}>
                <h1 className="title">Text Transformer</h1>
                <div className="page-section">
                    <div style={{ display: "flex", flexDirection: "row", fontSize: "1.5rem" }}>
                        <TextBox text={this.state.input} onChange={this.handleInputChange.bind(this)} copiable={true}/>
                        <div
                            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "1rem", paddingRight: "1rem" }}>
                            <button type="button" onClick={this.transform.bind(this)}>Transform</button>
                            <FontAwesomeIcon icon={faArrowRight} size='2x' />
                        </div>
                        <TextBox text={this.state.output} onChange={this.handleOutputChange.bind(this)} copiable={true}/>
                    </div>
                </div>
                <div style={{ display: "flex", flexGrow: 1, paddingTop: "1rem", paddingBottom: "1rem" }}>
                </div>
                <FontAwesomeIcon icon={faArrowUp} size="3x" />
                <div>
                    <select id="func-select" onChange={this.handleOptionChange.bind(this)}>
                        {
                            Object.keys(localStorage).map((key) =>
                                <option value={key} key={key}>{key}</option>
                            )
                        }
                    </select>
                    <button style= {{margin:"1rem"}} type="button" onClick={this.saveCode.bind(this)}>Save</button>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <span style={{ paddingLeft: '3.5rem' }}>function transform(text) {'{'}</span>
                    <TextBox text={this.state.code} onChange={this.handleCodeChange.bind(this)}/>
                    <span style={{ paddingLeft: '3.5rem' }}>{'}'}</span>
                </div>
            </div>
        )
    }
}

export default TextTransformer;