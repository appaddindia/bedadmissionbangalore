"use strict";exports.id=3011,exports.ids=[3011],exports.modules={3011:(e,t,s)=>{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var o=s(2245),a=s.n(o),r=s(6689);let getPartsofTimeDuration=e=>({days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%36e5/6e4),seconds:Math.floor(e%6e4/1e3)}),__WEBPACK_DEFAULT_EXPORT__=e=>{let[t,s]=(0,r.useState)(new Date().toLocaleTimeString()),o=new Date;o.setDate(o.getDate()+7),o=a()(o).format("M-D-YYYY, 00:00:00"),(0,r.useEffect)(()=>{let e=setTimeout(()=>{let e=new Date;s(e.toLocaleTimeString())},1e3);return()=>{clearTimeout(e)}},[t]);let n=Date.now(),u=new Date(e||o),i=u.getTime()-n,d=getPartsofTimeDuration(i);return d.days=d.days<=9?`0${d.days}`:d.days,d.minutes=d.minutes<=9?`0${d.minutes}`:d.minutes,d.hours=d.hours<=9?`0${d.hours}`:d.hours,d.seconds=d.seconds<=9?`0${d.seconds}`:d.seconds,d}}};