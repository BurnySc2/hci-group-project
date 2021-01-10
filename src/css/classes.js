export let LOGINCLASSES = {
    // Login and registration
    background:
        "flex flex-col self-center bg-gray-200 p-2 border-4 border-black rounded",
    row: "flex flex-row w-128 items-center",
    headbar: "flex flex-row justify-evenly my-4",
    highlightedBox: "bg-gray-500 flex-grow rounded",
    notHighlightedBox: "hover:bg-yellow-400 flex-grow rounded",
    label: "w-32 m-2",
    inputBox: "w-32 border-2 border-black rounded m-2",
    button: "my-4 mx-2 p-2 border-2 border-black rounded hover:bg-yellow-400",
}

export let GROUPCREATE = {
    background:
        "flex flex-col bg-gray-200 m-2 p-2 border-4 border-black rounded",
    grid: "justify-self-auto  grid grid-cols-2",
    titleBar: "self-center font-black",
    col: "flex flex-col justify-between",
    row: "flex flex-row items-center justify-between",
    label: "m-2 flex-grow",
    inputBox: "m-2 border-2 border-black rounded flex-grow",
    textArea: "m-2 border-2 border-black rounded flex-grow",
    acceptButton: "m-2 p-2 border-2 border-black rounded hover:bg-green-400",
    cancelButton: "m-2 p-2 border-2 border-black rounded hover:bg-red-400",
}

export let STUDYPROJECTCREATE = {
    background: "flex flex-col bg-gray-200 p-2 border-4 border-black rounded",
    grid: "justify-self-auto grid grid-cols-2",
    titleBar: "self-center font-black",
    // TODO Left align? right align?
    col: "flex flex-col justify-between",
    row: "flex flex-row items-center justify-between",
    label: "m-2",
    inputBox: "m-2 border-2 border-black rounded",
    textArea: "h-min-64 m-2 border-2 border-black rounded",
    acceptButton: "m-2 p-2 border-2 border-black rounded hover:bg-green-400",
    cancelButton: "m-2 p-2 border-2 border-black rounded hover:bg-red-400",
}

export let NAVBAR = {
    total: "flex flex-row justify-between bg-gray-200 w-128",
    leftSide: "flex flex-row bg-blue-100",
    rightSide: "flex flex-row",
    button: "px-4 py-2 mx-2 my-1 font-black",
}

export let CALENDAR = {
    titleRow: "flex flex-row justify-between m-6 px-6",
    title: "m-auto",
    grid: "grid grid-cols-7 m-6",
    gridWeekView: "grid grid-cols-7 border-4 border-black m-6",
    tableHeaderMonthView: "text-center",
    tableHeaderWeekView: "border-b-4 border-blue-200 py-2 text-center",
    filler: "border-2 border-black",
    calendarCells: "flex flex-col border-2 border-black",
    assignment: "text-center py-1",
}

export let SECTIONS = {
    // Home
    homeGroupDisplaySection: "", //"m-auto",
    // Groupfinder
    groupFinderSection: "",
    // Chat
    // Calendar
    // Profile
}

export let BUTTONS = {
    // ALl other buttons
    acceptButton: "m-2 p-2 border-2 border-black rounded hover:bg-green-400",
    declineButton: "m-2 p-2 border-2 border-black rounded hover:bg-red-400",
    backButton: "m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",
    editButton: "m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",
    // Calendar
    calendar: "rounded p-2 hover:bg-blue-200 bg-blue-300",
    calendarSwapButton:
        "self-start m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",
    // Navbar
    navbarButton: "mx-2 my-1 px-2 py-1 rounded hover:bg-yellow-400",
    logoutButton: "mx-2 my-1 px-2 py-1 rounded hover:bg-red-400",
    // Register and login
    highlightedBox: "bg-gray-500 flex-grow rounded",
    notHighlightedBox: "hover:bg-yellow-400 flex-grow rounded",
}

export let INPUTFIELD = {
    filterFunction: "border-2 border-black p-1 m-1",
    chat: "self-start w-full p-2 m-2",
    profileEdit: "border-2",
    groupCreate: "m-2 border-2 border-black rounded",
    studyProjectCreate: "m-2 border-2 border-black rounded",
}
