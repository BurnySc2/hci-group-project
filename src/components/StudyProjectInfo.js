import React from "react"
import { exampleStudyProjects } from "../constants/exampledata"
import moment from "moment"

export default function StudyProjectInfo(props) {
    let projectInfo =
        props.projectInfo !== undefined
            ? props.projectInfo
            : exampleStudyProjects[0]

    let meetDay = moment().weekday(projectInfo.weeklymeetday)
    let meetStartTime = moment(projectInfo.weeklymeetstarttime).format("HH:mm")
    let meetEndTime = moment(projectInfo.weeklymeetendtime).format("HH:mm")
    let meetDayAndTime = `${meetDay} ${meetStartTime} - ${meetEndTime}`

    let deadline = moment(projectInfo.deadline)
    let deadlineFromNow = deadline.fromNow()
    let deadlineReadable = deadline.format("DD MMM YYYY HH:mm")

    return (
        <div className={"grid grid-cols-2"}>
            <div>Project name:</div>
            <div>{projectInfo.projectname}</div>
            <div>Project description:</div>
            <div>{projectInfo.projectdescription}</div>
            <div>Meeting day:</div>
            <div>{meetDayAndTime}</div>
            <div>Deadline:</div>
            <div>
                {deadlineReadable} (which is {deadlineFromNow})
            </div>
        </div>
    )
}
