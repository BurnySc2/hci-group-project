import React, { Component } from "react"

import { STUDYPROJECTCREATE } from "../css/classes"

export default class StudyProjectCreate extends Component {
    render() {
        return (
            <div className={STUDYPROJECTCREATE.background}>
                <div className={STUDYPROJECTCREATE.titleBar}>
                    Create New Study Project
                </div>
                {/* <div className={STUDYPROJECTCREATE.col}> */}
                <div className={STUDYPROJECTCREATE.row}>
                    <div className={STUDYPROJECTCREATE.label}>Project Name</div>
                    <input className={STUDYPROJECTCREATE.inputBox} />
                </div>
                <div className={STUDYPROJECTCREATE.row}>
                    <div className={STUDYPROJECTCREATE.label}>
                        Project Description
                    </div>
                    <textarea
                        className={STUDYPROJECTCREATE.textArea}
                        style={{ "min-height": "5rem" }}
                        placeholder="A group project to complete the HCI assignments with 4-5 members."
                    />
                </div>
                <div className={STUDYPROJECTCREATE.row}>
                    <div className={STUDYPROJECTCREATE.label}>
                        Weekly Meeting Time
                    </div>
                    <input
                        className={STUDYPROJECTCREATE.inputBox}
                        placeholder="Wed 15-17, Fr 12-14"
                    />
                </div>
                <div className={STUDYPROJECTCREATE.row}>
                    <div className={STUDYPROJECTCREATE.label}>Deadline</div>
                    <input
                        type="date"
                        className={STUDYPROJECTCREATE.inputBox}
                    />
                </div>
                {/* </div> */}
                <div className={STUDYPROJECTCREATE.row}>
                    <button className={STUDYPROJECTCREATE.acceptButton}>
                        Create New Study Project
                    </button>
                    <button className={STUDYPROJECTCREATE.cancelButton}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}
