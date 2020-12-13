import React, { Component } from "react"

import { GROUPCREATE } from "../css/classes"

export default class GroupCreate extends Component {
    render() {
        return (
            <div className={GROUPCREATE.background}>
                <div className={GROUPCREATE.titleBar}>
                    Create New Study Group
                </div>
                {/* <div className={GROUPCREATE.col}> */}
                <div className={GROUPCREATE.row}>
                    <div className={GROUPCREATE.label}>Group Name</div>
                    <input className={GROUPCREATE.inputBox} />
                </div>
                <div className={GROUPCREATE.row}>
                    <div className={GROUPCREATE.label}>Field of Study</div>
                    <select
                        className={GROUPCREATE.inputBox}
                        name="studienfach"
                        id="studienfach"
                    >
                        <option value="computerscience" selected>
                            Computer Science
                        </option>
                        <option value="maths">Maths</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                    </select>
                    {/* <input
                        placeholder="Informatik"
                        className={GROUPCREATE.inputBox}
                    /> */}
                </div>
                <div className={GROUPCREATE.row}>
                    <div className={GROUPCREATE.label}>Modules</div>
                    <textarea
                        className={GROUPCREATE.textArea}
                        style={{ "min-height": "5rem" }}
                        placeholder="HCI, Etech, Programmieren 2"
                    />
                </div>
                <div className={GROUPCREATE.row}>
                    <div className={GROUPCREATE.label}>Group Description</div>
                    <textarea
                        className={GROUPCREATE.textArea}
                        style={{ "min-height": "5rem" }}
                        placeholder="We are looking for more Computer Science students who want to study for the HCI exam."
                    />
                </div>
                <div className={GROUPCREATE.row}>
                    <div className={GROUPCREATE.label}>Members Limit</div>
                    <input
                        type="number"
                        min="1"
                        max="1000"
                        // value="5"
                        className={GROUPCREATE.inputBox}
                    />
                </div>
                {/* </div> */}
                <div className={GROUPCREATE.row}>
                    <button className={GROUPCREATE.acceptButton}>
                        Create New Group
                    </button>
                    <button className={GROUPCREATE.cancelButton}>Cancel</button>
                </div>
            </div>
        )
    }
}
