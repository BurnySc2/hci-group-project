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
import GroupInfo from "./GroupInfo"
import GroupJoinRequest from "./GroupJoinRequest"
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
            <Route path="/joingroupinformation" component={GroupInfo} />
            <Route path="/joingrouprequest" component={GroupJoinRequest} />
            <Route path="/calendarmonthview">
                <Calendar monthview />
            </Route>
            <Route path="/calendarweekview">
                <Calendar weekview />
            </Route>
            <Route path="/myprofile" component={Profile} />
        </HashRouter>
    )
}
