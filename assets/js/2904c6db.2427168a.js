"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4505],{41810:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-status","title":"FrSky Ethos RFStatus LUA Script","description":"Installation","source":"@site/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-status.mdx","sourceDirName":"Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos","slug":"/Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-status","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-status","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-status.mdx","tags":[],"version":"2.0.0","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"FrSky Ethos and Nexus example","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/radio-setup/radio-setup-ethos/ethos-nexus-setup"},"next":{"title":"Radio Setup - Jeti","permalink":"/docs/2.0.0/category/radio-setup---jeti"}}');var n=s(74848),o=s(28453);const a={sidebar_position:30},r="FrSky Ethos RFStatus LUA Script",h={},d=[];function l(e){const t={h1:"h1",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"frsky-ethos-rfstatus-lua-script",children:"FrSky Ethos RFStatus LUA Script"})}),"\n",(0,n.jsx)(t.p,{children:"Installation\nAs part of the RFSuite installation detailed above the RFStatus Widget is installed in the background and is ready for configuration."}),"\n",(0,n.jsx)(t.p,{children:"Before proceeding please ensure the Heli, RX and Rotorflight FBL are powered on and connected to your Ethos transmitter, At this point please ensure you have the full list of Telemetry sensors showing in the Model\\Telemetry screen."}),"\n",(0,n.jsx)(t.p,{children:"##-- PLEASE REMOVE THE BLADES --"}),"\n",(0,n.jsx)(t.p,{children:"Ethos Screen Setup\nFrom the main screen press the DISP button and a screen similar to this will be shown."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(15816).A+"",width:"2718",height:"1012"})}),"\n",(0,n.jsx)(t.p,{children:"Press the + symbol to add another screen, scroll down and select the full screen icon as shown."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(50039).A+"",width:"2702",height:"1014"})}),"\n",(0,n.jsx)(t.p,{children:"Select Change Widget, scroll thru the list and select Rotorflight Status"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(57417).A+"",width:"2722",height:"1024"})}),"\n",(0,n.jsx)(t.p,{children:"The following screen is shown, select Configure"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(12044).A+"",width:"2718",height:"1022"})}),"\n",(0,n.jsx)(t.p,{children:"The following screen is the main configuration options for the Rotorflight Status widget"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(38491).A+"",width:"2720",height:"1032"})}),"\n",(0,n.jsx)(t.p,{children:"TRIGGERS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(83710).A+"",width:"2722",height:"1028"})}),"\n",(0,n.jsx)(t.p,{children:"The ARM and IDLE-UP switch positions MUST be entered as per your Rotorflight configurator setup, in this example SE is ARM (Motor) and SD is IDLE-UP or Throttle Enable. Delay before active is the time taken for your motor to reach idle-up RPM. Current measurements will be started after this timeout."}),"\n",(0,n.jsx)(t.p,{children:"TIMER CONFIGURATION"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(88605).A+"",width:"2722",height:"1024"})}),"\n",(0,n.jsx)(t.p,{children:"This is a count UP timer and will alarm at the set point, you can disable if using another Ethos timer."}),"\n",(0,n.jsx)(t.p,{children:"BATTERY CONFIGURATION"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(33024).A+"",width:"2716",height:"1032"})}),"\n",(0,n.jsx)(t.p,{children:"Enter your Battery \\ Voltage settings and preferences, the 'Play alert on' can be configured for your preference."}),"\n",(0,n.jsx)(t.p,{children:"SWITCH ANNOUNCEMENTS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(90354).A+"",width:"2720",height:"1026"})}),"\n",(0,n.jsx)(t.p,{children:"This section allows you to have the status widget play announcements depending on your TX switch positions."}),"\n",(0,n.jsx)(t.p,{children:"TELEMETRY ANNOUNCEMENTS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(66735).A+"",width:"2724",height:"1026"})}),"\n",(0,n.jsx)(t.p,{children:"Similar to the above, allows the status widget to play various Telemetry announcements depending on your TX switch positions, this could include, for example, using the rear panel SJ momentary switch to announce Fuel and/or Voltage."}),"\n",(0,n.jsx)(t.p,{children:"GOVERNOR ANNOUNCEMENTS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(76416).A+"",width:"2714",height:"1030"})}),"\n",(0,n.jsx)(t.p,{children:"Similar to the above but recommended to enable as per your preferences.These are primarily intended for use when using the Rotorflight Governor - If using an External ESC governor you will receive basic announcements of ARMED, DISARMED, ACTIVE and THROTTLE OFF."}),"\n",(0,n.jsx)(t.p,{children:"CUSTOMISE DISPLAY"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(44509).A+"",width:"2722",height:"1034"})}),"\n",(0,n.jsx)(t.p,{children:"This is the main widget display which has 6 pre-defined boxes each of which can display a range of items for your layout preference."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(21814).A+"",width:"2724",height:"1034"})}),"\n",(0,n.jsx)(t.p,{children:"The additional display options allow the widget to display the min\\max of the sensors as well as colours to indicate status or low battery. You also have the option to add additional sensors from Telemetry and choose these to display in the main screen."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(66579).A+"",width:"2718",height:"1028"})}),"\n",(0,n.jsx)(t.p,{children:"ADVANCED OPTIONS"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ethos",src:s(40356).A+"",width:"2720",height:"1032"})}),"\n",(0,n.jsx)(t.p,{children:"This is where you select Rotorflight Internal or an External governor for the widget, as well as any temp conversion from Centigrade to Fahrenheit."}),"\n",(0,n.jsx)(t.p,{children:"The Voltage section allows you to choose how sensitive the low voltage alarms will be depending on the voltage sag whilst in flight.The sag compensation is a time delay before the alarms are announced."}),"\n",(0,n.jsx)(t.p,{children:"Gimbal monitor effectively monitors your stick positions based on the drop down selection, and alerts if the given value is met. Normally disabled."}),"\n",(0,n.jsx)(t.p,{children:"The Headspeed option allows you to set the announcement which will tell you when the headspeed has changed, 10% default, usefull to monitor if the Governor is maintaining the requested headspeed during fast 3D manoeuvres. Could point to Governor PID tuning."}),"\n",(0,n.jsx)(t.p,{children:"Calculate fuel locally can be used in the event your ESC does not send a current measurement."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15816:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-1-e69f177f961080ce0ccce4845a7aee7c.jpg"},90354:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-10-0390393535755891e504b07f21ba125e.jpg"},66735:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-11-7d815a93fd40ce6c6e80259d30efc219.jpg"},76416:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-12-c85769d94a69def9eb8df4412e8ebdcf.jpg"},44509:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-13-cafa465f0aaeb556194978cc0faf4287.jpg"},21814:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-14-aa62273208516fd6d9db81ab11c39599.jpg"},66579:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-15-e4b3a9da05a5e60168ae080862a019f8.jpg"},40356:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-16-5b8af1b5ae9be05023ddc7876822e398.jpg"},50039:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-2-6f03f33e925846004bf388c9b17d707d.jpg"},57417:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-4-0afd89047d69257f8e79b91b8dfdae1f.jpg"},12044:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-5-f6d41b9638d68baf87cf2ebd7c52e5d6.jpg"},38491:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-6-a78a5cfffcbd70a0a8e2becacd3d42e8.jpg"},83710:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-7-ae0992d05ed0d0eff4a9936deb31cf41.jpg"},88605:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-8-1bb56f5f954af110343cd8fb10986979.jpg"},33024:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ethos-status-9-fba01e9c1e468d06088d6b80fed87761.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var i=s(96540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);