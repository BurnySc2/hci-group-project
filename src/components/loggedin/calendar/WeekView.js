import React, { useState } from "react"
import { exampleCalendarData } from "../../../constants/exampledata"
import moment from "moment"
import { BUTTONS, CALENDAR } from "../../../css/classes"
import { WEEKDAYSCALENDAR } from "../../../constants/constants"

export default function WeekView(props) {
    let [weekOffset, setWeekOffset] = useState(0)

    let exampleData = exampleCalendarData

    let weekTitles = [[], [], [], [], [], [], []]
    let now = new Date()
    let startOfWeek = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay() + 1 + 7 * weekOffset
    )
    let startOfWeekMoment = moment(startOfWeek)
    let oneWeek = 7 * 24 * 60 * 60 * 1000

    for (let i = 0; i < exampleData.length; i++) {
        let meeting = exampleData[i]
        let meetingMoment = moment(meeting.meetingTime)
        let meetingTimeThisWeek = moment(
            `${startOfWeekMoment.format("YYYY-MM-DD")} ${meetingMoment.format(
                "HH:mm"
            )}`
        )
        if (
            meeting.startdate < meetingTimeThisWeek.valueOf() &&
            meetingTimeThisWeek.valueOf() < meeting.deadline
        ) {
            let displayString = `${meetingTimeThisWeek.format("HH:mm")} ${
                meeting.title
            }`
            let displayHtml = (
                <div className={meeting.color}>{displayString}</div>
            )
            // Inserts a title like the following:
            // let weekTitles = [[], [], [], [], [], ["Abgabeblatt"], []]
            weekTitles[meeting.meetingDay].push(displayHtml)
        }
    }

    // Calculating calendar week, month name, year
    let startOfYear = new Date(startOfWeek.getFullYear(), 0, 1)
    let firstMondayOfYear = new Date(
        startOfYear.getFullYear(),
        0,
        ((7 - startOfYear.getDay() + 1) % 7) + 1
    )
    let calendarWeek = Math.round(
        (startOfWeek.getTime() - firstMondayOfYear.getTime()) / oneWeek + 1
    )
    // https://stackoverflow.com/a/18648314
    let monthOfCalendarWeek = startOfWeek.toLocaleString("de-DE", {
        month: "long",
    })
    let yearOfCalendarWeek = startOfWeek.getFullYear()

    return (
        <div>
            <div className={CALENDAR.titleRow}>
                <button
                    className={BUTTONS.calendar}
                    onClick={(e) => {
                        setWeekOffset(weekOffset - 1)
                    }}
                >
                    Vorherige Woche
                </button>
                <div className={CALENDAR.title}>
                    KW {calendarWeek} {monthOfCalendarWeek} {yearOfCalendarWeek}
                </div>
                <button
                    className={BUTTONS.calendar}
                    onClick={(e) => {
                        setWeekOffset(weekOffset + 1)
                    }}
                >
                    Nächste Woche
                </button>
            </div>

            <div className={CALENDAR.gridWeekView}>
                {/*Table header*/}
                {WEEKDAYSCALENDAR.map((value) => {
                    return (
                        <div
                            key={value}
                            className={CALENDAR.tableHeaderWeekView}
                        >
                            {value}
                        </div>
                    )
                })}
                {/*TODO read data*/}

                {weekTitles.map((week, index) => {
                    return (
                        <div key={`${week.toString()} ${index}`}>
                            {week.map((htmlElement) => {
                                return (
                                    <div key={htmlElement}>
                                        <div className={CALENDAR.assignment}>
                                            {htmlElement}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
