(()=>{"use strict";const e=new class{constructor(e){this.defaults=e,this.get=this.get.bind(this)}get(){return new Promise(((e,t)=>{chrome.storage.sync.get({options:this.defaults},(t=>e(t.options)))}))}set(e){return new Promise(((t,n)=>{chrome.storage.sync.set({options:e},t)}))}}({like_what:"subscribed",like_when:"instantly",like_when_minutes:"2",like_when_percent:"50",disabled:!1});(new class{constructor(e){this.msg=e||{start:"__MSG_",end:"__"}}localize(e){for(;e.includes(this.msg.start);){let t=e.indexOf(this.msg.start)+this.msg.start.length,n=e.substring(t,e.indexOf(this.msg.end,t)),o=`${this.msg.start}${n}${this.msg.end}`,s=chrome.i18n.getMessage(n);e=e.replace(new RegExp(o,"g"),s)}return e}populateText(){let e=null,t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,(e=>"script style".includes(e.tagName)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT),!1);for(;e=t.nextNode();)e.textContent=this.localize(e.textContent);document.querySelectorAll("[data-i18n]").forEach((e=>{Array.from(e.attributes).forEach((({nodeName:t,nodeValue:n})=>{e.setAttribute(t,this.localize(n))}))}))}}).populateText();const t=async()=>{const t=await e.get();document.querySelectorAll("input").forEach((e=>{if(!t.hasOwnProperty(e.name))return;const n=t[e.name];"radio"===e.type||"checkbox"===e.type?e.checked=e.value===n:e.value=n})),chrome.storage.sync.get({log:"[no log found]"},(({log:e})=>{const t=document.querySelector("#report-link"),n=`https://github.com/austencm/youtube-auto-like/issues/new?labels=bug&body=${encodeURIComponent("\n\x3c!-- Thanks for reporting! A debug log is already attached. If you have any other info that might be helpful, please write above the line. --\x3e\n\n\n\n__________________________\n### Log\n"+e)}`;t.setAttribute("href",n)}))};function n(e){document.querySelector(".reload-notice").hidden=e,document.querySelector(".saving-text").hidden=!e}t(),document.querySelector("#options-form").addEventListener("change",(async function(o){const s={};Array.from(new FormData(o.currentTarget).entries()).forEach((([e,t])=>s[e]=t)),n(!0),await e.set(s),await t(),setTimeout((()=>n(!1)),300)})),async function(){chrome.storage.local.get("latestRelease",(({latestRelease:e})=>{if(e){const t=document.querySelector(".update-notice"),n=document.querySelector(".latest-link");n.innerHTML+=` v${e.version}`,n.setAttribute("href",e.downloadUrl),t.removeAttribute("hidden")}}))}()})();