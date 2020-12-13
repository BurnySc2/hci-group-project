import React, { Component } from "react"
import Groupfinder from "./Groupfinder"
import Login from "./Login"
import Register from "./Register"
import Title from "./Title"
import Social from "./Social"
import GroupCreate from "./GroupCreate"
import StudyProjectCreate from "./StudyProjectCreate"

export default class Website extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: null,
            // Which screen to show
            // One of: login, register, home, groupfinder, profile, contacts
            // groupcreate, studyprojectcreate
            show: "studyprojectcreate",
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
    }

    register = (username, email, password) => {
        // TODO verify that username and email are not in use?
        // add new user account to database
    }

    render() {
        // Which subpage to show
        let subpage = null
        if (this.state.show === "login") {
            subpage = <Login changeShow={this.changeShow} login={this.login} />
        } else if (this.state.show === "register") {
            subpage = (
                <Register
                    changeShow={this.changeShow}
                    register={this.register}
                />
            )
        } else if (this.state.show === "home") {
            subpage = <Social />
        } else if (this.state.show === "groupfinder") {
            subpage = <Groupfinder />
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
