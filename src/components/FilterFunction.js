import React from "react"

export default function FilterFunction(props) {
    /*

    */

    let setFilterOption = (key, value) => {
        props.setFilterSettings({ ...props.filterSettings, [key]: value })
    }

    let inputField = (key, placeholder = "", type = "txt") => {
        return (
            <input
                className={"border-2 border-black p-1 m-1"}
                type={type}
                placeholder={placeholder}
                value={props.filterSettings[key]}
                onChange={(e) => setFilterOption(key, e.target.value)}
            />
        )
    }

    return (
        <div className={"flex flex-col border-2 border-black m-1 p-1"}>
            <div className={"p-1 m-1"}>Filterfunktion</div>
            {inputField("groupname", "Gruppenname")}
            {inputField("fieldofstudy", "Studiengang")}
            {inputField("modulestext", "Modul")}
            {inputField("freeslots", "Freie Plätze", "number")}
        </div>
    )
}
