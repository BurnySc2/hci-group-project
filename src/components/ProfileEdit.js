import React, { useState } from "react"
import { exampleProfileInfo } from "../constants/exampledata"
import { BUTTONS, INPUTFIELD } from "../css/classes"

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
                className={INPUTFIELD.profileEdit}
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

    let labelClasses = "font-bold"

    return (
        <div className="m-2 p-2 flex flex-col">
            <div className="flex flex-col">
                <img
                    className={"m-auto"}
                    alt={"profile pic"}
                    src={profileInfoChanged.profilePicLink}
                />
                <div className={labelClasses}>Profil Bild:</div>
                {myInput("profilePicLink", "text")}{" "}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Name:</div>
                {myInput("name")}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Degreecourse:</div>
                {myInput("degreecourse")}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Semester:</div>
                {myInput("semester", "number")}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Connections:</div>
                {myInput("connections")}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Moduls:</div>
                {myInput("moduls")}
            </div>
            <div className="flex flex-col">
                <div className={labelClasses}>Description:</div>
                {myInput("description")}
            </div>
            {/*TODO remaining profile fields*/}
            <div className="m-2 p-2 flex justify-between">
                <button
                    className={BUTTONS.declineButton}
                    onClick={(e) => {
                        props.setProfileShowEditScreen(false)
                    }}
                >
                    Cancel
                </button>
                <button
                    className={BUTTONS.acceptButton}
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
