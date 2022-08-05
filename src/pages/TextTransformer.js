import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react"
import TextBox from "../components/text-box";

class TextTransformer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: '',
            code: 'return text'
        }
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
        this.setState({ code: localStorage.getItem(event.target.value) })
    }

    transform(event) {
        const fn = new Function(['text'], this.state.code)
        const result = fn(this.state.input);
        this.setState({
            output: typeof result === 'object' ? JSON.stringify(result) : result
        })
    }
    
    saveCode(event) {
    }

    render() {
        return (
            <div className="page" style={{ textAlign: "center" }}>
                <h1 style={{ textAlign: "center" }}>Text Transformer</h1>
                <div className="page-section">
                    <div style={{ display: "flex", flexDirection: "row", fontSize: "1.5rem" }}>
                        <TextBox text={this.state.input} onChange={this.handleInputChange.bind(this)} />
                        <div
                            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "1rem", paddingRight: "1rem" }}>
                            <button type="button" onClick={this.transform.bind(this)}>Transform</button>
                            <FontAwesomeIcon icon={faArrowRight} size='2x' />
                        </div>
                        <TextBox text={this.state.output} onChange={this.handleOutputChange.bind(this)} />
                    </div>
                </div>
                <div style={{ display: "flex", flexGrow: 1, paddingTop: "1rem", paddingBottom: "1rem" }}>
                </div>
                <FontAwesomeIcon icon={faArrowUp} size="2x" />
                <div>
                    <select name="func" id="func-select" onChange={this.handleOptionChange.bind(this)}>
                        {
                            Object.keys(localStorage).map((key) =>
                                <option value={key}>{key}</option>
                            )
                        }
                    </select>

                    <button type="button" onclick="save()">Save</button>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: "1rem", paddingLeft: '3.5rem' }}>function transform(text) {'{'}</span>
                    <textarea id='lineCounter3' class="lineCounter" wrap='off' readonly value='1.' />
                    <textarea id='codeEditor3' class="codeEditor" wrap='soft' value={this.state.code} onChange={this.handleCodeChange.bind(this)} />
                    <span style={{ fontSize: '1rem', paddingLeft: '3.5rem' }}>{'}'}</span>
                </div>
            </div>
        )
    }
}

export default TextTransformer;