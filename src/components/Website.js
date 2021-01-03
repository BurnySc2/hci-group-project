import React, { useState } from "react"
import Login from "./loggedout/Login"
import Register from "./loggedout/Register"
import LoggedIn from "./loggedin/LoggedIn"
import Title from "./Title"

export default function Website(props) {
    // eslint-disable-next-line
    let [loggedIn, setLoggedIn] = useState("")
    // eslint-disable-next-line
    let [show, setShow] = useState("home")

    let login = (username, password) => {
        // TODO verify username and password match
        setLoggedIn(username)
        setShow("home")
    }

    let register = (username, email, password) => {
        // TODO verify that username and email are not in use?
        // add new user account to database
        // Dont redirect to the login screen after pressing "register" to give the user feedback?
        // setShow("login")
    }

    let logOutClick = () => {
        setLoggedIn("")
        setShow("login")
    }

    // Which subpage to show
    let subpage = undefined
    if (show === "login") {
        subpage = <Login setShow={setShow} login={login} />
    } else if (show === "register") {
        subpage = <Register setShow={setShow} register={register} />
    } else if (show === "home") {
        subpage = <LoggedIn logOutClick={logOutClick} />
    }
    return (
        <div className="flex flex-col">
            <Title />
            {subpage}
            {/* TODO Footer */}
        </div>
    )
}
