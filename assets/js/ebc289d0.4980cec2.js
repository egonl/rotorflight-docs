"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3592],{9456:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>A,toc:()=>h});const A=JSON.parse('{"id":"Wiki/Configurator/Motor-and-Esc","title":"Motor tab","description":"The Motors tab is used to configure the ESC communications protocols ( Motor Control Protocol & Telemetry Protocol ) ,as well as to provide the ability to test motor operation. Depending on the selected ESC protocol and selected Rotorflight features, you might need to specify some other parameters as well.","source":"@site/versioned_docs/version-2.0.0/Wiki/Configurator/Motor-and-Esc.md","sourceDirName":"Wiki/Configurator","slug":"/Wiki/Configurator/Motor-and-Esc","permalink":"/docs/2.0.0/Wiki/Configurator/Motor-and-Esc","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Configurator/Motor-and-Esc.md","tags":[],"version":"2.0.0","sidebarPosition":70,"frontMatter":{"sidebar_position":70},"sidebar":"tutorialSidebar","previous":{"title":"Power tab","permalink":"/docs/2.0.0/Wiki/Configurator/Power"},"next":{"title":"Servos tab","permalink":"/docs/2.0.0/Wiki/Configurator/Servos"}}');var r=o(74848),n=o(28453);const s={sidebar_position:70},i="Motor tab",a={},h=[{value:"ESC/Motor Features",id:"escmotor-features",level:2},{value:"ESC Throttle Protocol",id:"esc-throttle-protocol",level:3},{value:"ESC Telemetry Protocol",id:"esc-telemetry-protocol",level:3},{value:"PWM Protocol",id:"pwm-protocol",level:3},{value:"DSHOT Protocol",id:"dshot-protocol",level:3},{value:"DShot RPM Telemetry",id:"dshot-rpm-telemetry",level:4},{value:"Gear Ratio Configuration",id:"gear-ratio-configuration",level:3},{value:"Motor Pole Count",id:"motor-pole-count",level:3},{value:"Governor Features",id:"governor-features",level:2},{value:"Motor Override",id:"motor-override",level:2}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"motor-tab",children:"Motor tab"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"Motors"})," tab is used to configure the ESC communications protocols ",(0,r.jsx)(t.strong,{children:"( Motor Control Protocol & Telemetry Protocol )"})," ,as well as to provide the ability to test motor operation. Depending on the selected ESC protocol and selected Rotorflight features, you might need to specify some other parameters as well."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This section is about Rotorflight communicating with the ESC. The settings for your motor (such as timing, braking and motor update frequency) can only be set in your ESC, and not in Rotorflight."})}),"\n",(0,r.jsx)(t.h2,{id:"escmotor-features",children:"ESC/Motor Features"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(72663).A+"",width:"843",height:"204"})}),"\n",(0,r.jsx)(t.h3,{id:"esc-throttle-protocol",children:"ESC Throttle Protocol"}),"\n",(0,r.jsxs)(t.p,{children:["Set the ESC protocol required for your ESC under ",(0,r.jsx)(t.em,{children:"ESC/Motor protocol"}),". Usually this would be ",(0,r.jsx)(t.em,{children:"PWM"})," or ",(0,r.jsx)(t.em,{children:"DSHOT300"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(69831).A+"",width:"150",height:"168"})}),"\n",(0,r.jsx)(t.h3,{id:"esc-telemetry-protocol",children:"ESC Telemetry Protocol"}),"\n",(0,r.jsxs)(t.p,{children:["Set the ESC ",(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/ESC-Telemetry",children:(0,r.jsx)(t.em,{children:"Telemetry"})})," protocol if your esc supports it."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(98550).A+"",width:"150",height:"185"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["A correct RPM measurement is crucial to the operation of ",(0,r.jsx)(t.em,{children:"RPM_FILTER"})," and ",(0,r.jsx)(t.em,{children:"GOVERNOR"})," features, therefore ensure that you have a correct RPM measurement setup."]}),(0,r.jsxs)(t.p,{children:["The FC also needs to know the ",(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/Rpm-Measurement",children:"RPM"})," of the main rotor, and the tail rotor. For this you have to exactly specify the ",(0,r.jsx)(t.em,{children:"Motor pole count"})," and the ",(0,r.jsx)(t.em,{children:"Gear ratios"}),"."]}),(0,r.jsx)(t.p,{children:"With this info, the FC can calculate the:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Main motor RPM = eRPM / (motor pole count / 2)"}),"\n",(0,r.jsx)(t.li,{children:"Main rotor RPM = Main motor RPM / ( main gear tooth count / main motor pinion tooth count )"}),"\n"]})]}),"\n",(0,r.jsx)(t.h3,{id:"pwm-protocol",children:"PWM Protocol"}),"\n",(0,r.jsxs)(t.p,{children:["Most RC helicopter ESCs manufacturers (e.g. Hobbywing, YGE, Scorpion ,or Castle) use ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Servo_control",children:"PWM"}),", an analog protocol."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(44907).A+"",width:"833",height:"427"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"RPM Sensor:"})," Activate the RPM Sensor input for motor RPM, you can connect an RPM signal from the ESC, or from an external RPM sensor device."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ESC Update Frequency:"})," the PWM update frequency for your ESC. Usually between 50-400Hz."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Disarm Throttle PWM value:"})," the value that is sent to the ESC when the craft is disarmed. It should stop the motors. Usually 1000\xb5s."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"0% Throttle PWM value:"})," the value that is sent to the ESC when the craft is armed and at 0% throttle. Usually 1070\xb5s."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"100% Throttle PWM value:"})," the value that is sent to the ESC when the craft is armed and at full throttle. Usually 2000\xb5s."]}),"\n",(0,r.jsx)(t.h3,{id:"dshot-protocol",children:"DSHOT Protocol"}),"\n",(0,r.jsx)(t.p,{children:"Most drone ESCs support DSHOT, a digital protocol."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(22567).A+"",width:"834",height:"328"})}),"\n",(0,r.jsxs)(t.p,{children:["If you use DSHOT, use either DSHOT150 or DSHOT300. DSHOT600 is not recommended. Also make sure that the main motor isn't actively being braked by the ESC, especially if you don't have a ",(0,r.jsx)(t.a,{href:"https://youtu.be/ahWzhT5Bn28",children:"one way bearing"})," on the main shaft."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["BLHeli_32: set ",(0,r.jsx)(t.em,{children:"Non Damped Mode"})," to ",(0,r.jsx)(t.em,{children:"On"})," on the main motor ESC"]}),"\n",(0,r.jsxs)(t.li,{children:["Bluejay: set ",(0,r.jsx)(t.em,{children:"Maximum Breaking Strength"})," to ",(0,r.jsx)(t.em,{children:"0"})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"dshot-rpm-telemetry",children:"DShot RPM Telemetry"}),"\n",(0,r.jsxs)(t.p,{children:["This switch is only visible when the ",(0,r.jsx)(t.em,{children:"ESC/Motor protocol"})," is DSHOTxxx. It enables motor eRPM telemetry on supported ESCs via ",(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/Rpm-Measurement#bi-directional-dshot",children:"bidirectional DSHOT"})," and can be used to facilitate the ",(0,r.jsx)(t.em,{children:"GOVERNOR"})," and/or ",(0,r.jsx)(t.em,{children:"RPM_FILTER"})," features. If you use bidirectional DSHOT you don't have to use a frequency sensor for obtaining the eRPM of the motor(s)."]}),"\n",(0,r.jsx)(t.h3,{id:"gear-ratio-configuration",children:"Gear Ratio Configuration"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(45192).A+"",width:"831",height:"75"})}),"\n",(0,r.jsx)(t.p,{children:"Enter the number of teeth for the main rotor gearing [Teeth on Pinion gear]/[Teeth on Main Gear]. For a direct drive Main rotor this is just set to 1 / 1."}),"\n",(0,r.jsx)(t.p,{children:"Enter the number of teeth for the Tail rotor gearing [Teeth on Tail gear]/[Teeth on Autorotation Gear]. For a direct drive tail this is just set to 1 / 1."}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"If the gear tooth count is not known, you can approximate the gear ratio instead."}),(0,r.jsxs)(t.p,{children:["For example if the main gear ratio is 11.8 then you set ",(0,r.jsx)(t.em,{children:"[Teeth on Pinion gear =10]/[Teeth on Main Gear =118]"}),"."]}),(0,r.jsxs)(t.p,{children:["Similarly if the tail gear ratio is 4.8 then you set ",(0,r.jsx)(t.em,{children:"[Teeth on Tail gear =10]/[Teeth on Autorotation Gear =48]"}),"."]}),(0,r.jsxs)(t.p,{children:["note that counting the gear tooth is preferable because an accurate gear ratio is essential to the operation of the ",(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/RPM-Filters",children:"RPM Filters"}),"."]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["For Helicopters with two-stage reduction, kindly read the ",(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/Two-Stage-Gear-Train-Ratios",children:"Two-Stage Gear Train WalkTrough"})]})}),"\n",(0,r.jsx)(t.h3,{id:"motor-pole-count",children:"Motor Pole Count"}),"\n",(0,r.jsx)(t.p,{children:"Determine the number of magnetic poles for each motor. Count the number of magnets on the motors rotor. In the example below the magnets (circled) are fixed to the outer bell which in total has 14. This allows the flight controller to know how many electrical phase rotations are required to complete one physical motor revolution."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(12417).A+"",width:"818",height:"74"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(63434).A+"",width:"354",height:"402"})}),"\n",(0,r.jsx)(t.h2,{id:"governor-features",children:(0,r.jsx)(t.a,{href:"/docs/2.0.0/Wiki/Tutorial-Setup/Governor#governor-mode",children:"Governor Features"})}),"\n",(0,r.jsx)(t.h2,{id:"motor-override",children:"Motor Override"}),"\n",(0,r.jsx)(t.p,{children:"Motor Override functionality is provided to test the operation of each motor directly. This functionality will make the motors spool up. Do this WITHOUT the main or tail rotors fitted!"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Motor and ESC",src:o(58245).A+"",width:"808",height:"757"})}),"\n",(0,r.jsx)(t.p,{children:"Throttle - This is the command being sent from the flight controller to the ESC."}),"\n",(0,r.jsx)(t.p,{children:"RPM - The measured RPM telemetry feedback. As the motor spins this should read a value related to the current speed."}),"\n",(0,r.jsx)(t.p,{children:"Errors (only with DSHOT) - This shows the status of the RPM telemetry signal. This should be 0%."}),"\n",(0,r.jsx)(t.admonition,{title:"Slider",type:"note",children:(0,r.jsx)(t.p,{children:"If you use the slider, make sure you release the mouse button. Nothing changes as long as you hold the mouse button down!"})}),"\n",(0,r.jsx)(t.admonition,{title:"BLHeliSuite32",type:"note",children:(0,r.jsx)(t.p,{children:"The Test motors function in BLHeliSuite32 doesn't work when using Rotorflight. It will give an error like 'Initialization of Motor Test Mode failed! Please check current Unknown rev 4.3.0 support for this application function!'."})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},58245:(e,t,o)=>{o.d(t,{A:()=>A});const A=o.p+"assets/images/motor-6-6483942cee5421456499a8bd46feb37a.png"},22567:(e,t,o)=>{o.d(t,{A:()=>A});const A=o.p+"assets/images/motor-dshot-e2237c8a92e994ec2e858eb81e299495.png"},45192:(e,t,o)=>{o.d(t,{A:()=>A});const A="data:image/png;base64,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"},72663:(e,t,o)=>{o.d(t,{A:()=>A});const A=o.p+"assets/images/motor-main-27d2cd369cb6181fbce245803d9a0cd0.png"},12417:(e,t,o)=>{o.d(t,{A:()=>A});const A="data:image/png;base64,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"},63434:(e,t,o)=>{o.d(t,{A:()=>A});const A=o.p+"assets/images/motor-pole-count-2-71efc3c67848e75efe564111e4e0ee1c.png"},69831:(e,t,o)=>{o.d(t,{A:()=>A});const A="data:image/png;base64,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"},44907:(e,t,o)=>{o.d(t,{A:()=>A});const A=o.p+"assets/images/motor-pwm-64d1486277e0b01cd4b7b1f7918fcf25.png"},98550:(e,t,o)=>{o.d(t,{A:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAC5CAIAAABFmVFWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA1uSURBVHhe7Z1Lkts4EkDrJHOoiqhL1NKfOUC1DjCXkKOv0QuXT+BVL73wriO8650mP8hEJpigKImUDClfMNwQCIJUPiYogGPP08ePHz9//vzfZExA3xP85z//O+Q26AbplwrH3kBfoPDvg+ffwx+y689/Dod/asvj21+HX4fD17/a+q//Hn79aCvD7Y8f7gJya7auwr+/148Qbg1iKvzdtkUKw5qlWyrceFuqUCNes/B7GWWBashUFkOsEDTYSq9Qx+029bkSzpgK+9tShWpOC9CmmANtEmJXeTj8CQVSWBpQmXtWhdWlyVebeSg4Ffa3ixSWdIw2dGAUam96eDFHe7GZ7G295kB6bFuqUGOqDmBDi4zUQDPmFxVUoY606MMqNANvgfa6CzBZntt0W6bQZJJV2O7VwRM2P5Cqwvks1C2zcPm2SCHmlgSxOPBioD2WSRtXcjqqwmJdZRtJ1hb0w+U6Dvuz5zbdugodJu1qFpoxUB2wOeDrd3HMskkJYFtac4XmRET+Ip3fYoW5DbSlwuG3VDj8lgqH31Lh8FtRWH78JQOSCocnVPi+e/K8vZc9P/bPT897meQJ2H73rXwgpjWO97fSpxbsSZ+//KQawFzJy15rE0tXoRGAH0tYt1L4c/9iT8HHmkoq1zspMSxRaHJlbYUR1lzl55fnTMSQpVlYPp6lEIUxom2ShYb4FKmwS1ehpeZEX+EUVmhCX9Oro5BGS6CRiuAppqmZAEuy0DyHTs5CPLbu+rZjnXNZaE9XoJpMwQ5LFFLon3YY1JMVYsGD/cwqNKdD0t8Rtlbos1CYV9iMvYHjxLBEoYnjyQrdzxAUFg+keAp51OGx9ZGZ+XeMrkKHxhEVelDAnEL8ACYKZXicKMRiPem0pqCja1IJFSYjkQqHJxUOTyocnlQ4PKlweEKFRyYJU8zcwOAWWc4lnokuheYzzTXgd3HLrZed4ubcuUK6Bn94W0MLF6lwQ4WX0uZce6lwkS/PD5eFuGbG2JWztz3dzoBoI4V7acyHQ8saUAzf/if/SRV2NQ7LEGvNQupthwMjUjvRBaOX3S56V4zXpqtL7VeDj7v3ex1Ip5RvTqEkSXXtFMNkJJWQYUu55bEsJiSgohNOxxGEDp+fX7RMHTqFYkh7s4urtoGlNuZyHRjgLsH296rQ3KpArUFDOhBJRNyd7oKuodFYqzBrjjt/373s3788izmKtetNoq+VLvpGp6Nz8XAsX7PrZDxOVejDZBVqaNSNv+Ul56SgEaRswMOhffMnoPG1vYWVXYV6ee57QWUpP5hCb0si6CqPxhfqKdtquElnyT8418t+P41vqNBFv6uwHOuuB79Rg//Kw3CyQhNKDBmbQ4USSiybZ2HVVmNdwmdOATX2KQjliS0roJrzd4aerkWE6X1mcffBeJyuEMJ2wS9ShpRrQiC2hnqTnUcUcpmgC+go5P6bLyXco8LNKQ+/lcGMjCXdNTdRuGKscQQuCeTG6gfi6gp53FsvBeuo3hsn752bZGGyJqlweFLh8KTC4QkVHpkXTnEzOcXO5M7msknbdALK34Wmj7Q0oaw/ybkSd64wmGnUGvhS9zAJ+e0VXgpeuV2yqZeKN8fNL28FzlF4yQIbtKwBhQbQA/9JFdizLUOsNQuptzVf+ZrzDk1X4ZT6zYskepbQHY1hMpJKaLCl3PJYFhMSONEJp+MBDTq83itfuyaglSNychaiIR0zJSLuTndBl9jVWKswa447v+orX3vN7vpH41SFPkxWoXpVNzbo1IYPLAWIvkStjJnQvvkTmFfoTtFTqJc3/V6CuxUGY70s1Mqj8YX627/y9WA/nV2/PScrNKHEkLE5VCihxDKnF7Y02mqssTd8/tRTQM2VX/la3/WLjMjpCuEb6w8B+ywZ75UvmWOGfRACocLNKQ+/lUElXtJDcBOFK8YaR+CSjm6sfiCurpDHvfVS0E7vHjAFgZtkYbImqXB4UuHw9BSaH9wbPWPsxCC5gFBhM9WdThPXIBWuRKiwdbbNNC5ZhyVZ6NHVEJNDvPaByFFQ8/y2w5Yv9EZwukxjs3DaJ+3dvUl13kB9QoU2ps2SlUlQWfHCHC0LVLiX29sFM169LBp0Al4V1j5pkkdH8QXwIVRefyS/FzoKBZ04N9oMmLKqWXW6dU7Vhkh7Vej6FJ1VsKlMIo4oZDQ5TMIpLr59hVU8jrFGoe8zFZ5MpBAi3nhSB14GkVl4Y8IsxJBVAe7XjYlmkEa4l3VOFIpm1Vkl1T6xK9aZChcTKgRIm6BJhmBwCxpWFMaItulAqv/js+YOkDJja1LhInoKV8UNlcnKpMLhSYXDcxWFyZakwuFJhcOTCocnVNjOw2jGfYOZmU4u3Swz8SxQqOspJ3J53FPhEo4ppHWT8/JvxbinwhnmFWLBra4BncWw5vUsj73lI+Qx/f1NOQS7ZeTmoLVvfkVM1awryEI6e3tJj82MQru6rdQE9UvSLsTcoMYdh2Jvq1nyLkuybK6et1VI98oZQ/p901WI4L87rqEn3DqL6HSRrY69QjnKNVadxqs50BXwYtJfQF8hvT+iVKuBw4+LX8/GCt1NcIpC/Ntr0mFi6CrU5KMMEG03zEIsuAtLmOMK+aPc/nWXfxYuVmhtYT0fuFBh01WCLFHIgZMgojBGtHUUlqMgg9u40z1ByFkWK6SWUk6QUGEyEqlweFLh8KTC4UmFw5MKhycVDs+MQpqBFXTaB/Cszs+vdQqIH+q0ryCLO359DpnWeNx8UTHTxKSrEDXU2NF0Xj7CLlyutHN/jGlVhceavXUyngq3IFYYxKiusKBCfDtYG0CgqSZWWI9NhVsQKpw4QLQSFe6/QV7KWAo5Sv+O4cUK8UBGDmeF+1IvLUlh80++YUs9KXb7MI4jhW7NU9GEIIU/asggXlBvZDQKsSUHFNtMKUdp/6ycL4COtWXqh8dtPgWWqQejrV7bI3C2wmJO49UodEj2mDaFWuNOqueq2hDJZtWG6IFYoIzUwmMQKWzTiNHKohADCnGUeDUKwySYUyh6CKewpCYg5/LPQrkeuZmwq7r3/gkVNjEiaog1ZFjQ3zWXKtRkoupYoc1CvTxzIPb29g57w7PfK7FC1uBvf/2oCimUYutShdYWqqqJJbcOlckcnddcg/ZJ16m7HoSeQoDDx9igVIV29LtYIYAHMnI4e13yi5Sha/anuHtmFA4J2K2Dx2NwZwrNCPEw3JFCHNUfLgWBO8vCRyQVDk8qHJ5IYZldOeBXPs8CW2gqbZ9A1Mz80Hdz9mR9FmShmfwxNC2rFX5uBzMz9zZxOhdM1uWYQsrIZp7eKKQ24hjK/v9Sq8nRZHXmFfLiSCugVdis18AuEkmHYQ/hSk2yFnMKUVU0Bk4U1lSDAglTqVBwg3CyOn2Fda25ZaoQH3hYgw9CPqS45KRMtqSnEFecewPgVGEZOev4WeSB2nwQbk2sMJBkiPbSgGlzjnTu33I6sTmBQhwVZx9goeD3N3z9axKXZxf5INycqUL8DRlgnIUKSbzLuflUTtYiyMJkLFLh8KTC4UmFw5MKhycVDk8qHJ45hdOpHr1X8sjMD2eBjlyXuRIzCnF5ZffmFzlRoXWDS6n6jsJO5AP9yTb0FX6jv/WC7yvMIlmrkFTR0vZ0LSZXZ65DVyEIoPTyryxOUai7kk3pKQRzRRWaUDeLB1KkyeBkGzoKm9dGagLLHmmWCm9FqDB4WVF+1EwGUiUH0lsRKbRpR1QZJyik+6DJy2QDAoXu4ceoucUKsZNOy2Rdpgr9T9CCpNS8Qkc+Ba9EkIXJWKTC4UmFw5MKhycVDk8qHJ4ZhXaNZsUZHk5a2nknLsWZU+BHpU5OaK7Z0vtbA49DT2Fdv0ZwOmg+Xkg7uXQz0WZNwH7Ecq7YTYgVbr1mjf2LDHcuuld8YuFgwHdPKgwJFYYLNFLJOfQFPiE2NesCjSghPbvSNMw8n5HzklJhSKSwHegYyQZKlBJKkzQmvjVvSGrpymYeQs+/Z/+3iF1GTsBTNKTRsxVqjkrQcW9NXNBDwbVKJjmEhzQOnEK+VxhqllkYEilcMpDaoQ+Djns9+OCcVRjkXChJK1NhSKgwCG79ObMkC4VTFTadM6lwnlghhBefVPqUosiWjzy+cehNxG180Q2VT1bIzewwznPEVNinpxCgZ1XBxBS10b/nzDuaHyOFMv04QyHCd4mgSUl2W+wFPCYzCjuQwsmPneRmpMLhSYXDc7rC5DcjFQ5PKhyeVDg8Mwrtmtlqr5mS1ekopMm1zpppTn2qxXChNVmfWOFk3UReU5xAKrwSocK56MdrZmZJjA6si3Oln9pA5pQ8vzSvjnX9LNfMTiJSODt5jxSa1xR4LA+59j6o5Toms1Tuitay2dxZg/ZDs5rCyTsEo1BfVCFSb89iy65xcpxI4RkDqX2tUWp85lXBqXBlQoXTnzO1pqNQQUM0JJr7ILNwS2KFFFPzswLDWkJsnlU6fhpb9bloK2u5Hp4KV6KjEMG4CzamWk+/JzkLSXlBchTzVe+D2iDSlgovYEZhMgapcHhS4fCkwuFBhZ8+fSqfkgH5+PHj0+vr64cPH0BmMhyQfq+vr/8HPlksfITcL4AAAAAASUVORK5CYII="},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var A=o(96540);const r={},n=A.createContext(r);function s(e){const t=A.useContext(n);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),A.createElement(n.Provider,{value:t},e.children)}}}]);