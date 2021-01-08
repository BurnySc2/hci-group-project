import React, { useState } from "react"

export default function WeekView(props) {
    let [weekOffset, setWeekOffset] = useState(0)

    let exampleData = [
        {
            title: "HCI Assignment1",
            color: "bg-red-300",
            // 0-6, Here: saturday
            meetingDay: 5,
            // 14:30
            meetingTime: new Date(0, 0, 0, 14, 30),
            startdate: new Date(2020, 11, 1),
            deadline: new Date(2021, 0, 4),
        },
        {
            title: "HCI Assignment2",
            color: "bg-red-500",
            // 0-6, Here: saturday
            meetingDay: 3,
            // 12:00
            meetingTime: new Date(0, 0, 0, 12, 0),
            startdate: new Date(2020, 11, 25),
            deadline: new Date(2021, 1, 4),
        },
    ]

    let weekTitles = [[], [], [], [], [], [], []]
    let now = new Date()
    let startOfWeek = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay() + 1 + 7 * weekOffset
    )
    let oneWeek = 7 * 24 * 60 * 60 * 1000
    // let endOfWeek = new Date(startOfWeek.getTime() + oneWeek)

    for (let i = 0; i < exampleData.length; i++) {
        let meeting = exampleData[i]
        let meetingTimeThisWeek = new Date(
            startOfWeek.getFullYear(),
            startOfWeek.getMonth(),
            startOfWeek.getDate() + meeting.meetingDay,
            meeting.meetingTime.getHours(),
            meeting.meetingTime.getMinutes()
        )

        if (
            meeting.startdate.getTime() < meetingTimeThisWeek.getTime() &&
            meetingTimeThisWeek.getTime() < meeting.deadline.getTime()
        ) {
            let displayString = `${meeting.meetingTime.toLocaleTimeString(
                "de-DE",
                { timeStyle: "short" }
            )} ${meeting.title}`
            let displayHtml = (
                <div className={meeting.color}>{displayString}</div>
            )
            weekTitles[meeting.meetingDay].push(displayHtml)
            // Inserts a title like the following:
            // let weekTitles = [[], [], [], [], [], ["Abgabeblatt"], []]
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
            <div className="flex flex-row justify-between m-6 px-6">
                <button
                    className="rounded p-2 hover:bg-blue-200 bg-blue-300"
                    onClick={(e) => {
                        setWeekOffset(weekOffset - 1)
                    }}
                >
                    Vorherige Woche
                </button>
                <div>
                    KW {calendarWeek} {monthOfCalendarWeek} {yearOfCalendarWeek}
                </div>
                <button
                    className="rounded p-2 hover:bg-blue-200 bg-blue-300"
                    onClick={(e) => {
                        setWeekOffset(weekOffset + 1)
                    }}
                >
                    Nächste Woche
                </button>
            </div>

            <div className="grid grid-cols-7 border-4 border-black m-6">
                {/*Table header*/}
                {[
                    "Montag",
                    "Dienstag",
                    "Mittwoch",
                    "Donnerstag",
                    "Freitag",
                    "Samstag",
                    "Sonntag",
                ].map((value) => {
                    return (
                        <div
                            key={value}
                            className="grid-cols-7 border-b-4 border-blue-200 py-4"
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
                                    <div
                                        key={htmlElement}
                                        className="h-64 text-center"
                                    >
                                        <div className="my-2">
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
