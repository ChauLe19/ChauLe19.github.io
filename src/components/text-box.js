import "./text-box.css"
import { Component, Fragment } from "react"

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Copy to clipboard'
        };
        this.handleChange = this.handleChange.bind(this);
        this.clipboardTimeout = undefined;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    copy2Clipboard(event) {
        navigator.clipboard.writeText(this.props.text);
        this.setState({ buttonText: "Copied!" })
        clearTimeout(this.clipboardTimeout)
        this.clipboardTimeout = setTimeout(() => this.setState({ buttonText: 'Copy to clipboard' }), 3000);
    }

    render() {
        return (
            <div style={{ flex: 1 }}>
                <button className="copy-to-clipboard" onClick={this.copy2Clipboard.bind(this)}>{this.state.buttonText}</button>
                <textarea style={{ borderTopLeftRadius: 0 }} className="lineCounter" wrap='off'
                    readonly value="1." />
                <textarea className="codeEditor" wrap='soft' style={{ borderTopRightRadius: 0 }} placeholder="Enter text here..." value={this.props.text} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default TextBox;