import React, { Component } from "react"
import { NAVBAR } from "../../css/classes"

export default function Navbar(props) {
    return (
        <div className={NAVBAR.total}>
            <div className={NAVBAR.leftSide}>
                <button
                    className={NAVBAR.button}
                    onClick={() => {
                        this.props.navBarClick("groups")
                    }}
                >
                    Die Gruppen
                </button>
                <button
                    className={NAVBAR.button}
                    onClick={() => {
                        this.props.navBarClick("chat")
                    }}
                >
                    Chat
                </button>
                <button
                    className={NAVBAR.button}
                    onClick={() => {
                        this.props.navBarClick("calendar")
                    }}
                >
                    Kalender
                </button>
                <button
                    className={NAVBAR.button}
                    onClick={() => {
                        this.props.navBarClick("profile")
                    }}
                >
                    Profil
                </button>
            </div>
            <div className={NAVBAR.rightSide}>
                <button
                    className={NAVBAR.button}
                    onClick={() => {
                        this.props.logOutClick()
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
