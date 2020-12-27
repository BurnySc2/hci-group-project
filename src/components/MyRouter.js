import React from "react"
import { Route, HashRouter } from "react-router-dom"
import Website from "./Website"
import Login from "./loggedout/Login"
import Register from "./loggedout/Register"
import GroupCreate from "./GroupCreate"
import StudyProjectCreate from "./StudyProjectCreate"
import Chat from "./Chat"
import Calendar from "./loggedin/calendar/Calendar"
import Profile from "./Profile"
import AdminPanel from "./AdminPanel"
import "../css/tailwind.css"

export default function MyRouter(props) {
    return (
        <HashRouter>
            {/*This route is the main route of the website*/}
            <Route exact path="/" component={Website} />
            {/*The following routes are just developer routes, not available for the user*/}
            <Route path="/admin" component={AdminPanel} />
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
        </HashRouter>
    )
}
