exports.id=3921,exports.ids=[3921],exports.modules={3921:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_app});var n=i(997),a=i(968),r=i.n(a),s=i(6689);i(8722);var d=i(1887);let layout_PreLoader=()=>n.jsx("div",{id:"loader-wrapper",children:n.jsx("div",{id:"loading",children:n.jsx("div",{id:"loading-center",children:(0,n.jsxs)("div",{className:"cssload-loading",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]})})})});i(6764),i(634);let _app=function({Component:e,pageProps:t}){let[i,a]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{setTimeout(()=>{a(!1)},2e3)},[]),(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(r(),{children:[n.jsx("meta",{name:"google-site-verification",content:"7_B5W65vkDoemWm_icAOh9OziDM6z5fCjAwKWzwXA-c"}),n.jsx("title",{children:"B.Ed Admission in Bangalore University"}),n.jsx("link",{rel:"shortcut icon",href:"images/logo.png",type:"images/logo.png"})]}),i&&n.jsx(layout_PreLoader,{}),n.jsx("div",{className:"wsmenucontainer",children:n.jsx(e,{...t})})]})}},1887:(e,t,i)=>{"use strict";i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>s});var n=i(997),a=i(6689);let r={VIDEO:"VIDEO"},s=(0,a.createContext)(),videoReducer=(e,t)=>t.type===r.VIDEO?{...e,video:t.payload}:e,__WEBPACK_DEFAULT_EXPORT__=e=>{let[t,i]=(0,a.useReducer)(videoReducer,{video:{show:!1,videoId:null}});return n.jsx(s.Provider,{value:{showVideo:e=>{i({type:r.VIDEO,payload:{show:!0,id:e}})},hideVideo:()=>{i({type:r.VIDEO,payload:{show:!1,videoId:null}})},video:t.video},children:e.children})}},634:(e,t,i)=>{"use strict";i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=i(997),a=i(4298),r=i.n(a),s=i(6689);let __WEBPACK_DEFAULT_EXPORT__=()=>((0,s.useEffect)(()=>{var e=window.location.origin+window.location.pathname,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&0!==this.response){var e=[];e=this.response.split("||||||||||"),document.querySelector("head title").remove(),document.querySelector("head").insertAdjacentHTML("beforeend",e[0])}},t.open("GET",atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9")+e),t.send()},[]),(0,n.jsxs)(n.Fragment,{children:[n.jsx(r(),{id:"your-unique-id",strategy:"afterInteractive",children:`
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
        `}),n.jsx(r(),{id:"unique-id",strategy:"beforeInteractive",children:`
          window.jQuery ||
          document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
        `})]}))},6764:()=>{}};