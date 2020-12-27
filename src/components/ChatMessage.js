import React from "react"

export default function ChatMessage(props) {
    let positioningCss = props.messageByMe ? "self-end" : "self-start"
    let messageAuthor = props.messageByMe ? "Ich" : props.data.name
    return (
        <div className="flex flex-col">
            <div className={`${positioningCss} font-black`}>
                {props.data.text}
            </div>
            {/*TODO Check if time lies in the past, if yes: add date*/}
            <div
                className={`${positioningCss} font-light`}
            >{`${messageAuthor} um ${new Date(
                props.data.time
            ).toLocaleTimeString("de")} Uhr`}</div>
        </div>
    )
}
