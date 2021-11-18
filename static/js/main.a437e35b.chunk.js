(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),j=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(j,{movie:e},e.imdbID)}))})},d=c(6),b=c.n(d),m=c(8),u=(c(21),c(9)),v=c.n(u),O=function(e){var t="https://www.omdbapi.com/?apikey=7477c903&t=".concat(e);return fetch(t).then((function(e){return e.json()}))},h=function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],o=Object(r.useState)({}),d=Object(a.a)(o,2),u=d[0],h=d[1],x=Object(r.useState)(""),f=Object(a.a)(x,2),p=f[0],N=f[1],g=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(i);case 2:"True"===(t=e.sent).Response?(N(""),h(t)):(N(t.Error),h({}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("input",{type:"text",id:"movie-title",value:i,onChange:function(e){n(e.target.value)},placeholder:"Enter a title to search",className:v()("input",{"is-danger":!!p})})]})}),Object(l.jsx)("p",{className:"help is-danger",children:p})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return g()},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){t(u),h({})},disabled:!u.Title,children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),u.Title&&Object(l.jsx)(j,{movie:u})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovie:function(e){!c.find((function(t){return t.imdbID===e.imdbID}))&&s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a437e35b.chunk.js.map