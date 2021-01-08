import React, { useState } from "react"
import moment from "moment"
import { exampleCalendarData } from "../../../constants/exampledata"
import { WEEKDAYSCALENDAR } from "../../../constants/constants"
import { BUTTONS, CALENDAR } from "../../../css/classes"

export default function MonthView(props) {
    let [monthOffset, setMonthOffset] = useState(0)

    let currentDate = moment().add(monthOffset, "month")
    // Z.B.: January 2021
    let calendarTitle = currentDate.format("MMMM YYYY")
    // Z.B.: Erster Tag im Monat
    let firstOfMonth = currentDate.startOf("month")
    // Z.B.: 31 for January
    let amountOfDaysThisMonth = currentDate.daysInMonth()

    // TODO Replace with data from props or database
    let calendarData = exampleCalendarData
    // Sort data by meeting time
    calendarData.sort((a, b) => {
        if (a.meetingTime > b.meetingTime) {
            return 1
        } else if (a.meetingTime < b.meetingTime) {
            return -1
        }
        return 0
    })

    // Create days array
    let days = []
    for (let i = 1; i <= amountOfDaysThisMonth; i++) {
        days.push(i)
    }

    // Create start filler elements
    let amountStartFillerElements = (firstOfMonth.weekday() + 6) % 7
    let fillerStartElementsHtml = Array(amountStartFillerElements)
    for (let i = 0; i < amountStartFillerElements; i++) {
        fillerStartElementsHtml.push(
            <div key={i} className={CALENDAR.filler} />
        )
    }

    // Create end filler elements
    let amountEndFillerElements =
        7 - ((amountStartFillerElements + amountOfDaysThisMonth) % 7)
    let fillerEndElementsHtml = Array(amountEndFillerElements)
    for (let i = 0; i < amountEndFillerElements; i++) {
        fillerEndElementsHtml.push(<div key={i} className={CALENDAR.filler} />)
    }

    // TODO Mobile support (small width)

    let validAssignmentForToday = (assignment, date) => {
        // Returns assignment if valid, else null
        let startDate = assignment.startdate
        let deadline = assignment.deadline
        // 0-6 as Monday-Sunday
        let weekday = (moment(date).weekday() + 6) % 7
        if (
            startDate < date &&
            date < deadline &&
            weekday === assignment.meetingDay
        ) {
            return assignment
        }
        return null
    }

    let convertAssignmentToHtml = (assignment) => {
        if (!assignment) {
            return
        }
        return (
            <div
                key={`${assignment.id} ${assignment.title}`}
                className={`${assignment.color} ${CALENDAR.assignment}`}
            >
                {moment(assignment.meetingTime).format("HH:mm")}{" "}
                {assignment.title}
            </div>
        )
    }

    let tableHtml = (
        <div className={CALENDAR.grid}>
            {WEEKDAYSCALENDAR.map((day) => {
                return (
                    <div className={CALENDAR.tableHeaderMonthView} key={day}>
                        {day}
                    </div>
                )
            })}
            {fillerStartElementsHtml}
            {days.map((day, index) => {
                let offsetDate = firstOfMonth.clone().add(index, "day")

                return (
                    <div className={CALENDAR.calendarCells} key={day}>
                        <div>{day}</div>
                        {/*// TODO Sort assignments by time*/}
                        {calendarData.map((assignment) => {
                            return convertAssignmentToHtml(
                                validAssignmentForToday(assignment, offsetDate),
                                offsetDate
                            )
                        })}
                    </div>
                )
            })}
            {fillerEndElementsHtml}
        </div>
    )

    return (
        <div>
            <div className={CALENDAR.titleRow}>
                <button
                    className={BUTTONS.calendar}
                    onClick={(e) => {
                        setMonthOffset(monthOffset - 1)
                    }}
                >
                    Vorheriger Monat
                </button>
                <div className={CALENDAR.title}>{calendarTitle}</div>
                <button
                    className={BUTTONS.calendar}
                    onClick={(e) => {
                        setMonthOffset(monthOffset + 1)
                    }}
                >
                    Nächster Monat
                </button>
            </div>
            {tableHtml}
        </div>
    )
}
