import React, { useEffect, useState } from "react"
import * as moment from "moment"
import { BUTTONS } from "../css/classes"

export default function JoinRequests(props) {
    let [requests, setRequests] = useState([])

    let getJoinRequests = (groupId) => {
        // TODO get all join requests via database by groupid
        return [
            {
                id: 1,
                name: "Dominik",
                message: "Hallo, ich moechte gerne der Gruppe beitreten!",
                time: moment().valueOf(),
            },
        ]
    }

    useEffect(() => {
        setRequests(getJoinRequests(props.groupid))
    }, [props.groupid])

    let joinRequestsHtml = requests.map((request) => {
        return (
            <div key={request.id} className={"flex flex-row"}>
                <div>
                    {request.name} - {request.message} vom{" "}
                    {moment(request.time).format()}
                </div>
                <button className={BUTTONS.acceptButton}>Annehmen</button>
                <button className={BUTTONS.declineButton}>Ablehnen</button>
            </div>
        )
    })

    return (
        <div className={"flex flex-col"}>
            <button
                className={`${BUTTONS.backButton} m-auto self-start`}
                onClick={(e) => {
                    props.setHomeDisplay("mygroup")
                }}
            >
                Back
            </button>
            <div>
                TODO list join requests
                {joinRequestsHtml}
            </div>
        </div>
    )
}
