import React, { useState } from "react"
import moment from "moment"

export default function MonthView(props) {
    let [monthOffset, setMonthOffset] = useState(0)

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
                    {/*TODO get month view "month" and "year"*/}
                    {"Dezember"} {"2020"}
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
                {[]}
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
