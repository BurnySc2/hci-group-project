import React, { useState } from "react"
import WeekView from "./WeekView"
import MonthView from "./MonthView"

export default function Calendar(props) {
    if (props.weekview) {
        // Week-view
        return <WeekView />
    } else {
        //Month-View
        return <MonthView />
    }
}
