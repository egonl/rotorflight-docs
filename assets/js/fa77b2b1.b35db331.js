"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[345],{72261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Tuning/First-Flight-Filter-Tuning","title":"First Flight & Filter Tuning","description":"It is crucial to tune the filters based on your helicopter to gain the maximum performance while keeping noise out of the control loop. A good filter tuning should be just strong enough to suppress the peaks in the gyro readouts. A filter too weak may have peaks leaked inside the loop, and a filter too strong, while making the gyro signal clean, may lower the maximum gains later which cause a \\"sloppy\\" and delayed feel.","source":"@site/versioned_docs/version-2.1.0/Tuning/First-Flight-Filter-Tuning.md","sourceDirName":"Tuning","slug":"/Tuning/First-Flight-Filter-Tuning","permalink":"/docs/Tuning/First-Flight-Filter-Tuning","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/Tuning/First-Flight-Filter-Tuning.md","tags":[],"version":"2.1.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tuningSidebar","next":{"title":"Tuning your Helicopter","permalink":"/docs/Tuning/Tuning-description"}}');var o=i(74848),r=i(28453);const a={sidebar_position:10},s="First Flight & Filter Tuning",l={},h=[{value:"Example: A Relatively Well Tuned Filter During 3D Maneuvers",id:"example-a-relatively-well-tuned-filter-during-3d-maneuvers",level:2},{value:"RAW Gyro:",id:"raw-gyro",level:3},{value:"Filtered Gyro:",id:"filtered-gyro",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"first-flight--filter-tuning",children:"First Flight & Filter Tuning"})}),"\n",(0,o.jsx)(t.p,{children:'It is crucial to tune the filters based on your helicopter to gain the maximum performance while keeping noise out of the control loop. A good filter tuning should be just strong enough to suppress the peaks in the gyro readouts. A filter too weak may have peaks leaked inside the loop, and a filter too strong, while making the gyro signal clean, may lower the maximum gains later which cause a "sloppy" and delayed feel.'}),"\n",(0,o.jsx)(t.p,{children:"It is highly recommended to use the RPM filter on RF. A good starting point is to use a single with Q = 2.5 on the fundamental and a double with Q = 2.5 on the second harmonic for the main rotor. For tail rotor, a single with Q = 2.5 on fundamental and second harmonic will most likely do the job. Motor filter should be turned on as well for non-direct drive machines. A first-order Gyro low pass filter with cutoff frequency of 100hz should be turned on. Notice: a low Q value makes the filter wide and strong, a high Q value makes the filter narrow and weak. It is always preferred to have highest Q value possible without leaking too much vibrations."}),"\n",(0,o.jsx)(t.h1,{id:"first-flight",children:"First Flight"}),"\n",(0,o.jsx)(t.p,{children:"(Assume the default setting was discussed and set to be reasonable. Right now the roll/yaw gains are a bit too high)\nThe default setting would more than likely ensure a controllable hover. Take off with rpm set to the highest you want to use and hover for a minute or two. If you notice any fast vibrations, land immediately."}),"\n",(0,o.jsx)(t.h1,{id:"filter-tuning",children:"Filter Tuning"}),"\n",(0,o.jsx)(t.p,{children:"Open log and click on filtered gyro. Click Gyro[roll/pitch/yaw] legends on the right to show a FFT (frequency response) of the filtered gyro. Ideally, you should see very high magnitude at the very left, and low values at other range. If you see a peak, look for the frequency of the peak and try to divide it with its fundamental frequency. For example, 2800rpm/60 = 46.7hz. If you see a sharp peak at 186hz, which is 4 times, turn on the notch filter on the 4th harmonic of the main blades with Q = 4.0."}),"\n",(0,o.jsx)(t.p,{children:"If there's a peak that is not divisible by main or tail blade fundamental and persist at different rpm, it might be due to some other sources of vibration, e.g. skids, tail fin, tail belt. etc. Check your helicopter first, but if you could not resolve it, use a notch filter centered at the exact frequency of the vibration and set the cutoff close to the left end of the peak."}),"\n",(0,o.jsx)(t.p,{children:'If there is a "bump" at the fundamental & second harmonic, consider lowering the Q values or use double filter on the fundamental. However, it is not advised to lower the Q value below 2.0 as it might significantly affect performance. Two of the main reasons that cause high vibration at those frequencies are blade tracking and blade imbalance. Check them first if you want to achieve a higher performance.'}),"\n",(0,o.jsx)(t.p,{children:'For the low pass filter, it is not advised to lower it below 60hz, which might start to affect performance significantly. When there is no peak existing but there is high "grass" at around 60-80hz especially when doing maneuvers, try lower it. Remember, its better if this cutoff is high so lower it (especially below 80hz) if absolutely necessary.'}),"\n",(0,o.jsx)(t.p,{children:"A well-tuned filter should have no sharp peaks and might have small bumps at 40-80hz."}),"\n",(0,o.jsx)(t.h1,{id:"further-tuning",children:"Further Tuning"}),"\n",(0,o.jsx)(t.p,{children:'The noise is usually much higher during 3D flight especially on the second harmonic of the main blades. If peaks appears after 3D flights, consider lower Q value on the second harmonics. Tall "grass" is usually fine.'}),"\n",(0,o.jsx)(t.h2,{id:"example-a-relatively-well-tuned-filter-during-3d-maneuvers",children:"Example: A Relatively Well Tuned Filter During 3D Maneuvers"}),"\n",(0,o.jsx)(t.h3,{id:"raw-gyro",children:"RAW Gyro:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"First Flight",src:i(69990).A+"",width:"2600",height:"1476"})}),"\n",(0,o.jsx)(t.h3,{id:"filtered-gyro",children:"Filtered Gyro:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"First Flight",src:i(11229).A+"",width:"2600",height:"1510"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},69990:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/First_flight_1-d7a7d1836a019f7c54dcafd2fca3175d.png"},11229:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/First_flight_2-89976d0d2d76b0976e8879195eb99590.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);