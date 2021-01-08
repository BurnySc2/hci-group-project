import React from "react"
import ChatMessage from "./ChatMessage"

export default function GroupInfoJoinedPreview(props) {
    // This component is displayed under "home" screen

    /*
    props:
    {
        groupinfo: {
            icon: "HCI",
            title: "HCI-Gruppe",
            lastchatmessage: {
                name: "Doug",
                text: "Hallo wie gehts euch?",
                time: Date.now(),
            }
        }
    }
     */
    return (
        <div className={"flex flex-row"}>
            <div>
                <div
                    className={
                        "border-2 border-black p-2 w-16 text-center font-black"
                    }
                >
                    {props.groupinfo.icon}
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div className={"mx-1 self-start"}>{props.groupinfo.title}</div>
                <ChatMessage
                    data={props.groupinfo.lastchatmessage}
                    displayAsRow
                />
            </div>
        </div>
    )
}
