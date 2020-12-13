import React, { Component } from "react"

import { LOGINCLASSES } from "../css/classes"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            loginText: "",
        }
    }

    loginButton = () => {
        console.log("hewwoww")
        this.setState({
            loginText: `You have clicked the 'login' button! No functionality is implemented yet :(`,
        })
    }

    render() {
        return (
            <div className={LOGINCLASSES.background}>
                <div className={LOGINCLASSES.headbar}>
                    <button className={LOGINCLASSES.highlightedBox}>
                        Login
                    </button>
                    <button
                        className={LOGINCLASSES.notHighlightedBox}
                        onClick={() => this.props.changeShow("register")}
                    >
                        Register
                    </button>
                </div>
                <div className={LOGINCLASSES.row}>
                    <div className={LOGINCLASSES.label}>Username</div>
                    <input
                        className={LOGINCLASSES.inputBox}
                        placeholder="Username"
                        onChange={(e) => {
                            this.setState({ username: e.target.value })
                        }}
                    />
                </div>
                <div className={LOGINCLASSES.row}>
                    <div className={LOGINCLASSES.label}>Password</div>
                    <input
                        className={LOGINCLASSES.inputBox}
                        placeholder="Password"
                        type="password"
                        onChange={(e) => {
                            this.setState({ password: e.target.value })
                        }}
                    />
                </div>
                <button
                    className={LOGINCLASSES.button}
                    onClick={() => {
                        this.loginButton()
                    }}
                >
                    Login
                </button>
                <div>{this.state.loginText}</div>
            </div>
        )
    }
}
