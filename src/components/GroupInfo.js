import React from "react"
import { exampleJoinGroupData } from "../constants/exampledata"

export default function GroupInfo(props) {
    // This page is displayed for people who want to know more about the group

    let groupData =
        props.groupData !== undefined ? props.groupData : exampleJoinGroupData

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-start">
                <button
                    className="p-2 bg-blue-300 rounded"
                    onClick={(e) => props.setGroupSearchViewGroup(undefined)}
                >
                    Back
                </button>
            </div>
            <div className="flex flex-col m-2 p-2">
                <div className="self-center font-black">{groupData.title}</div>
                <hr />
                <div className="my-2">
                    Erstellt von: {groupData.createdBy} am{" "}
                    {groupData.createdDate.toLocaleDateString("de-DE")}
                </div>
                <div className="my-2">
                    {groupData.subjects.join(", ")}, {groupData.memberCount} /{" "}
                    {groupData.memberLimit} Mitglieder
                </div>
                <div className="my-8">{groupData.description}</div>
                <button
                    className="flex p-2 bg-blue-200 rounded self-center"
                    onClick={(e) => {
                        props.setGroupSearchViewGroup(undefined)
                        props.setGroupSearchRequestJoin(groupData.id)
                    }}
                >
                    Anfrage senden
                </button>
            </div>
        </div>
    )
}
