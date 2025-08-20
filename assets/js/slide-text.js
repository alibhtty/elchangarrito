!function(){"use strict";var e=function(e){return Math.abs(parseInt(e,10))};const t=(e,t)=>{const n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["payment_required","payment-required"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const r=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t&&e.classList.remove(r),t};var n=function(e,t,n){var r=new CustomEvent("wpcf7".concat(t),{bubbles:!0,detail:n});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(r)};function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){var t=wpcf7.api,n=t.root,r=t.namespace,a=void 0===r?"contact-form-7/v1":r;return i.reduceRight((function(e,t){return function(n){return t(n,e)}}),(function(e){var t,r,o=e.url,i=e.path,s=e.endpoint,u=e.headers,l=e.body,f=e.data,p=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["url","path","endpoint","headers","body","data"]);"string"==typeof s&&(t=a.replace(/^\/|\/$/g,""),i=(r=s.replace(/^\//,""))?t+"/"+r:t),"string"==typeof i&&(-1!==n.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),o=n+i),delete(u=c({Accept:"application/json, */*;q=0.1"},u))["X-WP-Nonce"],f&&(l=JSON.stringify(f),u["Content-Type"]="application/json");var d={code:"fetch_error",message:"You are probably offline."},w={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||i||window.location.href,c(c({},p),{},{headers:u,body:l})).then((function(e){return Promise.resolve(e).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){if(204===e.status)return null;if(e&&e.json)return e.json().catch((function(){throw w}));throw w}))}),(function(){throw d}))}))(e)},i=[];function s(e,r={}){if(wpcf7.blocked)return u(e),void t(e,"submitting");const a=new FormData(e);r.submitter&&r.submitter.name&&a.append(r.submitter.name,r.submitter.value);const c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(a,(e=>{const t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}})).filter((e=>!1!==e)),formData:a},i=t=>{const n=document.createElement("li");n.setAttribute("id",t.error_id),t.idref?n.insertAdjacentHTML("beforeend",`<a href="#${t.idref}">${t.message}</a>`):n.insertAdjacentText("beforeend",t.message),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)},s=t=>{const n=e.querySelector(t.into),r=n.querySelector(".wpcf7-form-control");r.classList.add("wpcf7-not-valid"),r.setAttribute("aria-describedby",t.error_id);const a=document.createElement("span");a.setAttribute("class","wpcf7-not-valid-tip"),a.setAttribute("aria-hidden","true"),a.insertAdjacentText("beforeend",t.message),n.appendChild(a),n.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),r.closest(".use-floating-validation-tip")&&(r.addEventListener("focus",(e=>{a.setAttribute("style","display: none")})),a.addEventListener("mouseover",(e=>{a.setAttribute("style","display: none")})))};o({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:a,wpcf7:{endpoint:"feedback",form:e,detail:c}}).then((r=>{const a=t(e,r.status);return c.status=r.status,c.apiResponse=r,["invalid","unaccepted","spam","aborted"].includes(a)?n(e,a,c):["sent","failed"].includes(a)&&n(e,`mail${a}`,c),n(e,"submit",c),r})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&(t.invalid_fields.forEach(i),t.invalid_fields.forEach(s)),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}o.use=function(e){i.unshift(e)},o.use(((e,r)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:r,detail:a}=e.wpcf7;u(r),n(r,"beforesubmit",a),t(r,"submitting")}return r(e)}));const u=e=>{e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText="",e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e=>{e.remove()})),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid")})),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function l(e){var r=new FormData(e),a={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(function(e){var t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}})).filter((function(e){return!1!==e})),formData:r};o({endpoint:"contact-forms/".concat(e.wpcf7.id,"/refill"),method:"GET",wpcf7:{endpoint:"refill",form:e,detail:a}}).then((function(r){e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),a.apiResponse=r,n(e,"reset",a)})).catch((function(e){return console.error(e)}))}o.use((function(e,n){if(e.wpcf7&&"refill"===e.wpcf7.endpoint){var r=e.wpcf7,a=r.form;r.detail,u(a),t(a,"resetting")}return n(e)}));var f=function(e,t){var n=function(n){var r=t[n];e.querySelectorAll('input[name="'.concat(n,'"]')).forEach((function(e){e.value=""})),e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function(e){e.setAttribute("src",r)}));var a=/([0-9]+)\.(png|gif|jpeg)$/.exec(r);a&&e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n,'"]')).forEach((function(e){e.value=a[1]}))};for(var r in t)n(r)},p=function(e,t){var n=function(n){var r=t[n][0],a=t[n][1];e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function(e){e.querySelector('input[name="'.concat(n,'"]')).value="",e.querySelector(".wpcf7-quiz-label").textContent=r,e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n,'"]')).value=a}))};for(var r in t)n(r)};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(t){const n=new FormData(t);t.wpcf7={id:e(n.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:n.get("_wpcf7_version"),locale:n.get("_wpcf7_locale"),unitTag:n.get("_wpcf7_unit_tag"),containerPost:e(n.get("_wpcf7_container_post")),parent:t.closest(".wpcf7")},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),function(e){e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function(t){t.addEventListener("change",(function(t){var n=t.target.getAttribute("name");e.querySelectorAll('input[type="checkbox"][name="'.concat(n,'"]')).forEach((function(e){e!==t.target&&(e.checked=!1)}))}))}))}(t),function(e){e.querySelectorAll(".has-free-text").forEach((function(t){var n=t.querySelector("input.wpcf7-free-text"),r=t.querySelector('input[type="checkbox"], input[type="radio"]');n.disabled=!r.checked,e.addEventListener("change",(function(e){n.disabled=!r.checked,e.target===r&&r.checked&&n.focus()}))}))}(t),function(e){e.querySelectorAll(".wpcf7-validates-as-url").forEach((function(e){e.addEventListener("change",(function(t){var n=e.value.trim();n&&!n.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==n.indexOf(".")&&(n="http://"+(n=n.replace(/^\/+/,""))),e.value=n}))}))}(t),function(e){if(e.querySelector(".wpcf7-acceptance")&&!e.classList.contains("wpcf7-acceptance-as-validation")){var t=function(){var t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((function(e){if(t&&!e.classList.contains("optional")){var n=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&n.checked||!e.classList.contains("invert")&&!n.checked)&&(t=!1)}})),e.querySelectorAll(".wpcf7-submit").forEach((function(e){e.disabled=!t}))};t(),e.addEventListener("change",(function(e){t()})),e.addEventListener("wpcf7reset",(function(e){t()}))}}(t),function(t){var n=function(t,n){var r=e(t.getAttribute("data-starting-value")),a=e(t.getAttribute("data-maximum-value")),c=e(t.getAttribute("data-minimum-value")),o=t.classList.contains("down")?r-n.value.length:n.value.length;t.setAttribute("data-current-value",o),t.innerText=o,a&&a<n.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),c&&n.value.length<c?t.classList.add("too-short"):t.classList.remove("too-short")},a=function(e){e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({init:!1},e),t.querySelectorAll(".wpcf7-character-count").forEach((function(r){var a=r.getAttribute("data-target-name"),c=t.querySelector('[name="'.concat(a,'"]'));c&&(c.value=c.defaultValue,n(r,c),e.init&&c.addEventListener("keyup",(function(e){n(r,c)})))}))};a({init:!0}),t.addEventListener("wpcf7reset",(function(e){a()}))}(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{const n=e.submitter;wpcf7.submit(t,{submitter:n}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&f(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&p(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&f(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&p(t,e.detail.apiResponse.quiz)}))}document.addEventListener("DOMContentLoaded",(e=>{var t;if("undefined"==typeof wpcf7)return void console.error("wpcf7 is not defined.");if(void 0===wpcf7.api)return void console.error("wpcf7.api is not defined.");if("function"!=typeof window.fetch)return void console.error("Your browser doesn't support window.fetch().");if("function"!=typeof window.FormData)return void console.error("Your browser doesn't support window.FormData().");const n=document.querySelectorAll(".wpcf7 > form");"function"==typeof n.forEach?(wpcf7={init:w,submit:s,reset:l,...null!==(t=wpcf7)&&void 0!==t?t:{}},n.forEach((e=>wpcf7.init(e)))):console.error("Your browser doesn't support NodeList.forEach().")}))}();
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,J="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===J||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new J.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===J?J.scrollY:e.scrollTop,n=e===J?J.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===J)return i===J;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?J.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,s,ee={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new J.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=J.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=J.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||J.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(ee.isObject(a[l])&&ee.isObject(s[l])?ee.extend(a[l],s[l]):!ee.isObject(a[l])&&ee.isObject(s[l])?(a[l]={},ee.extend(a[l],s[l])):a[l]=s[l])}}return a}},te=(i=f.createElement("div"),{touch:J.Modernizr&&!0===J.Modernizr.touch||!!(0<J.navigator.maxTouchPoints||"ontouchstart"in J||J.DocumentTouch&&f instanceof J.DocumentTouch),pointerEvents:!!(J.navigator.pointerEnabled||J.PointerEvent||"maxTouchPoints"in J.navigator&&0<J.navigator.maxTouchPoints),prefixedPointerEvents:!!J.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:J.Modernizr&&!0===J.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in J||"WebkitMutationObserver"in J,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});J.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in J}),I={isIE:!!J.navigator.userAgent.match(/Trident/g)||!!J.navigator.userAgent.match(/MSIE/g),isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:(s=J.navigator.userAgent.toLowerCase(),0<=s.indexOf("safari")&&s.indexOf("chrome")<0&&s.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)},n=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},o={components:{configurable:!0}};n.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},n.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},n.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},n.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},n.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&ee.extend(a,t.params)})},n.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},n.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+ee.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},n.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(n,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),ee.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),z=0;z<d;z+=1){T=0;var P=l.eq(z);if(1<t.slidesPerColumn){var k=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),k=$+L*x/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(L=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=J.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;if(D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else if(e.isHorizontal()){var A=parseFloat(I.getPropertyValue("width")),H=parseFloat(I.getPropertyValue("padding-left")),N=parseFloat(I.getPropertyValue("padding-right")),G=parseFloat(I.getPropertyValue("margin-left")),B=parseFloat(I.getPropertyValue("margin-right")),X=I.getPropertyValue("box-sizing");T=X&&"border-box"===X?A+G+B:A+H+N+G+B}else{var Y=parseFloat(I.getPropertyValue("height")),V=parseFloat(I.getPropertyValue("padding-top")),F=parseFloat(I.getPropertyValue("padding-bottom")),R=parseFloat(I.getPropertyValue("margin-top")),q=parseFloat(I.getPropertyValue("margin-bottom")),W=I.getPropertyValue("box-sizing");T=W&&"border-box"===W?Y+R+q:Y+V+F+R+q}D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[z]&&(e.isHorizontal()?l[z].style.width=T+"px":l[z].style.height=T+"px");l[z]&&(l[z].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),te.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var j=0;j<p.length;j+=1){var U=p[j];t.roundLengths&&(U=Math.floor(U)),p[j]<e.virtualSize+p[0]&&E.push(U)}p=E}if(!t.centeredSlides){E=[];for(var K=0;K<p.length;K+=1){var _=p[K];t.roundLengths&&(_=Math.floor(_)),p[K]<=e.virtualSize-i&&E.push(_)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Z=0;if(u.forEach(function(e){Z+=e+(t.spaceBetween?t.spaceBetween:0)}),(Z-=t.spaceBetween)<i){var Q=(i-Z)/2;p.forEach(function(e,t){p[t]=e-Q}),c.forEach(function(e,t){c[t]=e+Q})}}ee.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),ee.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);ee.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=ee.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(te.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&te.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(te.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){te.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&te.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&te.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=J.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:J.cordova||J.phonegap,phonegap:J.cordova||J.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=J.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=J.screen.width-d)){if(ee.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=ee.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(ee.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=ee.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:ee.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=ee.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=ee.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=ee.now(),ee.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<ee.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(z=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(p-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("touchstart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,te.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("onTouchStart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),ee.extend(e.params,l),ee.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=J.innerWidth&&(t=s):s>=J.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),te.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new J.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=ee.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=ee.extend({},w);r.useModulesParams(n),r.params=ee.extend({},n,x,s),r.originalParams=ee.extend({},r.params),r.passedParams=ee.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=ee.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return ee.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],te.pointerEvents?p=["pointerdown","pointermove","pointerup"]:te.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},te.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:ee.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return a||(a="horizontal"===i?"vertical":"horizontal"),a===i||"horizontal"!==a&&"vertical"!==a||("vertical"===i&&(t.$el.removeClass(t.params.containerModifierClass+"vertical wp8-vertical").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),"horizontal"===i&&(t.$el.removeClass(t.params.containerModifierClass+"horizontal wp8-horizontal").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),ee.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){ee.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(n),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:te},static:{support:te}},C={name:"browser",proto:{browser:I},static:{browser:I}},M={name:"resize",create:function(){var e=this;ee.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){J.addEventListener("resize",this.resize.resizeHandler),J.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){J.removeEventListener("resize",this.resize.resizeHandler),J.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:J.MutationObserver||J.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(te.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},P={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ee.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},k={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(ee.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var z=0;z<u.length;z+=1)y<=z&&z<=x&&(void 0===c||e?C.push(z):(c<z&&C.push(z),z<p&&S.push(z)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;ee.extend(e,{virtual:{update:k.update.bind(e),appendSlide:k.appendSlide.bind(e),prependSlide:k.prependSlide.bind(e),removeSlide:k.removeSlide.bind(e),removeAllSlides:k.removeAllSlides.bind(e),renderSlide:k.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},D={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=J.innerWidth,o=J.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},O={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){ee.extend(this,{keyboard:{enabled:!1,enable:D.enable.bind(this),disable:D.disable.bind(this),handle:D.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var A={lastScrollTime:ee.now(),event:-1<J.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=A.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=ee.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<ee.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new J.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!A.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(A.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!A.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(A.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},H={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),ee.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},N={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),ee.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(te.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(te.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),ee.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=ee.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),ee.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},B={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},X={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!te.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=X.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=X.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=te.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=ee.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=ee.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},Y={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&ee.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},F={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},R={init:function(){var e=this;if(e.params.history){if(!J.history||!J.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=R.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||J.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=R.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=J.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=R.slugify(a.attr("data-history"));J.location.pathname.includes(e)||(i=e+"/"+i);var s=J.history.state;s&&s.value===i||(this.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(R.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},q={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(J).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(J).off("hashchange",this.hashNavigation.onHashCange)}},W={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=ee.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},j={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},U={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,P=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},K={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},_={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(te.pointerEvents||te.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},Z={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,ee.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),ee.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):ee.isObject(t.swiper)&&(e.thumbs.swiper=new a(ee.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Q=[E,S,C,M,P,$,O,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;ee.extend(e,{mousewheel:{enabled:!1,enable:A.enable.bind(e),disable:A.disable.bind(e),handle:A.handle.bind(e),handleMouseEnter:A.handleMouseEnter.bind(e),handleMouseLeave:A.handleMouseLeave.bind(e),lastScrollTime:ee.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;ee.extend(e,{navigation:{init:H.init.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),onNextClick:H.onNextClick.bind(e),onPrevClick:H.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||L(e.target).is(r)||L(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;ee.extend(e,{pagination:{init:N.init.bind(e),render:N.render.bind(e),update:N.update.bind(e),destroy:N.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;ee.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){ee.extend(this,{parallax:{setTransform:B.setTransform.bind(this),setTranslate:B.setTranslate.bind(this),setTransition:B.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=X[e].bind(i)}),ee.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){ee.extend(this,{lazy:{initialImageLoaded:!1,load:Y.load.bind(this),loadInSlide:Y.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;ee.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;ee.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(F).forEach(function(e){t.a11y[e]=F[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;ee.extend(e,{history:{init:R.init.bind(e),setHistory:R.setHistory.bind(e),setHistoryPopState:R.setHistoryPopState.bind(e),scrollToSlide:R.scrollToSlide.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;ee.extend(e,{hashNavigation:{initialized:!1,init:q.init.bind(e),destroy:q.destroy.bind(e),setHash:q.setHash.bind(e),onHashCange:q.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;ee.extend(t,{autoplay:{running:!1,paused:!1,run:W.run.bind(t),start:W.start.bind(t),stop:W.stop.bind(t),pause:W.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){ee.extend(this,{fadeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){ee.extend(this,{cubeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){ee.extend(this,{flipEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){ee.extend(this,{coverflowEffect:{setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){ee.extend(this,{thumbs:{swiper:null,init:Z.init.bind(this),update:Z.update.bind(this),onThumbClick:Z.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Q),T});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
(function (window, document, $, undefined){
"use strict";
window.console=window.console||{
info: function (stuff){}};
if(!$){
return;
}
if($.fn.fancybox){
console.info("fancyBox already initialized");
return;
}
var defaults={
closeExisting: false,
loop: false,
gutter: 50,
keyboard: true,
preventCaptionOverlap: true,
arrows: true,
infobar: true,
smallBtn: "auto",
toolbar: "auto",
buttons: [
"zoom",
"slideShow",
"thumbs",
"close"
],
idleTime: 3,
protect: false,
modal: false,
image: {
preload: false
},
ajax: {
settings: {
data: {
fancybox: true
}}
},
iframe: {
tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
preload: true,
css: {},
attr: {
scrolling: "auto"
}},
video: {
tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
'<source src="{{src}}" type="{{format}}" />' +
'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
"</video>",
format: "",
autoStart: true
},
defaultType: "image",
animationEffect: "zoom",
animationDuration: 366,
zoomOpacity: "auto",
transitionEffect: "fade",
transitionDuration: 366,
slideClass: "",
baseClass: "",
baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
'<div class="fancybox-bg"></div>' +
'<div class="fancybox-inner">' +
'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
'<div class="fancybox-toolbar">{{buttons}}</div>' +
'<div class="fancybox-navigation">{{arrows}}</div>' +
'<div class="fancybox-stage"></div>' +
'<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
"</div>" +
"</div>",
spinnerTpl: '<div class="fancybox-loading"></div>',
errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
btnTpl: {
download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
"</a>",
zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
"</button>",
close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
"</button>",
arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
"</button>",
arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
"</button>",
smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
"</button>"
},
parentEl: "body",
hideScrollbar: true,
autoFocus: true,
backFocus: true,
trapFocus: true,
fullScreen: {
autoStart: false
},
touch: {
vertical: true,
momentum: true
},
hash: null,
media: {},
slideShow: {
autoStart: false,
speed: 3000
},
thumbs: {
autoStart: false,
hideOnClose: true,
parentEl: ".fancybox-container",
axis: "y"
},
wheel: "auto",
/*
afterShow: function(instance, current){
console.info('Clicked element:');
console.info(current.opts.$orig);
}
*/
onInit: $.noop,
beforeLoad: $.noop,
afterLoad: $.noop,
beforeShow: $.noop,
afterShow: $.noop,
beforeClose: $.noop,
afterClose: $.noop,
onActivate: $.noop,
onDeactivate: $.noop,
clickContent: function (current, event){
return current.type==="image" ? "zoom":false;
},
clickSlide: "close",
clickOutside: "close",
dblclickContent: false,
dblclickSlide: false,
dblclickOutside: false,
mobile: {
preventCaptionOverlap: false,
idleTime: false,
clickContent: function (current, event){
return current.type==="image" ? "toggleControls":false;
},
clickSlide: function (current, event){
return current.type==="image" ? "toggleControls":"close";
},
dblclickContent: function (current, event){
return current.type==="image" ? "zoom":false;
},
dblclickSlide: function (current, event){
return current.type==="image" ? "zoom":false;
}},
lang: "en",
i18n: {
en: {
CLOSE: "Close",
NEXT: "Next",
PREV: "Previous",
ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
PLAY_START: "Start slideshow",
PLAY_STOP: "Pause slideshow",
FULL_SCREEN: "Full screen",
THUMBS: "Thumbnails",
DOWNLOAD: "Download",
SHARE: "Share",
ZOOM: "Zoom"
},
de: {
CLOSE: "Schlie&szlig;en",
NEXT: "Weiter",
PREV: "Zur&uuml;ck",
ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
PLAY_START: "Diaschau starten",
PLAY_STOP: "Diaschau beenden",
FULL_SCREEN: "Vollbild",
THUMBS: "Vorschaubilder",
DOWNLOAD: "Herunterladen",
SHARE: "Teilen",
ZOOM: "Vergr&ouml;&szlig;ern"
}}
};
var $W=$(window);
var $D=$(document);
var called=0;
var isQuery=function (obj){
return obj&&obj.hasOwnProperty&&obj instanceof $;
};
var requestAFrame=(function (){
return (
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
function (callback){
return window.setTimeout(callback, 1000 / 60);
}
);
})();
var cancelAFrame=(function (){
return (
window.cancelAnimationFrame ||
window.webkitCancelAnimationFrame ||
window.mozCancelAnimationFrame ||
window.oCancelAnimationFrame ||
function (id){
window.clearTimeout(id);
}
);
})();
var transitionEnd=(function (){
var el=document.createElement("fakeelement"),
t;
var transitions={
transition: "transitionend",
OTransition: "oTransitionEnd",
MozTransition: "transitionend",
WebkitTransition: "webkitTransitionEnd"
};
for (t in transitions){
if(el.style[t]!==undefined){
return transitions[t];
}}
return "transitionend";
})();
var forceRedraw=function ($el){
return $el&&$el.length&&$el[0].offsetHeight;
};
var mergeOpts=function (opts1, opts2){
var rez=$.extend(true, {}, opts1, opts2);
$.each(opts2, function (key, value){
if($.isArray(value)){
rez[key]=value;
}});
return rez;
};
var inViewport=function (elem){
var elemCenter, rez;
if(!elem||elem.ownerDocument!==document){
return false;
}
$(".fancybox-container").css("pointer-events", "none");
elemCenter={
x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
};
rez=document.elementFromPoint(elemCenter.x, elemCenter.y)===elem;
$(".fancybox-container").css("pointer-events", "");
return rez;
};
var FancyBox=function (content, opts, index){
var self=this;
self.opts=mergeOpts({
index: index
}, $.fancybox.defaults);
if($.isPlainObject(opts)){
self.opts=mergeOpts(self.opts, opts);
}
if($.fancybox.isMobile){
self.opts=mergeOpts(self.opts, self.opts.mobile);
}
self.id=self.opts.id||++called;
self.currIndex=parseInt(self.opts.index, 10)||0;
self.prevIndex=null;
self.prevPos=null;
self.currPos=0;
self.firstRun=true;
self.group=[];
self.slides={};
self.addContent(content);
if(!self.group.length){
return;
}
self.init();
};
$.extend(FancyBox.prototype, {
init: function (){
var self=this,
firstItem=self.group[self.currIndex],
firstItemOpts=firstItem.opts,
$container,
buttonStr;
if(firstItemOpts.closeExisting){
$.fancybox.close(true);
}
$("body").addClass("fancybox-active");
if(!$.fancybox.getInstance() &&
firstItemOpts.hideScrollbar!==false &&
!$.fancybox.isMobile &&
document.body.scrollHeight > window.innerHeight
){
$("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
(window.innerWidth - document.documentElement.clientWidth) +
"px;}</style>"
);
$("body").addClass("compensate-for-scrollbar");
}
buttonStr="";
$.each(firstItemOpts.buttons, function (index, value){
buttonStr +=firstItemOpts.btnTpl[value]||"";
});
$container=$(
self.translate(self,
firstItemOpts.baseTpl
.replace("{{buttons}}", buttonStr)
.replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
)
)
.attr("id", "fancybox-container-" + self.id)
.addClass(firstItemOpts.baseClass)
.data("FancyBox", self)
.appendTo(firstItemOpts.parentEl);
self.$refs={
container: $container
};
["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item){
self.$refs[item]=$container.find(".fancybox-" + item);
});
self.trigger("onInit");
self.activate();
self.jumpTo(self.currIndex);
},
translate: function (obj, str){
var arr=obj.opts.i18n[obj.opts.lang]||obj.opts.i18n.en;
return str.replace(/\{\{(\w+)\}\}/g, function (match, n){
return arr[n]===undefined ? match:arr[n];
});
},
addContent: function (content){
var self=this,
items=$.makeArray(content),
thumbs;
$.each(items, function (i, item){
var obj={},
opts={},
$item,
type,
found,
src,
srcParts;
if($.isPlainObject(item)){
obj=item;
opts=item.opts||item;
}else if($.type(item)==="object"&&$(item).length){
$item=$(item);
opts=$item.data()||{};
opts=$.extend(true, {}, opts, opts.options);
opts.$orig=$item;
obj.src=self.opts.src||opts.src||$item.attr("href");
if(!obj.type&&!obj.src){
obj.type="inline";
obj.src=item;
}}else{
obj={
type: "html",
src: item + ""
};}
obj.opts=$.extend(true, {}, self.opts, opts);
if($.isArray(opts.buttons)){
obj.opts.buttons=opts.buttons;
}
if($.fancybox.isMobile&&obj.opts.mobile){
obj.opts=mergeOpts(obj.opts, obj.opts.mobile);
}
type=obj.type||obj.opts.type;
src=obj.src||"";
if(!type&&src){
if((found=src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))){
type="video";
if(!obj.opts.video.format){
obj.opts.video.format="video/" + (found[1]==="ogv" ? "ogg":found[1]);
}}else if(src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)){
type="image";
}else if(src.match(/\.(pdf)((\?|#).*)?$/i)){
type="iframe";
obj=$.extend(true, obj, {
contentType: "pdf",
opts: {
iframe: {
preload: false
}}
});
}else if(src.charAt(0)==="#"){
type="inline";
}}
if(type){
obj.type=type;
}else{
self.trigger("objectNeedsType", obj);
}
if(!obj.contentType){
obj.contentType=$.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html":obj.type;
}
obj.index=self.group.length;
if(obj.opts.smallBtn=="auto"){
obj.opts.smallBtn=$.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
}
if(obj.opts.toolbar==="auto"){
obj.opts.toolbar = !obj.opts.smallBtn;
}
obj.$thumb=obj.opts.$thumb||null;
if(obj.opts.$trigger&&obj.index===self.opts.index){
obj.$thumb=obj.opts.$trigger.find("img:first");
if(obj.$thumb.length){
obj.opts.$orig=obj.opts.$trigger;
}}
if(!(obj.$thumb&&obj.$thumb.length)&&obj.opts.$orig){
obj.$thumb=obj.opts.$orig.find("img:first");
}
if(obj.$thumb&&!obj.$thumb.length){
obj.$thumb=null;
}
obj.thumb=obj.opts.thumb||(obj.$thumb ? obj.$thumb[0].src:null);
if($.type(obj.opts.caption)==="function"){
obj.opts.caption=obj.opts.caption.apply(item, [self, obj]);
}
if($.type(self.opts.caption)==="function"){
obj.opts.caption=self.opts.caption.apply(item, [self, obj]);
}
if(!(obj.opts.caption instanceof $)){
obj.opts.caption=obj.opts.caption===undefined ? "":obj.opts.caption + "";
}
if(obj.type==="ajax"){
srcParts=src.split(/\s+/, 2);
if(srcParts.length > 1){
obj.src=srcParts.shift();
obj.opts.filter=srcParts.shift();
}}
if(obj.opts.modal){
obj.opts=$.extend(true, obj.opts, {
trapFocus: true,
infobar: 0,
toolbar: 0,
smallBtn: 0,
keyboard: 0,
slideShow: 0,
fullScreen: 0,
thumbs: 0,
touch: 0,
clickContent: false,
clickSlide: false,
clickOutside: false,
dblclickContent: false,
dblclickSlide: false,
dblclickOutside: false
});
}
self.group.push(obj);
});
if(Object.keys(self.slides).length){
self.updateControls();
thumbs=self.Thumbs;
if(thumbs&&thumbs.isActive){
thumbs.create();
thumbs.focus();
}}
},
addEvents: function (){
var self=this;
self.removeEvents();
self.$refs.container
.on("click.fb-close", "[data-fancybox-close]", function (e){
e.stopPropagation();
e.preventDefault();
self.close(e);
})
.on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e){
e.stopPropagation();
e.preventDefault();
self.previous();
})
.on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e){
e.stopPropagation();
e.preventDefault();
self.next();
})
.on("click.fb", "[data-fancybox-zoom]", function (e){
self[self.isScaledDown() ? "scaleToActual":"scaleToFit"]();
});
$W.on("orientationchange.fb resize.fb", function (e){
if(e&&e.originalEvent&&e.originalEvent.type==="resize"){
if(self.requestId){
cancelAFrame(self.requestId);
}
self.requestId=requestAFrame(function (){
self.update(e);
});
}else{
if(self.current&&self.current.type==="iframe"){
self.$refs.stage.hide();
}
setTimeout(
function (){
self.$refs.stage.show();
self.update(e);
},
$.fancybox.isMobile ? 600:250
);
}});
$D.on("keydown.fb", function (e){
var instance=$.fancybox ? $.fancybox.getInstance():null,
current=instance.current,
keycode=e.keyCode||e.which;
if(keycode==9){
if(current.opts.trapFocus){
self.focus(e);
}
return;
}
if(!current.opts.keyboard||e.ctrlKey||e.altKey||e.shiftKey||$(e.target).is("input,textarea,video,audio,select")){
return;
}
if(keycode===8||keycode===27){
e.preventDefault();
self.close(e);
return;
}
if(keycode===37||keycode===38){
e.preventDefault();
self.previous();
return;
}
if(keycode===39||keycode===40){
e.preventDefault();
self.next();
return;
}
self.trigger("afterKeydown", e, keycode);
});
if(self.group[self.currIndex].opts.idleTime){
self.idleSecondsCounter=0;
$D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
function (e){
self.idleSecondsCounter=0;
if(self.isIdle){
self.showControls();
}
self.isIdle=false;
}
);
self.idleInterval=window.setInterval(function (){
self.idleSecondsCounter++;
if(self.idleSecondsCounter >=self.group[self.currIndex].opts.idleTime&&!self.isDragging){
self.isIdle=true;
self.idleSecondsCounter=0;
self.hideControls();
}}, 1000);
}},
removeEvents: function (){
var self=this;
$W.off("orientationchange.fb resize.fb");
$D.off("keydown.fb .fb-idle");
this.$refs.container.off(".fb-close .fb-prev .fb-next");
if(self.idleInterval){
window.clearInterval(self.idleInterval);
self.idleInterval=null;
}},
previous: function (duration){
return this.jumpTo(this.currPos - 1, duration);
},
next: function (duration){
return this.jumpTo(this.currPos + 1, duration);
},
jumpTo: function (pos, duration){
var self=this,
groupLen=self.group.length,
firstRun,
isMoved,
loop,
current,
previous,
slidePos,
stagePos,
prop,
diff;
if(self.isDragging||self.isClosing||(self.isAnimating&&self.firstRun)){
return;
}
pos=parseInt(pos, 10);
loop=self.current ? self.current.opts.loop:self.opts.loop;
if(!loop&&(pos < 0||pos >=groupLen)){
return false;
}
firstRun=self.firstRun = !Object.keys(self.slides).length;
previous=self.current;
self.prevIndex=self.currIndex;
self.prevPos=self.currPos;
current=self.createSlide(pos);
if(groupLen > 1){
if(loop||current.index < groupLen - 1){
self.createSlide(pos + 1);
}
if(loop||current.index > 0){
self.createSlide(pos - 1);
}}
self.current=current;
self.currIndex=current.index;
self.currPos=current.pos;
self.trigger("beforeShow", firstRun);
self.updateControls();
current.forcedDuration=undefined;
if($.isNumeric(duration)){
current.forcedDuration=duration;
}else{
duration=current.opts[firstRun ? "animationDuration":"transitionDuration"];
}
duration=parseInt(duration, 10);
isMoved=self.isMoved(current);
current.$slide.addClass("fancybox-slide--current");
if(firstRun){
if(current.opts.animationEffect&&duration){
self.$refs.container.css("transition-duration", duration + "ms");
}
self.$refs.container.addClass("fancybox-is-open").trigger("focus");
self.loadSlide(current);
self.preload("image");
return;
}
slidePos=$.fancybox.getTranslate(previous.$slide);
stagePos=$.fancybox.getTranslate(self.$refs.stage);
$.each(self.slides, function (index, slide){
$.fancybox.stop(slide.$slide, true);
});
if(previous.pos!==current.pos){
previous.isComplete=false;
}
previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
if(isMoved){
diff=slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
$.each(self.slides, function (index, slide){
slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className){
return (className.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ");
});
var leftPos=slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
$.fancybox.setTranslate(slide.$slide, {
top: 0,
left: leftPos - stagePos.left + diff
});
if(slide.pos!==current.pos){
slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next":"previous"));
}
forceRedraw(slide.$slide);
$.fancybox.animate(slide.$slide, {
top: 0,
left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
},
duration,
function (){
slide.$slide
.css({
transform: "",
opacity: ""
})
.removeClass("fancybox-slide--next fancybox-slide--previous");
if(slide.pos===self.currPos){
self.complete();
}}
);
});
}else if(duration&&current.opts.transitionEffect){
prop="fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next":"previous"));
$.fancybox.animate(previous.$slide,
prop,
duration,
function (){
previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
},
false
);
}
if(current.isLoaded){
self.revealContent(current);
}else{
self.loadSlide(current);
}
self.preload("image");
},
createSlide: function (pos){
var self=this,
$slide,
index;
index=pos % self.group.length;
index=index < 0 ? self.group.length + index:index;
if(!self.slides[pos]&&self.group[index]){
$slide=$('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
self.slides[pos]=$.extend(true, {}, self.group[index], {
pos: pos,
$slide: $slide,
isLoaded: false
});
self.updateSlide(self.slides[pos]);
}
return self.slides[pos];
},
scaleToActual: function (x, y, duration){
var self=this,
current=self.current,
$content=current.$content,
canvasWidth=$.fancybox.getTranslate(current.$slide).width,
canvasHeight=$.fancybox.getTranslate(current.$slide).height,
newImgWidth=current.width,
newImgHeight=current.height,
imgPos,
posX,
posY,
scaleX,
scaleY;
if(self.isAnimating||self.isMoved()||!$content||!(current.type=="image"&&current.isLoaded&&!current.hasError)){
return;
}
self.isAnimating=true;
$.fancybox.stop($content);
x=x===undefined ? canvasWidth * 0.5:x;
y=y===undefined ? canvasHeight * 0.5:y;
imgPos=$.fancybox.getTranslate($content);
imgPos.top -=$.fancybox.getTranslate(current.$slide).top;
imgPos.left -=$.fancybox.getTranslate(current.$slide).left;
scaleX=newImgWidth / imgPos.width;
scaleY=newImgHeight / imgPos.height;
posX=canvasWidth * 0.5 - newImgWidth * 0.5;
posY=canvasHeight * 0.5 - newImgHeight * 0.5;
if(newImgWidth > canvasWidth){
posX=imgPos.left * scaleX - (x * scaleX - x);
if(posX > 0){
posX=0;
}
if(posX < canvasWidth - newImgWidth){
posX=canvasWidth - newImgWidth;
}}
if(newImgHeight > canvasHeight){
posY=imgPos.top * scaleY - (y * scaleY - y);
if(posY > 0){
posY=0;
}
if(posY < canvasHeight - newImgHeight){
posY=canvasHeight - newImgHeight;
}}
self.updateCursor(newImgWidth, newImgHeight);
$.fancybox.animate($content, {
top: posY,
left: posX,
scaleX: scaleX,
scaleY: scaleY
},
duration||366,
function (){
self.isAnimating=false;
}
);
if(self.SlideShow&&self.SlideShow.isActive){
self.SlideShow.stop();
}},
scaleToFit: function (duration){
var self=this,
current=self.current,
$content=current.$content,
end;
if(self.isAnimating||self.isMoved()||!$content||!(current.type=="image"&&current.isLoaded&&!current.hasError)){
return;
}
self.isAnimating=true;
$.fancybox.stop($content);
end=self.getFitPos(current);
self.updateCursor(end.width, end.height);
$.fancybox.animate($content, {
top: end.top,
left: end.left,
scaleX: end.width / $content.width(),
scaleY: end.height / $content.height()
},
duration||366,
function (){
self.isAnimating=false;
}
);
},
getFitPos: function (slide){
var self=this,
$content=slide.$content,
$slide=slide.$slide,
width=slide.width||slide.opts.width,
height=slide.height||slide.opts.height,
maxWidth,
maxHeight,
minRatio,
aspectRatio,
rez={};
if(!slide.isLoaded||!$content||!$content.length){
return false;
}
maxWidth=$.fancybox.getTranslate(self.$refs.stage).width;
maxHeight=$.fancybox.getTranslate(self.$refs.stage).height;
maxWidth -=
parseFloat($slide.css("paddingLeft")) +
parseFloat($slide.css("paddingRight")) +
parseFloat($content.css("marginLeft")) +
parseFloat($content.css("marginRight"));
maxHeight -=
parseFloat($slide.css("paddingTop")) +
parseFloat($slide.css("paddingBottom")) +
parseFloat($content.css("marginTop")) +
parseFloat($content.css("marginBottom"));
if(!width||!height){
width=maxWidth;
height=maxHeight;
}
minRatio=Math.min(1, maxWidth / width, maxHeight / height);
width=minRatio * width;
height=minRatio * height;
if(width > maxWidth - 0.5){
width=maxWidth;
}
if(height > maxHeight - 0.5){
height=maxHeight;
}
if(slide.type==="image"){
rez.top=Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
rez.left=Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
}else if(slide.contentType==="video"){
aspectRatio=slide.opts.width&&slide.opts.height ? width / height:slide.opts.ratio||16 / 9;
if(height > width / aspectRatio){
height=width / aspectRatio;
}else if(width > height * aspectRatio){
width=height * aspectRatio;
}}
rez.width=width;
rez.height=height;
return rez;
},
update: function (e){
var self=this;
$.each(self.slides, function (key, slide){
self.updateSlide(slide, e);
});
},
updateSlide: function (slide, e){
var self=this,
$content=slide&&slide.$content,
width=slide.width||slide.opts.width,
height=slide.height||slide.opts.height,
$slide=slide.$slide;
self.adjustCaption(slide);
if($content&&(width||height||slide.contentType==="video")&&!slide.hasError){
$.fancybox.stop($content);
$.fancybox.setTranslate($content, self.getFitPos(slide));
if(slide.pos===self.currPos){
self.isAnimating=false;
self.updateCursor();
}}
self.adjustLayout(slide);
if($slide.length){
$slide.trigger("refresh");
if(slide.pos===self.currPos){
self.$refs.toolbar
.add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
.toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
}}
self.trigger("onUpdate", slide, e);
},
centerSlide: function (duration){
var self=this,
current=self.current,
$slide=current.$slide;
if(self.isClosing||!current){
return;
}
$slide.siblings().css({
transform: "",
opacity: ""
});
$slide
.parent()
.children()
.removeClass("fancybox-slide--previous fancybox-slide--next");
$.fancybox.animate($slide, {
top: 0,
left: 0,
opacity: 1
},
duration===undefined ? 0:duration,
function (){
$slide.css({
transform: "",
opacity: ""
});
if(!current.isComplete){
self.complete();
}},
false
);
},
isMoved: function (slide){
var current=slide||this.current,
slidePos,
stagePos;
if(!current){
return false;
}
stagePos=$.fancybox.getTranslate(this.$refs.stage);
slidePos=$.fancybox.getTranslate(current.$slide);
return (
!current.$slide.hasClass("fancybox-animated") &&
(Math.abs(slidePos.top - stagePos.top) > 0.5||Math.abs(slidePos.left - stagePos.left) > 0.5)
);
},
updateCursor: function (nextWidth, nextHeight){
var self=this,
current=self.current,
$container=self.$refs.container,
canPan,
isZoomable;
if(!current||self.isClosing||!self.Guestures){
return;
}
$container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
canPan=self.canPan(nextWidth, nextHeight);
isZoomable=canPan ? true:self.isZoomable();
$container.toggleClass("fancybox-is-zoomable", isZoomable);
$("[data-fancybox-zoom]").prop("disabled", !isZoomable);
if(canPan){
$container.addClass("fancybox-can-pan");
}else if(isZoomable &&
(current.opts.clickContent==="zoom"||($.isFunction(current.opts.clickContent)&&current.opts.clickContent(current)=="zoom"))
){
$container.addClass("fancybox-can-zoomIn");
}else if(current.opts.touch&&(current.opts.touch.vertical||self.group.length > 1)&&current.contentType!=="video"){
$container.addClass("fancybox-can-swipe");
}},
isZoomable: function (){
var self=this,
current=self.current,
fitPos;
if(current&&!self.isClosing&&current.type==="image"&&!current.hasError){
if(!current.isLoaded){
return true;
}
fitPos=self.getFitPos(current);
if(fitPos&&(current.width > fitPos.width||current.height > fitPos.height)){
return true;
}}
return false;
},
isScaledDown: function (nextWidth, nextHeight){
var self=this,
rez=false,
current=self.current,
$content=current.$content;
if(nextWidth!==undefined&&nextHeight!==undefined){
rez=nextWidth < current.width&&nextHeight < current.height;
}else if($content){
rez=$.fancybox.getTranslate($content);
rez=rez.width < current.width&&rez.height < current.height;
}
return rez;
},
canPan: function (nextWidth, nextHeight){
var self=this,
current=self.current,
pos=null,
rez=false;
if(current.type==="image"&&(current.isComplete||(nextWidth&&nextHeight))&&!current.hasError){
rez=self.getFitPos(current);
if(nextWidth!==undefined&&nextHeight!==undefined){
pos={
width: nextWidth,
height: nextHeight
};}else if(current.isComplete){
pos=$.fancybox.getTranslate(current.$content);
}
if(pos&&rez){
rez=Math.abs(pos.width - rez.width) > 1.5||Math.abs(pos.height - rez.height) > 1.5;
}}
return rez;
},
loadSlide: function (slide){
var self=this,
type,
$slide,
ajaxLoad;
if(slide.isLoading||slide.isLoaded){
return;
}
slide.isLoading=true;
if(self.trigger("beforeLoad", slide)===false){
slide.isLoading=false;
return false;
}
type=slide.type;
$slide=slide.$slide;
$slide
.off("refresh")
.trigger("onReset")
.addClass(slide.opts.slideClass);
switch (type){
case "image":
self.setImage(slide);
break;
case "iframe":
self.setIframe(slide);
break;
case "html":
self.setContent(slide, slide.src||slide.content);
break;
case "video":
self.setContent(slide,
slide.opts.video.tpl
.replace(/\{\{src\}\}/gi, slide.src)
.replace("{{format}}", slide.opts.videoFormat||slide.opts.video.format||"")
.replace("{{poster}}", slide.thumb||"")
);
break;
case "inline":
if($(slide.src).length){
self.setContent(slide, $(slide.src));
}else{
self.setError(slide);
}
break;
case "ajax":
self.showLoading(slide);
ajaxLoad=$.ajax($.extend({}, slide.opts.ajax.settings, {
url: slide.src,
success: function (data, textStatus){
if(textStatus==="success"){
self.setContent(slide, data);
}},
error: function (jqXHR, textStatus){
if(jqXHR&&textStatus!=="abort"){
self.setError(slide);
}}
})
);
$slide.one("onReset", function (){
ajaxLoad.abort();
});
break;
default:
self.setError(slide);
break;
}
return true;
},
setImage: function (slide){
var self=this,
ghost;
setTimeout(function (){
var $img=slide.$image;
if(!self.isClosing&&slide.isLoading&&(!$img||!$img.length||!$img[0].complete)&&!slide.hasError){
self.showLoading(slide);
}}, 50);
self.checkSrcset(slide);
slide.$content=$('<div class="fancybox-content"></div>')
.addClass("fancybox-is-hidden")
.appendTo(slide.$slide.addClass("fancybox-slide--image"));
if(slide.opts.preload!==false&&slide.opts.width&&slide.opts.height&&slide.thumb){
slide.width=slide.opts.width;
slide.height=slide.opts.height;
ghost=document.createElement("img");
ghost.onerror=function (){
$(this).remove();
slide.$ghost=null;
};
ghost.onload=function (){
self.afterLoad(slide);
};
slide.$ghost=$(ghost)
.addClass("fancybox-image")
.appendTo(slide.$content)
.attr("src", slide.thumb);
}
self.setBigImage(slide);
},
checkSrcset: function (slide){
var srcset=slide.opts.srcset||slide.opts.image.srcset,
found,
temp,
pxRatio,
windowWidth;
if(srcset){
pxRatio=window.devicePixelRatio||1;
windowWidth=window.innerWidth * pxRatio;
temp=srcset.split(",").map(function (el){
var ret={};
el.trim()
.split(/\s+/)
.forEach(function (el, i){
var value=parseInt(el.substring(0, el.length - 1), 10);
if(i===0){
return (ret.url=el);
}
if(value){
ret.value=value;
ret.postfix=el[el.length - 1];
}});
return ret;
});
temp.sort(function (a, b){
return a.value - b.value;
});
for (var j=0; j < temp.length; j++){
var el=temp[j];
if((el.postfix==="w"&&el.value >=windowWidth)||(el.postfix==="x"&&el.value >=pxRatio)){
found=el;
break;
}}
if(!found&&temp.length){
found=temp[temp.length - 1];
}
if(found){
slide.src=found.url;
if(slide.width&&slide.height&&found.postfix=="w"){
slide.height=(slide.width / slide.height) * found.value;
slide.width=found.value;
}
slide.opts.srcset=srcset;
}}
},
setBigImage: function (slide){
var self=this,
img=document.createElement("img"),
$img=$(img);
slide.$image=$img
.one("error", function (){
self.setError(slide);
})
.one("load", function (){
var sizes;
if(!slide.$ghost){
self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
self.afterLoad(slide);
}
if(self.isClosing){
return;
}
if(slide.opts.srcset){
sizes=slide.opts.sizes;
if(!sizes||sizes==="auto"){
sizes =
(slide.width / slide.height > 1&&$W.width() / $W.height() > 1 ? "100":Math.round((slide.width / slide.height) * 100)) +
"vw";
}
$img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
}
if(slide.$ghost){
setTimeout(function (){
if(slide.$ghost&&!self.isClosing){
slide.$ghost.hide();
}}, Math.min(300, Math.max(1000, slide.height / 1600)));
}
self.hideLoading(slide);
})
.addClass("fancybox-image")
.attr("src", slide.src)
.appendTo(slide.$content);
if((img.complete||img.readyState=="complete")&&$img.naturalWidth&&$img.naturalHeight){
$img.trigger("load");
}else if(img.error){
$img.trigger("error");
}},
resolveImageSlideSize: function (slide, imgWidth, imgHeight){
var maxWidth=parseInt(slide.opts.width, 10),
maxHeight=parseInt(slide.opts.height, 10);
slide.width=imgWidth;
slide.height=imgHeight;
if(maxWidth > 0){
slide.width=maxWidth;
slide.height=Math.floor((maxWidth * imgHeight) / imgWidth);
}
if(maxHeight > 0){
slide.width=Math.floor((maxHeight * imgWidth) / imgHeight);
slide.height=maxHeight;
}},
setIframe: function (slide){
var self=this,
opts=slide.opts.iframe,
$slide=slide.$slide,
$iframe;
slide.$content=$('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden":"") + '"></div>')
.css(opts.css)
.appendTo($slide);
$slide.addClass("fancybox-slide--" + slide.contentType);
slide.$iframe=$iframe=$(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
.attr(opts.attr)
.appendTo(slide.$content);
if(opts.preload){
self.showLoading(slide);
$iframe.on("load.fb error.fb", function (e){
this.isReady=1;
slide.$slide.trigger("refresh");
self.afterLoad(slide);
});
$slide.on("refresh.fb", function (){
var $content=slide.$content,
frameWidth=opts.css.width,
frameHeight=opts.css.height,
$contents,
$body;
if($iframe[0].isReady!==1){
return;
}
try {
$contents=$iframe.contents();
$body=$contents.find("body");
} catch (ignore){}
if($body&&$body.length&&$body.children().length){
$slide.css("overflow", "visible");
$content.css({
width: "100%",
"max-width": "100%",
height: "9999px"
});
if(frameWidth===undefined){
frameWidth=Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
}
$content.css("width", frameWidth ? frameWidth:"").css("max-width", "");
if(frameHeight===undefined){
frameHeight=Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
}
$content.css("height", frameHeight ? frameHeight:"");
$slide.css("overflow", "auto");
}
$content.removeClass("fancybox-is-hidden");
});
}else{
self.afterLoad(slide);
}
$iframe.attr("src", slide.src);
$slide.one("onReset", function (){
try {
$(this)
.find("iframe")
.hide()
.unbind()
.attr("src", "//about:blank");
} catch (ignore){}
$(this)
.off("refresh.fb")
.empty();
slide.isLoaded=false;
slide.isRevealed=false;
});
},
setContent: function (slide, content){
var self=this;
if(self.isClosing){
return;
}
self.hideLoading(slide);
if(slide.$content){
$.fancybox.stop(slide.$content);
}
slide.$slide.empty();
if(isQuery(content)&&content.parent().length){
if(content.hasClass("fancybox-content")||content.parent().hasClass("fancybox-content")){
content.parents(".fancybox-slide").trigger("onReset");
}
slide.$placeholder=$("<div>")
.hide()
.insertAfter(content);
content.css("display", "inline-block");
}else if(!slide.hasError){
if($.type(content)==="string"){
content=$("<div>")
.append($.trim(content))
.contents();
}
if(slide.opts.filter){
content=$("<div>")
.html(content)
.find(slide.opts.filter);
}}
slide.$slide.one("onReset", function (){
$(this)
.find("video,audio")
.trigger("pause");
if(slide.$placeholder){
slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
slide.$placeholder=null;
}
if(slide.$smallBtn){
slide.$smallBtn.remove();
slide.$smallBtn=null;
}
if(!slide.hasError){
$(this).empty();
slide.isLoaded=false;
slide.isRevealed=false;
}});
$(content).appendTo(slide.$slide);
if($(content).is("video,audio")){
$(content).addClass("fancybox-video");
$(content).wrap("<div></div>");
slide.contentType="video";
slide.opts.width=slide.opts.width||$(content).attr("width");
slide.opts.height=slide.opts.height||$(content).attr("height");
}
slide.$content=slide.$slide
.children()
.filter("div,form,main,video,audio,article,.fancybox-content")
.first();
slide.$content.siblings().hide();
if(!slide.$content.length){
slide.$content=slide.$slide
.wrapInner("<div></div>")
.children()
.first();
}
slide.$content.addClass("fancybox-content");
slide.$slide.addClass("fancybox-slide--" + slide.contentType);
self.afterLoad(slide);
},
setError: function (slide){
slide.hasError=true;
slide.$slide
.trigger("onReset")
.removeClass("fancybox-slide--" + slide.contentType)
.addClass("fancybox-slide--error");
slide.contentType="html";
this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
if(slide.pos===this.currPos){
this.isAnimating=false;
}},
showLoading: function (slide){
var self=this;
slide=slide||self.current;
if(slide&&!slide.$spinner){
slide.$spinner=$(self.translate(self, self.opts.spinnerTpl))
.appendTo(slide.$slide)
.hide()
.fadeIn("fast");
}},
hideLoading: function (slide){
var self=this;
slide=slide||self.current;
if(slide&&slide.$spinner){
slide.$spinner.stop().remove();
delete slide.$spinner;
}},
afterLoad: function (slide){
var self=this;
if(self.isClosing){
return;
}
slide.isLoading=false;
slide.isLoaded=true;
self.trigger("afterLoad", slide);
self.hideLoading(slide);
if(slide.opts.smallBtn&&(!slide.$smallBtn||!slide.$smallBtn.length)){
slide.$smallBtn=$(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
}
if(slide.opts.protect&&slide.$content&&!slide.hasError){
slide.$content.on("contextmenu.fb", function (e){
if(e.button==2){
e.preventDefault();
}
return true;
});
if(slide.type==="image"){
$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
}}
self.adjustCaption(slide);
self.adjustLayout(slide);
if(slide.pos===self.currPos){
self.updateCursor();
}
self.revealContent(slide);
},
adjustCaption: function (slide){
var self=this,
current=slide||self.current,
caption=current.opts.caption,
preventOverlap=current.opts.preventCaptionOverlap,
$caption=self.$refs.caption,
$clone,
captionH=false;
$caption.toggleClass("fancybox-caption--separate", preventOverlap);
if(preventOverlap&&caption&&caption.length){
if(current.pos!==self.currPos){
$clone=$caption.clone().appendTo($caption.parent());
$clone
.children()
.eq(0)
.empty()
.html(caption);
captionH=$clone.outerHeight(true);
$clone.empty().remove();
}else if(self.$caption){
captionH=self.$caption.outerHeight(true);
}
current.$slide.css("padding-bottom", captionH||"");
}},
adjustLayout: function (slide){
var self=this,
current=slide||self.current,
scrollHeight,
marginBottom,
inlinePadding,
actualPadding;
if(current.isLoaded&&current.opts.disableLayoutFix!==true){
current.$content.css("margin-bottom", "");
if(current.$content.outerHeight() > current.$slide.height() + 0.5){
inlinePadding=current.$slide[0].style["padding-bottom"];
actualPadding=current.$slide.css("padding-bottom");
if(parseFloat(actualPadding) > 0){
scrollHeight=current.$slide[0].scrollHeight;
current.$slide.css("padding-bottom", 0);
if(Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1){
marginBottom=actualPadding;
}
current.$slide.css("padding-bottom", inlinePadding);
}}
current.$content.css("margin-bottom", marginBottom);
}},
revealContent: function (slide){
var self=this,
$slide=slide.$slide,
end=false,
start=false,
isMoved=self.isMoved(slide),
isRevealed=slide.isRevealed,
effect,
effectClassName,
duration,
opacity;
slide.isRevealed=true;
effect=slide.opts[self.firstRun ? "animationEffect":"transitionEffect"];
duration=slide.opts[self.firstRun ? "animationDuration":"transitionDuration"];
duration=parseInt(slide.forcedDuration===undefined ? duration:slide.forcedDuration, 10);
if(isMoved||slide.pos!==self.currPos||!duration){
effect=false;
}
if(effect==="zoom"){
if(slide.pos===self.currPos&&duration&&slide.type==="image"&&!slide.hasError&&(start=self.getThumbPos(slide))){
end=self.getFitPos(slide);
}else{
effect="fade";
}}
if(effect==="zoom"){
self.isAnimating=true;
end.scaleX=end.width / start.width;
end.scaleY=end.height / start.height;
opacity=slide.opts.zoomOpacity;
if(opacity=="auto"){
opacity=Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
}
if(opacity){
start.opacity=0.1;
end.opacity=1;
}
$.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
forceRedraw(slide.$content);
$.fancybox.animate(slide.$content, end, duration, function (){
self.isAnimating=false;
self.complete();
});
return;
}
self.updateSlide(slide);
if(!effect){
slide.$content.removeClass("fancybox-is-hidden");
if(!isRevealed&&isMoved&&slide.type==="image"&&!slide.hasError){
slide.$content.hide().fadeIn("fast");
}
if(slide.pos===self.currPos){
self.complete();
}
return;
}
$.fancybox.stop($slide);
effectClassName="fancybox-slide--" + (slide.pos >=self.prevPos ? "next":"previous") + " fancybox-animated fancybox-fx-" + effect;
$slide.addClass(effectClassName).removeClass("fancybox-slide--current");
slide.$content.removeClass("fancybox-is-hidden");
forceRedraw($slide);
if(slide.type!=="image"){
slide.$content.hide().show(0);
}
$.fancybox.animate($slide,
"fancybox-slide--current",
duration,
function (){
$slide.removeClass(effectClassName).css({
transform: "",
opacity: ""
});
if(slide.pos===self.currPos){
self.complete();
}},
true
);
},
getThumbPos: function (slide){
var rez=false,
$thumb=slide.$thumb,
thumbPos,
btw,
brw,
bbw,
blw;
if(!$thumb||!inViewport($thumb[0])){
return false;
}
thumbPos=$.fancybox.getTranslate($thumb);
btw=parseFloat($thumb.css("border-top-width")||0);
brw=parseFloat($thumb.css("border-right-width")||0);
bbw=parseFloat($thumb.css("border-bottom-width")||0);
blw=parseFloat($thumb.css("border-left-width")||0);
rez={
top: thumbPos.top + btw,
left: thumbPos.left + blw,
width: thumbPos.width - brw - blw,
height: thumbPos.height - btw - bbw,
scaleX: 1,
scaleY: 1
};
return thumbPos.width > 0&&thumbPos.height > 0 ? rez:false;
},
complete: function (){
var self=this,
current=self.current,
slides={},
$el;
if(self.isMoved()||!current.isLoaded){
return;
}
if(!current.isComplete){
current.isComplete=true;
current.$slide.siblings().trigger("onReset");
self.preload("inline");
forceRedraw(current.$slide);
current.$slide.addClass("fancybox-slide--complete");
$.each(self.slides, function (key, slide){
if(slide.pos >=self.currPos - 1&&slide.pos <=self.currPos + 1){
slides[slide.pos]=slide;
}else if(slide){
$.fancybox.stop(slide.$slide);
slide.$slide.off().remove();
}});
self.slides=slides;
}
self.isAnimating=false;
self.updateCursor();
self.trigger("afterShow");
if(!!current.opts.video.autoStart){
current.$slide
.find("video,audio")
.filter(":visible:first")
.trigger("play")
.one("ended", function (){
if(Document.exitFullscreen){
Document.exitFullscreen();
}else if(this.webkitExitFullscreen){
this.webkitExitFullscreen();
}
self.next();
});
}
if(current.opts.autoFocus&&current.contentType==="html"){
$el=current.$content.find("input[autofocus]:enabled:visible:first");
if($el.length){
$el.trigger("focus");
}else{
self.focus(null, true);
}}
current.$slide.scrollTop(0).scrollLeft(0);
},
preload: function (type){
var self=this,
prev,
next;
if(self.group.length < 2){
return;
}
next=self.slides[self.currPos + 1];
prev=self.slides[self.currPos - 1];
if(prev&&prev.type===type){
self.loadSlide(prev);
}
if(next&&next.type===type){
self.loadSlide(next);
}},
focus: function (e, firstRun){
var self=this,
focusableStr=[
"a[href]",
"area[href]",
'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
"select:not([disabled]):not([aria-hidden])",
"textarea:not([disabled]):not([aria-hidden])",
"button:not([disabled]):not([aria-hidden])",
"iframe",
"object",
"embed",
"video",
"audio",
"[contenteditable]",
'[tabindex]:not([tabindex^="-"])'
].join(","),
focusableItems,
focusedItemIndex;
if(self.isClosing){
return;
}
if(e||!self.current||!self.current.isComplete){
focusableItems=self.$refs.container.find("*:visible");
}else{
focusableItems=self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)":""));
}
focusableItems=focusableItems.filter(focusableStr).filter(function (){
return $(this).css("visibility")!=="hidden"&&!$(this).hasClass("disabled");
});
if(focusableItems.length){
focusedItemIndex=focusableItems.index(document.activeElement);
if(e&&e.shiftKey){
if(focusedItemIndex < 0||focusedItemIndex==0){
e.preventDefault();
focusableItems.eq(focusableItems.length - 1).trigger("focus");
}}else{
if(focusedItemIndex < 0||focusedItemIndex==focusableItems.length - 1){
if(e){
e.preventDefault();
}
focusableItems.eq(0).trigger("focus");
}}
}else{
self.$refs.container.trigger("focus");
}},
activate: function (){
var self=this;
$(".fancybox-container").each(function (){
var instance=$(this).data("FancyBox");
if(instance&&instance.id!==self.id&&!instance.isClosing){
instance.trigger("onDeactivate");
instance.removeEvents();
instance.isVisible=false;
}});
self.isVisible=true;
if(self.current||self.isIdle){
self.update();
self.updateControls();
}
self.trigger("onActivate");
self.addEvents();
},
close: function (e, d){
var self=this,
current=self.current,
effect,
duration,
$content,
domRect,
opacity,
start,
end;
var done=function (){
self.cleanUp(e);
};
if(self.isClosing){
return false;
}
self.isClosing=true;
if(self.trigger("beforeClose", e)===false){
self.isClosing=false;
requestAFrame(function (){
self.update();
});
return false;
}
self.removeEvents();
$content=current.$content;
effect=current.opts.animationEffect;
duration=$.isNumeric(d) ? d:effect ? current.opts.animationDuration:0;
current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
if(e!==true){
$.fancybox.stop(current.$slide);
}else{
effect=false;
}
current.$slide
.siblings()
.trigger("onReset")
.remove();
if(duration){
self.$refs.container
.removeClass("fancybox-is-open")
.addClass("fancybox-is-closing")
.css("transition-duration", duration + "ms");
}
self.hideLoading(current);
self.hideControls(true);
self.updateCursor();
if(effect==="zoom" &&
!($content&&duration&&current.type==="image"&&!self.isMoved()&&!current.hasError&&(end=self.getThumbPos(current)))
){
effect="fade";
}
if(effect==="zoom"){
$.fancybox.stop($content);
domRect=$.fancybox.getTranslate($content);
start={
top: domRect.top,
left: domRect.left,
scaleX: domRect.width / end.width,
scaleY: domRect.height / end.height,
width: end.width,
height: end.height
};
opacity=current.opts.zoomOpacity;
if(opacity=="auto"){
opacity=Math.abs(current.width / current.height - end.width / end.height) > 0.1;
}
if(opacity){
end.opacity=0;
}
$.fancybox.setTranslate($content, start);
forceRedraw($content);
$.fancybox.animate($content, end, duration, done);
return true;
}
if(effect&&duration){
$.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
"fancybox-animated fancybox-fx-" + effect,
duration,
done
);
}else{
if(e===true){
setTimeout(done, duration);
}else{
done();
}}
return true;
},
cleanUp: function (e){
var self=this,
instance,
$focus=self.current.opts.$orig,
x,
y;
self.current.$slide.trigger("onReset");
self.$refs.container.empty().remove();
self.trigger("afterClose", e);
if(!!self.current.opts.backFocus){
if(!$focus||!$focus.length||!$focus.is(":visible")){
$focus=self.$trigger;
}
if($focus&&$focus.length){
x=window.scrollX;
y=window.scrollY;
$focus.trigger("focus");
$("html, body")
.scrollTop(y)
.scrollLeft(x);
}}
self.current=null;
instance=$.fancybox.getInstance();
if(instance){
instance.activate();
}else{
$("body").removeClass("fancybox-active compensate-for-scrollbar");
$("#fancybox-style-noscroll").remove();
}},
trigger: function (name, slide){
var args=Array.prototype.slice.call(arguments, 1),
self=this,
obj=slide&&slide.opts ? slide:self.current,
rez;
if(obj){
args.unshift(obj);
}else{
obj=self;
}
args.unshift(self);
if($.isFunction(obj.opts[name])){
rez=obj.opts[name].apply(obj, args);
}
if(rez===false){
return rez;
}
if(name==="afterClose"||!self.$refs){
$D.trigger(name + ".fb", args);
}else{
self.$refs.container.trigger(name + ".fb", args);
}},
updateControls: function (){
var self=this,
current=self.current,
index=current.index,
$container=self.$refs.container,
$caption=self.$refs.caption,
caption=current.opts.caption;
current.$slide.trigger("refresh");
if(caption&&caption.length){
self.$caption=$caption;
$caption
.children()
.eq(0)
.html(caption);
}else{
self.$caption=null;
}
if(!self.hasHiddenControls&&!self.isIdle){
self.showControls();
}
$container.find("[data-fancybox-count]").html(self.group.length);
$container.find("[data-fancybox-index]").html(index + 1);
$container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop&&index <=0);
$container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop&&index >=self.group.length - 1);
if(current.type==="image"){
$container
.find("[data-fancybox-zoom]")
.show()
.end()
.find("[data-fancybox-download]")
.attr("href", current.opts.image.src||current.src)
.show();
}else if(current.opts.toolbar){
$container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
}
if($(document.activeElement).is(":hidden,[disabled]")){
self.$refs.container.trigger("focus");
}},
hideControls: function (andCaption){
var self=this,
arr=["infobar", "toolbar", "nav"];
if(andCaption||!self.current.opts.preventCaptionOverlap){
arr.push("caption");
}
this.$refs.container.removeClass(arr
.map(function (i){
return "fancybox-show-" + i;
})
.join(" ")
);
this.hasHiddenControls=true;
},
showControls: function (){
var self=this,
opts=self.current ? self.current.opts:self.opts,
$container=self.$refs.container;
self.hasHiddenControls=false;
self.idleSecondsCounter=0;
$container
.toggleClass("fancybox-show-toolbar", !!(opts.toolbar&&opts.buttons))
.toggleClass("fancybox-show-infobar", !!(opts.infobar&&self.group.length > 1))
.toggleClass("fancybox-show-caption", !!self.$caption)
.toggleClass("fancybox-show-nav", !!(opts.arrows&&self.group.length > 1))
.toggleClass("fancybox-is-modal", !!opts.modal);
},
toggleControls: function (){
if(this.hasHiddenControls){
this.showControls();
}else{
this.hideControls();
}}
});
$.fancybox={
version: "3.5.7",
defaults: defaults,
getInstance: function (command){
var instance=$('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
args=Array.prototype.slice.call(arguments, 1);
if(instance instanceof FancyBox){
if($.type(command)==="string"){
instance[command].apply(instance, args);
}else if($.type(command)==="function"){
command.apply(instance, args);
}
return instance;
}
return false;
},
open: function (items, opts, index){
return new FancyBox(items, opts, index);
},
close: function (all){
var instance=this.getInstance();
if(instance){
instance.close();
if(all===true){
this.close(all);
}}
},
destroy: function (){
this.close(true);
$D.add("body").off("click.fb-start", "**");
},
isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
use3d: (function (){
var div=document.createElement("div");
return (
window.getComputedStyle &&
window.getComputedStyle(div) &&
window.getComputedStyle(div).getPropertyValue("transform") &&
!(document.documentMode&&document.documentMode < 11)
);
})(),
getTranslate: function ($el){
var domRect;
if(!$el||!$el.length){
return false;
}
domRect=$el[0].getBoundingClientRect();
return {
top: domRect.top||0,
left: domRect.left||0,
width: domRect.width,
height: domRect.height,
opacity: parseFloat($el.css("opacity"))
};},
setTranslate: function ($el, props){
var str="",
css={};
if(!$el||!props){
return;
}
if(props.left!==undefined||props.top!==undefined){
str =
(props.left===undefined ? $el.position().left:props.left) +
"px, " +
(props.top===undefined ? $el.position().top:props.top) +
"px";
if(this.use3d){
str="translate3d(" + str + ", 0px)";
}else{
str="translate(" + str + ")";
}}
if(props.scaleX!==undefined&&props.scaleY!==undefined){
str +=" scale(" + props.scaleX + ", " + props.scaleY + ")";
}else if(props.scaleX!==undefined){
str +=" scaleX(" + props.scaleX + ")";
}
if(str.length){
css.transform=str;
}
if(props.opacity!==undefined){
css.opacity=props.opacity;
}
if(props.width!==undefined){
css.width=props.width;
}
if(props.height!==undefined){
css.height=props.height;
}
return $el.css(css);
},
animate: function ($el, to, duration, callback, leaveAnimationName){
var self=this,
from;
if($.isFunction(duration)){
callback=duration;
duration=null;
}
self.stop($el);
from=self.getTranslate($el);
$el.on(transitionEnd, function (e){
if(e&&e.originalEvent&&(!$el.is(e.originalEvent.target)||e.originalEvent.propertyName=="z-index")){
return;
}
self.stop($el);
if($.isNumeric(duration)){
$el.css("transition-duration", "");
}
if($.isPlainObject(to)){
if(to.scaleX!==undefined&&to.scaleY!==undefined){
self.setTranslate($el, {
top: to.top,
left: to.left,
width: from.width * to.scaleX,
height: from.height * to.scaleY,
scaleX: 1,
scaleY: 1
});
}}else if(leaveAnimationName!==true){
$el.removeClass(to);
}
if($.isFunction(callback)){
callback(e);
}});
if($.isNumeric(duration)){
$el.css("transition-duration", duration + "ms");
}
if($.isPlainObject(to)){
if(to.scaleX!==undefined&&to.scaleY!==undefined){
delete to.width;
delete to.height;
if($el.parent().hasClass("fancybox-slide--image")){
$el.parent().addClass("fancybox-is-scaling");
}}
$.fancybox.setTranslate($el, to);
}else{
$el.addClass(to);
}
$el.data("timer",
setTimeout(function (){
$el.trigger(transitionEnd);
}, duration + 33)
);
},
stop: function ($el, callCallback){
if($el&&$el.length){
clearTimeout($el.data("timer"));
if(callCallback){
$el.trigger(transitionEnd);
}
$el.off(transitionEnd).css("transition-duration", "");
$el.parent().removeClass("fancybox-is-scaling");
}}
};
function _run(e, opts){
var items=[],
index=0,
$target,
value,
instance;
if(e&&e.isDefaultPrevented()){
return;
}
e.preventDefault();
opts=opts||{};
if(e&&e.data){
opts=mergeOpts(e.data.options, opts);
}
$target=opts.$target||$(e.currentTarget).trigger("blur");
instance=$.fancybox.getInstance();
if(instance&&instance.$trigger&&instance.$trigger.is($target)){
return;
}
if(opts.selector){
items=$(opts.selector);
}else{
value=$target.attr("data-fancybox")||"";
if(value){
items=e.data ? e.data.items:[];
items=items.length ? items.filter('[data-fancybox="' + value + '"]'):$('[data-fancybox="' + value + '"]');
}else{
items=[$target];
}}
index=$(items).index($target);
if(index < 0){
index=0;
}
instance=$.fancybox.open(items, opts, index);
instance.$trigger=$target;
}
$.fn.fancybox=function (options){
var selector;
options=options||{};
selector=options.selector||false;
if(selector){
$("body")
.off("click.fb-start", selector)
.on("click.fb-start", selector, {
options: options
}, _run);
}else{
this.off("click.fb-start").on("click.fb-start", {
items: this,
options: options
},
_run
);
}
return this;
};
$D.on("click.fb-start", "[data-fancybox]", _run);
$D.on("click.fb-start", "[data-fancybox-trigger]", function (e){
$('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
.eq($(this).attr("data-fancybox-index")||0)
.trigger("click.fb-start", {
$trigger: $(this)
});
});
(function (){
var buttonStr=".fancybox-button",
focusStr="fancybox-focus",
$pressed=null;
$D.on("mousedown mouseup focus blur", buttonStr, function (e){
switch (e.type){
case "mousedown":
$pressed=$(this);
break;
case "mouseup":
$pressed=null;
break;
case "focusin":
$(buttonStr).removeClass(focusStr);
if(!$(this).is($pressed)&&!$(this).is("[disabled]")){
$(this).addClass(focusStr);
}
break;
case "focusout":
$(buttonStr).removeClass(focusStr);
break;
}});
})();
})(window, document, jQuery);
(function ($){
"use strict";
var defaults={
youtube: {
matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
params: {
autoplay: 1,
autohide: 1,
fs: 1,
rel: 0,
hd: 1,
wmode: "transparent",
enablejsapi: 1,
html5: 1
},
paramPlace: 8,
type: "iframe",
url: "https://www.youtube-nocookie.com/embed/$4",
thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
},
vimeo: {
matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
params: {
autoplay: 1,
hd: 1,
show_title: 1,
show_byline: 1,
show_portrait: 0,
fullscreen: 1
},
paramPlace: 3,
type: "iframe",
url:'//player.vimeo.com/video/$1'
},
instagram: {
matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
type: "image",
url: "//$1/p/$2/media/?size=l"
},
gmap_place: {
matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
type: "iframe",
url: function (rez){
return (
"//maps.google." +
rez[2] +
"/?ll=" +
(rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&"):""):rez[12] + "").replace(/\?/, "&") +
"&output=" +
(rez[12]&&rez[12].indexOf("layer=c") > 0 ? "svembed":"embed")
);
}},
gmap_search: {
matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
type: "iframe",
url: function (rez){
return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
}}
};
var format=function (url, rez, params){
if(!url){
return;
}
params=params||"";
if($.type(params)==="object"){
params=$.param(params, true);
}
$.each(rez, function (key, value){
url=url.replace("$" + key, value||"");
});
if(params.length){
url +=(url.indexOf("?") > 0 ? "&":"?") + params;
}
return url;
};
$(document).on("objectNeedsType.fb", function (e, instance, item){
var url=item.src||"",
type=false,
media,
thumb,
rez,
params,
urlParams,
paramObj,
provider;
media=$.extend(true, {}, defaults, item.opts.media);
$.each(media, function (providerName, providerOpts){
rez=url.match(providerOpts.matcher);
if(!rez){
return;
}
type=providerOpts.type;
provider=providerName;
paramObj={};
if(providerOpts.paramPlace&&rez[providerOpts.paramPlace]){
urlParams=rez[providerOpts.paramPlace];
if(urlParams[0]=="?"){
urlParams=urlParams.substring(1);
}
urlParams=urlParams.split("&");
for (var m=0; m < urlParams.length; ++m){
var p=urlParams[m].split("=", 2);
if(p.length==2){
paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g, " "));
}}
}
params=$.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
url =
$.type(providerOpts.url)==="function" ? providerOpts.url.call(this, rez, params, item):format(providerOpts.url, rez, params);
thumb =
$.type(providerOpts.thumb)==="function" ? providerOpts.thumb.call(this, rez, params, item):format(providerOpts.thumb, rez);
if(providerName==="youtube"){
url=url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s){
return "&start=" + ((m ? parseInt(m, 10) * 60:0) + parseInt(s, 10));
});
}else if(providerName==="vimeo"){
url=url.replace("&%23", "#");
}
return false;
});
if(type){
if(!item.opts.thumb&&!(item.opts.$thumb&&item.opts.$thumb.length)){
item.opts.thumb=thumb;
}
if(type==="iframe"){
item.opts=$.extend(true, item.opts, {
iframe: {
preload: false,
attr: {
scrolling: "no"
}}
});
}
$.extend(item, {
type: type,
src: url,
origSrc: item.src,
contentSource: provider,
contentType: type==="image" ? "image":provider=="gmap_place"||provider=="gmap_search" ? "map":"video"
});
}else if(url){
item.type=item.opts.defaultType;
}});
var VideoAPILoader={
youtube: {
src: "https://www.youtube.com/iframe_api",
class: "YT",
loading: false,
loaded: false
},
vimeo: {
src: "https://player.vimeo.com/api/player.js",
class: "Vimeo",
loading: false,
loaded: false
},
load: function (vendor){
var _this=this,
script;
if(this[vendor].loaded){
setTimeout(function (){
_this.done(vendor);
});
return;
}
if(this[vendor].loading){
return;
}
this[vendor].loading=true;
script=document.createElement("script");
script.type="text/javascript";
script.src=this[vendor].src;
if(vendor==="youtube"){
window.onYouTubeIframeAPIReady=function (){
_this[vendor].loaded=true;
_this.done(vendor);
};}else{
script.onload=function (){
_this[vendor].loaded=true;
_this.done(vendor);
};}
document.body.appendChild(script);
},
done: function (vendor){
var instance, $el, player;
if(vendor==="youtube"){
delete window.onYouTubeIframeAPIReady;
}
instance=$.fancybox.getInstance();
if(instance){
$el=instance.current.$content.find("iframe");
if(vendor==="youtube"&&YT!==undefined&&YT){
player=new YT.Player($el.attr("id"), {
events: {
onStateChange: function (e){
if(e.data==0){
instance.next();
}}
}});
}else if(vendor==="vimeo"&&Vimeo!==undefined&&Vimeo){
player=new Vimeo.Player($el);
player.on("ended", function (){
instance.next();
});
}}
}};
$(document).on({
"afterShow.fb": function (e, instance, current){
if(instance.group.length > 1&&(current.contentSource==="youtube"||current.contentSource==="vimeo")){
VideoAPILoader.load(current.contentSource);
}}
});
})(jQuery);
(function (window, document, $){
"use strict";
var requestAFrame=(function (){
return (
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
function (callback){
return window.setTimeout(callback, 1000 / 60);
}
);
})();
var cancelAFrame=(function (){
return (
window.cancelAnimationFrame ||
window.webkitCancelAnimationFrame ||
window.mozCancelAnimationFrame ||
window.oCancelAnimationFrame ||
function (id){
window.clearTimeout(id);
}
);
})();
var getPointerXY=function (e){
var result=[];
e=e.originalEvent||e || window.e;
e=e.touches&&e.touches.length ? e.touches:e.changedTouches&&e.changedTouches.length ? e.changedTouches:[e];
for (var key in e){
if(e[key].pageX){
result.push({
x: e[key].pageX,
y: e[key].pageY
});
}else if(e[key].clientX){
result.push({
x: e[key].clientX,
y: e[key].clientY
});
}}
return result;
};
var distance=function (point2, point1, what){
if(!point1||!point2){
return 0;
}
if(what==="x"){
return point2.x - point1.x;
}else if(what==="y"){
return point2.y - point1.y;
}
return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var isClickable=function ($el){
if($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
$.isFunction($el.get(0).onclick) ||
$el.data("selectable")
){
return true;
}
for (var i=0, atts=$el[0].attributes, n=atts.length; i < n; i++){
if(atts[i].nodeName.substr(0, 14)==="data-fancybox-"){
return true;
}}
return false;
};
var hasScrollbars=function (el){
var overflowY=window.getComputedStyle(el)["overflow-y"],
overflowX=window.getComputedStyle(el)["overflow-x"],
vertical=(overflowY==="scroll"||overflowY==="auto")&&el.scrollHeight > el.clientHeight,
horizontal=(overflowX==="scroll"||overflowX==="auto")&&el.scrollWidth > el.clientWidth;
return vertical||horizontal;
};
var isScrollable=function ($el){
var rez=false;
while (true){
rez=hasScrollbars($el.get(0));
if(rez){
break;
}
$el=$el.parent();
if(!$el.length||$el.hasClass("fancybox-stage")||$el.is("body")){
break;
}}
return rez;
};
var Guestures=function (instance){
var self=this;
self.instance=instance;
self.$bg=instance.$refs.bg;
self.$stage=instance.$refs.stage;
self.$container=instance.$refs.container;
self.destroy();
self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
};
Guestures.prototype.destroy=function (){
var self=this;
self.$container.off(".fb.touch");
$(document).off(".fb.touch");
if(self.requestId){
cancelAFrame(self.requestId);
self.requestId=null;
}
if(self.tapped){
clearTimeout(self.tapped);
self.tapped=null;
}};
Guestures.prototype.ontouchstart=function (e){
var self=this,
$target=$(e.target),
instance=self.instance,
current=instance.current,
$slide=current.$slide,
$content=current.$content,
isTouchDevice=e.type=="touchstart";
if(isTouchDevice){
self.$container.off("mousedown.fb.touch");
}
if(e.originalEvent&&e.originalEvent.button==2){
return;
}
if(!$slide.length||!$target.length||isClickable($target)||isClickable($target.parent())){
return;
}
if(!$target.is("img")&&e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left){
return;
}
if(!current||instance.isAnimating||current.$slide.hasClass("fancybox-animated")){
e.stopPropagation();
e.preventDefault();
return;
}
self.realPoints=self.startPoints=getPointerXY(e);
if(!self.startPoints.length){
return;
}
if(current.touch){
e.stopPropagation();
}
self.startEvent=e;
self.canTap=true;
self.$target=$target;
self.$content=$content;
self.opts=current.opts.touch;
self.isPanning=false;
self.isSwiping=false;
self.isZooming=false;
self.isScrolling=false;
self.canPan=instance.canPan();
self.startTime=new Date().getTime();
self.distanceX=self.distanceY=self.distance=0;
self.canvasWidth=Math.round($slide[0].clientWidth);
self.canvasHeight=Math.round($slide[0].clientHeight);
self.contentLastPos=null;
self.contentStartPos=$.fancybox.getTranslate(self.$content)||{
top: 0,
left: 0
};
self.sliderStartPos=$.fancybox.getTranslate($slide);
self.stagePos=$.fancybox.getTranslate(instance.$refs.stage);
self.sliderStartPos.top -=self.stagePos.top;
self.sliderStartPos.left -=self.stagePos.left;
self.contentStartPos.top -=self.stagePos.top;
self.contentStartPos.left -=self.stagePos.left;
$(document)
.off(".fb.touch")
.on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
.on(isTouchDevice ? "touchmove.fb.touch":"mousemove.fb.touch", $.proxy(self, "ontouchmove"));
if($.fancybox.isMobile){
document.addEventListener("scroll", self.onscroll, true);
}
if(!(self.opts||self.canPan)||!($target.is(self.$stage)||self.$stage.find($target).length)){
if($target.is(".fancybox-image")){
e.preventDefault();
}
if(!($.fancybox.isMobile&&$target.parents(".fancybox-caption").length)){
return;
}}
self.isScrollable=isScrollable($target)||isScrollable($target.parent());
if(!($.fancybox.isMobile&&self.isScrollable)){
e.preventDefault();
}
if(self.startPoints.length===1||current.hasError){
if(self.canPan){
$.fancybox.stop(self.$content);
self.isPanning=true;
}else{
self.isSwiping=true;
}
self.$container.addClass("fancybox-is-grabbing");
}
if(self.startPoints.length===2&&current.type==="image"&&(current.isLoaded||current.$ghost)){
self.canTap=false;
self.isSwiping=false;
self.isPanning=false;
self.isZooming=true;
$.fancybox.stop(self.$content);
self.centerPointStartX=(self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
self.centerPointStartY=(self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
self.percentageOfImageAtPinchPointX=(self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
self.percentageOfImageAtPinchPointY=(self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
self.startDistanceBetweenFingers=distance(self.startPoints[0], self.startPoints[1]);
}};
Guestures.prototype.onscroll=function (e){
var self=this;
self.isScrolling=true;
document.removeEventListener("scroll", self.onscroll, true);
};
Guestures.prototype.ontouchmove=function (e){
var self=this;
if(e.originalEvent.buttons!==undefined&&e.originalEvent.buttons===0){
self.ontouchend(e);
return;
}
if(self.isScrolling){
self.canTap=false;
return;
}
self.newPoints=getPointerXY(e);
if(!(self.opts||self.canPan)||!self.newPoints.length||!self.newPoints.length){
return;
}
if(!(self.isSwiping&&self.isSwiping===true)){
e.preventDefault();
}
self.distanceX=distance(self.newPoints[0], self.startPoints[0], "x");
self.distanceY=distance(self.newPoints[0], self.startPoints[0], "y");
self.distance=distance(self.newPoints[0], self.startPoints[0]);
if(self.distance > 0){
if(self.isSwiping){
self.onSwipe(e);
}else if(self.isPanning){
self.onPan();
}else if(self.isZooming){
self.onZoom();
}}
};
Guestures.prototype.onSwipe=function (e){
var self=this,
instance=self.instance,
swiping=self.isSwiping,
left=self.sliderStartPos.left||0,
angle;
if(swiping===true){
if(Math.abs(self.distance) > 10){
self.canTap=false;
if(instance.group.length < 2&&self.opts.vertical){
self.isSwiping="y";
}else if(instance.isDragging||self.opts.vertical===false||(self.opts.vertical==="auto"&&$(window).width() > 800)){
self.isSwiping="x";
}else{
angle=Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
self.isSwiping=angle > 45&&angle < 135 ? "y":"x";
}
if(self.isSwiping==="y"&&$.fancybox.isMobile&&self.isScrollable){
self.isScrolling=true;
return;
}
instance.isDragging=self.isSwiping;
self.startPoints=self.newPoints;
$.each(instance.slides, function (index, slide){
var slidePos, stagePos;
$.fancybox.stop(slide.$slide);
slidePos=$.fancybox.getTranslate(slide.$slide);
stagePos=$.fancybox.getTranslate(instance.$refs.stage);
slide.$slide
.css({
transform: "",
opacity: "",
"transition-duration": ""
})
.removeClass("fancybox-animated")
.removeClass(function (index, className){
return (className.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ");
});
if(slide.pos===instance.current.pos){
self.sliderStartPos.top=slidePos.top - stagePos.top;
self.sliderStartPos.left=slidePos.left - stagePos.left;
}
$.fancybox.setTranslate(slide.$slide, {
top: slidePos.top - stagePos.top,
left: slidePos.left - stagePos.left
});
});
if(instance.SlideShow&&instance.SlideShow.isActive){
instance.SlideShow.stop();
}}
return;
}
if(swiping=="x"){
if(self.distanceX > 0 &&
(self.instance.group.length < 2||(self.instance.current.index===0&&!self.instance.current.opts.loop))
){
left=left + Math.pow(self.distanceX, 0.8);
}else if(self.distanceX < 0 &&
(self.instance.group.length < 2 ||
(self.instance.current.index===self.instance.group.length - 1&&!self.instance.current.opts.loop))
){
left=left - Math.pow(-self.distanceX, 0.8);
}else{
left=left + self.distanceX;
}}
self.sliderLastPos={
top: swiping=="x" ? 0:self.sliderStartPos.top + self.distanceY,
left: left
};
if(self.requestId){
cancelAFrame(self.requestId);
self.requestId=null;
}
self.requestId=requestAFrame(function (){
if(self.sliderLastPos){
$.each(self.instance.slides, function (index, slide){
var pos=slide.pos - self.instance.currPos;
$.fancybox.setTranslate(slide.$slide, {
top: self.sliderLastPos.top,
left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
});
});
self.$container.addClass("fancybox-is-sliding");
}});
};
Guestures.prototype.onPan=function (){
var self=this;
if(distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10:5)){
self.startPoints=self.newPoints;
return;
}
self.canTap=false;
self.contentLastPos=self.limitMovement();
if(self.requestId){
cancelAFrame(self.requestId);
}
self.requestId=requestAFrame(function (){
$.fancybox.setTranslate(self.$content, self.contentLastPos);
});
};
Guestures.prototype.limitMovement=function (){
var self=this;
var canvasWidth=self.canvasWidth;
var canvasHeight=self.canvasHeight;
var distanceX=self.distanceX;
var distanceY=self.distanceY;
var contentStartPos=self.contentStartPos;
var currentOffsetX=contentStartPos.left;
var currentOffsetY=contentStartPos.top;
var currentWidth=contentStartPos.width;
var currentHeight=contentStartPos.height;
var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
if(currentWidth > canvasWidth){
newOffsetX=currentOffsetX + distanceX;
}else{
newOffsetX=currentOffsetX;
}
newOffsetY=currentOffsetY + distanceY;
minTranslateX=Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
minTranslateY=Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
maxTranslateX=Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
maxTranslateY=Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
if(distanceX > 0&&newOffsetX > minTranslateX){
newOffsetX=minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8)||0;
}
if(distanceX < 0&&newOffsetX < maxTranslateX){
newOffsetX=maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8)||0;
}
if(distanceY > 0&&newOffsetY > minTranslateY){
newOffsetY=minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8)||0;
}
if(distanceY < 0&&newOffsetY < maxTranslateY){
newOffsetY=maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8)||0;
}
return {
top: newOffsetY,
left: newOffsetX
};};
Guestures.prototype.limitPosition=function (newOffsetX, newOffsetY, newWidth, newHeight){
var self=this;
var canvasWidth=self.canvasWidth;
var canvasHeight=self.canvasHeight;
if(newWidth > canvasWidth){
newOffsetX=newOffsetX > 0 ? 0:newOffsetX;
newOffsetX=newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth:newOffsetX;
}else{
newOffsetX=Math.max(0, canvasWidth / 2 - newWidth / 2);
}
if(newHeight > canvasHeight){
newOffsetY=newOffsetY > 0 ? 0:newOffsetY;
newOffsetY=newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight:newOffsetY;
}else{
newOffsetY=Math.max(0, canvasHeight / 2 - newHeight / 2);
}
return {
top: newOffsetY,
left: newOffsetX
};};
Guestures.prototype.onZoom=function (){
var self=this;
var contentStartPos=self.contentStartPos;
var currentWidth=contentStartPos.width;
var currentHeight=contentStartPos.height;
var currentOffsetX=contentStartPos.left;
var currentOffsetY=contentStartPos.top;
var endDistanceBetweenFingers=distance(self.newPoints[0], self.newPoints[1]);
var pinchRatio=endDistanceBetweenFingers / self.startDistanceBetweenFingers;
var newWidth=Math.floor(currentWidth * pinchRatio);
var newHeight=Math.floor(currentHeight * pinchRatio);
var translateFromZoomingX=(currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
var translateFromZoomingY=(currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
var centerPointEndX=(self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
var centerPointEndY=(self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
var translateFromTranslatingX=centerPointEndX - self.centerPointStartX;
var translateFromTranslatingY=centerPointEndY - self.centerPointStartY;
var newOffsetX=currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
var newOffsetY=currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
var newPos={
top: newOffsetY,
left: newOffsetX,
scaleX: pinchRatio,
scaleY: pinchRatio
};
self.canTap=false;
self.newWidth=newWidth;
self.newHeight=newHeight;
self.contentLastPos=newPos;
if(self.requestId){
cancelAFrame(self.requestId);
}
self.requestId=requestAFrame(function (){
$.fancybox.setTranslate(self.$content, self.contentLastPos);
});
};
Guestures.prototype.ontouchend=function (e){
var self=this;
var swiping=self.isSwiping;
var panning=self.isPanning;
var zooming=self.isZooming;
var scrolling=self.isScrolling;
self.endPoints=getPointerXY(e);
self.dMs=Math.max(new Date().getTime() - self.startTime, 1);
self.$container.removeClass("fancybox-is-grabbing");
$(document).off(".fb.touch");
document.removeEventListener("scroll", self.onscroll, true);
if(self.requestId){
cancelAFrame(self.requestId);
self.requestId=null;
}
self.isSwiping=false;
self.isPanning=false;
self.isZooming=false;
self.isScrolling=false;
self.instance.isDragging=false;
if(self.canTap){
return self.onTap(e);
}
self.speed=100;
self.velocityX=(self.distanceX / self.dMs) * 0.5;
self.velocityY=(self.distanceY / self.dMs) * 0.5;
if(panning){
self.endPanning();
}else if(zooming){
self.endZooming();
}else{
self.endSwiping(swiping, scrolling);
}
return;
};
Guestures.prototype.endSwiping=function (swiping, scrolling){
var self=this,
ret=false,
len=self.instance.group.length,
distanceX=Math.abs(self.distanceX),
canAdvance=swiping=="x"&&len > 1&&((self.dMs > 130&&distanceX > 10)||distanceX > 50),
speedX=300;
self.sliderLastPos=null;
if(swiping=="y"&&!scrolling&&Math.abs(self.distanceY) > 50){
$.fancybox.animate(self.instance.current.$slide, {
top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
opacity: 0
},
200
);
ret=self.instance.close(true, 250);
}else if(canAdvance&&self.distanceX > 0){
ret=self.instance.previous(speedX);
}else if(canAdvance&&self.distanceX < 0){
ret=self.instance.next(speedX);
}
if(ret===false&&(swiping=="x"||swiping=="y")){
self.instance.centerSlide(200);
}
self.$container.removeClass("fancybox-is-sliding");
};
Guestures.prototype.endPanning=function (){
var self=this,
newOffsetX,
newOffsetY,
newPos;
if(!self.contentLastPos){
return;
}
if(self.opts.momentum===false||self.dMs > 350){
newOffsetX=self.contentLastPos.left;
newOffsetY=self.contentLastPos.top;
}else{
newOffsetX=self.contentLastPos.left + self.velocityX * 500;
newOffsetY=self.contentLastPos.top + self.velocityY * 500;
}
newPos=self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
newPos.width=self.contentStartPos.width;
newPos.height=self.contentStartPos.height;
$.fancybox.animate(self.$content, newPos, 366);
};
Guestures.prototype.endZooming=function (){
var self=this;
var current=self.instance.current;
var newOffsetX, newOffsetY, newPos, reset;
var newWidth=self.newWidth;
var newHeight=self.newHeight;
if(!self.contentLastPos){
return;
}
newOffsetX=self.contentLastPos.left;
newOffsetY=self.contentLastPos.top;
reset={
top: newOffsetY,
left: newOffsetX,
width: newWidth,
height: newHeight,
scaleX: 1,
scaleY: 1
};
$.fancybox.setTranslate(self.$content, reset);
if(newWidth < self.canvasWidth&&newHeight < self.canvasHeight){
self.instance.scaleToFit(150);
}else if(newWidth > current.width||newHeight > current.height){
self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
}else{
newPos=self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
$.fancybox.animate(self.$content, newPos, 150);
}};
Guestures.prototype.onTap=function (e){
var self=this;
var $target=$(e.target);
var instance=self.instance;
var current=instance.current;
var endPoints=(e&&getPointerXY(e))||self.startPoints;
var tapX=endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left:0;
var tapY=endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top:0;
var where;
var process=function (prefix){
var action=current.opts[prefix];
if($.isFunction(action)){
action=action.apply(instance, [current, e]);
}
if(!action){
return;
}
switch (action){
case "close":
instance.close(self.startEvent);
break;
case "toggleControls":
instance.toggleControls();
break;
case "next":
instance.next();
break;
case "nextOrClose":
if(instance.group.length > 1){
instance.next();
}else{
instance.close(self.startEvent);
}
break;
case "zoom":
if(current.type=="image"&&(current.isLoaded||current.$ghost)){
if(instance.canPan()){
instance.scaleToFit();
}else if(instance.isScaledDown()){
instance.scaleToActual(tapX, tapY);
}else if(instance.group.length < 2){
instance.close(self.startEvent);
}}
break;
}};
if(e.originalEvent&&e.originalEvent.button==2){
return;
}
if(!$target.is("img")&&tapX > $target[0].clientWidth + $target.offset().left){
return;
}
if($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")){
where="Outside";
}else if($target.is(".fancybox-slide")){
where="Slide";
}else if(instance.current.$content &&
instance.current.$content
.find($target)
.addBack()
.filter($target).length
){
where="Content";
}else{
return;
}
if(self.tapped){
clearTimeout(self.tapped);
self.tapped=null;
if(Math.abs(tapX - self.tapX) > 50||Math.abs(tapY - self.tapY) > 50){
return this;
}
process("dblclick" + where);
}else{
self.tapX=tapX;
self.tapY=tapY;
if(current.opts["dblclick" + where]&&current.opts["dblclick" + where]!==current.opts["click" + where]){
self.tapped=setTimeout(function (){
self.tapped=null;
if(!instance.isAnimating){
process("click" + where);
}}, 500);
}else{
process("click" + where);
}}
return this;
};
$(document)
.on("onActivate.fb", function (e, instance){
if(instance&&!instance.Guestures){
instance.Guestures=new Guestures(instance);
}})
.on("beforeClose.fb", function (e, instance){
if(instance&&instance.Guestures){
instance.Guestures.destroy();
}});
})(window, document, jQuery);
(function (document, $){
"use strict";
$.extend(true, $.fancybox.defaults, {
btnTpl: {
slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
"</button>"
},
slideShow: {
autoStart: false,
speed: 3000,
progress: true
}});
var SlideShow=function (instance){
this.instance=instance;
this.init();
};
$.extend(SlideShow.prototype, {
timer: null,
isActive: false,
$button: null,
init: function (){
var self=this,
instance=self.instance,
opts=instance.group[instance.currIndex].opts.slideShow;
self.$button=instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function (){
self.toggle();
});
if(instance.group.length < 2||!opts){
self.$button.hide();
}else if(opts.progress){
self.$progress=$('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
}},
set: function (force){
var self=this,
instance=self.instance,
current=instance.current;
if(current&&(force===true||current.opts.loop||instance.currIndex < instance.group.length - 1)){
if(self.isActive&&current.contentType!=="video"){
if(self.$progress){
$.fancybox.animate(self.$progress.show(), {
scaleX: 1
}, current.opts.slideShow.speed);
}
self.timer=setTimeout(function (){
if(!instance.current.opts.loop&&instance.current.index==instance.group.length - 1){
instance.jumpTo(0);
}else{
instance.next();
}}, current.opts.slideShow.speed);
}}else{
self.stop();
instance.idleSecondsCounter=0;
instance.showControls();
}},
clear: function (){
var self=this;
clearTimeout(self.timer);
self.timer=null;
if(self.$progress){
self.$progress.removeAttr("style").hide();
}},
start: function (){
var self=this,
current=self.instance.current;
if(current){
self.$button
.attr("title", (current.opts.i18n[current.opts.lang]||current.opts.i18n.en).PLAY_STOP)
.removeClass("fancybox-button--play")
.addClass("fancybox-button--pause");
self.isActive=true;
if(current.isComplete){
self.set(true);
}
self.instance.trigger("onSlideShowChange", true);
}},
stop: function (){
var self=this,
current=self.instance.current;
self.clear();
self.$button
.attr("title", (current.opts.i18n[current.opts.lang]||current.opts.i18n.en).PLAY_START)
.removeClass("fancybox-button--pause")
.addClass("fancybox-button--play");
self.isActive=false;
self.instance.trigger("onSlideShowChange", false);
if(self.$progress){
self.$progress.removeAttr("style").hide();
}},
toggle: function (){
var self=this;
if(self.isActive){
self.stop();
}else{
self.start();
}}
});
$(document).on({
"onInit.fb": function (e, instance){
if(instance&&!instance.SlideShow){
instance.SlideShow=new SlideShow(instance);
}},
"beforeShow.fb": function (e, instance, current, firstRun){
var SlideShow=instance&&instance.SlideShow;
if(firstRun){
if(SlideShow&&current.opts.slideShow.autoStart){
SlideShow.start();
}}else if(SlideShow&&SlideShow.isActive){
SlideShow.clear();
}},
"afterShow.fb": function (e, instance, current){
var SlideShow=instance&&instance.SlideShow;
if(SlideShow&&SlideShow.isActive){
SlideShow.set();
}},
"afterKeydown.fb": function (e, instance, current, keypress, keycode){
var SlideShow=instance&&instance.SlideShow;
if(SlideShow&&current.opts.slideShow&&(keycode===80||keycode===32)&&!$(document.activeElement).is("button,a,input")){
keypress.preventDefault();
SlideShow.toggle();
}},
"beforeClose.fb onDeactivate.fb": function (e, instance){
var SlideShow=instance&&instance.SlideShow;
if(SlideShow){
SlideShow.stop();
}}
});
$(document).on("visibilitychange", function (){
var instance=$.fancybox.getInstance(),
SlideShow=instance&&instance.SlideShow;
if(SlideShow&&SlideShow.isActive){
if(document.hidden){
SlideShow.clear();
}else{
SlideShow.set();
}}
});
})(document, jQuery);
(function (document, $){
"use strict";
var fn=(function (){
var fnMap=[
["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
[
"webkitRequestFullscreen",
"webkitExitFullscreen",
"webkitFullscreenElement",
"webkitFullscreenEnabled",
"webkitfullscreenchange",
"webkitfullscreenerror"
],
[
"webkitRequestFullScreen",
"webkitCancelFullScreen",
"webkitCurrentFullScreenElement",
"webkitCancelFullScreen",
"webkitfullscreenchange",
"webkitfullscreenerror"
],
[
"mozRequestFullScreen",
"mozCancelFullScreen",
"mozFullScreenElement",
"mozFullScreenEnabled",
"mozfullscreenchange",
"mozfullscreenerror"
],
["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
];
var ret={};
for (var i=0; i < fnMap.length; i++){
var val=fnMap[i];
if(val&&val[1] in document){
for (var j=0; j < val.length; j++){
ret[fnMap[0][j]]=val[j];
}
return ret;
}}
return false;
})();
if(fn){
var FullScreen={
request: function (elem){
elem=elem||document.documentElement;
elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
},
exit: function (){
document[fn.exitFullscreen]();
},
toggle: function (elem){
elem=elem||document.documentElement;
if(this.isFullscreen()){
this.exit();
}else{
this.request(elem);
}},
isFullscreen: function (){
return Boolean(document[fn.fullscreenElement]);
},
enabled: function (){
return Boolean(document[fn.fullscreenEnabled]);
}};
$.extend(true, $.fancybox.defaults, {
btnTpl: {
fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
"</button>"
},
fullScreen: {
autoStart: false
}});
$(document).on(fn.fullscreenchange, function (){
var isFullscreen=FullScreen.isFullscreen(),
instance=$.fancybox.getInstance();
if(instance){
if(instance.current&&instance.current.type==="image"&&instance.isAnimating){
instance.isAnimating=false;
instance.update(true, true, 0);
if(!instance.isComplete){
instance.complete();
}}
instance.trigger("onFullscreenChange", isFullscreen);
instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
instance.$refs.toolbar
.find("[data-fancybox-fullscreen]")
.toggleClass("fancybox-button--fsenter", !isFullscreen)
.toggleClass("fancybox-button--fsexit", isFullscreen);
}});
}
$(document).on({
"onInit.fb": function (e, instance){
var $container;
if(!fn){
instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
return;
}
if(instance&&instance.group[instance.currIndex].opts.fullScreen){
$container=instance.$refs.container;
$container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e){
e.stopPropagation();
e.preventDefault();
FullScreen.toggle();
});
if(instance.opts.fullScreen&&instance.opts.fullScreen.autoStart===true){
FullScreen.request();
}
instance.FullScreen=FullScreen;
}else if(instance){
instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
}},
"afterKeydown.fb": function (e, instance, current, keypress, keycode){
if(instance&&instance.FullScreen&&keycode===70){
keypress.preventDefault();
instance.FullScreen.toggle();
}},
"beforeClose.fb": function (e, instance){
if(instance&&instance.FullScreen&&instance.$refs.container.hasClass("fancybox-is-fullscreen")){
FullScreen.exit();
}}
});
})(document, jQuery);
(function (document, $){
"use strict";
var CLASS="fancybox-thumbs",
CLASS_ACTIVE=CLASS + "-active";
$.fancybox.defaults=$.extend(true, {
btnTpl: {
thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
"</button>"
},
thumbs: {
autoStart: false,
hideOnClose: true,
parentEl: ".fancybox-container",
axis: "y"
}},
$.fancybox.defaults
);
var FancyThumbs=function (instance){
this.init(instance);
};
$.extend(FancyThumbs.prototype, {
$button: null,
$grid: null,
$list: null,
isVisible: false,
isActive: false,
init: function (instance){
var self=this,
group=instance.group,
enabled=0;
self.instance=instance;
self.opts=group[instance.currIndex].opts.thumbs;
instance.Thumbs=self;
self.$button=instance.$refs.toolbar.find("[data-fancybox-thumbs]");
for (var i=0, len=group.length; i < len; i++){
if(group[i].thumb){
enabled++;
}
if(enabled > 1){
break;
}}
if(enabled > 1&&!!self.opts){
self.$button.removeAttr("style").on("click", function (){
self.toggle();
});
self.isActive=true;
}else{
self.$button.hide();
}},
create: function (){
var self=this,
instance=self.instance,
parentEl=self.opts.parentEl,
list=[],
src;
if(!self.$grid){
self.$grid=$('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container
.find(parentEl)
.addBack()
.filter(parentEl)
);
self.$grid.on("click", "a", function (){
instance.jumpTo($(this).attr("data-index"));
});
}
if(!self.$list){
self.$list=$('<div class="' + CLASS + '__list">').appendTo(self.$grid);
}
$.each(instance.group, function (i, item){
src=item.thumb;
if(!src&&item.type==="image"){
src=item.src;
}
list.push('<a href="javascript:;" tabindex="0" data-index="' +
i +
'"' +
(src&&src.length ? ' style="background-image:url(' + src + ')"':'class="fancybox-thumbs-missing"') +
"></a>"
);
});
self.$list[0].innerHTML=list.join("");
if(self.opts.axis==="x"){
self.$list.width(parseInt(self.$grid.css("padding-right"), 10) +
instance.group.length *
self.$list
.children()
.eq(0)
.outerWidth(true)
);
}},
focus: function (duration){
var self=this,
$list=self.$list,
$grid=self.$grid,
thumb,
thumbPos;
if(!self.instance.current){
return;
}
thumb=$list
.children()
.removeClass(CLASS_ACTIVE)
.filter('[data-index="' + self.instance.current.index + '"]')
.addClass(CLASS_ACTIVE);
thumbPos=thumb.position();
if(self.opts.axis==="y"&&(thumbPos.top < 0||thumbPos.top > $list.height() - thumb.outerHeight())){
$list.stop().animate({
scrollTop: $list.scrollTop() + thumbPos.top
},
duration
);
}else if(self.opts.axis==="x" &&
(thumbPos.left < $grid.scrollLeft()||thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
){
$list
.parent()
.stop()
.animate({
scrollLeft: thumbPos.left
},
duration
);
}},
update: function (){
var that=this;
that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
if(that.isVisible){
if(!that.$grid){
that.create();
}
that.instance.trigger("onThumbsShow");
that.focus(0);
}else if(that.$grid){
that.instance.trigger("onThumbsHide");
}
that.instance.update();
},
hide: function (){
this.isVisible=false;
this.update();
},
show: function (){
this.isVisible=true;
this.update();
},
toggle: function (){
this.isVisible = !this.isVisible;
this.update();
}});
$(document).on({
"onInit.fb": function (e, instance){
var Thumbs;
if(instance&&!instance.Thumbs){
Thumbs=new FancyThumbs(instance);
if(Thumbs.isActive&&Thumbs.opts.autoStart===true){
Thumbs.show();
}}
},
"beforeShow.fb": function (e, instance, item, firstRun){
var Thumbs=instance&&instance.Thumbs;
if(Thumbs&&Thumbs.isVisible){
Thumbs.focus(firstRun ? 0:250);
}},
"afterKeydown.fb": function (e, instance, current, keypress, keycode){
var Thumbs=instance&&instance.Thumbs;
if(Thumbs&&Thumbs.isActive&&keycode===71){
keypress.preventDefault();
Thumbs.toggle();
}},
"beforeClose.fb": function (e, instance){
var Thumbs=instance&&instance.Thumbs;
if(Thumbs&&Thumbs.isVisible&&Thumbs.opts.hideOnClose!==false){
Thumbs.$grid.hide();
}}
});
})(document, jQuery);
(function (document, $){
"use strict";
$.extend(true, $.fancybox.defaults, {
btnTpl: {
share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
"</button>"
},
share: {
url: function (instance, item){
return (
(!instance.currentHash&&!(item.type==="inline"||item.type==="html") ? item.origSrc||item.src:false)||window.location
);
},
tpl: '<div class="fancybox-share">' +
"<h1>{{SHARE}}</h1>" +
"<p>" +
'<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
"<span>Facebook</span>" +
"</a>" +
'<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
"<span>Twitter</span>" +
"</a>" +
'<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
"<span>Pinterest</span>" +
"</a>" +
"</p>" +
'<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
"</div>"
}});
function escapeHtml(string){
var entityMap={
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#39;",
"/": "&#x2F;",
"`": "&#x60;",
"=": "&#x3D;"
};
return String(string).replace(/[&<>"'`=\/]/g, function (s){
return entityMap[s];
});
}
$(document).on("click", "[data-fancybox-share]", function (){
var instance=$.fancybox.getInstance(),
current=instance.current||null,
url,
tpl;
if(!current){
return;
}
if($.type(current.opts.share.url)==="function"){
url=current.opts.share.url.apply(current, [instance, current]);
}
tpl=current.opts.share.tpl
.replace(/\{\{media\}\}/g, current.type==="image" ? encodeURIComponent(current.src):"")
.replace(/\{\{url\}\}/g, encodeURIComponent(url))
.replace(/\{\{url_raw\}\}/g, escapeHtml(url))
.replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()):"");
$.fancybox.open({
src: instance.translate(instance, tpl),
type: "html",
opts: {
touch: false,
animationEffect: false,
afterLoad: function (shareInstance, shareCurrent){
instance.$refs.container.one("beforeClose.fb", function (){
shareInstance.close(null, 0);
});
shareCurrent.$content.find(".fancybox-share__button").click(function (){
window.open(this.href, "Share", "width=550, height=450");
return false;
});
},
mobile: {
autoFocus: false
}}
});
});
})(document, jQuery);
(function (window, document, $){
"use strict";
if(!$.escapeSelector){
$.escapeSelector=function (sel){
var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
var fcssescape=function (ch, asCodePoint){
if(asCodePoint){
if(ch==="\0"){
return "\uFFFD";
}
return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
}
return "\\" + ch;
};
return (sel + "").replace(rcssescape, fcssescape);
};}
function parseUrl(){
var hash=window.location.hash.substr(1),
rez=hash.split("-"),
index=rez.length > 1&&/^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10)||1:1,
gallery=rez.join("-");
return {
hash: hash,
index: index < 1 ? 1:index,
gallery: gallery
};}
function triggerFromUrl(url){
if(url.gallery!==""){
$("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
.eq(url.index - 1)
.focus()
.trigger("click.fb-start");
}}
function getGalleryID(instance){
var opts, ret;
if(!instance){
return false;
}
opts=instance.current ? instance.current.opts:instance.opts;
ret=opts.hash||(opts.$orig ? opts.$orig.data("fancybox")||opts.$orig.data("fancybox-trigger"):"");
return ret==="" ? false:ret;
}
$(function (){
if($.fancybox.defaults.hash===false){
return;
}
$(document).on({
"onInit.fb": function (e, instance){
var url, gallery;
if(instance.group[instance.currIndex].opts.hash===false){
return;
}
url=parseUrl();
gallery=getGalleryID(instance);
if(gallery&&url.gallery&&gallery==url.gallery){
instance.currIndex=url.index - 1;
}},
"beforeShow.fb": function (e, instance, current, firstRun){
var gallery;
if(!current||current.opts.hash===false){
return;
}
gallery=getGalleryID(instance);
if(!gallery){
return;
}
instance.currentHash=gallery + (instance.group.length > 1 ? "-" + (current.index + 1):"");
if(window.location.hash==="#" + instance.currentHash){
return;
}
if(firstRun&&!instance.origHash){
instance.origHash=window.location.hash;
}
if(instance.hashTimer){
clearTimeout(instance.hashTimer);
}
instance.hashTimer=setTimeout(function (){
if("replaceState" in window.history){
window.history[firstRun ? "pushState":"replaceState"]({},
document.title,
window.location.pathname + window.location.search + "#" + instance.currentHash
);
if(firstRun){
instance.hasCreatedHistory=true;
}}else{
window.location.hash=instance.currentHash;
}
instance.hashTimer=null;
}, 300);
},
"beforeClose.fb": function (e, instance, current){
if(!current||current.opts.hash===false){
return;
}
clearTimeout(instance.hashTimer);
if(instance.currentHash&&instance.hasCreatedHistory){
window.history.back();
}else if(instance.currentHash){
if("replaceState" in window.history){
window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash||""));
}else{
window.location.hash=instance.origHash;
}}
instance.currentHash=null;
}});
$(window).on("hashchange.fb", function (){
var url=parseUrl(),
fb=null;
$.each($(".fancybox-container")
.get()
.reverse(),
function (index, value){
var tmp=$(value).data("FancyBox");
if(tmp&&tmp.currentHash){
fb=tmp;
return false;
}}
);
if(fb){
if(fb.currentHash!==url.gallery + "-" + url.index&&!(url.index===1&&fb.currentHash==url.gallery)){
fb.currentHash=null;
fb.close();
}}else if(url.gallery!==""){
triggerFromUrl(url);
}});
setTimeout(function (){
if(!$.fancybox.getInstance()){
triggerFromUrl(parseUrl());
}}, 50);
});
})(window, document, jQuery);
(function (document, $){
"use strict";
var prevTime=new Date().getTime();
$(document).on({
"onInit.fb": function (e, instance, current){
instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e){
var current=instance.current,
currTime=new Date().getTime();
if(instance.group.length < 2||current.opts.wheel===false||(current.opts.wheel==="auto"&&current.type!=="image")){
return;
}
e.preventDefault();
e.stopPropagation();
if(current.$slide.hasClass("fancybox-animated")){
return;
}
e=e.originalEvent||e;
if(currTime - prevTime < 250){
return;
}
prevTime=currTime;
instance[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail) < 0 ? "next":"previous"]();
});
}});
})(document, jQuery);
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,function(D){"use strict";function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}D=D&&D.hasOwnProperty("default")?D.default:D;var s={autoShow:!1,autoHide:!1,autoPick:!1,inline:!1,container:null,trigger:null,language:"",format:"mm/dd/yyyy",date:null,startDate:null,endDate:null,startView:0,weekStart:0,yearFirst:!1,yearSuffix:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],itemTag:"li",mutedClass:"muted",pickedClass:"picked",disabledClass:"disabled",highlightedClass:"highlighted",template:'<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',offset:10,zIndex:1e3,filter:null,show:null,hide:null,pick:null},t="undefined"!=typeof window,e=t?window:{},i=t&&"ontouchstart"in e.document.documentElement,c="datepicker",n="click.".concat(c),r="focus.".concat(c),h="hide.".concat(c),o="keyup.".concat(c),l="pick.".concat(c),d="resize.".concat(c),u="scroll.".concat(c),p="show.".concat(c),f="touchstart.".concat(c),g="".concat(c,"-hide"),y={},m=0,v=1,w=2,k=Object.prototype.toString;function b(t){return"string"==typeof t}var C=Number.isNaN||e.isNaN;function $(t){return"number"==typeof t&&!C(t)}function x(t){return void 0===t}function F(t){return"date"===function(t){return k.call(t).slice(8,-1).toLowerCase()}(t)&&!C(t.getTime())}function M(a,s){for(var t=arguments.length,n=new Array(2<t?t-2:0),e=2;e<t;e++)n[e-2]=arguments[e];return function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return a.apply(s,n.concat(e))}}function Y(t){return'[data-view="'.concat(t,'"]')}function G(t,e){return[31,function(t){return t%4==0&&t%100!=0||t%400==0}(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}function V(t,e,i){return Math.min(i,G(t,e))}var T=/(y|m|d)+/g;function S(t,e){var i=1<arguments.length&&void 0!==e?e:1,a=String(Math.abs(t)),s=a.length,n="";for(t<0&&(n+="-");s<i;)s+=1,n+="0";return n+a}var I=/\d+/g,P={show:function(){this.built||this.build(),this.shown||this.trigger(p).isDefaultPrevented()||(this.shown=!0,this.$picker.removeClass(g).on(n,D.proxy(this.click,this)),this.showView(this.options.startView),this.inline||(this.$scrollParent.on(u,D.proxy(this.place,this)),D(window).on(d,this.onResize=M(this.place,this)),D(document).on(n,this.onGlobalClick=M(this.globalClick,this)),D(document).on(o,this.onGlobalKeyup=M(this.globalKeyup,this)),i&&D(document).on(f,this.onTouchStart=M(this.touchstart,this)),this.place()))},hide:function(){this.shown&&(this.trigger(h).isDefaultPrevented()||(this.shown=!1,this.$picker.addClass(g).off(n,this.click),this.inline||(this.$scrollParent.off(u,this.place),D(window).off(d,this.onResize),D(document).off(n,this.onGlobalClick),D(document).off(o,this.onGlobalKeyup),i&&D(document).off(f,this.onTouchStart))))},toggle:function(){this.shown?this.hide():this.show()},update:function(){var t=this.getValue();t!==this.oldValue&&(this.setDate(t,!0),this.oldValue=t)},pick:function(t){var e=this.$element,i=this.date;this.trigger(l,{view:t||"",date:i}).isDefaultPrevented()||(i=this.formatDate(this.date),this.setValue(i),this.isInput&&(e.trigger("input"),e.trigger("change")))},reset:function(){this.setDate(this.initialDate,!0),this.setValue(this.initialValue),this.shown&&this.showView(this.options.startView)},getMonthName:function(t,e){var i=this.options,a=i.monthsShort,s=i.months;return D.isNumeric(t)?t=Number(t):x(e)&&(e=t),!0===e&&(s=a),s[$(t)?t:this.date.getMonth()]},getDayName:function(t,e,i){var a=this.options,s=a.days;return D.isNumeric(t)?t=Number(t):(x(i)&&(i=e),x(e)&&(e=t)),i?s=a.daysMin:e&&(s=a.daysShort),s[$(t)?t:this.date.getDay()]},getDate:function(t){var e=this.date;return t?this.formatDate(e):new Date(e)},setDate:function(t,e){var i=this.options.filter;if(F(t)||b(t)){if(t=this.parseDate(t),D.isFunction(i)&&!1===i.call(this.$element,t,"day"))return;this.date=t,this.viewDate=new Date(t),e||this.pick(),this.built&&this.render()}},setStartDate:function(t){F(t)||b(t)?this.startDate=this.parseDate(t):this.startDate=null,this.built&&this.render()},setEndDate:function(t){F(t)||b(t)?this.endDate=this.parseDate(t):this.endDate=null,this.built&&this.render()},parseDate:function(a){var s=this.format,t=[];return F(a)||(b(a)&&(t=a.match(I)||[]),F(a=a?new Date(a):new Date)||(a=new Date),t.length===s.parts.length&&D.each(t,function(t,e){var i=parseInt(e,10);switch(s.parts[t]){case"dd":case"d":a.setDate(i);break;case"mm":case"m":a.setMonth(i-1);break;case"yy":a.setFullYear(2e3+i);break;case"yyyy":a.setFullYear(2===e.length?2e3+i:i)}})),new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatDate:function(t){var e=this.format,i="";if(F(t)){var a=t.getFullYear(),s=t.getMonth(),n=t.getDate(),r={d:n,dd:S(n,2),m:s+1,mm:S(s+1,2),yy:String(a).substring(2),yyyy:S(a,4)};i=e.source,D.each(e.parts,function(t,e){i=i.replace(e,r[e])})}return i},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(c)}},N={click:function(t){var e=D(t.target),i=this.options,a=this.date,s=this.viewDate,n=this.format;if(t.stopPropagation(),t.preventDefault(),!e.hasClass("disabled")){var r=e.data("view"),h=s.getFullYear(),o=s.getMonth(),l=s.getDate();switch(r){case"years prev":case"years next":h="years prev"===r?h-10:h+10,s.setFullYear(h),s.setDate(V(h,o,l)),this.renderYears();break;case"year prev":case"year next":h="year prev"===r?h-1:h+1,s.setFullYear(h),s.setDate(V(h,o,l)),this.renderMonths();break;case"year current":n.hasYear&&this.showView(w);break;case"year picked":n.hasMonth?this.showView(v):(e.siblings(".".concat(i.pickedClass)).removeClass(i.pickedClass).data("view","year"),this.hideView()),this.pick("year");break;case"year":h=parseInt(e.text(),10),a.setDate(V(h,o,l)),a.setFullYear(h),s.setDate(V(h,o,l)),s.setFullYear(h),n.hasMonth?this.showView(v):(e.addClass(i.pickedClass).data("view","year picked").siblings(".".concat(i.pickedClass)).removeClass(i.pickedClass).data("view","year"),this.hideView()),this.pick("year");break;case"month prev":case"month next":(o="month prev"===r?o-1:o+1)<0?(h-=1,o+=12):11<o&&(h+=1,o-=12),s.setFullYear(h),s.setDate(V(h,o,l)),s.setMonth(o),this.renderDays();break;case"month current":n.hasMonth&&this.showView(v);break;case"month picked":n.hasDay?this.showView(m):(e.siblings(".".concat(i.pickedClass)).removeClass(i.pickedClass).data("view","month"),this.hideView()),this.pick("month");break;case"month":o=D.inArray(e.text(),i.monthsShort),a.setFullYear(h),a.setDate(V(h,o,l)),a.setMonth(o),s.setFullYear(h),s.setDate(V(h,o,l)),s.setMonth(o),n.hasDay?this.showView(m):(e.addClass(i.pickedClass).data("view","month picked").siblings(".".concat(i.pickedClass)).removeClass(i.pickedClass).data("view","month"),this.hideView()),this.pick("month");break;case"day prev":case"day next":case"day":"day prev"===r?o-=1:"day next"===r&&(o+=1),l=parseInt(e.text(),10),a.setDate(1),a.setFullYear(h),a.setMonth(o),a.setDate(l),s.setDate(1),s.setFullYear(h),s.setMonth(o),s.setDate(l),this.renderDays(),"day"===r&&this.hideView(),this.pick("day");break;case"day picked":this.hideView(),this.pick("day")}}},globalClick:function(t){for(var e=t.target,i=this.element,a=this.$trigger[0],s=!0;e!==document;){if(e===a||e===i){s=!1;break}e=e.parentNode}s&&this.hide()},keyup:function(){this.update()},globalKeyup:function(t){var e=t.target,i=t.key,a=t.keyCode;this.isInput&&e!==this.element&&this.shown&&("Tab"===i||9===a)&&this.hide()},touchstart:function(t){var e=t.target;this.isInput&&e!==this.element&&!D.contains(this.$picker[0],e)&&(this.hide(),this.element.blur())}},j={render:function(){this.renderYears(),this.renderMonths(),this.renderDays()},renderWeek:function(){var i=this,a=[],t=this.options,e=t.weekStart,s=t.daysMin;e=parseInt(e,10)%7,s=s.slice(e).concat(s.slice(0,e)),D.each(s,function(t,e){a.push(i.createItem({text:e}))}),this.$week.html(a.join(""))},renderYears:function(){var t,e=this.options,i=this.startDate,a=this.endDate,s=e.disabledClass,n=e.filter,r=e.yearSuffix,h=this.viewDate.getFullYear(),o=(new Date).getFullYear(),l=this.date.getFullYear(),c=[],d=!1,u=!1;for(t=-5;t<=6;t+=1){var p=new Date(h+t,1,1),f=!1;i&&(f=p.getFullYear()<i.getFullYear(),-5===t&&(d=f)),!f&&a&&(f=p.getFullYear()>a.getFullYear(),6===t&&(u=f)),!f&&n&&(f=!1===n.call(this.$element,p,"year"));var g=h+t===l,y=g?"year picked":"year";c.push(this.createItem({picked:g,disabled:f,text:h+t,view:f?"year disabled":y,highlighted:p.getFullYear()===o}))}this.$yearsPrev.toggleClass(s,d),this.$yearsNext.toggleClass(s,u),this.$yearsCurrent.toggleClass(s,!0).html("".concat(h+-5+r," - ").concat(h+6).concat(r)),this.$years.html(c.join(""))},renderMonths:function(){var t,e=this.options,i=this.startDate,a=this.endDate,s=this.viewDate,n=e.disabledClass||"",r=e.monthsShort,h=D.isFunction(e.filter)&&e.filter,o=s.getFullYear(),l=new Date,c=l.getFullYear(),d=l.getMonth(),u=this.date.getFullYear(),p=this.date.getMonth(),f=[],g=!1,y=!1;for(t=0;t<=11;t+=1){var m=new Date(o,t,1),v=!1;i&&(v=(g=m.getFullYear()===i.getFullYear())&&m.getMonth()<i.getMonth()),!v&&a&&(v=(y=m.getFullYear()===a.getFullYear())&&m.getMonth()>a.getMonth()),!v&&h&&(v=!1===h.call(this.$element,m,"month"));var w=o===u&&t===p,k=w?"month picked":"month";f.push(this.createItem({disabled:v,picked:w,highlighted:o===c&&m.getMonth()===d,index:t,text:r[t],view:v?"month disabled":k}))}this.$yearPrev.toggleClass(n,g),this.$yearNext.toggleClass(n,y),this.$yearCurrent.toggleClass(n,g&&y).html(o+e.yearSuffix||""),this.$months.html(f.join(""))},renderDays:function(){var t,e,i,a=this.$element,s=this.options,n=this.startDate,r=this.endDate,h=this.viewDate,o=this.date,l=s.disabledClass,c=s.filter,d=s.months,u=s.weekStart,p=s.yearSuffix,f=h.getFullYear(),g=h.getMonth(),y=new Date,m=y.getFullYear(),v=y.getMonth(),w=y.getDate(),k=o.getFullYear(),D=o.getMonth(),b=o.getDate(),C=[],$=f,x=g,F=!1;0===g?($-=1,x=11):x-=1,t=G($,x);var M=new Date(f,g,1);for((i=M.getDay()-parseInt(u,10)%7)<=0&&(i+=7),n&&(F=M.getTime()<=n.getTime()),e=t-(i-1);e<=t;e+=1){var Y=new Date($,x,e),V=!1;n&&(V=Y.getTime()<n.getTime()),!V&&c&&(V=!1===c.call(a,Y,"day")),C.push(this.createItem({disabled:V,highlighted:$===m&&x===v&&Y.getDate()===w,muted:!0,picked:$===k&&x===D&&e===b,text:e,view:"day prev"}))}var T=[],S=f,I=g,P=!1;11===g?(S+=1,I=0):I+=1,t=G(f,g),i=42-(C.length+t);var N=new Date(f,g,t);for(r&&(P=N.getTime()>=r.getTime()),e=1;e<=i;e+=1){var j=new Date(S,I,e),q=S===k&&I===D&&e===b,A=!1;r&&(A=j.getTime()>r.getTime()),!A&&c&&(A=!1===c.call(a,j,"day")),T.push(this.createItem({disabled:A,picked:q,highlighted:S===m&&I===v&&j.getDate()===w,muted:!0,text:e,view:"day next"}))}var O=[];for(e=1;e<=t;e+=1){var W=new Date(f,g,e),z=!1;n&&(z=W.getTime()<n.getTime()),!z&&r&&(z=W.getTime()>r.getTime()),!z&&c&&(z=!1===c.call(a,W,"day"));var J=f===k&&g===D&&e===b,E=J?"day picked":"day";O.push(this.createItem({disabled:z,picked:J,highlighted:f===m&&g===v&&W.getDate()===w,text:e,view:z?"day disabled":E}))}this.$monthPrev.toggleClass(l,F),this.$monthNext.toggleClass(l,P),this.$monthCurrent.toggleClass(l,F&&P).html(s.yearFirst?"".concat(f+p," ").concat(d[g]):"".concat(d[g]," ").concat(f).concat(p)),this.$days.html(C.join("")+O.join("")+T.join(""))}},q="".concat(c,"-top-left"),A="".concat(c,"-top-right"),O="".concat(c,"-bottom-left"),W="".concat(c,"-bottom-right"),z=[q,A,O,W].join(" "),J=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=D(t),this.element=t,this.options=D.extend({},s,y[e.language],D.isPlainObject(e)&&e),this.$scrollParent=function(t,e){var i=1<arguments.length&&void 0!==e&&e,a=D(t),s=a.css("position"),n="absolute"===s,r=i?/auto|scroll|hidden/:/auto|scroll/,h=a.parents().filter(function(t,e){var i=D(e);return(!n||"static"!==i.css("position"))&&r.test(i.css("overflow")+i.css("overflow-y")+i.css("overflow-x"))}).eq(0);return"fixed"!==s&&h.length?h:D(t.ownerDocument||document)}(t,!0),this.built=!1,this.shown=!1,this.isInput=!1,this.inline=!1,this.initialValue="",this.initialDate=null,this.startDate=null,this.endDate=null,this.init()}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(i,[{key:"init",value:function(){var t=this.$element,e=this.options,i=e.startDate,a=e.endDate,s=e.date;this.$trigger=D(e.trigger),this.isInput=t.is("input")||t.is("textarea"),this.inline=e.inline&&(e.container||!this.isInput),this.format=function(i){var t=String(i).toLowerCase(),e=t.match(T);if(!e||0===e.length)throw new Error("Invalid date format.");return i={source:t,parts:e},D.each(e,function(t,e){switch(e){case"dd":case"d":i.hasDay=!0;break;case"mm":case"m":i.hasMonth=!0;break;case"yyyy":case"yy":i.hasYear=!0}}),i}(e.format);var n=this.getValue();this.initialValue=n,this.oldValue=n,s=this.parseDate(s||n),i&&(i=this.parseDate(i),s.getTime()<i.getTime()&&(s=new Date(i)),this.startDate=i),a&&(a=this.parseDate(a),i&&a.getTime()<i.getTime()&&(a=new Date(i)),s.getTime()>a.getTime()&&(s=new Date(a)),this.endDate=a),this.date=s,this.viewDate=new Date(s),this.initialDate=new Date(this.date),this.bind(),(e.autoShow||this.inline)&&this.show(),e.autoPick&&this.pick()}},{key:"build",value:function(){if(!this.built){this.built=!0;var t=this.$element,e=this.options,i=D(e.template);this.$picker=i,this.$week=i.find(Y("week")),this.$yearsPicker=i.find(Y("years picker")),this.$yearsPrev=i.find(Y("years prev")),this.$yearsNext=i.find(Y("years next")),this.$yearsCurrent=i.find(Y("years current")),this.$years=i.find(Y("years")),this.$monthsPicker=i.find(Y("months picker")),this.$yearPrev=i.find(Y("year prev")),this.$yearNext=i.find(Y("year next")),this.$yearCurrent=i.find(Y("year current")),this.$months=i.find(Y("months")),this.$daysPicker=i.find(Y("days picker")),this.$monthPrev=i.find(Y("month prev")),this.$monthNext=i.find(Y("month next")),this.$monthCurrent=i.find(Y("month current")),this.$days=i.find(Y("days")),this.inline?D(e.container||t).append(i.addClass("".concat(c,"-inline"))):(D(document.body).append(i.addClass("".concat(c,"-dropdown"))),i.addClass(g).css({zIndex:parseInt(e.zIndex,10)})),this.renderWeek()}}},{key:"unbuild",value:function(){this.built&&(this.built=!1,this.$picker.remove())}},{key:"bind",value:function(){var t=this.options,e=this.$element;D.isFunction(t.show)&&e.on(p,t.show),D.isFunction(t.hide)&&e.on(h,t.hide),D.isFunction(t.pick)&&e.on(l,t.pick),this.isInput&&e.on(o,D.proxy(this.keyup,this)),this.inline||(t.trigger?this.$trigger.on(n,D.proxy(this.toggle,this)):this.isInput?e.on(r,D.proxy(this.show,this)):e.on(n,D.proxy(this.show,this)))}},{key:"unbind",value:function(){var t=this.$element,e=this.options;D.isFunction(e.show)&&t.off(p,e.show),D.isFunction(e.hide)&&t.off(h,e.hide),D.isFunction(e.pick)&&t.off(l,e.pick),this.isInput&&t.off(o,this.keyup),this.inline||(e.trigger?this.$trigger.off(n,this.toggle):this.isInput?t.off(r,this.show):t.off(n,this.show))}},{key:"showView",value:function(t){var e=this.$yearsPicker,i=this.$monthsPicker,a=this.$daysPicker,s=this.format;if(s.hasYear||s.hasMonth||s.hasDay)switch(Number(t)){case w:i.addClass(g),a.addClass(g),s.hasYear?(this.renderYears(),e.removeClass(g),this.place()):this.showView(m);break;case v:e.addClass(g),a.addClass(g),s.hasMonth?(this.renderMonths(),i.removeClass(g),this.place()):this.showView(w);break;default:e.addClass(g),i.addClass(g),s.hasDay?(this.renderDays(),a.removeClass(g),this.place()):this.showView(v)}}},{key:"hideView",value:function(){!this.inline&&this.options.autoHide&&this.hide()}},{key:"place",value:function(){if(!this.inline){var t=this.$element,e=this.options,i=this.$picker,a=D(document).outerWidth(),s=D(document).outerHeight(),n=t.outerWidth(),r=t.outerHeight(),h=i.width(),o=i.height(),l=t.offset(),c=l.left,d=l.top,u=parseFloat(e.offset),p=q;C(u)&&(u=10),o<d&&s<d+r+o?(d-=o+u,p=O):d+=r+u,a<c+h&&(c+=n-h,p=p.replace("left","right")),i.removeClass(z).addClass(p).css({top:d,left:c})}}},{key:"trigger",value:function(t,e){var i=D.Event(t,e);return this.$element.trigger(i),i}},{key:"createItem",value:function(t){var e=this.options,i=e.itemTag,a={text:"",view:"",muted:!1,picked:!1,disabled:!1,highlighted:!1},s=[];return D.extend(a,t),a.muted&&s.push(e.mutedClass),a.highlighted&&s.push(e.highlightedClass),a.picked&&s.push(e.pickedClass),a.disabled&&s.push(e.disabledClass),"<".concat(i,' class="').concat(s.join(" "),'" data-view="').concat(a.view,'">').concat(a.text,"</").concat(i,">")}},{key:"getValue",value:function(){var t=this.$element;return this.isInput?t.val():t.text()}},{key:"setValue",value:function(t){var e=0<arguments.length&&void 0!==t?t:"",i=this.$element;this.isInput?i.val(e):this.inline&&!this.options.container||i.text(e)}}],[{key:"setDefaults",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};D.extend(s,y[e.language],D.isPlainObject(e)&&e)}}]),i}();if(D.extend&&D.extend(J.prototype,j,N,P),D.fn){var E=D.fn.datepicker;D.fn.datepicker=function(h){for(var t=arguments.length,o=new Array(1<t?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];var l;return this.each(function(t,e){var i=D(e),a="destroy"===h,s=i.data(c);if(!s){if(a)return;var n=D.extend({},i.data(),D.isPlainObject(h)&&h);s=new J(e,n),i.data(c,s)}if(b(h)){var r=s[h];D.isFunction(r)&&(l=r.apply(s,o),a&&i.removeData(c))}}),x(l)?this:l},D.fn.datepicker.Constructor=J,D.fn.datepicker.languages=y,D.fn.datepicker.setDefaults=J.setDefaults,D.fn.datepicker.noConflict=function(){return D.fn.datepicker=E,this}}});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(!(c<=0)){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),window.setTimeout(function(){d.$selection.focus()},0),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=this.options.get("translations").get("removeAllItems"),f=a('<span class="select2-selection__clear" title="'+e()+'">&times;</span>');c.StoreData(f[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(f)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;if(this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c){this.$element.find("[data-select2-tag]").length?this.$element.focus():this.$search.focus()}},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&(c.ctrlKey||c.metaKey)||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){function c(a,b){return b.toUpperCase()}var e=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));for(var f={},g=0;g<a[0].attributes.length;g++){var h=a[0].attributes[g].name,i="data-";if(h.substr(0,i.length)==i){var j=h.substring(i.length),k=d.GetData(a[0],j);f[j.replace(/-([a-z])/g,c)]=k}}b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset&&(f=b.extend(!0,{},a[0].dataset,f));var l=b.extend(!0,{},d.GetData(a[0]),f);l=d._convertData(l);for(var m in l)b.inArray(m,e)>-1||(b.isPlainObject(this.options[m])?b.extend(this.options[m],l[m]):this.options[m]=l[m]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
!function(f){if("undefined"!=typeof window){var e,l=0,m=!1,n=!1,p="message".length,b="[iFrameSizer]",y=b.length,v=null,r=window.requestAnimationFrame,g={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},F={},i=null,h={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClosed:function(){},onInit:function(){},onMessage:function(){O("onMessage function not defined")},onResized:function(){},onScroll:function(){return!0}},I={};window.jQuery&&((e=window.jQuery).fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(i){return this.filter("iframe").each(function(e,n){d(n,i)}).end()}):z("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof define&&define.amd?define([],B):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=B()),window.iFrameResize=window.iFrameResize||B()}function w(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function M(e,n,i){e.addEventListener(n,i,!1)}function x(e,n,i){e.removeEventListener(n,i,!1)}function o(e){return b+"["+(i="Host page: "+(n=e),window.top!==window.self&&(i=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),i)+"]";var n,i}function t(e){return F[e]?F[e].log:m}function k(e,n){a("log",e,n,t(e))}function z(e,n){a("info",e,n,t(e))}function O(e,n){a("warn",e,n,!0)}function a(e,n,i,t){!0===t&&"object"==typeof window.console&&console[e](o(n),i)}function s(n){function a(){e("Height"),e("Width"),j(function(){S(h),N(w),l("onResized",h)},h,"init")}function e(e){var n=Number(F[w]["max"+e]),i=Number(F[w]["min"+e]),t=e.toLowerCase(),o=Number(h[t]);k(w,"Checking "+t+" is in range "+i+"-"+n),o<i&&(o=i,k(w,"Set "+t+" to min value")),n<o&&(o=n,k(w,"Set "+t+" to max value")),h[t]=""+o}function s(e){return g.substr(g.indexOf(":")+p+e)}function d(i,t){var e,n,o;e=function(){var e,n;P("Send Page Info","pageInfo:"+(e=document.body.getBoundingClientRect(),n=h.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),i,t)},n=32,I[o=t]||(I[o]=setTimeout(function(){I[o]=null,e()},n))}function c(e){var n=e.getBoundingClientRect();return W(w),{x:Math.floor(Number(n.left)+Number(v.x)),y:Math.floor(Number(n.top)+Number(v.y))}}function u(e){var n=e?c(h.iframe):{x:0,y:0},i={x:Number(h.width)+n.x,y:Number(h.height)+n.y};k(w,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):O(w,"Unable to scroll to requested position, window.parentIFrame not found"):(v=i,f(),k(w,"--"))}function f(){!1!==l("onScroll",v)?N(w):C()}function l(e,n){return R(w,e,n)}var i,t,o,r,m,g=n.data,h={},w=null;"[iFrameResizerChild]Ready"===g?function(){for(var e in F)P("iFrame requested init",A(e),document.getElementById(e),e)}():b===(""+g).substr(0,y)&&g.substr(y).split(":")[0]in F?(m=g.substr(y).split(":"),h={iframe:F[m[0]]&&F[m[0]].iframe,id:m[0],height:m[1],width:m[2],type:m[3]},w=h.id,F[w]&&(F[w].loaded=!0),(r=h.type in{true:1,false:1,undefined:1})&&k(w,"Ignoring init message from meta parent page"),!r&&(o=!0,F[t=w]||(o=!1,O(h.type+" No settings for "+t+". Message was: "+g)),o)&&(k(w,"Received: "+g),i=!0,null===h.iframe&&(O(w,"IFrame ("+h.id+") not found"),i=!1),i&&function(){var e,i=n.origin,t=F[w]&&F[w].checkOrigin;if(t&&""+i!="null"&&!(t.constructor===Array?function(){var e=0,n=!1;for(k(w,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():(e=F[w]&&F[w].remoteHost,k(w,"Checking connection is from: "+e),i===e)))throw new Error("Unexpected message received from: "+i+" for "+h.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(F[w]&&F[w].firstRun&&F[w]&&(F[w].firstRun=!1),h.type){case"close":F[w].closeRequeston?R(w,"onCloseRequest",F[w].iframe):T(h.iframe);break;case"message":r=s(6),k(w,"onMessage passed: {iframe: "+h.iframe.id+", message: "+r+"}"),l("onMessage",{iframe:h.iframe,message:JSON.parse(r)}),k(w,"--");break;case"scrollTo":u(!1);break;case"scrollToOffset":u(!0);break;case"pageInfo":d(F[w]&&F[w].iframe,w),function(){function e(n,i){function t(){F[r]?d(F[r].iframe,r):o()}["scroll","resize"].forEach(function(e){k(r,n+e+" listener for sendPageInfo"),i(window,e,t)})}function o(){e("Remove ",x)}var r=w;e("Add ",M),F[r]&&(F[r].stopPageInfo=o)}();break;case"pageInfoStop":F[w]&&F[w].stopPageInfo&&(F[w].stopPageInfo(),delete F[w].stopPageInfo);break;case"inPageLink":e=s(9),i=e.split("#")[1]||"",t=decodeURIComponent(i),(o=document.getElementById(t)||document.getElementsByName(t)[0])?(n=c(o),k(w,"Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),v={x:n.x,y:n.y},f(),k(w,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(i):k(w,"In page link #"+i+" not found and window.parentIFrame not found"):k(w,"In page link #"+i+" not found");break;case"reset":H(h);break;case"init":a(),l("onInit",h.iframe);break;default:a()}var e,n,i,t,o,r}())):z(w,"Ignored: "+g)}function R(e,n,i){var t=null,o=null;if(F[e]){if("function"!=typeof(t=F[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function E(e){var n=e.id;delete F[n]}function T(e){var n=e.id;k(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){O(e)}R(n,"onClosed",n),k(n,"--"),E(e)}function W(e){null===v&&k(e,"Get page position: "+(v={x:window.pageXOffset!==f?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==f?window.pageYOffset:document.documentElement.scrollTop}).x+","+v.y)}function N(e){null!==v&&(window.scrollTo(v.x,v.y),k(e,"Set page position: "+v.x+","+v.y),C())}function C(){v=null}function H(e){k(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),W(e.id),j(function(){S(e),P("reset","reset",e.iframe,e.id)},e,"reset")}function S(i){function t(e){n||"0"!==i[e]||(n=!0,k(o,"Hidden iFrame detected, creating visibility listener"),function(){function n(){Object.keys(F).forEach(function(e){!function(n){function e(e){return"0px"===(F[n]&&F[n].iframe.style[e])}F[n]&&(i=F[n].iframe,null!==i.offsetParent)&&(e("height")||e("width"))&&P("Visibility change","resize",F[n].iframe,n);var i}(F[e])})}function e(e){k("window","Mutation observed: "+e[0].target+" "+e[0].type),c(n,16)}var i=w();i&&(t=document.querySelector("body"),o={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},new i(e).observe(t,o));var t,o}())}function e(e){var n;n=e,i.id?(i.iframe.style[n]=i[n]+"px",k(i.id,"IFrame ("+o+") "+n+" set to "+i[n]+"px")):k("undefined","messageData id not set"),t(e)}var o=i.iframe.id;F[o]&&(F[o].sizeHeight&&e("height"),F[o].sizeWidth&&e("width"))}function j(e,n,i){i!==n.type&&r?(k(n.id,"Requesting animation frame"),r(e)):e()}function P(e,n,i,t,o){var r,a=!1;t=t||i.id,F[t]&&(i&&"contentWindow"in i&&null!==i.contentWindow?(r=F[t]&&F[t].targetOrigin,k(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+r),i.contentWindow.postMessage(b+n,r)):O(t,"["+e+"] IFrame("+t+") not found"),o&&F[t]&&F[t].warningTimeout&&(F[t].msgTimeout=setTimeout(function(){!F[t]||F[t].loaded||a||(a=!0,O(t,"IFrame has not responded within "+F[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},F[t].warningTimeout)))}function A(e){return e+":"+F[e].bodyMarginV1+":"+F[e].sizeWidth+":"+F[e].log+":"+F[e].interval+":"+F[e].enablePublicMethods+":"+F[e].autoResize+":"+F[e].bodyMargin+":"+F[e].heightCalculationMethod+":"+F[e].bodyBackground+":"+F[e].bodyPadding+":"+F[e].tolerance+":"+F[e].inPageLinks+":"+F[e].resizeFrom+":"+F[e].widthCalculationMethod}function d(i,e){function n(e){var n=e.split("Callback");if(2===n.length){var i="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[i]=this[e],delete this[e],O(u,"Deprecated: '"+e+"' has been renamed '"+i+"'. The old method will be removed in the next major version.")}}var t,o,r,a,s,d,c,u=(""===(t=i.id)&&(i.id=(o=e&&e.id||h.id+l++,null!==document.getElementById(o)&&(o+=l++),t=o),m=(e||{}).log,k(t,"Added missing iframe ID: "+t+" ("+i.src+")")),t);u in F&&"iFrameResizer"in i?O(u,"Ignored iFrame, already setup."):(d=(d=e)||{},F[u]={firstRun:!0,iframe:i,remoteHost:i.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(d),Object.keys(d).forEach(n,d),function(e){for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(F[u][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:h[n])}(d),F[u]&&(F[u].targetOrigin=!0===F[u].checkOrigin?""===(c=F[u].remoteHost)||"file://"===c?"*":c:"*"),function(){switch(k(u,"IFrame scrolling "+(F[u]&&F[u].scrolling?"enabled":"disabled")+" for "+u),i.style.overflow=!1===(F[u]&&F[u].scrolling)?"hidden":"auto",F[u]&&F[u].scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=F[u]?F[u].scrolling:"no"}}(),function(){function e(e){1/0!==F[u][e]&&0!==F[u][e]&&(i.style[e]=F[u][e]+"px",k(u,"Set "+e+"="+F[u][e]+"px"))}function n(e){if(F[u]["min"+e]>F[u]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),"number"!=typeof(F[u]&&F[u].bodyMargin)&&"0"!==(F[u]&&F[u].bodyMargin)||(F[u].bodyMarginV1=F[u].bodyMargin,F[u].bodyMargin=F[u].bodyMargin+"px"),r=A(u),(s=w())&&(a=s,i.parentNode&&new a(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===i&&T(i)})})}).observe(i.parentNode,{childList:!0})),M(i,"load",function(){var e,n;P("iFrame.onload",r,i,f,!0),e=F[u]&&F[u].firstRun,n=F[u]&&F[u].heightCalculationMethod in g,!e&&n&&H({iframe:i,height:0,width:0,type:"init"})}),P("init",r,i,f,!0),F[u]&&(F[u].iframe.iFrameResizer={close:T.bind(null,F[u].iframe),removeListeners:E.bind(null,F[u].iframe),resize:P.bind(null,"Window resize","resize",F[u].iframe),moveToAnchor:function(e){P("Move to anchor","moveToAnchor:"+e,F[u].iframe,u)},sendMessage:function(e){P("Send Message","message:"+(e=JSON.stringify(e)),F[u].iframe,u)}}))}function c(e,n){null===i&&(i=setTimeout(function(){i=null,e()},n))}function u(){"hidden"!==document.visibilityState&&(k("document","Trigger event: Visiblity change"),c(function(){q("Tab Visable","resize")},16))}function q(i,t){Object.keys(F).forEach(function(e){var n;F[n=e]&&"parent"===F[n].resizeFrom&&F[n].autoResize&&!F[n].firstRun&&P(i,t,document.getElementById(e),e)})}function L(){M(window,"message",s),M(window,"resize",function(){var e;k("window","Trigger event: "+(e="resize")),c(function(){q("Window "+e,"resize")},16)}),M(document,"visibilitychange",u),M(document,"-webkit-visibilitychange",u)}function B(){function t(e,n){n&&(!function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),d(n,e),o.push(n))}var o;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!r;e+=1)r=window[n[e]+"RequestAnimationFrame"];r||k("setup","RequestAnimationFrame not supported")}(),L(),function(e,n){var i;switch(o=[],(i=e)&&i.enablePublicMethods&&O("enablePublicMethods option has been removed, public methods are now always available in the iFrame"),typeof n){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(n||"iframe"),t.bind(f,e));break;case"object":t(e,n);break;default:throw new TypeError("Unexpected data type ("+typeof n+")")}return o}}}();