import React from "react"

export default function GroupJoinRequest(props) {
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
        <div className="flex flex-col m-4 gap-2">
            <div className="flex flex-row m-2 justify-center">
                <div className="mx-1">Anfrage an </div>
                <div className="underline mx-1">{propsData.title}</div>
            </div>
            <div className="flex flex-row m-2 justify-center">
                <div className="p-2">an</div>
                <div className="border border-black border-2 border-rounded rounded py-1 justify px-6 self-center">
                    {propsData.createdBy}
                </div>
            </div>
            <textarea
                className="border border-2 border-black h-64 p-2 m-2  rounded"
                placeholder="Anfrage formulieren (Zeichenbegrenzung: 500)"
            />
            <div className={"flex flex-row justify-between m-4"}>
                <button className="p-4 bg-blue-300 rounded">Senden</button>
                <button className="p-4 bg-blue-300 rounded">Zurück</button>
            </div>
        </div>
    )
}
