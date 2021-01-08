import React, { useState } from "react"

import { BUTTONS, LOGINCLASSES } from "../../css/classes"

export default function Login(props) {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [loginText, setLoginText] = useState("")

    let loginButton = () => {
        setLoginText(
            `You have clicked the 'login' button! No functionality is implemented yet :(`
        )
        props.login(username, password)
    }

    return (
        <div className={LOGINCLASSES.background}>
            <div className={LOGINCLASSES.headbar}>
                <button className={BUTTONS.highlightedBox}>Login</button>
                <button
                    className={BUTTONS.notHighlightedBox}
                    onClick={() => props.setShow("register")}
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
                        setUsername(e.target.value)
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
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <button
                className={BUTTONS.acceptButton}
                onClick={() => {
                    loginButton()
                }}
            >
                Login
            </button>
            <div>{loginText}</div>
        </div>
    )
}
