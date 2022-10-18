import React from "react";
import ReactDOM from "react-dom";
import ChatWindow from "./components/chat/chatWindow";
import App1 from "./App";
import JoinOrCancelPage from "./components/popUp/joinOrCancelPage";
import LeaveOrCancelPage from "./components/popUp/leaveOrCancelPage";
import RegisterAndLogin from "./components/login/registerAndLogin";
import CreateRoomPage from "./components/popUp/createRoomPage";
import ManipulateRoomPage from "./components/popUp/manipulateRoomPage";
import 'antd/dist/antd.css';

import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";

import {Breadcrumb} from "antd";

function App() {
    return (
        <div>
            <Breadcrumb>

                <Breadcrumb.Item>
                    <Link to="/app1">Demo</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/register-and-login">register-and-login</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/create-room">Create room</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/manipulate-room">manipulate-room</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/join-or-cancel">leave-or-cancel</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/leave-or-cancel">join-or-cancel</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to="/chat-window">chat-window</Link>
                </Breadcrumb.Item>


            </Breadcrumb>

            <Switch>
                {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
                <Route path="/chat-window">
                    <ChatWindow />
                </Route>

                <Route path="/register-and-login">
                    <RegisterAndLogin />
                </Route>

                <Route path="/create-room">
                    <CreateRoomPage />
                </Route>

                <Route path="/manipulate-room">
                    <ManipulateRoomPage />
                </Route>

                <Route path="/join-or-cancel">
                    <JoinOrCancelPage />
                </Route>

                <Route path="/leave-or-cancel">
                    <LeaveOrCancelPage />
                </Route>

                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
                <Route path="/app1">
                    <App1 />
                </Route>

                {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
                <Route path="/">
                    <ChatWindow />
                </Route>
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);