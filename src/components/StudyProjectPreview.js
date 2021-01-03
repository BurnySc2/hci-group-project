import React from "react"
import moment from "moment"

export default function StudyProjectPreview(props) {
    let projectData = props.projectData
    return (
        <div className={"flex flex-col border-2 border-black m-1 p-1"}>
            <div className={"self-start"}>{projectData.projectname}</div>
            <div className={"self-end"}>
                due {moment(projectData.deadline).fromNow()}
            </div>
        </div>
    )
}
