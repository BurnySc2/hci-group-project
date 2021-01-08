import React from "react"
import moment from "moment"

export default function StudyProjectPreview(props) {
    let projectData = props.projectData
    return (
        <div className={"flex flex-col"}>
            <div className={"self-start"}>{projectData.projectname}</div>
            <div className={"self-end"}>
                due {moment(projectData.deadline).fromNow()}
            </div>
        </div>
    )
}
