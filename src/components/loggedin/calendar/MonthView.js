import React, { useState } from "react"
import moment, {months} from "moment"

export default function MonthView(props) {
    let [monthOffset, setMonthOffset] = useState(0)

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

    let now = new Date()
    // console.log(moment().endOf("month").format("DD MM YYYY"))
    // console.log(now.getDay())
    let MonthTitle = [[], [], [], [], [], [], []]
    let startOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay() + 1 + 7 + 4 * monthOffset
    )
    let oneMonth = 4 * 7 * 24 * 60 * 60 * 1000
    let days = []
    let currentDate = moment().format('LL')

    for (let i = 1; i <= 30; i++) {
        days.push(i)
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-6 px-6">
                <button
                    className="rounded p-2 hover:bg-blue-200 bg-blue-300"
                    onClick={(e) => {
                        setMonthOffset(monthOffset - 1)
                    }}
                >
                    Vorheriger Monat
                </button>
                <div>
                    {currentDate}
                </div>
                <button
                    className="rounded p-2 hover:bg-blue-200 bg-blue-300"
                    onClick={(e) => {
                        setMonthOffset(monthOffset + 1)
                    }}
                >
                    Nächster Monat
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
                            className="text-center border-b-4 border-blue-200 py-4"
                        >
                            {value}
                        </div>
                    )
                })}
                {/* Table body*/}
                {days.map((day, index) => {
                        return (
                            <div key = {`${day.toString()} ${index}`}>
                                {days.map((dayElement) => {
                                    return (
                                        <div key={dayElement}
                                             className="grid grid-template-columns:repeat(7, 1fr) grid-rows:repeat (5, 1fr)">
                                        </div>
                                    )
                                }
                            </div>
                        )}

                {/*TODO read data*/}

                {MonthTitle.map((month, index) => {
                    return (
                        <div key={`${month.toString()} ${index}`}>
                            {month.map((htmlElement) => {
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
