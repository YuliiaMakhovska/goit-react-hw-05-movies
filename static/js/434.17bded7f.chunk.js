"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{8434:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,c,i,s,o,u,p,f,d=t(5861),l=t(9439),h=t(4687),x=t.n(h),v=t(5562),m=t.n(v),g=t(6919),b=t(1933),Z=t(168),w=t(4640),j=w.Z.div(r||(r=(0,Z.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  width: 100%;\n  display: grid;\n  margin: 0 auto;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 30px 15px;\n"]))),y=w.Z.img(a||(a=(0,Z.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  display: block;\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),k=w.Z.h3(c||(c=(0,Z.Z)(["\n  font-size: 26px;\n  font-weight: 700;\n"]))),_=w.Z.div(i||(i=(0,Z.Z)(["\n  h2{\n    color: blue;\n    margin-bottom: 10px;\n  }\n  h3{\n    padding-bottom: 10px ;\n  }\n  p{\n    margin-bottom: 20px;\n  }\n}\n"]))),U=t(184),S=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.overview,c=e.genres,i=e.release_date,s=e.vote_average,o=e.name;return(0,U.jsxs)(j,{children:[(0,U.jsx)(y,{src:(0,b.kP)(t),alt:r}),(0,U.jsxs)(_,{children:[(0,U.jsx)(k,{children:null!==r&&void 0!==r?r:o}),(0,U.jsxs)("h2",{children:[" (",i,")"]}),(0,U.jsxs)("p",{children:["User Score: ",s]}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsx)("p",{children:a}),(0,U.jsx)("h3",{children:"Genres"}),(0,U.jsx)("p",{children:(0,b.JZ)(c)})]})]})},z=t(7689),J=t(2791),M=t(1087),P=(0,w.Z)(M.rU)(s||(s=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  display: flex;\n  list-style: none;\n  transform: scale(1);\n  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),R=w.Z.div(o||(o=(0,Z.Z)(["\n  margin: 0 auto;\n"]))),V=w.Z.ul(u||(u=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 80px;\n  margin-top: 50px;\n  font-size: 22px;\n  font-weight: 700;\n  padding: 10px 20px;\n"]))),C=(0,w.Z)(M.rU)(p||(p=(0,Z.Z)([""]))),H=(0,w.Z)(M.rU)(f||(f=(0,Z.Z)([""]))),I=t(5763),O=function(){var n,e,t=(0,z.UO)().movieId,r=(0,J.useState)({}),a=(0,l.Z)(r,2),c=a[0],i=a[1],s=(0,J.useState)(!1),o=(0,l.Z)(s,2),u=o[0],p=o[1],f=null!==(n=null===(e=(0,z.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,J.useEffect)((function(){p(!0);var n=function(){var n=(0,d.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.s_)(t);case 3:e=n.sent,i(e),p(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m().Notify.failure("Sorry, nothing was found");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),c)return(0,U.jsx)("main",{children:(0,U.jsxs)(R,{children:[(0,U.jsxs)(P,{to:f,children:[(0,U.jsx)(I.hPZ,{size:24}),"Go back"]}),u&&(0,U.jsx)(g.Z,{}),c&&(0,U.jsx)(S,{movie:c}),(0,U.jsxs)(V,{children:[(0,U.jsx)(C,{to:"reviews",state:{from:f},children:"Reviews"}),(0,U.jsx)(H,{to:"cast",state:{from:f},children:"Cast"})]}),(0,U.jsx)(J.Suspense,{fallback:(0,U.jsx)(g.Z,{}),children:(0,U.jsx)(z.j3,{})})]})})}},1933:function(n,e,t){t.d(e,{Hg:function(){return u},JZ:function(){return h},Jh:function(){return f},_r:function(){return d},kP:function(){return l},s_:function(){return p},z1:function(){return o}});var r=t(5861),a=t(4687),c=t.n(a),i=t(2388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="07f8816ebdb8fd109b409236cc379840",o=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=").concat(t,"&query=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day?api_key=".concat(s,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function l(n){return n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://th.bing.com/th/id/R.d455faed57de093e87bf5e8d443a939d?rik=mcfV46ZrM7B%2b1w&riu=http%3a%2f%2fthemaryastorcollection.com%2fwp-content%2fgallery-bank%2falbum-thumbs%2fo_1a7dsr5bf1hr34nf1csc1eeb124va.jpg&ehk=zJ6vOJ%2fVm98M8P8VHvK9MVr5JhMaIybLNhey7wmTd2c%3d&risl=&pid=ImgRaw&r=0"}function h(n){if(n)return n.map((function(n){return n.name})).join(", ")}}}]);
//# sourceMappingURL=434.17bded7f.chunk.js.map