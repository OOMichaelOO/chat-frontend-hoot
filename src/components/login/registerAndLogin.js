import React, {Component} from "react";

let __html = require('./registerAndLoginHTML')
let template = {__html: __html}

class RegisterAndLogin extends Component {
    render() {
        return (
            <div className="chat-window">
                <span dangerouslySetInnerHTML={template} />
            </div>
        )
    }
}

export default RegisterAndLogin;