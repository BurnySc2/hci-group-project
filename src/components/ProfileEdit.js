import React, { useState } from "react"
import { exampleProfileInfo } from "../constants/exampledata"

export default function ProfileEdit(props) {
    // TODO get logged in username from props or useContext
    let userName = "Dominik"

    // Get initial data from props (or if not given: from exampleProfileInfo)
    let profileInfoData =
        props.profileInfo !== undefined ? props.profileInfo : exampleProfileInfo
    let [profileInfoChanged, setProfileInfoChanged] = useState({
        ...profileInfoData,
    })

    let storeNewProfileInfoInDatabase = (username, newProfileInfo) => {
        // TODO Implement database - apply changes
        props.setProfileInfo({ ...newProfileInfo })
        props.setProfileShowEditScreen(false)
    }

    let myInput = (myKey, type = "text") => {
        return (
            <input
                className="border-2"
                type={type}
                value={profileInfoChanged[myKey]}
                onChange={(e) => {
                    setProfileInfoChanged({
                        ...profileInfoChanged,
                        [myKey]: e.target.value,
                    })
                }}
            />
        )
    }

    return (
        <div className="m-2 p-2 flex flex-col">
            <div className="flex flex-col">
                <img
                    className={"m-auto"}
                    alt={"profile pic"}
                    src={profileInfoChanged.profilePicLink}
                />
                <div>Profil Bild:</div>
                {myInput("profilePicLink", "text")}{" "}
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
            <div className="m-2 p-2 flex justify-between">
                <button
                    onClick={(e) => {
                        props.setProfileShowEditScreen(false)
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={(e) => {
                        storeNewProfileInfoInDatabase(
                            userName,
                            profileInfoChanged
                        )
                    }}
                >
                    Apply
                </button>
            </div>
        </div>
    )
}
