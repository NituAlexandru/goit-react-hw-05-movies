"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[998],{490:(a,e,t)=>{t.d(e,{uV:()=>i,Y5:()=>n,Hx:()=>h,wr:()=>s,o1:()=>o});var r=t(294);r.Z.defaults.baseURL="https://api.themoviedb.org/3";const c={params:{api_key:"08adfe7b0fa20f77490ccc776050efbc",language:"en-US"}},s=async()=>{try{return(await r.Z.get("trending/movie/day",c)).data.results}catch(a){throw console.error("Error fetching trending movies:",a),a}},o=async a=>{try{return(await r.Z.get("/search/movie?query=".concat(a),c)).data.results}catch(e){throw console.error('Error searching for "'.concat(a,'":'),e),e}},n=async a=>{try{return(await r.Z.get("/movie/".concat(a),c)).data}catch(e){throw console.error("Error fetching movie details:",e),e}},i=async a=>{try{return(await r.Z.get("movie/".concat(a,"/credits?"),c)).data.cast}catch(e){throw console.error("Error fetching movie cast:",e),e}},h=async a=>{try{return(await r.Z.get("movie/".concat(a,"/reviews?"),c)).data.results}catch(e){throw console.error("Error fetching movie reviews:",e),e}}},998:(a,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(791),c=t(689),s=t(490);const o="Cast_castContainer__86M6b",n="Cast_actorCard__GIxBe",i="Cast_actorImage__0QFIH",h="Cast_actorName__xeYF4",l="Cast_characterName__tgk6h",m="Cast_noImageBanner__Z9Yj0";var d=t(184);const _=()=>{const[a,e]=(0,r.useState)([]),{movieId:t}=(0,c.UO)();return(0,r.useEffect)((()=>{(async()=>{try{const a=await(0,s.uV)(t);e(a)}catch(a){console.error("Error fetching movie cast:",a)}})()}),[t]),a.length?(0,d.jsx)("div",{className:o,children:a.map((a=>(0,d.jsxs)("div",{className:n,children:[a.profile_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(a.profile_path),alt:"".concat(a.name),className:i}):(0,d.jsx)("div",{className:m,children:"No img available"}),(0,d.jsx)("h3",{className:h,children:a.name}),(0,d.jsxs)("p",{className:l,children:["Character: ",a.character]})]},a.cast_id)))}):(0,d.jsx)("div",{children:"No cast information available."})}}}]);
//# sourceMappingURL=998.e1967bbc.chunk.js.map