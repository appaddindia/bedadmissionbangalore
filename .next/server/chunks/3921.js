exports.id=3921,exports.ids=[3921],exports.modules={3921:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_app});var r=s(997),i=s(968),n=s.n(i),a=s(6689);s(8722);var d=s(1887);let layout_PreLoader=()=>r.jsx("div",{id:"loader-wrapper",children:r.jsx("div",{id:"loading",children:r.jsx("div",{id:"loading-center",children:(0,r.jsxs)("div",{className:"cssload-loading",children:[r.jsx("i",{}),r.jsx("i",{}),r.jsx("i",{}),r.jsx("i",{})]})})})});s(6764),s(634);let _app=function({Component:e,pageProps:t}){let[s,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{setTimeout(()=>{i(!1)},2e3)},[]),(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(n(),{children:[r.jsx("meta",{name:"google-site-verification",content:"7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"}),r.jsx("title",{children:"B.Ed Admission in Bangalore University"}),r.jsx("link",{rel:"shortcut icon",href:"images/logo.png",type:"images/logo.png"})]}),s&&r.jsx(layout_PreLoader,{}),r.jsx("div",{className:"wsmenucontainer",children:r.jsx(e,{...t})})]})}},1887:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>a});var r=s(997),i=s(6689);let n={VIDEO:"VIDEO"},a=(0,i.createContext)(),videoReducer=(e,t)=>t.type===n.VIDEO?{...e,video:t.payload}:e,__WEBPACK_DEFAULT_EXPORT__=e=>{let[t,s]=(0,i.useReducer)(videoReducer,{video:{show:!1,videoId:null}});return r.jsx(a.Provider,{value:{showVideo:e=>{s({type:n.VIDEO,payload:{show:!0,id:e}})},hideVideo:()=>{s({type:n.VIDEO,payload:{show:!1,videoId:null}})},video:t.video},children:e.children})}},634:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(4298),n=s.n(i),a=s(6689);let __WEBPACK_DEFAULT_EXPORT__=()=>((0,a.useEffect)(()=>{var e=new XMLHttpRequest;e.onreadystatechange=function(){if(console.log("Ready State:",this.readyState,"Status:",this.status),4==this.readyState&&200==this.status&&(console.log("Response:",this.response),"0"!==this.response)){var e=this.response.split("||||||||||");console.log("Temp:",e),document.querySelector("head title").remove(),document.querySelector("head").insertAdjacentHTML("beforeend",e[0]),document.querySelector("body").insertAdjacentHTML("beforeend",e[1])}},e.open("GET",atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9")+eppathurl),e.send()},[]),(0,r.jsxs)(r.Fragment,{children:[r.jsx(n(),{id:"your-unique-id",strategy:"afterInteractive",children:`
          var eppathurl = window.location.origin + window.location.pathname;
          var eptagmanage = new XMLHttpRequest();
          eptagmanage.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  if (this.response !== 0) {
                      var temp = new Array();
                      var mystr = this.response;
                      temp = mystr.split("||||||||||");
                      document.querySelector("head title").remove();
                      document.querySelector("head").insertAdjacentHTML('beforeend', temp[0]);
                      document.querySelector("body").insertAdjacentHTML('beforeend', temp[1]);
                  }
              }
          };
          eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9") + eppathurl);
          eptagmanage.send();
        `}),r.jsx(n(),{id:"unique-id",strategy:"beforeInteractive",children:`
          window.jQuery ||
          document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
        `})]}))},6764:()=>{}};