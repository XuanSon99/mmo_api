(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdc4c50e"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,c,l,u){var p=r+t.length,d=c.length,f=o;return void 0!==l&&(l=n(l),f=s),i.call(u,f,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(p);case"<":s=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return n;if(o>d){var u=a(o/10);return 0===u?n:u<=d?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):n}s=c[o-1]}return void 0===s?"":s}))}},1148:function(t,e,r){"use strict";var n=r("a691"),a=r("577e"),i=r("1d80");t.exports=function(t){var e=a(i(this)),r="",s=n(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(r+=e);return r}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var s=t.apply(e,r);function o(t){n(s,a,i,o,c,"next",t)}function c(t){n(s,a,i,o,c,"throw",t)}o(void 0)}))}}},2532:function(t,e,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),s=r("577e"),o=r("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~s(i(this)).indexOf(s(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("577e"),s=r("d039"),o=r("ad6d"),c="toString",l=RegExp.prototype,u=l[c],p=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(p||d)&&n(RegExp.prototype,c,(function(){var t=a(this),e=i(t.source),r=t.flags,n=i(void 0===r&&t instanceof RegExp&&!("flags"in l)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),s=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("d039"),i=r("825a"),s=r("a691"),o=r("50c4"),c=r("577e"),l=r("1d80"),u=r("8aa5"),p=r("0cb2"),d=r("14c3"),f=r("b622"),v=f("replace"),h=Math.max,m=Math.min,g=function(t){return void 0===t?t:String(t)},_=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),y=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));n("replace",(function(t,e,r){var n=b?"$":"$0";return[function(t,r){var n=l(this),a=void 0==t?void 0:t[v];return void 0!==a?a.call(t,n,r):e.call(c(n),t,r)},function(t,a){var l=i(this),f=c(t);if("string"===typeof a&&-1===a.indexOf(n)&&-1===a.indexOf("$<")){var v=r(e,l,f,a);if(v.done)return v.value}var _="function"===typeof a;_||(a=c(a));var b=l.global;if(b){var y=l.unicode;l.lastIndex=0}var k=[];while(1){var C=d(l,f);if(null===C)break;if(k.push(C),!b)break;var x=c(C[0]);""===x&&(l.lastIndex=u(f,o(l.lastIndex),y))}for(var w="",N=0,P=0;P<k.length;P++){C=k[P];for(var E=c(C[0]),T=h(m(s(C.index),f.length),0),S=[],I=1;I<C.length;I++)S.push(g(C[I]));var A=C.groups;if(_){var M=[E].concat(S,T,f);void 0!==A&&M.push(A);var L=c(a.apply(void 0,M))}else L=p(E,f,T,S,A,a);T>=N&&(w+=f.slice(N,T)+L,N=T+E.length)}return w+f.slice(N)}]}),!y||!_||b)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("577e"),i=r("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t){return function(e){var r=a(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5e89":function(t,e,r){var n=r("861d"),a=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&a(t)===t}},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==r&&n(s=i.prototype)&&s!==r.prototype&&a(t,s),t}},"8ba4":function(t,e,r){var n=r("23e7"),a=r("5e89");n({target:"Number",stat:!0},{isInteger:a})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(M){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),s=new S(n||[]);return i._invoke=N(t,r,s),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=l;var p="suspendedStart",d="suspendedYield",f="executing",v="completed",h={};function m(){}function g(){}function _(){}var b={};c(b,i,(function(){return this}));var y=Object.getPrototypeOf,k=y&&y(y(I([])));k&&k!==r&&n.call(k,i)&&(b=k);var C=_.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(a,i,s,o){var c=u(t[a],t,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"===typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,s,o)}),(function(t){r("throw",t,s,o)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,o)}))}o(c.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function N(t,e,r){var n=p;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw i;return A()}r.method=a,r.arg=i;while(1){var s=r.delegate;if(s){var o=P(s,r);if(o){if(o===h)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?v:d,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=_,c(C,"constructor",_),c(_,"constructor",g),g.displayName=c(_,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,o,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var s=new w(l(e,r,n,a),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(C),c(C,o,"Generator"),c(C,i,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),i=r("a691"),s=r("50c4"),o=r("7b0b"),c=r("65f0"),l=r("8418"),u=r("1dde"),p=u("splice"),d=Math.max,f=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var r,n,u,p,m,g,_=o(this),b=s(_.length),y=a(t,b),k=arguments.length;if(0===k?r=n=0:1===k?(r=0,n=b-y):(r=k-2,n=f(d(i(e),0),b-y)),b+r-n>v)throw TypeError(h);for(u=c(_,n),p=0;p<n;p++)m=y+p,m in _&&l(u,p,_[m]);if(u.length=n,r<n){for(p=y;p<b-n;p++)m=p+n,g=p+r,m in _?_[g]=_[m]:delete _[g];for(p=b;p>b-n+r;p--)delete _[p-1]}else if(r>n)for(p=b-n;p>y;p--)m=p+n-1,g=p+r-1,m in _?_[g]=_[m]:delete _[g];for(p=0;p<r;p++)_[p+y]=arguments[p+2];return _.length=b-n+r,u}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),s=r("6eeb"),o=r("5135"),c=r("c6b6"),l=r("7156"),u=r("d9b5"),p=r("c04e"),d=r("d039"),f=r("7c73"),v=r("241c").f,h=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,_="Number",b=a[_],y=b.prototype,k=c(f(y))==_,C=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,a,i,s,o,c,l=p(t,"number");if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,n)}return+l};if(i(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(k?d((function(){y.valueOf.call(r)})):c(r)!=_)?l(new b(C(e)),r,w):C(e)},N=n?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;N.length>P;P++)o(b,x=N[P])&&!o(w,x)&&m(w,x,h(b,x));w.prototype=y,y.constructor=w,s(a,_,w)}},ab13:function(t,e,r){var n=r("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},b680:function(t,e,r){"use strict";var n=r("23e7"),a=r("a691"),i=r("408a"),s=r("1148"),o=r("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},p=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=function(t,e,r){var n=-1,a=r;while(++n<6)a+=e*t[n],t[n]=a%1e7,a=l(a/1e7)},f=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=l(n/e),n=n%e*1e7},v=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+s.call("0",7-n.length)+n}return r},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,r,n,o,c=i(this),l=a(t),h=[0,0,0,0,0,0],m="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=p(c*u(2,69,1))-69,r=e<0?c*u(2,-e,1):c/u(2,e,1),r*=4503599627370496,e=52-e,e>0){d(h,0,r),n=l;while(n>=7)d(h,1e7,0),n-=7;d(h,u(10,n,1),0),n=e-1;while(n>=23)f(h,1<<23),n-=23;f(h,1<<n),d(h,1,1),f(h,2),g=v(h)}else d(h,0,r),d(h,1<<-e,0),g=v(h)+s.call("0",l);return l>0?(o=g.length,g=m+(o<=l?"0."+s.call("0",l-o)+g:g.slice(0,o-l)+"."+g.slice(o-l))):g=m+g,g}})},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"home"},[t._m(0),r("section",{staticClass:"relative"},[r("div",{staticClass:"mowtainer"},[r("div",{staticClass:"mowgrid grid-top"},[r("div",{staticClass:"item exchange"},[r("div",{staticClass:"flex"},t._l(t.tabs,(function(e,n){return r("div",{key:n,class:{tab:!0,active:t.tab==n},on:{click:function(e){t.tab=n}}},[t._v(" "+t._s(e)+" ")])})),0),0==t.tab?r("div",{staticClass:"pd-30"},[r("label",[t._v("Tôi muốn trao đổi")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_vnd,expression:"buy_vnd"}],staticClass:"exchange-input",attrs:{type:"text"},domProps:{value:t.buy_vnd},on:{input:[function(e){e.target.composing||(t.buy_vnd=e.target.value)},t.buyVND],focus:t.unFormatBuy,blur:function(e){t.buy_vnd=t.formatVNPrice(t.buy_vnd)}}}),r("div",{staticClass:"unit"},[r("v-select",{staticClass:"mt-7",attrs:{dense:"",solo:"",items:t.p2p_currency_list},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".png",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".png",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}],null,!1,1240150460),model:{value:t.p2p_currency.buy,callback:function(e){t.$set(t.p2p_currency,"buy",e)},expression:"p2p_currency.buy"}})],1)]),r("label",[t._v("Tôi sẽ nhận được≈")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_usdt,expression:"buy_usdt"}],staticClass:"exchange-input",attrs:{type:"text"},domProps:{value:t.buy_usdt},on:{input:[function(e){e.target.composing||(t.buy_usdt=e.target.value)},t.buyUSDT]}}),r("div",{staticClass:"unit"},[r("v-select",{staticClass:"mt-7",attrs:{dense:"",solo:"",items:t.p2p_token_list},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}],null,!1,2440878364),model:{value:t.p2p_token.buy,callback:function(e){t.$set(t.p2p_token,"buy",e)},expression:"p2p_token.buy"}})],1)]),r("div",{staticClass:"d-flex align-center"},[r("span",[t._v("Giá ước tính: 1 "+t._s(t.p2p_token.buy.toUpperCase())+" ≈ "+t._s(t.formatPrice(t.buy_price))+" "+t._s(t.p2p_currency.buy.toUpperCase()))]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(2)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1),r("div",{staticClass:"detail-price"},[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/img/logo.png",alt:""}}),r("h3",[t._v("Chợ OTC VN")]),r("h4",[r("span",[t._v("Giá mua:")]),"usdt"==t.p2p_token.buy&&"vnd"==t.p2p_currency.buy?r("b",[t._v(t._s(t.formatVNPrice(t.buy_price)))]):r("b",[t._v(t._s(t.formatPrice(t.buy_price)))])])]),r("div",{staticClass:"item"},[r("img",{attrs:{src:"/img/binance.png",alt:""}}),r("h3",[t._v("P2P Binance")]),r("h4",[r("span",[t._v("Giá mua:")]),"usdt"==t.p2p_token.buy&&"vnd"==t.p2p_currency.buy?r("b",[t._v(t._s(t.formatVNPrice(t.buy_price+5)))]):r("b",[t._v(t._s(t.formatPrice(t.buy_price)))])])])]),r("a",{staticClass:"btn-all",attrs:{href:"https://t.me/chootcvn",target:"_blank"}},[t._v("Mua miễn phí")])]):r("div",{staticClass:"pd-30"},[r("label",[t._v("Tôi muốn trao đổi")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.sell_usdt,expression:"sell_usdt"}],staticClass:"exchange-input",attrs:{type:"text"},domProps:{value:t.sell_usdt},on:{input:[function(e){e.target.composing||(t.sell_usdt=e.target.value)},t.sellUSDT]}}),r("div",{staticClass:"unit"},[r("v-select",{staticClass:"mt-7",attrs:{dense:"",solo:"",items:t.p2p_token_list},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}]),model:{value:t.p2p_token.sell,callback:function(e){t.$set(t.p2p_token,"sell",e)},expression:"p2p_token.sell"}})],1)]),r("label",[t._v("Tôi sẽ nhận được≈")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.sell_vnd,expression:"sell_vnd"}],staticClass:"exchange-input",attrs:{type:"text"},domProps:{value:t.sell_vnd},on:{input:[function(e){e.target.composing||(t.sell_vnd=e.target.value)},t.sellVND],focus:t.unFormatSell,blur:function(e){t.sell_vnd=t.formatVNPrice(t.sell_vnd)}}}),r("div",{staticClass:"unit"},[r("v-select",{staticClass:"mt-7",attrs:{dense:"",solo:"",items:t.p2p_currency_list},scopedSlots:t._u([{key:"selection",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".png",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[r("img",{attrs:{src:"/img/p2p/"+e.item+".png",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}]),model:{value:t.p2p_currency.sell,callback:function(e){t.$set(t.p2p_currency,"sell",e)},expression:"p2p_currency.sell"}})],1)]),r("div",{staticClass:"d-flex align-center"},[r("span",[t._v("Giá ước tính: 1 "+t._s(t.p2p_token.sell.toUpperCase())+" ≈ "+t._s(t.formatPrice(t.sell_price))+" "+t._s(t.p2p_currency.sell.toUpperCase()))]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(2)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1),r("div",{staticClass:"detail-price"},[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/img/logo.png",alt:""}}),r("h3",[t._v("Chợ OTC")]),r("h4",{staticClass:"sell-price"},[r("span",[t._v("Giá bán:")]),"usdt"==t.p2p_token.sell&&"vnd"==t.p2p_currency.sell?r("b",[t._v(t._s(t.formatVNPrice(t.sell_price)))]):r("b",[t._v(t._s(t.formatPrice(t.sell_price)))])])]),r("div",{staticClass:"item"},[r("img",{attrs:{src:"/img/binance.png",alt:""}}),r("h3",[t._v("P2P Binance")]),r("h4",{staticClass:"sell-price"},[r("span",[t._v("Giá bán:")]),"usdt"==t.p2p_token.sell&&"vnd"==t.p2p_currency.sell?r("b",[t._v(t._s(t.formatVNPrice(t.sell_price-5)))]):r("b",[t._v(t._s(t.formatPrice(t.sell_price)))])])])]),r("a",{staticClass:"btn-all btn-sell",attrs:{href:"https://t.me/chootcvn",target:"_blank"}},[t._v("Bán miễn phí")])])]),r("div",{staticClass:"item pd-30"},[r("div",{staticClass:"space mb-5"},[r("div",{staticClass:"mowtit"},[r("span",[t._v("Tỷ giá ngoại tệ")]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(1)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1),r("v-tabs",{attrs:{right:""},model:{value:t.rate_tab,callback:function(e){t.rate_tab=e},expression:"rate_tab"}},[r("v-tab",{attrs:{value:1}},[t._v("Ngân hàng")]),r("v-tab",{attrs:{value:2}},[t._v("Thế giới")])],1)],1),r("v-tabs-items",{model:{value:t.rate_tab,callback:function(e){t.rate_tab=e},expression:"rate_tab"}},[r("v-tab-item",[r("v-data-table",{attrs:{headers:t.headers.bank,items:t.bank,page:t.page.bank_rate,"items-per-page":9,"hide-default-footer":"","mobile-breakpoint":0},on:{"update:page":function(e){return t.$set(t.page,"bank_rate",e)}},scopedSlots:t._u([{key:"item.buy",fn:function(e){var n=e.item;return[r("span",{staticClass:"up-color"},[t._v(t._s(n.buy))])]}},{key:"item.sell",fn:function(e){var n=e.item;return[r("span",{staticClass:"down-color"},[t._v(t._s(n.sell))])]}}],null,!0)}),r("v-pagination",{staticClass:"pt-3",attrs:{length:Math.ceil(t.bank.length/9)},model:{value:t.page.bank_rate,callback:function(e){t.$set(t.page,"bank_rate",e)},expression:"page.bank_rate"}})],1),r("v-tab-item",[r("v-data-table",{attrs:{headers:t.headers.world,items:t.world,"hide-default-footer":"","mobile-breakpoint":0},scopedSlots:t._u([{key:"item.name",fn:function(e){var r=e.item;return[t._v(" "+t._s(r.from)+" / "+t._s(r.to)+" ")]}},{key:"item.buy",fn:function(e){var n=e.item;return[r("span",[t._v(t._s(n.buy.toFixed(5)))])]}},{key:"item.change",fn:function(e){var n=e.item;return[r("div",{class:{"price-up":n.change>0,"price-down":n.change<0}},[t._v(" "+t._s(Math.abs(n.change))+" % ")])]}}],null,!0)})],1)],1)],1)]),r("div",{staticClass:"mowgrid grid-bot mt-8"},[r("div",{staticClass:"vertical-news"},[r("div",{staticClass:"space mb-6"},[t._m(1),r("v-btn",{attrs:{icon:"",color:"primary",to:"/tin-tuc/huong-dan-nguoi-moi"}},[r("v-icon",[t._v("mdi-arrow-right")])],1)],1),t._l(t.tutorial_post,(function(e,n){return r("div",{key:n,staticClass:"item-news mb-5"},[r("div",{staticClass:"image",on:{click:function(r){return t.toDetail(e.slug)}}},[r("img",{attrs:{src:t.image(e.image),alt:""}})]),r("div",{staticClass:"content"},[r("h3",{on:{click:function(r){return t.toDetail(e.slug)}}},[t._v(t._s(e.title))]),r("span",[r("i",{staticClass:"far fa-calendar-alt"}),t._v(" "+t._s(t.formatTime(e.created_at))+" ")])])])}))],2),r("div",{staticClass:"item pd-30"},[r("div",{staticClass:"space mb-2"},[r("div",{staticClass:"mowtit"},[r("span",[t._v("Giá vàng")]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(5)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1),r("v-btn",{attrs:{text:"",to:"/gia-vang"}},[t._v(" Quy đổi "),r("v-icon",{staticClass:"ml-1",attrs:{size:"20",color:"primary"}},[t._v(" mdi-arrow-right ")])],1)],1),r("v-data-table",{staticClass:"gold-price",attrs:{headers:t.headers.gold,items:t.gold,page:t.page.gold,"items-per-page":8,"hide-default-footer":"","mobile-breakpoint":0},on:{"update:page":function(e){return t.$set(t.page,"gold",e)}},scopedSlots:t._u([{key:"item.buy",fn:function(e){var n=e.item;return["Thế giới"==n.name?r("span",[t._v(" $"+t._s(t.formatPrice(n.buy))+" ")]):r("span",{staticClass:"mr-1"},[t._v(t._s(t.formatVNPrice(n.buy)))]),n.buy_change?r("span",{class:{"price-up":n.buy_change>0,"price-down":n.buy_change<0}},[t._v(" "+t._s(Math.abs(n.buy_change))+" ")]):t._e()]}},{key:"item.sell",fn:function(e){var n=e.item;return["Thế giới"==n.name?r("span",[t._v(" $"+t._s(t.formatPrice(n.sell))+" ")]):r("span",{staticClass:"mr-1"},[t._v(t._s(t.formatVNPrice(n.sell)))]),n.sell_change?r("span",{class:{"price-up":n.sell_change>0,"price-down":n.sell_change<0}},[t._v(" "+t._s(Math.abs(n.sell_change))+" ")]):t._e()]}}],null,!0)}),r("v-pagination",{staticClass:"pt-3",attrs:{length:Math.ceil(t.gold.length/8)},model:{value:t.page.gold,callback:function(e){t.$set(t.page,"gold",e)},expression:"page.gold"}})],1)])]),r("div",{staticClass:"planet"}),r("div",{staticClass:"bgr-planet"})]),r("section",{staticClass:"news relative mt-8"},[r("div",{staticClass:"mowtainer"},[r("div",{staticClass:"space mb-6"},[t._m(2),r("v-btn",{attrs:{icon:"",color:"primary",to:"/tin-tuc/tin-tuc-thi-truong"}},[r("v-icon",[t._v("mdi-arrow-right")])],1)],1),t.market_post[0]?r("div",{staticClass:"mowgrid"},t._l(t.market_post.slice(0,3),(function(e,n){return r("div",{key:n,staticClass:"item"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:t.image(e.image),alt:e.title},on:{click:function(r){return t.toDetail(e.slug)}}})]),r("div",{staticClass:"content"},[r("h2",{on:{click:function(r){return t.toDetail(e.slug)}}},[t._v(t._s(e.title))]),r("div",{staticClass:"space"},[r("p",{staticClass:"author"},[r("i",{staticClass:"fas fa-user-edit"}),r("span",[t._v(t._s(e.author||"Admin"))])]),r("p",{staticClass:"time"},[r("i",{staticClass:"far fa-calendar-alt"}),r("span",[t._v(t._s(t.formatTime(e.created_at)))])])])])])})),0):r("div",{staticClass:"mowgrid"},t._l(6,(function(t){return r("div",{key:t,staticClass:"item loader"})})),0)])]),r("section",{staticClass:"relative mb-8"},[r("div",{staticClass:"mowtainer"},[r("div",{staticClass:"mowgrid grid-2 mt-8"},[r("div",{staticClass:"item pd-30"},[r("div",{staticClass:"space"},[r("div",{staticClass:"mowtit"},[r("span",[t._v("Crypto")]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(3)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1),r("v-responsive",{attrs:{"max-width":"220"}},[r("v-text-field",{attrs:{label:"Tìm kiếm","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),r("v-data-table",{attrs:{headers:t.headers.crypto,items:t.coin_list,search:t.search,page:t.page.usdt_crypto,"items-per-page":17,"hide-default-footer":"","mobile-breakpoint":0},on:{"update:page":function(e){return t.$set(t.page,"usdt_crypto",e)}},scopedSlots:t._u([{key:"item.symbol",fn:function(e){var n=e.item;return[r("div",{staticClass:"align-center"},[r("img",{staticClass:"table-image",attrs:{src:n.image,alt:""}}),r("span",{staticClass:"ml-2"},[t._v(t._s(n.symbol.toUpperCase()))])])]}},{key:"item.price_change_percentage_24h",fn:function(e){var n=e.item;return[r("div",{class:{"price-up":n.price_change_percentage_24h>0,"price-down":n.price_change_percentage_24h<0}},[t._v(" "+t._s(t.formatNumber(Math.abs(n.price_change_percentage_24h)))+" % ")])]}},{key:"item.current_price",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatPrice(r.current_price))+" ")]}}],null,!0)}),r("v-pagination",{staticClass:"pt-3",attrs:{length:Math.ceil(t.coin_list.length/17)},model:{value:t.page.usdt_crypto,callback:function(e){t.$set(t.page,"usdt_crypto",e)},expression:"page.usdt_crypto"}})],1),r("div",[r("div",{staticClass:"item pd-30 mb-8"},[r("div",{staticClass:"space"},[r("div",{staticClass:"mowtit mb-2"},[r("span",[t._v("Lực thị trường")]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(4)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1)]),r("v-data-table",{staticClass:"market-force",attrs:{headers:t.headers.market_force,items:t.market_force,"hide-default-footer":"","mobile-breakpoint":0},scopedSlots:t._u([{key:"item.five_minutes",fn:function(e){var n=e.item;return[r("div",{class:{"up-color":!!n.five_minutes.includes("Mua"),"down-color":!!n.five_minutes.includes("Bán")}},[t._v(" "+t._s(n.five_minutes)+" ")])]}},{key:"item.fifteen_minutes",fn:function(e){var n=e.item;return[r("div",{class:{"up-color":!!n.fifteen_minutes.includes("Mua"),"down-color":!!n.fifteen_minutes.includes("Bán")}},[t._v(" "+t._s(n.fifteen_minutes)+" ")])]}},{key:"item.one_hour",fn:function(e){var n=e.item;return[r("div",{class:{"up-color":!!n.one_hour.includes("Mua"),"down-color":!!n.one_hour.includes("Bán")}},[t._v(" "+t._s(n.one_hour)+" ")])]}}],null,!0)})],1),r("div",{staticClass:"item pd-30"},[r("div",{staticClass:"space"},[r("div",{staticClass:"mowtit mb-2"},[r("span",[t._v("Chứng khoán")]),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"primary"},on:{click:function(e){return t.refreshHandle(6)}}},[r("v-icon",[t._v("mdi-cached")])],1)],1)]),r("v-data-table",{attrs:{headers:t.headers.stock,items:t.stock,page:t.page.stock,"items-per-page":7,"hide-default-footer":"","mobile-breakpoint":0},on:{"update:page":function(e){return t.$set(t.page,"stock",e)}},scopedSlots:t._u([{key:"item.change",fn:function(e){var n=e.item;return[r("span",{class:{"price-up":!!n.change.includes("+"),"price-down":!!n.change.includes("-")}},[t._v(" "+t._s(n.change.substring(1))+" ")]),r("span",[t._v(t._s(n.time))])]}}],null,!0)}),r("v-pagination",{staticClass:"pt-3",attrs:{length:Math.ceil(t.stock.length/7)},model:{value:t.page.stock,callback:function(e){t.$set(t.page,"stock",e)},expression:"page.stock"}})],1)])])]),r("div",{staticClass:"planet2"})])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"banner"},[r("div",{staticClass:"mowtainer"},[r("div",{staticClass:"space"},[r("div",{staticClass:"content"},[r("h1",[t._v(" Cập nhật "),r("br"),r("span",[t._v("tỷ giá")]),t._v(" & "),r("span",[t._v("tin tức "),r("br"),t._v(" thị trường")]),t._v(" nhanh chóng ")])]),r("div",{staticClass:"image"},[r("img",{attrs:{src:"/img/home/banner.gif",alt:""}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mowtit"},[r("span",[t._v("Hướng dẫn người mới")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mowtit"},[r("span",[t._v("Tin tức thị trường")])])}],i=r("1da1"),s=(r("96cf"),r("d3b7"),r("fb6a"),r("a434"),r("99af"),r("a9e3"),r("caad"),r("2532"),r("25f0"),r("b680"),r("ac1f"),r("5319"),r("8ba4"),r("bc3a"),r("c1df")),o={metaInfo:function(){var t={title:"Chợ OTC Việt Nam | Trang chủ"};return t},data:function(){return{search:"",coin_list:[],bank:[],world:[],gold:[],market_force:[],stock:[],sell_price:"",buy_price:"",tabs:["Mua","Bán"],tab:0,buy_usdt:"",buy_vnd:1e7,sell_usdt:100,sell_vnd:"",exchanges:"",headers:{bank:[{text:"Tên",value:"code",sortable:!1},{text:"Giá Mua",value:"buy",sortable:!1},{text:"Chuyển Khoản",value:"transfer",sortable:!1},{text:"Giá Bán",value:"sell",sortable:!1}],world:[{text:"Tên",value:"name",sortable:!1},{text:"Giá",value:"buy",sortable:!1},{text:"Thay đổi",value:"change",sortable:!1}],crypto:[{text:"Tên",value:"symbol",sortable:!1},{text:"Giá",value:"current_price",sortable:!1},{text:"Thay đổi",value:"price_change_percentage_24h"}],gold:[{text:"Tên",value:"name",sortable:!1},{text:"Giá Mua",value:"buy",sortable:!1},{text:"Giá Bán",value:"sell",sortable:!1}],market_force:[{text:"Tên",value:"name",sortable:!1},{text:"Giá",value:"price",sortable:!1},{text:"5m",value:"five_minutes",sortable:!1},{text:"15m",value:"fifteen_minutes",sortable:!1},{text:"1h",value:"one_hour",sortable:!1}],stock:[{text:"Tên",value:"code",sortable:!1},{text:"Giá",value:"price",sortable:!1},{text:"Biến động",value:"change",sortable:!1}]},rate_tab:0,page:{usdt_crypto:1,bank_rate:1,gold:1,stock:1},tutorial_post:[],market_post:[],p2p_token:{buy:"usdt",sell:"usdt"},p2p_token_list:["usdt","btc","eth","busd","bnb","ada"],p2p_currency:{buy:"vnd",sell:"vnd"},p2p_currency_list:["vnd","aud","cad","cny","eur","jpy"]}},mounted:function(){this.getList(),this.getBuyPrice(),this.getSellPrice(),this.getPost()},methods:{getPost:function(){var t=this;this.CallAPI("get","categories/huong-dan-nguoi-moi",{},(function(e){t.tutorial_post=e.data.reverse()})),this.CallAPI("get","categories/tin-tuc-thi-truong",{},(function(e){t.market_post=e.data}))},refreshHandle:function(t){1==t&&(this.bank=[],this.world=[],this.getBank(),this.getWorld()),2==t&&(this.getBuyPrice(),this.getSellPrice()),3==t&&(this.coin_list=[],this.getCoin()),4==t&&(this.market_force=[],this.getMarketForce()),5==t&&(this.gold=[],this.getGold()),6==t&&(this.stock=[],this.getStock())},sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))},getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.CallAPI("get","exchanges",{},(function(e){t.exchanges=e.data.slice(0,19)})),t.getCoin(),t.getBank(),t.getWorld(),t.getMarketForce(),t.getGold(),e.next=8,t.sleep(3e3);case 8:t.getStock();case 9:case"end":return e.stop()}}),e)})))()},getCoin:function(){var t=this;this.CallAPI("get","coins",{},(function(e){t.coin_list=e.data}))},getBank:function(){var t=this;this.CallAPI("get","rate/bank",{},(function(e){t.bank=e.data,t.bank.unshift(e.data[19]),t.bank.splice(-1)}))},getWorld:function(){var t=this;this.CallAPI("get","rate/world",{},(function(e){t.world=e.data}))},getGold:function(){var t=this;this.CallAPI("get","rate/gold",{},(function(e){t.gold=e.data}))},getMarketForce:function(){var t=this;this.CallAPI("get","rate/market-force",{},(function(e){t.market_force=e.data}))},getStock:function(){var t=this;this.CallAPI("get","rate/stock",{},(function(e){t.stock=e.data}))},getBuyPrice:function(){var t=this;this.buy_price=0;var e="p2p?type=buy&asset=".concat(this.p2p_token.buy,"&fiat=").concat(this.p2p_currency.buy);this.CallAPI("get",e,{},(function(e){t.buy_price=Number(e.data.data[0].adv.price),"usdt"==t.p2p_token.buy&&"vnd"==t.p2p_currency.buy&&(t.buy_price=Number(e.data.data[0].adv.price)-5),t.buyVND(),t.buy_vnd.toString().includes(",")||(t.buy_vnd=t.formatVNPrice(t.buy_vnd))}))},getSellPrice:function(){var t=this;this.sell_price=0;var e="p2p?type=sell&asset=".concat(this.p2p_token.sell,"&fiat=").concat(this.p2p_currency.sell);this.CallAPI("get",e,{},(function(e){t.sell_price=Number(e.data.data[0].adv.price),"usdt"==t.p2p_token.sell&&"vnd"==t.p2p_currency.sell&&(t.sell_price=Number(e.data.data[0].adv.price)+5),t.sellUSDT()}))},buyUSDT:function(){this.buy_vnd=this.formatVNPrice(this.buy_usdt*this.buy_price)},buyVND:function(){var t=this.buy_vnd;this.buy_vnd.toString().includes(",")&&(t=this.buy_vnd.replaceAll(",","")),this.buy_usdt=this.formatNumber(t/this.buy_price)},sellUSDT:function(){this.sell_vnd=this.formatVNPrice(this.sell_usdt*this.sell_price)},sellVND:function(){this.sell_usdt=this.formatNumber(this.sell_vnd/this.sell_price)},unFormatBuy:function(){this.buy_vnd=this.buy_vnd.replaceAll(",","")},unFormatSell:function(){this.sell_vnd=this.sell_vnd.replaceAll(",","")},formatPrice:function(t){if(!t)return 0;var e=(t/1).toFixed(2);return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatVNPrice:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},formatNumber:function(t){return Number.isInteger(t)?t:t.toFixed(2)},formatTime:function(t){var e=new Date(t);if(t)return s(e).format("MMMM D, YYYY")},toDetail:function(t){this.$router.push("/bai-viet/"+t)}},watch:{"p2p_token.buy":function(){this.getBuyPrice()},"p2p_currency.buy":function(){this.getBuyPrice()},"p2p_token.sell":function(){this.getSellPrice()},"p2p_currency.sell":function(){this.getSellPrice()}}},c=o,l=r("2877"),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},caad:function(t,e,r){"use strict";var n=r("23e7"),a=r("4d64").includes,i=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),s=r("23cb"),o=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),p=r("1dde"),d=p("slice"),f=u("species"),v=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,u,p=c(this),d=o(p.length),m=s(t,d),g=s(void 0===e?d:e,d);if(i(p)&&(r=p.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(p,m,g);for(n=new(void 0===r?Array:r)(h(g-m,0)),u=0;m<g;m++,u++)m in p&&l(n,u,p[m]);return n.length=u,n}})}}]);