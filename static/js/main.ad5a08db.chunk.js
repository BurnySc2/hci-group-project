(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(1),i=a(5),m=a(2),s="flex flex-col self-center bg-gray-200 p-2 border-4 border-black rounded",u="flex flex-row w-128 items-center",d="flex flex-row justify-evenly my-4",f="bg-gray-500 flex-grow rounded",p="hover:bg-yellow-400 flex-grow rounded",b="w-32 m-2",g="w-32 border-2 border-black rounded m-2",E="my-4 mx-2 p-2 border-2 border-black rounded hover:bg-yellow-400",v="flex flex-col bg-gray-200 m-2 p-2 border-4 border-black rounded",h="justify-self-auto  grid grid-cols-2",N="self-center font-black",y="flex flex-row items-center justify-between",w="m-2 flex-grow",x="m-2 border-2 border-black rounded flex-grow",j="m-2 border-2 border-black rounded flex-grow",k="m-2 p-2 border-2 border-black rounded hover:bg-green-400",C="m-2 p-2 border-2 border-black rounded hover:bg-red-400",S="flex flex-col bg-gray-200 p-2 border-4 border-black rounded",D="justify-self-auto grid grid-cols-2",O="self-center font-black",P="flex flex-row items-center justify-between",H="m-2",M="m-2 border-2 border-black rounded",I="h-min-64 m-2 border-2 border-black rounded",B="m-2 p-2 border-2 border-black rounded hover:bg-green-400",A="m-2 p-2 border-2 border-black rounded hover:bg-red-400",G="flex flex-row justify-between bg-gray-200 w-128",L="flex flex-row bg-blue-100",Y="flex flex-row",R="px-4 py-2 mx-2 my-1 font-black";function T(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),v=m[0],h=m[1],N=Object(n.useState)(""),y=Object(o.a)(N,2),w=y[0],x=y[1];return r.a.createElement("div",{className:s},r.a.createElement("div",{className:d},r.a.createElement("button",{className:f},"Login"),r.a.createElement("button",{className:p,onClick:function(){return e.setShow("register")}},"Register")),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Username"),r.a.createElement("input",{className:g,placeholder:"Username",onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Password"),r.a.createElement("input",{className:g,placeholder:"Password",type:"password",onChange:function(e){h(e.target.value)}})),r.a.createElement("button",{className:E,onClick:function(){x("You have clicked the 'login' button! No functionality is implemented yet :("),e.login(l,v)}},"Login"),r.a.createElement("div",null,w))}function F(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),v=m[0],h=m[1],N=Object(n.useState)(""),y=Object(o.a)(N,2),w=y[0],x=y[1],j=Object(n.useState)(""),k=Object(o.a)(j,2),C=k[0],S=k[1],D=Object(n.useState)(""),O=Object(o.a)(D,2),P=O[0],H=O[1];return r.a.createElement("div",{className:s},r.a.createElement("div",{className:d},r.a.createElement("button",{className:p,onClick:function(){return e.setShow("login")}},"Login"),r.a.createElement("button",{className:f},"Register")),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Username"),r.a.createElement("input",{className:g,placeholder:"Username",onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Email"),r.a.createElement("input",{className:g,placeholder:"Email",type:"email",onChange:function(e){h(e.target.value)}})),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Password"),r.a.createElement("input",{className:g,placeholder:"Password",type:"password",onChange:function(e){x(e.target.value)}})),r.a.createElement("div",{className:u},r.a.createElement("div",{className:b},"Repeat Password"),r.a.createElement("input",{className:g,placeholder:"Repeat password",type:"password",onChange:function(e){S(e.target.value)}})),r.a.createElement("button",{className:E,onClick:function(){return function(){var t="";t=""!==v?"Your account '".concat(l,"' has been created. An verification email to '").concat(v,"' has been sent! You may log in now."):"You left the email field empty! Account could not be created.",H(t),console.assert(w===C,"Password and password repeat are not the same!"),e.register(l,v,w)}()}},"Register"),r.a.createElement("div",null,P))}function J(e){return r.a.createElement("div",{className:G},r.a.createElement("div",{className:L},r.a.createElement("button",{className:R,onClick:function(){e.navBarClick("home")}},"Home"),r.a.createElement("button",{className:R,onClick:function(){e.navBarClick("groupsearch")}},"Gruppensuche"),r.a.createElement("button",{className:R,onClick:function(){e.navBarClick("chat")}},"Chat"),r.a.createElement("button",{className:R,onClick:function(){e.navBarClick("calendar")}},"Kalender"),r.a.createElement("button",{className:R,onClick:function(){e.navBarClick("profile")}},"Profil")),r.a.createElement("div",{className:Y},r.a.createElement("button",{className:R,onClick:function(){e.logOutClick()}},"Logout")))}var W=a(10),q=a(6);function K(e){var t=function(t,a){e.setFilterSettings(Object(q.a)(Object(q.a)({},e.filterSettings),{},Object(W.a)({},t,a)))},a=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"txt";return r.a.createElement("input",{className:"border-2 border-black p-1 m-1",type:l,placeholder:n,value:e.filterSettings[a],onChange:function(e){return t(a,e.target.value)}})};return r.a.createElement("div",{className:"flex flex-col border-2 border-black m-1 p-1"},r.a.createElement("div",{className:"p-1 m-1"},"Filterfunktion"),a("groupname","Gruppenname"),a("fieldofstudy","Studiengang"),a("modulestext","Modul"),a("freeslots","Freie Pl\xe4tze","number"))}function U(e){var t=e.messageByMe?"self-end":"self-start",a=e.messageByMe?"mir":e.data.name,n=e.displayAsRow?"flex flex-row":"flex flex-col";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"".concat(t," font-black mx-1")},e.data.text),r.a.createElement("div",{className:"".concat(t," font-light mx-1")},"von ".concat(a," um ").concat(new Date(e.data.time).toLocaleTimeString("de")," Uhr")))}function V(e){return r.a.createElement("div",{className:"flex flex-row border-2 border-gray-500 p-2"},r.a.createElement("div",null,r.a.createElement("div",{className:"border-2 border-black p-2 w-16 text-center font-black"},e.groupinfo.icon)),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"mx-1 self-start"},e.groupinfo.title),r.a.createElement(U,{data:e.groupinfo.lastchatmessage,displayAsRow:!0})))}function z(e){var t=Object(n.useState)({groupname:"",fieldofstudy:"computerscience",modulestext:"",groupdescription:"",memberslimit:""}),a=Object(o.a)(t,2),l=a[0],c=a[1],i=function(e,t){c(Object(q.a)(Object(q.a)({},l),{},Object(W.a)({},e,t)))};return r.a.createElement("div",{className:v},r.a.createElement("div",{className:N},"Create New Study Group"),r.a.createElement("div",{className:h},r.a.createElement("div",{className:w},"Group Name"),r.a.createElement("input",{className:x,value:l.groupname,onChange:function(e){return i("groupname",e.target.value)}}),r.a.createElement("div",{className:w},"Field of Study"),r.a.createElement("select",{className:x,name:"studienfach",id:"studienfach",value:l.fieldofstudy,onChange:function(e){i("fieldofstudy",e.target.value)}},r.a.createElement("option",{value:"computerscience"},"Computer Science"),r.a.createElement("option",{value:"maths"},"Maths"),r.a.createElement("option",{value:"physics"},"Physics"),r.a.createElement("option",{value:"chemistry"},"Chemistry"),r.a.createElement("option",{value:"biology"},"Biology")),r.a.createElement("div",{className:w},"Modules"),r.a.createElement("textarea",{className:j,style:{minHeight:"5rem"},placeholder:"HCI, Etech, Programmieren 2",value:l.modulestext,onChange:function(e){return i("modulestext",e.target.value)}}),r.a.createElement("div",{className:w},"Group Description"),r.a.createElement("textarea",{className:j,style:{minHeight:"5rem"},placeholder:"We are looking for more Computer Science students who want to study for the HCI exam.",value:l.groupdescription,onChange:function(e){return i("groupdescription",e.target.value)}}),r.a.createElement("div",{className:w},"Members Limit"),r.a.createElement("input",{type:"number",min:"1",max:"1000",value:l.memberslimit,className:x,onChange:function(e){return i("memberlimit",e.target.value)}})),r.a.createElement("div",{className:y},r.a.createElement("button",{className:k,onClick:function(t){e.createNewGroup(l)}},"Create New Group"),r.a.createElement("button",{className:C,onClick:function(t){return e.setHomeDisplay(void 0)}},"Cancel")))}var Z=a(3),Q=a.n(Z),X=[{id:1,icon:"HCI",title:"HCI-Gruppe",createdBy:"Alice",createdDate:Q()("2020-12-15").valueOf(),fieldofstudy:"Informatik",modules:"Mensch-Computer-Interaktion",memberCount:"3",memberLimit:"4",members:"Alice, Bob, Doug",description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",lastchatmessage:{name:"Doug",text:"Hallo wie gehts euch?",time:Date.now()}},{id:2,icon:"SWT",title:"Software-team",createdBy:"Bob",createdDate:Q()("2020-12-10").valueOf(),fieldofstudy:"Informatik",modules:"Software-Technik",memberCount:"3",memberLimit:"5",members:"Bob, Alice",description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",lastchatmessage:{name:"Bob",text:"Habt ihr schon was gemacht?",time:Date.now()}}],$={id:1,icon:"HCI",title:"HCI-Gruppe",createdBy:"Alice",createdDate:"10.12.20",subjects:"Informatik, Mensch-Computer-Interaktion",memberCount:"3",memberLimit:"4",members:"Alice, Bob, Doug",description:"Hallo, wir arbeiten an dem Project und benoetigen noch eine Person. Bitte bei Interesse anschreiben.",studyprojects:[{}],chat:[{id:0,name:"Bob",text:"Habt ihr schon was gemacht?",time:Date.now()},{id:1,name:"Doug",text:"Nee ich fange erst morgen damit an",time:Date.now()},{id:2,name:"Alice",text:"Ja ein bisschen",time:Date.now()}]},_=[{id:0,projectname:"Abgabeblatt HCI",projectdescription:"Something",weeklymeetday:Q()().weekday(),weeklymeetstarttime:Date.now(),weeklymeetendtime:Date.now()+72e5,deadline:Q()().add(5,"days").valueOf()}],ee={profilePicLink:"https://i.imgur.com/9BiQit3.png",name:"Bj\xf6rk",degreecourse:"Informatik",semester:"5",connections:"Email, Discord, Teams",moduls:"HCI, Analysis A, Ausgew\xe4hlte Kapitel des Rechts f\xfcr Informatiker",description:"Au\xdferdem bin ich sehr engagiert.",hobbies:"Meine Hobbys sind Fahrrad fahren und Kochen."},te={id:1,icon:"LinA",title:"LinA-Lerngruppe",createdBy:"Mike",createdDate:new Date(2020,11,15),subjects:["Informatik","Lineare Algebra"],memberCount:"3",memberLimit:"5",members:["Mike","Bob","Doug"],description:"Meiner Lerngruppe und mir fehlen f\xfcr die Abgabe noch 2 Personen. Bitte meldet euch schnell, die n\xe4chste Abgabe ist am 20.12.!"},ae=[{id:1,name:"Paul",text:"Hallo wie gehts euch?",time:Date.now()},{id:2,name:"Anna",text:"Ja mir gehts gut und dir?",time:Date.now()},{id:3,name:"Doug",text:"Hallo mir geht es auch super",time:Date.now()}],ne=a(28);function re(e){var t=Object(n.useState)("Doug"),a=Object(o.a)(t,1)[0],l=Object(n.useState)(void 0!==e.chatMessages?e.chatMessages:ae),c=Object(o.a)(l,2),i=c[0],m=c[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],f=u[1],p=i.map((function(e){return r.a.createElement(U,{key:e.id,data:e,messageByMe:e.name===a})})),b=void 0;return void 0!==e.displayChatInput&&!0!==e.displayChatInput||(b=r.a.createElement("div",{className:"flex flex-row bg-blue-100"},r.a.createElement("input",{className:"self-start w-full p-2 m-2",type:"text",placeholder:"Message",value:d,onChange:function(e){f(e.target.value)}}),r.a.createElement("button",{className:"self-end p-2 m-2",onClick:function(e){!function(e,t){var a=ne(i);a.push({id:Date.now(),name:e,text:t,time:Date.now()}),m(a),f("")}(a,d)}},"Send"))),r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-col bg-blue-200"},p),b)}function le(e){var t=e.projectData;return r.a.createElement("div",{className:"flex flex-col border-2 border-black m-1 p-1"},r.a.createElement("div",{className:"self-start"},t.projectname),r.a.createElement("div",{className:"self-end"},"due ",Q()(t.deadline).fromNow()))}var ce=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],oe={groupname:"",fieldofstudy:"",modulestext:"",freeslots:""},ie=function(e,t){if(""!==t.groupname&&!e.title.toLowerCase().includes(t.groupname.toLowerCase()))return!1;if(""!==t.fieldofstudy&&!e.fieldofstudy.toLowerCase().includes(t.fieldofstudy.toLowerCase()))return!1;if(""!==t.modulestext&&!e.modules.toLowerCase().includes(t.modulestext.toLowerCase()))return!1;var a=parseInt(e.memberLimit)-parseInt(e.memberCount);return!(""!==t.freeslots&&parseInt(t.freeslots)>a)},me={GEAR:r.a.createElement("div",null,"\u2699")};function se(e){var t=void 0!==e.studyProjects?e.studyProjects:_,a=void 0!==e.groupData?e.groupData:$;return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("button",{onClick:function(t){return e.setHomeDisplay(void 0)}},"Back"),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",null,a.title),r.a.createElement("button",{className:"mx-2 border-black border-2 rounded-full h-6 w-6 flex items-center justify-center"},"i")),r.a.createElement("button",{className:"text-4xl"},me.GEAR)),r.a.createElement("div",{className:"flex flex-row border-2 border-gray-500 m-2 p-2"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("button",{className:"border-2 border-black m-1 p-1",onClick:function(t){e.setHomeDisplay("createstudyproject")}},"+ Study Project"),t.map((function(t){return r.a.createElement("button",{key:t.id,onClick:function(a){e.setHomeDisplay("studyproject"),e.setHomeStudyProjectDisplay(t.id)}},r.a.createElement(le,{projectData:t}))}))),r.a.createElement("div",{className:"w-full"},r.a.createElement(re,{chatMessages:a.chat}))))}function ue(e){var t,a=Object(n.useState)({projectname:"",projectdescription:"",weeklymeetday:Q()().weekday(),weeklymeetstarttime:Date.now(),weeklymeetendtime:Date.now()+72e5,deadline:Date.now()}),l=Object(o.a)(a,2),c=l[0],i=l[1],m=function(e,t){i(Object(q.a)(Object(q.a)({},c),{},Object(W.a)({},e,t)))},s=function(e){return Q()(e,["HH:mm"]).valueOf()},u=function(e){return Q()(e).format("HH:mm")};return r.a.createElement("div",{className:S},r.a.createElement("div",{className:O},"Create New Study Project"),r.a.createElement("div",{className:D},r.a.createElement("div",{className:H},"Project Name"),r.a.createElement("input",{className:M,value:c.projectname,onChange:function(e){m("projectname",e.target.value)}}),r.a.createElement("div",{className:H},"Project Description"),r.a.createElement("textarea",{className:I,style:{minHeight:"5rem"},placeholder:"A group project to complete the HCI assignments with 4-5 members.",value:c.projectdescription,onChange:function(e){m("projectdescription",e.target.value)}}),r.a.createElement("div",{className:H},"Weekly Meet Day"),r.a.createElement("select",{className:M,value:c.weeklymeetday,onChange:function(e){m("weeklymeetday",e.target.value)}},ce.map((function(e,t){return r.a.createElement("option",{key:e,value:"".concat(t)},e)}))),r.a.createElement("div",{className:H},"Weekly Meeting Time"),r.a.createElement("div",{className:"grid grid-cols-3"},r.a.createElement("input",{className:M,type:"time",value:u(c.weeklymeetstarttime),onChange:function(e){return m("weeklymeetstarttime",s(e.target.value))}}),r.a.createElement("div",{className:"text-center self-center"},"to"),r.a.createElement("input",{className:M,type:"time",value:u(c.weeklymeetendtime),onChange:function(e){return m("weeklymeetendtime",s(e.target.value))}})),r.a.createElement("div",{className:H},"Deadline"),r.a.createElement("input",{type:"date",value:(t=c.deadline,Q()(t).format("mm:DD:YYYY")),className:M,onChange:function(e){var t;m("deadline",(t=e.target.value,Q()(t,["YYYY-MM-DD"]).valueOf()))}})),r.a.createElement("div",{className:P},r.a.createElement("button",{className:B,onClick:function(t){e.createNewStudyProject(e.groupid,c)}},"Create New Study Project"),r.a.createElement("button",{className:A,onClick:function(t){e.setHomeDisplay("mygroup")}},"Cancel")))}function de(e){var t=void 0!==e.projectInfo?e.projectInfo:_[0],a=Q()().weekday(t.weeklymeetday),n=Q()(t.weeklymeetstarttime).format("HH:mm"),l=Q()(t.weeklymeetendtime).format("HH:mm"),c="".concat(a," ").concat(n," - ").concat(l),o=Q()(t.deadline),i=o.fromNow(),m=o.format("DD MMM YYYY HH:mm");return r.a.createElement("div",{className:"grid grid-cols-2"},r.a.createElement("div",null,"Project name:"),r.a.createElement("div",null,t.projectname),r.a.createElement("div",null,"Project description:"),r.a.createElement("div",null,t.projectdescription),r.a.createElement("div",null,"Meeting day:"),r.a.createElement("div",null,c),r.a.createElement("div",null,"Deadline:"),r.a.createElement("div",null,m," (which is ",i,")"))}function fe(e){var t=void 0!==e.profileInfo?e.profileInfo:ee,a=Object(n.useState)(Object(q.a)({},t)),l=Object(o.a)(a,2),c=l[0],i=l[1],m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return r.a.createElement("input",{className:"border-2",type:t,value:c[e],onChange:function(t){i(Object(q.a)(Object(q.a)({},c),{},Object(W.a)({},e,t.target.value)))}})};return r.a.createElement("div",{className:"m-2 p-2 flex flex-col"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("img",{className:"m-auto",alt:"profile pic",src:c.profilePicLink}),r.a.createElement("div",null,"Profil Bild:"),m("profilePicLink","text")," "),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Name:"),m("name")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Degreecourse:"),m("degreecourse")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Semester:"),m("semester","number")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Connections:"),m("connections")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Moduls:"),m("moduls")),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",null,"Description:"),m("description")),r.a.createElement("div",{className:"m-2 p-2 flex justify-between"},r.a.createElement("button",{onClick:function(t){e.setProfileShowEditScreen(!1)}},"Cancel"),r.a.createElement("button",{onClick:function(t){var a;a=c,e.setProfileInfo(Object(q.a)({},a)),e.setProfileShowEditScreen(!1)}},"Apply")))}function pe(e){var t=Object(n.useState)(ee),a=Object(o.a)(t,2),l=a[0],c=a[1];if(e.profileShowEditScreen)return r.a.createElement(fe,{profileInfo:l,setProfileInfo:c,setProfileShowEditScreen:e.setProfileShowEditScreen});var i="m-auto";return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-row justify-end"},r.a.createElement("div",{className:"flex flex-col m-2 p-2"},r.a.createElement("button",{className:"border-2 border-black m-1 p-1",onClick:function(t){return e.setProfileShowEditScreen(!0)}},"Edit Profile"),r.a.createElement("button",{className:"border-2 border-black m-1 p-1",onClick:function(e){}},"Remove Account"))),r.a.createElement("img",{className:i,src:[l.profilePicLink],alt:"Profile pic"}),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:i},"Name: ",l.name),r.a.createElement("div",{className:i},l.degreecourse,", ",l.semester,". Semester"),r.a.createElement("div",{className:i},"Erreichbar unter: ",l.connections),r.a.createElement("div",{className:i},"Ich belege dieses Semester folgende Module:"," ",l.moduls),r.a.createElement("div",{className:i},l.description),r.a.createElement("div",{className:i},l.hobbies)))}function be(e){for(var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=[{title:"HCI Assignment1",color:"bg-red-300",meetingDay:5,meetingTime:new Date(0,0,0,14,30),startdate:new Date(2020,11,1),deadline:new Date(2021,0,4)},{title:"HCI Assignment2",color:"bg-red-500",meetingDay:3,meetingTime:new Date(0,0,0,12,0),startdate:new Date(2020,11,25),deadline:new Date(2021,1,4)}],m=[[],[],[],[],[],[],[]],s=new Date,u=new Date(s.getFullYear(),s.getMonth(),s.getDate()-s.getDay()+1+7*l),d=0;d<i.length;d++){var f=i[d],p=new Date(u.getFullYear(),u.getMonth(),u.getDate()+f.meetingDay,f.meetingTime.getHours(),f.meetingTime.getMinutes());if(f.startdate.getTime()<p.getTime()&&p.getTime()<f.deadline.getTime()){var b="".concat(f.meetingTime.toLocaleTimeString("de-DE",{timeStyle:"short"})," ").concat(f.title),g=r.a.createElement("div",{className:f.color},b);m[f.meetingDay].push(g)}}var E,v=new Date(u.getFullYear(),0,1),h=new Date(v.getFullYear(),0,(7-v.getDay()+1)%7+1),N=Math.round((u.getTime()-h.getTime())/6048e5+1),y=u.toLocaleString("de-DE",{month:"long"}),w=u.getFullYear();return E=e.weekview?r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-row justify-between m-6 px-6"},r.a.createElement("button",{className:"rounded p-2 hover:bg-blue-200 bg-blue-300",onClick:function(e){c(l-1)}},"Vorherige Woche"),r.a.createElement("div",null,"KW ",N," ",y," ",w),r.a.createElement("button",{className:"rounded p-2 hover:bg-blue-200 bg-blue-300",onClick:function(e){c(l+1)}},"N\xe4chste Woche")),r.a.createElement("div",{className:"grid grid-cols-7 border-4 border-black m-6"},["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"].map((function(e){return r.a.createElement("div",{key:e,className:"text-center border-b-4 border-blue-200 py-4"},e)})),m.map((function(e,t){return r.a.createElement("div",{key:"".concat(e.toString()," ").concat(t)},e.map((function(e){return r.a.createElement("div",{key:e,className:"h-64 text-center"},r.a.createElement("div",{className:"my-2"},e))})))})))):r.a.createElement("div",null,"TODO"),r.a.createElement("div",null,E)}function ge(e){var t=e.group;return r.a.createElement("div",{key:"".concat(t.icon).concat(t.title),className:"flex flex-col m-2 p-2 border-2 border-black"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"border-2 border-black px-1 mx-1"},t.icon),t.title," erstellt von ",t.createdBy," am"," ",Q()(t.createdDate).format("DD.MM.YY")),r.a.createElement("div",null,t.fieldofstudy,", ",t.modules,", ",t.memberCount,"/",t.memberLimit," Mitglieder"),r.a.createElement("div",null,t.members),r.a.createElement("div",null,t.description))}function Ee(e){var t=void 0!==e.groupData?e.groupData:te;return r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-start"},r.a.createElement("button",{className:"p-2 bg-blue-300 rounded",onClick:function(t){return e.setGroupSearchViewGroup(void 0)}},"Back")),r.a.createElement("div",{className:"flex flex-col m-2 p-2"},r.a.createElement("div",{className:"self-center font-black"},t.title),r.a.createElement("hr",null),r.a.createElement("div",{className:"my-2"},"Erstellt von: ",t.createdBy," am"," ",t.createdDate.toLocaleDateString("de-DE")),r.a.createElement("div",{className:"my-2"},t.subjects.join(", "),", ",t.memberCount," /"," ",t.memberLimit," Mitglieder"),r.a.createElement("div",{className:"my-8"},t.description),r.a.createElement("button",{className:"flex p-2 bg-blue-200 rounded self-center",onClick:function(a){e.setGroupSearchViewGroup(void 0),e.setGroupSearchRequestJoin(t.id)}},"Anfrage senden")))}function ve(e){var t=void 0!==e.groupData?e.groupData:te;return r.a.createElement("div",{className:"flex flex-col m-4 gap-2"},r.a.createElement("div",{className:"flex flex-row m-2 justify-center"},r.a.createElement("div",{className:"mx-1"},"Anfrage an "),r.a.createElement("div",{className:"underline mx-1"},t.title)),r.a.createElement("div",{className:"flex flex-row m-2 justify-center"},r.a.createElement("div",{className:"p-2"},"an"),r.a.createElement("div",{className:"border border-black border-2 border-rounded rounded py-1 justify px-6 self-center"},t.createdBy)),r.a.createElement("textarea",{className:"border border-2 border-black h-64 p-2 m-2  rounded",placeholder:"Anfrage formulieren (Zeichenbegrenzung: 500)"}),r.a.createElement("div",{className:"flex flex-row justify-between m-4"},r.a.createElement("button",{className:"p-4 bg-blue-300 rounded",onClick:function(t){e.setGroupSearchRequestJoin(void 0)}},"Senden"),r.a.createElement("button",{className:"p-4 bg-blue-300 rounded",onClick:function(t){e.setGroupSearchRequestJoin(void 0)}},"Zur\xfcck")))}function he(e){var t=Object(n.useState)("home"),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(void 0),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(void 0),f=Object(o.a)(d,2),p=f[0],b=f[1],g=Object(n.useState)(void 0),E=Object(o.a)(g,2),v=(E[0],E[1]),h=Object(n.useState)(oe),N=Object(o.a)(h,2),y=N[0],w=N[1],x=Object(n.useState)(void 0),j=Object(o.a)(x,2),k=j[0],C=j[1],S=Object(n.useState)(void 0),D=Object(o.a)(S,2),O=D[0],P=D[1],H=Object(n.useState)(!1),M=Object(o.a)(H,2),I=M[0],B=M[1],A=function(e){c(e),u(void 0),b(void 0),v(void 0),C(void 0),P(void 0),B(!1)},G=X,L=_,Y=void 0;return"home"===l?void 0===s?Y=r.a.createElement("div",null,r.a.createElement("button",{className:"border-2 border-black rounded m-2 p-1",onClick:function(e){u("creategroup")}},"+ neue Gruppe erstellen"),r.a.createElement("div",{className:"flex flex-col"},G.map((function(e){return r.a.createElement("button",{key:e.id,className:"m-2",onClick:function(t){u("mygroup"),b(e.id)}},r.a.createElement(V,{groupinfo:e}))})))):"creategroup"===s?Y=r.a.createElement(z,{setHomeDisplay:u,createNewGroup:function(e){console.log("Creating new group with data:",e),A("home")}}):"mygroup"===s?Y=r.a.createElement(se,{groupid:p,setHomeDisplay:u,setHomeStudyProjectDisplay:v,studyProjects:L}):"createstudyproject"===s?Y=r.a.createElement(ue,{groupid:p,setHomeDisplay:u,createNewStudyProject:function(e,t){console.log("Creating new study proejct for id ".concat(e," with study project data"),t),u("mygroup")}}):"studyproject"===s&&(Y=r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex flex-row justify-between"},r.a.createElement("button",{onClick:function(e){u("mygroup")}},"Back"),r.a.createElement("button",{className:"text-4xl"},me.GEAR)),r.a.createElement(de,null))):"groupsearch"===l?void 0===k&&void 0===O?Y=r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(K,{filterSettings:y,setFilterSettings:w})),r.a.createElement("div",{className:"flex flex-col"},G.filter((function(e){return ie(e,y)})).map((function(e){return r.a.createElement("button",{key:e.id,onClick:function(t){C(e.id)}},r.a.createElement(ge,{group:e}))})))):void 0!==k?Y=r.a.createElement(Ee,{setGroupSearchViewGroup:C,setGroupSearchRequestJoin:P}):void 0!==O&&(Y=r.a.createElement(ve,{setGroupSearchViewGroup:C,setGroupSearchRequestJoin:P})):"chat"===l?Y=r.a.createElement(re,null):"calendar"===l?Y=r.a.createElement(be,{weekview:!0}):"profile"===l&&(Y=r.a.createElement(pe,{profileShowEditScreen:I,setProfileShowEditScreen:B})),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(J,{navBarClick:A,logOutClick:e.logOutClick}),Y)}function Ne(e){return r.a.createElement("div",{className:"text-center m-4 font-black"},"Study Finder")}function ye(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=(a[0],a[1]),c=Object(n.useState)("home"),i=Object(o.a)(c,2),m=i[0],s=i[1],u=void 0;return"login"===m?u=r.a.createElement(T,{setShow:s,login:function(e,t){l(e),s("home")}}):"register"===m?u=r.a.createElement(F,{setShow:s,register:function(e,t,a){}}):"home"===m&&(u=r.a.createElement(he,{logOutClick:function(){l(""),s("login")}})),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(Ne,null),u)}function we(e){return r.a.createElement("div",{className:"flex flex-col gap-2 m-4"},r.a.createElement(i.b,{to:"/"},"Normal study project website"),r.a.createElement(i.b,{to:"/login"},"Login"),r.a.createElement(i.b,{to:"/register"},"Register"),r.a.createElement(i.b,{to:"/mygroups"},"Meine Gruppen"),r.a.createElement(i.b,{to:"/groupinfojoined"},"Eine meiner Gruppen mit Chat"),r.a.createElement(i.b,{to:"/groupsearch"},"Gruppensuche"),r.a.createElement(i.b,{to:"/chat"},"Nur Chat"),r.a.createElement(i.b,{to:"/createstudygroup"},"Study group - Gruppe erstellen"),r.a.createElement(i.b,{to:"/createstudyproject"},"Study project erstellen"),r.a.createElement(i.b,{to:"/studyprojectinfo"},"Study project info"),r.a.createElement(i.b,{to:"/joingroupinformation"},"Gruppe information"),r.a.createElement(i.b,{to:"/joingrouprequest"},"Gruppe Anfrage senden"),r.a.createElement(i.b,{to:"/calendarmonthview"},"Kalender - Monatsansicht"),r.a.createElement(i.b,{to:"/calendarweekview"},"Kalender - Wochenansicht"),r.a.createElement(i.b,{to:"/myprofile"},"Eigenes Profil"),r.a.createElement(i.b,{to:"/profileedit"},"Eigenes Profil editieren"))}a(40);function xe(e){var t=Object(n.useState)(oe),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(i.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ye}),r.a.createElement(m.a,{path:"/admin",component:we}),r.a.createElement(m.a,{path:"/login",component:T}),r.a.createElement(m.a,{path:"/register",component:F}),r.a.createElement(m.a,{path:"/mygroups",component:he}),r.a.createElement(m.a,{path:"/groupinfojoined",component:se}),r.a.createElement(m.a,{path:"/groupsearch"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement(K,{filterSettings:l,setFilterSettings:c})),r.a.createElement("div",null,X.filter((function(e){return ie(e,l)})).map((function(e){return r.a.createElement(ge,{key:e.id,group:e})}))))),r.a.createElement(m.a,{path:"/chat",component:re}),r.a.createElement(m.a,{path:"/createstudygroup",component:z}),r.a.createElement(m.a,{path:"/createstudyproject",component:ue}),r.a.createElement(m.a,{path:"/studyprojectinfo",component:de}),r.a.createElement(m.a,{path:"/joingroupinformation",component:Ee}),r.a.createElement(m.a,{path:"/joingrouprequest",component:ve}),r.a.createElement(m.a,{path:"/calendarmonthview",component:be}),r.a.createElement(m.a,{path:"/calendarweekview"},r.a.createElement(be,{weekview:!0})),r.a.createElement(m.a,{path:"/myprofile",component:pe}),r.a.createElement(m.a,{path:"/profileedit",component:fe}))}c.a.render(r.a.createElement(xe,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ad5a08db.chunk.js.map