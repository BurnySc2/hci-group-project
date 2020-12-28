import React from "react"

export default function GroupInfo(props) {
    let propsData
    if (!props.groupData) {
        propsData = {
            icon: "LinA",
            title: "LinA-Lerngruppe",
            createdBy: "Mike",
            createdDate: new Date(2020, 11, 15),
            subjects: ["Informatik", "Lineare Algebra"],
            memberCount: "3",
            memberLimit: "5",
            members: ["Mike", "Bob", "Doug"],
            description:
                "Meiner Lerngruppe und mir fehlen für die Abgabe noch 2 Personen. Bitte meldet euch schnell, die nächste Abgabe ist am 20.12.!",
        }
    } else {
        // TODO Get data through props.groupData
        propsData = props.groupData
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-start">
                <button className="p-2 bg-blue-300 rounded">Back</button>
            </div>
            <div className="flex flex-col m-2 p-2">
                <div className="self-center font-black">{propsData.title}</div>
                <hr />
                <div className="my-2">
                    Erstellt von: {propsData.createdBy} am{" "}
                    {propsData.createdDate.toLocaleDateString("de-DE")}
                </div>
                <div className="my-2">
                    {propsData.subjects.join(", ")}, {propsData.memberCount} /{" "}
                    {propsData.memberLimit} Mitglieder
                </div>
                <div className="my-8">{propsData.description}</div>
                <button className="flex p-2 bg-blue-200 rounded self-center">
                    Anfrage senden
                </button>
            </div>
        </div>
    )
}
