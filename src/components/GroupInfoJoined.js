import React, { useContext } from "react"
import Chat from "./Chat"
import StudyProjectPreview from "./StudyProjectPreview"
import {
    exampleGroupData,
    exampleStudyProjects,
} from "../constants/exampledata"
import { CONTEXT, ICONS } from "../constants/constants"
import { BUTTONS } from "../css/classes"

export default function GroupInfoJoined(props) {
    /*
    props: {
        groupid: 1
        studyProjects: [
           {
                projectname: "Abgabeblatt HCI",
                projectdescription: "Something",
                weeklymeetday: moment().weekday(),
                weeklymeetstarttime: Date.now(),
                weeklymeetendtime: Date.now() + 2 * 60 * 60 * 1000,
                deadline: moment().add(5, "days").valueOf(),
            }
        ]
    }
     */
    // eslint-disable-next-line no-unused-vars
    let { contextData, setContextData } = useContext(CONTEXT)

    let getGroupData = (groupId) => {
        // TODO get group information from database, e.g. member count (leave and delete group button)
        return exampleGroupData
    }

    let getStudyProjects = (groupId) => {
        // TODO Get all the study projects from the group id
        return exampleStudyProjects
    }

    let showJoinRequests = (groupId) => {
        props.setHomeDisplay("joinrequests")
        // TODO
    }

    let getGroupInfo = (groupId) => {
        // TODO load 'group info'
    }

    let editGroup = (groupId) => {
        props.setHomeDisplay("editgroup")
        props.setHomeGroupDisplay(groupId)
        // TODO load 'create group' page but with button names different: 'apply'
    }

    let leaveGroup = (userName, groupId) => {
        props.setHomeDisplay(undefined)
        // TODO Database interaction for leaving the group
    }

    let deleteGroup = (userName, groupId) => {
        props.setHomeDisplay(undefined)
        // TODO Database interaction for group deletion
    }

    // If props.studyProjects not available: use a basic example
    let studyProjects = getStudyProjects(props.groupid)

    // TODO Get database entry by groupid
    let groupData = getGroupData(props.groupid)

    // "Remove group" button is only available if membercount is more than 1
    let leaveGroupButtonCss = groupData.memberCount !== "1" ? "" : "hidden"

    // "Remove group" button is only available if membercount is 1
    let removeGroupButtonCss = groupData.memberCount === "1" ? "" : "hidden"

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-between"}>
                <button
                    className={BUTTONS.backButton}
                    onClick={(e) => props.setHomeDisplay(undefined)}
                >
                    Back
                </button>
                <div className={"self-center"}>{groupData.title}</div>
                <div className={"flex flex-row"}>
                    <button
                        className={BUTTONS.editButton}
                        onClick={(e) => {
                            props.setHomeDisplay("groupinfo")
                        }}
                    >
                        Info
                    </button>
                    <button
                        className={BUTTONS.editButton}
                        onClick={(e) => {
                            showJoinRequests(groupData.id)
                        }}
                    >
                        Join Requests
                    </button>
                    <button
                        className={BUTTONS.editButton}
                        onClick={(e) => {
                            editGroup(groupData.id)
                        }}
                    >
                        Edit Group
                    </button>

                    <button
                        className={`${BUTTONS.declineButton} ${leaveGroupButtonCss}`}
                        onClick={(e) => {
                            leaveGroup(contextData.username, groupData.id)
                        }}
                    >
                        Leave Group
                    </button>
                    <button
                        className={`${BUTTONS.declineButton} ${removeGroupButtonCss}`}
                        onClick={(e) => {
                            deleteGroup(contextData.username, groupData.id)
                        }}
                    >
                        Remove Group
                    </button>
                </div>
            </div>
            <div className={"flex flex-row border-2 border-gray-500 m-2 p-2"}>
                {/*study projects*/}
                <div className={"flex flex-col"}>
                    {/*create new study project*/}
                    <button
                        className={BUTTONS.acceptButton}
                        onClick={(e) => {
                            props.setHomeDisplay("createstudyproject")
                        }}
                    >
                        + Study Project
                    </button>
                    {/*list of active study projects*/}
                    {studyProjects.map((projectData) => {
                        return (
                            <button
                                className={BUTTONS.editButton}
                                key={projectData.id}
                                onClick={(e) => {
                                    props.setHomeDisplay("studyproject")
                                    props.setHomeStudyProjectDisplay(
                                        projectData.id
                                    )
                                }}
                            >
                                <StudyProjectPreview
                                    projectData={projectData}
                                />
                            </button>
                        )
                    })}
                </div>
                {/*chat messages of the group*/}
                <div className={"w-full"}>
                    <Chat chatMessages={groupData.chat} />
                </div>
            </div>
        </div>
    )
}
