(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(4),i=a(1),m=a(6),s=a(3),u="flex flex-col self-center bg-gray-200 p-2 border-4 border-black rounded",d="flex flex-row w-128 items-center",f="flex flex-row justify-evenly my-4",p="w-32 m-2",b="w-32 border-2 border-black rounded m-2",g="flex flex-col bg-gray-200 m-2 p-2 border-4 border-black rounded",E="justify-self-auto  grid grid-cols-2",v="self-center font-black",h="flex flex-row items-center justify-between",y="m-2 flex-grow",N="flex flex-col bg-gray-200 p-2 border-4 border-black rounded",x="justify-self-auto grid grid-cols-2",w="self-center font-black",j="flex flex-row items-center justify-between",k="m-2",C="m-2 border-2 border-black rounded",D="h-min-64 m-2 border-2 border-black rounded",O="flex flex-row justify-between bg-gray-200 w-128",S="flex flex-row rounded",H="flex flex-row",M="flex flex-row justify-between m-6 px-6",P="m-auto",A="grid grid-cols-7 m-6",B="grid grid-cols-7 border-4 border-black m-6",I="text-center",G="border-b-4 border-blue-200 py-2 text-center",L="border-2 border-black",Y="flex flex-col border-2 border-black",T="text-center py-1",R="",W="m-2 p-2 border-2 border-black rounded hover:bg-green-400",F="m-2 p-2 border-2 border-black rounded hover:bg-red-400",V="m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",q="m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",J="rounded p-2 hover:bg-blue-200 bg-blue-300",K="self-start m-2 p-2 border-2 border-black rounded hover:bg-yellow-400",U="mx-2 my-1 px-2 py-1 rounded hover:bg-yellow-400",z="mx-2 my-1 px-2 py-1 rounded hover:bg-red-600",Z="bg-gray-500 flex-grow rounded",Q="hover:bg-yellow-400 flex-grow rounded",X="border-2 border-black p-1 m-1",$="self-start w-full p-2 m-2",_="border-2",ee="m-2 border-2 border-black rounded";function te(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),s=m[0],g=m[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),h=v[0],y=v[1];return r.a.createElement("div",{className:u},r.a.createElement("div",{className:f},r.a.createElement("button",{className:Z},"Login"),r.a.createElement("button",{className:Q,onClick:function(){return e.setShow("register")}},"Register")),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Username"),r.a.createElement("input",{className:b,placeholder:"Username",onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Password"),r.a.createElement("input",{className:b,placeholder:"Password",type:"password",onChange:function(e){g(e.target.value)}})),r.a.createElement("button",{className:W,onClick:function(){y("You have clicked the 'login' button! No functionality is implemented yet :("),e.login(c,s)}},"Login"),r.a.createElement("div",null,h))}function ae(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),s=m[0],g=m[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),h=v[0],y=v[1],N=Object(n.useState)(""),x=Object(i.a)(N,2),w=x[0],j=x[1],k=Object(n.useState)(""),C=Object(i.a)(k,2),D=C[0],O=C[1];return r.a.createElement("div",{className:u},r.a.createElement("div",{className:f},r.a.createElement("button",{className:Q,onClick:function(){return e.setShow("login")}},"Login"),r.a.createElement("button",{className:Z},"Register")),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Username"),r.a.createElement("input",{className:b,placeholder:"Username",onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Email"),r.a.createElement("input",{className:b,placeholder:"Email",type:"email",onChange:function(e){g(e.target.value)}})),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Password"),r.a.createElement("input",{className:b,placeholder:"Password",type:"password",onChange:function(e){y(e.target.value)}})),r.a.createElement("div",{className:d},r.a.createElement("div",{className:p},"Repeat Password"),r.a.createElement("input",{className:b,placeholder:"Repeat password",type:"password",onChange:function(e){j(e.target.value)}})),r.a.createElement("button",{className:W,onClick:function(){return function(){var t="";t=""!==s?"Your account '".concat(c,"' has been created. An verification email to '").concat(s,"' has been sent! You may log in now."):"You left the email field empty! Account could not be created.",O(t),console.assert(h===w,"Password and password repeat are not the same!"),e.register(c,s,h)}()}},"Register"),r.a.createElement("div",null,D))}function ne(e){return r.a.createElement("div",{className:O,style:{"background-image":"linear-gradient(to left, rgba(0,0,150,1), rgba(0,0,150,0))"}},r.a.createElement("div",{className:S},r.a.createElement("button",{className:"".concat(U," bg-orange-300"),onClick:function(){e.navBarClick("home")}},"Home"),r.a.createElement("button",{className:"".concat(U," bg-red-300"),onClick:function(){e.navBarClick("groupsearch")}},"Gruppensuche"),r.a.createElement("button",{className:"".concat(U," bg-purple-300"),onClick:function(){e.navBarClick("chat")}},"Chat"),r.a.createElement("button",{className:"".concat(U," bg-blue-300"),onClick:function(){e.navBarClick("calendar")}},"Kalender"),r.a.createElement("button",{className:"".concat(U," bg-teal-300"),onClick:function(){e.navBarClick("profile")}},"Profil")),r.a.createElement("div",{className:H},r.a.createElement("button",{className:"".concat(z," bg-pink-100"),onClick:function(){e.logOutClick()}},"Logout")))}var re=a(10);function ce(e){var t=function(t,a){e.setFilterSettings(Object(o.a)(Object(o.a)({},e.filterSettings),{},Object(re.a)({},t,a)))},a=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"txt";return r.a.createElement("input",{className:X,type:c,placeholder:n,value:e.filterSettings[a],onChange:function(e){return t(a,e.target.value)}})};return r.a.createElement("div",{className:"flex flex-col border-2 border-black m-2 p-2"},r.a.createElement("div",{className:"p-1 m-1"},"Filterfunktion"),a("groupname","Gruppenname"),a("fieldofstudy","Studiengang"),a("modulestext","Modul"),a("freeslots","Freie Pl\xe4tze","number"))}function le(e){var t=e.messageByMe?"self-end":"self-start",a=e.messageByMe?"mir":e.data.name,n=e.displayAsRow?"flex flex-row":"flex flex-col",c=e.messageColour?e.messageColour:"";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"".concat(t," ").concat(c," font-black mx-1")},e.data.text),r.a.createElement("div",{className:"".concat(t," font-light mx-1")},"von ".concat(a," um ").concat(new Date(e.data.time).toLocaleTimeString("de")," Uhr")))}function oe(e){return r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",null,r.a.createElement("div",{className:"border-2 border-black p-2 w-16 text-center font-black"},e.groupinfo.icon)),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"mx-1 self-start"},e.groupinfo.title),r.a.createElement(le,{data:e.groupinfo.lastchatmessage,messageColour:"text-red-500",displayAsRow:!0})))}var ie=a(2),me=a.n(ie),se=[{id:1,icon:"HCI",title:"HCI-Gruppe",createdBy:"Alice",createdDate:me()("2020-12-15").valueOf(),fieldofstudy:"Informatik",modules:"Mensch-Computer-Interaktion",memberCount:"3",memberLimit:"4",members:["Alice","Bob","Doug"],description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",lastchatmessage:{name:"Doug",text:"Hallo wie gehts euch?",time:Date.now()}},{id:2,icon:"SWT",title:"Software-team",createdBy:"Bob",createdDate:me()("2020-12-10").valueOf(),fieldofstudy:"Informatik",modules:"Software-Technik",memberCount:"3",memberLimit:"5",members:["Bob","Alice"],description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",lastchatmessage:{name:"Bob",text:"Habt ihr schon was gemacht?",time:Date.now()}}],ue={id:1,icon:"HCI",title:"HCI-Gruppe",createdBy:"Alice",createdDate:"10.12.20",subjects:"Informatik, Mensch-Computer-Interaktion",memberCount:"3",memberLimit:"4",members:"Alice, Bob, Doug",description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",studyprojects:[{}],chat:[{id:0,name:"Bob",text:"Habt ihr schon was gemacht?",time:Date.now()},{id:1,name:"Doug",text:"Nee ich fange erst morgen damit an",time:Date.now()},{id:2,name:"Alice",text:"Ja ein bisschen",time:Date.now()}]},de=[{id:1,projectname:"Abgabeblatt HCI",projectdescription:"Something",weeklymeetday:me()().weekday(),weeklymeetstarttime:Date.now(),weeklymeetendtime:Date.now()+72e5,deadline:me()().add(5,"days").valueOf()}],fe={profilePicLink:"https://i.imgur.com/9BiQit3.png",name:"Bj\xf6rk",degreecourse:"Informatik",semester:"5",connections:"Email, Discord, Teams",moduls:"HCI, Analysis A, Ausgew\xe4hlte Kapitel des Rechts f\xfcr Informatiker",description:"Au\xdferdem bin ich sehr engagiert.",hobbies:"Meine Hobbys sind Fahrrad fahren und Kochen."},pe={id:1,icon:"LinA",title:"LinA-Lerngruppe",createdBy:"Mike",createdDate:new Date(2020,11,15),subjects:["Informatik","Lineare Algebra"],memberCount:"3",memberLimit:"5",members:["Mike","Bob","Doug"],description:"Meiner Lerngruppe und mir fehlen f\xfcr die Abgabe noch 2 Personen. Bitte meldet euch schnell, die n\xe4chste Abgabe ist am 20.12.!"},be=[{id:1,name:"Paul",text:"Hallo wie gehts euch?",time:Date.now()},{id:2,name:"Anna",text:"Ja mir gehts gut und dir?",time:Date.now()},{id:3,name:"Doug",text:"Hallo mir geht es auch super",time:Date.now()}],ge=[{id:1,title:"HCI Assignment1",color:"bg-red-300",meetingDay:5,meetingTime:new Date(0,0,0,14,30).getTime(),startdate:new Date(2020,11,1).getTime(),deadline:new Date(2021,0,4).getTime()},{id:2,title:"HCI Assignment2",color:"bg-red-500",meetingDay:3,meetingTime:new Date(0,0,0,12,0).getTime(),startdate:new Date(2020,11,25).getTime(),deadline:new Date(2021,1,4).getTime()}];function Ee(e){var t=Object(n.useState)({title:"",fieldofstudy:"Informatik",modules:"",description:"",memberLimit:""}),a=Object(i.a)(t,2),c=a[0],l=a[1];console.log(c);Object(n.useEffect)((function(){l((e.groupid,se[0]))}),[e.groupid]);var m=function(e,t){l(Object(o.a)(Object(o.a)({},c),{},Object(re.a)({},e,t)))},s=e.edit?"hidden":"",u=e.edit?"":"hidden";return r.a.createElement("div",{className:g},r.a.createElement("div",{className:v},"Create New Study Group"),r.a.createElement("div",{className:E},r.a.createElement("div",{className:y},"Group Name"),r.a.createElement("input",{className:ee,value:c.title,onChange:function(e){return m("groupname",e.target.value)}}),r.a.createElement("div",{className:y},"Field of Study"),r.a.createElement("select",{className:ee,name:"studienfach",id:"studienfach",value:c.fieldofstudy,onChange:function(e){m("fieldofstudy",e.target.value)}},r.a.createElement("option",{value:"Informatik"},"Computer Science"),r.a.createElement("option",{value:"Mathematik"},"Maths"),r.a.createElement("option",{value:"Physik"},"Physics"),r.a.createElement("option",{value:"Chemie"},"Chemistry"),r.a.createElement("option",{value:"Biologie"},"Biology")),r.a.createElement("div",{className:y},"Modules"),r.a.createElement("textarea",{className:ee,style:{minHeight:"5rem"},placeholder:"HCI, Etech, Programmieren 2",value:c.modules,onChange:function(e){return m("modulestext",e.target.value)}}),r.a.createElement("div",{className:y},"Group Description"),r.a.createElement("textarea",{className:ee,style:{minHeight:"5rem"},placeholder:"We are looking for more Computer Science students who want to study for the HCI exam.",value:c.description,onChange:function(e){return m("groupdescription",e.target.value)}}),r.a.createElement("div",{className:y},"Members Limit"),r.a.createElement("input",{type:"number",min:"1",max:"1000",value:c.memberLimit,className:ee,onChange:function(e){return m("memberslimit",e.target.value)}})),r.a.createElement("div",{className:h},r.a.createElement("button",{className:"".concat(W," ").concat(s),onClick:function(t){e.setHomeDisplay(void 0)}},"Create New Group"),r.a.createElement("button",{className:"".concat(W," ").concat(u),onClick:function(t){e.groupid,e.setHomeDisplay(void 0)}},"Apply changes"),r.a.createElement("button",{className:F,onClick:function(t){e.edit?e.setHomeDisplay("mygroup"):e.setHomeDisplay(void 0)}},"Cancel")))}var ve=a(28);function he(e){var t=Object(n.useState)("Doug"),a=Object(i.a)(t,1)[0],c=Object(n.useState)(void 0!==e.chatMessages?e.chatMessages:be),l=Object(i.a)(c,2),o=l[0],m=l[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),d=u[0],f=u[1],p=o.map((function(e){return r.a.createElement(le,{key:e.id,data:e,messageByMe:e.name===a})})),b=void 0;return void 0!==e.displayChatInput&&!0!==e.displayChatInput||(b=r.a.createElement("div",{className:"flex flex-row bg-blue-100"},r.a.createElement("input",{className:$,type:"text",placeholder:"Message",value:d,onChange:function(e){f(e.target.value)}}),r.a.createElement("button",{className:W,onClick:function(e){!function(e,t){var a=ve(o);a.push({id:Date.now(),name:e,text:t,time:Date.now()}),m(a),f("")}(a,d)}},"Send"))),r.a.createElement("div",{className:"m-2"},r.a.createElement("div",{className:"flex flex-col bg-blue-200"},p),b)}function ye(e){var t=e.projectData;return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"self-start"},t.projectname),r.a.createElement("div",{className:"self-end"},"due ",me()(t.deadline).fromNow()))}var Ne=Object(n.createContext)({}),xe={username:null},we=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],je=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],ke={groupname:"",fieldofstudy:"",modulestext:"",freeslots:""},Ce=function(e,t){if(""!==t.groupname&&!e.title.toLowerCase().includes(t.groupname.toLowerCase()))return!1;if(""!==t.fieldofstudy&&!e.fieldofstudy.toLowerCase().includes(t.fieldofstudy.toLowerCase()))return!1;if(""!==t.modulestext&&!e.modules.toLowerCase().includes(t.modulestext.toLowerCase()))return!1;var a=parseInt(e.memberLimit)-parseInt(e.memberCount);return!(""!==t.freeslots&&parseInt(t.freeslots)>a)};function De(e){var t=Object(n.useContext)(Ne),a=t.contextData,c=(t.setContextData,e.groupid,de),l=(e.groupid,ue),o="1"!==l.memberCount?"":"hidden",i="1"===l.memberCount?"":"hidden";return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("button",{className:V,onClick:function(t){return e.setHomeDisplay(void 0)}},"Back"),r.a.createElement("div",{className:"self-center text-3xl font-bold"},l.title),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("button",{className:q,onClick:function(t){e.setHomeDisplay("groupinfo")}},"Info"),r.a.createElement("button",{className:q,onClick:function(t){e.setHomeDisplay("joinrequests")}},"Join Requests"),r.a.createElement("button",{className:q,onClick:function(t){var a;a=l.id,e.setHomeDisplay("editgroup"),e.setHomeGroupDisplay(a)}},"Edit Group"),r.a.createElement("button",{className:"".concat(F," ").concat(o),onClick:function(t){a.username,e.setHomeDisplay(void 0)}},"Leave Group"),r.a.createElement("button",{className:"".concat(F," ").concat(i),onClick:function(t){a.username,e.setHomeDisplay(void 0)}},"Remove Group"))),r.a.createElement("div",{className:"flex flex-row border-2 border-gray-500 m-2 p-2"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("button",{className:W,onClick:function(t){e.setHomeDisplay("createstudyproject")}},"+ Study Project"),c.map((function(t){return r.a.createElement("button",{className:q,key:t.id,onClick:function(a){e.setHomeDisplay("studyproject"),e.setHomeStudyProjectDisplay(t.id)}},r.a.createElement(ye,{projectData:t}))}))),r.a.createElement("div",{className:"w-full"},r.a.createElement(he,{chatMessages:l.chat}))))}function Oe(e){var t=Object(n.useState)({id:1,projectname:"",projectdescription:"",weeklymeetday:me()().weekday(),weeklymeetstarttime:Date.now(),weeklymeetendtime:Date.now()+72e5,deadline:Date.now()}),a=Object(i.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){l((e.homeStudyProjectDisplay,de[0]))}),[e.homeStudyProjectDisplay]);var m,s=function(e,t){l(Object(o.a)(Object(o.a)({},c),{},Object(re.a)({},e,t)))},u=function(e){return me()(e,["HH:mm"]).valueOf()},d=function(e){return me()(e).format("HH:mm")},f=e.edit?"hidden":"",p=e.edit?"":"hidden";return r.a.createElement("div",{className:N},r.a.createElement("div",{className:w},"Create New Study Project"),r.a.createElement("div",{className:x},r.a.createElement("div",{className:k},"Project Name"),r.a.createElement("input",{className:C,value:c.projectname,onChange:function(e){s("projectname",e.target.value)}}),r.a.createElement("div",{className:k},"Project Description"),r.a.createElement("textarea",{className:D,style:{minHeight:"5rem"},placeholder:"A group project to complete the HCI assignments with 4-5 members.",value:c.projectdescription,onChange:function(e){s("projectdescription",e.target.value)}}),r.a.createElement("div",{className:k},"Weekly Meet Day"),r.a.createElement("select",{className:C,value:c.weeklymeetday,onChange:function(e){s("weeklymeetday",e.target.value)}},we.map((function(e,t){return r.a.createElement("option",{key:e,value:"".concat(t)},e)}))),r.a.createElement("div",{className:k},"Weekly Meeting Time"),r.a.createElement("div",{className:"grid grid-cols-3"},r.a.createElement("input",{className:C,type:"time",value:d(c.weeklymeetstarttime),onChange:function(e){return s("weeklymeetstarttime",u(e.target.value))}}),r.a.createElement("div",{className:"text-center self-center"},"to"),r.a.createElement("input",{className:C,type:"time",value:d(c.weeklymeetendtime),onChange:function(e){return s("weeklymeetendtime",u(e.target.value))}})),r.a.createElement("div",{className:k},"Deadline"),r.a.createElement("input",{type:"date",value:(m=c.deadline,me()(m).format("YYYY-MM-DD")),className:C,onChange:function(e){var t;s("deadline",(t=e.target.value,me()(t,["YYYY-MM-DD"]).valueOf()))}})),r.a.createElement("div",{className:j},r.a.createElement("button",{className:"".concat(W," ").concat(f),onClick:function(t){var a;e.groupid,a=c,console.log("Creating new study proejct for id ".concat(e.groupid," with study project data"),a),e.setHomeDisplay("mygroup")}},"Create New Study Project"),r.a.createElement("button",{className:"".concat(W," ").concat(p),onClick:function(t){e.studyprojectid,e.setHomeDisplay("mygroup")}},"Apply changes"),r.a.createElement("button",{className:F,onClick:function(t){e.setHomeDisplay("mygroup")}},"Cancel")))}function Se(e){var t=(e.homeStudyProjectDisplay,de[0]),a=me()().weekday(t.weeklymeetday),n=me()(t.weeklymeetstarttime).format("HH:mm"),c=me()(t.weeklymeetendtime).format("HH:mm"),l="".concat(a," ").concat(n," - ").concat(c),o=me()(t.deadline),i=o.fromNow(),m=o.format("DD MMM YYYY HH:mm");return r.a.createElement("div",{className:"grid grid-cols-2"},r.a.createElement("div",null,"Project name:"),r.a.createElement("div",null,t.projectname),r.a.createElement("div",null,"Project description:"),r.a.createElement("div",null,t.projectdescription),r.a.createElement("div",null,"Meeting day:"),r.a.createElement("div",null,l),r.a.createElement("div",null,"Deadline:"),r.a.createElement("div",null,m," (which is ",i,")"))}function He(e){var t=Object(n.useContext)(Ne),a=t.contextData,c=(t.setContextData,void 0!==e.profileInfo?e.profileInfo:fe),l=Object(n.useState)(Object(o.a)({},c)),m=Object(i.a)(l,2),s=m[0],u=m[1],d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return r.a.createElement("input",{className:_,type:t,value:s[e],onChange:function(t){u(Object(o.a)(Object(o.a)({},s),{},Object(re.a)({},e,t.target.value)))}})};return r.a.createElement("div",{className:"m-2 p-2 flex flex-col"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("img",{className:"m-auto",alt:"profile pic",src:s.profilePicLink}),r.a.createElement("div",{className:"font-bold"},"Profil Bild:"),d("profilePicLink","text")," "),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Name:"),d("name")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Degreecourse:"),d("degreecourse")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Semester:"),d("semester","number")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Connections:"),d("connections")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Moduls:"),d("moduls")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"font-bold"},"Description:"),d("description")),r.a.createElement("div",{className:"m-2 p-2 flex justify-between"},r.a.createElement("button",{className:F,onClick:function(t){e.setProfileShowEditScreen(!1)}},"Cancel"),r.a.createElement("button",{className:W,onClick:function(t){var n;a.username,n=s,e.setProfileInfo(Object(o.a)({},n)),e.setProfileShowEditScreen(!1)}},"Apply")))}function Me(e){var t=Object(n.useContext)(Ne),a=t.contextData,c=(t.setContextData,a.username,fe);if(e.profileShowEditScreen)return r.a.createElement(He,{profileInfo:c,setProfileShowEditScreen:e.setProfileShowEditScreen});var l="m-auto";return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-row justify-end"},r.a.createElement("div",{className:"flex flex-col m-2 p-2"},r.a.createElement("button",{className:q,onClick:function(t){return e.setProfileShowEditScreen(!0)}},"Edit Profile"),r.a.createElement("button",{className:F,onClick:function(e){a.username}},"Remove Account"))),r.a.createElement("img",{className:l,src:[c.profilePicLink],alt:"Profile pic"}),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:l},"Name: ",c.name),r.a.createElement("div",{className:l},c.degreecourse,", ",c.semester,". Semester"),r.a.createElement("div",{className:l},"Erreichbar unter: ",c.connections),r.a.createElement("div",{className:l},"Ich belege dieses Semester folgende Module:"," ",c.moduls),r.a.createElement("div",{className:l},c.description),r.a.createElement("div",{className:l},c.hobbies)))}function Pe(e){for(var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=ge,m=[[],[],[],[],[],[],[]],s=new Date,u=new Date(s.getFullYear(),s.getMonth(),s.getDate()-s.getDay()+1+7*c),d=me()(u),f=0;f<o.length;f++){var p=o[f],b=me()(p.meetingTime),g=me()("".concat(d.format("YYYY-MM-DD")," ").concat(b.format("HH:mm")));if(p.startdate<g.valueOf()&&g.valueOf()<p.deadline){var E="".concat(g.format("HH:mm")," ").concat(p.title),v=r.a.createElement("div",{className:p.color},E);m[p.meetingDay].push(v)}}var h=new Date(u.getFullYear(),0,1),y=new Date(h.getFullYear(),0,(7-h.getDay()+1)%7+1),N=Math.round((u.getTime()-y.getTime())/6048e5+1),x=u.toLocaleString("de-DE",{month:"long"}),w=u.getFullYear();return r.a.createElement("div",null,r.a.createElement("div",{className:M},r.a.createElement("button",{className:J,onClick:function(e){l(c-1)}},"Vorherige Woche"),r.a.createElement("div",{className:P},"KW ",N," ",x," ",w),r.a.createElement("button",{className:J,onClick:function(e){l(c+1)}},"N\xe4chste Woche")),r.a.createElement("div",{className:B},je.map((function(e){return r.a.createElement("div",{key:e,className:G},e)})),m.map((function(e,t){return r.a.createElement("div",{key:"".concat(e.toString()," ").concat(t)},e.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",{className:T},e))})))}))))}function Ae(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],l=a[1],o=me()().add(c,"month"),m=o.format("MMMM YYYY"),s=o.startOf("month"),u=o.daysInMonth(),d=ge;d.sort((function(e,t){return e.meetingTime>t.meetingTime?1:e.meetingTime<t.meetingTime?-1:0}));for(var f=[],p=1;p<=u;p++)f.push(p);for(var b=(s.weekday()+6)%7,g=Array(b),E=0;E<b;E++)g.push(r.a.createElement("div",{key:E,className:L}));for(var v=7-(b+u)%7,h=Array(v),y=0;y<v;y++)h.push(r.a.createElement("div",{key:y,className:L}));var N=r.a.createElement("div",{className:A},je.map((function(e){return r.a.createElement("div",{className:I,key:e},e)})),g,f.map((function(e,t){var a=s.clone().add(t,"day");return r.a.createElement("div",{className:Y,key:e},r.a.createElement("div",null,e),d.map((function(e){return function(e){if(e)return r.a.createElement("div",{key:"".concat(e.id," ").concat(e.title),className:"".concat(e.color," ").concat(T)},me()(e.meetingTime).format("HH:mm")," ",e.title)}(function(e,t){var a=e.startdate,n=e.deadline,r=(me()(t).weekday()+6)%7;return a<t&&t<n&&r===e.meetingDay?e:null}(e,a))})))})),h);return r.a.createElement("div",null,r.a.createElement("div",{className:M},r.a.createElement("button",{className:J,onClick:function(e){l(c-1)}},"Vorheriger Monat"),r.a.createElement("div",{className:P},m),r.a.createElement("button",{className:J,onClick:function(e){l(c+1)}},"N\xe4chster Monat")),N)}function Be(e){return e.weekview?r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("button",{className:K,onClick:function(t){e.setCalendarWeekView(!1)}},"Monats-Ansicht"),r.a.createElement(Pe,{setCalendarWeekView:e.setCalendarWeekView})):r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("button",{className:K,onClick:function(t){e.setCalendarWeekView(!0)}},"Wochen-Ansicht"),r.a.createElement(Ae,{setCalendarWeekView:e.setCalendarWeekView}))}function Ie(e){var t=e.group;return r.a.createElement("div",{key:"".concat(t.icon).concat(t.title),className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"border-2 border-black px-1 mx-1"},t.icon),t.title," erstellt von ",t.createdBy," am"," ",me()(t.createdDate).format("DD.MM.YY")),r.a.createElement("div",null,t.fieldofstudy,", ",t.modules,", ",t.memberCount,"/",t.memberLimit," Mitglieder"),r.a.createElement("div",null,t.members.join(", ")),r.a.createElement("div",null,t.description))}function Ge(e){var t=void 0!==e.groupData?e.groupData:pe;return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-start"},r.a.createElement("button",{className:V,onClick:function(t){return e.setGroupSearchViewGroup(void 0)}},"Back")),r.a.createElement("div",{className:"flex flex-col m-2 p-2"},r.a.createElement("div",{className:"self-center font-black"},t.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"my-2"},"Erstellt von: ",t.createdBy," am"," ",t.createdDate.toLocaleDateString("de-DE")),r.a.createElement("div",{className:"my-2"},t.subjects.join(", "),", ",t.memberCount," /"," ",t.memberLimit," Mitglieder"),r.a.createElement("div",{className:"my-8"},t.description),r.a.createElement("button",{className:W,onClick:function(a){e.setGroupSearchViewGroup(void 0),e.setGroupSearchRequestJoin(t.id)}},"Anfrage senden")))}function Le(e){var t=void 0!==e.groupData?e.groupData:pe;return r.a.createElement("div",{className:"flex flex-col m-4 gap-2"},r.a.createElement("div",{className:"flex flex-row m-2 justify-center"},r.a.createElement("div",{className:"mx-1"},"Anfrage an "),r.a.createElement("div",{className:"underline mx-1"},t.title)),r.a.createElement("div",{className:"flex flex-row m-2 justify-center"},r.a.createElement("div",{className:"p-2"},"an"),r.a.createElement("div",{className:"border border-black border-2 border-rounded rounded py-1 justify px-6 self-center"},t.createdBy)),r.a.createElement("textarea",{className:"border border-2 border-black h-64 p-2 m-2  rounded",placeholder:"Anfrage formulieren (Zeichenbegrenzung: 500)"}),r.a.createElement("div",{className:"flex flex-row justify-between m-4"},r.a.createElement("button",{className:W,onClick:function(t){e.setGroupSearchRequestJoin(void 0)}},"Senden"),r.a.createElement("button",{className:F,onClick:function(t){e.setGroupSearchRequestJoin(void 0)}},"Zur\xfcck")))}function Ye(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){l((e.groupid,[{id:1,name:"Dominik",message:"Hallo, ich moechte gerne der Gruppe beitreten!",time:ie().valueOf()}]))}),[e.groupid]);var o=c.map((function(e){return r.a.createElement("div",{key:e.id,className:"flex flex-row"},r.a.createElement("div",null,e.name," - ",e.message," vom"," ",ie(e.time).format()),r.a.createElement("button",{className:W},"Annehmen"),r.a.createElement("button",{className:F},"Ablehnen"))}));return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("button",{className:"".concat(V," m-auto self-start"),onClick:function(t){e.setHomeDisplay("mygroup")}},"Back"),r.a.createElement("div",null,"TODO list join requests",o))}function Te(e){var t=Object(n.useContext)(Ne),a=t.contextData,c=(t.setContextData,Object(n.useState)("home")),l=Object(i.a)(c,2),o=l[0],m=l[1],s=Object(n.useState)(void 0),u=Object(i.a)(s,2),d=u[0],f=u[1],p=Object(n.useState)(void 0),b=Object(i.a)(p,2),g=b[0],E=b[1],v=Object(n.useState)(void 0),h=Object(i.a)(v,2),y=h[0],N=h[1],x=Object(n.useState)(ke),w=Object(i.a)(x,2),j=w[0],k=w[1],C=Object(n.useState)(void 0),D=Object(i.a)(C,2),O=D[0],S=D[1],H=Object(n.useState)(void 0),M=Object(i.a)(H,2),P=M[0],A=M[1],B=Object(n.useState)(!1),I=Object(i.a)(B,2),G=I[0],L=I[1],Y=Object(n.useState)(!1),T=Object(i.a)(Y,2),J=T[0],K=T[1],U=function(e){m(e),f(void 0),E(void 0),N(void 0),S(void 0),A(void 0),K(!1)},z=void 0;return"home"===o?void 0===d?z=r.a.createElement("div",{className:R},r.a.createElement("button",{className:W,onClick:function(e){f("creategroup")}},"+ neue Gruppe erstellen"),r.a.createElement("div",{className:"grid grid-cols-1"},(a.username,se).map((function(e){return r.a.createElement("button",{key:e.id,className:q,onClick:function(t){f("mygroup"),E(e.id)}},r.a.createElement(oe,{groupinfo:e}))})))):"creategroup"===d?z=r.a.createElement(Ee,{setHomeDisplay:f,createNewGroup:function(e){console.log("Creating new group with data:",e),U("home")}}):"mygroup"===d?z=r.a.createElement(De,{groupid:g,setHomeDisplay:f,setHomeGroupDisplay:E,setHomeStudyProjectDisplay:N}):"groupinfo"===d?z=r.a.createElement("div",null,"TODO display short info about this group"):"editgroup"===d?z=r.a.createElement(Ee,{edit:!0,groupid:g,setHomeDisplay:f}):"joinrequests"===d?z=r.a.createElement(Ye,{groupid:g,setHomeDisplay:f}):"createstudyproject"===d?z=r.a.createElement(Oe,{groupid:g,setHomeDisplay:f}):"studyproject"===d?z=r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("button",{className:V,onClick:function(e){f("mygroup")}},"Back"),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("button",{className:q,onClick:function(e){f("studyprojectedit")}},"Edit Study Project"),r.a.createElement("button",{className:F,onClick:function(e){f("mygroup")}},"Remove Study Project"))),r.a.createElement(Se,{homeStudyProjectDisplay:y})):"studyprojectedit"===d&&(z=r.a.createElement(Oe,{groupid:g,setHomeDisplay:f,studyprojectid:y,edit:!0})):"groupsearch"===o?void 0===O&&void 0===P?z=r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(ce,{filterSettings:j,setFilterSettings:k})),r.a.createElement("div",{className:"flex flex-col"},(a.username,se).filter((function(e){return Ce(e,j)})).map((function(e){return r.a.createElement("button",{className:q,key:e.id,onClick:function(t){S(e.id)}},r.a.createElement(Ie,{group:e}))})))):void 0!==O?z=r.a.createElement(Ge,{setGroupSearchViewGroup:S,setGroupSearchRequestJoin:A}):void 0!==P&&(z=r.a.createElement(Le,{setGroupSearchViewGroup:S,setGroupSearchRequestJoin:A})):"chat"===o?z=r.a.createElement(he,null):"calendar"===o?z=r.a.createElement(Be,{weekview:G,setCalendarWeekView:L}):"profile"===o&&(z=r.a.createElement(Me,{profileShowEditScreen:J,setProfileShowEditScreen:K})),r.a.createElement("div",{className:"flex flex-col bg-blue-300"},r.a.createElement(ne,{navBarClick:U,logOutClick:e.logOutClick}),z)}function Re(e){return r.a.createElement("div",{className:"text-center font-extrabold text-4xl p-4 text-white bg-blue-500"},"Study Finder")}function We(e){var t=Object(n.useState)("home"),a=Object(i.a)(t,2),c=a[0],l=a[1],m=Object(n.useContext)(Ne),s=m.contextData,u=m.setContextData,d=void 0;return"login"===c?d=r.a.createElement(te,{setShow:l,login:function(e,t){u(Object(o.a)(Object(o.a)({},s),{},{username:e})),l("home")}}):"register"===c?d=r.a.createElement(ae,{setShow:l,register:function(e,t,a){}}):"home"===c&&(d=r.a.createElement(Te,{logOutClick:function(){u(Object(o.a)(Object(o.a)({},s),{},{username:null})),l("login")}})),r.a.createElement("div",{className:"flex flex-col h-screen bg-blue-200"},r.a.createElement(Re,null),d)}function Fe(e){return r.a.createElement("div",{className:"flex flex-col gap-2 m-4"},r.a.createElement(m.b,{to:"/"},"Normal study project website"),r.a.createElement(m.b,{to:"/login"},"Login"),r.a.createElement(m.b,{to:"/register"},"Register"),r.a.createElement(m.b,{to:"/mygroups"},"Meine Gruppen"),r.a.createElement(m.b,{to:"/groupinfojoined"},"Eine meiner Gruppen mit Chat"),r.a.createElement(m.b,{to:"/groupsearch"},"Gruppensuche"),r.a.createElement(m.b,{to:"/chat"},"Nur Chat"),r.a.createElement(m.b,{to:"/createstudygroup"},"Study group - Gruppe erstellen"),r.a.createElement(m.b,{to:"/createstudyproject"},"Study project erstellen"),r.a.createElement(m.b,{to:"/studyprojectinfo"},"Study project info"),r.a.createElement(m.b,{to:"/joingroupinformation"},"Gruppe information"),r.a.createElement(m.b,{to:"/joingrouprequest"},"Gruppe Anfrage senden"),r.a.createElement(m.b,{to:"/calendarmonthview"},"Kalender - Monatsansicht"),r.a.createElement(m.b,{to:"/calendarweekview"},"Kalender - Wochenansicht"),r.a.createElement(m.b,{to:"/myprofile"},"Eigenes Profil"),r.a.createElement(m.b,{to:"/profileedit"},"Eigenes Profil editieren"))}a(40);function Ve(e){var t=Object(n.useState)(ke),a=Object(i.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(Object(o.a)({},xe)),d=Object(i.a)(u,2),f=d[0],p=d[1];return r.a.createElement(Ne.Provider,{value:{contextData:f,setContextData:p}},r.a.createElement(m.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:We}),r.a.createElement(s.a,{path:"/admin",component:Fe}),r.a.createElement(s.a,{path:"/login",component:te}),r.a.createElement(s.a,{path:"/register",component:ae}),r.a.createElement(s.a,{path:"/mygroups",component:Te}),r.a.createElement(s.a,{path:"/groupinfojoined",component:De}),r.a.createElement(s.a,{path:"/groupsearch"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(ce,{filterSettings:c,setFilterSettings:l})),r.a.createElement("div",null,se.filter((function(e){return Ce(e,c)})).map((function(e){return r.a.createElement(Ie,{key:e.id,group:e})}))))),r.a.createElement(s.a,{path:"/chat",component:he}),r.a.createElement(s.a,{path:"/createstudygroup",component:Ee}),r.a.createElement(s.a,{path:"/createstudyproject",component:Oe}),r.a.createElement(s.a,{path:"/studyprojectinfo",component:Se}),r.a.createElement(s.a,{path:"/joingroupinformation",component:Ge}),r.a.createElement(s.a,{path:"/joingrouprequest",component:Le}),r.a.createElement(s.a,{path:"/calendarmonthview"},r.a.createElement(Be,{monthview:!0})),r.a.createElement(s.a,{path:"/calendarweekview"},r.a.createElement(Be,{weekview:!0})),r.a.createElement(s.a,{path:"/myprofile",component:Me}),r.a.createElement(s.a,{path:"/profileedit",component:He})))}l.a.render(r.a.createElement(Ve,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.39d6a5f1.chunk.js.map