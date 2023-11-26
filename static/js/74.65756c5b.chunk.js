"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[74],{5446:function(n,e,t){t.d(e,{Z:function(){return v}});t(2791);var r,a,i,o,s=t(168),p=t(5867),c=t(1087),u=p.ZP.li(r||(r=(0,s.Z)(["\npadding:15px 25px;\ntransform:scale(1);\nbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\ntransition:transform .6s linear;\n\n&:hover,&:active{\n    transform:scale(1.02);\n\n}\n"]))),l=p.ZP.p(a||(a=(0,s.Z)(["\nmax-width:300px;\ntext-transform:uppercase;\ncolor: black;\nfont-weight:600;\nmargin-bottom:10px;\n"]))),x=(0,p.ZP)(c.rU)(i||(i=(0,s.Z)(["\ntext-decoration:none;\n\n\n"]))),d=t(7689),h=t(184);function f(n){var e=n.movie,t=(0,d.TH)(),r=e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637";return(0,h.jsx)(u,{children:(0,h.jsxs)(x,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,h.jsx)(l,{children:e.title}),(0,h.jsx)("img",{width:300,src:r,alt:"movie poster"})]})},e.id)}var m=p.ZP.ul(o||(o=(0,s.Z)(["\npadding:30px 0;\nlist-style: none;\ndisplay:flex;\njustify-content:center;\nflex-wrap:wrap;\ngap: 10px;\n"])));function v(n){var e=n.movies;return(0,h.jsx)(m,{children:e.map((function(n){return(0,h.jsx)(f,{movie:n},n.id)}))})}},9074:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,i,o,s,p,c=t(5861),u=t(9439),l=t(4687),x=t.n(l),d=t(9263),h=t(5446),f=t(168),m=t(5867),v=m.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n"]))),g=m.ZP.input(a||(a=(0,f.Z)(["\n  padding: 10px;\n  width: 320px;\n  outline: none;\n  margin-bottom: 10px;\n  font-size: 16px;\n"]))),Z=m.ZP.button(i||(i=(0,f.Z)(["\n  padding: 10px;\n  font-size: 16px;\n  cursor: pointer;\n"]))),w=m.ZP.div(o||(o=(0,f.Z)(["\n  margin-top: 20px;\n"]))),b=(m.ZP.ul(s||(s=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),m.ZP.li(p||(p=(0,f.Z)(["\n  padding: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: #f0f0f0;\n  }\n"]))),t(5294)),k=t(5218),y="011d08b19d0a6cd1659a08ce1a816c37";function j(){return(j=(0,c.Z)(x().mark((function n(e){var t,r,a;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{api_key:y,query:e}},n.next=4,(0,b.Z)(t);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),k.Am.error("Oops! Looks like something went completely wrong! No worries, try again later."),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}var P=function(n){return j.apply(this,arguments)},_=t(2791),S=t(1087),E=t(184);function q(){var n=(0,_.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,_.useState)([]),i=(0,u.Z)(a,2),o=i[0],s=i[1],p=(0,_.useState)(!1),l=(0,u.Z)(p,2),f=l[0],m=l[1],b=(0,S.lr)(),k=(0,u.Z)(b,2),y=k[0],j=k[1],q=function(){var n=(0,c.Z)(x().mark((function n(e){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P(e);case 3:t=n.sent,s(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching search results:",n.t0);case 10:return n.prev=10,m(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(e){return n.apply(this,arguments)}}();(0,_.useEffect)((function(){var n=y.get("query");n&&(q(n),r(n))}),[y]);return(0,E.jsxs)(v,{children:[(0,E.jsxs)("form",{onSubmit:function(n){var e;n.preventDefault(),q(t),e=t,y.set("query",e),j(y)},children:[(0,E.jsx)(g,{type:"text",placeholder:"Enter movie title",value:t,onChange:function(n){return r(n.target.value)}}),(0,E.jsx)(Z,{type:"submit",children:"Search"})]}),f?(0,E.jsx)(d.Z,{}):o.length>0&&(0,E.jsxs)(w,{children:[(0,E.jsx)("h2",{children:"Search Results"}),(0,E.jsx)(h.Z,{movies:o})]})]})}}}]);
//# sourceMappingURL=74.65756c5b.chunk.js.map