import React, { useState } from "react"
import profilePic from "../BSP_PB.png"

export default function ProfileEdit(props) {
    // TODO get logged in username from props or useContext
    let userName = "Dominik"

    // TODO Get profileInfo from database
    // let [profileInfo, setProfileInfo] = useState(database.getuser(username))

    let [profileInfo, setProfileInfo] = useState({
        profilePicLink: "https://i.imgur.com/9BiQit3.png",
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
    let cancel = () => {
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
            <div className="flex flex-col">
                <div>Bild:</div>
                {myInput("profilePicLink", "image")}
            </div>
            <div className="flex flex-col">
                <div>Name:</div>
                {myInput("name")}
            </div>
            <div className="flex flex-col">
                <div>Degreecourse:</div>
                {myInput("degreecourse")}
            </div>
            <div className="flex flex-col">
                <div>Semester:</div>
                {myInput("semester", "number")}
            </div>
            <div className="flex flex-col">
                <div>Connections:</div>
                {myInput("connections")}
            </div>
            <div className="flex flex-col">
                <div>Moduls:</div>
                {myInput("moduls")}
            </div>
            <div className="flex flex-col">
                <div>Description:</div>
                {myInput("description")}
            </div>
            {/*TODO remaining profile fields*/}
            <div className="flex flew-row">
                <button
                    onClick={(e) => {
                        storeNewProfileInfoInDatabase(userName, profileInfo)
                    }}
                >
                    Apply
                </button>

                <button
                    onClick={(e) => {
                        cancel()
                    }}
                >
                    Cancel
                </button>

            </div>
        </div>
    )
}
