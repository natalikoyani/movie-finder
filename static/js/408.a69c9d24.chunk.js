"use strict";(self.webpackChunkmovie_finder=self.webpackChunkmovie_finder||[]).push([[408],{687:function(e,r,n){n.d(r,{Bt:function(){return f},Mc:function(){return i},Tg:function(){return o},vw:function(){return v},y:function(){return p}});var t=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="16d168f707f6ea30309ca4c94be54a91",o=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(s));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},408:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t,a,c=n(861),u=n(439),s=n(757),o=n.n(s),i=n(791),p=n(689),f=n(687),v=n(168),l=n(867),d=l.ZP.ul(t||(t=(0,v.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),h=l.ZP.h4(a||(a=(0,v.Z)(["\n  margin-bottom: 5px;\n"]))),m=n(184);function x(){var e=(0,p.UO)().movieId,r=(0,i.useState)([]),n=(0,u.Z)(r,2),t=n[0],a=n[1];return(0,i.useEffect)((function(){if(e){var r=function(){var r=(0,c.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,f.Bt)(e);case 3:n=r.sent,a(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[e]),0===t.length?(0,m.jsx)(d,{children:(0,m.jsx)("p",{children:"We don't have reviews for this movie"})}):(0,m.jsx)(d,{children:t.map((function(e){return(0,m.jsxs)("li",{children:[(0,m.jsx)(h,{children:e.author}),(0,m.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=408.a69c9d24.chunk.js.map