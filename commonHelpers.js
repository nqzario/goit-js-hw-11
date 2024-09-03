import{S as f,i as g}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".card-container");function p(i){const s=i.hits.reduce((r,n)=>{const{webformatURL:e,largeImageURL:t,tags:o,likes:m,views:u,comments:h,downloads:d}=n;return r+=`<div class="container-img">
      <a href="${t}"><img src="${e}" alt="${o}"></a>
      <ul class="img_list">
        <li class="img_item">
          <h3 class="img_title">Likes</h3>
          <span class="img_text">${m}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">Views</h3>
          <span class="img_text">${u}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">comments</h3>
          <span class="img_text">${h}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">downloads</h3>
          <span class="img_text">${d}</span>
        </li>
      </ul>
        </div>`},"");l.insertAdjacentHTML("beforeend",s)}const y="https://pixabay.com/api/",w="43780591-6ab37bb22e1af39025cb54e89";function L(i){const s=new URLSearchParams({key:w,q:i,safesearch:!0,image_type:"photo",orientation:"horizontal"});return fetch(`${y}?${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, something went wrong with the request!");return r.json()}).then(r=>{if(r.hits.length===0||i==="")throw new Error("Sorry, there are no images matching your search query. Please try again!");return r})}const a=document.querySelector(".search-form"),b=a.querySelector("input"),c=document.querySelector(".loader");a.addEventListener("submit",i=>{i.preventDefault(),l.innerHTML="",c.classList.remove("is-hidden");const s=b.value.trim();L(s).then(p).then(()=>{new f(".container-img a").refresh()}).catch(r=>{g.show({title:r.message,position:"topRight",backgroundColor:"red"})}).finally(()=>{a.reset(),c.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
