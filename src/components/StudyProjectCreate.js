import React, { useState } from "react"
import { BUTTONS, STUDYPROJECTCREATE } from "../css/classes"
import moment from "moment"
import { WEEKDAYS } from "../constants/constants"

export default function StudyProjectCreate(props) {
    let [newStudyProjectData, setNewStudyProjectData] = useState({
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
                    className={BUTTONS.acceptButton}
                    onClick={(e) => {
                        props.createNewStudyProject(
                            props.groupid,
                            newStudyProjectData
                        )
                    }}
                >
                    Create New Study Project
                </button>
                <button
                    className={BUTTONS.declineButton}
                    onClick={(e) => {
                        props.setHomeDisplay("mygroup")
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
