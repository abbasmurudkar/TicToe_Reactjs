(this.webpackJsonptictoe=this.webpackJsonptictoe||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(4),s=t.n(a),i=(t(9),t(2)),o=(t(10),t(0));var l=function(e){var n=e.value,t=(e.children,e.update),r=e.iswinningsquare;return Object(o.jsx)("button",{type:"button",className:"square ".concat(r?"winning":""," ").concat("X"===n?"text-green":"text-orange"),onClick:t,children:n})};var u=function(e){var n=e.gameboard,t=e.handleclick,r=e.winningsquares,c=function(e){var c=r.includes(e);return Object(o.jsx)(l,{value:n[e],update:function(){t(e)},iswinningsquare:c})};return Object(o.jsxs)("div",{className:"board",children:[Object(o.jsxs)("div",{className:"board-rows",children:[c(0),c(1),c(2)]}),Object(o.jsxs)("div",{className:"board-rows",children:[c(3),c(4),c(5)]}),Object(o.jsxs)("div",{className:"board-rows",children:[c(6),c(7),c(8)]})]})},j=(t(12),function(e){var n=e.history,t=e.moveto,r=e.currentmove;return Object(o.jsx)("div",{className:"history-wrapper",children:Object(o.jsx)("ul",{className:"history",children:n.map((function(e,n){return Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("button",{className:"btn-move ".concat(n===r?"active":""),type:"button",onClick:function(){t(n)},children:0===n?"go to game to start":"go to move #".concat(n)})]},n)}))})})});var b=function(e){var n=e.winner,t=e.current,r=t.gameboard.every((function(e){return null!==e}));return Object(o.jsxs)("div",{className:"status-message",children:[n&&Object(o.jsxs)(o.Fragment,{children:["Winner is ",Object(o.jsx)("span",{className:"X"===n?"text-green":"text-orange",children:n}),"  "]}),!n&&!r&&Object(o.jsxs)(o.Fragment,{children:["Next Player turn ",Object(o.jsxs)("span",{className:t.zero?"text-green":"text-orange",children:[t.zero?"X":"0"," "]})]})," ",!n&&r&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("span",{className:"text-green",children:"X"}),"and ",Object(o.jsx)("span",{className:"text-orange",children:"0 "}),"Tied"]})," "]})};var d=function(){var e=[{gameboard:Array(9).fill(null),zero:!0}],n=Object(r.useState)([{gameboard:Array(9).fill(null),zero:!0}]),t=Object(i.a)(n,2),c=t[0],a=t[1],s=Object(r.useState)(0),l=Object(i.a)(s,2),d=l[0],g=l[1],m=c[d],h=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(i.a)(n[t],3),c=r[0],a=r[1],s=r[2];if(e[c]&&e[c]===e[a]&&e[c]===e[s])return{winner:e[c],winningsquares:[c,a,s]}}return{winner:null,winningsquares:[]}}(m.gameboard),x=h.winner,O=h.winningsquares;return console.log(m.gameboard),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h1",{children:["TIC ",Object(o.jsx)("span",{className:"text-green",children:"TOE"})," GAME"]}),Object(o.jsx)(b,{winner:x,current:m}),Object(o.jsx)(u,{gameboard:m.gameboard,handleclick:function(e){m.gameboard[e]||x||(a((function(n){var t=n[n.length-1],r=t.gameboard.map((function(n,r){return r===e?t.zero?"X":"0":n}));return n.concat({gameboard:r,zero:!t.zero})})),g((function(e){return e+1})))},winningsquares:O}),Object(o.jsx)("button",{type:"button",onClick:function(){a(e),g(0)},className:"btn-reset ".concat(x?"active":""),children:"START NEW GAME"}),Object(o.jsx)("h2",{style:{fontWeight:"normal"},children:"CURRENT GAME HISTORY"}),Object(o.jsx)(j,{history:c,moveto:function(e){g(e)},currentmove:d}),Object(o.jsx)("div",{className:"bg-balls"})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),g()}],[[13,1,2]]]);
//# sourceMappingURL=main.337e7b56.chunk.js.map