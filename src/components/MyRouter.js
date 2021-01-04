import React, { useState } from "react"
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
import ProfileEdit from "./ProfileEdit"
import "../css/tailwind.css"
import GroupInfoJoined from "./GroupInfoJoined"
import LoggedIn from "./loggedin/LoggedIn"
import StudyProjectInfo from "./StudyProjectInfo"
import FilterFunction from "./FilterFunction"
import { exampleJoinedGroups } from "../constants/exampledata"
import GroupInfoPreview from "./GroupInfoPreview"
import { applyGroupFilter, defaultFilter } from "../constants/constants"

export default function MyRouter(props) {
    let [filterSettings, setFilterSettings] = useState(defaultFilter)
    return (
        <HashRouter>
            {/*This route is the main route of the website*/}
            <Route exact path="/" component={Website} />
            {/*The following routes are just developer routes, not available for the user*/}
            <Route path="/admin" component={AdminPanel} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/mygroups" component={LoggedIn} />
            <Route path="/groupinfojoined" component={GroupInfoJoined} />
            <Route path="/groupsearch">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <FilterFunction
                            filterSettings={filterSettings}
                            setFilterSettings={setFilterSettings}
                        />
                    </div>
                    <div>
                        {exampleJoinedGroups
                            .filter((group) => {
                                return applyGroupFilter(group, filterSettings)
                            })
                            .map((group) => (
                                <GroupInfoPreview
                                    key={group.id}
                                    group={group}
                                />
                            ))}
                    </div>
                </div>
            </Route>
            <Route path="/chat" component={Chat} />
            <Route path="/createstudygroup" component={GroupCreate} />
            <Route path="/createstudyproject" component={StudyProjectCreate} />
            <Route path="/studyprojectinfo" component={StudyProjectInfo} />
            <Route path="/joingroupinformation" component={GroupInfo} />
            <Route path="/joingrouprequest" component={GroupJoinRequest} />
            <Route path="/calendarmonthview" component={Calendar} />
            <Route path="/calendarweekview">
                <Calendar weekview />
            </Route>
            <Route path="/myprofile" component={Profile} />
            <Route path="/profileedit" component={ProfileEdit} />
        </HashRouter>
    )
}
