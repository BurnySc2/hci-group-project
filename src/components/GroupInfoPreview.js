import React from "react"
import moment from "moment"

export default function GroupInfoPreview(props) {
    let group = props.group

    return (
        <div key={`${group.icon}${group.title}`} className="flex flex-col">
            <div className="flex flex-row">
                <div className={"border-2 border-black px-1 mx-1"}>
                    {group.icon}
                </div>
                {group.title} erstellt von {group.createdBy} am{" "}
                {moment(group.createdDate).format("DD.MM.YY")}
            </div>
            <div>
                {group.fieldofstudy}, {group.modules}, {group.memberCount}/
                {group.memberLimit} Mitglieder
            </div>
            <div>{group.members}</div>
            <div>{group.description}</div>
        </div>
    )
}
