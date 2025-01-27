"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9847],{23220:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"configurator/tabs/blackbox","title":"Blackbox","description":"What is Blackbox","source":"@site/versioned_docs/version-2.1.0/configurator/tabs/blackbox.md","sourceDirName":"configurator/tabs","slug":"/configurator/tabs/blackbox","permalink":"/docs/configurator/tabs/blackbox","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/configurator/tabs/blackbox.md","tags":[],"version":"2.1.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sensors","permalink":"/docs/configurator/tabs/sensors"},"next":{"title":"CLI","permalink":"/docs/configurator/tabs/cli"}}');var s=n(74848),a=n(28453);const t={},l="Blackbox",r={},c=[{value:"What is Blackbox",id:"what-is-blackbox",level:2},{value:"Blackbox data can be logged to:",id:"blackbox-data-can-be-logged-to",level:2},{value:"Blackbox Configuration",id:"blackbox-configuration",level:2},{value:"Logging Device",id:"logging-device",level:3},{value:"Logging Mode",id:"logging-mode",level:3},{value:"Logging Rate",id:"logging-rate",level:3},{value:"Debug Mode",id:"debug-mode",level:3},{value:"Debug Axis",id:"debug-axis",level:3},{value:"Blackbox Logging Options",id:"blackbox-logging-options",level:2},{value:"Onboard dataflash chip",id:"onboard-dataflash-chip",level:2},{value:"Mass Storage Mode",id:"mass-storage-mode",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"blackbox",children:"Blackbox"})}),"\n",(0,s.jsx)(o.h2,{id:"what-is-blackbox",children:"What is Blackbox"}),"\n",(0,s.jsx)(o.p,{children:"Blackbox is a flight data recording feature in Rotorflight. A Blackbox log contains a lot of data, such as the attitude of the heli, gyro sensor measurements, PID data,  RC commands, motor outputs etc. It\u2019s an extremely powerful tool for tuning and troubleshooting the heli."}),"\n",(0,s.jsx)(o.h2,{id:"blackbox-data-can-be-logged-to",children:"Blackbox data can be logged to:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"A flash chip on the FC. Logging is fast, but storage is limited, unless you are using a dedicated RF controller(FlyDragon F7 has 128MByte Flash), and copying log files can be slow."}),"\n",(0,s.jsx)(o.li,{children:"An SD card on the FC, it's fast and storage is only limited by the capacity of the SD card."}),"\n",(0,s.jsxs)(o.li,{children:["An external logging device: ",(0,s.jsx)(o.a,{href:"/docs/setup/openlager",children:"OpenLager"}),". These devices write the log to a micro SD card."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"A flash chip or an SD card on the FC are nice, but if your FC doesn't have that you can connect an OpenLager logging device."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Blackbox Tab",src:n(60139).A+"",width:"1626",height:"874"})}),"\n",(0,s.jsx)(o.h2,{id:"blackbox-configuration",children:"Blackbox Configuration"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Blackbox Tab",src:n(68718).A+"",width:"565",height:"205"})}),"\n",(0,s.jsx)(o.h3,{id:"logging-device",children:"Logging Device"}),"\n",(0,s.jsx)(o.p,{children:"Here you can select the device type."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"No Logging"}),": Disable Logging."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Onboard Flash"}),": Log to the onboard flash chip (if available)."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"SD Card"}),": Log to the onboard SD Card (if available)."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Serial Port"}),": Log to an external logging device (eg. ",(0,s.jsx)(o.a,{href:"/docs/setup/openlager",children:"OpenLager"}),")."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"logging-mode",children:"Logging Mode"}),"\n",(0,s.jsx)(o.p,{children:"Select the preferred logging mode."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"No Logging"}),": Disable Logging."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Normal"}),": Start logging when both ",(0,s.jsx)(o.a,{href:"/docs/setup/arming",children:(0,s.jsx)(o.strong,{children:"ARM"})})," and ",(0,s.jsx)(o.a,{href:"/docs/configurator/tabs/modes#blackbox",children:(0,s.jsx)(o.strong,{children:"BLACKBOX"})})," switches are active."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Armed"}),": Start logging when ",(0,s.jsx)(o.a,{href:"/docs/setup/arming",children:(0,s.jsx)(o.strong,{children:"ARM"})})," switch is active."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Switch"}),": Start logging when ",(0,s.jsx)(o.a,{href:"/docs/configurator/tabs/modes#blackbox",children:(0,s.jsx)(o.strong,{children:"BLACKBOX"})})," switch is active."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"logging-rate",children:"Logging Rate"}),"\n",(0,s.jsx)(o.p,{children:"The log data is saved to the logging device with this rate. For logging to an external device, lower speed may be required."}),"\n",(0,s.jsx)(o.p,{children:"Set it to 2kHz for OpenLager."}),"\n",(0,s.jsx)(o.h3,{id:"debug-mode",children:"Debug Mode"}),"\n",(0,s.jsxs)(o.p,{children:["Choose what ",(0,s.jsx)(o.em,{children:"extra"})," data is being logged, eight extra debug items are added to the Blackbox Log."]}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Under ",(0,s.jsx)(o.em,{children:"Blackbox debug mode"})," you can specify what should be logged. There are a lot of choices, but you can select ",(0,s.jsx)(o.em,{children:"GYRO_SCALED"})," for PID tuning, ",(0,s.jsx)(o.em,{children:"GOVERNOR"})," for analyzing the governor or ",(0,s.jsx)(o.em,{children:"CYCLETIME"})," if you're interested in CPU time."]})}),"\n",(0,s.jsx)(o.h3,{id:"debug-axis",children:"Debug Axis"}),"\n",(0,s.jsxs)(o.p,{children:["Choose which ",(0,s.jsx)(o.em,{children:"axis"})," is being debugged. Applies to some of the debug modes."]}),"\n",(0,s.jsx)(o.h2,{id:"blackbox-logging-options",children:"Blackbox Logging Options"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Blackbox Tab",src:n(2028).A+"",width:"725",height:"204"})}),"\n",(0,s.jsx)(o.p,{children:"Here you activate the parameters that you want to log."}),"\n",(0,s.jsxs)(o.p,{children:["For general use activate the following options ",(0,s.jsx)(o.code,{children:"Command"})," ",(0,s.jsx)(o.code,{children:"Setpoint"})," ",(0,s.jsx)(o.code,{children:"Mixer"})," ",(0,s.jsx)(o.code,{children:"PID"})," ",(0,s.jsx)(o.code,{children:"Raw Gyro"})," ",(0,s.jsx)(o.code,{children:"Gyro"})," ",(0,s.jsx)(o.code,{children:"Battery"})," ",(0,s.jsx)(o.code,{children:"RSSI"})," ",(0,s.jsx)(o.code,{children:"RPM"})," ",(0,s.jsx)(o.code,{children:"Motors"})," ",(0,s.jsx)(o.code,{children:"Servos"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"onboard-dataflash-chip",children:"Onboard dataflash chip"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Blackbox Tab",src:n(68235).A+"",width:"1179",height:"284"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Erase"})," - Erase Blackbox Data."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Save to file"})," - Download Blackbox Data."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"mass-storage-mode",children:"Mass Storage Mode"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Blackbox Tab",src:n(26840).A+"",width:"932",height:"202"})}),"\n",(0,s.jsx)(o.h1,{id:"blackbox-explorer",children:"Blackbox Explorer"}),"\n",(0,s.jsxs)(o.p,{children:["The log files can be read with the ",(0,s.jsx)(o.a,{href:"https://github.com/rotorflight/rotorflight-blackbox",children:"Rotorflight Blackbox Explorer"}),"."]})]})}function g(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},68718:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/blackbox-config-fb012d4651d680cdc0c64289e55a2f48.png"},60139:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/blackbox-main-575477f2e794d38d134824e387541c90.png"},26840:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/blackbox-mass-a8df07996a750b8b04fd8e6c87c9074c.png"},2028:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/blackbox-options-35b04c2ab4a4e4a9535e0d9e7890af16.png"},68235:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/blackbox-save-2df0d9d410326961e527a63d1a5417ec.png"},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var i=n(96540);const s={},a=i.createContext(s);function t(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);