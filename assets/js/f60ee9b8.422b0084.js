"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6878],{23249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"setup/elrs-custom-telemetry","title":"ELRS Custom Telemetry","description":"Why Custom Telemetry","source":"@site/versioned_docs/version-2.1.0/setup/elrs-custom-telemetry.mdx","sourceDirName":"setup","slug":"/setup/elrs-custom-telemetry","permalink":"/docs/setup/elrs-custom-telemetry","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/setup/elrs-custom-telemetry.mdx","tags":[],"version":"2.1.0","sidebarPosition":120,"frontMatter":{"sidebar_position":120},"sidebar":"tutorialSidebar","previous":{"title":"ESC Forward Programming","permalink":"/docs/setup/esc-forward-programming"},"next":{"title":"Adding an extra servo","permalink":"/docs/setup/extra-servo"}}');var a=r(74848),l=r(28453),n=r(11470),o=r(19365),i=r(86709),c=r(47729),d=r(2703);const u={sidebar_position:120},h="ELRS Custom Telemetry",m={},p=[{value:"Why Custom Telemetry",id:"why-custom-telemetry",level:2},{value:"EdgeTX",id:"edgetx",level:2},{value:"1. Enable CRSF custom telemetry",id:"1-enable-crsf-custom-telemetry",level:3},{value:"2. Set ELRS Packet rate",id:"2-set-elrs-packet-rate",level:3},{value:"3. Choose Sensors",id:"3-choose-sensors",level:3},{value:"4. Download telemetry Lua Script",id:"4-download-telemetry-lua-script",level:3},{value:"5. Add Lua to SD card",id:"5-add-lua-to-sd-card",level:3},{value:"6. Enable Custom Scripts on Tx",id:"6-enable-custom-scripts-on-tx",level:3},{value:"7. Load Custom Script",id:"7-load-custom-script",level:3},{value:"8. Discover telemetry",id:"8-discover-telemetry",level:3},{value:"ETHOS",id:"ethos",level:2},{value:"1. Enable CRSF custom telemetry",id:"1-enable-crsf-custom-telemetry-1",level:3},{value:"2. Open Rotorflight on Tx",id:"2-open-rotorflight-on-tx",level:3},{value:"3. Configure the external module",id:"3-configure-the-external-module",level:3},{value:"4. Setup Tx",id:"4-setup-tx",level:3},{value:"5. Enable RF custom Lua",id:"5-enable-rf-custom-lua",level:3},{value:"6. Telemetry",id:"6-telemetry",level:3},{value:"7. Sensors",id:"7-sensors",level:3}];function g(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"elrs-custom-telemetry",children:"ELRS Custom Telemetry"})}),"\n",(0,a.jsx)(t.h2,{id:"why-custom-telemetry",children:"Why Custom Telemetry"}),"\n",(0,a.jsx)(t.p,{children:"The ELRS (which uses the Crossfire protocol) has a limited array of parameters that can be transferred. Many of these values are not very applicable to a helicopter (as opposed to drones). Other values such as headspeed (quite important for our helicopters) are not available. In Rotorflight 2.0 returning some of our more important parameters back to the Tx was achieved by ELRS Telemetry Reuse however, this was also limited."}),"\n",(0,a.jsx)(t.p,{children:"Custom telemetry has been implemented for ELRS in Rotorflight 2.1. This allows many more sensors that was previously not possible with CRSF. Currently there are over 100 sensors to choose from, and a maximum of 40 sensors can be used in total. With the ELRS configurable telemetry ratio, the sensors can be updated up to 20 times per second."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Note: \u2018Telemetry Reuse\u2019 (from Rotorflight 2) has been removed as it is no longer required"})})}),"\n",(0,a.jsxs)(t.admonition,{title:"note",type:"caution",children:[(0,a.jsx)(t.p,{children:"For elrs custom telemetry to work as expected it is essential to use elrs 3.5 or higher. Using lower versions will result in intermittent telemetry lost warnings."}),(0,a.jsx)(t.p,{children:"If you still get warnings after upgrading your elrs to 3.5 or higher - reducing the frame rate on the rotorflight config page to a value lower than your elrs module will prevent the receiver being overrun by telemetry data."})]}),"\n",(0,a.jsx)(t.admonition,{title:"Please choose to suit your Radio - EdgeTX or ETHOS",type:"info",children:(0,a.jsxs)(n.A,{groupId:"operating-systems",children:[(0,a.jsx)(o.A,{value:"",label:"Choose Tx",default:!0,attributes:{className:i.A.tab},children:(0,a.jsx)(t.p,{children:"Rotorflight has great support for both EdgeTX and Ethos.  Please choose your radio."})}),(0,a.jsxs)(o.A,{value:"EdgeTX",label:"EdgeTX",attributes:{className:i.A.tab},children:[(0,a.jsx)(t.h2,{id:"edgetx",children:"EdgeTX"}),(0,a.jsx)("img",{src:c.A,alt:"EdgeTX",width:"15%"}),(0,a.jsx)(t.h3,{id:"1-enable-crsf-custom-telemetry",children:"1. Enable CRSF custom telemetry"}),(0,a.jsx)(t.p,{children:"To set up ELRS custom telemetry:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Enable telemetry (This enables telemetry for all receiver types)"}),"\n",(0,a.jsxs)(t.li,{children:["CRSF Custom Telemetry (This enables the ELRS custom)",(0,a.jsx)(t.br,{}),"\n","This is located under the Receiver tab in Rotorflight Configurator."]}),"\n",(0,a.jsx)(t.li,{children:"Set the Telemetry rate. We recommend 1000"}),"\n",(0,a.jsxs)(t.li,{children:["Set the Telemetry ratio. Generally this can be between ",(0,a.jsx)(t.strong,{children:"8 and 16"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Start with 8. If you get 'telemetry lost' then increase as required."}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(16914).A+"",width:"800",height:"239"})}),(0,a.jsx)(t.h3,{id:"2-set-elrs-packet-rate",children:"2. Set ELRS Packet rate"}),(0,a.jsx)(t.p,{children:"Set \u2018Telemetry Rate\u2019 to match the \u2018Packet Rate\u2019 you\u2019ve set for ELRS (500 in the example below). Then set \u2018Telemetry Ratio\u2019 to match the \u2018Telem Ratio\u2019 you\u2019ve set in ELRS (8 in the example below). The screenshot below is from Express LRS Lua script\u2019s main screen"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(65097).A+"",width:"480",height:"272"})}),(0,a.jsx)(t.h3,{id:"3-choose-sensors",children:"3. Choose Sensors"}),(0,a.jsx)(t.p,{children:"Next, select the sensors you want enabled. Each added sensor can be dragged up and down to change their order. You can freely choose whatever parameters you wish to be visible on your transmitter."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(40896).A+"",width:"864",height:"1011"})}),(0,a.jsx)(t.h3,{id:"4-download-telemetry-lua-script",children:"4. Download telemetry Lua Script"}),(0,a.jsx)(t.p,{children:"NOTE! Lua script is required for Custom Telemetry\nCustom telemetry requires the radio to run a telemetry Lua script in the background. You need to install all the Lua scripts coming with the release, and then enable rf2tlm.lua as a \u2018Custom Script\u2019 in your EdgeTx model. The steps below explain how to to this and discover the newly added sensors on your EdgeTx radio."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases",children:(0,a.jsx)(t.strong,{children:"Download the latest Lua script HERE"})})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(68927).A+"",width:"940",height:"127"})}),(0,a.jsx)(t.h3,{id:"5-add-lua-to-sd-card",children:"5. Add Lua to SD card"}),(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Copy the \u2018Script\u2019 folder from the zip file into your EdgeTx radio\u2019s SD card (root directory). There will be a Scripts folder already in your SD card. You can safely overwrite any existing files. (Note: As with any upgrades, ensure you have already backed up your SD card in case anything goes wrong)\nContents of the zip file:"}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(92745).A+"",width:"642",height:"143"})}),(0,a.jsxs)(t.p,{children:["Contents of your SD card should look something like this:",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(46893).A+"",width:"437",height:"670"})]}),(0,a.jsx)(t.h3,{id:"6-enable-custom-scripts-on-tx",children:"6. Enable Custom Scripts on Tx"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["From the ",(0,a.jsx)(t.strong,{children:"Model Setup"})," tab select ",(0,a.jsx)(t.strong,{children:"Enabled Features"})," and enable ",(0,a.jsx)(t.strong,{children:"Custom Scripts"}),"."]}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"If this is not visible on your radio you will have to Update your Version of EdgeTX."})})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://edgetx.org/getedgetx/",children:"Update your EdgeTX firmware"})}),"\n"]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," b&w radios (Boxer, Zorro, T-LITE, X7, etc) don't have the Custom Scripts feature.",(0,a.jsx)(t.br,{}),"\n","You will need to flash your radio with the following firmware. This addition will be merged into the next EdgeTX release."]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/pfeerick/lang-firmwares/releases/tag/v2.10.5",children:"luamixer firmware"})}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(83652).A+"",width:"649",height:"556"})}),(0,a.jsx)(t.h3,{id:"7-load-custom-script",children:"7. Load Custom Script"}),(0,a.jsx)(t.p,{children:"Still on your EdgeTx radio, navigate to Model settings -> Custom Scripts page. Long press on the first spare  and create a new custom script as below for rf2tlm.lua. You can give it any name you like."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(83843).A+"",width:"649",height:"556"})}),(0,a.jsx)(t.h3,{id:"8-discover-telemetry",children:"8. Discover telemetry"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Power off your Flight Controller."}),"\n",(0,a.jsxs)(t.li,{children:["On your EdgeTx radio, navigate to Model settings -> Telemetry page and ",(0,a.jsx)(t.strong,{children:"Delete All"})," sensors that you may have previously discovered. Then ",(0,a.jsx)(t.strong,{children:"Discover New"})," sensors"]}),"\n",(0,a.jsx)(t.li,{children:"NOW power up your helicopter for sensors to be discovered"}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:'Important: If your sensors are not in the correct order it means the FC was already powered prior to "Discover new". Make sure the FC is powered up only after "Discovery new" is active'})})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(94010).A+"",width:"649",height:"556"})})]}),(0,a.jsxs)(o.A,{value:"ETHOS",label:"ETHOS",attributes:{className:i.A.tab},children:[(0,a.jsx)(t.h2,{id:"ethos",children:"ETHOS"}),(0,a.jsx)("img",{src:d.A,alt:"ETHOS",width:"40%",c:!0}),(0,a.jsx)(t.h3,{id:"1-enable-crsf-custom-telemetry-1",children:"1. Enable CRSF custom telemetry"}),(0,a.jsx)(t.p,{children:"To set up ELRS custom telemetry, first enable telemetry and CRSF Custom Telemetry for telemetry stream to be sent to your radio. This is located under the Receiver tab in Rotorflight Configurator."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(16914).A+"",width:"800",height:"239"})}),(0,a.jsx)(t.h3,{id:"2-open-rotorflight-on-tx",children:"2. Open Rotorflight on Tx"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(64870).A+"",width:"799",height:"485"})}),(0,a.jsx)(t.h3,{id:"3-configure-the-external-module",children:"3. Configure the external module"}),(0,a.jsx)(t.p,{children:"Chose ELRS protocol on your external module"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(46077).A+"",width:"800",height:"485"})}),(0,a.jsx)(t.h3,{id:"4-setup-tx",children:"4. Setup Tx"}),(0,a.jsx)(t.p,{children:"Set the Packet rate and telemetry ratio to match what has been configured in the Flight controller in step 1."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(29396).A+"",width:"800",height:"485"})}),(0,a.jsx)(t.h3,{id:"5-enable-rf-custom-lua",children:"5. Enable RF custom Lua"}),(0,a.jsx)(t.p,{children:"Exit the Tx screen and navigate to the Lua icon. Select and enable the Rotorflight background task."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(79307).A+"",width:"800",height:"485"})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(58178).A+"",width:"801",height:"198"})}),(0,a.jsx)(t.h3,{id:"6-telemetry",children:"6. Telemetry"}),(0,a.jsx)(t.p,{children:"Navigate to the telemetry page"}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(97913).A+"",width:"794",height:"480"})}),(0,a.jsx)(t.h3,{id:"7-sensors",children:"7. Sensors"}),(0,a.jsx)(t.p,{children:"Discover new sensors."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Tab",src:r(91664).A+"",width:"800",height:"485"})})]})]})})]})}function b(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var s=r(18215);const a={tabItem:"tabItem_Ymn6"};var l=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,n),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>T});var s=r(96540),a=r(18215),l=r(23104),n=r(56347),o=r(205),i=r(57485),c=r(31682),d=r(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[n,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[c,u]=p({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=c??g;return m({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:n,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:n,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==s&&(c(t),n(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:l}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function T(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}},86709:(e,t,r)=>{r.d(t,{A:()=>s});const s={tab:"tab_Afyl"}},47729:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/edgetx-logo-4a31de63bb29c6ec264fc50a3a50bab5.png"},2703:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/ethos-logo-d565893f83fdd83bfa36d6df15aad088.png"},64870:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-1-b9b9d1c4e4b557d337b087bc16f43f0d.png"},46077:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-2-865a8f3eda7238d885ee6c02a915a033.png"},29396:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-3-dca90953c15048113bec1c882b592193.png"},79307:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-4-62395fcdea9fa027d70a03d31abcaeb8.png"},58178:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-5-d2292883ff91523711a410848f95f0bc.png"},97913:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-6-2f421eae3db241d963d00169659eb9c1.png"},91664:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telem-ethos-7-83c8c0a06ddc689b58d815ed11796ee3.png"},16914:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-1-be44a6e77aadbaa509c1cae0c0cfa757.png"},65097:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-2-7a74e95aedc51ab05c175cf621db2965.png"},40896:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-3-e09a90ba674e2e9b13f41c1fb885b5b2.png"},68927:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-4-83b9a3e13e7b5a444c16ddbc2912bfad.png"},92745:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-5-18931fb2f051b80ab6c163f89fca9b31.png"},46893:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-6-83edba50c2d03f072e3bca8c3d64ed2f.png"},83652:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-7-f8f9f3cb4d38941b4e1957c5de6d62bc.png"},83843:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-8-234ab348d3f75c1aba18ae59109f0e94.png"},94010:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-9-31e440493060160ecb3dd82ee054808b.png"},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>o});var s=r(96540);const a={},l=s.createContext(a);function n(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);