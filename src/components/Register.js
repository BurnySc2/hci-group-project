import React, { Component } from "react"

import { LOGINCLASSES } from "../css/classes"

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordRepeat: "",
            registerText: "",
        }
    }

    registerButton = () => {
        let text = ""
        if (this.state.email !== "") {
            text = `Your account '${this.state.username}' has been created. An verification email to '${this.state.email}' has been sent! You may log in now.`
        } else {
            text =
                "You left the email field empty! Account could not be created."
        }

        this.setState({
            registerText: text,
        })
    }

    render() {
        // TODO verify if username already in use
        // TODO verify if email is already in use
        // TODO when successfully registered, add text at bottom 'new user has been registered'
        return (
            <div className={LOGINCLASSES.background}>
                <div className={LOGINCLASSES.headbar}>
                    <button
                        className={LOGINCLASSES.notHighlightedBox}
                        onClick={() => this.props.changeShow("login")}
                    >
                        Login
                    </button>
                    <button className={LOGINCLASSES.highlightedBox}>
                        Register
                    </button>
                </div>
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Username"
                    onChange={(e) => {
                        this.setState({ username: e.target.value })
                    }}
                />
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Email"
                    onChange={(e) => {
                        this.setState({ email: e.target.value })
                    }}
                />
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                        this.setState({ password: e.target.value })
                    }}
                />
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Repeat password"
                    type="password"
                    onChange={(e) => {
                        this.setState({ passwordRepeaat: e.target.value })
                    }}
                />
                <button
                    className={LOGINCLASSES.button}
                    onClick={() => this.registerButton()}
                >
                    Register
                </button>
                <div>{this.state.registerText}</div>
            </div>
        )
    }
}
