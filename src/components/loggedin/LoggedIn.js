import React, { useContext, useState } from "react"
import NavBar from "./NavBar"
import FilterFunction from "../FilterFunction"
import GroupInfoJoinedPreview from "../GroupInfoJoinedPreview"
import GroupCreate from "../GroupCreate"
import GroupInfoJoined from "../GroupInfoJoined"
import StudyProjectCreate from "../StudyProjectCreate"
import StudyProjectInfo from "../StudyProjectInfo"
import { exampleJoinedGroups } from "../../constants/exampledata"
import Profile from "../Profile"
import Calendar from "./calendar/Calendar"
import Chat from "../Chat"
import GroupInfoPreview from "../GroupInfoPreview"
import {
    applyGroupFilter,
    CONTEXT,
    defaultFilter,
} from "../../constants/constants"
import GroupInfo from "../GroupInfo"
import GroupJoinRequest from "../GroupJoinRequest"
import { BUTTONS, SECTIONS } from "../../css/classes"
import JoinRequests from "../JoinRequests"

export default function LoggedIn(props) {
    // eslint-disable-next-line no-unused-vars
    let { contextData, setContextData } = useContext(CONTEXT)

    // Zustand auf der website: wo man sich befindet
    // One of: home, groupsearch, chat, calendar, profile
    let [display, setDisplay] = useState("home")
    // If in "home" category, display the group once the user clicks on it
    // One of: creategroup, mygroup, editgroup, joinrequests, createstudyproject, studyproject, studyprojectedit
    let [homeDisplay, setHomeDisplay] = useState(undefined)
    // Which group to display, group-id
    let [homeGroupDisplay, setHomeGroupDisplay] = useState(undefined)
    // eslint-disable-next-line no-unused-vars
    // Which studyproject to display, studyproject-id
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

    let getAllJoinedGroups = (userName) => {
        // TODO Connect with database and return all groups the user is in
        return exampleJoinedGroups
    }

    let getAllGroups = (userName) => {
        // TODO Connect with database and return all groups the user is not in and has not sent a join request
        return exampleJoinedGroups
    }

    let createNewGroup = (groupData) => {
        // TODO Add data to database, verify that it doesnt exist etc.
        console.log("Creating new group with data:", groupData)
        // Redirect to "home" screen
        // TODO load newly created group
        navBarClick("home")
    }

    let removeStudyProject = (groupId, studyProjectId) => {
        // TODO via database remove study project from group
        setHomeDisplay("mygroup")
    }

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
                    <div className={"grid grid-cols-6 gap-4"}>
                        <div
                            className={
                                "col-start-2 col-span-4 grid grid-cols-1"
                            }
                        >
                            {/*TODO get all groups the logged in user is in, and then give the information towards the components via props*/}
                            {getAllJoinedGroups(contextData.username).map(
                                (group) => {
                                    return (
                                        <button
                                            key={group.id}
                                            className={BUTTONS.editButton}
                                            onClick={(e) => {
                                                setHomeDisplay("mygroup")
                                                setHomeGroupDisplay(group.id)
                                            }}
                                        >
                                            <GroupInfoJoinedPreview
                                                groupinfo={group}
                                            />
                                        </button>
                                    )
                                }
                            )}
                        </div>
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
                    setHomeGroupDisplay={setHomeGroupDisplay}
                    setHomeStudyProjectDisplay={setHomeStudyProjectDisplay}
                />
            )
        } else if (homeDisplay === "groupinfo") {
            subPage = <div>TODO display short info about this group</div>
        } else if (homeDisplay === "editgroup") {
            subPage = (
                <GroupCreate
                    edit
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
                />
            )
        } else if (homeDisplay === "joinrequests") {
            subPage = (
                <JoinRequests
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
                />
            )
        } else if (homeDisplay === "createstudyproject") {
            subPage = (
                <StudyProjectCreate
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
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
                        <div className={"flex flex-row"}>
                            <button
                                className={BUTTONS.editButton}
                                onClick={(e) => {
                                    // Go into edit study project mode
                                    setHomeDisplay("studyprojectedit")
                                }}
                            >
                                Edit Study Project
                            </button>
                            <button
                                className={BUTTONS.declineButton}
                                onClick={(e) => {
                                    removeStudyProject(
                                        homeGroupDisplay,
                                        homeStudyProjectDisplay
                                    )
                                }}
                            >
                                Remove Study Project
                            </button>
                        </div>
                    </div>
                    <StudyProjectInfo
                        homeStudyProjectDisplay={homeStudyProjectDisplay}
                    />
                </div>
            )
        } else if (homeDisplay === "studyprojectedit") {
            // TODO add project info through props.projectInfo")
            subPage = (
                <StudyProjectCreate
                    groupid={homeGroupDisplay}
                    setHomeDisplay={setHomeDisplay}
                    studyprojectid={homeStudyProjectDisplay}
                    edit
                />
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
                        {getAllGroups(contextData.username)
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
        <div className="flex flex-col bg-blue-300">
            <NavBar navBarClick={navBarClick} logOutClick={props.logOutClick} />
            {subPage}
        </div>
    )
}
