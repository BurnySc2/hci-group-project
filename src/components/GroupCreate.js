import React, { useState } from "react"
import { GROUPCREATE } from "../css/classes"

export default function GroupCreate(props) {
    let [newGroupData, setNewGroupData] = useState({
        groupname: "",
        fieldofstudy: "computerscience",
        modulestext: "",
        groupdescription: "",
        memberslimit: "",
    })

    let changeField = (key, value) => {
        setNewGroupData({ ...newGroupData, [key]: value })
    }

    return (
        <div className={GROUPCREATE.background}>
            <div className={GROUPCREATE.titleBar}>Create New Study Group</div>
            <div className={GROUPCREATE.grid}>
                {/* <div className={GROUPCREATE.col}> */}
                <div className={GROUPCREATE.label}>Group Name</div>
                <input
                    className={GROUPCREATE.inputBox}
                    value={newGroupData.groupname}
                    onChange={(e) => changeField("groupname", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Field of Study</div>
                <select
                    className={GROUPCREATE.inputBox}
                    name="studienfach"
                    id="studienfach"
                    value={newGroupData.fieldofstudy}
                    onChange={(e) => {
                        changeField("fieldofstudy", e.target.value)
                    }}
                >
                    <option value="computerscience">Computer Science</option>
                    <option value="maths">Maths</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                </select>
                {/* <input
                        placeholder="Informatik"
                        className={GROUPCREATE.inputBox}
                    /> */}
                <div className={GROUPCREATE.label}>Modules</div>
                <textarea
                    className={GROUPCREATE.textArea}
                    style={{ minHeight: "5rem" }}
                    placeholder="HCI, Etech, Programmieren 2"
                    value={newGroupData.modulestext}
                    onChange={(e) => changeField("modulestext", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Group Description</div>
                <textarea
                    className={GROUPCREATE.textArea}
                    style={{ minHeight: "5rem" }}
                    placeholder="We are looking for more Computer Science students who want to study for the HCI exam."
                    value={newGroupData.groupdescription}
                    onChange={(e) =>
                        changeField("groupdescription", e.target.value)
                    }
                />
                <div className={GROUPCREATE.label}>Members Limit</div>
                <input
                    type="number"
                    min="1"
                    max="1000"
                    value={newGroupData.memberslimit}
                    className={GROUPCREATE.inputBox}
                    onChange={(e) => changeField("memberlimit", e.target.value)}
                />
                {/* </div> */}
            </div>
            <div className={GROUPCREATE.row}>
                <button
                    className={GROUPCREATE.acceptButton}
                    onClick={(e) => {
                        props.createNewGroup(newGroupData)
                    }}
                >
                    Create New Group
                </button>
                <button
                    className={GROUPCREATE.cancelButton}
                    onClick={(e) => props.setHomeDisplay(undefined)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
