"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7147],{86520:(e,M,A)=>{A.r(M),A.d(M,{assets:()=>z,contentTitle:()=>j,default:()=>s,frontMatter:()=>r,metadata:()=>N,toc:()=>g});const N=JSON.parse('{"id":"examples/example-1","title":"Example setup - Servo tail","description":"The following doc will give and overview for how to setup a servo tailed helicopter using Rotorflight. The purpose is just as a generic guide to outline the steps to take when setting up a helicopter of this type.","source":"@site/docs/examples/example-1.mdx","sourceDirName":"examples","slug":"/examples/example-1","permalink":"/docs/next/examples/example-1","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/examples/example-1.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/next/examples/"},"next":{"title":"EdgeTX Generic Radio Setup","permalink":"/docs/next/setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup"}}');var i=A(74848),t=A(28453);const D=A.p+"assets/medias/example-1-5-208d36a8d4622446d1b4949867ff0b57.mp4",r={sidebar_position:10},j="Example setup - Servo tail",z={},g=[{value:"Update Firmware",id:"update-firmware",level:2},{value:"Setup Receiver",id:"setup-receiver",level:2},{value:"Receiver - serial ports",id:"receiver---serial-ports",level:3},{value:"Receiver -  Rx protocol",id:"receiver----rx-protocol",level:3},{value:"Receiver - Check",id:"receiver---check",level:3},{value:"Receiver - Update firmware",id:"receiver---update-firmware",level:3},{value:"Receiver - Enable telemetry",id:"receiver---enable-telemetry",level:3},{value:"Enable ARM mode",id:"enable-arm-mode",level:2},{value:"Gyro setup",id:"gyro-setup",level:2},{value:"Gyro - alignment",id:"gyro---alignment",level:3},{value:"Gyro - Calibrate accelerometer",id:"gyro---calibrate-accelerometer",level:3},{value:"Servo Setup",id:"servo-setup",level:2},{value:"Mixer Setup",id:"mixer-setup",level:2},{value:"Motor and ESC Setup",id:"motor-and-esc-setup",level:2},{value:"Test motor and Telemetry",id:"test-motor-and-telemetry",level:2},{value:"Power setup",id:"power-setup",level:2},{value:"ELRS custom telemetry",id:"elrs-custom-telemetry",level:2},{value:"RPM Filters",id:"rpm-filters",level:2},{value:"Rates",id:"rates",level:2},{value:"Pre-flight test",id:"pre-flight-test",level:2}];function n(e){const M={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.header,{children:(0,i.jsx)(M.h1,{id:"example-setup---servo-tail",children:"Example setup - Servo tail"})}),"\n",(0,i.jsx)(M.p,{children:"The following doc will give and overview for how to setup a servo tailed helicopter using Rotorflight. The purpose is just as a generic guide to outline the steps to take when setting up a helicopter of this type."}),"\n",(0,i.jsx)(M.p,{children:"This example will use:"}),"\n",(0,i.jsxs)(M.p,{children:[(0,i.jsx)(M.strong,{children:"Helicopter"}),(0,i.jsx)(M.br,{}),"\n","Helicopter: OMP M4\nController: Radiomaster Nexus",(0,i.jsx)(M.br,{}),"\n","Receiver: ELRS",(0,i.jsx)(M.br,{}),"\n","ESC: OMPHobby 65A",(0,i.jsx)(M.br,{}),"\n","Servos: OMPHOBBY"]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.strong,{children:"Features"})}),"\n",(0,i.jsxs)(M.ul,{children:["\n",(0,i.jsx)(M.li,{children:"Telemetry: Yes"}),"\n",(0,i.jsx)(M.li,{children:"ESC telemetry: Yes"}),"\n",(0,i.jsx)(M.li,{children:"RPM Measurement: ESC RPM signal"}),"\n",(0,i.jsx)(M.li,{children:"RPM Filtering: yes"}),"\n",(0,i.jsx)(M.li,{children:"Governor: Yes"}),"\n"]}),"\n",(0,i.jsx)(M.h2,{id:"update-firmware",children:"Update Firmware"}),"\n",(0,i.jsxs)(M.p,{children:["Update the Flight Controller firmware to the current release. Follow the description on the ",(0,i.jsx)(M.a,{href:"/docs/next/setup/flashing-the-firmware",children:(0,i.jsx)(M.strong,{children:"Flashing the firmware"})})," page."]}),"\n",(0,i.jsx)(M.h2,{id:"setup-receiver",children:"Setup Receiver"}),"\n",(0,i.jsx)(M.p,{children:"Choose where you want to connect your receiver. Any of the UARTS or SBUS port are suitable depending on your receiver and personal preference. In this example we are using ELRS and will connect to the Port(A) which is default ELRS port."}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(48207).A+"",width:"553",height:"360"})}),"\n",(0,i.jsx)(M.admonition,{type:"caution",children:(0,i.jsx)(M.p,{children:"Double check your wires between receiver and flight controller before powering on. Some ELRS receiver manufacturers use a different pin arrangement and connecting to your Flight controller will damage the receiver."})}),"\n",(0,i.jsx)(M.h3,{id:"receiver---serial-ports",children:"Receiver - serial ports"}),"\n",(0,i.jsxs)(M.p,{children:["Open the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/configuration",children:"configuration tab"})," and set the serial port ",(0,i.jsx)(M.strong,{children:"Port (A)"})," to ",(0,i.jsx)(M.strong,{children:"Serial_RX"}),".",(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"Save and Reboot"}),"."]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(63110).A+"",width:"826",height:"293"})}),"\n",(0,i.jsx)(M.h3,{id:"receiver----rx-protocol",children:"Receiver -  Rx protocol"}),"\n",(0,i.jsxs)(M.p,{children:["Open the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/receiver",children:"Receiver tab"}),". Set the receiver protocol to TBS CRSF (ELRS) and the channel order to ELRS (AECR1T).",(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"Save and Reboot"}),"."]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(68089).A+"",width:"1873",height:"361"})}),"\n",(0,i.jsx)(M.h3,{id:"receiver---check",children:"Receiver - Check"}),"\n",(0,i.jsx)(M.p,{children:"Your Receiver should now be connected and operating correctly."}),"\n",(0,i.jsx)("video",{src:D,autoPlay:!0,playsInline:!0,loop:!0,muted:!0,width:"85%"}),"\n",(0,i.jsx)(M.h3,{id:"receiver---update-firmware",children:"Receiver - Update firmware"}),"\n",(0,i.jsxs)(M.p,{children:["If you wish to update your firmware for your ELRS receiver you can now connect using ExpressLRS Configurator using the ",(0,i.jsx)(M.strong,{children:"Betaflight Passthrough"})," method."]}),"\n",(0,i.jsx)(M.admonition,{title:"note",type:"info",children:(0,i.jsx)(M.p,{children:"You will need to disconnect and close the Rotorflight Configurator and power cycle the receiver before updating your Receiver"})}),"\n",(0,i.jsx)(M.h3,{id:"receiver---enable-telemetry",children:"Receiver - Enable telemetry"}),"\n",(0,i.jsx)(M.p,{children:"Enable telemetry back to your transmitter"}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(17739).A+"",width:"820",height:"93"})}),"\n",(0,i.jsx)(M.h2,{id:"enable-arm-mode",children:"Enable ARM mode"}),"\n",(0,i.jsxs)(M.p,{children:["Arming is an important step for Rotorflight. See the ",(0,i.jsx)(M.a,{href:"/docs/next/setup/arming",children:(0,i.jsx)(M.strong,{children:"Arming setup"})})," page for more details."]}),"\n",(0,i.jsx)(M.h2,{id:"gyro-setup",children:"Gyro setup"}),"\n",(0,i.jsx)(M.p,{children:"The gyro can be put into the helicopter in many different ways. We now have to set the gyro alignment so that the gyro knows what direction it is pointing in."}),"\n",(0,i.jsx)(M.h3,{id:"gyro---alignment",children:"Gyro - alignment"}),"\n",(0,i.jsxs)(M.p,{children:["Check and confirm on the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/configuration",children:"configuration tab"})," that while moving your helicopter (gyro installed) that the model in the configurator moves in the same direction."]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(54082).A+"",width:"824",height:"634"})}),"\n",(0,i.jsx)(M.h3,{id:"gyro---calibrate-accelerometer",children:"Gyro - Calibrate accelerometer"}),"\n",(0,i.jsxs)(M.p,{children:["With the flight controller installed in your Helicopter open the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/setup",children:"setup tab"})," and click on the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/setup#calibrate-accelerometer",children:"calibrate accelerometer"})]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(54949).A+"",width:"1498",height:"171"})}),"\n",(0,i.jsx)(M.h2,{id:"servo-setup",children:"Servo Setup"}),"\n",(0,i.jsxs)(M.p,{children:["The purpose of this step is to ",(0,i.jsx)(M.a,{href:"/docs/next/setup/setup-servos",children:(0,i.jsx)(M.strong,{children:"setup and calibrate servos"})}),". On the M4 the servos are setup in the ",(0,i.jsx)(M.a,{href:"/docs/next/configurator/tabs/servos#ccpm",children:"CCPM 120 degree"})," arrangement so the servos need to be plugged in as shown below."]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(41346).A+"",width:"480",height:"420"})}),"\n",(0,i.jsx)(M.h2,{id:"mixer-setup",children:"Mixer Setup"}),"\n",(0,i.jsxs)(M.p,{children:["The purpose of this step is to ",(0,i.jsx)(M.a,{href:"/docs/next/setup/setup-mixer",children:(0,i.jsx)(M.strong,{children:"setup and calibrate the mixer"})}),"."]}),"\n",(0,i.jsx)(M.h2,{id:"motor-and-esc-setup",children:"Motor and ESC Setup"}),"\n",(0,i.jsxs)(M.p,{children:[(0,i.jsx)(M.strong,{children:"ESC Throttle Protocol"})," - The OMPHobby 65A ESC uses a PWM protocol.",(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"ESC telemetry Protocol"})," - Set this to OMPHobby to match the ESC.",(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"RPM Sensor"})," - The nexus has an RPM input. The Yellow RPM signal wire from the ESC is plugged into this port. Enabling this toggle enables the RPM so it can be used for the ",(0,i.jsx)(M.a,{href:"/docs/next/setup/governor",children:(0,i.jsx)(M.strong,{children:"Governor"})})," and ",(0,i.jsx)(M.a,{href:"/docs/next/setup/rpm-filters",children:(0,i.jsx)(M.strong,{children:"RPM Filtering"})}),(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"Main Rotor Gear Ratio"})," - The M4 is a direct drive Helicopter so is set to ",(0,i.jsx)(M.code,{children:"1 / 1"}),(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"Tail Rotor Gear Ratio"})," - Counting the teeth on the M4 gears is ",(0,i.jsx)(M.code,{children:"22 / 99"}),(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.strong,{children:"Main Motor Pole count"})," - The M4 motor has 42 poles ",(0,i.jsx)(M.code,{children:"42"})]}),"\n",(0,i.jsx)(M.admonition,{title:"note",type:"info",children:(0,i.jsxs)(M.p,{children:["If your helicopter has a two stage gear train, please ",(0,i.jsx)(M.a,{href:"/docs/next/setup/two-stage-gear-train-ratios",children:(0,i.jsx)(M.strong,{children:"follow this guide"})})]})}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(21084).A+"",width:"820",height:"518"})}),"\n",(0,i.jsxs)(M.p,{children:[(0,i.jsx)(M.strong,{children:"Governor Mode"}),' - Set this to "Mode 1". This will control the Headspeed and provide slow spoolup.',(0,i.jsx)(M.br,{}),"\n","See the ",(0,i.jsx)(M.a,{href:"/docs/next/setup/governor#governor-mode",children:(0,i.jsx)(M.strong,{children:"Governor Modes"})})," and ",(0,i.jsx)(M.a,{href:"/docs/next/setup/governor-setup",children:(0,i.jsx)(M.strong,{children:"Governor setup"})})," for details and examples."]}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(60046).A+"",width:"825",height:"192"})}),"\n",(0,i.jsx)(M.h2,{id:"test-motor-and-telemetry",children:"Test motor and Telemetry"}),"\n",(0,i.jsx)(M.p,{children:"Now you can check and confirm your motor runs."}),"\n",(0,i.jsxs)(M.admonition,{type:"caution",children:[(0,i.jsx)(M.mdxAdmonitionTitle,{}),(0,i.jsx)(M.p,{children:"This step MUST be done with blades off!!"})]}),"\n",(0,i.jsx)(M.p,{children:"Enable the motor override and slowly raise the motor override signal. The Motor should begin to spool up and RPM and other ESC telemetry should be displayed."}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(33687).A+"",width:"813",height:"618"})}),"\n",(0,i.jsx)(M.h2,{id:"power-setup",children:"Power setup"}),"\n",(0,i.jsxs)(M.p,{children:["Since we now have ESC telemetry working we can enable ESC Telemetry as the Voltage and current source.",(0,i.jsx)(M.br,{}),"\n",(0,i.jsx)(M.img,{alt:"Example 1",src:A(77802).A+"",width:"1168",height:"401"})]}),"\n",(0,i.jsx)(M.h2,{id:"elrs-custom-telemetry",children:"ELRS custom telemetry"}),"\n",(0,i.jsxs)(M.p,{children:["Since Rotorflight v2.1 ELRS will need to use the custom telemetry Lua. The Crossfire protocol is very limited for our helicopters so this is required to get the full range of telemetry that we may wish to see.",(0,i.jsx)(M.br,{}),"\n","See the ",(0,i.jsx)(M.a,{href:"/docs/next/setup/elrs-custom-telemetry",children:(0,i.jsx)(M.strong,{children:"ELRS Custom Telemetry"})})," on how to set it up."]}),"\n",(0,i.jsx)(M.h2,{id:"rpm-filters",children:"RPM Filters"}),"\n",(0,i.jsx)(M.p,{children:"From the Gyro tab enable the RPM filters and accept the default."}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(44956).A+"",width:"886",height:"1005"})}),"\n",(0,i.jsx)(M.h2,{id:"rates",children:"Rates"}),"\n",(0,i.jsx)(M.p,{children:"Review and modify your Rates to taste."}),"\n",(0,i.jsx)(M.p,{children:(0,i.jsx)(M.img,{alt:"Example 1",src:A(62469).A+"",width:"829",height:"630"})}),"\n",(0,i.jsx)(M.h2,{id:"pre-flight-test",children:"Pre-flight test"}),"\n",(0,i.jsx)(M.p,{children:"Check and confirm all your controls are functioning.\nPay particular attention to:"}),"\n",(0,i.jsxs)(M.ul,{children:["\n",(0,i.jsx)(M.li,{children:"When connected to the configurator the model moves in the same way as the real helicopter (tilt forward/backward, sideways and yaw)."}),"\n",(0,i.jsx)(M.li,{children:"Tx stick forward, helicopter swash pitched down"}),"\n"]})]})}function s(e={}){const{wrapper:M}={...(0,t.R)(),...e.components};return M?(0,i.jsx)(M,{...e,children:(0,i.jsx)(n,{...e})}):n(e)}},41346:(e,M,A)=>{A.d(M,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDQ4MCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iNDIwIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTA1LjkzNCAyMDcuODkxQzExMC4wODggMjA3Ljg5MSAxMTMuOTQzIDIwNS43OTUgMTE2LjIzNyAyMDIuMzI5QzEyOS43IDE4MS45OTUgMTQyLjg4NyAxNDguMTk0IDE0Mi44ODcgMTE1LjA1OEMxNDIuODk0IDYyLjcyNjggMTA1LjgyMiA4IDk1LjA3ODkgOEM4NC4zMzU0IDggNDcuMjYzNSA2Mi43MjY4IDQ3LjI2MzUgMTE1LjA1OEM0Ny4yNjM1IDE0OC4yMDEgNjAuNDUwMSAxODIuMDAzIDczLjkxMzEgMjAyLjMyOUM3Ni4yMDY4IDIwNS43OTUgODAuMDY5MyAyMDcuODkxIDg0LjIxNTggMjA3Ljg5MUgxMDUuOTI3SDEwNS45MzRaIiBmaWxsPSIjMUY5NkMyIi8+CjwvZz4KPHBhdGggZD0iTTkzLjQ0MjcgMTEwLjk3TDgyLjA5NCAxMzkuNzcxQzgxLjQxNDIgMTQxLjQ5MyA4My41MTM2IDE0Mi45NjggODQuODk1NyAxNDEuNzMzTDkzLjkxMzQgMTMzLjcxNUM5NC41NzgzIDEzMy4xMjMgOTUuNTc5NSAxMzMuMTIzIDk2LjI0NDQgMTMzLjcxNUwxMDUuMjYyIDE0MS43MzNDMTA2LjY0NCAxNDIuOTYgMTA4Ljc0NCAxNDEuNDkzIDEwOC4wNjQgMTM5Ljc3MUw5Ni43MTUxIDExMC45N0M5Ni4xMzIzIDEwOS40ODggOTQuMDMyOSAxMDkuNDg4IDkzLjQ0MjcgMTEwLjk3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk1LjA3ODkgMTc3Ljk0NUM2Ny4wNjIxIDE3Ny45NDUgNDQuMjc1MSAxNTUuMTExIDQ0LjI3NTEgMTI3LjAzNkM0NC4yNzUxIDk4Ljk2MTggNjcuMDYyMSA3Ni4xMjc4IDk1LjA3ODkgNzYuMTI3OEMxMjMuMDk2IDc2LjEyNzggMTQ1Ljg4MyA5OC45NjE4IDE0NS44ODMgMTI3LjAzNkMxNDUuODgzIDE1NS4xMTEgMTIzLjA5NiAxNzcuOTQ1IDk1LjA3ODkgMTc3Ljk0NVpNOTUuMDc4OSA4My42MTQzQzcxLjE4NjIgODMuNjE0MyA1MS43NDYzIDEwMy4wOTQgNTEuNzQ2MyAxMjcuMDM2QzUxLjc0NjMgMTUwLjk3OSA3MS4xODYyIDE3MC40NTkgOTUuMDc4OSAxNzAuNDU5QzExOC45NzIgMTcwLjQ1OSAxMzguNDEyIDE1MC45NzkgMTM4LjQxMiAxMjcuMDM2QzEzOC40MTIgMTAzLjA5NCAxMTguOTcyIDgzLjYxNDMgOTUuMDc4OSA4My42MTQzWiIgZmlsbD0iIzFGOTZDMiIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTEzLjc1NyAzMDYuNzE0QzExMi4xMDYgMzA2LjcxNCAxMTAuNzY4IDMwOC4wNTQgMTEwLjc2OCAzMDkuNzA5VjM1MC4xMzZIMTAxLjA1NlYyMDcuODkxSDg5LjEwMTlWMzcyLjU5NkM4OS4xMDE5IDM3NS45MDUgOTEuNzc2NiAzNzguNTg1IDk1LjA3ODggMzc4LjU4NUM5OC4zODExIDM3OC41ODUgMTAxLjA1NiAzNzUuOTA1IDEwMS4wNTYgMzcyLjU5NlYzNjguODUzSDExMC43NjhWNDA4LjUzMkMxMTAuNzY4IDQxMC4xODYgMTEyLjEwNiA0MTEuNTI2IDExMy43NTcgNDExLjUyNkMxMTUuNDA4IDQxMS41MjYgMTE2Ljc0NSA0MTAuMTg2IDExNi43NDUgNDA4LjUzMlYzMDkuNzA5QzExNi43NDUgMzA4LjA1NCAxMTUuNDA4IDMwNi43MTQgMTEzLjc1NyAzMDYuNzE0WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMDYuMzEgOTIuNjgyMkwxMDYuMzEgNTkuNDIwNkMxMDYuMzEgNTguMDgzOCAxMDUuMjI0IDU3IDEwMy44ODQgNTdMODUuNTI2OCA1N0M4NC4xODcyIDU3IDgzLjEwMTIgNTguMDgzOCA4My4xMDEyIDU5LjQyMDZMODMuMTAxMiA5Mi42ODIyQzgzLjEwMTIgOTQuMDE5MSA4NC4xODcyIDk1LjEwMjggODUuNTI2OCA5NS4xMDI4TDEwMy44ODQgOTUuMTAyOEMxMDUuMjI0IDk1LjEwMjggMTA2LjMxIDk0LjAxOTEgMTA2LjMxIDkyLjY4MjJaIiBmaWxsPSIjMUExQTQwIi8+CjxwYXRoIGQ9Ik0xMzMuNzYxIDEyOC43MzNMMTE3LjEzIDE1Ny41OThDMTE2LjQ2MiAxNTguNzU4IDExNi44NTkgMTYwLjI0MiAxMTguMDE3IDE2MC45MTFMMTMzLjg4MSAxNzAuMDlDMTM1LjAzOSAxNzAuNzYgMTM2LjUyIDE3MC4zNjIgMTM3LjE4OCAxNjkuMjAyTDE1My44MTkgMTQwLjMzN0MxNTQuNDg3IDEzOS4xNzcgMTU0LjA5MSAxMzcuNjk0IDE1Mi45MzMgMTM3LjAyNEwxMzcuMDY4IDEyNy44NDVDMTM1LjkxIDEyNy4xNzYgMTM0LjQzIDEyNy41NzMgMTMzLjc2MSAxMjguNzMzWiIgZmlsbD0iIzFBMUE0MCIvPgo8cGF0aCBkPSJNNTMuNDYwNSAxMjguNDg5TDM3LjU5NTYgMTM3LjY2N0MzNi40Mzc4IDEzOC4zMzcgMzYuMDQxMiAxMzkuODIxIDM2LjcwOTYgMTQwLjk4MUw1My4zNDA0IDE2OS44NDZDNTQuMDA4OCAxNzEuMDA2IDU1LjQ4OTIgMTcxLjQwMyA1Ni42NDcgMTcwLjczNEw3Mi41MTIgMTYxLjU1NUM3My42Njk3IDE2MC44ODUgNzQuMDY2NCAxNTkuNDAyIDczLjM5OCAxNTguMjQyTDU2Ljc2NzIgMTI5LjM3N0M1Ni4wOTg4IDEyOC4yMTcgNTQuNjE4MyAxMjcuODE5IDUzLjQ2MDUgMTI4LjQ4OVoiIGZpbGw9IiMxQTFBNDAiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTQwNS41MjcgMjA3Ljg5MUM0MDkuNjgxIDIwNy44OTEgNDEzLjUzNiAyMDUuNzk1IDQxNS44MyAyMDIuMzI5QzQyOS4yOTMgMTgxLjk5NSA0NDIuNDggMTQ4LjE5NCA0NDIuNDggMTE1LjA1OEM0NDIuNDg3IDYyLjcyNjggNDA1LjQxNSA4IDM5NC42NzIgOEMzODMuOTI4IDggMzQ2Ljg1NiA2Mi43MjY4IDM0Ni44NTYgMTE1LjA1OEMzNDYuODU2IDE0OC4yMDEgMzYwLjA0MyAxODIuMDAzIDM3My41MDYgMjAyLjMyOUMzNzUuOCAyMDUuNzk1IDM3OS42NjIgMjA3Ljg5MSAzODMuODA5IDIwNy44OTFINDA1LjUySDQwNS41MjdaIiBmaWxsPSIjMUY5NkMyIi8+CjwvZz4KPHBhdGggZD0iTTM5My4wMzYgMTEwLjk3TDM4MS42ODcgMTM5Ljc3MUMzODEuMDA3IDE0MS40OTMgMzgzLjEwNiAxNDIuOTY4IDM4NC40ODkgMTQxLjczM0wzOTMuNTA2IDEzMy43MTVDMzk0LjE3MSAxMzMuMTIzIDM5NS4xNzIgMTMzLjEyMyAzOTUuODM3IDEzMy43MTVMNDA0Ljg1NSAxNDEuNzMzQzQwNi4yMzcgMTQyLjk2IDQwOC4zMzcgMTQxLjQ5MyA0MDcuNjU3IDEzOS43NzFMMzk2LjMwOCAxMTAuOTdDMzk1LjcyNSAxMDkuNDg4IDM5My42MjYgMTA5LjQ4OCAzOTMuMDM2IDExMC45N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOTUuNDE5IDc2LjEyNzhDNDIzLjQzNiA3Ni4xMjc4IDQ0Ni4yMjMgOTguOTYxOCA0NDYuMjIzIDEyNy4wMzZDNDQ2LjIyMyAxNTUuMTExIDQyMy40MzYgMTc3Ljk0NSAzOTUuNDE5IDE3Ny45NDVDMzY3LjQwMiAxNzcuOTQ1IDM0NC42MTUgMTU1LjExMSAzNDQuNjE1IDEyNy4wMzZDMzQ0LjYxNSA5OC45NjE4IDM2Ny40MDIgNzYuMTI3OCAzOTUuNDE5IDc2LjEyNzhaTTM5NS40MTkgMTcwLjQ1OUM0MTkuMzEyIDE3MC40NTkgNDM4Ljc1MiAxNTAuOTc5IDQzOC43NTIgMTI3LjAzNkM0MzguNzUyIDEwMy4wOTQgNDE5LjMxMiA4My42MTQzIDM5NS40MTkgODMuNjE0M0MzNzEuNTI2IDgzLjYxNDMgMzUyLjA4NiAxMDMuMDk0IDM1Mi4wODYgMTI3LjAzNkMzNTIuMDg2IDE1MC45NzkgMzcxLjUyNiAxNzAuNDU5IDM5NS40MTkgMTcwLjQ1OVoiIGZpbGw9IiMxRjk2QzIiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTQxMy4zNSAzMDYuNzE0QzQxMS42OTggMzA2LjcxNCA0MTAuMzYxIDMwOC4wNTQgNDEwLjM2MSAzMDkuNzA5VjM1MC4xMzZINDAwLjY0OVYyMDcuODkxSDM4OC42OTVWMzcyLjU5NkMzODguNjk1IDM3NS45MDUgMzkxLjM2OSAzNzguNTg1IDM5NC42NzIgMzc4LjU4NUMzOTcuOTc0IDM3OC41ODUgNDAwLjY0OSAzNzUuOTA1IDQwMC42NDkgMzcyLjU5NlYzNjguODUzSDQxMC4zNjFWNDA4LjUzMkM0MTAuMzYxIDQxMC4xODYgNDExLjY5OCA0MTEuNTI2IDQxMy4zNSA0MTEuNTI2QzQxNS4wMDEgNDExLjUyNiA0MTYuMzM4IDQxMC4xODYgNDE2LjMzOCA0MDguNTMyVjMwOS43MDlDNDE2LjMzOCAzMDguMDU0IDQxNS4wMDEgMzA2LjcxNCA0MTMuMzUgMzA2LjcxNFoiIGZpbGw9IiMxRjk2QzIiLz4KPC9nPgo8cGF0aCBkPSJNNDA3LjM5NiAxOTQuNjgyTDQwNy4zOTYgMTYxLjQyMUM0MDcuMzk2IDE2MC4wODQgNDA2LjMxIDE1OSA0MDQuOTcxIDE1OUwzODYuNjE0IDE1OUMzODUuMjc0IDE1OSAzODQuMTg4IDE2MC4wODQgMzg0LjE4OCAxNjEuNDIxTDM4NC4xODggMTk0LjY4MkMzODQuMTg4IDE5Ni4wMTkgMzg1LjI3NCAxOTcuMTAzIDM4Ni42MTQgMTk3LjEwM0w0MDQuOTcxIDE5Ny4xMDNDNDA2LjMxIDE5Ny4xMDMgNDA3LjM5NiAxOTYuMDE5IDQwNy4zOTYgMTk0LjY4MloiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTM1My4zMDcgODQuODc2N0wzMzYuNjc2IDExMy43NDFDMzM2LjAwOCAxMTQuOTAyIDMzNi40MDQgMTE2LjM4NSAzMzcuNTYyIDExNy4wNTVMMzUzLjQyNyAxMjYuMjM0QzM1NC41ODUgMTI2LjkwMyAzNTYuMDY1IDEyNi41MDYgMzU2LjczNCAxMjUuMzQ2TDM3My4zNjQgOTYuNDgwOUMzNzQuMDMzIDk1LjMyMDcgMzczLjYzNiA5My44MzcyIDM3Mi40NzggOTMuMTY3NEwzNTYuNjEzIDgzLjk4ODhDMzU1LjQ1NiA4My4zMTkgMzUzLjk3NSA4My43MTY1IDM1My4zMDcgODQuODc2N1oiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTQzMy44NTIgODMuMzQzOUw0MTcuOTg3IDkyLjUyMjRDNDE2LjgyOSA5My4xOTIzIDQxNi40MzMgOTQuNjc1OCA0MTcuMTAxIDk1LjgzNTlMNDMzLjczMiAxMjQuNzAxQzQzNC40IDEyNS44NjEgNDM1Ljg4MSAxMjYuMjU4IDQzNy4wMzkgMTI1LjU4OUw0NTIuOTA0IDExNi40MUM0NTQuMDYxIDExNS43NCA0NTQuNDU4IDExNC4yNTcgNDUzLjc5IDExMy4wOTdMNDM3LjE1OSA4NC4yMzE3QzQzNi40OSA4My4wNzE2IDQzNS4wMSA4Mi42NzQxIDQzMy44NTIgODMuMzQzOVoiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTkwLjIyNjcgODNWODAuMTQ0SDk0LjA0MjdWNjguOTEySDkwLjgyNjdWNjYuNzI4QzkyLjYwMjcgNjYuMzkyIDkzLjgyNjcgNjUuOTM2IDk0Ljk1NDcgNjUuMjRIOTcuNTcwN1Y4MC4xNDRIMTAwLjkwN1Y4M0g5MC4yMjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM5MS4yMjcgMTg4LjQ3NVYxODUuNjE5SDM5NS4wNDNWMTc0LjM4N0gzOTEuODI3VjE3Mi4yMDNDMzkzLjYwMyAxNzEuODY3IDM5NC44MjcgMTcxLjQxMSAzOTUuOTU1IDE3MC43MTVIMzk4LjU3MVYxODUuNjE5SDQwMS45MDdWMTg4LjQ3NUgzOTEuMjI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ4LjY5MzMgMTU3LjE3VjE1NS4xM0M1My41MTczIDE1MC44MSA1Ni4zNzMzIDE0Ny40NzQgNTYuMzczMyAxNDQuNzM4QzU2LjM3MzMgMTQyLjkzOCA1NS4zODkzIDE0MS44NTggNTMuNzA5MyAxNDEuODU4QzUyLjQxMzMgMTQxLjg1OCA1MS4zMzMzIDE0Mi42OTggNTAuNDQ1MyAxNDMuNjgyTDQ4LjUyNTMgMTQxLjc2MkM1MC4xNTczIDE0MC4wMzQgNTEuNzQxMyAxMzkuMDc0IDU0LjE2NTMgMTM5LjA3NEM1Ny41MjUzIDEzOS4wNzQgNTkuNzU3MyAxNDEuMjM0IDU5Ljc1NzMgMTQ0LjU0NkM1OS43NTczIDE0Ny43NjIgNTcuMDkzMyAxNTEuMjE4IDUzLjg1MzMgMTU0LjM4NkM1NC43NDEzIDE1NC4yOSA1NS45MTczIDE1NC4xOTQgNTYuNzMzMyAxNTQuMTk0SDYwLjU5NzNWMTU3LjE3SDQ4LjY5MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjY5MzMgMTU4LjE3VjE1NC42ODNMNDguMDI2MiAxNTQuMzg1QzUwLjQyNTQgMTUyLjIzNiA1Mi4yODk3IDE1MC4zNzIgNTMuNTQ5IDE0OC43MzFDNTQuODIzOSAxNDcuMDcgNTUuMzczMyAxNDUuNzcxIDU1LjM3MzMgMTQ0LjczOEM1NS4zNzMzIDE0NC4wMTMgNTUuMTc2OCAxNDMuNTYyIDU0LjkzNTggMTQzLjNDNTQuNzA1IDE0My4wNSA1NC4zMjc2IDE0Mi44NTggNTMuNzA5MyAxNDIuODU4QzUyLjg1OTYgMTQyLjg1OCA1Mi4wMzM2IDE0My40MTQgNTEuMTg3NyAxNDQuMzUyTDUwLjQ4MjUgMTQ1LjEzM0w0Ny4xMzEgMTQxLjc4Mkw0Ny43OTgzIDE0MS4wNzVDNDkuNTU0NSAxMzkuMjE2IDUxLjM4NDMgMTM4LjA3NCA1NC4xNjUzIDEzOC4wNzRDNTYuMDYyMiAxMzguMDc0IDU3LjcyNTUgMTM4LjY4NyA1OC45MTk1IDEzOS44NTJDNjAuMTE2MiAxNDEuMDE5IDYwLjc1NzMgMTQyLjY1OCA2MC43NTczIDE0NC41NDZDNjAuNzU3MyAxNDYuNDI0IDU5Ljk4MzggMTQ4LjI4MyA1OC44NjA5IDE1MC4wMjVDNTguMTY3MSAxNTEuMTAyIDU3LjMxOTggMTUyLjE2NSA1Ni4zODc1IDE1My4xOThDNTYuNTA3NCAxNTMuMTk1IDU2LjYyMzEgMTUzLjE5NCA1Ni43MzMzIDE1My4xOTRINjEuNTk3M1YxNTguMTdINDcuNjkzM1pNNTUuNDAzMyAxNTQuMjQ4QzU0Ljg2OTkgMTU0LjI4NCA1NC4zMjE1IDE1NC4zMzUgNTMuODUzMyAxNTQuMzg2QzU0LjIyNyAxNTQuMDIgNTQuNTkzIDE1My42NTEgNTQuOTQ4MiAxNTMuMjc5QzU3LjY3MjQgMTUwLjQyNCA1OS43NTczIDE0Ny4zOTEgNTkuNzU3MyAxNDQuNTQ2QzU5Ljc1NzMgMTQxLjIzNCA1Ny41MjUzIDEzOS4wNzQgNTQuMTY1MyAxMzkuMDc0QzUyLjA5MzMgMTM5LjA3NCA1MC42MzUgMTM5Ljc3NSA0OS4yMzU5IDE0MS4wNThDNDkuMjAzNiAxNDEuMDg4IDQ5LjE3MTMgMTQxLjExOCA0OS4xMzkgMTQxLjE0OEM0OC45MzQgMTQxLjM0IDQ4LjczIDE0MS41NDUgNDguNTI1MyAxNDEuNzYyTDUwLjQ0NTMgMTQzLjY4MkM1MC42NjE0IDE0My40NDIgNTAuODg4OSAxNDMuMjExIDUxLjEyODIgMTQyLjk5OUM1MS44NzE4IDE0Mi4zMzkgNTIuNzI4NyAxNDEuODU4IDUzLjcwOTMgMTQxLjg1OEM1NS4zODkzIDE0MS44NTggNTYuMzczMyAxNDIuOTM4IDU2LjM3MzMgMTQ0LjczOEM1Ni4zNzMzIDE0Ny40NzQgNTMuNTE3MyAxNTAuODEgNDguNjkzMyAxNTUuMTNWMTU3LjE3SDYwLjU5NzNWMTU0LjE5NEg1Ni43MzMzQzU2LjM0NzYgMTU0LjE5NCA1NS44ODE0IDE1NC4yMTUgNTUuNDAzMyAxNTQuMjQ4WiIgZmlsbD0iIzFBMUE0MCIvPgo8cGF0aCBkPSJNMzQ4LjA4NCAxMTNWMTEwLjk2QzM1Mi45MDggMTA2LjY0IDM1NS43NjQgMTAzLjMwNCAzNTUuNzY0IDEwMC41NjhDMzU1Ljc2NCA5OC43NjggMzU0Ljc4IDk3LjY4OCAzNTMuMSA5Ny42ODhDMzUxLjgwNCA5Ny42ODggMzUwLjcyNCA5OC41MjggMzQ5LjgzNiA5OS41MTJMMzQ3LjkxNiA5Ny41OTJDMzQ5LjU0OCA5NS44NjQgMzUxLjEzMiA5NC45MDQgMzUzLjU1NiA5NC45MDRDMzU2LjkxNiA5NC45MDQgMzU5LjE0OCA5Ny4wNjQgMzU5LjE0OCAxMDAuMzc2QzM1OS4xNDggMTAzLjU5MiAzNTYuNDg0IDEwNy4wNDggMzUzLjI0NCAxMTAuMjE2QzM1NC4xMzIgMTEwLjEyIDM1NS4zMDggMTEwLjAyNCAzNTYuMTI0IDExMC4wMjRIMzU5Ljk4OFYxMTNIMzQ4LjA4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzQuNzA2IDE1Ny41MDZDMTMxLjg5OCAxNTcuNTA2IDEzMC4wMDIgMTU2LjQ1IDEyOC43NTQgMTU1LjAzNEwxMzAuNDEgMTUyLjgwMkMxMzEuNDY2IDE1My44MzQgMTMyLjc2MiAxNTQuNjI2IDEzNC4zNyAxNTQuNjI2QzEzNi4xNyAxNTQuNjI2IDEzNy4zOTQgMTUzLjczOCAxMzcuMzk0IDE1Mi4xNTRDMTM3LjM5NCAxNTAuNDAyIDEzNi4zNjIgMTQ5LjMyMiAxMzIuNDk4IDE0OS4zMjJWMTQ2Ljc3OEMxMzUuNzYyIDE0Ni43NzggMTM2LjgxOCAxNDUuNjUgMTM2LjgxOCAxNDQuMDY2QzEzNi44MTggMTQyLjY3NCAxMzUuOTU0IDE0MS44NTggMTM0LjQ0MiAxNDEuODM0QzEzMy4xNyAxNDEuODU4IDEzMi4xMzggMTQyLjQ1OCAxMzEuMDgyIDE0My40MThMMTI5LjI4MiAxNDEuMjU4QzEzMC44MTggMTM5LjkxNCAxMzIuNTIyIDEzOS4wNzQgMTM0LjYxIDEzOS4wNzRDMTM4LjA0MiAxMzkuMDc0IDE0MC4zNyAxNDAuNzU0IDE0MC4zNyAxNDMuODAyQzE0MC4zNyAxNDUuNzIyIDEzOS4yOSAxNDcuMTE0IDEzNy4zOTQgMTQ3Ljg1OFYxNDcuOTc4QzEzOS40MSAxNDguNTMgMTQwLjk0NiAxNTAuMDE4IDE0MC45NDYgMTUyLjM0NkMxNDAuOTQ2IDE1NS42MSAxMzguMDkgMTU3LjUwNiAxMzQuNzA2IDE1Ny41MDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDM2LjQ2MyAxMTMuMzM2QzQzMy42NTUgMTEzLjMzNiA0MzEuNzU5IDExMi4yOCA0MzAuNTExIDExMC44NjRMNDMyLjE2NyAxMDguNjMyQzQzMy4yMjMgMTA5LjY2NCA0MzQuNTE5IDExMC40NTYgNDM2LjEyNyAxMTAuNDU2QzQzNy45MjcgMTEwLjQ1NiA0MzkuMTUxIDEwOS41NjggNDM5LjE1MSAxMDcuOTg0QzQzOS4xNTEgMTA2LjIzMiA0MzguMTE5IDEwNS4xNTIgNDM0LjI1NSAxMDUuMTUyVjEwMi42MDhDNDM3LjUxOSAxMDIuNjA4IDQzOC41NzUgMTAxLjQ4IDQzOC41NzUgOTkuODk2QzQzOC41NzUgOTguNTA0IDQzNy43MTEgOTcuNjg4IDQzNi4xOTkgOTcuNjY0QzQzNC45MjcgOTcuNjg4IDQzMy44OTUgOTguMjg4IDQzMi44MzkgOTkuMjQ4TDQzMS4wMzkgOTcuMDg4QzQzMi41NzUgOTUuNzQ0IDQzNC4yNzkgOTQuOTA0IDQzNi4zNjcgOTQuOTA0QzQzOS43OTkgOTQuOTA0IDQ0Mi4xMjcgOTYuNTg0IDQ0Mi4xMjcgOTkuNjMyQzQ0Mi4xMjcgMTAxLjU1MiA0NDEuMDQ3IDEwMi45NDQgNDM5LjE1MSAxMDMuNjg4VjEwMy44MDhDNDQxLjE2NyAxMDQuMzYgNDQyLjcwMyAxMDUuODQ4IDQ0Mi43MDMgMTA4LjE3NkM0NDIuNzAzIDExMS40NCA0MzkuODQ3IDExMy4zMzYgNDM2LjQ2MyAxMTMuMzM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},60046:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-10-9d2ee6e5d5d45f0b38a6ceec29752013.png"},33687:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-11-979bb5e8fc2ea59948c5e9288c434e95.png"},44956:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-12-1f908843cef7d4e9f132ca08336d9ada.png"},62469:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-13-32a87ba74f2820dbd799a83f01507fbd.png"},77802:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-14-824ee2cd94aaff84ee9d76587ceae11f.png"},48207:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-2-d0a586a6b08a5470a3e60cf7159be03c.png"},63110:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-3-71baf96f6da8f95c516f35a44ba3db23.png"},68089:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-4-a80ded2ffec53c3a090a59d4f32c293b.png"},17739:(e,M,A)=>{A.d(M,{A:()=>N});const N="data:image/png;base64,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"},54082:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-7-1e0be2e9a633cfdae483eeeafb83861f.png"},54949:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-8-ab09c07aec135bad240d4ced4187fd05.png"},21084:(e,M,A)=>{A.d(M,{A:()=>N});const N=A.p+"assets/images/example-1-9-9bd5c6541730a09092f5427d7f46fa1b.png"},28453:(e,M,A)=>{A.d(M,{R:()=>D,x:()=>r});var N=A(96540);const i={},t=N.createContext(i);function D(e){const M=N.useContext(t);return N.useMemo((function(){return"function"==typeof e?e(M):{...M,...e}}),[M,e])}function r(e){let M;return M=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:D(e.components),N.createElement(t.Provider,{value:M},e.children)}}}]);