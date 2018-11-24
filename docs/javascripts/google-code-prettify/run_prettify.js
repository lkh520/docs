!function(){/*

 Copyright (C) 2013 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function(){function e(e){function t(){try{a.doScroll("left")}catch(e){return void n.setTimeout(t,50)}l("poll")}function l(t){"readystatechange"==t.type&&"complete"!=r.readyState||(("load"==t.type?n:r)[u](d+t.type,l,!1),!o&&(o=!0)&&e.call(n,t.type||t))}var s=r.addEventListener,o=!1,i=!0,c=s?"addEventListener":"attachEvent",u=s?"removeEventListener":"detachEvent",d=s?"":"on";if("complete"==r.readyState)e.call(n,"lazy");else{if(r.createEventObject&&a.doScroll){try{i=!n.frameElement}catch(e){}i&&t()}r[c](d+"DOMContentLoaded",l,!1),r[c](d+"readystatechange",l,!1),n[c](d+"load",l,!1)}}function t(){d&&e(function(){var e=h.length;m(e?function(){for(var t=0;t<e;++t)(function(e){n.setTimeout(function(){n.exports[h[e]].apply(n,arguments)},0)})(t)}:void 0)})}for(var n=window,r=document,a=r.documentElement,l=r.head||r.getElementsByTagName("head")[0]||a,s="",o=r.getElementsByTagName("script"),i=o.length;0<=--i;){var c=o[i],u=c.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(u){s=u[1]||"",c.parentNode.removeChild(c);break}}var d=!0,p=[],f=[],h=[];for(s.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n),t=decodeURIComponent(t),"autorun"==t?d=!/^[0fn]/i.test(n):"lang"==t?p.push(n):"skin"==t?f.push(n):"callback"==t&&h.push(n)}),i=0,s=p.length;i<s;++i)(function(){var e=r.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){!e||e.readyState&&!/loaded|complete/.test(e.readyState)||(e.onerror=e.onload=e.onreadystatechange=null,--g,g||n.setTimeout(t,0),e.parentNode&&e.parentNode.removeChild(e),e=null)},e.type="text/javascript",e.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(p[i])+".js",l.insertBefore(e,l.firstChild)})(p[i]);for(var g=p.length,o=[],i=0,s=f.length;i<s;++i)o.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(f[i])+".css");o.push("/javascripts/google-code-prettify/prettify.css"),function(e){function t(a){if(a!==n){var s=r.createElement("link");s.rel="stylesheet",s.type="text/css",a+1<n&&(s.error=s.onerror=function(){t(a+1)}),s.href=e[a],l.appendChild(s)}}var n=e.length;t(0)}(o);var m=function(){"undefined"!=typeof window&&(window.PR_SHOULD_USE_CONTINUATION=!0);var e;return function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=d[n])?t:"0"<=n&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function r(e){var r=e.substring(1,e.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));e=[];var a="^"===r[0],l=["["];a&&l.push("^");for(var a=a?1:0,s=r.length;a<s;++a){var o=r[a];if(/\\[bdsw]/i.test(o))l.push(o);else{var i,o=t(o);a+2<s&&"-"===r[a+1]?(i=t(r[a+2]),a+=2):i=o,e.push([o,i]),65>i||122<o||(65>i||90<o||e.push([32|Math.max(65,o),32|Math.min(i,90)]),97>i||122<o||e.push([Math.max(97,o)&-33,Math.min(i,122)&-33]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],s=[],a=0;a<e.length;++a)o=e[a],o[0]<=s[1]+1?s[1]=Math.max(s[1],o[1]):r.push(s=o);for(a=0;a<r.length;++a)o=r[a],l.push(n(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&l.push("-"),l.push(n(o[1])));return l.push("]"),l.join("")}function a(e){for(var t=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=t.length,o=[],i=0,c=0;i<a;++i){var u=t[i];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(u<=c?o[u]=-1:t[i]=n(u))}for(i=1;i<o.length;++i)-1===o[i]&&(o[i]=++l);for(c=i=0;i<a;++i)u=t[i],"("===u?(++c,o[c]||(t[i]="(?:")):"\\"===u.charAt(0)&&(u=+u.substring(1))&&u<=c&&(t[i]="\\"+o[u]);for(i=0;i<a;++i)"^"===t[i]&&"^"!==t[i+1]&&(t[i]="");if(e.ignoreCase&&s)for(i=0;i<a;++i)u=t[i],e=u.charAt(0),2<=u.length&&"["===e?t[i]=r(u):"\\"!==e&&(t[i]=u.replace(/[a-zA-Z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(e&-33,32|e)+"]"}));return t.join("")}for(var l=0,s=!1,o=!1,i=0,c=e.length;i<c;++i){var u=e[i];if(u.ignoreCase)o=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=!0,o=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[],i=0,c=e.length;i<c;++i){if(u=e[i],u.global||u.multiline)throw Error(""+u);p.push("(?:"+a(u)+")")}return new RegExp(p.join("|"),o?"gi":"g")}function n(e,t){function n(e){var i=e.nodeType;if(1==i){if(!r.test(e.className)){for(i=e.firstChild;i;i=i.nextSibling)n(i);i=e.nodeName.toLowerCase(),"br"!==i&&"li"!==i||(a[o]="\n",s[o<<1]=l++,s[o++<<1|1]=e)}}else 3!=i&&4!=i||(i=e.nodeValue,i.length&&(i=t?i.replace(/\r\n?/g,"\n"):i.replace(/[ \t\r\n]+/g," "),a[o]=i,s[o<<1]=l,l+=i.length,s[o++<<1|1]=e))}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],l=0,s=[],o=0;return n(e),{a:a.join("").replace(/\n$/,""),c:s}}function r(e,t,n,r,a){n&&(e={h:e,l:1,j:null,m:null,a:n,c:null,i:t,g:null},r(e),a.push.apply(a,e.g))}function a(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r&&w.test(n.nodeValue)?e:t;return t===e?void 0:t}function l(e,n){function a(e){for(var t=e.i,i=e.h,u=[t,"pln"],d=0,p=e.a.match(l)||[],f={},h=0,g=p.length;h<g;++h){var m,y=p[h],v=f[y],b=void 0;if("string"==typeof v)m=!1;else{var w=s[y.charAt(0)];if(w)b=y.match(w[1]),v=w[0];else{for(m=0;m<o;++m)if(w=n[m],b=y.match(w[1])){v=w[0];break}b||(v="pln")}!(m=5<=v.length&&"lang-"===v.substring(0,5))||b&&"string"==typeof b[1]||(m=!1,v="src"),m||(f[y]=v)}if(w=d,d+=y.length,m){m=b[1];var x=y.indexOf(m),S=x+m.length;b[2]&&(S=y.length-b[2].length,x=S-m.length),v=v.substring(5),r(i,t+w,y.substring(0,x),a,u),r(i,t+w+x,m,c(v,m),u),r(i,t+w+S,y.substring(S),a,u)}else u.push(t+w,v)}e.g=u}var l,s={};!function(){for(var r=e.concat(n),a=[],o={},i=0,c=r.length;i<c;++i){var u=r[i],d=u[3];if(d)for(var p=d.length;0<=--p;)s[d.charAt(p)]=u;u=u[1],d=""+u,o.hasOwnProperty(d)||(a.push(u),o[d]=null)}a.push(/[\0-\uffff]/),l=t(a)}();var o=n.length;return a}function s(e){var t=[],n=[];e.tripleQuotedStrings?t.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;if(r&&(e.cStyleComments?(1<r?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push(["com",/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push(["com",/^\/\/[^\r\n]*/,null]),n.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null])),r=e.regexLiterals){var a=(r=1<r?"":"\n\r")?".":"[\\S\\s]";n.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+r+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+a+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+a+")*(?:\\x5D|$))+/")+")")])}return(r=e.types)&&n.push(["typ",r]),r=(""+e.keywords).replace(/^ | $/g,""),r.length&&n.push(["kwd",new RegExp("^(?:"+r.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push(["pln",/^\s+/,null," \r\n\t\xa0"]),r="^.[^\\s\\w.$@'\"`/\\\\]*",e.regexLiterals&&(r+="(?!s*/)"),n.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(r),null]),l(t,n)}function o(e,t,n){function r(e){var t=e.nodeType;if(1!=t||l.test(e.className)){if((3==t||4==t)&&n){var i=e.nodeValue,c=i.match(s);c&&(t=i.substring(0,c.index),e.nodeValue=t,(i=i.substring(c.index+c[0].length))&&e.parentNode.insertBefore(o.createTextNode(i),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName.toLowerCase())a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=t(a,1),l=e.nextSibling;a.appendChild(r);for(var s=l;s;s=l)l=s.nextSibling,a.appendChild(s)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;e=t(e.nextSibling,0);for(var n;(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var l=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,o=e.ownerDocument,i=o.createElement("li");e.firstChild;)i.appendChild(e.firstChild);for(var c=[i],u=0;u<c.length;++u)r(c[u]);t===(0|t)&&c[0].setAttribute("value",t);var d=o.createElement("ol");d.className="linenums",t=Math.max(0,t-1|0)||0;for(var u=0,p=c.length;u<p;++u)i=c[u],i.className="L"+(u+t)%10,i.firstChild||i.appendChild(o.createTextNode("\xa0")),d.appendChild(i);e.appendChild(d)}function i(e,t){for(var n=t.length;0<=--n;){var r=t[n];S.hasOwnProperty(r)?d.console&&console.warn("cannot override language handler %s",r):S[r]=e}}function c(e,t){return e&&S.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),S[e]}function u(e){var t=e.j;try{var r=n(e.h,e.l),a=r.a;e.a=a,e.c=r.c,e.i=0,c(t,a)(e);var l=/\bMSIE\s(\d+)/.exec(navigator.userAgent),l=l&&8>=+l[1],t=/\n/g,s=e.a,o=s.length,r=0,i=e.c,u=i.length,a=0,p=e.g,f=p.length,h=0;p[f]=o;var g,m;for(m=g=0;m<f;)p[m]!==p[m+2]?(p[g++]=p[m++],p[g++]=p[m++]):m+=2;for(f=g,m=g=0;m<f;){for(var y=p[m],v=p[m+1],b=m+2;b+2<=f&&p[b+1]===v;)b+=2;p[g++]=y,p[g++]=v,m=b}p.length=g;var w=e.h;e="",w&&(e=w.style.display,w.style.display="none");try{for(;a<u;){var x,S=i[a+2]||o,C=p[h+2]||o,b=Math.min(S,C),N=i[a+1];if(1!==N.nodeType&&(x=s.substring(r,b))){l&&(x=x.replace(t,"\r")),N.nodeValue=x;var E=N.ownerDocument,_=E.createElement("span");_.className=p[h+1];var k=N.parentNode;k.replaceChild(_,N),_.appendChild(N),r<S&&(i[a+1]=N=E.createTextNode(s.substring(b,S)),k.insertBefore(N,_.nextSibling))}r=b,r>=S&&(a+=2),r>=C&&(h+=2)}}finally{w&&(w.style.display=e)}}catch(e){d.console&&console.log(e&&e.stack||e)}}var d="undefined"!=typeof window?window:{},p=["break,continue,do,else,for,if,return,while"],f=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],h=[f,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],g=[f,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],m=[f,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],f=[f,"abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],y=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],v=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],b=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,w=/\S/,x=s({keywords:[h,m,g,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",y,v,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),S={};i(x,["default-code"]),i(l([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" ")),i(l([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),i(l([],[["atv",/^[\s\S]+/]]),["uq.val"]),i(s({keywords:h,hashComments:!0,cStyleComments:!0,types:b}),"c cc cpp cxx cyc m".split(" ")),i(s({keywords:"null,true,false"}),["json"]),i(s({keywords:m,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:b}),["cs"]),i(s({keywords:g,cStyleComments:!0}),["java"]),i(s({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),i(s({keywords:y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),i(s({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),i(s({keywords:v,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),i(s({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),i(s({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),i(l([],[["str",/^[\s\S]+/]]),["regex"]);var C=d.PR={createSimpleLexer:l,registerLangHandler:i,sourceDecorator:s,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,n){n=n||!1,t=t||null;var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&o(r,n,!0),u({j:t,m:n,h:r,l:1,a:null,i:null,c:null,g:null}),r.innerHTML},prettyPrint:e=function(e,t){function n(){for(var t=d.PR_SHOULD_USE_CONTINUATION?f.now()+250:1/0;h<s.length&&f.now()<t;h++){for(var r=s[h],i=x,c=r;c=c.previousSibling;){var p=c.nodeType,S=(7===p||8===p)&&c.nodeValue;if(S?!/^\??prettify\b/.test(S):3!==p||/\S/.test(c.nodeValue))break;if(S){i={},S.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){i[t]=n});break}}if(c=r.className,(i!==x||m.test(c))&&!y.test(c)){for(p=!1,S=r.parentNode;S;S=S.parentNode)if(w.test(S.tagName)&&S.className&&m.test(S.className)){p=!0;break}if(!p){if(r.className+=" prettyprinted",p=i.lang,!p){var C,p=c.match(g);!p&&(C=a(r))&&b.test(C.tagName)&&(p=C.className.match(g)),p&&(p=p[1])}if(v.test(r.tagName))S=1;else var S=r.currentStyle,N=l.defaultView,S=(S=S?S.whiteSpace:N&&N.getComputedStyle?N.getComputedStyle(r,null).getPropertyValue("white-space"):0)&&"pre"===S.substring(0,3);N=i.linenums,(N="true"===N||+N)||(N=!!(N=c.match(/\blinenums\b(?::(\d+))?/))&&(!N[1]||!N[1].length||+N[1])),N&&o(r,N,S),u({j:p,h:r,m:N,l:S,a:null,i:null,c:null,g:null})}}}h<s.length?d.setTimeout(n,250):"function"==typeof e&&e()}for(var r=t||document.body,l=r.ownerDocument||document,r=[r.getElementsByTagName("pre"),r.getElementsByTagName("code"),r.getElementsByTagName("xmp")],s=[],i=0;i<r.length;++i)for(var c=0,p=r[i].length;c<p;++c)s.push(r[i][c]);var r=null,f=Date;f.now||(f={now:function(){return+new Date}});var h=0,g=/\blang(?:uage)?-([\w.]+)(?!\S)/,m=/\bprettyprint\b/,y=/\bprettyprinted\b/,v=/pre|xmp/i,b=/^code$/i,w=/^(?:pre|code|xmp)$/i,x={};n()}},h=d.define;"function"==typeof h&&h.amd&&h("google-code-prettify",[],function(){return C})}(),e}();g||n.setTimeout(t,0)}()}();