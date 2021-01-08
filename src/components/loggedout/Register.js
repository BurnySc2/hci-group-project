import React, { useState } from "react"

import { BUTTONS, LOGINCLASSES } from "../../css/classes"

export default function Register(props) {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [passwordRepeat, setPasswordRepeat] = useState("")
    let [registerText, setRegisterText] = useState("")

    let registerButton = () => {
        let text = ""
        if (email !== "") {
            text = `Your account '${username}' has been created. An verification email to '${email}' has been sent! You may log in now.`
        } else {
            text =
                "You left the email field empty! Account could not be created."
        }

        setRegisterText(text)

        console.assert(
            password === passwordRepeat,
            "Password and password repeat are not the same!"
        )

        props.register(username, email, password)
    }

    // TODO verify if username already in use
    // TODO verify if email is already in use
    // TODO when successfully registered, add text at bottom 'new user has been registered'
    return (
        <div className={LOGINCLASSES.background}>
            <div className={LOGINCLASSES.headbar}>
                <button
                    className={BUTTONS.notHighlightedBox}
                    onClick={() => props.setShow("login")}
                >
                    Login
                </button>
                <button className={BUTTONS.highlightedBox}>Register</button>
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
                <div className={LOGINCLASSES.label}>Email</div>
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
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
            <div className={LOGINCLASSES.row}>
                <div className={LOGINCLASSES.label}>Repeat Password</div>
                <input
                    className={LOGINCLASSES.inputBox}
                    placeholder="Repeat password"
                    type="password"
                    onChange={(e) => {
                        setPasswordRepeat(e.target.value)
                    }}
                />
            </div>
            <button
                className={BUTTONS.acceptButton}
                onClick={() => registerButton()}
            >
                Register
            </button>
            <div>{registerText}</div>
        </div>
    )
}
