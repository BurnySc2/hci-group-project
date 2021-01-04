import React from "react"
import { Link } from "react-router-dom"

export default function AdminPanel(props) {
    return (
        <div className="flex flex-col gap-2 m-4">
            <Link to="/">Normal study project website</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/mygroups">Meine Gruppen</Link>
            <Link to="/groupinfojoined">Eine meiner Gruppen mit Chat</Link>
            <Link to="/groupsearch">Gruppensuche</Link>
            <Link to="/chat">Nur Chat</Link>
            <Link to="/createstudygroup">Study group - Gruppe erstellen</Link>
            <Link to="/createstudyproject">Study project erstellen</Link>
            <Link to="/studyprojectinfo">Study project info</Link>
            <Link to="/joingroupinformation">Gruppe information</Link>
            <Link to="/joingrouprequest">Gruppe Anfrage senden</Link>
            <Link to="/calendarmonthview">Kalender - Monatsansicht</Link>
            <Link to="/calendarweekview">Kalender - Wochenansicht</Link>
            <Link to="/myprofile">Eigenes Profil</Link>
            <Link to="/profileedit">Eigenes Profil editieren</Link>
        </div>
    )
}
