import React from "react"
import Chat from "./Chat"
import StudyProjectPreview from "./StudyProjectPreview"
import {
    exampleGroupData,
    exampleStudyProjects,
} from "../constants/exampledata"
import { ICONS } from "../constants/constants"

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

    // If props.studyProjects not available: use a basic example
    let studyProjects =
        props.studyProjects !== undefined
            ? props.studyProjects
            : exampleStudyProjects

    // TODO Get database entry by groupid
    let groupData =
        props.groupData !== undefined ? props.groupData : exampleGroupData

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-between"}>
                <button onClick={(e) => props.setHomeDisplay(undefined)}>
                    Back
                </button>
                <div className={"flex flex-row"}>
                    <div>{groupData.title}</div>
                    <button
                        className={
                            "mx-2 border-black border-2 rounded-full h-6 w-6 flex items-center justify-center"
                        }
                    >
                        i
                    </button>
                </div>
                {/*gear symbol*/}
                <button className={"text-4xl"}>{ICONS.GEAR}</button>
            </div>
            <div className={"flex flex-row border-2 border-gray-500 m-2 p-2"}>
                {/*study projects*/}
                <div className={"flex flex-col"}>
                    {/*create new study project*/}
                    <button
                        className={"border-2 border-black m-1 p-1"}
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
