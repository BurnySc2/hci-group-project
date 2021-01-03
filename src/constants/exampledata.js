import moment from "moment"

export let exampleJoinedGroups = [
    {
        id: 1,
        icon: "HCI",
        title: "HCI-Gruppe",
        createdBy: "Alice",
        createdDate: moment("2020-12-15").valueOf(),
        fieldofstudy: "Informatik",
        modules: "Mensch-Computer-Interaktion",
        memberCount: "3",
        memberLimit: "4",
        members: "Alice, Bob, Doug",
        description:
            "Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",
        lastchatmessage: {
            name: "Doug",
            text: "Hallo wie gehts euch?",
            time: Date.now(),
        },
    },
    {
        id: 2,
        icon: "SWT",
        title: "Software-team",
        createdBy: "Bob",
        createdDate: moment("2020-12-10").valueOf(),
        fieldofstudy: "Informatik",
        modules: "Software-Technik",
        memberCount: "3",
        memberLimit: "5",
        members: "Bob, Alice",
        description:
            "Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",
        lastchatmessage: {
            name: "Bob",
            text: "Habt ihr schon was gemacht?",
            time: Date.now(),
        },
    },
]

export let exampleGroupData = {
    id: 1,
    icon: "HCI",
    title: "HCI-Gruppe",
    createdBy: "Alice",
    createdDate: "10.12.20",
    subjects: "Informatik, Mensch-Computer-Interaktion",
    memberCount: "3",
    memberLimit: "4",
    members: "Alice, Bob, Doug",
    description:
        "Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",
    studyprojects: [{}],
    chat: [
        {
            id: 0,
            name: "Bob",
            text: "Habt ihr schon was gemacht?",
            time: Date.now(),
        },

        {
            id: 1,
            name: "Doug",
            text: "Nee ich fange erst morgen damit an",
            time: Date.now(),
        },
        {
            id: 2,
            name: "Alice",
            text: "Ja ein bisschen",
            time: Date.now(),
        },
    ],
}

export let exampleStudyProjects = [
    {
        id: 0,
        projectname: "Abgabeblatt HCI",
        projectdescription: "Something",
        weeklymeetday: moment().weekday(),
        weeklymeetstarttime: Date.now(),
        weeklymeetendtime: Date.now() + 2 * 60 * 60 * 1000,
        deadline: moment().add(5, "days").valueOf(),
    },
]

export let exampleProfileInfo = {
    name: "Björk",
    degreecourse: "Informatik",
    semester: "5",
    connections: "Email, Discord, Teams",
    moduls: "HCI, Analysis A, Ausgewählte Kapitel des Rechts für Informatiker",
    description: "Außerdem bin ich sehr engagiert.",
    hobbies: "Meine Hobbys sind Fahrrad fahren und Kochen.",
}
export let exampleJoinGroupData = {
    id: 1,
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

export let exampleChatMessages = [
    {
        id: 1,
        name: "Paul",
        text: "Hallo wie gehts euch?",
        time: Date.now(),
    },
    {
        id: 2,
        name: "Anna",
        text: "Ja mir gehts gut und dir?",
        time: Date.now(),
    },
    {
        id: 3,
        name: "Doug",
        text: "Hallo mir geht es auch super",
        time: Date.now(),
    },
]
