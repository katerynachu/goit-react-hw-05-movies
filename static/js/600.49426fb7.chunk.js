"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{4600:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,i,a,s=r(5861),c=r(9439),l=r(4687),d=r.n(l),p=r(2791),u=r(8977),x=r(168),h=r(5867),v=h.ZP.div(t||(t=(0,x.Z)(["\ndisplay:flex;\ngap: 30px;\npadding:20px 30px;\n"]))),m=h.ZP.div(o||(o=(0,x.Z)(["\npadding:20px 0;\ndisplay:flex;\nflex-direction:column;\ngap: 40px;\n"]))),f=h.ZP.h3(i||(i=(0,x.Z)(["\nmargin-bottom:10px;\n\n"]))),g=h.ZP.ul(a||(a=(0,x.Z)(["\nlist-style:none;\ndisplay:flex;\ngap: 20px;\n"]))),j=r(184);function Z(n){var e=n.movie,r=(0,u.Z)(new Date(e.release_date),"yyyy"),t=Math.round(e.vote_average)/10*100,o={color:t<30?"red":t>=30&&t<70?"orange":"green"};return(0,j.jsxs)(v,{children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""}),(0,j.jsxs)(m,{children:[(0,j.jsxs)("h2",{children:[e.title," ",(0,j.jsxs)("span",{children:["(",r,")"]})]}),(0,j.jsxs)("p",{style:o,children:["User Score: ",t,"%"]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(f,{children:"Overview"}),(0,j.jsxs)("p",{children:[" ",e.overview]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(f,{children:"Genres"}),(0,j.jsx)(g,{children:e.genres.map((function(n){return(0,j.jsx)("li",{children:(0,j.jsx)("p",{children:n.name})},n.id)}))})]})]})]})}var w,k,b,y,P=r(1087),_=h.ZP.nav(w||(w=(0,x.Z)(["\npadding:20px 20px 20px 30px;\nbackground-color: #dedede;\n"]))),O=h.ZP.ul(k||(k=(0,x.Z)(["\nlist-style: none;\ndisplay:flex;\ngap: 20px;\n"]))),E=h.ZP.li(b||(b=(0,x.Z)(["\npadding:5px;\n"]))),I=(0,h.ZP)(P.OL)(y||(y=(0,x.Z)(["\ntext-decoration:none;\nfont-weight:700;\ncolor: black;\ntransition: color .7s linear;\n\n&:hover,&:active{\n    color: red;\n}\n"])));function U(n){var e=n.movieId;n.movie;return(0,j.jsx)(_,{children:(0,j.jsxs)(O,{children:[(0,j.jsx)(E,{children:(0,j.jsx)(I,{to:"/movies/".concat(e,"/cast"),children:"cast"})}),(0,j.jsx)(E,{children:(0,j.jsx)(I,{to:"/movies/".concat(e,"/reviews"),children:"reviews"})})]})})}var C=r(5294),G=r(5218),L="011d08b19d0a6cd1659a08ce1a816c37";function S(n){return T.apply(this,arguments)}function T(){return(T=(0,s.Z)(d().mark((function n(e){var r,t,o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e),params:{api_key:L}},n.next=4,(0,C.Z)(r);case 4:return t=n.sent,o=t.data,n.abrupt("return",o);case 9:throw n.prev=9,n.t0=n.catch(0),G.Am.error("Oops! Looks like something went completely wrong! No worries, try again later."),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}var z,A=r(7689),D=(0,h.ZP)(P.rU)(z||(z=(0,x.Z)(["\nmargin-top:20px;\nmargin-left:30px;\ndisplay: inline-block;\ntext-decoration: none;\ntext-transform:uppercase;\n padding: 10px 20px;\n  font-size: 16px;\n  background-color: black;\n  color: white;\n  border:1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: all .5s linear;\n\n&:hover,&:focus{\n    background-color: white;\n    color: black;\n    border-color: black;\n}\n"])));function H(){var n,e=(0,A.TH)(),r=(0,p.useRef)(e),t=(0,A.UO)().movieId,o=(0,p.useState)(null),i=(0,c.Z)(o,2),a=i[0],l=i[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S(t);case 3:e=n.sent,l(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,j.jsxs)("div",{children:[(0,j.jsx)(D,{to:(null===(n=r.current.state)||void 0===n?void 0:n.from)||"/",children:"go home"}),a&&(0,j.jsx)(Z,{movie:a}),(0,j.jsx)(U,{movieId:t,movie:a}),(0,j.jsx)(A.j3,{})]})}}}]);
//# sourceMappingURL=600.49426fb7.chunk.js.map