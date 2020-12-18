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
