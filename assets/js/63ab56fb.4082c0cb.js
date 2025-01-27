"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5270],{49522:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"setup/setup-servos","title":"Servo Setup and Calibration","description":"Step 1 - set frequency and center","source":"@site/versioned_docs/version-2.1.0/setup/setup-servos.mdx","sourceDirName":"setup","slug":"/setup/setup-servos","permalink":"/docs/setup/setup-servos","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/setup/setup-servos.mdx","tags":[],"version":"2.1.0","sidebarPosition":50,"frontMatter":{"sidebar_position":50},"sidebar":"tutorialSidebar","previous":{"title":"Remapping (for DIY boards)","permalink":"/docs/setup/remapping"},"next":{"title":"Mixer Setup and Calibration","permalink":"/docs/setup/setup-mixer"}}');var n=t(74848),i=t(28453),o=t(90937);const a={sidebar_position:50},c="Servo Setup and Calibration",l={},d=[{value:"Step 1 - set frequency and center",id:"step-1---set-frequency-and-center",level:3},{value:"Step 2 - Set servo directions",id:"step-2---set-servo-directions",level:3},{value:"Step 3 - set arms at 90 degrees",id:"step-3---set-arms-at-90-degrees",level:3},{value:"Step 5 - calibrate range (Optional - recommended)",id:"step-5---calibrate-range-optional---recommended",level:3},{value:"Step 4 - set final limits (Usually Not Required)",id:"step-4---set-final-limits-usually-not-required",level:3}];function h(e){const s={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"servo-setup-and-calibration",children:"Servo Setup and Calibration"})}),"\n",(0,n.jsx)(s.h3,{id:"step-1---set-frequency-and-center",children:"Step 1 - set frequency and center"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"DO NOT CONNECT THE SERVOS YET!"}),"\n",(0,n.jsxs)(s.li,{children:["Confirm and set the servo ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#center",children:"center"})," to your servo manufacturers recommendation. For Cyclic this will usually be 1520us, and for Tail it would be 760us."]}),"\n",(0,n.jsx)(s.li,{children:"If a servo's center is 760us, make sure to change the min/max to -350/350 instead of -700/700, and pos/neg scales to 250 instead of 500."}),"\n",(0,n.jsxs)(s.li,{children:["Confirm and set the servo ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#rate",children:"rate"})," as specified by your manufacturer. For many digital cyclic servos this is 333Hz and for most tail servos this is 560Hz."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"step-2---set-servo-directions",children:"Step 2 - Set servo directions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Connect the servos."}),"\n",(0,n.jsxs)(s.li,{children:["Set Servo override to ",(0,n.jsx)(s.code,{children:"ON"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Fit servo arms to as close to 90 degrees as possible."}),"\n",(0,n.jsxs)(s.li,{children:["Slide Servo 1 override in the ",(0,n.jsx)(s.strong,{children:"positive"})," direction (i.e. right)."]}),"\n",(0,n.jsxs)(s.li,{children:["Confirm the servo arm travels ",(0,n.jsx)(s.strong,{children:"upwards"})," towards the swashplate. If not toggle the ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#reverse",children:"servo reverse"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Repeat with remaining cyclic servos."}),"\n",(0,n.jsx)("video",{src:o.A,controls:!0,playsInline:!0,muted:!0,width:"85%"}),"\n",(0,n.jsx)(s.h3,{id:"step-3---set-arms-at-90-degrees",children:"Step 3 - set arms at 90 degrees"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Set each of the override sliders to 0 degrees."}),"\n",(0,n.jsxs)(s.li,{children:["Adjust ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#center",children:"center"})," to level the servo arm (0\xb0 or 90\xb0 depending on servo installation orientation). One quick way is to slide the override bar and copy the output value from the blue bar into the ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#center",children:"center"})," and press save. Make sure to reset the override to see the correct effect."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Repeat with remaining cyclic servos."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Servo Tab",src:t(95079).A+"",width:"1382",height:"805"})}),"\n",(0,n.jsx)(s.h3,{id:"step-5---calibrate-range-optional---recommended",children:"Step 5 - calibrate range (Optional - recommended)"}),"\n",(0,n.jsxs)(s.p,{children:["The purpose of servo calibration is so the FC is able to more accurately control its mechanical movements. Not all servos are the same. Sometimes identical servos can have several degrees of difference for the same output. Calibrating the servos can enable each servo to move by the same amount when commanded.",(0,n.jsx)(s.br,{}),"\n","Calibration is also required if using the Geometric Correction function."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Set the override to a positive value (e.g. 30\xb0)"}),"\n",(0,n.jsxs)(s.li,{children:["measure the current servo arm angle and increase or decrease the ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#scale-neg-and-scale-pos",children:"Scale Pos"})," until the servo arm angle matches the override angle."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Servo Tab",src:t(69668).A+"",width:"2620",height:"1434"})}),"\n",(0,n.jsx)(s.h3,{id:"step-4---set-final-limits-usually-not-required",children:"Step 4 - set final limits (Usually Not Required)"}),"\n",(0,n.jsxs)(s.p,{children:["With the servos installed in the helicopter, adjust ",(0,n.jsx)(s.a,{href:"/docs/configurator/tabs/servos#min-and-max",children:"Min/Max"}),"  so that the arm & ball won't hit anything in the heli frame (servo override @ 80\xb0 / -80\xb0)."]}),"\n",(0,n.jsx)(s.p,{children:"Repeat with remaining cyclic/tail servos."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},90937:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/medias/servo-setup-670e167379cd3f4a2bb24cb5ae342d49.mp4"},69668:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/servo-5-1b792e6285bd3f192c831a0dd138ca90.png"},95079:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/servos-centre-3e4e3352c3fc41d45502add101e15301.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);