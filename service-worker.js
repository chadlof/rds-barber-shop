"use strict";var precacheConfig=[["/rds-barber-shop/index.html","28c9512b0865e5cb1fcfd81787aaeeba"],["/rds-barber-shop/static/css/main.1f9cdb3e.css","431f616b66a04fe15f0175ace019d97b"],["/rds-barber-shop/static/js/main.09c731b0.js","ac965f2ae9c0484d80f5fc66862d25a3"],["/rds-barber-shop/static/media/Butler_Medium.fbda3486.otf","fbda348653745b3db7e2b87cd1a141fe"],["/rds-barber-shop/static/media/RDsLogo.402647b4.png","402647b4e6a961e31ed3060dad9ebcbe"],["/rds-barber-shop/static/media/brian.0493a899.jpg","0493a899a848f0fbfc32831d49f95330"],["/rds-barber-shop/static/media/brian2.4186bf08.jpg","4186bf08046a577b225d9707bfb9ba28"],["/rds-barber-shop/static/media/brian3.d4f5a5cf.jpg","d4f5a5cfa724e77fc467d6f6e9dec732"],["/rds-barber-shop/static/media/firstCut.c6bd4f7c.png","c6bd4f7c6d31cacb88ae32460ca244a5"],["/rds-barber-shop/static/media/firstCut2.b5a79b0e.jpg","b5a79b0edf67c28d0b5b11f0fe3c83ff"],["/rds-barber-shop/static/media/firstCut3.4a0985e5.jpg","4a0985e5f8f5ba616694a6200557a155"],["/rds-barber-shop/static/media/firstCut4.5958e970.jpg","5958e970967a3118bf5b200b2fa31d6b"],["/rds-barber-shop/static/media/firstCut5.4dda7530.jpg","4dda75309cd77ff2b149ef3c5e965a8f"],["/rds-barber-shop/static/media/firstCut6.3fdf6ca6.jpg","3fdf6ca6c48622ee1ef28cb542948184"],["/rds-barber-shop/static/media/firstCut7.86a49e73.jpg","86a49e733589b15db82f2d327353a609"],["/rds-barber-shop/static/media/ron.c1f415df.jpg","c1f415dfeee4c1a87490bca0dce75ca6"],["/rds-barber-shop/static/media/storeFront.bf2d1495.png","bf2d14950b8e0fc9c6e6123417aaede3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=r),t.toString()},cleanResponse=function(r){return r.redirected?("body"in r?Promise.resolve(r.body):r.blob()).then(function(e){return new Response(e,{headers:r.headers,status:r.status,statusText:r.statusText})}):Promise.resolve(r)},createCacheKey=function(e,r,t,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var t=new URL(r).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(r){return t.every(function(e){return!e.test(r[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],t=e[1],a=new URL(r,self.location),n=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var e=new Request(r,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+r+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(r,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(r){return r.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return r.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(r){if("GET"===r.request.method){var e,t=stripIgnoredUrlParameters(r.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var n="/rds-barber-shop/index.html";!e&&"navigate"===r.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],r.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&r.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',r.request.url,e),fetch(r.request)}))}});