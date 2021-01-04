import React, { useState } from "react"
import { exampleProfileInfo } from "../constants/exampledata"
import ProfileEdit from "./ProfileEdit"

export default function Profile(props) {
    // TODO get logged in username from props or useContext
    let userName = "Dominik"

    let [profileInfo, setProfileInfo] = useState(exampleProfileInfo)

    let removeAccount = (username) => {
        // TODO Implement database - remove account by username
    }

    if (!props.profileShowEditScreen) {
        let mycss = "m-auto"
        let containercss = "flex flex-col"

        return (
            <div>
                <div className={"flex flex-row justify-end"}>
                    <div className={"flex flex-col m-2 p-2"}>
                        <button
                            className={"border-2 border-black m-1 p-1"}
                            onClick={(e) =>
                                props.setProfileShowEditScreen(true)
                            }
                        >
                            Edit Profile
                        </button>
                        <button
                            className={"border-2 border-black m-1 p-1"}
                            onClick={(e) => {
                                removeAccount(userName)
                            }}
                        >
                            Remove Account
                        </button>
                    </div>
                </div>
                <img
                    className={mycss}
                    src={[profileInfo.profilePicLink]}
                    alt="Profile pic"
                />
                <div className={containercss}>
                    <div className={mycss}>Name: {profileInfo.name}</div>
                    <div className={mycss}>
                        {profileInfo.degreecourse}, {profileInfo.semester}.
                        Semester
                    </div>
                    <div className={mycss}>
                        Erreichbar unter: {profileInfo.connections}
                    </div>

                    {/*TODOZeilenumbruch einfügen*/}
                    <div className={mycss}>
                        Ich belege dieses Semester folgende Module:{" "}
                        {profileInfo.moduls}
                    </div>
                    <div className={mycss}>{profileInfo.description}</div>
                    <div className={mycss}>{profileInfo.hobbies}</div>
                </div>
            </div>
        )
    } else {
        return (
            <ProfileEdit
                profileInfo={profileInfo}
                setProfileInfo={setProfileInfo}
                setProfileShowEditScreen={props.setProfileShowEditScreen}
            />
        )
    }
}
