if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(i(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"love-story"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.863cd7b3.css",revision:null},{url:"css/chunk-vendors.2ed46ba1.css",revision:null},{url:"css/main.6330fcb2.css",revision:null},{url:"index.html",revision:"c5f06dffe6bac717911818bc65cc36bf"},{url:"js/app.032f899d.js",revision:null},{url:"js/chunk-vendors.c6c5e460.js",revision:null},{url:"js/main.164e79d8.js",revision:null},{url:"json/list.json",revision:"2f10de03c3e4aee63b5fa5f8d25fb505"},{url:"json/story.json",revision:"f309d0a46b7f7d41270b5684c31acd11"},{url:"json/test.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"manifest.json",revision:"8a816a64477124bbdbdb039303dd47f3"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
