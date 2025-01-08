"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1881],{95721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"Tuning/Cyclic-Cross-Coupling","title":"Cyclic Cross Coupling","description":"What is it?","source":"@site/docs/Tuning/Cyclic-Cross-Coupling.md","sourceDirName":"Tuning","slug":"/Tuning/Cyclic-Cross-Coupling","permalink":"/docs/next/Tuning/Cyclic-Cross-Coupling","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/Cyclic-Cross-Coupling.md","tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_position":60},"sidebar":"tuningSidebar","previous":{"title":"Tune the Governor","permalink":"/docs/next/Tuning/Tune-Governor"},"next":{"title":"Motorised Tail and TTA","permalink":"/docs/next/Tuning/Motorised-Tail-and-TTA"}}');var i=n(74848),s=n(28453);const r={sidebar_position:60},a="Cyclic Cross Coupling",c={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"How to tune it?",id:"how-to-tune-it",level:2},{value:"(Advanced Topic) Constant Cross Coupling",id:"advanced-topic-constant-cross-coupling",level:2}];function h(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"cyclic-cross-coupling",children:"Cyclic Cross Coupling"})}),"\n",(0,i.jsx)(t.h2,{id:"what-is-it",children:"What is it?"}),"\n",(0,i.jsx)(t.p,{children:"During ticktocks, one might observe that the center of the main rotor rotates during stops. Another scenario is during hover, one can shake the elevator stick and observe a tilt in the roll axis and a significant drift in the yaw axis. These are both the symptoms of uncompensated cyclic cross coupling."}),"\n",(0,i.jsx)(t.p,{children:'Cyclic cross coupling happens mainly due to the pitch axis inputs. When the pitch command is given, due to the high moment of inertia of the helicopter in the pitch axis, the frame would "lag" behind the rotor disks. This difference in position creates a torque on the rotor blade and thus transfer to the roll axis due to gyroscopic precession.'}),"\n",(0,i.jsx)(t.p,{children:"The cross coupling compensation simply take a derivative on the pitch SETPOINT and add it proportionally to the roll axis. This effectively pre-load the roll axis with a input command so that when the above scenario happens, the two effects cancel each other."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-tune-it",children:"How to tune it?"}),"\n",(0,i.jsx)(t.p,{children:"Start with a low value and increase when there's no significant coupling is observed or when there is a diminishing return. You might also want to try piroflips because cross-coupling gain changes the corresponding commands at different orientations during piroflips. Try increase the gain slowly so you can get used to the feeling."}),"\n",(0,i.jsx)(t.p,{children:"From experience, the harder the main rotor dampener is, the lower cross coupling gain is required."}),"\n",(0,i.jsx)(t.h2,{id:"advanced-topic-constant-cross-coupling",children:"(Advanced Topic) Constant Cross Coupling"}),"\n",(0,i.jsx)(t.p,{children:"The above cross coupling only happens at the moment of pitch (could also be a little bit of roll) input. However, there could be another scenario that a constant cross-coupling might occur. If the main blade flap axis is not centered at the middle commonly due to very hard dampeners, very low headspeed, or rotorhead designs, a constant cross coupling might occur because the phase lag of the rotor blade is no longer perfectly 90deg. In this case, you might want to consider adjusting the phase angle in the Mixer page. Usually a +2 to +10 deg would be a good range to start and more testing is needed. You might also want to make sure that it is doing the right thing. For CW rotor, when pushing the elevator, the swash should tilt slightly right, and when you pull the elevator stick, the swash should tilt slightly left."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);