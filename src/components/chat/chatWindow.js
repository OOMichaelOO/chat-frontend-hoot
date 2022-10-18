import React, {Component} from "react";

let __html = require('./chatWindowHTML')
let template = {__html: __html}

class ChatWindow extends Component {

    render() {
        return (
            <div className="chat-window">
                <span dangerouslySetInnerHTML={template} />
            </div>

        )
    }
}

export default ChatWindow;