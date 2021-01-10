import React from "react"
import { BUTTONS, NAVBAR } from "../../css/classes"

export default function Navbar(props) {
    // TODO Underline text to let user know where he currently is
    return (
        <div
            className={NAVBAR.total}
            style={{
                "background-image":
                    "linear-gradient(to left, rgba(0,0,150,1), rgba(0,0,150,0))",
            }}
        >
            <div className={NAVBAR.leftSide}>
                <button
                    className={`${BUTTONS.navbarButton} bg-orange-300`}
                    onClick={() => {
                        props.navBarClick("home")
                    }}
                >
                    Home
                </button>
                <button
                    className={`${BUTTONS.navbarButton} bg-red-300`}
                    onClick={() => {
                        props.navBarClick("groupsearch")
                    }}
                >
                    Gruppensuche
                </button>
                <button
                    className={`${BUTTONS.navbarButton} bg-purple-300`}
                    onClick={() => {
                        props.navBarClick("chat")
                    }}
                >
                    Chat
                </button>
                <button
                    className={`${BUTTONS.navbarButton} bg-blue-300`}
                    onClick={() => {
                        props.navBarClick("calendar")
                    }}
                >
                    Kalender
                </button>
                <button
                    className={`${BUTTONS.navbarButton} bg-teal-300`}
                    onClick={() => {
                        props.navBarClick("profile")
                    }}
                >
                    Profil
                </button>
            </div>
            <div className={NAVBAR.rightSide}>
                <button
                    className={`${BUTTONS.logoutButton} bg-pink-100`}
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
