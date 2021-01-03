import React, { useState } from "react"
import NavBar from "./NavBar"
import FilterFunction from "../FilterFunction"
import GroupInfoJoinedPreview from "../GroupInfoJoinedPreview"
import GroupCreate from "../GroupCreate"
import GroupInfoJoined from "../GroupInfoJoined"
import StudyProjectCreate from "../StudyProjectCreate"
import StudyProjectInfo from "../StudyProjectInfo"
import {
    exampleJoinedGroups,
    exampleStudyProjects,
} from "../../constants/exampledata"
import Profile from "../Profile"
import Calendar from "./calendar/Calendar"
import Chat from "../Chat"
import GroupInfoPreview from "../GroupInfoPreview"
import {
    applyGroupFilter,
    defaultFilter,
    ICONS,
} from "../../constants/constants"
import GroupInfo from "../GroupInfo"
import GroupJoinRequest from "../GroupJoinRequest"

export default function LoggedIn(props) {
    // Zustand auf der website: wo man sich befindet
    // One of: home, groupsearch, chat, calendar, profile
    let [display, setDisplay] = useState("home")
    // If in "home" category, display the group once the user clicks on it
    // One of: creategroup, mygroup, createstudyproject, studyproject
    let [homeDisplay, setHomeDisplay] = useState(undefined)
    let [homeGroupDisplay, setHomeGroupDisplay] = useState(undefined)
    // eslint-disable-next-line no-unused-vars
    let [homeStudyProjectDisplay, setHomeStudyProjectDisplay] = useState(
        undefined
    )
    // Group search screen
    let [filterSettings, setFilterSettings] = useState(defaultFilter)
    let [groupSearchViewGroup, setGroupSearchViewGroup] = useState(undefined)
    let [groupSearchRequestJoin, setGroupSearchRequestJoin] = useState(
        undefined
    )

    let navBarClick = (buttonName) => {
        setDisplay(buttonName)
        // Reset variables when clicking a button on the navbar
        setHomeDisplay(undefined)
        setHomeGroupDisplay(undefined)
        setHomeStudyProjectDisplay(undefined)
        setGroupSearchViewGroup(undefined)
        setGroupSearchRequestJoin(undefined)
    }

    let createNewGroup = (groupData) => {
        // TODO Add data to database, verify that it doesnt exist etc.
        console.log("Creating new group with data:", groupData)
        // Redirect to "home" screen
        // TODO load newly created group
        navBarClick("home")
    }

    let createNewStudyProject = (groupid, studyProjectData) => {
        console.log(
            `Creating new study proejct for id ${groupid} with study project data`,
            studyProjectData
        )
        setHomeDisplay("mygroup")
    }

    // Example groups the user is in, assuming the user is "Alice"
    let groups = exampleJoinedGroups

    // Example study projects
    let studyProjects = exampleStudyProjects

    let subPage = undefined
    // HOME SCREEN
    if (display === "home") {
        if (homeDisplay === undefined) {
            subPage = (
                <div>
                    <button
                        className={"border-2 border-black rounded m-2 p-1"}
                        onClick={(e) => {
                            setHomeDisplay("creategroup")
                        }}
                    >
                        + neue Gruppe erstellen
                    </button>
                    <div className={"flex flex-col"}>
                        {/*TODO get all groups the logged in user is in, and then give the information towards the components via props*/}
                        {groups.map((group) => {
                            return (
                                <button
                                    key={group.id}
                                    className={"m-2"}
                                    onClick={(e) => {
                                        setHomeDisplay("mygroup")
                                        setHomeGroupDisplay(group.id)
                                    }}
                                >
                                    <GroupInfoJoinedPreview groupinfo={group} />
                                </button>
                            )
                        })}
                    </div>
                </div>
            )
        } else if (homeDisplay === "creategroup") {
            subPage = (
                <GroupCreate
                    setHomeDisplay={setHomeDisplay}
                    createNewGroup={createNewGroup}
                />
            )
        } else if (homeDisplay === "mygroup") {
            // TODO Load database data, then display the group
            subPage = (
                <GroupInfoJoined
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
                    setHomeStudyProjectDisplay={setHomeStudyProjectDisplay}
                    studyProjects={studyProjects}
                />
            )
        } else if (homeDisplay === "createstudyproject") {
            // TODO Load database data, then display the group
            subPage = (
                <StudyProjectCreate
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
                    createNewStudyProject={createNewStudyProject}
                />
            )
        } else if (homeDisplay === "studyproject") {
            // TODO add project info through props.projectInfo
            subPage = (
                <div className={"flex flex-col"}>
                    <div className={"flex flex-row justify-between"}>
                        <button
                            onClick={(e) => {
                                setHomeDisplay("mygroup")
                            }}
                        >
                            Back
                        </button>

                        <button className={"text-4xl"}>{ICONS.GEAR}</button>
                    </div>
                    <StudyProjectInfo />
                </div>
            )
        }
    }
    // GROUP SEARCH SCREEN
    else if (display === "groupsearch") {
        if (
            groupSearchViewGroup === undefined &&
            groupSearchRequestJoin === undefined
        ) {
            subPage = (
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <FilterFunction
                            filterSettings={filterSettings}
                            setFilterSettings={setFilterSettings}
                        />
                    </div>
                    <div className={"flex flex-col"}>
                        {groups
                            .filter((group) => {
                                return applyGroupFilter(group, filterSettings)
                            })
                            .map((group) => (
                                <button
                                    key={group.id}
                                    onClick={(e) => {
                                        setGroupSearchViewGroup(group.id)
                                    }}
                                >
                                    <GroupInfoPreview group={group} />
                                </button>
                            ))}
                    </div>
                </div>
            )
        } else if (groupSearchViewGroup !== undefined) {
            subPage = (
                <GroupInfo
                    setGroupSearchViewGroup={setGroupSearchViewGroup}
                    setGroupSearchRequestJoin={setGroupSearchRequestJoin}
                />
            )
        } else if (groupSearchRequestJoin !== undefined) {
            subPage = (
                <GroupJoinRequest
                    setGroupSearchViewGroup={setGroupSearchViewGroup}
                    setGroupSearchRequestJoin={setGroupSearchRequestJoin}
                />
            )
        }
    }
    // GLOBAL CHAT SCREEN
    else if (display === "chat") {
        subPage = <Chat />
    }
    // CALENDAR SCREEN
    else if (display === "calendar") {
        subPage = <Calendar weekview />
    }
    // PROFILE SCREEN
    else if (display === "profile") {
        subPage = <Profile />
    }
    return (
        <div className="flex flex-col">
            <NavBar navBarClick={navBarClick} logOutClick={props.logOutClick} />
            {subPage}
        </div>
    )
}
