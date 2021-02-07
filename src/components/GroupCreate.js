import React, { useContext, useEffect, useState } from "react"
import { BUTTONS, GROUPCREATE, INPUTFIELD } from "../css/classes"
import { exampleJoinedGroups } from "../constants/exampledata"
import {
    CONTEXT,
    databaseDefaultGroupData,
    databaseNames,
    fetchFunctions,
} from "../constants/constants"
import moment from "moment"

export default function GroupCreate(props) {
    // eslint-disable-next-line no-unused-vars
    let { contextData, setContextData } = useContext(CONTEXT)
    let [newGroupData, setNewGroupData] = useState({
        icon: "",
        title: "",
        fieldofstudy: "Informatik",
        modules: "",
        description: "",
        memberLimit: "",
    })

    let getGroupData = (groupId) => {
        // TODO via Database get group information via groupId
        if (!groupId) {
            return undefined
        }
        return exampleJoinedGroups[0]
    }

    useEffect(() => {
        let groupData = getGroupData(props.groupid)
        if (groupData) {
            setNewGroupData()
        }
    }, [props.groupid])

    let applyGroupChanges = (groupId, newGroupData) => {
        props.setHomeDisplay(undefined)
        // TODO via database apply new group information
    }

    let createNewGroup = async (groupData) => {
        console.log("creating new group")
        let dbName = databaseNames.groups
        if (!(await fetchFunctions.checkIfDatabseExists(dbName))) {
            await fetchFunctions.createDatabase(dbName)
        }
        // Create group
        let resultGroup = await fetchFunctions.addDatabaseEntry(dbName, {
            ...databaseDefaultGroupData,
            ...groupData,
            members: [contextData.username],
            memberCount: "1",
            createdBy: contextData.username,
            createdDate: moment().valueOf(),
        })
        // Modify user: update list of groups
        let resultUser = await fetchFunctions.findDatabaseEntry(
            databaseNames.users,
            { selector: { username: contextData.username } }
        )
        let groups = resultUser.data.groups
        groups.push(resultGroup.data.id)
        await fetchFunctions.updateDatabaseEntry(
            databaseNames.users,
            {
                ...resultUser.data,
                groups: groups,
            },
            resultUser.data._id,
            resultUser.data._rev
        )

        await props.createNewGroup(groupData)
    }

    let cancelButton = () => {
        if (props.edit) {
            props.setHomeDisplay("mygroup")
        } else {
            props.setHomeDisplay(undefined)
        }
    }

    let changeField = (key, value) => {
        setNewGroupData({ ...newGroupData, [key]: value })
    }

    let createGroupButtonVisibility = props.edit ? "hidden" : ""
    let applyEditGroupButtonVisibility = props.edit ? "" : "hidden"

    return (
        <div className={GROUPCREATE.background}>
            <div className={GROUPCREATE.titleBar}>Create New Study Group</div>
            <div className={GROUPCREATE.grid}>
                {/* <div className={GROUPCREATE.col}> */}
                <div className={GROUPCREATE.label}>Group Icon</div>
                <input
                    className={INPUTFIELD.groupCreate}
                    value={newGroupData.icon}
                    onChange={(e) => changeField("icon", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Group Name</div>
                <input
                    className={INPUTFIELD.groupCreate}
                    value={newGroupData.title}
                    onChange={(e) => changeField("title", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Field of Study</div>
                <select
                    className={INPUTFIELD.groupCreate}
                    name="studienfach"
                    id="studienfach"
                    value={newGroupData.fieldofstudy}
                    onChange={(e) => {
                        changeField("fieldofstudy", e.target.value)
                    }}
                >
                    <option value="Informatik">Computer Science</option>
                    <option value="Mathematik">Maths</option>
                    <option value="Physik">Physics</option>
                    <option value="Chemie">Chemistry</option>
                    <option value="Biologie">Biology</option>
                </select>
                {/* <input
                        placeholder="Informatik"
                        className={GROUPCREATE.inputBox}
                    /> */}
                <div className={GROUPCREATE.label}>Modules</div>
                <textarea
                    className={INPUTFIELD.groupCreate}
                    style={{ minHeight: "5rem" }}
                    placeholder="HCI, Etech, Programmieren 2"
                    value={newGroupData.modules}
                    onChange={(e) => changeField("modules", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Group Description</div>
                <textarea
                    className={INPUTFIELD.groupCreate}
                    style={{ minHeight: "5rem" }}
                    placeholder="We are looking for more Computer Science students who want to study for the HCI exam."
                    value={newGroupData.description}
                    onChange={(e) => changeField("description", e.target.value)}
                />
                <div className={GROUPCREATE.label}>Members Limit</div>
                <input
                    type="number"
                    min="1"
                    max="1000"
                    value={newGroupData.memberLimit}
                    className={INPUTFIELD.groupCreate}
                    onChange={(e) => changeField("memberLimit", e.target.value)}
                />
            </div>
            <div className={GROUPCREATE.row}>
                <button
                    className={`${BUTTONS.acceptButton} ${createGroupButtonVisibility}`}
                    onClick={(e) => {
                        createNewGroup(newGroupData)
                        props.setHomeDisplay(undefined)
                    }}
                >
                    Create New Group
                </button>
                {/*Only visible when making changes to existing group*/}
                <button
                    className={`${BUTTONS.acceptButton} ${applyEditGroupButtonVisibility}`}
                    onClick={(e) => {
                        applyGroupChanges(props.groupid, newGroupData)
                    }}
                >
                    Apply changes
                </button>
                <button
                    className={BUTTONS.declineButton}
                    onClick={(e) => cancelButton()}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
