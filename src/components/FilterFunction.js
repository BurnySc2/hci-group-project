import React from "react"
import { INPUTFIELD } from "../css/classes"

export default function FilterFunction(props) {
    /*

    */

    let setFilterOption = (key, value) => {
        props.setFilterSettings({ ...props.filterSettings, [key]: value })
    }

    let inputField = (key, placeholder = "", type = "txt") => {
        return (
            <input
                className={INPUTFIELD.filterFunction}
                type={type}
                placeholder={placeholder}
                value={props.filterSettings[key]}
                onChange={(e) => setFilterOption(key, e.target.value)}
            />
        )
    }

    return (
        <div className={"flex flex-col border-2 border-black m-2 p-2"}>
            <div className={"p-1 m-1"}>Filterfunktion</div>
            {inputField("groupname", "Gruppenname")}
            {inputField("fieldofstudy", "Studiengang")}
            {inputField("modulestext", "Modul")}
            {inputField("freeslots", "Freie Plätze", "number")}
        </div>
    )
}
