(function(){var h={},mt={},c={id:"37d38f2c56ce7310184a439e963f49a0",dm:["ncnantai.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:10176878,qiao:10176878,lxb:10176878,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,w=!1;mt.i={};mt.i.ya=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.wa=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Aa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,e){var d;e.G&&(d=new Date,d.setTime(d.getTime()+e.G));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Ya?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.o={};mt.o.R=function(a){return document.getElementById(a)};mt.o.Ra=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};
(mt.o.M=function(){function a(){if(!a.B){a.B=s;for(var b=0,e=d.length;b<e;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var e=w,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,w);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=s,"complete"===document.readyState)a.B=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=w;try{d=window.frameElement==t}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.B?b():d.push(b)}}()).B=w;mt.event={};mt.event.c=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(b,e,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.k={};mt.k.parse=function(){return(new Function('return (" + source + ")'))()};
mt.k.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],l=d.length,n,f,k;for(f=0;f<l;f++)switch(k=d[f],typeof k){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.k.stringify(k)),n=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];f=mt.k.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(k=
d[l],typeof k){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(l)+":"+f(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Va=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Xa=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.D=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return w}return s};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.D()&&(mt.localStorage.g.expires=d.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,b),mt.localStorage.g.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.D())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(d){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.D())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Y={};mt.Y.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=t;e=window[d]=t;b&&b(a)};e.src=a};mt.O={};
mt.O.pa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.O.Qa=function(a,b,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.f=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Ta=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.ma=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.T=function(a){return(a=mt.url.ma(a))?a.replace(/:\d+$/,""):a};mt.url.Sa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=w,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,g=0;g<d;g++){var l=e[g].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.ka=a})();var x=h.ka;
h.j={Ua:"http://tongji.baidu.com/hm-web/welcome/ico",X:"hm.baidu.com/hm.gif",ba:"baidu.com",ta:"hmmd",ua:"hmpl",Ja:"utm_medium",sa:"hmkw",La:"utm_term",qa:"hmci",Ia:"utm_content",va:"hmsr",Ka:"utm_source",ra:"hmcu",Ha:"utm_campaign",p:0,l:Math.round(+new Date/1E3),P:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",K:x()||"https:"===document.location.protocol?"https:":"http:",Wa:0,Na:6E5,Oa:10,Pa:1024,Ma:1,w:2147483647,Z:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn u tt".split(" ")};
(function(){var a={m:{},c:function(a,e){this.m[a]=this.m[a]||[];this.m[a].push(e)},z:function(a,e){this.m[a]=this.m[a]||[];for(var d=this.m[a].length,g=0;g<d;g++)this.m[a][g](e)}};return h.r=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,e=mt.sessionStorage;return h.Q=a})();
(function(){var a=mt.o,b=h.j,e=h.load,d=h.Q;h.r.c("pv-b",function(){c.rec&&a.M(function(){for(var g=0,l=c.rp.length;g<l;g++){var n=c.rp[g][0],f=c.rp[g][1],k=a.R("hm_t_"+n);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.w),k=4==f?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+n,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),e(k)}})})})();(function(){var a=h.j,b=h.load,e=h.Q;h.r.c("pv-b",function(){if(c.trust&&c.vcard){var d="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.w),"hm=1"].join("&");b(d)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.F.na()+","+h.F.la();h.b.h()}}function b(){clearTimeout(B);var a;z&&(a="visible"==document[z]);C&&(a=!document[C]);f="undefined"==typeof a?s:a;if((!n||!k)&&f&&m)u=s,p=+new Date;else if(n&&k&&(!f||!m))u=w,q+=+new Date-p;n=f;k=m;B=setTimeout(b,100)}function e(a){var p=document,k="";if(a in p)k=a;else for(var b=["webkit","ms","moz","o"],m=0;m<b.length;m++){var q=b[m]+a.charAt(0).toUpperCase()+a.slice(1);if(q in p){k=
q;break}}return k}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?s:w,b()}var g=mt.event,l=h.r,n=s,f=s,k=s,m=s,v=+new Date,p=v,q=0,u=s,z=e("visibilityState"),C=e("hidden"),B;b();(function(){var a=z.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.F={na:function(){return+new Date-v},la:function(){return u?+new Date-p+q:q}};l.c("pv-b",function(){g.c(window,"unload",a())});return h.F})();
(function(){var a=mt.lang,b=h.j,e=h.load,d={xa:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.H();e([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},Ga:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ea=d})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.d(d,"Object")||e.d(d,"Array")?a(d):k[b]=String(d)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,d=mt.k,g=h.j,l=h.r,n=h.ea,f={s:[],C:0,V:w,init:function(){f.e=0;l.c("pv-b",function(){f.fa();f.ha()});l.c("pv-d",f.ia);l.c("stag-b",function(){h.b.a.api=f.e||f.C?f.e+"_"+f.C:""});l.c("stag-d",function(){h.b.a.api=0;f.e=0;f.C=0})},fa:function(){var a=window._hmt||
[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var p=arguments[k];e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ha:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,q=b.length;p<q;p++){var e=b[p];
d.test(e[0])?f.s.push(e):f.L(e)}a.cmd[c.id]={push:f.L}},ia:function(){if(0<f.s.length)for(var a=0,b=f.s.length;a<b;a++)f.L(f.s[a]);f.s=t},L:function(a){var b=a[0];if(f.hasOwnProperty(b)&&e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||s===a))f.e|=2,h.b.U=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.I?(h.b.a.nv=0,h.b.a.st=
4):h.b.I=s;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];f.V||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],e=a[4]||3;if(0<d&&6>d&&0<e&&4>e){f.C++;for(var p=(h.b.a.cv||"*").split("!"),q=p.length;q<d-1;q++)p.push("*");p[d-1]=e+"*"+b(a[2])+
"*"+b(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.za("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.V=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(f.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},l=b.length;if(900>=l)m.call(this,b);else for(var l=Math.ceil(l/900),p="block|"+Math.round(Math.random()*
g.w).toString(16)+"|"+l+"|",q=[],u=0;u<l;u++)q.push(u),q.push(b.substring(900*u,900*u+900)),m.call(this,p+q.join("|")),q=[]}},_setUserId:function(a){a=a[1];n.xa();n.Ga(a)}};f.init();h.ca=f;return h.ca})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.U=s,this.I=w,this.init())}var b=mt.url,e=mt.Y,d=mt.O,g=mt.lang,l=mt.cookie,n=mt.i,f=mt.localStorage,k=mt.sessionStorage,m=h.j,v=h.r;a.prototype={J:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},W:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},A:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.W(a,c.dm[d]))return s}else{var e=b.T(a);if(e&&this.J(e,c.dm[d]))return s}return w},H:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.J(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},S:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.W(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},oa:function(){if(!document.referrer)return m.l-m.p>c.vdur?1:4;var a=
w;this.A(document.referrer)&&this.A(document.location.href)?a=s:(a=b.T(document.referrer),a=this.J(a||"",document.location.hostname));return a?m.l-m.p>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.H(),path:this.S(),G:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},za:function(a){try{l.set(a,"",{domain:this.H(),path:this.S(),G:-1}),k.remove(a),f.remove(a)}catch(b){}},Ea:function(){var a,b,d,e,f;m.p=this.getData("Hm_lpvt_"+
c.id)||0;13===m.p.length&&(m.p=Math.round(m.p/1E3));b=this.oa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.l-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.l);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.l,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.l);d=m.l===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.A(document.location.href)&&
(""===document.referrer||this.A(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},Da:function(){for(var a=[],b=this.a.et,d=0,e=m.Z.length;d<e;d++){var f=m.Z[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}switch(b){case 0:a.push("sn="+m.P);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+m.P);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Fa:function(){this.Ea();
this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Aa;this.a.cl=n.colorDepth+"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.pa();this.a.v="1.2.13";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.f(a,m.ta)||"";this.a.cp=b.f(a,m.ua)||b.f(a,m.Ja)||"";this.a.cw=b.f(a,m.sa)||b.f(a,m.La)||"";this.a.ci=b.f(a,
m.qa)||b.f(a,m.Ia)||"";this.a.cf=b.f(a,m.va)||b.f(a,m.Ka)||"";this.a.cu=b.f(a,m.ra)||b.f(a,m.Ha)||""},init:function(){try{this.Fa(),0===this.a.nv?this.Ca():this.N(".*"),h.b=this,this.da(),v.z("pv-b"),this.Ba()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.K+"//"+m.X+"?"+b.join("&"))}},Ba:function(){function a(){v.z("pv-d")}this.U?(this.I=s,this.a.et=0,this.a.ep="",this.h(a)):
a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.w);v.z("stag-b");var d=m.K+"//"+m.X+"?"+b.Da();v.z("stag-d");b.aa(d);e.log(d,function(d){b.N(d);g.d(a,"Function")&&a.call(b)})},da:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.ba),f=b.f(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*m.w),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset",
"utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},aa:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},N:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+
"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},Ca:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.K+"//"+decodeURIComponent(b),function(b){a.N(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();var y=h.j,A=h.load;if(c.apps){var D=[y.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);A(D.join(""))}var E=h.j,F=h.load;
if(c.conv&&"http:"===E.protocol){var G=["http://page.baidu.com/conversion_js.php?sid="];G.push(c.conv);F(G.join(""))}var H=h.j,I=h.load;c.lxb&&I([H.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var J=h.load,K=h.j.protocol;if(c.qiao){for(var L=[K+"//goutong.baidu.com/site/"],M=c.id,N=5381,O=M.length,P=0;P<O;P++)N=(33*N+Number(M.charCodeAt(P)))%4294967296;2147483648<N&&(N-=2147483648);L.push(N%1E3+"/");L.push(c.id+"/b.js");L.push("?siteId="+c.qiao);J(L.join(""))}
(function(){var a=mt.o,b=mt.event,e=mt.url,d=mt.k;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=t;a.M(function(){n=+new Date});var f=function(){var a,b,f;f=l("navigation");b=l("request");f={netAll:b.start-f.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-f.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=t;b=t;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])u=e.f(a,"qid"),b=e.f(a,"click_t");a=u;f.qid=a!=t?a:"";b!=t?(f.bdDom=n?n-b:0,f.bdRun=g-b,f.bdDef=l("navigation").start-b):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(f);h.b.h()};b.c(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=mt.i,b=mt.lang,e=mt.event,d=mt.k;if("undefined"!==typeof h.b&&(c.med||(!a.ya||7<a.wa)&&c.cvcc)){var g,l,n,f,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,e){var f={};f.n=g;f.t="clk";f.v=a;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";n.test(k)?(f.sn="mediate",
f.snv=k):b.d(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.h();for(f=+new Date;400>=+new Date-f;);};if(c.med)l="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";g="other";n=c.cvcc.q||r;var p=c.cvcc.id||r;f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],n!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||p.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof f&&"undefined"!==typeof n){var q;l+=/\/$/.test(l)?"":"/";var u=function(a,d){if(q===d)return v(l+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(l+a+"/"+(e+1),d[e]),w};e.c(document,"mousedown",function(a){a=a||window.event;q=a.target||a.srcElement;var d={};for(m(f,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&m(d,u)!==w;)q=q.parentNode})}}})();(function(){var a=mt.o,b=mt.lang,e=mt.event,d=mt.k;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={$:function(){for(var b=c.cvcf.length,d,f=0;f<b;f++)(d=a.R(decodeURIComponent(c.cvcf[f])))&&e.c(d,"click",g.ga())},ga:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.h()}}};a.M(function(){g.$()})}})();
(function(){var a=mt.event,b=mt.k;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.h()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-e;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
