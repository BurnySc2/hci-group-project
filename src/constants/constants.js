import React, { createContext } from "react"

export let CONTEXT = createContext({})

export let defaultContextData = {
    username: null,
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

export let ICONS = {
    GEAR: <div>&#9881;</div>,
}
