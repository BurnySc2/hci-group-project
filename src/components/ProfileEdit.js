import React, { useState } from "react"

export default function ProfileEdit(props) {
    // TODO get logged in username from props or useContext
    let userName = "Dominik"

    // TODO Get profileInfo from database
    // let [profileInfo, setProfileInfo] = useState(database.getuser(username))

    let [profileInfo, setProfileInfo] = useState({
        profilePicLink: "imgurirgendwas",
        name: "Björk",
        degreecourse: "Informatik",
        semester: "5",
        connections: "Email, Discord, Teams",
        moduls:
            "HCI, Analysis A, Ausgewählte Kapitel des Rechts für Informatiker",
        description: "Außerdem bin ich sehr engagiert.",
        hobbies: "Meine Hobbys sind Fahrrad fahren und Kochen.",
    })

    let storeNewProfileInfoInDatabase = (username, newProfileInfo) => {
        // TODO Implement database - apply changes
    }

    let myInput = (myKey, type="text") => {
        return (
            <input
                className="border-2"
                type={type}
                value={profileInfo[myKey]}
                onChange={(e) => {
                    setProfileInfo({
                        ...profileInfo,
                        [myKey]: e.target.value,
                    })
                }}
            />
        )
    }

    return (
        <div className="m-2 p-2 flex flex-col">
            <div className="flex flex-row">
                <div>Name:</div>
                {myInput("name")}
            </div>
            <div className="flex flexr-row">
                <div>Semester:</div>
                {myInput("semester", "number")}
            </div>
            {/*TODO remaining profile fields*/}
            <div className="flex flex-row">
                <button
                    onClick={(e) => {
                        storeNewProfileInfoInDatabase(userName, profileInfo)
                    }}
                >
                    Apply
                </button>
            </div>
        </div>
    )
}
