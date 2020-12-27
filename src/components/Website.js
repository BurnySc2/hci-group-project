import React, { Component } from "react"
import Login from "./loggedout/Login"
import Register from "./loggedout/Register"
import Title from "./Title"
import GroupCreate from "./GroupCreate"
import StudyProjectCreate from "./StudyProjectCreate"
import LoggedIn from "./loggedin/LoggedIn"

export default class Website extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            // Which screen to show
            // One of: login, register, home, profile, contacts
            // groupcreate, studyprojectcreate
            show: "home",
            // show: "login",
        }
    }

    changeShow = (newShow) => {
        this.setState({
            show: newShow,
        })
    }

    logIn = (username, password) => {
        // TODO verify if username and password are correct
        // if correct: redirect to home page and setState loggedIn = username
        this.setState({
            loggedIn: username,
            show: "home",
        })
    }

    register = (username, email, password) => {
        // TODO verify that username and email are not in use?
        // add new user account to database
        this.changeShow("login")
    }

    logOutClick = () => {
        this.setState({
            loggedIn: null,
            show: "login",
        })
    }

    render() {
        // Which subpage to show
        let subpage = null
        if (this.state.show === "login") {
            subpage = <Login changeShow={this.changeShow} login={this.logIn} />
        } else if (this.state.show === "register") {
            subpage = (
                <Register
                    changeShow={this.changeShow}
                    register={this.register}
                />
            )
        } else if (this.state.show === "home") {
            subpage = <LoggedIn logOutClick={this.logOutClick} />
        } else if (this.state.show === "groupcreate") {
            subpage = <GroupCreate />
        } else if (this.state.show === "studyprojectcreate") {
            subpage = <StudyProjectCreate />
        } else if (this.state.show === "profile") {
        } else if (this.state.show === "contacts") {
        }

        return (
            <div className="flex flex-col">
                <Title />
                {subpage}
                {/* TODO Footer */}
            </div>
        )
    }
}
