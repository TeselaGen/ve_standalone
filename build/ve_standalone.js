!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function e(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function r(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function o(){}function a(n){return ha+n in this}function c(n){return n=ha+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===ga&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===ga)return!1;return!0}function h(){}function g(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=pa.length;r>e;++e){var u=pa[e]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new o;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function y(){Go.event.preventDefault()}function x(){for(var n,t=Go.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,e=0,r=arguments.length;++e<r;)t[arguments[e]]=m(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Go.event;u.target=n,Go.event=u,t[u.type].apply(e,r)}finally{Go.event=i}}},t}function _(n){return da(n,_a),n}function b(n){return"function"==typeof n?n:function(){return ma(n,this)}}function w(n){return"function"==typeof n?n:function(){return ya(n,this)}}function S(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Go.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Go.requote(n)+"(?:\\s+|$)","g")}function A(n){return n.trim().split(/^|\s+/)}function C(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=A(n).map(N);var u=n.length;return"function"==typeof t?r:e}function N(n){var t=E(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",k(u+" "+n))):e.setAttribute("class",k(u.replace(t," ")))}}function L(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function T(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function q(n){return"function"==typeof n?n:(n=Go.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function R(n){return function(){return Ma(this,n)}}function D(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function U(n){return da(n,wa),n}function j(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Qo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Go.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ka.get(n);return s&&(n=s,c=I),a?t?u:r:t?v:i}function O(n,t){return function(e){var r=Go.event;Go.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Go.event=r}}}function I(n,t){var e=O(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function Y(){var n=".dragsuppress-"+ ++Aa,t="click"+n,e=Go.select(ea).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(Ea){var r=ta.style,u=r[Ea];r[Ea]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),Ea&&(r[Ea]=u),i&&(e.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function V(){return Go.event.changedTouches[0].identifier}function $(){return Go.event.target}function X(){return ea}function B(n){return n>0?1:0>n?-1:0}function J(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function W(n){return n>1?0:-1>n?Ca:Math.acos(n)}function G(n){return n>1?La:-1>n?-La:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function et(){}function rt(n,t,e){return new ut(n,t,e)}function ut(n,t,e){this.h=n,this.s=t,this.l=e}function it(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,yt(u(n+120),u(n),u(n-120))}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.h=n,this.c=t,this.l=e}function ct(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),st(e,Math.cos(n*=za)*t,Math.sin(n)*t)}function st(n,t,e){return new lt(n,t,e)}function lt(n,t,e){this.l=n,this.a=t,this.b=e}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Za,r=gt(r)*Va,i=gt(i)*$a,yt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?ot(Math.atan2(e,t)*Ra,Math.sqrt(t*t+e*e),n):ot(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n){return yt(n>>16,255&n>>8,255&n)}function mt(n){return dt(n)+""}function yt(n,t,e){return new xt(n,t,e)}function xt(n,t,e){this.r=n,this.g=t,this.b=e}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _t(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ja.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),rt(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Za),u=pt((.2126729*n+.7151522*t+.072175*e)/Va),i=pt((.0193339*n+.119192*t+.9503041*e)/$a);return st(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Ct(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Go.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!ea.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Go.event;Go.event=n;try{o.progress.call(i,c)}finally{Go.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Qo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Go.rebind(i,o,"on"),null==r?i:i.get(Lt(r))}function Lt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Tt(){var n=qt(),t=zt()-n;t>24?(isFinite(t)&&(clearTimeout(Qa),Qa=setTimeout(Tt,t)),Ka=0):(Ka=1,tc(Tt))}function qt(){var n=Date.now();for(nc=Wa;nc;)n>=nc.t&&(nc.f=nc.c(n-nc.t)),nc=nc.n;return n}function zt(){for(var n,t=Wa,e=1/0;t;)t.f?t=n?n.n=t.n:Wa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Ga=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*fa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:At;return function(n){var e=rc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=uc.get(g)||Ut;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Go.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new oc(e-1)),1),e}function i(n,e){return t(n=new oc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{oc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{oc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ft(n);return c.floor=c,c.round=Ft(r),c.ceil=Ft(u),c.offset=Ft(i),c.range=a,n}function Ft(n){return function(t,e){try{oc=jt;var r=new jt;return r._=t,n(r,e)._}finally{oc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=cc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&oc!==jt,o=new(i?jt:oc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in cc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{oc=jt;var t=new oc;return t._=n,r(t)}finally{oc=Date}}var r=t(n);return e.parse=function(n){try{oc=jt;var t=r.parse(n);return t&&t._}finally{oc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Go.map(),M=Yt(v),_=Zt(v),b=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ic.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ic.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ic.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:l,S:re,U:$t,w:Vt,W:Xt,x:c,X:s,y:Jt,Y:Bt,Z:Wt,"%":oe};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(Go.requote).join("|")+")","i")}function Zt(n){for(var t=new o,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $t(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Xt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Wt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){sc.lastIndex=0;var r=sc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(fa(t)/60),u=fa(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function oe(n,t,e){lc.lastIndex=0;var r=lc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function se(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function le(n,t){n&&pc.hasOwnProperty(n.type)&&pc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=za,t=t*za/2+Ca/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);dc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;mc.point=function(o,a){mc.point=n,r=(t=o)*za,u=Math.cos(a=(e=a)*za/2+Ca/4),i=Math.sin(a)},mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function _e(n,t){return fa(n[0]-t[0])<Ta&&fa(n[1]-t[1])<Ta}function be(n,t){n*=za;var e=Math.cos(t*=za);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++yc,Mc+=(n-Mc)/yc,_c+=(t-_c)/yc,bc+=(e-bc)/yc}function Se(){function n(n,u){n*=za;var i=Math.cos(u*=za),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);xc+=s,wc+=s*(t+(t=o)),Sc+=s*(e+(e=a)),kc+=s*(r+(r=c)),we(t,e,r)}var t,e,r;Nc.point=function(u,i){u*=za;var o=Math.cos(i*=za);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Nc.point=n,we(t,e,r)}}function ke(){Nc.point=be}function Ee(){function n(n,t){n*=za;var e=Math.cos(t*=za),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-W(g)/h,v=Math.atan2(h,g);Ec+=p*s,Ac+=p*l,Cc+=p*f,xc+=v,wc+=v*(r+(r=o)),Sc+=v*(u+(u=a)),kc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Nc.point=function(o,a){t=o,e=a,Nc.point=n,o*=za;var c=Math.cos(a*=za);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Nc.lineEnd=function(){n(t,e),Nc.lineEnd=ke,Nc.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Le(e,n,null,!0),s=new Le(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new Le(r,n,null,!1),s=new Le(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Le(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Te(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(qe))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Go.merge(g);var n=De(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=ze(),M=t(x),_=!1;return y}}function qe(n){return n.length>1}function ze(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:v,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-La-Ta:La-n[1])-((t=t.x)[0]<0?t[1]-La-Ta:La-t[1])}function De(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;dc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Ca/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Ca/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ca,k=p*x;if(dc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Na:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*G(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ta>i||Ta>i&&0>dc)^1&o}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ca:-Ca,c=fa(i-e);fa(c-Ca)<Ta?(n.point(e,r=(r+o)/2>0?La:-La),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ca&&(fa(e-u)<Ta&&(e-=u*Ta),fa(i-a)<Ta&&(i-=a*Ta),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return fa(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*La,r.point(-Ca,u),r.point(0,u),r.point(Ca,u),r.point(Ca,0),r.point(Ca,-u),r.point(0,-u),r.point(-Ca,-u),r.point(-Ca,0),r.point(-Ca,u);else if(fa(n[0]-t[0])>Ta){var i=n[0]<t[0]?Ca:-Ca;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ca:-Ca),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=fa(A-Ca)<Ta,N=C||Ta>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(fa(_[0]-w)<Ta?k:E):k<=_[1]&&_[1]<=E:A>Ca^(w<=_[0]&&_[0]<=S)){var L=ye(d,(-m+M)/y);return me(L,p),[_,Me(L)]}}}function u(t,e){var r=o?n:Ca-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=fa(i)>Ta,c=gr(n,6*za);return Te(t,e,c,o?[0,-n]:[-Ca,n-Ca])}function Fe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return fa(r[0]-n)<Ta?u>0?0:3:fa(r[0]-e)<Ta?u>0?2:1:fa(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&J(s,i,n)>0&&++t:i[1]<=r&&J(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=ze(),C=Fe(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Go.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ie(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ye(n){var t=0,e=Ca/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ca/180,e=n[1]*Ca/180):[180*(t/Ca),180*(e/Ca)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,G((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){zc+=u*n-r*t,r=n,u=t}var t,e,r,u;jc.point=function(i,o){jc.point=n,t=r=i,e=u=o},jc.lineEnd=function(){n(t,e)}}function $e(n,t){Rc>n&&(Rc=n),n>Pc&&(Pc=n),Dc>t&&(Dc=t),t>Uc&&(Uc=t)}function Xe(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Je(n,t){Mc+=n,_c+=t,++bc}function We(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);wc+=o*(t+n)/2,Sc+=o*(e+r)/2,kc+=o,Je(t=n,e=r)}var t,e;Fc.point=function(r,u){Fc.point=n,Je(t=r,e=u)}}function Ge(){Fc.point=Je}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);wc+=o*(r+n)/2,Sc+=o*(u+t)/2,kc+=o,o=u*n-r*t,Ec+=o*(r+n),Ac+=o*(u+t),Cc+=3*o,Je(r=n,u=t)}var t,e,r,u;Fc.point=function(i,o){Fc.point=n,Je(t=r=i,e=u=o)},Fc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Na)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=fa(fa(w)-1)<Ta||fa(r-h)<Ta?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,T=N-e,q=x*L-y*T;(q*q/M>i||fa((y*L+x*T)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*za),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ra,e*Ra])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*za,n[1]*za),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ra,n[1]*Ra]}function r(){a=Ie(o=sr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()
}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Lc,_=At,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=or(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Lc):He((b=+n)*za),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*za,d=n[1]%360*za,r()):[v*Ra,d*Ra]},t.rotate=function(n){return arguments.length?(m=n[0]%360*za,y=n[1]%360*za,x=n.length>2?n[2]%360*za:0,r()):[m*Ra,y*Ra,x*Ra]},Go.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*za,e*za)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ca?n-Na:-Ca>n?n+Na:n,t]}function sr(n,t,e){return n?t||e?Ie(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function lr(n){return function(t,e){return t+=n,[t>Ca?t-Na:-Ca>t?t+Na:t,e]}}function fr(n){var t=lr(n);return t.invert=lr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),G(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),G(l*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Na)):(u=n+o*Na,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Me([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=W(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function vr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Go.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(tt(r-t)+u*o*tt(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ra,Math.atan2(o,Math.sqrt(r*r+u*u))*Ra]}:function(){return[n*Ra,t*Ra]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=za),o=Math.cos(u),a=fa((n*=za)-t),c=Math.cos(a);Oc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Ic.point=function(u,i){t=u*za,e=Math.sin(i*=za),r=Math.cos(i),Ic.point=n},Ic.lineEnd=function(){Ic.point=Ic.lineEnd=v}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-La+Ta>t&&(t=-La+Ta):t>La-Ta&&(t=La-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ca/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=B(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-La]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return fa(u)<Ta?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-B(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ca/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ca*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ca/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&J(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Lr(n,t){return n[0]-t[0]||n[1]-t[1]}function Tr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function qr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function zr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=ns.pop()||new Rr;return t.site=n,t}function Pr(n){$r(n),Gc.remove(n),ns.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&fa(e-c.circle.x)<Ta&&fa(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),$r(c);for(var s=o;s.circle&&fa(e-s.circle.x)<Ta&&fa(r-s.circle.cy)<Ta;)o=s.N,a.push(s),Pr(s),s=o;a.push(s),$r(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Kr(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Wr(c.site,s.site,null,u),Vr(c),Vr(s)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Gc._;a;)if(r=Hr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Fr(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Gc.insert(t,c),t||e){if(t===e)return $r(t),e=Dr(t.site),Gc.insert(c,e),c.edge=e.edge=Wr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Wr(t.site,c.site),void 0;$r(t),$r(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Kr(e.edge,s,p,M),c.edge=Wr(s,n,null,M),e.edge=Wr(n,p,null,M),Vr(t),Vr(e)}}function Hr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Fr(n,t){var e=n.N;if(e)return Hr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Wc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(fa(r-t)>Ta||fa(u-e)>Ta)&&(a.splice(o,0,new Qr(Gr(i.site,l,fa(r-f)<Ta&&p-u>Ta?{x:f,y:fa(t-f)<Ta?e:p}:fa(u-p)<Ta&&h-r>Ta?{x:fa(e-p)<Ta?t:h,y:p}:fa(r-h)<Ta&&u-g>Ta?{x:h,y:fa(t-h)<Ta?e:g}:fa(u-g)<Ta&&r-f>Ta?{x:fa(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-qa)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=ts.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Qc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Qc.insert(y,m),y||(Kc=m)}}}}function $r(n){var t=n.circle;t&&(t.P||(Kc=t.N),Qc.remove(t),ts.push(t),tu(t),n.circle=null)}function Xr(n){for(var t,e=Jc,r=Fe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||fa(t.a.x-t.b.x)<Ta&&fa(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Jr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Wr(n,t,e,r){var u=new Jr(n,t);return Jc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Wc[n.i].edges.push(new Qr(u,n,t)),Wc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Jr(n,null);return r.a=t,r.b=e,Jc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Jc=[],Wc=new Array(n.length),Gc=new nu,Qc=new nu;;)if(u=Kc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Wc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&(Xr(t),Ir(t));var o={cells:Wc,edges:Jc};return Gc=Qc=Jc=Wc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function su(n){return n.y}function lu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Go.rgb(n),t=Go.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+Mt(Math.round(e+i*n))+Mt(Math.round(r+o*n))+Mt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return t-=n=+n,function(e){return n+t*e}}function vu(n,t){var e,r,u,i=rs.lastIndex=us.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=rs.exec(n))&&(r=us.exec(t));)(u=r.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=us.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Go.interpolators.length;--r>=0&&!(e=Go.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*La)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Na*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Na/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tu(n,t){n=Go.hcl(n),t=Go.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Go.hsl(n),t=Go.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return it(e+i*n,r+o*n,u+a*n)+""}}function zu(n,t){n=Go.lab(n),t=Go.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ra,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ra:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=Go.transform(n),o=Go.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Fu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Ou(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Iu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Yu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Yu(n),r=Yu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Xu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Wu(n,t){return Go.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ni,n}function Gu(n){return n.children}function Ku(n){return n.value}function Qu(n,t){return t.value-n.value}function ni(n){return Go.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ti(n){return n.x}function ei(n){return n.y}function ri(n,t,e){n.y0=t,n.y=e}function ui(n){return Go.range(n.length)}function ii(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function oi(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ai(n){return n.reduce(ci,0)}function ci(n,t){return n+t[1]}function si(n,t){return li(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function li(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function fi(n){return[Go.min(n),Go.max(n)]}function hi(n,t){return n.parent==t.parent?1:2}function gi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function pi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function vi(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=vi(e[i],t),n)>0&&(n=r);return n}function di(n,t){return n.x-t.x}function mi(n,t){return t.x-n.x}function yi(n,t){return n.depth-t.depth}function xi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function Mi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function _i(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function bi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function wi(n,t){return n.value-t.value}function Si(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function ki(n,t){n._pack_next=t,t._pack_prev=n}function Ei(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Ai(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Ci),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ti(r,u,i),t(i),Si(r,i),r._pack_prev=i,Si(i,u),u=r._pack_next,o=3;s>o;o++){Ti(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Ei(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Ei(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?ki(r,u=a):ki(r=c,u),o--):(Si(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Ni)}}function Ci(n){n._pack_next=n._pack_prev=n}function Ni(n){delete n._pack_next,delete n._pack_prev}function Li(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Li(u[i],t,e,r)}function Ti(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function qi(n){return 1+Go.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ri(n){var t=n.children;return t&&t.length?Ri(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function Pi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ui(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function ji(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():ji(n.range())}function Fi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Oi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ii(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:vs}function Yi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Go.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Zi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Yi:Fi,c=r?Ou:Fu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Bi(n,t)},i.tickFormat=function(t,e){return Ji(n,t,e)},i.nice=function(t){return $i(n,t),u()},i.copy=function(){return Zi(n,t,e,r)},u()}function Vi(n,t){return Go.rebind(n,t,"range","rangeRound","interpolate","clamp")}function $i(n,t){return Oi(n,Ii(Xi(n,t)[2]))}function Xi(n,t){null==t&&(t=10);var e=ji(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Bi(n,t){return Go.range.apply(Go,Xi(n,t))}function Ji(n,t,e){var r=Xi(n,t);if(e){var u=rc.exec(e);if(u.shift(),"s"===u[8]){var i=Go.formatPrefix(Math.max(fa(r[0]),fa(r[1])));return u[7]||(u[7]="."+Wi(i.scale(r[2]))),u[8]="f",e=Go.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Gi(u[8],r)),e=u.join("")}else e=",."+Wi(r[2])+"f";return Go.format(e)}function Wi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Gi(n,t){var e=Wi(t[2]);return n in ds?Math.abs(e-Wi(Math.max(fa(t[0]),fa(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ki(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Oi(r.map(u),e?Math:ys);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=ji(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return ms;arguments.length<2?t=ms:"function"!=typeof t&&(t=Go.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ki(n.copy(),t,e,r)},Vi(o,n)}function Qi(n,t,e){function r(t){return n(u(t))}var u=no(t),i=no(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Bi(e,n)},r.tickFormat=function(n,t){return Ji(e,n,t)},r.nice=function(n){return r.domain($i(e,n))},r.exponent=function(o){return arguments.length?(u=no(t=o),i=no(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Qi(n.copy(),t,e)},Vi(r,n)}function no(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function to(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Go.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=r.length;++a<c;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=r(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=r(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=r(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return ji(t.a[0])},e.copy=function(){return to(n,t)},e.domain(n)}function eo(e,r){function u(){var n=0,t=r.length;for(o=[];++n<t;)o[n-1]=Go.quantile(e,n/t);return i}function i(n){return isNaN(n=+n)?void 0:r[Go.bisect(o,n)]}var o;return i.domain=function(r){return arguments.length?(e=r.filter(t).sort(n),u()):e},i.range=function(n){return arguments.length?(r=n,u()):r},i.quantiles=function(){return o},i.invertExtent=function(n){return n=r.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},i.copy=function(){return eo(e,r)},u()}function ro(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return ro(n,t,e)},u()}function uo(n,t){function e(e){return e>=e?t[Go.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return uo(n,t)},e}function io(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Bi(n,t)},t.tickFormat=function(t,e){return Ji(n,t,e)},t.copy=function(){return io(n)},t}function oo(n){return n.innerRadius}function ao(n){return n.outerRadius}function co(n){return n.startAngle}function so(n){return n.endAngle}function lo(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=Ar,r=Cr,u=Ae,i=fo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=ks.get(n)||fo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function fo(n){return n.join("L")}function ho(n){return fo(n)+"Z"}function go(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function po(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function mo(n,t){return n.length<4?fo(n):n[1]+Mo(n.slice(1,n.length-1),_o(n,t))}function yo(n,t){return n.length<3?fo(n):n[0]+Mo((n.push(n[0]),n),_o([n[n.length-2]].concat(n,[n[1]]),t))}function xo(n,t){return n.length<3?fo(n):n[0]+Mo(n,_o(n,t))}function Mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return fo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function _o(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function bo(n){if(n.length<3)return fo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Eo(Cs,o),",",Eo(Cs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Ao(c,o,a);return n.pop(),c.push("L",r),c.join("")}function wo(n){if(n.length<4)return fo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Eo(Cs,i)+","+Eo(Cs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Ao(e,i,o);return e.join("")}function So(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Eo(Cs,o),",",Eo(Cs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Ao(t,o,a);return t.join("")}function ko(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return bo(n)}function Eo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ao(n,t,e){n.push("C",Eo(Es,t),",",Eo(Es,e),",",Eo(As,t),",",Eo(As,e),",",Eo(Cs,t),",",Eo(Cs,e))}function Co(n,t){return(t[1]-n[1])/(t[0]-n[0])}function No(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=Co(u,i);++t<e;)r[t]=(o+(o=Co(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=No(n),a=-1,c=n.length-1;++a<c;)t=Co(n[a],n[a+1]),fa(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?fo(n):n[0]+Mo(n,Lo(n))}function qo(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ws,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=Et(e),_=Et(u),b=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=fo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=ks.get(n)||fo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ro(n){return n.radius}function Do(n){return[n.x,n.y]}function Po(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ws;return[e*Math.cos(r),e*Math.sin(r)]}}function Uo(){return 64}function jo(){return"circle"}function Ho(n){var t=Math.sqrt(n/Ca);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Fo(n,t){return da(n,Rs),n.id=t,n}function Oo(n,t,e,r){var u=n.id;return P(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Io(n){return null==n&&(n=""),function(){this.textContent=n}}function Yo(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var a=r.time;i=u[e]={tween:new o,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Go.timer(function(r){function o(r){return u.active>e?s():(u.active=e,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Go.timer(function(){return p.c=c(r||1)?Ae:c,1},0,a),void 0)}function c(r){if(u.active!==e)return s();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[e]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=nc,v=[];return p.t=h+a,r>=h?o(r-h):(p.c=o,void 0)},0,a)}}function Zo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Vo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function $o(n){return n.toISOString()}function Xo(n,t,e){function r(t){return n(t)
}function u(n,e){var r=n[1]-n[0],u=r/e,i=Go.bisect(Ys,u);return i==Ys.length?[t.year,Xi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ys[i-1]<Ys[i]/u?i-1:i]:[$s,Xi(n,e)[2]]}return r.invert=function(t){return Bo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Bo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Bo(+e+1),t).length}var i=r.domain(),o=ji(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Oi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Bo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Bo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=ji(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Bo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Xo(n.copy(),t,e)},Vi(r,n)}function Bo(n){return new Date(n)}function Jo(n){return JSON.parse(n.responseText)}function Wo(n){var t=na.createRange();return t.selectNode(na.body),t.createContextualFragment(n.responseText)}var Go={version:"3.4.6"};Date.now||(Date.now=function(){return+new Date});var Ko=[].slice,Qo=function(n){return Ko.call(n)},na=document,ta=na.documentElement,ea=window;try{Qo(ta.childNodes)[0].nodeType}catch(ra){Qo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{na.createElement("div").style.setProperty("opacity",0,"")}catch(ua){var ia=ea.Element.prototype,oa=ia.setAttribute,aa=ia.setAttributeNS,ca=ea.CSSStyleDeclaration.prototype,sa=ca.setProperty;ia.setAttribute=function(n,t){oa.call(this,n,t+"")},ia.setAttributeNS=function(n,t,e){aa.call(this,n,t,e+"")},ca.setProperty=function(n,t,e){sa.call(this,n,t+"",e)}}Go.ascending=n,Go.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Go.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Go.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Go.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Go.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Go.mean=function(n,e){var r,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(r=n[o])?u+=r:--a;else for(;++o<i;)t(r=e.call(n,n[o],o))?u+=r:--a;return a?u/a:void 0},Go.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Go.median=function(e,r){return arguments.length>1&&(e=e.map(r)),e=e.filter(t),e.length?Go.quantile(e.sort(n),.5):void 0};var la=e(n);Go.bisectLeft=la.left,Go.bisect=Go.bisectRight=la.right,Go.bisector=function(t){return e(1===t.length?function(e,r){return n(t(e),r)}:t)},Go.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Go.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Go.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Go.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Go.min(arguments,r),e=new Array(t);++n<t;)for(var u,i=-1,o=e[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return e},Go.transpose=function(n){return Go.zip.apply(Go,n)},Go.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Go.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Go.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Go.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var fa=Math.abs;Go.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,i=[],o=u(fa(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)i.push(r/o);else for(;(r=n+e*++a)<t;)i.push(r/o);return i},Go.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},i(o,{has:a,get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\x00",ga=ha.charCodeAt(0);Go.nest=function(){function n(t,a,c){if(c>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Go.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Go.set=function(n){var t=new h;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},i(h,{has:a,add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),Go.behavior={},Go.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=g(n,t,t[e]);return n};var pa=["webkit","ms","moz","Moz","o","O"];Go.dispatch=function(){for(var n=new d,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Go.event=null,Go.requote=function(n){return n.replace(va,"\\$&")};var va=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,da={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ma=function(n,t){return t.querySelector(n)},ya=function(n,t){return t.querySelectorAll(n)},xa=ta[p(ta,"matchesSelector")],Ma=function(n,t){return xa.call(n,t)};"function"==typeof Sizzle&&(ma=function(n,t){return Sizzle(n,t)[0]||null},ya=Sizzle,Ma=Sizzle.matchesSelector),Go.selection=function(){return Sa};var _a=Go.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return _(i)},_a.selectAll=function(n){var t,e,r=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Qo(n.call(e,e.__data__,a,u))),t.parentNode=e);return _(r)};var ba={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Go.ns={prefix:ba,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ba.hasOwnProperty(e)?{space:ba[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Go.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=A(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},_a.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(L(e,n[e],t));return this}if(2>r)return ea.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(L(n,t,e))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(T(t,n[t]));return this}return this.each(T(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=q(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=q(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},_a.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(r=-1;++r<a;)d=t.call(u=n[r],u.__data__,r),m.has(d)?v[r]=u:m.set(d,u),x.push(d);for(r=-1;++r<f;)d=t.call(e,i=e[r],r),(u=m.get(d))?(g[r]=u,u.__data__=i):y.has(d)||(p[r]=z(i)),y.set(d,i),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=z(i);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return _(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=D.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return P(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=Qo(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return this.each(function(){++n}),n};var wa=[];Go.selection.enter=U,Go.selection.enter.prototype=wa,wa.append=_a.append,wa.empty=_a.empty,wa.node=_a.node,wa.call=_a.call,wa.size=_a.size,wa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return _(o)},wa.insert=function(n,t){return arguments.length<2&&(t=j(this)),_a.insert.call(this,n,t)},_a.transition=function(){for(var n,t,e=Ls||++Ds,r=[],u=Ts||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Yo(t,c,e,u),n.push(t)}return Fo(r,e)},_a.interrupt=function(){return this.each(H)},Go.select=function(n){var t=["string"==typeof n?ma(n,na):n];return t.parentNode=ta,_([t])},Go.selectAll=function(n){var t=Qo("string"==typeof n?ya(n,na):n);return t.parentNode=ta,_([t])};var Sa=Go.select(ta);_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(F(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(F(n,t,e))};var ka=Go.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in na&&ka.remove(n)});var Ea="onselectstart"in na?null:p(ta.style,"userSelect"),Aa=0;Go.mouse=function(n){return Z(n,x())},Go.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Qo(t).map(function(t){var e=Z(n,t);return e.identifier=t.identifier,e}):[]},Go.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+s[0],y:r[1]+s[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Go.event.target===f),g({type:"dragend"}))}var s,l=this,f=Go.event.target,h=l.parentNode,g=e.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Go.select(u()).on(i+d,a).on(o+d,c),y=Y(),x=t(h,v);r?(s=r.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var e=M(n,"drag","dragstart","dragend"),r=null,u=t(v,Go.mouse,X,"mousemove","mouseup"),i=t(V,Go.touch,$,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Go.rebind(n,e,"on")};var Ca=Math.PI,Na=2*Ca,La=Ca/2,Ta=1e-6,qa=Ta*Ta,za=Ca/180,Ra=180/Ca,Da=Math.SQRT2,Pa=2,Ua=4;Go.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Q(v),o=i/(Pa*h)*(e*nt(Da*t+v)-K(v));return[r+o*s,u+o*l,i*e/Q(Da*t+v)]}return[r+n*s,u+n*l,i*Math.exp(Da*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ua*f)/(2*i*Pa*h),p=(c*c-i*i-Ua*f)/(2*c*Pa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Da;return e.duration=1e3*y,e},Go.behavior.zoom=function(){function n(n){n.on(A,s).on(Fa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Go.mouse(r),g),a(s)}function e(){f.on(C,ea===r?h:null).on(N,null),p(l&&Go.event.target===i),c(s)}var r=this,i=Go.event.target,s=T.of(r,arguments),l=0,f=Go.select(ea).on(C,n).on(N,e),g=t(Go.mouse(r)),p=Y();H.call(r),o(s)}function l(){function n(){var n=Go.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Go.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-m){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),y(),a(p)}m=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];d=h*h+g*g}}function i(){for(var n,t,e,i,o=Go.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Go.event.touches.length){for(var t=Go.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(x,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=T.of(g,arguments),v={},d=0,x=".zoom-"+Go.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=Go.select(Go.event.target).on(M,i).on(_,f),w=Go.select(g).on(A,null).on(L,e),k=Y();H.call(g),e(),o(p)}function f(){var n=T.of(this,arguments);d?clearTimeout(d):(H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y();var e=v||Go.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*ja())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=T.of(this,arguments),e=Go.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Go.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Ha,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",T=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=T.of(this,arguments),t=S;Ls?Go.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Go.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ha:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Go.rebind(n,T,"on")};var ja,Ha=[0,1/0],Fa="onwheel"in na?(ja=function(){return-Go.event.deltaY*(Go.event.deltaMode?120:1)},"wheel"):"onmousewheel"in na?(ja=function(){return Go.event.wheelDelta},"mousewheel"):(ja=function(){return-Go.event.detail},"MozMousePixelScroll");et.prototype.toString=function(){return this.rgb()+""},Go.hsl=function(n,t,e){return 1===arguments.length?n instanceof ut?rt(n.h,n.s,n.l):_t(""+n,bt,rt):rt(+n,+t,+e)};var Oa=ut.prototype=new et;Oa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,this.l/n)},Oa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),rt(this.h,this.s,n*this.l)},Oa.rgb=function(){return it(this.h,this.s,this.l)},Go.hcl=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.h,n.c,n.l):n instanceof lt?ht(n.l,n.a,n.b):ht((n=wt((n=Go.rgb(n)).r,n.g,n.b)).l,n.a,n.b):ot(+n,+t,+e)};var Ia=at.prototype=new et;Ia.brighter=function(n){return ot(this.h,this.c,Math.min(100,this.l+Ya*(arguments.length?n:1)))},Ia.darker=function(n){return ot(this.h,this.c,Math.max(0,this.l-Ya*(arguments.length?n:1)))},Ia.rgb=function(){return ct(this.h,this.c,this.l).rgb()},Go.lab=function(n,t,e){return 1===arguments.length?n instanceof lt?st(n.l,n.a,n.b):n instanceof at?ct(n.l,n.c,n.h):wt((n=Go.rgb(n)).r,n.g,n.b):st(+n,+t,+e)};var Ya=18,Za=.95047,Va=1,$a=1.08883,Xa=lt.prototype=new et;Xa.brighter=function(n){return st(Math.min(100,this.l+Ya*(arguments.length?n:1)),this.a,this.b)},Xa.darker=function(n){return st(Math.max(0,this.l-Ya*(arguments.length?n:1)),this.a,this.b)},Xa.rgb=function(){return ft(this.l,this.a,this.b)},Go.rgb=function(n,t,e){return 1===arguments.length?n instanceof xt?yt(n.r,n.g,n.b):_t(""+n,yt,it):yt(~~n,~~t,~~e)};var Ba=xt.prototype=new et;Ba.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),yt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):yt(u,u,u)},Ba.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),yt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Ba.hsl=function(){return bt(this.r,this.g,this.b)},Ba.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var Ja=Go.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ja.forEach(function(n,t){Ja.set(n,dt(t))}),Go.functor=Et,Go.xhr=Ct(At),Go.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new h,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Go.csv=Go.dsv(",","text/csv"),Go.tsv=Go.dsv("	","text/tab-separated-values"),Go.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=x().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return Z(n,r)};var Wa,Ga,Ka,Qa,nc,tc=ea[p(ea,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Go.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Ga?Ga.n=i:Wa=i,Ga=i,Ka||(Qa=clearTimeout(Qa),Ka=1,tc(Tt))},Go.timer.flush=function(){qt(),zt()},Go.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var ec=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Go.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Go.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),ec[8+e/3]};var rc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,uc=Go.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Go.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ic=Go.time={},oc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ac.setUTCDate.apply(this._,arguments)},setDay:function(){ac.setUTCDay.apply(this._,arguments)},setFullYear:function(){ac.setUTCFullYear.apply(this._,arguments)},setHours:function(){ac.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ac.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ac.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ac.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ac.setUTCSeconds.apply(this._,arguments)},setTime:function(){ac.setTime.apply(this._,arguments)}};var ac=Date.prototype;ic.year=Ht(function(n){return n=ic.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ic.years=ic.year.range,ic.years.utc=ic.year.utc.range,ic.day=Ht(function(n){var t=new oc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ic.days=ic.day.range,ic.days.utc=ic.day.utc.range,ic.dayOfYear=function(n){var t=ic.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ic[n]=Ht(function(n){return(n=ic.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ic[n+"s"]=e.range,ic[n+"s"].utc=e.utc.range,ic[n+"OfYear"]=function(n){var e=ic.year(n).getDay();return Math.floor((ic.dayOfYear(n)+(e+t)%7)/7)}}),ic.week=ic.sunday,ic.weeks=ic.sunday.range,ic.weeks.utc=ic.sunday.utc.range,ic.weekOfYear=ic.sundayOfYear;var cc={"-":"",_:" ",0:"0"},sc=/^\s*\d+/,lc=/^%/;Go.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var fc=Go.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Go.format=fc.numberFormat,Go.geo={},ce.prototype={s:0,t:0,add:function(n){se(n,this.t,hc),se(hc.s,this.s,this),this.s?this.t+=hc.t:this.s=hc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var hc=new ce;Go.geo.stream=function(n,t){n&&gc.hasOwnProperty(n.type)?gc[n.type](n,t):le(n,t)};var gc={Feature:function(n,t){le(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)le(e[r].geometry,t)}},pc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)le(e[r],t)}};Go.geo.area=function(n){return vc=0,Go.geo.stream(n,mc),vc};var vc,dc=new ce,mc={sphere:function(){vc+=4*Ca},point:v,lineStart:v,lineEnd:v,polygonStart:function(){dc.reset(),mc.lineStart=ge},polygonEnd:function(){var n=2*dc;vc+=0>n?4*Ca+n:n,mc.lineStart=mc.lineEnd=mc.point=v}};Go.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*za,e*za]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ra*s,d=fa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ra;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ra;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=fa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;mc.point(n,e),t(n,e)}function i(){mc.lineStart()}function o(){u(v,d),mc.lineEnd(),fa(y)>Ta&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,mc.polygonStart()},polygonEnd:function(){mc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>dc?(l=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Go.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);
for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Go.geo.centroid=function(n){yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,Nc);var t=Ec,e=Ac,r=Cc,u=t*t+e*e+r*r;return qa>u&&(t=wc,e=Sc,r=kc,Ta>xc&&(t=Mc,e=_c,r=bc),u=t*t+e*e+r*r,qa>u)?[0/0,0/0]:[Math.atan2(e,t)*Ra,G(r/Math.sqrt(u))*Ra]};var yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac,Cc,Nc={sphere:v,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Nc.lineStart=Ee},polygonEnd:function(){Nc.lineStart=Se}},Lc=Te(Ae,Pe,je,[-Ca,-Ca/2]),Tc=1e9;Go.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Go.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,Go.geo.albers=function(){return Go.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Go.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Go.geo.albers(),o=Go.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Go.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ta,f+.12*s+Ta],[l-.214*s-Ta,f+.234*s-Ta]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ta,f+.166*s+Ta],[l-.115*s-Ta,f+.234*s-Ta]]).stream(c).point,n},n.scale(1070)};var qc,zc,Rc,Dc,Pc,Uc,jc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){zc=0,jc.lineStart=Ve},polygonEnd:function(){jc.lineStart=jc.lineEnd=jc.point=v,qc+=fa(zc/2)}},Hc={point:$e,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Fc={point:Je,lineStart:We,lineEnd:Ge,polygonStart:function(){Fc.lineStart=Ke},polygonEnd:function(){Fc.point=Je,Fc.lineStart=We,Fc.lineEnd=Ge}};Go.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Go.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return qc=0,Go.geo.stream(n,u(jc)),qc},n.centroid=function(n){return Mc=_c=bc=wc=Sc=kc=Ec=Ac=Cc=0,Go.geo.stream(n,u(Fc)),Cc?[Ec/Cc,Ac/Cc]:kc?[wc/kc,Sc/kc]:bc?[Mc/bc,_c/bc]:[0/0,0/0]},n.bounds=function(n){return Pc=Uc=-(Rc=Dc=1/0),Go.geo.stream(n,u(Hc)),[[Rc,Dc],[Pc,Uc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):At,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Xe:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Go.geo.albersUsa()).context(null)},Go.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Go.geo.projection=ur,Go.geo.projectionMutator=ir,(Go.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Go.geo.rotation=function(n){function t(t){return t=n(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t}return n=sr(n[0]%360*za,n[1]*za,n.length>2?n[2]*za:0),t.invert=function(t){return t=n.invert(t[0]*za,t[1]*za),t[0]*=Ra,t[1]*=Ra,t},t},cr.invert=ar,Go.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=sr(-n[0]*za,-n[1]*za,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ra,n[1]*=Ra}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*za,u*za),n):t},n.precision=function(r){return arguments.length?(e=gr(t*za,(u=+r)*za),n):u},n.angle(90)},Go.geo.distance=function(n,t){var e,r=(t[0]-n[0])*za,u=n[1]*za,i=t[1]*za,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Go.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Go.range(Math.ceil(i/d)*d,u,d).map(h).concat(Go.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Go.range(Math.ceil(r/p)*p,e,p).filter(function(n){return fa(n%d)>Ta}).map(l)).concat(Go.range(Math.ceil(a/v)*v,o,v).filter(function(n){return fa(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=vr(a,o,90),f=dr(r,e,y),h=vr(s,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},Go.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Go.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Go.geo.interpolate=function(n,t){return xr(n[0]*za,n[1]*za,t[0]*za,t[1]*za)},Go.geo.length=function(n){return Oc=0,Go.geo.stream(n,Ic),Oc};var Oc,Ic={sphere:v,point:v,lineStart:Mr,lineEnd:v,polygonStart:v,polygonEnd:v},Yc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Go.geo.azimuthalEqualArea=function(){return ur(Yc)}).raw=Yc;var Zc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(Go.geo.azimuthalEquidistant=function(){return ur(Zc)}).raw=Zc,(Go.geo.conicConformal=function(){return Ye(br)}).raw=br,(Go.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var Vc=_r(function(n){return 1/n},Math.atan);(Go.geo.gnomonic=function(){return ur(Vc)}).raw=Vc,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-La]},(Go.geo.mercator=function(){return kr(Sr)}).raw=Sr;var $c=_r(function(){return 1},Math.asin);(Go.geo.orthographic=function(){return ur($c)}).raw=$c;var Xc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Go.geo.stereographic=function(){return ur(Xc)}).raw=Xc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-La]},(Go.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=Er,Go.geom={},Go.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(Lr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Nr(a),l=Nr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Go.geom.polygon=function(n){return da(n,Bc),n};var Bc=Go.geom.polygon.prototype=[];Bc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Bc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Bc.clip=function(n){for(var t,e,r,u,i,o,a=zr(n),c=-1,s=this.length-zr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Tr(o,l,u)?(Tr(i,l,u)||n.push(qr(i,o,l,u)),n.push(o)):Tr(i,l,u)&&n.push(qr(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Jc,Wc,Gc,Kc,Qc,ns=[],ts=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Go.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=es;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?es:n,t):a===es?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===es?null:a&&a[1]},t)};var es=[[-1e6,-1e6],[1e6,1e6]];Go.geom.delaunay=function(n){return Go.geom.voronoi().triangles(n)},Go.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(fa(c-e)+fa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=lu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=Et(a),M=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=lu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=su,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Go.interpolateRgb=hu,Go.interpolateObject=gu,Go.interpolateNumber=pu,Go.interpolateString=vu;var rs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,us=new RegExp(rs.source,"g");Go.interpolate=du,Go.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ja.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof et?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Go.interpolateArray=mu;var is=function(){return At},os=Go.map({linear:is,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return Lu}}),as=Go.map({"in":At,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Go.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=os.get(e)||is,r=as.get(r)||At,yu(r(e.apply(null,Ko.call(arguments,1))))},Go.interpolateHcl=Tu,Go.interpolateHsl=qu,Go.interpolateLab=zu,Go.interpolateRound=Ru,Go.transform=function(n){var t=na.createElementNS(Go.ns.prefix.svg,"g");return(Go.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:cs)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var cs={a:1,b:0,c:0,d:1,e:0,f:0};Go.interpolateTransform=Hu,Go.layout={},Go.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Iu(n[e]));return t}},Go.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Go.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Go.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Na-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Go.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Go.event.x,n.py=Go.event.y,a.resume()}var e,r,u,i,o,a={},c=Go.dispatch("start","tick","end"),s=[1,1],l=.9,f=ss,h=ls,g=-30,p=fs,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Ju(t=Go.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Go.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Go.behavior.drag().origin(At).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Xu).on("mouseout.force",Bu).call(e),void 0):e},Go.rebind(a,c,"on")};var ss=20,ls=1,fs=1/0;Go.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Qu,u=Gu,i=Ku;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Go.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Go.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Wu(e,r)},Go.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Go.sum(o),s=Go.range(i.length);null!=e&&s.sort(e===hs?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=hs,r=0,u=Na;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var hs={};Go.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Go.permute(s,f),l=Go.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=At,e=ui,r=ii,u=ri,i=ti,o=ei;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:gs.get(t)||ui,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ps.get(t)||ii,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var gs=Go.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(oi),i=n.map(ai),o=Go.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Go.range(n.length).reverse()},"default":ui}),ps=Go.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ii});Go.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Go.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=fi,u=si;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return li(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Go.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;Mi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=pi(a),i=gi(i),a&&i;)c=gi(c),o=pi(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(_i(bi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!pi(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!gi(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];xi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=vi(l,mi),h=vi(l,di),g=vi(l,yi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return xi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,xi(a,function(n){n.r=+l(n.value)}),xi(a,Ai),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;xi(a,function(n){n.r+=f}),xi(a,Ai),xi(a,function(n){n.r-=f})}return Li(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Go.layout.hierarchy().sort(wi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Wu(n,e)},Go.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;xi(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=qi(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ri(c),f=Di(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return xi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Go.layout.hierarchy().sort(null).value(null),e=hi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Wu(n,t)},Go.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Go.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Pi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Pi(t):Ui(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ui(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Pi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Wu(i,a)},Go.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Go.random.normal.apply(Go,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Go.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Go.scale={};var vs={floor:At,ceil:At};Go.scale.linear=function(){return Zi([0,1],[0,1],du,!1)};var ds={s:1,g:1,p:1,r:1,e:1};Go.scale.log=function(){return Ki(Go.scale.linear().domain([0,1]),10,!0,[1,10])};var ms=Go.format(".0e"),ys={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Go.scale.pow=function(){return Qi(Go.scale.linear(),1,[0,1])},Go.scale.sqrt=function(){return Go.scale.pow().exponent(.5)},Go.scale.ordinal=function(){return to([],{t:"range",a:[[]]})},Go.scale.category10=function(){return Go.scale.ordinal().range(xs)},Go.scale.category20=function(){return Go.scale.ordinal().range(Ms)},Go.scale.category20b=function(){return Go.scale.ordinal().range(_s)},Go.scale.category20c=function(){return Go.scale.ordinal().range(bs)};var xs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(mt),Ms=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(mt),_s=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(mt),bs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(mt);Go.scale.quantile=function(){return eo([],[])},Go.scale.quantize=function(){return ro(0,1,[0,1])},Go.scale.threshold=function(){return uo([.5],[0,1])},Go.scale.identity=function(){return io([0,1])},Go.svg={},Go.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ws,a=u.apply(this,arguments)+ws,c=(o>a&&(c=o,o=a,a=c),a-o),s=Ca>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=Ss?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=oo,e=ao,r=co,u=so;return n.innerRadius=function(e){return arguments.length?(t=Et(e),n):t},n.outerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.startAngle=function(t){return arguments.length?(r=Et(t),n):r},n.endAngle=function(t){return arguments.length?(u=Et(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ws;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ws=-La,Ss=Na-Ta;Go.svg.line=function(){return lo(At)};var ks=Go.map({linear:fo,"linear-closed":ho,step:go,"step-before":po,"step-after":vo,basis:bo,"basis-open":wo,"basis-closed":So,bundle:ko,cardinal:xo,"cardinal-open":mo,"cardinal-closed":yo,monotone:To});ks.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Es=[0,2/3,1/3,0],As=[0,1/3,2/3,0],Cs=[0,1/6,2/3,1/6];Go.svg.line.radial=function(){var n=lo(qo);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},po.reverse=vo,vo.reverse=po,Go.svg.area=function(){return zo(At)},Go.svg.area.radial=function(){var n=zo(qo);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Go.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ws,l=s.call(n,u,r)+ws;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ca)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Ro,c=co,s=so;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(s=Et(t),n):s},n},Go.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Do;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Go.svg.diagonal.radial=function(){var n=Go.svg.diagonal(),t=Do,e=n.projection;return n.projection=function(n){return arguments.length?e(Po(t=n)):t},n},Go.svg.symbol=function(){function n(n,r){return(Ns.get(t.call(this,n,r))||Ho)(e.call(this,n,r))}var t=jo,e=Uo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var Ns=Go.map({circle:Ho,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*zs)),e=t*zs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/qs),e=t*qs/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Go.svg.symbolTypes=Ns.keys();var Ls,Ts,qs=Math.sqrt(3),zs=Math.tan(30*za),Rs=[],Ds=0;Rs.call=_a.call,Rs.empty=_a.empty,Rs.node=_a.node,Rs.size=_a.size,Go.transition=function(n){return arguments.length?Ls?n.transition():n:Sa.transition()},Go.transition.prototype=Rs,Rs.select=function(n){var t,e,r,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Yo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Fo(i,u)},Rs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Yo(u,g,o,i),t.push(u)}return Fo(a,o)},Rs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Fo(u,this.id)},Rs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):P(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Rs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:du,a=Go.ns.qualify(n);return Oo(this,"attr."+n,t,a.local?i:u)},Rs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Go.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Rs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=ea.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Oo(this,"style."+n,t,u)},Rs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,ea.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Rs.text=function(n){return Oo(this,"text",n,Io)},Rs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Rs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Go.ease.apply(Go,arguments)),P(this,function(e){e.__transition__[t].ease=n}))},Rs.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Rs.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Rs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Ts,u=Ls;Ls=e,P(this,function(t,r,u){Ts=t.__transition__[e],n.call(t,t.__data__,r,u)}),Ts=r,Ls=u}else P(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Go.dispatch("start","end"))).on(n,t)});return this},Rs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ds,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Yo(e,s,i,r)),n.push(e)}return Fo(o,i)},Go.svg.axis=function(){function n(n){n.each(function(){var n,s=Go.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=Go.transition(p.exit()).style("opacity",Ta).remove(),m=Go.transition(p.order()).style("opacity",1),y=Hi(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Go.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Zo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Zo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Vo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Vo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Go.scale.linear(),r=Ps,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Us?t+"":Ps,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ps="bottom",Us={top:1,right:1,bottom:1,left:1};Go.svg.brush=function(){function n(i){i.each(function(){var i=Go.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return js[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Go.transition(i),h=Go.transition(o);c&&(l=Hi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Hi(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Go.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),y())}function p(){32==Go.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,y())}function v(){var n=Go.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Go.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Hi(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Go.select("body").style("cursor",null),T.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Go.select(Go.event.target),w=a.of(_,arguments),S=Go.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=Y(),L=Go.mouse(_),T=Go.select(ea).on("keydown.brush",u).on("keyup.brush",p);if(Go.event.changedTouches?T.on("touchmove.brush",v).on("touchend.brush",m):T.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),z=+/^n/.test(k);M=[l[1-q]-L[0],f[1-z]-L[1]],L[0]=l[q],L[1]=f[z]}else Go.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Go.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Hs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ls?Go.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(l,t.x),r=mu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Hs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Hs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Go.rebind(n,a,"on")};var js={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Hs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Fs=ic.format=fc.timeFormat,Os=Fs.utc,Is=Os("%Y-%m-%dT%H:%M:%S.%LZ");Fs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?$o:Is,$o.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},$o.toString=Is.toString,ic.second=Ht(function(n){return new oc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ic.seconds=ic.second.range,ic.seconds.utc=ic.second.utc.range,ic.minute=Ht(function(n){return new oc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ic.minutes=ic.minute.range,ic.minutes.utc=ic.minute.utc.range,ic.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new oc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ic.hours=ic.hour.range,ic.hours.utc=ic.hour.utc.range,ic.month=Ht(function(n){return n=ic.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ic.months=ic.month.range,ic.months.utc=ic.month.utc.range;var Ys=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Zs=[[ic.second,1],[ic.second,5],[ic.second,15],[ic.second,30],[ic.minute,1],[ic.minute,5],[ic.minute,15],[ic.minute,30],[ic.hour,1],[ic.hour,3],[ic.hour,6],[ic.hour,12],[ic.day,1],[ic.day,2],[ic.week,1],[ic.month,1],[ic.month,3],[ic.year,1]],Vs=Fs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),$s={range:function(n,t,e){return Go.range(Math.ceil(n/e)*e,+t,e).map(Bo)},floor:At,ceil:At};Zs.year=ic.year,ic.scale=function(){return Xo(Go.scale.linear(),Zs,Vs)};var Xs=Zs.map(function(n){return[n[0].utc,n[1]]}),Bs=Os.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Xs.year=ic.year.utc,ic.scale.utc=function(){return Xo(Go.scale.linear(),Xs,Bs)},Go.text=Ct(function(n){return n.responseText}),Go.json=function(n,t){return Nt(n,"application/json",Jo,t)},Go.html=function(n,t){return Nt(n,"text/html",Wo,t)},Go.xml=Ct(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Go):"object"==typeof module&&module.exports?module.exports=Go:this.d3=Go}();
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Internal function: creates a callback bound to its context if supplied
  var createCallback = function(func, context, argCount) {
    if (!context) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(this, arguments);
    };
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iterator, context) {
    var i, length;
    if (obj == null) return obj;
    iterator = createCallback(iterator, context);
    if (obj.length === +obj.length) {
      for (i = 0, length = obj.length; i < length; i++) {
        if (iterator(obj[i], i, obj) === breaker) break;
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        if (iterator(obj[keys[i]], keys[i], obj) === breaker) break;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    iterator = lookupIterator(iterator, context);
    _.each(obj, function(value, index, list) {
      results.push(iterator(value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    iterator = createCallback(iterator, context, 4);
    _.each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator(memo, value, index, list);
      }
    });
    if (!initial) throw TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    var length = obj.length;
    iterator = createCallback(iterator, context, 4);
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    _.each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator(memo, obj[index], index, list);
      }
    });
    if (!initial) throw TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = lookupIterator(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = lookupIterator(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(lookupIterator(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    var result = true;
    if (obj == null) return result;
    predicate = lookupIterator(predicate, context);
    _.each(obj, function(value, index, list) {
      result = predicate(value, index, list);
      if (!result) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    var result = false;
    if (obj == null) return result;
    predicate = lookupIterator(predicate, context);
    _.each(obj, function(value, index, list) {
      result = predicate(value, index, list);
      if (result) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length === +obj.length) return _.indexOf(obj, target) >= 0;
    return _.some(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (!iterator && _.isArray(obj)) {
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iterator = lookupIterator(iterator, context);
      _.each(obj, function(value, index, list) {
        computed = iterator ? iterator(value, index, list) : value;
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (!iterator && _.isArray(obj)) {
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iterator = lookupIterator(iterator, context);
      _.each(obj, function(value, index, list) {
        computed = iterator ? iterator(value, index, list) : value;
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/FisherâYates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    _.each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator, context);
      _.each(obj, function(value, index) {
        var key = iterator(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator, context, 1);
    var value = iterator(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      if (iterator(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = lookupIterator(predicate, context, 1);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (array == null) return [];
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    if (iterator) iterator = lookupIterator(iterator, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (iterator) value = iterator(value, i, array);
      if (isSorted ? !i || seen !== value : !_.contains(seen, value)) {
        if (isSorted) seen = value;
        else seen.push(value);
        result.push(array[i]);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var i = from == null ? array.length : from;
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = Array(length);

    while (idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw Error('bindAll must be passed function names');
    _.each(funcs, function(f) {
      obj[f] = _.bind(obj[f], obj);
    });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    if (!hasher) hasher = _.identity;
    var memoize = function() {
      var cache = memoize.cache;
      var key = hasher.apply(this, arguments);
      if (!_.has(cache, key)) cache[key] = func.apply(this, arguments);
      return cache[key];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    _.each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iterator, context) {
    var result = {}, key;
    if (_.isFunction(iterator)) {
      for (key in obj) {
        var value = obj[key];
        if (iterator.call(context, value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iterator, context) {
    var keys;
    if (_.isFunction(iterator)) {
      iterator = _.negate(iterator);
    } else {
      keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iterator = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iterator, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    _.each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // RegExps are coerced to strings for comparison.
      case '[object RegExp]':
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        if (a != +a) return b != +b;
        // An `egal` comparison is performed for other numeric values.
        return a == 0 ? 1 / a == 1 / b : a == +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor && 'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !size--) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj == null) return _.isEmpty(attrs);
      if (obj === attrs) return true;
      for (var key in attrs) if (attrs[key] !== obj[key]) return false;
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    iterator = createCallback(iterator, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iterator(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var slice = array.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;

      // Remove all callbacks for all events.
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }

      var names = name ? [name] : _.keys(this._events);
      for (var i = 0, length = names.length; i < length; i++) {
        name = names[i];

        // Bail out if there are no events stored.
        var events = this._events[name];
        if (!events) continue;

        // Remove all callbacks for this event.
        if (!callback && !context) {
          delete this._events[name];
          continue;
        }

        // Find any remaining events.
        var remaining = [];
        for (var j = 0, k = events.length; j < k; j++) {
          var event = events[j];
          if (
            callback && callback !== event.callback &&
            callback !== event.callback._callback ||
            context && context !== event.context
          ) {
            remaining.push(event);
          }
        }

        // Replace events if there are any remaining.  Otherwise, clean up.
        if (remaining.length) {
          this._events[name] = remaining;
        } else {
          delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, length = names.length; i < length; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, length = changes.length; i < length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    if (!_[method]) return;
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      for (var i = 0, length = models.length; i < length; i++) {
        var model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : models.slice();
      var id, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (var i = 0, length = models.length; i < length; i++) {
        attrs = models[i] || {};
        if (this._isModel(attrs)) {
          id = model = attrs;
        } else {
          id = attrs[this.model.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (!model) continue;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (var i = 0, length = this.length; i < length; i++) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (var i = 0, length = toAdd.length; i < length; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (var i = 0, length = orderedModels.length; i < length; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (var i = 0, length = toAdd.length; i < length; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, length = this.models.length; i < length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample', 'partition'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    if (!_[method]) return;
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    if (!_[method]) return;
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el` and a hash of `attributes`. `el` can be a CSS selector or an
    // HTML string, a jQuery context or an element. Subclasses can override
    // this to utilize an alternative DOM manipulation API and are only required
    // to set the `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.apply(this, arguments);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.location.search;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = decodeURI(this.location.pathname + this.location.search);
      var root = this.root.slice(0, -1);
      if (!path.indexOf(root)) path = path.slice(root.length);
      return path.slice(1);
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      this.fragment         = this.getFragment();

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && (!this._wantsPushState || !this._hasPushState)) {
        var iframe = document.createElement('iframe');
        iframe.src = 'javascript:0';
        iframe.style.display = 'none';
        iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        this.iframe = body.insertBefore(iframe, body.firstChild).contentWindow;
        this.navigate(this.fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._wantsHashChange && this._hasHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.location.replace(this.root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._hasPushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._wantsHashChange && this._hasHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe.frameElement);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe);
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash and decode for matching.
      fragment = decodeURI(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));


function crc32(s/*, polynomial = 0x04C11DB7, initialValue = 0xFFFFFFFF, finalXORValue = 0xFFFFFFFF*/) {
  s = String(s);
  var polynomial = arguments.length < 2 ? 0x04C11DB7 : (arguments[1] >>> 0);
  var initialValue = arguments.length < 3 ? 0xFFFFFFFF : (arguments[2] >>> 0);
  var finalXORValue = arguments.length < 4 ? 0xFFFFFFFF : (arguments[3] >>> 0);
  var table = new Array(256);
 
  var reverse = function (x, n) {
    var b = 0;
    while (--n >= 0) {
      b <<= 1;
      b |= x & 1;
      x >>>= 1;
    }
    return b;
  };
 
  var i = -1;
  while (++i < 256) {
    var g = reverse(i, 32);
    var j = -1;
    while (++j < 8) {
      g = ((g << 1) ^ (((g >>> 31) & 1) * polynomial)) >>> 0;
    }
    table[i] = reverse(g, 32);
  }
 
  var crc = initialValue;
  var length = s.length;
  var k = -1;
  while (++k < length) {
    var c = s.charCodeAt(k);
    if (c > 255) {
      throw new RangeError();
    }
    var index = (crc & 255) ^ c;
    crc = ((crc >>> 8) ^ table[index]) >>> 0;
  }
  return (crc ^ finalXORValue) >>> 0;
}
/* FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-05-27
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" &&
	    /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						window.open(object_url, "_blank");
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	saveAs.unload = function() {
		process_deletion_queue();
		view.removeEventListener("unload", process_deletion_queue, false);
	};
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module !== null) {
  module.exports = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
  define([], function() {
    return saveAs;
  });
};
;
(function(){
	VE = {
		PREFIX: '',
	};
	Bio = {};





	var head = document.getElementsByTagName('head')[0];

	var fonts = [
		'https://fonts.googleapis.com/css?family=Maven+Pro:500,700',
		'https://fonts.googleapis.com/css?family=Ubuntu+Mono',
	];
	for(var i=0,ii=fonts.length;i<ii;i++) {
		var font = fonts[i];
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = font;
		head.appendChild(link);
	}







})();;
(function(){



Bio.DnaAlphabet = {

	symbols: {
		"a": {
			"ambiguousMatches": {},
			"NCBI4na": 1,
		},
		"g": {
			"ambiguousMatches": {},
			"NCBI4na": 4,
		},
		"c": {
			"ambiguousMatches": {},
			"NCBI4na": 2,
		},
		"t": {
			"ambiguousMatches": {},
			"NCBI4na": 8,
		},
		"m": {
			"ambiguousMatches": {
				"a": true,
				"c": true
			},
			"NCBI4na": 3
		},
		"r": {
			"ambiguousMatches": {
				"a": true,
				"g": true
			},
			"NCBI4na": 5
		},
		"w": {
			"ambiguousMatches": {
				"a": true,
				"t": true
			},
			"NCBI4na": 9
		},
		"s": {
			"ambiguousMatches": {
				"c": true,
				"g": true
			},
			"NCBI4na": 6
		},
		"y": {
			"ambiguousMatches": {
				"c": true,
				"t": true
			},
			"NCBI4na": 10
		},
		"k": {
			"ambiguousMatches": {
				"g": true,
				"t": true
			},
			"NCBI4na": 12
		},
		"v": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"g": true
			},
			"NCBI4na": 7
		},
		"h": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"t": true
			},
			"NCBI4na": 11
		},
		"d": {
			"ambiguousMatches": {
				"a": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 13
		},
		"b": {
			"ambiguousMatches": {
				"c": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 14
		},
		"n": {
			"ambiguousMatches": {
				"a": true,
				"c": true,
				"g": true,
				"t": true
			},
			"NCBI4na": 15
		}
	},


	// Just a temporary thing to help write this object.
	$: function() {
		var a = this.symbols;
		var e = {
			"a": {
				"ambiguousMatches": {},
				NCBI4na: 1,
			},
			"g": {
				"ambiguousMatches": {},
				NCBI4na: 4,
			},
			"c": {
				"ambiguousMatches": {},
				NCBI4na: 2,
			},
			"t": {
				"ambiguousMatches": {},
				NCBI4na: 8,
			},
		};
		for(var x in a) {
			var b = a[x];
			var c = b.ambiguousMatches;
			var na = 0;
			for(var y in c) {
				var d = e[y].NCBI4na;
				na |= d;
			}
			b.NCBI4na = na;
		}
		console.log(JSON.stringify(a, null, '\t'));
	},


	validateString: function(str) {
		var symbols = this.symbols;
		for(var i=0,ii=str.length;i<ii;i++) {
			if(!symbols[str[i]]) { return false; }
		}
		return true;
	},




};




Bio.DnaAlphabet.strToNCBI4naMap = {};
for(var x in Bio.DnaAlphabet.symbols) {
	var na = Bio.DnaAlphabet.symbols[x];
	Bio.DnaAlphabet.strToNCBI4naMap[x] = na.NCBI4na;
}










































})();;
(function(){



/**
 * Creates a RestrictionEnzyme object.
 * @param {String} name Enzyme name.
 * @param {String} site Enzyme site.
 * @param {Int} cutType Downstream or Upstream cut type. Values: 0 = downstream, 1 = upstream
 * @param {String} forwardRegex Forward regular expression.
 * @param {String} reverseRegex Reverse regular expression.
 * @param {Int} dsForward Downstream 3" strand cut position.
 * @param {Int} dsReverse Downstream 5" strand cut position.
 * @param {Int} usForward Upstream 3" strand cut position.
 * @param {Int} usReverse Upstream 5" strand cut position.
 * @returns {RestrictionEnzyme} Restriction Enzyme object.
 */
Bio.RestrictionEnzyme = function(json) {
	this.name = json.name;
	this.site = json.site;
	this.cutType = json.cutType;
	// this.forwardRegex = new RegExp(json.forwardRegex.toLowerCase(), "g");
	// this.reverseRegex = new RegExp(json.reverseRegex.toLowerCase(), "g");
	this.forwardRegex = json.forwardRegex;
	this.reverseRegex = json.reverseRegex;
	this.dsForward = json.dsForward;
	this.dsReverse = json.dsReverse;
	this.usForward = json.usForward;
	this.usReverse = json.usReverse;
};


Bio.RestrictionEnzyme.prototype.isPalindromic = function() {
	return this.forwardRegex === this.reverseRegex;
};

Bio.RestrictionEnzyme.prototype.get = function(field) {
	return this[field];
};



function reXmlNodeToJson(xmlNode) {
	var json = {
		name: xmlNode.getElementsByTagName('n')[0].childNodes[0].nodeValue,
		site: xmlNode.getElementsByTagName('s')[0].childNodes[0].nodeValue,
		cutType: Number(xmlNode.getElementsByTagName('c')[0].childNodes[0].nodeValue),
		forwardRegex: xmlNode.getElementsByTagName('fr')[0].childNodes[0].nodeValue,
		reverseRegex: xmlNode.getElementsByTagName('rr')[0].childNodes[0].nodeValue,
	};

	var ds = xmlNode.getElementsByTagName('ds')[0];
	var df = ds.getElementsByTagName('df')[0];
	var dr = ds.getElementsByTagName('dr')[0];
	json.dsForward = Number(df.childNodes[0].nodeValue);
	json.dsReverse = Number(dr.childNodes[0].nodeValue);

	var us = xmlNode.getElementsByTagName('us')[0];
	var uf = us.getElementsByTagName('uf')[0];
	var ur = us.getElementsByTagName('ur')[0];
	if(uf) { json.usForward = Number(uf.childNodes[0].nodeValue); }
	if(ur) { json.usReverse = Number(ur.childNodes[0].nodeValue); }

	return json;
}


/**
 * @param {String} xmlString XML string to parse.
 * @param {Array<Bio.RestrictionEnzyme>} list Optional array to add parsed enzymes to.
 */
Bio.RestrictionEnzyme.parseListFromXML = function(xmlString, list) {
	if(!list) { list = []; }
	var RestrictionEnzyme = Bio.RestrictionEnzyme; 

	var doc = new DOMParser().parseFromString(xmlString, "text/xml");

	var enzymesNode = doc.getElementsByTagName('enzymes')[0];
	var enzymesListXml = enzymesNode.getElementsByTagName('e');

	for(var i=0,ii=enzymesListXml.length;i<ii;i++) {
		var enzymeNode = enzymesListXml[i];
		var enzymeJson = reXmlNodeToJson(enzymeNode);
		var enzyme = new RestrictionEnzyme(enzymeJson);
		list.push(enzyme);
	}

	return list;
};














































})();;
(function(){



Bio.OrfFinder = {



	calculateOrfsInFrame: function(sequence, frame, minimumLength, strand) {
		
		var getCodonAtIndex_startShift = (strand === -1) ? -3 : 0;
		var getCodonAtIndex_endShift = (strand === -1) ? 0 : 3;

		function getCodonAtIndex_String(index) {
			return sequence.slice(index + getCodonAtIndex_startShift, index + getCodonAtIndex_endShift);
		}

		function getCodonAtIndex_Array(index) {
			return sequence.slice(index + getCodonAtIndex_startShift, index + getCodonAtIndex_endShift).join("");
		}

		var getCodonAtIndex = Array.isArray(sequence) ? getCodonAtIndex_Array : getCodonAtIndex_String;

		if(!minimumLength && minimumLength !== 0) {
			minimumLength = -1;
		}
		if(!strand && strand !== 0) {
			strand = 1;
		}
		
		
		var Translator = Bio.Translator;
		var orfs = [];
		var seqLen = sequence.length;

		var index = (strand === -1) ? seqLen - frame : frame;
		var startIndex = -1;
		var endIndex = -1;
		var startCodonIndexes = [];

		var indexIncrement = (strand === -1) ? -3 : 3;
		var codonToNCBI4na = (strand === -1) ? Translator.codonToRevcomNCBI4na : Translator.codonToNCBI4na;
		codonToNCBI4na = codonToNCBI4na.bind(Translator);

		// Loop through sequence and generate list of ORFs.
		while(
			( (strand === -1) && (index - 2 > 0) ) ||
			( (strand !== -1) && (index + 2 < seqLen) )
		) {
			// var triplet = sequence.slice(index, index + 3).join("");
			var triplet = getCodonAtIndex(index).toLowerCase();
			var triplet4na = codonToNCBI4na(triplet);

			// If we've found a start codon, add its index to startCodonIndexes.
			if(Translator.isStartCodon_4na(triplet4na)) {
				// If we're not currently in an ORF, start evaluating a new potential ORF at current index.
				if(startIndex == -1) {
					startIndex = index;
				}

				if(startCodonIndexes == null) {
					startCodonIndexes = [];
				}
				startCodonIndexes.push(index);

				index += indexIncrement;

				continue;
			}

			// If we've reached a stop codon with a corresponding start codon and
			// its length is greater than minimumLength, create an ORF object and add it to orfs.
			if(Translator.isPossibleStopCodon_4na(triplet4na)) {
				if(startIndex != -1) {
					endIndex = index + indexIncrement;
					if(Math.abs(endIndex - startIndex) >= minimumLength) {
						if(startCodonIndexes == null) {
							startCodonIndexes = [];
						}

						var start = (strand === -1) ? endIndex : startIndex;
						var end = (strand === -1) ? startIndex : endIndex;
						if(strand === -1) {
							startCodonIndexes.reverse();
						}

						var orf = {
							start: start,
							end: end,
							strand: strand,
							frame: frame,
							startCodons: startCodonIndexes
						};

						orfs.push(orf);
					}
				}

				startIndex = -1;
				endIndex = -1;
				startCodonIndexes = null;
			}
			
			index += indexIncrement;
		}

		return orfs;
	},

	calculateOrfsInFrame_4na: function(sequence, frame, isCircular, minimumLength, strand) {
		if(strand === -1) {
			return this.calculateOrfsInReverseFrame_4na(sequence, frame, isCircular, minimumLength);
		} else {
			return this.calculateOrfsInForwardFrame_4na(sequence, frame, isCircular, minimumLength);
		}
	},

	// calculateOrfsInForwardFrame_4na: function(sequence, frame, isCircular, minimumLength) {	
	// 	// console.time('b')

	// 	// Start codons will be represented by a number greater than or equal to 0.
	// 	// Stop codons will be represented by a number less than 0.
	// 	var codons = [];

	// 	var Translator = Bio.Translator;
	// 	for(var i=frame, ii=sequence.length;i<ii;i+=3) {
	// 		var codon = (sequence[i]) | (sequence[i+1] << 4) | (sequence[i+2] << 8);
			
	// 		if(Translator.isStartCodon_4na(codon)) {
	// 		// if(codon === 1153) {
	// 			codons.push(i);
	// 		} else if(Translator.isPossibleStopCodon_4na(codon)) {
	// 			codons.push(-(i+3));
	// 		}
	// 	}

	// 	// console.timeEnd('b')

	// 	return codonIndicesToOrfs(codons, frame, 1, isCircular, minimumLength);
	// },

	// For a sequence of length 1134211:
	// ~ 72.162ms
	// ~ 57.893ms - inlined codon testing
	// ~ 48.843ms - changed to `codons[j++]` rather than `codons.push`
	// ~ 15.932ms - changed `for` loop to `i+2<ii` from `i<ii`
	calculateOrfsInForwardFrame_4na: function(sequence, frame, isCircular, minimumLength) {
		// Start codons will be represented by a number greater than or equal to 0.
		// Stop codons will be represented by a number less than 0.
		var codons = [];

		// vvv INCORRECT vvv
		// var j = 0;
		// for(var i=frame, ii=sequence.length;i+2<ii;i+=3) {
		// 	var codon = (sequence[i]) | (sequence[i+1] << 4) | (sequence[i+2] << 8);
		// 	if(codon === 1153) { // Bio.Translator.isStartCodon_4na(codon) => inlined
		// 		codons[j++] = i;
		// 	} else if((280&codon)||(1048&codon)||(328&codon)) { // Bio.Translator.isPossibleStopCodon_4na(codon) => inlined
		// 		codons[j++] = -(i+3);
		// 	}
		// }

		// console.time('a')

		var j = 0;
		for(var i=frame, ii=sequence.length;i+2<ii;i+=3) {
			var n0 = sequence[i], n1 = sequence[i+1], n2 = sequence[i+2];
			var codon = (n0) | (n1 << 4) | (n2 << 8);

			if(codon === 1153) { // Bio.Translator.isStartCodon_4na(codon) => inlined
				codons[j++] = i;
			} else if(((n0&8)&&(n1&1)&&(n2&1))||((n0&8)&&(n1&1)&&(n2&4))||((n0&8)&&(n1&4)&&(n2&1))) { // Bio.Translator.isPossibleStopCodon_4na(codon) => inlined
				codons[j++] = -(i+3);
			}

		}
		
		// console.log(j);
		// console.timeEnd('a');


		return codonIndicesToOrfs(codons, frame, 1, isCircular, minimumLength);
	},



	calculateOrfsInReverseFrame_4na: function(sequence, frame, isCircular, minimumLength) {	
		// Start codons will be represented by a number greater than or equal to 0.
		// Stop codons will be represented by a number less than 0.
		var codons = [];

		// console.time('a')

		// vvv INCORRECT vvv
		// var Translator = Bio.Translator;
		// for(var i=sequence.length-1-frame;i>1;i-=3) {
		// 	var codon = (Translator.complement_4na(sequence[i])) |
		// 				(Translator.complement_4na(sequence[i-1]) << 4) |
		// 				(Translator.complement_4na(sequence[i-2]) << 8);

		// 	if(Translator.isStartCodon_4na(codon)) {
		// 	// if(codon === 1153) {
		// 		codons.push(i+1);
		// 	} else if(Translator.isPossibleStopCodon_4na(codon)) {
		// 		codons.push(-(i-2));
		// 	}
		// }


		var Translator = Bio.Translator;
		var j = 0;
		for(var i=sequence.length-1-frame;i>1;i-=3) {

			var n0 = Translator.complement_4na(sequence[i]),
				n1 = Translator.complement_4na(sequence[i-1]),
				n2 = Translator.complement_4na(sequence[i-2]);

			var codon = (n0) | (n1 << 4) | (n2 << 8);

			if(codon === 1153) { // Bio.Translator.isStartCodon_4na(codon) => inlined
				codons[j++] = i+1;
			} else if(((n0&8)&&(n1&1)&&(n2&1))||((n0&8)&&(n1&1)&&(n2&4))||((n0&8)&&(n1&4)&&(n2&1))) { // Bio.Translator.isPossibleStopCodon_4na(codon) => inlined
				codons[j++] = -(i-2);
			}
		}

		return codonIndicesToOrfs(codons, frame, -1, isCircular, minimumLength);
	},


	__test: function() {
		console.time('A');

		var sequence = Bio.Translator.stringToNCBI4na(annotateContainer.model.get('sequence'));
		var isCircular = annotateContainer.model.get('circular');
		// var sequence = window.sequence.get('sequence');
		var isCircular = false;
		var minLen = -1;

		var ff0 = this.calculateOrfsInForwardFrame_4na(sequence, 0, isCircular, minLen);
		var ff1 = this.calculateOrfsInForwardFrame_4na(sequence, 1, isCircular, minLen);
		var ff2 = this.calculateOrfsInForwardFrame_4na(sequence, 2, isCircular, minLen);

		var rf0 = this.calculateOrfsInReverseFrame_4na(sequence, 0, isCircular, minLen);
		var rf1 = this.calculateOrfsInReverseFrame_4na(sequence, 1, isCircular, minLen);
		var rf2 = this.calculateOrfsInReverseFrame_4na(sequence, 2, isCircular, minLen);

		console.timeEnd('A')

		// console.log(ff0, ff1, ff2);
		// console.log(rf0, rf1, rf2);
	},


};


// Start codons will be represented by a number greater than or equal to 0.
// Stop codons will be represented by a number less than 0.
function codonIndicesToOrfs(codons, frame, strand, isCircular, minimumLength) {
	var orfs = [{
		start: -1,
		end: -1,
		strand: strand,
		frame: frame,
		startCodons: []
	}];

	var start = -1;
	for(var i=0, ii=codons.length;i<ii;i++) {
		var index = codons[i];
		if(index >= 0) { // start codon
			if(start === -1) { start = index; }
			orfs[orfs.length-1].startCodons.push(index);

		} else { // stop codon
			index = -index;
			if(start !== -1) {
				if(Math.abs(index - start) >= minimumLength) {
					var lastOrf = orfs[orfs.length-1];

					if(strand === -1) {
						lastOrf.end = start;
						lastOrf.start = index;
					} else {
						lastOrf.end = index;
						lastOrf.start = start;
					}

					orfs.push({
						start: -1,
						end: -1,
						strand: strand,
						frame: frame,
						startCodons: []
					});		
				}
			}
			start = -1;
			orfs[orfs.length-1].startCodons = [];

		}
	}

	if(isCircular) {
		console.error('TODO: circular orfs.');

		// This part of code is temporary, but prevents errors.
		if(orfs[orfs.length-1].end === -1) {
			orfs.pop();
		}



	} else {
		if(orfs[orfs.length-1].end === -1) {
			orfs.pop();
		}
	}

	if(orfs.length === 1 && orfs[0].start === -1) {
		return [];
	} else {
		return orfs;
	}
}






































})();;

Bio.Translator = {
	

	codonToAaMap: {
		"gct": "A",
		"gcc": "A",
		"gca": "A",
		"gcg": "A",
		"gcu": "A",
		"cgt": "R",
		"cgc": "R",
		"cga": "R",
		"cgg": "R",
		"aga": "R",
		"agg": "R",
		"cgu": "R",
		"aat": "N",
		"aac": "N",
		"aau": "N",
		"gat": "D",
		"gac": "D",
		"gau": "D",
		"tgt": "C",
		"tgc": "C",
		"ugu": "C",
		"ugc": "C",
		"gaa": "E",
		"gag": "E",
		"caa": "Q",
		"cag": "Q",
		"ggt": "G",
		"ggc": "G",
		"gga": "G",
		"ggg": "G",
		"ggu": "G",
		"cat": "H",
		"cac": "H",
		"cau": "H",
		"att": "I",
		"atc": "I",
		"ata": "I",
		"auu": "I",
		"auc": "I",
		"aua": "I",
		"ctt": "L",
		"ctc": "L",
		"cta": "L",
		"ctg": "L",
		"tta": "L",
		"ttg": "L",
		"cuu": "L",
		"cuc": "L",
		"cua": "L",
		"cug": "L",
		"uua": "L",
		"uug": "L",
		"aaa": "K",
		"aag": "K",
		"atg": "M",
		"aug": "M",
		"ttt": "F",
		"ttc": "F",
		"uuu": "F",
		"uuc": "F",
		"cct": "P",
		"ccc": "P",
		"cca": "P",
		"ccg": "P",
		"ccu": "P",
		"tct": "S",
		"tcc": "S",
		"tca": "S",
		"tcg": "S",
		"agt": "S",
		"agc": "S",
		"ucu": "S",
		"ucc": "S",
		"uca": "S",
		"ucg": "S",
		"agu": "S",
		"act": "T",
		"acc": "T",
		"aca": "T",
		"acg": "T",
		"acu": "T",
		"tgg": "W",
		"ugg": "W",
		"tat": "Y",
		"tac": "Y",
		"uau": "Y",
		"uac": "Y",
		"gtt": "V",
		"gtc": "V",
		"gta": "V",
		"gtg": "V",
		"guu": "V",
		"guc": "V",
		"gua": "V",
		"gug": "V"
	},

	startCodons: {
		"atg": {
			"NCBI4na": 1153
		},
		// "aug": true
	},

	stopCodons: {
		"taa": {
			"NCBI4na": 280
		},
		"tag": {
			"NCBI4na": 1048
		},
		"tga": {
			"NCBI4na": 328
		},
		// "uaa": true,
		// "uag": true,
		// "uga": true
	},


	stringToNCBI4na: function(str) {
		var ret = new Uint8Array(str.length);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		for(var i=0,ii=str.length;i<ii;i++) {
			ret[i] = strToNCBI4naMap[str[i]];
		}
		return ret;
	},



	complement_4na: function(na) {
		// var A = 1, C = 2, G = 4, T = 8;
		var A = 0, C = 1, G = 2, T = 3;
		var compl = 0;
		compl |= ((1 << A) & na) << 3;
		compl |= ((1 << C) & na) << 1;
		compl |= ((1 << G) & na) >> 1;
		compl |= ((1 << T) & na) >> 3;
		return compl;
	},

	codonToRevcomNCBI4na: function(codon) {
		// var symbols = Bio.DnaAlphabet.symbols;
		// var complement = this.complement_4na;
		// return (complement(symbols[codon[2]].NCBI4na) << 0) | (complement(symbols[codon[1]].NCBI4na) << 4) | (complement(symbols[codon[0]].NCBI4na) << 8);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		var complement = this.complement_4na;
		return (complement(strToNCBI4naMap[codon[2]]) << 0) | (complement(strToNCBI4naMap[codon[1]]) << 4) | (complement(strToNCBI4naMap[codon[0]]) << 8);
	},
	
	codonToNCBI4na: function(codon) {
		// var symbols = Bio.DnaAlphabet.symbols;
		// return (symbols[codon[0]].NCBI4na << 0) | (symbols[codon[1]].NCBI4na << 4) | (symbols[codon[2]].NCBI4na << 8);
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		return (strToNCBI4naMap[codon[0]] << 0) | (strToNCBI4naMap[codon[1]] << 4) | (strToNCBI4naMap[codon[2]] << 8);
	},

	/**
	 * Takes a codon (either as an array or string) and determines if its nucleotides (and their
	 * ambiguous matches) form a stop codon.
	 * @param  {String or Array} codon A codon as a string or array.
	 * @return {Boolean} True if the codon forms a stop codon.
	 */
	isPossibleStopCodon: function(codon) {
		var codon4na = this.codonToNCBI4na(codon);
		return this.isPossibleStopCodon_4na(codon4na);
	},

	/**
	 * Takes a codon (in NCBI4na encoding) and determines if its nucleotides (and their
	 * ambiguous matches) form a stop codon.
	 * @param  {String or Array} codon A codon in NCBI4na encoding.
	 * @return {Boolean} True if the codon forms a stop codon.
	 */
	 // INCORRECT
	// isPossibleStopCodon_4na: function(codon4na) {
	// 	var stopCodons = this.stopCodons;
	// 	for(var stop in stopCodons) {
	// 		var stop4na = stopCodons[stop].NCBI4na;
	// 		if((stop4na & codon4na) === stop4na) {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// },


	// __$COMPILE$__isPossibleStopCodon_4na: function(codonVarName) {
	// 	codonVarName = codonVarName || 'codon4na';
	// 	var str = '';
	// 	var a = [];
	// 	var stopCodons = this.stopCodons;
	// 	for(var stop in stopCodons) {
	// 		var stop4na = stopCodons[stop].NCBI4na;
	// 		a.push('('+stop4na+'&'+codonVarName+')');
	// 	}
	// 	a =a.join('||');
	// 	str += '(' + a + ')';
	// 	console.log(str)
	// },


	__$COMPILE$__isPossibleStopCodon_4na: function(n0VarName, n1VarName, n2VarName, indexVarName) {
		var strToNCBI4naMap = Bio.DnaAlphabet.strToNCBI4naMap;
		n0VarName = n0VarName || 'n0';
		n1VarName = n1VarName || 'n1';
		n2VarName = n2VarName || 'n2';
		indexVarName = indexVarName || 'i';
		var str = '';
		var a = [];
		var stopCodons = this.stopCodons;
		for(var stop in stopCodons) {
			var n0 = strToNCBI4naMap[stop[0]];
			var n1 = strToNCBI4naMap[stop[1]];
			var n2 = strToNCBI4naMap[stop[2]];



			a.push('(('+n0VarName+'&'+n0+')&&' + '('+n1VarName+'&'+n1+')&&' + '('+n2VarName+'&'+n2+'))');
		}
		a =a.join('||');
		str += '(' + a + ')';
		console.log(str)
	},



	isStartCodonString: function(codonStr) {
		return codonStr === "atg";
	},

	isStartCodon_4na: function(codon4na) {
		return codon4na === 1153;
	},


	translateSequence: function(str, failureChar) {
		var codonToAaMap = this.codonToAaMap;
		failureChar = failureChar || '-';
		var a = [];
		for(var i=0,ii=str.length;i<ii;i+=3) {
			var aa = codonToAaMap[str[i]+str[i+1]+str[i+2]];
			aa = aa || failureChar;
			a.push(aa);
		}
		return a.join('');
	},


	// Just a temporary thing to help write this object.
	$: function() {
		var m = {};
		var a = this.stopCodons;
		var s = Bio.DnaAlphabet.symbols;
		for(var x in a) {
			if(/u/.test(x)) {
				m[x] = a[x];
				continue;
			}
			var b = 0;
			for(var i=0;i<x.length;i++) {
				var na = s[x[i]].NCBI4na;
				b |= na << (i * 4);
			}
			m[x] = {
				NCBI4na: b,
			};
		}

		console.log(JSON.stringify(m, null, '\t'));
	},



};













































;
// Much of this program was written by Paul Stothard, University of Alberta, Canada
// It was modified for speed and use by Michael Matena.

/*
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


(function(){


Bio.SequenceAligner = {

	pairwiseAlignDna: function(params) {
		var query = params.query;
		var subject = params.subject;
		var matchScore = params.matchScore || 2;
		var mismatchScore = params.mismatchScore || -1;
		var gapPenalty = params.gapPenalty || 2;
		var beginGapPenalty = params.beginGapPenalty || 0;
		var endGapPenalty = params.endGapPenalty || 0;

		if(!query || !subject) {
			return;
		}

		if(Array.isArray(query)) { query = query.join(''); }
		if(Array.isArray(subject)) { subject = subject.join(''); }

		query = query.toLowerCase();
		subject = subject.toLowerCase();

		//can use one or both.
		//can compare scores (should be identical)
		var useLinearSpace = true;
		var useQuadraticSpace = false;

		var matrix = new Identity();
		matrix.setMatch(matchScore);
		matrix.setMismatch(mismatchScore);

		var scoreSet = new ScoreSet();
		scoreSet.setScoreSetParam(matrix, gapPenalty, beginGapPenalty, endGapPenalty);
		
		var alignment;
		if (useLinearSpace) {
			alignment = new AlignPairLinear();
			alignment.setAlignParam(query, subject, scoreSet);
			alignment.align();
		}

		if (useQuadraticSpace) {

			alignment = new AlignPairQuad();
			alignment.initializeMatrix(query, subject, scoreSet);
			alignment.fillMatrix();
			//alignment.dumpMatrix();
			alignment.align();
		}
		var alignedSequenceStringM = alignment.getAlignedM();
		var alignedSequenceStringN = alignment.getAlignedN();

		console.log(alignedSequenceStringM)
		console.log(alignedSequenceStringN)

		var toAlignmentArgs = {
			query: query,
			alignedQuery: alignedSequenceStringM,
			subject: subject,
			alignedSubject: alignedSequenceStringN,
		};
		var alignmentArray = this.alignedSequenceStringsToAlignmentArray(toAlignmentArgs);
		return alignmentArray;
	},

	alignedSequenceStringsToAlignmentArray: function(args) {
		var query = args.query;
		var alignedQuery = args.alignedQuery;
		var subject = args.subject;
		var alignedSubject = args.alignedSubject;

		var lastAlignment = null;
		var queryIndex = 0;
		var alignmentArray = [];

		for(var i=0,ii=alignedQuery.length;i<ii;i++) {
			var c1 = alignedQuery[i];
			var c2 = alignedSubject[i];

			var lastType = lastAlignment ? lastAlignment.type : null;

			var type;
			if(c1 === c2) { // type = 'match'
				type = 'match';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}

			} else if (c1 === '-') { // type = 'queryGap'
				type = 'queryGap';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}

			} else if (c2 === '-') { // type = 'subjectGap'
				// type = 'subjectGap';
				lastAlignment = null;

			} else { // type = 'mismatch'
				type = 'mismatch';
				if(type === lastType) {
					lastAlignment.subjectSequence += c2;
				} else {
					lastAlignment = {
						type: type,
						subjectSequence: c2,
						queryStart: queryIndex,
					};
					alignmentArray.push(lastAlignment);
				}
			}

			if(c1 !== '-') {
				queryIndex++;
			}

		}

		return alignmentArray;
	},



};




// Just a temporary thing to help with testing.
Bio.SequenceAligner.$ = function() {
	// 'blastn -outfmt 5 -query query.fasta -subject subject.fasta';
	// 'blastn -outfmt 5 -query NT_187301.gb -subject NT_187300.gb';

	function getSequenceFromFile(sequenceFileName, cb) {
		$.ajax({
			type: "GET",
			url: '/GET_SEQUENCE_FILE/' + sequenceFileName,
			success: function(data) {
				// console.log(data);
				window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
				var errorHandler = null;

				requestFileSystem(TEMPORARY, 1024*1024, function(fs) {
					
					fs.root.getFile(sequenceFileName, {create: true}, function(fileEntry) {

						// Create a FileWriter object for our FileEntry (log.txt).
						fileEntry.createWriter(function(fileWriter) {

							fileWriter.onwriteend = function(e) {
								// console.log('Write completed.');

								fileEntry.file(function(file) {
									_ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
										return cb(sequence);
									});
								});
							};

							fileWriter.onerror = function(e) {
								console.log('Write failed: ' + e.toString());
							};

							// Create a new Blob and write it to log.txt.
							// var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
							var blob = new Blob([data]);
							fileWriter.write(blob);

						}, errorHandler);

					}, errorHandler);

				}, errorHandler);

			}
		});
	}

	// 'blastn -outfmt 5 -query 176946_ref_Python_molurus_bivittatus-5.0.2_chrMT.fa -subject ppn_ref_panpan1_chrMT.fa -out blast_test.xml';
	getSequenceFromFile('176946_ref_Python_molurus_bivittatus-5.0.2_chrMT.fa', function(query) {
		getSequenceFromFile('ppn_ref_panpan1_chrMT.fa', function(subject) {
			query = query.get('sequence');
			subject = subject.get('sequence');


			var FACTOR = 1;
			query = query.slice(0, query.length/FACTOR/15);
			subject = subject.slice(0, subject.length/FACTOR);
			// console.log(subject.join(''));

			// query = Bio.Translator.stringToNCBI4na(query);
			// subject = Bio.Translator.stringToNCBI4na(subject);

			console.time('A')
			Bio.SequenceAligner.pairwiseAlignDna({
				query: query,
				subject: subject,
			});
			console.timeEnd('A')
			console.log('query: ' + query.length + ' (bp)')
			console.log('subject: ' + subject.length + ' (bp)')

		});

	});



	// console.time('A')
	// Bio.SequenceAligner.pairwiseAlignDna({
	// 	query: "gcgcgtgcgcggaaggagccaaggtgaagttgtagcagtgtgtcagaagaggtgcgtggcaccatgctgtcccccgaggcggagcgggtgctgcggtacctggtcgaagtagaggagttg".split(''),
	// 	subject: "gacttgtggaacctacttcctgaaaataaccttctgtcctccgagctctccgcacccgtggatgacctgctcccgtacacagatgttgccacctggctggatgaatgtccgaatgaagcg".split(''),
	// });
	// console.timeEnd('A')



	// A: 3694.634ms SequenceAligner.js:142
	// query: 704 (bp) SequenceAligner.js:143
	// subject: 16563 (bp)

	// Inlined `ScoreSet.prototype.getScore`
	// A: 3114.478ms SequenceAligner.js:142
	// query: 704 (bp) SequenceAligner.js:143
	// subject: 16563 (bp) 
}


// function asdfsadf() {
// 	q = Ext.getCmp('mainAppPanel').getActiveTab().model;
// 	var alignments = q.getAlignments();
// 	alignments[0].queryGaps.push({
// 		index: alignments[0].start + 5,
// 		sequence: 'X',
// 	});

// }





function ScoreSet () {
	this.scoringMatrix;
	this.gap;
	this.beginGap;
	this.endGap;
	this.useBeginGapTop = true;
	this.useBeginGapLeft = true;
	this.useEndGapBottom = true;
	this.useEndGapRight = true;
}

ScoreSet.prototype.getScore = function(r1, r2) {
	// return this.scoringMatrix.scoringMatrix_getScore(r1, r2);
	return (r1 === r2) ? this.scoringMatrix.match : this.scoringMatrix.mismatch;	
};

ScoreSet.prototype.setScoreSetParam = function(scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty) {
	this.scoringMatrix = scoringMatrix;
	this.gap = gapPenalty;
	this.beginGap = beginGapPenalty;
	this.endGap = endGapPenalty;
};



function ScoringMatrix() {
	this.mismatch;
	this.match;
}

ScoringMatrix.prototype.scoringMatrix_getScore = function(r1, r2) {
	// r1 = r1.toLowerCase();
	// r2 = r2.toLowerCase();
	// if (r1 == r2) {
	// 	return this.match;
	// } else {
	// 	return this.mismatch;
	// }
	return (r1 === r2) ? this.match : this.mismatch;
}



function Identity() {
}

Identity.prototype = ScoringMatrix.prototype;

Identity.prototype.setMismatch = function(mismatchScore) {
	this.mismatch = mismatchScore;
};
Identity.prototype.setMatch = function(matchScore) {
	this.match = matchScore;
};






//Written by Paul Stothard, University of Alberta, Canada

//This class performs alignments in linear space, by recursively dividing
//the alignment. Once subalignments of acceptable size are obtained, they
//are solved using the quadratic space implementation in align_pair_quad.js.

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairLinear();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();

function AlignPairLinear() {
	this.M;
	this.N;
	this.alignedM;
	this.alignedN;
	this.scoreSet;
	this.Sn;
	this.Sp;
	this.score;
}


AlignPairLinear.prototype.align = function() {
	if (this.M.length == 0) {

		for (var j = 1; j <= this.N.length; j++) {
			this.alignedM.push("-");
			this.alignedN.push(this.N[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}
	}
	else if (this.N.length == 0) {
		for (var j = 1; j <= this.M.length; j++) {
			this.alignedN.push("-");
			this.alignedM.push(this.M[j - 1]);
			this.score = this.score + this.scoreSet.gap;			
		}

	}
	else if ((this.M.length == 0) && (this.N.length == 0)) {
		//do nothing
	}
	else {
		this.path(0, 0, this.M.length, this.N.length);
	}
}


AlignPairLinear.prototype.pathA = function(i1, j1, i2, j2) {
	//align using quadratic space alignment
	var subM = new Array();
	var subN = new Array();

	for (var i = i1 + 1; i <= i2; i++) {
		subM.push(this.M[i-1]);	
	}

	for (var j = j1 + 1; j <= j2; j++) {
		subN.push(this.N[j-1]);	
	}

	var alignment = new AlignPairQuad();

	var subScoreSet = new ScoreSet();

	if (j1 == j2) {

		if (j1 == 0) {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.beginGap, this.scoreSet.beginGap, this.scoreSet.beginGap);
		}
		else if (j1 == this.N.length) {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.endGap, this.scoreSet.endGap, this.scoreSet.endGap);
		}
		else {
			subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.gap, this.scoreSet.gap);
		}
	}
	else {
		
		subScoreSet.setScoreSetParam(this.scoreSet.scoringMatrix, this.scoreSet.gap, this.scoreSet.beginGap, this.scoreSet.endGap);
		subScoreSet.useBeginGapTop = false;
		subScoreSet.useBeginGapLeft = false;
		subScoreSet.useEndGapBottom = false;
		subScoreSet.useEndGapRight = false;

		if (i1 == 0) {
			subScoreSet.useBeginGapTop = true;
		}

		if (j1 == 0) {
			subScoreSet.useBeginGapLeft = true;
		}
		
		if (j2 == this.N.length) {
			subScoreSet.useEndGapRight = true;
		}

		if (i2 == this.M.length) {
			subScoreSet.useEndGapBottom = true;
		}
	}

	alignment.initializeMatrix(subM, subN, subScoreSet);
	alignment.fillMatrix();
	alignment.align();
	//alignment.dumpMatrix();
	this.alignedM.push(alignment.getAlignedM());
	this.alignedN.push(alignment.getAlignedN());

	this.score = this.score + alignment.score;	
}

AlignPairLinear.prototype.pathB = function(i1, j1, i2, j2) {
	var middle = Math.floor((i1 + i2)/2);

	var scoreSet = this.scoreSet;
	var beginGap = scoreSet.beginGap;
	var gap = scoreSet.gap;
	var endGap = scoreSet.endGap;
	var Sn = this.Sn;
	var Sp = this.Sp;
	var N = this.N;
	var M = this.M;
	var N_length = N.length;
	var M_length = M.length;
	var match = scoreSet.scoringMatrix.match;
	var mismatch = scoreSet.scoringMatrix.mismatch;
	
	var Math_max = Math.max;


	// ((r1 === r2) ? match : mismatch);

	//linear-space computation of alignment score to middle row
	//forward pass

	//gaps along top

	Sn[j1] = 0;
	
	if (i1 == 0) {
		for (var j = j1 + 1; j <= j2; j++) {
			Sn[j] = Sn[j - 1] - beginGap;
		}
	}
	else {
		for (var j = j1 + 1; j <= j2; j++) {
			Sn[j] = Sn[j - 1] - gap;
		}
	}

	//now continue down rows to middle row
	var diag;
	var left;
	//for (var i = i1 + 1; i <= i2; i++) {
	for (var i = i1 + 1; i <= middle; i++) {
		diag = Sn[j1];
		left;
		if (j1 == 0) {
			left = Sn[j1] - beginGap;
		}
		else {
			left = Sn[j1] - gap;
		}

		Sn[j1] = left;		
		var _Mi = M[i-1];

		//we need three values to set the score: diag, left, and above to fill in the row
		for (var j = j1 + 1; j <= j2; j++) {
			//above will be in the Sn array, which is holding a mixture of the previous row and the new row
			//var above = Sn[j];
			// diag + scoreSet.getScore(M[i-1], N[j-1])

			var _something = diag + ((_Mi === N[j-1]) ? match : mismatch);

			//pick max of three and store in next left
			if ((j === N_length) && (i === M_length)) {
				left = Math_max(Sn[j] - endGap, (left - endGap), _something);
			}
			else if (i === M_length) {
				left = Math_max(Sn[j] - gap, (left - endGap), _something);
			}
			else if (j === N_length) {
				left = Math_max(Sn[j] - endGap, (left - gap), _something);
			}
			else {
				left = Math_max(Sn[j] - gap, (left - gap), _something);
			}
			diag = Sn[j];
			
			//prepares Sn for use in next iteration of i loop
			Sn[j] = left;

		}	
	}

	//linear-space computation of alignment score to middle row
	//reverse pass

	//gaps along bottom

	Sp[j2] = 0;
	
	if (i2 == M_length) {
		for (var j = j2 - 1; j >= j1; j--) {
			Sp[j] = Sp[j + 1] - endGap;
		}
	}
	else {
		for (var j = j2 - 1; j >= j1; j--) {
			Sp[j] = Sp[j + 1] - gap;
		}
	}

	//now continue up rows to middle row
	var right;
	//for (var i = i2 - 1; i >= i1; i--) {
	for (var i = i2 - 1; i >= middle; i--) {
		diag = Sp[j2];
		if (j2 == N_length) {
			right = Sp[j2] - endGap;	
		}
		else {
			right = Sp[j2] - gap;	
		}

		Sp[j2] = right;

		var _Mi = M[i + 1 - 1];

		//we need three values to set the score: diag, right, and below to fill in the row			
		for (var j = j2 - 1; j >= j1; j--) {
			//below will be in the Sp array, which is holding a mixture of the previous row and the new row
			//var below = Sp[j];

			var _something = diag + ((_Mi === N[j + 1 - 1]) ? match : mismatch);

			//pick max of three and store in next right
			if ((j === 0) && (i === 0)) {
				right = Math_max(Sp[j] - beginGap, (right - beginGap), _something);
			}
			else if (j === 0) {
				right = Math_max(Sp[j] - beginGap, (right - gap), _something);
			}
			else if (i === 0) {
				right = Math_max(Sp[j] - gap, (right - beginGap), _something);
			}
			else {
				right = Math_max(Sp[j] - gap, (right - gap), _something);
			}		
			diag = Sp[j];
			Sp[j] = right;
		}

	}

	//now find the value of j that maximizes Sn[j] + Sp[j]
	//this point will be in the maximum scoring path in the final alignment.
	//once we have this point we can divide the problem into two new problems,
	

	var maxValue = Sn[j1] + Sp[j1];
	var maxJ = j1;

	for (var j = j1 + 1; j <= j2; j++) {
		if (Sn[j] + Sp[j] >= maxValue) {
			maxValue = Sn[j] + Sp[j];
			maxJ = j;
		}
	}

	this.path(i1, j1, middle, maxJ);
	this.path(middle, maxJ, i2, j2);
}

AlignPairLinear.prototype.path = function(i1, j1, i2, j2) {

	//alert ("i1, j1, : i2, j2 " + i1 +", " + j1 + ", " + i2 + ", " + j2);

	if ((i1 + 1 === i2) || (j1 === j2)) {
		// align using quadratic space alignment
		this.pathA(i1, j1, i2, j2);

	} else {
		this.pathB(i1, j1, i2, j2);

	}
}

AlignPairLinear.prototype.getAlignedM = function() {
	return this.alignedM.join("");
}


AlignPairLinear.prototype.getAlignedN = function() {
	return this.alignedN.join("");
}


AlignPairLinear.prototype.setAlignParam = function(M, N, scoreSet) {
	this.M = M;
	this.N = N;
	this.alignedM = new Array();
	this.alignedN = new Array();
	this.scoreSet = scoreSet;
	this.Sn = new Array(this.N.length);
	this.Sp = new Array(this.N.length);
	// this.Sn = [];
	// this.Sp = [];
	this.score = 0;
}






//Written by Paul Stothard, University of Alberta, Canada

//This class should be used for small alignments,
//since it uses O(nm) memory, where n and m are the sequence lengths.
//For larger alignments use the linear space algorithm implemented
//in align_pair_linear.js

//To use this class: (see pairwise_dna.js for example)
//var alignment = new AlignPairQuad();
//alignment.initializeMatrix(sequenceArrayM, sequenceArrayN, scoreSet);
//alignment.fillMatrix();
//alignment.align();
//var alignedSequenceStringM = alignment.getAlignedM();
//var alignedSequenceStringN = alignment.getAlignedN();


function Node() {
	this.value;
	this.tracebackI;
	this.tracebackJ;
}



function AlignPairQuad () {
	this.M;
	this.N;
	this.scoreSet;
	this.nodes;
	this.alignedM;
	this.alignedN;
	this.score;
}

AlignPairQuad.prototype.initializeMatrix = function(sequenceOne, sequenceTwo, scoreSet) {


	this.scoreSet = scoreSet;

	this.M = sequenceOne;
	this.N = sequenceTwo;
	this.score = 0;

	//create an two-dimensional array of nodes
	this.nodes = new Array(this.M.length + 1);

	//row i
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i] = new Array(this.N.length + 1);
		//column j
		for (var j = 0; j < this.nodes[i].length; j++) {
				this.nodes[i][j] = new Node();
		}
	}


	this.nodes[0][0].value = 0;

	
	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		if (this.scoreSet.useBeginGapLeft) {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[i][0].value = this.nodes[i - 1][0].value - this.scoreSet.gap;
		}
		this.nodes[i][0].tracebackI = i - 1;
		this.nodes[i][0].tracebackJ = 0;
	}

	//j columns
	for (var j = 1; j < this.nodes[0].length; j++)	{
		if (this.scoreSet.useBeginGapTop) {	
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.beginGap;
		}
		else {
			this.nodes[0][j].value = this.nodes[0][j - 1].value - this.scoreSet.gap;
		}
		this.nodes[0][j].tracebackI = 0;
		this.nodes[0][j].tracebackJ = j - 1;
	}
	
};

AlignPairQuad.prototype.fillMatrix = function() {

	//i rows
	for (var i = 1; i < this.nodes.length; i++)	{
		//j columns
		for (var j = 1; j < this.nodes[0].length; j++)	{

			var a;
			var b;
			var c;

			//handle end gaps here

			if ((i == this.nodes.length - 1) && (j == this.nodes[0].length - 1)) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}

				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (i == this.nodes.length - 1) {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				if (this.scoreSet.useEndGapBottom) {
					b = this.nodes[i][j - 1].value - this.scoreSet.endGap;
				}
				else {
					b = this.nodes[i][j - 1].value - this.scoreSet.gap;
				}
			}
			else if (j == this.nodes[0].length - 1) {
				if (this.scoreSet.useEndGapRight) {
					a = this.nodes[i - 1][j].value - this.scoreSet.endGap;
				}
				else {
					a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				}
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;			
			}
			else {
				a = this.nodes[i - 1][j].value - this.scoreSet.gap;
				b = this.nodes[i][j - 1].value - this.scoreSet.gap;
			}

			c = this.nodes[i - 1][j - 1].value + this.scoreSet.getScore(this.M[i - 1], this.N[j - 1]);

			if ((a >= b) && (a >= c)) {
				this.nodes[i][j].value = a;
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j;
			}
			else if ((b >= c) && (b >= a)) {
				this.nodes[i][j].value = b;			
				this.nodes[i][j].tracebackI = i;
				this.nodes[i][j].tracebackJ = j - 1;				
			}
			else {
				this.nodes[i][j].value = c;			
				this.nodes[i][j].tracebackI = i - 1;
				this.nodes[i][j].tracebackJ = j - 1;
			}			
		}
	}
	this.score = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1].value;	

};

AlignPairQuad.prototype.align = function() {
	this.alignedM = new Array();	
	this.alignedN = new Array();
	
	var currentI = this.nodes.length - 1;
	var currentJ = this.nodes[0].length - 1;
 
	var currentNode = this.nodes[this.nodes.length - 1][this.nodes[0].length - 1];

	while ((currentNode.tracebackI != undefined) && (currentNode.tracebackJ != undefined)) {

		if ((currentNode.tracebackI == currentI - 1) && (currentNode.tracebackJ == currentJ - 1)) { 
			this.alignedM.push(this.M.pop());	
			this.alignedN.push(this.N.pop());
		}

		else if (currentNode.tracebackJ == currentJ - 1) {
			this.alignedM.push("-");
			this.alignedN.push(this.N.pop());
		}
		else { 
			this.alignedM.push(this.M.pop());			
			this.alignedN.push("-");			
		}

		currentI = currentNode.tracebackI;
		currentJ = currentNode.tracebackJ;

		currentNode = this.nodes[currentNode.tracebackI][currentNode.tracebackJ];
		
	}

	this.alignedM = this.alignedM.reverse();
	this.alignedN = this.alignedN.reverse();	
};

AlignPairQuad.prototype.getAlignedM = function() {
	return this.alignedM.join("");
};

AlignPairQuad.prototype.getAlignedN = function() {
	return this.alignedN.join("");
};






































})();;
(function(){




Bio.CutSiteFinder = {
	
	/**
	 * Cut sequence by list of restriction enzymes.
	 * @param {Array} restrictionEnzymes List of restriction enzymes to cut sequence with.
	 * @param {String/Array} sequence The DNA sequence to be cut.
	 */
	cutSequence: function(restrictionEnzymes, sequence) {
		var reCuts = [];

		if(Array.isArray(sequence)) { sequence = sequence.join(''); }

		for(var i = 0, ii=restrictionEnzymes.length; i < ii; i++) {
			var re = restrictionEnzymes[i];
			this.cutSequenceByRestrictionEnzyme(re, sequence, reCuts);
		}

		return reCuts;
	},

	/**
	 * Cut sequence with one restriction enzyme.
	 * @param {RestrictionEnzyme} restrictionEnzyme Restriction enzyme to cut the sequence with.
	 * @param {String/Array} sequence DNA sequence.
	 * @param {Array} restrictionCutSites Optional array to add cut sites to.
	 */
	cutSequenceByRestrictionEnzyme: function(restrictionEnzyme, sequence, restrictionCutSites) {
		if(!restrictionCutSites) { restrictionCutSites = []; }
		var restrictionCutSite;

		var forwardRegExpPattern = new RegExp(restrictionEnzyme.forwardRegex.toLowerCase(), "g");
		var reverseRegExpPattern = new RegExp(restrictionEnzyme.reverseRegex.toLowerCase(), "g");
		// var forwardRegExpPattern = restrictionEnzyme.forwardRegex;
		// var reverseRegExpPattern = restrictionEnzyme.reverseRegex;

		var reLength = restrictionEnzyme.site.length;
		if(reLength != restrictionEnzyme.dsForward + restrictionEnzyme.dsReverse) {
			reLength = restrictionEnzyme.dsForward;
		}

		if(Array.isArray(sequence)) { sequence = sequence.join(''); }
		var seqLength = sequence.length;

		var matchIndex = sequence.search(forwardRegExpPattern);
		var startIndex = 0;
		var subSequence = sequence;

		var start;
		var end;

		while(matchIndex != -1) {
			if(matchIndex + startIndex + reLength - 1 >= sequence.length) { // subSequence is too short
				break;
			}

			start = matchIndex + startIndex;
			end = matchIndex + reLength + startIndex;

			restrictionCutSite = {
				start: start,
				end: end,
				strand: 1,
				// numCuts: 0,
				restrictionEnzyme: restrictionEnzyme
			};
			restrictionCutSites.push(restrictionCutSite);

			// Make sure that we always store the previous match index to ensure
			// that we are always storing indices relative to the whole sequence,
			// not just the subSequence.
			startIndex = startIndex + matchIndex + 1;

			// Search again on subSequence, starting from the index of the last match + 1.
			subSequence = sequence.substring(startIndex, sequence.length);
			matchIndex = subSequence.search(forwardRegExpPattern);
		}

		if(!restrictionEnzyme.isPalindromic()) {
			matchIndex = sequence.search(reverseRegExpPattern);
			startIndex = 0;
			subSequence = sequence;
			while(matchIndex != -1) {
				if(matchIndex + startIndex + reLength - 1 >= sequence.length) { // subSequence is too short
					break;
				}

				start = matchIndex + startIndex -
					(restrictionEnzyme.dsForward - restrictionEnzyme.site.length);
				end = start + reLength;

				if(start >= 0) {
					restrictionCutSite = {
						start: start,
						end: end,
						strand: -1,
						// numCuts: 0,
						restrictionEnzyme: restrictionEnzyme
					};

					restrictionCutSites.push(restrictionCutSite);
				}

				// Make sure that we always store the previous match index to ensure
				// that we are always storing indices relative to the whole sequence,
				// not just the subSequence.
				startIndex = startIndex + matchIndex + 1;

				// Search again on subSequence, starting from the index of the last match + 1.
				subSequence = sequence.substring(startIndex, sequence.length);
				matchIndex = subSequence.search(reverseRegExpPattern);
			}
		}

		return restrictionCutSites;
	},



};














































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};





var MenuManager = {
	
	_hidePrevented: {},

	preventHide: function(item) {
		this._hidePrevented[item.cid] = true;
	},

	isHidePrevented: function(item) {
		return this._hidePrevented[item.cid] ? true : false;
	},

	removePreventHide: function(item) {
		delete this._hidePrevented[item.cid];
	},

// 	active: [],
// 	_preventHide: false,

// 	addActive: function(item) {
// 		this.active[item.cid] = item;
// 	},

// 	removeActive: function(item) {
// 		delete this.active[item.cid];
// 	},

// 	hideAll: function() {
// 		for(var cid in this.active) {
// 			this.active[cid].hide();
// 		}
// 	},

// 	onWindowClick: function() {
// 		if(!this._preventHide) {
// 			this.hideAll();
// 		}
// 		this._preventHide = false;
// 	},

// 	preventHide: function() {
// 		this._preventHide = true;
// 	},

};


// $(window).on('click', MenuManager.onWindowClick.bind(MenuManager));

// window.addEventListener('click', MenuManager.onWindowClick.bind(MenuManager), true);
// Just commented out to help with testing. Uncomment later.
// window.addEventListener('contextmenu', MenuManager.onWindowClick.bind(MenuManager), true);




var Menu = Backbone.UI.menu.Menu = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menu',

	events: {

	},

	items: null, // []

	hidden: true,
	posX: 0,
	posY: 0,


	initialize: function(elements) {
		var me = this;
		this.$parentEl = $('body');

		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.$el.css({
			left: (this.posX) + 'px',
			top: (this.posY) + 'px',
		});

		
		if(this.items) {
			var items = this.items;
			this.items = [];

			for(var i=0,ii=items.length;i<ii;i++) {
				var item = items[i];
				var item = _.clone(item);
				item.menu = this;
				var menuItem = MenuItem.create(item);
				this.items.push(menuItem);
			}
		}

		if(this.hidden) { this.$el.addClass('ui-hidden-menu'); }

		this.$el.on('mousedown', function(evt) {
			evt.stopPropagation();
		});

		this.$parentEl.append(this.$el);
	},

	render: function() {
		return this;
	},

	show: function() {
		// MenuManager.addActive(this);
		$(window).one('mousedown', activeMenuHandler.bind(this));
		this.hidden = false;
		this.$el.removeClass('ui-hidden-menu');
		this.trigger('show');
	},

	hide: function() {
		// MenuManager.removeActive(this);
		this.hidden = true;
		this.$el.addClass('ui-hidden-menu');
		this.trigger('hide');
	},

	setPos: function(posX, posY) {
		if(typeof posX === 'number') {
			this.posX = posX;
			this.$el.css('left', (this.posX) + 'px');
		}
		if(typeof posY === 'number') {
			this.posY = posY;
			this.$el.css('top', (this.posY) + 'px');
		}
	},

});


function activeMenuHandler() {
	if(MenuManager.isHidePrevented(this)) {
		MenuManager.removePreventHide(this);
		$(window).one('mousedown', activeMenuHandler.bind(this));

	} else if(!this.hidden) {
		this.hide();
	}
}






var MenuItem = Backbone.UI.menu.MenuItem = {
	
	create: function(elements) {
		var type = elements.type;
		var on = elements.on;
		var constructor = getConstructorByType(type);
		var menuItem = new constructor(elements);
		addMenuItemListeners(menuItem, on);
		return menuItem;
	},

};


function addMenuItemListeners(menuItem, on) {
	menuItem.$el.on('mouseover', onMenuItemMouseOver.bind(menuItem));
	menuItem.$el.on('mouseout', onMenuItemMouseOut.bind(menuItem));

	if(typeof on === 'object') {
		for(var x in on) {
			var eventName = x;
			var handler = on[x];

			if(eventName === 'click') {
				menuItem.$el.on(eventName, handler);
			} else {
				menuItem.on(eventName, handler);
			}
		}
	}

}

function onMenuItemMouseOver(evt) {
	this.$el.addClass('ui-menuitem-mouseover');
}

function onMenuItemMouseOut(evt) {
	this.$el.removeClass('ui-menuitem-mouseover');
}




var menuItemTypes = {
	'default': null,
	'filefield': null,
	'menuseparator': null,
	'checkbox': null,
};

function getConstructorByType(type) {
	if(!type) { type = 'default'; }
	return menuItemTypes[type];
}






var NestedMenu = Menu.extend({

	menuItem: null,
	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		this.menuItem = elements.menuItem;

		Menu.prototype.initialize.call(this, elements);

		this.$el.addClass('ui-nested-menu');

		this.on('show', onNestedMenuShow.bind(this));
	},


});


function onNestedMenuShow() {
	var $el = this.menuItem.$el;
	var offset = $el.offset();
	var width = $el.outerWidth();
	// var height = $el.outerHeight();
	var x = offset.left + width;
	var y = offset.top;
	this.setPos(x, y);
}





var DefaultMenuItem = menuItemTypes['default'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-default-menuitem',

	events: {

	},

	menu: null,
	type: 'default',
	label: null,
	items: null, // []

	labelSpan: null,
	nestedMenu: null,

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);


		if(this.items) {
			
			this.nestedMenu = new NestedMenu({
				menuItem: this,
				items: this.items,
			});

			this.$el.on('mouseover', onNestedMenuMenuItemMouseOver.bind(this));
			
		}


		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

});


function onNestedMenuMenuItemMouseOver() {
	var me = this;

	this.$el.one('mouseleave', function() {
		me.menu.$el.one('mouseover', function() {
			me.nestedMenu.hide();
		});
	});
	
	this.nestedMenu.show();
}






var FileFieldMenuItem = menuItemTypes['filefield'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-filefield-menuitem',

	events: {

	},

	menu: null,
	type: 'filefield',
	label: null,

	labelSpan: null,
	filefieldEl: null,

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.filefieldEl = $(document.createElement('input'))
			.attr('type', 'file')
			.addClass('ui-filefield-menuitem')
			.on('click', onFileFieldMenuItemInputClick.bind(this))
			.on('change', onFileFieldMenuItemInputChange.bind(this))
			.appendTo(this.$el);

		this.$el.on('click', onFileFieldMenuItemDivClick.bind(this));

		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},


});


function onFileFieldMenuItemInputChange(evt, proxied) {
	this.trigger('fileselect', evt);
}

function onFileFieldMenuItemDivClick(evt) {
	this.filefieldEl.trigger('click', true);
}

function onFileFieldMenuItemInputClick(evt, proxied) {
	if(proxied) {
		evt.stopPropagation();
	}
}




var CheckboxMenuItem = menuItemTypes['checkbox'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuitem ui-checkbox-menuitem',

	events: {

	},

	menu: null,
	type: 'checkbox',
	label: null,
	items: null, // []

	checked: false,
	checkboxEl: null,
	labelSpan: null,


	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		// this.checkboxEl = createCheckboxEl().appendTo(this.$el);
		this.checkbox = createCheckbox(this.el);
		this.checkbox.classed({
			'checked': this.checked,
			'unchecked': !this.checked,
		});

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.$el.on('click', onCheckboxMenuItemDivClick.bind(this));

		// if(this.items) { var items = this.items; }
		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

	setChecked: function(checked, silent) {
		if(this.checked !== checked) {
			this.checked = checked;
			this.checkbox.classed({
				'checked': this.checked,
				'unchecked': !this.checked,
			});
			if(!silent) { this.trigger('change', checked); }
		}
	},

	toggle: function() {
		this.setChecked(!this.checked);
	},


});


function onCheckboxMenuItemDivClick(evt) {
	MenuManager.preventHide(this);
	// this.menu.
	this.toggle();
}


// var checkBoxPathD = ['M',4,6, 'L',3,7, 'L',7,12, 'L',13,3, 'L',12,2, 'L',7,10, 'Z'].join(' ');
var checkBoxPathD = ['M',4,6, 'L',3,7.5, 'L',7,13, 'L',13,3.5, 'L',12,2, 'L',7,10, 'Z'].join(' ');

function createCheckbox(el) {
	var svg = d3.select(el).append('svg:svg')
		.attr({
			class: 'ui-checkbox-menuitem',
		});

	svg.append('svg:path')
		.attr({
			d: checkBoxPathD,
			transform: 'translate(-3, -2)',
		});

	return svg;
}










var MenuSeparator = menuItemTypes['menuseparator'] = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menuseparator',

	events: {

	},

	menu: null,
	type: 'menuseparator',

	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.menu.$el.append(this.$el);
	},

	render: function() {
		return this;
	},

});
















































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};


var Menu = Backbone.UI.menu.Menu;



var MenuBar = Backbone.UI.menu.MenuBar = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menubar',

	events: {

	},

	renderTo: null,
	items: null, // []


	initialize: function(elements) {
		
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}
		
		if(this.items) {
			var items = this.items;
			this.items = [];

			for(var i=0,ii=items.length;i<ii;i++) {
				var item = items[i];
				var item = _.clone(item);
				item.menubar = this;
				var menuBarItem = new MenuBarItem(item);
				this.items.push(menuBarItem);
			}
		}

		this.$el.appendTo(this.renderTo);

	},

	render: function() {
		return this;
	},



});





var MenuBarItem = Backbone.UI.menu.MenuBarItem = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-menubar-item',

	events: {

	},

	menubar: null,
	items: null, // []
	label: null,

	menu: null,
	labelSpan: null,


	initialize: function(elements) {
		for(var x in elements) {
			if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.menubar.$el.append(this.$el);

		this.menu = new MenuBarMenu({
			menuBarItem: this,
			items: this.items,
		});

		this.$el.on('click', onMenuBarItemClick.bind(this));

		this.menu.on('hide', onMenuBarItemMenuHide.bind(this));
	},

	render: function() {
		return this;
	},

});


function onMenuBarItemMenuHide() {
	this.$el.removeClass('ui-menubar-item-active');
}

function onMenuBarItemClick(evt) {
	this.$el.addClass('ui-menubar-item-active');
	this.menu.show();
}





var MenuBarMenu = Menu.extend({

	menuBarItem: null,
	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		this.menuBarItem = elements.menuBarItem;

		Menu.prototype.initialize.call(this, elements);

		this.$el.addClass('ui-menubar-menu');

		this.on('show', onMenuBarMenuShow.bind(this));
	},



});


function onMenuBarMenuShow() {
	var $el = this.menuBarItem.$el;
	var offset = $el.offset();
	var height = $el.outerHeight();
	var x = offset.left;
	var y = offset.top + height;
	this.setPos(x, y);
}










































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};


var Menu = Backbone.UI.menu.Menu;

var MenuInitializer = Menu.prototype.initialize;









var ContextMenu = Backbone.UI.menu.ContextMenu = Menu.extend({

	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		// this.menuBarItem = elements.menuBarItem;

		MenuInitializer.call(this, elements);

		this.$el.addClass('ui-context-menu');

		this.on('hide', onContextMenuHide.bind(this));
	},


});


function onContextMenuHide() {
	this.remove();
}




























































})();;
(function(){

if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}



// Backbone.UI.Panel = Backbone.View.extend({
	

// 	parentEl: null,
// 	classed: null, // {}
// 	title: null,

// 	backgroundEl: null,
// 	headerEl: null,
// 	bodyEl: null,


// 	initialize: function(elements) {
// 		for(var x in elements) {
// 			this[x] = elements[x];
// 		}
// 		if(!this.classed) { this.classed = {}; }
// 	},

// 	render: function() {
// 		if(!this.backgroundEl) {
// 			this.backgroundEl = this.parentEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-background': true });
// 		}
// 		if(!this.headerEl) {
// 			this.headerEl = this.backgroundEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-header': true })
// 				.text(this.title || "");
// 		}
// 		if(!this.bodyEl) {
// 			this.bodyEl = this.backgroundEl.append('div')
// 				.classed(this.classed)
// 				.classed({ 'ui-body': true });
// 		}

// 		return this;
// 	},


// });





Backbone.UI.Panel = Backbone.View.extend({
	

	parentEl: null,
	classed: null, // {}
	title: null,

	backgroundEl: null,
	headerEl: null,
	bodyEl: null,


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		if(!this.classed) { this.classed = {}; }
	},

	render: function() {

		var _classed = createJQueryAddClassString(this.classed);

		if(!this.backgroundEl) {
			this.backgroundEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-background')
				.appendTo(this.parentEl);
		}
		if(!this.headerEl) {
			this.headerEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-header')
				.text(this.title || "")
				.appendTo(this.backgroundEl);
		}
		if(!this.bodyEl) {
			this.bodyEl = $(document.createElement('div'))
				.addClass(_classed)
				.addClass('ui-body')
				.appendTo(this.backgroundEl);
		}

		return this;
	},





});



/**
 * Might not be 100% accurate. I think if a classed key is set to false
 * it should remove the class; however, this function just ignores those keys.
 */
function createJQueryAddClassString(classed) {
	var a = [];
	for(var x in classed) {
		if(classed[x]) {
			a.push(x);
		}
	}
	return a.join(' ');
}



















































})();;
(function(){

if(typeof Backbone.UI !== 'object') {
	Backbone.UI = {};
}



Backbone.UI.PhonyScrollContainer = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-container-wrapper',
	// attributes: {},

	events: {
		'mousewheel': 'onMousewheel',
	},

	renderTo: null,
	showPreview: false,

	scrollBar: null,
	scroller: null,
	scrollBody: null,

	phonyHeight: 0,
	scrollPercent: 0,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.on('mouseover', onPhonyScrollContainerMouseOver.bind(this));
		this.$el.on('mouseout', onPhonyScrollContainerMouseOut.bind(this));

		this.$el.appendTo(this.renderTo);

		this.scrollBar = new Backbone.UI.PhonyScrollBar({
			wrapper: this,
		});
		this.scroller = this.scrollBar.scroller;

		if(this.showPreview) {
			this.scrollPreview = new Backbone.UI.PhonyScrollPreview({
				wrapper: this,
			});
		}

		this.scrollBody = new Backbone.UI.PhonyScrollBody({
			wrapper: this,
		});

		this.on({
			'scrollTo': this.onScrollTo,
		});
	},

	render: function() {
		this.scrollBar.render();
		return this;
	},


	onScrollTo: function(scrollPercent) {
		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		this.scrollPercent = scrollPercent;

		var scrollBarHeight = this.scrollBar.$el.height();
		var scrollerHeight = this.scroller.$el.height();
		var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

		this.scroller.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	},

	setPhonyHeight: function(phonyHeight) {
		this.phonyHeight = phonyHeight;

		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		var ratio = bodyHeight / phonyHeight;
		if(ratio > 1) { ratio = 1; }

		var scrollBarHeight = this.scrollBar.$el.height();
		var scrollerHeight = ratio * scrollBarHeight;
		this.scroller.$el.height(scrollerHeight);

		if(this.showPreview) {
			this.scrollPreview.setPhonyHeight(phonyHeight);
		}
	},

	// Returns the phony height - the height of its visible portion (the 'scrollBody' height)
	getEffectivePhonyHeight: function() {
		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		return this.phonyHeight - bodyHeight;
	},

	getPhonyScrollTop: function() {
		// var bodyHeight = this.scrollBody.$el.height();
		var bodyHeight = this.$el.height();
		var top = (this.phonyHeight - bodyHeight) * this.scrollPercent;
		return top;
	},

	setPhonyScrollTop: function(scrollTop) {
		var scrollPercent = scrollTop / this.getEffectivePhonyHeight();
		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }
		this.trigger('scrollTo', scrollPercent);
	},

	onMousewheel: function(evt) {
		evt.preventDefault();

		var wheelDelta = evt.originalEvent.wheelDelta;
		wheelDelta = -wheelDelta;

		// Based on some tests. Might not be correct.
		var approximateDeltaScrollTop;
		if(wheelDelta > 0) {
			approximateDeltaScrollTop = wheelDelta / (1/wheelDelta * 3000 + 3);
			// approximateDeltaScrollTop = wheelDelta / (1/wheelDelta * 3000);
		} else {
			approximateDeltaScrollTop = wheelDelta / (1/-wheelDelta * 3000 + 3);
			// approximateDeltaScrollTop = wheelDelta / (1/-wheelDelta * 3000);
		}

		this.setPhonyScrollTop(this.getPhonyScrollTop() + approximateDeltaScrollTop);
	},

	hidePreview: function() {
		this.showPreview = false;
		if(this.scrollPreview) {
			this.scrollPreview.remove();
		}	
	},

	displayPreview: function() {
		this.showPreview = true;
		this.scrollPreview = new Backbone.UI.PhonyScrollPreview({
			wrapper: this,
		});
	},



});


function onPhonyScrollContainerMouseOver(evt) {
	this.scrollBar.$el.addClass('mouse-over-container');
	this.scrollBar.scroller.$el.addClass('mouse-over-container');
}

function onPhonyScrollContainerMouseOut(evt) {
	this.scrollBar.$el.removeClass('mouse-over-container');
	this.scrollBar.scroller.$el.removeClass('mouse-over-container');
}




Backbone.UI.PhonyScrollBody = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-body',

	wrapper: null,
	
	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.wrapper.el);
	},

	render: function() {
		return this;
	},


});




Backbone.UI.PhonyScrollBar = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-bar',
	// attributes: {},

	wrapper: null,
	
	scroller: null,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}

		this.$el.on('mousedown', onPhonyScrollBarMouseDown.bind(this));

		this.$el.appendTo(this.wrapper.el);
		this.scroller = new Backbone.UI.PhonyScrollScroller({
			scrollBar: this,
		});
	},

	render: function() {
		this.scroller.render()

		return this;
	},


});



function onPhonyScrollBarMouseDown(evt) {
	if(evt.button !== 0) { return; }

	var scroller = this.scroller;
	var wrapper = this.wrapper;

	if(evt.target === scroller.el) { return; }

	var scrollBarHeight = this.$el.height();
	var scrollerHeight = scroller.$el.height();
	var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

	var scrollBarTop = this.$el.offset().top;
	var y = evt.pageY;

	var relY = y - scrollBarTop;
	relY -= scrollerHeight / 2;
	var scrollPercent = relY / effectiveScrollBarHeight;


	if(scrollPercent < 0) { scrollPercent = 0; }
	else if(scrollPercent > 1) { scrollPercent = 1; }

	wrapper.trigger('scrollTo', scrollPercent);

}





Backbone.UI.PhonyScrollScroller = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-scroller',

	scrollBar: null,

	events: {
		'mousedown': 'startScrolling',	
	},
	


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.scrollBar.el);
	},

	render: function() {
		return this;
	},

	// scrollTo: function(scrollPercent) {
	// 	this.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	// },

	startScrolling: function(evt) {
		$(window).one('mouseup', this.stopScrolling.bind(this))
			.on('mousemove', {
					scroller: this,
					offsetY: evt.offsetY
				}, this.onScroll);
	},

	onScroll: function(evt) {
		var scroller = evt.data.scroller;
		var scrollBar = scroller.scrollBar;
		var wrapper = scrollBar.wrapper;

		var scrollBarHeight = scrollBar.$el.height();
		var scrollerHeight = scroller.$el.height();
		var effectiveScrollBarHeight = scrollBarHeight - scrollerHeight;

		var scrollBarTop = scrollBar.$el.offset().top;
		var y = evt.pageY - evt.data.offsetY;
		// var y = evt.data.y;

		var relY = y - scrollBarTop;
		var scrollPercent = relY / effectiveScrollBarHeight;

		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		// console.log(scrollPercent);

		// scroller.$el.css('top', scrollPercent * effectiveScrollBarHeight);
		wrapper.trigger('scrollTo', scrollPercent);


	},

	stopScrolling: function(evt) {
		$(window).off('mousemove', this.onScroll);
	},


});








// -------------------------------------------------------------------------------------------------
//  Scroll Preview
// -------------------------------------------------------------------------------------------------


Backbone.UI.PhonyScrollPreview = Backbone.View.extend({
	tagName: 'div',
	className: 'phony-scroll-preview',

	wrapper: null,

	scroller: null,

	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}

		this.canvas = $(document.createElement('canvas'))
			.addClass('phony-scroll-preview')
			.appendTo(this.el);

		this.context = this.canvas[0].getContext("2d");

		// this.gl = this.canvas[0].getContext("webgl") || this.canvas[0].getContext("experimental-webgl");


		this.scroller = new ScrollPreviewScroller({
			preview: this,
		});

		this.listenTo(this.wrapper, 'scrollTo', this.onScrollTo);

		this.$el.on('mousedown', onPhonyScrollPreviewMouseDown.bind(this));

		// this.$el.appendTo(this.wrapper.el);
		this.wrapper.$('.phony-scroll-bar').after(this.$el);
	},

	onScrollTo: function(scrollPercent) {
		var height = this.$el.height();
		var scrollerHeight = this.scroller.$el.height();
		var effectiveHeight = height - scrollerHeight;

		this.scroller.$el.css('top', scrollPercent * effectiveHeight);

		var top = - (this.phonyHeight * this.ratio - height) * scrollPercent;
		this.canvas.css({
			top: (top) + 'px',
		});
	},

	setPhonyHeight: function(phonyHeight) {
		this.phonyHeight = phonyHeight;

		var width = this.$el.width();
		var bodyWidth = this.wrapper.scrollBody.$el.width();
		var ratio = width / bodyWidth;
		this.ratio = ratio;
		var height = this.$el.height();
		var scollerHeight = height * ratio;
		this.scroller.$el.height(scollerHeight);

		
		

		// console.log(Number(this.canvas.attr('height')), phonyHeight * ratio);
		if(Number(this.canvas.attr('height')) !== phonyHeight * ratio) {
			this.canvas.attr({
				// width: $('.phony-scroll-preview').width(),
				width: width,
				height: ratio * phonyHeight,
			});
			
			this.context.resetTransform();
			this.context.scale(ratio, ratio);

			if(typeof this.render === 'function') {
				this.render();
			}
		}
		
		this.context.resetTransform();
		this.context.scale(ratio, ratio);

		


	},


});


function onPhonyScrollPreviewMouseDown(evt) {
	if(evt.button !== 0) { return; }

	var scroller = this.scroller;
	var wrapper = this.wrapper;

	if(evt.target === scroller.el) { return; }

	// var previewHeight = this.$el.height();
	// var scrollerHeight = scroller.$el.height();
	// var effectivePreviewHeight = previewHeight - scrollerHeight;

	// var previewTop = this.$el.offset().top;
	// var y = evt.pageY;

	// var relY = y - previewTop;
	// relY -= scrollerHeight / 2;
	// var scrollPercent = relY / effectivePreviewHeight;



	// var scrollerHeight = scroller.$el.height();
	var previewTop = this.$el.offset().top;
	var y = evt.pageY;

	var relY = y - previewTop;
	var canvasTop = this.canvas.offset().top;
	var canvasHeight = this.canvas.height();

	var canvasY = -canvasTop + relY;

	var scrollPercent = canvasY / canvasHeight;


	if(scrollPercent < 0) { scrollPercent = 0; }
	else if(scrollPercent > 1) { scrollPercent = 1; }

	wrapper.trigger('scrollTo', scrollPercent);

}






var ScrollPreviewScroller = Backbone.View.extend({
	
	tagName: 'div',
	className: 'phony-scroll-preview-scroller',

	preview: null,

	events: {
		'mousedown': 'startScrolling',	
	},
	


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.$el.appendTo(this.preview.el);
	},

	render: function() {
		return this;
	},

	scrollTo: function(scrollPercent) {
		this.$el.css('top', scrollPercent * effectiveScrollBarHeight);
	},

	startScrolling: function(evt) {
		$(window).one('mouseup', this.stopScrolling.bind(this))
			.on('mousemove', {
					scroller: this,
					offsetY: evt.offsetY
				}, this.onScroll);
	},

	onScroll: function(evt) {
		var scroller = evt.data.scroller;
		var preview = scroller.preview;
		var wrapper = preview.wrapper;

		var previewHeight = preview.$el.height();
		var scrollerHeight = scroller.$el.height();
		var effectivePreviewHeight = previewHeight - scrollerHeight;

		var previewTop = preview.$el.offset().top;
		var y = evt.pageY - evt.data.offsetY;

		var relY = y - previewTop;
		var scrollPercent = relY / effectivePreviewHeight;

		if(scrollPercent < 0) { scrollPercent = 0; }
		else if(scrollPercent > 1) { scrollPercent = 1; }

		wrapper.trigger('scrollTo', scrollPercent);
	},


	stopScrolling: function(evt) {
		$(window).off('mousemove', this.onScroll);
	},


});



























































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var Window = Backbone.UI.Window = Backbone.View.extend({

	tagName: 'div',
	className: 'ui-window',

	// width: null,
	// height: null,
	posX: null,
	posY: null,
	title: "",
	footerButtons: null,

	header: null,
	body: null,
	footer: null,


	initialize: function(elements) {
		this.$parentEl = $('body');

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		if(elements.css) {
			this.$el.css(elements.css);
		}

		this.setPos(this.posX, this.posY);


		this.header = $(document.createElement('div'))
			.addClass('ui-window-header')
			.on('mousedown', onHeaderMouseDown.bind(this))
			.on('mouseup', onHeaderMouseUp.bind(this))
			.appendTo(this.$el);

		this.headerLabelSpan = $(document.createElement('span'))
			.text(this.title)
			.appendTo(this.header);


		this.body = $(document.createElement('div'))
			.addClass('ui-window-body')
			// .text(this.label)
			.appendTo(this.$el);


		this.footer = $(document.createElement('div'))
			.addClass('ui-window-footer')
			// .text(this.label)
			.appendTo(this.$el);

		if(Array.isArray(this.footerButtons)) {
			for(var i=0;i<this.footerButtons.length;i++) {
				var btn = this.footerButtons[i];

				var btnEl = $(document.createElement('div'))
					.text(btn.label)
					.addClass('ui-window-footer-button')
					.appendTo(this.footer);

				if(typeof btn.onclick === 'function') {
					btnEl.on('click', btn.onclick);
				}
			}
		}


		this.$parentEl.append(this.$el);
	},

	setPos: function(posX, posY) {
		if(typeof posX === 'number') {
			this.posX = posX;
			this.$el.css('left', (this.posX) + 'px');
		}
		if(typeof posY === 'number') {
			this.posY = posY;
			this.$el.css('top', (this.posY) + 'px');
		}
	},

	show: function() {
		this.$el.removeClass('ui-hidden-window');
		this.trigger('show');
	},

	hide: function() {
		this.$el.addClass('ui-hidden-window');
		this.trigger('hide');
	},

	setTitle: function(title) {
		this.headerLabelSpan.text(title);
	},

});


function onHeaderMouseDown(evt) {
	// console.log(evt);
	// var scrollBarTop = scrollBar.$el.offset().top;
	// var y = evt.pageY - evt.data.offsetY;
	// // var y = evt.data.y;

	// var relY = y - scrollBarTop;
	$(window).on('mousemove', {
		me: this,
		offsetX: evt.offsetX,
		offsetY: evt.offsetY,
	}, onHeaderWindowMouseMove);

}

function onHeaderWindowMouseMove(evt) {
	var me = evt.data.me;
	var x =  evt.pageX - evt.data.offsetX;
	var y = evt.pageY - evt.data.offsetY;
	// console.log(y);
	me.setPos(x, y);
}

function onHeaderMouseUp(evt) {
	$(window).off('mousemove', onHeaderWindowMouseMove);
}


























































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var RadioGroup = Backbone.UI.RadioGroup = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-radio-group',

	renderTo: null,
	items: null, // []
	onlyOneButtonMustBeSelected: false,

	buttons: null, // []


	initialize: function(elements) {
		var me = this;

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.buttons = [];

		for(var i=0,ii=this.items.length;i<ii;i++) {
			var item = this.items[i];
			item = _.clone(item);
			item.renderTo = this.el;
			item.radioGroup = this;
			var radioButton = new RadioButton(item);
			// this.listenTo(radioButton);
			this.buttons.push(radioButton);
		}

		this.$el.on('click', 'svg.ui-radio-button', function(evt) {
			var buttons = me.buttons;
			if(me.onlyOneButtonMustBeSelected) {
				for(var i=0,ii=buttons.length;i<ii;i++) {
					var button = buttons[i];
					if(button.radioSvg.node() === this) {
						button.setSelected(true);
					} else {
						button.setSelected(false);
					}
				}
			}
		});

		this.$el.appendTo(this.renderTo);
	},

	setSelected: function(index) {
		var buttons = this.buttons;
		if(this.onlyOneButtonMustBeSelected) {
			for(var i=0,ii=buttons.length;i<ii;i++) {
				var button = buttons[i];
				if(i === index) {
					button.setSelected(true);
				} else {
					button.setSelected(false);
				}
			}
		} else {
			buttons[index].setSelected(true);
		}
	},

	getSelected: function() {
		var selected = [];
		var buttons = this.buttons;
		for(var i=0,ii=buttons.length;i<ii;i++) {
			var button = buttons[i];
			if(button.selected) {
				selected.push(i);
			}
		}
		return selected;
	},



});






var RadioButton = Backbone.UI.RadioButton = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-radio-button',

	renderTo: null,
	label: '',
	selected: false,

	radioSvg: null,


	initialize: function(elements) {
		var me = this;
		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}


		this.radioSvg = createRadioSvg(this.el);
		this.radioSvg.classed({ 'selected': this.selected, 'unselected': !this.selected });

		this.labelSpan = $(document.createElement('span'))
			.text(this.label)
			.appendTo(this.$el);

		this.$el.appendTo(this.renderTo);
	},

	setSelected: function(selected, silent) {
		if(this.selected !== selected) {
			this.selected = selected;
			this.radioSvg.classed({
				'selected': this.selected,
				'unselected': !this.selected,
			});
			if(!silent) { this.trigger('change', selected); }
		}
	},

	toggle: function(silent) {
		this.setSelected(!this.selected, silent);
	},




});


function createRadioSvg(el) {
	var svg = d3.select(el).append('svg:svg')
		.attr({
			class: 'ui-radio-button',
		});

	svg.append('svg:circle')
		.attr({
			class: 'ui-radio-button-outline',
			r: 6.5,
			transform: 'translate(7.5, 7.5)',
		});

	svg.append('svg:circle')
		.attr({
			class: 'ui-radio-button-center',
			r: 4,
			transform: 'translate(7.5, 7.5)',
		});

	return svg;
}


























































})();;
(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};






var Combobox = Backbone.UI.Combobox = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-combobox',

	renderTo: null,
	items: null, // []
	defaultValue: "",

	displayField: null,
	arrowDiv: null,
	itemsList: null,


	initialize: function(elements) {
		var me = this;

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		var defaultDisplay = (typeof this.defaultValue === 'object') ? this.defaultValue.label : this.defaultValue;
		this.value = defaultDisplay;
		
		this.displayField = $(document.createElement('div'))
			.addClass('ui-combobox-display-field')
			.text(defaultDisplay)
			.appendTo(this.$el);

		this.arrowDiv = $(document.createElement('div'))
			.addClass('ui-combobox-arrow')
			.on('click', onArrowDivClick.bind(this))
			.appendTo(this.$el);

		this.itemsList = new ItemsList({
			combobox: this,
			items: this.items,
		});

		this.itemsList.delegate('click', 'li', onItemClick.bind(this));

		this.$el.appendTo(this.renderTo);
	},

	setValue: function(value) {
		this.value = value;
		var display = (typeof value === 'object') ? value.label : value;
		this.displayField.text(display);
	},


});


function onItemClick(evt) {
	var target = $(evt.target);
	var index = Number(target.attr('index'));
	var item = this.items[index];
	this.setValue(item);
	this.itemsList.hide();
}


function onArrowDivClick(evt) {
	if(this.itemsList.hidden) {
		this.itemsList.show();
	} else {
		this.itemsList.hide();
	}
}







var ItemsList = Backbone.View.extend({
	
	tagName: 'div',
	className: 'ui-combobox-items',

	items: null, // []
	posX: 0,
	posY: 0,
	hidden: true,

	ul: null,


	initialize: function(elements) {
		var me = this;
		this.$parentEl = $('body');

		for(var x in elements) {
			// if(x === 'on') { continue; }
			this[x] = elements[x];
		}

		this.setPos(this.posX, this.posY);

		this.ul = $(document.createElement('ul'));

		for(var i=0;i<this.items.length;i++) {
			var item = this.items[i];
			var label = item.label;

			var li = $(document.createElement('li'))
				.attr('index', i)
				.text(label)
				.appendTo(this.ul);

		}

		// this.ul.css('width', this.combobox.$el.outerWidth());

		if(this.hidden) {
			this.$el.addClass('ui-hidden-combobox-items');
		}

		this.ul.appendTo(this.$el);

		this.$el.appendTo(this.$parentEl);
	},

	setPos: function(posX, posY) {
		if(typeof posX === 'number') {
			this.posX = posX;
			this.$el.css('left', (this.posX) + 'px');
		}
		if(typeof posY === 'number') {
			this.posY = posY;
			this.$el.css('top', (this.posY) + 'px');
		}
	},

	show: function() {
		this.hidden = false;
		this.$el.removeClass('ui-hidden-combobox-items');
		this.$el.css('width', this.combobox.$el.outerWidth());
		var offset = this.combobox.$el.offset();
		var height = this.combobox.$el.outerHeight();
		var x = offset.left;
		var y = offset.top + height;
		this.setPos(x, y);

		this.trigger('show');
	},

	hide: function() {
		this.hidden = true;
		this.$el.addClass('ui-hidden-combobox-items');
		this.trigger('hide');
	},


});























































})();;
/*
 *	Basically a centralized object to provide enable sharing of data amongst parts 
 *	of VectorEditor and provide a centralized event framework.
 */


VE.Ve = function() {
	_.extend(this, Backbone.Events);

	this.eventedObjects = [];

	this.options = {
		showSpaceEvery10Bp: true,
		showComplementarySequence: true,
		showFeatures: true,
		showCutSites: false,
		showOrfs: false,
		showAlignments: false,
		showAminoAcids: false,
		showAminoAcidsRevCom: false,
		showFeatureLabels: true,
		showCutSiteLabels: true,
		showAlignmentLabels: true,
		showMapCaret: true,

		aminoAcidFrames: [],
		aminoAcidRevComFrames: [],
		orfFrames: [],
		orfRevComFrames: [],
		
		viewMode: 'pie', // 'pie', 'rail'

		showAnnotatePreview: false,

		// aminoAcidFrames: [],

		orfMinimumLength: 300,
	};

	this.on("all", function() {
		// var args = [];
		// for(var i=1;i<arguments.length;i++) {
		// 	args.push(arguments[i]);
		// }
		for(var i=0;i<this.eventedObjects.length;i++) {
			this.eventedObjects[i].trigger.apply(this.eventedObjects[i], arguments);
		}
	});
	
	this.selectionStartBp = null;
	this.selectionEndBp = null;
	this.caretBpIndex = 0;

	this.addListeners();

	this.addObjectToEvents(VE.SequenceParser);


	
};

// // copy
// // cut
// // paste
// // beforecopy
// // beforecut
// // beforepaste







VE.Ve.prototype.addListeners = function() {
	this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
	this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
	this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);
	
	this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);
	this.on(VE.Event.BLANK_NEW_SEQUENCE, this.onBlankNewSequence, this);

	this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);
	this.on(VE.EditingEvent.PASTE, this.onPaste, this);

	this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
	this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
	this.on(VE.VisibilityEvent.SHOW_ANNOTATE_PREVIEW_CHANGED, this.onShowAnnotatePreviewChanged, this);

	// Temporary way of setting event.
	// $('body').on('keydown', this.onKeyDown.bind(this));

	// $('body').delegate('keydown', '.ve-panel-background', this.onKeyDown.bind(this));

	// $('body').delegate('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $(document).on('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $(document).delegate('keydown', '.ve-annotate-panel', this.onKeyDown.bind(this));
	// $('body').delegate('keydown', '.ve-panel-background', this.onKeyDown.bind(this));

	// $(document).keydown('.ve-annotate-panel', this.onKeyDown.bind(this));

};




VE.Ve.prototype.onShowAnnotatePreviewChanged = function(showAnnotatePreview) {
	if(showAnnotatePreview) {
		this.vePanel.annotatePanel.phonyScrollContainer.displayPreview();
	} else {
		this.vePanel.annotatePanel.phonyScrollContainer.hidePreview();
	}
};





VE.Ve.prototype.onBlankNewSequence = function() {
	var sequence = new VE.Sequence();
	this.trigger(VE.Event.NEW_SEQUENCE_OPENED, sequence);
};




VE.Ve.prototype.onClientOperation = function(sequenceOperation) {
	this.model.needsRecalc__sequence_4na = true;
	this.model.needsRecalc__orfs = true;
	this.model.needsRecalc__cutSites = true;

	this.annotateContainer.calculateLogLength();

	if(this.options.showOrfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength);
		this.model.needsRecalc__orfs = false;
	}
	if(this.options.showCutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}

};


VE.Ve.prototype.onShowOrfsChanged = function(showOrfs, orfFrames, orfRevComFrames) {
	// if(showOrfs && this.model.needsRecalc__orfs) {
	if(showOrfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength, orfFrames, orfRevComFrames);
		this.model.needsRecalc__orfs = false;
	}
};

VE.Ve.prototype.onShowCutSitesChanged = function(showCutSites) {
	if(showCutSites && this.model.needsRecalc__cutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}
};


VE.Ve.prototype.onNewSequenceOpened = function(sequenceModel) {
	this.model = sequenceModel;
	this.model.needsRecalc__orfs = true;
	this.model.needsRecalc__cutSites = true;

	if(this.options.showOrfs) {
		this.model.calculateOrfs(this.options.orfMinimumLength);
		this.model.needsRecalc__orfs = false;
	}
	if(this.options.showCutSites) {
		this.model.recalculateCutSites();
		this.model.needsRecalc__cutSites = false;
	}

};


VE.Ve.prototype.onChangeCaretPosition = function(bpIndex) {
	this.caretBpIndex = bpIndex;
};

VE.Ve.prototype.onSelect = function(startBp, endBp) {
	this.selectionStartBp = startBp;
	this.selectionEndBp = endBp;
};

VE.Ve.prototype.onDeselect = function() {
	this.selectionStartBp = null;
	this.selectionEndBp = null;
};

VE.Ve.prototype.onKeyDown = function(evt) {
	var EditingManager = VE.EditingManager;

	var character = String.fromCharCode(evt.keyCode).toLowerCase();

	if(!evt.ctrlKey && !evt.metaKey) {
		evt.preventDefault();

		if(Bio.DnaAlphabet.symbols[character]) {
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null) {
				start = end = this.caretBpIndex;
			} else {
				return;
			}

			var op = EditingManager.generateInsertSequenceOp(this.model, character, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start + character.length);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 46) { // DELETE
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null && this.caretBpIndex < this.model.length()) {
				start = this.caretBpIndex;
				end = this.caretBpIndex + 1;
			} else {
				return;
			}

			var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 8) { // BACKSPACE
			var start, end;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				start = this.selectionStartBp;
				end = this.selectionEndBp;
			} else if(this.caretBpIndex !== null && this.caretBpIndex !== 0) {
				start = this.caretBpIndex - 1;
				end = this.caretBpIndex;
			} else {
				return;
			}

			var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			this.model.applyClientOperation(op);

			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			if(start > end) { // If selection is circular, move cursor to end of sequence.
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			} else {
				this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			}

			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 37) { // LEFT ARROW
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex - 1;
			} else {
				return;
			}
			if(bpIndex < 0) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);


		} else if(evt.keyCode === 38) { // UP ARROW
			var bpPerRow = this.annotateContainer.bpPerRow;
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex - bpPerRow;
			} else {
				return;
			}
			if(bpIndex < 0) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);


			
		} else if(evt.keyCode === 39) { // RIGHT ARROW
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionEndBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex + 1;
			} else {
				return;
			}
			if(bpIndex > this.model.length()) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);
			

		} else if(evt.keyCode === 40) { // DOWN ARROW
			var bpPerRow = this.annotateContainer.bpPerRow;
			var bpIndex;
			if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
				bpIndex = this.selectionStartBp;
			} else if(this.caretBpIndex !== null) {
				bpIndex = this.caretBpIndex + bpPerRow;
			} else {
				return;
			}
			if(bpIndex > this.model.length()) { return; }

			this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, bpIndex);
			this.trigger(VE.SelectionEvent.DESELECT);
			

		}
		

	} else {
		
		if(character === 'c') {
			this.copySelectionToClipboard();

		} else if(character === 'v') {
			this.pasteFromClipboard();

		} else if(character === 'x') {
			this.cutSelectionToClipboard();
			// this.copySelectionToClipboard();
			// var start, end;
			// if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
			// 	start = this.selectionStartBp;
			// 	end = this.selectionEndBp;
			// } else {
			// 	return;
			// }

			// var op = EditingManager.generateDeleteSequenceOp(this.model, start, end);
			// this.model.applyClientOperation(op);

			// this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			// this.trigger(VE.SelectionEvent.DESELECT);

		} else if(character === 'z' && !evt.shiftKey) {

			this.undo();

		} else if(character === 'z' && evt.shiftKey || character === 'y') {

			this.redo();

		}


	}



};





VE.Ve.prototype.redo = function() {
	var me = this;
	var undoManager = this.model.undoManager;
	if(undoManager.canRedo()) {
		undoManager.performRedo((function(op) {
			
			this.model.applyClientOperation(op);
			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			this.trigger(VE.SelectionEvent.DESELECT);

		}).bind(this));
	}
};

VE.Ve.prototype.undo = function() {
	var me = this;
	var undoManager = this.model.undoManager;
	if(undoManager.canUndo()) {
		undoManager.performUndo((function(op) {
			
			this.model.applyClientOperation(op);
			this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

			// if(start > end) { // If selection is circular, move cursor to end of sequence.
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
			// } else {
			// 	this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
			// }

			this.trigger(VE.SelectionEvent.DESELECT);

		}).bind(this));
	}
};




VE.Ve.prototype.pasteFromClipboard = function() {
	var me = this;
	var textarea;
	if((textarea = $('textarea.clipboard-proxy-paste')).length === 0) {
		textarea = $(document.createElement('textarea'))
			.addClass('clipboard-proxy-paste')
			// .attr('contenteditable', true)
			.appendTo('body')
			.on('paste', function(evt) {
				if(evt.originalEvent) {
					var clipboardData = evt.originalEvent.clipboardData;
					var pastedString = clipboardData.getData('text/plain');
					if(!pastedString) { return; }

					if(me.selectionStartBp !== null && me.selectionEndBp !== null) {
						me.trigger(VE.EditingEvent.PASTE, pastedString, me.selectionStartBp, me.selectionEndBp);

					} else if(me.caretBpIndex) {
						me.trigger(VE.EditingEvent.PASTE, pastedString, me.caretBpIndex);
						
					}
					evt.preventDefault();
				}
			});
	}

	var oldFocus = $(document.activeElement);

	textarea.focus();
	textarea.text('');
	textarea.trigger('paste');

	setTimeout(function() {
		if(document.activeElement === textarea[0]) {
			oldFocus.focus();
		}
	}, 50);
};



VE.Ve.prototype.onPaste = function(pastedString, startBpIndex, endBpIndex) {
	pastedString = pastedString.toLowerCase();
	var isValid = Bio.DnaAlphabet.validateString(pastedString);
	if(!isValid) { return; }

	var start = startBpIndex, end = endBpIndex;
	if(!end) { end = start; }

	var op = VE.EditingManager.generateInsertSequenceOp(this.model, pastedString, start, end);
	this.model.applyClientOperation(op);

	this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

	if(start > end) {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, pastedString.length);
		// this.trigger(VE.SelectionEvent.SELECT, 0, pastedString.length);
		this.trigger(VE.SelectionEvent.DESELECT);
	} else {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start + pastedString.length);
		// this.trigger(VE.SelectionEvent.SELECT, start, start + pastedString.length);
		this.trigger(VE.SelectionEvent.DESELECT);
		
	}

	

};



VE.Ve.prototype.copySelectionToClipboard = function() {
	var textarea;
	if((textarea = $('textarea.clipboard-proxy-copy')).length === 0) {
		textarea = textarea = $(document.createElement('textarea'))
			.addClass('clipboard-proxy-copy')
			.attr('contenteditable', true)
			.appendTo('body');
	}
	
	if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
		var start = this.selectionStartBp;
		var end = this.selectionEndBp;

		var clipboardText;
		if(start > end) {
			clipboardText = this.model.getSubstring(0, end) + this.model.getSubstring(start, this.model.length());
		} else {
			clipboardText = this.model.getSubstring(start, end);
		}

		var oldFocus = $(document.activeElement);

		textarea.focus();
		textarea.text(clipboardText);
		textarea.select();
		textarea.trigger('copy');

		setTimeout(function() {
			if(document.activeElement === textarea[0]) {
				oldFocus.focus();
			}
		}, 50);
	}

};

VE.Ve.prototype.cutSelectionToClipboard = function() {
	this.copySelectionToClipboard();
	var start, end;
	if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
		start = this.selectionStartBp;
		end = this.selectionEndBp;
	} else {
		return;
	}

	var op = VE.EditingManager.generateDeleteSequenceOp(this.model, start, end);
	this.model.applyClientOperation(op);

	this.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

	if(start > end) { // If selection is circular, move cursor to end of sequence.
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.model.length());
	} else {
		this.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, start);
	}

	this.trigger(VE.SelectionEvent.DESELECT);
};


// Doesn't guard against adding multiple of the same object.
// Additionally, all objects added must implement a 'trigger' method.
VE.Ve.prototype.addObjectToEvents = function(obj) {
	this.eventedObjects.push(obj);
};
































































;
(function() {







var eventsObj = {
	
	VisibilityEvent: {
		SHOW_FEATURES_CHANGED: "ShowFeaturesChanged",
		SHOW_ALIGNMENTS_CHANGED: "ShowAlignmentsChanged",
		SHOW_CUTSITES_CHANGED: "ShowCutSitesChanged",
		SHOW_ORFS_CHANGED: "ShowOrfsChanged",
		SHOW_COMPLEMENTARY_CHANGED: "ShowComplementaryChanged",
		SHOW_SPACES_CHANGED: "ShowSpacesChanged",
		SHOW_SEQUENCE_AA_CHANGED: "ShowSequenceAAChanged",
		SHOW_REVCOM_AA_CHANGED: "ShowRevcomAAChanged",
		SHOW_FEATURE_LABELS_CHANGED: "ShowFeatureLabelsChanged",
		SHOW_ALIGNMENT_LABELS_CHANGED: "ShowAlignmentLabelsChanged",
		SHOW_CUTSITE_LABELS_CHANGED: "ShowCutSiteLabelsChanged",
		SHOW_MAP_CARET_CHANGED: "ShowMapCaretChanged",

		// View mode changes from pie <-> rail.
		VIEW_MODE_CHANGED: "ViewModeChanged", // viewMode

		SHOW_ANNOTATE_PREVIEW_CHANGED: "VE::VisibilityEvent::SHOW_ANNOTATE_PREVIEW_CHANGED", // showAnnotatePreview
	},

	SelectionEvent: {
		SELECT: "VE::SelectionEvent::SELECT", // startBpIndex, endBpIndex
		CHANGE_CARET_POSITION: "VE::SelectionEvent::CHANGE_CARET_POSITION", // bpIndex
		DESELECT: "VE::SelectionEvent::DESELECT",
	},

	IoEvent: {
		PARSE_SEQUENCE_FROM_FILE: "VE::IoEvent::PARSE_SEQUENCE_FROM_FILE", // file, cb(sequenceModel)
	},

	Event: {
		NEW_SEQUENCE_OPENED: "VE::Event::NEW_SEQUENCE_OPENED", // sequenceModel
		BLANK_NEW_SEQUENCE: "VE::Event::BLANK_NEW_SEQUENCE",
	},

	PieEvent: {
		ZOOM: "VE::PieEvent::ZOOM", // newZoom,
	},

	EditingEvent: {
		PASTE: 'VE::EditingEvent::PASTE', // pastedString, startBpIndex, endBpIndex

		CLIENT_OPERATION: 'VE::EditingEvent::CLIENT_OPERATION', // sequenceOperation
	},

};













for(var x in eventsObj) {
	if(eventsObj.hasOwnProperty(x)) {
		VE[x] = eventsObj[x];
	}
}







})();;

VE.Constants = {

	// Options for the "Type" combo box in the Create New Features.
	FEATURE_TYPES: [
		{label: "-10_signal", data: "-10_signal"},
		{label: "-35_signal", data: "-35_signal"},
		{label: "3'UTR", data: "3'UTR"},
		{label: "5'UTR", data: "5'UTR"},
		{label: "allele", data: "allele"},
		{label: "attenuator", data: "attenuator"},
		{label: "C_region", data: "C_region"},
		{label: "CAAT_signal", data: "CAAT_signal"},
		{label: "CDS", data: "CDS"},
		{label: "conflict", data: "conflict"},
		{label: "D_segment", data: "D_segment"},
		{label: "D-loop", data: "D-loop"},
		{label: "enhancer", data: "enhancer"},
		{label: "exon", data: "exon"},
		{label: "GC_signal", data: "GC_signal"},
		{label: "gene", data: "gene"},
		{label: "iDNA", data: "iDNA"},
		{label: "intron", data: "intron"},
		{label: "J_region", data: "J_region"},
		{label: "LTR", data: "LTR"},
		{label: "mat_peptide", data: "mat_peptide"},
		{label: "misc_binding", data: "misc_binding"},
		{label: "misc_difference", data: "misc_difference"},
		{label: "misc_feature", data: "misc_feature"},
		{label: "misc_recomb", data: "misc_recomb"},
		{label: "misc_RNA", data: "misc_RNA"},
		{label: "misc_signal", data: "misc_signal"},
		{label: "misc_structure", data: "misc_structure"},
		{label: "modified_base", data: "modified_base"},
		{label: "mRNA", data: "mRNA"},
		{label: "mutation", data: "mutation"},
		{label: "N_region", data: "N_region"},
		{label: "old_sequence", data: "old_sequence"},
		{label: "polyA_signal", data: "polyA_signal"},
		{label: "polyA_site", data: "polyA_site"},
		{label: "precursor_RNA", data: "precursor_RNA"},
		{label: "prim_transcript", data: "prim_transcript"},
		{label: "primer", data: "primer"},
		{label: "primer_bind", data: "primer_bind"},
		{label: "promoter", data: "promoter"},
		{label: "protein_bind", data: "protein_bind"},
		{label: "RBS", data: "RBS"},
		{label: "rep_origin", data: "rep_origin"},
		{label: "repeat_region", data: "repeat_region"},
		{label: "repeat_unit", data: "repeat_unit"},
		{label: "rRNA", data: "rRNA"},
		{label: "S_region", data: "S_region"},
		{label: "satellite", data: "satellite"},
		{label: "scRNA", data: "scRNA"},
		{label: "sig_peptide", data: "sig_peptide"},
		{label: "snRNA", data: "snRNA"},
		{label: "source", data: "source"},
		{label: "stem_loop", data: "stem_loop"},
		{label: "STS", data: "STS"},
		{label: "TATA_signal", data: "TATA_signal"},
		{label: "terminator", data: "terminator"},
		{label: "transit_peptide", data: "transit_peptide"},
		{label: "transposon", data: "transposon"},
		{label: "tRNA", data: "tRNA"},
		{label: "unsure", data: "unsure"},
		{label: "V_region ", data: "V_region "},
		{label: "variation", data: "variation"}
	],




};






;


VE.VectorEditor = Backbone.Model.extend({

	defaults: {
		sequence: null,

		annotatePanel: null,
		annotatePanelParent: null,

		pieContainer: null,
		pieContainerParent: null,
	},

	initialize: function() {
		
		VE.activeVectorEditor = this;

		if(this.get('annotatePanelParent')) {
			this.set('annotatePanel', new VE.AnnotateContainer({
				el: this.get('annotatePanelParent'),
				model: this.get('sequence'),
				vectorEditor: this,
			}));
		}

		if(this.get('pieContainerParent')) {
			this.set('pieContainer', new VE.PieContainer({
				el: this.get('pieContainerParent'),
				model: this.get('sequence'),
				vectorEditor: this,
			}));
		}


		this.on('all', function() {
			if(this.get('annotatePanel')) {
				this.get('annotatePanel').trigger.apply(this.get('annotatePanel'), arguments);
			}
			if(this.get('pieContainer')) {
				this.get('pieContainer').trigger.apply(this.get('pieContainer'), arguments);
			}
		});

	},


});;


VE.Sequence = Backbone.Model.extend({

	defaults: {
		name: "",
		circular: false,

		sequence: [],

		features: [],
		
		alignments: [],
		orfs: [],
		cutSites: [],
	},

	sequence_4na: null,
	needsRecalc__sequence_4na: false,

	needsRecalc__orfs: false,
	needsRecalc__cutSites: false,

	undoManager: null,


	initialize: function() {
		this.undoManager = new VE.CollaborativeUndoManager();
	},

	getSequence_4na: function() {
		if(!this.sequence_4na || this.needsRecalc__sequence_4na) {
			this.sequence_4na = Bio.Translator.stringToNCBI4na(this.get('sequence'));
			this.needsRecalc__sequence_4na = false;
		}
		return this.sequence_4na;
	},


	/*
	 * @param {Integer} minimumLength Minimum length of orf.
	 * @param {Array<Integer>} forwardFrames An array of frames to calculate orfs on the forward strand for. Default is all frames.
	 * @param {Array<Integer>} reverseFrames An array of frames to calculate orfs on the reverse strand for. Default is all frames.
	 */
	calculateOrfs: function(minimumLength, forwardFrames, reverseFrames) {
		if(!forwardFrames) {
			forwardFrames = [0, 1, 2];
		}
		if(!reverseFrames) {
			reverseFrames = [0, 1, 2];
		}
		if(!minimumLength && minimumLength !== 0) {
			minimumLength = -1;
		}
		
		var _orfs = [];

		// var sequence = Bio.Translator.stringToNCBI4na(this.get('sequence'));
		var sequence = this.getSequence_4na();
		var isCircular = this.get('circular');

		function calcOrfs(frames, strand) {
			for(var i=0;i<frames.length;i++) {
				var orfs = Bio.OrfFinder.calculateOrfsInFrame_4na(sequence, frames[i], isCircular, minimumLength, strand);
				for(var j=0;j<orfs.length;j++) {
					// var annot = new VE.Annotation(orfs[j]);
					var annot = new VE.LightAnnotation(orfs[j]);
					_orfs.push(annot);
				}
			}
		}


		calcOrfs(forwardFrames, 1);
		calcOrfs(reverseFrames, -1);

		this.set('orfs', _orfs);
	},


	/*
	 * @param {String/Array<char>/VE.Sequence} sequence Sequence to align with.
	 * @param {Object} params Optional parameters of matchScore, mismatchScore, gapPenalty, beginGapPenalty, and endGapPenalty.
	 */
	calculateAlignment: function(sequence, params) {
		if(sequence instanceof VE.Sequence) {
			sequence = sequence.get('sequence');
		}

		if(typeof params !== 'object') {
			params = {};
		}

		var query = this.get('sequence');
		var subject = sequence;

		var alignArgs = {
			query: query,
			subject: subject,
			matchScore: params.matchScore,
			mismatchScore: params.mismatchScore,
			gapPenalty: params.gapPenalty,
			beginGapPenalty: params.beginGapPenalty,
			endGapPenalty: params.endGapPenalty,
		};

		var alignmentArray = Bio.SequenceAligner.pairwiseAlignDna(alignArgs);
		// console.log(alignmentArray);
		this.get('alignments').push(alignmentArray);
	},


	recalculateCutSites: function() {
		var RestrictionEnzymeManager = VE.RestrictionEnzymeManager;
		var userEnzymes = RestrictionEnzymeManager.getCurrentUserEnzymeGroup();

		var cutSites = [];
		var _cutSites = Bio.CutSiteFinder.cutSequence(userEnzymes, this.get('sequence'));

		for(var i=0,ii=_cutSites.length;i<ii;i++) {
			var site = _cutSites[i];
			var annot = new VE.LightAnnotation(site);
			annot.set('restrictionEnzyme', new VE.LightAnnotation(site.restrictionEnzyme));
			cutSites.push(annot);
		}

		this.set('cutSites', cutSites);
	},


	length: function() {
		return this.get('sequence').length;
	},

	getSubstring: function(start, end) {
		return this.get('sequence').slice(start, end).join('');
	},


	applyClientOperation: function(op) {
		this.needsRecalc__sequence_4na = true;
		var inverse = op.apply(this);
		// console.log(inverse);
		this.undoManager.add(inverse);
	},




	toJSON: function() {
		var json = Backbone.Model.prototype.toJSON.call(this);

		function arrayToJson(arrayKey) {
			var a = [];
			for(var i=0;i<json[arrayKey].length;i++) {
				a[i] = json[arrayKey][i].toJSON();
			}
			json[arrayKey] = a;
		}

		arrayToJson('features');
		// arrayToJson('alignments');
		arrayToJson('orfs');

		arrayToJson('cutSites');

		return json;
	},





});



VE.Sequence.deserialize = function(serSeq) {
	var params = {
		name: serSeq.inData.name,
		circular: serSeq.inData.circular,
		sequence: Array.isArray(serSeq.sequence) ? serSeq.sequence : serSeq.sequence.split(''),
		features: [],
		alignments: [],
		orfs: [],
		cutSites: [],
	};

	for(var i=0;i<serSeq.features.length;i++) {
		var feat = serSeq.features[i];
		var annot = new VE.Annotation({
			name: feat.inData.name,
			start: feat.inData.start,
			end: feat.inData.end,
			strand: feat.inData.strand,
			type: feat.inData.type,
		});
		params.features.push(annot);
	}

	return new VE.Sequence(params);
};


VE.Sequence.fromJSON = function(json) {
	var ret = new VE.Sequence(json);

	function annotationArrayFromJson(arrayKey) {
		var a = [];
		for(var i=0;i<ret.get(arrayKey).length;i++) {
			a[i] = new VE.Annotation(ret.get(arrayKey)[i]);
			if(arrayKey === 'cutSites') {
				a[i].set('restrictionEnzyme', new Backbone.Model(a[i].get('restrictionEnzyme')));
			}
		}
		ret.set(arrayKey, a);
	}

	annotationArrayFromJson('features');
	// annotationArrayFromJson('alignments');
	annotationArrayFromJson('orfs');
	annotationArrayFromJson('cutSites');

	return ret;

};



/**
 * @param {String} gb Genbank file content as a string.
 */
VE.Sequence.fromGenbank = function(gb) {
	var serSeq = VE.GenbankParser.genbankToSerialized(gb);
	var sequence = this.deserialize(serSeq);
	return sequence;
};


/**
 * @param {String} fasta Fasta file content as a string.
 */
VE.Sequence.fromFasta = function(fasta) {
	var serSeq = VE.FastaParser.fastaToSerialized(fasta);
	var sequence = VE.Sequence.deserialize(serSeq);
	return sequence;
};













































































;
(function(){


function validateAnnotation(sequenceModel) {

	var start = this.get('start');
	var end = this.get('end');
	var name = this.get('name');
	var strand = this.get('strand');
	var type = this.get('type');

	var seqlen = sequenceModel.length();

	if(typeof start !== 'number' || typeof end !== 'number' || typeof name !== 'string') {
		return false;
	}

	if(typeof type !== 'string') {
		return false;
	}

	if(isNaN(end) || isNaN(start)) {
		return false;
	}

	if(start > seqlen || end > seqlen) {
		return false;
	}

	if(start < 0 || end < 0) {
		return false;
	}

	if(strand !== -1 && strand !== 1) {
		return false;
	}

	if(name.trim().length === 0) {
		return false;
	}

	return true;
}





VE.LightAnnotation = function(params) {
	this.attributes = {};
	for(var x in params) {
		this.attributes[x] = params[x];
	}
}

VE.LightAnnotation.prototype.get = function(field) {
	return this.attributes[field];
}

VE.LightAnnotation.prototype.set = function(field, value) {
	this.attributes[field] = value;
}

VE.LightAnnotation.prototype.toJSON = function() {
	return this.attributes;
}

VE.LightAnnotation.prototype.validate = validateAnnotation.bind(VE.LightAnnotation.prototype);






VE.Annotation = Backbone.Model.extend({

	// defaults: {
	// 	name: "",
	// 	start: -1,
	// 	end: -1,
	// 	strand: 0,
	// },



});

// VE.Annotation.prototype.validate = validateAnnotation.bind(VE.Annotation.prototype);
VE.Annotation.prototype.validate = function() {
	return validateAnnotation.apply(this, arguments);
}




























































})();




;


// VE.VePanel = Backbone.View.extend({
	
// 	parentEl: null,
// 	ve: null,

// 	backgroundEl: null,

// 	mainMenuBar: null,
// 	mainToolBar: null,
// 	veSubPanel: null,
// 	vectorPanel: null,
// 	annotatePanel: null,


// 	initialize: function(elements) {
// 		for(var x in elements) {
// 			this[x] = elements[x];
// 		}
// 		this.ve.vePanel = this;
// 	},



// 	render: function() {
		


// 		if(!this.backgroundEl) {
// 			this.backgroundEl = this.parentEl.append('div')
// 				.classed({
// 					've-panel-background': true
// 				});
// 		}

// 		if(!this.mainMenuBar) {
// 			this.mainMenuBar = new VE.MainMenuBar({
// 				// parentEl: this.backgroundEl,
// 				renderTo: this.backgroundEl.node(),
// 				ve: this.ve,
// 			});
// 		}
// 		this.mainMenuBar.render();


// 		if(!this.veSubPanel) {
// 			this.veSubPanel = this.backgroundEl.append('div')
// 				.classed({
// 					've-subpanel': true
// 				});
// 		}

// 		if(!this.vectorPanel) {
// 			this.vectorPanel = new VE.VectorPanel({
// 				parentEl: this.veSubPanel,
// 				classed: {
// 					've-vector-panel': true,
// 				},
// 				ve: this.ve,
// 				title: 'Map',
// 			});
// 		}
// 		this.vectorPanel.render();

// 		if(!this.annotatePanel) {
// 			this.annotatePanel = new VE.AnnotatePanel({
// 				parentEl: this.veSubPanel,
// 				classed: {
// 					've-annotate-panel': true,
// 				},
// 				ve: this.ve,
// 				title: 'Sequence',
// 				showAnnotatePreview: this.ve.showAnnotatePreview,
// 			});
// 		}
// 		this.annotatePanel.render();


		
// 		$(this.backgroundEl.node()).attr('tabindex', "0")
// 			.on('keydown',  this.ve.onKeyDown.bind(this.ve));


// 		return this;
// 	},



// });







VE.VePanel = Backbone.View.extend({
	
	parentEl: null,
	ve: null,

	backgroundEl: null,

	mainMenuBar: null,
	mainToolBar: null,
	veSubPanel: null,
	vectorPanel: null,
	annotatePanel: null,


	initialize: function(elements) {
		for(var x in elements) {
			this[x] = elements[x];
		}
		this.ve.vePanel = this;
	},



	render: function() {
		var $parentEl = $(this.parentEl);

		if(!this.backgroundEl) {
			this.backgroundEl = $(document.createElement('div'))
				.addClass('ve-panel-background')
				.appendTo($parentEl);
		}

		if(!this.mainMenuBar) {
			this.mainMenuBar = new VE.MainMenuBar({
				renderTo: this.backgroundEl[0],
				ve: this.ve,
			});
		}
		this.mainMenuBar.render();


		if(!this.veSubPanel) {
			this.veSubPanel = $(document.createElement('div'))
				.addClass('ve-subpanel')
				.appendTo(this.backgroundEl);
				
		}

		if(!this.vectorPanel) {
			this.vectorPanel = new VE.VectorPanel({
				parentEl: this.veSubPanel,
				classed: {
					've-vector-panel': true,
				},
				ve: this.ve,
				title: 'Map',
			});
		}
		this.vectorPanel.render();

		if(!this.annotatePanel) {
			this.annotatePanel = new VE.AnnotatePanel({
				parentEl: this.veSubPanel,
				classed: {
					've-annotate-panel': true,
				},
				ve: this.ve,
				title: 'Sequence',
				showAnnotatePreview: this.ve.showAnnotatePreview,
			});
		}
		this.annotatePanel.render();


		
		this.backgroundEl.attr('tabindex', "0")
			.on('keydown',  this.ve.onKeyDown.bind(this.ve));


		return this;
	},



});
























































;


VE.MainMenuBar = Backbone.UI.menu.MenuBar.extend({
	
	parentEl: null,
	ve: null,

	items: null, // []


	initialize: function(elements) {
		var me = this;
		// console.log(elements.ve.options.showComplementarySequence)
		if(!elements.items) {
			this.items = [
				{
					label: 'File',
					items: [
						{
							label: 'New Sequence',
							on: {
								click: function() {
									me.ve.trigger(VE.Event.BLANK_NEW_SEQUENCE);
								},
							},
						},
						// {
						// 	type: 'menuseparator',
						// },
						// {
						// 	label: 'Save',
						// },
						// {
						// 	label: 'Save As...',
						// },
						{
							type: 'menuseparator',
						},
						{
							label: 'Open a Sequence File',
							type: 'filefield',
							on: {
								fileselect: function(evt) {
									var files = evt.target.files;
									var file = files[0];
									me.ve.trigger(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, file, function(sequence) {
										// console.log(sequence);
										me.ve.trigger(VE.Event.NEW_SEQUENCE_OPENED, sequence);
									});
								},
							},
						},
						{
							label: 'Export To File',
							items: [
								{
									label: 'GENBANK',
									on: {
										click: function() {
											var gb = VE.ExportManager.sequenceModelToGenbank(me.ve.model);
											VE.ExportManager.saveStringToFile(gb, me.ve.model.get('name') + '.gb');


										},
									},
								},
								// FASTA
								// SBOL XML/RDF
							],
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Print',
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Properties',
						},
						{
							label: 'Preferences...',
						},
					],
				},
				{
					label: 'Edit',
					items: [
						{
							label: 'Cut',
							on: {
								click: function() {
									// me.ve.cutSelectionToClipboard();
								},
							},
						},
						{
							label: 'Copy',
							on: {
								click: function() {
									// me.ve.copySelectionToClipboard();
								},
							},
						},
						{
							label: 'Paste',
							on: {
								click: function() {
									// me.ve.pasteFromClipboard();
								},
							},
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Undo',
							on: {
								click: function() {
									me.ve.undo();
								},
							},
						},
						{
							label: 'Redo',
							on: {
								click: function() {
									me.ve.redo();
								},
							},
						},
					],
				},
				{
					label: 'View',
					items: [
						{
							label: 'Circular',
							type: 'checkbox',
							checked: (elements.ve.options.viewMode === 'pie') ? true : false,
							on: {
								change: function(checked) {
									if(checked) {
										me.ve.options.viewMode = 'pie';
									} else {
										me.ve.options.viewMode = 'rail';
									}

									var items = this.menu.items;
									for(var i=0,ii=items.length;i<ii;i++) {
										var item = items[i];
										if(item.label === 'Linear') {
											item.setChecked(!checked, true);
											break;
										}
									}

									me.ve.trigger(VE.VisibilityEvent.VIEW_MODE_CHANGED, me.ve.options.viewMode);
									
								},
							},
						},
						{
							label: 'Linear',
							type: 'checkbox',
							checked: (elements.ve.options.viewMode === 'rail') ? true : false,
							on: {
								change: function(checked) {
									if(checked) {
										me.ve.options.viewMode = 'rail';
									} else {
										me.ve.options.viewMode = 'pie';
									}

									var items = this.menu.items;
									for(var i=0,ii=items.length;i<ii;i++) {
										var item = items[i];
										if(item.label === 'Circular') {
											item.setChecked(!checked, true);
											break;
										}
									}

									me.ve.trigger(VE.VisibilityEvent.VIEW_MODE_CHANGED, me.ve.options.viewMode);
									
								},
							},
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Map Caret',
							type: 'checkbox',
							checked: elements.ve.options.showMapCaret,
							on: {
								click: function() {
									me.ve.options.showMapCaret = !me.ve.options.showMapCaret;
									me.ve.trigger(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, me.ve.options.showMapCaret);

								},
							},
						},
						{
							label: 'Features',
							type: 'checkbox',
							checked: elements.ve.options.showFeatures,
							on: {
								click: function() {
									me.ve.options.showFeatures = !me.ve.options.showFeatures;
									me.ve.trigger(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, me.ve.options.showFeatures);

								},
							}
						},
						{
							label: 'Alignments',
							checked: elements.ve.options.showAlignments,
							on: {
								click: function() {
									console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
									me.ve.options.showAlignments = !me.ve.options.showAlignments;
									me.ve.trigger(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, me.ve.options.showAlignments);

								},
							}
						},
						{
							label: 'Cut Sites',
							type: 'checkbox',
							checked: elements.ve.options.showCutSites,
							on: {
								click: function() {
									
									me.ve.options.showCutSites = !me.ve.options.showCutSites;
									me.ve.trigger(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, me.ve.options.showCutSites);

								},
							}
						},
						{
							label: 'ORFs',
							// checked: elements.ve.options.showOrfs,
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
									
							// 		me.ve.options.showOrfs = !me.ve.options.showOrfs;
							// 		me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs);

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.orfFrames = [0, 1, 2];
												me.ve.options.showOrfs = true;
											} else {
												me.ve.options.orfFrames = [];
												// me.ve.options.showOrfs = false;
												me.ve.options.showOrfs = (me.ve.options.orfRevComFrames.length > 0) ? true : false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(this.checked) orfFrames.push(0);
											if(_1) orfFrames.push(1);
											if(_2) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(_0) orfFrames.push(0);
											if(this.checked) orfFrames.push(1);
											if(_2) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfFrames.indexOf(2) === -1) ? false : true;
											var orfFrames = [];
											if(_0) orfFrames.push(0);
											if(_1) orfFrames.push(1);
											if(this.checked) orfFrames.push(2);
											me.ve.options.orfFrames = orfFrames;
											// me.ve.options.showOrfs = (orfFrames.length > 0);
											me.ve.options.showOrfs = (orfFrames.length > 0 || me.ve.options.orfRevComFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
							],
						},
						{
							label: 'Revcom ORFs',
							// checked: elements.ve.options.showOrfs,
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');
									
							// 		me.ve.options.showOrfs = !me.ve.options.showOrfs;
							// 		me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs);

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.orfRevComFrames = [0, 1, 2];
												me.ve.options.showOrfs = true;
											} else {
												me.ve.options.orfRevComFrames = [];
												// me.ve.options.showOrfs = false;
												me.ve.options.showOrfs = (me.ve.options.orfFrames.length > 0) ? true : false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(this.checked) orfRevComFrames.push(0);
											if(_1) orfRevComFrames.push(1);
											if(_2) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(_0) orfRevComFrames.push(0);
											if(this.checked) orfRevComFrames.push(1);
											if(_2) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showOrfs && elements.ve.options.orfRevComFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.orfRevComFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.orfRevComFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.orfRevComFrames.indexOf(2) === -1) ? false : true;
											var orfRevComFrames = [];
											if(_0) orfRevComFrames.push(0);
											if(_1) orfRevComFrames.push(1);
											if(this.checked) orfRevComFrames.push(2);
											me.ve.options.orfRevComFrames = orfRevComFrames;
											// me.ve.options.showOrfs = (orfRevComFrames.length > 0);
											me.ve.options.showOrfs = (orfRevComFrames.length > 0 || me.ve.options.orfFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_ORFS_CHANGED, me.ve.options.showOrfs, me.ve.options.orfFrames, me.ve.options.orfRevComFrames);
										},
									},
								},
							],
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Complementary',
							type: 'checkbox',
							checked: elements.ve.options.showComplementarySequence,
							on: {
								click: function() {
									me.ve.options.showComplementarySequence = !me.ve.options.showComplementarySequence;
									me.ve.trigger(VE.VisibilityEvent.SHOW_COMPLEMENTARY_CHANGED, me.ve.options.showComplementarySequence);
								},
							}
						},
						{
							label: 'Spaces',
							type: 'checkbox',
							checked: elements.ve.options.showSpaceEvery10Bp,
							on: {
								click: function() {
									me.ve.options.showSpaceEvery10Bp = !me.ve.options.showSpaceEvery10Bp;
									me.ve.trigger(VE.VisibilityEvent.SHOW_SPACES_CHANGED, me.ve.options.showSpaceEvery10Bp);
								},
							}
						},
						{
							label: 'Sequence AA',
							// on: {
							// 	click: function() {
							// 		console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

							// 	},
							// },
							items: [
								{
									label: 'All Frames',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.length === 3) ? true : false,
									on: {
										change: function() {
											if(this.checked) {
												me.ve.options.aminoAcidFrames = [0, 1, 2];
												me.ve.options.showAminoAcids = true;
											} else {
												me.ve.options.aminoAcidFrames = [];
												me.ve.options.showAminoAcids = false;
											}

											var items = this.menu.items;
											for(var i=0,ii=items.length;i<ii;i++) {
												items[i].setChecked(this.checked, true);
											}

											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, me.ve.options.aminoAcidFrames);

										},
									},
								},
								{
									label: 'Frame 1',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(0) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(this.checked) aminoAcidFrames.push(0);
											if(_1) aminoAcidFrames.push(1);
											if(_2) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
								{
									label: 'Frame 2',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(1) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(_0) aminoAcidFrames.push(0);
											if(this.checked) aminoAcidFrames.push(1);
											if(_2) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
								{
									label: 'Frame 3',
									type: 'checkbox',
									checked: (elements.ve.options.showAminoAcids && elements.ve.options.aminoAcidFrames.indexOf(2) !== -1) ? true : false,
									on: {
										change: function() {
											var _0 = (me.ve.options.aminoAcidFrames.indexOf(0) === -1) ? false : true;
											var _1 = (me.ve.options.aminoAcidFrames.indexOf(1) === -1) ? false : true;
											var _2 = (me.ve.options.aminoAcidFrames.indexOf(2) === -1) ? false : true;
											var aminoAcidFrames = [];
											if(_0) aminoAcidFrames.push(0);
											if(_1) aminoAcidFrames.push(1);
											if(this.checked) aminoAcidFrames.push(2);
											me.ve.options.aminoAcidFrames = aminoAcidFrames;
											me.ve.options.showAminoAcids = (aminoAcidFrames.length > 0);
										
											me.ve.trigger(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, me.ve.options.showAminoAcids, aminoAcidFrames);
										},
									},
								},
							],
						},
						// {
						// 	label: 'Revcom AA',
						// 	on: {
						// 		click: function() {
						// 			console.error('TEM: change menu item type to nested menu item (see Ext.js VE)');

						// 		},
						// 	}
						// },
						{
							type: 'menuseparator',
						},
						{
							label: 'Feature Labels',
							type: 'checkbox',
							checked: elements.ve.options.showFeatureLabels,
							on: {
								click: function() {
									me.ve.options.showFeatureLabels = !me.ve.options.showFeatureLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, me.ve.options.showFeatureLabels);

								},
							}
						},
						{
							label: 'Alignment Labels',
							type: 'checkbox',
							checked: elements.ve.options.showAlignmentLabels,
							on: {
								click: function() {
									me.ve.options.showAlignmentLabels = !me.ve.options.showAlignmentLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, me.ve.options.showAlignmentLabels);

								},
							}
						},
						{
							label: 'Cut Site Labels',
							type: 'checkbox',
							checked: elements.ve.options.showCutSiteLabels,
							on: {
								click: function() {
									me.ve.options.showCutSiteLabels = !me.ve.options.showCutSiteLabels;
									me.ve.trigger(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, me.ve.options.showCutSiteLabels);

								},
							}
						},
						{
							type: 'menuseparator',
						},
						{
							label: 'Annotate Panel Preview',
							type: 'checkbox',
							checked: elements.ve.options.showAnnotatePreview,
							on: {
								click: function() {
									me.ve.options.showAnnotatePreview = !me.ve.options.showAnnotatePreview;
									me.ve.trigger(VE.VisibilityEvent.SHOW_ANNOTATE_PREVIEW_CHANGED, me.ve.options.showAnnotatePreview);

								},
							}
						},
					],
				},
				{
					label: 'Tools',
				},
			];
		}

		Backbone.UI.menu.MenuBar.prototype.initialize.call(this, elements);

		this.$el.addClass('ve-main-menubar')

	},




});




























































;


VE.VectorPanel = Backbone.UI.Panel.extend({
	
	parentEl: null,
	ve: null,
	
	items: null, // []


	initialize: function(elements) {
		
		

		Backbone.UI.Panel.prototype.initialize.call(this, elements);
	},

	render: function() {
		

		Backbone.UI.Panel.prototype.render.call(this);
		return this;
	},


});




























































;


VE.AnnotatePanel = Backbone.UI.Panel.extend({
	
	parentEl: null,
	ve: null,
	
	items: null, // []
	phonyScrollContainer: null,

	initialize: function(elements) {
		

		
		Backbone.UI.Panel.prototype.initialize.call(this, elements);
	},

	render: function() {
		Backbone.UI.Panel.prototype.render.call(this);




		// this.bodyEl.remove();

		// this.el = this.backgroundEl.node();
		// this.$el = $(this.el);

		// this.phonyScrollContainer = new Backbone.UI.PhonyScrollContainer({
		// 	renderTo: this.el,
		// 	showPreview: this.showAnnotatePreview,
		// })
		// .render();



		this.bodyEl.remove();

		this.el = this.backgroundEl[0];
		this.$el = $(this.el);

		this.phonyScrollContainer = new Backbone.UI.PhonyScrollContainer({
			renderTo: this.el,
			showPreview: this.showAnnotatePreview,
		})
		.render();



		

		return this;
	},


});




























































;
(function(){





VE.FeatureInspectionWindow = Backbone.UI.Window.extend({
	
	header: null,
	body: null,
	footer: null,


	initialize: function(elements) {
		var me = this;

		var defaultElements = {

			css: {
				'width': '400px',
				// 'min-height': '500px',

				'top': '30px',
				'left': '30px',
			},

			// title: "New Annotation",

			footerButtons: [
				{
					label: 'Cancel',
					onclick: function(evt) {
						// console.log('cancel');
						// me.hide();
						me.trigger('cancel-click', me);
						me.hide();

					},
				},
				{
					label: 'Ok',
					onclick: function(evt) {
						// console.log('ok');
						me.trigger('ok-click', me);
						me.hide();
						
					},
				},
			],

		};

		// defaultElements.title = elements.title || "";

		// defaultElements.posX = elements.posX;
		// defaultElements.posY = elements.posY;

		Backbone.UI.Window.prototype.initialize.call(this, defaultElements);

		this.$el.addClass('feature-inspector-window');


		var body = this.body;


		var nameRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var nameLabel = $(document.createElement('div'))
			.text('Name:')
			.appendTo(nameRow);

		var nameInput = this.nameInput = $(document.createElement('input'))
			.attr({
				type: 'text',
				// size: 1,
			})
			.appendTo(nameRow);

		nameRow.appendTo(body);


		var strandRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var strandLabel = $(document.createElement('div'))
			.text('Strand:')
			.appendTo(strandRow);

		var strandRadioGroup = this.strandRadioGroup = new Backbone.UI.RadioGroup({
			renderTo: strandRow,
			onlyOneButtonMustBeSelected: true,
			items: [
				{
					label: 'Positive',
				},
				{
					label: 'Negative',
				},
			],
		});

		strandRow.appendTo(body);


		var typeRow =  $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var typeLabel = $(document.createElement('div'))
			.text('Type:')
			.appendTo(typeRow);

		var typeComboBox = this.typeComboBox = new Backbone.UI.Combobox({
			renderTo: typeRow,
			defaultValue: VE.Constants.FEATURE_TYPES[0],
			items: VE.Constants.FEATURE_TYPES,
		});

		typeRow.appendTo(body);


		var startRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var startLabel = $(document.createElement('div'))
			.text('Start:')
			.appendTo(startRow);

		var startInput = this.startInput = $(document.createElement('input'))
			.attr({
				type: 'number',
				// size: 1,
			})
			.appendTo(startRow);

		startRow.appendTo(body);


		var endRow = $(document.createElement('div'))
			.addClass('feature-inspector-row');

		var endLabel = $(document.createElement('div'))
			.text('End:')
			.appendTo(endRow);

		var endInput = this.endInput = $(document.createElement('input'))
			.attr({
				type: 'number',
				// size: 1,
			})
			.appendTo(endRow);

		endRow.appendTo(body);


		if(typeof elements === 'object') {

			var title = elements.title || "";
			var start = elements.startBp || 0;
			var end = elements.endBp || 0;
			var name = elements.name || "";
			var strand = elements.strand || 1;

			this.setTitle(title);
			startInput.prop('value', start);
			endInput.prop('value', end);
			nameInput.prop('value', name);

			strandRadioGroup.setSelected(strand === 1 ? 0 : 1);

			if(elements.type) {
				typeComboBox.setValue(elements.type);
			}

		}

	},


	createModel: function() {
		var start = parseInt(this.startInput.prop('value'));
		var end = parseInt(this.endInput.prop('value'));
		var name = this.nameInput.prop('value');
		var strand = (this.strandRadioGroup.getSelected()[0] === 0) ? 1 : -1;
		var type = this.typeComboBox.value;
		type = (typeof type === 'object') ? type.data : type;
		
		// console.warn('TODO: validate feature');

		// if(isNan(end) || isNan(start)) {
		// 	return null;
		// }

		// if(name.trim().length === 0) {
		// 	return null;
		// }

		var annot = new VE.Annotation({
			start: start,
			end: end,
			name: name,
			strand: strand,
			type: type,
		});

		// console.log(annot);

		


		return annot;
	},	





});























































})();;
(function(){


function getTime(time) {
	var now = new Date().getTime();
	return (time === undefined) ? now : now - time;
}




VE.AnnotateContainer = Backbone.View.extend({

	tagName: "div",

	className: "AnnotateContainer",

	events: {
		"scroll": "onScroll",
		"mousedown .annotateSVG": "onAnnotateSvgMousedown",
		"mouseup .annotateSVG": "onAnnotateSvgMouseup",
		"mousemove .annotateSVG": "onAnnotateSvgMousemove",
	},


	CHAR_WIDTH: 9,

	ALIGNMENT_HEIGHT: 20,
	EMPTY_AA_HEIGHT: 0,
	FONT_SIZE: 12,
	FONT_FAMILY: "Ubuntu Mono",
	COMPLEMENTARY_SEQUENCE_FILL: "#b0b0b0",
	COMPLEMENTARY_VERTICAL_OFFSET: 16,
	LETTER_SPACING: "3px",

	CARET_TIMER_REFRESH_SPEED: "1s", // blink time of the caret, in seconds

	BOTTOM_PADDING: 6,

	showSpaceEvery10Bp: true,
	showComplementarySequence: true,
	showFeatures: true,

	showCutSites: false,
	showOrfs: false,
	showAlignments: false,
	showAminoAcids: false,
	showAminoAcidsRevCom: false,


	N_ROWS_TOP_BUFFER: 2,
	N_ROWS_BOT_BUFFER: 2,

	
	selectionStartBp: null,
	selectionEndBp: null,
	caretBpIndex: 0,

	phonyScrollContainer: null,


	initialize: function(elements) {
		var me = this;
		// this.listenTo(this.model, "change", this.render);

		for(var x in elements) {
			this[x] = elements[x];
		}

		// this.el = this.phonyScrollContainer.scrollBody.el;
		// this.$el = this.phonyScrollContainer.scrollBody.$el;
		this.setElement(this.phonyScrollContainer.scrollBody.el);

		this.listenTo(this.phonyScrollContainer, 'all', function() {
			this.trigger.apply(this, arguments);
		});

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;
		this.ve.annotateContainer = this;

		this.calculateLogLength();

		this.annotateSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "annotateSVG");

		this.linesSVG = this.annotateSVG.append("svg:g")
			.attr("class", "linesSVG");

		this.sequenceSVG = this.annotateSVG.append("svg:g")
			.attr("class", "sequenceSVG");

		this.bpLabelsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "bpLabelsSVG");

		this.aminoAcidsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "aminoAcidsSVG");

		this.alignmentsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "alignmentsSVG");

		this.queryGapSVG = this.annotateSVG.append("svg:g")
			.attr("class", "queryGapSVG");

		this.featuresSVG = this.annotateSVG.append("svg:g")
			.attr("class", "featuresSVG");


		this.orfsSVG = this.annotateSVG.append("svg:g")
			.attr("class", "orfsSVG");

		this.cutSitesSVG = this.annotateSVG.append("svg:g")
			.attr("class", "cutSitesSVG");


		this.selectionLayerSVG = this.annotateSVG.append("svg:g")
			.attr("class", "selectionLayerSVG");
		// this.cutSitesSVG = VE.annotate.CutSiteRenderer.newCutSitesSVG(this.annotateSVG);

		VE.annotate.CutSiteRenderer.appendCurvyLinePattern(this.annotateSVG);

		
		this.aminoAcidFrames = this.aminoAcidFrames || [];
		this.aminoAcidRevComFrames = this.aminoAcidRevComFrames || [];
		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		// this.scrollTop = 0;
		// this.height = 0;
		this.scrollTop = this.phonyScrollContainer.getPhonyScrollTop();
		this.height = this.$el.height();


		// temporary, for testing purposes
		// this.bpPerRow = 40;
		
		this.bpPerRow = this.calculateBpPerRow();

		this.addListeners();

		this.calculateRows();


		this.initCaret();

		// this.onScroll();



		if(this.phonyScrollContainer.showPreview) {
			
			// 350 - 380

			this.phonyScrollContainer.scrollPreview.render = function() {
				// console.time('a');

				VE.annotate.PreviewRenderer.drawPreview(me.phonyScrollContainer.scrollPreview.canvas,
					me.phonyScrollContainer.scrollPreview.context, me);

				// console.timeEnd('a');
			}
			
		}

		// var svgHeight = this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height;
		// svgHeight += this.BOTTOM_PADDING;
		var svgHeight = this.calculateSvgHeight();
		this.phonyScrollContainer.setPhonyHeight(svgHeight);

		// debugger;

	},
	

	calculateRows: function() {
		var bpPerRow = this.bpPerRow;

		var sequence = this.model.get('sequence');
		var seqLen = sequence.length;

		var n_rows = Math.ceil(seqLen / bpPerRow);

		// -----------------------------------------------------
		//  Initialize the new rows
		// -----------------------------------------------------

		// var newRows = new Array(n_rows);
		// for(var i=0;i<n_rows;i++) {
		// 	newRows[i] = {
		// 		height: null,
		// 		y: null, // position at top of row
				
		// 		// these are arrays of indices
		// 		features: [],
		// 		alignments: [],
		// 		orfs: [],
		// 		cutSites: [],
		// 	};
		// }

		var newRows = this.rows || new Array(n_rows);
		newRows.length = n_rows;

		for(var i=0;i<n_rows;i++) {
			var newRow;
			if(newRow = newRows[i]) {
				newRow.height = null;
				newRow.y = null; // position at top of row
				
				// these are arrays of indices
				newRow.features = newRow.features.length ? [] : newRow.features;
				newRow.alignments = newRow.alignments.length ? [] : newRow.alignments;
				newRow.orfs = newRow.orfs.length ? [] : newRow.orfs;
				newRow.cutSites = newRow.cutSites.length ? [] : newRow.cutSites;

				// newRow.features = [];
				// newRow.alignments = [];
				// newRow.orfs = [];
				// newRow.cutSites = [];

			} else {
				newRows[i] = {
					height: null,
					y: null, // position at top of row
					
					// these are arrays of indices
					features: [],
					alignments: [],
					orfs: [],
					cutSites: [],
				};
			}
		}


		// -----------------------------------------------------
		//  Adding the features
		// -----------------------------------------------------
		if(this.showFeatures) {
			// var features = this.model.get('features');

			// // map from feature index to alignment index
			// this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);

			// for(var i=0;i<features.length;i++) {
			// 	var annot = features[i];
			// 	var start = annot.get('start');
			// 	var end = annot.get('end');
			// 	if(end < start) throw new Error("TODO");

			// 	var annotStartRow = this.bpToRowIndex(start);
			// 	var annotEndRow = this.bpToRowIndex(end-1);

			// 	var alignIndex = this.featAlignMap[i];
			// 	// console.log(annotStartRow, alignIndex)

			// 	for(var j=annotStartRow;j<=annotEndRow;j++) {
			// 		// putting the index rather than the feature is significantly faster
			// 		// newRows[j].features[alignIndex] = i;
			// 		if(newRows[j].features[alignIndex] === undefined) {
			// 			newRows[j].features[alignIndex] = [];
			// 		}
			// 		newRows[j].features[alignIndex].push(i);
			// 	}
			// }
			var features = this.model.get('features');

			// map from feature index to alignment index
			this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);

			for(var i=0;i<features.length;i++) {
				var annot = features[i];
				var start = annot.get('start');
				var end = annot.get('end');

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.featAlignMap[i];
				// console.log(annotStartRow, alignIndex)

				if(end >= start) {
					
					for(var j=annotStartRow;j<=annotEndRow;j++) {
						// putting the index rather than the feature is significantly faster
						// newRows[j].features[alignIndex] = i;
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

				} else { // feature spanning origin
				
					for(var j=0;j<=annotStartRow;j++) {
						// putting the index rather than the feature is significantly faster
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

					for(var j=annotStartRow;j<n_rows;j++) {
						// putting the index rather than the feature is significantly faster
						if(newRows[j].features[alignIndex] === undefined) {
							newRows[j].features[alignIndex] = [];
						}
						newRows[j].features[alignIndex].push(i);
					}

				}
			}
		}

		// -----------------------------------------------------
		//  Adding the cut sites
		// -----------------------------------------------------
		if(this.showCutSites) {
			var sites = this.model.get('cutSites');
			this.cutSitesAlignMap = VE.RendererUtil.buildAlignmentMap(sites, seqLen);

			for(var i=0;i<sites.length;i++) {
				var annot = sites[i];
				var start = annot.get('start');
				var end = annot.get('end');
				if(end < start) throw new Error("TODO");

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.cutSitesAlignMap[i];

				for(var j=annotStartRow;j<=annotEndRow;j++) {
					newRows[j].cutSites[alignIndex] = i;
				}
			}
		}

		// -----------------------------------------------------
		//  Adding the ORFs
		// -----------------------------------------------------
		if(this.showOrfs) {
			var orfs = this.model.get('orfs');
			this.orfsAlignMap = VE.RendererUtil.buildAlignmentMap(orfs, seqLen);

			for(var i=0;i<orfs.length;i++) {
				var annot = orfs[i];
				var start = annot.get('start');
				var end = annot.get('end');
				if(end < start) throw new Error("TODO");

				var annotStartRow = this.bpToRowIndex(start);
				var annotEndRow = this.bpToRowIndex(end-1);

				var alignIndex = this.orfsAlignMap[i];

				for(var j=annotStartRow;j<=annotEndRow;j++) {
					newRows[j].orfs[alignIndex] = i;
				}
			}
		}

		// -----------------------------------------------------
		//  Adding the alignments
		// -----------------------------------------------------
		if(this.showAlignments) {
			// VE.RendererUtil.assignAlignmentRenderInfoToRows(this, newRows);

			var alignments = this.model.get('alignments');
			for(var i=0;i<alignments.length;i++) {
				var aligns = alignments[i];
				for(var j=0;j<newRows.length;j++) {
					newRows[j].alignments[i] = [];
				}
				for(var j=0;j<aligns.length;j++) {
					var align = aligns[j];

					var start = align.queryStart;
					var end = (align.type === 'queryGap') ? start : start + align.subjectSequence.length;
					if(end < start) throw new Error("TODO");

					var annotStartRow = this.bpToRowIndex(start);
					var annotEndRow = this.bpToRowIndex(end-1);

					for(var k=annotStartRow;k<=annotEndRow;k++) {
						newRows[k].alignments[i].push(j);
					}
				}
			}
		}



		// ------------------------------------------------------------
		//  Calculate the base height of each row (same for all rows)
		// ------------------------------------------------------------
		var rowBaseHeight = 20 + 3;
		if(this.showComplementarySequence) {
			rowBaseHeight += 20;
		}
		if(this.showAminoAcids) {
			rowBaseHeight += 20 * this.aminoAcidFrames.length;
		}
		if(this.showAminoAcidsRevCom){
			rowBaseHeight += 20 * this.aminoAcidRevComFrames.length;
		}

		// ------------------------------------------------------------
		//  Calculate the additional height for each row
		// ------------------------------------------------------------
		function calculateHeight(row) {
			var rowHeight = rowBaseHeight;
			rowHeight += (row.features.length > 0) ? row.features.length * (10) + 2 : 0;
			rowHeight += row.alignments.length * (20);
			rowHeight += row.orfs.length * (6);
			rowHeight += row.cutSites.length * (30);
			return rowHeight;
		}

		if(newRows.length === 0) {
			newRows[0] = {
				height: null,
				y: null, // position at top of row
				
				// these are arrays of indices
				features: [],
				alignments: [],
				orfs: [],
				cutSites: [],
			};
		}
		
		newRows[0].y = 0;
		newRows[0].height = calculateHeight(newRows[0]);
		for(var i=1;i<n_rows;i++) {
			newRows[i].height = calculateHeight(newRows[i]);

			newRows[i].y = newRows[i-1].y + newRows[i-1].height;
		}

		this.rows = newRows;

	},



	render: function() {
		// var start = getTime();
		// console.time('A')

		this.clean();

		// var scrollTop = this.$el.scrollTop();
		var scrollTop = this.scrollTop;
		// var height = this.$el.height();
		var height = this.height;

		var bpPerRow = this.bpPerRow;
		var charPerRow = this.getCharPerRow();
		var CHAR_WIDTH = this.CHAR_WIDTH;

		var rowIndices = this.getVisibleRowIndices();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		// this.annotateSVG.attr("height", this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height);

		// var svgHeight = this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height;
		// svgHeight += this.BOTTOM_PADDING;
		var svgHeight = this.calculateSvgHeight();
		this.phonyScrollContainer.setPhonyHeight(svgHeight);


		// var _a = 0;

		
		for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
			
			var row = this.rows[i];

			
			this.drawSplitLine(0, sequenceX2 + CHAR_WIDTH, row.y);

			this.renderBpLabel(i*bpPerRow + 1, 10, row.y + 20);

			// var _b = performance.now();
			this.drawBpText(i);
			// _a += performance.now() - _b;

			if(this.showComplementarySequence) {
				this.drawRevcomBpText(i);
			}

			
			if(this.showFeatures) {
				VE.annotate.FeatureRenderer.drawFeatures(this, i);
			}
			

			if(this.showCutSites) {
				VE.annotate.CutSiteRenderer.drawCutSites(this, i);
			}

			if(this.showOrfs) {
				VE.annotate.OrfRenderer.drawOrfs(this, i);
			}

			if(this.showAlignments) {
				VE.annotate.AlignmentRenderer.drawAlignments(this, i);
			}

			if(this.showAminoAcids) {
				this.renderAA(i);
			}

			if(this.showAminoAcidsRevCom) {
				this.renderRevComAA(i);
			}
			
		}
		
		// console.log(_a);

		if(this.selectionStartBp !== null && this.selectionEndBp !== null) {
			this.drawSelectionLayer(this.selectionStartBp, this.selectionEndBp);
		}


		// console.time('A')
		// this.sequenceSVG.selectAll("text")
		// 				.attr("font-family", this.FONT_FAMILY)
		// 				.attr("font-size", this.FONT_SIZE)
		// 				.attr("letter-spacing", this.LETTER_SPACING)
		// 				.style('pointer-events', 'none');

		// this.sequenceSVG.selectAll(".complementarySequenceSVG")
		// 				.attr("fill", this.COMPLEMENTARY_SEQUENCE_FILL);

		// this.sequenceSVG.selectAll(".bpLabelSVG")
		// 				.attr("xml:space", "preserve");


		this.aminoAcidsSVG.selectAll("text")
						.attr("xml:space", "preserve")
						.attr("fill", "blue")
						.attr("font-family", this.FONT_FAMILY)
						.attr("font-size", this.FONT_SIZE)
						.attr("letter-spacing", this.LETTER_SPACING);
		// console.timeEnd('A')

		// var elapsed = getTime(start);
		// console.log(elapsed);
		// console.timeEnd('A')

		// 2648.3514099783083

		// VE.annotate.PreviewRenderer.drawPreview(this.phonyScrollContainer.scrollPreview.canvas,
				// this.phonyScrollContainer.scrollPreview.context, this);

		this.resizeSvg();
	},


	resizeSvg: function() {
		var width = this.$el.width();
		var height = this.$el.height();
		// console.log(width, height);
		this.annotateSVG.attr({
			width: width,
			height: height,
		});
	},



	
	drawBpText: function(rowIndex) {
		var row = this.rows[rowIndex];
		var rowStr = this.getRowStr(rowIndex);
		this.sequenceSVG.append("svg:text")
				.attr("class", "sequenceSVG")
				.attr("x", this.getSequenceX1())
				// .attr("y", row.y +this.getBpTextOffset(row))
				.attr("y", row.y + this.getBpTextOffset(row) - this.scrollTop)
				.text(rowStr);
	},


	clean: function() {
		this.linesSVG.selectAll('*').remove();
		this.sequenceSVG.selectAll('*').remove();
		this.bpLabelsSVG.selectAll('*').remove();
		this.aminoAcidsSVG.selectAll('*').remove();
		this.alignmentsSVG.selectAll('*').remove();
		this.featuresSVG.selectAll('*').remove();

		this.orfsSVG.selectAll('*').remove();
		this.cutSitesSVG.selectAll('*').remove();

		// this.selectionLayerSVG.selectAll('*').remove();
		this.queryGapSVG.selectAll('*').remove();
	},




	calculateSvgHeight: function() {
		var h = (this.rows.length > 0) ? this.rows[this.rows.length-1].y+this.rows[this.rows.length-1].height : 0;
		h += this.BOTTOM_PADDING;
		return h;
	},





	renderAA: function(rowIndex) {
		var row = this.rows[rowIndex];
		var bpPerRow = this.bpPerRow;

		var rowStartBp = rowIndex * bpPerRow;

		var leadingFrame = rowStartBp % 3;

		var frames = this.aminoAcidFrames;

		var sequenceX1 = this.getSequenceX1();
		var yOffset = this.getAminoAcidLayerOffset(row);

		for(var i=0,ii=frames.length;i<ii;i++) {
			var str = this.getRowAaStr(rowIndex, frames[i]);
			// console.log(str)
			this.aminoAcidsSVG.append("svg:text")
				.attr("class", "aminoAcidSVG")
				.attr("x", sequenceX1)
				.attr("y", row.y - this.scrollTop + yOffset - (ii - i - 1) * 20)
				.style('pointer-events', 'none')
				.text(str);
		}


	},


	getRowAaStr: function(rowIndex, frame) {
		var bpPerRow = this.bpPerRow;
		var rowStartBp = rowIndex * bpPerRow;
		var rowEndBp = (rowIndex + 1) * bpPerRow;

		var start = rowStartBp + frame;
		var len = Math.ceil((rowEndBp - start)/3) * 3;
		var end = start + len;

		var bps = this.model.getSubstring(start, end).toLowerCase();

		var aas = Bio.Translator.translateSequence(bps);

		var a = [];
		for(var i=0;i<frame;i++) {
			a.push(' ');
		}
		for(var i=0,ii=aas.length;i<ii;i++) {
			a.push(aas[i], '  ');
		}

		aas = a.join('');

		if(this.showSpaceEvery10Bp) {
			var a = [];
			for(var i=0;i<aas.length;i+=10) {
				a.push(aas.slice(i,i+10));
			}
			return a.join(' ');
		} else {
			return aas;
		}
	},



	renderRevComAA: function(rowIndex) {
		var row = this.rows[rowIndex];
		var bpPerRow = this.bpPerRow;

		var rowStartBp = rowIndex * bpPerRow;

		var leadingFrame = rowStartBp % 3;

		var frames = this.aminoAcidRevComFrames;

		var sequenceX1 = this.getSequenceX1();
		var yOffset = this.getAminoAcidRevComLayerOffset(row);

		for(var i=0,ii=frames.length;i<ii;i++) {
			
			var str = this.getRowRevcomAaStr(rowIndex, frames[i]);
			// console.log(str)


			this.aminoAcidsSVG.append("svg:text")
				.attr("class", "aminoAcidRevComSVG")
				.attr("x", sequenceX1)
				.attr("y", row.y - this.scrollTop + yOffset + (i) * 20 - 6)
				// .attr("y", row.y - this.scrollTop + yOffset)
				.style('pointer-events', 'none')
				.text(str);
		}


	},



	// incorrect
	getRowRevcomAaStr: function(rowIndex, frame) {
		var bpPerRow = this.bpPerRow;
		var sequence = this.model.get('sequence');

		function getRevcomRowStr(index) {
			var start = index*bpPerRow;
			var bpInRow = Math.min(start + bpPerRow, sequence.length) - start;
			var ret = "";

			for(var i=0;i<bpInRow;i++) {
				ret += sequence[start + i];
			}
			ret = ret.toLowerCase();
			return VE.RendererUtil.complement(ret);
		}

		var str = getRevcomRowStr(rowIndex);

		

	},

	// // incorrect
	// getRowRevcomAaStr: function(rowIndex, frame) {
	// 	var seqlen = this.model.length();
	// 	var bpPerRow = this.bpPerRow;

	// 	var rowStartBp = rowIndex * bpPerRow;
	// 	var rowEndBp = (rowIndex + 1) * bpPerRow;

	// 	var rowStartBpPrime = seqlen - rowEndBp;
	// 	var rowEndBpPrime = seqlen - rowStartBp;

	// 	// var startPrime = rowStartBpPrime + frame;
	// 	var startPrime = rowStartBpPrime - frame;
	// 	// var startPrime = rowStartBpPrime - frame - 1;

	// 	var len = Math.ceil((rowEndBpPrime - startPrime)/3) * 3;

	// 	// var r = rowEndBpPrime - startPrime;
	// 	// var len = r - r%3;


	// 	var endPrime = startPrime + len;


	// 	var start = seqlen - endPrime;
	// 	var end = seqlen - startPrime;

	// 	console.log(startPrime, endPrime)
	// 	console.log(frame, start, end)

	// 	var bps = this.model.getSubstring(start, end).toLowerCase();
	// 	// var bps = this.model.getSubstring(startPrime, endPrime).toLowerCase();

	// 	var revcomBps = [];
	// 	for(var i=bps.length-1;i>=0;i--) {
	// 		revcomBps.push(VE.RendererUtil.complementSymbol(bps[i]))
	// 	}
		
	// 	// console.log(bps)
	// 	// console.log(revcomBps.join(''));

	// 	// var start = rowStartBp + frame;
	// 	// var len = Math.ceil((rowEndBp - start)/3) * 3;
	// 	// var end = start + len;


	// 	// var bps = this.model.getSubstring(start, end).toLowerCase();

	// 	var aas = Bio.Translator.translateSequence(revcomBps);
	// 	// console.log(aas);


	// 	var a = [];
	// 	for(var i=0;i<frame;i++) {
	// 		a.push(' ');
	// 	}
	// 	for(var i=0,ii=aas.length;i<ii;i++) {
	// 		a.push(aas[i], '  ');
	// 	}

	// 	aas = a.join('');

	// 	if(this.showSpaceEvery10Bp) {
	// 		var a = [];
	// 		for(var i=0;i<aas.length;i+=10) {
	// 			a.push(aas.slice(i,i+10));
	// 		}
	// 		return a.join(' ');
	// 	} else {
	// 		return aas;
	// 	}
	// },



	

	drawRevcomBpText: function(rowIndex) {
		var row = this.rows[rowIndex];
		var revComStr = this.getRowRevcomStr(rowIndex);
		this.sequenceSVG.append("svg:text")
			.attr("class", "complementarySequenceSVG")
			.attr("x", this.getSequenceX1())
			// .attr("y", row.y + this.getBpTextOffset(row) + this.COMPLEMENTARY_VERTICAL_OFFSET)
			.attr("y", row.y + this.getBpTextOffset(row) + this.COMPLEMENTARY_VERTICAL_OFFSET - this.scrollTop)
			.text(revComStr);
	},



	drawSplitLine: function(x1, x2, y) {
		this.linesSVG.append("svg:line")
			.attr("x1", x1)
			// .attr("y1", y)
			.attr("y1", y - this.scrollTop)
			.attr("x2", x2)
			// .attr("y2", y)
			.attr("y2", y - this.scrollTop)
			.attr("stroke", "lightgray");
	},


	renderBpLabel: function(basePairs, labelX, labelY){
		this.sequenceSVG.append("svg:text")
			.attr("class", "bpLabelSVG")
			.attr("x", labelX)
			// .attr("y", labelY)
			.attr("y", labelY - this.scrollTop)
			.text(this.renderIndexString(basePairs));
	},

	renderIndexString: function(pIndex){
		var whiteSpaceString = "                                                ";
		var result = String(pIndex);

		// var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		// logLength = Math.ceil(logLength);
		// logLength = Math.max(logLength, 4);
		var logLength = this.logLength;

		result = whiteSpaceString.slice(0, logLength - result.length) + result;

		// if(pIndex < 10){
		// 	result = "   "  + result;
		// } else if(pIndex < 100){
		// 	result = "  " + result;
		// } else if(pIndex < 1000){
		// 	result = " " + result;
		// } else if(pIndex < 10000){
		// 	result = "" + result;
		// }

		return result;
	},

	calculateLogLength: function() {
		var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		logLength = Math.ceil(logLength);
		logLength = Math.max(logLength, 4);
		return this.logLength = logLength;
	},

	getBpTextOffset: function(row) {
		var offset = 20;
		if(this.showAminoAcids) {
			offset += 20 * this.aminoAcidFrames.length;
		}
		if(this.showAlignments) {
			offset += row.alignments.length * (20);
		}
		if(this.showOrfs) {
			offset += row.orfs.length * (6);
		}
		if(this.showCutSites) {
			offset += row.cutSites.length * (30);
		}
		return offset;
	},

	getFeatureLayerOffset: function(row) {
		var offset = this.getBpTextOffset(row);
		if(!this.showComplementarySequence) {
			offset -= 20;
		}
		if(this.showAminoAcidsRevCom) {
			offset += 20 * this.aminoAcidRevComFrames.length;
		}
		return offset;
	},

	getCutSiteLayerOffset: function(row) {
		return 0;
	},

	// might mean different thing than other offsets... (maybe)
	getOrfLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6);
	},

	// might mean different thing than other offsets... (maybe)
	getAlignmentLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6) + row.alignments.length * (20);
	},

	// might mean different thing than other offsets... (maybe)
	getAminoAcidLayerOffset: function(row) {
		return row.cutSites.length * (30) + row.orfs.length * (6) + row.alignments.length * (20) + this.aminoAcidFrames.length * 20;
	},

	getAminoAcidRevComLayerOffset: function(row) {
		var offset = this.getBpTextOffset(row);
		if(!this.showComplementarySequence) {
			offset -= 20;
		}
		offset += 40;
		return offset;
	},


	bpToRowIndex: function(bpIndex) {
		return Math.floor(bpIndex/this.bpPerRow);
	},

	bpToColIndex: function(bpIndex) {
		var colIndex = bpIndex%this.bpPerRow;
		if(this.showSpaceEvery10Bp) {
			colIndex += Math.floor(colIndex/10);
		}
		return colIndex;
	},


	getCharPerRow: function() {
		if(this.showSpaceEvery10Bp) {
			return this.bpPerRow + Math.ceil(this.bpPerRow/10) - 1;
		}
		return this.bpPerRow;
	},


	binarySearchRows: function(y) {

		// TODO: can be made faster, given that space between rows are roughly the same
		function binarySearch(searchElement) {
			'use strict';

			var minIndex = 0;
			var maxIndex = this.length - 1;
			var currentIndex;
			var currentElement;

			while (minIndex <= maxIndex) {
				currentIndex = (minIndex + maxIndex) / 2 | 0;
				currentElement = this[currentIndex].y;
				// console.log(currentElement);

				if (currentElement < searchElement) {
					minIndex = currentIndex + 1;
					if(currentIndex < this.length - 1) {
						if(searchElement < currentElement + this[currentIndex].height) {
							return currentIndex;
						}
					}
				}
				else if (currentElement > searchElement) {
					maxIndex = currentIndex - 1;
				}
				else {
					return currentIndex;
				}
			}

			// not really sure if this is correct
			return currentIndex;
		}

		var rowIndex = binarySearch.call(this.rows, y);
		return rowIndex;
	},

	getVisibleRowIndices: function(useCachedValues) {
		var rows = this.rows;
		// var scrollTop = this.el.scrollTop;
		// var height = this.$el.height();
		var scrollTop, height;
		// if(useCachedValues) {
			scrollTop = this.scrollTop;
			height = this.height;
		// } else {
		// 	scrollTop = this.el.scrollTop;
		// 	height = this.$el.height();
		// }
		
		var scrollBottom = scrollTop + height;

		var temTopRowIndex = this.binarySearchRows(scrollTop);
		var temBotRowIndex = rows.length - 1;
		for(var i=temTopRowIndex;i<rows.length;i++) {
			if(rows[i].y > scrollBottom) {
				temBotRowIndex = i;
				break;
			}
		}

		var topRowIndex = temTopRowIndex - this.N_ROWS_TOP_BUFFER;
		var botRowIndex = temBotRowIndex + this.N_ROWS_BOT_BUFFER;
		if(topRowIndex < 0) { topRowIndex = 0; }
		if(botRowIndex > rows.length - 1) { botRowIndex = rows.length - 1; }

		return {
			top: topRowIndex,
			bottom: botRowIndex
		};
	},


	getSequenceX1: function() {
		// var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		// logLength = Math.ceil(logLength);
		// logLength = Math.max(logLength, 4);
		return (2 + this.logLength) * this.CHAR_WIDTH;

		// return 6 * this.CHAR_WIDTH;
	},


	getRowStr: function(rowIndex) {
		// var bpPerRow = this.bpPerRow;
		// var rowArray = this.model.get('sequence').slice(rowIndex*bpPerRow, rowIndex*bpPerRow + bpPerRow);
		// if(this.showSpaceEvery10Bp) {
		// 	var a = [];
		// 	for(var i=0;i<rowArray.length;i+=10) {
		// 		a.push(rowArray.slice(i,i+10).join(''));
		// 	}
		// 	return a.join(' ').toUpperCase();
		// } else {
		// 	return rowArray.join('').toUpperCase();
		// }

		var bpPerRow = this.bpPerRow;
		var sequence = this.model.get('sequence');
		var start = rowIndex*bpPerRow;
		var bpInRow = Math.min(start + bpPerRow, sequence.length) - start;
		var ret = "";

		if(this.showSpaceEvery10Bp) {
			for(var i=0;i<bpInRow;i++) {
				var j = start + i;
				if(i !== 0 && i%10 === 0) {
					ret += ' ';
				}
				ret += sequence[j];
			}

		} else {
			for(var i=0;i<bpInRow;i++) {
				ret += sequence[start + i];
			}

		}
		ret = ret.toUpperCase();
		
		return ret;
	},

	getRowRevcomStr: function(rowIndex) {
		var str = this.getRowStr(rowIndex);
		return VE.RendererUtil.complement(str).toUpperCase();
	},



	initCaret: function() {
		var sequenceX1 = this.getSequenceX1();
		var row = this.rows[0];
		var y1 = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		var caretHeight = this.showComplementarySequence ? 2*this.FONT_SIZE + 8: this.FONT_SIZE + 8;

		this.caret = this.annotateSVG.append("svg:line")
			.attr("class", "annotateCaret")
			.attr("x1", -1)
			.attr("y1", 0)
			.attr("x2", -1)
			.attr("y2", caretHeight);

		var x = sequenceX1;
		var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		this.caret.attr('transform', 'translate(' + x + ',' + y + ')');

		this.caret.append("svg:animate")
			.attr("attributeName", "visibility")
			.attr("from", "hidden")
			.attr("to", "visible")
			.attr("dur", this.CARET_TIMER_REFRESH_SPEED)
			.attr("repeatCount", "indefinite")
			.style("pointer-events", "none");

	},


	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_COMPLEMENTARY_CHANGED, this.onShowComplementaryChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_SPACES_CHANGED, this.onShowSpacesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_SEQUENCE_AA_CHANGED, this.onShowSequenceAAChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ANNOTATE_PREVIEW_CHANGED, this.onShowAnnotatePreviewChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);

		this.on('scrollTo', this.onScrollTo);

		$(this.featuresSVG.node())
			// .on('click', 'path.pie-feature', {me: this}, this.onPieFeatureClicked)
			.on('contextmenu', 'path.annotate-feature', {me: this}, this.onAnnotateFeatureContextMenu);

		$(this.selectionLayerSVG.node())
			.on('contextmenu', 'rect.annotateSelectionRect', {me: this}, this.onSelectionContextMenu);

			
	},



	onShowAnnotatePreviewChanged: function(showAnnotatePreview) {
		var me = this;
		if(showAnnotatePreview) {
			this.phonyScrollContainer.scrollPreview.setPhonyHeight(this.calculateSvgHeight());

			this.phonyScrollContainer.scrollPreview.render = function() {
				// console.time('a');

				VE.annotate.PreviewRenderer.drawPreview(me.phonyScrollContainer.scrollPreview.canvas,
					me.phonyScrollContainer.scrollPreview.context, me);

				// console.timeEnd('a');
			}
			this.phonyScrollContainer.scrollPreview.render();

		}
		
		this.bpPerRow = this.calculateBpPerRow();
		this.calculateRows();
		this.render();
	},



	onSelectionContextMenu: function(evt) {
		evt.preventDefault();
		var me = evt.data.me;

		var ve = me.ve;
		var start = ve.selectionStartBp;
		var end = ve.selectionEndBp;

		var contextMenu = new Backbone.UI.menu.ContextMenu({
			posX: evt.clientX,
			posY: evt.clientY,
			items: [
				{
					label: 'New Annotation',
					on: {
						click: function(evt) {
							// console.log(evt);
							var featureInspectionWindow = new VE.FeatureInspectionWindow({
								title: 'New Annotation',
								startBp: start,
								endBp: end,
								name: 'New Feature',
							});
							featureInspectionWindow.show();

							featureInspectionWindow.on('ok-click', function() {
								var feat = featureInspectionWindow.createModel();
								var isValid = feat.validate(me.model);
								if(isValid) {
									var op = VE.EditingManager.generateAddFeatureOp(me.model, feat);
									me.model.applyClientOperation(op);
									me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
								}

							});

							contextMenu.remove();
						},
					},
				},
			],
		});
		contextMenu.show();
	},




	onAnnotateFeatureContextMenu: function(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		var contextMenu = new Backbone.UI.menu.ContextMenu({
			posX: evt.clientX,
			posY: evt.clientY,
			items: [
				{
					label: 'Edit Annotation',
					on: {
						click: function(evt) {
							// console.log(evt);
							var featureInspectionWindow = new VE.FeatureInspectionWindow({
								title: 'Edit Annotation',
								startBp: start,
								endBp: end,
								name: feat.get('name'),
								strand: feat.get('strand'),
								type: feat.get('type'),
							});
							featureInspectionWindow.show();

							featureInspectionWindow.on('ok-click', function() {
								var newFeat = featureInspectionWindow.createModel();
								var isValid = newFeat.validate(me.model);
								if(isValid) {
									var op = VE.EditingManager.generateEditFeatureOp(me.model, feat, newFeat);
									me.model.applyClientOperation(op);
									me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
								}

							});

							contextMenu.remove();
						},
					},
				},
				{
					label: 'Delete Annotation',
					on: {
						click: function(evt) {
							var op = VE.EditingManager.generateDeleteFeatureOp(me.model, feat);
							me.model.applyClientOperation(op);
							me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

							contextMenu.remove();
						},
					}
				},
			],
		});
		contextMenu.show();
	},



	onClientOperation: function(sequenceOperation) {
		this.calculateRows();
		this.render();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;

		var logLength = Math.log(this.model.length() + 1)/Math.LN10;
		logLength = Math.ceil(logLength);
		logLength = Math.max(logLength, 4);
		this.logLength = logLength;
		
		this.bpPerRow = this.calculateBpPerRow();

		this.calculateRows();
		this.render();
	},


	onShowSequenceAAChanged: function(showAminoAcids, aminoAcidFrames) {
		this.showAminoAcids = showAminoAcids;
		this.aminoAcidFrames = aminoAcidFrames;
		this.calculateRows();
		this.render()
	},

	onShowFeaturesChanged: function(showFeatures) {
		if(showFeatures === this.showFeatures) { return; }
		this.showFeatures = showFeatures;
		this.calculateRows();
		this.render()
	},

	onShowSpacesChanged: function(showSpaceEvery10Bp) {
		if(showSpaceEvery10Bp === this.showSpaceEvery10Bp) { return; }
		this.showSpaceEvery10Bp = showSpaceEvery10Bp;
		this.calculateRows();
		this.render()
	},

	onShowAlignmentsChanged: function(showAlignments) {
		if(showAlignments === this.showAlignments) { return; }
		this.showAlignments = showAlignments;
		this.calculateRows();
		this.render();
	},
	
	onShowCutSitesChanged: function(showCutSites) {
		if(showCutSites === this.showCutSites) { return; }
		this.showCutSites = showCutSites;
		this.calculateRows();
		this.render();
	},

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
		this.calculateRows();
		this.render();
	},

	onShowComplementaryChanged: function(showComplementarySequence) {
		if(showComplementarySequence === this.showComplementarySequence) { return; }
		this.showComplementarySequence = showComplementarySequence;
		this.caret.attr("y2", this.showComplementarySequence ? 2*this.FONT_SIZE + 8: this.FONT_SIZE + 4);
		this.calculateRows();
		this.render();
	},

	onScroll: function() {
		this.scrollTop = this.el.scrollTop;
		this.height = this.$el.height();
		this.render();
	},



	onScrollTo: function(scrollPercent) {
		var scrollTop = this.phonyScrollContainer.getPhonyScrollTop();
		var deltaScrollTop = scrollTop - this.scrollTop;

		this.scrollTop = scrollTop;
		this.height = this.$el.height();

		this.render();

		var caretNode = this.caret.node();
		var caretTransform = caretNode.getTransformToElement(this.annotateSVG.node());

		caretTransform = caretTransform.translate(0, -deltaScrollTop);
		this.caret.attr('transform', 'translate(' + caretTransform.e + ',' + caretTransform.f + ')');
	},




	onAnnotateSvgMousedown: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			// this.onRightMouseDown(evt);
		} else {
			// this.startSelectionIndex = this.bpAtPoint(evt.offsetX, evt.offsetY);
			this.startSelectionIndex = this.bpAtPoint(evt.offsetX, evt.offsetY + this.scrollTop);
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
		}
	},


	bpAtPoint: function(offsetX, offsetY) {
		var rowIndex = this.binarySearchRows(offsetY);
		// var rowIndex = this.binarySearchRows(offsetY + this.scrollTop);
		var bp = rowIndex * this.bpPerRow;

		var charPerRow = this.getCharPerRow();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * this.CHAR_WIDTH;
		if(offsetX < sequenceX1) {

		} else if(offsetX > sequenceX2) {
			bp += this.bpPerRow;

		} else {
			var x = offsetX - sequenceX1;
			var chars = Math.floor(x / this.CHAR_WIDTH);
			if(this.showSpaceEvery10Bp) {
				chars -= Math.floor((chars - 1) / 10);
			}
			bp += chars;
		}
		return bp;
	},


	onAnnotateSvgMousemove: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var start, end;
		if(this.mouseIsDown) {
			var x = evt.offsetX, y = evt.offsetY;
			var seqlen = this.model.get('sequence').length;
			// if(evt.target !== this.annotateSVG.node()) {
			// 	var attr = evt.target.attributes;
			// 	var attrX, attrY;
			// 	var xform = evt.target.getTransformToElement(this.annotateSVG.node());
			// 	// if(attrX = attr.x) { x += Number(attrX.value) + xform.e; }
			// 	// if(attrY = attr.y) { y += Number(attrY.value) + xform.f; }
			// 	if(attr.x) {
			// 		var _x = Number(attr.x.value) || 0;
			// 		var _y = Number(attr.y.value) || 0;
			// 		var _x_ = xform.a * _x + xform.c * _y + xform.e;
			// 		var _y_ = xform.b * _x + xform.d * _y + xform.f;
			// 		x += _x_;
			// 		y += _y_;
			// 	}
			// 	// console.log(evt.target)
			// }
			
			// var bpIndex = this.bpAtPoint(x, y);
			var bpIndex = this.bpAtPoint(x, y + this.scrollTop);
			var endSelectionIndex = bpIndex;
		
			if(this.startSelectionIndex < endSelectionIndex) {
				start = this.startSelectionIndex;
				end = endSelectionIndex;
			} else {
				end = this.startSelectionIndex;
				start = endSelectionIndex;
			}

			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
			this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		}

	},


	onAnnotateSvgMouseup: function(evt) {
		this.mouseIsDown = false;

		// More to put here...

	},




	onChangeCaretPosition: function(bpIndex) {
		var sequenceX1 = this.getSequenceX1();
		var rowIndex = this.bpToRowIndex(bpIndex);
		var row = this.rows[rowIndex];
		var colIndex = this.bpToColIndex(bpIndex);

		var x = sequenceX1 + colIndex * this.CHAR_WIDTH;
		// var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
		var y = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;
		this.caret.attr('transform', 'translate(' + x + ',' + y + ')');

		this.caretBpIndex = bpIndex;

		this.scrollToBp(bpIndex);
		// this.caret.style('visibility', 'visible');
	},

	scrollToBp: function(bpIndex) {
		var rowIndex = this.bpToRowIndex(bpIndex);
		var row = this.rows[rowIndex];

		var scrollTop = this.scrollTop;
		var height = this.height;

		var rowIndices = this.getVisibleRowIndices();

		if(rowIndex >= rowIndices.top && rowIndex <= rowIndices.bottom) {
			return;

		} else if(rowIndex < rowIndices.top) {
			// this.el.scrollTop = row.y;
			this.phonyScrollContainer.setPhonyScrollTop(row.y);

		} else {
			// this.el.scrollTop = Math.max(0, row.y + row.height - height);
			this.phonyScrollContainer.setPhonyScrollTop(Math.max(0, row.y + row.height - height));

		}
	},


	calculateBpPerRow: function() {
		// var width = $(this.annotateSVG.node()).width();
		var width = this.$el.width();
		var effectiveWidth = width - this.getSequenceX1();

		var chunkSize = 10 * this.CHAR_WIDTH;
		if(this.showSpaceEvery10Bp) {
			chunkSize += this.CHAR_WIDTH;
		}

		var bpPerRow = 10 * Math.floor(effectiveWidth/chunkSize);
		return bpPerRow;
	},

	

	cleanSelectionLayer: function() {
		this.selectionLayerSVG.selectAll('*').remove();
	},

	onSelect: function(startBp, endBp) {
		this.selectionStartBp = startBp;
		this.selectionEndBp = endBp;

		this.drawSelectionLayer(this.selectionStartBp, this.selectionEndBp);
	},

	drawSelectionLayer: function(startBp, endBp) {
		this.cleanSelectionLayer();

		var SelectionLayerRenderer = VE.annotate.SelectionLayerRenderer;

		var scrollTop = this.scrollTop;
		var height = this.height;

		var bpPerRow = this.bpPerRow;
		var charPerRow = this.getCharPerRow();
		var CHAR_WIDTH = this.CHAR_WIDTH;

		var rowIndices = this.getVisibleRowIndices();

		var sequenceX1 = this.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		var startRow = this.bpToRowIndex(startBp);
		var startCol = this.bpToColIndex(startBp);
		var endRow = this.bpToRowIndex(endBp);
		var endCol = this.bpToColIndex(endBp);

		var rowStartBp = startBp%bpPerRow;
		var rowEndBp = (endBp)%bpPerRow;
		if(this.showSpaceEvery10Bp) {
			rowStartBp += Math.floor(rowStartBp/10);
			rowEndBp += Math.floor(rowEndBp/10);
		}
		var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
		var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

		var g = this.selectionLayerSVG;
		var slHeight = this.showComplementarySequence ? 2*this.FONT_SIZE + 8 : this.FONT_SIZE + 4;

		// Not sure about inclusivity vs exclusivity.
		if(startBp <= endBp) {
			for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
				var row = this.rows[i];
				// var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE;
				var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;

				if(i === startRow && i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, rowEndPx-rowStartPx, slHeight);

				} else if(i === startRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);

				} else if(i > startRow && i < endRow) {
					var slWidth = charPerRow * CHAR_WIDTH;
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, slWidth, slHeight);

				}
			}

		} else {
			
			for(var i=rowIndices.top;i<=rowIndices.bottom;i++) {
				var row = this.rows[i];

				var slY = row.y + this.getBpTextOffset(row) - this.FONT_SIZE - this.scrollTop;

				if(i === startRow && i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === startRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, rowStartPx, slY, sequenceX2-rowStartPx, slHeight);

				} else if(i === endRow) {
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, rowEndBp * CHAR_WIDTH, slHeight);

				} else if(i < endRow || i > startRow) {
					var slWidth = charPerRow * CHAR_WIDTH;
					SelectionLayerRenderer.drawSelectionLayerRect(g, sequenceX1, slY, slWidth, slHeight);

				}

			}
		}

		
	},


	onDeselect: function() {
		this.selectionStartBp = null;
		this.selectionEndBp = null;
		this.cleanSelectionLayer();
	},


	


});























































})();;

VE.PieContainer = Backbone.View.extend({

	tagName: "div",

	className: "PieContainer",

	events: {
		'mousedown': 'onMousedown',
		'mousemove': 'onMousemove',
		'mouseup': 'onMouseup',
		'mousewheel': 'onMousewheel',
	},

	NAMEBOX_FONT_SIZE: "10px",
	NAMEBOX_FONT_WEIGHT: "bold",

	FRAME_INNER_RADIUS_OFFSET: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#8F8F8F",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.
	
	CARET_COLOR: 'black',
	CARET_WIDTH: 1,
	CARET_OVERHANG: 10,

	WIREFRAME_OFFSET: 10,

	SELECTION_THRESHOLD: 2 * Math.PI / 360,

	MIN_PIE_DISTANCE_FROM_CENTER: 35,


	showFeatures: true,
	showCutSites: false,
	showOrfs: false,
	showAlignments: false,

	showFeatureLabels: true,
	showCutSiteLabels: true,
	showAlignmentLabels: true,

	showMapCaret: true,



	startSelectionAngle: null,
	startSelectionIndex: null,
	mouseIsDown: false,
	selectionDirection: 0,

	zoomLevel: 1,
	rotation: 0,
	hidden: false,



	initialize: function(elements) {
		
		this.center = { x: 0, y: 0 };
		this.railRadius = 100;

		this.renderedAnnotations = [];

		for(var x in elements) {
			this[x] = elements[x];
		}

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;

		this.pieSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "pieSVG")
			// .attr("overflow", "auto")
			;
			// .on({
			// 	mousedown: this.onMousedown.bind(this),
			// 	mousemove: this.onMousemove.bind(this),
			// 	mouseup: this.onMouseup.bind(this),
			// });

		this.parentSVG = this.pieSVG.append("svg:g")
			.attr("class", "pieParent")

			// temporary, for initial test
			.attr('transform', 'scale(1.5)');

		this.cutSiteSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieCutSite");

		this.featureSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieFeature");

		this.alignmentSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieAlignment");

		this.orfSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieOrf");

		this.labelSVG = this.parentSVG.append("svg:g")
			.attr("class", "pieLabel");


		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		// this.recalculateCenter();

		this.buildAlignmentMaps();

		this.recalculatePieRadius();

		this.initPie();


		this.render();

		this.fitWidthToContent();

		this.addListeners();



		this.hidden = (this.ve.options.viewMode === 'pie') ? false : true;
		if(this.hidden) {
			this.hide();
		} else {
			this.show();
		}

		if(this.showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}

	},



	render: function() {

		this.renderedAnnotations = [];

		this.clean();

		if(this.showFeatures) {
			VE.pie.FeatureRenderer.drawFeatures(this);
			if(this.showFeatureLabels) {
				this.renderedAnnotations.push('features');
			}
		}

		if(this.showCutSites) {
			VE.pie.CutSiteRenderer.drawCutsites(this);
			if(this.showCutSiteLabels) {
				this.renderedAnnotations.push('cutSites');
			}
		}

		if(this.showOrfs) {
			VE.pie.OrfRenderer.drawOrfs(this);
		} 

		if(this.showAlignments) {
			VE.pie.AlignmentRenderer.drawAlignments(this);
		}


		VE.pie.LabelRenderer.renderLabels(this);


		// this.fitWidthToContent();
	},

	clean: function() {
		this.cutSiteSVG.selectAll('*').remove();
		this.featureSVG.selectAll('*').remove();
		this.alignmentSVG.selectAll('*').remove();
		this.orfSVG.selectAll('*').remove();
		this.labelSVG.selectAll('*').remove();
	},




	getAlignmentOffset: function() {
		if(this.showAlignments) {
			var alignments = this.model.get('alignments');
			return alignments.length * (VE.pie.AlignmentRenderer.ALIGNMENT_HEIGHT +
						VE.pie.AlignmentRenderer.DISTANCE_BETWEEN_ALIGNMENTS);
		} else {
			return 0;
		}
	},


	fitWidthToContent: function(scrollToCenter) {
		// debugger;
		// this.pieSVG.attr('height', null);
		// this.pieSVG.attr('width', null);

		var pieBox = this.pieSVG.node().getBoundingClientRect();
		var parentBox = this.parentSVG.node().getBoundingClientRect();

		
		// var width = Math.max(parentBox.width, pieBox.width);
		// var height = Math.max(parentBox.height, pieBox.height);
		var width = Math.max(parentBox.width, pieBox.width, this.$el.width());
		var height = Math.max(parentBox.height, pieBox.height,  this.$el.height());

		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		transform.e += pieBox.left - parentBox.left;
		transform.f += pieBox.top - parentBox.top;

		if(parentBox.width < pieBox.width) {
			transform.e += pieBox.width/2 - parentBox.width/2;
		}
		if(parentBox.height < pieBox.height) {
			transform.f += pieBox.height/2 - parentBox.height/2;
		}

		this.pieSVG.attr({
			// width: parentBox.width,
			// height: parentBox.height,
			width: width,
			height: height,
		});
		var a = [];
		var keys = Object.keys(this.parentSVG.node().getTransformToElement(this.pieSVG.node())).sort();
		for(var i=0;i<keys.length;i++) {
			a.push(transform[keys[i]]);
		}
		this.parentSVG.attr({
			transform: 'matrix('+a.join(',')+')',
		});
	},




	// this should be refactored out later
	buildAlignmentMaps: function() {
		var seqLen = this.model.get('sequence').length;

		if(this.showFeatures) {
			var features = this.model.get('features');
			this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);
		}
		if(this.showCutSites) {
			var sites = this.model.get('cutSites');
			this.cutSitesAlignMap = VE.RendererUtil.buildAlignmentMap(sites, seqLen);
		}
		if(this.showOrfs) {
			var orfs = this.model.get('orfs');
			this.orfsAlignMap = VE.RendererUtil.buildAlignmentMap(orfs, seqLen);
		}

		// TODO: alignments

	},


	/**
	 * Recalculate the pie radius due to number of features.
	 */
	recalculatePieRadius: function() {
		var MIN_PIE_DISTANCE_FROM_CENTER = this.MIN_PIE_DISTANCE_FROM_CENTER;
		if(this.showFeatures) {
			var features = this.model.get('features');
			var featAlignMap = this.featAlignMap, max = Math.max;
			var maxAlignment = 0;
			for(var i=0;i<features.length;i++) {
				maxAlignment = max(maxAlignment, featAlignMap[i]);
			}

			// console.log(maxAlignment);
			var offsetFromRail = VE.pie.FeatureRenderer.getOffsetFromRail(maxAlignment);
			// console.log(offsetFromRail);
			if(this.railRadius - offsetFromRail < MIN_PIE_DISTANCE_FROM_CENTER) {
				this.resetRailRadius(offsetFromRail + MIN_PIE_DISTANCE_FROM_CENTER);
			}

		}
		
	},

	resetRailRadius: function(newRadius) {
		this.railRadius = newRadius;
		// this.frame.remove();
		// this.caret.remove();
		if(this.frame) { this.frame.remove(); }
		if(this.caret) { this.caret.remove(); }
		this.initFrame();
		this.initCaret();
	},



	initPie: function() {
		this.initNameBox();
		// this.initFrame();
		// this.initCaret();
		if(!this.frame) { this.initFrame(); }
		if(!this.caret) { this.initCaret(); }
		this.initSelectionLayer();
		this.initWireframeSelectionLayer();
	},

	initWireframeSelectionLayer: function() {
		this.wireframeSelectionLayer = this.parentSVG.append("svg:path")
			.attr({
				class: 'pieWireframe',
			})
			.style({
				visibility: 'hidden',
			});
	},

	initSelectionLayer: function() {
		this.selectionLayer = this.parentSVG.append("svg:path")
			.attr({
				class: 'pieSelection',
			})
			.style({
				visibility: 'hidden',
			});
	},


	initCaret: function() {
		this.caret = this.parentSVG.append("svg:line")
			.attr("class", "pieCaret")
			.attr("x1", this.center.x)
			.attr("y1", this.center.y)
			.attr("x2", this.center.x)
			.attr("y2", this.center.y - this.railRadius - this.CARET_OVERHANG)
			.attr("stroke", this.CARET_COLOR)
			.attr("stroke-width", this.CARET_WIDTH)
			.style("pointer-events", "none");
	},



	initNameBox: function() {
		this.nameBox = this.parentSVG.append("svg:g")
			.attr("class", "pieNameBox")
			.attr("text-anchor", "middle")
			.attr("font-size", this.NAMEBOX_FONT_SIZE)
			.attr("font-weight", this.NAMEBOX_FONT_WEIGHT)
			.style("pointer-events", "none");
		this.renderNameBoxText();
	},

	renderNameBoxText: function() {
		var name = this.model.get('name');
		var length = this.model.get('sequence').length;
		var text1, text2;
		this.nameBox.selectAll('text').remove();
		if(!name) {
			text1 = '(' + length + ' bp)';
			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		} else {
			text1 = name;
			text2 = '(' + length + 'bp)';

			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);

			this.nameBox.append("svg:text")
				.attr("dy", "1em")
				.text(text2)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		}
	},


	initFrame: function() {
		var center = this.center;
		var outerRadius = this.railRadius;
		var innerRadius = outerRadius - this.FRAME_INNER_RADIUS_OFFSET;
		var outerStartPoint = {x: center.x - outerRadius, y: center.y};
		var innerStartPoint = {x: center.x - innerRadius, y: center.y};

		// Draw two concentric circles using SVG paths. We use paths instead of
		// two circle sprites so that the frame only needs one sprite.

		// NOTE: It is important that the arcs be drawn in opposite directions
		// (one draws counterclockwise, the other clockwise) to ensure the 
		// fill computes properly. See the SVG documentation on fill-rule for more.
		// Basically, ExtJS doesn't let you set fill-rule, so we can only use the
		// default of "nonzero", while we would like to set it to "evenodd".
		var path = "M" + outerStartPoint.x + " " + outerStartPoint.y + 
					"A" + outerRadius + " " + outerRadius + " 0 1 1 " + 
					outerStartPoint.x + " " + (outerStartPoint.y + 0.0001) + 
					"L" + outerStartPoint.x + " " + outerStartPoint.y + 
					"M" + innerStartPoint.x + " " + innerStartPoint.y +
					"A" + innerRadius + " " + innerRadius + " 0 1 0 " +
					innerStartPoint.x + " " + (innerStartPoint.y - 0.0001);

		this.frame = this.parentSVG.append("svg:path")
			.attr("class", "pieFrame")
			.attr("stroke", this.FRAME_OUTLINE_COLOR)
			.attr("stroke-width", this.FRAME_OUTLINE_WIDTH)
			.attr("fill", this.FRAME_RING_COLOR)
			.attr("fill-rule", "evenodd")
			.attr("d", path);

	},




	// might not be correct, at least allows for testing now
	recalculateCenter: function() {
		var rect = this.pieSVG.node().getBoundingClientRect();
		this.center.x = rect.width / 2;
		this.center.y = rect.height / 2;
	},



	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, this.onShowFeatureLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, this.onShowAlignmentLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, this.onShowCutSiteLabelsChanged, this);
		this.on(VE.VisibilityEvent.VIEW_MODE_CHANGED, this.onViewModeChanged, this);
		this.on(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, this.onShowMapCaretChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);

		$(this.featureSVG.node())
			.on('click', 'path.pie-feature', {me: this}, this.onPieFeatureClicked)
			.on('contextmenu', 'path.pie-feature', {me: this}, this.onPieFeatureContextMenu);

		$(this.pieSVG.node())
			.on('contextmenu', {me: this}, this.onPieSvgContextMenu);

	},



	onShowMapCaretChanged: function(showMapCaret) {
		if(showMapCaret === this.showMapCaret) { return; }
		this.showMapCaret = showMapCaret;
		if(showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}
	},

	hideCaret: function() {
		this.caret.style('visibility', 'hidden');
	},

	showCaret: function() {
		this.caret.style('visibility', null);
	},


	onViewModeChanged: function(viewMode) {
		
		if(viewMode === 'pie') {
			this.show();


		} else if(viewMode === 'rail') {
			this.hide();


		} else {
			console.error('Invalid view mode: "' + viewMode + '"');
		}
	},



	hide: function() {
		this.hidden = true;
		this.pieSVG.attr('display', 'none');

		this.undelegateEvents();

	},

	show: function() {
		this.hidden = false;
		this.pieSVG.attr('display', null);
		
		this.fitWidthToContent();

		this.delegateEvents();
	},


	onPieSvgContextMenu: function(evt) {
		evt.preventDefault();
		var me = evt.data.me;

		var ve = me.ve;
		var start = ve.selectionStartBp;
		var end = ve.selectionEndBp;

		if(start !== null && end !== null) {
			var clickedInSelection;

			
			var clickAngle = me.getClickAngle(evt);
			var clickBp = me.bpAtAngle(clickAngle);
			var radiusPercent = me.getRadiusPercent(evt);
			// console.log(clickBp);

			if(radiusPercent > 1) {
				clickedInSelection = false;

			} else if(end >= start) {
				if(clickBp < end && clickBp >= start) {
					clickedInSelection = true;
				} else {
					clickedInSelection = false;
				}

			} else {
				if(clickBp < end || clickBp >= start) {
					clickedInSelection = true;
				} else {
					clickedInSelection = false;
				}

			}

			if(clickedInSelection) {
				var contextMenu = new Backbone.UI.menu.ContextMenu({
					posX: evt.clientX,
					posY: evt.clientY,
					items: [
						{
							label: 'New Annotation',
							on: {
								click: function(evt) {
									// console.log(evt);
									var featureInspectionWindow = new VE.FeatureInspectionWindow({
										title: 'New Annotation',
										startBp: start,
										endBp: end,
										name: 'New Feature',
									});
									featureInspectionWindow.show();

									featureInspectionWindow.on('ok-click', function() {
										var feat = featureInspectionWindow.createModel();
										var isValid = feat.validate(me.model);
										if(isValid) {
											var op = VE.EditingManager.generateAddFeatureOp(me.model, feat);
											me.model.applyClientOperation(op);
											me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
										}

									});

									contextMenu.remove();
								},
							},
						},
					],
				});
				contextMenu.show();
			}

		}

	},


	onPieFeatureContextMenu: function(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		var contextMenu = new Backbone.UI.menu.ContextMenu({
			posX: evt.clientX,
			posY: evt.clientY,
			items: [
				{
					label: 'Edit Annotation',
					on: {
						click: function(evt) {
							// console.log(evt);
							var featureInspectionWindow = new VE.FeatureInspectionWindow({
								title: 'Edit Annotation',
								startBp: start,
								endBp: end,
								name: feat.get('name'),
								strand: feat.get('strand'),
								type: feat.get('type'),
							});
							featureInspectionWindow.show();

							featureInspectionWindow.on('ok-click', function() {
								var newFeat = featureInspectionWindow.createModel();
								var isValid = newFeat.validate(me.model);
								if(isValid) {
									var op = VE.EditingManager.generateEditFeatureOp(me.model, feat, newFeat);
									me.model.applyClientOperation(op);
									me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
								}

							});

							contextMenu.remove();
						},
					},
				},
				{
					label: 'Delete Annotation',
					on: {
						click: function(evt) {
							var op = VE.EditingManager.generateDeleteFeatureOp(me.model, feat);
							me.model.applyClientOperation(op);
							me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

							contextMenu.remove();
						},
					}
				},
			],
		});
		contextMenu.show();
	},





	onPieFeatureClicked: function(evt) {
		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);
	},


	onClientOperation: function(sequenceOperation) {
		this.buildAlignmentMaps();
		this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;
		this.buildAlignmentMaps();
		this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onShowAlignmentLabelsChanged: function(showAlignmentLabels) {
		if(showAlignmentLabels === this.showAlignmentLabels) { return; }
		this.showAlignmentLabels = showAlignmentLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSiteLabelsChanged: function(showCutSiteLabels) {
		if(showCutSiteLabels === this.showCutSiteLabels) { return; }
		this.showCutSiteLabels = showCutSiteLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowFeatureLabelsChanged: function(showFeatureLabels) {
		if(showFeatureLabels === this.showFeatureLabels) { return; }
		this.showFeatureLabels = showFeatureLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowFeaturesChanged: function(showFeatures) {
		if(showFeatures === this.showFeatures) { return; }
		this.showFeatures = showFeatures;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSitesChanged: function(showCutSites) {
		if(showCutSites === this.showCutSites) { return; }
		this.showCutSites = showCutSites;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},
	
	onShowAlignmentsChanged: function(showAlignments) {
		if(showAlignments === this.showAlignments) { return; }
		this.showAlignments = showAlignments;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onChangeCaretPosition: function(bpIndex) {
		// console.log('moo')
		var angle = bpIndex * 2 * Math.PI / this.model.get('sequence').length;
		this.setCaretAngle(angle);
	},

	setCaretAngle: function(angle) {
		angle += this.rotation;
		this.caret.attr('transform', 'rotate(' + (angle * 180/Math.PI) +
			',' + (this.center.x) + ',' + (this.center.y) + ')');
	},


	onSelect: function(startBp, endBp) {
		
		// More draw wireframe to another event...
		this.drawWireframeSelectionLayer(startBp, endBp);

		this.drawSelectionLayer(startBp, endBp);
	},

	drawSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		var path = VE.pie.SelectionLayerRenderer.generatePathD(fromIndex, endIndex, this.railRadius,
				this.center, seqLen);

		this.selectionLayer.attr('d', path)
			.style('visibility', 'visible');
	},

	drawWireframeSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		var path = VE.pie.SelectionLayerRenderer.generatePathD(fromIndex, endIndex,
				this.railRadius + this.WIREFRAME_OFFSET, this.center, seqLen);
		this.wireframeSelectionLayer.attr('d', path)
			.style('visibility', 'visible');
	},

	onDeselect: function() {
		this.selectionLayer.style('visibility', 'hidden');
		this.wireframeSelectionLayer.style('visibility', 'hidden');
	},

	
	onMousedown: function(evt) {
		// console.log(evt);
		if(evt.button === 2) {
			evt.preventDefault();
			this.onRightMouseDown(evt);
		} else {
			this.startSelectionAngle = this.getClickAngle(evt);
			this.startSelectionIndex = this.bpAtAngle(this.startSelectionAngle);
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
		}
	},

	onMousemove: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var endSelectionAngle = this.getClickAngle(evt);
		var start, end;

		if(this.mouseIsDown && Math.abs(this.startSelectionAngle - endSelectionAngle) > this.SELECTION_THRESHOLD) {			
			var endSelectionIndex = this.bpAtAngle(endSelectionAngle);

			// Set the direction of selection if it has not yet been determined.
			if(this.selectionDirection == 0) {
				if(this.startSelectionAngle < Math.PI) {
					this.selectionDirection = -1;
					if(endSelectionAngle >= this.startSelectionAngle &&
							endSelectionAngle <= (this.startSelectionAngle + Math.PI)) {
						this.selectionDirection = 1;
					}
				} else {
					this.selectionDirection = 1;
					if(endSelectionAngle <= this.startSelectionAngle &&
							endSelectionAngle >= (this.startSelectionAngle - Math.PI)) {
						this.selectionDirection = -1;
					}
				}
			}

			if(this.selectionDirection == -1) {
				start = endSelectionIndex;
				end = this.startSelectionIndex;
			} else {
				start = this.startSelectionIndex;
				end = endSelectionIndex;
			}

			// this.setCaretAngle(endSelectionAngle);
			this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
			
			if(evt.ctrlKey) {
				this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

			} else {
				this.ve.trigger(VE.SelectionEvent.SELECT, start, end, true);

			}
		}
	},


	onMouseup: function(evt) {
		this.mouseIsDown = false;

		// More to put here...

		this.wireframeSelectionLayer.style('visibility', 'hidden');


	},


	onRightMouseDown: function(evt) {
		// console.warn('TODO');
		// console.log(evt.offsetX, evt.offsetY)
	},



	onMousewheel: function(evt) {
		if(evt.ctrlKey) {
			evt.preventDefault();

			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;

			wheelDelta = Math.exp(wheelDelta / 24);
			// console.log(wheelDelta);

			var newZoom = this.zoomLevel * wheelDelta;

			var bb = this.el.getBoundingClientRect();
			var clientX = evt.clientX - bb.left;
			var clientY = evt.clientY - bb.top;

			var angle = this.getClickAngle(evt);
			var r = this.getRadiusPercent(evt);

			var positionParams = {
				clientX: clientX,
				clientY: clientY,
				angle: angle,
				radiusPercent: r,
			};

			this.zoom(newZoom, positionParams);
			// this.zoom(newZoom);


		} else if(evt.altKey) {
			evt.preventDefault();


			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;
			// wheelDelta = Math.exp(wheelDelta / 24);
			wheelDelta *= Math.PI / 180;

			var newRotate = this.rotation + wheelDelta;
			this.rotateTo(newRotate);



		}



	},


	rotateTo: function(newRotate) {
		this.rotation = newRotate;
		this.rotation %= (2* Math.PI);

		var transformStr = 'rotate(' + (this.rotation * 180 / Math.PI) + ',' + this.center.x + ',' + this.center.y + ')';
		this.parentSVG.selectAll('g.pieParent > g:not([class="pieNameBox"])')
			.transition()
			.duration(300)
			.ease('quadratic')
			.attr('transform', transformStr);

		this.wireframeSelectionLayer.attr('transform', transformStr);
		this.selectionLayer.attr('transform', transformStr);

	},






	zoom: function(newZoom, positionParams) {
		var oldZoom = this.zoomLevel;
		this.zoomLevel = newZoom;
		var newRailRadius = this.railRadius * (newZoom/oldZoom);

		this.resetRailRadius(newRailRadius);
		this.recalculatePieRadius(); // might not be needed
		this.render();
		this.fitWidthToContent();

		if(typeof positionParams === 'object') {
			var offset = Math.PI/2;
			var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
			// var transform = this.pieSVG.node().getTransformToElement(this.parentSVG.node());
			var clientX = positionParams.clientX;
			var clientY = positionParams.clientY;
			var angle = positionParams.angle;
			var radiusPercent = positionParams.radiusPercent;

			var center = this.center;

			var centerX = transform.a * center.x + transform.c * center.y + transform.e;
			var centerY = transform.b * center.x + transform.d * center.y + transform.f;
			

			// var centerX = transform.a * center.x + transform.e;
			// var centerY = transform.d * center.y + transform.f;

			var r = radiusPercent * this.railRadius * transform.a;

			var dX = r * Math.cos(-angle + offset);
			var dY = - r * Math.sin(-angle + offset);

			var absX = centerX + dX;
			var absY = centerY + dY;

			// var absX = dX + transform.e;
			// var absY = dY + transform.f;

			// var scrollLeft = absX + clientX;
			// var scrollTop = absY + clientY;

			var scrollLeft = absX - clientX;
			var scrollTop = absY - clientY;

			// var scrollLeft = absX;
			// var scrollTop = absY;

			// console.log(scrollLeft, scrollTop)
			// console.log(centerX, centerY)
			// console.log(absX, absY);
			// console.log(dX, dY);

			// debugger;

			this.el.scrollTop = scrollTop;
			this.el.scrollLeft = scrollLeft;

		}
	},


	getClickAngle: function(evt) {
		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		var offsetX = evt.offsetX;
		var offsetY = evt.offsetY;

		var relX = offsetX - transform.e -
			this.center.x * transform.a;// + scrolled.left;

		var relY = offsetY - transform.f -
			this.center.y * transform.d;// + scrolled.top;

		var angle = Math.atan(relY / relX) + Math.PI / 2;
		if(relX < 0) {
			angle += Math.PI;
		}

		angle -= this.rotation;
		angle += 2* Math.PI;
		angle = angle % (2* Math.PI);

		return angle;
	},

	getRadiusPercent: function(evt) {
		var transform = this.parentSVG.node().getTransformToElement(this.pieSVG.node());
		var offsetX = evt.offsetX;
		var offsetY = evt.offsetY;

		var relX = offsetX - transform.e - this.center.x;// + scrolled.left;
		var relY = offsetY - transform.f - this.center.y;// + scrolled.top;
		relX /= transform.a;
		relY /= transform.d;

		var r = Math.sqrt(relX * relX + relY * relY);
		r /= this.railRadius;

		return r;
	},


	bpAtAngle: function(angle) {
		return Math.floor(angle * this.model.get('sequence').length/ (2 * Math.PI));
	},

});































;
(function(){


VE.RailContainer = Backbone.View.extend({

	// tagName: "div",

	// className: "RailContainer",

	events: {
		'mousedown': 'onMousedown',
		'mousemove': 'onMousemove',
		'mouseup': 'onMouseup',
		'mousewheel': 'onMousewheel',
	},

	
	RAIL_PAD: 100,

	FRAME_RECT_REFERENCE: {x: 0, y: 0},
	FRAME_RECT_HEIGHT: 3,
	FRAME_RECT_GAP: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#dddddd",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.

	NAMEBOX_FONT_SIZE: "10px",
	NAMEBOX_FONT_WEIGHT: "bold",

	CARET_COLOR : 'black',
	CARET_WIDTH : 1,
	CARET_HEIGHT: 7,

	SELECTION_LAYER_HEIGHT: 12,
	WIREFRAME_SELECTION_LAYER_HEIGHT: 12,


	showFeatures: true,
	showCutSites: false,
	showOrfs: false,
	showAlignments: false,

	showFeatureLabels: true,
	showCutSiteLabels: true,
	showAlignmentLabels: true,

	showMapCaret: true,



	startSelectionIndex: null,
	mouseIsDown: false,
	selectionDirection: 0,

	zoomLevel: 1,
	hidden: false,



	initialize: function(elements) {
		
		// this.railWidth = 300;
		this.railWidth = 600;
		this.center = { x: 150, y: 50 };

		for(var x in elements) {
			this[x] = elements[x];
		}

		this.ve.addObjectToEvents(this);
		this.ve.model = this.model;

		this.railSVG = d3.select(this.el)
			.append("svg:svg")
			.attr("class", "railSVG");

		this.parentSVG = this.railSVG.append("svg:g")
			.attr("class", "railParent")
			.attr("transform", "scale(1.5, 1.5)");

		this.cutSiteSVG = this.parentSVG.append("svg:g")
			.attr("class", "railCutSite");

		this.featureSVG = this.parentSVG.append("svg:g")
			.attr("class", "railFeature");

		this.alignmentSVG = this.parentSVG.append("svg:g")
			.attr("class", "railAlignment");

		this.orfSVG = this.parentSVG.append("svg:g")
			.attr("class", "railOrf");

		this.labelSVG = this.parentSVG.append("svg:g")
			.attr("class", "railLabel");


		this.orfFrames = this.orfFrames || [];
		this.orfRevComFrames = this.orfRevComFrames || [];

		this.buildAlignmentMaps();


		this.initRail();


		this.render();

		this.fitWidthToContent();


		this.addListeners();


		this.hidden = (this.ve.options.viewMode === 'rail') ? false : true;
		if(this.hidden) {
			this.hide();

		} else {
			this.show();
		}

		if(this.showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}
		
	},


	

	render: function() {
		
		this.renderedAnnotations = [];

		this.clean();

		if(this.showFeatures) {
			VE.rail.FeatureRenderer.drawFeatures(this);
			if(this.showFeatureLabels) {
				this.renderedAnnotations.push('features');
			}
		}

		if(this.showCutSites) {
			VE.rail.CutSiteRenderer.drawCutsites(this);
			if(this.showCutSiteLabels) {
				this.renderedAnnotations.push('cutSites');
			}
		}

		if(this.showOrfs) {
			VE.rail.OrfRenderer.drawOrfs(this);
		}

		VE.rail.LabelRenderer.renderLabels(this);

		this.adjustCenter();
	},

	adjustCenter: function() {
		var MIN_DIST = 25;

		if(this.showFeatures) {
			var features = this.model.get('features');
			var featAlignMap = this.featAlignMap, max = Math.max;
			var maxAlignment = 0;
			for(var i=0,ii=features.length;i<ii;i++) {
				maxAlignment = max(maxAlignment, featAlignMap[i]);
			}

			var offsetFromRail = VE.rail.FeatureRenderer.getOffsetFromRail(maxAlignment);
			this.center.y = offsetFromRail + MIN_DIST;
			this.renderNameBoxText();
			
		}
	},



	getAlignmentOffset: function() {
		if(this.showAlignments) {
			// var alignments = this.model.get('alignments');
			// return alignments.length * (VE.pie.AlignmentRenderer.ALIGNMENT_HEIGHT +
			// 			VE.pie.AlignmentRenderer.DISTANCE_BETWEEN_ALIGNMENTS);
			console.error('TODO');

		} else {
			return 0;
		}
	},



	initRail: function() {
		this.initFrame();
		this.initNameBox();
		this.initCaret();
		this.initSelectionLayer();
		this.initWireframeSelectionLayer();
	},

	initWireframeSelectionLayer: function() {
		this.wireframeSelectionLayer = this.parentSVG.append("svg:rect")
			.attr({
				class: 'railWireframe',
				y: -this.WIREFRAME_SELECTION_LAYER_HEIGHT / 2,
				height: this.WIREFRAME_SELECTION_LAYER_HEIGHT,
			})
			.style({
				visibility: 'hidden',
			});
	},

	initSelectionLayer: function() {
		this.selectionLayer = this.parentSVG.append("svg:rect")
			.attr({
				class: 'railSelection',
				y: -this.SELECTION_LAYER_HEIGHT / 2,
				height: this.SELECTION_LAYER_HEIGHT,
			})
			.style({
				visibility: 'hidden',
			});
	},

	initCaret: function() {
		this.caret = this.parentSVG.append("svg:line")
			.attr("class", "railCaret")
			.attr("x1", 0)
			.attr("y1", this.CARET_HEIGHT / 2)
			.attr("x2", 0)
			.attr("y2", -this.CARET_HEIGHT / 2)
			.attr("stroke", this.CARET_COLOR)
			.attr("stroke-width", this.CARET_WIDTH)
			.style("pointer-events", "none");
	},

	initNameBox: function() {
		this.nameBox = this.parentSVG.append("svg:g")
			.attr("class", "railNameBox")
			.attr("text-anchor", "middle")
			.attr("font-size", this.NAMEBOX_FONT_SIZE)
			.attr("font-weight", this.NAMEBOX_FONT_WEIGHT)
			.style("pointer-events", "none");
		this.renderNameBoxText();
	},

	renderNameBoxText: function() {
		var name = this.model.get('name');
		var length = this.model.get('sequence').length;
		var text1, text2;
		this.nameBox.selectAll('text').remove();
		if(!name) {
			text1 = '(' + length + ' bp)';
			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		} else {
			text1 = name;
			text2 = '(' + length + 'bp)';

			this.nameBox.append("svg:text")
				.text(text1)
				.attr("x", this.center.x)
				.attr("y", this.center.y);

			this.nameBox.append("svg:text")
				.attr("dy", "1em")
				.text(text2)
				.attr("x", this.center.x)
				.attr("y", this.center.y);
		}
	},



	initFrame: function() {
		this.frame = this.parentSVG.append("svg:rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", this.railWidth)
			.attr("height", this.FRAME_RECT_HEIGHT)
			.attr("stroke", this.FRAME_OUTLINE_COLOR)
			.attr("stroke-width", this.FRAME_OUTLINE_WIDTH)
			.attr("fill", this.FRAME_RING_COLOR)
			.attr("fill-rule", "evenodd");
	},
		

	clean: function() {
		this.cutSiteSVG.selectAll('*').remove();
		this.featureSVG.selectAll('*').remove();
		this.alignmentSVG.selectAll('*').remove();
		this.orfSVG.selectAll('*').remove();
		this.labelSVG.selectAll('*').remove();
	},


	// this should be refactored out later
	buildAlignmentMaps: function() {
		var seqLen = this.model.get('sequence').length;

		if(this.showFeatures) {
			var features = this.model.get('features');
			this.featAlignMap = VE.RendererUtil.buildAlignmentMap(features, seqLen);
		}
		if(this.showCutSites) {
			var sites = this.model.get('cutSites');
			this.cutSitesAlignMap = VE.RendererUtil.buildAlignmentMap(sites, seqLen);
		}
		if(this.showOrfs) {
			var orfs = this.model.get('orfs');
			this.orfsAlignMap = VE.RendererUtil.buildAlignmentMap(orfs, seqLen);
		}

		// TODO: alignments

	},


	fitWidthToContent: function(scrollToCenter) {
		// debugger;
		// this.railSVG.attr('height', null);
		// this.railSVG.attr('width', null);

		var railBox = this.railSVG.node().getBoundingClientRect();
		var parentBox = this.parentSVG.node().getBoundingClientRect();

		
		// var width = Math.max(parentBox.width, railBox.width);
		// var height = Math.max(parentBox.height, railBox.height);
		var width = Math.max(parentBox.width, railBox.width, this.$el.width());
		var height = Math.max(parentBox.height, railBox.height,  this.$el.height());

		// console.log(parentBox.width, railBox.width, this.$el.width());
		// console.log(parentBox.height, railBox.height,  this.$el.height());


		var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
		transform.e += railBox.left - parentBox.left;
		transform.f += railBox.top - parentBox.top;

		if(parentBox.width < railBox.width) {
			transform.e += railBox.width/2 - parentBox.width/2;
		}
		if(parentBox.height < railBox.height) {
			transform.f += railBox.height/2 - parentBox.height/2;
		}

		this.railSVG.attr({
			// width: parentBox.width,
			// height: parentBox.height,
			width: width,
			height: height,
		});
		var a = [];
		var keys = Object.keys(this.parentSVG.node().getTransformToElement(this.railSVG.node())).sort();
		for(var i=0;i<keys.length;i++) {
			a.push(transform[keys[i]]);
		}
		this.parentSVG.attr({
			transform: 'matrix('+a.join(',')+')',
		});
	},



	addListeners: function() {
		this.on(VE.VisibilityEvent.SHOW_CUTSITES_CHANGED, this.onShowCutSitesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_ORFS_CHANGED, this.onShowOrfsChanged, this);
		// this.on(VE.VisibilityEvent.SHOW_ALIGNMENTS_CHANGED, this.onShowAlignmentsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURES_CHANGED, this.onShowFeaturesChanged, this);
		this.on(VE.VisibilityEvent.SHOW_FEATURE_LABELS_CHANGED, this.onShowFeatureLabelsChanged, this);
		// this.on(VE.VisibilityEvent.SHOW_ALIGNMENT_LABELS_CHANGED, this.onShowAlignmentLabelsChanged, this);
		this.on(VE.VisibilityEvent.SHOW_CUTSITE_LABELS_CHANGED, this.onShowCutSiteLabelsChanged, this);
		this.on(VE.VisibilityEvent.VIEW_MODE_CHANGED, this.onViewModeChanged, this);
		this.on(VE.VisibilityEvent.SHOW_MAP_CARET_CHANGED, this.onShowMapCaretChanged, this);

		this.on(VE.SelectionEvent.CHANGE_CARET_POSITION, this.onChangeCaretPosition, this);
		this.on(VE.SelectionEvent.SELECT, this.onSelect, this);
		this.on(VE.SelectionEvent.DESELECT, this.onDeselect, this);

		this.on(VE.Event.NEW_SEQUENCE_OPENED, this.onNewSequenceOpened, this);

		this.on(VE.EditingEvent.CLIENT_OPERATION, this.onClientOperation, this);



		$(this.featureSVG.node())
			.on('click', 'path.rail-feature', {me: this}, this.onRailFeatureClicked)
			.on('contextmenu', 'path.rail-feature', {me: this}, this.onRailFeatureContextMenu)
			;

		$(this.selectionLayer.node())
			.on('contextmenu', {me: this}, this.onSelectionLayerContextMenu);

	},



	onShowMapCaretChanged: function(showMapCaret) {
		if(showMapCaret === this.showMapCaret) { return; }
		this.showMapCaret = showMapCaret;
		if(showMapCaret) {
			this.showCaret();
		} else {
			this.hideCaret();
		}
	},

	hideCaret: function() {
		this.caret.style('visibility', 'hidden');
	},

	showCaret: function() {
		this.caret.style('visibility', null);
	},


	onViewModeChanged: function(viewMode) {
		
		if(viewMode === 'pie') {
			this.hide();


		} else if(viewMode === 'rail') {
			this.show();


		} else {
			console.error('Invalid view mode: "' + viewMode + '"');
		}
	},



	hide: function() {
		this.hidden = true;
		this.railSVG.attr('display', 'none');

		this.undelegateEvents();

	},

	show: function() {
		this.hidden = false;
		this.railSVG.attr('display', null);

		this.fitWidthToContent();

		this.delegateEvents();

	},



	onSelectionLayerContextMenu: function(evt) {
		evt.preventDefault();
		var me = evt.data.me;

		var ve = me.ve;
		var start = ve.selectionStartBp;
		var end = ve.selectionEndBp;

		if(start !== null && end !== null) {
		
			var contextMenu = new Backbone.UI.menu.ContextMenu({
				posX: evt.clientX,
				posY: evt.clientY,
				items: [
					{
						label: 'New Annotation',
						on: {
							click: function(evt) {
								// console.log(evt);
								var featureInspectionWindow = new VE.FeatureInspectionWindow({
									title: 'New Annotation',
									startBp: start,
									endBp: end,
									name: 'New Feature',
								});
								featureInspectionWindow.show();

								featureInspectionWindow.on('ok-click', function() {
									var feat = featureInspectionWindow.createModel();
									var isValid = feat.validate(me.model);
									if(isValid) {
										var op = VE.EditingManager.generateAddFeatureOp(me.model, feat);
										me.model.applyClientOperation(op);
										me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
									}

								});

								contextMenu.remove();
							},
						},
					},
				],
			});
			contextMenu.show();
		}

	

	},


	onRailFeatureContextMenu: function(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

		var contextMenu = new Backbone.UI.menu.ContextMenu({
			posX: evt.clientX,
			posY: evt.clientY,
			items: [
				{
					label: 'Edit Annotation',
					on: {
						click: function(evt) {
							// console.log(evt);
							var featureInspectionWindow = new VE.FeatureInspectionWindow({
								title: 'Edit Annotation',
								startBp: start,
								endBp: end,
								name: feat.get('name'),
								strand: feat.get('strand'),
								type: feat.get('type'),
							});
							featureInspectionWindow.show();

							featureInspectionWindow.on('ok-click', function() {
								var newFeat = featureInspectionWindow.createModel();
								var isValid = newFeat.validate(me.model);
								if(isValid) {
									var op = VE.EditingManager.generateEditFeatureOp(me.model, feat, newFeat);
									me.model.applyClientOperation(op);
									me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);
								}

							});

							contextMenu.remove();
						},
					},
				},
				{
					label: 'Delete Annotation',
					on: {
						click: function(evt) {
							var op = VE.EditingManager.generateDeleteFeatureOp(me.model, feat);
							me.model.applyClientOperation(op);
							me.ve.trigger(VE.EditingEvent.CLIENT_OPERATION, op);

							contextMenu.remove();
						},
					}
				},
			],
		});
		contextMenu.show();
	},

	onRailFeatureClicked: function(evt) {
		var me = evt.data.me;
		var feat = this.__data__;

		var start = feat.get('start');
		var end = feat.get('end');

		me.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, end);
		me.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);
	},



	onClientOperation: function(sequenceOperation) {
		this.buildAlignmentMaps();
		// this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onNewSequenceOpened: function(sequenceModel) {
		this.model = sequenceModel;
		this.buildAlignmentMaps();
		// this.recalculatePieRadius();
		this.renderNameBoxText();
		this.render();
		this.fitWidthToContent();
	},


	onShowFeaturesChanged: function(showFeatures) {
		if(showFeatures === this.showFeatures) { return; }
		this.showFeatures = showFeatures;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowOrfsChanged: function(showOrfs, orfFrames, orfRevComFrames) {
		// if(showOrfs === this.showOrfs) { return; }
		this.showOrfs = showOrfs;
		this.orfFrames = orfFrames;
		this.orfRevComFrames = orfRevComFrames;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSitesChanged: function(showCutSites) {
		if(showCutSites === this.showCutSites) { return; }
		this.showCutSites = showCutSites;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowCutSiteLabelsChanged: function(showCutSiteLabels) {
		if(showCutSiteLabels === this.showCutSiteLabels) { return; }
		this.showCutSiteLabels = showCutSiteLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},

	onShowFeatureLabelsChanged: function(showFeatureLabels) {
		if(showFeatureLabels === this.showFeatureLabels) { return; }
		this.showFeatureLabels = showFeatureLabels;
		this.buildAlignmentMaps();
		this.render();
		this.fitWidthToContent();
	},


	onChangeCaretPosition: function(bpIndex) {
		// console.log('moo')
		// var angle = bpIndex * 2 * Math.PI / this.model.get('sequence').length;
		this.setCaretIndex(bpIndex);
	},

	setCaretIndex: function(bpIndex) {
		var seqLen = this.model.get('sequence').length;
		var x = bpIndex / seqLen * this.railWidth;
		this.caret.attr({
			x1: x,
			x2: x,
		});
	},

	onSelect: function(startBp, endBp) {
		
		// More draw wireframe to another event...
		this.drawWireframeSelectionLayer(startBp, endBp);

		this.drawSelectionLayer(startBp, endBp);
	},

	drawSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		if(fromIndex > endIndex) {
			// console.error('todo');

		} else {
			var x = fromIndex / seqLen * this.railWidth;
			var width = (endIndex - fromIndex) / seqLen * this.railWidth;

			this.selectionLayer.attr('width', width)
				.attr('x', x)
				.style('visibility', 'visible');
		}
		
	},

	drawWireframeSelectionLayer: function(fromIndex, endIndex) {
		var seqLen = this.model.get('sequence').length;
		if(fromIndex > endIndex) {
			// console.error('todo');
			
		} else {
			var x = fromIndex / seqLen * this.railWidth;
			var width = (endIndex - fromIndex) / seqLen * this.railWidth;

			this.wireframeSelectionLayer.attr('width', width)
				.attr('x', x)
				.style('visibility', 'visible');
		}
	},

	onDeselect: function() {
		this.selectionLayer.style('visibility', 'hidden');
		this.wireframeSelectionLayer.style('visibility', 'hidden');
	},


	onMousedown: function(evt) {
		if(evt.button === 2) {
			evt.preventDefault();
			this.onRightMouseDown(evt);
		} else {
			var bp = this.getClickBp(evt);
			this.startSelectionIndex = bp;
			this.mouseIsDown = true;
			this.selectionDirection = 0;
			this.ve.trigger(VE.SelectionEvent.DESELECT);
			if(this.startSelectionIndex !== null) {
				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);
			}
		}
	},



	onMousemove: function(evt) {
		// var SELECTION_THRESHOLD = 0;
		if(evt.button === 2) {
			evt.preventDefault();
			return;
		}

		var endSelectionIndex = this.getClickBp(evt);
		var start, end;

		if(this.mouseIsDown) {			
			
			if(this.startSelectionIndex === null && endSelectionIndex !== null) {
				this.startSelectionIndex = endSelectionIndex;
				this.selectionDirection = 0;
				this.ve.trigger(VE.SelectionEvent.DESELECT);
				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, this.startSelectionIndex);


			} else if(this.startSelectionIndex !== null && endSelectionIndex !== null) {
				// Set the direction of selection if it has not yet been determined.
				if(this.selectionDirection == 0) {
					if(this.startSelectionIndex <= endSelectionIndex) {
						this.selectionDirection = 1;
					} else {
						this.selectionDirection = -1;
					}
				}

				if(this.selectionDirection == -1) {
					start = endSelectionIndex;
					end = this.startSelectionIndex;
				} else {
					start = this.startSelectionIndex;
					end = endSelectionIndex;
				}

				this.ve.trigger(VE.SelectionEvent.CHANGE_CARET_POSITION, endSelectionIndex);
				
				if(evt.ctrlKey) {
					this.ve.trigger(VE.SelectionEvent.SELECT, start, end, false);

				} else {
					this.ve.trigger(VE.SelectionEvent.SELECT, start, end, true);

				}

			}

		}
	},


	onMouseup: function(evt) {
		this.mouseIsDown = false;
		this.startSelectionIndex = null;

		// More to put here...

		// this.wireframeSelectionLayer.style('visibility', 'hidden');


	},


	onRightMouseDown: function(evt) {
		// console.warn('TODO');
		// console.log(evt.offsetX, evt.offsetY)
	},



	getClickBp: function(evt) {
		// console.log(evt);
		if(evt.target === this.el) { return null; }

		var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
		var offsetX = evt.offsetX;

		var relX = offsetX / transform.a - transform.e;
		var percent = relX / this.railWidth;

		if(percent < 0) { percent = 0; }
		else if(percent > 1) { percent = 1; }
		
		var seqLen = this.model.length();

		var bp = Math.floor(percent * seqLen)

		return bp;
	},


	onMousewheel: function(evt) {
		if(evt.ctrlKey) {
			evt.preventDefault();

			var wheelDelta = evt.originalEvent.wheelDelta;
			wheelDelta /= 120;

			wheelDelta = Math.exp(wheelDelta / 24);
			var newZoom = this.zoomLevel * wheelDelta;

			var bb = this.el.getBoundingClientRect();
			// var clientX = evt.clientX - bb.left;
			// var clientY = evt.clientY - bb.top;
			var clientX = evt.clientX;
			var clientY = evt.clientY;

			var bp = this.getClickBp(evt);
			// var r = this.getRadiusPercent(evt);

			var positionParams = {
				clientX: clientX,
				clientY: clientY,
				bp: bp,
				// radiusPercent: r,
			};

			this.zoom(newZoom, positionParams);
			// this.zoom(newZoom);
		} 

	},

	resetRailWidth: function(newRailWidth) {
		this.railWidth = newRailWidth;
		this.frame.remove();
		this.caret.remove();
		this.initFrame();
		this.initCaret();
	},

	zoom: function(newZoom, positionParams) {
		var oldZoom = this.zoomLevel;
		this.zoomLevel = newZoom;
		var newRailWidth = this.railWidth * (newZoom/oldZoom);

		this.resetRailWidth(newRailWidth);
		this.render();
		this.fitWidthToContent();

		if(typeof positionParams === 'object') {
			var $el = this.$el;
			// var $el = $('.ve-subpanel'); // temporary

			var seqLen = this.model.length();

			var transform = this.parentSVG.node().getTransformToElement(this.railSVG.node());
			// var transform = this.railSVG.node().getTransformToElement(this.parentSVG.node());
			var clientX = positionParams.clientX;
			var clientY = positionParams.clientY;
			var bp = positionParams.bp;
			// var radiusPercent = positionParams.radiusPercent;


			var frame = $(this.frame.node());

			var frameOffset = frame.offset();
			var containerOffset = $el.offset();
			var currentScrollLeft = $el.scrollLeft();

			var frameWidth = frame[0].getBoundingClientRect().width;
			// var frameBb = frame[0].getBoundingClientRect();
			// var containerBb = this.el.getBoundingClientRect();

			// var frameWidth = frameBb.width;



			var percent = bp / seqLen;
			var xPos = frameWidth * percent;

			// xPos += frameOffset.left;
			var diff = frameOffset.left + currentScrollLeft - containerOffset.left;
			// console.log(frameOffset.left, $el.scrollLeft(), diff);

			// var diff = frameOffset.left - containerOffset.left;
			// console.log(frameOffset.left, containerOffset.left, diff);

			// var diff = frameBb.left - containerBb.left;
			// console.log(frameBb.left, containerBb.left, diff);

			// debugger;


			// var xPos2 = xPos - (containerOffset.left - clientX);

			// var scrollLeft = xPos2 - frameOffset.left;
			// var scrollLeft = xPos - containerOffset.left + clientX;


			// var scrollLeft = diff + xPos + clientX;
			var scrollLeft = diff + xPos;
			// var scrollLeft = diff + xPos + clientX - containerOffset.left;

			// console.log(bp);
			// console.log(scrollLeft);

			$el.scrollLeft(scrollLeft);

			// console.log(frameWidth);

			// console.log(frameOffset, containerOffset);






			// this.el.scrollTop = scrollTop;
			// this.el.scrollLeft = scrollLeft;

			// var center = this.center;

			// var centerX = transform.a * center.x + transform.c * center.y + transform.e;
			// var centerY = transform.b * center.x + transform.d * center.y + transform.f;
			

			// // var centerX = transform.a * center.x + transform.e;
			// // var centerY = transform.d * center.y + transform.f;

			// var r = radiusPercent * this.railRadius * transform.a;

			// var dX = r * Math.cos(-angle + offset);
			// var dY = - r * Math.sin(-angle + offset);

			// var absX = centerX + dX;
			// var absY = centerY + dY;

			// // var absX = dX + transform.e;
			// // var absY = dY + transform.f;

			// // var scrollLeft = absX + clientX;
			// // var scrollTop = absY + clientY;

			// var scrollLeft = absX - clientX;
			// var scrollTop = absY - clientY;

			// // var scrollLeft = absX;
			// // var scrollTop = absY;

			// // console.log(scrollLeft, scrollTop)
			// // console.log(centerX, centerY)
			// // console.log(absX, absY);
			// // console.log(dX, dY);

			// // debugger;

			// this.el.scrollTop = scrollTop;
			// this.el.scrollLeft = scrollLeft;

		}
	},




});



















































})();;
(function(){

var BASE_URL = '/../Bio/assets/enzymes/';

// VE.RestrictionEnzymeManager.getEnzymes('common')

/**
 * Retrieves xml text from a given group name and hands it to the parser.
 * @param {String} groupName Which enzyme group to get.
 * @param {Function(Array<Bio.RestrictionEnzyme>)} cb Callback.
 */
function getEnzymes(groupName, cb) {
	var x = new XMLHttpRequest();
	var url = BASE_URL + groupName + '.xml';

	function callback(responseText) {
		// console.log(responseText);
		var enzymes = Bio.RestrictionEnzyme.parseListFromXML(responseText);
		cb(enzymes);
	}

	x.open('GET', url, true);
	x.onreadystatechange = function() {
		if (x.readyState == 4) {
			callback(x.responseText)
		}
	};
	
	x.send(null);
}


VE.RestrictionEnzymeManager = {

	currentUserEnzymeGroupName: null,

	enzymeGroups: {},

	/**
	 * @param {String} groupName Which enzyme group to load.
	 * @param {Function()} cb Optional callback.
	 */
	loadEnzymes: function(groupName, cb) {
		var me = this;
		getEnzymes(groupName, function(enzymes) {
			me.enzymeGroups[groupName] = enzymes;
			if(typeof cb === 'function') { cb(); }
		});
	},

	/**
	 * @param {String} groupName Which enzyme group to get.
	 */
	getEnzymeGroup: function(groupName) {
		return this.enzymeGroups[groupName];
	},

	getCurrentUserEnzymeGroup: function() {
		return this.enzymeGroups[this.currentUserEnzymeGroupName];
	},

	


};














































})();;
(function(){



VE.EditingManager = {

	/**
	 * Start is inclusive. End is exclusive.
	 * @param {VE.Sequence} sequence
	 * @param {String} insertedString
	 * @param {Integer} start
	 * @param {Integer} end
	 * @return {VE.ot.SequenceOperation}
	 */
	generateInsertSequenceOp: function(sequence, insertedString, start, end) {
		var SymbolListOperation = VE.ot.SymbolListOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		if(end === undefined) { end = start; }
		var slOp = new SymbolListOperation();
		if(start <= end) { // Not sure about equality.
			slOp.retain(start)
				.delete(end - start)
				.insert(insertedString)
				.retain(sequence.length() - end);
		} else if(start > end) {
			// Appends inserted text to the end of the sequence after
			// deleting selection.
			slOp.delete(end)
				.retain(start - end)
				.delete(sequence.length() - start)
				.insert(insertedString);
		}

		var fOp = slOp.generateShiftedFeatureIndicesOp(sequence.get('features'));

		var sOp = new SequenceOperation({
			symbolListOperation: slOp,
			featureOperation: fOp,
		});

		// console.log(sOp);

		return sOp;
	},


	/**
	 * Start is inclusive. End is exclusive.
	 * @param {VE.Sequence} sequence
	 * @param {Integer} start
	 * @param {Integer} end
	 * @return {VE.ot.SequenceOperation}
	 */
	generateDeleteSequenceOp: function(sequence, start, end) {
		var SymbolListOperation = VE.ot.SymbolListOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var slOp = new SymbolListOperation();
		if(start <= end) { // Not sure about equality.
			slOp.retain(start)
				.delete(end - start)
				.retain(sequence.length()-end);
		} else if(start > end) {
			slOp.delete(end)
				.retain(start - end)
				.delete(sequence.length()-start);
		}

		// var fOp = slOp.generateShiftedFeatureIndicesOp(this);

		/*var slOp = Ext.create("Teselagen.ot.VectorEditor.SymbolListOperation");
		slOp.retain(start)
			.delete(end - start)
			.retain(this.getSequenceLength()-end);*/

		var fOp = slOp.generateShiftedFeatureIndicesOp(sequence.get('features'));

		var sOp = new SequenceOperation({
			symbolListOperation: slOp,
			featureOperation: fOp,
		});

		// console.log(sOp);

		return sOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation or Integer} feature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateDeleteFeatureOp: function(sequence, feature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var index;
		var features = sequence.get('features');
		if(typeof feature === 'number') { index = feature; }
		else { index = features.indexOf(feature); }

		if(index < 0) {
			console.error('Invalid feature index '+index+'.');
			throw new Error('Invalid feature index '+index+'.');
		}

		var fOp = new FeatureOperation();
		fOp.retain(index)
			.delete(1)
			.retain(features.length - index - 1);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		return seqOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation} feature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateAddFeatureOp: function(sequence, feature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;

		var fOp = new FeatureOperation();
		fOp.retain(sequence.get('features').length)
			.insert(feature);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		return seqOp;
	},

	/**
	 * @param {VE.Sequence} sequence
	 * @param {VE.Annotation} oldFeature
	 * @param {VE.Annotation} newFeature
	 * @return {VE.ot.SequenceOperation}
	 */
	generateEditFeatureOp: function(sequence, oldFeature, newFeature) {
		var FeatureOperation = VE.ot.FeatureOperation;
		var SequenceOperation = VE.ot.SequenceOperation;
		var IndexShiftOperation = VE.ot.IndexShiftOperation;
		var FeatureModification = VE.ot.FeatureModification;

		var features = sequence.get('features');

		var index = features.indexOf(oldFeature);
		if(index < 0) {
			console.error('Invalid feature index '+index+'.');
			throw new Error('Invalid feature index '+index+'.');
		}

		var fidOpParams = {};

		if(oldFeature.get('name') !== newFeature.get('name')) {
			fidOpParams.changeName = newFeature.get('name');
		}
		if(oldFeature.get('type') !== newFeature.get('type')) {
			fidOpParams.changeType = newFeature.get('type');
		}
		if(oldFeature.get('strand') !== newFeature.get('strand')) {
			fidOpParams.changeStrand = newFeature.get('strand');
		}
		
		if(oldFeature.get('start') !== newFeature.get('start')) {
			var shiftStart = new IndexShiftOperation();
			var ns = newFeature.get('start');
			var os = oldFeature.get('start');
			var diff = Math.abs(os-ns);
			if(ns > os) {
				shiftStart.retain(os).insert(diff);
			} else {
				shiftStart.retain(os-diff).delete(diff);
			}
			fidOpParams.shiftStart = shiftStart;
		}
		if(oldFeature.get('end') !== newFeature.get('end')) {
			var shiftEnd = new IndexShiftOperation();
			// var ne = newFeature.get('end');
			// var oe = oldFeature.get('end');
			var ne = newFeature.get('end') - 1;
			var oe = oldFeature.get('end') - 1;
			var diff = Math.abs(oe-ne);
			
			if(ne > oe) {
				shiftEnd.retain(oe).insert(diff);
			} else {
				shiftEnd.retain(oe-diff).delete(diff);
			}
			fidOpParams.shiftEnd = shiftEnd;
		}

		var featMod = new FeatureModification(fidOpParams);
		

		var fOp = new FeatureOperation();
		fOp.retain(index)
			.modify(featMod)
			.retain(features.length - index);

		var seqOp = new SequenceOperation({
			featureOperation: fOp
		});
		// console.log(seqOp);
		return seqOp;
	},






};




















































})();;
(function(){


VE.CollaborativeUndoManager = function(inData) {
	if(inData) {
		this.maxItems = inData.maxItems || null;
	} else {
		this.maxItems = null;
	}
	
	this.state = this.NORMAL_STATE;
	this.undoStack = [];
	this.redoStack = [];
};


VE.CollaborativeUndoManager.prototype = {

	NORMAL_STATE: 'normal',
	UNDOING_STATE: 'undoing',
	REDOING_STATE: 'redoing',
	
	constructor: function(inData) {
		if(inData) {
			this.maxItems = inData.maxItems || null;
		} else {
			this.maxItems = null;
		}
		
		this.state = this.NORMAL_STATE;
		this.undoStack = [];
		this.redoStack = [];
	},
	
	// Op should be inverse of last client edit.
	add: function(op) {
		var me = this;
		if(me.state === me.NORMAL_STATE) {
			me.undoStack.push(op);
			if(me.maxItems !== null && me.undoStack.length > me.maxItems) { me.undoStack.shift(); }
			me.redoStack = [];
		} else if(me.state === me.UNDOING_STATE) {
			me.redoStack.push(op);
		} else if(me.state === me.REDOING_STATE) {
			me.undoStack.push(op);
		} else {
			console.error("Invalid state.");
		}
	},
	
	transform: function(operation) {
		
		var transformStack = function(stack, operation) {
			var newStack = [];
			for(var i=stack.length-1;i>=0;i--) {
				var pair = Teselagen.ot.VectorEditor.SequenceOperation.transform(stack[i], operation);
				if(typeof pair[0].isNoop !== 'function' || !pair[0].isNoop()) {
					newStack.push(pair[0]);
				}
				operation = pair[1];
			}
			return newStack.reverse();
		};
		
		this.undoStack = transformStack(this.undoStack, operation);
		this.redoStack = transformStack(this.redoStack, operation);
	},
	
	// Perform an undo by calling a function with the latest operation on the undo
	// stack. The function is expected to call the `add` method with the inverse
	// of the operation, which pushes the inverse on the redo stack.
	performUndo: function (fn) {
		this.state = this.UNDOING_STATE;
		if(!this.canUndo()) { throw new Error("Undo not possible."); }
		fn(this.undoStack.pop());
		this.state = this.NORMAL_STATE;
	},
	
	// The inverse of `performUndo`.
	performRedo: function (fn) {
		this.state = this.REDOING_STATE;
		if(!this.canRedo()) { throw new Error("Redo not possible."); }
		fn(this.redoStack.pop());
		this.state = this.NORMAL_STATE;
	},
	
	// Is the undo stack not empty?
	canUndo: function() {
		return this.undoStack.length !== 0;
	},
	
	// Is the redo stack not empty?
	canRedo: function() {
		return this.redoStack.length !== 0;
	},
};










































})();;
(function(){




var StringUtil = {
	/** Trims white space at beginning and end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	trim: function(line) {
		return line.replace(/^\s+|\s+$/g,"");
	},

	/** Trims white space at beginning string
	 * @param {String} line
	 * @returns {String} line
	 */
	ltrim: function(line) {
		return line.replace(/^\s+/,"");
	},

	/** Trims white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rtrim: function(line) {
		return line.replace(/\s+$/,"");
	},

	/** Pads white space at beginning of string
	 * @param {String} line
	 * @returns {String} line
	 */
	lpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = padString + str;
		return str;
	},

	/** Pads white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = str + padString;
		return str;
	}

};





VE.ExportManager = {
	

	saveStringToFile: function(str, fileName) {
		fileName = fileName || "";
		var blob = new Blob([str]);
		saveAs(blob, fileName);
	},



	sequenceModelToGenbank: function(sequence) {		

		function getCurrentDateString() {
			var date = new Date();
			date = date.toString().split(' ');
			var day = date[2];
			var month = date[1].toUpperCase();
			var year = date[3];
			return day+'-'+month+'-'+year;
		}

		function createGenbankLocus(sequence) {
			var tmp;

			var naType = 'DNA'; // change if we support other types of sequences
			var date = getCurrentDateString();

			var line = StringUtil.rpad("LOCUS"," ", 12);
			line += StringUtil.rpad(sequence.get('name')," ", 16);
			line += " "; // T.H line 2778 of GenbankFormat.as col 29 space
			line += StringUtil.lpad(String(sequence.length())," ", 11);
			line += " bp "; // col 41
			// if (this.strandType !== "") {
			// 	tmp =  this.strandType + "-";
			// } else {
				tmp = "";
			// }
			line += StringUtil.lpad(tmp, " ", 3);
			line += StringUtil.rpad(naType," ",6);
			line += "  ";

			if (sequence.get('circular') === false) {
				line += "linear  ";
				//line += "        ";
			} else {
				line += "circular";
			}

			line += " "; //col 64
			// if (this.divisionCode !== undefined) {
			// 	line += StringUtil.rpad(this.divisionCode," ", 3);
			// } else {
				StringUtil.rpad(line, " ", 3);
			// }
			line += " "; // col 68
			// DOES NOT PARSE DATE USEFULLY ORIGINALLY!
			line += date;
			//line += "\n";

			return line;
		}


		function featureNoteInDataToGenbankString(noteInData) {
			if(noteInData.quoted) {
				return StringUtil.lpad("/", " ", 22) + noteInData.name + "=\"" + noteInData.value + "\"";
			} else {
				return StringUtil.lpad("/"," ", 22) + noteInData.name + "=" + noteInData.value ;
			}
		}

		function featureToGenbankString(feat) {
			var lines = [];

			var line = "     " + StringUtil.rpad(feat.get('type'), " ", 16);
			var locStr = [];

			// for(var i=0;i<feat.inData.locations.length;i++) {
			// 	var loc = feat.inData.locations[i];
			// 	locStr.push(loc.start + '..' + loc.end);
			// }
			locStr.push(feat.get('start') + '..' + feat.get('end'));
			locStr = locStr.join(',');

			if(feat.get('strand') === -1) {
				locStr = "complement(" + locStr + ")";
			}

			lines.push(line + locStr);

			lines.push(featureNoteInDataToGenbankString({
				name: 'label',
				value: feat.get('name'),
				quoted: true
			}));

			// for(var i=0;i<feat.notes.length;i++) {
			// 	var noteInData = feat.notes[i].inData;
			// 	lines.push(featureNoteInDataToGenbankString(noteInData));
			// }

			return lines.join('\r\n');
		}


		var lines = [];
		lines.push(createGenbankLocus(sequence));
		
		var features = sequence.get('features');
		if(features.length > 0) {
			lines.push("FEATURES             Location/Qualifiers");

			for(var i=0;i<features.length;i++) {
				var feat = features[i];
				lines.push(featureToGenbankString(feat));
			}

		}


		var seq = sequence.get('sequence');
		lines.push("ORIGIN      ");
		for (var i=0, ii = seq.length; i<ii; i=i+60) {
			var line = [];
			var ind = StringUtil.lpad( (""+(i+1))," ", 9);
			line.push(ind);

			for (var j=i; j < i+60; j=j+10) {
				line.push(seq.slice(j,j+10).join(''));
			}
			lines.push(line.join(' '));
		}

		lines.push('//');

		return lines.join('\r\n');
	
	},




};














































})();;

VE.RendererUtil = {
	

	// may need something with circular features
	// buildAlignmentMap: function(annotations, seqLen) {
	// 	this.seqLen = seqLen;

	// 	for(var i=0,ii=annotations.length;i<ii;i++) {
	// 		annotations[i].__index = i;
	// 	}

	// 	annotations = annotations.slice(0).sort(this.sortByStart);
				
	// 	var rows = [];
	// 	// map from annotation index to row index
	// 	var alignmentMap = {};

	// 	loopA: for(var i=0;i<annotations.length;i++) {
	// 		var annot = annotations[i];
	// 		var index = annot.__index;

	// 		var start = annot.get('start');
	// 		var end = annot.get('end');

	// 		for(var j=0;j<rows.length;j++) {
	// 			var row = rows[j];
	// 			if(start >= row) {
	// 				alignmentMap[index] = j;
	// 				rows[j] = end;
	// 				continue loopA;
	// 			}
	// 		}

	// 		rows.push(end);
	// 		alignmentMap[index] = rows.length - 1;
	// 	}

	// 	return alignmentMap;
	// },


	buildAlignmentMap: function(annotations, seqLen) {
		var max = Math.max;
		this.seqLen = seqLen;

		for(var i=0,ii=annotations.length;i<ii;i++) {
			var annot = annotations[i];
			annot.__index = i;

			var start = annot.get('start');
			var end = annot.get('end');

			if(start <= end) {
				annot.__start = start;
				annot.__end = end;
				annot.__circ = false;
			} else {
				annot.__start = 0;
				annot.__end = end;
				annot.__circ = true;
			}

		}

		annotations = annotations.slice(0).sort(this.sortByStart);
		
		var rows = [];
		var rowEnds = [];
		// map from annotation index to row index
		var alignmentMap = {};

		loopA: for(var i=0;i<annotations.length;i++) {
			var annot = annotations[i];
			var index = annot.__index;

			var start = annot.__start;
			var end = annot.__end;
			var __circ = annot.__circ;

			for(var j=0;j<rows.length;j++) {
				var row = rows[j];
				if(start >= row) {
					alignmentMap[index] = j;
					rows[j] = end;


					// if(__circ) {
					// 	var st = annot.get('start');
					// 	var oldEnd;
					// 	rowEnds[j] = ((oldEnd = rowEnds[j]) === undefined) ? st : max(st, oldEnd);
					// }



					continue loopA;
				}
			}

			rows.push(end);
			alignmentMap[index] = rows.length - 1;



			// if(__circ) {
			// 	var st = annot.get('start');
			// 	var oldEnd;
			// 	var j = rows.length - 1;
			// 	rowEnds[j] = ((oldEnd = rowEnds[j]) === undefined) ? st : max(st, oldEnd);
			// }



		}

		return alignmentMap;
	},




	sortByStart: function(a1, a2) {
		// if (a1 === undefined || a2 === undefined) {
		//     console.log("There was an undefined sorting value!!");
		//     return 0;
		// }
		var a1Start = a1.get('start');
		var a2Start = a2.get('start');

		if(a1Start > a2Start) {
			return 1;
		} else if(a1Start < a2Start) {
			return -1;
		} else {
			return 0;
		}
	},

	sortByLength: function(a1, a2) {
		if(a1.get('start') > a1.get('end')) {
			return a1.get('end') + this.seqLen -
					a1.get('start') + 1;
		} else {
			return a1.get('end') - a1.get('start') + 1;
		}

		if(a2.get('start') > a2.get('end')) {
			return a2.get('end') + this.seqLen -
					a2.get('start') + 1;
		} else {
			return a2.get('end') - a2.get('start') + 1;
		}

		if(a1Length < a2Length) {
			return 1;
		} else if(a1Length > a2Length) {
			return -1;
		} else {
			return 0;
		}
	},


	complement: function(str) {
		var complement = [];
		for(var i=0;i<str.length;i++) {
			complement.push(this.complementSymbol(str[i]))
		}
		return complement.join('');

		// var complement = [];
		// str = str.toLowerCase();
		// for(var i=0;i<str.length;i++) {
		// 	complement.push(this.complementLowerCaseSymbol(str[i]))
		// }
		// return complement.join('');

	},

	complementSymbol: function(pSymbol){
		pSymbol = pSymbol.toLowerCase();
		switch(pSymbol) {
			case 'a':
				return 't';
			case 't':
				return 'a';
			case 'g':
				return 'c';
			case 'c':
				return 'g';
			case 'y':
				return 'r';
			case 'r':
				return 'y';
			case 's':
				return 's';
			case 'w':
				return 'w';
			case 'k':
				return 'm';
			case 'm':
				return 'k';
			case 'b':
				return 'v';
			case 'v':
				return 'b';
			case 'd':
				return 'h';
			case 'h':
				return 'd';
			case 'n':
				return 'n';
			case '-':
				return '-';
			default:
				return pSymbol;
		}
	},

	complementLowerCaseSymbol: function(pSymbol){
		// pSymbol = pSymbol.toLowerCase();
		var map = {
			'a': 't',
			't': 'a',
			'g': 'c',
			'c': 'g',
			'y': 'r',
			'r': 'y',
			's': 's',
			'w': 'w',
			'k': 'm',
			'm': 'k',
			'b': 'v',
			'v': 'b',
			'd': 'h',
			'h': 'd',
			'n': 'n',
			'-': '-',
		};

		return map[pSymbol] || pSymbol;
	},



	calculateAngles: function(annot, seqLen) {
		var angle1 = annot.get('start') * 2 * Math.PI / seqLen;
		var angle2 = annot.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},
	
	calculateAngle: function(bpIndex, seqLen) {
		return bpIndex * 2 * Math.PI / seqLen;
	},



	assignAlignmentRenderInfoToRows: function(annotateContainer, rows) {
		var seqLen = annotateContainer.model.get('sequence').length;
		var bpPerRow = annotateContainer.bpPerRow;
		var charPerRow = annotateContainer.getCharPerRow();
		var showSpaceEvery10Bp = annotateContainer.showSpaceEvery10Bp;

		function alignmentToSubjectString(alignment) {
			var str = '';
			for(var i=0,ii=alignment.length;i<ii;i++) {
				var align = alignment[i];
				var type = align.type;
				var queryStart = align.queryStart;
				while(str.length < queryStart) {
					str += ' ';
				}
				if(type !== 'queryGap') {
					str += align.subjectSequence;
				}
			}
			while(str.length < seqLen) {
				str += ' ';
			}
			return str;
		}

		function alignmentToTypeString(alignment) {
			var str = '';
			for(var i=0,ii=alignment.length;i<ii;i++) {
				var align = alignment[i];
				var type = align.type;
				var queryStart = align.queryStart;
				var len = align.subjectSequence.length;
				while(str.length < queryStart) {
					str += '0';
				}
				if(type === 'match') {
					for(var j=0;j<len;j++) {
						str += '1';
					}
				} else if(type === 'mismatch') {
					for(var j=0;j<len;j++) {
						str += '2';
					}
				}
			}
			while(str.length < seqLen) {
				str += '0';
			}
			return str;
		}

		function getRowStr(str, rowIndex) {
			var rowArray = str.slice(rowIndex*bpPerRow, rowIndex*bpPerRow + bpPerRow);
			if(showSpaceEvery10Bp) {
				var a = [];
				for(var i=0;i<rowArray.length;i+=10) {
					a.push(rowArray.slice(i,i+10));
				}
				return a.join(' ').toUpperCase();
			} else {
				return rowArray.toUpperCase();
			}
		}

		function getDashedArrayFromRowTypeString(str, char) {
			var a = [0];
			var num = 0;
			var solid = true;
			// if(str[0] !== char) { a.push(0); }
			for(var i=0;i<str.length;i++) {
				var c = str[i];
				if(c === char) {
					if(solid) {
						num++;
					} else {
						a.push((num/str.length));
						num = 1;
					}
					solid = true;

				} else {
					if(!solid) {
						num++;
					} else {
						a.push((num/str.length));
						num = 1;
					}
					solid = false;

				}
			}
			a.push((num/str.length));

			return a;
		}

		var alignments = annotateContainer.model.get('alignments');
		for(var i=0;i<alignments.length;i++) {
			var aligns = alignments[i];
			// for(var j=0;j<rows.length;j++) {
			// 	rows[j].alignments[i] = [];
			// }

			// console.time('A')
			var subjStr = alignmentToSubjectString(aligns);
			// console.log(subjStr);
			var typeStr = alignmentToTypeString(aligns);
			// console.log(typeStr);
			// console.timeEnd('A')

			for(var j=0;j<rows.length;j++) {
				var rowSubjStr = getRowStr(subjStr, j);
				var rowTypeStr = getRowStr(typeStr, j);

				var matchDashArray = getDashedArrayFromRowTypeString(rowTypeStr, '1');
				var mismatchDashArray = getDashedArrayFromRowTypeString(rowTypeStr, '2'); 

				var renderInfo = {
					text: rowSubjStr,
					matchDashArray: matchDashArray,
					mismatchDashArray: mismatchDashArray,
				};
				rows[j].alignments[i] = renderInfo;
			}

			// for(var j=0;j<aligns.length;j++) {
			// 	var align = aligns[j];

			// 	var start = align.queryStart;
			// 	var end = (align.type === 'queryGap') ? start : start + align.subjectSequence.length;
			// 	if(end < start) throw new Error("TODO");

			// 	var annotStartRow = annotateContainer.bpToRowIndex(start);
			// 	var annotEndRow = annotateContainer.bpToRowIndex(end-1);

			// 	for(var k=annotStartRow;k<=annotEndRow;k++) {
			// 		rows[k].alignments[i].push(j);
			// 	}
			// }
		}
	},

	
}

































































;

if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.FeatureRenderer = {
	
	DEFAULT_FEATURE_HEIGHT: 6,
	DEFAULT_FEATURES_SEQUENCE_GAP: 6,
	DEFAULT_FEATURES_GAP: 2,

	ADDITIONAL_ROW_WIDTH: 5,
	ADDITIONAL_ROW_START_X: 2,
	BACKWARD_RECT_ADDITIONAL_ROW_LEFT: 1,

	ALL_ADDITIONAL_Y: 20,

	SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT: 3,
	SINGLE_BP_FEATURE_ADDITIONAL_WIDTH: 2,
	SINGLE_BP_FEATURE_ADDITIONAL_X: 2,


	drawFeatures: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var features = annotatePanel.model.get('features');

		// var scrollTop = annotatePanel.$el.scrollTop();
		// var scrollTop = annotatePanel.el.scrollTop;
		var scrollTop = annotatePanel.scrollTop;
		// var height = annotatePanel.$el.height();
		var height = annotatePanel.height;
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];

		var g = annotatePanel.featuresSVG;
		for(var j=0;j<row.features.length;j++) {
			
			var featsInRow = row.features[j];
			if(featsInRow === undefined) { continue; }
			
			for(var k=0,kk=featsInRow.length;k<kk;k++) {
				var featIndex = featsInRow[k];
				var feat = features[featIndex];
				var strand = feat.get('strand');
				var start = feat.get('start');
				var end = feat.get('end');
				// if(end < start) throw new Error("TODO");
				var featStartRow = Math.floor(start/bpPerRow);
				var featEndRow = Math.floor((end-1)/bpPerRow);

				var rowStartBp = start%bpPerRow;
				var rowEndBp = (end-1)%bpPerRow;

				if(annotatePanel.showSpaceEvery10Bp) {
					rowStartBp += Math.floor(rowStartBp/10);
					rowEndBp += Math.floor(rowEndBp/10);
				}

				var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
				var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

				var offset = annotatePanel.getFeatureLayerOffset(row);
				// var featY = row.y + offset + j * 10 + 2;
				var featY = row.y + offset + j * 10 + 2 - scrollTop;
				var featHeight = this.DEFAULT_FEATURE_HEIGHT;
				

				if(end >= start) {
					var featSvg;

					if(rowIndex === featStartRow && rowIndex === featEndRow) {
						// probably needs some todo
						var featWidth = (rowEndBp - rowStartBp + 1) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardSingleBP(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardArrow(g, rowStartPx, featY, featWidth, featHeight);
						}
						
					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardArrow(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						
					} else {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}

					}

					featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));
					featSvg.attr('class', 'annotate-feature');
					featSvg.property('__data__', feat);

				} else {

					var featSvg;
					if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardArrow(g, rowStartPx, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));
						featSvg.attr('class', 'annotate-feature');
						featSvg.property('__data__', feat);

					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardArrow(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));
						featSvg.attr('class', 'annotate-feature');
						featSvg.property('__data__', feat);

					} else if(rowIndex < featEndRow || rowIndex > featStartRow) {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							featSvg = this.drawFeatureForwardRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							featSvg = this.drawFeatureRect(g, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							featSvg = this.drawFeatureBackwardRect(g, sequenceX1, featY, featWidth, featHeight);
						}
						featSvg.attr('fill', this.colorByType(feat.get('type').toLowerCase()));
						featSvg.attr('class', 'annotate-feature');
						featSvg.property('__data__', feat);

					}


				}
					
			}

		}

	},



	drawFeatureRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:rect")
			.attr("x", pX)
			.attr("y", pY)
			.attr("stroke", this.featureColor)
			.attr("width", pWidth)
			.attr("height", 6);
	},

	drawFeatureForwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:path")
			.attr("d", " M " + (pX) + " " + (pY) +
					   " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX) + " " + (pY));
	},

	drawFeatureBackwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		return pGraphics.append("svg:path")
			.attr("d", " M " + (pX) + " " + (pY) +
					   " L " + (pX) + " " + (pY + pHeight) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " S " + (pX + pWidth - 3) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX) + " " + (pY));
	},

	drawFeatureForwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		if(pWidth ){
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth - 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY);
		} else{
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY));
		}
	},

	drawFeatureForwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		// pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;

		// return pGraphics.append("svg:path")
		// 		 .attr("d", " M " + (pX) + " " + (pY) +
		// 					" L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
		// 					" L " + (pX) + " " + (pY + pHeight) +
		// 					" L " + (pX) + " " + (pY));
		return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY) +
						   " L " + (pX + pWidth - 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight) +
						   // " S " + (pX + 3) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY)
						   " L " + (pX) + " " + pY)
							;
	},

	drawFeatureBackwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		if(pWidth){
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX + 8) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY) +
						   " S " + (pX + pWidth - 3) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY + pHeight) +
						   " L " + (pX + 8) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight / 2) +
						   " L " + (pX + 8) + " " + (pY));
		} else{
			return pGraphics.append("svg:path")
				.attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
						   " L " + (pX + pWidth) + " " + (pY) +
						   " L " + (pX + pWidth) + " " + (pY + pHeight) +
						   " L " + (pX) + " " + (pY + pHeight / 2));
		}
	},

	drawFeatureBackwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;

		return pGraphics.append("svg:path")
				 .attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
					   " L " + (pX + pWidth) + " " + (pY) +
					   " L " + (pX + pWidth) + " " + (pY + pHeight) +
					   " L " + (pX) + " " + (pY + pHeight / 2));
	},

	colorByType: function(type) {
		var switchObj = {
			promoter: "#31B440",
			terminator: "#F51600",
			cds: "#EF6500",
			m_rna: "#FFFF00",
			misc_binding: "#006FEF",
			misc_feature: "#006FEF",
			misc_marker: "#8DCEB1",
			rep_origin: "#878787"
		};

		var color = switchObj[type] || "#CCCCCC";
		return color;
	},






};
































;

if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.CutSiteRenderer = {
	
	CURVY_LINE_COLOR: "#FF0000",
	CURVY_LINE_HEIGHT: 5,
	CUT_SITE_COLOR: "#625D5D",
	ONE_CUT_COLOR: "#E57676",
	MULTIPLE_CUT_COLOR: "#888888",
	CUTSITE_HEIGHT_OFFSET: 25,


	drawCutSites: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var cutSites = annotatePanel.model.get('cutSites');

		var scrollTop = annotatePanel.scrollTop;
		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		var g = annotatePanel.cutSitesSVG;
		for(var j=0;j<row.cutSites.length;j++) {
			var cutSiteIndex = row.cutSites[j];
			if(cutSiteIndex === undefined) { continue; }
			var cutSite = cutSites[cutSiteIndex];
			var enzyme = cutSite.get('restrictionEnzyme');
			var strand = cutSite.get('strand');
			var start = cutSite.get('start');
			var end = cutSite.get('end');
			if(end < start) throw new Error("TODO");
			var csLength = end - start;

			var startRow = annotatePanel.bpToRowIndex(start);
			var endRow = annotatePanel.bpToRowIndex(end-1);

			var rowStartBp = annotatePanel.bpToColIndex(start);
			var rowEndBp = annotatePanel.bpToColIndex(end-1);

			var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
			var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

			var cutSiteHeight = this.CUTSITE_HEIGHT_OFFSET;
			var offset = annotatePanel.getCutSiteLayerOffset(row);
			// var cutsiteY = row.y + offset + row.cutSites.length * (30) - j * cutSiteHeight;
			var cutsiteY = row.y + offset + row.cutSites.length * (30) - j * cutSiteHeight - scrollTop;

			var oneCut = (cutSite.get('numCuts') === 1);

			if(rowIndex === startRow && rowIndex === endRow) {
				var cutSiteWidth = rowEndPx - rowStartPx + CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, rowStartPx + 2, cutsiteY, cutSiteWidth - 4);
				this.drawName(g, rowStartPx, cutsiteY - this.CURVY_LINE_HEIGHT,
							enzyme.get('name'), oneCut);

			} else if(rowIndex === startRow) {
				var cutSiteWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, rowStartPx + 2, cutsiteY, cutSiteWidth - 2);
				this.drawName(g, rowStartPx, cutsiteY - this.CURVY_LINE_HEIGHT,
							enzyme.get('name'), oneCut);

			} else if(rowIndex === endRow) {
				var cutSiteWidth = rowEndPx - sequenceX1 + CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, sequenceX1, cutsiteY, cutSiteWidth - 2);

			} else {
				var cutSiteWidth = charPerRow * CHAR_WIDTH;
				cutSiteWidth = (cutSiteWidth < 0) ? 0 : cutSiteWidth;
				this.drawCurvyLine(g, sequenceX1, cutsiteY, cutSiteWidth);

			}


			var dsForward, dsReverse;
			if(strand === 1) {
				dsForward = enzyme.get('dsForward');
				dsReverse = enzyme.get('dsReverse');
			} else {
				dsForward = csLength - enzyme.get('dsReverse');
				dsReverse = csLength - enzyme.get('dsForward');
			}
			dsForward += start;
			dsReverse += start;

			var dsForwardRow = annotatePanel.bpToRowIndex(dsForward);
			var dsReverseRow = annotatePanel.bpToRowIndex(dsReverse);

			var dsForwardBp = annotatePanel.bpToColIndex(dsForward);
			var dsReverseBp = annotatePanel.bpToColIndex(dsReverse);

			var dsForwardX = sequenceX1 + dsForwardBp * CHAR_WIDTH - 2;
			var dsReverseX = sequenceX1 + dsReverseBp * CHAR_WIDTH - 2;

			var dsForwardY = cutsiteY;
			var dsReverseY = cutsiteY + this.CURVY_LINE_HEIGHT;

			if(rowIndex === dsForwardRow) {
				this.drawDsForwardPosition(g, dsForwardX, dsForwardY);
			}

			if(rowIndex === dsReverseRow) {
				this.drawDsReversePosition(g, dsReverseX, dsReverseY);
			}


		}

	},


	appendCurvyLinePattern: function(annotateSVG) {
		annotateSVG.append("svg:pattern")
			.attr("id", "curvyLine")
			.attr("width", 5)
			.attr("height", 5)
			.attr("patternUnits", "userSpaceOnUse")
			.append("svg:path")
			.attr("d", "M 0 0 L 2.5 5 L 5 0")
			.attr("stroke", this.CURVY_LINE_COLOR)
			.attr("fill", "none");
	},


	drawName: function(g, x, y, name, oneCut) {
		var color;
		if(oneCut) {
			color = this.ONE_CUT_COLOR;
		} else {
			color = this.MULTIPLE_CUT_COLOR;
		}

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y - 4) // -4 to move it off the curvy line a bit.
			.style({
				"fill": color,
				'font-family': "'Maven Pro', sans-serif",
				'font-weight': 500,
				'font-size': 12,
				'pointer-events': 'none',
			})
			.text(name);
	},

	drawCurvyLine: function(g, x, y, width) {
		g.append("svg:rect")
			.attr("x", x)
			.attr("y", y)
			.attr("width", width)
			.attr("height", this.CURVY_LINE_HEIGHT)
			.attr("fill", "url(#curvyLine)");
	},

	drawDsForwardPosition: function(g, x, y) {
		g.append("svg:path")
			.attr("d", "M" + x + " " + y + "L" + (x - 3) + " " + (y - 4) +
				  "L" + (x + 3) + " " + (y - 4))
			.attr("fill", this.CUT_SITE_COLOR);
	},

	drawDsReversePosition: function(g, x, y) {
		g.append("svg:path")
			.attr("d", "M" + x + " " + y + "L" + (x - 3) + " " + (y + 4) +
				  "L" + (x + 3) + " " + (y + 4))
			.attr("fill", this.CUT_SITE_COLOR);
	},





};












































;

if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.OrfRenderer = {

	CODON_SHIFT: -6,
	ORF_COLOR: ["#FF0000", "#31B440", "#3366CC"],
	ORF_STROKE_WIDTH: 2,


	drawOrfs: function(annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var orfs = annotatePanel.model.get('orfs');

		var scrollTop = annotatePanel.scrollTop;
		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		var g = annotatePanel.orfsSVG;
		for(var j=0;j<row.orfs.length;j++) {
			var orfIndex = row.orfs[j];
			if(orfIndex === undefined) { continue; }
			var orf = orfs[orfIndex];
			var strand = orf.get('strand');
			var start = orf.get('start');
			var end = orf.get('end');
			if(end < start) throw new Error("TODO");
			var orfLength = end - start;

			var startRow = annotatePanel.bpToRowIndex(start);
			var endRow = annotatePanel.bpToRowIndex(end-1);

			var rowStartBp = annotatePanel.bpToColIndex(start);
			var rowEndBp = annotatePanel.bpToColIndex(end-1);

			var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
			var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

			var offset = annotatePanel.getOrfLayerOffset(row);
			var upShift = j * 8 - 6;
			var color = this.ORF_COLOR[Math.abs(orf.get('frame'))];
			// var orfY = row.y + offset - upShift;
			var orfY = row.y + offset - upShift - scrollTop;
			
			var orfX1, orfX2;
			if(rowIndex === startRow && rowIndex === endRow) {
				orfX1 = rowStartPx;
				orfX2 = rowEndPx;
			} else if(rowIndex === startRow) {
				orfX1 = rowStartPx;
				orfX2 = sequenceX2;
			} else if(rowIndex === endRow) {
				orfX1 = sequenceX1;
				orfX2 = rowEndPx;
			} else {
				orfX1 = sequenceX1;
				orfX2 = sequenceX2;
			}

			g.append("svg:line")
				.attr({
					x1: orfX1,
					x2: orfX2,
					y1: orfY,
					y2: orfY,
					stroke: color,
					'stroke-width': this.ORF_STROKE_WIDTH,
				});

			if(rowIndex === endRow && strand === 1) {
				var codonEndPointX1 = rowEndPx + CHAR_WIDTH;
				var codonEndPointY1 = orfY;
				//draw arrow ends
				g.append("svg:path")
					.attr("d", "M" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 - 4) +
								"L" + codonEndPointX1 + " " + codonEndPointY1 +
								"L" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 + 4) +
								"L" + (codonEndPointX1 - 10) + " " +
								(codonEndPointY1 - 4))
					.attr("fill", color);
			}

			if(rowIndex === startRow && strand === -1) {
				var codonEndPointX2 = rowStartPx - CHAR_WIDTH;
				var codonEndPointY2 = orfY;
				//draw arrow ends
				g.append("svg:path")
					.attr("d", "M" + codonEndPointX2 + " " + codonEndPointY2 +
								"L" + (codonEndPointX2 + 10) + " " +
								(codonEndPointY2 - 4) +
								"L" + (codonEndPointX2 + 10) + " " +
								(codonEndPointY2 + 4) +
								"L" + codonEndPointX2 + " " + codonEndPointY2)
					.attr("fill", color);
			}

			var startCodons = orf.get('startCodons');
			for(var k=0;k<startCodons.length;k++) {
				var codon = startCodons[k];
				var codonRow = annotatePanel.bpToRowIndex(codon);
				if(codonRow !== rowIndex) { continue; }

				var codonBp = annotatePanel.bpToColIndex(codon);

				if(strand === -1) {
					codonBp -= 1;
				}

				var codonPx = sequenceX1 + codonBp * CHAR_WIDTH;
				g.append("svg:circle")
					.attr("cx", codonPx + CHAR_WIDTH +
								this.CODON_SHIFT)
					.attr("cy", orfY)
					.attr("r", 3.5)
					.attr("fill", color);
			}


		}





	},





};

































;

if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}


VE.annotate.SelectionLayerRenderer = {


	drawSelectionLayerRect: function(pGraphics, pX, pY, pWidth, pHeight){
		return pGraphics.append("svg:rect")
			.attr("class", 'annotateSelectionRect')
			.attr("x", pX)
			.attr("y", pY)
			.attr("width", pWidth)
			.attr("height", pHeight);
	},


};




























































;

if(typeof VE.annotate !== 'object') {
	VE.annotate = {};
}

VE.annotate.AlignmentRenderer = {
	
	CHAR_WIDTH: 9,
	FONT_SIZE: 12,
	FONT_FAMILY: 'Ubuntu Mono',
	GAP_HEIGHT: 18,
	GAP_COLOR: 'black',
	GAP_WIDTH: 2,
	GAP_YOFFSET: 11,
	HIGHLIGHT_HEIGHT: 14,
	HIGHLIGHT_YOFFSET: 9,
	LETTER_SPACING: '3px',
	MATCH_COLOR: 'green',
	MISMATCH_COLOR: 'red',
	MISMATCH_HEIGHT: 18,
	TEXT_COLOR: 'white',


	drawAlignments: function(annotatePanel, rowIndex) {
		var rows = annotatePanel.rows;
		var alignments = annotatePanel.model.get('alignments');
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;
		this.CHAR_WIDTH = CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		var row = rows[rowIndex];
		var g = annotatePanel.alignmentsSVG;
		var queryGapSVG = annotatePanel.queryGapSVG;

		for(var i=0;i<row.alignments.length;i++) {
			var alignment = alignments[i];
			var r_alignment = row.alignments[i];

			var offset = annotatePanel.getAlignmentLayerOffset(row);
			var upshift = 20 * i;
			var alignY = row.y + offset - upshift;

			for(var j=0;j<r_alignment.length;j++) {
				var alignIndex = r_alignment[j]
				if(alignIndex === undefined) { continue; }
				var align = alignment[alignIndex];
				// console.log(align);

				if(align.type === 'queryGap') {
					var start = align.queryStart;
					var alignX = sequenceX1 + annotatePanel.bpToColIndex(start) * CHAR_WIDTH;
					alignX += CHAR_WIDTH;

					this.drawQueryGap(queryGapSVG, alignX - 2, alignY, align);


				} else {
					var start = align.queryStart;
					var end = start + align.subjectSequence.length;
					if(end < start) throw new Error("TODO");

					var startRow = annotatePanel.bpToRowIndex(start);
					var endRow = annotatePanel.bpToRowIndex(end-1);

					var rowStartCol = annotatePanel.bpToColIndex(start);
					var rowEndCol = annotatePanel.bpToColIndex(end-1);

					var rowStartBp = start % bpPerRow;
					var rowEndBp = (end - 1) % bpPerRow;

					var rowStartPx = sequenceX1 + rowStartCol * CHAR_WIDTH;
					var rowEndPx = sequenceX1 + rowEndCol * CHAR_WIDTH;

					var alignX1, alignX2, text, bpOffset;
					if(rowIndex === startRow && rowIndex === endRow) {
						alignX1 = rowStartPx;
						alignX2 = rowEndPx;
						text = align.subjectSequence.toUpperCase();
						bpOffset = start % bpPerRow;

					} else if(rowIndex === startRow) {
						alignX1 = rowStartPx;
						alignX2 = sequenceX2;
						text = align.subjectSequence.slice(0, bpPerRow - rowStartBp).toUpperCase();
						bpOffset = start % bpPerRow;

					} else if(rowIndex === endRow) {
						alignX1 = sequenceX1;
						alignX2 = rowEndPx;
						text = align.subjectSequence.slice(align.subjectSequence.length - rowEndBp - 1).toUpperCase();

					} else {
						alignX1 = sequenceX1;
						alignX2 = sequenceX2;
						var n_rows = rowIndex - startRow;
						var bpOffset = (n_rows - 1) * bpPerRow + (bpPerRow - rowStartBp)
						text = align.subjectSequence.slice(bpOffset, bpOffset + bpPerRow).toUpperCase();

					}
					if(annotatePanel.showSpaceEvery10Bp) {
						text = this.addSpaceEvery10Bp(text, bpOffset);
					}

					if(align.type === 'match') {
						var rect = this.drawMatch(g, alignX1, alignY, text);
						// rect.attr('start', align.queryStart);

					} else if(align.type === 'mismatch') {
						var rect = this.drawMismatch(g, alignX1, alignY, text);
						// rect.attr('start', align.queryStart);
						// rect.attr('subjectSequence', align.subjectSequence);

					}


				}

			}

		}

		// function createDashedArrayAttr(a) {
		// 	var b = [];
		// 	var factor = charPerRow * CHAR_WIDTH;
		// 	for(var i=0,ii=a.length;i<ii;i++) {
		// 		b[i] = a[i] * factor;
		// 	}
		// 	return b.join(',');
		// }

		// for(var i=0;i<row.alignments.length;i++) {
		// 	var alignment = alignments[i];
		// 	var renderInfo = row.alignments[i];

		// 	var offset = annotatePanel.getAlignmentLayerOffset(row);
		// 	var upshift = 20 * i;
		// 	var alignY = row.y + offset - upshift;

		// 	var text = renderInfo.text;


		// 	g.append("svg:line")
		// 		.attr({
		// 			x1: sequenceX1, y1: alignY + 4,
		// 			x2: sequenceX2, y2: alignY + 4,
		// 			'stroke-dasharray': createDashedArrayAttr(renderInfo.matchDashArray),
		// 		})
		// 		.style({
		// 			stroke: this.MATCH_COLOR,
		// 			fill: 'none',
		// 			'stroke-width': this.HIGHLIGHT_HEIGHT,
		// 		});

		// 	g.append("svg:line")
		// 		.attr({
		// 			x1: sequenceX1, y1: alignY + 4,
		// 			x2: sequenceX2, y2: alignY + 4,
		// 			'stroke-dasharray': createDashedArrayAttr(renderInfo.mismatchDashArray),
		// 		})
		// 		.style({
		// 			stroke: this.MISMATCH_COLOR,
		// 			fill: 'none',
		// 			'stroke-width': this.MISMATCH_HEIGHT,
		// 		});


		// 	g.append("svg:text")
		// 		.attr("x", sequenceX1)
		// 		.attr("y", alignY + 4)
		// 		.attr("fill", this.TEXT_COLOR)
		// 		.attr("font-family", this.FONT_FAMILY)
		// 		.attr("font-size", this.FONT_SIZE)
		// 		.attr("letter-spacing", this.LETTER_SPACING)
		// 		.style('pointer-events', 'none')
		// 		.text(text);
			

		// }
	},
	
	addSpaceEvery10Bp: function(str, colOffset) {
		colOffset = colOffset || 0;
		var a = [];
		var ws = "";
		for(var i=0;i<colOffset;i++) {
			ws += " ";
		}
		str = ws + str;
		for(var i=0;i<str.length;i+=10) {
			a.push(str.slice(i,i+10));
		}
		return a.join(' ').trim();
	},

	drawQueryGap: function(g, x, y, align) {
		var gapText = "Gap Sequence: " + align.subjectSequence;
		g.append("svg:rect")
			.attr("class", "alignment-query-gap")
			.attr("x", x)
			.attr("y", y - this.HIGHLIGHT_YOFFSET)
			.attr("width", this.GAP_WIDTH)
			.attr("height", this.GAP_HEIGHT)
			.attr("fill", this.GAP_COLOR)
		.append("svg:title")
			.style('pointer-events', 'none')
			.text(gapText);
	},

	drawMatch: function(g, x, y, text) {
		var rect = g.append("svg:rect")
			.attr("class", "alignment-match")
			.attr("x", x - 1)
			.attr("y", y - this.HIGHLIGHT_YOFFSET + 2)
			.attr("width", this.CHAR_WIDTH * text.length)
			.attr("height", this.HIGHLIGHT_HEIGHT)
			.attr("fill", this.MATCH_COLOR);

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y + 4)
			.attr("fill", this.TEXT_COLOR)
			.attr("font-family", this.FONT_FAMILY)
			.attr("font-size", this.FONT_SIZE)
			.attr("letter-spacing", this.LETTER_SPACING)
			.style('pointer-events', 'none')
			.text(text);
		return rect;
	},

	drawMismatch: function(g, x, y, text) {
		var rect = g.append("svg:rect")
			.attr("class", "alignment-mismatch")
			.attr("x", x - 1)
			.attr("y", y - this.HIGHLIGHT_YOFFSET)
			.attr("width", this.CHAR_WIDTH * text.length)
			.attr("height", this.MISMATCH_HEIGHT)
			.attr("fill", this.MISMATCH_COLOR);

		g.append("svg:text")
			.attr("x", x)
			.attr("y", y + 4)
			.attr("fill", this.TEXT_COLOR)
			.attr("font-family", this.FONT_FAMILY)
			.attr("font-size", this.FONT_SIZE)
			.attr("letter-spacing", this.LETTER_SPACING)
			.style('pointer-events', 'none')
			.text(text);

		return rect;
	},

	



};























































;
(function(){

if(typeof VE.annotate !== 'object') { VE.annotate = {}; }





VE.annotate.PreviewRenderer = {

	BP_FONT: '12px Ubuntu Mono',


	DEFAULT_FEATURE_HEIGHT: 6,
	DEFAULT_FEATURES_SEQUENCE_GAP: 6,
	DEFAULT_FEATURES_GAP: 2,

	ADDITIONAL_ROW_WIDTH: 5,
	ADDITIONAL_ROW_START_X: 2,
	BACKWARD_RECT_ADDITIONAL_ROW_LEFT: 1,

	ALL_ADDITIONAL_Y: 20,

	SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT: 3,
	SINGLE_BP_FEATURE_ADDITIONAL_WIDTH: 2,
	SINGLE_BP_FEATURE_ADDITIONAL_X: 2,


	CODON_SHIFT: -6,
	ORF_COLOR: ["#FF0000", "#31B440", "#3366CC"],
	ORF_STROKE_WIDTH: 2,


	drawPreview: function(canvas, context, annotateContainer) {
		var sequence = annotateContainer.model;
		var rows = annotateContainer.rows;

		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;
		var bpPerRow = annotateContainer.bpPerRow;
		var charPerRow = annotateContainer.getCharPerRow();

		var sequenceX1 = annotateContainer.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		context.font = this.BP_FONT;

		var showFeatures = annotateContainer.showFeatures;
		var showComplementarySequence = annotateContainer.showComplementarySequence;
		var showOrfs = annotateContainer.showOrfs;


		for(var i=0,ii=rows.length;i<ii;i++) {
			var row = rows[i];

			var rowStr = annotateContainer.getRowStr(i);
			// console.log(rowStr);

			var x = sequenceX1;
			var y = row.y + annotateContainer.getBpTextOffset(row);

			context.fillStyle = '#000000';
			context.strokeStyle = '#000000';

			for(var j=0,jj=rowStr.length;j<jj;j++) {
				var _x = x + j * (CHAR_WIDTH);
				var bp = rowStr[j];

				// context.strokeText(bp, _x, y);
				context.fillText(bp, _x, y);
			}

			if(showComplementarySequence) {
				this.drawRevcomBpText(context, annotateContainer, i);
			}

			this.drawSplitLine(context, 0, sequenceX2 + CHAR_WIDTH, row.y);

			this.renderBpLabel(context, annotateContainer, i*bpPerRow + 1, 10, row.y + 20);



			if(showFeatures) {
				this.drawFeatures(canvas, context, annotateContainer, i);
			}

			if(showOrfs) {
				this.drawOrfs(canvas, context, annotateContainer, i);
			}
			

		}

		// debugger;
		





	},


	renderBpLabel: function(context, annotateContainer, basePairs, labelX, labelY){
		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;

		var str = annotateContainer.renderIndexString(basePairs);

		context.fillStyle = '#000000';
		context.strokeStyle = '#000000';

		for(var j=0,jj=str.length;j<jj;j++) {
			var _x = labelX + j * (CHAR_WIDTH);
			var ch = str[j];

			// context.strokeText(ch, _x, labelY);
			context.fillText(ch, _x, labelY);
		}
	},



	drawRevcomBpText: function(context, annotateContainer, rowIndex) {
		var CHAR_WIDTH = annotateContainer.CHAR_WIDTH;
		var row = annotateContainer.rows[rowIndex];
		var revComStr = annotateContainer.getRowRevcomStr(rowIndex);
		var x = annotateContainer.getSequenceX1();
		var y = row.y + annotateContainer.getBpTextOffset(row) + annotateContainer.COMPLEMENTARY_VERTICAL_OFFSET;

		context.fillStyle = '#b0b0b0';
		context.strokeStyle = '#b0b0b0';

		for(var j=0,jj=revComStr.length;j<jj;j++) {
			var _x = x + j * (CHAR_WIDTH);
			var bp = revComStr[j];

			// context.strokeText(bp, _x, y);
			context.fillText(bp, _x, y);
		}
	},



	drawSplitLine: function(context, x1, x2, y) {
		context.strokeStyle = 'lightgray';

		context.beginPath();
		context.moveTo(x1, y);
		context.lineTo(x2, y);
		context.stroke();
		context.closePath();
	},


	drawFeatures: function(canvas, context, annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var features = annotatePanel.model.get('features');

		var height = annotatePanel.height;
		
		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];

		// var g = annotatePanel.featuresSVG;
		for(var j=0;j<row.features.length;j++) {
			
			var featsInRow = row.features[j];
			if(featsInRow === undefined) { continue; }
			
			for(var k=0,kk=featsInRow.length;k<kk;k++) {
				var featIndex = featsInRow[k];
				var feat = features[featIndex];
				var strand = feat.get('strand');
				var start = feat.get('start');
				var end = feat.get('end');
				// if(end < start) throw new Error("TODO");
				var featStartRow = Math.floor(start/bpPerRow);
				var featEndRow = Math.floor((end-1)/bpPerRow);

				var rowStartBp = start%bpPerRow;
				var rowEndBp = (end-1)%bpPerRow;

				if(annotatePanel.showSpaceEvery10Bp) {
					rowStartBp += Math.floor(rowStartBp/10);
					rowEndBp += Math.floor(rowEndBp/10);
				}

				var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
				var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

				var offset = annotatePanel.getFeatureLayerOffset(row);
				// var featY = row.y + offset + j * 10 + 2;
				var featY = row.y + offset + j * 10 + 2;
				var featHeight = this.DEFAULT_FEATURE_HEIGHT;
				

				if(end >= start) {
					
					context.fillStyle = VE.annotate.FeatureRenderer.colorByType(feat.get('type').toLowerCase());

					if(rowIndex === featStartRow && rowIndex === featEndRow) {
						// probably needs some todo
						var featWidth = (rowEndBp - rowStartBp + 1) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardSingleBP(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardArrow(context, rowStartPx, featY, featWidth, featHeight);
						}
						
					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardArrow(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}
						
					} else {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					}


				} else {
					context.fillStyle = VE.annotate.FeatureRenderer.colorByType(feat.get('type').toLowerCase());

					if(rowIndex === featStartRow) {
						var featWidth = (charPerRow - rowStartBp) * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, rowStartPx, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardArrow(context, rowStartPx, featY, featWidth, featHeight);
						}

					} else if(rowIndex === featEndRow) {
						var featWidth = rowEndBp * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardArrow(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					} else if(rowIndex < featEndRow || rowIndex > featStartRow) {
						var featWidth = charPerRow * CHAR_WIDTH;
						if(strand === 1) {
							this.drawFeatureForwardRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === 0) {
							this.drawFeatureRect(context, sequenceX1, featY, featWidth, featHeight);
						} else if(strand === -1) {
							this.drawFeatureBackwardRect(context, sequenceX1, featY, featWidth, featHeight);
						}

					}

				}
					
			}

		}

	},


	drawFeatureRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;
		pGraphics.fillRect(pX, pY, pWidth, pHeight);
	},

	drawFeatureForwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.quadraticCurveTo((pX + 3), (pY + pHeight / 2), (pX), (pY + pHeight));
		// pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.lineTo(pX + pWidth, pY + pHeight);
		pGraphics.lineTo(pX + pWidth, pY)
		pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureBackwardRect: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo(pX, pY + pHeight);
		pGraphics.lineTo(pX + pWidth, pY + pHeight);
		pGraphics.quadraticCurveTo((pX + pWidth - 3), (pY + pHeight / 2), (pX + pWidth), (pY));
		// pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureForwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth - 8), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight / 2));
		pGraphics.lineTo((pX + pWidth - 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.quadraticCurveTo((pX + 3), (pY + pHeight / 2), (pX), pY);
		// pGraphics.lineTo(pX, pY);
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureBackwardArrow: function(pGraphics, pX, pY, pWidth, pHeight){
		pY += this.ALL_ADDITIONAL_Y;

		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.quadraticCurveTo((pX + pWidth - 3), (pY + pHeight / 2), (pX + pWidth), (pY + pHeight));
		// pGraphics.lineTo((pX + pWidth), (pY + pHeight));
		pGraphics.lineTo((pX + 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight / 2));
		pGraphics.lineTo((pX + 8), (pY));
		pGraphics.fill();
		pGraphics.closePath();
	},

	drawFeatureForwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		
		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		pGraphics.lineTo((pX + pWidth - 8), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight / 2));
		pGraphics.lineTo((pX + pWidth - 8), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight));
		pGraphics.lineTo((pX), pY);
		pGraphics.fill();
		pGraphics.closePath();
							
	},

	drawFeatureBackwardSingleBP: function(pGraphics, pX, pY, pWidth, pHeight) {
		pY += this.ALL_ADDITIONAL_Y;
		pX -= this.SINGLE_BP_FEATURE_ADDITIONAL_X;
		pWidth += this.SINGLE_BP_FEATURE_ADDITIONAL_WIDTH;
		pHeight += this.SINGLE_BP_FEATURE_ADDITIONAL_HEIGHT;


		pGraphics.beginPath();
		pGraphics.moveTo(pX, pY);
		

		pGraphics.lineTo((pX + pWidth), (pY));
		pGraphics.lineTo((pX + pWidth), (pY + pHeight));
		pGraphics.lineTo((pX), (pY + pHeight / 2));


		pGraphics.fill();
		pGraphics.closePath();

		// return pGraphics.append("svg:path")
		// 		 .attr("d", " M " + (pX) + " " + (pY + pHeight / 2) +
		// 			   (pX + pWidth) + " " + (pY)
		// 			   (pX + pWidth) + " " + (pY + pHeight)
		// 			   (pX) + " " + (pY + pHeight / 2)
	},




	drawOrfs: function(canvas, context, annotatePanel, rowIndex) {

		var rows = annotatePanel.rows;
		var orfs = annotatePanel.model.get('orfs');

		var height = annotatePanel.height;

		var bpPerRow = annotatePanel.bpPerRow;
		var charPerRow = annotatePanel.getCharPerRow();
		var CHAR_WIDTH = annotatePanel.CHAR_WIDTH;

		var sequenceX1 = annotatePanel.getSequenceX1();
		var sequenceX2 = sequenceX1 + charPerRow * CHAR_WIDTH;

		
		var row = rows[rowIndex];
		// var g = annotatePanel.orfsSVG;
		for(var j=0;j<row.orfs.length;j++) {
			var orfIndex = row.orfs[j];
			if(orfIndex === undefined) { continue; }
			var orf = orfs[orfIndex];
			var strand = orf.get('strand');
			var start = orf.get('start');
			var end = orf.get('end');
			if(end < start) throw new Error("TODO");
			var orfLength = end - start;

			var startRow = annotatePanel.bpToRowIndex(start);
			var endRow = annotatePanel.bpToRowIndex(end-1);

			var rowStartBp = annotatePanel.bpToColIndex(start);
			var rowEndBp = annotatePanel.bpToColIndex(end-1);

			var rowStartPx = sequenceX1 + rowStartBp * CHAR_WIDTH;
			var rowEndPx = sequenceX1 + rowEndBp * CHAR_WIDTH;

			var offset = annotatePanel.getOrfLayerOffset(row);
			var upShift = j * 8 - 6;
			var color = this.ORF_COLOR[Math.abs(orf.get('frame'))];
			// var orfY = row.y + offset - upShift;
			var orfY = row.y + offset - upShift;
			
			var orfX1, orfX2;
			if(rowIndex === startRow && rowIndex === endRow) {
				orfX1 = rowStartPx;
				orfX2 = rowEndPx;
			} else if(rowIndex === startRow) {
				orfX1 = rowStartPx;
				orfX2 = sequenceX2;
			} else if(rowIndex === endRow) {
				orfX1 = sequenceX1;
				orfX2 = rowEndPx;
			} else {
				orfX1 = sequenceX1;
				orfX2 = sequenceX2;
			}



			context.strokeStyle = color;
			context.fillStyle = color;
			context.lineWidth = this.ORF_STROKE_WIDTH;

			context.beginPath();
			context.moveTo(orfX1, orfY);
			context.lineTo(orfX2, orfY);
			context.stroke();
			context.closePath();




			if(rowIndex === endRow && strand === 1) {
				var codonEndPointX1 = rowEndPx + CHAR_WIDTH;
				var codonEndPointY1 = orfY;

				// draw arrow ends
				context.beginPath();
				context.moveTo(codonEndPointX1 - 10, codonEndPointY1 - 4);
				context.lineTo(codonEndPointX1, codonEndPointY1);
				context.lineTo((codonEndPointX1 - 10), (codonEndPointY1 + 4));
				context.lineTo((codonEndPointX1 - 10), (codonEndPointY1 - 4));
				context.fill();
				context.closePath();

			}

			if(rowIndex === startRow && strand === -1) {
				var codonEndPointX2 = rowStartPx - CHAR_WIDTH;
				var codonEndPointY2 = orfY;

				// draw arrow ends
				context.beginPath();
				context.moveTo(codonEndPointX2, codonEndPointY2);

				context.lineTo((codonEndPointX2 + 10), (codonEndPointY2 - 4));
				context.lineTo((codonEndPointX2 + 10), (codonEndPointY2 + 4));
				context.lineTo(codonEndPointX2, codonEndPointY2);

				context.fill();
				context.closePath();
			}

			var startCodons = orf.get('startCodons');
			for(var k=0;k<startCodons.length;k++) {
				var codon = startCodons[k];
				var codonRow = annotatePanel.bpToRowIndex(codon);
				if(codonRow !== rowIndex) { continue; }

				var codonBp = annotatePanel.bpToColIndex(codon);

				if(strand === -1) {
					codonBp -= 1;
				}

				var codonPx = sequenceX1 + codonBp * CHAR_WIDTH;

				var cx = codonPx + CHAR_WIDTH + this.CODON_SHIFT;
				var cy = orfY;
				var r = 3.5;

				context.beginPath();
				context.arc(cx,cy,r,0,2*Math.PI);
				context.fill();
				context.closePath();
			}


		}

	},











};





















































})();;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.FeatureRenderer = {

	DEFAULT_FEATURE_HEIGHT: 7,
	// DEFAULT_FEATURE_HEIGHT: 10,
	DEFAULT_FEATURES_GAP: 3,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.5,

	ARC_THRESHOLD: 5, // Minimum arc length of a feature to be drawn as a
					  // full pie piece as opposed to a triangle.


	drawFeatures: function(pieContainer) {
		var me = this;

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.get('sequence').length;

		pieContainer.featureSVG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			.attr("class", 'pie-feature')
			.attr('d', function(feat, i) {
				var strand = feat.get('strand');

				var angles = me.calculateAngles(feat, seqLen);
				var angle = angles[1] - angles[0];

				var radius = me.getFeatureRadius(pieContainer, i);
				
				return me.getFeaturePathD(radius, me.DEFAULT_FEATURE_HEIGHT, angle, strand);
			})
			.attr('fill', function(feat, i) {
				return me.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.OUTLINE_COLOR)
			.attr("stroke-width", this.OUTLINE_WIDTH)
			.attr("fill-rule", "evenodd")
			.attr('transform', function(feat, i) {
				var strand = feat.get('strand');
				var angles = me.calculateAngles(feat, seqLen);
				var rotateStr = me.createFeatureRotationString(angles, strand, pieContainer);
				var translateStr = 'translate('+(pieContainer.center.x)+','+(pieContainer.center.y)+')';
				return rotateStr + translateStr;
			})
			// .on('contextmenu', this.onFeatureContextMenu.bind(this))
			// .on('mouseover', function(feat, i) {
			// 	this.mouseon = true;
			// 	d3.select(this).attr('fill', d3.rgb(me.colorByType(feat.get('type').toLowerCase())).darker(1).toString());
			// })
			// .on('mouseout', function(feat, i) {
			// 	this.mouseon = false;
			// 	d3.select(this).attr('fill', me.colorByType(feat.get('type').toLowerCase()));
			// })
			;


	},





	createFeatureRotationString: function(angles, strand, pieContainer) {
		var a;
		if(strand === 1) {
			a = angles[0] * 180 / Math.PI;
		} else if(strand === -1) {
			a = angles[1] * 180 / Math.PI;
		}
		return 'rotate('+a+','+(pieContainer.center.x)+','+(pieContainer.center.y)+')';
	},


	getFeaturePathD: function(radius, thickness, angle, strand) {
		var outerRadius = radius + thickness / 2;
		var innerRadius = radius - thickness / 2;

		var path = []; 

		var arcLength = radius * angle;
		// var arcAngle = (arcLength - this.ARC_THRESHOLD) / radius;
		var arcAngle = angle - this.ARC_THRESHOLD / radius;
		// console.log(angle, arcAngle)

		var largeArcFlag = (arcAngle > Math.PI) ? 1 : 0;
		var sweepFlag = (strand === 1) ? 1 : 0;
		var antiSweepFlag = (sweepFlag === 0) ? 1 : 0;
		var x, y;

		// Draw triangle if arc is smaller than the threshold.
		if(arcLength > this.ARC_THRESHOLD) {
			if(strand === 1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = outerRadius * Math.cos(-arcAngle + offset);
				y = -outerRadius * Math.sin(-arcAngle + offset);// - thickness/2;
				path.push('A', outerRadius, outerRadius, 0, largeArcFlag, sweepFlag, x, y);

				x = radius * Math.cos(-angle + offset);
				y = -radius * Math.sin(-angle + offset);
				path.push('L', x, y);

				x = innerRadius * Math.cos(-arcAngle + offset);
				y = -innerRadius * Math.sin(-arcAngle + offset);// + thickness/2;
				path.push('L', x, y);

				path.push('A', innerRadius, innerRadius, 0, largeArcFlag, antiSweepFlag, 0, -innerRadius);

				path.push('L', '0', -outerRadius);

				path.push('Z');

			} else if(strand === -1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = outerRadius * Math.cos(arcAngle + offset);
				y = -outerRadius * Math.sin(arcAngle + offset);// - thickness/2;
				path.push('A', outerRadius, outerRadius, 0, largeArcFlag, sweepFlag, x, y);

				x = radius * Math.cos(angle + offset);
				y = -radius * Math.sin(angle + offset);
				path.push('L', x, y);

				x = innerRadius * Math.cos(arcAngle + offset);
				y = -innerRadius * Math.sin(arcAngle + offset);// + thickness/2;
				path.push('L', x, y);

				path.push('A', innerRadius, innerRadius, 0, largeArcFlag, antiSweepFlag, 0, -innerRadius);

				path.push('L', '0', -outerRadius);

				path.push('Z');

			}

		} else {
			if(strand === 1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = radius * Math.cos(-angle + offset);
				y = -radius * Math.sin(-angle + offset);
				path.push('L', x, y);

				path.push('L', '0', -innerRadius);

				path.push('Z');


			} else if(strand === -1) {
				var offset = Math.PI/2;

				path.push('M', '0', -outerRadius);

				x = radius * Math.cos(angle + offset);
				y = -radius * Math.sin(angle + offset);
				path.push('L', x, y);

				path.push('L', '0', -innerRadius);

				path.push('Z');

			}

		}

		return path.join(' ');
	},




	getFeatureRadius: function(pieContainer, featureIndex) {
		var alignIndex = pieContainer.featAlignMap[featureIndex];
		return pieContainer.railRadius - this.getOffsetFromRail(alignIndex);
	},

	getOffsetFromRail: function(alignIndex) {
		return 3 * this.DEFAULT_FEATURES_GAP
				+ alignIndex * (this.DEFAULT_FEATURE_HEIGHT + this.DEFAULT_FEATURES_GAP);
	},

	calculateAngles: function(feature, seqLen) {
		var angle1 = feature.get('start') * 2 * Math.PI / seqLen;
		var angle2 = feature.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},


	colorByType: function(type) {
		var switchObj = {
			promoter: "#31B440",
			terminator: "#F51600",
			cds: "#EF6500",
			m_rna: "#FFFF00",
			misc_binding: "#006FEF",
			misc_feature: "#006FEF",
			misc_marker: "#8DCEB1",
			rep_origin: "#878787"
		};

		var color = switchObj[type] || "#CCCCCC";
		return color;
	},





};

































;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.LabelRenderer = {

	FONT_FAMILY: "Maven Pro",
	FONT_SIZE: "8px",
	LABEL_DISTANCE_FROM_RAIL: 35,
	LABEL_HEIGHT: 10,
	LABEL_CONNECTION_WIDTH: 0.5,
	LABEL_CONNECTION_COLOR: "#d2d2d2",

	MIN_INLINE_FEATURE_LABEL_PADDING: 5,

	options: {
		LABEL_STYLE: 1, // 0: normal, 1: 'inline' feature labels
	},

	renderLabels: function(pieContainer) {
		var me = this;

		var labels = [];

		var renderedAnnotations = pieContainer.renderedAnnotations;
		var seqLen = pieContainer.model.get('sequence').length;

		for(var i=0;i<renderedAnnotations.length;i++) {
			var annotType = renderedAnnotations[i];
			this.drawLabels(pieContainer, labels, annotType);
		}

		this.adjustLabelPositions(pieContainer, labels);

	},

	adjustLabelPositions: function(pieContainer, labels) {
		var me = this;
		var offset = Math.PI/2;

		var pieCenter = pieContainer.center;
		var seqLen = pieContainer.model.get('sequence').length;
		
		labels.sort(this.labelSort.bind(this));
		// labels = d3.selectAll(labels);

		var rightTopLabels = [];
		var rightBottomLabels = [];
		var leftTopLabels = [];
		var leftBottomLabels = [];
		
		var totalLength = 2 * Math.PI;
		for(var i = 0; i < labels.length; i++) {
			var label = labels[i];
			
			// var labelCenter = label.center;
			// var labelCenter = (label.center + Math.PI/2) % (2 * Math.PI);
			// var labelCenter = (-label.center + offset + 16 * Math.PI) % (2 * Math.PI);
			var labelCenter = (label.center + 4*offset) % (2 * Math.PI);
			
			var angle = -label.center + offset;
			var x = Math.cos(angle);
			var y = Math.sin(angle);


			if(x > 0) {
				if(y > 0) {
					rightTopLabels.push(label);
				} else {
					rightBottomLabels.push(label);
				}
			} else {
				if(y > 0) {
					leftTopLabels.push(label);
				} else {
					leftBottomLabels.push(label);
				}
			}
		}
		
		var labelRadius = pieContainer.railRadius + this.LABEL_DISTANCE_FROM_RAIL;


		if(pieContainer.showOrfs) {
			console.error('TODO: adjust labelRadius');
		}
		if(pieContainer.showAlignments) {
			console.error('TODO: adjust labelRadius');
		}
		

		// Scale Right Top Labels
		var lastLabelYPosition = - 15; // -15 to count label height
		var numberOfRightTopLabels = rightTopLabels.length;

		for(var i = numberOfRightTopLabels - 1; i >= 0; i--) {
			var label = rightTopLabels[i];
			var d3Label = d3.select(label);
			
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");
			this.drawConnection(pieContainer, label, xPosition, yPosition);
			
		}

		// Scale Right Bottom Labels
		lastLabelYPosition = 0;
		var numberOfRightBottomLabels = rightBottomLabels.length;

		for(var j = 0; j < numberOfRightBottomLabels; j++) {
			var label = rightBottomLabels[j];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition > lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
			
		}

		// Scale Left Top Labels
		lastLabelYPosition = - 15; // -15 to count label totalHeight
		var numberOfLeftTopLabels = leftTopLabels.length;

		for(var k = 0; k < numberOfLeftTopLabels; k++) {
			var label = leftTopLabels[k];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
					   .style("text-anchor", "end");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
		
		}

		// Scale Left Bottom Labels
		lastLabelYPosition = 0;
		var numberOfLeftBottomLabels = leftBottomLabels.length;

		for(var l = numberOfLeftBottomLabels - 1; l >= 0; l--) {
			var label = leftBottomLabels[l];
			var d3Label = d3.select(label);

			// var angle = -label.center + offset;
			var angle = label.center - offset;

			var xPosition = Math.cos(angle) * labelRadius;
			var yPosition = Math.sin(angle) * labelRadius;

			if(yPosition > lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
					   .style("text-anchor", "end");

			this.drawConnection(pieContainer, label, xPosition, yPosition);
		
		}


		// debugger;

	},


	drawConnection: function(pieContainer, label, labelX, labelY) {
		var offset = Math.PI/2;

		var radius = label.radius;
		var angle = label.center;

		var x = radius * Math.cos(-angle + offset) + pieContainer.center.x;
		var y = -radius * Math.sin(-angle + offset) + pieContainer.center.y;


		var path = "M" + labelX + " " + labelY + "L" + x + " " + y;

		pieContainer.labelSVG.append("svg:path")
							.attr("stroke", this.LABEL_CONNECTION_COLOR)
							.attr("stroke-width", this.LABEL_CONNECTION_WIDTH)
							.attr("d", path);
	},


	drawLabels: function(pieContainer, labels, annotationType) {
		var annots = pieContainer.model.get(annotationType);
		
		// var labelDrawerFn = this.LabelDrawers[annotationType].bind(this);
		var labelDrawerFn = this.getLabelDrawerFn(annotationType);

		labelDrawerFn(pieContainer, labels, annots);

	},

	getLabelDrawerFn: function(annotationType) {
		var LABEL_STYLE = this.options.LABEL_STYLE;
		if(LABEL_STYLE === 0) { // normal
			return this.LabelDrawers[annotationType].bind(this);
		} else if(LABEL_STYLE === 1) { // draw 'inline' feature labels
			if(annotationType === 'features') {
				return this.LabelDrawers['features_1'].bind(this);
			} else {
				return this.LabelDrawers[annotationType].bind(this);
			}
		}

	},


	LabelDrawers: {

		'features': function(pieContainer, labels, annotations) {
			var seqLen = pieContainer.model.get('sequence').length;
			var annotLabels = pieContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: "#333234",
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i]);
				annotLabels[0][i].radius = VE.pie.FeatureRenderer.getFeatureRadius(pieContainer, i);
				labels.push(annotLabels[0][i]);
			}
			// labels.push(annotLabels);
		},

		'cutSites': function(pieContainer, labels, annotations) {
			var seqLen = pieContainer.model.get('sequence').length;
			var annotLabels = pieContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: function(annot) {
						return (annot.get('numCuts') == 1) ? "#E57676" : "#888888";
					},
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('restrictionEnzyme').get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i]);
				annotLabels[0][i].radius = pieContainer.railRadius + 10;
				labels.push(annotLabels[0][i]);
			}
			// labels.push(annotLabels);
		},
		



		'features_1': function(pieContainer, labels, annotations) {
			var PI = Math.PI;
			var PI_2 = 2 * PI;
			var MIN_INLINE_FEATURE_LABEL_PADDING = this.MIN_INLINE_FEATURE_LABEL_PADDING;
			var FeatureRenderer = VE.pie.FeatureRenderer;
			var RendererUtil = VE.RendererUtil;
			var cid = pieContainer.cid;
			var seqLen = pieContainer.model.get('sequence').length;

			function getLabelText(annot) {
				return annot.get('name').trim() || "";
			}

			function getPathId(radius) {
				return cid + '-feature-label-path-' + radius;
			}

			function createPathRadius(radius) {
				var d = [], largeArcFlag = 1, sweepFlag = 1, x, y, offset = Math.PI/2;
				d.push('M', '0', -radius);
				x = 0; y = radius;
				d.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);
				x = 0; y = -radius;
				d.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);
				d = d.join(' ');

				var path = pieContainer.labelSVG.append('svg:path')
					.attr('d', d)
					.attr('id', getPathId(radius))
					.style('display', 'none');
				return path;
			}

			var paths = {};

			function getPath(radius) {
				if(!paths[radius]) {
					return paths[radius] = createPathRadius(radius);
				}
				return paths[radius];
			}

			// var fontSize = FeatureRenderer.DEFAULT_FEATURE_HEIGHT - 2;
			// var fontSize = this.FONT_SIZE;
			var fontSize = 8;
			var charWidth = fontSize / 2;
			var ARC_THRESHOLD = FeatureRenderer.ARC_THRESHOLD;
			var floor = Math.floor;

			var textEl = pieContainer.labelSVG.append('svg:text')
				.attr('class', 'pie-feature-label');

			for(var i=0,ii=annotations.length;i<ii;i++) {
				var annot = annotations[i];
				var strand = annot.get('strand');
				var radius = FeatureRenderer.getFeatureRadius(pieContainer, i);
				var angles = RendererUtil.calculateAngles(annot, seqLen);

				var path = getPath(radius);
				var pathId = getPathId(radius);
				var labelText = getLabelText(annot);

				var textPath = textEl.append('svg:textPath')
					.attr('class', 'pie-feature-label')
					.attr('xlink:href', '#'+pathId)
					.style('font-size', fontSize);


				var startAngle = angles[0];
				var endAngle = angles[1];
				var centerAngle = (startAngle + endAngle) / 2;

				var annotLength = (endAngle - startAngle) * radius;

				textPath.attr('startOffset', (100 * centerAngle / PI_2) + '%')
					.style('text-anchor', 'middle');

				if(strand === -1) {
					centerAngle += ARC_THRESHOLD / radius;

				} else {
					centerAngle -= ARC_THRESHOLD / radius;
				}

				var effectiveAnnotLength = annotLength - 2 * MIN_INLINE_FEATURE_LABEL_PADDING;
				effectiveAnnotLength -= ARC_THRESHOLD;


				var textLength = labelText.length * charWidth;
				if(textLength > effectiveAnnotLength) {
					var maxChars = floor(effectiveAnnotLength / charWidth);
					if(maxChars > 3) {
						labelText = labelText.slice(0, maxChars - 3) + '...';
						textPath.text(labelText);
					}
				} else {
					textPath.text(labelText);
				}
			}


		},




	},
	


	calculateCenter: function(seqLen, label) {
		var annot = label.__data__;
		var angle1 = annot.get('start') * 2 * Math.PI / seqLen;
		var angle2 = annot.get('end') * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			angle2 += 2 * Math.PI;
		}
		return (angle1 + angle2) / 2;
		// return ((angle1 + angle2) / 2) % (2 * Math.PI);
	},

	labelSort: function(label1, label2) {
		// label1.center = this.calculateCenter(seqLen, label1);
		// label2.center = this.calculateCenter(seqLen, label2);
		if(label1.center > label2.center) {
			return 1;
		} else if(label1.center < label2.center) {
			return -1;
		} else  {
			return 0;
		}
	},




	







};

























































;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.CutSiteRenderer = {

	CUTSITE_LINE_WIDTH: 0.5,
	FRAME_COLOR: "#606060",


	drawCutsites: function(pieContainer) {
		var me = this;

		var cutSites = pieContainer.model.get('cutSites');
		var seqLen = pieContainer.model.get('sequence').length;
		
		pieContainer.cutSiteSVG.selectAll('path.undefined_class')
			.data(cutSites)
			.enter().append('svg:path')
			.attr("stroke", this.FRAME_COLOR)
			.attr("stroke-width", this.CUTSITE_LINE_WIDTH)
			.attr("d", function(annot, i) {
				var angle = annot.get('start') * 2 * Math.PI / seqLen;
				return "M" + (pieContainer.railRadius * Math.sin(angle)) + " " +
						(-pieContainer.railRadius * Math.cos(angle)) + " " + "L" +
						((pieContainer.railRadius + 10) * Math.sin(angle)) + " " +
						(-(pieContainer.railRadius + 10) * Math.cos(angle));
			});
			// .append("svg:title")
			// .text(this.getToolTip(site));



	},



};

































;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.OrfRenderer = {

	DISTANCE_FROM_RAIL: 15,
	DISTANCE_BETWEEN_ORFS: 5,
	ORF_FRAME_COLOR: ["#FF0000", "#31B440", "#3366CC"],


	drawOrfs: function(pieContainer) {
		var me = this;
		var offset = Math.PI/2;
		// var offset = -Math.PI/2;

		var orfs = pieContainer.model.get('orfs');
		var seqLen = pieContainer.model.get('sequence').length;

		var orfSvgs = pieContainer.orfSVG.selectAll('g.undefined_class')
			.data(orfs)
			.enter().append('svg:g')
			.attr('transform', function(annot, i) {
				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var rotateStr = me.createOrfRotationString(angles, pieContainer);
				return rotateStr;
			});


		orfSvgs.append('svg:path')
			.attr("fill", "none")
			.attr("stroke", function(annot) {
				return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
			})
			.attr('d', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var angle = angles[1] - angles[0];
				return me.getFeaturePathD(orfRadius, angle);
			});


		// Render start codons as bold dots.
		var startCodonSvgs = orfSvgs.selectAll('circle.undefined_class')
			.data(function(annot, i) {
				var a = annot.get('startCodons');
				var b = [];
				for(var j=0;j<a.length;j++) {
					b.push({
						bp: a[j],
						orfIndex: i,
					});
				}
				return b;
			})
			.enter().append('svg:circle')
			.attr("r", 2);

		startCodonSvgs.attr("cx", function(d, i) {
				var orfIndex = d.orfIndex;
				var bp = d.bp;
				var annot = orfs[orfIndex];
				var radius = me.getOrfRadius(pieContainer, orfIndex);
				var angle = VE.RendererUtil.calculateAngle(bp - annot.get('start'), seqLen);
				// console.log(d);
				return radius * Math.cos(-angle + offset);
			});

		startCodonSvgs.attr("cy", function(d, i) {
				var orfIndex = d.orfIndex;
				var bp = d.bp;
				var annot = orfs[orfIndex];
				var radius = me.getOrfRadius(pieContainer, orfIndex);
				var angle = VE.RendererUtil.calculateAngle(bp - annot.get('start'), seqLen);
				return -radius * Math.sin(-angle + offset);
			});

		startCodonSvgs.attr("fill", function(d, i) {
				var orfIndex = d.orfIndex;
				var annot = orfs[orfIndex];
				// return me.ORF_FRAME_COLOR[annot.get('frame')];
				return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
			});
		
		// // Render start codons as bold dots.
		// var startCodonSvgs = orfSvgs.selectAll('circle.undefined_class')
		// 	.data(function(annot, i) {
		// 		return annot.get('startCodons');
		// 	})
		// 	.enter().append('svg:circle')
		// 	.attr("r", 2);

		// var orfIndex = -1;
		// var lastI = 0;
		// startCodonSvgs.attr("cx", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		var radius = me.getOrfRadius(pieContainer, orfIndex);
		// 		var angle = VE.RendererUtil.calculateAngle(d - annot.get('start'), seqLen);
		// 		// console.log(d);
		// 		return radius * Math.cos(-angle + offset);
		// 	});

		// orfIndex = -1;
		// lastI = 0;
		// startCodonSvgs.attr("cy", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		var radius = me.getOrfRadius(pieContainer, orfIndex);
		// 		var angle = VE.RendererUtil.calculateAngle(d - annot.get('start'), seqLen);
		// 		return -radius * Math.sin(-angle + offset);
		// 	});

		// orfIndex = -1;
		// lastI = 0;
		// startCodonSvgs.attr("fill", function(d, i) {
		// 		if(i <= lastI) { orfIndex++; }
		// 		lastI = i;
		// 		var annot = orfs[orfIndex];
		// 		// return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 		return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
		// 	});








		// 12 x 9
		var baseArrowD = "M 0 4.5 L 12 0 L 0 -4.5 Z";
		var _arrowScale = 2/3;

		function createArrowD(orfRadius) {
			return "M 0 " + (_arrowScale*4.5-orfRadius) + " L "+(12*_arrowScale)+" " + (-orfRadius) + " L 0 " + (-_arrowScale*4.5-orfRadius) + " Z";
		}

		orfSvgs.append('svg:path')
			.attr("fill", function(annot) {
				return me.ORF_FRAME_COLOR[annot.get('frame')];
			})
			.attr('d', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				// var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				// var angle = angles[1] - angles[0];
				// return me.getFeaturePathD(orfRadius, angle);
				// return baseArrowD;
				return createArrowD(orfRadius);
			})
			.attr('transform', function(annot, i) {
				var alignIndex = pieContainer.orfsAlignMap[i];

				var orfRadius = pieContainer.railRadius + me.DISTANCE_FROM_RAIL + 
						pieContainer.getAlignmentOffset() + alignIndex * me.DISTANCE_BETWEEN_ORFS;

				if(annot.get('strand') === -1) {
					return 'rotate(180,0,'+(-orfRadius)+')';
				}
				var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
				var angle = angles[1] - angles[0];
				// var rotStr = me.createOrfRotationString([angles[1]], pieContainer);
				var rotStr = me.createOrfRotationString([angle], pieContainer);
				// var transString = 'translate(0, ' + (-orfRadius) + ')';
				// return rotStr + transString;
				return rotStr;
			})
			;

		// orfSvgs.append('svg:path')
		// 	.attr("stroke", function(annot) {
		// 		return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 	})
		// 	.attr("fill", function(annot) {
		// 		return me.ORF_FRAME_COLOR[annot.get('frame')];
		// 	})
		// 	.attr('d', function(annot, i) {
		// 		var alignIndex = pieContainer.orfsAlignMap[i];

		// 		var radius = me.getOrfRadius(pieContainer, i);

		// 		var angles = VE.RendererUtil.calculateAngles(annot, seqLen);
		// 		var angle = angles[1] - angles[0];
		// 		// return me.getFeaturePathD(orfRadius, angle);
		// 	})
		// 	;



	},


	getOrfRadius: function(pieContainer, i) {
		var alignIndex = pieContainer.orfsAlignMap[i];
		return pieContainer.railRadius + this.DISTANCE_FROM_RAIL + 
				pieContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS;
	},

	createOrfRotationString: function(angles, pieContainer) {
		var a = angles[0] * 180 / Math.PI;
		return 'rotate('+a+','+(0)+','+(0)+')';
	},


	getFeaturePathD: function(radius, angle) {
		var me = this;
		var offset = Math.PI/2;

		var arcLength = radius * angle;

		var largeArcFlag = (angle > Math.PI) ? 1 : 0;
		var sweepFlag = 1;

		var path = [];

		path.push('M', '0', -radius);
		var x = radius * Math.cos(-angle + offset);
		var y = -radius * Math.sin(-angle + offset);// - thickness/2;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		return path.join(' ');
	},











};




















































;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.SelectionLayerRenderer = {


	generatePathD: function(fromIndex, endIndex, radius, center, seqLen) {
		var path;
		if(seqLen == 0) {
			return;
		}

		var startAngle = fromIndex * 2 * Math.PI / seqLen;
		var endAngle = endIndex * 2 * Math.PI / seqLen;

		var startPoint = {};
		startPoint.x = center.x + radius * Math.sin(startAngle);
		startPoint.y = center.y - radius * Math.cos(startAngle);

		var endPoint = {};
		endPoint.x = center.x + radius * Math.sin(endAngle);
		endPoint.y = center.y - radius * Math.cos(endAngle);

		// Adjust endangle and startangle to be relative to startangle so we
		// can use the same logic as in GraphicUtils to determine SVG arc flags.

		var adjustedEnd = endAngle;
		if(endAngle > startAngle) {
			adjustedEnd -= startAngle;
		} else {
			adjustedEnd += 2 * Math.PI - startAngle;
		}

		var adjustedStart = 0;

		var sweepFlag = 0;
		if(adjustedEnd > adjustedStart) {
			sweepFlag = 1;
		}

		var largeArcFlag = 0;
		if(Math.abs(adjustedEnd - adjustedStart) > Math.PI) {
			largeArcFlag = 1;
		}

		path = "M" + center.x + " " + center.y + " " +
			   "L" + startPoint.x + " " + startPoint.y + " " + 
			   "A" + radius + " " + radius + " 0 " + largeArcFlag +
			   " " + sweepFlag + " " + endPoint.x + " " + endPoint.y +
			   "L" + center.x + " " + center.y;

		return path;
	},



};






















































;

if(typeof VE.pie !== 'object') {
	VE.pie = {};
}

VE.pie.AlignmentRenderer = {

	ALIGNMENT_HEIGHT: 4,
	DISTANCE_BETWEEN_ALIGNMENTS: 2,
	DISTANCE_FROM_RAIL: 5,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.0,//0.5,
	GAP_COLOR: "red",
	MATCH_COLOR: "green",
	MISMATCH_COLOR: "red",
	MISMATCH_HEIGHT: 6,


	drawAlignments: function(pieContainer) {
		var me = this;

		var seqLen = pieContainer.model.get('sequence').length;

		var alignments = pieContainer.model.get('alignments');
		
		for(var i=0;i<alignments.length;i++) {
			var alignment = alignments[i];

			// pieContainer.alignmentSVG.selectAll('path.undefined_class')
			// 	.data(alignment)	
			// 	.enter()
			// 	.append('svg:path')
			// 	.filter(function(d, j) {
			// 		return d.type !== 'queryGap';
			// 	})
			// 	.attr('d', function(align, j) {
			// 		var angles = me.calculateAngles(align, seqLen);
			// 		var angle = angles[1] - angles[0];

			// 		var radius = me.getAlignmentRadius(pieContainer, i);
					
			// 		return me.getAlignmentPathD(radius, me.ALIGNMENT_HEIGHT, angle);
			// 	});
			
			var radius = this.getAlignmentRadius(pieContainer, i);
			var angle = 2 * Math.PI - 0.0000001;
			var d = this.getAlignmentPathD(radius);
			var arcLength = radius * 2 * Math.PI;

			var match_stroke_dasharray = this.getStrokeDashArray(alignment, 'match', arcLength, seqLen);
			var mismatch_stroke_dasharray = this.getStrokeDashArray(alignment, 'mismatch', arcLength, seqLen);

			var mismatchPath = pieContainer.alignmentSVG.append('svg:path')
				.attr({
					d: d,
					'stroke-dasharray': mismatch_stroke_dasharray,
				})
				.style({
					fill: 'none',
					stroke: this.MISMATCH_COLOR,
					'stroke-width': this.MISMATCH_HEIGHT,
					// 'color-rendering': 'optimizeQuality',
					// 'shape-rendering': 'geometricPrecision',
				});

			var matchPath = pieContainer.alignmentSVG.append('svg:path')
				.attr({
					d: d,
					'stroke-dasharray': match_stroke_dasharray,
				})
				.style({
					fill: 'none',
					stroke: this.MATCH_COLOR,
					'stroke-width': this.ALIGNMENT_HEIGHT,
					// 'color-rendering': 'optimizeQuality',
					// 'shape-rendering': 'geometricPrecision',
				});

			
		}


	},

	/**
	 * `alignment` should be sorted.
	 */
	getStrokeDashArray: function(alignment, type, arcLength, seqLen) {
		var a = [];
		for(var i=0,ii=alignment.length;i<ii;i++) {
			var align = alignment[i];
			if(align.type === type) {
				var start = align.queryStart;
				var length = align.subjectSequence.length;

				a.push({
					start: start,
					end: start + length,
				});
			} 
		}

		var b = [0];
		var lastEnd = 0;
		var factor = arcLength / seqLen;
		
		for(var i=0,ii=a.length;i<ii;i++) {
			var c = a[i];
			var start = c.start;
			var end = c.end;
			var length = end - start;
			b.push((start - lastEnd) * factor);
			b.push((length) * factor);
			lastEnd = end;
		}

		return b.join(',');
	},	


	getAlignmentPathD: function(radius) {
		var path = []; 

		var largeArcFlag = 1;
		var sweepFlag = 1;
		var x, y;
		
		var offset = Math.PI/2;

		path.push('M', '0', -radius);

		x = 0;
		y = radius;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		x = 0;
		y = -radius;
		path.push('A', radius, radius, 0, largeArcFlag, sweepFlag, x, y);

		return path.join(' ');
	},

	getAlignmentRadius: function(pieContainer, index) {
		var r = pieContainer.railRadius + this.DISTANCE_FROM_RAIL;
		if(index) {
			r += index * (this.DISTANCE_BETWEEN_ALIGNMENTS + this.ALIGNMENT_HEIGHT);
		}
		return r;
	},

	calculateAngles: function(align, seqLen) {
		var angle1 = align.queryStart * 2 * Math.PI / seqLen;
		var angle2 = (align.queryStart + align.subjectSequence.length) * 2 * Math.PI / seqLen;
		if(angle1 > angle2) {
			return [angle1, angle2 + 2 * Math.PI];
		} else {
			return [angle1, angle2];
		}
	},

};












































;
(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }



VE.rail.FeatureRenderer = {

	DEFAULT_FEATURE_HEIGHT: 7,
	// DEFAULT_FEATURE_HEIGHT: 10,
	DEFAULT_FEATURES_GAP: 5,
	OUTLINE_COLOR: "black",
	OUTLINE_WIDTH: 0.5,


	drawFeatures: function(railContainer) {
		var me = this;

		var features = railContainer.model.get('features');
		var seqLen = railContainer.model.get('sequence').length;

		railContainer.featureSVG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			.attr("class", 'rail-feature')
			.attr('d', function(feat, i) {
				// if(feat.get('start') > feat.get('end')) console.log(this);
				return me.getFeaturePathD(railContainer, feat, i);
			})
			.attr('fill', function(feat, i) {
				return me.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.OUTLINE_COLOR)
			.attr("stroke-width", this.OUTLINE_WIDTH)
			.attr("fill-rule", "evenodd")
			// .attr('transform', function(feat, i) {
			// 	var strand = feat.get('strand');
			// 	var angles = me.calculateAngles(feat, seqLen);
			// 	var rotateStr = me.createFeatureRotationString(angles, strand, railContainer);
			// 	var translateStr = 'translate('+(railContainer.center.x)+','+(railContainer.center.y)+')';
			// 	return rotateStr + translateStr;
			// })
			// .on('contextmenu', this.onFeatureContextMenu.bind(this))
			// .on('mouseover', function(feat, i) {
			// 	this.mouseon = true;
			// 	d3.select(this).attr('fill', d3.rgb(me.colorByType(feat.get('type').toLowerCase())).darker(1).toString());
			// })
			// .on('mouseout', function(feat, i) {
			// 	this.mouseon = false;
			// 	d3.select(this).attr('fill', me.colorByType(feat.get('type').toLowerCase()));
			// })
			;


	},




	getFeaturePathD: function(railContainer, feat, i) {
		var seqLen = railContainer.model.get('sequence').length;
		var railWidth = railContainer.railWidth;

		var start = feat.get('start');
		var end = feat.get('end');
		var strand = feat.get('strand');


		var offset = this.getFeatureOffset(railContainer, i);

		var path;

		if(start <= end) {

			var startPos = start / seqLen * railWidth;
			var endPos = end / seqLen * railWidth;

			var xPos = startPos;
			var yPos = offset;
			var height = this.DEFAULT_FEATURE_HEIGHT;
			var width = endPos - startPos;

			if(strand === 1) {
				path = this.drawFeaturePositiveArrow(xPos, yPos, width, height);
			} else {
				path = this.drawFeatureNegativeArrow(xPos, yPos, width, height);
			}

		} else {
			// throw new Error('TODO');

			var startPos = start / seqLen * railWidth;
			var endPos = end / seqLen * railWidth;

			var height = this.DEFAULT_FEATURE_HEIGHT;
			var yPos = offset;

			var path0, path1;
			if(strand === 1) {
				path0 = this.drawFeatureForwardArrow(0, yPos, endPos, height);
				path1 = this.drawFeatureForwardRect(startPos, yPos, railWidth - startPos, height);
				
			} else {
				path0 = this.drawFeatureBackwardRect(0, yPos, endPos, height);
				path1 = this.drawFeatureBackwardArrow(startPos, yPos, railWidth - startPos, height);

			}

			path = path0 + ' ' + path1;

		}

		return path;
	},


	drawFeaturePositiveArrow: function(xPos, yPos, width, height) {
		var sprite;
		var path;

		if (width>4) {
			path =  "M" + xPos + " " + yPos +
					"L" + (xPos+(width-4)) + " " + yPos +
					"L" + (xPos+width) + " " + (yPos+((height)/2)) +
					"L" + (xPos+(width-4)) + " " + (yPos+height) +
					"L" + xPos + " " + (yPos+height) +
					"L" + xPos + " " + yPos + " ";
		} else {
			path = "M" + xPos + " " + yPos +
				   "L" + (xPos+width) + " " + (yPos + ((height)/2)) +
				   "L" + xPos + " " + (yPos+height) +
				   "L" + xPos + " " + yPos + " ";
		}

		return path;
	},

	drawFeatureNegativeArrow: function(xPos, yPos, width, height) {
		var sprite;
		var path;
		var returnSTring = returnSTring || false;

		if (width>4) {
			path =  "M" + xPos + " " +  (yPos+((height)/2)) +
			"L" + (xPos+4) + " " + yPos +
			"L" + (xPos+(width)) + " " + yPos +
			"L" + (xPos+(width)) + " " + (yPos+height) +
			"L" + (xPos+4) + " " + (yPos+height) +
			"L" + xPos + " " + (yPos+((height)/2)) + " ";
		} else {
			path =  "M" + xPos + " " +  (yPos+((height)/2)) +
			"L" + (xPos+width) + " " + yPos +
			"L" + (xPos+width) + " " + (yPos+height) +
			"L" + xPos + " " + (yPos+((height)/2)) + " ";
		}

		return path;
	},

	drawFeatureForwardRect: function(pX, pY, pWidth, pHeight) {
		return  " M " + (pX) + " " + (pY) +
				" L " + (pX) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY + pHeight) +
				" S " + (pX + pWidth + 4) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY) +
				" L " + (pX) + " " + (pY);
	},

	drawFeatureForwardArrow: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX) + " " + (pY) +
				" L " + (pX + pWidth - 8) + " " + (pY) +
				" L " + (pX + pWidth) + " " + (pY + pHeight / 2) +
				" L " + (pX + pWidth - 8) + " " + (pY + pHeight) +
				" L " + (pX) + " " + (pY + pHeight) +
				" S " + (pX + 4) + " " + (pY + pHeight / 2) + " " + (pX) + " " + pY;
	},

	drawFeatureBackwardRect: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX) + " " + (pY) +
				" S " + (pX - 4) + " " + (pY + pHeight / 2) + " " + (pX) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY + pHeight) +
				" L " + (pX + pWidth) + " " + (pY) +
				" L " + (pX) + " " + (pY);
	},

	drawFeatureBackwardArrow: function(pX, pY, pWidth, pHeight){
		return  " M " + (pX + 8) + " " + (pY) +
				" L " + (pX + pWidth) + " " + (pY) +
				" S " + (pX + pWidth - 4) + " " + (pY + pHeight / 2) + " " + (pX + pWidth) + " " + (pY + pHeight) +
				" L " + (pX + 8) + " " + (pY + pHeight) +
				" L " + (pX) + " " + (pY + pHeight / 2) +
				" L " + (pX + 8) + " " + (pY);
		
	},



	colorByType: function(type) {
		var switchObj = {
			promoter: "#31B440",
			terminator: "#F51600",
			cds: "#EF6500",
			m_rna: "#FFFF00",
			misc_binding: "#006FEF",
			misc_feature: "#006FEF",
			misc_marker: "#8DCEB1",
			rep_origin: "#878787"
		};

		var color = switchObj[type] || "#CCCCCC";
		return color;
	},

	getFeatureOffset: function(railContainer, featureIndex) {
		var alignIndex = railContainer.featAlignMap[featureIndex];
		return this.getOffsetFromRail(alignIndex);
	},

	getOffsetFromRail: function(alignIndex) {
		return 3 * this.DEFAULT_FEATURES_GAP
				+ alignIndex * (this.DEFAULT_FEATURE_HEIGHT + this.DEFAULT_FEATURES_GAP);
	},



};
















































})();;
(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.OrfRenderer = {

	DISTANCE_FROM_RAIL: 15,
	DISTANCE_BETWEEN_ORFS: 5,
	ORF_FRAME_COLOR: ["#FF0000", "#31B440", "#3366CC"],

	
	drawOrfs: function(railContainer) {
		var me = this;

		function getOrfColor(annot) {
			return me.ORF_FRAME_COLOR[Math.abs(annot.get('frame'))];
		};

		var orfs = railContainer.model.get('orfs');
		var seqLen = railContainer.model.get('sequence').length;

		var railWidth = railContainer.railWidth;


		var orfLines = railContainer.orfSVG.selectAll('path.undefined_class')
			.data(orfs)
			.enter().append('svg:path')
			.attr('stroke', getOrfColor)
			.attr("fill", "none")
			.attr('d', function(orf, i) {
				var start = orf.get('start');
				var end = orf.get('end');
				
				var path;
				if(start <= end) {
					
					var startPos = start / seqLen * railWidth;
					var endPos = end / seqLen * railWidth;

					var y = me.getOrfOffset(railContainer, i);

					path = 'M' + startPos + ' ' + y + ' ' +
							'L' + endPos + ' ' + y;

				} else {
					throw new Error('TODO');
				}

				return path;
			});

		var startCodonData = [];
		for(var i=0,ii=orfs.length;i<ii;i++) {
			var orf = orfs[i];
			var a = orf.get('startCodons');
			for(var j=0;j<a.length;j++) {
				startCodonData.push({
					bp: a[j],
					orfIndex: i,
				});
			}
		}

		var startCodons = railContainer.orfSVG.selectAll('circle.undefined_class')
			.data(startCodonData)
			.enter().append('svg:circle')
			.attr('fill', function(d, i) {
				return getOrfColor(orfs[d.orfIndex]);
			})
			.attr('cx', function(d, i) {
				return d.bp / seqLen * railWidth;
			})
			.attr('cy', function(d, i) {
				return me.getOrfOffset(railContainer, d.orfIndex);
			})
			.attr("r", 2);



		var baseArrowD = "M 0 4.5 L 12 0 L 0 -4.5 Z";
		var _arrowScale = 2/3;

		function createArrowD(orfRadius) {
			return "M 0 " + (_arrowScale*4.5-orfRadius) +
					" L "+(12*_arrowScale)+" " + (-orfRadius) +
					" L 0 " + (-_arrowScale*4.5-orfRadius) + " Z";
		}

		railContainer.orfSVG.selectAll('path.undefined_class')
			.data(orfs)
			.enter().append('svg:path')
			.attr("fill", getOrfColor)
			.attr('d', function(orf, i) {
				var strand = orf.get('strand');
				var start = orf.get('start');
				var end = orf.get('end');

				var startPos = start / seqLen * railWidth;
				var endPos = end / seqLen * railWidth;
				var orfOffset = me.getOrfOffset(railContainer, i);

				var path;
				if(strand === 1) {
					path = 'M' + (endPos) + ' ' + (_arrowScale*4.5 + orfOffset) +
							'L' + (12*_arrowScale + endPos) + ' ' + (orfOffset) +
							'L' + (endPos) + ' ' + (-_arrowScale*4.5 + orfOffset) + 'Z';
				} else {
					path = 'M' + (startPos) + ' ' + (_arrowScale*4.5 + orfOffset) +
							'L' + (-12*_arrowScale + startPos) + ' ' + (orfOffset) +
							'L' + (startPos) + ' ' + (-_arrowScale*4.5 + orfOffset) + 'Z';
				}

				return path;
			});



	},


	getOrfOffset: function(railContainer, i) {
		var alignIndex = railContainer.orfsAlignMap[i];
		return - (this.DISTANCE_FROM_RAIL + 
					railContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS);
		// var alignIndex = railContainer.orfsAlignMap[i];
		// return railContainer.railRadius + this.DISTANCE_FROM_RAIL + 
		// 		railContainer.getAlignmentOffset() + alignIndex * this.DISTANCE_BETWEEN_ORFS;
	},






};














































































})();;
(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.CutSiteRenderer = {

	FRAME_COLOR: "#606060",
	CUTSITE_LINE_WIDTH: 0.5,

	drawCutsites: function(railContainer) {
		var me = this;

		var cutSites = railContainer.model.get('cutSites');
		var seqLen = railContainer.model.get('sequence').length;
		var railWidth = railContainer.railWidth;

		railContainer.cutSiteSVG.selectAll('path.undefined_class')
			.data(cutSites)
			.enter().append('svg:path')
			.attr("stroke", this.FRAME_COLOR)
			.attr("stroke-width", this.CUTSITE_LINE_WIDTH)
			.attr("d", function(annot, i) {
				var start = annot.get('start');
				var startPos = start / seqLen * railWidth;

				// var y = -railContainer.FRAME_RECT_HEIGHT;
				var y = 0;
				
				var path = 'M' + startPos + ' ' + y + ' ' +
						'L' + startPos + ' ' + (y - 8);
				return path;
			});
			// .append("svg:title")
			// .text(this.getToolTip(site));



	},



};














































































})();;
(function(){

if(typeof VE.rail !== 'object') { VE.rail = {}; }




VE.rail.LabelRenderer = {
	
	FONT_FAMILY: "Maven Pro",
	FONT_SIZE: "8px",

	LABEL_DISTANCE_FROM_RAIL: 3,
	LABEL_HEIGHT: 7,
	LABEL_CONNECTION_WIDTH: 0.5,
	LABEL_CONNECTION_COLOR: "#d2d2d2",



	renderLabels: function(railContainer) {
		var me = this;

		var labels = [];

		var renderedAnnotations = railContainer.renderedAnnotations;
		var seqLen = railContainer.model.length();

		for(var i=0;i<renderedAnnotations.length;i++) {
			var annotType = renderedAnnotations[i];
			this.drawLabels(railContainer, labels, annotType);
		}

		this.adjustLabelPositions(railContainer, labels);

	},

	adjustLabelPositions: function(railContainer, labels) {
		var me = this;

		var seqLen = railContainer.model.length();
		
		labels.sort(this.labelSort.bind(this));

		var rightLabels = [];
		var leftLabels = [];

		var totalNumberOfLabels = labels.length;
		for(var i = 0; i < totalNumberOfLabels; i++) {
			var label = labels[i];
			if(i < (totalNumberOfLabels/2)) {
				leftLabels.push(label);
			} else {
				rightLabels.push(label);
			}
		}

		var lastLabelYPosition = - 10; // -10 to count label height

		for(var i=0,ii=leftLabels.length;i<ii;i++) {
			var label = leftLabels[i];
			var d3Label = d3.select(label);

			var xPosition = label.center;
			var yPosition = this.LABEL_HEIGHT;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition - this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "end");

			this.drawConnection(railContainer, label, xPosition, yPosition);
		}

		for(var i=0,ii=rightLabels.length;i<ii;i++) {
			var label = rightLabels[i];
			var d3Label = d3.select(label);

			var xPosition = label.center;
			var yPosition = this.LABEL_HEIGHT;

			if(yPosition < lastLabelYPosition) {
				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			} else {
				yPosition = lastLabelYPosition;

				lastLabelYPosition = yPosition + this.LABEL_HEIGHT;
			}

			d3Label.attr("transform", "translate(" + (xPosition) + "," + (yPosition) + ")")
				.style("text-anchor", "start");

			this.drawConnection(railContainer, label, xPosition, yPosition);
		}

	},


	drawConnection: function(railContainer, label, labelX, labelY) {
		var offset = Math.PI/2;

		var radius = label.radius;
		var center = label.center;

		var x = center;
		var y = radius;

		var path = "M" + labelX + " " + labelY + "L" + x + " " + y;

		railContainer.labelSVG.append("svg:path")
							.attr("stroke", this.LABEL_CONNECTION_COLOR)
							.attr("stroke-width", this.LABEL_CONNECTION_WIDTH)
							.attr("d", path);
	},


	drawLabels: function(railContainer, labels, annotationType) {
		var annots = railContainer.model.get(annotationType);
		
		// var labelDrawerFn = this.LabelDrawers[annotationType].bind(this);
		var labelDrawerFn = this.getLabelDrawerFn(annotationType);

		labelDrawerFn(railContainer, labels, annots);

	},

	getLabelDrawerFn: function(annotationType) {
		return this.LabelDrawers[annotationType].bind(this);
	},


	LabelDrawers: {

		'features': function(railContainer, labels, annotations) {
			var seqLen = railContainer.model.length();
			var railWidth = railContainer.railWidth;
			var annotLabels = railContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: "#333234",
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i], railWidth);
				annotLabels[0][i].radius = VE.rail.FeatureRenderer.getFeatureOffset(railContainer, i);
				labels.push(annotLabels[0][i]);
			}
		},

		'cutSites': function(railContainer, labels, annotations) {
			var seqLen = railContainer.model.get('sequence').length;
			var seqLen = railContainer.model.length();
			var railWidth = railContainer.railWidth;
			var annotLabels = railContainer.labelSVG.selectAll('text.undefined_class')
				.data(annotations)
				.enter().append('svg:text')
				.attr({
					fill: function(annot) {
						return (annot.get('numCuts') == 1) ? "#E57676" : "#888888";
					},
					'font-family': this.FONT_FAMILY,
					'font-size': this.FONT_SIZE,
				})
				.text(function(annot) {
					return annot.get('restrictionEnzyme').get('name').trim() || "";
				});

			for(var i=0;i<annotLabels[0].length;i++) {
				annotLabels[0][i].center = this.calculateCenter(seqLen, annotLabels[0][i], railWidth);
				// annotLabels[0][i].radius = railContainer.railRadius + 10;
				annotLabels[0][i].radius = 0;
				labels.push(annotLabels[0][i]);
			}
		},

	},
	


	labelSort: function(label1, label2) {
		// label1.center = this.calculateCenter(seqLen, label1);
		// label2.center = this.calculateCenter(seqLen, label2);
		if(label1.center > label2.center) {
			return 1;
		} else if(label1.center < label2.center) {
			return -1;
		} else  {
			return 0;
		}
	},

	calculateCenter: function(seqLen, label, railWidth) {
		var annot = label.__data__;
		var startPos = annot.get('start') / seqLen * railWidth;
		var endPos = annot.get('end') / seqLen * railWidth;
		return startPos;
	},





};














































































})();;
(function(){
if(typeof VE.pie3d !== 'object') { VE.pie3d = {}; }



var PI = Math.PI;

var __id__ = 0;


// Setup CSSMatrix
window.CSSMatrix = window.CSSMatrix || window.WebKitCSSMatrix;

window.CSSMatrix.prototype.multiplyVec4 = function(x, y, z, w) {
	if(Array.isArray(x)) {
		y = x[1]; z = x[2]; w = x[3]; x = x[0];
	}
	var x2 = x * this.m11 + y * this.m12 + z * this.m13 + w * this.m14;
	var y2 = x * this.m21 + y * this.m22 + z * this.m23 + w * this.m24;
	var z2 = x * this.m31 + y * this.m32 + z * this.m33 + w * this.m34;
	var w2 = x * this.m41 + y * this.m42 + z * this.m43 + w * this.m44;
	return [x2, y2, z2, w2];
};



function cylindricalToCartesian(r, theta, z) {
	var x = r * Math.cos(theta);
	var y = r * Math.sin(theta);
	return [x, y, z, 1];
}

function perspectiveDivide(p) {
	var w = p[3];
	p[0] = p[0] / w;
	p[1] = p[1] / w;
	p[2] = p[2] / w;
	p[3] = p[3] / w;
}

// Returns an equivalent angle angle in the range [0, 2*PI).
function normalizeAngle(radians) {
	return ((radians % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
}




var Pie3dRenderer = VE.pie3d.Pie3dRenderer = function(pieContainer) {

	this.theta = 0;
	this.phi = 0;

	this.isLeftMouseDown = false;
	this.lastPageX = 0;
	this.lastPageY = 0;

	this.pieContainer = pieContainer;



	pieContainer.undelegateEvents(); // may be temporary for testing

	pieContainer.pieSVG.remove();

	// this.svg = pieContainer.pieSVG
	this.svg = d3.select(pieContainer.el).append('svg:svg')
		.on({
			mousedown: this.onMousedown.bind(this),
			mousemove: this.onMousemove.bind(this),
			mouseup: this.onMouseup.bind(this),
			mousewheel: this.onMousewheel.bind(this),
		});

	this.g = this.svg.append('svg:g')
		.attr('class', 'pie-3d-parent');

	// this.featuresG = this.g.append('svg:g');

	this.setUpDefs();

};



Pie3dRenderer.prototype = {
	

	FRAME_THICKNESS: 3,
	FRAME_OUTLINE_WIDTH: 0.5,
	FRAME_OUTLINE_COLOR: "#8F8F8F",
	FRAME_RING_COLOR: "#ffffb3", // The color of the area between the two circles.

	FEATURE_DEFAULT_FEATURE_HEIGHT: 7,
	FEATURE_DEFAULT_FEATURES_GAP: 3,
	FEATURE_OUTLINE_COLOR: "black",
	FEATURE_OUTLINE_WIDTH: 0.5,


	clear: function() {
		this.svg.selectAll('*:not(.pie-3d-parent):not(.__const)').remove();
		this.g.selectAll('*').remove();
		// this.g = this.svg.append('svg:g');
	},

	render: function() {
		this.clear();


		this.backLayer = this.g.append('svg:g');
		this.frontLayer = this.g.append('svg:g');
		


		this.drawFrame();
		this.drawFeatures();

	},


	setUpDefs: function() {

		var defs = this.defs = this.svg.append('svg:defs')
			.attr('class', '__const');


	},




	drawFrame: function() {
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var FRAME_THICKNESS = this.FRAME_THICKNESS;
		var phi = this.phi;
		// var g = this.g;
		var g1 = this.getLayer(PI/2);
		var g2 = this.getLayer(3*PI/2);

		var d = [];

		var x = -railRadius;
		var y = - FRAME_THICKNESS / 2;

		d.push('M', x, y);

		var rx = railRadius;
		var ry = railRadius * Math.sin(phi);
		var sweepFlag = (phi > 0) ? 1 : 0;
		var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;

		x += 2 * railRadius;
		d.push('A', rx, ry, 0, 0, sweepFlag, x, y);

		y += FRAME_THICKNESS;
		d.push('L', x, y);

		x -= 2 * railRadius;
		d.push('A', rx, ry, 0, 0, antiSweepFlag, x, y);

		y -= FRAME_THICKNESS;
		d.push('L', x, y);

		d.push('Z');

		d = d.join(' ');

		g1.append('svg:path')
			.attr({
				d: d,
			})
			.style({
				fill: this.FRAME_RING_COLOR,
				stroke: this.FRAME_OUTLINE_COLOR,
				'stroke-width': this.FRAME_OUTLINE_WIDTH,
			});



		d = [];

		x = -railRadius;
		y = - FRAME_THICKNESS / 2;
		d.push('M', x, y);

		x += 2 * railRadius;
		d.push('A', rx, ry, 0, 0, antiSweepFlag, x, y);

		y += FRAME_THICKNESS;
		d.push('L', x, y);

		x -= 2 * railRadius;
		d.push('A', rx, ry, 0, 0, sweepFlag, x, y);

		y -= FRAME_THICKNESS;
		d.push('L', x, y);

		d.push('Z');

		d = d.join(' ');

		g2.append('svg:path')
			.attr({
				d: d,
			})
			.style({
				fill: this.FRAME_RING_COLOR,
				stroke: this.FRAME_OUTLINE_COLOR,
				'stroke-width': this.FRAME_OUTLINE_WIDTH,
			});

	},



	_drawFeatures: function() {
		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.length();


		this.featuresG = this.g.append('svg:g');

		this.featuresG.selectAll('path.undefined_class')
			.data(features)
			.enter().append('svg:path')
			// .attr("class", 'pie-feature')
			.attr('d', function(feat, i) {
				return me._generateSimpleFeaturePathD(feat, i);
			})
			.attr('fill', function(feat, i) {
				return VE.pie.FeatureRenderer.colorByType(feat.get('type').toLowerCase());
			})
			.attr("stroke", this.FEATURE_OUTLINE_COLOR)
			.attr("stroke-width", this.FEATURE_OUTLINE_WIDTH)
			;


		this.sortByZ();
	},


	_generateSimpleFeaturePathD: function(feat, i) {
		
		

		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var seqLen = pieContainer.model.length();

		var strand = feat.get('strand');

		var angles = VE.RendererUtil.calculateAngles(feat, seqLen);
		var alignIndex = pieContainer.featAlignMap[i];
		var offset =  - this.getOffsetFromRail(alignIndex);


		// Model-View-Projection Matrix
		var M = new CSSMatrix();
		M = M.rotateAxisAngle(1, 0, 0, phi * 180 / Math.PI + 90);

		var r = railRadius;

		// var theta0 = angles[0];
		// var theta1 = angles[1];
		var theta0 = angles[0] + this.theta;
		var theta1 = angles[1] + this.theta;

		var z0 = offset;
		var z1 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT;


		var p0 = cylindricalToCartesian(r, theta0, z0);
		var p1 = cylindricalToCartesian(r, theta1, z0);
		var p2 = cylindricalToCartesian(r, theta1, z1);
		var p3 = cylindricalToCartesian(r, theta0, z1);

		p0 = M.multiplyVec4(p0);
		p1 = M.multiplyVec4(p1);
		p2 = M.multiplyVec4(p2);
		p3 = M.multiplyVec4(p3);



		perspectiveDivide(p0);
		perspectiveDivide(p1);
		perspectiveDivide(p2);
		perspectiveDivide(p3);




		// tem
		var z2 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT / 2;
		var theta2 = theta1 + 5 / r;
		var p4 = cylindricalToCartesian(r, theta2, z2);
		p4 = M.multiplyVec4(p4);
		perspectiveDivide(p4);





		var rx = r;
		var ry = r * Math.sin(phi);

		var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
		var sweepFlag = (_phi > Math.PI) ? 0 : 1;
		var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


		// var d = [];
		// d.push('M', p0[0], p0[1]);
		// d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);
		// d.push('L', p2[0], p2[1]);
		// d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
		// d.push('L', p0[0], p0[1]);
		// d.push('Z');
		// d = d.join(' ');


		var d = [];
		d.push('M', p0[0], p0[1]);
		d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);

		d.push('L', p4[0], p4[1]);

		d.push('L', p2[0], p2[1]);


		d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
		d.push('L', p0[0], p0[1]);
		d.push('Z');
		d = d.join(' ');


		// console.log(d);

		feat.centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;
		// feat.centerZ = ((theta0 + theta1) / 2 < Math.PI && _phi > Math.PI) ? 1 : -1;

		return d;
	},





	drawFeatures: function() {
		
		var centerZ;


		function createD(M, r, theta0, theta1, z0, z1) {
			var p0 = cylindricalToCartesian(r, theta0, z0);
			var p1 = cylindricalToCartesian(r, theta1, z0);
			var p2 = cylindricalToCartesian(r, theta1, z1);
			var p3 = cylindricalToCartesian(r, theta0, z1);

			p0 = M.multiplyVec4(p0);
			p1 = M.multiplyVec4(p1);
			p2 = M.multiplyVec4(p2);
			p3 = M.multiplyVec4(p3);


			perspectiveDivide(p0);
			perspectiveDivide(p1);
			perspectiveDivide(p2);
			perspectiveDivide(p3);

			var rx = r;
			var ry = r * Math.sin(phi);

			var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
			var sweepFlag = (_phi > Math.PI) ? 0 : 1;
			var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


			var d = [];
			d.push('M', p0[0], p0[1]);
			d.push('A', rx, ry, 0, 0, antiSweepFlag, p1[0], p1[1]);
			d.push('L', p2[0], p2[1]);
			d.push('A', rx, ry, 0, 0, sweepFlag, p3[0], p3[1]);
			d.push('L', p0[0], p0[1]);
			d.push('Z');
			d = d.join(' ');

			centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;

			return d;
		}

		function createD2(M, r0, r1, theta0, theta1, z0, z1) {
			var p0 = cylindricalToCartesian(r0, theta0, z0);
			var p1 = cylindricalToCartesian(r0, theta1, z0);
			var p2 = cylindricalToCartesian(r1, theta1, z1);
			var p3 = cylindricalToCartesian(r1, theta0, z1);

			p0 = M.multiplyVec4(p0);
			p1 = M.multiplyVec4(p1);
			p2 = M.multiplyVec4(p2);
			p3 = M.multiplyVec4(p3);


			perspectiveDivide(p0);
			perspectiveDivide(p1);
			perspectiveDivide(p2);
			perspectiveDivide(p3);

			var rx0 = r0;
			var ry0 = r0 * Math.sin(phi);
			var rx1 = r1;
			var ry1 = r1 * Math.sin(phi);

			var _phi = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
			var sweepFlag = (_phi > Math.PI) ? 0 : 1;
			var antiSweepFlag = (sweepFlag === 1) ? 0 : 1;


			var d = [];
			d.push('M', p0[0], p0[1]);
			d.push('A', rx0, ry0, 0, 0, antiSweepFlag, p1[0], p1[1]);
			d.push('L', p2[0], p2[1]);
			d.push('A', rx1, ry1, 0, 0, sweepFlag, p3[0], p3[1]);
			d.push('L', p0[0], p0[1]);
			d.push('Z');
			d = d.join(' ');

			centerZ = (p0[2] + p1[2] + p2[2] + p3[2]) / 4;

			return d;
		}

		function createColor(baseColor, angle) {
			var a = Math.sin(angle);
			var color = d3.rgb(baseColor).brighter(a).toString();
			return color;
		}


		var me = this;
		var pieContainer = this.pieContainer;
		var railRadius = pieContainer.railRadius;

		var phi = this.phi;

		var nPhi = normalizeAngle(phi);

		var features = pieContainer.model.get('features');
		var seqLen = pieContainer.model.length();


		// this.featuresG = this.g.append('svg:g');

		// var frontG = this.featuresG.append('svg:g');
		// var backG = this.featuresG.append('svg:g');


		// Model-View-Projection Matrix
		var M = new CSSMatrix();
		M = M.rotateAxisAngle(1, 0, 0, phi * 180 / Math.PI + 90);

		var r = railRadius;

		var featAlignMap = pieContainer.featAlignMap;

		for(var i=0,ii=features.length;i<ii;i++) {
			var feat = features[i];

			var color = VE.pie.FeatureRenderer.colorByType(feat.get('type').toLowerCase());
			var d = this._generateSimpleFeaturePathD(feat, i);

			var strand = feat.get('strand');

			var angles = VE.RendererUtil.calculateAngles(feat, seqLen);
			var alignIndex = featAlignMap[i];
			var offset =  - this.getOffsetFromRail(alignIndex);

			// var z0 = offset;
			// var z1 = offset - this.FEATURE_DEFAULT_FEATURE_HEIGHT;




			var cPhi = Math.cos(phi);
			var sPhi = Math.sin(phi);

			var fhZ = cPhi * this.FEATURE_DEFAULT_FEATURE_HEIGHT;
			var fhR = sPhi * this.FEATURE_DEFAULT_FEATURE_HEIGHT;

			var oZ = cPhi * offset;
			var oR = sPhi * offset;

			var r0 = r - oR - fhR;
			var r1 = r - oR;


			var z0 = oZ;
			var z1 = oZ - fhZ;



			
			var theta0 = angles[0] + this.theta;
			var theta1 = angles[1] + this.theta;


			var nTheta0 = normalizeAngle(theta0);
			var nTheta1 = normalizeAngle(theta1);


			if(nTheta0 < Math.PI && nTheta1 > Math.PI) { // Feature overlaps itself on the left side of the pie.
				
				// var d0 = createD(M, r, theta0, Math.PI, z0, z1);
				// var d1 = createD(M, r, Math.PI, theta1, z0, z1);
				var d0 = createD2(M, r0, r1, theta0, Math.PI, z0, z1);
				var d1 = createD2(M, r0, r1, Math.PI, theta1, z0, z1);

				var g1 = this.getLayer(theta0);
				var g2 = this.getLayer(theta1);

				g1.append('svg:path')
					.attr({
						d: d0,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

				g2.append('svg:path')
					.attr({
						d: d1,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});


			} else if(nTheta0 > nTheta1) { // Feature overlaps itself on the right side of the pie.

				// var d0 = createD(M, r, theta0, 2 * Math.PI, z0, z1);
				// var d1 = createD(M, r, 0, theta1, z0, z1);

				var d0 = createD2(M, r0, r1, theta0, 2 * Math.PI, z0, z1);
				var d1 = createD2(M, r0, r1, 0, theta1, z0, z1);

				var g1 = this.getLayer(theta0);
				var g2 = this.getLayer(theta1);

				g1.append('svg:path')
					.attr({
						d: d0,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

				g2.append('svg:path')
					.attr({
						d: d1,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

			} else {
				
				// var d = createD(M, r, theta0, theta1, z0, z1);


				var d = createD2(M, r0, r1, theta0, theta1, z0, z1);

				// var d = createD2(M, r0, r0, theta0, theta1, z0, z1);




				var g = this.getLayer(theta0);

				g.append('svg:path')
					.attr({
						d: d,
					})
					.style({
						fill: color,
						// stroke: 'none',
						stroke: this.FEATURE_OUTLINE_COLOR,
						'stroke-width': this.FEATURE_OUTLINE_WIDTH,
						'vector-effect': 'non-scaling-stroke',
					});

			}


		}



		// this.sortByZ();
	},


	getLayer: function(theta) {
		var nPhi = normalizeAngle(this.phi);
		var nTheta = normalizeAngle(theta);
		if(nPhi < PI / 2 || nPhi > 3 * PI / 2) {
			if(nTheta > Math.PI) {
				return this.backLayer;
			} else {
				return this.frontLayer;
			}
		} else {
			if(nTheta > Math.PI) {
				return this.frontLayer;
			} else {
				return this.backLayer;
			}
		}
	},



	sortByZ: function() {
		
		var itemsToSort = this.featuresG.selectAll('path');
		// console.log(itemsToSort);

		itemsToSort.sort(function(a, b) {
			//var _a = modelingTransformation.multiplyVector3Array(a.slice(0));
			//var _b = modelingTransformation.multiplyVector3Array(b.slice(0));
			var _a = a.centerZ;
			var _b = b.centerZ;
			// Quick test. Only tests one average of corners.
			// var az = _a[2];
			// var bz = _b[2];
			var az = _a;
			var bz = _b;

			return bz-az;
		});
		
		//console.timeEnd('A');
		
	},




	getOffsetFromRail: function(alignIndex) {
		return 3 * this.FEATURE_DEFAULT_FEATURES_GAP
				+ alignIndex * (this.FEATURE_DEFAULT_FEATURE_HEIGHT + this.FEATURE_DEFAULT_FEATURES_GAP);
	},




	onMousedown: function() {
		var evt = d3.event;
		var btn = evt.button;
		if(btn === 0) {
			this.isLeftMouseDown = true;
			this.lastPageX = evt.pageX;
			this.lastPageY = evt.pageY;
		}

	},

	onMousemove: function() {
		var evt = d3.event;

		if(this.isLeftMouseDown) {
			if(evt.shiftKey) {




			} else {
				var deltaPageX = evt.pageX - this.lastPageX;
				var deltaPageY = evt.pageY - this.lastPageY;

				// console.log(deltaPageX, deltaPageY);

				this.phi += -deltaPageY / 30;
				// this.phi += deltaPageY / 30;

				if(this.phi > 0) {
					this.phi = 0;
				} else if(this.phi < - PI/2) {
					this.phi = -PI/2;
				}

				this.render();



				this.lastPageX = evt.pageX;
				this.lastPageY = evt.pageY;
			}
		}

	},

	onMouseup: function() {
		var evt = d3.event;
		var btn = evt.button;
		if(btn === 0) {
			this.isLeftMouseDown = false;
		}

	},

	onMousewheel: function() {
		var evt = d3.event;

		if(evt.altKey) {
			evt.preventDefault();

			var wheelDelta = evt.wheelDelta;
			wheelDelta /= 120;
			wheelDelta *= Math.PI / 180;

			this.theta += wheelDelta;

			this.render();
		}

	},




};













































})();;
(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }



var PREFIX = VE.PREFIX || "VectorEditor/src/";



VE.webgl.WebGlUtils = {

	// PATH_TO_SHADERS: '../src/renderer/webgl/shaders/',
	PATH_TO_SHADERS: PREFIX + 'renderer/webgl/shaders/',
	
	shaderCache: {},


	initializeWebGL: function(canvas) {
		var me = this;
		
		canvas = $(canvas);

		var gl;
		try {
			gl = canvas[0].getContext("webgl") || canvas[0].getContext("experimental-webgl");
		} catch(e) { }

		if (!gl) {
			console.error("Unable to initialize WebGL.");
			return false;
		}

		return gl;
	},


	// Should be refactored so as not to use synchronous ajax.
	getShaderContent: function(shaderName) {
		var url = this.PATH_TO_SHADERS + shaderName;
		var shaderContent;

		if(shaderContent = this.shaderCache[url]) { return shaderContent; }

		var x = new XMLHttpRequest();
		x.open('GET', url, false);
		x.send(null);

		return shaderContent = this.shaderCache[url] = x.responseText;
	},


	initializeProgram: function(gl, vertexShaderName, fragmentShaderName) {
		var ok = true;
		var program = gl.createProgram();
		
		var vs = gl.createShader(gl.VERTEX_SHADER);
		var vsSource = this.getShaderContent(vertexShaderName);
		
		 // compile
		gl.shaderSource(vs, vsSource);
		gl.compileShader(vs);
		
		// check
		if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
			console.error("Vertex shader compilation failed:\n" + gl.getShaderInfoLog(vs));
			ok = false;
		}
		
		
		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		var fsSource =  this.getShaderContent(fragmentShaderName);
		
		 // compile
		gl.shaderSource(fs, fsSource);
		gl.compileShader(fs);
		
		// check
		if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
			console.error("Fragment shader compilation failed:\n" + gl.getShaderInfoLog(fs));
			ok = false;
		}

		if(!ok) { return false; }

		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error("Shader init failed");
			gl.deleteShader(program);
			return false;
		}

		return program;
	},
	






};





















































})();;
(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }





VE.webgl.TextRenderer = {



	createFontTexture: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var fontSize = params.fontSize || 12;
		var fontFamily = params.fontFamily || "Ubuntu Mono";
		var fontColor = params.fontColor || '#000000';
		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || fontSize;


		var texCanvas = params.canvas;
		if(!texCanvas) {
			texCanvas = document.createElement('canvas');
			texCanvas.class     = "hidden-canvas font-canvas";
			texCanvas.width  = text.length * charWidth;
			texCanvas.height = charHeight;
			texCanvas.style.display   = "none";
			var body = document.getElementsByTagName("body")[0];
			body.appendChild(texCanvas);
		}


		var ctx = texCanvas.getContext('2d');
		ctx.fillStyle = fontColor;
		ctx.font = fontSize + 'px ' + fontFamily;

		var x0 = 0;
		var y = fontSize;
		for(var i=0,ii=text.length;i<ii;i++) {
			var x = x0 + i * charWidth;
			var letter = text[i];
			ctx.fillText(letter, x, y);
		}


		// console.time('A')
		var texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texCanvas);

		gl.bindTexture(gl.TEXTURE_2D, null);
		// console.timeEnd('A')

		return texture;
	},

	processLowerCaseFontTextureString: function(text) {
		var a = 'a'.charCodeAt(0);
		var b = [];
		for(var i=0,ii=text.length;i<ii;i++) {
			var c = text.charCodeAt(i) - a;
			b[c] = text[i];
		}
		for(var i=0,ii=b.length;i<ii;i++) {
			if(b[i] === undefined) { b[i] = ' '; }
		}
		var d = b.join('');
		return d;
	},


	processUpperCaseFontTextureString: function(text) {
		var a = 'A'.charCodeAt(0);
		var b = [];
		for(var i=0,ii=text.length;i<ii;i++) {
			var c = text.charCodeAt(i) - a;
			b[c] = text[i];
		}
		for(var i=0,ii=b.length;i<ii;i++) {
			if(b[i] === undefined) { b[i] = ' '; }
		}
		var d = b.join('');
		return d;
	},



	stringToBuffer: function(gl, str, repeats) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		if(!repeats) { repeats = 1; }

		var _a = 'a'.charCodeAt(0);

		// var a = new Uint8Array(repeats * str.length);
		var a = new Float32Array(repeats * str.length);
		for(var i=0,ii=str.length;i<ii;i++) {
			var cc = str.charCodeAt(i) - _a;
			for(var j=0;j<repeats;j++) {
				a[i*repeats+j] = cc;
			}
			// a[i] = str.charCodeAt(i);
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},

	upperCaseCharacterArrayToBuffer: function(gl, array, repeats) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		if(!repeats) { repeats = 1; }

		var _a = 'A'.charCodeAt(0);

		var a = new Float32Array(repeats * array.length);
		for(var i=0,ii=array.length;i<ii;i++) {
			var cc = array[i].charCodeAt(0) - _a;
			for(var j=0;j<repeats;j++) {
				a[i*repeats+j] = cc;
			}
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},

	createTexCoordBuffer: function(gl, length) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

		var a = new Float32Array(12 * length);
		for(var i=0,ii=length;i<ii;i++) {
			// bottom-left
			a[12*i] = 0;
			a[12*i+1] = 0;

			// top-left
			a[12*i+2] = 0;
			a[12*i+3] = 1;

			// top-right
			a[12*i+4] = 1;
			a[12*i+5] = 1;


			// top-right
			a[12*i+6] = 1;
			a[12*i+7] = 1;

			// bottom-right
			a[12*i+8] = 1;
			a[12*i+9] = 0;

			// bottom-left
			a[12*i+10] = 0;
			a[12*i+11] = 0;
		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return buffer;
	},


	stringToVbo: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		for(var i=0,ii=text.length;i<ii;i++) {
			
			// bottom-left
			a[12*i] = xOffset + i * charWidth;
			a[12*i+1] = yOffset;

			// top-left
			a[12*i+2] = xOffset + i * charWidth;
			a[12*i+3] = yOffset + charHeight;

			// top-right
			a[12*i+4] = xOffset + (i+1) * charWidth;
			a[12*i+5] = yOffset + charHeight;


			// top-right
			a[12*i+6] = xOffset + (i+1) * charWidth;
			a[12*i+7] = yOffset + charHeight;

			// bottom-right
			a[12*i+8] = xOffset + (i+1) * charWidth;
			a[12*i+9] = yOffset;

			// bottom-left
			a[12*i+10] = xOffset + i * charWidth;
			a[12*i+11] = yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},









};





















































})();




;
(function(){

if(typeof VE.webgl !== 'object') { VE.webgl = {}; }
if(typeof VE.webgl.annotate !== 'object') { VE.webgl.annotate = {}; }





VE.webgl.annotate.PreviewRenderer = {



	// Just a test
	_drawText_TEST: function(gl, canvas, annotateContainer, params) {
		var WebGlUtils = VE.webgl.WebGlUtils;
		var TextRenderer = VE.webgl.TextRenderer;

		var sequenceModel = annotateContainer.model;
		var sequence = sequenceModel.get('sequence');
		var rows = annotateContainer.rows;
		
		// sequence = sequence.join('').toLowerCase().split('');
		sequence = sequence.join('').toUpperCase().split('');


		var fontTexture = params.fontTexture;
		var fontText = params.fontText;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;


		var params2 = _.clone(params);
		params2.gl = gl;
		params2.text = sequence;
		params2.rows = rows;
		params2.annotateContainer = annotateContainer;

		var vbo = this.sequenceToVbo(params2);
		var textBuffer = TextRenderer.upperCaseCharacterArrayToBuffer(gl, sequence, 6);
		var textTextureCoordBuffer = TextRenderer.createTexCoordBuffer(gl, sequence.length);



		// var fontText = 'agctmrwsykvhdbn';
		// fontText = TextRenderer.processLowerCaseFontTextureString(fontText);

		// var params3 = _.clone(params);
		// params3.gl = gl;
		// params3.text = fontText;
		// var fontTexture = TextRenderer.createFontTexture(params3);



		var textProgram = WebGlUtils.initializeProgram(gl, 'Text_Test.vert', 'Text_Test.frag');


		// console.time('b');

		// gl.drawingBufferHeight = canvas.height();
		// gl.drawingBufferWidth = canvas.width();

		var program = textProgram;

		// gl.viewport(0, 0, canvas.width(), canvas.height());

		gl.useProgram(program);

		// console.time('A')
		var vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition");
		// console.timeEnd('A')

		// console.time('B')
		gl.enableVertexAttribArray(vertexPositionAttribute);
		// console.timeEnd('B')

		// console.time('C')
		// console.timeEnd('C')

		var charAttribute = gl.getAttribLocation(program, "aChar");
		gl.enableVertexAttribArray(charAttribute);

		var textureCoordAttribute = gl.getAttribLocation(program, "aTextureCoord");
		gl.enableVertexAttribArray(textureCoordAttribute);


		// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		// console.time('D')
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
		// console.timeEnd('D')

		// console.time('E')
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
		// console.timeEnd('E')

		gl.bindBuffer(gl.ARRAY_BUFFER, textBuffer);
		gl.vertexAttribPointer(charAttribute, 1, gl.FLOAT, false, 0, 0);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, textTextureCoordBuffer);
		gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

		gl.uniform2f(gl.getUniformLocation(program, "uSize"), canvas.width(), canvas.height());

		// console.time('G')
		gl.uniform1f(gl.getUniformLocation(program, "uNumChars"), fontText.length);
		// console.timeEnd('G')

		gl.uniform2f(gl.getUniformLocation(program, "uOffset"), xOffset, yOffset);
		
		// console.time('H')
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, fontTexture);
		gl.uniform1i(gl.getUniformLocation(program, "uSampler"), 0);
		// console.timeEnd('H')



		var len = sequence.length * (12 + 6) / 3;

		
		// console.time('b');
		gl.drawArrays(gl.TRIANGLES, 0, len);
		// console.timeEnd('b');
		// console.timeEnd('b');



	},


	sequenceToVbo2: function(params) {
		
		var gl = params.gl;
		var text = params.text;
		var annotateContainer = params.annotateContainer;
		var rows = params.rows || annotateContainer.rows;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var rowHeight = params.rowHeight || 20;
		var bpPerRow = params.bpPerRow || 40;
		var showSpaceEvery10Bp = (params.showSpaceEvery10Bp !== undefined) ? params.showSpaceEvery10Bp : true;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		var _xOffset = 0;
		var _yOffset = -rowHeight + yOffset;
		var rowIndex = -1;
		for(var i=0,ii=text.length;i<ii;i++) {
			
			var col = i % bpPerRow;
			if(!col) {
				_xOffset = xOffset;
				_yOffset += rowHeight;
				rowIndex++;
			} else if(showSpaceEvery10Bp && !(i % 10)) {
				_xOffset += charWidth;
			}





			var row = rows[rowIndex];

			_yOffset = yOffset + (row.y + annotateContainer.getBpTextOffset(row));




			// bottom-left
			a[12*i] = _xOffset + col * charWidth;
			a[12*i+1] = _yOffset;

			// top-left
			a[12*i+2] = _xOffset + col * charWidth;
			a[12*i+3] = _yOffset + charHeight;

			// top-right
			a[12*i+4] = _xOffset + (col+1) * charWidth;
			a[12*i+5] = _yOffset + charHeight;


			// top-right
			a[12*i+6] = _xOffset + (col+1) * charWidth;
			a[12*i+7] = _yOffset + charHeight;

			// bottom-right
			a[12*i+8] = _xOffset + (col+1) * charWidth;
			a[12*i+9] = _yOffset;

			// bottom-left
			a[12*i+10] = _xOffset + col * charWidth;
			a[12*i+11] = _yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},

	sequenceToVbo: function(params) {
		
		var gl = params.gl;
		var text = params.text;

		var charWidth = params.charWidth || 9;
		var charHeight = params.charHeight || 12;
		var xOffset = params.xOffset || 0;
		var yOffset = params.yOffset || 0;

		var rowHeight = params.rowHeight || 20;
		var bpPerRow = params.bpPerRow || 40;
		var showSpaceEvery10Bp = (params.showSpaceEvery10Bp !== undefined) ? params.showSpaceEvery10Bp : true;

		var vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		var a = new Float32Array(text.length * 12);
		var _xOffset = 0;
		var _yOffset = -rowHeight + yOffset;
		for(var i=0,ii=text.length;i<ii;i++) {
			
			var col = i % bpPerRow;
			if(!col) {
				_xOffset = xOffset;
				_yOffset += rowHeight;
			} else if(showSpaceEvery10Bp && !(i % 10)) {
				_xOffset += charWidth;
			}

			// bottom-left
			a[12*i] = _xOffset + col * charWidth;
			a[12*i+1] = _yOffset;

			// top-left
			a[12*i+2] = _xOffset + col * charWidth;
			a[12*i+3] = _yOffset + charHeight;

			// top-right
			a[12*i+4] = _xOffset + (col+1) * charWidth;
			a[12*i+5] = _yOffset + charHeight;


			// top-right
			a[12*i+6] = _xOffset + (col+1) * charWidth;
			a[12*i+7] = _yOffset + charHeight;

			// bottom-right
			a[12*i+8] = _xOffset + (col+1) * charWidth;
			a[12*i+9] = _yOffset;

			// bottom-left
			a[12*i+10] = _xOffset + col * charWidth;
			a[12*i+11] = _yOffset;

		}

		gl.bufferData(gl.ARRAY_BUFFER, a, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		return vbo;
	},







};




var FeatureRenderer = VE.webgl.annotate.FeatureRenderer = {

	// Just a test
	_drawFeatures_TEST: function(gl, canvas, annotateContainer, params) {



	},


	createFeatureVbo: function(params) {
		var gl = params.gl;
		var text = params.text;
		var annotateContainer = params.annotateContainer;
		var rows = params.rows || annotateContainer.rows;











	},



};




















































})();;
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}





var StructOperation = VE.ot.StructOperation = function(inData, ExtendingClass) {
	this.ExtendingClass = ExtendingClass;
	
	this.config = ExtendingClass.config;
	this.orderArray = ExtendingClass.orderArray;
	
	if(inData) {
		for(var x in this.config) {
			this[x] = inData[x] === undefined ? null : inData[x];
		}
	} else {
		for(var x in this.config) {
			this[x] = null;
		}
	}
};


StructOperation.extend = function(params) {
	var config = params.config;
	var orderArray = params.orderArray;

	var childClass = function(inData) {
		if(inData) {
			for(var x in this.config) {
				this[x] = inData[x] === undefined ? null : inData[x];
			}
		} else {
			for(var x in this.config) {
				this[x] = null;
			}
		}
	}

	childClass.config = childClass.prototype.config = params.config;
	childClass.orderArray = childClass.prototype.orderArray = params.orderArray;

	childClass.deSerialize = this.deSerialize.bind(childClass);
	childClass.transform = this.transform.bind(childClass);
	childClass.compose = this.compose.bind(childClass);

	for(var x in this.prototype) {
		childClass.prototype[x] = this.prototype[x];
	}

	return childClass;
};




StructOperation.setUpStatics = function(ExtendingClass) {
	ExtendingClass.deSerialize = this.deSerialize;
	ExtendingClass.transform = this.transform;
	ExtendingClass.compose = this.compose;
};

StructOperation.prototype.isNoop = function() {
	for(var x in this.config) {
		if(this[x] !== null) { return false; }
	}
	return true;
};

StructOperation.prototype.copy = function() {
	var params = {};
	for(var x in this.config) {
		if(this[x] !== null) { params[x] = this.config[x].copy(this[x]); }
	}
	var copy = new this.ExtendingClass(params);
	return copy;
};

StructOperation.prototype.serialize = function() {
	var data = {};
	for(var x in this.config) {
		if(this[x] !== null) { data[x] = this.config[x].serialize(this[x]); }
		else { data[x] = null; }
	}
	return data;
};

StructOperation.prototype.apply = function(applyClassObject) {
	var inverseParams = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		if(this[x] !== null) {
			inverseParams[x] = this.config[x].apply(applyClassObject, this[x]);
		}
	}
	var inverse = new this.constructor(inverseParams);
	return inverse;
};

StructOperation.deSerialize = function(data) {
	if(data === undefined || data === null) { return new this(); }
	var params = {};
	for(var x in this.config) {
		if(data[x] === null || data[x] === undefined) { params[x] = null; }
		else { params[x] = this.config[x].deSerialize(data[x]); }
	}
	var deSer = new this(params);
	return deSer;
};

StructOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		var op1prime = new this();
		var op2prime = (op2 === undefined || op2 === null) ? new this() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		var op1prime = (op1 === undefined || op1 === null) ? new this() : op1.copy();
		var op2prime = new this();
		return [op1prime, op2prime];
	}
	
	var op1primeParams = {};
	var op2primeParams = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		var xformed = this.config[x].transform(op1[x], op2[x]);
		op1primeParams[x] = xformed[0];
		op2primeParams[x] = xformed[1];
	}
	
	var op1prime = new this(op1primeParams);
	var op2prime = new this(op2primeParams);
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
StructOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this() : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this() : op1.copy();
	}
	
	var params = {};
	for(var i=0;i<this.orderArray.length;i++) {
		var x = this.orderArray[i];
		params[x] = this.config[x].compose(op1[x], op2[x]);
	}
	var op = new this(params);
	return op;
};



























































































})();
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}




var RidmOperation = VE.ot.RidmOperation = function(ExtendingClass) {
	this.ExtendingClass = ExtendingClass;
	
	this.config = ExtendingClass.config;
	
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};



RidmOperation.setUpStatics = function(ExtendingClass) {
	ExtendingClass.isRetain = this.isRetain;
	ExtendingClass.isInsert = this.isInsert;
	ExtendingClass.isDelete = this.isDelete;
	ExtendingClass.isModify = this.isModify;
	
	ExtendingClass.deSerialize = this.deSerialize;
	ExtendingClass.transform = this.transform;
	ExtendingClass.compose = this.compose;
};

/* This is what the config should look like. Keep this
 * code commented out. 

RidmOperation.config = {
	getModificationClass: function() {
		
	},
	
	getInsertClassArrayFromApplyClassObj: function(applyClassObject) {
		 
	},
	setInsertClassArrayOfApplyClassObj: function(applyClassObject, insertClassArray) {
		
	},
	
	cloneInsertClassObject: function(insertClassObject) {
		
	},
	serializeInsertClassObject: function(insertClassObject) {
		
	},
	deSerializeInsertClassObject: function(serializedInsertClassObject) {
		
	}
	
};*/


var isRetain = RidmOperation.isRetain = RidmOperation.prototype.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = RidmOperation.isInsert = RidmOperation.prototype.isInsert = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = RidmOperation.isDelete = RidmOperation.prototype.isDelete = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

var isModify = RidmOperation.isModify = RidmOperation.prototype.isModify = function(comp) {
	return comp!==undefined && comp.modify !== undefined;
};


RidmOperation.prototype.isNoop = function() {
	return this.components.length===0 || (this.components.length===1 && this.isRetain(this.components[0]));
};

RidmOperation.prototype.copy = function() {
	var copy = new this.ExtendingClass();
	copy.baseLength = this.baseLength;
	copy.targetLength = this.targetLength;
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	var comps = this.components;
	var copyComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(isModify(c)) {
			copyComps.push({modify: c.modify.copy()});
		} else if(isInsert(c)) {
			copyComps.push({insert: this.config.cloneInsertClassObject(c.insert)});
		} else if(isRetain(c)) {
			copyComps.push({retain: c.retain});
		} else if(isDelete(c)) {
			copyComps.push({delete: c.delete});
		} else {
			console.error("Invalid operation component type:", comp);
		}
	}
	
	copy.components = copyComps;
	return copy;
};

RidmOperation.prototype.serialize = function() {
	var isInsert = this.isInsert;
	var isModify = this.isModify;
	var comps = this.components;
	var serComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(isModify(c)) {
			serComps.push({modify: c.modify.serialize()});
		} else if(isInsert(c)) {
			serComps.push({insert: this.config.serializeInsertClassObject(c.insert)});
		} else {
			serComps.push(c);
		}
	}
	var data = {
		components: serComps,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

RidmOperation.prototype.getLastComp = function() {
	return this.components[this.components.length-1];
};

// Skip over a given number of items.
RidmOperation.prototype.retain = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	this.targetLength += n;
	if(this.isRetain(this.components[this.components.length-1])) {
		this.components[this.components.length-1].retain += n;
	} else {
		this.components.push({retain: n});
	}
	return this;
};

/**
 * Insert an insertClassObject at the current position.
 * @param {InsertClass} insertClassObject
 */
RidmOperation.prototype.insert = function(insertClassObject) {
	this.targetLength += 1;
	if(this.isModify(this.components[this.components.length-1])) {
		this.components[this.components.length-1].modify.apply(insertClassObject);
		this.components.pop();
	}
	this.components.push({insert: insertClassObject});
	return this;
};

// Delete n items at the current position.
RidmOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(this.isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else if(this.isModify(this.getLastComp())) {
		// Modifications operating on a deleted item will be removed.
		this.components.pop();
		this.components.push({'delete': n});
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

/**
 * @param {ModificationClass} modificationClassObject
 */
RidmOperation.prototype.modify = function(modificationClassObject) {
	if(this.isModify(this.getLastComp())) {
		// Compose modifications on the same item.
		var compMod = this.config.getModificationClass().compose(this.getLastComp().modify, modificationClassObject);
		this.components.pop();
		this.components.push({modify: compMod});
	} else {
		this.components.push({modify: modificationClassObject});
	}
	return this;
};

/**
 * This function will alter the applyClassObject to which it is applied to.
 * @param {ApplyClass} applyClassObject
 */
RidmOperation.prototype.apply = function(applyClassObject) {		
	var inverse = new this.ExtendingClass();

	if(this.isNoop()) { return inverse; }
	
	var insertClassArray = this.config.getInsertClassArrayFromApplyClassObj(applyClassObject);
	
	if(this.baseLength !== insertClassArray.length) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the length of the insertClassArray ("+insertClassArray.length+").");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	
	var newInsertClassArray = [];
	var pos = 0;
	var comps = this.components;
	var modBuf = undefined;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isModify(comp)) {
			modBuf = comp.modify;
		} else if(isRetain(comp)) {
			if(modBuf === undefined) {
				for(var j=0;j<comp.retain;j++) {
					newInsertClassArray.push(insertClassArray[pos+j]);
				}
			} else {
				inverse.modify(modBuf.apply(insertClassArray[pos]));
				// modBuf.apply(insertClassArray[pos]);
				newInsertClassArray.push(insertClassArray[pos]);
				for(var j=1;j<comp.retain;j++) {
					newInsertClassArray.push(insertClassArray[pos+j]);
				}
			}
			inverse.retain(comp.retain);
			pos += comp.retain;
			modBuf = undefined;
		} else if(isInsert(comp)) {
			modBuf = undefined;
			inverse.delete(1);
			newInsertClassArray.push(comp.insert);
		} else if(isDelete(comp)) {
			modBuf = undefined;
			for(var j=pos;j<pos+comp.delete;j++) {
				inverse.insert(insertClassArray[j].clone());
			}
			pos += comp.delete;
		} else {
			console.error("Invalid operation component type:", comp);
		}
	}
	
	this.config.setInsertClassArrayOfApplyClassObj(applyClassObject, newInsertClassArray);
	return inverse;
};

RidmOperation.deSerialize = function(data) {
	var deSer = new this();
	deSer.baseLength = data.baseLength;
	deSer.targetLength = data.targetLength;
	
	var comps = data.components;
	var deSerComps = [];
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(this.isModify(c)) {
			deSerComps.push({modify: this.config.getModificationClass().deSerialize(c.modify)});
		} else if(this.isInsert(c)) {
			deSerComps.push({insert: this.config.deSerializeInsertClassObject(c.insert)});
		} else {
			deSerComps.push(c);
		}
	}
	
	deSer.components = deSerComps;
	return deSer;
};

RidmOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		var op1prime = new this();
		var op2prime = (op2 === undefined || op2 === null) ? new this() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		var op1prime = (op1 === undefined || op1 === null) ? new this() : op1.copy();
		var op2prime = new this();
		return [op1prime, op2prime];
	}
	
	if (op1.baseLength !== op2.baseLength) {
		throw new Error("Both operations have to have the same base length");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op1prime = new this();
	var op2prime = new this();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isModify(comp1) && isDelete(comp2)) {
			i1++;
			continue;
		}
		if(isModify(comp2) && isDelete(comp1)) {
			i2++;
			continue;
		}
		
		
		if(isModify(comp1) && isModify(comp2)) {
			var pair = this.config.getModificationClass().transform(comp1.modify, comp2.modify);
			op1prime.modify(pair[0]);
			op2prime.modify(pair[1]);
			i1++;
			i2++;
			continue;
		}
		
		
		if(isModify(comp1)) {
			op1prime.modify(comp1.modify);
			i1++;
			continue;
		}
		
		if(isInsert(comp1)) {
			op1prime.insert(comp1.insert);
			op2prime.retain(1);
			i1++;
			continue;
		}
		
		
		if(isModify(comp2)) {
			op2prime.modify(comp2.modify);
			i2++;
			continue;
		}
		
		if(isInsert(comp2)) {
			op1prime.retain(1);
			op2prime.insert(comp2.insert);
			i2++;
			continue;
		}
		
		
		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var minl, v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.retain(minl);
			op2prime.retain(minl);
		} else if(isDelete(comp1) && isDelete(comp2)) {
			v1 = comp1["delete"] - c1;
			v2 = comp2["delete"] - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isDelete(comp1) && isRetain(comp2)) {
			v1 = comp1["delete"] - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime['delete'](minl);
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2["delete"] - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op2prime['delete'](minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
RidmOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this() : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this() : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation ("+op2.baseLength+") has to be the target length of the first operation ("+op1.targetLength+").");
	}
	
	var isRetain = this.isRetain;
	var isInsert = this.isInsert;
	var isDelete = this.isDelete;
	var isModify = this.isModify;
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op = new this();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isModify(comp1)) {
			op.modify(comp1.modify);
			i1++;
			continue;
		}
		if(isDelete(comp1)) {
			op['delete'](comp1['delete']);
			i1++;
			continue;
		}
		
		if(isModify(comp2)) {
			op.modify(comp2.modify);
			i2++;
			continue;
		}
		if(isInsert(comp2)) {
			op.insert(comp2.insert);
			i2++;
			continue;
		}
		
		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.retain(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.retain(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.retain(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isDelete(comp2)) {
			v1 = 1;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) { // Currently, this can only happen v2===0
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isRetain(comp2)) {
			v1 = 1;
			v2 = comp2.retain - c2;
			if(v1 > v2) { // Currently, this can only happen v2===0
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(comp1.insert);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(comp1.insert);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) {
				op['delete'](v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op['delete'](v2);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op['delete'](v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else {
			throw new Error("Something went wrong.");
		}
	}
	
	return op;
};


























































































})();
// StringOperation
(function(){


function extend(child, parent) {
	if(typeof parent === 'object' || typeof parent === 'function') {
		for(var x in parent) {
			child[x] = parent[x];
		}
	}
	return child;
}



if(typeof VE.ot !== 'object') {
	VE.ot = {};
}




var StringOperation = VE.ot.StringOperation = function() {
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};


StringOperation.extend = function(prototype, statics) {
	var childClass = function() {
		this.components = [];
		this.baseLength = 0;
		this.targetLength = 0;
	};

	extend(childClass.prototype, this.prototype);
	extend(childClass.prototype, prototype);

	extend(childClass, this);
	extend(childClass, statics);

	return childClass;
};


var isRetain = StringOperation.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = StringOperation.isInsert  = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = StringOperation.isDelete  = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

StringOperation.prototype.isNoop = function() {
	return this.components.length===0 || (this.components.length===1 && isRetain(this.components[0]));
};

StringOperation.prototype.copy = function() {
	var slOp = new this.constructor();
	slOp.baseLength = this.baseLength;
	slOp.targetLength = this.targetLength;
	slOp.components = this.components;
	return slOp;
};

StringOperation.prototype.serialize = function() {
	var data = {
		components: this.components,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

StringOperation.deSerialize = function(data) {
	var slOp = new this.constructor();
	slOp.baseLength = data.baseLength;
	slOp.targetLength = data.targetLength;
	slOp.components = data.components;
	return slOp;
};

// Skip over a given number of characters.
StringOperation.prototype.retain = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	this.targetLength += n;
	if(isRetain(this.components[this.components.length-1])) {
		this.components[this.components.length-1].retain += n;
	} else {
		this.components.push({retain: n});
	}
	return this;
};

// Insert a string at the current position.
StringOperation.prototype.insert = function(str) {
	if(str === '') {return this;}
	this.targetLength += str.length;
	if(isInsert(this.components[this.components.length-1])) {
		this.components[this.components.length-1].insert += str;
	} else {
		this.components.push({insert: str});
	}
	return this;
};

// Delete a string at the current position.
StringOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

// The param 'sequence' should be a serialized SequenceManager.
// This functions modifies the serialized sequence that it operates on.
StringOperation.prototype.apply = function(sequence) {
	if(this.isNoop()) { return true; }
	
	var str = sequence.join('');
	
	if(this.baseLength !== str.length) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the sequence's length ("+str.length+").");
	}

	var inverse = new this.constructor();
	
	var newStr = [];
	var i1 = 0, pos = 0;
	var comps = this.components;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isRetain(comp)) {
			inverse.retain(comp.retain);
			newStr.push(str.slice(pos, pos + comp.retain));
			pos += comp.retain;
		} else if(isInsert(comp)) {
			inverse.delete(comp.insert.length);
			newStr.push(comp.insert);
		} else if(isDelete(comp)) {
			inverse.insert(str.slice(pos, pos + comp.delete));
			pos += comp.delete;
		} else {
			console.error("Invalid operation component type.");
		}
	}
	
	newStr = newStr.join('');
	sequence.splice(0, sequence.length);
	for(var i=0,ii=newStr.length;i<ii;i++) {
		sequence[i] = newStr[i];
	}
	
	return inverse;
};

StringOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		var op1prime = new this();
		var op2prime = (op2 === undefined || op2 === null) ? new this() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		var op1prime = (op1 === undefined || op1 === null) ? new this() : op1.copy();
		var op2prime = new this();
		return [op1prime, op2prime];
	}
	
	if (op1.baseLength !== op2.baseLength) {
		throw new Error("Both operations have to have the same base length:\n\top1.baseLength: "+op1.baseLength+
				"\n\top2.baseLength: "+op2.baseLength);
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op1prime = new this();
	var op2prime = new this();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isInsert(comp1)) {
			op1prime.insert(comp1.insert);
			op2prime.retain(comp1.insert.length);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op1prime.retain(comp2.insert.length);
			op2prime.insert(comp2.insert);
			i2++;
			continue;
		}
		
		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		var minl, v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.retain(minl);
			op2prime.retain(minl);
		} else if(isDelete(comp1) && isDelete(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isDelete(comp1) && isRetain(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime['delete'](minl);
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op2prime['delete'](minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
StringOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null || op1.isNoop()) {
		return (op2 === undefined || op2 === null) ? new this()  : op2.copy();
	}
	if(op2 === undefined || op2 === null || op2.isNoop()) {
		return (op1 === undefined || op1 === null) ? new this()  : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation has to be the target length of the first operation.");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op = new this();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isDelete(comp1)) {
			op['delete'](comp1['delete']);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op.insert(comp2.insert);
			i2++;
			continue;
		}

		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.retain(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.retain(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.retain(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isDelete(comp2)) {
			if(typeof c1 !== 'string') {c1 = comp1.insert;}
			v1 = c1.length;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) {
				c1 = c1.slice(v2);
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isRetain(comp2)) {
			if(typeof c1 !== 'string') {c1 = comp1.insert;}
			v1 = c1.length;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.insert(c1.slice(0, v2));
				c1 = c1.slice(v2);
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(c1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(c1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2['delete'] - c2;
			if(v1 > v2) {
				op['delete'](v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op['delete'](v2);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op['delete'](v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else {
			throw new Error("Something went wrong.");
		}
	}
	
	return op;
};

























































































})();
// IndexShiftOperation
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var IndexShiftOperation = VE.ot.IndexShiftOperation = function() {
	this.components = [];
	this.baseLength = 0;
	this.targetLength = 0;
};

var isRetain = IndexShiftOperation.isRetain = IndexShiftOperation.prototype.isRetain = function(comp) {
	return comp!==undefined && comp.retain !== undefined;
};

var isInsert = IndexShiftOperation.isInsert = IndexShiftOperation.prototype.isInsert = function(comp) {
	return comp!==undefined && comp.insert !== undefined;
};

var isDelete = IndexShiftOperation.isDelete = IndexShiftOperation.prototype.isDelete = function(comp) {
	return comp!==undefined && comp.delete !== undefined;
};

IndexShiftOperation.prototype.copy = function() {
	var shiftOp = new IndexShiftOperation();
	shiftOp.baseLength = this.baseLength;
	shiftOp.targetLength = this.targetLength;
	shiftOp.components = [];
	for(var i=0;i<this.components.length;i++) {
		shiftOp.components[i] = this.components[i];
	}
	return shiftOp;
};

IndexShiftOperation.prototype.serialize = function() {
	var data = {
		components: this.components,
		baseLength: this.baseLength,
		targetLength: this.targetLength
	};
	return data;
};

IndexShiftOperation.prototype.retain = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	this.targetLength += n;
	if(this.isRetain(this.components[this.components.length-1])) {
		this.components[this.components.length-1].retain += n;
	} else {
		this.components.push({retain: n});
	}
	return this;
};

IndexShiftOperation.prototype.insert = function(n) {
	if(n === 0) {return this;}
	this.targetLength += n;
	if(this.isInsert(this.components[this.components.length-1])) {
		this.components[this.components.length-1].insert += n;
	} else {
		this.components.push({insert: n});
	}
	return this;
};

IndexShiftOperation.prototype.delete = function(n) {
	if(n === 0) {return this;}
	this.baseLength += n;
	if(this.isDelete(this.components[this.components.length-1])) {
		this.components[this.components.length-1].delete += n;
	} else {
		this.components.push({'delete': n});
	}
	return this;
};

/**
 * Returns the value that the IndexShiftOperation represents.
 * @returns {Integer}
 */
IndexShiftOperation.prototype.toInteger = function() {
	return this.targetLength;
};

/**
 * This apply function actually doesn't alter the parameter 'index' as
 * parameters can't be passed by reference in JavaScript.
 * @param {Integer} index
 * @returns {Integer} newIndex
 */
IndexShiftOperation.prototype.apply = function(index) {
	if(index !== this.baseLength) {
		throw new Error("The operation's base length ("+this.baseLength+") must be equal to the index ("+index+").");
	}
	return this.targetLength;
};

/**
 * @returns {IndexShiftOperation} inverse
 */
IndexShiftOperation.prototype.inverse = function() {
	var inverse = new IndexShiftOperation();
	
	var comps = this.components;
	for(var i=0; i<comps.length; i++) {
		var comp = comps[i];
		if(isRetain(comp)) {
			inverse.retain(comp.retain);
		} else if(isInsert(comp)) {
			inverse.delete(comp.insert);
		} else if(isDelete(comp)) {
			inverse.insert(comp.delete);
		} else {
			console.error("Invalid operation component type.");
		}
	}
	
	return inverse;
};

/**
 * This function doesn't alter the object that called it.
 * @param {SymbolListOperation} symbolListOperation
 * @returns {IndexShiftOperation} symbolListOperationPrime (I think)
 */
IndexShiftOperation.prototype.transformAgainstSymbolListOperation = function(symbolListOperation) {
	if(symbolListOperation === undefined || symbolListOperation === null || symbolListOperation.isNoop()) {
		return this.copy();
	}
	
	var shiftComps = this.components;
	var slComps = symbolListOperation.components;
	var symbolListOperationPrime = new IndexShiftOperation();
	var shiftI = 0, slI = 0;
	var shiftC = 0, slC = 0;
	while(true) {
		var shiftComp = shiftComps[shiftI];
		var slComp = slComps[slI];
		
		if(shiftComp===undefined && slComp===undefined) {
			break;
		}
		
		if(isInsert(shiftComp)) {
			symbolListOperationPrime.retain(shiftComp.insert);
			shiftI++;
			continue;
		}
		if(isInsert(slComp)) {
			symbolListOperationPrime.insert(slComp.insert.length);
			slI++;
			continue;
		}
		
		if(shiftComp === undefined) {
			break;
		}
		
		if(slComp===undefined) {
			throw new Error("Cannot compose operations: IndexShiftOperation is too long.");
		}
		
		var minl, shiftV, slV;
		if(isRetain(shiftComp) && isRetain(slComp)) {
			shiftV = shiftComp.retain - shiftC;
			slV = slComp.retain - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
			symbolListOperationPrime.retain(minl);
		} else if(isDelete(shiftComp) && isDelete(slComp)) {
			shiftV = shiftComp.delete - shiftC;
			slV = slComp.delete - slC;
			if(shiftV > slV) {
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
		} else if(isDelete(shiftComp) && isRetain(slComp)) {
			shiftV = shiftComp.delete - shiftC;
			slV = slComp.retain - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
		} else if(isRetain(shiftComp) && isDelete(slComp)) {
			shiftV = shiftComp.retain - shiftC;
			slV = slComp.delete - slC;
			if(shiftV > slV) {
				minl = slV;
				shiftC += slV;
				slC = 0;
				slI++;
			} else if(shiftV === slV) {
				minl = shiftV;
				shiftC = slC = 0;
				shiftI++;
				slI++;
			} else {
				minl = shiftV;
				slC += shiftV;
				shiftC = 0;
				shiftI++;
			}
			symbolListOperationPrime.delete(minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return symbolListOperationPrime;
};

IndexShiftOperation.deSerialize = function(data) {
	var shiftOp = new IndexShiftOperation();
	shiftOp.baseLength = data.baseLength;
	shiftOp.targetLength = data.targetLength;
	shiftOp.components = data.components;
	return shiftOp;
};

/**
 * Wrap an integer index as an IndexShiftOperation.
 * @param {Integer} index
 * @returns {IndexShiftOperation} wrap
 */
IndexShiftOperation.wrap = function(index) {
	var wrap = new IndexShiftOperation();
	wrap.retain(index);
	return wrap;
};

IndexShiftOperation.transform = function(op1, op2) {
	if(op1 === undefined || op1 === null) {
		var op1prime = new IndexShiftOperation();
		var op2prime = (op2 === undefined || op2 === null) ? new IndexShiftOperation() : op2.copy();
		return [op1prime, op2prime];
	}
	if(op2 === undefined || op2 === null) {
		var op1prime = (op1 === undefined || op1 === null) ? new IndexShiftOperation() : op1.copy();
		var op2prime = new IndexShiftOperation();
		return [op1prime, op2prime];
	}
	
	if (op1.baseLength !== op2.baseLength) {
		console.error("op1.baseLength: "+ op1.baseLength);
		console.error("op2.baseLength: "+ op2.baseLength);
		throw new Error("Both operations have to have the same base length.");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op1prime = new IndexShiftOperation();
	var op2prime = new IndexShiftOperation();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isInsert(comp1)) {
			op1prime.insert(comp1.insert);
			op2prime.retain(comp1.insert);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op1prime.retain(comp2.insert);
			op2prime.insert(comp2.insert);
			i2++;
			continue;
		}
		
		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var minl, v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.retain(minl);
			op2prime.retain(minl);
		} else if(isDelete(comp1) && isDelete(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isDelete(comp1) && isRetain(comp2)) {
			v1 = comp1.delete - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op1prime.delete(minl);
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				minl = v2;
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				minl = v1;
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				minl = v1;
				c2 += v1;
				c1 = 0;
				i1++;
			}
			op2prime.delete(minl);
		} else {
			throw new Error("The two components aren't compatible.");
		}
	}
	
	return [op1prime, op2prime];
};

/**
 * Returns op such that op(S) = op2(op1(S));
 */
IndexShiftOperation.compose = function(op1, op2) {
	if(op1 === undefined || op1 === null) {
		return (op2 === undefined || op2 === null) ? new IndexShiftOperation() : op2.copy();
	}
	if(op2 === undefined || op2 === null) {
		return (op1 === undefined || op1 === null) ? new IndexShiftOperation() : op1.copy();
	}
	
	if(op1.targetLength !== op2.baseLength) {
		throw new Error("The base length of the second operation ("+op2.baseLength+") has to be the target length of the first operation ("+op1.targetLength+").");
	}
	
	var comps1 = op1.components;
	var comps2 = op2.components;
	var op = new IndexShiftOperation();
	var i1 = 0, i2 = 0;
	var c1 = 0, c2 = 0;
	while(true) {
		var comp1 = comps1[i1];
		var comp2 = comps2[i2];
		if(comp1===undefined && comp2===undefined) {
			break;
		}
		
		if(isDelete(comp1)) {
			op.delete(comp1.delete);
			i1++;
			continue;
		}
		if(isInsert(comp2)) {
			op.insert(comp2.insert);
			i2++;
			continue;
		}

		if(comp1===undefined) {
			throw new Error("Cannot compose operations: first operation is too short.");
		}
		if(comp2===undefined) {
			throw new Error("Cannot compose operations: first operation is too long.");
		}
		
		var v1, v2;
		if(isRetain(comp1) && isRetain(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.retain(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.retain(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.retain(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isDelete(comp2)) {
			v1 = comp1.insert - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isInsert(comp1) && isRetain(comp2)) {
			v1 = comp1.insert - c1;
			v2 = comp2.retain - c2;
			if(v1 > v2) {
				op.insert(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.insert(v1);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.insert(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else if(isRetain(comp1) && isDelete(comp2)) {
			v1 = comp1.retain - c1;
			v2 = comp2.delete - c2;
			if(v1 > v2) {
				op.delete(v2);
				c1 += v2;
				c2 = 0;
				i2++;
			} else if(v1 === v2) {
				op.delete(v2);
				c1 = c2 = 0;
				i1++;
				i2++;
			} else {
				op.delete(v1);
				c2 += v1;
				c1 = 0;
				i1++;
			}
		} else {
			throw new Error("Something went wrong.");
		}
	}
	
	return op;
};

	



























































































})();
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}



var StringOperation = VE.ot.StringOperation;


var SequenceOperation = VE.ot.SequenceOperation = VE.ot.StructOperation.extend({
	orderArray: [
		'featureOperation',
		'symbolListOperation',
		// 'gridOperation',
		// 'ruleOperation'//,
		//'deviceInDataOperation'
	],
	
	config: {
		featureOperation: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(sequence, value) {
				return value.apply(sequence.get('features'));
			},
			deSerialize: function(value) {
				return VE.ot.FeatureOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return VE.ot.FeatureOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return VE.ot.FeatureOperation.compose(value1, value2);
			}
		},
		symbolListOperation: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(sequence, value) {
				return value.apply(sequence.get('sequence'));
			},
			deSerialize: function(value) {
				return VE.ot.SymbolListOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return VE.ot.SymbolListOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return VE.ot.SymbolListOperation.compose(value1, value2);
			}
		},
	},



});

/**
 * This function was meant to be used transform the caretIndex and
 * SelectionLayer start and end.
 */
SequenceOperation.prototype.transformIndex = function(index) {
	var sl = this.symbolListOperation;
	if(sl === null || sl.isNoop()) { return index; }
	
	var isRetain = sl.isRetain;
	var isInsert = sl.isInsert;
	var isDelete = sl.isDelete;
	
	var comps = sl.components;
	
	var pos = 0;
	var posShift = 0;
	for(var i=0;i<comps.length;i++) {
		var c = comps[i];
		if(c.retain !== undefined) {
			if(index>=pos && index<=pos+c.retain) {
				break;
			} else {
				pos += c.retain;
			}
		} else if(c.insert !== undefined) {
			posShift += c.insert.length;
		} else if(c.delete !== undefined) {
			if(index>=pos && index<=pos+c.delete) {
				posShift -= index-pos;
				break;
			} else {
				posShift -= c.delete;
			}
		}
	}
	
	return index + posShift;
};


























































































})();
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var StringOperation = VE.ot.StringOperation;
var IndexShiftOperation = VE.ot.IndexShiftOperation;

var SymbolListOperation = VE.ot.SymbolListOperation = StringOperation.extend({

	/**
	 * Generates the feature operation that will shift the indices of the features.
	 * @param {Array<VE.Annotation>} annotationsList
	 * @returns {VE.ot.FeatureOperation} fOp
	 */
	generateShiftedFeatureIndicesOp: function(annotationsList) {
		var fOp = new VE.ot.FeatureOperation();

		if(this.isNoop()) { return fOp; }

		for(var i=0;i<annotationsList.length;i++) {
			var feature = annotationsList[i];

			var start = IndexShiftOperation.wrap(feature.get('start'));
			var end = IndexShiftOperation.wrap(feature.get('end') - 1); // As ends are exclusive.

			var xStartOp = start.transformAgainstSymbolListOperation(this);
			var xEndOp = end.transformAgainstSymbolListOperation(this);

			var startOp = IndexShiftOperation.compose(start, xStartOp);
			var endOp = IndexShiftOperation.compose(end, xEndOp);

			if(startOp.toInteger() === endOp.toInteger()) {
				fOp.delete(1);

			} else {
				var featMod = new VE.ot.FeatureModification({
					shiftStart: startOp,
					shiftEnd: endOp
				});

				fOp.modify(featMod);
				fOp.retain(1);
			}

		}

		return fOp;
	},


	apply: function(sequence) {
		if(this.isNoop()) { return true; }
		
		// var str = sequence.join('');
		
		if(this.baseLength !== sequence.length) {
			throw new Error("The operation's base length ("+this.baseLength+") must be equal to the sequence's length ("+sequence.length+").");
		}

		var inverse = new this.constructor();

		var isRetain = StringOperation.isRetain;
		var isInsert = StringOperation.isInsert;
		var isDelete = StringOperation.isDelete;

		// var newStr = [];
		var i1 = 0, pos = 0;
		var comps = this.components;
		for(var i=0; i<comps.length; i++) {
			var comp = comps[i];
			if(isRetain(comp)) {
				inverse.retain(comp.retain);
				// newStr.push(str.slice(pos, pos + comp.retain));
				pos += comp.retain;
			} else if(isInsert(comp)) {
				inverse.delete(comp.insert.length);
				// newStr.push(comp.insert);


				// sequence.splice.bind(sequence, pos, 0).apply(sequence, comp.insert.split(''));
				spliceStringAsArray(sequence, pos, 0, comp.insert);


				pos += comp.insert.length;
			} else if(isDelete(comp)) {
				inverse.insert(sequence.slice(pos, pos + comp.delete).join(''));
				sequence.splice(pos, comp.delete);
				// pos += comp.delete;
			} else {
				console.error("Invalid operation component type.");
			}
		}
		
		// newStr = newStr.join('');
		// sequence.splice(0, sequence.length);
		// for(var i=0,ii=newStr.length;i<ii;i++) {
		// 	sequence[i] = newStr[i];
		// }
		
		return inverse;
	},





});

	



function spliceStringAsArray(array, index, howmany, str) {
	array.splice(index, howmany);
	for(var i=0,ii=str.length;i<ii;i++) {
		array.splice(index + i, 0, str[i]);
	}
}


























































































})();
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


var RidmOperation = VE.ot.RidmOperation;

var FeatureOperation = VE.ot.FeatureOperation = function() {
	return new RidmOperation(this.constructor);
};

RidmOperation.setUpStatics(FeatureOperation);


FeatureOperation.config = {
	getModificationClass: function() {
		return VE.ot.FeatureModification;
	},
	
	getInsertClassArrayFromApplyClassObj: function(features) {
		return features;
	},
	setInsertClassArrayOfApplyClassObj: function(features, newFeatures) {
		features.splice(0, features.length);
		for(var i=0,ii=newFeatures.length;i<ii;i++) {
			features[i] = newFeatures[i];
		}
	},
	
	
	cloneInsertClassObject: function(feature) {
		// Maybe redefine later.
		return JSON.parse(JSON.stringify(feature));
	},
	serializeInsertClassObject: function(feature) {
		return feature;
	},
	deSerializeInsertClassObject: function(feature) {
		return feature;
	}
	
};

	



























































































})();
(function(){


if(typeof VE.ot !== 'object') {
	VE.ot = {};
}


function transformPrimitiveStructOps(value1, value2) {
	var ret = [null, null];
	if(value1 !== null) {
		ret[0] = value1;
	} else if(value2 !== null) {
		ret[1] = value2;
	}
	return ret;
}

function composePrimitiveStructOps(value1, value2) {
	if(value2 !== null) { return value2;}
	else { return value1; }
}

function applyFeaturePrimitiveStructOps(feature, value, field) {
	var oldValue = feature.get(field);
	feature.set(field, value);
	return oldValue;
}



var FeatureModification = VE.ot.FeatureModification = VE.ot.StructOperation.extend({
	orderArray: [
		'shiftStart',
		'shiftEnd',
		'changeName',
		'changeType',
		'changeStrand',
	],
	
	config: {
		shiftStart: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(feature, value) {
				feature.set('start', value.apply(feature.get('start')));
				return value.inverse();
			},
			deSerialize: function(value) {
				return IndexShiftOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return IndexShiftOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return IndexShiftOperation.compose(value1, value2);
			}
		},
		shiftEnd: {
			copy: function(value) {
				return value.copy();
			},
			serialize: function(value) {
				return value.serialize();
			},
			apply: function(feature, value) {
				feature.set('end', value.apply(feature.get('end') - 1) + 1);
				return value.inverse();
			},
			deSerialize: function(value) {
				return IndexShiftOperation.deSerialize(value);
			},
			transform: function(value1, value2) {
				return IndexShiftOperation.transform(value1, value2);
			},
			compose: function(value1, value2) {
				return IndexShiftOperation.compose(value1, value2);
			}
		},
		changeName: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'name');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},
		changeType: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'type');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},
		changeStrand: {
			copy: function(value) {
				return value;
			},
			serialize: function(value) {
				return value;
			},
			apply: function(feature, value) {
				return applyFeaturePrimitiveStructOps(feature, value, 'strand');
			},
			deSerialize: function(value) {
				return value;
			},
			transform: function(value1, value2) {
				return transformPrimitiveStructOps(value1, value2);
			},
			compose: function(value1, value2) {
				return composePrimitiveStructOps(value1, value2);
			}
		},


	},



});


	



























































































})();
(function(){


// State variables
var LASTTYPE = false;
var curSeq = null;
var lastLineWasLocation = false;
var _originContent = "";

// Properties of state variables (to reduce number of property look-ups)
var _curSeq__sequence = null;




// Constants
var LOCUS_TAG = "LOCUS",
	DEFINITION_TAG = "DEFINITION",
	ACCESSION_TAG = "ACCESSION",
	VERSION_TAG = "VERSION",
	KEYWORDS_TAG = "KEYWORDS",
	//SEGMENT_TAG ="SEGMENT"
	SOURCE_TAG = "SOURCE",
	ORGANISM_TAG = "ORGANISM",
	REFERENCE_TAG = "REFERENCE",
	AUTHORS_TAG = "AUTHORS",
	CONSORTIUM_TAG = "CONSRTM",
	TITLE_TAG = "TITLE",
	JOURNAL_TAG = "JOURNAL",
	PUBMED_TAG = "PUBMED",
	REMARK_TAG = "REMARK",
	COMMENT_TAG = "COMMENT",
	FEATURES_TAG = "FEATURES",
	BASE_COUNT_TAG = "BASE COUNT",
	//CONTIG_TAG = "CONTIG"
	ORIGIN_TAG = "ORIGIN",
	END_SEQUENCE_TAG = "//";





function reset() {
	LASTTYPE = false;
	curSeq = null;
	lastLineWasLocation = false;
	_originContent = "";

	_curSeq__sequence = null;
}

function newSeq() {
	curSeq = {
		features: [],
		inData: {},
		sequence: []
	};

	_curSeq__sequence = curSeq.sequence;
}

function newFeature() {
	var newFeature = {
		inData: {
			locations: [],
			index: curSeq.features.length,
		},
		notes: [],
	};
	curSeq.features.push(newFeature);
}


function getCurrentFeature() {
	return curSeq.features[curSeq.features.length-1];
}

function getLastFeatureNote() {
	var feat = getCurrentFeature();
	return feat.notes[feat.notes.length-1];
}


function postProcessCurSeq() {
	// curSeq.sequence = curSeq.sequence.join('').split('');
	curSeq.sequence = _originContent.replace(/[\s\d]/g,"").split('');
	
	var features = curSeq.features;
	for(var i=0,ii=features.length;i<ii;i++) {
		features[i] = VE.ParserUtil.postProcessGenbankFeature(features[i]);
	}
	
}



/**
 * @param {String} genbank Genbank file content as a string.
 */
function genbankToSerialized(genbank) {
	// console.profile();


	reset();

	var lines = genbank.split(/\r?\n/);
	loop: for(var i=0,ii=lines.length;i<ii;i++) {
		var line = lines[i];

		var key = getLineKey(line);
		// var val = getLineVal(line);
		// var isKeyRunon = isKeywordRunon(line);
		// var isSubKey = isSubKeyword(line);
		
		// IGNORE LINES: DO NOT EVEN PROCESS
		if (line.trim() === "" || key==="COMMENT" || key===";") {
			continue;
		}

		var isKey = isKeyword(line);
		setType(key, isKey);


		switch (LASTTYPE) {
		case LOCUS_TAG:
			newSeq();
			parseLocus(line);
			break;
		case FEATURES_TAG:
			// parseFeatures(line, key, val);
			parseFeatures(line, key, getLineVal(line));
			break;
		case ORIGIN_TAG:
			parseOrigin(line, key);
			break;
		case END_SEQUENCE_TAG:
			break loop;
			break;
		case "COMMENT":
			// do nothing
			break;
		default: // FOLLOWING FOR KEYWORDS NOT PREVIOUSLY DEFINED IN CASES
			// if ( key === "BASE") {
			// 	// do nothing;              // BLANK LINES || line with ;;;;;;;;;  || "BASE COUNT"
			// 	// console.warn("Parsing GenBank File: This line with BaseCount has been ignored: " + line);
			// 	// gb.addMessage("This line with BaseCount has been ignored: " + line);
			// 	break;
			// } else if ( isKey ) {
			// 	//console.log(line);
			// 	// REGULAR KEYWORDS (NOT LOCUS/FEATURES/ORIGIN) eg VERSION, ACCESSION, SOURCE, REFERENCE
			// 	// lastObj = parseKeyword(line, gb);
			// }  else if ( isSubKey ) {       // REGULAR SUBKEYWORD, NOT FEATURE eg AUTHOR, ORGANISM
			// 	//console.log(line);
			// 	// tmp = gb.getLastKeyword();
			// 	// lastObj = parseSubKeyword(tmp, line, gb);
			// } else if ( isKeyRunon ) {      // RUNON LINES FOR NON-FEATURES
			// 	//console.log(line);
			// 	//console.log(line);
			// 	// lastObj.setValue(lastObj.getValue() + Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line));
			// 	// lastObj.appendValue(Teselagen.StringUtil.rpad("\n"," ",13) + Ext.String.trim(line), gb);
			// } else {
			// 	// console.warn("Parsing GenBank File: This line has been ignored: " + line);
			// 	// gb.addMessage("This line has been ignored: " + line);
			// 	//console.log(line);
			// }
		}

	}

	// doneParsingOrigin();


	postProcessCurSeq();

	var seq = curSeq;
	reset();


	// console.profileEnd();


	return seq;
};





function parseOrigin(line, key) {
	if (key !== ORIGIN_TAG) {
		_originContent += line;
	}
}

// function doneParsingOrigin(line, key) {
// 	var a = _originContent.replace(/[\s\d]/g,"");
// 	curSeq.sequence.push(a);
// }


// function parseOrigin(line, key) {
// 	if (key !== ORIGIN_TAG) {
// 		line = line.replace(/[\s]*[0-9]*/g,"");
// 		curSeq.sequence.push(line);
// 	}
// }

// function parseOrigin(line, key) {
// 	if (key !== ORIGIN_TAG) {
// 		line = line.replace(/[\s\d]/g,"");
// 		_curSeq__sequence.push(line);
// 	}
// }






function parseLocus(line) {
	var result, locusName, seqLen, strand, naType, linear, div, date;
	var lineArr = line.split(/[\s]+/g);

	if (lineArr.length <= 1) {
		console.warn("Parsing GenBank File: WARNING! Locus line contains no values!");
	}

	locusName = VE.ParserUtil.reformatName(lineArr[1]);


	// Sequence Length and bp
	seqLen = "";
	for (var i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/^bp$/gi)) {
			seqLen = parseInt(lineArr[i-1]);
		}
	}


	// StrandType: T.H. Code defaults only to ds-DNA
	strand = "";
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/^ss/gi)) {
			strand = "ss";
		} else if (lineArr[i].match(/^ds/gi)) {
			strand = "ds";
		}
	}


	// naType: T.H. defaults to DNA.
	naType = "";
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/DNA$/gi)) {
			naType = "DNA";
		} else if (lineArr[i].match(/RNA$/gi)) {
			naType = "RNA";
		}
	}


	// Linear vs Circular?; CANNOT HANDLE TANDEM
	linear = true;
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/circular/gi)) {
			linear = false;
		}
	}

	// Date and Div
	// Date is in this format:1-APR-2012
	for (i=1; i < lineArr.length; i++) {
		if (lineArr[i].match(/-[A-Z]{3}-/g)) {
			date = lineArr[i];
		}
		if (lineArr[i].match(/^[A-Z]{3}/g) && lineArr[i].length === 3 && !lineArr[i].match(/DNA|RNA/g)) {
			div = lineArr[i];
		}
	}


	curSeq.inData.name = locusName;
	curSeq.inData.circular = !linear;

}


function parseFeatures(line, key, val) {
	var result, featElm, featQual, lastElm, strand;

	// FOR THE MAIN FEATURES LOCATION/QUALIFIER LINE
	if (key === FEATURES_TAG) {
		return;
	}
	
	// FOR LOCATION && QUALIFIER LINES

	var isQual		= isQualifier(line);
	var isLineRunon_	= isLineRunon(line);

	//console.log(line);

	if (!isLineRunon_) {    // New Element/Qualifier lines. Not runon lines.
		if ( !isQual ) {    // is a new Feature Element (e.g. source, CDS) in the form of  "[\s] KEY  SEQLOCATION"
			//strand = val.replace(/\(|\)|[\d]+|[.]+|,|>|</g, "");
			if (val.match(/complement/g)) {
				strand = -1;
			} else {
				strand = 1;
			}
			//console.log(line);

			newFeature();
			var feat = getCurrentFeature();
			feat.inData.type = key;
			feat.inData.strand = strand;


			parseFeatureLocation(val);


			lastLineWasLocation = true;

		} else {    // is a FeatureQualifier in the /KEY="BLAH" format; could be multiple per Element
			parseFeatureQualifier(line);
			lastLineWasLocation = false;
		}

	} else {
		if(lastLineWasLocation) {
			parseFeatureLocation(line.trim());

			lastLineWasLocation = true;

		} else {
			getLastFeatureNote().value += line.trim().replace(/\"/g, "");
			lastLineWasLocation = false;

		}

	}

}


function parseFeatureLocation(locStr) {
	
	var parseLocation = VE.ParserUtil.parseGenbankFeatureLocation;

	

	var location;
	var complement = false;
	var join       = false;

	locStr = locStr.trim();

	if (locStr.match(/complement/i) ) {
		complement = true;
	}
	if (locStr.match(/join/i) ) {
		join = true;
	}

	locStr = locStr.replace(/^,|,$|complement|join|\(|\)/g,"");
	locArr = locStr.split(/,/g);


	for (var i=0; i<locArr.length; i++) {
		var ind   = locArr[i].split(/[.]+/);
		var toArr = locArr[i].match(/[.]+|\^/) || [];
		var to    = toArr[0] || "";

		var location = {
			start: ind[0],
			end: ind[1],
			to: to
		};
		location = parseLocation(location);
		var feat = getCurrentFeature();
		feat.inData.locations.push(location);
		//console.log([ind[0],ind[1],to]);
	}
	// if (complement && join) {
	// 	// Do ReverseLocations Case
	// 	// This may not be neccesary with the inclusion of join and complement booleans.
	// }

}


function parseFeatureQualifier(line) {
	var featQual, newLine, lineArr;

	newLine = line.trim();
	newLine = newLine.replace(/^\/|"$/g, "");
	lineArr = newLine.split(/=\"|=/);

	var quoted = false;
	var val = lineArr[1];

	if(val) {
		val = val.replace(/\\/g, " ");

		if (line.match(/=\"/g)) {
			quoted = true;
			val = val.replace(/\".*/g, "");
		} else if (val.match(/^\d+$/g)) {
			val = parseInt(val);
		} else {
			quoted = false;
		}
	}

	var note = {
		inData: {
			name: lineArr[0],
			value: val,
			quoted: quoted
		}
	};

	getCurrentFeature().notes.push(note);
}



function getLineKey(line) {
	 var match;
	if(line.indexOf("=") < 0) {
		match = line.match(/^\s*(\S*)/);
	} else {
		match = line.match(/^\s*([^\=]*)/);
	}
	return match[1];
}




// function getLineVal(line) {
// 	var arr;

// 	if(line.indexOf("=") < 0) {
// 		line = line.replace(/^[\s]*[\S]+[\s]+|[\s]+$/, "");
// 		line = line.trim();
// 		return line;
// 	} else {
// 		arr = line.split(/=/);
// 		return arr[1];
// 	}
// }


function getLineVal(line) {
	var arr;

	if(line.indexOf("=") < 0) {
		line = line.replace(/^\s*\S+\s+|\s+$/, "");
		line = line.trim();
		return line;
	} else {
		arr = line.split('=');
		return arr[1];
	}
}






function isKeyword(line) {
	var isKey = false;
	if ( line.substr(0,10).match(/^\S+/) ) {
		isKey = true;
	}
	return isKey;
}

function isSubKeyword(line) {
	var isSubKey = false;
	if ( line.substr(0,10).match(/^\s+\S+/) ) {
		isSubKey = true;
	}
	return isSubKey;
}

function isKeywordRunon(line) {
	var runon;
	if ( line.substr(0,10).match(/\s{10}/)) {
		runon = true;
	} else {
		runon = false;
	}
	return runon;
}

function isQualifier(line) {
	var qual = false;
	/*if (line.charAt(21) === "/") {//T.H. Hard coded method
			qual = true;
		}*/
	if ( line.trim().charAt(0).match(/\// )) { // searches based on looking for / in beginning of line
		qual = true;
	} else if ( line.match(/^\s*\/\w+=\S+/) ) { // searches based on "   /key=BLAH" regex
		qual = true;
	}
	return qual;
}

function isQualifierRunon(line) {
	var runon = false;
	//if ( Ext.String.trim(line.substr(0,20)) === ""  && !Ext.String.trim(line).charAt(0).match(/\// ) && !isLocationRunon(line) ) {
	if ( line.substr(0,10).trim() === "" && !line.trim().charAt(0).match(/\// ) && !isLocationRunon(line) ) {
		//console.log("qual runon: " + line);
		runon = true;
	}
	return runon;
}

function isLineRunon(line) {
	var trimmed = line.trim();

	// Regex to be applied to the trimmed line to determine if the line
	// contains a prefix like complement( or join( for the definition of the
	// feature location, as per specifications here:
	// ftp://ftp.ncbi.nih.gov/genbank/gbrel.txt
	//
	// Prefixes can be in the form: ^<prefix> (
	// I've made the space after the prefix optional to increase flexibility.
	var prefixRegex = /^(order|join|complement)\s*\(/;

	return line.substr(0,10).trim() === "" && (!trimmed.charAt(0).match(/\//) || trimmed.match(prefixRegex));
}


// /**
//  * isAFeatureLabel
//  * @param {String} name Name of a attribute or qualifier
//  * @return {Boolean} isALabel
//  */
// GenbankParser.isAFeatureLabel = function(name) {
// 	if (name === "label" || name === "name"|| name === "ApEinfo_label" ||
// 		name === "note" || name === "gene" || name === "organism" || name === "locus_tag") {

// 		return true;
// 	} else {
// 		return false;
// 	}
// }



function setType(key, isKey) {
	// if(LASTTYPE === "ORIGIN" && key !== "ORIGIN") {
	// 	doneParsingOrigin();
	// }

	if (key === "LOCUS") {
		LASTTYPE = key;
	} else if (key === "REFERENCE") {
		LASTTYPE = key;
	} else if (key === "FEATURES") {
		LASTTYPE = key;
	} else if (key === "ORIGIN") {
		LASTTYPE = key;
	} else if (key === "//") {
		LASTTYPE = key;
	} else if (isKey === true) {
		LASTTYPE = key;
	}
}














var GenbankParser = VE.GenbankParser = {
	genbankToSerialized: genbankToSerialized,
};






// debugger;















































})();;
(function(){




var FastaParser = VE.FastaParser = {
	curSeq: null,
};


FastaParser.reset = function() {
	this.LASTTYPE = false;
	this.curSeq = null;
};


FastaParser.newSeq = function() {
	this.curSeq = {
		features: [],
		inData: {
			name: '',
			circular: false, // guessing that this is the correct default
		},
		sequence: []
	};
	//this.curFileContent = [];
};


/**
 * @param {String} fasta Fasta file content as a string.
 */
FastaParser.fastaToSerialized = function(fasta) {
	this.reset();

	var lines = fasta.split(/\r?\n/);
	for(var i=0,ii=lines.length;i<ii;i++) {
		var line = lines[i];

		var isHeader = this.isHeader(line);
		if(isHeader) {
			if(this.curSeq) {
				break;
			}
			this.newSeq();
			this.parseHeader(line);

		} else {
			if(!this.curSeq) {
				this.newSeq();
			}
			this.parseSequenceLine(line);

		}
	}

	this.postProcessCurSeq();

	var seq = this.curSeq;
	this.curSeq = null;
	return seq;
};


FastaParser.isHeader = function(line) {
	if(line[0] === '>') {
		return true;
	}
	return false;
}

FastaParser.parseHeader = function(line) {
	this.curSeq.inData.name = this.headerToName(line);
}

FastaParser.headerToName = function(line) {
	return VE.ParserUtil.reformatName(line.slice(1));
}


FastaParser.parseSequenceLine = function(line) {
	
	// Not sure if this is needed, but http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml says
	// that the sequence can be interspersed with numbers and/or spaces.
	line = line.replace(/[\s]*[0-9]*/g,"");

	// It appears that our sequences are all lower case, so make sure that the sequence is lower case.
	line = line.toLowerCase();

	this.curSeq.sequence.push(line);
}



FastaParser.postProcessCurSeq = function() {
	var curSeq = this.curSeq;

	// curSeq.sequence = curSeq.sequence.join('').split('');
	curSeq.sequence = curSeq.sequence.join('');
}













































})();;
(function(){



var StringUtil = {
	/** Trims white space at beginning and end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	trim: function(line) {
		return line.replace(/^\s+|\s+$/g,"");
	},

	/** Trims white space at beginning string
	 * @param {String} line
	 * @returns {String} line
	 */
	ltrim: function(line) {
		return line.replace(/^\s+/,"");
	},

	/** Trims white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rtrim: function(line) {
		return line.replace(/\s+$/,"");
	},

	/** Pads white space at beginning of string
	 * @param {String} line
	 * @returns {String} line
	 */
	lpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = padString + str;
		return str;
	},

	/** Pads white space at end of string
	 * @param {String} line
	 * @returns {String} line
	 */
	rpad: function(line, padString, length) {
		var str = line;
		while (str.length < length)
			str = str + padString;
		return str;
	}
};





var ParserUtil = VE.ParserUtil = {};



ParserUtil.serializedToGenbank = function(serSeq) {
	
	function cutUpArray(val, start, end) {
		return val.slice(start, end).join('');
	}

	function cutUpStr(val, start, end) {
		return val.slice(start, end);
	}

	var cutUp = (typeof serSeq.sequence === 'string') ? cutUpStr : cutUpArray;


	var lines = [];
	lines.push(this.createGenbankLocus(serSeq));
	

	if(serSeq.features.length > 0) {
		lines.push("FEATURES             Location/Qualifiers");

		for(var i=0;i<serSeq.features.length;i++) {
			var feat = serSeq.features[i];
			lines.push(this.featureToGenbankString(feat));
		}

	}


	lines.push("ORIGIN      ");
	for (var i=0 ; i < serSeq.sequence.length; i=i+60) {
		var line = [];
		var ind = StringUtil.lpad( (""+(i+1))," ", 9);
		line.push(ind);

		for (var j=i; j < i+60; j=j+10) {
			// line.push(serSeq.sequence.slice(j,j+10).join(''));
			line.push(cutUp(serSeq.sequence, j, j+10));
		}
		lines.push(line.join(' '));
	}

	lines.push('//');

	return lines.join('\r\n');
};

ParserUtil.createGenbankLocus = function (serSeq) {
	var tmp;

	var naType = 'DNA'; // change if we support other types of sequences
	var date = this.getCurrentDateString();

	var line = StringUtil.rpad("LOCUS"," ", 12);
	line += StringUtil.rpad(serSeq.inData.name," ", 16);
	line += " "; // T.H line 2778 of GenbankFormat.as col 29 space
	line += StringUtil.lpad(String(serSeq.sequence.length)," ", 11);
	line += " bp "; // col 41
	// if (this.strandType !== "") {
	// 	tmp =  this.strandType + "-";
	// } else {
		tmp = "";
	// }
	line += StringUtil.lpad(tmp, " ", 3);
	line += StringUtil.rpad(naType," ",6);
	line += "  ";

	if (serSeq.inData.circular === false) {
		line += "linear  ";
		//line += "        ";
	} else {
		line += "circular";
	}

	line += " "; //col 64
	// if (this.divisionCode !== undefined) {
	// 	line += StringUtil.rpad(this.divisionCode," ", 3);
	// } else {
		StringUtil.rpad(line, " ", 3);
	// }
	line += " "; // col 68
	// DOES NOT PARSE DATE USEFULLY ORIGINALLY!
	line += date;
	//line += "\n";

	return line;
};

ParserUtil.getCurrentDateString = function() {
	var date = new Date();
	date = date.toString().split(' ');
	var day = date[2];
	var month = date[1].toUpperCase();
	var year = date[3];
	return day+'-'+month+'-'+year;
}


ParserUtil.parseGenbankFeatureLocation = function(location) {
	var retval = {};
	if (location.start !== undefined) {
		retval.start  = parseInt((location.start).toString().replace(/\<|\>/, ""));
	}
	if (location.end !== undefined) {
		retval.end    = parseInt((location.end).toString().replace(/\<|\>/, ""));
	} else {
		retval.end = retval.start;  // If there is no end, make it the same as start
		retval.to  = "..";
	}
	if (location.to) {
		retval.to          = location.to;
		// This joins the start and end. start..
	}
	return retval;
}


ParserUtil.postProcessGenbankFeature = function(feat) {
	var name = null;
	var nameIndex = null;

	var hasName = false;
	var usingLabel = false;
	var usingGene = false;

	for(var j=0;j<feat.notes.length;j++) {
		var note = feat.notes[j];
		var key = note.inData.name;
		var value = note.inData.value;

		// SET THE LABEL FIELD. DO NOT STORE AS AN ATTRIBUTE

		if (this.isAGenbankFeatureLabel(key)) {
			// Priority for name attributes is: 'label' > 'gene' > 'organism'.
			// We check to see if the current name is from a lower-priority
			// attribute. If it is, we store it as an attribute and then
			// replace it with the current higher-priority attribute.

			if(key === "label") {
				// Label has top priority.
				
				name = value;
				nameIndex = j;

				usingLabel = true;
			} else if(key === "gene") {

				// If we're not using the label for the name, use the
				// current 'gene' attribute. If we are using label for
				// the name, just save the current attribute as a normal
				// attribute.
				if(!usingLabel) {
					
					name = value;
					nameIndex = j;

					usingGene = true;
				}
			} else if(!usingLabel && !usingGene) {
				// If we don't have a label from either a 'gene' or a
				// 'label' field, use the current field as the name.

				name = value;
				nameIndex = j;

			}

			hasName = true;
		}
	}

	feat.inData.name = name || "";
	if(nameIndex !== null) {
		feat.notes.splice(nameIndex, 1);
	}

	
	if(feat.inData.locations.length > 0) {
		// var loc = feat.inData.locations[0];
		// feat.inData.start = loc.start;
		// feat.inData.end = loc.end;

		var start = 999999999999999999999;
		var end = 0;
		var locs = feat.inData.locations;
		for(var i=0;i<locs.length;i++) {
			var loc = locs[i];
			start = Math.min(start, loc.start);
			end = Math.max(end, loc.end);
		}
		feat.inData.start = start;
		feat.inData.end = end;

	} else {
		feat.inData.start = null;
		feat.inData.end = null;
	}

	return feat;
}



/**
 * isAFeatureLabel
 * @param {String} name Name of a attribute or qualifier
 * @return {Boolean} isALabel
 */
ParserUtil.isAGenbankFeatureLabel = function(name) {
	if (name === "label" || name === "name"|| name === "ApEinfo_label" ||
		name === "note" || name === "gene" || name === "organism" || name === "locus_tag") {

		return true;
	} else {
		return false;
	}
}


ParserUtil.featureNoteInDataToGenbankString = function(noteInData) {
	if(noteInData.quoted) {
		return StringUtil.lpad("/", " ", 22) + noteInData.name + "=\"" + noteInData.value + "\"";
	} else {
		return StringUtil.lpad("/"," ", 22) + noteInData.name + "=" + noteInData.value ;
	}
}

ParserUtil.featureToGenbankString = function(feat) {
	var lines = [];

	var line = "     " + StringUtil.rpad(feat.inData.type, " ", 16);
	var locStr = [];

	for(var i=0;i<feat.inData.locations.length;i++) {
		var loc = feat.inData.locations[i];
		locStr.push(loc.start + '..' + loc.end);
	}
	locStr = locStr.join(',');

	if(feat.inData.strand === -1) {
		locStr = "complement(" + locStr + ")";
	}

	lines.push(line + locStr);

	lines.push(this.featureNoteInDataToGenbankString({
		name: 'label',
		value: feat.inData.name,
		quoted: true
	}));

	for(var i=0;i<feat.notes.length;i++) {
		var noteInData = feat.notes[i].inData;
		lines.push(this.featureNoteInDataToGenbankString(noteInData));
	}

	return lines.join('\r\n');
}


ParserUtil.detectXMLFormat = function(data) {
	// use DOM parser from xml-for-cocoonjs.js as web workers can't access the DOM
	var DOMParser = domParser;

	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(data, "text/xml");
	var diff = xmlDoc.getElementsByTagName("seq:seq");
	if(diff.length === 0) {diff = xmlDoc.getElementsByTagName("seq");}
	// var json = xml2json(data);
	
	if (diff.length > 0) {
		// JBEI-SEQ
		return {
			format: 'JBEI',
			xml: xmlDoc
		};
	} else {
		// SBOL
		return {
			format: 'SBOL',
			xml: xmlDoc
		};
	}
}


// not really tested
ParserUtil.removeXmlTagNamespaces = function(str) {
	return str.replace(/\<(\/?)\w+\:/g, "<$1");
}


ParserUtil.serSeqToSeqData = function(serSeq) {
	var data = {
		dateCreated: "",
		dateModified: "",
		description: "",
		firstTimeImported: true,
		name: serSeq.inData.name,
		partSource: serSeq.inData.name,
		part_id: "",
		sequenceFileContent: "",
		sequenceFileFormat: "Genbank",
		sequenceFileName: serSeq.inData.name,
		serialize: serSeq,
		size: serSeq.sequence.length,
		strain_id: "",
		user_id: "",
		ve_metadata: "",
	};
	
	data.hash = asmCrypto.SHA256.hex(ParserUtil.serializedToGenbank(serSeq));

	return data;
}



ParserUtil.readFile = function(file, cb) {
	var reader = new FileReader();
	reader.onloadend = function() {
		var content = reader.result;
		return cb(content);
	};
	reader.readAsBinaryString(file);
};



/**
 * Reformat name to be only alphanumeric with underscores "_" or hyphens "-".
 * Replaces special characters with underscores.
 *(REFACTORED FROM DEVICEDESIGNMANAGER)
 * @param {String} pName
 * @returns {String} New name.
 */
ParserUtil.reformatName = function(pName) {
	return pName.toString().replace(/[^a-zA-Z0-9_\-]/g, "_");
}




















































})();;
(function(){





var SequenceParser = VE.SequenceParser = {
	


	parseSequenceFile: function(file, cb) {
		var name = file.name;
		var ext = this.extractFileExtension(name);

		if(/^(fasta|fas|fa|fna|ffn)$/.test(ext)) { // FASTA
			this.importFastaFile(file, cb);

		} else if(/^(gb|gbk|seq)$/.test(ext)) { // GENBANK
			this.importGenbankFile(file, cb);

		} else if(/^(json)$/.test(ext)) { // JSON
			this.importJsonFile(file, cb);
			
		} else if(/^(xml|rdf)$/.test(ext)) { // XML/RDF
			this.importXmlFile(file, cb);
			
		} else {
			cb(null, 'Unrecognized file extension "' + ext + '".');
		}

	},


	importGenbankFile: function(file, cb) {
		VE.ParserUtil.readFile(file, function(content) {
			var serSeq = VE.GenbankParser.genbankToSerialized(content);
			var sequence = VE.Sequence.deserialize(serSeq);
			cb(sequence, null);
		});
	},



	importFastaFile: function(file, cb) {
		VE.ParserUtil.readFile(file, function(content) {
			var serSeq = VE.FastaParser.fastaToSerialized(content);
			var sequence = VE.Sequence.deserialize(serSeq);
			cb(sequence, null);
		});
	},

	importJsonFile: function(file, cb) {
		console.error('TODO');
		cb(null, 'TODO')
	},

	importXmlFile: function(file, cb) {
		console.error('TODO');
		cb(null, 'TODO')
	},


	extractFileExtension: function(name) {
		var ext = "";
		var match = name.match(/\.(\w+)$/);
		if(match&&match[1]) { ext = match[1]; }
		return ext;
	},




};




_.extend(SequenceParser, Backbone.Events);


SequenceParser.on(VE.IoEvent.PARSE_SEQUENCE_FROM_FILE, function(file, cb) {
	SequenceParser.parseSequenceFile(file, cb);
});



	

	

	

	
	

	

	

	

	

	

	

	

	


})();;
(function(){




VE.VectorEditor = function(args) {
	
	// var enzymeGroupName = 'common';
	// // var enzymeGroupName = 'rebase';
	// VE.RestrictionEnzymeManager.loadEnzymes(enzymeGroupName, function() {
		
	// 	VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
	// });

	initializeRestrictionEnzymes();


	var renderTo = args.renderTo;
	var sequence = args.sequence;
	var options = args.options;

	if(!renderTo) {
		throw new Error("`renderTo` argument required.");
	}
	if(!sequence) {
		throw new Error("`sequence` argument required.");
	}

	sequence.needsRecalc__orfs = true;
	sequence.needsRecalc__cutSites = true;

	var ve = this.ve = new VE.Ve();

	if(typeof options === 'object') {
		for(var x in options) {
			ve.options[x] = options[x];
		}
	}

	// var vePanel = ve.vePanel = this.vePanel = new VE.VePanel({
	// 	parentEl: renderTo,
	// 	ve: ve,
	// }).render();

	var vePanel = ve.vePanel = this.vePanel = new VE.VePanel({
		parentEl: renderTo,
		ve: ve,
	}).render();



	var annotateContainerArgs = {
		phonyScrollContainer: vePanel.annotatePanel.phonyScrollContainer,
		model: sequence,
		ve: ve,
	};

	var pieContainerArgs = {
		el: vePanel.vectorPanel.bodyEl[0],
		model: sequence,
		ve: ve,
	};

	var railContainerArgs = {
		el: vePanel.vectorPanel.bodyEl[0],
		model: sequence,
		ve: ve,
	};

	for(var x in ve.options) {
		annotateContainerArgs[x] = pieContainerArgs[x] = railContainerArgs[x] = ve.options[x];
	}

	var annotateContainer = this.annotateContainer = new VE.AnnotateContainer(annotateContainerArgs);
	var pieContainer = this.pieContainer = new VE.PieContainer(pieContainerArgs);
	var railContainer = this.railContainer = new VE.RailContainer(railContainerArgs);

	annotateContainer.render();
	pieContainer.render();
	railContainer.render();


};










function initializeRestrictionEnzymes() {
	var RestrictionEnzyme = Bio.RestrictionEnzyme;
	var enzymeGroupName = 'common';

	var enzymes = [
		new RestrictionEnzyme({
			"name": "AatII",
			"site": "gacgtc",
			"cutType": 0,
			"forwardRegex": "gacgtc",
			"reverseRegex": "gacgtc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "AvrII",
			"site": "cctagg",
			"cutType": 0,
			"forwardRegex": "c{2}tag{2}",
			"reverseRegex": "c{2}tag{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BamHI",
			"site": "ggatcc",
			"cutType": 0,
			"forwardRegex": "g{2}atc{2}",
			"reverseRegex": "g{2}atc{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BglII",
			"site": "agatct",
			"cutType": 0,
			"forwardRegex": "agatct",
			"reverseRegex": "agatct",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "BsgI",
			"site": "gtgcag",
			"cutType": 0,
			"forwardRegex": "gtgcag",
			"reverseRegex": "ctgcac",
			"dsForward": 22,
			"dsReverse": 20
		}),
		new RestrictionEnzyme({
			"name": "EagI",
			"site": "cggccg",
			"cutType": 0,
			"forwardRegex": "cg{2}c{2}g",
			"reverseRegex": "cg{2}c{2}g",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "EcoRI",
			"site": "gaattc",
			"cutType": 0,
			"forwardRegex": "ga{2}t{2}c",
			"reverseRegex": "ga{2}t{2}c",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "EcoRV",
			"site": "gatatc",
			"cutType": 0,
			"forwardRegex": "gatatc",
			"reverseRegex": "gatatc",
			"dsForward": 3,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "HindIII",
			"site": "aagctt",
			"cutType": 0,
			"forwardRegex": "a{2}gct{2}",
			"reverseRegex": "a{2}gct{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "KpnI",
			"site": "ggtacc",
			"cutType": 0,
			"forwardRegex": "g{2}tac{2}",
			"reverseRegex": "g{2}tac{2}",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "MseI",
			"site": "ttaa",
			"cutType": 0,
			"forwardRegex": "t{2}a{2}",
			"reverseRegex": "t{2}a{2}",
			"dsForward": 1,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "NcoI",
			"site": "ccatgg",
			"cutType": 0,
			"forwardRegex": "c{2}atg{2}",
			"reverseRegex": "c{2}atg{2}",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "NdeI",
			"site": "catatg",
			"cutType": 0,
			"forwardRegex": "catatg",
			"reverseRegex": "catatg",
			"dsForward": 2,
			"dsReverse": 4
		}),
		new RestrictionEnzyme({
			"name": "NheI",
			"site": "gctagc",
			"cutType": 0,
			"forwardRegex": "gctagc",
			"reverseRegex": "gctagc",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "NotI",
			"site": "gcggccgc",
			"cutType": 0,
			"forwardRegex": "gcg{2}c{2}gc",
			"reverseRegex": "gcg{2}c{2}gc",
			"dsForward": 2,
			"dsReverse": 6
		}),
		new RestrictionEnzyme({
			"name": "PstI",
			"site": "ctgcag",
			"cutType": 0,
			"forwardRegex": "ctgcag",
			"reverseRegex": "ctgcag",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "PvuI",
			"site": "cgatcg",
			"cutType": 0,
			"forwardRegex": "cgatcg",
			"reverseRegex": "cgatcg",
			"dsForward": 4,
			"dsReverse": 2
		}),
		new RestrictionEnzyme({
			"name": "SacI",
			"site": "gagctc",
			"cutType": 0,
			"forwardRegex": "gagctc",
			"reverseRegex": "gagctc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "SacII",
			"site": "ccgcgg",
			"cutType": 0,
			"forwardRegex": "c{2}gcg{2}",
			"reverseRegex": "c{2}gcg{2}",
			"dsForward": 4,
			"dsReverse": 2
		}),
		new RestrictionEnzyme({
			"name": "SalI",
			"site": "gtcgac",
			"cutType": 0,
			"forwardRegex": "gtcgac",
			"reverseRegex": "gtcgac",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "SmaI",
			"site": "cccggg",
			"cutType": 0,
			"forwardRegex": "c{3}g{3}",
			"reverseRegex": "c{3}g{3}",
			"dsForward": 3,
			"dsReverse": 3
		}),
		new RestrictionEnzyme({
			"name": "SpeI",
			"site": "actagt",
			"cutType": 0,
			"forwardRegex": "actagt",
			"reverseRegex": "actagt",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "SphI",
			"site": "gcatgc",
			"cutType": 0,
			"forwardRegex": "gcatgc",
			"reverseRegex": "gcatgc",
			"dsForward": 5,
			"dsReverse": 1
		}),
		new RestrictionEnzyme({
			"name": "XbaI",
			"site": "tctaga",
			"cutType": 0,
			"forwardRegex": "tctaga",
			"reverseRegex": "tctaga",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "XhoI",
			"site": "ctcgag",
			"cutType": 0,
			"forwardRegex": "ctcgag",
			"reverseRegex": "ctcgag",
			"dsForward": 1,
			"dsReverse": 5
		}),
		new RestrictionEnzyme({
			"name": "XmaI",
			"site": "cccggg",
			"cutType": 0,
			"forwardRegex": "c{3}g{3}",
			"reverseRegex": "c{3}g{3}",
			"dsForward": 1,
			"dsReverse": 5
		})
	];

	VE.RestrictionEnzymeManager.enzymeGroups[enzymeGroupName] = enzymes;

	VE.RestrictionEnzymeManager.currentUserEnzymeGroupName = enzymeGroupName;
}










































})();