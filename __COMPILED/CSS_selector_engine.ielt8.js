/* MIT License (c) copyright Egor Halimonenko (termi1uc1@gmail.com|github.com/termi) */
;(function(){
var i=void 0,m=!0,r=null,s=!1,u=window;
function aa(a,d,e,j,f,k,J,p,z){var O=e||[],c=!!f,n=!c&&d&&"number"==typeof d.length&&d.nodeType===i,t=c&&(d={})||(!d?document:n?d[0]:d),A,w=0,b,K,h,H=ba[a[1]||""]||0,W=2<H,L=a[2],P=!!L,E=a[3],T=!!E,F=a[4],M=!!F,ca="*"===L,q,X,v,g,l,B,da,I,N,R,C,x;P&&((L=ca?i:L.replace("|",":").toUpperCase())||(P=s));if(M&&(F=F.replace(ea," "),!y||1!==H))da=RegExp(F.replace(D,G));if(I=a[5]){I=fa.call(I,"][");for(q=-1;v=I[++q];)if(v=I[q]=v.match(ga),v[0]=i,v[2]=ha[v[2]],(l=v[3])&&" i"==l.substr(l.length-2))v[3]=l.substr(0,
l.length-2),v[4]=m}if(a=a[6]){a=fa.call(a,":");for(q=-1;g=a[++q];)if(a[q]=g=g.match(ia),g[0]=i,l=g[1]=ja[g[1]],2>l&&g[2])ka.test(g[2])?"even"===g[2]?g[2]=[i,2]:"odd"===g[2]?g[2]=[i,2,"%",1]:(g[2]=g[2].match(la),g[2][0]=i):g[2]=[i,0,"%",g[2]],g[3]=l?"nodeIndexLast":"nodeIndex",g[4]=l?"lastChild":"firstChild",g[5]=l?"previousSibling":"nextSibling";else if(17===l){if(!z)throw Error("SYNTAX_ERR");c=m;f=n?d:[d];a[q]=i}1==a.length&&a[0]===i&&(a=i)}c&&(H=0);if(1==H)if(T){if(ma){f=document.getElementsByName(E);
N=[];for(q=-1;b=f[++q];)b.id==E&&N.push(b)}else{N=[];for(f=[];b=document.getElementById(E);)f.push(b),b.id==E&&N.push(b),b.setAttribute("id",E+" _");for(q=-1;b=f[++q];)b.setAttribute("id",E)}f=T=i}else M=M&&!y,P=P&&y&&!!F;n=(!n||1===d.length)&&!j&&!I&&!a&&!P&&!M&&!T&&!p;do{switch(H){case 0:b=f[0];break;case 1:if(E)if(f=[],N.length)for(q=-1;b=N[++q];){if(t===document||t.contains(b))f.push(b),N.splice(q--,1)}else return O;else"BODY"===L&&9===t.nodeType?(f=[t.body],M=!!F,n=n&&!M):f=!F||!y?t.getElementsByTagName(L||
"*"):"getElementsByClassName"in t?t.getElementsByClassName(F):y.call(t,F);b=f[0];break;case 2:f=t.children;b=f[0];break;case 3:A=d[w+1];case 4:if(!(b=Q(t)))continue}if(n)return f;z=0;if(b){do if((!ca||1===b.nodeType)&&!(j&&(X=b.sourceIndex)in e)){if(c=!(P&&(K=b.nodeName.toUpperCase())!==L||T&&b.id!==E||M&&(!b.className||!da.test(b.className)))){if(I){q=-1;for(R=b.attributes;c&&(v=I[++q])&&(c=(x=v[1])in R);)if(h=x in na?na[x](b):(h=R[x])&&(h.specified||x in oa)&&""!==h.nodeValue?h.nodeValue:r,C=v[2],
h===r)c=8===C;else switch(v[4]&&(h=h.toUpperCase()),B=v[3],C){case 1:c=!!h||""===h;break;case 2:c=h===B;break;case 3:case 8:c=RegExp("(^| +)"+B+"($| +)").test(h);8===C&&(c=!c);break;case 4:case 5:case 6:l=h.indexOf(B);c=6===C?~l:5===C?l==h.length-B.length:!l;break;case 7:c=h===B||!!~h.indexOf(B+"-");break;case 9:c=!!~(" "+h.replace(pa," ")+" ").indexOf(" "+B+" ")}}if(c&&a)for(q=-1;c&&(g=a[++q]);)switch(l=g[1],l){case 0:case 1:if(!l&&!g[3])break;B=g[3];h=g[4];R=g[5];g=g[2];x=b[B]||0;C=g[3]?("%"===
g[2]?-1:1)*g[3]:0;l=g[1];if(x)c=!l?!(x+C):!((x+C)%l);else{c=s;h=b.parentNode[h];do if(1==h.nodeType&&(h[B]=++x)&&b===h&&(!l?!(x+C):!((x+C)%l)))c=m;while(!c&&(h=h[R]))}break;case 2:case 3:for(h=b;(h=h.previousSibling)&&1!==h.nodeType;);c=!h;if(!c||3==l){for(;(h=W?4===H?i:b===A?i:Q(b):f[++z])&&h.parentNode==b.parentNode;);!W&&4!==H&&--z;break}case 4:c=!Q(b);break;case 5:c="HTML"==(K||b.nodeName.toUpperCase());break;case 6:c=!b.firstChild;break;case 7:c=!!b.checked;break;case 8:c=b.lang==g||S.lang==
g;break;case 9:case 10:c="disabled"in b&&"form"in b&&(10==l?b.disabled===m&&"hidden"!==b.type:b.disabled===s);break;case 11:c=b.parentNode.selectedIndex&&!!b.selected;break;case 12:c=!!~(b.textContent||b.data||b.innerText||b.nodeValue||b.value||"").indexOf(a[2]);break;case 13:case 14:c=U.call(b,a[2]);13==l&&(c=!c);break;case 15:case 16:K||(K=b.nodeName.toUpperCase());c=("INPUT"==K||"TEXTAREA"==K||qa.call(b.__getAttribute__||b.getAttribute,b,"contenteditable")!==r)&&!b.a;16==l&&(c=!c);break;case 18:c=
b==t.ownerDocument.activeElement;break;default:throw Error("SYNTAX_ERR");}}if(c){if(k)return[b];if(p){O[w]=b;break}else j?O[X]=b:(J&&(J[X]=m),O.push(b))}K=i}while(b=W?4===H?i:b===A?i:Q(b):f[++z])}b=i}while(t=d[++w]);return O}
function ra(a,d,e){var j=!!e&&this===document,f=[],k,J,p,z,e=j?e:this;if(sa)try{if(j&&ta)return V(ua.call(document,a,e));p=(J="number"==typeof e.length&&e.nodeType===i)?e[0]:e;z=0;do if(k=(d?p==document?va:sa:p==document?ua:wa).call(p,a),d||k.length){if(d)return k;f=f.concat(xa.call(k))}while(J&&(p=e[++z]));return V(f)}catch(O){f=[]}var a=ya.call(a.replace(za,"$1")),c,n=m,j=s,t;J=!!document.querySelector.__noorder__||!!document.querySelectorAll.__noorder__;z=a.replace(Aa,"@=").replace(Ba,"-child\\($1%$2\\)").match(Ca);
var A,w;for(k=e;c=z.shift();){a=z[0];p=!a||","===a.charAt(0);if(!j)if(n&&"nodeType"in e&&9===e.nodeType&&"BODY"===c.toUpperCase())k=[e.body],p&&(f=k);else if(n&&":root"===c)k=[S],p&&(f=k);else if(k&&(!(e=k)||0===k.length))k=r,j=m;else{if(k=!J&&p&&(t||!!a||1<e.length))t=m;k=(c=c.match(Da))?aa(c,e,p&&!A?f:[],k,r,d&&p&&!A,s,A,n):[];if(A){for(n=w.length;0<n--;)k[n]||(k.splice(n,1),w.splice(n,1));if(p&&w.length){if(d)return w[0];f=f.concat(w)}}if(c&&c[7]!==i&&k.length&&!p){A=m;w=[];c=-1;for(n=k.length;++c<
n;)w.push(k[c])}}if(d&&p&&k.length)return k[0];if(n=p)!f.length&&k&&(t=s,f=V(k)),k=r,e=this,j=s,A&&(w=A=i);if(!a||","===a)break}return t?V(f):f}u.Element||((u.Element=ActiveXObject).prototype.ie=m);u.HTMLElement||(u.HTMLElement=u.Element);u.Node||(u.Node=u.Element);
var Y=u.Element.prototype,D=/\s*(\S+)\s*/g,G="(?=(^|.*\\s)$1(\\s|$))",Ea=/^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,za=/\s*([,>+~ ])\s*/g,Aa=/\~\=/g,Ca=/(^|,|\>|\+|~| ).*?(?=[,>+~ ]|$)/g,ea=/\./g,pa=/\s/g,Da=/^([,>+~ ])?([\w\-\|\*]*)\#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?:\:([^!]+))?(!)?$/,ga=/^\[?['"]?(.*?)['"]?(?:([\*~&\^\$\@!]?=)['"]?(.*?)['"]?)?\]?$/,ia=/^([^(]+)(?:\\\((.+)\\\))?$/,Ba=/\-child\((\dn)\+(\d)\)/g,la=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,Fa=/([,>+~ ])/,Ga=/^\s+/,Ha=/\s/,ka=/\D/,ba=
{"":1," ":1,",":1,">":2,"~":3,"+":4},ha={"":1,"=":2,"&=":3,"^=":4,"$=":5,"*=":6,"|=":7,"!=":8,"@=":9},ja={"nth-child":0,"nth-last-child":1,"only-child":2,"first-child":3,"last-child":4,root:5,empty:6,checked:7,lang:8,enabled:9,disabled:10,selected:11,contains:12,not:13,matches:14,"read-only":15,"read-write":16,scope:17,focus:18,"nth-match":19,column:20,"nth-column":21},na={href:function(a){return qa.call(a.__getAttribute__||a.getAttribute,a,"href",2)}},oa={coords:1,id:1,name:1},S=document.documentElement;
function V(a){for(var d=a.length>>>0,e=new Z,j=0;j<d;j++)j in a&&e.push(a[j]);return e}
var ma=m,Q="nextElementSibling"in S?function(a){return a.nextElementSibling}:function(a){for(;(a=a.nextSibling)&&1!=a.nodeType;);return a},ya=String.prototype.trim||function(){for(var a=this.replace(Ga,""),d=a.length;Ha.test(a.charAt(--d)););return a.slice(0,d+1)},fa=String.prototype.split,Ia,$,y=i,xa=Array.prototype.slice,Z,U,qa=Function.prototype.call,sa=S.querySelector,wa=S.querySelectorAll,va=document.querySelector,ua=document.querySelectorAll,ta=s;Z=function(){};Z.prototype=[];$=new Z;$.push(1);
!$.length&&!("NodeList"in u)&&($=document.createElement("iframe"),$.style.display="none",document.body.appendChild($),$.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),Z=u.NodeList);y||(Ia=function(a){var d=[],e=this.all,j,f=-1;if(e.length)for(a=RegExp((a+"").replace(D,G));j=e[++f];)j.className&&a.test(j.className)&&d.push(j);return d});
U=S.matches||S.webkitMatchesSelector||S.mozMatchesSelector||S.msMatchesSelector||S.oMatchesSelector?function(a){if(!a)return s;if("*"===a||":root"===a&&this===S||"body"===a&&this===document.body)return m;var d,e,j=s;if(!Fa.test(a)&&(d=this.parentNode)&&"querySelector"in d)j=d.querySelector(a)===this;if(!j&&(d=this.ownerDocument))for(e in a=d.querySelectorAll(a),a)if(Object.prototype.hasOwnProperty.call(a,e)&&(j=a[e]===this))return m;return j}:function(a){if(!a)return s;if("*"===a||this===S&&":root"===
a||this===document.body&&"BODY"===a.toUpperCase())return m;var d,e,j=s,f,a=ya.call(a);if(d=a.match(Ea))switch(a.charAt(0)){case "#":return this.id===a.slice(1);default:return(j=!(e=d[2])||this.className&&RegExp(e.replace(ea," ").replace(D,G)).test(this.className))&&!(e=d[1])||this.tagName&&this.tagName.toUpperCase()===e.toUpperCase()}else{if(Fa.test(a)){e=ra.call(this.ownerDocument,a);for(f in e)if(Object.prototype.hasOwnProperty.call(e,f)&&(j=e[f]===this))return m;return s}e=aa(a.match(Da),r,s,r,
this,m);return e[0]===this}};$="matchesSelector";S[$]||(Y.matches=S.matches=Y[$]=S[$]=U);$="matches";$ in Y||(Y[$]=document.documentElement[$]=Y.matchesSelector);$="querySelectorAll";Y[$]=S[$]=document[$]=function(a,d){return ra.call(this,a,s,d)};$="querySelector";Y[$]=S[$]=document[$]=function(a,d){return ra.call(this,a,m,d)||r};$="getElementsByClassName";document[$]||(Y[$]=S[$]=document[$]=Ia);Y=$=i;
})();