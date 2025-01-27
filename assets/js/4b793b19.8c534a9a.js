"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8928],{61185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"Wiki/Tutorial-Setup/Rpm-Measurement","title":"RPM Measurement","description":"In order to use the Governor or RPM filters (and why wouldn\'t you!!) you must measure the RPM. There are two options for this:","source":"@site/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/Rpm-Measurement.mdx","sourceDirName":"Wiki/Tutorial-Setup","slug":"/Wiki/Tutorial-Setup/Rpm-Measurement","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/Rpm-Measurement","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/Rpm-Measurement.mdx","tags":[],"version":"2.0.0","sidebarPosition":80,"frontMatter":{"sidebar_position":80},"sidebar":"tutorialSidebar","previous":{"title":"Mixer Setup and Calibration","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/setup-mixer"},"next":{"title":"Governor","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/Governor"}}');var n=r(74848),s=r(28453),o=r(11470),a=r(19365),l=r(29783);const c=r.p+"assets/images/bluejay_logo-3272ddcf195ab7d55e45ba00400f0e22.png",u=r.p+"assets/images/ESC_logo-728f9c40300a695afcf07ad34aa83288.png",d={sidebar_position:80},h="RPM Measurement",p={},m=[{value:"Frequency Sensor",id:"frequency-sensor",level:2},{value:"Connection",id:"connection",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Bi-directional DSHOT",id:"bi-directional-dshot",level:2},{value:"Supported ESC Firmware",id:"supported-esc-firmware",level:3},{value:"Escape_32",id:"escape_32",level:4},{value:"BLHeli_32",id:"blheli_32",level:4},{value:"More information",id:"more-information",level:2},{value:"BLHeli_S",id:"blheli_s",level:4},{value:"Bluejay",id:"bluejay",level:4}];function f(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rpm-measurement",children:"RPM Measurement"})}),"\n",(0,n.jsx)(t.p,{children:"In order to use the Governor or RPM filters (and why wouldn't you!!) you must measure the RPM. There are two options for this:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"RPM sensor"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Bi-directional D-shot"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["RPM can sometimes also be read via ESC telemetry. However, this is at a refresh frequency that is ",(0,n.jsx)(t.strong,{children:"too slow to be used for filtering of governing"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"RPM filtering is used to remove frequencies related to the rotating components. This allows a much higher tune; HOWEVER!! If the helicopter is flown in an OverSpeed condition the rotation of the one way bearing means that the RPM measurement will not be correct. If the helicopter is tuned too critically this could mean the helicopter could become out of tune resulting in unwanted oscillations."})}),"\n",(0,n.jsx)(t.admonition,{title:"note",type:"info",children:(0,n.jsxs)(o.A,{groupId:"RMP-measurement",children:[(0,n.jsxs)(a.A,{value:"RPM Sensor",label:"RPM Sensor",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h2,{id:"frequency-sensor",children:"Frequency Sensor"}),(0,n.jsx)(t.p,{children:"Typically it is used when the RPM is not available via ESC telemetry. Only BLHeli_32, some BLHeli_S and APD F3 ESCs support Dshot/KISS telemetry, so this feature is needed with a wide range of traditional ESCs."}),(0,n.jsx)(t.p,{children:"The RPM signal is used in multiple places in the FC, e.g. in the PID control, the governor and the RPM-filter. If these features are not needed, then there is no need for the frequency sensor either."}),(0,n.jsx)(t.p,{children:"An electrical frequency signal is provided by some ESCs, e.g. Hobbywing with the \"yellow\" wire. Or it can come from an RPM sensor, which is converting the motor three-phase voltages into a frequency signal - e.g. Hobbywing RPM sensor. Please refer to your ESC's or sensor's manuals how to connect them correctly."}),(0,n.jsx)(t.p,{children:"Note about the Hobbywing RPM sensor: it's safest to power it with 3.3V, as the input voltage of the sensor is also the output voltage of the RPM signal it generates. All inputs on a STM32 MCU tolerate 3.3V, and some will also accept 5V. But if you're using a 8.4V BEC to power the sensor, you'll likely damage the MCU."}),(0,n.jsx)(t.p,{children:"Up to two frequency sensors are supported, for acquiring motor #1 and motor #2 speed."}),(0,n.jsx)(t.p,{children:"If both Frequency Sensor and telemetry RPM signals are available, the Frequency Sensor has precedence."}),(0,n.jsx)(t.h3,{id:"connection",children:"Connection"}),(0,n.jsx)(t.p,{children:"Plug the ESC RPM wire (often yellow wire) or separate RPM sensor (Hobbywing RPM etc) into the FC RPM input."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Frequency input",src:r(42679).A+"",width:"859",height:"341"})}),(0,n.jsx)(t.h3,{id:"configuration",children:"Configuration"}),(0,n.jsxs)(t.p,{children:["Then the frequency sensor can be turned ON with the feature flag located on the ",(0,n.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Configurator/Motor-and-Esc#pwm-protocol",children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Motors"})})})," tab."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"frequency_2",src:r(41739).A+"",width:"835",height:"395"})})]}),(0,n.jsxs)(a.A,{value:"Bi-directional D-shot",label:"Bi-directional D-shot",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h2,{id:"bi-directional-dshot",children:"Bi-directional DSHOT"}),(0,n.jsx)(t.p,{children:"Several features of Rotorflight require telemetry data for the motor speed such as the Govenor and RPM Filtering. One method for the FC to get this motor speed is via Bidirectional DSHOT. Bidirectional DSHOT is an ESC protocol which enables communications in both directions between the FC and the ESC. The speed command can be sent by the FC to the ESC and the ESC responds by sending the current motor eRPM (electrical RPM)."}),(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.strong,{children:"Motors"})," tab in Rotorflight Configurator select an DSHOT ESC protocol (Recommended DSHOT300) and enable Bidirectional DSHOT. This requires ESC firmware that supports Bidirectional DSHOT."]}),(0,n.jsx)(t.h3,{id:"supported-esc-firmware",children:"Supported ESC Firmware"}),(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(a.A,{value:"Escape_32",label:"Escape_32",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h4,{id:"escape_32",children:"Escape_32"}),(0,n.jsxs)(t.p,{children:["Escape_32 is a new ESC firmware project. Which supports Bidirectional DSHOT, see ",(0,n.jsx)(t.a,{href:"https://github.com/neoxic/ESCape32/wiki",children:"Escape_32 Wiki"}),"."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Firmware for 32-bit BLDC motor electronic speed controllers that aims for simplicity. It is designed to deliver smooth and efficient motor drive, fast transitions from a complete stop to full throttle, robust direction reversals, and maximum hardware support."})})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/neoxic/ESCape32/wiki",children:(0,n.jsx)(t.strong,{children:"Escape_32 Wiki"})})})]}),(0,n.jsxs)(a.A,{value:"BLHeli_32",label:"BLHeli_32",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h4,{id:"blheli_32",children:"BLHeli_32"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"As of 2024 BLHeli_32 is no longer being manufactured"}),(0,n.jsx)(t.br,{}),"\n","The Blheli_32 configurator may no longer work with these ESCs. We no longer recommend these ESCs."]}),(0,n.jsx)(t.p,{children:"Bidirectional DSHOT is fully supported from firmware version 32.7.0 onward. ESCs with earlier firmware will have to be updated before speed telemetry will operate."})]}),(0,n.jsxs)(a.A,{value:"AM32",label:"AM32",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h2,{id:"more-information",children:"More information"}),(0,n.jsxs)(t.p,{children:["More details on Bidirectional DSHOT and RPM filtering at ",(0,n.jsx)(t.a,{href:"https://betaflight.com/docs/wiki/guides/current/DSHOT-RPM-Filtering",children:"Betaflight"}),"."]}),(0,n.jsx)("img",{src:u,alt:"Filter",width:"10%"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://esc-configurator.com/",children:(0,n.jsx)(t.strong,{children:"ESC Configurator"})})})]}),(0,n.jsxs)(a.A,{value:"BLHeli_S",label:"BLHeli_S",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h4,{id:"blheli_s",children:"BLHeli_S"}),(0,n.jsxs)(t.p,{children:["BLHeli_S ESCs ",(0,n.jsx)(t.strong,{children:"do not support Bidirectional DSHOT"}),". In order to access this functionality with a BLheli_S ESC, the firmware must be upgraded to Bluejay using the ESC Configurator."]}),(0,n.jsx)("img",{src:u,alt:"Filter",width:"10%"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://esc-configurator.com/",children:(0,n.jsx)(t.strong,{children:"ESC Configurator"})})})]}),(0,n.jsxs)(a.A,{value:"Bluejay",label:"Bluejay",attributes:{className:l.A.tab},children:[(0,n.jsx)(t.h4,{id:"bluejay",children:"Bluejay"}),(0,n.jsxs)(t.p,{children:["Bluejay is an open source firmware for BLheli_S ESCs which supports Bidirectional DSHOT, see ",(0,n.jsx)(t.a,{href:"https://github.com/mathiasvr/bluejay",children:"BlueJay"}),". This firmware has been used successfully for several Rotorflight builds. Bluejay is capable of flashing individual settings to each ESC (tail and main) which is important when using an all in one (AIO) board. Bluejay v0.15 and later also supports disabling ",(0,n.jsx)(t.em,{children:"damped light"})," (regenerative breaking), a must if your helicopter doesn't have a one way bearing. For example, a K110 will yaw/spin rapidly on throttle hold if ",(0,n.jsx)(t.em,{children:"damped light"})," is enabled. Please follow the ",(0,n.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/Blheli_s-to-Bluejay",children:"Blheli_S to Bluejay"})," walkthrough."]}),(0,n.jsx)("img",{src:c,alt:"Filter",width:"10%"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://esc-configurator.com/",children:(0,n.jsx)(t.strong,{children:"ESC Configurator"})})})]})]})]})]})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var i=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(96540),n=r(18215),s=r(23104),o=r(56347),a=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:n}}=e;return{value:t,label:r,attributes:i,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:t,block:r,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=a[r].value;n!==i&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},29783:(e,t,r)=>{r.d(t,{A:()=>i});const i={tab:"tab_kbfu"}},42679:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/frequency-connection-d2f0270e40e73c9547ea2acbfeac515b.png"},41739:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/frequency_2-6a55dfd504f87303dd3ad4054ddcf8e3.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);