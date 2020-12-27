import React, { useState } from "react"
import ChatMessage from "./ChatMessage"
const cloneDeep = require("clone-deep")

export default function Chat(props) {
    let username = useState("Paul")[0]
    let [chatMessages, setChatMessages] = useState([])
    let [newMessageText, setNewMessageText] = useState("")

    let addChatMessage = (username, message) => {
        let messagesCopy = cloneDeep(chatMessages)
        messagesCopy.push({
            name: username,
            text: message,
            time: Date.now(),
        })
        setChatMessages(messagesCopy)
        setNewMessageText("")
    }

    // Beispiel messages
    // TODO Replace with messages from the database
    if (!props.chatMessages && chatMessages.length === 0) {
        setChatMessages([
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
        ])
    }

    let messagesAsHtml = chatMessages.map((data) => {
        return (
            <ChatMessage
                key={`${data.time} ${data.text}`}
                data={data}
                messageByMe={data.name === username}
            />
        )
    })

    return (
        <div>
            <div className="flex flex-col bg-gray-300">{messagesAsHtml}</div>
            <div className="flex flex-row bg-blue-100">
                <input
                    className="self-start w-full p-2 m-2"
                    type="text"
                    placeholder={"Message"}
                    value={newMessageText}
                    onChange={(e) => {
                        setNewMessageText(e.target.value)
                    }}
                />
                <button
                    className="self-end p-2 m-2"
                    onClick={(e) => {
                        addChatMessage(username, newMessageText)
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    )
}
