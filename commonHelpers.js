import{a as v,S as E,i as c}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();async function g(o,e){const d="42389697-3421d6cd291bd0189edc17b09",i="https://pixabay.com",t="/api/",s={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e},n=`${i}${t}`;return(await v.get(n,{params:s})).data}function P(o){return o.hits.map(e=>` <a href="${e.largeImageURL}" class="image-card">
            <img src="${e.webformatURL}" alt="${e.tags}"/>
            <div class="caption">
                <ul class="caption-list"><li class="caption-text">Views <span>${e.views}</span></li>
                    <li class="caption-text">Likes <span>${e.likes}</span></li>
                    <li class="caption-text">Comments <span>${e.comments}</span></li>
                    <li class="caption-text">Downloads <span>${e.downloads}</span></li>
                </ul>
            </div>
        </a>`).join("")}const $=document.querySelector("form"),p=document.querySelector(".gallery"),y=document.querySelector(".loader"),f=document.querySelector(".load-btn"),x={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};let m=new E(".gallery a",x);m.on("show.simplelightbox");let a,r,h;$.addEventListener("submit",q);f.addEventListener("click",R);async function q(o){if(o.preventDefault(),p.innerHTML="",r=1,l(),a=o.target.elements.search.value.trim(),b(),!a){c.warning({title:"Caution",position:"topLeft",message:"This field is required"}),u();return}try{const e=await g(a,r);h=Math.ceil(e.total/15),L(e),m.refresh(),u(),T(),O(e)}catch(e){console.log(e),S()}o.target.reset()}function O(o){o.total||(c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l())}function L(o){const e=P(o);p.insertAdjacentHTML("beforeend",e)}async function R(o){l(),b(),r+=1;try{const e=await g(a,r);L(e),m.refresh(),u(),w(),M(),I()}catch(e){console.log(e),S()}}function T(){r!=h&&w()}function M(){r>=h&&(l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}function b(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}function w(){f.classList.remove("is-hidden")}function l(){f.classList.add("is-hidden")}function I(){const o=p.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:`${2*o}`})}function S(){c.error({title:"",message:"Sorry, maybe there are some issues with network connection!",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
