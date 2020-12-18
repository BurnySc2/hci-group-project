# Overview

## Project

The project is divided into multiple react components.

The entrypoint is `src/components/Website.js`.

## Logged out

When the user is not logged in, `Login.js` and `Register.js` should be available

## Logged in

After the user logged into the website, `LoggedIn.js` is displayed, which displays the title `Title.js` at the top, below comes the navbar `NavBar.js` with the navigation and logout button on the top right.

### Groups (home screen)

While logged in, the user can navigate through existing groups and filter (`FilterFunction.js`) / sort them. Once the user clicked on a group, he gets directed to the group info screen `GroupInfo.js`. After clicking the `Anfrage senden` button, the user gets directed to the join request `GroupJoinRequest.js`.

The user can also create a new group `GroupeCreate.js` (on cancel, gets directed back to `home` screen, on group create gets directed to the new group).

### Chat (your groups and global chat)

At the top, another navigation bar of `Gruppen` and `Globaler Chat` is displayed. By default, `gruppen` is selected, where the user's groups are displayed. 

If the user clicks at the top of one of his groups, he gets redirected to an overview of study projects `StudyGroup.js`. Here he can create new study projects `StudyProjectCreate.js` which have a project name (goal), a description, when and where to meet information, and a deadline.

If the user clicks at the bottom of one of his groups, he gets redirected to the group chat: `StudyGroup.js` but with chat `Chat.js` displayed. Here he can see the chat log of the group and write new messages.

In the cog menu of the group, and overview of the group information is displayed. Only the group admin may edit the group information `GroupInfoEdit.js`.

Under `Globaler Chat` every logged in user can write messages. This is also implemented through `Chat.js`

### Calendar

Here it is possible to toggle between week-view and month-view.

All of the user's study projects of each study group he is in, will be displayed here.

### Profile

The profile `Profile.js` is displayed here. It may be editable via the cog menu `ProfileCog.js`.

In the cog menu the user can change his password, or remove his account.

# Tasks (TODO list)

## Home screen
- [ ] (simple) Fix the navbar so that the logout button is in the top right
- [ ] (simple) Add `GroupInfo.js` which displayed the study group information
- [ ] (simple) Add `GroupJoinRequest.js` which displays a submit form to be able to request to join the group
- [ ] (moderate) Add interactivity to the `GroupInfo.js` buttons to get back to the filtered groups, and on `Anfrage senden` get to the `GroupJoinRequest.js` screen
- [ ] (moderate) Connect functionality with `neue Gruppe erstellen` button
- [ ] (simple) Create `FilterFunction.js` which contains input text fields
- [ ] (moderate) Connect the filter functions with logic (e.g. when the filter text changes, also update the list of groups that match the criteria)

## Chat screen
- [ ] (simple) On chat-home screen, list the study groups the user is in, together with the last chat message
- [ ] (simple) `GroupInfoJoined.js` Group information screen: list all the study projects (scrollbar on overflow), and add a button to create a new study project 
- [ ] (simple) `StudyProjectInfo.js` display study project information. Allow the modification `StudyProjectEdit.js` and removal of the project
- [ ] (simple) `GroupCog.js` Add group information that is displayed when the cog wheel is clicked
- [ ] (moderate) Add a connection to `StudyProjectCreate` when a new project is being created. Every user is allowed to create a new project.
- [ ] (moderate) From `home` screen, add redirects when clicking on the study group or its chat
- [ ] (moderate) Display the global chat via `Chat.js` where the newest message is shown at the bottom, and a chat input field is displayed at the bottom with a `send message` button
- [ ] (simple) Under group chat, re-use `Chat.js` to display the group chat
- [ ] (difficult) Add hotkey in `Chat.js` that pressing `enter` will send the chat message
- [ ] (difficult) When sending a message, add it to the list of messages

## Calendar
- [ ] (moderate) `Calendar.js` Build the calendar using javascript datetime
- [ ] (moderate) Connect buttons to switch to previous and next month
- [ ] (moderate) Create the `Wochenansicht` calendar
- [ ] (difficult?) From given data, mark study projects in the calendar (@meet time, display the title), projects should only be in calendar after their start date, and before their deadline

## Profile
- [ ] (simple) `Profile.js` Display a user avatar(?) and user information / description.
- [ ] (simple) `ProfileCog.js` display buttons: Profil bearbeiten, PW aendern, Account loeschen
- [ ] (simple) `ProfileEdit.js` via input fields, allow the user to edit his information / description
- [ ] (moderate) On `profil bearbeiten`, redirect the user to `ProfileEdit.js`

## Logout
- [x] (simple) On log out, send the user to the login screen

## Database functionality with couchDB
### User database
- [ ] When a user registers, add him to the database of users
- [ ] When a user registers, check if the username and email are not taken
- [ ] On log in, verify username and password are correct
- [ ] When editing a profile, update the information in the database
- [ ] When removing the account, remove it from the database
### Study group database
- [ ] When a user is logged in and on `Chat` screen, grab information about his study groups
- [ ] When creating a new study group, add the group to the database
- [ ] When creating a new study project, add the project to the group
- [ ] When browsing the `Kalender`, grab all the study projects and display them
- [ ] When editing a study group, update the information in the database
- [ ] When a user is requesting to join a group, add the request to the list of requests of the group
- [ ] When a user writes a message in the group, add it to the chat log
### Global chat database
- [ ] When a user sends a message in global chat, add it to the global chat database (limit to 100 messages?)

# Installation (development)

Install node

Clone (download) the repository

Run:

`npm install`

# Building

Run:

`npm run build`

A standalone build will be created under the `build/` directory.

# CouchDB
## Install couchdb (linux)
sudo snap install couchdb

couchdb will be running from now on

## Print couchdb info (assuming curl is installed)

curl http://127.0.0.1:5984/

## Enable cors:

http://127.0.0.1:5984/_utils
under 'configuration' and modify there: enable CORS and under 'origin domains' accept requests from all domains

# Prettier (autoformatting)
Format all files with:

`npx prettier --write "**/*.js"`
