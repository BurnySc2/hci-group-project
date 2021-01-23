import React, { createContext } from "react"
import moment from "moment"

export let CONTEXT = createContext({})

export let defaultContextData = {
    username: null,
    email: null,
    hashedpassword: null,
    useDatabase: true,
}

export let WEEKDAYS = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
]

export let WEEKDAYSCALENDAR = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
]

export let defaultFilter = {
    groupname: "",
    fieldofstudy: "",
    modulestext: "",
    freeslots: "",
}

export let applyGroupFilter = (group, filterSettings) => {
    if (
        filterSettings.groupname !== "" &&
        !group.title
            .toLowerCase()
            .includes(filterSettings.groupname.toLowerCase())
    ) {
        return false
    }
    if (
        filterSettings.fieldofstudy !== "" &&
        !group.fieldofstudy
            .toLowerCase()
            .includes(filterSettings.fieldofstudy.toLowerCase())
    ) {
        return false
    }
    if (
        filterSettings.modulestext !== "" &&
        !group.modules
            .toLowerCase()
            .includes(filterSettings.modulestext.toLowerCase())
    ) {
        return false
    }
    let freeSlots = parseInt(group.memberLimit) - parseInt(group.memberCount)
    if (
        filterSettings.freeslots !== "" &&
        parseInt(filterSettings.freeslots) > freeSlots
    ) {
        return false
    }
    return true
}

// DATABASE INTERACTION
export let databaseDefaultUserData = {
    email: "",
    username: "",
    password: "",
}

export let databaseDefaultProfileData = {
    profilePicLink: "https://i.imgur.com/9BiQit3.png",
    name: "",
    degreecourse: "",
    semester: "",
    connections: "",
    moduls: "",
    description: "",
    hobbies: "",
}

export let databaseDefaultGroupData = {
    id: 1,
    icon: "",
    title: "",
    createdBy: "",
    createdDate: moment("2020-12-15").valueOf(),
    fieldofstudy: "",
    modules: "",
    memberCount: "3",
    memberLimit: "4",
    members: [],
    description: "",
    chat: [],
}

export let databaseNames = {
    // Login / register
    users: "users",
    // Custom profile information
    profiles: "profiles",
    // Group information and what study projects they have
    groups: "groups",
    // Story study group chat
    groupChat: "groupchat",
    // Info about the study projects
    studyProjects: "studyprojects",
    // Storing global chat messages
    globalChat: "globalchat",
}
let databaseAddress = "http://127.0.0.1:5984/"
export let fetchFunctions = {
    createDatabase: async (dbName) => {
        const requestOptions = {
            headers: {
                Authorization: "Basic " + btoa("admin:admin"),
            },
            method: "PUT",
        }
        await fetch(databaseAddress + dbName + "/", requestOptions)
    },
    removeDatabase: async (dbName) => {},
    checkIfCouchDbIsRunning: async () => {
        const requestOptions = {
            headers: {
                Authorization: "Basic " + btoa("admin:admin"),
            },
            method: "GET",
        }
        let response = await fetch(databaseAddress, requestOptions)
        return response.status === 200
    },
    checkIfDatabseExists: async (dbName) => {
        const requestOptions = {
            headers: {
                Authorization: "Basic " + btoa("admin:admin"),
            },
            method: "HEAD",
        }
        let response = await fetch(
            databaseAddress + dbName + "/",
            requestOptions
        )
        return response.status === 200
    },
    addDatabaseEntry: async (dbName, data) => {
        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("admin:admin"),
            },
            method: "POST",
            body: JSON.stringify(data),
        }
        let response = await fetch(
            databaseAddress + dbName + "/",
            requestOptions
        )
        return response.ok
    },
    findDatabaseEntry: async (dbName, selector) => {
        // return undefined if 0 entries found
        // return first entry if entry is found
        /*
        Return format:
        {
            response: number
            data: object,
        }
         */

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("admin:admin"),
            },
            method: "POST",
            body: JSON.stringify(selector),
        }
        let response = await fetch(
            databaseAddress + dbName + "/_find",
            requestOptions
        )
        if (response.ok) {
            let data = await response.json()
            if (data.docs.length > 0) {
                return {
                    response: response.status,
                    data: data.docs[0],
                }
            }
        }
        return {
            response: response.status,
            data: undefined,
        }
    },
    searchDatabaseEntry: async (dbName, selector) => {
        // return all results
    },
    deleteDatabaseEntry: async (dbName, id, revision) => {},
}

export let ICONS = {
    GEAR: <div>&#9881;</div>,
}
