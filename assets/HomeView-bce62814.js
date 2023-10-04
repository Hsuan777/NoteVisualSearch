import{r as Ve,o as po,w as Ao,a as sn,c as fn,b as Je,d as fo,v as mo,F as ns,e as ra,f as oa,t as is,g as go}from"./index-4109407e.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="156",Ye={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},So=0,la=1,_o=2,Ur=1,yo=2,je=3,cn=0,me=1,Qe=2,ln=0,Kn=1,ha=2,ua=3,ca=4,bo=5,jn=100,vo=101,Mo=102,da=103,pa=104,xo=200,To=201,wo=202,Po=203,Lr=204,Vr=205,Eo=206,Co=207,Io=208,Ro=209,Uo=210,Lo=0,Vo=1,Do=2,ks=3,ko=4,No=5,Oo=6,Fo=7,Dr=0,Wo=1,Xo=2,hn=0,Bo=1,Ho=2,zo=3,Go=4,Jo=5,kr=300,qn=301,$n=302,Ns=303,Os=304,Ji=306,Fs=1e3,Re=1001,Ws=1002,Ae=1003,Aa=1004,ss=1005,xe=1006,jo=1007,pi=1008,un=1009,Yo=1010,Qo=1011,js=1012,Nr=1013,rn=1014,on=1015,Ai=1016,Or=1017,Fr=1018,vn=1020,Ko=1021,Ue=1023,Zo=1024,qo=1025,Mn=1026,ti=1027,$o=1028,Wr=1029,tl=1030,Xr=1031,Br=1033,as=33776,rs=33777,os=33778,ls=33779,fa=35840,ma=35841,ga=35842,Sa=35843,el=36196,_a=37492,ya=37496,ba=37808,va=37809,Ma=37810,xa=37811,Ta=37812,wa=37813,Pa=37814,Ea=37815,Ca=37816,Ia=37817,Ra=37818,Ua=37819,La=37820,Va=37821,hs=36492,Da=36494,ka=36495,nl=36283,Na=36284,Oa=36285,Fa=36286,Hr=3e3,xn=3001,il=3200,sl=3201,al=0,rl=1,Tn="",Jt="srgb",Oe="srgb-linear",ji="display-p3",us=7680,ol=519,ll=512,hl=513,ul=514,cl=515,dl=516,pl=517,Al=518,fl=519,Wa=35044,Xa="300 es",Xs=1035,Ke=2e3,Hi=2001;class dn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ba=1234567;const ui=Math.PI/180,fi=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(oe[i&255]+oe[i>>8&255]+oe[i>>16&255]+oe[i>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[n&255]+oe[n>>8&255]+oe[n>>16&255]+oe[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Ys(i,t){return(i%t+t)%t}function ml(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gl(i,t,e){return i!==t?(e-i)/(t-i):0}function ci(i,t,e){return(1-e)*i+e*t}function Sl(i,t,e,n){return ci(i,t,1-Math.exp(-e*n))}function _l(i,t=1){return t-Math.abs(Ys(i,t*2)-t)}function yl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ml(i,t){return i+Math.random()*(t-i)}function xl(i){return i*(.5-Math.random())}function Tl(i){i!==void 0&&(Ba=i);let t=Ba+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wl(i){return i*ui}function Pl(i){return i*fi}function Bs(i){return(i&i-1)===0&&i!==0}function El(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zi(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cl(i,t,e,n,s){const a=Math.cos,o=Math.sin,r=a(e/2),l=o(e/2),h=a((t+n)/2),d=o((t+n)/2),p=a((t-n)/2),A=o((t-n)/2),f=a((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(r*d,l*p,l*A,r*h);break;case"YZY":i.set(l*A,r*d,l*p,r*h);break;case"ZXZ":i.set(l*p,l*A,r*d,r*h);break;case"XZX":i.set(r*d,l*g,l*f,r*h);break;case"YXY":i.set(l*f,r*d,l*g,r*h);break;case"ZYZ":i.set(l*g,l*f,r*d,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hs={DEG2RAD:ui,RAD2DEG:fi,generateUUID:ni,clamp:he,euclideanModulo:Ys,mapLinear:ml,inverseLerp:gl,lerp:ci,damp:Sl,pingpong:_l,smoothstep:yl,smootherstep:bl,randInt:vl,randFloat:Ml,randFloatSpread:xl,seededRandom:Tl,degToRad:wl,radToDeg:Pl,isPowerOfTwo:Bs,ceilPowerOfTwo:El,floorPowerOfTwo:zi,setQuaternionFromProperEuler:Cl,normalize:de,denormalize:Yn};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,a,o,r,l,h){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,l,h)}set(t,e,n,s,a,o,r,l,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=r,d[3]=e,d[4]=a,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[3],l=n[6],h=n[1],d=n[4],p=n[7],A=n[2],f=n[5],g=n[8],m=s[0],u=s[3],c=s[6],T=s[1],S=s[4],P=s[7],M=s[2],I=s[5],w=s[8];return a[0]=o*m+r*T+l*M,a[3]=o*u+r*S+l*I,a[6]=o*c+r*P+l*w,a[1]=h*m+d*T+p*M,a[4]=h*u+d*S+p*I,a[7]=h*c+d*P+p*w,a[2]=A*m+f*T+g*M,a[5]=A*u+f*S+g*I,a[8]=A*c+f*P+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],d=t[8];return e*o*d-e*r*h-n*a*d+n*r*l+s*a*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],d=t[8],p=d*o-r*h,A=r*l-d*a,f=h*a-o*l,g=e*p+n*A+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=p*m,t[1]=(s*h-d*n)*m,t[2]=(r*n-s*o)*m,t[3]=A*m,t[4]=(d*e-s*l)*m,t[5]=(s*a-r*e)*m,t[6]=f*m,t[7]=(n*l-h*e)*m,t[8]=(o*e-n*a)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,r){const l=Math.cos(a),h=Math.sin(a);return this.set(n*l,n*h,-n*(l*o+h*r)+o+t,-s*h,s*l,-s*(-h*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(cs.makeScale(t,e)),this}rotate(t){return this.premultiply(cs.makeRotation(-t)),this}translate(t,e){return this.premultiply(cs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new Vt;function zr(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Il(){const i=Gi("canvas");return i.style.display="block",i}const Ha={};function di(i){i in Ha||(Ha[i]=!0,console.warn(i))}function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rl=new Vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ul=new Vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ll(i){return i.convertSRGBToLinear().applyMatrix3(Ul)}function Vl(i){return i.applyMatrix3(Rl).convertLinearToSRGB()}const Dl={[Oe]:i=>i,[Jt]:i=>i.convertSRGBToLinear(),[ji]:Ll},kl={[Oe]:i=>i,[Jt]:i=>i.convertLinearToSRGB(),[ji]:Vl},we={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Oe},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Dl[t],s=kl[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Rn;class Gr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rn===void 0&&(Rn=Gi("canvas")),Rn.width=t.width,Rn.height=t.height;const n=Rn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Zn(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nl=0;class Jr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(ps(s[o].image)):a.push(ps(s[o]))}else a=ps(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class be extends dn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Re,s=Re,a=xe,o=pi,r=Ue,l=un,h=be.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ni(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===xn?Jt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kr)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fs:t.x=t.x-Math.floor(t.x);break;case Re:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fs:t.y=t.y-Math.floor(t.y);break;case Re:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?xn:Hr}set encoding(t){di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xn?Jt:Tn}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=kr;be.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,h=l[0],d=l[4],p=l[8],A=l[1],f=l[5],g=l[9],m=l[2],u=l[6],c=l[10];if(Math.abs(d-A)<.01&&Math.abs(p-m)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+A)<.1&&Math.abs(p+m)<.1&&Math.abs(g+u)<.1&&Math.abs(h+f+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(h+1)/2,P=(f+1)/2,M=(c+1)/2,I=(d+A)/4,w=(p+m)/4,G=(g+u)/4;return S>P&&S>M?S<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(S),s=I/n,a=w/n):P>M?P<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(P),n=I/s,a=G/s):M<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),n=w/a,s=G/a),this.set(n,s,a,e),this}let T=Math.sqrt((u-g)*(u-g)+(p-m)*(p-m)+(A-d)*(A-d));return Math.abs(T)<.001&&(T=1),this.x=(u-g)/T,this.y=(p-m)/T,this.z=(A-d)/T,this.w=Math.acos((h+f+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xn?Jt:Tn),this.texture=new be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jr extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,r){let l=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const A=a[o+0],f=a[o+1],g=a[o+2],m=a[o+3];if(r===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(r===1){t[e+0]=A,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(p!==m||l!==A||h!==f||d!==g){let u=1-r;const c=l*A+h*f+d*g+p*m,T=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const M=Math.sqrt(S),I=Math.atan2(M,c*T);u=Math.sin(u*I)/M,r=Math.sin(r*I)/M}const P=r*T;if(l=l*u+A*P,h=h*u+f*P,d=d*u+g*P,p=p*u+m*P,u===1-r){const M=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=M,h*=M,d*=M,p*=M}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,a,o){const r=n[s],l=n[s+1],h=n[s+2],d=n[s+3],p=a[o],A=a[o+1],f=a[o+2],g=a[o+3];return t[e]=r*g+d*p+l*f-h*A,t[e+1]=l*g+d*A+h*p-r*f,t[e+2]=h*g+d*f+r*A-l*p,t[e+3]=d*g-r*p-l*A-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,h=r(n/2),d=r(s/2),p=r(a/2),A=l(n/2),f=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=A*d*p+h*f*g,this._y=h*f*p-A*d*g,this._z=h*d*g+A*f*p,this._w=h*d*p-A*f*g;break;case"YXZ":this._x=A*d*p+h*f*g,this._y=h*f*p-A*d*g,this._z=h*d*g-A*f*p,this._w=h*d*p+A*f*g;break;case"ZXY":this._x=A*d*p-h*f*g,this._y=h*f*p+A*d*g,this._z=h*d*g+A*f*p,this._w=h*d*p-A*f*g;break;case"ZYX":this._x=A*d*p-h*f*g,this._y=h*f*p+A*d*g,this._z=h*d*g-A*f*p,this._w=h*d*p+A*f*g;break;case"YZX":this._x=A*d*p+h*f*g,this._y=h*f*p+A*d*g,this._z=h*d*g-A*f*p,this._w=h*d*p-A*f*g;break;case"XZY":this._x=A*d*p-h*f*g,this._y=h*f*p-A*d*g,this._z=h*d*g+A*f*p,this._w=h*d*p+A*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],r=e[5],l=e[9],h=e[2],d=e[6],p=e[10],A=n+r+p;if(A>0){const f=.5/Math.sqrt(A+1);this._w=.25/f,this._x=(d-l)*f,this._y=(a-h)*f,this._z=(o-s)*f}else if(n>r&&n>p){const f=2*Math.sqrt(1+n-r-p);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(a+h)/f}else if(r>p){const f=2*Math.sqrt(1+r-n-p);this._w=(a-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+p-n-r);this._w=(o-s)/f,this._x=(a+h)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,r=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+o*r+s*h-a*l,this._y=s*d+o*l+a*r-n*h,this._z=a*d+o*h+n*l-s*r,this._w=o*d-n*r-s*l-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+n*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),d=Math.atan2(h,r),p=Math.sin((1-e)*d)/h,A=Math.sin(e*d)/h;return this._w=o*p+this._w*A,this._x=n*p+this._x*A,this._y=s*p+this._y*A,this._z=a*p+this._z*A,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(a),n*Math.cos(a),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,r=t.z,l=t.w,h=l*e+o*s-r*n,d=l*n+r*e-a*s,p=l*s+a*n-o*e,A=-a*e-o*n-r*s;return this.x=h*l+A*-a+d*-r-p*-o,this.y=d*l+A*-o+p*-a-h*-r,this.z=p*l+A*-r+h*-o-d*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=s*l-a*r,this.y=a*o-n*l,this.z=n*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new U,za=new qe;class mi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Un.copy(t.boundingBox),Un.applyMatrix4(t.matrixWorld),this.union(Un);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const a=s.attributes.position;for(let o=0,r=a.count;o<r;o++)Xe.fromBufferAttribute(a,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Xe)}else s.boundingBox===null&&s.computeBoundingBox(),Un.copy(s.boundingBox),Un.applyMatrix4(t.matrixWorld),this.union(Un)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ai),yi.subVectors(this.max,ai),Ln.subVectors(t.a,ai),Vn.subVectors(t.b,ai),Dn.subVectors(t.c,ai),$e.subVectors(Vn,Ln),tn.subVectors(Dn,Vn),mn.subVectors(Ln,Dn);let e=[0,-$e.z,$e.y,0,-tn.z,tn.y,0,-mn.z,mn.y,$e.z,0,-$e.x,tn.z,0,-tn.x,mn.z,0,-mn.x,-$e.y,$e.x,0,-tn.y,tn.x,0,-mn.y,mn.x,0];return!fs(e,Ln,Vn,Dn,yi)||(e=[1,0,0,0,1,0,0,0,1],!fs(e,Ln,Vn,Dn,yi))?!1:(bi.crossVectors($e,tn),e=[bi.x,bi.y,bi.z],fs(e,Ln,Vn,Dn,yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new U,new U,new U,new U,new U,new U,new U,new U],Xe=new U,Un=new mi,Ln=new U,Vn=new U,Dn=new U,$e=new U,tn=new U,mn=new U,ai=new U,yi=new U,bi=new U,gn=new U;function fs(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){gn.fromArray(i,a);const r=s.x*Math.abs(gn.x)+s.y*Math.abs(gn.y)+s.z*Math.abs(gn.z),l=t.dot(gn),h=e.dot(gn),d=n.dot(gn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>r)return!1}return!0}const Xl=new mi,ri=new U,ms=new U;class Qs{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xl.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ri.subVectors(t,this.center);const e=ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ri,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ms.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ri.copy(t.center).add(ms)),this.expandByPoint(ri.copy(t.center).sub(ms))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Be=new U,gs=new U,vi=new U,en=new U,Ss=new U,Mi=new U,_s=new U;class Ks{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Be)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Be.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Be.copy(this.origin).addScaledVector(this.direction,e),Be.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gs.copy(t).add(e).multiplyScalar(.5),vi.copy(e).sub(t).normalize(),en.copy(this.origin).sub(gs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(vi),r=en.dot(this.direction),l=-en.dot(vi),h=en.lengthSq(),d=Math.abs(1-o*o);let p,A,f,g;if(d>0)if(p=o*l-r,A=o*r-l,g=a*d,p>=0)if(A>=-g)if(A<=g){const m=1/d;p*=m,A*=m,f=p*(p+o*A+2*r)+A*(o*p+A+2*l)+h}else A=a,p=Math.max(0,-(o*A+r)),f=-p*p+A*(A+2*l)+h;else A=-a,p=Math.max(0,-(o*A+r)),f=-p*p+A*(A+2*l)+h;else A<=-g?(p=Math.max(0,-(-o*a+r)),A=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+A*(A+2*l)+h):A<=g?(p=0,A=Math.min(Math.max(-a,-l),a),f=A*(A+2*l)+h):(p=Math.max(0,-(o*a+r)),A=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+A*(A+2*l)+h);else A=o>0?-a:a,p=Math.max(0,-(o*A+r)),f=-p*p+A*(A+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(gs).addScaledVector(vi,A),f}intersectSphere(t,e){Be.subVectors(t.center,this.origin);const n=Be.dot(this.direction),s=Be.dot(Be)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,r,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,A=this.origin;return h>=0?(n=(t.min.x-A.x)*h,s=(t.max.x-A.x)*h):(n=(t.max.x-A.x)*h,s=(t.min.x-A.x)*h),d>=0?(a=(t.min.y-A.y)*d,o=(t.max.y-A.y)*d):(a=(t.max.y-A.y)*d,o=(t.min.y-A.y)*d),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),p>=0?(r=(t.min.z-A.z)*p,l=(t.max.z-A.z)*p):(r=(t.max.z-A.z)*p,l=(t.min.z-A.z)*p),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Be)!==null}intersectTriangle(t,e,n,s,a){Ss.subVectors(e,t),Mi.subVectors(n,t),_s.crossVectors(Ss,Mi);let o=this.direction.dot(_s),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;en.subVectors(this.origin,t);const l=r*this.direction.dot(Mi.crossVectors(en,Mi));if(l<0)return null;const h=r*this.direction.dot(Ss.cross(en));if(h<0||l+h>o)return null;const d=-r*en.dot(_s);return d<0?null:this.at(d/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,a,o,r,l,h,d,p,A,f,g,m,u){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,l,h,d,p,A,f,g,m,u)}set(t,e,n,s,a,o,r,l,h,d,p,A,f,g,m,u){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=a,c[5]=o,c[9]=r,c[13]=l,c[2]=h,c[6]=d,c[10]=p,c[14]=A,c[3]=f,c[7]=g,c[11]=m,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/kn.setFromMatrixColumn(t,0).length(),a=1/kn.setFromMatrixColumn(t,1).length(),o=1/kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const A=o*d,f=o*p,g=r*d,m=r*p;e[0]=l*d,e[4]=-l*p,e[8]=h,e[1]=f+g*h,e[5]=A-m*h,e[9]=-r*l,e[2]=m-A*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const A=l*d,f=l*p,g=h*d,m=h*p;e[0]=A+m*r,e[4]=g*r-f,e[8]=o*h,e[1]=o*p,e[5]=o*d,e[9]=-r,e[2]=f*r-g,e[6]=m+A*r,e[10]=o*l}else if(t.order==="ZXY"){const A=l*d,f=l*p,g=h*d,m=h*p;e[0]=A-m*r,e[4]=-o*p,e[8]=g+f*r,e[1]=f+g*r,e[5]=o*d,e[9]=m-A*r,e[2]=-o*h,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const A=o*d,f=o*p,g=r*d,m=r*p;e[0]=l*d,e[4]=g*h-f,e[8]=A*h+m,e[1]=l*p,e[5]=m*h+A,e[9]=f*h-g,e[2]=-h,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const A=o*l,f=o*h,g=r*l,m=r*h;e[0]=l*d,e[4]=m-A*p,e[8]=g*p+f,e[1]=p,e[5]=o*d,e[9]=-r*d,e[2]=-h*d,e[6]=f*p+g,e[10]=A-m*p}else if(t.order==="XZY"){const A=o*l,f=o*h,g=r*l,m=r*h;e[0]=l*d,e[4]=-p,e[8]=h*d,e[1]=A*p+m,e[5]=o*d,e[9]=f*p-g,e[2]=g*p-f,e[6]=r*d,e[10]=m*p+A}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bl,t,Hl)}lookAt(t,e,n){const s=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),nn.crossVectors(n,_e),nn.lengthSq()===0&&(Math.abs(n.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),nn.crossVectors(n,_e)),nn.normalize(),xi.crossVectors(_e,nn),s[0]=nn.x,s[4]=xi.x,s[8]=_e.x,s[1]=nn.y,s[5]=xi.y,s[9]=_e.y,s[2]=nn.z,s[6]=xi.z,s[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[4],l=n[8],h=n[12],d=n[1],p=n[5],A=n[9],f=n[13],g=n[2],m=n[6],u=n[10],c=n[14],T=n[3],S=n[7],P=n[11],M=n[15],I=s[0],w=s[4],G=s[8],y=s[12],x=s[1],j=s[5],K=s[9],L=s[13],B=s[2],F=s[6],et=s[10],J=s[14],Y=s[3],$=s[7],q=s[11],R=s[15];return a[0]=o*I+r*x+l*B+h*Y,a[4]=o*w+r*j+l*F+h*$,a[8]=o*G+r*K+l*et+h*q,a[12]=o*y+r*L+l*J+h*R,a[1]=d*I+p*x+A*B+f*Y,a[5]=d*w+p*j+A*F+f*$,a[9]=d*G+p*K+A*et+f*q,a[13]=d*y+p*L+A*J+f*R,a[2]=g*I+m*x+u*B+c*Y,a[6]=g*w+m*j+u*F+c*$,a[10]=g*G+m*K+u*et+c*q,a[14]=g*y+m*L+u*J+c*R,a[3]=T*I+S*x+P*B+M*Y,a[7]=T*w+S*j+P*F+M*$,a[11]=T*G+S*K+P*et+M*q,a[15]=T*y+S*L+P*J+M*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],r=t[5],l=t[9],h=t[13],d=t[2],p=t[6],A=t[10],f=t[14],g=t[3],m=t[7],u=t[11],c=t[15];return g*(+a*l*p-s*h*p-a*r*A+n*h*A+s*r*f-n*l*f)+m*(+e*l*f-e*h*A+a*o*A-s*o*f+s*h*d-a*l*d)+u*(+e*h*p-e*r*f-a*o*p+n*o*f+a*r*d-n*h*d)+c*(-s*r*d-e*l*p+e*r*A+s*o*p-n*o*A+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],d=t[8],p=t[9],A=t[10],f=t[11],g=t[12],m=t[13],u=t[14],c=t[15],T=p*u*h-m*A*h+m*l*f-r*u*f-p*l*c+r*A*c,S=g*A*h-d*u*h-g*l*f+o*u*f+d*l*c-o*A*c,P=d*m*h-g*p*h+g*r*f-o*m*f-d*r*c+o*p*c,M=g*p*l-d*m*l-g*r*A+o*m*A+d*r*u-o*p*u,I=e*T+n*S+s*P+a*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return t[0]=T*w,t[1]=(m*A*a-p*u*a-m*s*f+n*u*f+p*s*c-n*A*c)*w,t[2]=(r*u*a-m*l*a+m*s*h-n*u*h-r*s*c+n*l*c)*w,t[3]=(p*l*a-r*A*a-p*s*h+n*A*h+r*s*f-n*l*f)*w,t[4]=S*w,t[5]=(d*u*a-g*A*a+g*s*f-e*u*f-d*s*c+e*A*c)*w,t[6]=(g*l*a-o*u*a-g*s*h+e*u*h+o*s*c-e*l*c)*w,t[7]=(o*A*a-d*l*a+d*s*h-e*A*h-o*s*f+e*l*f)*w,t[8]=P*w,t[9]=(g*p*a-d*m*a-g*n*f+e*m*f+d*n*c-e*p*c)*w,t[10]=(o*m*a-g*r*a+g*n*h-e*m*h-o*n*c+e*r*c)*w,t[11]=(d*r*a-o*p*a-d*n*h+e*p*h+o*n*f-e*r*f)*w,t[12]=M*w,t[13]=(d*m*s-g*p*s+g*n*A-e*m*A-d*n*u+e*p*u)*w,t[14]=(g*r*s-o*m*s-g*n*l+e*m*l+o*n*u-e*r*u)*w,t[15]=(o*p*s-d*r*s+d*n*l-e*p*l-o*n*A+e*r*A)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,r=t.y,l=t.z,h=a*o,d=a*r;return this.set(h*o+n,h*r-s*l,h*l+s*r,0,h*r+s*l,d*r+n,d*l-s*o,0,h*l-s*r,d*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,h=a+a,d=o+o,p=r+r,A=a*h,f=a*d,g=a*p,m=o*d,u=o*p,c=r*p,T=l*h,S=l*d,P=l*p,M=n.x,I=n.y,w=n.z;return s[0]=(1-(m+c))*M,s[1]=(f+P)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(f-P)*I,s[5]=(1-(A+c))*I,s[6]=(u+T)*I,s[7]=0,s[8]=(g+S)*w,s[9]=(u-T)*w,s[10]=(1-(A+m))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=kn.set(s[0],s[1],s[2]).length();const o=kn.set(s[4],s[5],s[6]).length(),r=kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Pe.copy(this);const h=1/a,d=1/o,p=1/r;return Pe.elements[0]*=h,Pe.elements[1]*=h,Pe.elements[2]*=h,Pe.elements[4]*=d,Pe.elements[5]*=d,Pe.elements[6]*=d,Pe.elements[8]*=p,Pe.elements[9]*=p,Pe.elements[10]*=p,e.setFromRotationMatrix(Pe),n.x=a,n.y=o,n.z=r,this}makePerspective(t,e,n,s,a,o,r=Ke){const l=this.elements,h=2*a/(e-t),d=2*a/(n-s),p=(e+t)/(e-t),A=(n+s)/(n-s);let f,g;if(r===Ke)f=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===Hi)f=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=A,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,o,r=Ke){const l=this.elements,h=1/(e-t),d=1/(n-s),p=1/(o-a),A=(e+t)*h,f=(n+s)*d;let g,m;if(r===Ke)g=(o+a)*p,m=-2*p;else if(r===Hi)g=a*p,m=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-A,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const kn=new U,Pe=new ee,Bl=new U(0,0,0),Hl=new U(1,1,1),nn=new U,xi=new U,_e=new U,Ga=new ee,Ja=new qe;class Yi{constructor(t=0,e=0,n=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],l=s[1],h=s[5],d=s[9],p=s[2],A=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(A,h),this._z=0);break;case"YXZ":this._x=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(he(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(A,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(A,h),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Zs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zl=0;const ja=new U,Nn=new qe,He=new ee,Ti=new U,oi=new U,Gl=new U,Jl=new qe,Ya=new U(1,0,0),Qa=new U(0,1,0),Ka=new U(0,0,1),jl={type:"added"},Yl={type:"removed"};class fe extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new U,e=new Yi,n=new qe,s=new U(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Vt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(Ka,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(Ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(He.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ti.copy(t):Ti.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(oi,Ti,this.up):He.lookAt(Ti,oi,this.up),this.quaternion.setFromRotationMatrix(He),s&&(He.extractRotation(s.matrixWorld),Nn.setFromRotationMatrix(He),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),He.multiply(t.parent.matrixWorld)),t.applyMatrix4(He),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,a=this.children.length;s<a;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,t,Gl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,Jl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++){const r=s[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(a(t.materials,this.material[l]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),h=o(t.textures),d=o(t.images),p=o(t.shapes),A=o(t.skeletons),f=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),A.length>0&&(n.skeletons=A),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const l=[];for(const h in r){const d=r[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new U(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ee=new U,ze=new U,ys=new U,Ge=new U,On=new U,Fn=new U,Za=new U,bs=new U,vs=new U,Ms=new U;let wi=!1;class Ie{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ee.subVectors(t,e),s.cross(Ee);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Ee.subVectors(s,e),ze.subVectors(n,e),ys.subVectors(t,e);const o=Ee.dot(Ee),r=Ee.dot(ze),l=Ee.dot(ys),h=ze.dot(ze),d=ze.dot(ys),p=o*h-r*r;if(p===0)return a.set(-2,-1,-1);const A=1/p,f=(h*l-r*d)*A,g=(o*d-r*l)*A;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ge),Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(t,e,n,s,a,o,r,l){return wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wi=!0),this.getInterpolation(t,e,n,s,a,o,r,l)}static getInterpolation(t,e,n,s,a,o,r,l){return this.getBarycoord(t,e,n,s,Ge),l.setScalar(0),l.addScaledVector(a,Ge.x),l.addScaledVector(o,Ge.y),l.addScaledVector(r,Ge.z),l}static isFrontFacing(t,e,n,s){return Ee.subVectors(n,e),ze.subVectors(t,e),Ee.cross(ze).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ee.subVectors(this.c,this.b),ze.subVectors(this.a,this.b),Ee.cross(ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,a){return wi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wi=!0),Ie.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}getInterpolation(t,e,n,s,a){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,r;On.subVectors(s,n),Fn.subVectors(a,n),bs.subVectors(t,n);const l=On.dot(bs),h=Fn.dot(bs);if(l<=0&&h<=0)return e.copy(n);vs.subVectors(t,s);const d=On.dot(vs),p=Fn.dot(vs);if(d>=0&&p<=d)return e.copy(s);const A=l*p-d*h;if(A<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(On,o);Ms.subVectors(t,a);const f=On.dot(Ms),g=Fn.dot(Ms);if(g>=0&&f<=g)return e.copy(a);const m=f*h-l*g;if(m<=0&&h>=0&&g<=0)return r=h/(h-g),e.copy(n).addScaledVector(Fn,r);const u=d*g-f*p;if(u<=0&&p-d>=0&&f-g>=0)return Za.subVectors(a,s),r=(p-d)/(p-d+(f-g)),e.copy(s).addScaledVector(Za,r);const c=1/(u+m+A);return o=m*c,r=A*c,e.copy(n).addScaledVector(On,o).addScaledVector(Fn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ql=0;class Qi extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Kn,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lr,this.blendDst=Vr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Yr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ce={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function xs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=Ys(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=xs(o,a,t+1/3),this.g=xs(o,a,t),this.b=xs(o,a,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=Jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jt){const n=Yr[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jt){return we.fromWorkingColorSpace(le.copy(this),t),Math.round(he(le.r*255,0,255))*65536+Math.round(he(le.g*255,0,255))*256+Math.round(he(le.b*255,0,255))}getHexString(t=Jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(le.copy(this),e);const n=le.r,s=le.g,a=le.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let l,h;const d=(r+o)/2;if(r===o)l=0,h=0;else{const p=o-r;switch(h=d<=.5?p/(o+r):p/(2-o-r),o){case n:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-n)/p+2;break;case a:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(le.copy(this),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=Jt){we.fromWorkingColorSpace(le.copy(this),t);const e=le.r,n=le.g,s=le.b;return t!==Jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ce),Ce.h+=t,Ce.s+=e,Ce.l+=n,this.setHSL(Ce.h,Ce.s,Ce.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ce),t.getHSL(Pi);const n=ci(Ce.h,Pi.h,e),s=ci(Ce.s,Pi.s,e),a=ci(Ce.l,Pi.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const le=new Gt;Gt.NAMES=Yr;class qs extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qt=new U,Ei=new Mt;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this.updateRange={offset:0,count:-1},this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ei.fromBufferAttribute(this,e),Ei.applyMatrix3(t),this.setXY(e,Ei.x,Ei.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix3(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix4(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.applyNormalMatrix(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qt.fromBufferAttribute(this,e),qt.transformDirection(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),a=de(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Qr extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kr extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class wn extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kl=0;const Me=new ee,Ts=new fe,Wn=new U,ye=new mi,li=new mi,ae=new U;class Cn extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zr(t)?Kr:Qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Vt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Me.makeRotationFromQuaternion(t),this.applyMatrix4(Me),this}rotateX(t){return Me.makeRotationX(t),this.applyMatrix4(Me),this}rotateY(t){return Me.makeRotationY(t),this.applyMatrix4(Me),this}rotateZ(t){return Me.makeRotationZ(t),this.applyMatrix4(Me),this}translate(t,e,n){return Me.makeTranslation(t,e,n),this.applyMatrix4(Me),this}scale(t,e,n){return Me.makeScale(t,e,n),this.applyMatrix4(Me),this}lookAt(t){return Ts.lookAt(t),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new wn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];ye.setFromBufferAttribute(a),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];li.setFromBufferAttribute(r),this.morphTargetsRelative?(ae.addVectors(ye.min,li.min),ye.expandByPoint(ae),ae.addVectors(ye.max,li.max),ye.expandByPoint(ae)):(ye.expandByPoint(li.min),ye.expandByPoint(li.max))}ye.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)ae.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(ae));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],l=this.morphTargetsRelative;for(let h=0,d=r.count;h<d;h++)ae.fromBufferAttribute(r,h),l&&(Wn.fromBufferAttribute(t,h),ae.add(Wn)),s=Math.max(s,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,a=e.normal.array,o=e.uv.array,r=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,h=[],d=[];for(let x=0;x<r;x++)h[x]=new U,d[x]=new U;const p=new U,A=new U,f=new U,g=new Mt,m=new Mt,u=new Mt,c=new U,T=new U;function S(x,j,K){p.fromArray(s,x*3),A.fromArray(s,j*3),f.fromArray(s,K*3),g.fromArray(o,x*2),m.fromArray(o,j*2),u.fromArray(o,K*2),A.sub(p),f.sub(p),m.sub(g),u.sub(g);const L=1/(m.x*u.y-u.x*m.y);isFinite(L)&&(c.copy(A).multiplyScalar(u.y).addScaledVector(f,-m.y).multiplyScalar(L),T.copy(f).multiplyScalar(m.x).addScaledVector(A,-u.x).multiplyScalar(L),h[x].add(c),h[j].add(c),h[K].add(c),d[x].add(T),d[j].add(T),d[K].add(T))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let x=0,j=P.length;x<j;++x){const K=P[x],L=K.start,B=K.count;for(let F=L,et=L+B;F<et;F+=3)S(n[F+0],n[F+1],n[F+2])}const M=new U,I=new U,w=new U,G=new U;function y(x){w.fromArray(a,x*3),G.copy(w);const j=h[x];M.copy(j),M.sub(w.multiplyScalar(w.dot(j))).normalize(),I.crossVectors(G,j);const L=I.dot(d[x])<0?-1:1;l[x*4]=M.x,l[x*4+1]=M.y,l[x*4+2]=M.z,l[x*4+3]=L}for(let x=0,j=P.length;x<j;++x){const K=P[x],L=K.start,B=K.count;for(let F=L,et=L+B;F<et;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let A=0,f=n.count;A<f;A++)n.setXYZ(A,0,0,0);const s=new U,a=new U,o=new U,r=new U,l=new U,h=new U,d=new U,p=new U;if(t)for(let A=0,f=t.count;A<f;A+=3){const g=t.getX(A+0),m=t.getX(A+1),u=t.getX(A+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),o.fromBufferAttribute(e,u),d.subVectors(o,a),p.subVectors(s,a),d.cross(p),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),h.fromBufferAttribute(n,u),r.add(d),l.add(d),h.add(d),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let A=0,f=e.count;A<f;A+=3)s.fromBufferAttribute(e,A+0),a.fromBufferAttribute(e,A+1),o.fromBufferAttribute(e,A+2),d.subVectors(o,a),p.subVectors(s,a),d.cross(p),n.setXYZ(A+0,d.x,d.y,d.z),n.setXYZ(A+1,d.x,d.y,d.z),n.setXYZ(A+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(r,l){const h=r.array,d=r.itemSize,p=r.normalized,A=new h.constructor(l.length*d);let f=0,g=0;for(let m=0,u=l.length;m<u;m++){r.isInterleavedBufferAttribute?f=l[m]*r.data.stride+r.offset:f=l[m]*d;for(let c=0;c<d;c++)A[g++]=h[f++]}return new Ne(A,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],h=t(l,n);e.setAttribute(r,h)}const a=this.morphAttributes;for(const r in a){const l=[],h=a[r];for(let d=0,p=h.length;d<p;d++){const A=h[d],f=t(A,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const h=o[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,A=h.length;p<A;p++){const f=h[p];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const a=t.morphAttributes;for(const h in a){const d=[],p=a[h];for(let A=0,f=p.length;A<f;A++)d.push(p[A].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new ee,Sn=new Ks,Ci=new Qs,$a=new U,Xn=new U,Bn=new U,Hn=new U,ws=new U,Ii=new U,Ri=new Mt,Ui=new Mt,Li=new Mt,tr=new U,er=new U,nr=new U,Vi=new U,Di=new U;class Ze extends fe{constructor(t=new Cn,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){Ii.set(0,0,0);for(let l=0,h=a.length;l<h;l++){const d=r[l],p=a[l];d!==0&&(ws.fromBufferAttribute(p,t),o?Ii.addScaledVector(ws,d):Ii.addScaledVector(ws.sub(e),d))}e.add(Ii)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(a),Sn.copy(t.ray).recast(t.near),!(Ci.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Ci,$a)===null||Sn.origin.distanceToSquared($a)>(t.far-t.near)**2))&&(qa.copy(a).invert(),Sn.copy(t.ray).applyMatrix4(qa),!(n.boundingBox!==null&&Sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,A=a.groups,f=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,m=A.length;g<m;g++){const u=A[g],c=o[u.materialIndex],T=Math.max(u.start,f.start),S=Math.min(r.count,Math.min(u.start+u.count,f.start+f.count));for(let P=T,M=S;P<M;P+=3){const I=r.getX(P),w=r.getX(P+1),G=r.getX(P+2);s=ki(this,c,t,n,h,d,p,I,w,G),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),m=Math.min(r.count,f.start+f.count);for(let u=g,c=m;u<c;u+=3){const T=r.getX(u),S=r.getX(u+1),P=r.getX(u+2);s=ki(this,o,t,n,h,d,p,T,S,P),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=A.length;g<m;g++){const u=A[g],c=o[u.materialIndex],T=Math.max(u.start,f.start),S=Math.min(l.count,Math.min(u.start+u.count,f.start+f.count));for(let P=T,M=S;P<M;P+=3){const I=P,w=P+1,G=P+2;s=ki(this,c,t,n,h,d,p,I,w,G),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let u=g,c=m;u<c;u+=3){const T=u,S=u+1,P=u+2;s=ki(this,o,t,n,h,d,p,T,S,P),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function Zl(i,t,e,n,s,a,o,r){let l;if(t.side===me?l=n.intersectTriangle(o,a,s,!0,r):l=n.intersectTriangle(s,a,o,t.side===cn,r),l===null)return null;Di.copy(r),Di.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Di);return h<e.near||h>e.far?null:{distance:h,point:Di.clone(),object:i}}function ki(i,t,e,n,s,a,o,r,l,h){i.getVertexPosition(r,Xn),i.getVertexPosition(l,Bn),i.getVertexPosition(h,Hn);const d=Zl(i,t,e,n,Xn,Bn,Hn,Vi);if(d){s&&(Ri.fromBufferAttribute(s,r),Ui.fromBufferAttribute(s,l),Li.fromBufferAttribute(s,h),d.uv=Ie.getInterpolation(Vi,Xn,Bn,Hn,Ri,Ui,Li,new Mt)),a&&(Ri.fromBufferAttribute(a,r),Ui.fromBufferAttribute(a,l),Li.fromBufferAttribute(a,h),d.uv1=Ie.getInterpolation(Vi,Xn,Bn,Hn,Ri,Ui,Li,new Mt),d.uv2=d.uv1),o&&(tr.fromBufferAttribute(o,r),er.fromBufferAttribute(o,l),nr.fromBufferAttribute(o,h),d.normal=Ie.getInterpolation(Vi,Xn,Bn,Hn,tr,er,nr,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:r,b:l,c:h,normal:new U,materialIndex:0};Ie.getNormal(Xn,Bn,Hn,p.normal),d.face=p}return d}class gi extends Cn{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],h=[],d=[],p=[];let A=0,f=0;g("z","y","x",-1,-1,n,e,t,o,a,0),g("z","y","x",1,-1,n,e,-t,o,a,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(p,2));function g(m,u,c,T,S,P,M,I,w,G,y){const x=P/w,j=M/G,K=P/2,L=M/2,B=I/2,F=w+1,et=G+1;let J=0,Y=0;const $=new U;for(let q=0;q<et;q++){const R=q*j-L;for(let Q=0;Q<F;Q++){const ut=Q*x-K;$[m]=ut*T,$[u]=R*S,$[c]=B,h.push($.x,$.y,$.z),$[m]=0,$[u]=0,$[c]=I>0?1:-1,d.push($.x,$.y,$.z),p.push(Q/w),p.push(1-q/G),J+=1}}for(let q=0;q<G;q++)for(let R=0;R<w;R++){const Q=A+R+F*q,ut=A+R+F*(q+1),dt=A+(R+1)+F*(q+1),At=A+(R+1)+F*q;l.push(Q,ut,At),l.push(ut,dt,At),Y+=6}r.addGroup(f,Y,y),f+=Y,A+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ei(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pe(i){const t={};for(let e=0;e<i.length;e++){const n=ei(i[e]);for(const s in n)t[s]=n[s]}return t}function ql(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zr(i){return i.getRenderTarget()===null?i.outputColorSpace:Oe}const $l={clone:ei,merge:pe};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ei(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qr extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Te extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ui*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fi*2*Math.atan(Math.tan(ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ui*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;a+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zn=-90,Gn=1;class nh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new Te(zn,Gn,t,e);s.layers=this.layers,this.add(s);const a=new Te(zn,Gn,t,e);a.layers=this.layers,this.add(a);const o=new Te(zn,Gn,t,e);o.layers=this.layers,this.add(o);const r=new Te(zn,Gn,t,e);r.layers=this.layers,this.add(r);const l=new Te(zn,Gn,t,e);l.layers=this.layers,this.add(l);const h=new Te(zn,Gn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,r,l]=e;for(const h of e)this.remove(h);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,r,l,h]=this.children,d=t.getRenderTarget(),p=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,a),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5),t.render(e,h),t.setRenderTarget(d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $r extends be{constructor(t,e,n,s,a,o,r,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:qn,super(t,e,n,s,a,o,r,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xn?Jt:Tn),this.texture=new $r(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gi(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:me,blending:ln});a.uniforms.tEquirect.value=e;const o=new Ze(s,a),r=e.minFilter;return e.minFilter===pi&&(e.minFilter=xe),new nh(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}const Ps=new U,sh=new U,ah=new Vt;class an{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ps.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ps),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ah.getNormalMatrix(t),s=this.coplanarPoint(Ps).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new Qs,Ni=new U;class to{constructor(t=new an,e=new an,n=new an,s=new an,a=new an,o=new an){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke){const n=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],l=s[3],h=s[4],d=s[5],p=s[6],A=s[7],f=s[8],g=s[9],m=s[10],u=s[11],c=s[12],T=s[13],S=s[14],P=s[15];if(n[0].setComponents(l-a,A-h,u-f,P-c).normalize(),n[1].setComponents(l+a,A+h,u+f,P+c).normalize(),n[2].setComponents(l+o,A+d,u+g,P+T).normalize(),n[3].setComponents(l-o,A-d,u-g,P-T).normalize(),n[4].setComponents(l-r,A-p,u-m,P-S).normalize(),e===Ke)n[5].setComponents(l+r,A+p,u+m,P+S).normalize();else if(e===Hi)n[5].setComponents(r,p,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(t){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(t.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ni.x=s.normal.x>0?t.max.x:t.min.x,Ni.y=s.normal.y>0?t.max.y:t.min.y,Ni.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eo(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function rh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(h,d){const p=h.array,A=h.usage,f=i.createBuffer();i.bindBuffer(d,f),i.bufferData(d,p,A),h.onUploadCallback();let g;if(p instanceof Float32Array)g=i.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=i.SHORT;else if(p instanceof Uint32Array)g=i.UNSIGNED_INT;else if(p instanceof Int32Array)g=i.INT;else if(p instanceof Int8Array)g=i.BYTE;else if(p instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version}}function a(h,d,p){const A=d.array,f=d.updateRange;i.bindBuffer(p,h),f.count===-1?i.bufferSubData(p,0,A):(e?i.bufferSubData(p,f.offset*A.BYTES_PER_ELEMENT,A,f.offset,f.count):i.bufferSubData(p,f.offset*A.BYTES_PER_ELEMENT,A.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(i.deleteBuffer(d.buffer),n.delete(h))}function l(h,d){if(h.isGLBufferAttribute){const A=n.get(h);(!A||A.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p===void 0?n.set(h,s(h,d)):p.version<h.version&&(a(p.buffer,h,d),p.version=h.version)}return{get:o,remove:r,update:l}}class Ki extends Cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(n),l=Math.floor(s),h=r+1,d=l+1,p=t/r,A=e/l,f=[],g=[],m=[],u=[];for(let c=0;c<d;c++){const T=c*A-o;for(let S=0;S<h;S++){const P=S*p-a;g.push(P,-T,0),m.push(0,0,1),u.push(S/r),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let T=0;T<r;T++){const S=T+h*c,P=T+h*(c+1),M=T+1+h*(c+1),I=T+1+h*c;f.push(S,P,I),f.push(P,M,I)}this.setIndex(f),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(m,3)),this.setAttribute("uv",new wn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,su=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,au=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ju=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ec=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ic=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ac=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uc=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ac=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sc=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_c=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ec=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ic=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vc=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:oh,alphahash_pars_fragment:lh,alphamap_fragment:hh,alphamap_pars_fragment:uh,alphatest_fragment:ch,alphatest_pars_fragment:dh,aomap_fragment:ph,aomap_pars_fragment:Ah,begin_vertex:fh,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:Sh,bumpmap_pars_fragment:_h,clipping_planes_fragment:yh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:vh,clipping_planes_vertex:Mh,color_fragment:xh,color_pars_fragment:Th,color_pars_vertex:wh,color_vertex:Ph,common:Eh,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Rh,displacementmap_vertex:Uh,emissivemap_fragment:Lh,emissivemap_pars_fragment:Vh,colorspace_fragment:Dh,colorspace_pars_fragment:kh,envmap_fragment:Nh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Fh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:qh,envmap_vertex:Xh,fog_vertex:Bh,fog_pars_vertex:Hh,fog_fragment:zh,fog_pars_fragment:Gh,gradientmap_pars_fragment:Jh,lightmap_fragment:jh,lightmap_pars_fragment:Yh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:Kh,lights_pars_begin:Zh,lights_toon_fragment:$h,lights_toon_pars_fragment:tu,lights_phong_fragment:eu,lights_phong_pars_fragment:nu,lights_physical_fragment:iu,lights_physical_pars_fragment:su,lights_fragment_begin:au,lights_fragment_maps:ru,lights_fragment_end:ou,logdepthbuf_fragment:lu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:cu,map_fragment:du,map_pars_fragment:pu,map_particle_fragment:Au,map_particle_pars_fragment:fu,metalnessmap_fragment:mu,metalnessmap_pars_fragment:gu,morphcolor_vertex:Su,morphnormal_vertex:_u,morphtarget_pars_vertex:yu,morphtarget_vertex:bu,normal_fragment_begin:vu,normal_fragment_maps:Mu,normal_pars_fragment:xu,normal_pars_vertex:Tu,normal_vertex:wu,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:Cu,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Ru,opaque_fragment:Uu,packing:Lu,premultiplied_alpha_fragment:Vu,project_vertex:Du,dithering_fragment:ku,dithering_pars_fragment:Nu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:Xu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Hu,skinbase_vertex:zu,skinning_pars_vertex:Gu,skinning_vertex:Ju,skinnormal_vertex:ju,specularmap_fragment:Yu,specularmap_pars_fragment:Qu,tonemapping_fragment:Ku,tonemapping_pars_fragment:Zu,transmission_fragment:qu,transmission_pars_fragment:$u,uv_pars_fragment:tc,uv_pars_vertex:ec,uv_vertex:nc,worldpos_vertex:ic,background_vert:sc,background_frag:ac,backgroundCube_vert:rc,backgroundCube_frag:oc,cube_vert:lc,cube_frag:hc,depth_vert:uc,depth_frag:cc,distanceRGBA_vert:dc,distanceRGBA_frag:pc,equirect_vert:Ac,equirect_frag:fc,linedashed_vert:mc,linedashed_frag:gc,meshbasic_vert:Sc,meshbasic_frag:_c,meshlambert_vert:yc,meshlambert_frag:bc,meshmatcap_vert:vc,meshmatcap_frag:Mc,meshnormal_vert:xc,meshnormal_frag:Tc,meshphong_vert:wc,meshphong_frag:Pc,meshphysical_vert:Ec,meshphysical_frag:Cc,meshtoon_vert:Ic,meshtoon_frag:Rc,points_vert:Uc,points_frag:Lc,shadow_vert:Vc,shadow_frag:Dc,sprite_vert:kc,sprite_frag:Nc},ht={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ke={basic:{uniforms:pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:pe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:pe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:pe([ht.points,ht.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:pe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:pe([ht.common,ht.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:pe([ht.sprite,ht.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:pe([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:pe([ht.lights,ht.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};ke.physical={uniforms:pe([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Oi={r:0,b:0,g:0};function Oc(i,t,e,n,s,a,o){const r=new Gt(0);let l=a===!0?0:1,h,d,p=null,A=0,f=null;function g(u,c){let T=!1,S=c.isScene===!0?c.background:null;S&&S.isTexture&&(S=(c.backgroundBlurriness>0?e:t).get(S)),S===null?m(r,l):S&&S.isColor&&(m(S,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ji)?(d===void 0&&(d=new Ze(new gi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ei(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=S.colorSpace!==Jt,(p!==S||A!==S.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,p=S,A=S.version,f=i.toneMapping),d.layers.enableAll(),u.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Ze(new Ki(2,2),new En({name:"BackgroundMaterial",uniforms:ei(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=S.colorSpace!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||A!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=S,A=S.version,f=i.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null))}function m(u,c){u.getRGB(Oi,Zr(i)),n.buffers.color.setClear(Oi.r,Oi.g,Oi.b,c,o)}return{getClearColor:function(){return r},setClearColor:function(u,c=1){r.set(u),l=c,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,m(r,l)},render:g}}function Fc(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,r={},l=u(null);let h=l,d=!1;function p(B,F,et,J,Y){let $=!1;if(o){const q=m(J,et,F);h!==q&&(h=q,f(h.object)),$=c(B,J,et,Y),$&&T(B,J,et,Y)}else{const q=F.wireframe===!0;(h.geometry!==J.id||h.program!==et.id||h.wireframe!==q)&&(h.geometry=J.id,h.program=et.id,h.wireframe=q,$=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,G(B,F,et,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function A(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function f(B){return n.isWebGL2?i.bindVertexArray(B):a.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function m(B,F,et){const J=et.wireframe===!0;let Y=r[B.id];Y===void 0&&(Y={},r[B.id]=Y);let $=Y[F.id];$===void 0&&($={},Y[F.id]=$);let q=$[J];return q===void 0&&(q=u(A()),$[J]=q),q}function u(B){const F=[],et=[],J=[];for(let Y=0;Y<s;Y++)F[Y]=0,et[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:et,attributeDivisors:J,object:B,attributes:{},index:null}}function c(B,F,et,J){const Y=h.attributes,$=F.attributes;let q=0;const R=et.getAttributes();for(const Q in R)if(R[Q].location>=0){const dt=Y[Q];let At=$[Q];if(At===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(At=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(At=B.instanceColor)),dt===void 0||dt.attribute!==At||At&&dt.data!==At.data)return!0;q++}return h.attributesNum!==q||h.index!==J}function T(B,F,et,J){const Y={},$=F.attributes;let q=0;const R=et.getAttributes();for(const Q in R)if(R[Q].location>=0){let dt=$[Q];dt===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(dt=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(dt=B.instanceColor));const At={};At.attribute=dt,dt&&dt.data&&(At.data=dt.data),Y[Q]=At,q++}h.attributes=Y,h.attributesNum=q,h.index=J}function S(){const B=h.newAttributes;for(let F=0,et=B.length;F<et;F++)B[F]=0}function P(B){M(B,0)}function M(B,F){const et=h.newAttributes,J=h.enabledAttributes,Y=h.attributeDivisors;et[B]=1,J[B]===0&&(i.enableVertexAttribArray(B),J[B]=1),Y[B]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,F),Y[B]=F)}function I(){const B=h.newAttributes,F=h.enabledAttributes;for(let et=0,J=F.length;et<J;et++)F[et]!==B[et]&&(i.disableVertexAttribArray(et),F[et]=0)}function w(B,F,et,J,Y,$,q){q===!0?i.vertexAttribIPointer(B,F,et,Y,$):i.vertexAttribPointer(B,F,et,J,Y,$)}function G(B,F,et,J){if(n.isWebGL2===!1&&(B.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const Y=J.attributes,$=et.getAttributes(),q=F.defaultAttributeValues;for(const R in $){const Q=$[R];if(Q.location>=0){let ut=Y[R];if(ut===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor)),ut!==void 0){const dt=ut.normalized,At=ut.itemSize,St=e.get(ut);if(St===void 0)continue;const k=St.buffer,tt=St.type,yt=St.bytesPerElement,Wt=n.isWebGL2===!0&&(tt===i.INT||tt===i.UNSIGNED_INT||ut.gpuType===Nr);if(ut.isInterleavedBufferAttribute){const bt=ut.data,V=bt.stride,Qt=ut.offset;if(bt.isInstancedInterleavedBuffer){for(let _t=0;_t<Q.locationSize;_t++)M(Q.location+_t,bt.meshPerAttribute);B.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let _t=0;_t<Q.locationSize;_t++)P(Q.location+_t);i.bindBuffer(i.ARRAY_BUFFER,k);for(let _t=0;_t<Q.locationSize;_t++)w(Q.location+_t,At/Q.locationSize,tt,dt,V*yt,(Qt+At/Q.locationSize*_t)*yt,Wt)}else{if(ut.isInstancedBufferAttribute){for(let bt=0;bt<Q.locationSize;bt++)M(Q.location+bt,ut.meshPerAttribute);B.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let bt=0;bt<Q.locationSize;bt++)P(Q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,k);for(let bt=0;bt<Q.locationSize;bt++)w(Q.location+bt,At/Q.locationSize,tt,dt,At*yt,At/Q.locationSize*bt*yt,Wt)}}else if(q!==void 0){const dt=q[R];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Q.location,dt);break;case 3:i.vertexAttrib3fv(Q.location,dt);break;case 4:i.vertexAttrib4fv(Q.location,dt);break;default:i.vertexAttrib1fv(Q.location,dt)}}}}I()}function y(){K();for(const B in r){const F=r[B];for(const et in F){const J=F[et];for(const Y in J)g(J[Y].object),delete J[Y];delete F[et]}delete r[B]}}function x(B){if(r[B.id]===void 0)return;const F=r[B.id];for(const et in F){const J=F[et];for(const Y in J)g(J[Y].object),delete J[Y];delete F[et]}delete r[B.id]}function j(B){for(const F in r){const et=r[F];if(et[B.id]===void 0)continue;const J=et[B.id];for(const Y in J)g(J[Y].object),delete J[Y];delete et[B.id]}}function K(){L(),d=!0,h!==l&&(h=l,f(h.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:K,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:P,disableUnusedAttributes:I}}function Wc(i,t,e,n){const s=n.isWebGL2;let a;function o(h){a=h}function r(h,d){i.drawArrays(a,h,d),e.update(d,a,1)}function l(h,d,p){if(p===0)return;let A,f;if(s)A=i,f="drawArraysInstanced";else if(A=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",A===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[f](a,h,d,p),e.update(d,a,p)}this.setMode=o,this.render=r,this.renderInstances=l}function Xc(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const l=a(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const h=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=A>0,P=o||t.has("OES_texture_float"),M=S&&P,I=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:A,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:u,maxVaryings:c,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:P,floatVertexTextures:M,maxSamples:I}}function Bc(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new an,r=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,A){const f=p.length!==0||A||n!==0||s;return s=A,n=p.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,A){e=d(p,A,0)},this.setState=function(p,A,f){const g=p.clippingPlanes,m=p.clipIntersection,u=p.clipShadows,c=i.get(p);if(!s||g===null||g.length===0||a&&!u)a?d(null):h();else{const T=a?0:n,S=T*4;let P=c.clippingState||null;l.value=P,P=d(g,A,S,f);for(let M=0;M!==S;++M)P[M]=e[M];c.clippingState=P,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,A,f,g){const m=p!==null?p.length:0;let u=null;if(m!==0){if(u=l.value,g!==!0||u===null){const c=f+m*4,T=A.matrixWorldInverse;r.getNormalMatrix(T),(u===null||u.length<c)&&(u=new Float32Array(c));for(let S=0,P=f;S!==m;++S,P+=4)o.copy(p[S]).applyMatrix4(T,r),o.normal.toArray(u,P),u[P+3]=o.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,u}}function Hc(i){let t=new WeakMap;function e(o,r){return r===Ns?o.mapping=qn:r===Os&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Ns||r===Os)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new ih(l.height/2);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class zc extends qr{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qn=4,ir=[.125,.215,.35,.446,.526,.582],bn=20,Es=new zc,sr=new Gt;let Cs=null;const yn=(1+Math.sqrt(5))/2,Jn=1/yn,ar=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,yn,Jn),new U(0,yn,-Jn),new U(Jn,0,yn),new U(-Jn,0,yn),new U(yn,Jn,0),new U(-yn,Jn,0)];class rr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Cs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cs),t.scissorTest=!1,Fi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qn||t.mapping===$n?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xe,minFilter:xe,generateMipmaps:!1,type:Ai,format:Ue,colorSpace:Oe,depthBuffer:!1},s=or(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=or(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gc(a)),this._blurMaterial=Jc(a,t,e)}return s}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Es)}_sceneToCubeUV(t,e,n,s){const r=new Te(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,A=d.toneMapping;d.getClearColor(sr),d.toneMapping=hn,d.autoClear=!1;const f=new qs({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1}),g=new Ze(new gi,f);let m=!1;const u=t.background;u?u.isColor&&(f.color.copy(u),t.background=null,m=!0):(f.color.copy(sr),m=!0);for(let c=0;c<6;c++){const T=c%3;T===0?(r.up.set(0,l[c],0),r.lookAt(h[c],0,0)):T===1?(r.up.set(0,0,l[c]),r.lookAt(0,h[c],0)):(r.up.set(0,l[c],0),r.lookAt(0,0,h[c]));const S=this._cubeSize;Fi(s,T*S,c>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(g,r),d.render(t,r)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=A,d.autoClear=p,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qn||t.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lr());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const l=this._cubeSize;Fi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Es)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ar[(s-1)%ar.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,r){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ze(this._lodPlanes[s],h),A=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*bn-1),m=a/g,u=isFinite(a)?1+Math.floor(d*m):bn;u>bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${bn}`);const c=[];let T=0;for(let w=0;w<bn;++w){const G=w/m,y=Math.exp(-G*G/2);c.push(y),w===0?T+=y:w<u&&(T+=2*y)}for(let w=0;w<c.length;w++)c[w]=c[w]/T;A.envMap.value=t.texture,A.samples.value=u,A.weights.value=c,A.latitudinal.value=o==="latitudinal",r&&(A.poleAxis.value=r);const{_lodMax:S}=this;A.dTheta.value=g,A.mipInt.value=S-n;const P=this._sizeLods[s],M=3*P*(s>S-Qn?s-S+Qn:0),I=4*(this._cubeSize-P);Fi(e,M,I,3*P,2*P),l.setRenderTarget(e),l.render(p,Es)}}function Gc(i){const t=[],e=[],n=[];let s=i;const a=i-Qn+1+ir.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let l=1/r;o>i-Qn?l=ir[o-i+Qn-1]:o===0&&(l=0),n.push(l);const h=1/(r-2),d=-h,p=1+h,A=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,g=6,m=3,u=2,c=1,T=new Float32Array(m*g*f),S=new Float32Array(u*g*f),P=new Float32Array(c*g*f);for(let I=0;I<f;I++){const w=I%3*2/3-1,G=I>2?0:-1,y=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];T.set(y,m*g*I),S.set(A,u*g*I);const x=[I,I,I,I,I,I];P.set(x,c*g*I)}const M=new Cn;M.setAttribute("position",new Ne(T,m)),M.setAttribute("uv",new Ne(S,u)),M.setAttribute("faceIndex",new Ne(P,c)),t.push(M),s>Qn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function or(i,t,e){const n=new Pn(i,t,e);return n.texture.mapping=Ji,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jc(i,t,e){const n=new Float32Array(bn),s=new U(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function lr(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function hr(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jc(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,h=l===Ns||l===Os,d=l===qn||l===$n;if(h||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let p=t.get(r);return e===null&&(e=new rr(i)),p=h?e.fromEquirectangular(r,p):e.fromCubemap(r,p),t.set(r,p),p.texture}else{if(t.has(r))return t.get(r).texture;{const p=r.image;if(h&&p&&p.height>0||d&&p&&s(p)){e===null&&(e=new rr(i));const A=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,A),r.addEventListener("dispose",a),A.texture}else return null}}}return r}function s(r){let l=0;const h=6;for(let d=0;d<h;d++)r[d]!==void 0&&l++;return l===h}function a(r){const l=r.target;l.removeEventListener("dispose",a);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yc(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qc(i,t,e,n){const s={},a=new WeakMap;function o(p){const A=p.target;A.index!==null&&t.remove(A.index);for(const g in A.attributes)t.remove(A.attributes[g]);for(const g in A.morphAttributes){const m=A.morphAttributes[g];for(let u=0,c=m.length;u<c;u++)t.remove(m[u])}A.removeEventListener("dispose",o),delete s[A.id];const f=a.get(A);f&&(t.remove(f),a.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,e.memory.geometries--}function r(p,A){return s[A.id]===!0||(A.addEventListener("dispose",o),s[A.id]=!0,e.memory.geometries++),A}function l(p){const A=p.attributes;for(const g in A)t.update(A[g],i.ARRAY_BUFFER);const f=p.morphAttributes;for(const g in f){const m=f[g];for(let u=0,c=m.length;u<c;u++)t.update(m[u],i.ARRAY_BUFFER)}}function h(p){const A=[],f=p.index,g=p.attributes.position;let m=0;if(f!==null){const T=f.array;m=f.version;for(let S=0,P=T.length;S<P;S+=3){const M=T[S+0],I=T[S+1],w=T[S+2];A.push(M,I,I,w,w,M)}}else if(g!==void 0){const T=g.array;m=g.version;for(let S=0,P=T.length/3-1;S<P;S+=3){const M=S+0,I=S+1,w=S+2;A.push(M,I,I,w,w,M)}}else return;const u=new(zr(A)?Kr:Qr)(A,1);u.version=m;const c=a.get(p);c&&t.remove(c),a.set(p,u)}function d(p){const A=a.get(p);if(A){const f=p.index;f!==null&&A.version<f.version&&h(p)}else h(p);return a.get(p)}return{get:r,update:l,getWireframeAttribute:d}}function Kc(i,t,e,n){const s=n.isWebGL2;let a;function o(A){a=A}let r,l;function h(A){r=A.type,l=A.bytesPerElement}function d(A,f){i.drawElements(a,f,r,A*l),e.update(f,a,1)}function p(A,f,g){if(g===0)return;let m,u;if(s)m=i,u="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](a,f,r,A*l,g),e.update(f,a,g)}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p}function Zc(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=r*(a/3);break;case i.LINES:e.lines+=r*(a/2);break;case i.LINE_STRIP:e.lines+=r*(a-1);break;case i.LINE_LOOP:e.lines+=r*a;break;case i.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qc(i,t){return i[0]-t[0]}function $c(i,t){return Math.abs(t[1])-Math.abs(i[1])}function td(i,t,e){const n={},s=new Float32Array(8),a=new WeakMap,o=new re,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function l(h,d,p){const A=h.morphTargetInfluences;if(t.isWebGL2===!0){const f=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=f!==void 0?f.length:0;let m=a.get(d);if(m===void 0||m.count!==g){let B=function(){K.dispose(),a.delete(d),d.removeEventListener("dispose",B)};m!==void 0&&m.texture.dispose();const T=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let G=0;T===!0&&(G=1),S===!0&&(G=2),P===!0&&(G=3);let y=d.attributes.position.count*G,x=1;y>t.maxTextureSize&&(x=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const j=new Float32Array(y*x*4*g),K=new jr(j,y,x,g);K.type=on,K.needsUpdate=!0;const L=G*4;for(let F=0;F<g;F++){const et=M[F],J=I[F],Y=w[F],$=y*x*4*F;for(let q=0;q<et.count;q++){const R=q*L;T===!0&&(o.fromBufferAttribute(et,q),j[$+R+0]=o.x,j[$+R+1]=o.y,j[$+R+2]=o.z,j[$+R+3]=0),S===!0&&(o.fromBufferAttribute(J,q),j[$+R+4]=o.x,j[$+R+5]=o.y,j[$+R+6]=o.z,j[$+R+7]=0),P===!0&&(o.fromBufferAttribute(Y,q),j[$+R+8]=o.x,j[$+R+9]=o.y,j[$+R+10]=o.z,j[$+R+11]=Y.itemSize===4?o.w:1)}}m={count:g,texture:K,size:new Mt(y,x)},a.set(d,m),d.addEventListener("dispose",B)}let u=0;for(let T=0;T<A.length;T++)u+=A[T];const c=d.morphTargetsRelative?1:1-u;p.getUniforms().setValue(i,"morphTargetBaseInfluence",c),p.getUniforms().setValue(i,"morphTargetInfluences",A),p.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const f=A===void 0?0:A.length;let g=n[d.id];if(g===void 0||g.length!==f){g=[];for(let S=0;S<f;S++)g[S]=[S,0];n[d.id]=g}for(let S=0;S<f;S++){const P=g[S];P[0]=S,P[1]=A[S]}g.sort($c);for(let S=0;S<8;S++)S<f&&g[S][1]?(r[S][0]=g[S][0],r[S][1]=g[S][1]):(r[S][0]=Number.MAX_SAFE_INTEGER,r[S][1]=0);r.sort(qc);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let c=0;for(let S=0;S<8;S++){const P=r[S],M=P[0],I=P[1];M!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+S)!==m[M]&&d.setAttribute("morphTarget"+S,m[M]),u&&d.getAttribute("morphNormal"+S)!==u[M]&&d.setAttribute("morphNormal"+S,u[M]),s[S]=I,c+=I):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),s[S]=0)}const T=d.morphTargetsRelative?1:1-c;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ed(i,t,e,n){let s=new WeakMap;function a(l){const h=n.render.frame,d=l.geometry,p=t.get(l,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const A=l.skeleton;s.get(A)!==h&&(A.update(),s.set(A,h))}return p}function o(){s=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const no=new be,io=new jr,so=new Wl,ao=new $r,ur=[],cr=[],dr=new Float32Array(16),pr=new Float32Array(9),Ar=new Float32Array(4);function ii(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=ur[s];if(a===void 0&&(a=new Float32Array(s),ur[s]=a),t!==0){n.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,i[o].toArray(a,r)}return a}function ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zi(i,t){let e=cr[t];e===void 0&&(e=new Int32Array(t),cr[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;i.uniform2fv(this.addr,t),ie(e,t)}}function sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;i.uniform3fv(this.addr,t),ie(e,t)}}function ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;i.uniform4fv(this.addr,t),ie(e,t)}}function rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Ar.set(n),i.uniformMatrix2fv(this.addr,!1,Ar),ie(e,n)}}function od(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;pr.set(n),i.uniformMatrix3fv(this.addr,!1,pr),ie(e,n)}}function ld(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;dr.set(n),i.uniformMatrix4fv(this.addr,!1,dr),ie(e,n)}}function hd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;i.uniform2iv(this.addr,t),ie(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;i.uniform3iv(this.addr,t),ie(e,t)}}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;i.uniform4iv(this.addr,t),ie(e,t)}}function pd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;i.uniform2uiv(this.addr,t),ie(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;i.uniform3uiv(this.addr,t),ie(e,t)}}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;i.uniform4uiv(this.addr,t),ie(e,t)}}function gd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||no,s)}function Sd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||so,s)}function _d(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ao,s)}function yd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||io,s)}function bd(i){switch(i){case 5126:return nd;case 35664:return id;case 35665:return sd;case 35666:return ad;case 35674:return rd;case 35675:return od;case 35676:return ld;case 5124:case 35670:return hd;case 35667:case 35671:return ud;case 35668:case 35672:return cd;case 35669:case 35673:return dd;case 5125:return pd;case 36294:return Ad;case 36295:return fd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return yd}}function vd(i,t){i.uniform1fv(this.addr,t)}function Md(i,t){const e=ii(t,this.size,2);i.uniform2fv(this.addr,e)}function xd(i,t){const e=ii(t,this.size,3);i.uniform3fv(this.addr,e)}function Td(i,t){const e=ii(t,this.size,4);i.uniform4fv(this.addr,e)}function wd(i,t){const e=ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pd(i,t){const e=ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ed(i,t){const e=ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cd(i,t){i.uniform1iv(this.addr,t)}function Id(i,t){i.uniform2iv(this.addr,t)}function Rd(i,t){i.uniform3iv(this.addr,t)}function Ud(i,t){i.uniform4iv(this.addr,t)}function Ld(i,t){i.uniform1uiv(this.addr,t)}function Vd(i,t){i.uniform2uiv(this.addr,t)}function Dd(i,t){i.uniform3uiv(this.addr,t)}function kd(i,t){i.uniform4uiv(this.addr,t)}function Nd(i,t,e){const n=this.cache,s=t.length,a=Zi(e,s);ne(n,a)||(i.uniform1iv(this.addr,a),ie(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||no,a[o])}function Od(i,t,e){const n=this.cache,s=t.length,a=Zi(e,s);ne(n,a)||(i.uniform1iv(this.addr,a),ie(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||so,a[o])}function Fd(i,t,e){const n=this.cache,s=t.length,a=Zi(e,s);ne(n,a)||(i.uniform1iv(this.addr,a),ie(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ao,a[o])}function Wd(i,t,e){const n=this.cache,s=t.length,a=Zi(e,s);ne(n,a)||(i.uniform1iv(this.addr,a),ie(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||io,a[o])}function Xd(i){switch(i){case 5126:return vd;case 35664:return Md;case 35665:return xd;case 35666:return Td;case 35674:return wd;case 35675:return Pd;case 35676:return Ed;case 5124:case 35670:return Cd;case 35667:case 35671:return Id;case 35668:case 35672:return Rd;case 35669:case 35673:return Ud;case 5125:return Ld;case 36294:return Vd;case 36295:return Dd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Wd}}class Bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=bd(e.type)}}class Hd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Xd(e.type)}}class zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function fr(i,t){i.seq.push(t),i.map[t.id]=t}function Gd(i,t,e){const n=i.name,s=n.length;for(Is.lastIndex=0;;){const a=Is.exec(n),o=Is.lastIndex;let r=a[1];const l=a[2]==="]",h=a[3];if(l&&(r=r|0),h===void 0||h==="["&&o+2===s){fr(e,h===void 0?new Bd(r,i,t):new Hd(r,i,t));break}else{let p=e.map[r];p===void 0&&(p=new zd(r),fr(e,p)),e=p}}}class Bi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Gd(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function mr(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Jd=0;function jd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function Yd(i){switch(i){case Oe:return["Linear","( value )"];case Jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function gr(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+jd(i.getShaderSource(t),o)}else return s}function Qd(i,t){const e=Yd(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Kd(i,t){let e;switch(t){case Bo:e="Linear";break;case Ho:e="Reinhard";break;case zo:e="OptimizedCineon";break;case Go:e="ACESFilmic";break;case Jo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function qd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $d(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:r}}return e}function hi(i){return i!==""}function Sr(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _r(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(tp,np)}const ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function np(i,t){let e=Ut[t];if(e===void 0){const n=ep.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zs(e)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yr(i){return i.replace(ip,sp)}function sp(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function br(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ur?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qn:case $n:t="ENVMAP_TYPE_CUBE";break;case Ji:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dr:t="ENVMAP_BLENDING_MULTIPLY";break;case Wo:t="ENVMAP_BLENDING_MIX";break;case Xo:t="ENVMAP_BLENDING_ADD";break}return t}function hp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function up(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=ap(e),h=rp(e),d=op(e),p=lp(e),A=hp(e),f=e.isWebGL2?"":Zd(e),g=qd(a),m=s.createProgram();let u,c,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hi).join(`
`),u.length>0&&(u+=`
`),c=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hi).join(`
`),c.length>0&&(c+=`
`)):(u=[br(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),c=[f,br(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==hn?Kd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Qd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),o=zs(o),o=Sr(o,e),o=_r(o,e),r=zs(r),r=Sr(r,e),r=_r(r,e),o=yr(o),r=yr(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=T+u+o,P=T+c+r,M=mr(s,s.VERTEX_SHADER,S),I=mr(s,s.FRAGMENT_SHADER,P);if(s.attachShader(m,M),s.attachShader(m,I),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const y=s.getProgramInfoLog(m).trim(),x=s.getShaderInfoLog(M).trim(),j=s.getShaderInfoLog(I).trim();let K=!0,L=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,I);else{const B=gr(s,M,"vertex"),F=gr(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+B+`
`+F)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(x===""||j==="")&&(L=!1);L&&(this.diagnostics={runnable:K,programLog:y,vertexShader:{log:x,prefix:u},fragmentShader:{log:j,prefix:c}})}s.deleteShader(M),s.deleteShader(I);let w;this.getUniforms=function(){return w===void 0&&(w=new Bi(s,m)),w};let G;return this.getAttributes=function(){return G===void 0&&(G=$d(s,m)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jd++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=I,this}let cp=0;class dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pp(t),e.set(t,n)),n}}class pp{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function Ap(i,t,e,n,s,a,o){const r=new Zs,l=new dp,h=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,A=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===0?"uv":`uv${y}`}function u(y,x,j,K,L){const B=K.fog,F=L.geometry,et=y.isMeshStandardMaterial?K.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||et),Y=J&&J.mapping===Ji?J.image.height:null,$=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,R=q!==void 0?q.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let ut,dt,At,St;if($){const zt=ke[$];ut=zt.vertexShader,dt=zt.fragmentShader}else ut=y.vertexShader,dt=y.fragmentShader,l.update(y),At=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const k=i.getRenderTarget(),tt=L.isInstancedMesh===!0,yt=!!y.map,Wt=!!y.matcap,bt=!!J,V=!!y.aoMap,Qt=!!y.lightMap,_t=!!y.bumpMap,Ct=!!y.normalMap,Tt=!!y.displacementMap,Ht=!!y.emissiveMap,Lt=!!y.metalnessMap,It=!!y.roughnessMap,Ft=y.anisotropy>0,$t=y.clearcoat>0,se=y.iridescence>0,v=y.sheen>0,_=y.transmission>0,O=Ft&&!!y.anisotropyMap,st=$t&&!!y.clearcoatMap,nt=$t&&!!y.clearcoatNormalMap,at=$t&&!!y.clearcoatRoughnessMap,gt=se&&!!y.iridescenceMap,rt=se&&!!y.iridescenceThicknessMap,W=v&&!!y.sheenColorMap,E=v&&!!y.sheenRoughnessMap,Z=!!y.specularMap,ft=!!y.specularColorMap,lt=!!y.specularIntensityMap,pt=_&&!!y.transmissionMap,Et=_&&!!y.thicknessMap,Ot=!!y.gradientMap,C=!!y.alphaMap,ct=y.alphaTest>0,X=!!y.alphaHash,it=!!y.extensions,ot=!!F.attributes.uv1,Dt=!!F.attributes.uv2,Xt=!!F.attributes.uv3;let Bt=hn;return y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Bt=i.toneMapping),{isWebGL2:d,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:dt,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:tt,instancingColor:tt&&L.instanceColor!==null,supportsVertexTextures:A,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Oe,map:yt,matcap:Wt,envMap:bt,envMapMode:bt&&J.mapping,envMapCubeUVHeight:Y,aoMap:V,lightMap:Qt,bumpMap:_t,normalMap:Ct,displacementMap:A&&Tt,emissiveMap:Ht,normalMapObjectSpace:Ct&&y.normalMapType===rl,normalMapTangentSpace:Ct&&y.normalMapType===al,metalnessMap:Lt,roughnessMap:It,anisotropy:Ft,anisotropyMap:O,clearcoat:$t,clearcoatMap:st,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:se,iridescenceMap:gt,iridescenceThicknessMap:rt,sheen:v,sheenColorMap:W,sheenRoughnessMap:E,specularMap:Z,specularColorMap:ft,specularIntensityMap:lt,transmission:_,transmissionMap:pt,thicknessMap:Et,gradientMap:Ot,opaque:y.transparent===!1&&y.blending===Kn,alphaMap:C,alphaTest:ct,alphaHash:X,combine:y.combine,mapUv:yt&&m(y.map.channel),aoMapUv:V&&m(y.aoMap.channel),lightMapUv:Qt&&m(y.lightMap.channel),bumpMapUv:_t&&m(y.bumpMap.channel),normalMapUv:Ct&&m(y.normalMap.channel),displacementMapUv:Tt&&m(y.displacementMap.channel),emissiveMapUv:Ht&&m(y.emissiveMap.channel),metalnessMapUv:Lt&&m(y.metalnessMap.channel),roughnessMapUv:It&&m(y.roughnessMap.channel),anisotropyMapUv:O&&m(y.anisotropyMap.channel),clearcoatMapUv:st&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:W&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:E&&m(y.sheenRoughnessMap.channel),specularMapUv:Z&&m(y.specularMap.channel),specularColorMapUv:ft&&m(y.specularColorMap.channel),specularIntensityMapUv:lt&&m(y.specularIntensityMap.channel),transmissionMapUv:pt&&m(y.transmissionMap.channel),thicknessMapUv:Et&&m(y.thicknessMap.channel),alphaMapUv:C&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ct||Ft),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ot,vertexUv2s:Dt,vertexUv3s:Xt,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(yt||C),fog:!!B,useFog:y.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:Q,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&y.map.colorSpace===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===me,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:it&&y.extensions.derivatives===!0,extensionFragDepth:it&&y.extensions.fragDepth===!0,extensionDrawBuffers:it&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)x.push(j),x.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(T(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){r.disableAll(),x.isWebGL2&&r.enable(0),x.supportsVertexTextures&&r.enable(1),x.instancing&&r.enable(2),x.instancingColor&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.skinning&&r.enable(4),x.morphTargets&&r.enable(5),x.morphNormals&&r.enable(6),x.morphColors&&r.enable(7),x.premultipliedAlpha&&r.enable(8),x.shadowMapEnabled&&r.enable(9),x.useLegacyLights&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),y.push(r.mask)}function P(y){const x=g[y.type];let j;if(x){const K=ke[x];j=$l.clone(K.uniforms)}else j=y.uniforms;return j}function M(y,x){let j;for(let K=0,L=h.length;K<L;K++){const B=h[K];if(B.cacheKey===x){j=B,++j.usedTimes;break}}return j===void 0&&(j=new up(i,x,y,a),h.push(j)),j}function I(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function G(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:P,acquireProgram:M,releaseProgram:I,releaseShaderCache:w,programs:h,dispose:G}}function fp(){let i=new WeakMap;function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function e(a){i.delete(a)}function n(a,o,r){i.get(a)[o]=r}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function mp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vr(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mr(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(p,A,f,g,m,u){let c=i[t];return c===void 0?(c={id:p.id,object:p,geometry:A,material:f,groupOrder:g,renderOrder:p.renderOrder,z:m,group:u},i[t]=c):(c.id=p.id,c.object=p,c.geometry=A,c.material=f,c.groupOrder=g,c.renderOrder=p.renderOrder,c.z=m,c.group=u),t++,c}function r(p,A,f,g,m,u){const c=o(p,A,f,g,m,u);f.transmission>0?n.push(c):f.transparent===!0?s.push(c):e.push(c)}function l(p,A,f,g,m,u){const c=o(p,A,f,g,m,u);f.transmission>0?n.unshift(c):f.transparent===!0?s.unshift(c):e.unshift(c)}function h(p,A){e.length>1&&e.sort(p||mp),n.length>1&&n.sort(A||vr),s.length>1&&s.sort(A||vr)}function d(){for(let p=t,A=i.length;p<A;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:r,unshift:l,finish:d,sort:h}}function gp(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new Mr,i.set(n,[o])):s>=a.length?(o=new Mr,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function _p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yp=0;function bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vp(i,t){const e=new Sp,n=_p(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)s.probe.push(new U);const a=new U,o=new ee,r=new ee;function l(d,p){let A=0,f=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let m=0,u=0,c=0,T=0,S=0,P=0,M=0,I=0,w=0,G=0;d.sort(bp);const y=p===!0?Math.PI:1;for(let j=0,K=d.length;j<K;j++){const L=d[j],B=L.color,F=L.intensity,et=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)A+=B.r*F*y,f+=B.g*F*y,g+=B.b*F*y;else if(L.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],F);else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const $=L.shadow,q=n.get(L);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.directionalShadow[m]=q,s.directionalShadowMap[m]=J,s.directionalShadowMatrix[m]=L.shadow.matrix,P++}s.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(F*y),Y.distance=et,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[c]=Y;const $=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&G++),s.spotLightMatrix[c]=$.matrix,L.castShadow){const q=n.get(L);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.spotShadow[c]=q,s.spotShadowMap[c]=J,I++}c++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(B).multiplyScalar(F),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[T]=Y,T++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*y),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,q=n.get(L);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,s.pointShadow[u]=q,s.pointShadowMap[u]=J,s.pointShadowMatrix[u]=L.shadow.matrix,M++}s.point[u]=Y,u++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(F*y),Y.groundColor.copy(L.groundColor).multiplyScalar(F*y),s.hemi[S]=Y,S++}}T>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ht.LTC_FLOAT_1,s.rectAreaLTC2=ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ht.LTC_HALF_1,s.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=A,s.ambient[1]=f,s.ambient[2]=g;const x=s.hash;(x.directionalLength!==m||x.pointLength!==u||x.spotLength!==c||x.rectAreaLength!==T||x.hemiLength!==S||x.numDirectionalShadows!==P||x.numPointShadows!==M||x.numSpotShadows!==I||x.numSpotMaps!==w)&&(s.directional.length=m,s.spot.length=c,s.rectArea.length=T,s.point.length=u,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=I+w-G,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=G,x.directionalLength=m,x.pointLength=u,x.spotLength=c,x.rectAreaLength=T,x.hemiLength=S,x.numDirectionalShadows=P,x.numPointShadows=M,x.numSpotShadows=I,x.numSpotMaps=w,s.version=yp++)}function h(d,p){let A=0,f=0,g=0,m=0,u=0;const c=p.matrixWorldInverse;for(let T=0,S=d.length;T<S;T++){const P=d[T];if(P.isDirectionalLight){const M=s.directional[A];M.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(c),A++}else if(P.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(c),M.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(c),g++}else if(P.isRectAreaLight){const M=s.rectArea[m];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(c),r.identity(),o.copy(P.matrixWorld),o.premultiply(c),r.extractRotation(o),M.halfWidth.set(P.width*.5,0,0),M.halfHeight.set(0,P.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(P.isPointLight){const M=s.point[f];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(c),f++}else if(P.isHemisphereLight){const M=s.hemi[u];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(c),u++}}}return{setup:l,setupView:h,state:s}}function xr(i,t){const e=new vp(i,t),n=[],s=[];function a(){n.length=0,s.length=0}function o(p){n.push(p)}function r(p){s.push(p)}function l(p){e.setup(n,p)}function h(p){e.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:r}}function Mp(i,t){let e=new WeakMap;function n(a,o=0){const r=e.get(a);let l;return r===void 0?(l=new xr(i,t),e.set(a,[l])):o>=r.length?(l=new xr(i,t),r.push(l)):l=r[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class xp extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tp extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ep(i,t,e){let n=new to;const s=new Mt,a=new Mt,o=new re,r=new xp({depthPacking:sl}),l=new Tp,h={},d=e.maxTextureSize,p={[cn]:me,[me]:cn,[Qe]:Qe},A=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:wp,fragmentShader:Pp}),f=A.clone();f.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ze(g,A),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let c=this.type;this.render=function(M,I,w){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||M.length===0)return;const G=i.getRenderTarget(),y=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ln),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=c!==je&&this.type===je,L=c===je&&this.type!==je;for(let B=0,F=M.length;B<F;B++){const et=M[B],J=et.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const Y=J.getFrameExtents();if(s.multiply(Y),a.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Y.x),s.x=a.x*Y.x,J.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Y.y),s.y=a.y*Y.y,J.mapSize.y=a.y)),J.map===null||K===!0||L===!0){const q=this.type!==je?{minFilter:Ae,magFilter:Ae}:{};J.map!==null&&J.map.dispose(),J.map=new Pn(s.x,s.y,q),J.map.texture.name=et.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const $=J.getViewportCount();for(let q=0;q<$;q++){const R=J.getViewport(q);o.set(a.x*R.x,a.y*R.y,a.x*R.z,a.y*R.w),j.viewport(o),J.updateMatrices(et,q),n=J.getFrustum(),P(I,w,J.camera,et,this.type)}J.isPointLightShadow!==!0&&this.type===je&&T(J,w),J.needsUpdate=!1}c=this.type,u.needsUpdate=!1,i.setRenderTarget(G,y,x)};function T(M,I){const w=t.update(m);A.defines.VSM_SAMPLES!==M.blurSamples&&(A.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,A.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Pn(s.x,s.y)),A.uniforms.shadow_pass.value=M.map.texture,A.uniforms.resolution.value=M.mapSize,A.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(I,null,w,A,m,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(I,null,w,f,m,null)}function S(M,I,w,G){let y=null;const x=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(x!==void 0)y=x;else if(y=w.isPointLight===!0?l:r,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const j=y.uuid,K=I.uuid;let L=h[j];L===void 0&&(L={},h[j]=L);let B=L[K];B===void 0&&(B=y.clone(),L[K]=B),y=B}if(y.visible=I.visible,y.wireframe=I.wireframe,G===je?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:p[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=i.properties.get(y);j.light=w}return y}function P(M,I,w,G,y){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===je)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const K=t.update(M),L=M.material;if(Array.isArray(L)){const B=K.groups;for(let F=0,et=B.length;F<et;F++){const J=B[F],Y=L[J.materialIndex];if(Y&&Y.visible){const $=S(M,Y,G,y);i.renderBufferDirect(w,null,K,$,M,J)}}}else if(L.visible){const B=S(M,L,G,y);i.renderBufferDirect(w,null,K,B,M,null)}}const j=M.children;for(let K=0,L=j.length;K<L;K++)P(j[K],I,w,G,y)}}function Cp(i,t,e){const n=e.isWebGL2;function s(){let C=!1;const ct=new re;let X=null;const it=new re(0,0,0,0);return{setMask:function(ot){X!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),X=ot)},setLocked:function(ot){C=ot},setClear:function(ot,Dt,Xt,Bt,ge){ge===!0&&(ot*=Bt,Dt*=Bt,Xt*=Bt),ct.set(ot,Dt,Xt,Bt),it.equals(ct)===!1&&(i.clearColor(ot,Dt,Xt,Bt),it.copy(ct))},reset:function(){C=!1,X=null,it.set(-1,0,0,0)}}}function a(){let C=!1,ct=null,X=null,it=null;return{setTest:function(ot){ot?k(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(ot){ct!==ot&&!C&&(i.depthMask(ot),ct=ot)},setFunc:function(ot){if(X!==ot){switch(ot){case Lo:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Oo:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=ot}},setLocked:function(ot){C=ot},setClear:function(ot){it!==ot&&(i.clearDepth(ot),it=ot)},reset:function(){C=!1,ct=null,X=null,it=null}}}function o(){let C=!1,ct=null,X=null,it=null,ot=null,Dt=null,Xt=null,Bt=null,ge=null;return{setTest:function(zt){C||(zt?k(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(zt){ct!==zt&&!C&&(i.stencilMask(zt),ct=zt)},setFunc:function(zt,Le,ue){(X!==zt||it!==Le||ot!==ue)&&(i.stencilFunc(zt,Le,ue),X=zt,it=Le,ot=ue)},setOp:function(zt,Le,ue){(Dt!==zt||Xt!==Le||Bt!==ue)&&(i.stencilOp(zt,Le,ue),Dt=zt,Xt=Le,Bt=ue)},setLocked:function(zt){C=zt},setClear:function(zt){ge!==zt&&(i.clearStencil(zt),ge=zt)},reset:function(){C=!1,ct=null,X=null,it=null,ot=null,Dt=null,Xt=null,Bt=null,ge=null}}}const r=new s,l=new a,h=new o,d=new WeakMap,p=new WeakMap;let A={},f={},g=new WeakMap,m=[],u=null,c=!1,T=null,S=null,P=null,M=null,I=null,w=null,G=null,y=!1,x=null,j=null,K=null,L=null,B=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,J=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),et=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),et=J>=2);let $=null,q={};const R=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ut=new re().fromArray(R),dt=new re().fromArray(Q);function At(C,ct,X,it){const ot=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(C,Dt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<X;Xt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ct,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ct+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return Dt}const St={};St[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),h.setClear(0),k(i.DEPTH_TEST),l.setFunc(ks),Tt(!1),Ht(la),k(i.CULL_FACE),_t(ln);function k(C){A[C]!==!0&&(i.enable(C),A[C]=!0)}function tt(C){A[C]!==!1&&(i.disable(C),A[C]=!1)}function yt(C,ct){return f[C]!==ct?(i.bindFramebuffer(C,ct),f[C]=ct,n&&(C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct)),!0):!1}function Wt(C,ct){let X=m,it=!1;if(C)if(X=g.get(ct),X===void 0&&(X=[],g.set(ct,X)),C.isWebGLMultipleRenderTargets){const ot=C.texture;if(X.length!==ot.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Xt=ot.length;Dt<Xt;Dt++)X[Dt]=i.COLOR_ATTACHMENT0+Dt;X.length=ot.length,it=!0}}else X[0]!==i.COLOR_ATTACHMENT0&&(X[0]=i.COLOR_ATTACHMENT0,it=!0);else X[0]!==i.BACK&&(X[0]=i.BACK,it=!0);it&&(e.isWebGL2?i.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function bt(C){return u!==C?(i.useProgram(C),u=C,!0):!1}const V={[jn]:i.FUNC_ADD,[vo]:i.FUNC_SUBTRACT,[Mo]:i.FUNC_REVERSE_SUBTRACT};if(n)V[da]=i.MIN,V[pa]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(V[da]=C.MIN_EXT,V[pa]=C.MAX_EXT)}const Qt={[xo]:i.ZERO,[To]:i.ONE,[wo]:i.SRC_COLOR,[Lr]:i.SRC_ALPHA,[Uo]:i.SRC_ALPHA_SATURATE,[Io]:i.DST_COLOR,[Eo]:i.DST_ALPHA,[Po]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[Ro]:i.ONE_MINUS_DST_COLOR,[Co]:i.ONE_MINUS_DST_ALPHA};function _t(C,ct,X,it,ot,Dt,Xt,Bt){if(C===ln){c===!0&&(tt(i.BLEND),c=!1);return}if(c===!1&&(k(i.BLEND),c=!0),C!==bo){if(C!==T||Bt!==y){if((S!==jn||I!==jn)&&(i.blendEquation(i.FUNC_ADD),S=jn,I=jn),Bt)switch(C){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}P=null,M=null,w=null,G=null,T=C,y=Bt}return}ot=ot||ct,Dt=Dt||X,Xt=Xt||it,(ct!==S||ot!==I)&&(i.blendEquationSeparate(V[ct],V[ot]),S=ct,I=ot),(X!==P||it!==M||Dt!==w||Xt!==G)&&(i.blendFuncSeparate(Qt[X],Qt[it],Qt[Dt],Qt[Xt]),P=X,M=it,w=Dt,G=Xt),T=C,y=!1}function Ct(C,ct){C.side===Qe?tt(i.CULL_FACE):k(i.CULL_FACE);let X=C.side===me;ct&&(X=!X),Tt(X),C.blending===Kn&&C.transparent===!1?_t(ln):_t(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),r.setMask(C.colorWrite);const it=C.stencilWrite;h.setTest(it),it&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),It(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(C){x!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),x=C)}function Ht(C){C!==So?(k(i.CULL_FACE),C!==j&&(C===la?i.cullFace(i.BACK):C===_o?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),j=C}function Lt(C){C!==K&&(et&&i.lineWidth(C),K=C)}function It(C,ct,X){C?(k(i.POLYGON_OFFSET_FILL),(L!==ct||B!==X)&&(i.polygonOffset(ct,X),L=ct,B=X)):tt(i.POLYGON_OFFSET_FILL)}function Ft(C){C?k(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function $t(C){C===void 0&&(C=i.TEXTURE0+F-1),$!==C&&(i.activeTexture(C),$=C)}function se(C,ct,X){X===void 0&&($===null?X=i.TEXTURE0+F-1:X=$);let it=q[X];it===void 0&&(it={type:void 0,texture:void 0},q[X]=it),(it.type!==C||it.texture!==ct)&&($!==X&&(i.activeTexture(X),$=X),i.bindTexture(C,ct||St[C]),it.type=C,it.texture=ct)}function v(){const C=q[$];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function E(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(C){ut.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ut.copy(C))}function lt(C){dt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),dt.copy(C))}function pt(C,ct){let X=p.get(ct);X===void 0&&(X=new WeakMap,p.set(ct,X));let it=X.get(C);it===void 0&&(it=i.getUniformBlockIndex(ct,C.name),X.set(C,it))}function Et(C,ct){const it=p.get(ct).get(C);d.get(ct)!==it&&(i.uniformBlockBinding(ct,it,C.__bindingPointIndex),d.set(ct,it))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),A={},$=null,q={},f={},g=new WeakMap,m=[],u=null,c=!1,T=null,S=null,P=null,M=null,I=null,w=null,G=null,y=!1,x=null,j=null,K=null,L=null,B=null,ut.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),h.reset()}return{buffers:{color:r,depth:l,stencil:h},enable:k,disable:tt,bindFramebuffer:yt,drawBuffers:Wt,useProgram:bt,setBlending:_t,setMaterial:Ct,setFlipSided:Tt,setCullFace:Ht,setLineWidth:Lt,setPolygonOffset:It,setScissorTest:Ft,activeTexture:$t,bindTexture:se,unbindTexture:v,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:E,texImage3D:Z,updateUBOMapping:pt,uniformBlockBinding:Et,texStorage2D:rt,texStorage3D:W,texSubImage2D:st,texSubImage3D:nt,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:ft,viewport:lt,reset:Ot}}function Ip(i,t,e,n,s,a,o){const r=s.isWebGL2,l=s.maxTextures,h=s.maxCubemapSize,d=s.maxTextureSize,p=s.maxSamples,A=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const u=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(v,_){return c?new OffscreenCanvas(v,_):Gi("canvas")}function S(v,_,O,st){let nt=1;if((v.width>st||v.height>st)&&(nt=st/Math.max(v.width,v.height)),nt<1||_===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const at=_?zi:Math.floor,gt=at(nt*v.width),rt=at(nt*v.height);m===void 0&&(m=T(gt,rt));const W=O?T(gt,rt):m;return W.width=gt,W.height=rt,W.getContext("2d").drawImage(v,0,0,gt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+gt+"x"+rt+")."),W}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function P(v){return Bs(v.width)&&Bs(v.height)}function M(v){return r?!1:v.wrapS!==Re||v.wrapT!==Re||v.minFilter!==Ae&&v.minFilter!==xe}function I(v,_){return v.generateMipmaps&&_&&v.minFilter!==Ae&&v.minFilter!==xe}function w(v){i.generateMipmap(v)}function G(v,_,O,st,nt=!1){if(r===!1)return _;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let at=_;return _===i.RED&&(O===i.FLOAT&&(at=i.R32F),O===i.HALF_FLOAT&&(at=i.R16F),O===i.UNSIGNED_BYTE&&(at=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(at=i.R8UI),O===i.UNSIGNED_SHORT&&(at=i.R16UI),O===i.UNSIGNED_INT&&(at=i.R32UI),O===i.BYTE&&(at=i.R8I),O===i.SHORT&&(at=i.R16I),O===i.INT&&(at=i.R32I)),_===i.RG&&(O===i.FLOAT&&(at=i.RG32F),O===i.HALF_FLOAT&&(at=i.RG16F),O===i.UNSIGNED_BYTE&&(at=i.RG8)),_===i.RGBA&&(O===i.FLOAT&&(at=i.RGBA32F),O===i.HALF_FLOAT&&(at=i.RGBA16F),O===i.UNSIGNED_BYTE&&(at=st===Jt&&nt===!1?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)),(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(v,_,O){return I(v,O)===!0||v.isFramebufferTexture&&v.minFilter!==Ae&&v.minFilter!==xe?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function x(v){return v===Ae||v===Aa||v===ss?i.NEAREST:i.LINEAR}function j(v){const _=v.target;_.removeEventListener("dispose",j),L(_),_.isVideoTexture&&g.delete(_)}function K(v){const _=v.target;_.removeEventListener("dispose",K),F(_)}function L(v){const _=n.get(v);if(_.__webglInit===void 0)return;const O=v.source,st=u.get(O);if(st){const nt=st[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&B(v),Object.keys(st).length===0&&u.delete(O)}n.remove(v)}function B(v){const _=n.get(v);i.deleteTexture(_.__webglTexture);const O=v.source,st=u.get(O);delete st[_.__cacheKey],o.memory.textures--}function F(v){const _=v.texture,O=n.get(v),st=n.get(_);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(O.__webglFramebuffer[nt]))for(let at=0;at<O.__webglFramebuffer[nt].length;at++)i.deleteFramebuffer(O.__webglFramebuffer[nt][at]);else i.deleteFramebuffer(O.__webglFramebuffer[nt]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[nt])}else{if(Array.isArray(O.__webglFramebuffer))for(let nt=0;nt<O.__webglFramebuffer.length;nt++)i.deleteFramebuffer(O.__webglFramebuffer[nt]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let nt=0;nt<O.__webglColorRenderbuffer.length;nt++)O.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[nt]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let nt=0,at=_.length;nt<at;nt++){const gt=n.get(_[nt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(_[nt])}n.remove(_),n.remove(v)}let et=0;function J(){et=0}function Y(){const v=et;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),et+=1,v}function $(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function q(v,_){const O=n.get(v);if(v.isVideoTexture&&$t(v),v.isRenderTargetTexture===!1&&v.version>0&&O.__version!==v.version){const st=v.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(O,v,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function R(v,_){const O=n.get(v);if(v.version>0&&O.__version!==v.version){yt(O,v,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(v,_){const O=n.get(v);if(v.version>0&&O.__version!==v.version){yt(O,v,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ut(v,_){const O=n.get(v);if(v.version>0&&O.__version!==v.version){Wt(O,v,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const dt={[Fs]:i.REPEAT,[Re]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},At={[Ae]:i.NEAREST,[Aa]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[xe]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},St={[ll]:i.NEVER,[fl]:i.ALWAYS,[hl]:i.LESS,[cl]:i.LEQUAL,[ul]:i.EQUAL,[Al]:i.GEQUAL,[dl]:i.GREATER,[pl]:i.NOTEQUAL};function k(v,_,O){if(O?(i.texParameteri(v,i.TEXTURE_WRAP_S,dt[_.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,dt[_.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,dt[_.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,At[_.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,At[_.minFilter])):(i.texParameteri(v,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(v,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Re||_.wrapT!==Re)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,i.TEXTURE_MAG_FILTER,x(_.magFilter)),i.texParameteri(v,i.TEXTURE_MIN_FILTER,x(_.minFilter)),_.minFilter!==Ae&&_.minFilter!==xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ae||_.minFilter!==ss&&_.minFilter!==pi||_.type===on&&t.has("OES_texture_float_linear")===!1||r===!1&&_.type===Ai&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(v,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function tt(v,_){let O=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",j));const st=_.source;let nt=u.get(st);nt===void 0&&(nt={},u.set(st,nt));const at=$(_);if(at!==v.__cacheKey){nt[at]===void 0&&(nt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[at].usedTimes++;const gt=nt[v.__cacheKey];gt!==void 0&&(nt[v.__cacheKey].usedTimes--,gt.usedTimes===0&&B(_)),v.__cacheKey=at,v.__webglTexture=nt[at].texture}return O}function yt(v,_,O){let st=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(st=i.TEXTURE_3D);const nt=tt(v,_),at=_.source;e.bindTexture(st,v.__webglTexture,i.TEXTURE0+O);const gt=n.get(at);if(at.version!==gt.__version||nt===!0){e.activeTexture(i.TEXTURE0+O),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const rt=M(_)&&P(_.image)===!1;let W=S(_.image,rt,!1,d);W=se(_,W);const E=P(W)||r,Z=a.convert(_.format,_.colorSpace);let ft=a.convert(_.type),lt=G(_.internalFormat,Z,ft,_.colorSpace,_.isVideoTexture);k(st,_,E);let pt;const Et=_.mipmaps,Ot=r&&_.isVideoTexture!==!0,C=gt.__version===void 0||nt===!0,ct=y(_,W,E);if(_.isDepthTexture)lt=i.DEPTH_COMPONENT,r?_.type===on?lt=i.DEPTH_COMPONENT32F:_.type===rn?lt=i.DEPTH_COMPONENT24:_.type===vn?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:_.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Mn&&lt===i.DEPTH_COMPONENT&&_.type!==js&&_.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=rn,ft=a.convert(_.type)),_.format===ti&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,_.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=vn,ft=a.convert(_.type))),C&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,lt,W.width,W.height):e.texImage2D(i.TEXTURE_2D,0,lt,W.width,W.height,0,Z,ft,null));else if(_.isDataTexture)if(Et.length>0&&E){Ot&&C&&e.texStorage2D(i.TEXTURE_2D,ct,lt,Et[0].width,Et[0].height);for(let X=0,it=Et.length;X<it;X++)pt=Et[X],Ot?e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,Z,ft,pt.data):e.texImage2D(i.TEXTURE_2D,X,lt,pt.width,pt.height,0,Z,ft,pt.data);_.generateMipmaps=!1}else Ot?(C&&e.texStorage2D(i.TEXTURE_2D,ct,lt,W.width,W.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,Z,ft,W.data)):e.texImage2D(i.TEXTURE_2D,0,lt,W.width,W.height,0,Z,ft,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&C&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,lt,Et[0].width,Et[0].height,W.depth);for(let X=0,it=Et.length;X<it;X++)pt=Et[X],_.format!==Ue?Z!==null?Ot?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,W.depth,Z,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,lt,pt.width,pt.height,W.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,W.depth,Z,ft,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,lt,pt.width,pt.height,W.depth,0,Z,ft,pt.data)}else{Ot&&C&&e.texStorage2D(i.TEXTURE_2D,ct,lt,Et[0].width,Et[0].height);for(let X=0,it=Et.length;X<it;X++)pt=Et[X],_.format!==Ue?Z!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,Z,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,lt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,Z,ft,pt.data):e.texImage2D(i.TEXTURE_2D,X,lt,pt.width,pt.height,0,Z,ft,pt.data)}else if(_.isDataArrayTexture)Ot?(C&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,lt,W.width,W.height,W.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Z,ft,W.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,W.width,W.height,W.depth,0,Z,ft,W.data);else if(_.isData3DTexture)Ot?(C&&e.texStorage3D(i.TEXTURE_3D,ct,lt,W.width,W.height,W.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Z,ft,W.data)):e.texImage3D(i.TEXTURE_3D,0,lt,W.width,W.height,W.depth,0,Z,ft,W.data);else if(_.isFramebufferTexture){if(C)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,lt,W.width,W.height);else{let X=W.width,it=W.height;for(let ot=0;ot<ct;ot++)e.texImage2D(i.TEXTURE_2D,ot,lt,X,it,0,Z,ft,null),X>>=1,it>>=1}}else if(Et.length>0&&E){Ot&&C&&e.texStorage2D(i.TEXTURE_2D,ct,lt,Et[0].width,Et[0].height);for(let X=0,it=Et.length;X<it;X++)pt=Et[X],Ot?e.texSubImage2D(i.TEXTURE_2D,X,0,0,Z,ft,pt):e.texImage2D(i.TEXTURE_2D,X,lt,Z,ft,pt);_.generateMipmaps=!1}else Ot?(C&&e.texStorage2D(i.TEXTURE_2D,ct,lt,W.width,W.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,ft,W)):e.texImage2D(i.TEXTURE_2D,0,lt,Z,ft,W);I(_,E)&&w(st),gt.__version=at.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Wt(v,_,O){if(_.image.length!==6)return;const st=tt(v,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+O);const at=n.get(nt);if(nt.version!==at.__version||st===!0){e.activeTexture(i.TEXTURE0+O),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const gt=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,W=[];for(let X=0;X<6;X++)!gt&&!rt?W[X]=S(_.image[X],!1,!0,h):W[X]=rt?_.image[X].image:_.image[X],W[X]=se(_,W[X]);const E=W[0],Z=P(E)||r,ft=a.convert(_.format,_.colorSpace),lt=a.convert(_.type),pt=G(_.internalFormat,ft,lt,_.colorSpace),Et=r&&_.isVideoTexture!==!0,Ot=at.__version===void 0||st===!0;let C=y(_,E,Z);k(i.TEXTURE_CUBE_MAP,_,Z);let ct;if(gt){Et&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,C,pt,E.width,E.height);for(let X=0;X<6;X++){ct=W[X].mipmaps;for(let it=0;it<ct.length;it++){const ot=ct[it];_.format!==Ue?ft!==null?Et?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,0,0,ot.width,ot.height,ft,lt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,pt,ot.width,ot.height,0,ft,lt,ot.data)}}}else{ct=_.mipmaps,Et&&Ot&&(ct.length>0&&C++,e.texStorage2D(i.TEXTURE_CUBE_MAP,C,pt,W[0].width,W[0].height));for(let X=0;X<6;X++)if(rt){Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,W[X].width,W[X].height,ft,lt,W[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pt,W[X].width,W[X].height,0,ft,lt,W[X].data);for(let it=0;it<ct.length;it++){const Dt=ct[it].image[X].image;Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,0,0,Dt.width,Dt.height,ft,lt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,pt,Dt.width,Dt.height,0,ft,lt,Dt.data)}}else{Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ft,lt,W[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pt,ft,lt,W[X]);for(let it=0;it<ct.length;it++){const ot=ct[it];Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,0,0,ft,lt,ot.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,pt,ft,lt,ot.image[X])}}}I(_,Z)&&w(i.TEXTURE_CUBE_MAP),at.__version=nt.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function bt(v,_,O,st,nt,at){const gt=a.convert(O.format,O.colorSpace),rt=a.convert(O.type),W=G(O.internalFormat,gt,rt,O.colorSpace);if(!n.get(_).__hasExternalTextures){const Z=Math.max(1,_.width>>at),ft=Math.max(1,_.height>>at);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,W,Z,ft,_.depth,0,gt,rt,null):e.texImage2D(nt,at,W,Z,ft,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),Ft(_)?A.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,n.get(O).__webglTexture,0,It(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,n.get(O).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(v,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,v),_.depthBuffer&&!_.stencilBuffer){let st=i.DEPTH_COMPONENT16;if(O||Ft(_)){const nt=_.depthTexture;nt&&nt.isDepthTexture&&(nt.type===on?st=i.DEPTH_COMPONENT32F:nt.type===rn&&(st=i.DEPTH_COMPONENT24));const at=It(_);Ft(_)?A.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,st,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,st,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,v)}else if(_.depthBuffer&&_.stencilBuffer){const st=It(_);O&&Ft(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,_.width,_.height):Ft(_)?A.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,v)}else{const st=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let nt=0;nt<st.length;nt++){const at=st[nt],gt=a.convert(at.format,at.colorSpace),rt=a.convert(at.type),W=G(at.internalFormat,gt,rt,at.colorSpace),E=It(_);O&&Ft(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,E,W,_.width,_.height):Ft(_)?A.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const st=n.get(_.depthTexture).__webglTexture,nt=It(_);if(_.depthTexture.format===Mn)Ft(_)?A.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(_.depthTexture.format===ti)Ft(_)?A.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function _t(v){const _=n.get(v),O=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Qt(_.__webglFramebuffer,v)}else if(O){_.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[st]),_.__webglDepthbuffer[st]=i.createRenderbuffer(),V(_.__webglDepthbuffer[st],v,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),V(_.__webglDepthbuffer,v,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(v,_,O){const st=n.get(v);_!==void 0&&bt(st.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&_t(v)}function Tt(v){const _=v.texture,O=n.get(v),st=n.get(_);v.addEventListener("dispose",K),v.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=_.version,o.memory.textures++);const nt=v.isWebGLCubeRenderTarget===!0,at=v.isWebGLMultipleRenderTargets===!0,gt=P(v)||r;if(nt){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(r&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let W=0;W<_.mipmaps.length;W++)O.__webglFramebuffer[rt][W]=i.createFramebuffer()}else O.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(r&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)O.__webglFramebuffer[rt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){const rt=v.texture;for(let W=0,E=rt.length;W<E;W++){const Z=n.get(rt[W]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&v.samples>0&&Ft(v)===!1){const rt=at?_:[_];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<rt.length;W++){const E=rt[W];O.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const Z=a.convert(E.format,E.colorSpace),ft=a.convert(E.type),lt=G(E.internalFormat,Z,ft,E.colorSpace,v.isXRRenderTarget===!0),pt=It(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,lt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,O.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),V(O.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),k(i.TEXTURE_CUBE_MAP,_,gt);for(let rt=0;rt<6;rt++)if(r&&_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)bt(O.__webglFramebuffer[rt][W],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,W);else bt(O.__webglFramebuffer[rt],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);I(_,gt)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const rt=v.texture;for(let W=0,E=rt.length;W<E;W++){const Z=rt[W],ft=n.get(Z);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),k(i.TEXTURE_2D,Z,gt),bt(O.__webglFramebuffer,v,Z,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,0),I(Z,gt)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(r?rt=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,st.__webglTexture),k(rt,_,gt),r&&_.mipmaps&&_.mipmaps.length>0)for(let W=0;W<_.mipmaps.length;W++)bt(O.__webglFramebuffer[W],v,_,i.COLOR_ATTACHMENT0,rt,W);else bt(O.__webglFramebuffer,v,_,i.COLOR_ATTACHMENT0,rt,0);I(_,gt)&&w(rt),e.unbindTexture()}v.depthBuffer&&_t(v)}function Ht(v){const _=P(v)||r,O=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let st=0,nt=O.length;st<nt;st++){const at=O[st];if(I(at,_)){const gt=v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,rt=n.get(at).__webglTexture;e.bindTexture(gt,rt),w(gt),e.unbindTexture()}}}function Lt(v){if(r&&v.samples>0&&Ft(v)===!1){const _=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],O=v.width,st=v.height;let nt=i.COLOR_BUFFER_BIT;const at=[],gt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(v),W=v.isWebGLMultipleRenderTargets===!0;if(W)for(let E=0;E<_.length;E++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let E=0;E<_.length;E++){at.push(i.COLOR_ATTACHMENT0+E),v.depthBuffer&&at.push(gt);const Z=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(Z===!1&&(v.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),W&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[E]),Z===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[gt])),W){const ft=n.get(_[E]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,O,st,0,0,O,st,nt,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let E=0;E<_.length;E++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.RENDERBUFFER,rt.__webglColorRenderbuffer[E]);const Z=n.get(_[E]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.TEXTURE_2D,Z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function It(v){return Math.min(p,v.samples)}function Ft(v){const _=n.get(v);return r&&v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $t(v){const _=o.render.frame;g.get(v)!==_&&(g.set(v,_),v.update())}function se(v,_){const O=v.colorSpace,st=v.format,nt=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===Xs||O!==Oe&&O!==Tn&&(O===Jt||O===ji?r===!1?t.has("EXT_sRGB")===!0&&st===Ue?(v.format=Xs,v.minFilter=xe,v.generateMipmaps=!1):_=Gr.sRGBToLinear(_):(st!==Ue||nt!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=q,this.setTexture2DArray=R,this.setTexture3D=Q,this.setTextureCube=ut,this.rebindTextures=Ct,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ft}const Rp=0,te=1;function Up(i,t,e){const n=e.isWebGL2;function s(a,o=Tn){let r;const l=o===Jt||o===ji?te:Rp;if(a===un)return i.UNSIGNED_BYTE;if(a===Or)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Fr)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Yo)return i.BYTE;if(a===Qo)return i.SHORT;if(a===js)return i.UNSIGNED_SHORT;if(a===Nr)return i.INT;if(a===rn)return i.UNSIGNED_INT;if(a===on)return i.FLOAT;if(a===Ai)return n?i.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===Ko)return i.ALPHA;if(a===Ue)return i.RGBA;if(a===Zo)return i.LUMINANCE;if(a===qo)return i.LUMINANCE_ALPHA;if(a===Mn)return i.DEPTH_COMPONENT;if(a===ti)return i.DEPTH_STENCIL;if(a===Xs)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===$o)return i.RED;if(a===Wr)return i.RED_INTEGER;if(a===tl)return i.RG;if(a===Xr)return i.RG_INTEGER;if(a===Br)return i.RGBA_INTEGER;if(a===as||a===rs||a===os||a===ls)if(l===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===as)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===as)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fa||a===ma||a===ga||a===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===el)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_a||a===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===_a)return l===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===ya)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ba||a===va||a===Ma||a===xa||a===Ta||a===wa||a===Pa||a===Ea||a===Ca||a===Ia||a===Ra||a===Ua||a===La||a===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ba)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===va)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ma)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xa)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ta)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===wa)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pa)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ea)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ca)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ia)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ra)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ua)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===La)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Va)return l===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hs||a===Da||a===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===hs)return l===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nl||a===Na||a===Oa||a===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===hs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===vn?n?i.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class Lp extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const m of t.hand.values()){const u=e.getJointPose(m,n),c=this._getHandJoint(h,m);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],A=d.position.distanceTo(p.position),f=.02,g=.005;h.inputState.pinching&&A>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&A<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dp extends be{constructor(t,e,n,s,a,o,r,l,h,d){if(d=d!==void 0?d:Mn,d!==Mn&&d!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Mn&&(n=rn),n===void 0&&d===ti&&(n=vn),super(null,s,a,o,r,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kp extends dn{constructor(t,e){super();const n=this;let s=null,a=1,o=null,r="local-floor",l=1,h=null,d=null,p=null,A=null,f=null,g=null;const m=e.getContextAttributes();let u=null,c=null;const T=[],S=[],P=new Te;P.layers.enable(1),P.viewport=new re;const M=new Te;M.layers.enable(2),M.viewport=new re;const I=[P,M],w=new Lp;w.layers.enable(1),w.layers.enable(2);let G=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let Q=T[R];return Q===void 0&&(Q=new Rs,T[R]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(R){let Q=T[R];return Q===void 0&&(Q=new Rs,T[R]=Q),Q.getGripSpace()},this.getHand=function(R){let Q=T[R];return Q===void 0&&(Q=new Rs,T[R]=Q),Q.getHandSpace()};function x(R){const Q=S.indexOf(R.inputSource);if(Q===-1)return;const ut=T[Q];ut!==void 0&&(ut.update(R.inputSource,R.frame,h||o),ut.dispatchEvent({type:R.type,data:R.inputSource}))}function j(){s.removeEventListener("select",x),s.removeEventListener("selectstart",x),s.removeEventListener("selectend",x),s.removeEventListener("squeeze",x),s.removeEventListener("squeezestart",x),s.removeEventListener("squeezeend",x),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",K);for(let R=0;R<T.length;R++){const Q=S[R];Q!==null&&(S[R]=null,T[R].disconnect(Q))}G=null,y=null,t.setRenderTarget(u),f=null,A=null,p=null,s=null,c=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(R){h=R},this.getBaseLayer=function(){return A!==null?A:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",x),s.addEventListener("selectstart",x),s.addEventListener("selectend",x),s.addEventListener("squeeze",x),s.addEventListener("squeezestart",x),s.addEventListener("squeezeend",x),s.addEventListener("end",j),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),c=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Ue,type:un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ut=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?ti:Mn,ut=m.stencil?vn:rn);const At={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:a};p=new XRWebGLBinding(s,e),A=p.createProjectionLayer(At),s.updateRenderState({layers:[A]}),c=new Pn(A.textureWidth,A.textureHeight,{format:Ue,type:un,depthTexture:new Dp(A.textureWidth,A.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const St=t.properties.get(c);St.__ignoreDepthValues=A.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(r),q.setContext(s),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(R){for(let Q=0;Q<R.removed.length;Q++){const ut=R.removed[Q],dt=S.indexOf(ut);dt>=0&&(S[dt]=null,T[dt].disconnect(ut))}for(let Q=0;Q<R.added.length;Q++){const ut=R.added[Q];let dt=S.indexOf(ut);if(dt===-1){for(let St=0;St<T.length;St++)if(St>=S.length){S.push(ut),dt=St;break}else if(S[St]===null){S[St]=ut,dt=St;break}if(dt===-1)break}const At=T[dt];At&&At.connect(ut)}}const L=new U,B=new U;function F(R,Q,ut){L.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(ut.matrixWorld);const dt=L.distanceTo(B),At=Q.projectionMatrix.elements,St=ut.projectionMatrix.elements,k=At[14]/(At[10]-1),tt=At[14]/(At[10]+1),yt=(At[9]+1)/At[5],Wt=(At[9]-1)/At[5],bt=(At[8]-1)/At[0],V=(St[8]+1)/St[0],Qt=k*bt,_t=k*V,Ct=dt/(-bt+V),Tt=Ct*-bt;Q.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Tt),R.translateZ(Ct),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Ht=k+Ct,Lt=tt+Ct,It=Qt-Tt,Ft=_t+(dt-Tt),$t=yt*tt/Lt*Ht,se=Wt*tt/Lt*Ht;R.projectionMatrix.makePerspective(It,Ft,$t,se,Ht,Lt),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function et(R,Q){Q===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(Q.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;w.near=M.near=P.near=R.near,w.far=M.far=P.far=R.far,(G!==w.near||y!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,y=w.far);const Q=R.parent,ut=w.cameras;et(w,Q);for(let dt=0;dt<ut.length;dt++)et(ut[dt],Q);ut.length===2?F(w,P,M):w.projectionMatrix.copy(P.projectionMatrix),J(R,w,Q)};function J(R,Q,ut){ut===null?R.matrix.copy(Q.matrixWorld):(R.matrix.copy(ut.matrixWorld),R.matrix.invert(),R.matrix.multiply(Q.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(Q.projectionMatrix),R.projectionMatrixInverse.copy(Q.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=fi*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(A===null&&f===null))return l},this.setFoveation=function(R){l=R,A!==null&&(A.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)};let Y=null;function $(R,Q){if(d=Q.getViewerPose(h||o),g=Q,d!==null){const ut=d.views;f!==null&&(t.setRenderTargetFramebuffer(c,f.framebuffer),t.setRenderTarget(c));let dt=!1;ut.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let At=0;At<ut.length;At++){const St=ut[At];let k=null;if(f!==null)k=f.getViewport(St);else{const yt=p.getViewSubImage(A,St);k=yt.viewport,At===0&&(t.setRenderTargetTextures(c,yt.colorTexture,A.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(c))}let tt=I[At];tt===void 0&&(tt=new Te,tt.layers.enable(At),tt.viewport=new re,I[At]=tt),tt.matrix.fromArray(St.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(St.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(k.x,k.y,k.width,k.height),At===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(tt)}}for(let ut=0;ut<T.length;ut++){const dt=S[ut],At=T[ut];dt!==null&&At!==void 0&&At.update(dt,Q,h||o)}Y&&Y(R,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const q=new eo;q.setAnimationLoop($),this.setAnimationLoop=function(R){Y=R},this.dispose=function(){}}}function Np(i,t){function e(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function n(u,c){c.color.getRGB(u.fogColor.value,Zr(i)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,T,S,P){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(u,c):c.isMeshToonMaterial?(a(u,c),p(u,c)):c.isMeshPhongMaterial?(a(u,c),d(u,c)):c.isMeshStandardMaterial?(a(u,c),A(u,c),c.isMeshPhysicalMaterial&&f(u,c,P)):c.isMeshMatcapMaterial?(a(u,c),g(u,c)):c.isMeshDepthMaterial?a(u,c):c.isMeshDistanceMaterial?(a(u,c),m(u,c)):c.isMeshNormalMaterial?a(u,c):c.isLineBasicMaterial?(o(u,c),c.isLineDashedMaterial&&r(u,c)):c.isPointsMaterial?l(u,c,T,S):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,e(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,e(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===me&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,e(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===me&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,e(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,e(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);const T=t.get(c).envMap;if(T&&(u.envMap.value=T,u.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap){u.lightMap.value=c.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=c.lightMapIntensity*S,e(c.lightMap,u.lightMapTransform)}c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,u.aoMapTransform))}function o(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,e(c.map,u.mapTransform))}function r(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,T,S){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*T,u.scale.value=S*.5,c.map&&(u.map.value=c.map,e(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,e(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function p(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function A(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,u.roughnessMapTransform)),t.get(c).envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function f(u,c,T){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===me&&u.clearcoatNormalScale.value.negate())),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=T.texture,u.transmissionSamplerSize.value.set(T.width,T.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,c){c.matcap&&(u.matcap.value=c.matcap)}function m(u,c){const T=t.get(c).light;u.referencePosition.value.setFromMatrixPosition(T.matrixWorld),u.nearDistance.value=T.shadow.camera.near,u.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Op(i,t,e,n){let s={},a={},o=[];const r=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,S){const P=S.program;n.uniformBlockBinding(T,P)}function h(T,S){let P=s[T.id];P===void 0&&(g(T),P=d(T),s[T.id]=P,T.addEventListener("dispose",u));const M=S.program;n.updateUBOMapping(T,M);const I=t.render.frame;a[T.id]!==I&&(A(T),a[T.id]=I)}function d(T){const S=p();T.__bindingPointIndex=S;const P=i.createBuffer(),M=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,M,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,P),P}function p(){for(let T=0;T<r;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(T){const S=s[T.id],P=T.uniforms,M=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,w=P.length;I<w;I++){const G=P[I];if(f(G,I,M)===!0){const y=G.__offset,x=Array.isArray(G.value)?G.value:[G.value];let j=0;for(let K=0;K<x.length;K++){const L=x[K],B=m(L);typeof L=="number"?(G.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,y+j,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=L.elements[0],G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=L.elements[0],G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=L.elements[0]):(L.toArray(G.__data,j),j+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,G.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,S,P){const M=T.value;if(P[S]===void 0){if(typeof M=="number")P[S]=M;else{const I=Array.isArray(M)?M:[M],w=[];for(let G=0;G<I.length;G++)w.push(I[G].clone());P[S]=w}return!0}else if(typeof M=="number"){if(P[S]!==M)return P[S]=M,!0}else{const I=Array.isArray(P[S])?P[S]:[P[S]],w=Array.isArray(M)?M:[M];for(let G=0;G<I.length;G++){const y=I[G];if(y.equals(w[G])===!1)return y.copy(w[G]),!0}}return!1}function g(T){const S=T.uniforms;let P=0;const M=16;let I=0;for(let w=0,G=S.length;w<G;w++){const y=S[w],x={boundary:0,storage:0},j=Array.isArray(y.value)?y.value:[y.value];for(let K=0,L=j.length;K<L;K++){const B=j[K],F=m(B);x.boundary+=F.boundary,x.storage+=F.storage}if(y.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=P,w>0){I=P%M;const K=M-I;I!==0&&K-x.boundary<0&&(P+=M-I,y.__offset=P)}P+=x.storage}return I=P%M,I>0&&(P+=M-I),T.__size=P,T.__cache={},this}function m(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function u(T){const S=T.target;S.removeEventListener("dispose",u);const P=o.indexOf(S.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function c(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},a={}}return{bind:l,update:h,dispose:c}}class ro{constructor(t={}){const{canvas:e=Il(),context:n=null,depth:s=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let A;n!==null?A=n.getContextAttributes().alpha:A=o;const f=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const c=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const S=this;let P=!1,M=0,I=0,w=null,G=-1,y=null;const x=new re,j=new re;let K=null;const L=new Gt(0);let B=0,F=e.width,et=e.height,J=1,Y=null,$=null;const q=new re(0,0,F,et),R=new re(0,0,F,et);let Q=!1;const ut=new to;let dt=!1,At=!1,St=null;const k=new ee,tt=new Mt,yt=new U,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return w===null?J:1}let V=n;function Qt(b,D){for(let H=0;H<b.length;H++){const N=b[H],z=e.getContext(N,D);if(z!==null)return z}return null}try{const b={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Js}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",it,!1),V===null){const D=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&D.shift(),V=Qt(D,b),V===null)throw Qt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _t,Ct,Tt,Ht,Lt,It,Ft,$t,se,v,_,O,st,nt,at,gt,rt,W,E,Z,ft,lt,pt,Et;function Ot(){_t=new Yc(V),Ct=new Xc(V,_t,t),_t.init(Ct),lt=new Up(V,_t,Ct),Tt=new Cp(V,_t,Ct),Ht=new Zc(V),Lt=new fp,It=new Ip(V,_t,Tt,Lt,Ct,lt,Ht),Ft=new Hc(S),$t=new jc(S),se=new rh(V,Ct),pt=new Fc(V,_t,se,Ct),v=new Qc(V,se,Ht,pt),_=new ed(V,v,se,Ht),E=new td(V,Ct,It),gt=new Bc(Lt),O=new Ap(S,Ft,$t,_t,Ct,pt,gt),st=new Np(S,Lt),nt=new gp,at=new Mp(_t,Ct),W=new Oc(S,Ft,$t,Tt,_,A,l),rt=new Ep(S,_,Ct),Et=new Op(V,Ht,Ct,Tt),Z=new Wc(V,_t,Ht,Ct),ft=new Kc(V,_t,Ht,Ct),Ht.programs=O.programs,S.capabilities=Ct,S.extensions=_t,S.properties=Lt,S.renderLists=nt,S.shadowMap=rt,S.state=Tt,S.info=Ht}Ot();const C=new kp(S,V);this.xr=C,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(F,et,!1))},this.getSize=function(b){return b.set(F,et)},this.setSize=function(b,D,H=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,et=D,e.width=Math.floor(b*J),e.height=Math.floor(D*J),H===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(F*J,et*J).floor()},this.setDrawingBufferSize=function(b,D,H){F=b,et=D,J=H,e.width=Math.floor(b*H),e.height=Math.floor(D*H),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,D,H,N){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,D,H,N),Tt.viewport(x.copy(q).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,D,H,N){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,D,H,N),Tt.scissor(j.copy(R).multiplyScalar(J).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){Tt.setScissorTest(Q=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,D=!0,H=!0){let N=0;if(b){let z=!1;if(w!==null){const mt=w.texture.format;z=mt===Br||mt===Xr||mt===Wr}if(z){const mt=w.texture.type,vt=mt===un||mt===rn||mt===js||mt===vn||mt===Or||mt===Fr,wt=W.getClearColor(),Pt=W.getClearAlpha(),kt=wt.r,xt=wt.g,Rt=wt.b;vt?(f[0]=kt,f[1]=xt,f[2]=Rt,f[3]=Pt,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=kt,g[1]=xt,g[2]=Rt,g[3]=Pt,V.clearBufferiv(V.COLOR,0,g))}else N|=V.COLOR_BUFFER_BIT}D&&(N|=V.DEPTH_BUFFER_BIT),H&&(N|=V.STENCIL_BUFFER_BIT),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",it,!1),nt.dispose(),at.dispose(),Lt.dispose(),Ft.dispose(),$t.dispose(),_.dispose(),pt.dispose(),Et.dispose(),O.dispose(),C.dispose(),C.removeEventListener("sessionstart",zt),C.removeEventListener("sessionend",Le),St&&(St.dispose(),St=null),ue.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Ht.autoReset,D=rt.enabled,H=rt.autoUpdate,N=rt.needsUpdate,z=rt.type;Ot(),Ht.autoReset=b,rt.enabled=D,rt.autoUpdate=H,rt.needsUpdate=N,rt.type=z}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const D=b.target;D.removeEventListener("dispose",ot),Dt(D)}function Dt(b){Xt(b),Lt.remove(b)}function Xt(b){const D=Lt.get(b).programs;D!==void 0&&(D.forEach(function(H){O.releaseProgram(H)}),b.isShaderMaterial&&O.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,H,N,z,mt){D===null&&(D=Wt);const vt=z.isMesh&&z.matrixWorld.determinant()<0,wt=lo(b,D,H,N,z);Tt.setMaterial(N,vt);let Pt=H.index,kt=1;if(N.wireframe===!0){if(Pt=v.getWireframeAttribute(H),Pt===void 0)return;kt=2}const xt=H.drawRange,Rt=H.attributes.position;let jt=xt.start*kt,Yt=(xt.start+xt.count)*kt;mt!==null&&(jt=Math.max(jt,mt.start*kt),Yt=Math.min(Yt,(mt.start+mt.count)*kt)),Pt!==null?(jt=Math.max(jt,0),Yt=Math.min(Yt,Pt.count)):Rt!=null&&(jt=Math.max(jt,0),Yt=Math.min(Yt,Rt.count));const ve=Yt-jt;if(ve<0||ve===1/0)return;pt.setup(z,N,wt,H,Pt);let Fe,Kt=Z;if(Pt!==null&&(Fe=se.get(Pt),Kt=ft,Kt.setIndex(Fe)),z.isMesh)N.wireframe===!0?(Tt.setLineWidth(N.wireframeLinewidth*bt()),Kt.setMode(V.LINES)):Kt.setMode(V.TRIANGLES);else if(z.isLine){let Nt=N.linewidth;Nt===void 0&&(Nt=1),Tt.setLineWidth(Nt*bt()),z.isLineSegments?Kt.setMode(V.LINES):z.isLineLoop?Kt.setMode(V.LINE_LOOP):Kt.setMode(V.LINE_STRIP)}else z.isPoints?Kt.setMode(V.POINTS):z.isSprite&&Kt.setMode(V.TRIANGLES);if(z.isInstancedMesh)Kt.renderInstances(jt,ve,z.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,qi=Math.min(H.instanceCount,Nt);Kt.renderInstances(jt,ve,qi)}else Kt.render(jt,ve)},this.compile=function(b,D){function H(N,z,mt){N.transparent===!0&&N.side===Qe&&N.forceSinglePass===!1?(N.side=me,N.needsUpdate=!0,_i(N,z,mt),N.side=cn,N.needsUpdate=!0,_i(N,z,mt),N.side=Qe):_i(N,z,mt)}u=at.get(b),u.init(),T.push(u),b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights(S._useLegacyLights),b.traverse(function(N){const z=N.material;if(z)if(Array.isArray(z))for(let mt=0;mt<z.length;mt++){const vt=z[mt];H(vt,b,N)}else H(z,b,N)}),T.pop(),u=null};let Bt=null;function ge(b){Bt&&Bt(b)}function zt(){ue.stop()}function Le(){ue.start()}const ue=new eo;ue.setAnimationLoop(ge),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(b){Bt=b,C.setAnimationLoop(b),b===null?ue.stop():ue.start()},C.addEventListener("sessionstart",zt),C.addEventListener("sessionend",Le),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(D),D=C.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,D,w),u=at.get(b,T.length),u.init(),T.push(u),k.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ut.setFromProjectionMatrix(k),At=this.localClippingEnabled,dt=gt.init(this.clippingPlanes,At),m=nt.get(b,c.length),m.init(),c.push(m),ta(b,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Y,$),this.info.render.frame++,dt===!0&&gt.beginShadows();const H=u.state.shadowsArray;if(rt.render(H,b,D),dt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(m,b),u.setupLights(S._useLegacyLights),D.isArrayCamera){const N=D.cameras;for(let z=0,mt=N.length;z<mt;z++){const vt=N[z];ea(m,b,vt,vt.viewport)}}else ea(m,b,D);w!==null&&(It.updateMultisampleRenderTarget(w),It.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(S,b,D),pt.resetDefaultState(),G=-1,y=null,T.pop(),T.length>0?u=T[T.length-1]:u=null,c.pop(),c.length>0?m=c[c.length-1]:m=null};function ta(b,D,H,N){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ut.intersectsSprite(b)){N&&yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const vt=_.update(b),wt=b.material;wt.visible&&m.push(b,vt,wt,H,yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ut.intersectsObject(b))){const vt=_.update(b),wt=b.material;if(N&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),yt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),yt.copy(vt.boundingSphere.center)),yt.applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(wt)){const Pt=vt.groups;for(let kt=0,xt=Pt.length;kt<xt;kt++){const Rt=Pt[kt],jt=wt[Rt.materialIndex];jt&&jt.visible&&m.push(b,vt,jt,H,yt.z,Rt)}}else wt.visible&&m.push(b,vt,wt,H,yt.z,null)}}const mt=b.children;for(let vt=0,wt=mt.length;vt<wt;vt++)ta(mt[vt],D,H,N)}function ea(b,D,H,N){const z=b.opaque,mt=b.transmissive,vt=b.transparent;u.setupLightsView(H),dt===!0&&gt.setGlobalState(S.clippingPlanes,H),mt.length>0&&oo(z,mt,D,H),N&&Tt.viewport(x.copy(N)),z.length>0&&Si(z,D,H),mt.length>0&&Si(mt,D,H),vt.length>0&&Si(vt,D,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function oo(b,D,H,N){const z=Ct.isWebGL2;St===null&&(St=new Pn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Ai:un,minFilter:pi,samples:z?4:0})),S.getDrawingBufferSize(tt),z?St.setSize(tt.x,tt.y):St.setSize(zi(tt.x),zi(tt.y));const mt=S.getRenderTarget();S.setRenderTarget(St),S.getClearColor(L),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear();const vt=S.toneMapping;S.toneMapping=hn,Si(b,H,N),It.updateMultisampleRenderTarget(St),It.updateRenderTargetMipmap(St);let wt=!1;for(let Pt=0,kt=D.length;Pt<kt;Pt++){const xt=D[Pt],Rt=xt.object,jt=xt.geometry,Yt=xt.material,ve=xt.group;if(Yt.side===Qe&&Rt.layers.test(N.layers)){const Fe=Yt.side;Yt.side=me,Yt.needsUpdate=!0,na(Rt,H,N,jt,Yt,ve),Yt.side=Fe,Yt.needsUpdate=!0,wt=!0}}wt===!0&&(It.updateMultisampleRenderTarget(St),It.updateRenderTargetMipmap(St)),S.setRenderTarget(mt),S.setClearColor(L,B),S.toneMapping=vt}function Si(b,D,H){const N=D.isScene===!0?D.overrideMaterial:null;for(let z=0,mt=b.length;z<mt;z++){const vt=b[z],wt=vt.object,Pt=vt.geometry,kt=N===null?vt.material:N,xt=vt.group;wt.layers.test(H.layers)&&na(wt,D,H,Pt,kt,xt)}}function na(b,D,H,N,z,mt){b.onBeforeRender(S,D,H,N,z,mt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(S,D,H,N,b,mt),z.transparent===!0&&z.side===Qe&&z.forceSinglePass===!1?(z.side=me,z.needsUpdate=!0,S.renderBufferDirect(H,D,N,z,b,mt),z.side=cn,z.needsUpdate=!0,S.renderBufferDirect(H,D,N,z,b,mt),z.side=Qe):S.renderBufferDirect(H,D,N,z,b,mt),b.onAfterRender(S,D,H,N,z,mt)}function _i(b,D,H){D.isScene!==!0&&(D=Wt);const N=Lt.get(b),z=u.state.lights,mt=u.state.shadowsArray,vt=z.state.version,wt=O.getParameters(b,z.state,mt,D,H),Pt=O.getProgramCacheKey(wt);let kt=N.programs;N.environment=b.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(b.isMeshStandardMaterial?$t:Ft).get(b.envMap||N.environment),kt===void 0&&(b.addEventListener("dispose",ot),kt=new Map,N.programs=kt);let xt=kt.get(Pt);if(xt!==void 0){if(N.currentProgram===xt&&N.lightsStateVersion===vt)return ia(b,wt),xt}else wt.uniforms=O.getUniforms(b),b.onBuild(H,wt,S),b.onBeforeCompile(wt,S),xt=O.acquireProgram(wt,Pt),kt.set(Pt,xt),N.uniforms=wt.uniforms;const Rt=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=gt.uniform),ia(b,wt),N.needsLights=uo(b),N.lightsStateVersion=vt,N.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix);const jt=xt.getUniforms(),Yt=Bi.seqWithValue(jt.seq,Rt);return N.currentProgram=xt,N.uniformsList=Yt,xt}function ia(b,D){const H=Lt.get(b);H.outputColorSpace=D.outputColorSpace,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function lo(b,D,H,N,z){D.isScene!==!0&&(D=Wt),It.resetTextureUnits();const mt=D.fog,vt=N.isMeshStandardMaterial?D.environment:null,wt=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Oe,Pt=(N.isMeshStandardMaterial?$t:Ft).get(N.envMap||vt),kt=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,xt=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Rt=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,Yt=!!H.morphAttributes.color;let ve=hn;N.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=S.toneMapping);const Fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,Nt=Lt.get(N),qi=u.state.lights;if(dt===!0&&(At===!0||b!==y)){const Se=b===y&&N.id===G;gt.setState(N,b,Se)}let Zt=!1;N.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==qi.state.version||Nt.outputColorSpace!==wt||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||Nt.envMap!==Pt||N.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==gt.numPlanes||Nt.numIntersection!==gt.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==xt||Nt.morphTargets!==Rt||Nt.morphNormals!==jt||Nt.morphColors!==Yt||Nt.toneMapping!==ve||Ct.isWebGL2===!0&&Nt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Nt.__version=N.version);let pn=Nt.currentProgram;Zt===!0&&(pn=_i(N,D,z));let sa=!1,si=!1,$i=!1;const ce=pn.getUniforms(),An=Nt.uniforms;if(Tt.useProgram(pn.program)&&(sa=!0,si=!0,$i=!0),N.id!==G&&(G=N.id,si=!0),sa||y!==b){ce.setValue(V,"projectionMatrix",b.projectionMatrix),ce.setValue(V,"viewMatrix",b.matrixWorldInverse);const Se=ce.map.cameraPosition;Se!==void 0&&Se.setValue(V,yt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&ce.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ce.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,si=!0,$i=!0)}if(z.isSkinnedMesh){ce.setOptional(V,z,"bindMatrix"),ce.setOptional(V,z,"bindMatrixInverse");const Se=z.skeleton;Se&&(Ct.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),ce.setValue(V,"boneTexture",Se.boneTexture,It),ce.setValue(V,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ts=H.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0&&Ct.isWebGL2===!0)&&E.update(z,H,pn),(si||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,ce.setValue(V,"receiveShadow",z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(An.envMap.value=Pt,An.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),si&&(ce.setValue(V,"toneMappingExposure",S.toneMappingExposure),Nt.needsLights&&ho(An,$i),mt&&N.fog===!0&&st.refreshFogUniforms(An,mt),st.refreshMaterialUniforms(An,N,J,et,St),Bi.upload(V,Nt.uniformsList,An,It)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Bi.upload(V,Nt.uniformsList,An,It),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ce.setValue(V,"center",z.center),ce.setValue(V,"modelViewMatrix",z.modelViewMatrix),ce.setValue(V,"normalMatrix",z.normalMatrix),ce.setValue(V,"modelMatrix",z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Se=N.uniformsGroups;for(let es=0,co=Se.length;es<co;es++)if(Ct.isWebGL2){const aa=Se[es];Et.update(aa,pn),Et.bind(aa,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function ho(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function uo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,D,H){Lt.get(b.texture).__webglTexture=D,Lt.get(b.depthTexture).__webglTexture=H;const N=Lt.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){const H=Lt.get(b);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,H=0){w=b,M=D,I=H;let N=!0,z=null,mt=!1,vt=!1;if(b){const Pt=Lt.get(b);Pt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(V.FRAMEBUFFER,null),N=!1):Pt.__webglFramebuffer===void 0?It.setupRenderTarget(b):Pt.__hasExternalTextures&&It.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const xt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(xt[D])?z=xt[D][H]:z=xt[D],mt=!0):Ct.isWebGL2&&b.samples>0&&It.useMultisampledRTT(b)===!1?z=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(xt)?z=xt[H]:z=xt,x.copy(b.viewport),j.copy(b.scissor),K=b.scissorTest}else x.copy(q).multiplyScalar(J).floor(),j.copy(R).multiplyScalar(J).floor(),K=Q;if(Tt.bindFramebuffer(V.FRAMEBUFFER,z)&&Ct.drawBuffers&&N&&Tt.drawBuffers(b,z),Tt.viewport(x),Tt.scissor(j),Tt.setScissorTest(K),mt){const Pt=Lt.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pt.__webglTexture,H)}else if(vt){const Pt=Lt.get(b.texture),kt=D||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,kt)}G=-1},this.readRenderTargetPixels=function(b,D,H,N,z,mt,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){Tt.bindFramebuffer(V.FRAMEBUFFER,wt);try{const Pt=b.texture,kt=Pt.format,xt=Pt.type;if(kt!==Ue&&lt.convert(kt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=xt===Ai&&(_t.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&_t.has("EXT_color_buffer_float"));if(xt!==un&&lt.convert(xt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(xt===on&&(Ct.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-N&&H>=0&&H<=b.height-z&&V.readPixels(D,H,N,z,lt.convert(kt),lt.convert(xt),mt)}finally{const Pt=w!==null?Lt.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,D,H=0){const N=Math.pow(2,-H),z=Math.floor(D.image.width*N),mt=Math.floor(D.image.height*N);It.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,H,0,0,b.x,b.y,z,mt),Tt.unbindTexture()},this.copyTextureToTexture=function(b,D,H,N=0){const z=D.image.width,mt=D.image.height,vt=lt.convert(H.format),wt=lt.convert(H.type);It.setTexture2D(H,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,N,b.x,b.y,z,mt,vt,wt,D.image.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,N,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,vt,D.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,N,b.x,b.y,vt,wt,D.image),N===0&&H.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,H,N,z=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=b.max.x-b.min.x+1,vt=b.max.y-b.min.y+1,wt=b.max.z-b.min.z+1,Pt=lt.convert(N.format),kt=lt.convert(N.type);let xt;if(N.isData3DTexture)It.setTexture3D(N,0),xt=V.TEXTURE_3D;else if(N.isDataArrayTexture)It.setTexture2DArray(N,0),xt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,N.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,N.unpackAlignment);const Rt=V.getParameter(V.UNPACK_ROW_LENGTH),jt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yt=V.getParameter(V.UNPACK_SKIP_PIXELS),ve=V.getParameter(V.UNPACK_SKIP_ROWS),Fe=V.getParameter(V.UNPACK_SKIP_IMAGES),Kt=H.isCompressedTexture?H.mipmaps[0]:H.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?V.texSubImage3D(xt,z,D.x,D.y,D.z,mt,vt,wt,Pt,kt,Kt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(xt,z,D.x,D.y,D.z,mt,vt,wt,Pt,Kt.data)):V.texSubImage3D(xt,z,D.x,D.y,D.z,mt,vt,wt,Pt,kt,Kt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fe),z===0&&N.generateMipmaps&&V.generateMipmap(xt),Tt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?It.setTextureCube(b,0):b.isData3DTexture?It.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?It.setTexture2DArray(b,0):It.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){M=0,I=0,w=null,Tt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?xn:Hr}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xn?Jt:Oe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fp extends ro{}Fp.prototype.isWebGL1Renderer=!0;class Wp extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Xp{constructor(t,e,n=0,s=1/0){this.ray=new Ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Gs(t,this,n,e),n.sort(Tr),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)Gs(t[s],this,n,e);return n.sort(Tr),n}}function Tr(i,t){return i.distance-t.distance}function Gs(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Gs(s[a],t,e,!0)}}class wr{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);const Pr={type:"change"},Us={type:"start"},Er={type:"end"},Xi=new Ks,Cr=new an,Bp=Math.cos(70*Hs.DEG2RAD);class Hp extends dn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ye.ROTATE,MIDDLE:Ye.DOLLY,RIGHT:Ye.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",_),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pr),n.update(),a=s.NONE},this.update=function(){const E=new U,Z=new qe().setFromUnitVectors(t.up,new U(0,1,0)),ft=Z.clone().invert(),lt=new U,pt=new qe,Et=new U,Ot=2*Math.PI;return function(ct=null){const X=n.object.position;E.copy(X).sub(n.target),E.applyQuaternion(Z),r.setFromVector3(E),n.autoRotate&&a===s.NONE&&j(y(ct)),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let it=n.minAzimuthAngle,ot=n.maxAzimuthAngle;isFinite(it)&&isFinite(ot)&&(it<-Math.PI?it+=Ot:it>Math.PI&&(it-=Ot),ot<-Math.PI?ot+=Ot:ot>Math.PI&&(ot-=Ot),it<=ot?r.theta=Math.max(it,Math.min(ot,r.theta)):r.theta=r.theta>(it+ot)/2?Math.max(it,r.theta):Math.min(ot,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&I||n.object.isOrthographicCamera?r.radius=$(r.radius):r.radius=$(r.radius*h),E.setFromSpherical(r),E.applyQuaternion(ft),X.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Dt=!1;if(n.zoomToCursor&&I){let Xt=null;if(n.object.isPerspectiveCamera){const Bt=E.length();Xt=$(Bt*h);const ge=Bt-Xt;n.object.position.addScaledVector(P,ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Bt=new U(M.x,M.y,0);Bt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Dt=!0;const ge=new U(M.x,M.y,0);ge.unproject(n.object),n.object.position.sub(ge).add(Bt),n.object.updateMatrixWorld(),Xt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Xt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Xt).add(n.object.position):(Xi.origin.copy(n.object.position),Xi.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xi.direction))<Bp?t.lookAt(n.target):(Cr.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xi.intersectPlane(Cr,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Dt=!0);return h=1,I=!1,Dt||lt.distanceToSquared(n.object.position)>o||8*(1-pt.dot(n.object.quaternion))>o||Et.distanceToSquared(n.target)>0?(n.dispatchEvent(Pr),lt.copy(n.object.position),pt.copy(n.object.quaternion),Et.copy(n.target),Dt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",Lt),n.domElement.removeEventListener("pointercancel",Ft),n.domElement.removeEventListener("wheel",v),n.domElement.removeEventListener("pointermove",It),n.domElement.removeEventListener("pointerup",Ft),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const o=1e-6,r=new wr,l=new wr;let h=1;const d=new U,p=new Mt,A=new Mt,f=new Mt,g=new Mt,m=new Mt,u=new Mt,c=new Mt,T=new Mt,S=new Mt,P=new U,M=new Mt;let I=!1;const w=[],G={};function y(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function j(E){l.theta-=E}function K(E){l.phi-=E}const L=function(){const E=new U;return function(ft,lt){E.setFromMatrixColumn(lt,0),E.multiplyScalar(-ft),d.add(E)}}(),B=function(){const E=new U;return function(ft,lt){n.screenSpacePanning===!0?E.setFromMatrixColumn(lt,1):(E.setFromMatrixColumn(lt,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(ft),d.add(E)}}(),F=function(){const E=new U;return function(ft,lt){const pt=n.domElement;if(n.object.isPerspectiveCamera){const Et=n.object.position;E.copy(Et).sub(n.target);let Ot=E.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),L(2*ft*Ot/pt.clientHeight,n.object.matrix),B(2*lt*Ot/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(ft*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),B(lt*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function et(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(E){if(!n.zoomToCursor)return;I=!0;const Z=n.domElement.getBoundingClientRect(),ft=E.clientX-Z.left,lt=E.clientY-Z.top,pt=Z.width,Et=Z.height;M.x=ft/pt*2-1,M.y=-(lt/Et)*2+1,P.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function q(E){p.set(E.clientX,E.clientY)}function R(E){Y(E),c.set(E.clientX,E.clientY)}function Q(E){g.set(E.clientX,E.clientY)}function ut(E){A.set(E.clientX,E.clientY),f.subVectors(A,p).multiplyScalar(n.rotateSpeed);const Z=n.domElement;j(2*Math.PI*f.x/Z.clientHeight),K(2*Math.PI*f.y/Z.clientHeight),p.copy(A),n.update()}function dt(E){T.set(E.clientX,E.clientY),S.subVectors(T,c),S.y>0?et(x()):S.y<0&&J(x()),c.copy(T),n.update()}function At(E){m.set(E.clientX,E.clientY),u.subVectors(m,g).multiplyScalar(n.panSpeed),F(u.x,u.y),g.copy(m),n.update()}function St(E){Y(E),E.deltaY<0?J(x()):E.deltaY>0&&et(x()),n.update()}function k(E){let Z=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Z=!0;break}Z&&(E.preventDefault(),n.update())}function tt(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const E=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);p.set(E,Z)}}function yt(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const E=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);g.set(E,Z)}}function Wt(){const E=w[0].pageX-w[1].pageX,Z=w[0].pageY-w[1].pageY,ft=Math.sqrt(E*E+Z*Z);c.set(0,ft)}function bt(){n.enableZoom&&Wt(),n.enablePan&&yt()}function V(){n.enableZoom&&Wt(),n.enableRotate&&tt()}function Qt(E){if(w.length==1)A.set(E.pageX,E.pageY);else{const ft=W(E),lt=.5*(E.pageX+ft.x),pt=.5*(E.pageY+ft.y);A.set(lt,pt)}f.subVectors(A,p).multiplyScalar(n.rotateSpeed);const Z=n.domElement;j(2*Math.PI*f.x/Z.clientHeight),K(2*Math.PI*f.y/Z.clientHeight),p.copy(A)}function _t(E){if(w.length===1)m.set(E.pageX,E.pageY);else{const Z=W(E),ft=.5*(E.pageX+Z.x),lt=.5*(E.pageY+Z.y);m.set(ft,lt)}u.subVectors(m,g).multiplyScalar(n.panSpeed),F(u.x,u.y),g.copy(m)}function Ct(E){const Z=W(E),ft=E.pageX-Z.x,lt=E.pageY-Z.y,pt=Math.sqrt(ft*ft+lt*lt);T.set(0,pt),S.set(0,Math.pow(T.y/c.y,n.zoomSpeed)),et(S.y),c.copy(T)}function Tt(E){n.enableZoom&&Ct(E),n.enablePan&&_t(E)}function Ht(E){n.enableZoom&&Ct(E),n.enableRotate&&Qt(E)}function Lt(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",It),n.domElement.addEventListener("pointerup",Ft)),at(E),E.pointerType==="touch"?O(E):$t(E))}function It(E){n.enabled!==!1&&(E.pointerType==="touch"?st(E):se(E))}function Ft(E){gt(E),w.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",It),n.domElement.removeEventListener("pointerup",Ft)),n.dispatchEvent(Er),a=s.NONE}function $t(E){let Z;switch(E.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Ye.DOLLY:if(n.enableZoom===!1)return;R(E),a=s.DOLLY;break;case Ye.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;Q(E),a=s.PAN}else{if(n.enableRotate===!1)return;q(E),a=s.ROTATE}break;case Ye.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;q(E),a=s.ROTATE}else{if(n.enablePan===!1)return;Q(E),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Us)}function se(E){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;ut(E);break;case s.DOLLY:if(n.enableZoom===!1)return;dt(E);break;case s.PAN:if(n.enablePan===!1)return;At(E);break}}function v(E){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(E.preventDefault(),n.dispatchEvent(Us),St(E),n.dispatchEvent(Er))}function _(E){n.enabled===!1||n.enablePan===!1||k(E)}function O(E){switch(rt(E),w.length){case 1:switch(n.touches.ONE){case In.ROTATE:if(n.enableRotate===!1)return;tt(),a=s.TOUCH_ROTATE;break;case In.PAN:if(n.enablePan===!1)return;yt(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case In.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;bt(),a=s.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Us)}function st(E){switch(rt(E),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Qt(E),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_t(E),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(E),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(E),n.update();break;default:a=s.NONE}}function nt(E){n.enabled!==!1&&E.preventDefault()}function at(E){w.push(E)}function gt(E){delete G[E.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z].pointerId==E.pointerId){w.splice(Z,1);return}}function rt(E){let Z=G[E.pointerId];Z===void 0&&(Z=new Mt,G[E.pointerId]=Z),Z.set(E.pageX,E.pageY)}function W(E){const Z=E.pointerId===w[0].pointerId?w[1]:w[0];return G[Z.pointerId]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",Lt),n.domElement.addEventListener("pointercancel",Ft),n.domElement.addEventListener("wheel",v,{passive:!1}),this.update()}}const Ls={type:"change"},Vs={type:"start"},Ds={type:"end"};class zp extends dn{constructor(t,e){super();const n=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Ye.ROTATE,MIDDLE:Ye.DOLLY,RIGHT:Ye.PAN},this.target=new U;const a=1e-6,o=new U;let r=1,l=s.NONE,h=s.NONE,d=0,p=0,A=0;const f=new U,g=new Mt,m=new Mt,u=new U,c=new Mt,T=new Mt,S=new Mt,P=new Mt,M=[],I={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const k=n.domElement.getBoundingClientRect(),tt=n.domElement.ownerDocument.documentElement;n.screen.left=k.left+window.pageXOffset-tt.clientLeft,n.screen.top=k.top+window.pageYOffset-tt.clientTop,n.screen.width=k.width,n.screen.height=k.height};const w=function(){const k=new Mt;return function(yt,Wt){return k.set((yt-n.screen.left)/n.screen.width,(Wt-n.screen.top)/n.screen.height),k}}(),G=function(){const k=new Mt;return function(yt,Wt){return k.set((yt-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Wt))/n.screen.width),k}}();this.rotateCamera=function(){const k=new U,tt=new qe,yt=new U,Wt=new U,bt=new U,V=new U;return function(){V.set(m.x-g.x,m.y-g.y,0);let _t=V.length();_t?(f.copy(n.object.position).sub(n.target),yt.copy(f).normalize(),Wt.copy(n.object.up).normalize(),bt.crossVectors(Wt,yt).normalize(),Wt.setLength(m.y-g.y),bt.setLength(m.x-g.x),V.copy(Wt.add(bt)),k.crossVectors(V,f).normalize(),_t*=n.rotateSpeed,tt.setFromAxisAngle(k,_t),f.applyQuaternion(tt),n.object.up.applyQuaternion(tt),u.copy(k),A=_t):!n.staticMoving&&A&&(A*=Math.sqrt(1-n.dynamicDampingFactor),f.copy(n.object.position).sub(n.target),tt.setFromAxisAngle(u,A),f.applyQuaternion(tt),n.object.up.applyQuaternion(tt)),g.copy(m)}}(),this.zoomCamera=function(){let k;l===s.TOUCH_ZOOM_PAN?(k=d/p,d=p,n.object.isPerspectiveCamera?f.multiplyScalar(k):n.object.isOrthographicCamera?(n.object.zoom=Hs.clamp(n.object.zoom/k,n.minZoom,n.maxZoom),r!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(k=1+(T.y-c.y)*n.zoomSpeed,k!==1&&k>0&&(n.object.isPerspectiveCamera?f.multiplyScalar(k):n.object.isOrthographicCamera?(n.object.zoom=Hs.clamp(n.object.zoom/k,n.minZoom,n.maxZoom),r!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?c.copy(T):c.y+=(T.y-c.y)*this.dynamicDampingFactor)},this.panCamera=function(){const k=new Mt,tt=new U,yt=new U;return function(){if(k.copy(P).sub(S),k.lengthSq()){if(n.object.isOrthographicCamera){const bt=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,V=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;k.x*=bt,k.y*=V}k.multiplyScalar(f.length()*n.panSpeed),yt.copy(f).cross(n.object.up).setLength(k.x),yt.add(tt.copy(n.object.up).setLength(k.y)),n.object.position.add(yt),n.target.add(yt),n.staticMoving?S.copy(P):S.add(k.subVectors(P,S).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(f.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,f.setLength(n.maxDistance)),c.copy(T)),f.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,f.setLength(n.minDistance)),c.copy(T)))},this.update=function(){f.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,f),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>a&&(n.dispatchEvent(Ls),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>a||r!==n.object.zoom)&&(n.dispatchEvent(Ls),o.copy(n.object.position),r=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=s.NONE,h=s.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),f.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Ls),o.copy(n.object.position),r=n.object.zoom};function y(k){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",j)),ut(k),k.pointerType==="touch"?$(k):F(k))}function x(k){n.enabled!==!1&&(k.pointerType==="touch"?q(k):et(k))}function j(k){n.enabled!==!1&&(k.pointerType==="touch"?R(k):J(),dt(k),M.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",j)))}function K(k){dt(k)}function L(k){n.enabled!==!1&&(window.removeEventListener("keydown",L),h===s.NONE&&(k.code===n.keys[s.ROTATE]&&!n.noRotate?h=s.ROTATE:k.code===n.keys[s.ZOOM]&&!n.noZoom?h=s.ZOOM:k.code===n.keys[s.PAN]&&!n.noPan&&(h=s.PAN)))}function B(){n.enabled!==!1&&(h=s.NONE,window.addEventListener("keydown",L))}function F(k){if(l===s.NONE)switch(k.button){case n.mouseButtons.LEFT:l=s.ROTATE;break;case n.mouseButtons.MIDDLE:l=s.ZOOM;break;case n.mouseButtons.RIGHT:l=s.PAN;break}const tt=h!==s.NONE?h:l;tt===s.ROTATE&&!n.noRotate?(m.copy(G(k.pageX,k.pageY)),g.copy(m)):tt===s.ZOOM&&!n.noZoom?(c.copy(w(k.pageX,k.pageY)),T.copy(c)):tt===s.PAN&&!n.noPan&&(S.copy(w(k.pageX,k.pageY)),P.copy(S)),n.dispatchEvent(Vs)}function et(k){const tt=h!==s.NONE?h:l;tt===s.ROTATE&&!n.noRotate?(g.copy(m),m.copy(G(k.pageX,k.pageY))):tt===s.ZOOM&&!n.noZoom?T.copy(w(k.pageX,k.pageY)):tt===s.PAN&&!n.noPan&&P.copy(w(k.pageX,k.pageY))}function J(){l=s.NONE,n.dispatchEvent(Ds)}function Y(k){if(n.enabled!==!1&&n.noZoom!==!0){switch(k.preventDefault(),k.deltaMode){case 2:c.y-=k.deltaY*.025;break;case 1:c.y-=k.deltaY*.01;break;default:c.y-=k.deltaY*25e-5;break}n.dispatchEvent(Vs),n.dispatchEvent(Ds)}}function $(k){switch(At(k),M.length){case 1:l=s.TOUCH_ROTATE,m.copy(G(M[0].pageX,M[0].pageY)),g.copy(m);break;default:l=s.TOUCH_ZOOM_PAN;const tt=M[0].pageX-M[1].pageX,yt=M[0].pageY-M[1].pageY;p=d=Math.sqrt(tt*tt+yt*yt);const Wt=(M[0].pageX+M[1].pageX)/2,bt=(M[0].pageY+M[1].pageY)/2;S.copy(w(Wt,bt)),P.copy(S);break}n.dispatchEvent(Vs)}function q(k){switch(At(k),M.length){case 1:g.copy(m),m.copy(G(k.pageX,k.pageY));break;default:const tt=St(k),yt=k.pageX-tt.x,Wt=k.pageY-tt.y;p=Math.sqrt(yt*yt+Wt*Wt);const bt=(k.pageX+tt.x)/2,V=(k.pageY+tt.y)/2;P.copy(w(bt,V));break}}function R(k){switch(M.length){case 0:l=s.NONE;break;case 1:l=s.TOUCH_ROTATE,m.copy(G(k.pageX,k.pageY)),g.copy(m);break;case 2:l=s.TOUCH_ZOOM_PAN;for(let tt=0;tt<M.length;tt++)if(M[tt].pointerId!==k.pointerId){const yt=I[M[tt].pointerId];m.copy(G(yt.x,yt.y)),g.copy(m);break}break}n.dispatchEvent(Ds)}function Q(k){n.enabled!==!1&&k.preventDefault()}function ut(k){M.push(k)}function dt(k){delete I[k.pointerId];for(let tt=0;tt<M.length;tt++)if(M[tt].pointerId==k.pointerId){M.splice(tt,1);return}}function At(k){let tt=I[k.pointerId];tt===void 0&&(tt=new Mt,I[k.pointerId]=tt),tt.set(k.pageX,k.pageY)}function St(k){const tt=k.pointerId===M[0].pointerId?M[1]:M[0];return I[tt.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",y),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",Y),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",j),window.removeEventListener("keydown",L),window.removeEventListener("keyup",B)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",y),this.domElement.addEventListener("pointercancel",K),this.domElement.addEventListener("wheel",Y,{passive:!1}),window.addEventListener("keydown",L),window.addEventListener("keyup",B),this.handleResize(),this.update()}}const Ir=new U,Gp=new qe,Rr=new U;class Jp extends fe{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const De=new ee,jp=new ee;class Yp{constructor(t={}){const e=this;let n,s,a,o;const r={camera:{fov:0,style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);const d=document.createElement("div");d.style.transformStyle="preserve-3d",h.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(m,u){const c=u.projectionMatrix.elements[5]*o;r.camera.fov!==c&&(h.style.perspective=u.isPerspectiveCamera?c+"px":"",r.camera.fov=c),u.view&&u.view.enabled?(h.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,h.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):h.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let T,S;u.isOrthographicCamera&&(T=-(u.right+u.left)/2,S=(u.top+u.bottom)/2);const P=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,I=(u.isOrthographicCamera?`scale( ${P} )scale(`+c+")translate("+p(T)+"px,"+p(S)+"px)"+A(u.matrixWorldInverse):`scale( ${P} )translateZ(`+c+"px)"+A(u.matrixWorldInverse))+"translate("+a+"px,"+o+"px)";r.camera.style!==I&&(d.style.transform=I,r.camera.style=I),g(m,m,u)},this.setSize=function(m,u){n=m,s=u,a=n/2,o=s/2,l.style.width=m+"px",l.style.height=u+"px",h.style.width=m+"px",h.style.height=u+"px",d.style.width=m+"px",d.style.height=u+"px"};function p(m){return Math.abs(m)<1e-10?0:m}function A(m){const u=m.elements;return"matrix3d("+p(u[0])+","+p(-u[1])+","+p(u[2])+","+p(u[3])+","+p(u[4])+","+p(-u[5])+","+p(u[6])+","+p(u[7])+","+p(u[8])+","+p(-u[9])+","+p(u[10])+","+p(u[11])+","+p(u[12])+","+p(-u[13])+","+p(u[14])+","+p(u[15])+")"}function f(m){const u=m.elements;return"translate(-50%,-50%)"+("matrix3d("+p(u[0])+","+p(u[1])+","+p(u[2])+","+p(u[3])+","+p(-u[4])+","+p(-u[5])+","+p(-u[6])+","+p(-u[7])+","+p(u[8])+","+p(u[9])+","+p(u[10])+","+p(u[11])+","+p(u[12])+","+p(u[13])+","+p(u[14])+","+p(u[15])+")")}function g(m,u,c,T){if(m.isCSS3DObject){const S=m.visible===!0&&m.layers.test(c.layers)===!0;if(m.element.style.display=S===!0?"":"none",S===!0){m.onBeforeRender(e,u,c);let P;m.isCSS3DSprite?(De.copy(c.matrixWorldInverse),De.transpose(),m.rotation2D!==0&&De.multiply(jp.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Ir,Gp,Rr),De.setPosition(Ir),De.scale(Rr),De.elements[3]=0,De.elements[7]=0,De.elements[11]=0,De.elements[15]=1,P=f(De)):P=f(m.matrixWorld);const M=m.element,I=r.objects.get(m);if(I===void 0||I.style!==P){M.style.transform=P;const w={style:P};r.objects.set(m,w)}M.parentNode!==d&&d.appendChild(M),m.onAfterRender(e,u,c)}}for(let S=0,P=m.children.length;S<P;S++)g(m.children[S],u,c)}}}const Qp={class:"m-5 fixed z-10"},Kp={class:"relative"},Zp={key:0},qp=["id"],$p={class:"flex flex-wrap"},tA={key:0,class:"bg-sky-800 p-1"},eA=["href"],nA=Je("img",{src:"https://i.imgur.com/ge1Ghy2.gif",alt:"",class:"absolute inset-0 object-cover h-full -z-10 opacity-75 pointer-events-none"},null,-1),iA={class:"absolute bottom-1 right-1 text-gray-500"},sA={__name:"ThreeModel",setup(i){const t=new Wp,e=new Te(40,window.innerWidth/window.innerHeight,1,5e3);e.position.z=2e3;const n=Ve(null),s=Ve(null),a=new ro({antialias:!0}),o=new Yp;a.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight);const r=new zp(e,o.domElement);r.minDistance=500,r.maxDistance=6e3;const l=new Hp(e,o.domElement);(()=>{l.enableZoom=!0,l.enableDamping=!0,l.dampingFactor=.25,l.enableRotate=!1,l.autoRotateSpeed=.5,l.autoRotate=!0})();const d=function(){requestAnimationFrame(d),l.update(),o.render(t,e)},p=Ve([{id:"Vmhgsk_cRNqII4RmYJB1Ww",title:"CSS - 利用 position 與 pointer-events 製作彈跳視窗 (類似 BootStrap Modal)",tags:["CSS","六角筆記王"],createdAt:1631348000214,titleUpdatedAt:1686910190859,tagsUpdatedAt:1693835941604,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkumB1qGK",shortId:"rkumB1qGK",lastChangedAt:1694487751594,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"kIRamSLiTmenGt7hLACqVA",title:"Vic's Note",tags:["隨手筆記","六角筆記王"],createdAt:1626960746702,titleUpdatedAt:1686891374878,tagsUpdatedAt:1693710887100,publishType:"book",publishedAt:1693666113554,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyXOXlvCd",shortId:"SyXOXlvCd",lastChangedAt:1694487689909,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"gl7CmIJ-SPuvaAKsRRoyUg",title:"CSS - width 與 max-width / min-width",tags:["CSS","六角筆記王"],createdAt:1628155521626,titleUpdatedAt:1686895599424,tagsUpdatedAt:1693835672839,publishType:"view",publishedAt:1655348631914,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJ9FRmKyY",shortId:"SJ9FRmKyY",lastChangedAt:1693835660320,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"89BdFleRQnWLnxgwfMb5IA",title:"串接 HackMD API",tags:["隨手筆記"],createdAt:1693811773834,titleUpdatedAt:1693811809062,tagsUpdatedAt:1693811774184,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyUSNZmA3",shortId:"HyUSNZmA3",lastChangedAt:1693811796980,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"NrJu6KpcTQ6Cg99YiWJbdA",title:"Three.js CSS3D",tags:["隨手筆記","Three.js"],createdAt:1693731392404,titleUpdatedAt:1693731462708,tagsUpdatedAt:1693731431511,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1_HqaW0n",shortId:"S1_HqaW0n",lastChangedAt:1693731667203,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"K-wqCOLoQvCroJ9nkYFzFA",title:"Three.js Install",tags:["隨手筆記","Three.js"],createdAt:1693722953511,titleUpdatedAt:1693722979111,tagsUpdatedAt:1693722991678,publishType:"view",publishedAt:1693731579038,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkWLFiWA3",shortId:"SkWLFiWA3",lastChangedAt:1693731259661,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"yQGof1DlTvuBVSqf4l0u7A",title:"Vite 專案樣版下載",tags:["隨手筆記"],createdAt:1693706624270,titleUpdatedAt:1693712252336,tagsUpdatedAt:1693710249131,publishType:"view",publishedAt:1693710336778,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyutYvbCn",shortId:"SyutYvbCn",lastChangedAt:1693713710769,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"rXaTBhXKS9GeqcoD-N76Ug",title:"筆記說明",tags:["隨手筆記","六角筆記王"],createdAt:1627104417220,titleUpdatedAt:1686891630004,tagsUpdatedAt:1693668097968,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1YjE7FAd",shortId:"S1YjE7FAd",lastChangedAt:1693706585547,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"eag0rytQTVeEbi6Z5x6_PQ",title:"Untitled",tags:["git"],createdAt:1678324831211,titleUpdatedAt:1687042879882,tagsUpdatedAt:1687042879850,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryvPE3Lkn",shortId:"ryvPE3Lkn",lastChangedAt:1678324933529,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"76avK2rWR6eBT1LWxXaD4g",title:"起手式",tags:["vite"],createdAt:1674782366585,titleUpdatedAt:1687029861777,tagsUpdatedAt:1687029861751,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkvjUsxnj",shortId:"BkvjUsxnj",lastChangedAt:1675058852530,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"e2Az8T7kRFmiFeC0XebTfA",title:"MOTO GO~",tags:[],createdAt:1669418612571,titleUpdatedAt:1687015406300,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1pd0608j",shortId:"S1pd0608j",lastChangedAt:1671340498198,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"F6fMqYG-SLif9y4ZsvARvQ",title:"json-server-auth",tags:[],createdAt:1669871662036,titleUpdatedAt:1687016820025,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJ8V_hrPj",shortId:"HJ8V_hrPj",lastChangedAt:1669872657039,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"signed_in",writePermission:"owner"},{id:"AY7NCvqdRUip7MeSGrOCOQ",title:"套件收集 - 紀錄各種好用套件",tags:["套件收集","六角筆記王"],createdAt:1619155753217,titleUpdatedAt:1686871351864,tagsUpdatedAt:1693836169976,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJZEsAJvd",shortId:"rJZEsAJvd",lastChangedAt:1669173537020,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"EU7TtpxVTMaCAfs2t3SKDg",title:"CSS - font-size 屬性預設倍率與單位",tags:["CSS","六角筆記王"],createdAt:1628136083784,titleUpdatedAt:1686895503041,tagsUpdatedAt:1693835871916,publishType:"view",publishedAt:1655348363301,permalink:null,publishLink:"https://hackmd.io/@VicSun/BknczyFkK",shortId:"BknczyFkK",lastChangedAt:1668071566608,lastChangeUser:{name:"Hz_Yu",photo:"https://avatars.githubusercontent.com/u/19191197?s=96",biography:null,userPath:"iJGm0TvOT52xYIr1Sv3WoA"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"jnrw9VzGQHyUtwzR7fVGQA",title:"Untitled",tags:[],createdAt:1666925686825,titleUpdatedAt:1687006445639,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJyKN6dNo",shortId:"rJyKN6dNo",lastChangedAt:1667045458732,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"signed_in",writePermission:"owner"},{id:"0gRqcbt6RcK27GF8t-Wq6g",title:"課程筆記",tags:["2022 JS 直播"],createdAt:1663083147715,titleUpdatedAt:1686992759730,tagsUpdatedAt:1686992759691,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJ49GQRlj",shortId:"rJ49GQRlj",lastChangedAt:1664539939765,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"SGtWeaVzREqrEh89XYIwnw",title:"React 入門",tags:["React"],createdAt:1632715287021,titleUpdatedAt:1686914325379,tagsUpdatedAt:1686914325350,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJJQz6RXF",shortId:"rJJQz6RXF",lastChangedAt:1661692600100,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"QSKsW0hvRl-BMBXrzgOnFA",title:"初次認識 TypeScript",tags:["TypeScript"," 六角筆記王"],createdAt:1660352623395,titleUpdatedAt:1686984316557,tagsUpdatedAt:1686984316528,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJDdOO4Rc",shortId:"rJDdOO4Rc",lastChangedAt:1660353323305,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"skSw8vx5TE6UQIVZ26ARYg",title:"套件收集 - NPM 安裝與指令意義",tags:["套件收集","六角筆記王"],createdAt:1627567779675,titleUpdatedAt:1686892694104,tagsUpdatedAt:1693836166602,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Bk3jLEx1F",shortId:"Bk3jLEx1F",lastChangedAt:1660313576659,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"njoemP55RB-V5qTUtEWcAA",title:"leaflet 繪製 改變圓型中心點與參考點 0805",tags:["leaflet"],createdAt:1659663821664,titleUpdatedAt:1686982548796,tagsUpdatedAt:1686982548772,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyUCSl5p9",shortId:"HyUCSl5p9",lastChangedAt:1659663880673,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ME5sXv1qSnyh5jrmkDhW_Q",title:"leaflet 繪製重構 0804",tags:["leaflet"],createdAt:1659599929529,titleUpdatedAt:1686982384938,tagsUpdatedAt:1686982384913,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyGB3et69",shortId:"SyGB3et69",lastChangedAt:1659602059973,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"igTAbgB8QFi3An_bRAlKeg",title:"leaflet 繪製多邊形與圓形兩點直徑/半徑 0803",tags:["leaflet"],createdAt:1659520379417,titleUpdatedAt:1686982154567,tagsUpdatedAt:1686982154541,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyQtS6Paq",shortId:"HyQtS6Paq",lastChangedAt:1659520427961,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"3iuoFQ2wQCGEaWPCyQHOWA",title:"leaflet 繪製多邊形與圓形兩點直徑/半徑",tags:["leaflet"],createdAt:1659430647973,titleUpdatedAt:1686981858396,tagsUpdatedAt:1686981858354,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJx-vDLpq",shortId:"SJx-vDLpq",lastChangedAt:1659430744303,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"w9R8jvpnQ-WcPXQh9c9nrg",title:"2022 六角切版",tags:["2022切版"],createdAt:1658038623079,titleUpdatedAt:1686978203482,tagsUpdatedAt:1686978203456,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJDvFm-2c",shortId:"BJDvFm-2c",lastChangedAt:1659141191274,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"nJArZbSXRwywalM9EjkXjA",title:"Vite 導入 bootstrap 5",tags:["vite"," bootstrap"],createdAt:1658891268380,titleUpdatedAt:1686980496675,tagsUpdatedAt:1686980496637,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skh-3X0hq",shortId:"Skh-3X0hq",lastChangedAt:1658891498635,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"KUfhPxJRQ4qcrlrpvGj48g",title:"快捷鍵 - VScode",tags:["快捷鍵"," 片段","六角筆記王"],createdAt:1627562631972,titleUpdatedAt:1686892671556,tagsUpdatedAt:1693836242452,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJx5z7lkY",shortId:"SJx5z7lkY",lastChangedAt:1658885520995,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"HOORrMceQb6fRW48ID8ccA",title:"Vue 開發起手式",tags:["Vue"],createdAt:1657876762766,titleUpdatedAt:1686977893385,tagsUpdatedAt:1686977893356,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyX7WhAj5",shortId:"SyX7WhAj5",lastChangedAt:1658711485490,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"N7O_1W-2TeSmazBAXlpmBQ",title:"Vue2 與 Vue3 差異",tags:["Vue"],createdAt:1655864169356,titleUpdatedAt:1686972186351,tagsUpdatedAt:1686972186328,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1buslxc9",shortId:"r1buslxc9",lastChangedAt:1655879378689,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"4dPWnK2oRVy_CHutP_0Dow",title:"Kata 練習",tags:["Kata"],createdAt:1655862959157,titleUpdatedAt:1686972181184,tagsUpdatedAt:1686972181156,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJwn8xec5",shortId:"rJwn8xec5",lastChangedAt:1655864115785,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"hO61c7ZgQo6TlnnTqUhQiQ",title:"cookie 與 localStorage 差異",tags:["JavaScirpt"," hexo部落格"],createdAt:1655517453212,titleUpdatedAt:1686971296956,tagsUpdatedAt:1686971296919,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1Hz-29F9",shortId:"B1Hz-29F9",lastChangedAt:1655521275888,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"kx7PSiXUSWec4vN_Vuks3Q",title:"箭頭函式與 this(下) - call、apply、bind",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1604286983148,titleUpdatedAt:1686841707382,tagsUpdatedAt:1693836054745,publishType:"view",publishedAt:1655519345724,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryyG9x6dw",shortId:"ryyG9x6dw",lastChangedAt:1655519128548,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"vrViU7i6T427d5WRLcHdtg",title:"箭頭函式與 this(上)",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1603955227731,titleUpdatedAt:1686841198359,tagsUpdatedAt:1693836044964,publishType:"view",publishedAt:1655518482626,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hy4X51udw",shortId:"Hy4X51udw",lastChangedAt:1655518447729,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"YGo8d2jLSdudZUXSZRqf3g",title:"xarefit享健身",tags:["面試"],createdAt:1632491622952,titleUpdatedAt:1686913896908,tagsUpdatedAt:1686913896883,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyyOu8omt",shortId:"HyyOu8omt",lastChangedAt:1655517022855,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"UqzZSuKdQK6TgVNT9bdpPQ",title:"提升 Hosting",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1607649749280,titleUpdatedAt:1686848267424,tagsUpdatedAt:1693836070091,publishType:"view",publishedAt:1655371475674,permalink:null,publishLink:"https://hackmd.io/@VicSun/ry6Atrenv",shortId:"ry6Atrenv",lastChangedAt:1655371370411,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"VobwKAPHR0OX-tceB8LIsw",title:"傳值與傳址",tags:["JavaScirpt"," hexo部落格"," 六角筆記王"],createdAt:1619156424424,titleUpdatedAt:1686871353804,tagsUpdatedAt:1686871353773,publishType:"view",publishedAt:1655362607896,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJlRTAJw_",shortId:"SJlRTAJw_",lastChangedAt:1655362431794,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"Fq22uWlmRDGujeD-L4zQ1A",title:"運算子",tags:["JavaScirpt"," hexo部落格","六角筆記王"],createdAt:1605708878116,titleUpdatedAt:1686844591137,tagsUpdatedAt:1693836015169,publishType:"view",publishedAt:1655361881038,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sk88nsMqv",shortId:"Sk88nsMqv",lastChangedAt:1655356852922,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"jigt0lTMRjqU2YMYhvHyFw",title:"CSS - 選擇器與權重",tags:["CSS","六角筆記王"],createdAt:1627309027405,titleUpdatedAt:1686891967126,tagsUpdatedAt:1693835831486,publishType:"view",publishedAt:1655347227881,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hyi1NBhCO",shortId:"Hyi1NBhCO",lastChangedAt:1655347186046,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"PkEZCzYGSHGsSZkH6hMwBw",title:"CSS - 預處理器 SASS/SCSS",tags:["CSS","六角筆記王"],createdAt:1627396489232,titleUpdatedAt:1686892160577,tagsUpdatedAt:1693835862100,publishType:"view",publishedAt:1655347063449,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryZqt96Cu",shortId:"ryZqt96Cu",lastChangedAt:1655346003437,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"GL5n9MT5T4Sb-i4e4X-UkA",title:"前端面試問題 - 自我回答",tags:[],createdAt:1655198097893,titleUpdatedAt:1686970258573,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skqq-0HKq",shortId:"Skqq-0HKq",lastChangedAt:1655301804098,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"BXjYcCgGRGa-0RA9_AMwag",title:"Node.js 直播班-小組最終作業",tags:["Node.js"],createdAt:1651848553412,titleUpdatedAt:1686961647662,tagsUpdatedAt:1686961647639,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJ-_H3MUc",shortId:"HJ-_H3MUc",lastChangedAt:1654533600486,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"3kfvnh9AT9CifL7L83uNww",title:"Node.js 直播班-最終作業",tags:["Node.js"],createdAt:1649638568410,titleUpdatedAt:1686956114382,tagsUpdatedAt:1686956114355,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skxn2gb4q",shortId:"Skxn2gb4q",lastChangedAt:1654236801409,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ygU0C5UdTP-hGqqwpcptUw",title:"Node.js 直播班 - 許願池研究",tags:["Node.js"],createdAt:1653296222867,titleUpdatedAt:1686965183455,tagsUpdatedAt:1686965183435,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkwD3adwc",shortId:"BkwD3adwc",lastChangedAt:1654055654765,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"UrVnyNMlQQCKrtS4Gefg0A",title:"Untitled",tags:[],createdAt:1653484719897,titleUpdatedAt:1686965875098,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rk_nniow9",shortId:"rk_nniow9",lastChangedAt:1653484728945,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"wOWooxCFRHuF1LwmcD2Mvg",title:"Node.js 直播班-第七周上課",tags:["Node.js"],createdAt:1653049218747,titleUpdatedAt:1686964701215,tagsUpdatedAt:1686964701193,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJsKwbBP9",shortId:"rJsKwbBP9",lastChangedAt:1653054093025,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Ssi6GDo0RBSDUDKmVbX3Eg",title:"Node.js 直播班第六周 - 助教直播",tags:["Node.js"],createdAt:1652875352103,titleUpdatedAt:1686964212163,tagsUpdatedAt:1686964212134,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1xPxDGvq",shortId:"B1xPxDGvq",lastChangedAt:1652877448075,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"8n_EWGGlQLOLQpkD0e-z3w",title:"Node.js 直播班第六周 - 主線任務",tags:["Node.js"],createdAt:1652492286352,titleUpdatedAt:1686963227430,tagsUpdatedAt:1686963227410,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hy8WuFnUq",shortId:"Hy8WuFnUq",lastChangedAt:1652780680994,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ssJOuWZwTOmG1-7UpMT1GQ",title:"Node.js 直播班第四周 - 主線任務",tags:["Node.js"],createdAt:1652231871386,titleUpdatedAt:1686962508542,tagsUpdatedAt:1686962508517,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJP6AK_I9",shortId:"HJP6AK_I9",lastChangedAt:1652696732596,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"H_LMOQ7DTp6V_CidGDpblg",title:"Node.js 直播班第六周",tags:["Node.js"],createdAt:1652443200092,titleUpdatedAt:1686963144871,tagsUpdatedAt:1686963144845,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HydBd6jLc",shortId:"HydBd6jLc",lastChangedAt:1652452429547,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"QoNPn8ayTmSNmUYeOdpasg",title:"Node.js 直播班第四周",tags:["Node.js"],createdAt:1651233714650,titleUpdatedAt:1686960193823,tagsUpdatedAt:1686960193799,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1shm8tH9",shortId:"H1shm8tH9",lastChangedAt:1652231896229,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"FDtClPIOQYuDzcMid-JwOA",title:"Node.js 直播班第五週加碼直播",tags:["Node.js"],createdAt:1651975635395,titleUpdatedAt:1686961827351,tagsUpdatedAt:1686961827309,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryjCBjVIq",shortId:"ryjCBjVIq",lastChangedAt:1652171333091,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"DNIBkGQHS_6Vb7OBtkFvyw",title:"Node.js 直播班第五周-主線任務",tags:["Node.js"],createdAt:1651906045571,titleUpdatedAt:1686961726289,tagsUpdatedAt:1686961726266,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1IW897I5",shortId:"H1IW897I5",lastChangedAt:1652062564770,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"g2yo1HQMT9mPJx2_TQEXKQ",title:"前端手刻模組",tags:["工作上的點點滴滴"],createdAt:1652000986827,titleUpdatedAt:1686961880724,tagsUpdatedAt:1686961880701,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hk7ytZBU5",shortId:"Hk7ytZBU5",lastChangedAt:1652000989457,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Tt1tKvuPRq6jRZQl1Bs_6Q",title:"Node.js 直播班第五周",tags:["Node.js"],createdAt:1651838847167,titleUpdatedAt:1686961620884,tagsUpdatedAt:1686961620860,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJvtk5MUc",shortId:"HJvtk5MUc",lastChangedAt:1651906042011,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"pulaRcyiQLaZRHRaQkH7Kw",title:"Day21 - 0506 - HTTP 狀態碼",tags:["Node.js 直播班 - 每日"],createdAt:1651799481062,titleUpdatedAt:1686961485659,tagsUpdatedAt:1686961485635,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skb6BxGLq",shortId:"Skb6BxGLq",lastChangedAt:1651800042970,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"KWjiBYdWTaqsqvAeB10lag",title:"Day20 - 0505 - Middleware",tags:["Node.js 直播班 - 每日"],createdAt:1651798983153,titleUpdatedAt:1686961484495,tagsUpdatedAt:1686961484473,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1JC7xMUq",shortId:"r1JC7xMUq",lastChangedAt:1651799452708,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"btc39AU4Tf64HvWae0CYgA",title:"Node.js 直播班第四周主線任務 - 助教 Swagger 文件",tags:["Node.js"],createdAt:1651665722562,titleUpdatedAt:1686961161364,tagsUpdatedAt:1686961161344,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkmSj1gI9",shortId:"SkmSj1gI9",lastChangedAt:1651667351144,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mvzGJFysSN-hMwj82EJrsA",title:"Day19 - 0504",tags:["Node.js 直播班 - 每日"],createdAt:1651627686045,titleUpdatedAt:1686961018801,tagsUpdatedAt:1686961018778,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryRsLUy89",shortId:"ryRsLUy89",lastChangedAt:1651627992401,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"HP5kDolYTxq_x2esoI7s1w",title:"Day18 - 0503",tags:["Node.js 直播班 - 每日"],createdAt:1651539915449,titleUpdatedAt:1686960769920,tagsUpdatedAt:1686960769897,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJQAJWCS9",shortId:"SJQAJWCS9",lastChangedAt:1651541764262,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"GbPP--W2TUSoqPrfZGymRQ",title:"Node.js 直播班第三周主線任務",tags:["Node.js"],createdAt:1650667834404,titleUpdatedAt:1686958746291,tagsUpdatedAt:1686958746265,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyMrb2eSc",shortId:"SyMrb2eSc",lastChangedAt:1651224004303,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mxJmrKHJT4W9_lQZKMyjDQ",title:"Day15 - 0428",tags:["Node.js 直播班 - 每日"],createdAt:1651123708934,titleUpdatedAt:1686959825893,tagsUpdatedAt:1686959825866,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HySZIsPSq",shortId:"HySZIsPSq",lastChangedAt:1651123756353,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"aT0hHDX2R0Gn7wmHeFkD0w",title:"Day14 - 0427",tags:["Node.js 直播班 - 每日"],createdAt:1651021770220,titleUpdatedAt:1686959523605,tagsUpdatedAt:1686959523581,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryfADzLHq",shortId:"ryfADzLHq",lastChangedAt:1651022695871,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"jx3PetUTR1KmihvKtlQxSg",title:"Day13 - 0426",tags:["Node.js 直播班 - 每日"],createdAt:1650945251929,titleUpdatedAt:1686959304628,tagsUpdatedAt:1686959304612,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJnkayHrq",shortId:"SJnkayHrq",lastChangedAt:1650945517207,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"HSVP0rHETSi85KHiF4XZ3w",title:"Day12 - 0425",tags:["Node.js 直播班 - 每日"],createdAt:1650848605709,titleUpdatedAt:1686959028615,tagsUpdatedAt:1686959028594,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hk8DQdXH9",shortId:"Hk8DQdXH9",lastChangedAt:1650849198403,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"UFEyoLTrSxaN_AvFrbLDtA",title:"Vuex 狀態集中管理",tags:["Vue"," Vuex"],createdAt:1631611300118,titleUpdatedAt:1686910956641,tagsUpdatedAt:1686910956612,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By3jY10fF",shortId:"By3jY10fF",lastChangedAt:1650807485031,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"cgRXUhVsTaKO_CtkVWxHiA",title:"Node.js 直播班第二周主線任務 - 助教拆解程式碼",tags:["Node.js"],createdAt:1650667868893,titleUpdatedAt:1686958746327,tagsUpdatedAt:1686958746306,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BySw-3grc",shortId:"BySw-3grc",lastChangedAt:1650668085529,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"1_k4WLjKT36xhTSDjh5MFA",title:"Node.js 直播班第三周",tags:["Node.js"],createdAt:1650629198150,titleUpdatedAt:1686958683789,tagsUpdatedAt:1686958683769,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryLIqzeS9",shortId:"ryLIqzeS9",lastChangedAt:1650637134106,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"bh9VUPgnSkanrnFn2v8l7Q",title:"Day11 - 0422",tags:["Node.js 直播班 - 每日"],createdAt:1650589314635,titleUpdatedAt:1686958546847,tagsUpdatedAt:1686958546828,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HysYC_Jr9",shortId:"HysYC_Jr9",lastChangedAt:1650589340309,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"e3do2wYoSquTPjkwjUSPUQ",title:"Vue 3 問題集",tags:["Vue"],createdAt:1650012069396,titleUpdatedAt:1686957273934,tagsUpdatedAt:1686957273911,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1pjJhUEc",shortId:"B1pjJhUEc",lastChangedAt:1650527304731,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"_iHCQeLyS52IYuo9BJQl2w",title:"Node.js 直播班第二周主線任務",tags:["Node.js"],createdAt:1650003271959,titleUpdatedAt:1686957237209,tagsUpdatedAt:1686957237191,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryl86KI49",shortId:"ryl86KI49",lastChangedAt:1650512107481,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Z_Xjj1ExQL-Y28s0lVg1Hw",title:"Day10 - 0421",tags:["Node.js 直播班 - 每日"],createdAt:1650506957353,titleUpdatedAt:1686958321241,tagsUpdatedAt:1686958321220,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1HR2N0V9",shortId:"H1HR2N0V9",lastChangedAt:1650507170519,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"Z_yX8lVmTzynfvv-YYHJ9A",title:"Day9 - 0420",tags:["Node.js 直播班 - 每日"],createdAt:1650416690255,titleUpdatedAt:1686958061002,tagsUpdatedAt:1686958060985,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJ5VnChE5",shortId:"rJ5VnChE5",lastChangedAt:1650417359055,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"Szs2j01CQjKJVtAed7Cd1Q",title:"Day8 - 0419",tags:["Node.js 直播班 - 每日"],createdAt:1650330364471,titleUpdatedAt:1686957824900,tagsUpdatedAt:1686957824880,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJV-iYjV5",shortId:"SJV-iYjV5",lastChangedAt:1650330704941,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"4cTXuxk7QPy31sZsNh9wkg",title:"Day7 - 0418",tags:["Node.js 直播班 - 每日"],createdAt:1650244213080,titleUpdatedAt:1686957614529,tagsUpdatedAt:1686957614506,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJad5E94q",shortId:"BJad5E94q",lastChangedAt:1650330556500,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"GeaxZTU7QK-yFfq3m6QrTw",title:"Node.js 直播班第二周",tags:["Node.js"],createdAt:1650015145521,titleUpdatedAt:1686957280497,tagsUpdatedAt:1686957280471,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyznohUE9",shortId:"HyznohUE9",lastChangedAt:1650095422671,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"QYGyd29oQP-DHDHRe1Wwpw",title:"HTML - 標籤選擇",tags:["HTML","六角筆記王"],createdAt:1627287798219,titleUpdatedAt:1686891908450,tagsUpdatedAt:1693835816846,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1CeWg3AO",shortId:"B1CeWg3AO",lastChangedAt:1650001685230,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"RPpVlJYmSAy-0ZRTFWZDdA",title:"Day4 - 0413",tags:["Node.js 直播班 - 每日"],createdAt:1649812282338,titleUpdatedAt:1686956660810,tagsUpdatedAt:1686956660787,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJMr7smE9",shortId:"BJMr7smE9",lastChangedAt:1649813177919,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"2o94NOCARrWXSLli2Ze0dg",title:"Day3 - 0412",tags:["Node.js 直播班 - 每日"],createdAt:1649727078793,titleUpdatedAt:1686956404525,tagsUpdatedAt:1686956404493,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ByJu8LMN9",shortId:"ByJu8LMN9",lastChangedAt:1649813143322,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"mXHd93zRTSaJ2kJaES3bLQ",title:"前端面試問題",tags:[],createdAt:1649811608236,titleUpdatedAt:1686956658856,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJxsesQ4c",shortId:"rJxsesQ4c",lastChangedAt:1649811614279,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"v8bVMK5ZQGCgVZJB90Gulw",title:"Node.js 直播班第一周主線任務",tags:["Node.js"],createdAt:1649428793202,titleUpdatedAt:1686955762186,tagsUpdatedAt:1686955762161,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJWrtTTm5",shortId:"SJWrtTTm5",lastChangedAt:1649496458707,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"zhzGJ7DpRgm4QHX4jokrIA",title:"Node.js 直播班第一周",tags:["Node.js"],createdAt:1649419108186,titleUpdatedAt:1686955732303,tagsUpdatedAt:1686955732271,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sy2DQia79",shortId:"Sy2DQia79",lastChangedAt:1649426875550,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"PDnLjNVkQWCROvpIRTjJ-g",title:"vim 指令練習",tags:["vim"],createdAt:1625103200752,titleUpdatedAt:1686886567409,tagsUpdatedAt:1686886567380,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkFwsqq2_",shortId:"rkFwsqq2_",lastChangedAt:1645584930539,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"SOXG59fXTh238rGKzaQmIg",title:"Node.js 直播班預習課程筆記",tags:["Node.js"],createdAt:1642947951912,titleUpdatedAt:1686940075057,tagsUpdatedAt:1686940075029,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryuOB1o6K",shortId:"ryuOB1o6K",lastChangedAt:1645173645222,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"2f3ZY_VhR_C-4yymL14GPQ",title:"mongoDB 入門 - 會員登入",tags:["mongodb"],createdAt:1643341928771,titleUpdatedAt:1686941096877,tagsUpdatedAt:1686941096856,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJ-d_yZ0K",shortId:"rJ-d_yZ0K",lastChangedAt:1644285123574,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"uKgY4FB5SjSdSnAKwaHSNQ",title:"mongoDB 入門",tags:["mongodb"],createdAt:1639126122623,titleUpdatedAt:1686931621121,tagsUpdatedAt:1686931621093,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1QuNqxqY",shortId:"r1QuNqxqY",lastChangedAt:1639126164312,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"siOEtQ0QQpOrAvehAaLKQQ",title:"Week4 - 薪資數據圖表調查",tags:["F2E"],createdAt:1638424071053,titleUpdatedAt:1686929870104,tagsUpdatedAt:1686929870068,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hk1zARSFK",shortId:"Hk1zARSFK",lastChangedAt:1638434619040,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"hrXOyY0OSlqnPguPs5PjIQ",title:"Nuxt 入門",tags:["Nuxt"],createdAt:1634457065225,titleUpdatedAt:1686919028965,tagsUpdatedAt:1686919028889,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyZgLIFBF",shortId:"HyZgLIFBF",lastChangedAt:1638424475619,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"OTtr9l_mTSu0glo9VakCiA",title:"Week3 - 全台公車動態時刻查詢應用服務",tags:["F2E"],createdAt:1637541577291,titleUpdatedAt:1686927488628,tagsUpdatedAt:1686927488601,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJ-CUwdut",shortId:"BJ-CUwdut",lastChangedAt:1638424226502,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"uOcckZW4RY6P-s7E8HWM9Q",title:"Week 2 - 自行車道地圖資訊整合網",tags:["F2E"],createdAt:1634371323876,titleUpdatedAt:1686918891224,tagsUpdatedAt:1686918891197,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1VWDWOHt",shortId:"r1VWDWOHt",lastChangedAt:1637541569183,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"KCvz5cc-QnaaLws9fykf6g",title:"Week 1 - 台灣旅遊景點導覽",tags:["F2E"],createdAt:1636255422134,titleUpdatedAt:1686923991867,tagsUpdatedAt:1686923991830,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ry8p8aEDK",shortId:"ry8p8aEDK",lastChangedAt:1636789281546,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"EDxQ_nCxSeeLd6CbPtz8qQ",title:"token",tags:["github"],createdAt:1634536274547,titleUpdatedAt:1686919216511,tagsUpdatedAt:1686919216489,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJoUjYcSt",shortId:"rJoUjYcSt",lastChangedAt:1634536309463,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"KK7ad59PSkKI5hbdYvNJvQ",title:"Composition API - Vue 3",tags:["Vue"],createdAt:1632902562563,titleUpdatedAt:1686914991462,tagsUpdatedAt:1686914991440,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkoopq-4F",shortId:"rkoopq-4F",lastChangedAt:1634455432762,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"xRUavUzFRvmsUqwdKU29WQ",title:"React Next.js 使用 BootStrap",tags:["React"],createdAt:1634118676e3,titleUpdatedAt:1686918165144,tagsUpdatedAt:1686918165113,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Bknfn74HK",shortId:"Bknfn74HK",lastChangedAt:1634196590860,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"5O5nYnijRoWIhqp7prvj9Q",title:"Tiktok工程師帶你入門前端 - React",tags:["React"],createdAt:1633762930706,titleUpdatedAt:1686917237437,tagsUpdatedAt:1686917237419,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hksd0hR4t",shortId:"Hksd0hR4t",lastChangedAt:1633923270838,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"6iQZLIKmSZSp6uFxDGekpA",title:"MVC、SPA、SSR",tags:["Vue"],createdAt:1631697181171,titleUpdatedAt:1686911274416,tagsUpdatedAt:1686911274389,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryr7tVymF",shortId:"ryr7tVymF",lastChangedAt:1633499722074,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Qy3m8CKgQVmzMMdK6hevNA",title:"常見前端面試考題大全",tags:["面試"],createdAt:1631416624489,titleUpdatedAt:1686910291529,tagsUpdatedAt:1686910291502,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hkd4WxiGF",shortId:"Hkd4WxiGF",lastChangedAt:1633492478158,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ybqERLMGRmOLDK-mGeWCyQ",title:"Vue computed 運作原理以及與methods和watch的分別",tags:["Vue"],createdAt:1623290420607,titleUpdatedAt:1686881712552,tagsUpdatedAt:1686881712523,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By64zgkju",shortId:"By64zgkju",lastChangedAt:1633482610821,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"x94pgaMhRA61mimrVWuLCQ",title:"Untitled",tags:[],createdAt:1632492165817,titleUpdatedAt:1686913897673,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkCF9IjQY",shortId:"SkCF9IjQY",lastChangedAt:1632625862021,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"RwPX-_-NSb-M5drw4FE82Q",title:"JS核心篇 - 函式",tags:["JavaScirpt"," hexo部落格","六角筆記王"],createdAt:1606313783927,titleUpdatedAt:1686845651613,tagsUpdatedAt:1693836128969,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkgHPk2qD",shortId:"SkgHPk2qD",lastChangedAt:1631517183465,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"b_aNS5I4QPiryJmbtFDeWg",title:"迴圈變數與作用域",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1604553199362,titleUpdatedAt:1686842352400,tagsUpdatedAt:1693836110200,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJve9WZYv",shortId:"BJve9WZYv",lastChangedAt:1631430852138,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"uzz7eKAFRrOSOgVLQvZozQ",title:"ES6 變數宣告與全域環境",tags:["JavaScirpt"," hexo部落格","六角筆記王"],createdAt:1603853701487,titleUpdatedAt:1686840739107,tagsUpdatedAt:1693836008730,publishType:"view",publishedAt:1655356750158,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hyat688_D",shortId:"Hyat688_D",lastChangedAt:1631415656913,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"tSqtesz6QbGoey4kOdgCwg",title:"Promise",tags:["JavaScirpt"," hexo部落格","六角筆記王"],createdAt:1607760838979,titleUpdatedAt:1686848444097,tagsUpdatedAt:1693836113830,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BykAixG2w",shortId:"BykAixG2w",lastChangedAt:1631253814157,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"TcI_xbm5SZa6MYAAas9gDQ",title:"JS核心篇 - 閉包",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1606974226256,titleUpdatedAt:1686846832283,tagsUpdatedAt:1693836106382,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By9fieUiv",shortId:"By9fieUiv",lastChangedAt:1631252635200,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"wlZNwLo1QGW3_tgDmDqtfw",title:"JS核心篇 - 原型鏈",tags:["JavaScirpt"," hexo部落格","隨手筆記"],createdAt:1606831864114,titleUpdatedAt:1686846580198,tagsUpdatedAt:1693836102477,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skx-JC7jw",shortId:"Skx-JC7jw",lastChangedAt:1631251992198,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"JXBJMkiLSMGi38MMJ6ywsA",title:"JS核心篇 - 物件屬性設定",tags:["JavaScirpt"," hexo部落格","六角筆記王"],createdAt:1607169419550,titleUpdatedAt:1686847156142,tagsUpdatedAt:1693836082254,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJ4qSlYow",shortId:"BJ4qSlYow",lastChangedAt:1631251632976,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"oideyb7wQvKee30PtLmNQA",title:"CSS - 邊距重疊",tags:["CSS","六角筆記王"],createdAt:1631159907516,titleUpdatedAt:1686909161355,tagsUpdatedAt:1693835695625,publishType:"view",publishedAt:1655349267100,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJswLbvzt",shortId:"rJswLbvzt",lastChangedAt:1631179999606,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"euc00OdtRG6AuU6LHcfMNA",title:"CSS - box-model",tags:["CSS","六角筆記王"],createdAt:1631154217464,titleUpdatedAt:1686909113094,tagsUpdatedAt:1693835887533,publishType:"view",publishedAt:1655349250925,permalink:null,publishLink:"https://hackmd.io/@VicSun/Byb4xgDMF",shortId:"Byb4xgDMF",lastChangedAt:1631159888346,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"j7n_xxIeSQGPkVZKqfme_w",title:"拆解任務",tags:["履歷"],createdAt:1614847453614,titleUpdatedAt:1686861510172,tagsUpdatedAt:1686861510091,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rk810MAG_",shortId:"rk810MAG_",lastChangedAt:1631086219327,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"CnRT2yKpR8SOKaGNzCA-Lg",title:"firebase x toDoList x 番茄鐘 x 達成獎勵",tags:["firebase"],createdAt:1629896191391,titleUpdatedAt:1686904546610,tagsUpdatedAt:1686904546583,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyDWA3QZt",shortId:"SyDWA3QZt",lastChangedAt:1630845242544,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"zsfb-1qRRS2u2OgvOKs6jw",title:"拖曳元素",tags:["拖曳元素","六角筆記王"],createdAt:1630401895375,titleUpdatedAt:1686906692793,tagsUpdatedAt:1693836156624,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJkdBuibK",shortId:"HJkdBuibK",lastChangedAt:1630768133734,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"ANwsk3JlTyaOXZsnm7al5Q",title:"簡易後端資料庫 - Firebase 資料庫與帳號驗證登入",tags:["firebase","六角筆記王"],createdAt:1629856708424,titleUpdatedAt:1686904394075,tagsUpdatedAt:1693836257361,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1267mQZt",shortId:"r1267mQZt",lastChangedAt:1630741545802,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"Py1UItSJQt-j_JqBEsyYqA",title:"Bootstrap 預設樣式更改",tags:["Bootstrap","六角筆記王"],createdAt:1630724337547,titleUpdatedAt:1686907751468,tagsUpdatedAt:1693836251281,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkcgWvgfY",shortId:"BkcgWvgfY",lastChangedAt:1630741429045,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"7k7rpQW2Sp-_rmXZKQw6RA",title:"第八周",tags:["2021 切版班"],createdAt:1629349408902,titleUpdatedAt:1686902363144,tagsUpdatedAt:1686902363116,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyFXUPilY",shortId:"SyFXUPilY",lastChangedAt:1630672301484,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"jksApnP-STyGT9autMjO6g",title:"加碼直播與心得牆",tags:["2021 切版班"],createdAt:1630065412363,titleUpdatedAt:1686905342627,tagsUpdatedAt:1686905342587,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJn-7L8Zt",shortId:"BJn-7L8Zt",lastChangedAt:1630550497938,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"pxtNfGJ7REGqVuOMYX5dsQ",title:"替專案加上 Mixpanel",tags:["Mixpanel"," SEO"],createdAt:1630221632468,titleUpdatedAt:1686905659145,tagsUpdatedAt:1686905659125,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1OBSnuWF",shortId:"H1OBSnuWF",lastChangedAt:1630290666886,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"edGPVmMeQlWWYYH80bHRlA",title:"SEO 初學",tags:["SEO"],createdAt:1630222725780,titleUpdatedAt:1686905661460,tagsUpdatedAt:1686905661435,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S10Ytn_bK",shortId:"S10Ytn_bK",lastChangedAt:1630222790888,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"wH8kD2kPTCG1NTGbcJaDmA",title:"SEO 四項規劃",tags:["SEO"," 結構化資料"],createdAt:1602827473858,titleUpdatedAt:1686838628057,tagsUpdatedAt:1686838628033,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkqANnUvw",shortId:"rkqANnUvw",lastChangedAt:1630222685909,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"th_uKVWmSg6ZYzNgKvveYQ",title:"Bootstrap 通用類別 - API 使用方式",tags:["Bootstrap","六角筆記王"],createdAt:1629344834373,titleUpdatedAt:1686902311946,tagsUpdatedAt:1693836247723,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJqB4UilK",shortId:"SJqB4UilK",lastChangedAt:1629881621418,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"xDJ-8hH3RtKPQ-qGHcGmhQ",title:"Node.js 開 API",tags:["Node.js"," 六角筆記王"],createdAt:1629270783041,titleUpdatedAt:1686901513042,tagsUpdatedAt:1686901513010,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkPWQEqxY",shortId:"rkPWQEqxY",lastChangedAt:1629279266333,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"hD3eyaIbS-ukcCJYnJLFYg",title:"第七周",tags:["2021 切版班"],createdAt:1628856349351,titleUpdatedAt:1686899580541,tagsUpdatedAt:1686899580490,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyrmxyVlt",shortId:"HyrmxyVlt",lastChangedAt:1628862737046,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"5yY3gnpeRR2la5blUQrHCg",title:"CSS - position",tags:["CSS"],createdAt:1628672955203,titleUpdatedAt:1686898481412,tagsUpdatedAt:1686898481378,publishType:"view",publishedAt:1655349089484,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkXa7M-gF",shortId:"BkXa7M-gF",lastChangedAt:1628756189831,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"wNaEbeLQSe-fCMTtZsaiig",title:"第六周",tags:["2021 切版班"],createdAt:1628236200009,titleUpdatedAt:1686896105759,tagsUpdatedAt:1686896105722,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJg2KvqJF",shortId:"HJg2KvqJF",lastChangedAt:1628581231603,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"qFf_V_-cTdSOgatlMZaD_w",title:"Untitled",tags:[],createdAt:1628470426274,titleUpdatedAt:1686896979233,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1fj3e0JF",shortId:"B1fj3e0JF",lastChangedAt:1628470544379,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"xNyioVldTpC1jnuSNrrAqw",title:"好用工具",tags:["工具"," 六角筆記王"],createdAt:1628174568056,titleUpdatedAt:1686895666632,tagsUpdatedAt:1686895666600,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1llK_KJK",shortId:"B1llK_KJK",lastChangedAt:1628174605348,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"0ZGo8jcORYSDLHowbeJ-fQ",title:"第五周",tags:["2021 切版班"],createdAt:1627695096047,titleUpdatedAt:1686893514890,tagsUpdatedAt:1686893514866,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1eb_mfJK",shortId:"r1eb_mfJK",lastChangedAt:1628039601488,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"22iWW3g4RDaAeExgpTYLow",title:"CSS - 跑版了嗎? 試著調整 flex-shrink / basis / grow",tags:["CSS","六角筆記王"],createdAt:1627867196238,titleUpdatedAt:1686894219696,tagsUpdatedAt:1693835867598,publishType:"view",publishedAt:1655348342851,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1EB_T4JY",shortId:"H1EB_T4JY",lastChangedAt:1628001587137,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"FtktSAATTwiQVh44E5medQ",title:"FontAwesome icon",tags:["fontawesome"],createdAt:1627710811673,titleUpdatedAt:1686893573260,tagsUpdatedAt:1686893573242,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkVvrwzJF",shortId:"HkVvrwzJF",lastChangedAt:1627711150607,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"j2rDKz_sRzWXc4BhWXGbMg",title:"Git - 初始化",tags:["Git","六角筆記王"],createdAt:1627528354315,titleUpdatedAt:1686892494861,tagsUpdatedAt:1693836207152,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B15ih5yyt",shortId:"B15ih5yyt",lastChangedAt:1627701207457,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"JYaquECNQfuN9-ZBiWIm4Q",title:"菁英直播 - Vue 常見面試問題",tags:["六角 2021 vue直播班"],createdAt:1627646663142,titleUpdatedAt:1686893332753,tagsUpdatedAt:1686893332727,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkJR9DW1F",shortId:"HkJR9DW1F",lastChangedAt:1627656430727,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"fkJz1VQ_R1mJEsfcr0Ticw",title:"第三周",tags:["2021 切版班"],createdAt:1625993240796,titleUpdatedAt:1686888753346,tagsUpdatedAt:1686888753271,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJWmxNOaO",shortId:"rJWmxNOaO",lastChangedAt:1627630833024,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"IRfCUCWCTHuEBZURehY5uQ",title:"CSS - 文字取代圖片",tags:["CSS","六角筆記王"],createdAt:1627605964192,titleUpdatedAt:1686892825733,tagsUpdatedAt:1693835935778,publishType:"view",publishedAt:1655349373827,permalink:null,publishLink:"https://hackmd.io/@VicSun/ry4Rj6xkF",shortId:"ry4Rj6xkF",lastChangedAt:1627608658932,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"XHCzgUPdQm-Mwj6XRdYRJA",title:"快捷鍵 - Emmet",tags:["快捷鍵","六角筆記王"],createdAt:1609770655959,titleUpdatedAt:1686851958780,tagsUpdatedAt:1693836234831,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryuiLjlCv",shortId:"ryuiLjlCv",lastChangedAt:1627563744944,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"rK5_H_VkTU2k2WewuZGZTg",title:"Git - gh-pages",tags:["Git","六角筆記王"],createdAt:1627544877381,titleUpdatedAt:1686892578126,tagsUpdatedAt:1693836202899,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1S4TAJ1Y",shortId:"B1S4TAJ1Y",lastChangedAt:1627561312822,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"rNp-U67CRlmrJWZOP7-4HA",title:"Git 環境安裝",tags:["Git","六角筆記王"],createdAt:1627442828801,titleUpdatedAt:1686892247872,tagsUpdatedAt:1693836186737,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJHq0BR0_",shortId:"HJHq0BR0_",lastChangedAt:1627536289315,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"7seBMX1kSrWYV2j17o4CMw",title:"CSS - 偽元素",tags:["CSS","六角筆記王"],createdAt:1627366730500,titleUpdatedAt:1686892076974,tagsUpdatedAt:1693835854774,publishType:"view",publishedAt:1655347103017,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkGLrXTAd",shortId:"SkGLrXTAd",lastChangedAt:1627376807022,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"bzxIq6eJRf6buNpoqLo4QQ",title:"HTML - 網頁初始結構",tags:["HTML","六角筆記王"],createdAt:1627270593253,titleUpdatedAt:1686891855382,tagsUpdatedAt:1693835822715,publishType:"view",publishedAt:1655348062487,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJtp6ooC_",shortId:"rJtp6ooC_",lastChangedAt:1627278232696,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"c3FS3Q9WQeOjLdCcXPwDug",title:"HTML - 標籤元素",tags:["HTML","六角筆記王"],createdAt:1627043773604,titleUpdatedAt:1686891552610,tagsUpdatedAt:1693835803464,publishType:"view",publishedAt:1655348040784,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1LpwN_Ad",shortId:"S1LpwN_Ad",lastChangedAt:1627278212032,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"T3G5kc2pRTmBujiU77ze4w",title:"titangene - hackmd-dark-theme",tags:["theme"],createdAt:1627269391056,titleUpdatedAt:1686891852156,tagsUpdatedAt:1686891852136,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1DMFioCO",shortId:"S1DMFioCO",lastChangedAt:1627269756578,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"c-ZZk4hoTSGQ7h2FrFuh7A",title:"HackMD Dark Theme",tags:["theme"],createdAt:1587091044669,titleUpdatedAt:1686811597469,tagsUpdatedAt:1686811597435,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1TD8cIu8",shortId:"B1TD8cIu8",lastChangedAt:1627268875148,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"A_m_jlSVRWm_0WbielMbZQ",title:"BootStrap 5 檢討",tags:["BootStrap 實戰營"],createdAt:1623154373173,titleUpdatedAt:1686881396312,tagsUpdatedAt:1686881396286,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJppRA25_",shortId:"rJppRA25_",lastChangedAt:1627268710428,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"chKNNDz7TLKCmdqHwWFxoA",title:"BootStrap 5 實戰營 最終設計稿筆記",tags:["BootStrap 實戰營"],createdAt:1622594437408,titleUpdatedAt:1686879485186,tagsUpdatedAt:1686879485144,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1aYmLN5_",shortId:"B1aYmLN5_",lastChangedAt:1627268676421,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"AhJepNhKTqSRdD7zZ0o7gA",title:"最終作品 - 助教回覆",tags:["六角 2021 vue直播班"],createdAt:1625981557698,titleUpdatedAt:1686888718235,tagsUpdatedAt:1686888718205,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B10uMb_pu",shortId:"B10uMb_pu",lastChangedAt:1627002680053,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"GYaT21fhT-ORoMGPGgSCrQ",title:"第二周",tags:["2021 切版班"],createdAt:1625646175356,titleUpdatedAt:1686887814657,tagsUpdatedAt:1686887814634,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkvDVyQp_",shortId:"SkvDVyQp_",lastChangedAt:1626419462789,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"br7zXaegQ-WFa5910wL2Eg",title:"最終作品 - 發表會",tags:["六角 2021 vue直播班"],createdAt:1626321721008,titleUpdatedAt:1686889903411,tagsUpdatedAt:1686889903392,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJZSXVT6O",shortId:"BJZSXVT6O",lastChangedAt:1626321937193,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"51-RjSWdSNaSY2FYgBWRzQ",title:"第一周與 kata",tags:["2021 切版班"],createdAt:1625187768e3,titleUpdatedAt:1686886797271,tagsUpdatedAt:1686886797212,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJlTHJ32u",shortId:"BJlTHJ32u",lastChangedAt:1625799337655,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"xKjt_525RUqx2MdV2i1kZA",title:"最終作品",tags:["六角 2021 vue直播班"],createdAt:1620033544256,titleUpdatedAt:1686873083249,tagsUpdatedAt:1686873083229,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BylGxB6vu",shortId:"BylGxB6vu",lastChangedAt:1625753501918,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"vE0fPbtuRvupEaETcnY3Lg",title:"參與心得",tags:["六角 2021 vue直播班"],createdAt:1625120611355,titleUpdatedAt:1686886625268,tagsUpdatedAt:1686886625237,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Syivykj3u",shortId:"Syivykj3u",lastChangedAt:1625730796913,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"VOkS2pZlTkO3XbQcSFu84w",title:"極速開發 vim 常用指令",tags:["vim"],createdAt:1611892856115,titleUpdatedAt:1686856190235,tagsUpdatedAt:1686856190214,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rylY_WWgu",shortId:"rylY_WWgu",lastChangedAt:1625107211805,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"s-RHbHfdTnKlExZBA0aTMw",title:"最終作品 - 主題構想與文案",tags:["六角 2021 vue直播班"],createdAt:1624524909234,titleUpdatedAt:1686885159377,tagsUpdatedAt:1686885159333,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryS_upZnO",shortId:"ryS_upZnO",lastChangedAt:1624525122786,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"qVEFj9f-QBKKHdz5YXWNjA",title:"課前練習 - 指令",tags:["六角 2021 vue直播班"],createdAt:1618629145411,titleUpdatedAt:1686870129135,tagsUpdatedAt:1686870129103,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJZ7f0wUu",shortId:"rJZ7f0wUu",lastChangedAt:1624524887431,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"dh8HTBWsRhyBTxDTCJUv2Q",title:"第三周助教建議",tags:["六角 2021 vue直播班"],createdAt:1622171475545,titleUpdatedAt:1686877833930,tagsUpdatedAt:1686877833902,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hk281kRKO",shortId:"Hk281kRKO",lastChangedAt:1624524877348,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"zMbAo5DyR5awL-YXcGWnMw",title:"第六周 - 開發筆記",tags:["六角 2021 vue直播班"],createdAt:1623220899868,titleUpdatedAt:1686881545896,tagsUpdatedAt:1686881545873,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJnjGJCcu",shortId:"BJnjGJCcu",lastChangedAt:1623724375222,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"aWnyTsMjQvey3Hzq12FVjQ",title:"第九周 API",tags:["2021 JS 直播班春"],createdAt:1616632550996,titleUpdatedAt:1686865650194,tagsUpdatedAt:1686865650168,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkkes8FVd",shortId:"rkkes8FVd",lastChangedAt:1623211651543,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"KB4j-ZdCQVyGYJD2QvLZeQ",title:"第六周 - 開發筆記2 - 實際操作",tags:["六角 JS直播班"],createdAt:1595840431459,titleUpdatedAt:1686827251237,tagsUpdatedAt:1686827251210,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1D2PM2eD",shortId:"r1D2PM2eD",lastChangedAt:1623204162685,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Gth9-ruzSSmT1wr1G0RkvA",title:"Bootstrap5 實戰營第四週筆記",tags:[],createdAt:1622594713712,titleUpdatedAt:1686879486117,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJGjNLEcd",shortId:"BJGjNLEcd",lastChangedAt:1622617502230,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"InslrgBcQQGMjS8HSUVsTQ",title:"b4fu6",tags:[],createdAt:1621934484661,titleUpdatedAt:1686877012504,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJp5bSqFO",shortId:"rJp5bSqFO",lastChangedAt:1621934484661,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"JDueE_hLRCW-5LKQzCnzbA",title:"2021/05/13 每日 CSS 權重概念",tags:["BootStrap 實戰營"],createdAt:1620867604151,titleUpdatedAt:1686874742539,tagsUpdatedAt:1686874742514,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Bk3G9xqOu",shortId:"Bk3G9xqOu",lastChangedAt:1620869300741,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"},{id:"TaxxTFsARz-5tTh6lRFY_w",title:"文章列表",tags:["JavaScirpt"," hexo部落格"],createdAt:1604560534564,titleUpdatedAt:1686842376545,tagsUpdatedAt:1686842376512,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJyiLmZKw",shortId:"BJyiLmZKw",lastChangedAt:1620390229278,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ZhesA84iTaKiQ5wSbCrsxQ",title:"bmiKata",tags:["2021 Vue 作品實戰班"],createdAt:1619685612648,titleUpdatedAt:1686872498838,tagsUpdatedAt:1686872498817,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkSx-xuvO",shortId:"SkSx-xuvO",lastChangedAt:1619685655500,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"MeptFenxRS-Y1zsXiJ4yOg",title:"第六周 API 支線任務",tags:["2021 JS 直播班春"],createdAt:1616036185147,titleUpdatedAt:1686864376699,tagsUpdatedAt:1686864376676,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SybD-Sg4O",shortId:"SybD-Sg4O",lastChangedAt:1619685544795,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mwiJ-N8IRHyp5-qPFC4gRw",title:"methods 與 computed",tags:["Vue.js"," hexo"],createdAt:1619579402454,titleUpdatedAt:1686872082364,tagsUpdatedAt:1686872082343,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJMzG8IPd",shortId:"BJMzG8IPd",lastChangedAt:1619580322712,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"1G2Lej1qTge6KMzSiXNBsw",title:"更新日誌",tags:["hexo"],createdAt:1619146954673,titleUpdatedAt:1686871329868,tagsUpdatedAt:1686871329849,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJmAu2JPd",shortId:"SJmAu2JPd",lastChangedAt:1619150462759,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"UCUhEUiCTRuc3ZmM8EJeLw",title:"自傳",tags:["履歷"],createdAt:1614577422696,titleUpdatedAt:1686860781526,tagsUpdatedAt:1686860781504,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkwGyZcM_",shortId:"BkwGyZcM_",lastChangedAt:1618910992296,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"dgKuUUibS3qsnjj9R-Lf6A",title:"第五週",tags:["2021 JS 直播班春"],createdAt:1615600433934,titleUpdatedAt:1686863250916,tagsUpdatedAt:1686863250892,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkcEi5FQd",shortId:"BkcEi5FQd",lastChangedAt:1618629118093,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"nrmB1ij5TRmM3FJnURaQ3w",title:"爬 IG 圖片",tags:["爬蟲"],createdAt:1618473730986,titleUpdatedAt:1686869839177,tagsUpdatedAt:1686869839153,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJsW7dBUu",shortId:"HJsW7dBUu",lastChangedAt:1618473984253,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"PL4nzqqvREyryrCpeFtEKw",title:"快捷鍵",tags:["程式開發"],createdAt:1612488212469,titleUpdatedAt:1686857504418,tagsUpdatedAt:1686857504393,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJhMRM9gu",shortId:"rJhMRM9gu",lastChangedAt:1615860223920,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"SSNWu1EVTm66ja_b74QK1Q",title:"BMI",tags:["kata"],createdAt:1614959286287,titleUpdatedAt:1686861777596,tagsUpdatedAt:1686861777562,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkA2fRkXu",shortId:"rkA2fRkXu",lastChangedAt:1614959410082,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"SAbmnrukSHeJxvMxTMNAzA",title:"9F 抽獎轉盤",tags:["JS地下城"],createdAt:1613975656348,titleUpdatedAt:1686859616148,tagsUpdatedAt:1686859616128,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkeOlAlGO",shortId:"HkeOlAlGO",lastChangedAt:1614760803666,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"rq3Eubn5QH6avkK64VxiSw",title:"8F 井字遊戲",tags:["JS地下城"],createdAt:1612575485440,titleUpdatedAt:1686857652604,tagsUpdatedAt:1686857652585,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1HZXdogu",shortId:"H1HZXdogu",lastChangedAt:1613964541293,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ts-AvegvRreQ7IgexJ03mw",title:"7F 畫板",tags:["JS地下城"],createdAt:1611802583970,titleUpdatedAt:1686856003501,tagsUpdatedAt:1686856003482,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1ekOokgO",shortId:"B1ekOokgO",lastChangedAt:1612511114459,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"3uK_DY33Rnq30TK-tvc92A",title:"6F 60秒算術",tags:["JS地下城"],createdAt:1610940537471,titleUpdatedAt:1686854251363,tagsUpdatedAt:1686854251292,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ByZtxYM1_",shortId:"ByZtxYM1_",lastChangedAt:1611756138759,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"TMxJ4CzmTbmw9w32JXcMMA",title:"課前最終作業",tags:["2021 六角JS直播班"],createdAt:1610764427214,titleUpdatedAt:1686854061001,tagsUpdatedAt:1686854060981,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJm9g01yu",shortId:"rJm9g01yu",lastChangedAt:1610886372733,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"YM3g__jIRduoiMxszfE77w",title:"5F - 全台空氣指標",tags:["JS地下城"],createdAt:1610003437608,titleUpdatedAt:1686852387422,tagsUpdatedAt:1686852387404,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hk8eVVERP",shortId:"Hk8eVVERP",lastChangedAt:1610799572341,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"HCzsEUPjQqeKhNy-C1lFbw",title:"3F - 新版計算機",tags:["JS地下城"],createdAt:1608686002099,titleUpdatedAt:1686850432575,tagsUpdatedAt:1686850432555,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Bk5nKzeaD",shortId:"Bk5nKzeaD",lastChangedAt:1610179417940,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Jrec7V8QSC2683WK3kpg5Q",title:"4F - 世界時鐘",tags:["JS地下城"],createdAt:1609492698603,titleUpdatedAt:1686851658253,tagsUpdatedAt:1686851658230,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rym1KwnpP",shortId:"rym1KwnpP",lastChangedAt:1610004831015,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Sf6YrovKRSivJZPEFtzUUQ",title:"npm指令說明",tags:["npm、hexo部落格"],createdAt:1609730913152,titleUpdatedAt:1686851867985,tagsUpdatedAt:1686851867966,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyYDoZgRD",shortId:"SyYDoZgRD",lastChangedAt:1609731225055,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"NFWOXYidT3OuWwzt26LaRg",title:"Hexo 教學(五) 部署文章至 Github Page",tags:["hexo"],createdAt:1603677608222,titleUpdatedAt:1686840344801,tagsUpdatedAt:1686840344776,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Syl3aoQuv",shortId:"Syl3aoQuv",lastChangedAt:1609483006855,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"1i6-w6qdT8SsLWEsADVTPQ",title:"筆記",tags:["Vue3"],createdAt:1608128563097,titleUpdatedAt:1686849450574,tagsUpdatedAt:1686849450547,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Syi4_5Pnw",shortId:"Syi4_5Pnw",lastChangedAt:1608565092296,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"D53zv1zHRkCPu70oF1uYjA",title:"3F - 計算機",tags:["JS地下城"],createdAt:1587628865247,titleUpdatedAt:1686812696448,tagsUpdatedAt:1686812696360,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SktBjpCuU",shortId:"SktBjpCuU",lastChangedAt:1608284130492,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"786K5IHMQe6dL1eAOBPw_g",title:"圖表繪製",tags:["hexo"],createdAt:1608023428142,titleUpdatedAt:1686849195568,tagsUpdatedAt:1686849195547,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BynYTeLnw",shortId:"BynYTeLnw",lastChangedAt:1608023478731,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Jbq-4oVgTJuRpwUkQPBRNg",title:"如何撰寫數學式及圖表",tags:["tutorials"],createdAt:1608009279531,titleUpdatedAt:1686849144468,tagsUpdatedAt:1686849144444,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyOBITH2P",shortId:"SyOBITH2P",lastChangedAt:1608009301910,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"UhqE2ZFNTRirRoOI1Il3Pw",title:"JS熱門面試題",tags:["JavaScript"],createdAt:1607496849703,titleUpdatedAt:1686847927656,tagsUpdatedAt:1686847927635,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJ554eCjv",shortId:"SJ554eCjv",lastChangedAt:1607496892402,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ltyqo9zCSdOASjtO41FSBA",title:"物件",tags:["JavaScirpt"," hexo部落格"],createdAt:1605943488581,titleUpdatedAt:1686845005720,tagsUpdatedAt:1686845005690,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyFTxSLqw",shortId:"SyFTxSLqw",lastChangedAt:1606383255346,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"IHeswi-rRtiRM5Dpn2kO0g",title:"JS30 Day 1",tags:["JS30"," JavaScirpt"],createdAt:1606375304884,titleUpdatedAt:1686845757562,tagsUpdatedAt:1686845757522,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1WcPRhqD",shortId:"H1WcPRhqD",lastChangedAt:1606377703753,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mSPIxYrmSGmOiYeeMCkXYg",title:"鼎新開新資料庫",tags:[],createdAt:1604479744546,titleUpdatedAt:1686842218617,tagsUpdatedAt:null,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJYZoklFP",shortId:"HJYZoklFP",lastChangedAt:1605840690793,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"4BJ5scu5SPu18HjRF-bx4g",title:"第三堂 排序演算法",tags:["演算法入門"],createdAt:1602826609801,titleUpdatedAt:1686838623523,tagsUpdatedAt:1686838623501,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJ9OW38vv",shortId:"HJ9OW38vv",lastChangedAt:1605702751411,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mxioS7aOSTC3uPxHz4yqXA",title:"Google試算表作為線上資料庫 - 讀取資料",tags:["Google試算表"," 資料庫"],createdAt:1605583021212,titleUpdatedAt:1686844316100,tagsUpdatedAt:1686844316079,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJrneagcP",shortId:"HJrneagcP",lastChangedAt:1605691651005,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"y2a8wQI1T86YmaPenaODVA",title:"第二堂 搜尋演算法",tags:["演算法入門"],createdAt:1602490897836,titleUpdatedAt:1686837770422,tagsUpdatedAt:1686837770401,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H15Mzc-vD",shortId:"H15Mzc-vD",lastChangedAt:1605517091220,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"LHlXh4R7Srmuc9hOz3g2ag",title:"第一堂 演算法與大 O 符號",tags:["演算法入門"],createdAt:1602480398209,titleUpdatedAt:1686837727168,tagsUpdatedAt:1686837727141,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkLGYPZPP",shortId:"rkLGYPZPP",lastChangedAt:1605516280542,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"tkxUb5mvRiKvfLJ9qFiROg",title:"Hexo教學 Next主題設定與頁面功能(Ver. 8)",tags:["hexo"],createdAt:1603768043114,titleUpdatedAt:1686840544795,tagsUpdatedAt:1686840544718,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJXlyMrOw",shortId:"SJXlyMrOw",lastChangedAt:1605511480781,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"NfGNgwcRSNq8w2o_N7zFJA",title:"其他布景主題",tags:["hexo"],createdAt:1605369999267,titleUpdatedAt:1686843994802,tagsUpdatedAt:1686843994784,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1PcgK6KP",shortId:"S1PcgK6KP",lastChangedAt:1605511455984,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"lHBuwOIQRdaIiiQCBvQBqg",title:"用 JS控制 Arduino板",tags:["Arduino"],createdAt:1605259591001,titleUpdatedAt:1686843761476,tagsUpdatedAt:1686843761460,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJyUbRotP",shortId:"BJyUbRotP",lastChangedAt:1605259741882,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"dOMiA0sdRlKX6OhHoUfWEw",title:"IoT與JS - Arduino與電腦連線",tags:["Arduino"],createdAt:1605152530627,titleUpdatedAt:1686843502609,tagsUpdatedAt:1686843502591,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1ozJNqtD",shortId:"r1ozJNqtD",lastChangedAt:1605152878330,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"6XhK7DfeSOWPlGg0XNjZhA",title:"N5單字 - 數字",tags:["日文N5"],createdAt:1605104846176,titleUpdatedAt:1686843367371,tagsUpdatedAt:1686843367356,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyLA4_ttP",shortId:"HyLA4_ttP",lastChangedAt:1605105783005,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"tFUYMHIzTHaffRdtOpjNnQ",title:"程式英文",tags:["程式英文"],createdAt:1605056627658,titleUpdatedAt:1686843255134,tagsUpdatedAt:1686843255113,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJ3ddhOYw",shortId:"SJ3ddhOYw",lastChangedAt:1605056655540,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"17u90uE9SQmuQjwOiQO0qA",title:"SEO工具",tags:["SEO"," 結構化資料"],createdAt:1605055821740,titleUpdatedAt:1686843253926,tagsUpdatedAt:1686843253899,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1LLrhOKv",shortId:"H1LLrhOKv",lastChangedAt:1605055906429,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"93DF2YwzRWeia0rD5GAyeg",title:"ES6語法糖 - 解構賦值與其餘參數",tags:["JavaScirpt"," hexo部落格"],createdAt:1604025139376,titleUpdatedAt:1686841351600,tagsUpdatedAt:1686841351559,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ByoNsxFdw",shortId:"ByoNsxFdw",lastChangedAt:1604472729792,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"xNzoV__ITpSP2bHe3fe2YA",title:"前導 網站的基本元件、10點網站設計原則、真值表",tags:["資訊安全"," hexo部落格"],createdAt:1604067968449,titleUpdatedAt:1686841453718,tagsUpdatedAt:1686841453699,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJOYMjKuD",shortId:"HJOYMjKuD",lastChangedAt:1604240455136,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"huG_7qaRQrKE11KB73uNdA",title:"ES6語法糖 - Promis",tags:["JavaScirpt"," hexo部落格"],createdAt:1604029286435,titleUpdatedAt:1686841366759,tagsUpdatedAt:1686841366737,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sy0wiZtOv",shortId:"Sy0wiZtOv",lastChangedAt:1604029541040,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Y1E7O3tRSBOwlFBjaUZ5ZQ",title:"JS新手特訓班 - 第四十關 - this、promis、fetch",tags:["JS新手特訓班-每日"],createdAt:1596111969416,titleUpdatedAt:1686827686220,tagsUpdatedAt:1686827686196,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SktDhEgWP",shortId:"SktDhEgWP",lastChangedAt:1604029369975,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"a0jspgy5RlGwglzfblD8hw",title:"SEO重點整理 - 站長路可",tags:["SEO"," 結構化資料"],createdAt:1597838433920,titleUpdatedAt:1686829927878,tagsUpdatedAt:1686829927854,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H15vE99fw",shortId:"H15vE99fw",lastChangedAt:1603852224956,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"D1sfoJdDTKOD5fv1tftlMw",title:"Hexo 教學(三) - Hexo主題匯入與設定",tags:["hexo"],createdAt:1603346197930,titleUpdatedAt:1686839766344,tagsUpdatedAt:1686839766318,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyCfyjAPv",shortId:"SyCfyjAPv",lastChangedAt:1603767080591,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"u4VT3dFLReSdjd6LgCi9JA",title:"Hexo 教學(六) 文章標籤與分類",tags:["hexo"],createdAt:1603698951153,titleUpdatedAt:1686840405639,tagsUpdatedAt:1686840405617,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1yz-bV_D",shortId:"H1yz-bV_D",lastChangedAt:1603700141220,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"et3K91PKT1yWmBAhbb5sBw",title:"Hexo 教學(四) 新增文章與常用 hexo指令",tags:["hexo"],createdAt:1603419770821,titleUpdatedAt:1686839938909,tagsUpdatedAt:1686839938890,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkQtRnydw",shortId:"rkQtRnydw",lastChangedAt:1603691558073,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"z-9ji6xpR9m2nz_G91H-6A",title:"Hexo 教學(一) 使用 Hexo寫部落格",tags:["hexo"],createdAt:1603183703517,titleUpdatedAt:1686839349106,tagsUpdatedAt:1686839349086,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJJPEQhwv",shortId:"BJJPEQhwv",lastChangedAt:1603434427046,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"rgSUufwKTVqvQvXcrOctyQ",title:"Hexo 教學(二) 環境建立與安裝 hexo",tags:["hexo"],createdAt:1603337550966,titleUpdatedAt:1686839740939,tagsUpdatedAt:1686839740910,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1P8aO0wP",shortId:"r1P8aO0wP",lastChangedAt:1603432491297,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"O4M6qk5KSLanMh-s54Izhg",title:"第五堂",tags:["六角 Git直播班"],createdAt:1601544869996,titleUpdatedAt:1686836094985,tagsUpdatedAt:1686836094966,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJRofQX8w",shortId:"BJRofQX8w",lastChangedAt:1601624814258,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"zfFEh9UCTVCvr0NCXruCTw",title:"關卡分享",tags:["六角 Git直播班"],createdAt:1601428164211,titleUpdatedAt:1686835825442,tagsUpdatedAt:1686835825409,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sknp9Lb8v",shortId:"Sknp9Lb8v",lastChangedAt:1601624523087,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"ZSmQeGnzTJ6K_P8zZy7d7Q",title:"第一堂",tags:["六角 Git直播班"],createdAt:1599825966224,titleUpdatedAt:1686832914829,tagsUpdatedAt:1686832914809,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By8V_kY4D",shortId:"By8V_kY4D",lastChangedAt:1601544993440,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mrL9aEcqSnezKficylB72g",title:"電商修練第二、三周",tags:["電商修練"],createdAt:1600353117105,titleUpdatedAt:1686833854344,tagsUpdatedAt:1686833854321,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1Svml-BD",shortId:"S1Svml-BD",lastChangedAt:1600867027305,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"WRTq9pTnS9-x9wrjmSCXMg",title:"第八周最終作業修改建議 V3",tags:["六角 JS直播班"],createdAt:1599719296191,titleUpdatedAt:1686832656029,tagsUpdatedAt:1686832655987,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1_tDrDEv",shortId:"r1_tDrDEv",lastChangedAt:1599815568526,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"rgvyyRGOSnqcagSsPsy_vg",title:"電商修練第一周",tags:["電商修練"],createdAt:1599653025875,titleUpdatedAt:1686832551993,tagsUpdatedAt:1686832551972,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sy9sVr8Ew",shortId:"Sy9sVr8Ew",lastChangedAt:1599656520089,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"7TLANOXVQPCrQ8LbAXTSyA",title:"JS新手特訓班 第55~60關",tags:["JS新手特訓班-每日"],createdAt:1599055924433,titleUpdatedAt:1686831670347,tagsUpdatedAt:1686831670329,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJhEdmaXv",shortId:"HJhEdmaXv",lastChangedAt:1599532102345,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Mjlyrc-hQCqwe6Vfc4Nhsw",title:"最終作業第二版-修改建議",tags:["六角 JS直播班"],createdAt:1598929320279,titleUpdatedAt:1686831438549,tagsUpdatedAt:1686831438530,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJe2FNjQv",shortId:"BJe2FNjQv",lastChangedAt:1599200448356,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"aSHvLGAuTkO06Bvmrm04qg",title:"JS新手特訓班 - 第53、54關",tags:["JS新手特訓班-每日"],createdAt:1597905107228,titleUpdatedAt:1686830026077,tagsUpdatedAt:1686830026050,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkjA_csMP",shortId:"SkjA_csMP",lastChangedAt:1599055904496,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"6KJaDRnnQZW232RvRVhgNQ",title:"最終作業 第一版修正建議",tags:["六角 JS直播班"],createdAt:1597910244338,titleUpdatedAt:1686830038216,tagsUpdatedAt:1686830038150,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJhy6isMD",shortId:"SJhy6isMD",lastChangedAt:1598604852058,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"hxriZTldRCuJ8NdHyMZLBg",title:"JS新手特訓班 第54關",tags:["JS新手特訓班-每日"],createdAt:1598494681798,titleUpdatedAt:1686830875878,tagsUpdatedAt:1686830875858,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1zkdqNmD",shortId:"S1zkdqNmD",lastChangedAt:1598498384468,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"6GOGRjU3TVuG_EAUvcAu0Q",title:"JS新手特訓班 - 第51、52關",tags:["JS新手特訓班-每日"],createdAt:1598490848651,titleUpdatedAt:1686830863738,tagsUpdatedAt:1686830863711,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryYJFYNXw",shortId:"ryYJFYNXw",lastChangedAt:1598495156125,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"WHhNYSE-TEK2bhYYvrQC0w",title:"加碼直播 JS核心 閉包與原型",tags:["六角 JS直播班"],createdAt:1598443308793,titleUpdatedAt:1686830760505,tagsUpdatedAt:1686830760487,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJS41Rmmw",shortId:"HJS41Rmmw",lastChangedAt:1598449012056,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"UsnodTg5S4uUwyA14b6ALQ",title:"最終作業 - 使用套件與外部連結",tags:["六角 JS直播班"],createdAt:1598406283779,titleUpdatedAt:1686830672873,tagsUpdatedAt:1686830672854,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJEq0VQ7P",shortId:"SJEq0VQ7P",lastChangedAt:1598406663875,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"A1ZWlGlHTqWWkDU8t4nbbQ",title:"第七周 - 網站主題",tags:["六角 JS直播班"],createdAt:1596172619583,titleUpdatedAt:1686827755047,tagsUpdatedAt:1686827755026,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkELFX--w",shortId:"SkELFX--w",lastChangedAt:1598369638214,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"GyJuAGUITHOknIOt9Bvzyg",title:"JS新手特訓班 - 第四十一關 - 時間",tags:["JS新手特訓班-每日"],createdAt:1596618177193,titleUpdatedAt:1686828329528,tagsUpdatedAt:1686828329505,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyFTHe_-w",shortId:"SyFTHe_-w",lastChangedAt:1598261633942,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"jk3F8hNkSFGSOnrO-1adpw",title:"第八周 - 最終作品 - 功能需求",tags:["六角 JS直播班"],createdAt:1596873719029,titleUpdatedAt:1686828673666,tagsUpdatedAt:1686828673649,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJJZ2Ao-P",shortId:"HJJZ2Ao-P",lastChangedAt:1597910235065,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Q6nXsLw5QQ6lZiOiqY6-fA",title:"JS新手特訓班 - 第49、50關",tags:["JS新手特訓班-每日"],createdAt:1597626673619,titleUpdatedAt:1686829549440,tagsUpdatedAt:1686829549420,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S19EFIDzD",shortId:"S19EFIDzD",lastChangedAt:1597635462271,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"TQB5OxShR4WZniLHGOnfSw",title:"第八周",tags:["六角 JS直播班"],createdAt:1596803099184,titleUpdatedAt:1686828611906,tagsUpdatedAt:1686828611854,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1m7_aq-D",shortId:"B1m7_aq-D",lastChangedAt:1596807374198,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"FavGRMmHR2CJQoYgim47UA",title:"第七周 - 開發筆記",tags:["六角 JS直播班"],createdAt:1596377539103,titleUpdatedAt:1686827957294,tagsUpdatedAt:1686827957278,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1i6YHV-P",shortId:"r1i6YHV-P",lastChangedAt:1596782823141,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"vbzgESDqRZmsNvDCI04QtA",title:"轉職忍者一組 第六周 小組任務",tags:["六角 JS直播班"],createdAt:1596176092433,titleUpdatedAt:1686827760619,tagsUpdatedAt:1686827760596,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkNJP4-WD",shortId:"BkNJP4-WD",lastChangedAt:1596283963268,lastChangeUser:{name:"Bucky Chu",photo:"https://uploads-public.hackmd.io/upload_ec61b44cfff415af5a794332b6158b62.png",biography:null,userPath:"bucky0112"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"GUCAYtnVT663idYjBwwznA",title:"第六周 - 開發筆記1 - 環境建立",tags:["六角 JS直播班"],createdAt:1595769628859,titleUpdatedAt:1686827149702,tagsUpdatedAt:1686827149683,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1rQXWsxD",shortId:"H1rQXWsxD",lastChangedAt:1596102052470,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"SqjqVhCORxqV5LeQ9Q3lHA",title:"JS新手特訓班 - 第39關 7/30",tags:["JS新手特訓班-每日"],createdAt:1596013997652,titleUpdatedAt:1686827534077,tagsUpdatedAt:1686827534057,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r18hThRev",shortId:"r18hThRev",lastChangedAt:1596033446564,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"-8iqWJxZSymr545uhh9jLA",title:"第六周",tags:["六角 JS直播班"],createdAt:1595593823206,titleUpdatedAt:1686826946876,tagsUpdatedAt:1686826946854,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyDwNUdxw",shortId:"SyDwNUdxw",lastChangedAt:1595772020180,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"omNqXoRiT5aBQDG2SC_YFA",title:"JS新手特訓班 - 第36關 7/27",tags:["JS新手特訓班-每日"],createdAt:1595561989380,titleUpdatedAt:1686826886631,tagsUpdatedAt:1686826886609,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJp-dRPgw",shortId:"BJp-dRPgw",lastChangedAt:1595755128693,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"yJXIG3WBSia4sbrVWzONVg",title:"JS新手特訓班 - 第37關 7/28",tags:["JS新手特訓班-每日"],createdAt:1595749879142,titleUpdatedAt:1686827133339,tagsUpdatedAt:1686827133323,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B11W839gw",shortId:"B11W839gw",lastChangedAt:1595754723972,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"p0vIWz6LQimPy7ocg7Ud5A",title:"第五周 - 開發筆記",tags:["六角 JS直播班"],createdAt:1595293208686,titleUpdatedAt:1686826438575,tagsUpdatedAt:1686826438546,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By-mA27lP",shortId:"By-mA27lP",lastChangedAt:1595492296261,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"RTV4wCHLQYKVQurrDZB6WA",title:"轉職忍者一組  Day25 7/17",tags:["六角 JS直播班-每日"],createdAt:1594956535805,titleUpdatedAt:1686826027732,tagsUpdatedAt:1686826027698,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1eWi50kw",shortId:"B1eWi50kw",lastChangedAt:1595340234163,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"rkaa_PIlTtilAEEfAuQb1Q",title:"第五周",tags:["六角 JS直播班"],createdAt:1594987718711,titleUpdatedAt:1686826095853,tagsUpdatedAt:1686826095835,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJJ04Gkxv",shortId:"HJJ04Gkxv",lastChangedAt:1594993569437,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"iNnouVgqSwqvhPQQLlzW0Q",title:"第四周 小組任務",tags:["六角 JS直播班"],createdAt:1594818187923,titleUpdatedAt:1686825807173,tagsUpdatedAt:1686825807117,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HyN9RO3Jw",shortId:"HyN9RO3Jw",lastChangedAt:1594973002454,lastChangeUser:{name:"Bucky Chu",photo:"https://uploads-public.hackmd.io/upload_ec61b44cfff415af5a794332b6158b62.png",biography:null,userPath:"bucky0112"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"k9mefbAQTZ6uVkP2utAq2g",title:"JS新手特訓班 - Day30 7/17",tags:["JS新手特訓班-每日"],createdAt:1594948920618,titleUpdatedAt:1686826006206,tagsUpdatedAt:1686826006185,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1Wra_RJD",shortId:"H1Wra_RJD",lastChangedAt:1594953127621,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"Zi0RtxnnThGlH3NFFreFzg",title:"第四周 - 開發筆記",tags:["六角 JS直播班"],createdAt:1594457428736,titleUpdatedAt:1686825254993,tagsUpdatedAt:1686825254974,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJTUaxvJw",shortId:"HJTUaxvJw",lastChangedAt:1594907609592,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ci0656OPRE2i68PrZDEY6Q",title:"轉職忍者一組 7/14：Day 22",tags:["六角 JS直播班-每日"],createdAt:1594698469267,titleUpdatedAt:1686825571252,tagsUpdatedAt:1686825571226,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJ61jjqJw",shortId:"HJ61jjqJw",lastChangedAt:1594805197735,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"dBvBRoLsT6WIpbBWdDo0nw",title:"轉職忍者一組 Day21 7/13",tags:["六角 JS直播班-每日"],createdAt:1594609421558,titleUpdatedAt:1686825407788,tagsUpdatedAt:1686825407767,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1LfJUt1v",shortId:"S1LfJUt1v",lastChangedAt:1594722402175,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"1tpcrdXATzGG0Zcl1Z6qvg",title:"第四周筆記",tags:["六角 JS直播班"],createdAt:1594383404835,titleUpdatedAt:1686825176670,tagsUpdatedAt:1686825176646,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1BEhCHJD",shortId:"r1BEhCHJD",lastChangedAt:1594391790066,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Z7MtjGapSEGBPJbtJ-pibg",title:"第三周 - 小組任務",tags:["六角 JS直播班"],createdAt:1594195273028,titleUpdatedAt:1686824814739,tagsUpdatedAt:1686824814714,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BybUpx7kD",shortId:"BybUpx7kD",lastChangedAt:1594375569932,lastChangeUser:{name:"楊琮任",photo:"https://graph.facebook.com/2629283843757904/picture?width=96",biography:null,userPath:"MhZhtPVfTHanTVVP-3Ov6A"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"f6Ad3MyZTnaAanoXFDSIyA",title:"第三周 - 開發筆記(含支線)",tags:["六角 JS直播班"],createdAt:1594017983682,titleUpdatedAt:1686824456301,tagsUpdatedAt:1686824456273,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rydTOSekD",shortId:"rydTOSekD",lastChangedAt:1594367614297,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"LygSttwmQWKIog9li0pHAQ",title:"轉職忍者一組 Day 20 7/3",tags:["六角 JS直播班-每日"],createdAt:1593741242678,titleUpdatedAt:1686824103273,tagsUpdatedAt:1686824103247,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skm6kG3CU",shortId:"Skm6kG3CU",lastChangedAt:1594111980675,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"uJiTKjN5Q-S-rqkayMOY3A",title:"第三周",tags:["六角 JS直播班"],createdAt:1593777059364,titleUpdatedAt:1686824195038,tagsUpdatedAt:1686824195012,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJiij93AL",shortId:"SJiij93AL",lastChangedAt:1593786441560,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"osfZwIdgTKKcgREdJlJYKQ",title:"轉職忍者一組 Day19 7/2",tags:["六角 JS直播班-每日"],createdAt:1593653845718,titleUpdatedAt:1686823937411,tagsUpdatedAt:1686823937386,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sk0L5h5RL",shortId:"Sk0L5h5RL",lastChangedAt:1593763339632,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"9QpbOcUpQcS4CfMGVPiM3Q",title:"轉職忍者一組 Day 18 (7/1)",tags:["六角 JS直播班-每日"],createdAt:1593570224341,titleUpdatedAt:1686823782830,tagsUpdatedAt:1686823782791,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1OhXOYCI",shortId:"r1OhXOYCI",lastChangedAt:1593675878987,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"gQexzfPUQ7SGUnTcZ9SsAg",title:"轉職忍者一組 Day 17 (6/30)",tags:["六角 JS直播班-每日"],createdAt:1593478712700,titleUpdatedAt:1686823598754,tagsUpdatedAt:1686823598721,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Hy-SC-_CI",shortId:"Hy-SC-_CI",lastChangedAt:1593589750196,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"i6pA3tfsSkKiWYN2wW532A",title:"第二周小組任務 - Vue 課前預習",tags:["六角 JS直播班"],createdAt:1593392401235,titleUpdatedAt:1686823412716,tagsUpdatedAt:1686823412686,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkYz6h80U",shortId:"rkYz6h80U",lastChangedAt:1593524315474,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"1ZgUzUJMQ4iCg60EkqD1tw",title:"轉職忍者一組 Day16 6/29",tags:["六角 JS直播班-每日"],createdAt:1593399474315,titleUpdatedAt:1686823433991,tagsUpdatedAt:1686823433966,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJ52_0LRI",shortId:"rJ52_0LRI",lastChangedAt:1593499967428,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"AlcxP4EJSGSv_Eo7NFmT5Q",title:"第二周 - 開發筆記",tags:["六角 JS直播班"],createdAt:1593172722993,titleUpdatedAt:1686823184847,tagsUpdatedAt:1686823184825,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1olXvmRI",shortId:"S1olXvmRI",lastChangedAt:1593392810045,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"FPfOJRPWRdWM047PLxpTKg",title:"第二周 - API串接",tags:["六角 JS直播班"],createdAt:1593172655507,titleUpdatedAt:1686823184686,tagsUpdatedAt:1686823184666,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Byv3MvQRI",shortId:"Byv3MvQRI",lastChangedAt:1593392504253,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"DpNS897ORruj_F9aND9uTw",title:"第一周 - 小組討論",tags:["六角 JS直播班"],createdAt:1592316300783,titleUpdatedAt:1686821854882,tagsUpdatedAt:1686821854846,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkB5bULa8",shortId:"BkB5bULa8",lastChangedAt:1593307019274,lastChangeUser:{name:"Jim Lin",photo:"https://lh4.googleusercontent.com/-ItuOBUVTrtM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfTn1ZM-t3owt_BNdIzJO1Jk3OQMQ/photo.jpg",biography:null,userPath:"GHqIKS-xSR-uUWePiLSe_Q"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"jRF2Xb87SfSF-c8_jdr7mA",title:"轉職忍者一組 Day 13 (6/24)",tags:["六角 JS直播班-每日"],createdAt:1592960246424,titleUpdatedAt:1686822868140,tagsUpdatedAt:1686822868110,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJAeS7lAU",shortId:"rJAeS7lAU",lastChangedAt:1593075557537,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"bNb7rcWjR-epr6fYztqr3Q",title:"JS新手特訓班 - 第三周",tags:["JS新手特訓班-六月直播"],createdAt:1592998672568,titleUpdatedAt:1686822950765,tagsUpdatedAt:1686822950742,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sktzo3lR8",shortId:"Sktzo3lR8",lastChangedAt:1593000903745,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"cmiDwQLZQ8aThUhIQDP83A",title:"JS新手特訓班 - 第一周",tags:["JS新手特訓班-六月直播"],createdAt:1591355830644,titleUpdatedAt:1686820298049,tagsUpdatedAt:1686820298024,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkkpKiP3U",shortId:"HkkpKiP3U",lastChangedAt:1592998771558,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"DQbo4elzTSGehywwNGSjjQ",title:"轉職忍者一組 Day 12 (6/23)",tags:["六角 JS直播班-每日"],createdAt:1592876583791,titleUpdatedAt:1686822730694,tagsUpdatedAt:1686822730669,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJe4C0R6L",shortId:"SJe4C0R6L",lastChangedAt:1592994570884,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"aL1T5UrrQWaLD2BtzdcapQ",title:"轉職忍者一組 Day11 6/22",tags:["六角 JS直播班-每日"],createdAt:1592787048076,titleUpdatedAt:1686822562951,tagsUpdatedAt:1686822562902,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJe_gK6pU",shortId:"SJe_gK6pU",lastChangedAt:1592915782929,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Zzzt7-ZvT3-e-Xq5zS9E1A",title:"轉職忍者一組 Day10 6/19",tags:["六角 JS直播班-每日"],createdAt:1592531275303,titleUpdatedAt:1686822250006,tagsUpdatedAt:1686822249984,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryQ8Y5ta8",shortId:"ryQ8Y5ta8",lastChangedAt:1592821909420,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Cn4HF3IkTOWZr-nGrNLQoA",title:"第一周 - 關注點分離",tags:["六角 JS直播班"],createdAt:1592567405443,titleUpdatedAt:1686822340405,tagsUpdatedAt:1686822340382,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1r_UQ5pL",shortId:"S1r_UQ5pL",lastChangedAt:1592632120645,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"-5XcMrHyRzGKTPJdNcc3cw",title:"轉職忍者一組 Day6 6/18",tags:["六角 JS直播班-每日"],createdAt:1592441444371,titleUpdatedAt:1686822091894,tagsUpdatedAt:1686822091871,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HJnvc4uaI",shortId:"HJnvc4uaI",lastChangedAt:1592566592480,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Dm8EK1anTJq8tiUquctiXQ",title:"轉職忍者一組 Day6 6/16",tags:["六角 JS直播班-每日"],createdAt:1592283768245,titleUpdatedAt:1686821762167,tagsUpdatedAt:1686821762143,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HklKGCBpI",shortId:"HklKGCBpI",lastChangedAt:1592541703538,lastChangeUser:{name:"Kunz",photo:"https://www.gravatar.com/avatar/2b2c8b52fc0ae78941f88c5e19fb719c?s=96",biography:null,userPath:"Kunz"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"GdD4R89QRQKIe4RX1nDBaA",title:"1F - 99乘法表",tags:["JS地下城"],createdAt:1587359856016,titleUpdatedAt:1686812068331,tagsUpdatedAt:1686812068252,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1udx2qOL",shortId:"S1udx2qOL",lastChangedAt:1592539849072,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"tI6pnrYBTc-l8VuTejARRQ",title:"轉職忍者一組 Day6 6/17",tags:["六角 JS直播班-每日"],createdAt:1592375150461,titleUpdatedAt:1686821955981,tagsUpdatedAt:1686821955960,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryIOvNDpL",shortId:"ryIOvNDpL",lastChangedAt:1592472662199,lastChangeUser:{name:"Chi husn Tien",photo:"https://lh3.googleusercontent.com/a-/AOh14GjumsjYTNCl-eYIaFPwCprt40k2hUlAJLwudjn7mw",biography:null,userPath:"CPAckhRATaWfFwI0-heayg"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Mf6NW_GDQuCW21Y9sHqGlw",title:"Day10 6/16",tags:["JS新手特訓班-每日"],createdAt:1592279159060,titleUpdatedAt:1686821751545,tagsUpdatedAt:1686821751479,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJ1YlpSTU",shortId:"SJ1YlpSTU",lastChangedAt:1592315712587,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"_xG8f_3iTFOfRbJ7acrk0g",title:"轉職忍者一組 Day6 6/15",tags:["六角 JS直播班-每日"],createdAt:1592192690979,titleUpdatedAt:1686821563151,tagsUpdatedAt:1686821563125,publishType:"edit",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1ihCDVa8",shortId:"B1ihCDVa8",lastChangedAt:1592278273730,lastChangeUser:{name:"卡斯伯",photo:"https://avatars.githubusercontent.com/u/3422575?s=96",biography:null,userPath:"dbFY0UD9SUeKmNXhWf01ew"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Vm_Cp1sFSfaAGP3nsanoKA",title:"第八周 - 大型訂房網站",tags:["切版"," 六角直播班"],createdAt:1590571322662,titleUpdatedAt:1686818886057,tagsUpdatedAt:1686818886015,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Sk7Bbhji8",shortId:"Sk7Bbhji8",lastChangedAt:1592229748198,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"XbThc9jsQeWn8blLI6lhKg",title:"Day10 6/15",tags:["JS新手特訓班-每日"],createdAt:1592208863926,titleUpdatedAt:1686821612599,tagsUpdatedAt:1686821612576,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/r1_k0sVTU",shortId:"r1_k0sVTU",lastChangedAt:1592229707498,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"HOnnioOTSe-cFW6ZeWNZxw",title:"每日任務 Day4 ~ Day6",tags:["六角 JS直播班-每日"],createdAt:1591929488382,titleUpdatedAt:1686821198194,tagsUpdatedAt:1686821198158,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/B1OcqDxp8",shortId:"B1OcqDxp8",lastChangedAt:1592128215734,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"zeW4N0v2QL--RYa_FL3syA",title:"ES6語法",tags:["六角 JS直播班-課前預習"],createdAt:1592124309444,titleUpdatedAt:1686821466870,tagsUpdatedAt:1686821466846,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rk6qmPQpL",shortId:"rk6qmPQpL",lastChangedAt:1592126061109,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"pMn0ReE2SQaNWEDQYt297g",title:"this",tags:["六角 JS直播班-課前預習"],createdAt:1592059068038,titleUpdatedAt:1686821399859,tagsUpdatedAt:1686821399825,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H1V6EDMaI",shortId:"H1V6EDMaI",lastChangedAt:1592121855277,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"GoAcXMzNS3OcdnlZ_AdUbQ",title:"函式",tags:["六角 JS直播班-課前預習"],createdAt:1591954683613,titleUpdatedAt:1686821263922,tagsUpdatedAt:1686821263877,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BJEWTax68",shortId:"BJEWTax68",lastChangedAt:1592058132765,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"LGJ4jp82RcCQKBmUwmkeTg",title:"JS新手特訓班 - 第二周",tags:["JS新手特訓班-六月直播"],createdAt:1591956216189,titleUpdatedAt:1686821267124,tagsUpdatedAt:1686821267089,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Skl-Q0gT8",shortId:"Skl-Q0gT8",lastChangedAt:1591966848920,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"yI2bjIwbSZWAh0vuW0ct1A",title:"物件",tags:["六角 JS直播班-課前預習"],createdAt:1591931660860,titleUpdatedAt:1686821202371,tagsUpdatedAt:1686821202338,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryHMmuxTI",shortId:"ryHMmuxTI",lastChangedAt:1591950738537,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"RcZtC9nSTHK4Nivzbh4axg",title:"陳述式與表達式",tags:["六角 JS直播班-課前預習"],createdAt:1591930486600,titleUpdatedAt:1686821200419,tagsUpdatedAt:1686821200385,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryktADlpI",shortId:"ryktADlpI",lastChangedAt:1591931638734,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"7otIV48rRoqosns7WimI3Q",title:"JS新手特訓班 - Day9 6/13",tags:["JS新手特訓班-每日"],createdAt:1591927781591,titleUpdatedAt:1686821194094,tagsUpdatedAt:1686821194071,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkCk4wg68",shortId:"HkCk4wg68",lastChangedAt:1591929365379,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"ICIAFRzlTaW8q56gkyil9Q",title:"JS新手特訓班 - Day8 6/11",tags:["JS新手特訓班-每日"],createdAt:1591841611558,titleUpdatedAt:1686821025888,tagsUpdatedAt:1686821025861,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkVL7G16L",shortId:"BkVL7G16L",lastChangedAt:1591843415522,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"O0DlkYpZT7uewoLy3e_JAA",title:"番外篇 - VS Code熱鍵",tags:["切版"," 六角直播班"],createdAt:1591362410444,titleUpdatedAt:1686820316081,tagsUpdatedAt:1686820316056,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Byf_X6v2I",shortId:"Byf_X6v2I",lastChangedAt:1591770177095,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"G_3Q4QAYRmOAn1OVIuDk7w",title:"JS新手特訓班 - Day7 6/11",tags:["JS新手特訓班-每日"],createdAt:1591753181579,titleUpdatedAt:1686820856983,tagsUpdatedAt:1686820856965,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ry8kqh63L",shortId:"ry8kqh63L",lastChangedAt:1591768098963,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"wpxK72xOTFulzIljPdfeEQ",title:"每日任務 Day1 ~ Day3",tags:["六角 JS直播班-每日"," 2020/6/8~10"],createdAt:1591618187390,titleUpdatedAt:1686820622183,tagsUpdatedAt:1686820622115,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ByX9cso2U",shortId:"ByX9cso2U",lastChangedAt:1591766429649,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Rjo4yI3aRra3r_1uHB8qDA",title:"JS新手特訓班 - Day6",tags:["JS新手特訓班-每日"],createdAt:1591684219946,titleUpdatedAt:1686820733025,tagsUpdatedAt:1686820733004,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SyVt3sn3U",shortId:"SyVt3sn3U",lastChangedAt:1591753167274,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"DYvKLfF5ScGVmQo0qCKlxw",title:"JS新手特訓班 - Day5",tags:["JS新手特訓班-每日"],createdAt:1591604714875,titleUpdatedAt:1686820594870,tagsUpdatedAt:1686820594851,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/H17xIusnL",shortId:"H17xIusnL",lastChangedAt:1591668266346,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"Jgoew-ZpRZyP9MMkG5S0cQ",title:"JS新手特訓班 - Day4",tags:["JS新手特訓班-每日"],createdAt:1591502338968,titleUpdatedAt:1686820441839,tagsUpdatedAt:1686820441804,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkjW8yc3L",shortId:"rkjW8yc3L",lastChangedAt:1591668256747,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"T3TXFG5-RzSTFsBMUXqsAQ",title:"JS新手特訓班 - Day2",tags:["JS新手特訓班-每日"],createdAt:1591448132587,titleUpdatedAt:1686820400665,tagsUpdatedAt:1686820400645,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkarzzFnL",shortId:"BkarzzFnL",lastChangedAt:1591668246102,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"SxEOKN_WT-uvhtmp9v9Jmw",title:"JS新手特訓班 - Day3",tags:["JS新手特訓班-每日"],createdAt:1591446583642,titleUpdatedAt:1686820399608,tagsUpdatedAt:1686820399584,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S1lB2bt3I",shortId:"S1lB2bt3I",lastChangedAt:1591668239714,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"5QHmjlxVSbSOArLQNSAYmw",title:"JS新手特訓班 - Day1",tags:["JS新手特訓班-每日"],createdAt:1591667988419,titleUpdatedAt:1686820697173,tagsUpdatedAt:1686820697147,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rk3Mpw33I",shortId:"rk3Mpw33I",lastChangedAt:1591668227306,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"bOfDQwO2RxWpcy9OVLpGJQ",title:"JS新手特訓班 - 精選文章與工具",tags:["JavaScript"," JS新手特訓班"],createdAt:1591508685420,titleUpdatedAt:1686820447226,tagsUpdatedAt:1686820447199,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkBARxqnU",shortId:"HkBARxqnU",lastChangedAt:1591508755674,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"2Te3PVGRR-aIP1QnfRVobg",title:"切版注意事項",tags:["切版"," 六角直播班"],createdAt:1590643334618,titleUpdatedAt:1686819021971,tagsUpdatedAt:1686819021921,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Syyc5a3jU",shortId:"Syyc5a3jU",lastChangedAt:1590845954624,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"mhYXiCMLRUOB7ABIpB599Q",title:"第七周 - 視差滾動",tags:["切版"," 六角直播班"],createdAt:1590148200870,titleUpdatedAt:1686818121641,tagsUpdatedAt:1686818121589,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SkWuhVri8",shortId:"SkWuhVri8",lastChangedAt:1590757655159,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"1S1BLW0WQE2_gQvfQ4kYvQ",title:"第六周 - 電商網站",tags:["切版"," 六角直播班"],createdAt:1589534590424,titleUpdatedAt:1686816912458,tagsUpdatedAt:1686816912416,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/HkIF1khcL",shortId:"HkIF1khcL",lastChangedAt:1590674315843,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"tqHiK7gJTxm88NKdoS04Og",title:"第五周 - 後臺網站",tags:["切版"," 六角直播班"],createdAt:1588939086191,titleUpdatedAt:1686815734954,tagsUpdatedAt:1686815734928,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/Bk8LKTMqI",shortId:"Bk8LKTMqI",lastChangedAt:1590651961299,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"6TWIjM36Tgu5qB7Y3_6a6g",title:"第四周 - RWD - 多頁網站",tags:["切版"," 六角直播班"],createdAt:1588335947550,titleUpdatedAt:1686814357082,tagsUpdatedAt:1686814357050,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/S14Ir5FYI",shortId:"S14Ir5FYI",lastChangedAt:1589622154604,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"MRUCr9QRRh-ozGQQct0VVA",title:"番外篇 - gulp 任務管理",tags:["切版"," 六角直播班"],createdAt:1589104548442,titleUpdatedAt:1686815937616,tagsUpdatedAt:1686815937594,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rkhskUHcI",shortId:"rkhskUHcI",lastChangedAt:1589449676454,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"767VqXuJTySgyPaESk-FRw",title:"第三周 - RWD - 個人網站",tags:["切版"," 六角直播班"],createdAt:1587804149149,titleUpdatedAt:1686813061911,tagsUpdatedAt:1686813061881,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/rJaguu-FU",shortId:"rJaguu-FU",lastChangedAt:1589122148558,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"sA9G14XtT8GkyDVA2rKHAw",title:"第二周 - flex運用 - 個人網站",tags:["切版"," 六角直播班"],createdAt:1586833225816,titleUpdatedAt:1686810922979,tagsUpdatedAt:1686810922959,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/ryMIDiGuL",shortId:"ryMIDiGuL",lastChangedAt:1588251365535,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"f4UkonczSyGlfpQwBkNklg",title:"2F - 時鐘",tags:["JS地下城"],createdAt:1587360054547,titleUpdatedAt:1686812068951,tagsUpdatedAt:1686812068932,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/By1rZn5OI",shortId:"By1rZn5OI",lastChangedAt:1587482951350,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"signed_in"},{id:"RRYXJyzMRo6QeMeugECPYQ",title:"第一周 - line height - 個人履歷",tags:["切版"," 六角直播班"],createdAt:1586592486771,titleUpdatedAt:1686810500031,tagsUpdatedAt:1686810499944,publishType:"view",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/SJklseJuI",shortId:"SJklseJuI",lastChangedAt:1587092725248,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"guest",writePermission:"owner"},{id:"l-6L1VcoR-6DfeFswu9Xmg",title:"六角切版直播班-切版指南",tags:["切版"],createdAt:1586834348430,titleUpdatedAt:1686810926536,tagsUpdatedAt:1686810926508,publishType:"book",publishedAt:null,permalink:null,publishLink:"https://hackmd.io/@VicSun/BkNhisfuI",shortId:"BkNhisfuI",lastChangedAt:1587092476187,lastChangeUser:{name:"Vic Sun",photo:"https://lh3.googleusercontent.com/-wM48yWpbT0Q/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJMb0R7Iy7lY0w_mLI1aZXXTSyxXSg/photo.jpg",biography:null,userPath:"VicSun"},userPath:"VicSun",teamPath:null,readPermission:"owner",writePermission:"owner"}]),A=Ve([]),f=Ve(""),g=Ve(null);(async()=>{const j=p.value.filter(K=>K.tags.indexOf("六角筆記王")!==-1||K.tags.indexOf("隨手筆記")!==-1);A.value=j})();const u=Ve([]),c=Ve([]),T=Ve(!1),S=Ve(null),P=()=>{const j=new U;let K=u.value.filter(Y=>Y.querySelector("a").textContent.includes(f.value));K.length===0&&(K=u.value);const L=500,B=0;for(let Y=0;Y<K.length;Y++){const q=K[Y];q.classList.remove("hidden"),q.querySelector("a").addEventListener("mousedown",()=>{q.querySelector("a").click()}),q.addEventListener("mouseenter",()=>{l.autoRotate=!1}),q.addEventListener("mouseleave",()=>{f.value!==""?l.autoRotate=!1:l.autoRotate=!0});const R=new Jp(q),Q=new fe;if(f.value!==""){if(K.length<5)R.position.x=200*Y,R.position.y=0,R.position.z=0;else{const At=(Y-B)*(Math.PI/10),St=L*Math.cos(At),k=L*Math.sin(At);R.position.x=St,R.position.y=k,R.position.z=0}c.value.push(R),l.autoRotate=!1,e.position.x=0,e.position.y=0}else{const At=Math.acos(-1+2*Y/A.value.length),St=Math.sqrt(A.value.length*Math.PI)*At;Q.position.setFromSphericalCoords(600,At,St),j.copy(Q.position).multiplyScalar(2),R.position.x=Q.position.x,R.position.y=Q.position.y,R.position.z=Q.position.z,c.value.push(R),R.lookAt(j),l.autoRotate=!0}t.add(R);var F=new qs({transparent:!0,opacity:0});const ut=R.element.clientWidth,dt=R.element.clientHeight;var et=new Ki(ut,dt),J=new Ze(et,F);J.position.x=R.position.x,J.position.y=R.position.y,J.position.z=R.position.z,J.userData.uuid=R.uuid,J.rotation.z=Math.PI,t.add(J)}},M=new Xp,I=new Mt,w=j=>{const K=a.domElement.getBoundingClientRect();I.x=(j.clientX-K.left)/K.width*2-1,I.y=-(j.clientY-K.top)/K.height*2+1,M.setFromCamera(I,e);let L=M.intersectObjects(t.children);L.length>0&&(T.value=!0,S.value=L[0].object)};function G(j){if(T.value){const K=a.domElement.getBoundingClientRect();I.x=(j.clientX-K.left)/K.width*2-1,I.y=-(j.clientY-K.top)/K.height*2+1,M.setFromCamera(I,e);let L=M.intersectObjects(t.children,!0);if(L.length>0){const F=new U().copy(L[0].point);f.value!==""&&S.value.position.copy(F)}t.children.filter(F=>F.uuid===S.value.userData.uuid)[0].position.copy(S.value.position)}}function y(){T.value=!1,S.value=null}const x=()=>{A.value.forEach((j,K)=>{const L=document.getElementById(`${A.value[K].id}`);u.value.push(L)})};return po(()=>{g.value.focus(),n.value.appendChild(a.domElement),s.value.appendChild(o.domElement),document.addEventListener("mousedown",w,!1),document.addEventListener("mousemove",G,!1),document.addEventListener("mouseup",y,!1),setTimeout(()=>{x(),P(),d()},1e3)}),Ao(()=>f.value,()=>{for(o.domElement=null;t.children.length>0;){var j=t.children[0];t.remove(j)}setTimeout(()=>{P()},1e3)}),(j,K)=>(sn(),fn(ns,null,[Je("div",Qp,[fo(Je("input",{ref_key:"searchInput",ref:g,type:"text","onUpdate:modelValue":K[0]||(K[0]=L=>f.value=L),class:"bg-transparent rounded-xl text-[32px] placeholder-gray-200 outline-none",placeholder:"請輸入欲搜尋的標題"},null,512),[[mo,f.value]])]),Je("div",Kp,[Je("div",{ref_key:"threejsRef",ref:n},null,512),Je("div",{ref_key:"css3DRef",ref:s,class:"absolute inset-0"},null,512)]),A.value.length>0?(sn(),fn("div",Zp,[(sn(!0),fn(ns,null,ra(A.value,L=>(sn(),fn("div",{key:L.id,id:L.id,class:"relative w-36 h-[200px] p-1 z-10 hidden"},[Je("ul",$p,[(sn(!0),fn(ns,null,ra(L.tags,(B,F)=>(sn(),fn("li",{key:B,class:"mb-1 leading-none"},[F===0?(sn(),fn("p",tA,is(B),1)):oa("",!0)]))),128))]),Je("a",{href:L.publishLink,target:"_blank",class:"text-gray-300 hover:text-white pl-1"},is(L.title),9,eA),nA,Je("p",iA,is(L.userPath),1)],8,qp))),128))])):oa("",!0)],64))}},rA={__name:"HomeView",setup(i){return(t,e)=>(sn(),go(sA))}};export{rA as default};
