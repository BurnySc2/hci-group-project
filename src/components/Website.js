import React, { useContext, useState } from "react"
import Login from "./loggedout/Login"
import Register from "./loggedout/Register"
import LoggedIn from "./loggedin/LoggedIn"
import Title from "./Title"
import { CONTEXT } from "../constants/constants"

export default function Website(props) {
    let [show, setShow] = useState("login")
    let { contextData, setContextData } = useContext(CONTEXT)

    let login = (username, email, password) => {
        setContextData({
            ...contextData,
            username: username,
            email: email,
            password: password,
        })
        setShow("home")
    }

    let register = (username, email, password) => {
        // TODO verify that username and email are not in use?
        // add new user account to database
        // Dont redirect to the login screen after pressing "register" to give the user feedback?
        // setShow("login")
    }

    let logOutClick = () => {
        setContextData({
            ...contextData,
            username: null,
        })
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
        <div className="flex flex-col h-screen bg-blue-200">
            <Title />
            {subpage}
            {/* TODO Footer */}
        </div>
    )
}
