"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3272],{36700:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Tuning/Tuning-description","title":"Tuning your Helicopter","description":"The default tuning parameters supplied with Rotorflight are designed to be safe and flyable for all helicopters. This means in most cases the helicopter will not be responsive and locked in on your first flight and some tuning will be required.","source":"@site/versioned_docs/version-2.1.0/Tuning/Tuning-description.md","sourceDirName":"Tuning","slug":"/Tuning/Tuning-description","permalink":"/docs/Tuning/Tuning-description","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/Tuning/Tuning-description.md","tags":[],"version":"2.1.0","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tuningSidebar","previous":{"title":"First Flight & Filter Tuning","permalink":"/docs/Tuning/First-Flight-Filter-Tuning"},"next":{"title":"Tune Feedforward","permalink":"/docs/Tuning/Tune-Feedforward"}}');var t=n(74848),o=n(28453);const r={sidebar_position:20},l="Tuning your Helicopter",a={},d=[{value:"Tuning Profile PID:",id:"tuning-profile-pid",level:2},{value:"Please also see the General Guidelines below for more specific descriptions",id:"please-also-see-the-general-guidelines-below-for-more-specific-descriptions",level:2},{value:"General Guidelines",id:"general-guidelines",level:2}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"tuning-your-helicopter",children:"Tuning your Helicopter"})}),"\n",(0,t.jsx)(i.p,{children:"The default tuning parameters supplied with Rotorflight are designed to be safe and flyable for all helicopters. This means in most cases the helicopter will not be responsive and locked in on your first flight and some tuning will be required."}),"\n",(0,t.jsxs)(i.p,{children:["These tuning parameters are located on the Profile tab in the ",(0,t.jsx)(i.a,{href:"/docs/configurator/tabs/profiles",children:"Configurator"})," and could also be changed via the ",(0,t.jsx)(i.a,{href:"/docs/setup/lua-scripts",children:"LUA Scripts"})," or ",(0,t.jsx)(i.a,{href:"/docs/configurator/tabs/adjustments",children:"Adjustments"})]}),"\n",(0,t.jsx)(i.h2,{id:"tuning-profile-pid",children:"Tuning Profile PID:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Profile PID",src:n(61598).A+"",width:"867",height:"421"})}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"Please start by confirming your filters are working correctly before you increase your tuning parameters. If you do not have filters enabled it is particularly important that you do not use Derivative. This can result in hot Motors and Servos."})}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:'What do we mean "wobble"??\nWhen tuning parameters are too high the helicopter will wobble or shake during some movements. Each time we increase a tuning value we need to test fly and see if the new setting is too high. Test this in the following way:'}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Beginner: Tap the stick and see if it shakes/shudders/wobbles"}),"\n",(0,t.jsx)(i.li,{children:"Average: Do some flips with sudden stops, try going fast and tapping the stick, do some Tictocs"}),"\n",(0,t.jsxs)(i.li,{children:["Advanced: Do crazy high speed high rate stuff that makes the FC sweat and see if it freaks out ","\ud83d\ude1c","."]}),"\n"]}),(0,t.jsx)(i.h2,{id:"please-also-see-the-general-guidelines-below-for-more-specific-descriptions",children:"Please also see the General Guidelines below for more specific descriptions"})]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Increase Derivative (D) on each axis individually, (roll, pitch, yaw) until it wobbles, then back off a bit. ",(0,t.jsx)(i.strong,{children:"(remember!! don't do this if your filters are not working)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Increase Proportional (P) on each axis individually, until it wobbles, then back off a bit."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Increase Integral (I) on each axis individually, until it wobbles, then back off a bit."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Set Feedforward so that you get good response and Integral (I) remains near 0 in full stick flips and rolls (viewed using the blackbox logs). Feedforward can also be tuned by following the description in ",(0,t.jsx)(i.a,{href:"/docs/Tuning/Tune-Feedforward",children:"Tune Feedforward"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If necessary, then tweak P",":D"," ratio to tweak stick response damping to your liking."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Increase ",(0,t.jsx)(i.a,{href:"/docs/Tuning/High-Speed-Integral",children:"HSI"})," until it wobbles when jabbing elevator at full collective, back off a bit."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Profile HSI",src:n(74081).A+"",width:"804",height:"548"})}),"\n",(0,t.jsxs)(i.ol,{start:"7",children:["\n",(0,t.jsx)(i.li,{children:"Increase Boost (B) if you want sharper/faster response."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"general-guidelines",children:"General Guidelines"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'The higher the gains are, the better the heli response to inputs, the more "locked in" heli feels.'}),"\n",(0,t.jsx)(i.li,{children:"The pitch axis is the most difficult axis to tune. It is advised to start here."}),"\n",(0,t.jsx)(i.li,{children:"The roll axis is the easiest. Many different gains works on the roll axis. It is advised to tune last."}),"\n",(0,t.jsx)(i.li,{children:"D-gain dampens oscillations caused by P, P-gain dampens oscillations caused by I."}),"\n",(0,t.jsx)(i.li,{children:"I-oscillation are very slow (0.5-1Hz) while P and D oscillations are fast (5-8Hz)."}),"\n",(0,t.jsx)(i.li,{children:"If there is I-oscillation, one could lower the I-gain or raise the P-gain."}),"\n",(0,t.jsx)(i.li,{children:"The best maneuver to see I-oscillation is to pirouetting long pitch pumps. If the heli does not stop clean and has a large shake, it is either I-gain being too high or P-gain being too low."}),"\n",(0,t.jsx)(i.li,{children:"It is possible to use the same I-gain on pitch and roll axis."}),"\n",(0,t.jsx)(i.li,{children:"Check tick-tock stops to see if P and D are too high by observing the fast oscillations. If oscillations are mainly slow, I-gain might be too high."}),"\n",(0,t.jsx)(i.li,{children:"The B-gain should be increased incrementally to fit how sharp the response you want. Usually only pitch needs a significant B-gain."}),"\n",(0,t.jsx)(i.li,{children:"Too high on B-gain results in unwanted oscillations at stops if low B-gain did not cause it."}),"\n",(0,t.jsx)(i.li,{children:"One could also experiment the I-relax to tune out the I-oscillations at stops. Lower number means stronger relax. Notice that a extremely low number might make the helicopter feel unpredictable. Low number also hide gain imbalance that could show up during high-demand maneuvers or natural occurring disturbances (like a gust of wind)"}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},74081:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/tuning-hsi-e43cad09851602245aefb19d8a01890e.png"},61598:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/tuning-pid-db3a4648294a386148d0ed8df1d85a6b.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(96540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);