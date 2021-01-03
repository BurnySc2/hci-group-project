import React from "react"
import { exampleJoinGroupData } from "../constants/exampledata"

export default function GroupJoinRequest(props) {
    let groupData =
        props.groupData !== undefined ? props.groupData : exampleJoinGroupData

    return (
        <div className="flex flex-col m-4 gap-2">
            <div className="flex flex-row m-2 justify-center">
                <div className="mx-1">Anfrage an </div>
                <div className="underline mx-1">{groupData.title}</div>
            </div>
            <div className="flex flex-row m-2 justify-center">
                <div className="p-2">an</div>
                <div className="border border-black border-2 border-rounded rounded py-1 justify px-6 self-center">
                    {groupData.createdBy}
                </div>
            </div>
            <textarea
                className="border border-2 border-black h-64 p-2 m-2  rounded"
                placeholder="Anfrage formulieren (Zeichenbegrenzung: 500)"
            />
            <div className={"flex flex-row justify-between m-4"}>
                <button
                    className="p-4 bg-blue-300 rounded"
                    onClick={(e) => {
                        props.setGroupSearchRequestJoin(undefined)
                    }}
                >
                    Senden
                </button>
                <button
                    className="p-4 bg-blue-300 rounded"
                    onClick={(e) => {
                        props.setGroupSearchRequestJoin(undefined)
                    }}
                >
                    Zurück
                </button>
            </div>
        </div>
    )
}
