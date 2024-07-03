"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1273],{31248:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=o(74848),n=o(28453);const i={title:"Release Candidate 1 2.0.0 20240329",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png"}},s=void 0,l={permalink:"/announcement/2024/02/29/RC1-2.0.0",source:"@site/announcement/2024-02-29-RC1-2.0.0.md",title:"Release Candidate 1 2.0.0 20240329",description:"Rotorflight Release Candidate 1 2.0.0 is ready",date:"2024-02-29T00:00:00.000Z",tags:[],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}],frontMatter:{title:"Release Candidate 1 2.0.0 20240329",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}},unlisted:!1,prevItem:{title:"Release Candidate 2 2.0.0 20240415",permalink:"/announcement/2024/04/15/RC2 2.0.0"},nextItem:{title:"snapshot 2.0.0-20240218",permalink:"/announcement/2024/02/18/snapshot 2.0.0"}},a={authorsImageUrls:[void 0]},h=[{value:"NOTE! This is the first public release of Rotorflight-2, suitable for all audiences.",id:"note-this-is-the-first-public-release-of-rotorflight-2-suitable-for-all-audiences",level:2},{value:"Download The Configurator here.",id:"download-the-configurator-here",level:4},{value:"Download Blackbox here.",id:"download-blackbox-here",level:4},{value:"OpenTX/EdgeTX LUA Scripts",id:"opentxedgetx-lua-scripts",level:4},{value:"Ethos LUA Scripts",id:"ethos-lua-scripts",level:4},{value:"Notes",id:"notes",level:2},{value:"Support",id:"support",level:3},{value:"Changes from 2.0.0-20240218",id:"changes-from-200-20240218",level:3},{value:"Changes to the Firmware:",id:"changes-to-the-firmware",level:4},{value:"Changes to the Configurator:",id:"changes-to-the-configurator",level:4},{value:"Changes to the Blackbox:",id:"changes-to-the-blackbox",level:4},{value:"Changes to LUA Scripts:",id:"changes-to-lua-scripts",level:4}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Rotorflight Release Candidate 1 2.0.0 is ready"}),"\n",(0,r.jsx)(t.h2,{id:"note-this-is-the-first-public-release-of-rotorflight-2-suitable-for-all-audiences",children:"NOTE! This is the first public release of Rotorflight-2, suitable for all audiences."}),"\n",(0,r.jsx)(t.p,{children:"Two years of hard work, blood and tears, and lost hair has gone into this release. Big thanks to everybody who have helped along the way!"}),"\n",(0,r.jsxs)(t.admonition,{title:"Downloads",type:"tip",children:[(0,r.jsxs)(t.h4,{id:"download-the-configurator-here",children:[(0,r.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-configurator/releases/tag/release/2.0.0-RC1",children:"Download The Configurator here"}),"."]}),(0,r.jsxs)(t.h4,{id:"download-blackbox-here",children:[(0,r.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-blackbox/releases/tag/release/2.0.0-RC1",children:"Download Blackbox here"}),"."]}),(0,r.jsx)(t.h4,{id:"opentxedgetx-lua-scripts",children:(0,r.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/release/2.0.0-RC1",children:"OpenTX/EdgeTX LUA Scripts"})}),(0,r.jsx)(t.h4,{id:"ethos-lua-scripts",children:(0,r.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/release/2.0.0-RC1",children:"Ethos LUA Scripts"})})]}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.p,{children:["There is a new website ",(0,r.jsx)(t.a,{href:"http://www.rotorflight.org",children:"www.rotorflight.org"})," for Rotorflight 2. The old Wiki in github is deprecated, and is for Rotorflight-1 only. Rotorflight 2 is NOT backward compatible with RF1. You MUST NOT load your configuration dump from RF1 into RF2. If coming from RF1, please setup your helicopter from scratch for RF2. Follow the instructions on the website! As always, please double check your configuration on the bench before flying!"]}),"\n",(0,r.jsx)(t.h3,{id:"support",children:"Support"}),"\n",(0,r.jsxs)(t.p,{children:["The main source of Rotorflight information and instructions is now the ",(0,r.jsx)(t.a,{href:"https://www.rotorflight.org",children:"Website"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Rotorflight has a strong presence on the Discord platform - ",(0,r.jsx)(t.a,{href:"https://discord.gg/6QUySXdEvd",children:"you can join us here"}),". Discord is the primary location for support, questions and discussions. The developers are all active there, many pro pilots and several manufacturers of RF Flight Controllers. This is a great place to ask for advice or discuss any complicated problems or even new ideas."]}),"\n",(0,r.jsxs)(t.p,{children:["There is also a ",(0,r.jsx)(t.a,{href:"https://www.facebook.com/groups/876445460825093/",children:"Rotorflight Facebook Group"})," for hanging out with other Rotorflight pilots."]}),"\n",(0,r.jsx)(t.h3,{id:"changes-from-200-20240218",children:"Changes from 2.0.0-20240218"}),"\n",(0,r.jsx)(t.h4,{id:"changes-to-the-firmware",children:"Changes to the Firmware:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Refactor MSP_SERVO_CONFIGURATIONS"}),"\n",(0,r.jsx)(t.li,{children:"Use internal pull-up on FREQ input"}),"\n",(0,r.jsx)(t.li,{children:"Use falling edge trigger on FREQ input"}),"\n",(0,r.jsx)(t.li,{children:"Change default yaw precomp parameters"}),"\n",(0,r.jsx)(t.li,{children:"Change default governor master gain"}),"\n",(0,r.jsx)(t.li,{children:"Change default rates response time to 0 (no limit)"}),"\n",(0,r.jsx)(t.li,{children:"Change default dynamic notch count to 4"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"changes-to-the-configurator",children:"Changes to the Configurator:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fix Zoom function"}),"\n",(0,r.jsx)(t.li,{children:"Relax servo rate limits"}),"\n",(0,r.jsx)(t.li,{children:"Refactor MSP_SERVO_CONFIGURATIONS"}),"\n",(0,r.jsx)(t.li,{children:"Change default channel order to AECR1T23"}),"\n",(0,r.jsx)(t.li,{children:"Add vendor names in receiver protocols"}),"\n",(0,r.jsx)(t.li,{children:"Many fixes in labels and help texts"}),"\n",(0,r.jsx)(t.li,{children:"Update locales for translation"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"changes-to-the-blackbox",children:"Changes to the Blackbox:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"NONE"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"changes-to-lua-scripts",children:"Changes to LUA Scripts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added Servos page"}),"\n",(0,r.jsx)(t.li,{children:"Ethos: added support for dark and normal mode"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>l});var r=o(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);