import React from "react"
import profilePic from "../BSP_PB.png"

export default function Profile(props) {
    // TODO able to upload profile picture
    // list username
    // studiengang, semester
    // kontaktinformation
    // biografie, interessen

    // funktionen:
    // profil bearbeiten
    // benachrichtigung
    // pw aendern / vergessen
    // account loeschen

    let profileInfo = {
        name: "Björk",
        degreecourse: "Informatik",
        semester: "5",
        connections: "Email, Discord, Teams",
        moduls:
            "HCI, Analysis A, Ausgewählte Kapitel des Rechts für Informatiker",
        description: "Außerdem bin ich sehr engagiert.",
        hobbies: "Meine Hobbys sind Fahrrad fahren und Kochen.",
    }
    //let profilePic = {}
    let mycss = "m-auto"
    let containercss = "flex flex-col"
    return (
        <div className={containercss}>
            <div className="one-fourth" id="html">
                <img src={profilePic} alt="Profile pic" />
            </div>

            <div className={mycss}>Name: {profileInfo.name}</div>
            <div className={mycss}>
                {profileInfo.degreecourse}, {profileInfo.semester}. Semester
            </div>
            <div className={mycss}>
                Erreichbar unter: {profileInfo.connections}
            </div>

            {/*TODOZeilenumbruch einfügen*/}
            <div className={mycss}>
                Ich belege dieses Semester folgende Module:
                {profileInfo.moduls}
            </div>
            <div className={mycss}>{profileInfo.description}</div>
            <div className={mycss}>{profileInfo.hobbies}</div>
        </div>
    )
}
