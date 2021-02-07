import React, { useEffect, useState } from "react"
import { BUTTONS, STUDYPROJECTCREATE } from "../css/classes"
import moment from "moment"
import {
    databaseDefaultStudyProjectData,
    databaseNames,
    fetchFunctions,
    WEEKDAYS,
} from "../constants/constants"

export default function StudyProjectCreate(props) {
    let [newStudyProjectData, setNewStudyProjectData] = useState({
        id: 1,
        projectname: "",
        projectdescription: "",
        // Get today's weekday
        weeklymeetday: moment().weekday(),
        // Get current time
        weeklymeetstarttime: Date.now(),
        weeklymeetendtime: Date.now() + 2 * 60 * 60 * 1000,
        // as timestamp (integer)
        deadline: Date.now(),
    })

    let getStudyProjectData = async (studyProjectId) => {
        let response = await fetchFunctions.findDatabaseEntry(
            databaseNames.studyProjects,
            { selector: { _id: studyProjectId } }
        )
        console.log(response)
        setNewStudyProjectData(response.data)
    }

    useEffect(() => {
        if (!props.studyProjectId) {
            return
        }
        getStudyProjectData(props.studyProjectId)
    }, [props.studyProjectId])

    let changeField = (key, value) => {
        setNewStudyProjectData({ ...newStudyProjectData, [key]: value })
    }

    let convertTimestampToDate = (timestamp) => {
        return moment(timestamp).format(`YYYY-MM-DD`)
    }

    let convertDateToTimestamp = (date) => {
        // e.g. 2021-01-06, returns timestamp of that day at midnight
        return moment(date, ["YYYY-MM-DD"]).valueOf()
    }

    let convertTimeToTimestamp = (time) => {
        // e.g. 15:05, returns timestamp of today with given time
        return moment(time, ["HH:mm"]).valueOf()
    }

    let convertTimestampToTime = (timestamp) => {
        // Converts timestamp to HH:mm which is required by <input type="time"/>
        return moment(timestamp).format("HH:mm")
    }

    let applyStudyGroupChanges = async (studyGroupId, newStudyProjectData) => {
        props.setHomeDisplay("mygroup")
        // TODO via database apply new study project information
        // let response = await fetchFunctions()
    }

    let createNewStudyProject = async (groupId, studyProjectData) => {
        console.log(
            `Creating new study proejct for id ${props.groupid} with study project data`,
            studyProjectData
        )

        if (
            !(await fetchFunctions.checkIfDatabseExists(
                databaseNames.studyProjects
            ))
        ) {
            await fetchFunctions.createDatabase(databaseNames.studyProjects)
        }
        let projectResponse = await fetchFunctions.addDatabaseEntry(
            databaseNames.studyProjects,
            {
                ...databaseDefaultStudyProjectData,
                ...newStudyProjectData,
            }
        )
        console.log(projectResponse)
        let groupResponse = await fetchFunctions.findDatabaseEntry(
            databaseNames.groups,
            { selector: { _id: props.groupid } }
        )
        console.log(groupResponse)
        groupResponse.data.groupProjects.push(projectResponse.data.id)
        await fetchFunctions.updateDatabaseEntry(
            databaseNames.groups,
            {
                ...groupResponse.data,
                groupProjects: groupResponse.data.groupProjects,
            },
            groupResponse.data._id,
            groupResponse.data._rev
        )

        // TODO via database, create a new study project
    }

    let cancelButton = () => {
        props.setHomeDisplay("mygroup")
    }

    let createGroupButtonVisibility = props.edit ? "hidden" : ""
    let applyEditGroupButtonVisibility = props.edit ? "" : "hidden"

    return (
        <div className={STUDYPROJECTCREATE.background}>
            <div className={STUDYPROJECTCREATE.titleBar}>
                Create New Study Project
            </div>
            <div className={STUDYPROJECTCREATE.grid}>
                {/* <div className={STUDYPROJECTCREATE.col}> */}
                <div className={STUDYPROJECTCREATE.label}>Project Name</div>
                <input
                    className={STUDYPROJECTCREATE.inputBox}
                    value={newStudyProjectData.projectname}
                    onChange={(e) => {
                        changeField("projectname", e.target.value)
                    }}
                />
                <div className={STUDYPROJECTCREATE.label}>
                    Project Description
                </div>
                <textarea
                    className={STUDYPROJECTCREATE.textArea}
                    style={{ minHeight: "5rem" }}
                    placeholder="A group project to complete the HCI assignments with 4-5 members."
                    value={newStudyProjectData.projectdescription}
                    onChange={(e) => {
                        changeField("projectdescription", e.target.value)
                    }}
                />
                <div className={STUDYPROJECTCREATE.label}>Weekly Meet Day</div>
                <select
                    className={STUDYPROJECTCREATE.inputBox}
                    value={newStudyProjectData.weeklymeetday}
                    onChange={(e) => {
                        changeField("weeklymeetday", e.target.value)
                    }}
                >
                    {WEEKDAYS.map((value, index) => {
                        return (
                            <option key={value} value={`${index}`}>
                                {value}
                            </option>
                        )
                    })}
                </select>
                <div className={STUDYPROJECTCREATE.label}>
                    Weekly Meeting Time
                </div>
                <div className={"grid grid-cols-3"}>
                    <input
                        className={STUDYPROJECTCREATE.inputBox}
                        type={"time"}
                        value={convertTimestampToTime(
                            newStudyProjectData.weeklymeetstarttime
                        )}
                        onChange={(e) =>
                            changeField(
                                "weeklymeetstarttime",
                                convertTimeToTimestamp(e.target.value)
                            )
                        }
                    />
                    <div className={"text-center self-center"}>to</div>

                    <input
                        className={STUDYPROJECTCREATE.inputBox}
                        type={"time"}
                        value={convertTimestampToTime(
                            newStudyProjectData.weeklymeetendtime
                        )}
                        onChange={(e) =>
                            changeField(
                                "weeklymeetendtime",
                                convertTimeToTimestamp(e.target.value)
                            )
                        }
                    />
                </div>
                <div className={STUDYPROJECTCREATE.label}>Deadline</div>
                <input
                    type="date"
                    value={convertTimestampToDate(newStudyProjectData.deadline)}
                    className={STUDYPROJECTCREATE.inputBox}
                    onChange={(e) => {
                        changeField(
                            "deadline",
                            convertDateToTimestamp(e.target.value)
                        )
                    }}
                />
            </div>
            <div className={STUDYPROJECTCREATE.row}>
                <button
                    className={`${BUTTONS.acceptButton} ${createGroupButtonVisibility}`}
                    onClick={(e) => {
                        createNewStudyProject(
                            props.groupid,
                            newStudyProjectData
                        )
                        props.setHomeDisplay("mygroup")
                    }}
                >
                    Create New Study Project
                </button>
                {/*Only visible when making changes to existing study project*/}
                <button
                    className={`${BUTTONS.acceptButton} ${applyEditGroupButtonVisibility}`}
                    onClick={(e) => {
                        applyStudyGroupChanges(
                            props.studyprojectid,
                            newStudyProjectData
                        )
                    }}
                >
                    Apply changes
                </button>
                <button
                    className={BUTTONS.declineButton}
                    onClick={(e) => {
                        cancelButton()
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
