import React from "react"
import WeekView from "./WeekView"
import MonthView from "./MonthView"
import { BUTTONS } from "../../../css/classes"

export default function Calendar(props) {
    if (props.weekview) {
        // Week-view
        return (
            <div className={"flex flex-col"}>
                <button
                    className={BUTTONS.calendarSwapButton}
                    onClick={(e) => {
                        props.setCalendarWeekView(false)
                    }}
                >
                    Monats-Ansicht
                </button>
                <WeekView setCalendarWeekView={props.setCalendarWeekView} />
            </div>
        )
    } else {
        //Month-View
        return (
            <div className={"flex flex-col"}>
                <button
                    className={BUTTONS.calendarSwapButton}
                    onClick={(e) => {
                        props.setCalendarWeekView(true)
                    }}
                >
                    Wochen-Ansicht
                </button>
                <MonthView setCalendarWeekView={props.setCalendarWeekView} />
            </div>
        )
    }
}
