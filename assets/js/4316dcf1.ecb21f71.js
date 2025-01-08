"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4233],{38484:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"setup/backup-and-restore","title":"Backup and restore","description":"Back up the configuration","source":"@site/docs/setup/backup-and-restore.md","sourceDirName":"setup","slug":"/setup/backup-and-restore","permalink":"/docs/next/setup/backup-and-restore","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/setup/backup-and-restore.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"Lua Scripts","permalink":"/docs/next/setup/lua-scripts"},"next":{"title":"Flashing the firmware","permalink":"/docs/next/setup/flashing-the-firmware"}}');var r=i(74848),n=i(28453);const l={sidebar_position:30},o="Backup and restore",s={},a=[{value:"Back up the configuration",id:"back-up-the-configuration",level:2},{value:"Step 1.",id:"step-1",level:3},{value:"Step 2.",id:"step-2",level:3},{value:"Step 3.",id:"step-3",level:3},{value:"Step 4.",id:"step-4",level:3},{value:"Load/Restore Config",id:"loadrestore-config",level:2},{value:"Step 1.",id:"step-1-1",level:3},{value:"Step 2.",id:"step-2-1",level:3}];function d(A){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"backup-and-restore",children:"Backup and restore"})}),"\n",(0,r.jsx)(e.h2,{id:"back-up-the-configuration",children:"Back up the configuration"}),"\n",(0,r.jsx)(e.p,{children:"Backups of your Rotorflight configuration can be taken in order to restore a controller to a previous state, in the event of a failure, or to duplicate your controller to use on another helicopter. Also it is advised that a backup is taken of the original Betaflight pre-loaded configuration before loading Rotorflight."}),"\n",(0,r.jsx)(e.h3,{id:"step-1",children:"Step 1."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Step 1",src:i(92874).A+"",width:"174",height:"127"})}),"\n",(0,r.jsxs)(e.p,{children:["Open Rotorflight Configurator and ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[Connect]"})}),". If the board is new and as supplied with Betaflight a warning message will pop up saying the ",(0,r.jsx)(e.em,{children:'"firmware version is not supported"'}),". This means that the board currently does not have Rotorflight loaded so it can be safely ignored. Rotorflight configurator will now open in CLI mode. If you are backing up your config after having already configured your helicopter you will need to click on the CLI tab from the left hand side of the page to open the CLI interface."]}),"\n",(0,r.jsx)(e.h3,{id:"step-2",children:"Step 2."}),"\n",(0,r.jsx)(e.p,{children:"Choose what you want to back up. There are several options."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"dump"}),"\nThis command dumps all of the hardware and software configuration."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"diff"}),"\ndiff will download any configuration that is not equal to the custom defaults for that board. Things like your ESC protocol, RX type etc. This file is very small."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"dump all"}),"\nDump all downloads all hardware and software the same as the dump command; however, it also includes all rate profiles."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"dump hardware"}),"\nDump hardware will download all of the hardware config. This is information like the pin assignments and board specific information (gyro bus address etc)."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"step-3",children:"Step 3."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Step 3",src:i(41857).A+"",width:"1203",height:"110"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Click on ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[Clear output window]"})}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Type the backup command (from step 2) in the window and click ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[ENTER]"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"step-4",children:"Step 4."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Step 4",src:i(73592).A+"",width:"1350",height:"688"})}),"\n",(0,r.jsxs)(e.p,{children:["After the command is complete click ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[Save to File]"})})," and store on your computer."]}),"\n",(0,r.jsx)(e.h2,{id:"loadrestore-config",children:"Load/Restore Config"}),"\n",(0,r.jsx)(e.p,{children:"Use this process to load remapping config files for your specific flight controller if available.\nYou can also restore config files to your flight controller you have previously saved or have been shared by other users."}),"\n",(0,r.jsx)(e.h3,{id:"step-1-1",children:"Step 1."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Step 1",src:i(48759).A+"",width:"1350",height:"681"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Open the CLI tab and click ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[Load from File]"})})," and select the file on your computer."]}),"\n",(0,r.jsxs)(e.li,{children:["Click on the ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[Execute]"})})," from the pop up."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"step-2-1",children:"Step 2."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Step 2",src:i(5742).A+"",width:"706",height:"298"})}),"\n",(0,r.jsxs)(e.p,{children:["Once the backup is loaded type ",(0,r.jsx)(e.strong,{children:"save"})," in the command line and ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.em,{children:"[ENTER]"})}),". The flight controller will now reboot."]})]})}function p(A={}){const{wrapper:e}={...(0,n.R)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(d,{...A})}):d(A)}},92874:(A,e,i)=>{i.d(e,{A:()=>t});const t="data:image/png;base64,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"},41857:(A,e,i)=>{i.d(e,{A:()=>t});const t="data:image/png;base64,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"},73592:(A,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/restore-3-ea44eb31e7f33348597299e1344c6b57.png"},48759:(A,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/restore-4-938e99bf5432791d8a58a75267aff287.png"},5742:(A,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/restore-5-848ee88c47d4dcdf3d399d14a32e26e7.png"},28453:(A,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var t=i(96540);const r={},n=t.createContext(r);function l(A){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function o(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:l(A.components),t.createElement(n.Provider,{value:e},A.children)}}}]);