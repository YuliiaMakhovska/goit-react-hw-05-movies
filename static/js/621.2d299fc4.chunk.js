"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621,779],{3174:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,i,o,u,c=e(7689),s=e(1933),p=e(168),f=e(4640),l=e(1087),d=f.Z.ul(r||(r=(0,p.Z)(["\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px 30px;\n  grid-auto-rows: auto;\n  max-width: 1200px;\n"]))),x=f.Z.li(a||(a=(0,p.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  width: 100%;\n  &:hover {\n    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.01);\n  }\n"]))),m=(0,f.Z)(l.rU)(i||(i=(0,p.Z)(["\n  display: block;\n  list-style: none;\n  transform: scale(1);\n  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),h=f.Z.img(o||(o=(0,p.Z)(["\n  border-radius: 5px;\n  object-fit: cover;\n  display: block;\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=f.Z.div(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding-top: 15px;\n"]))),v=e(184),b=function(n){var t=n.movies,e=(0,c.TH)();if(t)return(0,v.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.name,a=n.poster_path,i=n.title;return(0,v.jsx)(x,{children:(0,v.jsxs)(m,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(h,{src:(0,s.kP)(a),alt:i}),(0,v.jsx)(g,{children:null!==i&&void 0!==i?i:r})]})},t)}))})}},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i,o=e(5861),u=e(9439),c=e(4687),s=e.n(c),p=e(6919),f=e(5562),l=e.n(f),d=e(7689),x=e(1933),m=e(2791),h=e(168),g=e(4640),v=g.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),b=g.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Z=g.Z.li(i||(i=(0,h.Z)(["\n  h2 {\n    margin-bottom: 10px;\n  }\n  p {\n    margin-bottom: 20px;\n  }\n"]))),y=e(184),w=function(){var n=(0,d.UO)().movieId,t=(0,m.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,m.useState)(!1),c=(0,u.Z)(i,2),f=c[0],h=c[1];if((0,m.useEffect)((function(){h(!0);var t=function(){var t=(0,o.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x._r)(n);case 3:e=t.sent,a(e),h(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l().Notify.failure("Sorry, nothing was found");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),r)return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(v,{children:[!f&&r.length>0&&(0,y.jsx)(b,{children:r.map((function(n){var t=n.id,e=n.content,r=n.author;return(0,y.jsxs)(Z,{children:[(0,y.jsx)("h2",{children:r}),(0,y.jsx)("p",{children:e})]},t)}))}),f&&(0,y.jsx)(p.Z,{})]})})}},3621:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,i,o=e(5861),u=e(9439),c=e(4687),s=e.n(c),p=e(5562),f=e.n(p),l=e(3174),d=e(2791),x=e(168),m=e(4640),h=m.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=m.Z.input(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n&:placeholder {\n  font: inherit;\n  font-size: 18px;"]))),v=m.Z.button(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &: hover {\n    opacity: 1;\n  } ;\n"]))),b=e(9126),Z=e(184),y=function(n){var t=n.value,e=n.onChange,r=(0,d.useState)(t||""),a=(0,u.Z)(r,2),i=a[0],o=a[1];return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value.toLowerCase();e(t.trim()),""!==t.trim()||f().Notify.failure("Please, enter correct name")},children:[(0,Z.jsx)(g,{type:"text",name:"query",value:i,onChange:function(n){o(n.currentTarget.value)},autoFocus:!0}),(0,Z.jsx)(v,{type:"submit",children:(0,Z.jsx)(b.dVI,{size:30})})]})},w=e(6919),k=e(9779),j=e(1933),_=e(1087),S=e(7689),z=function(){var n,t=(0,d.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,d.useState)(!1),c=(0,u.Z)(i,2),p=c[0],x=c[1],m=(0,_.lr)(),h=(0,u.Z)(m,2),g=h[0],v=h[1],b=null!==(n=g.get("movie"))&&void 0!==n?n:"";return(0,d.useEffect)((function(){if(b){x(!0);var n=function(){var n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.z1)(b);case 3:t=n.sent,a(t),x(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f().Notify.failure("Something wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]),(0,Z.jsxs)("main",{children:[(0,Z.jsxs)("section",{children:[(0,Z.jsx)(y,{value:b,onChange:function(n){v(""!==n?{movie:n}:{})}}),r.length>0&&!p&&(0,Z.jsx)(l.Z,{movies:r}),(0,Z.jsx)(k.default,{}),p&&(0,Z.jsx)(w.Z,{})]}),(0,Z.jsx)(S.j3,{})]})}},1933:function(n,t,e){e.d(t,{Hg:function(){return s},JZ:function(){return x},Jh:function(){return f},_r:function(){return l},kP:function(){return d},s_:function(){return p},z1:function(){return c}});var r=e(5861),a=e(4687),i=e.n(a),o=e(2388);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="07f8816ebdb8fd109b409236cc379840",c=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&page=").concat(e,"&query=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/day?api_key=".concat(u,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function d(n){return n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://th.bing.com/th/id/R.d455faed57de093e87bf5e8d443a939d?rik=mcfV46ZrM7B%2b1w&riu=http%3a%2f%2fthemaryastorcollection.com%2fwp-content%2fgallery-bank%2falbum-thumbs%2fo_1a7dsr5bf1hr34nf1csc1eeb124va.jpg&ehk=zJ6vOJ%2fVm98M8P8VHvK9MVr5JhMaIybLNhey7wmTd2c%3d&risl=&pid=ImgRaw&r=0"}function x(n){if(n)return n.map((function(n){return n.name})).join(", ")}}}]);
//# sourceMappingURL=621.2d299fc4.chunk.js.map