import React from "react"

export default function ChatMessage(props) {
    /*
    props: {
        displayAsRow: false,
        messageByMe: true,
        data: {
                name: "Paul",
                text: "Hallo wie gehts euch?",
                time: Date.now(),
        }
    }
     */
    if (!props.data) {
        return <div></div>
    }
    let positioningCss = props.messageByMe ? "self-end" : "self-start"
    let messageAuthor = props.messageByMe ? "mir" : props.data.name
    let displayAsRowCss = props.displayAsRow ? "flex flex-row" : "flex flex-col"
    let messageColour = props.messageColour ? props.messageColour : ""
    return (
        <div className={displayAsRowCss}>
            <div
                className={`${positioningCss} ${messageColour} font-black mx-1`}
            >
                {props.data.text}
            </div>
            {/*TODO Check if time lies in the past, if yes: add date*/}
            <div
                className={`${positioningCss} font-light mx-1`}
            >{`von ${messageAuthor} um ${new Date(
                props.data.time
            ).toLocaleTimeString("de")} Uhr`}</div>
        </div>
    )
}
