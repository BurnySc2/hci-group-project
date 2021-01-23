import React, { useState } from "react"

import { BUTTONS, LOGINCLASSES } from "../../css/classes"
import {
    databaseDefaultUserData,
    databaseNames,
    fetchFunctions,
} from "../../constants/constants"

export default function Register(props) {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [passwordRepeat, setPasswordRepeat] = useState("")
    let [registerText, setRegisterText] = useState("")

    let registerButton = async () => {
        if (email === "") {
            setRegisterText("You left the email field empty!")
            return
        } else if (username === "") {
            setRegisterText("You left the username field empty!")
            return
        } else if (password === "") {
            setRegisterText("You left the password field empty!")
            return
        } else if (password !== passwordRepeat) {
            setRegisterText("Password does not match!")
            return
        } else {
            setRegisterText(
                `Your account '${username}' has been created. An verification email to '${email}' has been sent! You may log in now.`
            )
        }

        let dbName = databaseNames.users
        if (!(await fetchFunctions.checkIfCouchDbIsRunning())) {
            setRegisterText(
                "CouchDB is not running! Please install and run https://couchdb.apache.org/ "
            )
            return
        }

        // If not exists, create db
        if (!(await fetchFunctions.checkIfDatabseExists(dbName))) {
            await fetchFunctions.createDatabase(dbName)
        }

        // Check if username is taken
        let data = await fetchFunctions.findDatabaseEntry(dbName, {
            selector: {
                username: username,
            },
        })
        if (data.data) {
            setRegisterText(`Username is already taken!`)
            return
        }

        // Check if email is taken
        data = await fetchFunctions.findDatabaseEntry(dbName, {
            selector: {
                email: email,
            },
        })
        if (data.data) {
            setRegisterText(`Email is already taken!`)
            return
        }

        // Add username / email combination to database
        await fetchFunctions.addDatabaseEntry(databaseNames.profiles, {
            ...databaseDefaultUserData,
            email: email,
            username: username,
        })
        // Store password in .users database
        await fetchFunctions.addDatabaseEntry(databaseNames.users, {
            ...databaseDefaultUserData,
            email: email,
            username: username,
            password: password,
        })

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
