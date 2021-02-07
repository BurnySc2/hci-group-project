import React, { useState } from "react"
import ChatMessage from "./ChatMessage"
import { exampleChatMessages } from "../constants/exampledata"
import { BUTTONS, INPUTFIELD } from "../css/classes"
const cloneDeep = require("clone-deep")

export default function Chat(props) {
    /*
    props:
        global: boolean
        chatMessages: [
            {
                name: "Paul",
                text: "Hallo wie gehts euch?",
                time: Date.now(),
            },
            {
                name: "Anna",
                text: "Ja mir gehts gut und dir?",
                time: Date.now(),
            },
        ]
     */
    let [username] = useState("Doug")
    let [chatMessages, setChatMessages] = useState(
        props.chatMessages !== undefined
            ? props.chatMessages
            : exampleChatMessages
    )
    let [newMessageText, setNewMessageText] = useState("")

    let addChatMessage = (username, message) => {
        let messagesCopy = cloneDeep(chatMessages)
        messagesCopy.push({
            id: Date.now(),
            name: username,
            text: message,
            time: Date.now(),
        })
        setChatMessages(messagesCopy)
        setNewMessageText("")
    }

    let messagesAsHtml = chatMessages.map((data) => {
        return (
            <ChatMessage
                key={data.id}
                data={data}
                messageByMe={data.name === username}
            />
        )
    })

    let chatInput = undefined
    if (
        props.displayChatInput === undefined ||
        props.displayChatInput === true
    ) {
        chatInput = (
            <div className="flex flex-row bg-blue-100">
                <input
                    className={INPUTFIELD.chat}
                    type="text"
                    placeholder={
                        props.global
                            ? "Send global message"
                            : "Send message to the group"
                    }
                    value={newMessageText}
                    onChange={(e) => {
                        setNewMessageText(e.target.value)
                    }}
                />
                <button
                    className={BUTTONS.acceptButton}
                    onClick={(e) => {
                        addChatMessage(username, newMessageText)
                    }}
                >
                    Send
                </button>
            </div>
        )
    }

    return (
        <div className={"grid grid-cols-10 m-2 place-items-stretch"}>
            <div className="col-start-3 col-span-6 ...">
                <div className="flex flex-col bg-blue-200">
                    {messagesAsHtml}
                </div>
                {chatInput}
            </div>
        </div>
    )
}
