"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[928],{490:(e,t,r)=>{r.d(t,{uV:()=>n,Y5:()=>i,Hx:()=>h,wr:()=>o,o1:()=>c});var a=r(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";const s={params:{api_key:"08adfe7b0fa20f77490ccc776050efbc",language:"en-US"}},o=async()=>{try{return(await a.Z.get("trending/movie/day",s)).data.results}catch(e){throw console.error("Error fetching trending movies:",e),e}},c=async e=>{try{return(await a.Z.get("/search/movie?query=".concat(e),s)).data.results}catch(t){throw console.error('Error searching for "'.concat(e,'":'),t),t}},i=async e=>{try{return(await a.Z.get("/movie/".concat(e),s)).data}catch(t){throw console.error("Error fetching movie details:",t),t}},n=async e=>{try{return(await a.Z.get("movie/".concat(e,"/credits?"),s)).data.cast}catch(t){throw console.error("Error fetching movie cast:",t),t}},h=async e=>{try{return(await a.Z.get("movie/".concat(e,"/reviews?"),s)).data.results}catch(t){throw console.error("Error fetching movie reviews:",t),t}}},928:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(791),s=r(490),o=r(689),c=r(87);const i="Movies_moviesContainer__toWeq",n="Movies_movies__09H+E",h="Movies_listItem__73ijX",l="Movies_submitBtn__1PvRE";var v=r(184);const m=()=>{const[e,t]=(0,a.useState)(""),[r,m]=(0,a.useState)([]),u=(0,o.s0)(),[d]=(0,c.lr)();(0,a.useEffect)((()=>{const e=d.get("query");e&&(t(e),g(e))}),[d]);const g=async e=>{try{const t=await(0,s.o1)(e);m(t)}catch(t){console.error("Error searching movies:",t)}};return(0,v.jsxs)("div",{className:i,children:[(0,v.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),e&&u("/movies?query=".concat(e),{state:{from:"search"}})},children:[(0,v.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Search for a movie..."}),(0,v.jsx)("button",{type:"submit",className:l,children:"Search"})]}),(0,v.jsx)("ul",{className:n,children:r.map((t=>(0,v.jsx)("li",{className:h,children:(0,v.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:"/movies",search:e},children:t.title})},t.id)))})]})}}}]);
//# sourceMappingURL=928.cdc59260.chunk.js.map