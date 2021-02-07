import React, { useState } from "react"

import { BUTTONS, LOGINCLASSES } from "../../css/classes"
import { databaseNames, fetchFunctions } from "../../constants/constants"

export default function Login(props) {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [loginText, setLoginText] = useState("")

    let loginButton = async () => {
        let dbName = databaseNames.users
        if (!(await fetchFunctions.checkIfCouchDbIsRunning())) {
            setLoginText(
                "CouchDB is not running! Please install and run https://couchdb.apache.org/ "
            )
            return
        }
        if (!(await fetchFunctions.checkIfDatabseExists(dbName))) {
            await fetchFunctions.createDatabase(dbName)
        }
        let data = await fetchFunctions.findDatabaseEntry(dbName, {
            selector: {
                username: username,
            },
        })

        if (!data.data) {
            setLoginText("Username does not exist!")
            return
        }
        if (data.data.password !== password) {
            setLoginText("Password is incorrect!")
            return
        }

        let email = data.data.email

        props.login(username, email, password)
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
