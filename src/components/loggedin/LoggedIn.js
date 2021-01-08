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
import { BUTTONS, SECTIONS } from "../../css/classes"

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
    // Calendar screen
    let [calendarWeekView, setCalendarWeekView] = useState(false)
    // Profile screen
    let [profileShowEditScreen, setProfileShowEditScreen] = useState(false)

    let navBarClick = (buttonName) => {
        setDisplay(buttonName)
        // Reset variables when clicking a button on the navbar
        setHomeDisplay(undefined)
        setHomeGroupDisplay(undefined)
        setHomeStudyProjectDisplay(undefined)
        setGroupSearchViewGroup(undefined)
        setGroupSearchRequestJoin(undefined)
        setProfileShowEditScreen(false)
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
                <div className={SECTIONS.homeGroupDisplaySection}>
                    <button
                        className={BUTTONS.acceptButton}
                        onClick={(e) => {
                            setHomeDisplay("creategroup")
                        }}
                    >
                        + neue Gruppe erstellen
                    </button>
                    <div className={"grid grid-cols-1"}>
                        {/*TODO get all groups the logged in user is in, and then give the information towards the components via props*/}
                        {groups.map((group) => {
                            return (
                                <button
                                    key={group.id}
                                    className={BUTTONS.editButton}
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
                            className={BUTTONS.backButton}
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
                                    className={BUTTONS.editButton}
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
        subPage = (
            <Calendar
                weekview={calendarWeekView}
                setCalendarWeekView={setCalendarWeekView}
            />
        )
    }
    // PROFILE SCREEN
    else if (display === "profile") {
        subPage = (
            <Profile
                profileShowEditScreen={profileShowEditScreen}
                setProfileShowEditScreen={setProfileShowEditScreen}
            />
        )
    }
    return (
        <div className="flex flex-col">
            <NavBar navBarClick={navBarClick} logOutClick={props.logOutClick} />
            {subPage}
        </div>
    )
}
