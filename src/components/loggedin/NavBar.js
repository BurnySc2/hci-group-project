import React from "react"
import { BUTTONS, NAVBAR } from "../../css/classes"

export default function Navbar(props) {
    // TODO Underline text to let user know where he currently is
    return (
        <div className={NAVBAR.total}>
            <div className={NAVBAR.leftSide}>
                <button
                    className={BUTTONS.navbarButton}
                    onClick={() => {
                        props.navBarClick("home")
                    }}
                >
                    Home
                </button>
                <button
                    className={BUTTONS.navbarButton}
                    onClick={() => {
                        props.navBarClick("groupsearch")
                    }}
                >
                    Gruppensuche
                </button>
                <button
                    className={BUTTONS.navbarButton}
                    onClick={() => {
                        props.navBarClick("chat")
                    }}
                >
                    Chat
                </button>
                <button
                    className={BUTTONS.navbarButton}
                    onClick={() => {
                        props.navBarClick("calendar")
                    }}
                >
                    Kalender
                </button>
                <button
                    className={BUTTONS.navbarButton}
                    onClick={() => {
                        props.navBarClick("profile")
                    }}
                >
                    Profil
                </button>
            </div>
            <div className={NAVBAR.rightSide}>
                <button
                    className={BUTTONS.logoutButton}
                    onClick={() => {
                        props.logOutClick()
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
