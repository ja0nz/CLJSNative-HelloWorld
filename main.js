if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


var g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function l(){l=function(){};h.Symbol||(h.Symbol=aa)}var ba=0;function aa(a){return"jscomp_symbol_"+(a||"")+ba++}
function m(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&g(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(this)}});m=function(){}}function ca(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function da(a){m();a={next:a};a[h.Symbol.iterator]=function(){return this};return a}
function ea(a,b){m();a instanceof String&&(a+="");var d=0,c={next:function(){if(d<a.length){var e=d++;return{value:b(e,a[e]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c}for(var n=h,p=["Array","prototype","keys"],q=0;q<p.length-1;q++){var r=p[q];r in n||(n[r]={});n=n[r]}var t=p[p.length-1],u=n[t],v=u?u:function(){return ea(this,function(a){return a})};v!=u&&null!=v&&g(n,t,{configurable:!0,writable:!0,value:v});
function fa(){var a=Symbol,b=typeof a;"object"!=b||!a||a instanceof Array||a instanceof Object||(b=Object.prototype.toString.call(a))};function w(a,b){this.a=[];this.b=b;for(var d=!0,c=a.length-1;0<=c;c--){var e=a[c]|0;d&&e==b||(this.a[c]=e,d=!1)}}var x={};function y(a){if(-128<=a&&128>a){var b=x[a];if(b)return b}b=new w([a|0],0>a?-1:0);-128<=a&&128>a&&(x[a]=b);return b}function z(a){if(isNaN(a)||!isFinite(a))return A;if(0>a)return B(z(-a));for(var b=[],d=1,c=0;a>=d;c++)b[c]=a/d|0,d*=C;return new w(b,0)}var C=4294967296,A=y(0),D=y(1),E=y(16777216);
function F(a){if(-1==a.b)return-F(B(a));for(var b=0,d=1,c=0;c<a.a.length;c++)var e=G(a,c),b=b+(0<=e?e:C+e)*d,d=d*C;return b}w.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(H(this))return"0";if(-1==this.b)return"-"+B(this).toString(a);for(var b=z(Math.pow(a,6)),d=this,c="";;){var e=I(d,b),f=J(e,b),d=d.add(B(f)),f=((0<d.a.length?d.a[0]:d.b)>>>0).toString(a),d=e;if(H(d))return f+c;for(;6>f.length;)f="0"+f;c=""+f+c}};
function G(a,b){return 0>b?0:b<a.a.length?a.a[b]:a.b}function H(a){if(a.b)return!1;for(var b=0;b<a.a.length;b++)if(a.a[b])return!1;return!0}function K(a,b){a=a.add(B(b));return-1==a.b?-1:H(a)?0:1}function B(a){for(var b=a.a.length,d=[],c=0;c<b;c++)d[c]=~a.a[c];return(new w(d,~a.b)).add(D)}
w.prototype.add=function(a){for(var b=Math.max(this.a.length,a.a.length),d=[],c=0,e=0;e<=b;e++){var f=c+(G(this,e)&65535)+(G(a,e)&65535),k=(f>>>16)+(G(this,e)>>>16)+(G(a,e)>>>16),c=k>>>16,f=f&65535,k=k&65535;d[e]=k<<16|f}return new w(d,d[d.length-1]&-2147483648?-1:0)};
function J(a,b){if(H(a)||H(b))return A;if(-1==a.b)return-1==b.b?J(B(a),B(b)):B(J(B(a),b));if(-1==b.b)return B(J(a,B(b)));if(0>K(a,E)&&0>K(b,E))return z(F(a)*F(b));for(var d=a.a.length+b.a.length,c=[],e=0;e<2*d;e++)c[e]=0;for(e=0;e<a.a.length;e++)for(var f=0;f<b.a.length;f++){var k=G(a,e)>>>16,R=G(a,e)&65535,S=G(b,f)>>>16,T=G(b,f)&65535;c[2*e+2*f]+=R*T;L(c,2*e+2*f);c[2*e+2*f+1]+=k*T;L(c,2*e+2*f+1);c[2*e+2*f+1]+=R*S;L(c,2*e+2*f+1);c[2*e+2*f+2]+=k*S;L(c,2*e+2*f+2)}for(e=0;e<d;e++)c[e]=c[2*e+1]<<16|c[2*
e];for(e=d;e<2*d;e++)c[e]=0;return new w(c,0)}function L(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535}
function I(a,b){if(H(b))throw Error("division by zero");if(H(a))return A;if(-1==a.b)return-1==b.b?I(B(a),B(b)):B(I(B(a),b));if(-1==b.b)return B(I(a,B(b)));if(30<a.a.length){if(-1==a.b||-1==b.b)throw Error("slowDivide_ only works with positive integers.");for(var d=D;0>=K(b,a);)d=M(d),b=M(b);var c=N(d,1),e=N(b,1),f;b=N(b,2);for(d=N(d,2);!H(b);)f=e.add(b),0>=K(f,a)&&(c=c.add(d),e=f),b=N(b,1),d=N(d,1);return c}for(d=A;0<=K(a,b);){c=Math.max(1,Math.floor(F(a)/F(b)));e=Math.ceil(Math.log(c)/Math.LN2);
e=48>=e?1:Math.pow(2,e-48);f=z(c);for(var k=J(f,b);-1==k.b||0<K(k,a);)c-=e,f=z(c),k=J(f,b);H(f)&&(f=D);d=d.add(f);a=a.add(B(k))}return d}function M(a){for(var b=a.a.length+1,d=[],c=0;c<b;c++)d[c]=G(a,c-0)<<1|G(a,c-0-1)>>>31;return new w(d,a.b)}function N(a,b){var d=b>>5;b%=32;for(var c=a.a.length-d,e=[],f=0;f<c;f++)e[f]=0<b?G(a,f+d)>>>b|G(a,f+d+1)<<32-b:G(a,f+d);return new w(e,a.b)};if("undefined"===typeof ga)var ga={};if("undefined"===typeof ha)var ha=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof ia)var ia=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};if("undefined"===typeof ja)var ja=null;"undefined"!==typeof Symbol&&fa();
var O="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var d=a&65535,c=b&65535;return d*c+((a>>>16&65535)*c+d*(b>>>16&65535)<<16>>>0)|0};function P(a){a=O(a|0,-862048943);a=0^(O(a<<15|a>>>-15,461845907)|0);a=(O(a<<13|a>>>-13,5)+-430675100|0)^0;a=O(a^a>>>16,-2048144789);O(a^a>>>13,-1028477387)}P(1);P(0);var Q=require("react"),ka=require("react-native"),la=require("expo"),U=Q.createFactory,V=Q.createClass,W=la.registerRootComponent,X,Y=ka.Text;X=U.c?U.c(Y):U.call(null,Y);var ma={flex:1,fontSize:18,paddingTop:80,textAlign:"center"},Z=function(){var a={render:function(){return new X({style:ma},"Hello from Cljs")}};return V.c?V.c(a):V.call(null,a)}();W.c?W.c(Z):W.call(null,Z);