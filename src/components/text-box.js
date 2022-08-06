import "./text-box.css"
import { Component, Fragment } from "react"

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Copy to clipboard',
            lineCount: "1."
        };
        this.clipboardTimeout = undefined;
    }

    getLineCounterText() {
        const lineCount = this.props.text.split('\n').length;
        var outarr = new Array();
        for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
        }
        return outarr.join('\n');
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
                { this.props.copiable &&
                    <button className="copy-to-clipboard" onClick={this.copy2Clipboard.bind(this)}>{this.state.buttonText}</button>
                }
                <textarea style={this.props.copiable && { borderTopLeftRadius: 0 }} className="lineCounter" wrap='off'
                    readOnly value={this.getLineCounterText()} />
                <textarea className="codeEditor" wrap='soft' style={this.props.copiable && { borderTopRightRadius: 0 }} placeholder="Enter text here..." value={this.props.text} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default TextBox;