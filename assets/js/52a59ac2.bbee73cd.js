"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8349],{83199:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"setup/radio-setup/radio-setup-ethos/ethos-setup","title":"FrSky Ethos example","description":"Instructions for Frsky Ethos Initial Radio and Configurator Setup, this is a generic setup using an Frsky transmitter with an frsky access receiver with a Rotorflight FC. This example shows a Nexus; however, the process is the same for any Rotorflight controller. Please choose the port related to your FC.","source":"@site/versioned_docs/version-2.1.0/setup/radio-setup/radio-setup-ethos/ethos-setup.mdx","sourceDirName":"setup/radio-setup/radio-setup-ethos","slug":"/setup/radio-setup/radio-setup-ethos/ethos-setup","permalink":"/docs/setup/radio-setup/radio-setup-ethos/ethos-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/setup/radio-setup/radio-setup-ethos/ethos-setup.mdx","tags":[],"version":"2.1.0","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"FrSky Ethos Generic example","permalink":"/docs/setup/radio-setup/radio-setup-ethos/ethos-generic-radio-setup"},"next":{"title":"FrSky Ethos RFStatus LUA Script","permalink":"/docs/setup/radio-setup/radio-setup-ethos/ethos-nexus-status"}}');var n=t(74848),r=t(28453);const i={sidebar_position:20},o="FrSky Ethos example",a={},c=[];function d(A){const e={admonition:"admonition",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"frsky-ethos-example",children:"FrSky Ethos example"})}),"\n",(0,n.jsx)(e.admonition,{title:"Rotorflight Frsky Setup",type:"info",children:(0,n.jsx)(e.p,{children:"Instructions for Frsky Ethos Initial Radio and Configurator Setup, this is a generic setup using an Frsky transmitter with an frsky access receiver with a Rotorflight FC. This example shows a Nexus; however, the process is the same for any Rotorflight controller. Please choose the port related to your FC."})}),"\n",(0,n.jsx)(e.p,{children:"Radio\nFollowing the manufacturers instructions register and bind your receiver to your newly created model or a clone"}),"\n",(0,n.jsx)(e.p,{children:"Once the bind is successful you will see Telmetry items updating in the Model\\Telemetry screen, similar to this"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(38857).A+"",width:"1570",height:"214"})}),"\n",(0,n.jsx)(e.p,{children:"And the radio will display signal in the top right similar to this:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(4435).A+"",width:"1622",height:"210"})}),"\n",(0,n.jsx)(e.p,{children:"Enter the Model screen and scroll to RF System, select the receiver, in this example we are using a Frsky Archer GR6Plus, click on the receiver type and select options. Under Telemetry port choose FBUS, and exit the screen. FBUS is the preferred method of connection."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(39697).A+"",width:"1080",height:"648"})}),"\n",(0,n.jsx)(e.p,{children:"Nexus and RF Configurator\nIn the following example the Frsky receiver is connected to Port (A) of a Nexus controller. With the supplied cables you can connect to either Port A, B or C"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(7635).A+"",width:"3024",height:"1983"})}),"\n",(0,n.jsx)(e.p,{children:"Connect the USB-C cable to the Nexus and connect to the PC\\Laptop with the Configurator installed. The latest Rotorflight configurator can be found HERE"}),"\n",(0,n.jsx)(e.p,{children:"One connected this screen will be displayed if a new Nexus is attached."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(70683).A+"",width:"1620",height:"842"})}),"\n",(0,n.jsx)(e.p,{children:"This is a warning the accelerometer is not calibrated, click close and enter the main configurator page."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(32e3).A+"",width:"2366",height:"596"})}),"\n",(0,n.jsx)(e.p,{children:"Select SETUP on the left, hold or keep the nexus flat on the bench and click 'Calibrate Accelerometer', the top status bar will show ' Accelerometer calibration finished'"}),"\n",(0,n.jsx)(e.p,{children:"Select STATUS on the left and the following page will be displayed"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(86825).A+"",width:"2726",height:"1480"})}),"\n",(0,n.jsx)(e.p,{children:"Item 1 is showing board firmware and identification. Item 2 is showing battery connection info - At this stage the main battery is not connected. Item 3 is showing the Nexus firmware version and the RF Configurator version."}),"\n",(0,n.jsx)(e.p,{children:"Configurator Initial Setup\nSelect Configuration on the left"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(12566).A+"",width:"2728",height:"1290"})}),"\n",(0,n.jsx)(e.p,{children:"The screen is described as:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Enter your craft name"}),"\n",(0,n.jsx)(e.li,{children:"Enable Accelerometer, Barometer and CMS"}),"\n",(0,n.jsx)(e.li,{children:"Set Port (A) or your assigned receiver port to Serial Rx"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"By default the Nexus is setup to be installed horizontal servo pins facing towards the front, if the pins are facing to the rear of the heli enter 180 in the Yaw Degree's box.\nClick Save and reboot"}),"\n",(0,n.jsx)(e.p,{children:"Enter the Receiver tab and select the options as per this view."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(90655).A+"",width:"2724",height:"1286"})}),"\n",(0,n.jsx)(e.p,{children:"Under telemetry enable these options"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(60740).A+"",width:"2736",height:"1276"})}),"\n",(0,n.jsx)(e.p,{children:"Save and Reboot, please ensure your transmitter is switched on and connected to your receiver"}),"\n",(0,n.jsx)(e.p,{children:"Return to the receiver tab, you should now see the channel bars moving when the TX joysticks are moved. If not either the TX\\RX are not bound or a step above has been missed."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Ethos",src:t(3245).A+"",width:"1124",height:"540"})})]})}function f(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(d,{...A})}):d(A)}},7635:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-nexus1-272e78cc73fe2b17c6d7b3f380f466c3.jpg"},39697:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-receiver-f.bus2-212f789c830bab876bc12ae4c6946bbb.jpg"},70683:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page1-9b447d28d66f20b35009295bb5b5ee4a.png"},32e3:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page2-23ff0caa3da47c991819350d87543761.png"},86825:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page3-e301b16839f6b425a746574d15757676.png"},12566:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page4-ad9a45a87ab1966cf105d350b0587707.png"},90655:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page5-7b01988db3b97e372977839c096960bb.png"},60740:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page6-6df45fce6a2335e2fa71e401c5c03e38.png"},3245:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup-page7-3fd499cec07b83d6d469d45ecf87e356.png"},4435:(A,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/ethos-setup1-1-c0baa7adcaad05cbf337af8e276cf587.png"},38857:(A,e,t)=>{t.d(e,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABiIAAADWCAYAAABc8ZqOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAACXYSURBVHhe7d0xaB1X1gDgk21SmLDbeFPGGJYFkyVbeLsFJcU2xpBGwo1BjiHFb7SksXAREyGTFMZulginyBJH4MYoTUC42cIIUqbwso4hjVHKrJqAcZEm+Yvnq9U71tXMe5prS/b3BRM0b+bOzJ15M/e+c+7MK7Ozs78GAAAAAADw0tvY2MiT9u03eQIAAAAAAMBQBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmXjlx4sSveSIAAAAAAPDy2draypP2zYgIAAAAAACgGYEIAAAAAACgGYEIAAAAAACgmVdmZ2e9IwIAAAAAAIiNjY08ad+MiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJoRiAAAAAAAAJp5ZXZ29tc8EQAAAACmMTMzExERCwsLERHx8MeHERFxaeHS2Hw8G2tra2N/n3v/XEREPP7p8dj01pwXcHhsbGzkSftmRAQAAAAAANCMEREdctS4yy/xS0RE3Fi5EdEoerQfk+5PiU5/dv2ziIjY3NxMcwCwm0mvt8Wjnx9FRMT5s+fzR1M5duxYRER89PFHERHx2quvpTlGyvX+yuUrEVNkR83Pz0dExOnTp/NHY27euhkREXe+vpM/GvPFrS8idmzv/e/vR0TE8uXlsfkmlY/L4uJihPsbAMTSx0sREfHmH9/MH43pey/n5Sbz/WDJbWAjIqZTtv/CwoWIiPhNJb/7eV8nL3ww2r53/vrO2PRpj/upd09FRMTs3GzEHn3KovTdrl+/HjHF+jgYWvymvfs3BgAAAAAAYABGRHTIUeNJra+vR0TE6upq/ui52O/+HLTM0RKVfe/sexERsfTJKIvnwb0HY/N1GaocgGLa6+3QIyKm3Y6+1/urK1cjIuL468fzR3vqGuGQs6WKubm5sb/7Gro8AHjRHLYREfpwB1tuex22zPcXTe4TTJsZv1+H9byojTDo0tXnGVoZDX/t2rX8UcQEx72rnEnpcx1ORkQAAAAAAACHyjMbEVGiaSX6OfO30f/Lc8VKBujGv0bRlhJ16crEbC1HjWtRvBN/PhEREUsfjrIw8nPiass9a333J0epi6Ezdffr9trtiB31PW0WzFDlABR9r7etle2oZS/Wrvdd2Unlvrf84Xh2Tx4JeOR3RyJ2vEMiZxF1ZeXkepz2+pzfOZG3EwAYl+/Bz6stU6MPd7DlNmZX25K28ve5qw3eymE7L/LIgPJe2OVPRn2gcr0pfZ6LFy9G7DKy7FnVdz7OWdd25P3NSh/qq6+/itilnNJHfHvm7Ygdfb+Ddv+gHyMiAAAAAACAQ6XZiIgSDTz51smIiJh/f5QJ2fVm9aJk3q9+PspU/Pbf30bsEm1rLUcT+0bx8nIHJTsjb1fX/uTnbpbo75m5M2PzPS9DZcEMVQ5AMen19nmb9HpfRjicPn06YoJsplwvXdfb/LzqvuvJ8nq7soEA4GWX750HrS2jD3ewHbbM9xdd/j4/r7bwYTsvSob/3Ozo+tf3XQ/5+lQbnT6U3De7+83diAFGox+0p6LwbBkRAQAAAAAAHCrNRkSUKOeFhdGb5fM7E/oqGZk3Vm5ENIrG7CVHA/tmgeTlurIzclS46FpfzhS9//39iD2itHm7usq/8MHo+JUoalf5WYkel+fk1UbElCjrlctXIvZ4N0je377yfg5VDkDNpNfb5y1n0XRd7/N9q2+2zKT1UnsXRddyRR7p0Xc7AeBlN+k9u6tt0NUH6+ozdy1f03e7u3676JvRXKuH0te9eu1qxI711N5bVStnqPrMhu675+3fb+Z7Li/Xx9WVUb0ef/349jKxR5u21sYspt3eSevx+vXrERMcpyK3cbPyW9qlxdH252f+1zLj83lVOz+zruNTm69vPQ/9PW0t12Or7SpPo/ny8y/HppfrXr6O14577gsWXddPXmwtfoPf/ZsLAAAAAAAwgMFHRJQ3rH/08UcRe0R/J9U36j60HD3sigZ2RSO7fHHri4gd9Vae63bjH6MRIcW06+nan1Lu7LuzEbtEQ2vR05q8vr7ydhU5qtxXLm+ocgBq8vXvoF0/hrre5/2sZU3lLLXa/a0mr2dlZSWiR5ZGfj5r3+UA4GWX771dbZmc6Vz68EdeHbU5ahnM2eLiYsQuff6h+3B59H9ftbZOUauH2m8jtYz9WjlD1WeWj3dftfrN2983870ml9dVr1mp57WvRvtZGwmR9d3uac+nom/G/LTfg6zW1s/ld53vRe347HdExLT12ne7W8m/7fX9Hk4q93XyevL3unbccznPu/44GFr0mfvduQAAAAAAAKYw+IiI2nPFhvKso3I5etg32l/UshtqaiMdctQyR1f7Znjm/elSoth/X/h7xC5R0y5lfSW6/+Dfo+celuhs7bmMfY9zjtpO+hzMYqhyAIq+19vWI/5q95Ws3K/Kc2r7Xu9L+Z+ufBrRIytt0pEQRc6G6sqequ137T4OAIzLbZmue2itT1zkPlatL9h1jy+m7cPV1lv6rLlPXfYrP4s/99GLrnrIGculzTJpOXl/a/vVtz6H7rvn7e+7HTW5vCK/C2Hrp62IPUb9Fvm3jqK82yGPOKid/7XtKm3r1X+O6qXUY9dTRCY9r2rrqc1f1NZzUEZE1M63ob6nreQ+SDk/z8ydGZtvv/Jvr7U+Vr6O1+ojz5evU7yc8vdsCEZEAAAAAAAAzQw+IiJn6g+tFlVtJUcF+5p0JESWo5slSlyi3CUqXIse10y7P0WrqGje3771N20WTDZUOQDFtNfbviPc+spZOV1q2TRd8oiFmr7Pv81q+1HLTsv3lUnvlwDwssttmdo9t8iZzkUtA7c49e6piF0ymbvWN20fLv9m0Xe5nClea9PU6mHSvnStnFb12VduY9X67nn799sWy+UVXfWRz5Oiqz7y+V87T3L5tfqoycvX2uL5vO27njIC49q1a2PTa/WWz/PnNSIi72+t/rO8/bXvaSt9z5tpTdonyttTO+55vlp5WV6upu95xMEy1G8SOxkRAQAAAAAANDP4iIi+0bD96hud269J92foaGvX+ieth1xebfnyPL7yfMQ8wqW2XE0p7+2ZtyMi4o0/vBEREcdfPz42X1GLimc5e2DaaPNQ5QAUtef9lukn3zoZsUtWVzHpdXZSZTtqz1Ptex3O95Wy3GfXP4uIiDfeGF3v837WsqS65Ot17b6bt8t1HQAmk++lXW2TnOnc99notYztrvXlNkHfe33er2nVMtdzPRRd+5PlclrXZzFU3z1vf22+vnJ5fesjZ8j3HUnQ9/zK51Mt47wmj2CptZH3u56+y+f66pvJno9PbT/yfLXzIm/vtGrf06Hl86VvvU0qjxTpGmmV67F23PvOl+XlalrVB20ZEQEAAAAAABwqgwciHv38aDvy2ULr8rvMzc2N/VtZWdl+nnc8iWK/d/a9OPXuqe3I9n4sfbK0HXnfaX19fTui2MKDew/iwb0Hcf7s+aci2PEkar/X/h07diyOHTsWa2trsba2FssfLsfyh8vxzl/fiXf++k4cf/14HH/9+Pbx/OXJfwAvisc/Pd41g6RM39jYiI2Nje37SXbizye2M9JaKNtx5+s7cefrO09tR7lOH/ndke3REzstfby0nTEVT7KN7n5zNy4tXIpLC5dic3MzNjc3n9rPcr1/7dXX4rVXX+u8n2R31u/EnfX/jX6YnZuN2bnZ7b/L/Scr9zUA4Nl4/PPjePzz022hbOunrdj6aStPPvCOHj0aR48ezZOfMtRvGK3q87D23XvXx9ZWbG39rz7y3zW5/KO/PRpHf9t9vGt9gJo8/5FXj8SRV59ue2d5OXbX93s6rdtrt+P22u34zZP/7n9/P+5/fz9WV1cHzf4vfabShyp9r9LnGtrJt05uj+DfS/6NtPx7+OPD7dEusNPggQgAAAAAAIBi8EDExr82YuNfwz9Dqmhd/qRKpmceuVBGRtQyM/ta+nAplj58ekTE6dOn4/Tp03lyMzma2bVf165dG3sm5c1bN+PmrZtPRUnLiIvVW6uxemu4aDHAYZOz5fpmXQ0tZ7m9ceyNeOPY6NnAO735xze3nx0bT5672ufZqzdWbsSNlf/Nl0c0dMnZRSUrqMgjLEq2EADAbnIfte+/5cvLne8ZOAz03YdVG01ck+fPIzFq8nJDySNG+q6n6zei/crnY99/Q39PS32UEURlJETpcwy9vqL8xliUEUtlO2r/si8//zK+/PzLpz4vIzmKCwsX4sLChe2/YSiDByIAAAAAAACKwQMRZYRAzuzcr1JeKf+gKc+ezlHEq9euxtVrV8fm7WN+fj7m5+efes5czuzMz+hupTwXspj0eYTlGeQ1M3+biZm/zeTJnfpmC3QZqhyAaeXM/h9++CF++OGHsXlaKtk95b5T/LD5Q/yw2b0dfbOg+s7XJbczykiIkh1U5BEUAMCLYag+XOl7M9Kq7/6iyqOJL168GBcvXhybZy/zZ+dj/uz/zr++TwGZfXc2Zt/tHlU8MzMTMzP9j1f+refkX07Gyb90vyvg1OlTcep0//e+Tep5f0/L+/vKiIKivDe27+jwg2r1n6ux+s//9ZlKn/DCBxfiwgdGRjCcwQMRAAAAAAAAxSuzs7O/5olDKBHX8kyxndmVkyiR5fI86Wc9GiI/U21ubm7s75q83Pr6esSTzMy9lGfv7Yywxi7rzeWX91M8uPdgbHqWl8vlFiVb9aOPP4p4kqm707n3z0U8iZbvJq8n73/Zz5IpsPM54/HknRQREZcWLo1Nz66ujEablNEaebmyH5ubm9vL7GaocgDy/S/fv8r17+Rbo8yihYWFJ0uOq12f+yrXtaJkuJT7xH634/ba7Yhd7u8rKysRu+xvqZedzzaNXe4PfZXyynaX9kLZnvL3mbkz28sAAP3lPl2tTVDke3MZuXj+7Pmx+bK+feBs2j5cyarO71wsTx4obZLS1y3llHdQlezw2n5NWw/ZtOVMWp/5OOe22bR997z9tfn6yuX1rY+SzV1GzJbj3JW9/sWtLyJ2/BaS27hF3q6iPCmjtMHLedj1W0vtOOX9KMrx+urrr8am19reRe03nRN/PhEREcsfjr/noLaesh87n6ARexyfXF+186L197SvUl6ux8XFxYhdri8HTf5+1457Uav3/Nvst//+NmJHOV19y3xd4XDI17shTBcdAAAAAAAA6KHZiIgcDZt/fxRVy9HemhI9Xf18FC3L0bZnJUcPa9HpLEd5i67oY84wvXnrZsST5zTuVCu/a/vy/kyqtj1Zzh7oUqLaJbpfi4pnteh01lUvQ5UDUMsi6qsruyZn/9WyS/J8k+rajpJ1dO3atfzRRPZ7Xa3d1/rerwCAkfLuwZzxntXusbmPWsuIzibN4C/224fLfe++ukZdTlsP2bTlTFqfrfrueftr8/WVy+tbH3kkwdAjIoq+35+aaZ9yMa2u36YmXU8+L2rHJx/HrvOi1fe0r0nroaZ2fHOfrda3m1be/q7jXtRGRkyrdt/gYKtd7/Zjsm8yAAAAAADABJoFIh7/9Dge//Q4NjY2YmNjI65cvhJXLl+J9fX1WF9fj0c/P9qOkMaTaOmjnx9tf17mL8uX8g6Lst15Pz9d+TQ+Xfl0bN54Em2cn5/ffjN9cefrO7tGDGvlL328tB2JH0Ipf+mTpVj6ZKm6Pdn5s+fj/Nnzcf/7+9vPRtxNKfe7e9/Fd/e+yx93KtvTtZ4uQ5UD8ODeg3hw70HcvHVzO/NjL+W6c+79c3Hu/XOxublZHYUwiUsLl+LSwqW4+83d7QylvUy6HeXzxcXFWFxcfOp+VFPu83Nzc9XMvEnUrtt971cAwOG03z7cmbkzcWbuzMRtpbLci+JZ9d1fdMuXl2P58nKsrKzEyspK/PLkv5qHPz6Mhz8+3G5Llz5El9KG7jpepfzStp9UWa6UU9P6vPA9fT5WV1djdXV1+zzoOt+yMn85v/XNKJoFIgAAAAAAAJq9IwIAAAAAADhcvCMCAAAAAAA4VAQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZgQiAAAAAACAZl6ZnZ39NU8EAAAAAABePhsbG3nSnv77n5N50pjf/+lbIyIAAAAAAIB2BCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmBCIAAAAAAIBmXjlx4sSveSIAAAAAAPDy2draypP29N//nMyTxvz+T98aEQEAAAAAALQjEAEAAAAAADQjEAEAAAAAADTzyuzsrHdEAAAAAAAAsbGxkSftyTsiAAAAAACA50ogAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaEYgAgAAAAAAaOaV2dnZX/NEAIBprK2tjf197v1zERHx+KfHY9MBAHhxzczMRETEwsJCREQ8/PFhRERcWrg0Nh/PxkFpozsv4PDY2NjIk/b03/+czJPG/P5P3xoRAQAAAAAAtGNERIccNe7yS/wSERE3Vm5ETBE9KkqU+MLChYiI+E0lZvTo50cREXHl8pWIiNjc3Exz7G7o8pc+XoqIiDf/+Gb+aMzNWzcjIuLO13fyRwAvtBN/PhERERcvXoyIiNdefS3NMbL0yeh6+uDeg/zRVC58MLrOv/PXd8amt8qCyvfNrvXk+buUrKnPrn8Wscd9CQCYjD4dQ5L5frDkNndXG72Vw35e9P0t7XlfJ4fuA55691RERMzOzUbs0Zct7n9/PyIirl+/HjHF+jgYJv1N24gIAAAAAADguTIiokOOGk9qfX09IiJWV1fzR7v64tYXET2iizVzc3N50phW5cueAdjd/Px8REScPn06f7Sn2vW2r2PHjkVExLVr1/JHEfvIhumS75td68nzT2pxcTHCyAgA2LfD1qcrGbrvnX0vosGoUvbnsGe+v2hym7urjd7KYT0vaiMMupSRAcuXl/NHTQzVB+wqZ1L77dvyfBgRAQAAAAAAHCrPbEREiaaV6OfM30b/L5n55V0EG/8aRVtK1OV5ZzjmqHEtilee/b304SgLIz8nrrZckbM5ijKi4quvv4rYEbU88rsjEREx++7o+Wwl07a2ntblZ33rDeBFlbN9ipIVs/rP0Ui5cp8r95HlD0fZMvu9bubrcNY3G2ZSeb1d68nz1/a7Vp+l/XD+7Pmx6QDA/vS9Rz8vt9duR+zoexsRcbDkttthyXx/UeXvc1cbvZXDdl7kkQHlvbDLn4z6bOV6U35DK+8DzCPLnlV95+OcdW1H3t+s9htiUfq0b8+8HbFjBMlBu3/QjxERAAAAAADAodJsRESJBp58axQNmX9/9Izsvu8mKBmOq5+PMka//fe3EbtE21rL0cS+Uby8XFd2Rn53w91v7kZExI1/3Bibb1qty8/y/vetN4AXRb4OPqvnKed3UpTrfX6eaVc2zLTyfnetJ8/fdb/II/xKVtKZuTNj8wEA+zPpPfpZMyLiYDtsme8vuvx97mqjt3LYzouS4T83O7r+9X3XQ74+te4LDtUHzOeJ0ecvNyMiAAAAAACAQ6XZiIgS5bywMHqzfH5nQl8l0/HGyihzf9JozH7laGDfLJC8XFd2Rh6xUJ67tro6GhGyX63Lz/L+9603gMMuZ/k8q4z9MhLxy8+/HJterr/5utyVDVPkEQhZ2b9Li6Mspvw80a715O3qul9c+GDUrijZPeWdG32zkwCAfia9R+c2UM6kXfp41CfOz04vuvrMXcvX9N3urt8u+mY01+rhyuUrERFx9drViB3rqfXNa+UMVZ9Zyfwuz7ivPc0i70/tvZ55+/eb+Z7Ly/VxdWVUr8dfP769TOzRVszvZ8um3d5J6/H69esRExynolUbPZ9XtfMz6zo+tfn61vPQ39PWcj222q6h+oB5REXRdf3kxTbpb/BGRAAAAAAAAM/V4CMiyhvWP/r4o4g9or+T6ht1H1qOHnZFA7uikTW16OPi4mLEAPvbuvxs0noDeFHUsl9K1knJ/sn6ZgPV5OeQ5ut7vi7XsmGKvB/T6lpP3q58vyj31dl3ZyN2uY91lQ8ATKfrHp3lTOfShz/y6uheXstgznIbppi2bVLb7jzKsq+uDPFaPdR+G6ll7NfKGao+s3y8+6rVb97+/bZ1c3ld9ZqVel77arSftZEQWd/tnvZ8KvpmzE/7Pchqbehcftf5XtSOz35HRExbr323u5X8VJK+38NJDdUHzOU87/rjYDAiAgAAAAAAOFQGHxFRy7wfyrOOyuXoYd9of1HLbqjJ6ytKOeX5gTl62Vfr8ou8nlq9AbxocjbJ3W/uRkyRxdP3upnvu2V9N/4xerdSka/LtWyYrvvZ6j9H99+SZVObv6itp8jb1aVkV/194e8Re5QLAOxPvkd3tU262gT5nQW1Z/R3ZUgXuc2Vy6+prbdkpOcM0LJf+Vn8tTZOVz3kjOUy+nPScvL+1varb32W413q4cG/R+WW7ayVX/uNJm9/3+2oyeUV+V0IWz9tRewxmrbIbcqivNshjzionf+17aq1nbueIjLpeVVbT23+oraegzIiona+DfU9bSU/JaXV+wKH7gPm+fJ1ipdT/p51MSICAAAAAAB4rgYfEZGfgza0WlS1lRwV7GvSkRDZ1ZWrERFx/PXj+aOIAUYwtC4/11stewDgRZOvf0XJUsnZRLXsnVpWS5GzbYra9TZvVy0bJt/H+97PSnbXtWvXxqbX1lPk7ZqUbB0AaCPfo2ttjCJnOhddbYFT756K2KUt1LW+aUdE5LZO3+Vypnjtmf61epi0zVIrp1V99pUzsWttxbz9tcz3vnJ5RVd95POk6KqPfP7XzpNcfq0+avLytT5APm/7rmfSNno+z5/XiIi8v7X6z/L2176nrfQ9b6bVqg+Y56uVl+XlavqeRxwsRkQAAAAAAACHyuAjIvpGw/arb3Ruvybdn6GjrSV6/X8X/y9ijxEM00ZZW5Wf6+1ZHS+A5y1f/2pZPlnOLut6nmjOEurKssvb1TcbpjZfzaTL5/lr94vynNjy3N488rK2HAAwnb736CJnOne1ZYpaxnbX+nImed8+a96vadUy13M9FF37k+VyWtdnUdpcb8+8HRERb/zhjYg9fiuotXXz9tfm6yuX17c+coZ835EEfc+vfD51tX2zPIKlNpJgv+vpu3yur76Z7Pn41PYjz1c7L/L2Tqv2PR1aPl/61tukDlofMC9X06o+aMuICAAAAAAA4FAZPBDx6OdH25HPFlqX32Vubm7s38rKSqysrGx//t7Z9+K9s+/FqXdPbUe292NzczM2Nzfj0sKluLRwKc69fy7OvX/uqXpY/nA5lj9cjiO/O7L9zLg+WpcP8LK7s3Yn7qx1j5Lb2NgYyzj4zZP/snJ/ee3V1+K1V1+Lu9/cjbvf3N2+ng/t8U+POzNhnoUH9x7Eg3sP4vzZ809lVsWOegEADobHPz+Oxz93tyG2ftqKrZ+28uQD7+jRo3H06NE8+Sm5bz2tVvV57NixOHbsWKytrcXa2tp23/+dv74T7/z1nTj++vE4/vrx7f345cl/z1vv+tjaiq2t/9VH/rsml3/0t0fj6G+7j/ekbec8/5FXj8SRV7t/c8nLsbu+39Np3V67HbfXbm/33e5/fz/uf38/VldXB83+f9Z9wJNvnYyTb+2d3R67/EZa/j388eH2aBfY6elfOAAAAAAAAAYyeCBi418bsfGvyZ4hNYnW5U+qZLAufbK0/czA2DEyomQXDKVEvUtGaM6umH13NmbfnR1bZhKtywd40eXr5tAjycr9pSjZaiWLrfYv+/LzL+PLz7+sfl4Mvf1DyVk2Q99vAYCXQ87k7ftv+fJy53sGDoNr166NvU/i5q2bcfPWzaf2t/xGsHprNVZvDZfp/aKZtO2c588jMWryckPJI0b6rqd1Wzyfj33/Df09LfVR+lBlJEQZoTD0+orWfcAykqO4sHAhLixc2P4bhjJ4IAIAAAAAAKAYPBBRRgjkjND9KuXlZ2gfFOXZ1TmKePXa1bh67erYvEPKz3889odjcewPw0WhW5cP8KLJI/fmz87H/Nn5sXl2MzMzEzMzM9t/D30fnVbfkXB5+1srzysuPCcXAF4ufTPHu8zPz8f8fHdb7WVx5+s7cefr+vvNZv42EzN/e3ZtvoMuvzPj4sWLcfHixbF59pL7CrkvUdOqjZ7b1Cf/cjJO/qX7XQGnTp+KU6fbva/teX9PT/z5RJz484ntEQVFeW/sjX/ciBv/uDG2zGGy+s/VWP3n/0Y6lZEeFz64EBc+MDKC4QweiAAAAAAAAChemZ2d/TVPHEKJuJZniv1myphHiSzfWBlFFp/1aIj8TLW5ubmxv2vycuvr6xERsbq6+7MUb6/djoiIzR9Hb7u/szbKQPj2399GPIlKx5Pn0cWT6HdExOnTp2OnlZWViF3qqXX5Wd7/vvUGcNiV6+jOTJl48k6DiIjPrn8W8WTEWexxvS3vHXpw78HY9Gnl6/K5989F7Lj+FyXj5Z2/vjM2vdzHvvr6q7Hp5X6/85mlO9XWU+Ttqt0vyjNnP/r4o4iIeO3V18Y+71oPADCZvvfoorQJFhYWIp6M7oyIOH/2/Nh8Wa3t1LW+qyujJw+UEZKlrXVp4VLEjrbD5uaoD1yUrOrc9rr7zd2IHX320qYo5Zx6d5TtXbLDa/s1bT1k05YzaX3m45x/uyjllSz/N//45o65n673Im9/bb6+cnl96yO3bctx7spe/+LWFxE72py130LydhXlSRkly7ych11t2tpxyvtRDN1GP/HnExERsfzh+HsOausp+7FzpHLscXxyfdXOi9bf075KebkeFxcXI3a5vhw0+ftdO+5Frd7zb7O13xJPvjWq9/x9yNcVDod8vevy3//sPXrq93/6dsroAAAAAAAAQA/NRkTkaNj8+6OoWo721pTo6erno2hZjrY9Kzl6WItOZznKW9Sij2XEwrQjR2rR5qJ1+UsfjzJ3c3ZEdvPWzYgnz50EeJHVsme6lOyp5cvjWUj7le9ntftRkeefVuv1uK8AwDD226fLfeCuPmQxaQZ/0betVStn2j5yyQw+M3cmfxSxj3rIpi1n0vrMmf9dSkZ6ycyvZbTn7a/N11cur2995JEEQ4+IKPp+f2r6jobeb9u5GLqNns+L2vHJx7HrvGj1Pe1r0nqoqR3fPLJr6JEDefu7jntRGxkxrdp9g4Otdr2rMSICAAAAAAB4rpoFIh7/9Dge//Q4NjY2YmNjI65cvhJXLl+J9fX1WF9fj0c/P9qOkMaTaOmjnx9tf17mL8uX8g6Lst15Pz9d+TQ+Xfl0bN54EqU9M3cm7n5zdzuSvJdfnvx389bNuHnrZpw/e/6pSPNOrcsHYNydr+/Ena/vxNInS7H0ydL2dbWmXG+XLy8PPhpiGnNzczE3Nxf3v7+/PUpjNw9/fBgPf3wY594/t51h01K5r5Z6LfUMALxcShugq61SM2kfuaynLPeiKH39rnosba/v7n0X3937Ln/80itt+JWVlVhZWels+5c29OLiYiwuLsaDew+eypbfzbNqo5flSjk1rc8L39PnY3V1NVZXV7fPg67zLSvzl/Nbn42iWSACAAAAAACg2TsiAAAAAACAw8U7IgAAAAAAgENFIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGhGIAIAAAAAAGjmlRMnTvyaJwIAAAAAAC+fra2tPGlP//3PyTxpzO//9K0REQAAAAAAQDsCEQAAAAAAQDMCEQAAAAAAQDP/DwS0fWEYLnoDAAAAAElFTkSuQmCC"},28453:(A,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var s=t(96540);const n={},r=s.createContext(n);function i(A){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function o(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(n):A.components||n:i(A.components),s.createElement(r.Provider,{value:e},A.children)}}}]);