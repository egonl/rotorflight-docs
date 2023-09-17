"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:90},l="ESC Telemetry",i={unversionedId:"Tutorial - Setup/ESC Telemetry",id:"Tutorial - Setup/ESC Telemetry",title:"ESC Telemetry",description:"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART.",source:"@site/docs/Tutorial - Setup/ESC Telemetry.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/ESC Telemetry",permalink:"/docs/Tutorial - Setup/ESC Telemetry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Setup/ESC Telemetry.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"RPM Measurement",permalink:"/docs/Tutorial - Setup/Frequency"},next:{title:"RPM Filters",permalink:"/docs/Tutorial - Setup/RPM Filters"}},s={},p=[{value:"Select Serial Port",id:"select-serial-port",level:3},{value:"Enable the feature",id:"enable-the-feature",level:3},{value:"Half Duplex (to be updated)",id:"half-duplex-to-be-updated",level:3},{value:"Set the Protocol (to be updated)",id:"set-the-protocol-to-be-updated",level:3},{value:"Power Config",id:"power-config",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"esc-telemetry"},"ESC Telemetry"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART. "),(0,o.kt)("p",{parentName:"admonition"},"ESC Telemetry currently supported are :  "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"KISS - BLheli  "),(0,o.kt)("li",{parentName:"ul"},"HOBBYWING V4  "),(0,o.kt)("li",{parentName:"ul"},"OMPHOBBY  "),(0,o.kt)("li",{parentName:"ul"},"KONTRONIK  "))),(0,o.kt)("h3",{id:"select-serial-port"},"Select Serial Port"),(0,o.kt)("p",null,"The ESC telemetry pin TX needs to be connected to a spare UART RX. Select the UART from the Configuration page. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ESC Telemetry",src:r(5973).Z,width:"802",height:"341"})),(0,o.kt)("h3",{id:"enable-the-feature"},"Enable the feature"),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"ESC_SENSOR")," from the features to enable reading from the ESC."),(0,o.kt)("p",null,"If you wish these values to be returned to the Tx you will also have to select the ",(0,o.kt)("strong",{parentName:"p"},"TELEMETRY")," and have a telemetry capable Receiver.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ESC Telemetry",src:r(3873).Z,width:"802",height:"378"})),(0,o.kt)("h3",{id:"half-duplex-to-be-updated"},"Half Duplex (to be updated)"),(0,o.kt)("p",null,"The Telemetry wire can be connected to the UART TX (as opposed to the RX) if the UART is set to half duplex. In most cases just leave this OFF. This still needs to be added to the configuration. Currently it is enabled through the CLI."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"set esc_sensor_halfduplex = ON")," "),(0,o.kt)("h3",{id:"set-the-protocol-to-be-updated"},"Set the Protocol (to be updated)"),(0,o.kt)("p",null,"This still needs to be added to the configuration. Currently it is enabled through the CLI."),(0,o.kt)("p",null,"Please enter the protocol you wish to use from the following commands:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_protocol = NONE"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_protocol = KISS"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_protocol = HOBBYWINGV4"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_protocol = OMPHOBBY"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_protocol = KONTRONIK"),"  ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Hobbywing V4"),"\nAditional parameters are provided for the current and zero offsets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_hw4_current_offset = 15"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_hw4_current_gain = 100"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set esc_sensor_hw4_voltage_gain = 110"),"  ")),(0,o.kt)("h3",{id:"power-config"},"Power Config"),(0,o.kt)("p",null,"Enable the Voltage and Current from the ESC Sensor"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ESC Telemetry",src:r(5467).Z,width:"1177",height:"300"})))}d.isMDXComponent=!0},5973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ESC_Telem_1-5dcfad44c9144abe4bc3d17e186a00fe.png"},3873:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ESC_Telem_2-41e707e5e071ee348f59fd771faa99df.png"},5467:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ESC_Telem_3-eab1c19b842da1740b209cf79763623a.png"}}]);