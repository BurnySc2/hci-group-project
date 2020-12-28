import React, { useState } from "react"
import NavBar from "./NavBar"
import FilterFunction from "../FilterFunction"

export default function LoggedIn(props) {
    // Zustand auf der website: wo man sich befindet
    // One of: groups, chat, calendar, profile
    let [display, setDisplay] = useState("groups")

    let navBarClick = (buttonName) => {
        setDisplay(buttonName)
    }

    let groups = [
        {
            icon: "HCI",
            title: "HCI-Gruppe",
            createdBy: "Alice",
            createdDate: "10.12.20",
            subjects: "Informatik, Mensch-Computer-Interaktion",
            memberCount: "3",
            memberLimit: "4",
            members: "Alice, Bob, Doug",
            description:
                "Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",
        },
        {
            icon: "SWT",
            title: "Software-team",
            createdBy: "Bob",
            createdDate: "10.12.20",
            subjects: "Informatik, Mensch-Computer-Interaktion",
            memberCount: "3",
            memberLimit: "4",
            members: "Bob, Alice",
            description:
                "Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",
        },
    ]

    let htmlGroups = groups.map((group, index) => {
        return (
            <div
                key={`${group.icon}${group.title}`}
                className="flex flex-col m-4"
            >
                <div className="flex flex-row">
                    {group.icon} {group.title} erstell von {group.createdBy} am{" "}
                    {group.createdDate}
                </div>
                <div>
                    {group.subjects}, {group.memberCount}/{group.memberLimit}{" "}
                    Mitglieder
                </div>
                <div>{group.members}</div>
                <div>{group.description}</div>
            </div>
        )
    })

    let subPage = <div />
    if (display === "groups") {
        subPage = (
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <button>Gruppe erstellen</button>
                    <FilterFunction />
                    <button>Suchen</button>
                </div>
                <div>{htmlGroups}</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <NavBar navBarClick={navBarClick} logOutClick={props.logOutClick} />
            {subPage}
        </div>
    )
}
