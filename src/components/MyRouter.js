import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"
import Website from "./Website"
import Login from "./loggedout/Login"
import Register from "./loggedout/Register"
import "../css/tailwind.css"
import GroupCreate from "./GroupCreate"
import StudyProjectCreate from "./StudyProjectCreate"
import Chat from "./Chat"
import Calendar from "./loggedin/calendar/Calendar"
import Profile from "./Profile";

export default function MyRouter(props) {
    return (
        <Router>
            {/*This route is the main route of the website*/}
            <Route path="/" exact component={Website} />
            {/*The following routes are just developer routes, not available for the user*/}
            <Route path="/admin">
                <div className="flex flex-col gap-2 m-4">
                    <Link to="/">Normal study project website</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/mygroups">Meine Gruppen</Link>
                    <Link to="/oneofmygroups">
                        Eine meiner Gruppen mit Chat
                    </Link>
                    <Link to="/chat">Nur Chat</Link>
                    <Link to="/createstudygroup">
                        Study group - Gruppe erstellen
                    </Link>
                    <Link to="/createstudyproject">
                        Study project erstellen
                    </Link>
                    <Link to="/joingroupinformation">Gruppe information</Link>
                    <Link to="/joingrouprequest">Gruppe Anfrage senden</Link>
                    <Link to="/calendarmonthview">
                        Kalender - Monatsansicht
                    </Link>
                    <Link to="/calendarweekview">Kalender - Wochenansicht</Link>
                    <Link to="/myprofile">Eigenes Profil</Link>
                </div>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/mygroups" component={Register} />
            <Route path="/oneofmygroups" component={Register} />
            <Route path="/chat" component={Chat} />
            <Route path="/createstudygroup" component={GroupCreate} />
            <Route path="/createstudyproject" component={StudyProjectCreate} />
            <Route path="/joingroupinformation" component={Register} />
            <Route path="/joingrouprequest" component={Register} />
            <Route path="/calendarmonthview" component={Calendar} />
            <Route path="/calendarweekview" component={Calendar} />
            <Route path="/myprofile" component={Profile} />
        </Router>
    )
}
