"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{3174:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,c,i,u,o=e(7689),s=e(1933),p=e(168),f=e(4640),l=e(1087),d=f.Z.ul(r||(r=(0,p.Z)(["\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px 30px;\n  grid-auto-rows: auto;\n  max-width: 1200px;\n"]))),m=f.Z.li(a||(a=(0,p.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  width: 100%;\n  &:hover {\n    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.01);\n  }\n"]))),h=(0,f.Z)(l.rU)(c||(c=(0,p.Z)(["\n  display: block;\n  list-style: none;\n  transform: scale(1);\n  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),x=f.Z.img(i||(i=(0,p.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  display: block;\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=f.Z.div(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding-top: 15px;\n"]))),v=e(184),b=function(n){var t=n.movies,e=(0,o.TH)();if(t)return(0,v.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.name,a=n.poster_path,c=n.title;return(0,v.jsx)(m,{children:(0,v.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(x,{src:(0,s.kP)(a),alt:c}),(0,v.jsx)(g,{children:null!==c&&void 0!==c?c:r})]})},t)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a=e(5861),c=e(9439),i=e(4687),u=e.n(i),o=e(2791),s=e(1933),p=e(168),f=e(4640).Z.h2(r||(r=(0,p.Z)(["\n  margin-bottom: 20px;\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n  text-shadow: 2px 2px 5px blue;\n"]))),l=e(3174),d=e(5562),m=e.n(d),h=e(6919),x=e(184),g=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,o.useState)(1),p=(0,c.Z)(i,2),d=p[0],g=p[1],v=(0,o.useState)(!1),b=(0,c.Z)(v,2),Z=b[0],w=b[1];return(0,o.useEffect)((function(){w(!0);var n=function(){var n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Hg)(d);case 3:t=n.sent,r(t),g(1),w(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m().Notify.failure("Something went wrong, please try again later!");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[d]),(0,x.jsxs)("main",{children:[(0,x.jsx)("section",{children:!Z&&e.length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{children:" Trending Movies"}),e.length>0&&!Z&&(0,x.jsx)(l.Z,{movies:e})]})}),Z&&(0,x.jsx)(h.Z,{})]})}},1933:function(n,t,e){e.d(t,{Hg:function(){return s},JZ:function(){return m},Jh:function(){return f},_r:function(){return l},kP:function(){return d},s_:function(){return p},z1:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),i=e(2388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="07f8816ebdb8fd109b409236cc379840",o=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&page=").concat(e,"&query=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day?api_key=".concat(u,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function d(n){return n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://th.bing.com/th/id/R.d455faed57de093e87bf5e8d443a939d?rik=mcfV46ZrM7B%2b1w&riu=http%3a%2f%2fthemaryastorcollection.com%2fwp-content%2fgallery-bank%2falbum-thumbs%2fo_1a7dsr5bf1hr34nf1csc1eeb124va.jpg&ehk=zJ6vOJ%2fVm98M8P8VHvK9MVr5JhMaIybLNhey7wmTd2c%3d&risl=&pid=ImgRaw&r=0"}function m(n){if(n)return n.map((function(n){return n.name})).join(", ")}}}]);
//# sourceMappingURL=304.1add1a04.chunk.js.map