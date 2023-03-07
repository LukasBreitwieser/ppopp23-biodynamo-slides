function Dn(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function st(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Ke(s)?Iu(s):st(s);if(i)for(const o in i)t[o]=i[o]}return t}else{if(Ke(e))return e;if(Be(e))return e}}const xu=/;(?![^(]*\))/g,Cu=/:([^]+)/,$u=/\/\*.*?\*\//gs;function Iu(e){const t={};return e.replace($u,"").split(xu).forEach(n=>{if(n){const s=n.split(Cu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ze(e){let t="";if(Ke(e))t=e;else if(ue(e))for(let n=0;n<e.length;n++){const s=ze(e[n]);s&&(t+=s+" ")}else if(Be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ae(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ke(t)&&(e.class=ze(t)),n&&(e.style=st(n)),e}const Mu="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Au="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Su=Dn(Mu),Lu=Dn(Au),Bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eu=Dn(Bu);function Wr(e){return!!e||e===""}const Mn=e=>Ke(e)?e:e==null?"":ue(e)||Be(e)&&(e.toString===Zr||!fe(e.toString))?JSON.stringify(e,qr,2):String(e),qr=(e,t)=>t&&t.__v_isRef?qr(e,t.value):jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Yr(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!ue(t)&&!Jr(t)?String(t):t,Oe=Object.freeze({}),gs=Object.freeze([]),ht=()=>{},Gr=()=>!1,Du=/^on[^a-z]/,ri=e=>Du.test(e),Oi=e=>e.startsWith("onUpdate:"),Ue=Object.assign,ga=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Tu=Object.prototype.hasOwnProperty,Ce=(e,t)=>Tu.call(e,t),ue=Array.isArray,jn=e=>ci(e)==="[object Map]",Yr=e=>ci(e)==="[object Set]",Pu=e=>ci(e)==="[object RegExp]",fe=e=>typeof e=="function",Ke=e=>typeof e=="string",fa=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",va=e=>Be(e)&&fe(e.then)&&fe(e.catch),Zr=Object.prototype.toString,ci=e=>Zr.call(e),ya=e=>ci(e).slice(8,-1),Jr=e=>ci(e)==="[object Object]",_a=e=>Ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ai=Dn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ou=Dn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),eo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fu=/-(\w)/g,Wt=eo(e=>e.replace(Fu,(t,n)=>n?n.toUpperCase():"")),Nu=/\B([A-Z])/g,an=eo(e=>e.replace(Nu,"-$1").toLowerCase()),Qn=eo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fn=eo(e=>e?`on${Qn(e)}`:""),Ys=(e,t)=>!Object.is(e,t),yn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ku=e=>{const t=Ke(e)?Number(e):NaN;return isNaN(t)?e:t};let rl;const Qr=()=>rl||(rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let wt;class Xr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!t&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=wt;try{return wt=this,t()}finally{wt=n}}else Ni("cannot run an inactive effect scope.")}on(){wt=this}off(){wt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function m5(e){return new Xr(e)}function Ru(e,t=wt){t&&t.active&&t.effects.push(e)}function ec(){return wt}function zu(e){wt?wt.cleanups.push(e):Ni("onScopeDispose() is called when there is no active effect scope to be associated with.")}const wa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},tc=e=>(e.w&An)>0,nc=e=>(e.n&An)>0,Uu=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=An},ju=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];tc(i)&&!nc(i)?i.delete(e):t[n++]=i,i.w&=~An,i.n&=~An}t.length=n}},Ki=new WeakMap;let Ks=0,An=1;const Oo=30;let dt;const Hn=Symbol("iterate"),Fo=Symbol("Map key iterate");class ba{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ru(this,s)}run(){if(!this.active)return this.fn();let t=dt,n=kn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=dt,dt=this,kn=!0,An=1<<++Ks,Ks<=Oo?Uu(this):cl(this),this.fn()}finally{Ks<=Oo&&ju(this),An=1<<--Ks,dt=this.parent,kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(cl(this),this.onStop&&this.onStop(),this.active=!1)}}function cl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kn=!0;const sc=[];function ts(){sc.push(kn),kn=!1}function ns(){const e=sc.pop();kn=e===void 0?!0:e}function gt(e,t,n){if(kn&&dt){let s=Ki.get(e);s||Ki.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=wa()),ic(i,{effect:dt,target:e,type:t,key:n})}}function ic(e,t){let n=!1;Ks<=Oo?nc(e)||(e.n|=An,n=!tc(e)):n=!e.has(dt),n&&(e.add(dt),dt.deps.push(e),dt.onTrack&&dt.onTrack(Object.assign({effect:dt},t)))}function ln(e,t,n,s,i,o){const l=Ki.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&ue(e)){const d=Number(s);l.forEach((u,p)=>{(p==="length"||p>=d)&&r.push(u)})}else switch(n!==void 0&&r.push(l.get(n)),t){case"add":ue(e)?_a(n)&&r.push(l.get("length")):(r.push(l.get(Hn)),jn(e)&&r.push(l.get(Fo)));break;case"delete":ue(e)||(r.push(l.get(Hn)),jn(e)&&r.push(l.get(Fo)));break;case"set":jn(e)&&r.push(l.get(Hn));break}const c={target:e,type:t,key:n,newValue:s,oldValue:i,oldTarget:o};if(r.length===1)r[0]&&No(r[0],c);else{const d=[];for(const u of r)u&&d.push(...u);No(wa(d),c)}}function No(e,t){const n=ue(e)?e:[...e];for(const s of n)s.computed&&dl(s,t);for(const s of n)s.computed||dl(s,t)}function dl(e,t){(e!==dt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ue({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Hu(e,t){var n;return(n=Ki.get(e))===null||n===void 0?void 0:n.get(t)}const Vu=Dn("__proto__,__v_isRef,__isVue"),oc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fa)),Wu=to(),qu=to(!1,!0),Gu=to(!0),Yu=to(!0,!0),ul=Zu();function Zu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ye(this);for(let o=0,l=this.length;o<l;o++)gt(s,"get",o+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(ye)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ts();const s=ye(this)[t].apply(this,n);return ns(),s}}),e}function Ju(e){const t=ye(this);return gt(t,"has",e),t.hasOwnProperty(e)}function to(e=!1,t=!1){return function(s,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?mc:pc:t?uc:dc).get(s))return s;const l=ue(s);if(!e){if(l&&Ce(ul,i))return Reflect.get(ul,i,o);if(i==="hasOwnProperty")return Ju}const r=Reflect.get(s,i,o);return(fa(i)?oc.has(i):Vu(i))||(e||gt(s,"get",i),t)?r:Ae(r)?l&&_a(i)?r:r.value:Be(r)?e?bn(r):et(r):r}}const Qu=ac(),Xu=ac(!0);function ac(e=!1){return function(n,s,i,o){let l=n[s];if(Sn(l)&&Ae(l)&&!Ae(i))return!1;if(!e&&(!Ri(i)&&!Sn(i)&&(l=ye(l),i=ye(i)),!ue(n)&&Ae(l)&&!Ae(i)))return l.value=i,!0;const r=ue(n)&&_a(s)?Number(s)<n.length:Ce(n,s),c=Reflect.set(n,s,i,o);return n===ye(o)&&(r?Ys(i,l)&&ln(n,"set",s,i,l):ln(n,"add",s,i)),c}}function ep(e,t){const n=Ce(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ln(e,"delete",t,void 0,s),i}function tp(e,t){const n=Reflect.has(e,t);return(!fa(t)||!oc.has(t))&&gt(e,"has",t),n}function np(e){return gt(e,"iterate",ue(e)?"length":Hn),Reflect.ownKeys(e)}const lc={get:Wu,set:Qu,deleteProperty:ep,has:tp,ownKeys:np},rc={get:Gu,set(e,t){return Ni(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ni(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},sp=Ue({},lc,{get:qu,set:Xu}),ip=Ue({},rc,{get:Yu}),ka=e=>e,no=e=>Reflect.getPrototypeOf(e);function _i(e,t,n=!1,s=!1){e=e.__v_raw;const i=ye(e),o=ye(t);n||(t!==o&&gt(i,"get",t),gt(i,"get",o));const{has:l}=no(i),r=s?ka:n?Ca:Zs;if(l.call(i,t))return r(e.get(t));if(l.call(i,o))return r(e.get(o));e!==i&&e.get(t)}function wi(e,t=!1){const n=this.__v_raw,s=ye(n),i=ye(e);return t||(e!==i&&gt(s,"has",e),gt(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function bi(e,t=!1){return e=e.__v_raw,!t&&gt(ye(e),"iterate",Hn),Reflect.get(e,"size",e)}function pl(e){e=ye(e);const t=ye(this);return no(t).has.call(t,e)||(t.add(e),ln(t,"add",e,e)),this}function ml(e,t){t=ye(t);const n=ye(this),{has:s,get:i}=no(n);let o=s.call(n,e);o?cc(n,s,e):(e=ye(e),o=s.call(n,e));const l=i.call(n,e);return n.set(e,t),o?Ys(t,l)&&ln(n,"set",e,t,l):ln(n,"add",e,t),this}function hl(e){const t=ye(this),{has:n,get:s}=no(t);let i=n.call(t,e);i?cc(t,n,e):(e=ye(e),i=n.call(t,e));const o=s?s.call(t,e):void 0,l=t.delete(e);return i&&ln(t,"delete",e,void 0,o),l}function gl(){const e=ye(this),t=e.size!==0,n=jn(e)?new Map(e):new Set(e),s=e.clear();return t&&ln(e,"clear",void 0,void 0,n),s}function ki(e,t){return function(s,i){const o=this,l=o.__v_raw,r=ye(l),c=t?ka:e?Ca:Zs;return!e&&gt(r,"iterate",Hn),l.forEach((d,u)=>s.call(i,c(d),c(u),o))}}function xi(e,t,n){return function(...s){const i=this.__v_raw,o=ye(i),l=jn(o),r=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=i[e](...s),u=n?ka:t?Ca:Zs;return!t&&gt(o,"iterate",c?Fo:Hn),{next(){const{value:p,done:h}=d.next();return h?{value:p,done:h}:{value:r?[u(p[0]),u(p[1])]:u(p),done:h}},[Symbol.iterator](){return this}}}}function un(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Qn(e)} operation ${n}failed: target is readonly.`,ye(this))}return e==="delete"?!1:this}}function op(){const e={get(o){return _i(this,o)},get size(){return bi(this)},has:wi,add:pl,set:ml,delete:hl,clear:gl,forEach:ki(!1,!1)},t={get(o){return _i(this,o,!1,!0)},get size(){return bi(this)},has:wi,add:pl,set:ml,delete:hl,clear:gl,forEach:ki(!1,!0)},n={get(o){return _i(this,o,!0)},get size(){return bi(this,!0)},has(o){return wi.call(this,o,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:ki(!0,!1)},s={get(o){return _i(this,o,!0,!0)},get size(){return bi(this,!0)},has(o){return wi.call(this,o,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=xi(o,!1,!1),n[o]=xi(o,!0,!1),t[o]=xi(o,!1,!0),s[o]=xi(o,!0,!0)}),[e,n,t,s]}const[ap,lp,rp,cp]=op();function so(e,t){const n=t?e?cp:rp:e?lp:ap;return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Ce(n,i)&&i in s?n:s,i,o)}const dp={get:so(!1,!1)},up={get:so(!1,!0)},pp={get:so(!0,!1)},mp={get:so(!0,!0)};function cc(e,t,n){const s=ye(n);if(s!==n&&t.call(e,s)){const i=ya(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const dc=new WeakMap,uc=new WeakMap,pc=new WeakMap,mc=new WeakMap;function hp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gp(e){return e.__v_skip||!Object.isExtensible(e)?0:hp(ya(e))}function et(e){return Sn(e)?e:io(e,!1,lc,dp,dc)}function fp(e){return io(e,!1,sp,up,uc)}function bn(e){return io(e,!0,rc,pp,pc)}function ms(e){return io(e,!0,ip,mp,mc)}function io(e,t,n,s,i){if(!Be(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const l=gp(e);if(l===0)return e;const r=new Proxy(e,l===2?s:n);return i.set(e,r),r}function Vn(e){return Sn(e)?Vn(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function Ri(e){return!!(e&&e.__v_isShallow)}function zi(e){return Vn(e)||Sn(e)}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function xa(e){return Fi(e,"__v_skip",!0),e}const Zs=e=>Be(e)?et(e):e,Ca=e=>Be(e)?bn(e):e;function $a(e){kn&&dt&&(e=ye(e),ic(e.dep||(e.dep=wa()),{target:e,type:"get",key:"value"}))}function Ia(e,t){e=ye(e);const n=e.dep;n&&No(n,{target:e,type:"set",key:"value",newValue:t})}function Ae(e){return!!(e&&e.__v_isRef===!0)}function _e(e){return hc(e,!1)}function qt(e){return hc(e,!0)}function hc(e,t){return Ae(e)?e:new vp(e,t)}class vp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ye(t),this._value=n?t:Zs(t)}get value(){return $a(this),this._value}set value(t){const n=this.__v_isShallow||Ri(t)||Sn(t);t=n?t:ye(t),Ys(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Zs(t),Ia(this,t))}}function g(e){return Ae(e)?e.value:e}const yp={get:(e,t,n)=>g(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function gc(e){return Vn(e)?e:new Proxy(e,yp)}class _p{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>$a(this),()=>Ia(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function fc(e){return new _p(e)}function wp(e){zi(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(e)?new Array(e.length):{};for(const n in e)t[n]=kp(e,n);return t}class bp{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Hu(ye(this._object),this._key)}}function kp(e,t,n){const s=e[t];return Ae(s)?s:new bp(e,t,n)}var vc;class xp{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[vc]=!1,this._dirty=!0,this.effect=new ba(t,()=>{this._dirty||(this._dirty=!0,Ia(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ye(this);return $a(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}vc="__v_isReadonly";function Cp(e,t,n=!1){let s,i;const o=fe(e);o?(s=e,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,i=e.set);const l=new xp(s,i,o||!i,n);return t&&!n&&(l.effect.onTrack=t.onTrack,l.effect.onTrigger=t.onTrigger),l}const Wn=[];function Si(e){Wn.push(e)}function Li(){Wn.pop()}function F(e,...t){ts();const n=Wn.length?Wn[Wn.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=$p();if(s)on(s,n,11,[e+t.join(""),n&&n.proxy,i.map(({vnode:o})=>`at <${ho(n,o.type)}>`).join(`
`),i]);else{const o=[`[Vue warn]: ${e}`,...t];i.length&&o.push(`
`,...Ip(i)),console.warn(...o)}ns()}function $p(){let e=Wn[Wn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function Ip(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Mp(n))}),t}function Mp({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,i=` at <${ho(e.component,e.type,s)}`,o=">"+n;return e.props?[i,...Ap(e.props),o]:[i+o]}function Ap(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...yc(s,e[s]))}),n.length>3&&t.push(" ..."),t}function yc(e,t,n){return Ke(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ae(t)?(t=yc(e,ye(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):fe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=ye(t),n?t:[`${e}=`,t])}function Sp(e,t){e!==void 0&&(typeof e!="number"?F(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&F(`${t} is NaN - the duration expression might be incorrect.`))}const Ma={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function on(e,t,n,s){let i;try{i=s?e(...s):e()}catch(o){oo(o,t,n)}return i}function St(e,t,n,s){if(fe(e)){const o=on(e,t,n,s);return o&&va(o)&&o.catch(l=>{oo(l,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(St(e[o],t,n,s));return i}function oo(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const l=t.proxy,r=Ma[n];for(;o;){const d=o.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,r)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){on(c,null,10,[e,l,r]);return}}Lp(e,n,i,s)}function Lp(e,t,n,s=!0){{const i=Ma[t];if(n&&Si(n),F(`Unhandled error${i?` during execution of ${i}`:""}`),n&&Li(),s)throw e;console.error(e)}}let Js=!1,Ko=!1;const nt=[];let Ut=0;const fs=[];let zt=null,gn=0;const _c=Promise.resolve();let Aa=null;const Bp=100;function Ft(e){const t=Aa||_c;return e?t.then(this?e.bind(this):e):t}function Ep(e){let t=Ut+1,n=nt.length;for(;t<n;){const s=t+n>>>1;Qs(nt[s])<e?t=s+1:n=s}return t}function ao(e){(!nt.length||!nt.includes(e,Js&&e.allowRecurse?Ut+1:Ut))&&(e.id==null?nt.push(e):nt.splice(Ep(e.id),0,e),wc())}function wc(){!Js&&!Ko&&(Ko=!0,Aa=_c.then(xc))}function Dp(e){const t=nt.indexOf(e);t>Ut&&nt.splice(t,1)}function bc(e){ue(e)?fs.push(...e):(!zt||!zt.includes(e,e.allowRecurse?gn+1:gn))&&fs.push(e),wc()}function fl(e,t=Js?Ut+1:0){for(e=e||new Map;t<nt.length;t++){const n=nt[t];if(n&&n.pre){if(Sa(e,n))continue;nt.splice(t,1),t--,n()}}}function kc(e){if(fs.length){const t=[...new Set(fs)];if(fs.length=0,zt){zt.push(...t);return}for(zt=t,e=e||new Map,zt.sort((n,s)=>Qs(n)-Qs(s)),gn=0;gn<zt.length;gn++)Sa(e,zt[gn])||zt[gn]();zt=null,gn=0}}const Qs=e=>e.id==null?1/0:e.id,Tp=(e,t)=>{const n=Qs(e)-Qs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xc(e){Ko=!1,Js=!0,e=e||new Map,nt.sort(Tp);const t=n=>Sa(e,n);try{for(Ut=0;Ut<nt.length;Ut++){const n=nt[Ut];if(n&&n.active!==!1){if(t(n))continue;on(n,null,14)}}}finally{Ut=0,nt.length=0,kc(e),Js=!1,Aa=null,(nt.length||fs.length)&&xc(e)}}function Sa(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Bp){const s=t.ownerInstance,i=s&&ni(s.type);return F(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let xn=!1;const ds=new Set;Qr().__VUE_HMR_RUNTIME__={createRecord:vo(Cc),rerender:vo(Fp),reload:vo(Np)};const Xn=new Map;function Pp(e){const t=e.type.__hmrId;let n=Xn.get(t);n||(Cc(t,e.type),n=Xn.get(t)),n.instances.add(e)}function Op(e){Xn.get(e.type.__hmrId).instances.delete(e)}function Cc(e,t){return Xn.has(e)?!1:(Xn.set(e,{initialDef:Us(t),instances:new Set}),!0)}function Us(e){return id(e)?e.__vccOpts:e}function Fp(e,t){const n=Xn.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,Us(s.type).render=t),s.renderCache=[],xn=!0,s.update(),xn=!1}))}function Np(e,t){const n=Xn.get(e);if(!n)return;t=Us(t),vl(n.initialDef,t);const s=[...n.instances];for(const i of s){const o=Us(i.type);ds.has(o)||(o!==n.initialDef&&vl(o,t),ds.add(o)),i.appContext.optionsCache.delete(i.type),i.ceReload?(ds.add(o),i.ceReload(t.styles),ds.delete(o)):i.parent?ao(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}bc(()=>{for(const i of s)ds.delete(Us(i.type))})}function vl(e,t){Ue(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function vo(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let jt,Rs=[],Ro=!1;function di(e,...t){jt?jt.emit(e,...t):Ro||Rs.push({event:e,args:t})}function $c(e,t){var n,s;jt=e,jt?(jt.enabled=!0,Rs.forEach(({event:i,args:o})=>jt.emit(i,...o)),Rs=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{$c(o,t)}),setTimeout(()=>{jt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ro=!0,Rs=[])},3e3)):(Ro=!0,Rs=[])}function Kp(e,t){di("app:init",e,t,{Fragment:Le,Text:hi,Comment:Qe,Static:Bi})}function Rp(e){di("app:unmount",e)}const zo=La("component:added"),Ic=La("component:updated"),zp=La("component:removed"),Up=e=>{jt&&typeof jt.cleanupBuffer=="function"&&!jt.cleanupBuffer(e)&&zp(e)};function La(e){return t=>{di(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const jp=Mc("perf:start"),Hp=Mc("perf:end");function Mc(e){return(t,n,s)=>{di(e,t.appContext.app,t.uid,t,n,s)}}function Vp(e,t,n){di("component:emit",e.appContext.app,e,t,n)}function Wp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Oe;{const{emitsOptions:u,propsOptions:[p]}=e;if(u)if(!(t in u))(!p||!(Fn(t)in p))&&F(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Fn(t)}" prop.`);else{const h=u[t];fe(h)&&(h(...n)||F(`Invalid event arguments: event validation failed for event "${t}".`))}}let i=n;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in s){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:p,trim:h}=s[u]||Oe;h&&(i=n.map(v=>Ke(v)?v.trim():v)),p&&(i=n.map(Po))}Vp(e,t,i);{const u=t.toLowerCase();u!==t&&s[Fn(u)]&&F(`Event "${u}" is emitted in component ${ho(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${an(t)}" instead of "${t}".`)}let r,c=s[r=Fn(t)]||s[r=Fn(Wt(t))];!c&&o&&(c=s[r=Fn(an(t))]),c&&St(c,e,6,i);const d=s[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,St(d,e,6,i)}}function Ac(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let l={},r=!1;if(!fe(e)){const c=d=>{const u=Ac(d,t,!0);u&&(r=!0,Ue(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!r?(Be(e)&&s.set(e,null),null):(ue(o)?o.forEach(c=>l[c]=null):Ue(l,o),Be(e)&&s.set(e,l),l)}function lo(e,t){return!e||!ri(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ce(e,t[0].toLowerCase()+t.slice(1))||Ce(e,an(t))||Ce(e,t))}let Ye=null,ro=null;function Ui(e){const t=Ye;return Ye=e,ro=e&&e.type.__scopeId||null,t}function Sc(e){ro=e}function Lc(){ro=null}function _(e,t=Ye,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Bl(-1);const o=Ui(t);let l;try{l=e(...i)}finally{Ui(o),s._d&&Bl(1)}return Ic(t),l};return s._n=!0,s._c=!0,s._d=!0,s}let Uo=!1;function ji(){Uo=!0}function yo(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[l],slots:r,attrs:c,emit:d,render:u,renderCache:p,data:h,setupState:v,ctx:y,inheritAttrs:b}=e;let $,L;const A=Ui(e);Uo=!1;try{if(n.shapeFlag&4){const q=i||s;$=Tt(u.call(q,q,p,o,v,h,y)),L=c}else{const q=t;c===o&&ji(),$=Tt(q.length>1?q(o,{get attrs(){return ji(),c},slots:r,emit:d}):q(o,null)),L=t.props?c:Gp(c)}}catch(q){Hs.length=0,oo(q,e,1),$=m(Qe)}let B=$,E;if($.patchFlag>0&&$.patchFlag&2048&&([B,E]=qp($)),L&&b!==!1){const q=Object.keys(L),{shapeFlag:G}=B;if(q.length){if(G&7)l&&q.some(Oi)&&(L=Yp(L,l)),B=Nt(B,L);else if(!Uo&&B.type!==Qe){const V=Object.keys(c),j=[],se=[];for(let re=0,ge=V.length;re<ge;re++){const X=V[re];ri(X)?Oi(X)||j.push(X[2].toLowerCase()+X.slice(3)):se.push(X)}se.length&&F(`Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),j.length&&F(`Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(yl(B)||F("Runtime directive used on component with non-element root node. The directives will not function as intended."),B=Nt(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(yl(B)||F("Component inside <Transition> renders non-element root node that cannot be animated."),B.transition=n.transition),E?E(B):$=B,Ui(A),$}const qp=e=>{const t=e.children,n=e.dynamicChildren,s=Bc(t);if(!s)return[e,void 0];const i=t.indexOf(s),o=n?n.indexOf(s):-1,l=r=>{t[i]=r,n&&(o>-1?n[o]=r:r.patchFlag>0&&(e.dynamicChildren=[...n,r]))};return[Tt(s),l]};function Bc(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Ln(s)){if(s.type!==Qe||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Gp=e=>{let t;for(const n in e)(n==="class"||n==="style"||ri(n))&&((t||(t={}))[n]=e[n]);return t},Yp=(e,t)=>{const n={};for(const s in e)(!Oi(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},yl=e=>e.shapeFlag&7||e.type===Qe;function Zp(e,t,n){const{props:s,children:i,component:o}=e,{props:l,children:r,patchFlag:c}=t,d=o.emitsOptions;if((i||r)&&xn||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?_l(s,l,d):!!l;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const h=u[p];if(l[h]!==s[h]&&!lo(d,h))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:s===l?!1:s?l?_l(s,l,d):!0:!!l;return!1}function _l(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!lo(n,o))return!0}return!1}function Jp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ec=e=>e.__isSuspense;function Qp(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):bc(e)}function bt(e,t){if(!je)F("provide() can only be used inside setup().");else{let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[e]=t}}function O(e,t,n=!1){const s=je||Ye;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&fe(t)?t.call(s.proxy):t;F(`injection "${String(e)}" not found.`)}else F("inject() can only be used inside setup() or functional components.")}function $s(e,t){return Ba(e,null,t)}const Ci={};function Ve(e,t,n){return fe(t)||F("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ba(e,t,n)}function Ba(e,t,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:l}=Oe){t||(n!==void 0&&F('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&F('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const r=E=>{F("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=ec()===(je==null?void 0:je.scope)?je:null;let d,u=!1,p=!1;if(Ae(e)?(d=()=>e.value,u=Ri(e)):Vn(e)?(d=()=>e,s=!0):ue(e)?(p=!0,u=e.some(E=>Vn(E)||Ri(E)),d=()=>e.map(E=>{if(Ae(E))return E.value;if(Vn(E))return zn(E);if(fe(E))return on(E,c,2);r(E)})):fe(e)?t?d=()=>on(e,c,2):d=()=>{if(!(c&&c.isUnmounted))return h&&h(),St(e,c,3,[v])}:(d=ht,r(e)),t&&s){const E=d;d=()=>zn(E())}let h,v=E=>{h=A.onStop=()=>{on(E,c,4)}},y;if(ti)if(v=ht,t?n&&St(t,c,3,[d(),p?[]:void 0,v]):d(),i==="sync"){const E=ih();y=E.__watcherHandles||(E.__watcherHandles=[])}else return ht;let b=p?new Array(e.length).fill(Ci):Ci;const $=()=>{if(A.active)if(t){const E=A.run();(s||u||(p?E.some((q,G)=>Ys(q,b[G])):Ys(E,b)))&&(h&&h(),St(t,c,3,[E,b===Ci?void 0:p&&b[0]===Ci?[]:b,v]),b=E)}else A.run()};$.allowRecurse=!!t;let L;i==="sync"?L=$:i==="post"?L=()=>Xe($,c&&c.suspense):($.pre=!0,c&&($.id=c.uid),L=()=>ao($));const A=new ba(d,L);A.onTrack=o,A.onTrigger=l,t?n?$():b=A.run():i==="post"?Xe(A.run.bind(A),c&&c.suspense):A.run();const B=()=>{A.stop(),c&&c.scope&&ga(c.scope.effects,A)};return y&&y.push(B),B}function Xp(e,t,n){const s=this.proxy,i=Ke(e)?e.includes(".")?Dc(s,e):()=>s[e]:e.bind(s,s);let o;fe(t)?o=t:(o=t.handler,n=t);const l=je;bs(this);const r=Ba(i,o.bind(s),n);return l?bs(l):Gn(),r}function Dc(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function zn(e,t){if(!Be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))zn(e.value,t);else if(ue(e))for(let n=0;n<e.length;n++)zn(e[n],t);else if(Yr(e)||jn(e))e.forEach(n=>{zn(n,t)});else if(Jr(e))for(const n in e)zn(e[n],t);return e}function Tc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pi(()=>{e.isMounted=!0}),Ta(()=>{e.isUnmounting=!0}),e}const $t=[Function,Array],em={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(e,{slots:t}){const n=Yt(),s=Tc();let i;return()=>{const o=t.default&&Ea(t.default(),!0);if(!o||!o.length)return;let l=o[0];if(o.length>1){let b=!1;for(const $ of o)if($.type!==Qe){if(b){F("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}l=$,b=!0}}const r=ye(e),{mode:c}=r;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&F(`invalid <transition> mode: ${c}`),s.isLeaving)return _o(l);const d=wl(l);if(!d)return _o(l);const u=Xs(d,r,s,n);ws(d,u);const p=n.subTree,h=p&&wl(p);let v=!1;const{getTransitionKey:y}=d.type;if(y){const b=y();i===void 0?i=b:b!==i&&(i=b,v=!0)}if(h&&h.type!==Qe&&(!wn(d,h)||v)){const b=Xs(h,r,s,n);if(ws(h,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},_o(l);c==="in-out"&&d.type!==Qe&&(b.delayLeave=($,L,A)=>{const B=Oc(s,h);B[String(h.key)]=h,$._leaveCb=()=>{L(),$._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return l}}},Pc=em;function Oc(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Xs(e,t,n,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:h,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:b,onAppear:$,onAfterAppear:L,onAppearCancelled:A}=t,B=String(e.key),E=Oc(n,e),q=(j,se)=>{j&&St(j,s,9,se)},G=(j,se)=>{const re=se[1];q(j,se),ue(j)?j.every(ge=>ge.length<=1)&&re():j.length<=1&&re()},V={mode:o,persisted:l,beforeEnter(j){let se=r;if(!n.isMounted)if(i)se=b||r;else return;j._leaveCb&&j._leaveCb(!0);const re=E[B];re&&wn(e,re)&&re.el._leaveCb&&re.el._leaveCb(),q(se,[j])},enter(j){let se=c,re=d,ge=u;if(!n.isMounted)if(i)se=$||c,re=L||d,ge=A||u;else return;let X=!1;const me=j._enterCb=Re=>{X||(X=!0,Re?q(ge,[j]):q(re,[j]),V.delayedLeave&&V.delayedLeave(),j._enterCb=void 0)};se?G(se,[j,me]):me()},leave(j,se){const re=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return se();q(p,[j]);let ge=!1;const X=j._leaveCb=me=>{ge||(ge=!0,se(),me?q(y,[j]):q(v,[j]),j._leaveCb=void 0,E[re]===e&&delete E[re])};E[re]=e,h?G(h,[j,X]):X()},clone(j){return Xs(j,t,n,s)}};return V}function _o(e){if(ui(e))return e=Nt(e),e.children=null,e}function wl(e){return ui(e)?e.children?e.children[0]:void 0:e}function ws(e,t){e.shapeFlag&6&&e.component?ws(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ea(e,t=!1,n){let s=[],i=0;for(let o=0;o<e.length;o++){let l=e[o];const r=n==null?l.key:String(n)+String(l.key!=null?l.key:o);l.type===Le?(l.patchFlag&128&&i++,s=s.concat(Ea(l.children,t,r))):(t||l.type!==Qe)&&s.push(r!=null?Nt(l,{key:r}):l)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function De(e){return fe(e)?{setup:e,name:e.name}:e}const vs=e=>!!e.type.__asyncLoader,ui=e=>e.type.__isKeepAlive,tm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Yt(),s=n.ctx;if(!s.renderer)return()=>{const A=t.default&&t.default();return A&&A.length===1?A[0]:A};const i=new Map,o=new Set;let l=null;n.__v_cache=i;const r=n.suspense,{renderer:{p:c,m:d,um:u,o:{createElement:p}}}=s,h=p("div");s.activate=(A,B,E,q,G)=>{const V=A.component;d(A,B,E,0,r),c(V.vnode,A,B,E,V,r,q,A.slotScopeIds,G),Xe(()=>{V.isDeactivated=!1,V.a&&yn(V.a);const j=A.props&&A.props.onVnodeMounted;j&&It(j,V.parent,A)},r),zo(V)},s.deactivate=A=>{const B=A.component;d(A,h,null,1,r),Xe(()=>{B.da&&yn(B.da);const E=A.props&&A.props.onVnodeUnmounted;E&&It(E,B.parent,A),B.isDeactivated=!0},r),zo(B)};function v(A){wo(A),u(A,n,r,!0)}function y(A){i.forEach((B,E)=>{const q=ni(B.type);q&&(!A||!A(q))&&b(E)})}function b(A){const B=i.get(A);!l||!wn(B,l)?v(B):l&&wo(l),i.delete(A),o.delete(A)}Ve(()=>[e.include,e.exclude],([A,B])=>{A&&y(E=>zs(A,E)),B&&y(E=>!zs(B,E))},{flush:"post",deep:!0});let $=null;const L=()=>{$!=null&&i.set($,bo(n.subTree))};return pi(L),Da(L),Ta(()=>{i.forEach(A=>{const{subTree:B,suspense:E}=n,q=bo(B);if(A.type===q.type&&A.key===q.key){wo(q);const G=q.component.da;G&&Xe(G,E);return}v(A)})}),()=>{if($=null,!t.default)return null;const A=t.default(),B=A[0];if(A.length>1)return F("KeepAlive should contain exactly one component child."),l=null,A;if(!Ln(B)||!(B.shapeFlag&4)&&!(B.shapeFlag&128))return l=null,B;let E=bo(B);const q=E.type,G=ni(vs(E)?E.type.__asyncResolved||{}:q),{include:V,exclude:j,max:se}=e;if(V&&(!G||!zs(V,G))||j&&G&&zs(j,G))return l=E,B;const re=E.key==null?q:E.key,ge=i.get(re);return E.el&&(E=Nt(E),B.shapeFlag&128&&(B.ssContent=E)),$=re,ge?(E.el=ge.el,E.component=ge.component,E.transition&&ws(E,E.transition),E.shapeFlag|=512,o.delete(re),o.add(re)):(o.add(re),se&&o.size>parseInt(se,10)&&b(o.values().next().value)),E.shapeFlag|=256,l=E,Ec(B.type)?B:E}}},Fc=tm;function zs(e,t){return ue(e)?e.some(n=>zs(n,t)):Ke(e)?e.split(",").includes(t):Pu(e)?e.test(t):!1}function nm(e,t){Nc(e,"a",t)}function sm(e,t){Nc(e,"da",t)}function Nc(e,t,n=je){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(co(t,s,n),n){let i=n.parent;for(;i&&i.parent;)ui(i.parent.vnode)&&im(s,t,n,i),i=i.parent}}function im(e,t,n,s){const i=co(t,e,s,!0);uo(()=>{ga(s[t],i)},n)}function wo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function bo(e){return e.shapeFlag&128?e.ssContent:e}function co(e,t,n=je,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;ts(),bs(n);const r=St(t,n,e,l);return Gn(),ns(),r});return s?i.unshift(o):i.push(o),o}else{const i=Fn(Ma[e].replace(/ hook$/,""));F(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const rn=e=>(t,n=je)=>(!ti||e==="sp")&&co(e,(...s)=>t(...s),n),om=rn("bm"),pi=rn("m"),am=rn("bu"),Da=rn("u"),Ta=rn("bum"),uo=rn("um"),lm=rn("sp"),rm=rn("rtg"),cm=rn("rtc");function dm(e,t=je){co("ec",e,t)}function Kc(e){Ou(e)&&F("Do not use built-in directive ids as custom directive id: "+e)}function C(e,t){const n=Ye;if(n===null)return F("withDirectives can only be used inside render functions."),e;const s=mo(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[l,r,c,d=Oe]=t[o];l&&(fe(l)&&(l={mounted:l,updated:l}),l.deep&&zn(r),i.push({dir:l,instance:s,value:r,oldValue:void 0,arg:c,modifiers:d}))}return e}function Tn(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){const r=i[l];o&&(r.oldValue=o[l].value);let c=r.dir[s];c&&(ts(),St(c,n,8,[e.el,r,e,t]),ns())}}const jo="components",um="directives";function pm(e,t){return Rc(jo,e,!0,t)||e}const mm=Symbol();function bl(e){return Rc(um,e)}function Rc(e,t,n=!0,s=!1){const i=Ye||je;if(i){const o=i.type;if(e===jo){const r=ni(o,!1);if(r&&(r===t||r===Wt(t)||r===Qn(Wt(t))))return o}const l=kl(i[e]||o[e],t)||kl(i.appContext[e],t);if(!l&&s)return o;if(n&&!l){const r=e===jo?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";F(`Failed to resolve ${e.slice(0,-1)}: ${t}${r}`)}return l}else F(`resolve${Qn(e.slice(0,-1))} can only be used in render() or setup().`)}function kl(e,t){return e&&(e[t]||e[Wt(t)]||e[Qn(Wt(t))])}function mi(e,t,n,s){let i;const o=n&&n[s];if(ue(e)||Ke(e)){i=new Array(e.length);for(let l=0,r=e.length;l<r;l++)i[l]=t(e[l],l,void 0,o&&o[l])}else if(typeof e=="number"){Number.isInteger(e)||F(`The v-for range expect an integer value but got ${e}.`),i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o&&o[l])}else if(Be(e))if(e[Symbol.iterator])i=Array.from(e,(l,r)=>t(l,r,void 0,o&&o[r]));else{const l=Object.keys(e);i=new Array(l.length);for(let r=0,c=l.length;r<c;r++){const d=l[r];i[r]=t(e[d],d,r,o&&o[r])}}else i=[];return n&&(n[s]=i),i}function ft(e,t,n={},s,i){if(Ye.isCE||Ye.parent&&vs(Ye.parent)&&Ye.parent.isCE)return t!=="default"&&(n.name=t),m("slot",n,s&&s());let o=e[t];o&&o.length>1&&(F("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),o=()=>[]),o&&o._c&&(o._d=!1),x();const l=o&&zc(o(n)),r=z(Le,{key:n.key||l&&l.key||`_${t}`},l||(s?s():[]),l&&e._===1?64:-2);return!i&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),o&&o._c&&(o._d=!0),r}function zc(e){return e.some(t=>Ln(t)?!(t.type===Qe||t.type===Le&&!zc(t.children)):!0)?e:null}const Ho=e=>e?td(e)?mo(e)||e.proxy:Ho(e.parent):null,qn=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ms(e.props),$attrs:e=>ms(e.attrs),$slots:e=>ms(e.slots),$refs:e=>ms(e.refs),$parent:e=>Ho(e.parent),$root:e=>Ho(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>ao(e.update)),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>Xp.bind(e)}),Pa=e=>e==="_"||e==="$",ko=(e,t)=>e!==Oe&&!e.__isScriptSetup&&Ce(e,t),Uc={get({_:e},t){const{ctx:n,setupState:s,data:i,props:o,accessCache:l,type:r,appContext:c}=e;if(t==="__isVue")return!0;let d;if(t[0]!=="$"){const v=l[t];if(v!==void 0)switch(v){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(ko(s,t))return l[t]=1,s[t];if(i!==Oe&&Ce(i,t))return l[t]=2,i[t];if((d=e.propsOptions[0])&&Ce(d,t))return l[t]=3,o[t];if(n!==Oe&&Ce(n,t))return l[t]=4,n[t];Vo&&(l[t]=0)}}const u=qn[t];let p,h;if(u)return t==="$attrs"&&(gt(e,"get",t),ji()),u(e);if((p=r.__cssModules)&&(p=p[t]))return p;if(n!==Oe&&Ce(n,t))return l[t]=4,n[t];if(h=c.config.globalProperties,Ce(h,t))return h[t];Ye&&(!Ke(t)||t.indexOf("__v")!==0)&&(i!==Oe&&Pa(t[0])&&Ce(i,t)?F(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ye&&F(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return ko(i,t)?(i[t]=n,!0):i.__isScriptSetup&&Ce(i,t)?(F(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Oe&&Ce(s,t)?(s[t]=n,!0):Ce(e.props,t)?(F(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(F(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},l){let r;return!!n[l]||e!==Oe&&Ce(e,l)||ko(t,l)||(r=o[0])&&Ce(r,l)||Ce(s,l)||Ce(qn,l)||Ce(i.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Uc.ownKeys=e=>(F("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function hm(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(qn).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>qn[n](e),set:ht})}),t}function gm(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:ht})})}function fm(e){const{ctx:t,setupState:n}=e;Object.keys(ye(n)).forEach(s=>{if(!n.__isScriptSetup){if(Pa(s[0])){F(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:ht})}})}function vm(){const e=Object.create(null);return(t,n)=>{e[n]?F(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Vo=!0;function ym(e){const t=Oa(e),n=e.proxy,s=e.ctx;Vo=!1,t.beforeCreate&&xl(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:l,watch:r,provide:c,inject:d,created:u,beforeMount:p,mounted:h,beforeUpdate:v,updated:y,activated:b,deactivated:$,beforeDestroy:L,beforeUnmount:A,destroyed:B,unmounted:E,render:q,renderTracked:G,renderTriggered:V,errorCaptured:j,serverPrefetch:se,expose:re,inheritAttrs:ge,components:X,directives:me,filters:Re}=t,Je=vm();{const[ee]=e.propsOptions;if(ee)for(const pe in ee)Je("Props",pe)}if(d&&_m(d,s,Je,e.appContext.config.unwrapInjectedRef),l)for(const ee in l){const pe=l[ee];fe(pe)?(Object.defineProperty(s,ee,{value:pe.bind(n),configurable:!0,enumerable:!0,writable:!0}),Je("Methods",ee)):F(`Method "${ee}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||F("The data option must be a function. Plain object usage is no longer supported.");const ee=i.call(n,n);if(va(ee)&&F("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Be(ee))F("data() should return an object.");else{e.data=et(ee);for(const pe in ee)Je("Data",pe),Pa(pe[0])||Object.defineProperty(s,pe,{configurable:!0,enumerable:!0,get:()=>ee[pe],set:ht})}}if(Vo=!0,o)for(const ee in o){const pe=o[ee],ke=fe(pe)?pe.bind(n,n):fe(pe.get)?pe.get.bind(n,n):ht;ke===ht&&F(`Computed property "${ee}" has no getter.`);const Te=!fe(pe)&&fe(pe.set)?pe.set.bind(n):()=>{F(`Write operation failed: computed property "${ee}" is readonly.`)},yt=T({get:ke,set:Te});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>yt.value,set:tt=>yt.value=tt}),Je("Computed",ee)}if(r)for(const ee in r)jc(r[ee],s,n,ee);if(c){const ee=fe(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(pe=>{bt(pe,ee[pe])})}u&&xl(u,e,"c");function Fe(ee,pe){ue(pe)?pe.forEach(ke=>ee(ke.bind(n))):pe&&ee(pe.bind(n))}if(Fe(om,p),Fe(pi,h),Fe(am,v),Fe(Da,y),Fe(nm,b),Fe(sm,$),Fe(dm,j),Fe(cm,G),Fe(rm,V),Fe(Ta,A),Fe(uo,E),Fe(lm,se),ue(re))if(re.length){const ee=e.exposed||(e.exposed={});re.forEach(pe=>{Object.defineProperty(ee,pe,{get:()=>n[pe],set:ke=>n[pe]=ke})})}else e.exposed||(e.exposed={});q&&e.render===ht&&(e.render=q),ge!=null&&(e.inheritAttrs=ge),X&&(e.components=X),me&&(e.directives=me)}function _m(e,t,n=ht,s=!1){ue(e)&&(e=Wo(e));for(const i in e){const o=e[i];let l;Be(o)?"default"in o?l=O(o.from||i,o.default,!0):l=O(o.from||i):l=O(o),Ae(l)?s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):(F(`injected property "${i}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[i]=l):t[i]=l,n("Inject",i)}}function xl(e,t,n){St(ue(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function jc(e,t,n,s){const i=s.includes(".")?Dc(n,s):()=>n[s];if(Ke(e)){const o=t[e];fe(o)?Ve(i,o):F(`Invalid watch handler specified by key "${e}"`,o)}else if(fe(e))Ve(i,e.bind(n));else if(Be(e))if(ue(e))e.forEach(o=>jc(o,t,n,s));else{const o=fe(e.handler)?e.handler.bind(n):t[e.handler];fe(o)?Ve(i,o,e):F(`Invalid watch handler specified by key "${e.handler}"`,o)}else F(`Invalid watch option: "${s}"`,e)}function Oa(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,r=o.get(t);let c;return r?c=r:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(d=>Hi(c,d,l,!0)),Hi(c,t,l)),Be(t)&&o.set(t,c),c}function Hi(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&Hi(e,o,n,!0),i&&i.forEach(l=>Hi(e,l,n,!0));for(const l in t)if(s&&l==="expose")F('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const r=wm[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const wm={data:Cl,props:Nn,emits:Nn,methods:Nn,computed:Nn,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Nn,directives:Nn,watch:km,provide:Cl,inject:bm};function Cl(e,t){return t?e?function(){return Ue(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function bm(e,t){return Nn(Wo(e),Wo(t))}function Wo(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function lt(e,t){return e?[...new Set([].concat(e,t))]:t}function Nn(e,t){return e?Ue(Ue(Object.create(null),e),t):t}function km(e,t){if(!e)return t;if(!t)return e;const n=Ue(Object.create(null),e);for(const s in t)n[s]=lt(e[s],t[s]);return n}function xm(e,t,n,s=!1){const i={},o={};Fi(o,po,1),e.propsDefaults=Object.create(null),Hc(e,t,i,o);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);Wc(t||{},i,e),n?e.props=s?i:fp(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Cm(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function $m(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:l}}=e,r=ye(i),[c]=e.propsOptions;let d=!1;if(!Cm(e)&&(s||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let h=u[p];if(lo(e.emitsOptions,h))continue;const v=t[h];if(c)if(Ce(o,h))v!==o[h]&&(o[h]=v,d=!0);else{const y=Wt(h);i[y]=qo(c,r,y,v,e,!1)}else v!==o[h]&&(o[h]=v,d=!0)}}}else{Hc(e,t,i,o)&&(d=!0);let u;for(const p in r)(!t||!Ce(t,p)&&((u=an(p))===p||!Ce(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=qo(c,r,p,void 0,e,!0)):delete i[p]);if(o!==r)for(const p in o)(!t||!Ce(t,p))&&(delete o[p],d=!0)}d&&ln(e,"set","$attrs"),Wc(t||{},i,e)}function Hc(e,t,n,s){const[i,o]=e.propsOptions;let l=!1,r;if(t)for(let c in t){if(Ai(c))continue;const d=t[c];let u;i&&Ce(i,u=Wt(c))?!o||!o.includes(u)?n[u]=d:(r||(r={}))[u]=d:lo(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,l=!0)}if(o){const c=ye(n),d=r||Oe;for(let u=0;u<o.length;u++){const p=o[u];n[p]=qo(i,c,p,d[p],e,!Ce(d,p))}}return l}function qo(e,t,n,s,i,o){const l=e[n];if(l!=null){const r=Ce(l,"default");if(r&&s===void 0){const c=l.default;if(l.type!==Function&&fe(c)){const{propsDefaults:d}=i;n in d?s=d[n]:(bs(i),s=d[n]=c.call(null,t),Gn())}else s=c}l[0]&&(o&&!r?s=!1:l[1]&&(s===""||s===an(n))&&(s=!0))}return s}function Vc(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const o=e.props,l={},r=[];let c=!1;if(!fe(e)){const u=p=>{c=!0;const[h,v]=Vc(p,t,!0);Ue(l,h),v&&r.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!c)return Be(e)&&s.set(e,gs),gs;if(ue(o))for(let u=0;u<o.length;u++){Ke(o[u])||F("props must be strings when using array syntax.",o[u]);const p=Wt(o[u]);$l(p)&&(l[p]=Oe)}else if(o){Be(o)||F("invalid props options",o);for(const u in o){const p=Wt(u);if($l(p)){const h=o[u],v=l[p]=ue(h)||fe(h)?{type:h}:Object.assign({},h);if(v){const y=Ml(Boolean,v.type),b=Ml(String,v.type);v[0]=y>-1,v[1]=b<0||y<b,(y>-1||Ce(v,"default"))&&r.push(p)}}}}const d=[l,r];return Be(e)&&s.set(e,d),d}function $l(e){return e[0]!=="$"?!0:(F(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Go(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Il(e,t){return Go(e)===Go(t)}function Ml(e,t){return ue(t)?t.findIndex(n=>Il(n,e)):fe(t)&&Il(t,e)?0:-1}function Wc(e,t,n){const s=ye(t),i=n.propsOptions[0];for(const o in i){let l=i[o];l!=null&&Im(o,s[o],l,!Ce(e,o)&&!Ce(e,an(o)))}}function Im(e,t,n,s){const{type:i,required:o,validator:l}=n;if(o&&s){F('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(i!=null&&i!==!0){let r=!1;const c=ue(i)?i:[i],d=[];for(let u=0;u<c.length&&!r;u++){const{valid:p,expectedType:h}=Am(t,c[u]);d.push(h||""),r=p}if(!r){F(Sm(e,t,d));return}}l&&!l(t)&&F('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Mm=Dn("String,Number,Boolean,Function,Symbol,BigInt");function Am(e,t){let n;const s=Go(t);if(Mm(s)){const i=typeof e;n=i===s.toLowerCase(),!n&&i==="object"&&(n=e instanceof t)}else s==="Object"?n=Be(e):s==="Array"?n=ue(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function Sm(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Qn).join(" | ")}`;const i=n[0],o=ya(t),l=Al(t,i),r=Al(t,o);return n.length===1&&Sl(i)&&!Lm(i,o)&&(s+=` with value ${l}`),s+=`, got ${o} `,Sl(o)&&(s+=`with value ${r}.`),s}function Al(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function Sl(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function Lm(...e){return e.some(t=>t.toLowerCase()==="boolean")}const qc=e=>e[0]==="_"||e==="$stable",Fa=e=>ue(e)?e.map(Tt):[Tt(e)],Bm=(e,t,n)=>{if(t._n)return t;const s=_((...i)=>(je&&F(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Fa(t(...i))),n);return s._c=!1,s},Gc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(qc(i))continue;const o=e[i];if(fe(o))t[i]=Bm(i,o,s);else if(o!=null){F(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const l=Fa(o);t[i]=()=>l}}},Yc=(e,t)=>{ui(e.vnode)||F("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Fa(t);e.slots.default=()=>n},Em=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ye(t),Fi(t,"_",n)):Gc(t,e.slots={})}else e.slots={},t&&Yc(e,t);Fi(e.slots,po,1)},Dm=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,l=Oe;if(s.shapeFlag&32){const r=t._;r?xn?Ue(i,t):n&&r===1?o=!1:(Ue(i,t),!n&&r===1&&delete i._):(o=!t.$stable,Gc(t,i)),l=t}else t&&(Yc(e,t),l={default:1});if(o)for(const r in i)!qc(r)&&!(r in l)&&delete i[r]};function Zc(){return{app:null,config:{isNativeTag:Gr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tm=0;function Pm(e,t){return function(s,i=null){fe(s)||(s=Object.assign({},s)),i!=null&&!Be(i)&&(F("root props passed to app.mount() must be an object."),i=null);const o=Zc(),l=new Set;let r=!1;const c=o.app={_uid:Tm++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Dl,get config(){return o.config},set config(d){F("app.config cannot be replaced. Modify individual options instead.")},use(d,...u){return l.has(d)?F("Plugin has already been applied to target app."):d&&fe(d.install)?(l.add(d),d.install(c,...u)):fe(d)?(l.add(d),d(c,...u)):F('A plugin must either be a function or an object with an "install" function.'),c},mixin(d){return o.mixins.includes(d)?F("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):o.mixins.push(d),c},component(d,u){return Jo(d,o.config),u?(o.components[d]&&F(`Component "${d}" has already been registered in target app.`),o.components[d]=u,c):o.components[d]},directive(d,u){return Kc(d),u?(o.directives[d]&&F(`Directive "${d}" has already been registered in target app.`),o.directives[d]=u,c):o.directives[d]},mount(d,u,p){if(r)F("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{d.__vue_app__&&F("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=m(s,i);return h.appContext=o,o.reload=()=>{e(Nt(h),d,p)},u&&t?t(h,d):e(h,d,p),r=!0,c._container=d,d.__vue_app__=c,c._instance=h.component,Kp(c,Dl),mo(h.component)||h.component.proxy}},unmount(){r?(e(null,c._container),c._instance=null,Rp(c),delete c._container.__vue_app__):F("Cannot unmount an app that is not mounted.")},provide(d,u){return d in o.provides&&F(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),o.provides[d]=u,c}};return c}}function Yo(e,t,n,s,i=!1){if(ue(e)){e.forEach((h,v)=>Yo(h,t&&(ue(t)?t[v]:t),n,s,i));return}if(vs(s)&&!i)return;const o=s.shapeFlag&4?mo(s.component)||s.component.proxy:s.el,l=i?null:o,{i:r,r:c}=e;if(!r){F("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=t&&t.r,u=r.refs===Oe?r.refs={}:r.refs,p=r.setupState;if(d!=null&&d!==c&&(Ke(d)?(u[d]=null,Ce(p,d)&&(p[d]=null)):Ae(d)&&(d.value=null)),fe(c))on(c,r,12,[l,u]);else{const h=Ke(c),v=Ae(c);if(h||v){const y=()=>{if(e.f){const b=h?Ce(p,c)?p[c]:u[c]:c.value;i?ue(b)&&ga(b,o):ue(b)?b.includes(o)||b.push(o):h?(u[c]=[o],Ce(p,c)&&(p[c]=u[c])):(c.value=[o],e.k&&(u[e.k]=c.value))}else h?(u[c]=l,Ce(p,c)&&(p[c]=l)):v?(c.value=l,e.k&&(u[e.k]=l)):F("Invalid template ref type:",c,`(${typeof c})`)};l?(y.id=-1,Xe(y,n)):y()}else F("Invalid template ref type:",c,`(${typeof c})`)}}let Ls,_n;function Jt(e,t){e.appContext.config.performance&&Vi()&&_n.mark(`vue-${t}-${e.uid}`),jp(e,t,Vi()?_n.now():Date.now())}function Qt(e,t){if(e.appContext.config.performance&&Vi()){const n=`vue-${t}-${e.uid}`,s=n+":end";_n.mark(s),_n.measure(`<${ho(e,e.type)}> ${t}`,n,s),_n.clearMarks(n),_n.clearMarks(s)}Hp(e,t,Vi()?_n.now():Date.now())}function Vi(){return Ls!==void 0||(typeof window<"u"&&window.performance?(Ls=!0,_n=window.performance):Ls=!1),Ls}function Om(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xe=Qp;function Fm(e){return Nm(e)}function Nm(e,t){Om();const n=Qr();n.__VUE__=!0,$c(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:i,patchProp:o,createElement:l,createText:r,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:h,setScopeId:v=ht,insertStaticContent:y}=e,b=(f,w,M,P=null,D=null,H=null,J=!1,U=null,W=xn?!1:!!w.dynamicChildren)=>{if(f===w)return;f&&!wn(f,w)&&(P=ne(f),pt(f,D,H,!0),f=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:N,ref:le,shapeFlag:oe}=w;switch(N){case hi:$(f,w,M,P);break;case Qe:L(f,w,M,P);break;case Bi:f==null?A(w,M,P,J):B(f,w,M,J);break;case Le:me(f,w,M,P,D,H,J,U,W);break;default:oe&1?G(f,w,M,P,D,H,J,U,W):oe&6?Re(f,w,M,P,D,H,J,U,W):oe&64||oe&128?N.process(f,w,M,P,D,H,J,U,W,Ie):F("Invalid VNode type:",N,`(${typeof N})`)}le!=null&&D&&Yo(le,f&&f.ref,H,w||f,!w)},$=(f,w,M,P)=>{if(f==null)s(w.el=r(w.children),M,P);else{const D=w.el=f.el;w.children!==f.children&&d(D,w.children)}},L=(f,w,M,P)=>{f==null?s(w.el=c(w.children||""),M,P):w.el=f.el},A=(f,w,M,P)=>{[f.el,f.anchor]=y(f.children,w,M,P,f.el,f.anchor)},B=(f,w,M,P)=>{if(w.children!==f.children){const D=h(f.anchor);q(f),[w.el,w.anchor]=y(w.children,M,D,P)}else w.el=f.el,w.anchor=f.anchor},E=({el:f,anchor:w},M,P)=>{let D;for(;f&&f!==w;)D=h(f),s(f,M,P),f=D;s(w,M,P)},q=({el:f,anchor:w})=>{let M;for(;f&&f!==w;)M=h(f),i(f),f=M;i(w)},G=(f,w,M,P,D,H,J,U,W)=>{J=J||w.type==="svg",f==null?V(w,M,P,D,H,J,U,W):re(f,w,D,H,J,U,W)},V=(f,w,M,P,D,H,J,U)=>{let W,N;const{type:le,props:oe,shapeFlag:de,transition:be,dirs:$e}=f;if(W=f.el=l(f.type,H,oe&&oe.is,oe),de&8?u(W,f.children):de&16&&se(f.children,W,null,P,D,H&&le!=="foreignObject",J,U),$e&&Tn(f,null,P,"created"),j(W,f,f.scopeId,J,P),oe){for(const Pe in oe)Pe!=="value"&&!Ai(Pe)&&o(W,Pe,null,oe[Pe],H,f.children,P,D,Z);"value"in oe&&o(W,"value",null,oe.value),(N=oe.onVnodeBeforeMount)&&It(N,P,f)}Object.defineProperty(W,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:P,enumerable:!1}),$e&&Tn(f,null,P,"beforeMount");const Ne=(!D||D&&!D.pendingBranch)&&be&&!be.persisted;Ne&&be.beforeEnter(W),s(W,w,M),((N=oe&&oe.onVnodeMounted)||Ne||$e)&&Xe(()=>{N&&It(N,P,f),Ne&&be.enter(W),$e&&Tn(f,null,P,"mounted")},D)},j=(f,w,M,P,D)=>{if(M&&v(f,M),P)for(let H=0;H<P.length;H++)v(f,P[H]);if(D){let H=D.subTree;if(H.patchFlag>0&&H.patchFlag&2048&&(H=Bc(H.children)||H),w===H){const J=D.vnode;j(f,J,J.scopeId,J.slotScopeIds,D.parent)}}},se=(f,w,M,P,D,H,J,U,W=0)=>{for(let N=W;N<f.length;N++){const le=f[N]=U?fn(f[N]):Tt(f[N]);b(null,le,w,M,P,D,H,J,U)}},re=(f,w,M,P,D,H,J)=>{const U=w.el=f.el;let{patchFlag:W,dynamicChildren:N,dirs:le}=w;W|=f.patchFlag&16;const oe=f.props||Oe,de=w.props||Oe;let be;M&&Pn(M,!1),(be=de.onVnodeBeforeUpdate)&&It(be,M,w,f),le&&Tn(w,f,M,"beforeUpdate"),M&&Pn(M,!0),xn&&(W=0,J=!1,N=null);const $e=D&&w.type!=="foreignObject";if(N?(ge(f.dynamicChildren,N,U,M,P,$e,H),M&&M.type.__hmrId&&js(f,w)):J||ke(f,w,U,null,M,P,$e,H,!1),W>0){if(W&16)X(U,w,oe,de,M,P,D);else if(W&2&&oe.class!==de.class&&o(U,"class",null,de.class,D),W&4&&o(U,"style",oe.style,de.style,D),W&8){const Ne=w.dynamicProps;for(let Pe=0;Pe<Ne.length;Pe++){const We=Ne[Pe],Bt=oe[We],os=de[We];(os!==Bt||We==="value")&&o(U,We,Bt,os,D,f.children,M,P,Z)}}W&1&&f.children!==w.children&&u(U,w.children)}else!J&&N==null&&X(U,w,oe,de,M,P,D);((be=de.onVnodeUpdated)||le)&&Xe(()=>{be&&It(be,M,w,f),le&&Tn(w,f,M,"updated")},P)},ge=(f,w,M,P,D,H,J)=>{for(let U=0;U<w.length;U++){const W=f[U],N=w[U],le=W.el&&(W.type===Le||!wn(W,N)||W.shapeFlag&70)?p(W.el):M;b(W,N,le,null,P,D,H,J,!0)}},X=(f,w,M,P,D,H,J)=>{if(M!==P){if(M!==Oe)for(const U in M)!Ai(U)&&!(U in P)&&o(f,U,M[U],null,J,w.children,D,H,Z);for(const U in P){if(Ai(U))continue;const W=P[U],N=M[U];W!==N&&U!=="value"&&o(f,U,N,W,J,w.children,D,H,Z)}"value"in P&&o(f,"value",M.value,P.value)}},me=(f,w,M,P,D,H,J,U,W)=>{const N=w.el=f?f.el:r(""),le=w.anchor=f?f.anchor:r("");let{patchFlag:oe,dynamicChildren:de,slotScopeIds:be}=w;(xn||oe&2048)&&(oe=0,W=!1,de=null),be&&(U=U?U.concat(be):be),f==null?(s(N,M,P),s(le,M,P),se(w.children,M,le,D,H,J,U,W)):oe>0&&oe&64&&de&&f.dynamicChildren?(ge(f.dynamicChildren,de,M,D,H,J,U),D&&D.type.__hmrId?js(f,w):(w.key!=null||D&&w===D.subTree)&&js(f,w,!0)):ke(f,w,M,le,D,H,J,U,W)},Re=(f,w,M,P,D,H,J,U,W)=>{w.slotScopeIds=U,f==null?w.shapeFlag&512?D.ctx.activate(w,M,P,J,W):Je(w,M,P,D,H,J,W):Fe(f,w,W)},Je=(f,w,M,P,D,H,J)=>{const U=f.component=Gm(f,P,D);if(U.type.__hmrId&&Pp(U),Si(f),Jt(U,"mount"),ui(f)&&(U.ctx.renderer=Ie),Jt(U,"init"),Zm(U),Qt(U,"init"),U.asyncDep){if(D&&D.registerDep(U,ee),!f.el){const W=U.subTree=m(Qe);L(null,W,w,M)}return}ee(U,f,w,M,D,H,J),Li(),Qt(U,"mount")},Fe=(f,w,M)=>{const P=w.component=f.component;if(Zp(f,w,M))if(P.asyncDep&&!P.asyncResolved){Si(w),pe(P,w,M),Li();return}else P.next=w,Dp(P.update),P.update();else w.el=f.el,P.vnode=w},ee=(f,w,M,P,D,H,J)=>{const U=()=>{if(f.isMounted){let{next:le,bu:oe,u:de,parent:be,vnode:$e}=f,Ne=le,Pe;Si(le||f.vnode),Pn(f,!1),le?(le.el=$e.el,pe(f,le,J)):le=$e,oe&&yn(oe),(Pe=le.props&&le.props.onVnodeBeforeUpdate)&&It(Pe,be,le,$e),Pn(f,!0),Jt(f,"render");const We=yo(f);Qt(f,"render");const Bt=f.subTree;f.subTree=We,Jt(f,"patch"),b(Bt,We,p(Bt.el),ne(Bt),f,D,H),Qt(f,"patch"),le.el=We.el,Ne===null&&Jp(f,We.el),de&&Xe(de,D),(Pe=le.props&&le.props.onVnodeUpdated)&&Xe(()=>It(Pe,be,le,$e),D),Ic(f),Li()}else{let le;const{el:oe,props:de}=w,{bm:be,m:$e,parent:Ne}=f,Pe=vs(w);if(Pn(f,!1),be&&yn(be),!Pe&&(le=de&&de.onVnodeBeforeMount)&&It(le,Ne,w),Pn(f,!0),oe&&he){const We=()=>{Jt(f,"render"),f.subTree=yo(f),Qt(f,"render"),Jt(f,"hydrate"),he(oe,f.subTree,f,D,null),Qt(f,"hydrate")};Pe?w.type.__asyncLoader().then(()=>!f.isUnmounted&&We()):We()}else{Jt(f,"render");const We=f.subTree=yo(f);Qt(f,"render"),Jt(f,"patch"),b(null,We,M,P,f,D,H),Qt(f,"patch"),w.el=We.el}if($e&&Xe($e,D),!Pe&&(le=de&&de.onVnodeMounted)){const We=w;Xe(()=>It(le,Ne,We),D)}(w.shapeFlag&256||Ne&&vs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&f.a&&Xe(f.a,D),f.isMounted=!0,zo(f),w=M=P=null}},W=f.effect=new ba(U,()=>ao(N),f.scope),N=f.update=()=>W.run();N.id=f.uid,Pn(f,!0),W.onTrack=f.rtc?le=>yn(f.rtc,le):void 0,W.onTrigger=f.rtg?le=>yn(f.rtg,le):void 0,N.ownerInstance=f,N()},pe=(f,w,M)=>{w.component=f;const P=f.vnode.props;f.vnode=w,f.next=null,$m(f,w.props,P,M),Dm(f,w.children,M),ts(),fl(),ns()},ke=(f,w,M,P,D,H,J,U,W=!1)=>{const N=f&&f.children,le=f?f.shapeFlag:0,oe=w.children,{patchFlag:de,shapeFlag:be}=w;if(de>0){if(de&128){yt(N,oe,M,P,D,H,J,U,W);return}else if(de&256){Te(N,oe,M,P,D,H,J,U,W);return}}be&8?(le&16&&Z(N,D,H),oe!==N&&u(M,oe)):le&16?be&16?yt(N,oe,M,P,D,H,J,U,W):Z(N,D,H,!0):(le&8&&u(M,""),be&16&&se(oe,M,P,D,H,J,U,W))},Te=(f,w,M,P,D,H,J,U,W)=>{f=f||gs,w=w||gs;const N=f.length,le=w.length,oe=Math.min(N,le);let de;for(de=0;de<oe;de++){const be=w[de]=W?fn(w[de]):Tt(w[de]);b(f[de],be,M,null,D,H,J,U,W)}N>le?Z(f,D,H,!0,!1,oe):se(w,M,P,D,H,J,U,W,oe)},yt=(f,w,M,P,D,H,J,U,W)=>{let N=0;const le=w.length;let oe=f.length-1,de=le-1;for(;N<=oe&&N<=de;){const be=f[N],$e=w[N]=W?fn(w[N]):Tt(w[N]);if(wn(be,$e))b(be,$e,M,null,D,H,J,U,W);else break;N++}for(;N<=oe&&N<=de;){const be=f[oe],$e=w[de]=W?fn(w[de]):Tt(w[de]);if(wn(be,$e))b(be,$e,M,null,D,H,J,U,W);else break;oe--,de--}if(N>oe){if(N<=de){const be=de+1,$e=be<le?w[be].el:P;for(;N<=de;)b(null,w[N]=W?fn(w[N]):Tt(w[N]),M,$e,D,H,J,U,W),N++}}else if(N>de)for(;N<=oe;)pt(f[N],D,H,!0),N++;else{const be=N,$e=N,Ne=new Map;for(N=$e;N<=de;N++){const at=w[N]=W?fn(w[N]):Tt(w[N]);at.key!=null&&(Ne.has(at.key)&&F("Duplicate keys found during update:",JSON.stringify(at.key),"Make sure keys are unique."),Ne.set(at.key,N))}let Pe,We=0;const Bt=de-$e+1;let os=!1,ol=0;const Ss=new Array(Bt);for(N=0;N<Bt;N++)Ss[N]=0;for(N=be;N<=oe;N++){const at=f[N];if(We>=Bt){pt(at,D,H,!0);continue}let Rt;if(at.key!=null)Rt=Ne.get(at.key);else for(Pe=$e;Pe<=de;Pe++)if(Ss[Pe-$e]===0&&wn(at,w[Pe])){Rt=Pe;break}Rt===void 0?pt(at,D,H,!0):(Ss[Rt-$e]=N+1,Rt>=ol?ol=Rt:os=!0,b(at,w[Rt],M,null,D,H,J,U,W),We++)}const al=os?Km(Ss):gs;for(Pe=al.length-1,N=Bt-1;N>=0;N--){const at=$e+N,Rt=w[at],ll=at+1<le?w[at+1].el:P;Ss[N]===0?b(null,Rt,M,ll,D,H,J,U,W):os&&(Pe<0||N!==al[Pe]?tt(Rt,M,ll,2):Pe--)}}},tt=(f,w,M,P,D=null)=>{const{el:H,type:J,transition:U,children:W,shapeFlag:N}=f;if(N&6){tt(f.component.subTree,w,M,P);return}if(N&128){f.suspense.move(w,M,P);return}if(N&64){J.move(f,w,M,Ie);return}if(J===Le){s(H,w,M);for(let oe=0;oe<W.length;oe++)tt(W[oe],w,M,P);s(f.anchor,w,M);return}if(J===Bi){E(f,w,M);return}if(P!==2&&N&1&&U)if(P===0)U.beforeEnter(H),s(H,w,M),Xe(()=>U.enter(H),D);else{const{leave:oe,delayLeave:de,afterLeave:be}=U,$e=()=>s(H,w,M),Ne=()=>{oe(H,()=>{$e(),be&&be()})};de?de(H,$e,Ne):Ne()}else s(H,w,M)},pt=(f,w,M,P=!1,D=!1)=>{const{type:H,props:J,ref:U,children:W,dynamicChildren:N,shapeFlag:le,patchFlag:oe,dirs:de}=f;if(U!=null&&Yo(U,null,M,f,!0),le&256){w.ctx.deactivate(f);return}const be=le&1&&de,$e=!vs(f);let Ne;if($e&&(Ne=J&&J.onVnodeBeforeUnmount)&&It(Ne,w,f),le&6)te(f.component,M,P);else{if(le&128){f.suspense.unmount(M,P);return}be&&Tn(f,null,w,"beforeUnmount"),le&64?f.type.remove(f,w,M,D,Ie,P):N&&(H!==Le||oe>0&&oe&64)?Z(N,w,M,!1,!0):(H===Le&&oe&384||!D&&le&16)&&Z(W,w,M),P&&dn(f)}($e&&(Ne=J&&J.onVnodeUnmounted)||be)&&Xe(()=>{Ne&&It(Ne,w,f),be&&Tn(f,null,w,"unmounted")},M)},dn=f=>{const{type:w,el:M,anchor:P,transition:D}=f;if(w===Le){f.patchFlag>0&&f.patchFlag&2048&&D&&!D.persisted?f.children.forEach(J=>{J.type===Qe?i(J.el):dn(J)}):S(M,P);return}if(w===Bi){q(f);return}const H=()=>{i(M),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(f.shapeFlag&1&&D&&!D.persisted){const{leave:J,delayLeave:U}=D,W=()=>J(M,H);U?U(f.el,H,W):W()}else H()},S=(f,w)=>{let M;for(;f!==w;)M=h(f),i(f),f=M;i(w)},te=(f,w,M)=>{f.type.__hmrId&&Op(f);const{bum:P,scope:D,update:H,subTree:J,um:U}=f;P&&yn(P),D.stop(),H&&(H.active=!1,pt(J,f,w,M)),U&&Xe(U,w),Xe(()=>{f.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve()),Up(f)},Z=(f,w,M,P=!1,D=!1,H=0)=>{for(let J=H;J<f.length;J++)pt(f[J],w,M,P,D)},ne=f=>f.shapeFlag&6?ne(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),xe=(f,w,M)=>{f==null?w._vnode&&pt(w._vnode,null,null,!0):b(w._vnode||null,f,w,null,null,null,M),fl(),kc(),w._vnode=f},Ie={p:b,um:pt,m:tt,r:dn,mt:Je,mc:se,pc:ke,pbc:ge,n:ne,o:e};let we,he;return t&&([we,he]=t(Ie)),{render:xe,hydrate:we,createApp:Pm(xe,we)}}function Pn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function js(e,t,n=!1){const s=e.children,i=t.children;if(ue(s)&&ue(i))for(let o=0;o<s.length;o++){const l=s[o];let r=i[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[o]=fn(i[o]),r.el=l.el),n||js(l,r)),r.type===hi&&(r.el=l.el),r.type===Qe&&!r.el&&(r.el=l.el)}}function Km(e){const t=e.slice(),n=[0];let s,i,o,l,r;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(i=n[n.length-1],e[i]<d){t[s]=i,n.push(s);continue}for(o=0,l=n.length-1;o<l;)r=o+l>>1,e[n[r]]<d?o=r+1:l=r;d<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=t[l];return n}const Rm=e=>e.__isTeleport,ys=e=>e&&(e.disabled||e.disabled===""),Ll=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zo=(e,t)=>{const n=e&&e.to;if(Ke(n))if(t){const s=t(n);return s||F(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return F("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!ys(e)&&F(`Invalid Teleport target: ${n}`),n},zm={__isTeleport:!0,process(e,t,n,s,i,o,l,r,c,d){const{mc:u,pc:p,pbc:h,o:{insert:v,querySelector:y,createText:b,createComment:$}}=d,L=ys(t.props);let{shapeFlag:A,children:B,dynamicChildren:E}=t;if(xn&&(c=!1,E=null),e==null){const q=t.el=$("teleport start"),G=t.anchor=$("teleport end");v(q,n,s),v(G,n,s);const V=t.target=Zo(t.props,y),j=t.targetAnchor=b("");V?(v(j,V),l=l||Ll(V)):L||F("Invalid Teleport target on mount:",V,`(${typeof V})`);const se=(re,ge)=>{A&16&&u(B,re,ge,i,o,l,r,c)};L?se(n,G):V&&se(V,j)}else{t.el=e.el;const q=t.anchor=e.anchor,G=t.target=e.target,V=t.targetAnchor=e.targetAnchor,j=ys(e.props),se=j?n:G,re=j?q:V;if(l=l||Ll(G),E?(h(e.dynamicChildren,E,se,i,o,l,r),js(e,t,!0)):c||p(e,t,se,re,i,o,l,r,!1),L)j||$i(t,n,q,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=Zo(t.props,y);ge?$i(t,ge,null,d,0):F("Invalid Teleport target on update:",G,`(${typeof G})`)}else j&&$i(t,G,V,d,1)}Jc(t)},remove(e,t,n,s,{um:i,o:{remove:o}},l){const{shapeFlag:r,children:c,anchor:d,targetAnchor:u,target:p,props:h}=e;if(p&&o(u),(l||!ys(h))&&(o(d),r&16))for(let v=0;v<c.length;v++){const y=c[v];i(y,t,n,!0,!!y.dynamicChildren)}},move:$i,hydrate:Um};function $i(e,t,n,{o:{insert:s},m:i},o=2){o===0&&s(e.targetAnchor,t,n);const{el:l,anchor:r,shapeFlag:c,children:d,props:u}=e,p=o===2;if(p&&s(l,t,n),(!p||ys(u))&&c&16)for(let h=0;h<d.length;h++)i(d[h],t,n,2);p&&s(r,t,n)}function Um(e,t,n,s,i,o,{o:{nextSibling:l,parentNode:r,querySelector:c}},d){const u=t.target=Zo(t.props,c);if(u){const p=u._lpa||u.firstChild;if(t.shapeFlag&16)if(ys(t.props))t.anchor=d(l(e),t,r(e),n,s,i,o),t.targetAnchor=p;else{t.anchor=l(e);let h=p;for(;h;)if(h=l(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&l(t.targetAnchor);break}d(p,t,u,n,s,i,o)}Jc(t)}return t.anchor&&l(t.anchor)}const h5=zm;function Jc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Le=Symbol("Fragment"),hi=Symbol("Text"),Qe=Symbol("Comment"),Bi=Symbol("Static"),Hs=[];let Ot=null;function x(e=!1){Hs.push(Ot=e?null:[])}function jm(){Hs.pop(),Ot=Hs[Hs.length-1]||null}let ei=1;function Bl(e){ei+=e}function Qc(e){return e.dynamicChildren=ei>0?Ot||gs:null,jm(),ei>0&&Ot&&Ot.push(e),e}function Q(e,t,n,s,i,o){return Qc(a(e,t,n,s,i,o,!0))}function z(e,t,n,s,i){return Qc(m(e,t,n,s,i,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function wn(e,t){return t.shapeFlag&6&&ds.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Hm=(...e)=>Vm(...e),po="__vInternal",Xc=({key:e})=>e??null,Ei=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ke(e)||Ae(e)||fe(e)?{i:Ye,r:e,k:t,f:!!n}:e:null;function a(e,t=null,n=null,s=0,i=null,o=e===Le?0:1,l=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xc(t),ref:t&&Ei(t),scopeId:ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return r?(Na(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),c.key!==c.key&&F("VNode created with invalid key (NaN). VNode type:",c.type),ei>0&&!l&&Ot&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Ot.push(c),c}const m=Hm;function Vm(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===mm)&&(e||F(`Invalid vnode type when creating vnode: ${e}.`),e=Qe),Ln(e)){const r=Nt(e,t,!0);return n&&Na(r,n),ei>0&&!o&&Ot&&(r.shapeFlag&6?Ot[Ot.indexOf(e)]=r:Ot.push(r)),r.patchFlag|=-2,r}if(id(e)&&(e=e.__vccOpts),t){t=ie(t);let{class:r,style:c}=t;r&&!Ke(r)&&(t.class=ze(r)),Be(c)&&(zi(c)&&!ue(c)&&(c=Ue({},c)),t.style=st(c))}const l=Ke(e)?1:Ec(e)?128:Rm(e)?64:Be(e)?4:fe(e)?2:0;return l&4&&zi(e)&&(e=ye(e),F("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),a(e,t,n,s,i,l,o,!0)}function ie(e){return e?zi(e)||po in e?Ue({},e):e:null}function Nt(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:l}=e,r=t?Ka(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&Xc(r),ref:t&&t.ref?n&&i?ue(i)?i.concat(Ei(t)):[i,Ei(t)]:Ei(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o===-1&&ue(l)?l.map(ed):l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ed(e){const t=Nt(e);return ue(e.children)&&(t.children=e.children.map(ed)),t}function k(e=" ",t=0){return m(hi,null,e,t)}function Y(e="",t=!1){return t?(x(),z(Qe,null,e)):m(Qe,null,e)}function Tt(e){return e==null||typeof e=="boolean"?m(Qe):ue(e)?m(Le,null,e.slice()):typeof e=="object"?fn(e):m(hi,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function Na(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ue(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Na(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(po in t)?t._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),s&64?(n=16,t=[k(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ka(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ze([t.class,s.class]));else if(i==="style")t.style=st([t.style,s.style]);else if(ri(i)){const o=t[i],l=s[i];l&&o!==l&&!(ue(o)&&o.includes(l))&&(t[i]=o?[].concat(o,l):l)}else i!==""&&(t[i]=s[i])}return t}function It(e,t,n,s=null){St(e,t,7,[n,s])}const Wm=Zc();let qm=0;function Gm(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Wm,o={uid:qm++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vc(s,i),emitsOptions:Ac(s,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:s.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx=hm(o),o.root=t?t.root:o,o.emit=Wp.bind(null,o),e.ce&&e.ce(o),o}let je=null;const Yt=()=>je||Ye,bs=e=>{je=e,e.scope.on()},Gn=()=>{je&&je.scope.off(),je=null},Ym=Dn("slot,component");function Jo(e,t){const n=t.isNativeTag||Gr;(Ym(e)||n(e))&&F("Do not use built-in or reserved HTML elements as component id: "+e)}function td(e){return e.vnode.shapeFlag&4}let ti=!1;function Zm(e,t=!1){ti=t;const{props:n,children:s}=e.vnode,i=td(e);xm(e,n,i,t),Em(e,s);const o=i?Jm(e,t):void 0;return ti=!1,o}function Jm(e,t){var n;const s=e.type;{if(s.name&&Jo(s.name,e.appContext.config),s.components){const o=Object.keys(s.components);for(let l=0;l<o.length;l++)Jo(o[l],e.appContext.config)}if(s.directives){const o=Object.keys(s.directives);for(let l=0;l<o.length;l++)Kc(o[l])}s.compilerOptions&&Qm()&&F('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=xa(new Proxy(e.ctx,Uc)),gm(e);const{setup:i}=s;if(i){const o=e.setupContext=i.length>1?sd(e):null;bs(e),ts();const l=on(i,e,0,[ms(e.props),o]);if(ns(),Gn(),va(l)){if(l.then(Gn,Gn),t)return l.then(r=>{El(e,r,t)}).catch(r=>{oo(r,e,0)});if(e.asyncDep=l,!e.suspense){const r=(n=s.name)!==null&&n!==void 0?n:"Anonymous";F(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else El(e,l,t)}else nd(e,t)}function El(e,t,n){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Be(t)?(Ln(t)&&F("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=gc(t),fm(e)):t!==void 0&&F(`setup() should return an object. Received: ${t===null?"null":typeof t}`),nd(e,n)}let Qo;const Qm=()=>!Qo;function nd(e,t,n){const s=e.type;if(!e.render){if(!t&&Qo&&!s.render){const i=s.template||Oa(e).template;if(i){Jt(e,"compile");const{isCustomElement:o,compilerOptions:l}=e.appContext.config,{delimiters:r,compilerOptions:c}=s,d=Ue(Ue({isCustomElement:o,delimiters:r},l),c);s.render=Qo(i,d),Qt(e,"compile")}}e.render=s.render||ht}bs(e),ts(),ym(e),ns(),Gn(),!s.render&&e.render===ht&&!t&&(s.template?F('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):F("Component is missing template or render function."))}function Xm(e){return new Proxy(e.attrs,{get(t,n){return ji(),gt(e,"get","$attrs"),t[n]},set(){return F("setupContext.attrs is readonly."),!1},deleteProperty(){return F("setupContext.attrs is readonly."),!1}})}function sd(e){const t=s=>{if(e.exposed&&F("expose() should be called only once per setup()."),s!=null){let i=typeof s;i==="object"&&(ue(s)?i="array":Ae(s)&&(i="ref")),i!=="object"&&F(`expose() should be passed a plain object, received ${i}.`)}e.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Xm(e))},get slots(){return ms(e.slots)},get emit(){return(s,...i)=>e.emit(s,...i)},expose:t})}function mo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(gc(xa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}}))}const eh=/(?:^|[-_])(\w)/g,th=e=>e.replace(eh,t=>t.toUpperCase()).replace(/[-_]/g,"");function ni(e,t=!0){return fe(e)?e.displayName||e.name:e.name||t&&e.__name}function ho(e,t,n=!1){let s=ni(t);if(!s&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&e&&e.parent){const i=o=>{for(const l in o)if(o[l]===t)return l};s=i(e.components||e.parent.type.components)||i(e.appContext.components)}return s?th(s):n?"App":"Anonymous"}function id(e){return fe(e)&&"__vccOpts"in e}const T=(e,t)=>Cp(e,t,ti);function g5(){return nh().slots}function nh(){const e=Yt();return e||F("useContext() called without active instance."),e.setupContext||(e.setupContext=sd(e))}function Bn(e,t,n){const s=arguments.length;return s===2?Be(t)&&!ue(t)?Ln(t)?m(e,null,[t]):m(e,t):m(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ln(n)&&(n=[n]),m(e,t,n))}const sh=Symbol("ssrContext"),ih=()=>{{const e=O(sh);return e||F("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function xo(e){return!!(e&&e.__v_isShallow)}function oh(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},i={header(p){return Be(p)?p.__isVue?["div",e,"VueInstance"]:Ae(p)?["div",{},["span",e,u(p)],"<",r(p.value),">"]:Vn(p)?["div",{},["span",e,xo(p)?"ShallowReactive":"Reactive"],"<",r(p),`>${Sn(p)?" (readonly)":""}`]:Sn(p)?["div",{},["span",e,xo(p)?"ShallowReadonly":"Readonly"],"<",r(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...o(p.$)]}};function o(p){const h=[];p.type.props&&p.props&&h.push(l("props",ye(p.props))),p.setupState!==Oe&&h.push(l("setup",p.setupState)),p.data!==Oe&&h.push(l("data",ye(p.data)));const v=c(p,"computed");v&&h.push(l("computed",v));const y=c(p,"inject");return y&&h.push(l("injected",y)),h.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),h}function l(p,h){return h=Ue({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(v=>["div",{},["span",s,v+": "],r(h[v],!1)])]]:["span",{}]}function r(p,h=!0){return typeof p=="number"?["span",t,p]:typeof p=="string"?["span",n,JSON.stringify(p)]:typeof p=="boolean"?["span",s,p]:Be(p)?["object",{object:h?ye(p):p}]:["span",n,String(p)]}function c(p,h){const v=p.type;if(fe(v))return;const y={};for(const b in p.ctx)d(v,b,h)&&(y[b]=p.ctx[b]);return y}function d(p,h,v){const y=p[v];if(ue(y)&&y.includes(h)||Be(y)&&h in y||p.extends&&d(p.extends,h,v)||p.mixins&&p.mixins.some(b=>d(b,h,v)))return!0}function u(p){return xo(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Dl="3.2.47",ah="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,Tl=Kn&&Kn.createElement("template"),lh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?Kn.createElementNS(ah,e):Kn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Kn.createTextNode(e),createComment:e=>Kn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const l=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Tl.innerHTML=s?`<svg>${e}</svg>`:e;const r=Tl.content;if(s){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function rh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ch(e,t,n){const s=e.style,i=Ke(n);if(n&&!i){if(t&&!Ke(t))for(const o in t)n[o]==null&&Xo(s,o,"");for(const o in n)Xo(s,o,n[o])}else{const o=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const dh=/[^\\];\s*$/,Pl=/\s*!important$/;function Xo(e,t,n){if(ue(n))n.forEach(s=>Xo(e,t,s));else if(n==null&&(n=""),dh.test(n)&&F(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=uh(e,t);Pl.test(n)?e.setProperty(an(s),n.replace(Pl,""),"important"):e[s]=n}}const Ol=["Webkit","Moz","ms"],Co={};function uh(e,t){const n=Co[t];if(n)return n;let s=Wt(t);if(s!=="filter"&&s in e)return Co[t]=s;s=Qn(s);for(let i=0;i<Ol.length;i++){const o=Ol[i]+s;if(o in e)return Co[t]=o}return t}const Fl="http://www.w3.org/1999/xlink";function ph(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fl,t.slice(6,t.length)):e.setAttributeNS(Fl,t,n);else{const o=Eu(t);n==null||o&&!Wr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function mh(e,t,n,s,i,o,l){if(t==="innerHTML"||t==="textContent"){s&&l(s,i,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let r=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wr(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[t]=n}catch(c){r||F(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}r&&e.removeAttribute(t)}function us(e,t,n,s){e.addEventListener(t,n,s)}function hh(e,t,n,s){e.removeEventListener(t,n,s)}function gh(e,t,n,s,i=null){const o=e._vei||(e._vei={}),l=o[t];if(s&&l)l.value=s;else{const[r,c]=fh(t);if(s){const d=o[t]=_h(s,i);us(e,r,d,c)}else l&&(hh(e,r,l,c),o[t]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function fh(e){let t;if(Nl.test(e)){t={};let s;for(;s=e.match(Nl);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let $o=0;const vh=Promise.resolve(),yh=()=>$o||(vh.then(()=>$o=0),$o=Date.now());function _h(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(wh(s,n.value),t,5,[s])};return n.value=e,n.attached=yh(),n}function wh(e,t){if(ue(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Kl=/^on[a-z]/,bh=(e,t,n,s,i=!1,o,l,r,c)=>{t==="class"?rh(e,s,i):t==="style"?ch(e,n,s):ri(t)?Oi(t)||gh(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kh(e,t,s,i))?mh(e,t,s,o,l,r,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ph(e,t,s,i))};function kh(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Kl.test(t)&&fe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Kl.test(t)&&Ke(n)?!1:t in e}const pn="transition",Bs="animation",Ra=(e,{slots:t})=>Bn(Pc,ad(e),t);Ra.displayName="Transition";const od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xh=Ra.props=Ue({},Pc.props,od),On=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},Rl=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function ad(e){const t={};for(const X in e)X in od||(t[X]=e[X]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:d=l,appearToClass:u=r,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,y=Ch(i),b=y&&y[0],$=y&&y[1],{onBeforeEnter:L,onEnter:A,onEnterCancelled:B,onLeave:E,onLeaveCancelled:q,onBeforeAppear:G=L,onAppear:V=A,onAppearCancelled:j=B}=t,se=(X,me,Re)=>{hn(X,me?u:r),hn(X,me?d:l),Re&&Re()},re=(X,me)=>{X._isLeaving=!1,hn(X,p),hn(X,v),hn(X,h),me&&me()},ge=X=>(me,Re)=>{const Je=X?V:A,Fe=()=>se(me,X,Re);On(Je,[me,Fe]),zl(()=>{hn(me,X?c:o),Xt(me,X?u:r),Rl(Je)||Ul(me,s,b,Fe)})};return Ue(t,{onBeforeEnter(X){On(L,[X]),Xt(X,o),Xt(X,l)},onBeforeAppear(X){On(G,[X]),Xt(X,c),Xt(X,d)},onEnter:ge(!1),onAppear:ge(!0),onLeave(X,me){X._isLeaving=!0;const Re=()=>re(X,me);Xt(X,p),rd(),Xt(X,h),zl(()=>{X._isLeaving&&(hn(X,p),Xt(X,v),Rl(E)||Ul(X,s,$,Re))}),On(E,[X,Re])},onEnterCancelled(X){se(X,!1),On(B,[X])},onAppearCancelled(X){se(X,!0),On(j,[X])},onLeaveCancelled(X){re(X),On(q,[X])}})}function Ch(e){if(e==null)return null;if(Be(e))return[Io(e.enter),Io(e.leave)];{const t=Io(e);return[t,t]}}function Io(e){const t=Ku(e);return Sp(t,"<transition> explicit duration"),t}function Xt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function hn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function zl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $h=0;function Ul(e,t,n,s){const i=e._endId=++$h,o=()=>{i===e._endId&&s()};if(n)return setTimeout(o,n);const{type:l,timeout:r,propCount:c}=ld(e,t);if(!l)return s();const d=l+"end";let u=0;const p=()=>{e.removeEventListener(d,h),o()},h=v=>{v.target===e&&++u>=c&&p()};setTimeout(()=>{u<c&&p()},r+1),e.addEventListener(d,h)}function ld(e,t){const n=window.getComputedStyle(e),s=y=>(n[y]||"").split(", "),i=s(`${pn}Delay`),o=s(`${pn}Duration`),l=jl(i,o),r=s(`${Bs}Delay`),c=s(`${Bs}Duration`),d=jl(r,c);let u=null,p=0,h=0;t===pn?l>0&&(u=pn,p=l,h=o.length):t===Bs?d>0&&(u=Bs,p=d,h=c.length):(p=Math.max(l,d),u=p>0?l>d?pn:Bs:null,h=u?u===pn?o.length:c.length:0);const v=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:p,propCount:h,hasTransform:v}}function jl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Hl(n)+Hl(e[s])))}function Hl(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function rd(){return document.body.offsetHeight}const cd=new WeakMap,dd=new WeakMap,ud={name:"TransitionGroup",props:Ue({},xh,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Yt(),s=Tc();let i,o;return Da(()=>{if(!i.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!Bh(i[0].el,n.vnode.el,l))return;i.forEach(Ah),i.forEach(Sh);const r=i.filter(Lh);rd(),r.forEach(c=>{const d=c.el,u=d.style;Xt(d,l),u.transform=u.webkitTransform=u.transitionDuration="";const p=d._moveCb=h=>{h&&h.target!==d||(!h||/transform$/.test(h.propertyName))&&(d.removeEventListener("transitionend",p),d._moveCb=null,hn(d,l))};d.addEventListener("transitionend",p)})}),()=>{const l=ye(e),r=ad(l);let c=l.tag||Le;i=o,o=t.default?Ea(t.default()):[];for(let d=0;d<o.length;d++){const u=o[d];u.key!=null?ws(u,Xs(u,r,s,n)):F("<TransitionGroup> children must be keyed.")}if(i)for(let d=0;d<i.length;d++){const u=i[d];ws(u,Xs(u,r,s,n)),cd.set(u,u.el.getBoundingClientRect())}return m(c,null,o)}}},Ih=e=>delete e.mode;ud.props;const Mh=ud;function Ah(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Sh(e){dd.set(e,e.el.getBoundingClientRect())}function Lh(e){const t=cd.get(e),n=dd.get(e),s=t.left-n.left,i=t.top-n.top;if(s||i){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${i}px)`,o.transitionDuration="0s",e}}function Bh(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(r=>r&&s.classList.remove(r))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(s);const{hasTransform:o}=ld(s);return i.removeChild(s),o}const Vl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ue(t)?n=>yn(t,n):t};function Eh(e){e.target.composing=!0}function Wl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dh={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Vl(i);const o=s||i.props&&i.props.type==="number";us(e,t?"change":"input",l=>{if(l.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=Po(r)),e._assign(r)}),n&&us(e,"change",()=>{e.value=e.value.trim()}),t||(us(e,"compositionstart",Eh),us(e,"compositionend",Wl),us(e,"change",Wl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Vl(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Po(e.value)===t))return;const l=t??"";e.value!==l&&(e.value=l)}},Th={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ql=(e,t)=>n=>{if(!("key"in n))return;const s=an(n.key);if(t.some(i=>i===s||Th[i]===s))return e(n)},I={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Es(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Es(e,!0),s.enter(e)):s.leave(e,()=>{Es(e,!1)}):Es(e,t))},beforeUnmount(e,{value:t}){Es(e,t)}};function Es(e,t){e.style.display=t?e._vod:"none"}const Ph=Ue({patchProp:bh},lh);let Gl;function Oh(){return Gl||(Gl=Fm(Ph))}const f5=(...e)=>{const t=Oh().createApp(...e);Fh(t),Nh(t);const{mount:n}=t;return t.mount=s=>{const i=Kh(s);if(!i)return;const o=t._component;!fe(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const l=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function Fh(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Su(t)||Lu(t),writable:!1})}function Nh(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){F("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return F(s),n},set(){F(s)}})}}function Kh(e){if(Ke(e)){const t=document.querySelector(e);return t||F(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&F('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Rh(){oh()}Rh();const pd=Symbol("v-click-clicks"),md=Symbol("v-click-clicks-elements"),zh=Symbol("v-click-clicks-order-map"),hd=Symbol("v-click-clicks-disabled"),gd=Symbol("slidev-slide-scale"),K=Symbol("slidev-slidev-context"),Uh=Symbol("slidev-route"),jh=Symbol("slidev-slide-context"),Hh="slidev-vclick-target",v5="slidev-vclick-hidden",y5="slidev-vclick-fade",_5="slidev-vclick-hidden-explicitly",w5="slidev-vclick-current",b5="slidev-vclick-prior";function Vh(e){return e=e??[],Array.isArray(e)?e:[e]}function Wh(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function qh(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const i=[];let o=t;for(;o<n;)i.push(o),o+=s||1;return i}function Gh(e){return e!=null}function Yh(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Gh))}const Zh={theme:"../slidev-theme-breitwieser",title:"High-Performance and Scalable Agent-Based Simulation With BioDynaMo",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,export:{dark:!1,withClicks:!0},info:!1,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"ppopp23-Breitwieser-BioDynaMo",selectable:!0,themeConfig:{},fonts:{sans:['"Open Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Playfair Display"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Cascadia Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Open Sans","Playfair Display","Cascadia Code"],provider:"none",local:[],italic:!1,weights:["200","400","600"]},favicon:"favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!1,htmlAttrs:{}},Ee=Zh,Cn=Ee.aspectRatio??16/9,$n=Ee.canvasWidth??980,za=Math.ceil($n/Cn),Ua=T(()=>Yh(Ee.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Lt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const ss=et({page:0,clicks:0});let Jh=[],Qh=[];Lt(ss,"$syncUp",!0);Lt(ss,"$syncDown",!0);Lt(ss,"$paused",!1);Lt(ss,"$onSet",e=>Jh.push(e));Lt(ss,"$onPatch",e=>Qh.push(e));Lt(ss,"$patch",async()=>!1);function fd(e,t,n=!1){const s=[];let i=!1,o=!1,l,r;const c=et(t);function d(v){s.push(v)}function u(v,y){clearTimeout(l),i=!0,c[v]=y,l=setTimeout(()=>i=!1,0)}function p(v){i||(clearTimeout(r),o=!0,Object.entries(v).forEach(([y,b])=>{c[y]=b}),r=setTimeout(()=>o=!1,0))}function h(v){let y;n?n&&window.addEventListener("storage",$=>{$&&$.key===v&&$.newValue&&p(JSON.parse($.newValue))}):(y=new BroadcastChannel(v),y.addEventListener("message",$=>p($.data)));function b(){!n&&y&&!o?y.postMessage(ye(c)):n&&!o&&window.localStorage.setItem(v,JSON.stringify(c)),i||s.forEach($=>$(c))}if(Ve(c,b,{deep:!0}),n){const $=window.localStorage.getItem(v);$&&p(JSON.parse($))}}return{init:h,onPatch:d,patch:u,state:c}}const{init:k5,onPatch:x5,patch:C5,state:Mo}=fd(ss,{page:1,clicks:0}),is=et({});let Xh=[],eg=[];Lt(is,"$syncUp",!0);Lt(is,"$syncDown",!0);Lt(is,"$paused",!1);Lt(is,"$onSet",e=>Xh.push(e));Lt(is,"$onPatch",e=>eg.push(e));Lt(is,"$patch",async()=>!1);const{init:$5,onPatch:tg,patch:vd,state:Wi}=fd(is,{},!1),ng="modulepreload",sg=function(e){return"/ppopp23-biodynamo-slides/"+e},Yl={},gi=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=sg(o),o in Yl)return;Yl[o]=!0;const l=o.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const p=i[u];if(p.href===o&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${r}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":ng,l||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),l)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var Zl;const cn=typeof window<"u",ig=e=>typeof e<"u",og=Object.prototype.toString,qi=e=>typeof e=="function",I5=e=>typeof e=="number",yd=e=>typeof e=="string",M5=e=>og.call(e)==="[object Object]",ag=()=>+Date.now(),Vs=()=>{};cn&&((Zl=window==null?void 0:window.navigator)!=null&&Zl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function mt(e){return typeof e=="function"?e():g(e)}function lg(e,t){function n(...s){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(i).catch(o)})}return n}const _d=e=>e();function rg(e=_d){const t=_e(!0);function n(){t.value=!1}function s(){t.value=!0}const i=(...o)=>{t.value&&e(...o)};return{isActive:bn(t),pause:n,resume:s,eventFilter:i}}function cg(e){return e}function dg(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",i=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+i}function ug(e,t){let n,s,i;const o=_e(!0),l=()=>{o.value=!0,i()};Ve(e,l,{flush:"sync"});const r=qi(t)?t:t.get,c=qi(t)?void 0:t.set,d=fc((u,p)=>(s=u,i=p,{get(){return o.value&&(n=r(),o.value=!1),s(),n},set(h){c==null||c(h)}}));return Object.isExtensible(d)&&(d.trigger=l),d}function Is(e){return ec()?(zu(e),!0):!1}function pg(e){if(!Ae(e))return et(e);const t=new Proxy({},{get(n,s,i){return g(Reflect.get(e.value,s,i))},set(n,s,i){return Ae(e.value[s])&&!Ae(i)?e.value[s].value=i:e.value[s]=i,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return et(t)}function wd(e){return typeof e=="function"?T(e):_e(e)}var mg=Object.defineProperty,hg=Object.defineProperties,gg=Object.getOwnPropertyDescriptors,Jl=Object.getOwnPropertySymbols,fg=Object.prototype.hasOwnProperty,vg=Object.prototype.propertyIsEnumerable,Ql=(e,t,n)=>t in e?mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yg=(e,t)=>{for(var n in t||(t={}))fg.call(t,n)&&Ql(e,n,t[n]);if(Jl)for(var n of Jl(t))vg.call(t,n)&&Ql(e,n,t[n]);return e},_g=(e,t)=>hg(e,gg(t));function wg(e){if(!Ae(e))return wp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=fc(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const i=[...e.value];i[n]=s,e.value=i}else{const i=_g(yg({},e.value),{[n]:s});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function bd(e,t=!0){Yt()?pi(e):t?e():Ft(e)}function A5(e){Yt()&&uo(e)}function bg(e,t,n={}){const{immediate:s=!0}=n,i=_e(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function r(){i.value=!1,l()}function c(...d){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...d)},mt(t))}return s&&(i.value=!0,cn&&c()),Is(r),{isPending:bn(i),start:c,stop:r}}function kd(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,i=Ae(e),o=_e(e);function l(r){if(arguments.length)return o.value=r,o.value;{const c=mt(n);return o.value=o.value===c?mt(s):c,o.value}}return i?l:[o,l]}var Xl=Object.getOwnPropertySymbols,kg=Object.prototype.hasOwnProperty,xg=Object.prototype.propertyIsEnumerable,Cg=(e,t)=>{var n={};for(var s in e)kg.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Xl)for(var s of Xl(e))t.indexOf(s)<0&&xg.call(e,s)&&(n[s]=e[s]);return n};function $g(e,t,n={}){const s=n,{eventFilter:i=_d}=s,o=Cg(s,["eventFilter"]);return Ve(e,lg(i,t),o)}var Ig=Object.defineProperty,Mg=Object.defineProperties,Ag=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,xd=Object.prototype.hasOwnProperty,Cd=Object.prototype.propertyIsEnumerable,er=(e,t,n)=>t in e?Ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sg=(e,t)=>{for(var n in t||(t={}))xd.call(t,n)&&er(e,n,t[n]);if(Gi)for(var n of Gi(t))Cd.call(t,n)&&er(e,n,t[n]);return e},Lg=(e,t)=>Mg(e,Ag(t)),Bg=(e,t)=>{var n={};for(var s in e)xd.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Gi)for(var s of Gi(e))t.indexOf(s)<0&&Cd.call(e,s)&&(n[s]=e[s]);return n};function Eg(e,t,n={}){const s=n,{eventFilter:i}=s,o=Bg(s,["eventFilter"]),{eventFilter:l,pause:r,resume:c,isActive:d}=rg(i);return{stop:$g(e,t,Lg(Sg({},o),{eventFilter:l})),pause:r,resume:c,isActive:d}}function At(e){var t;const n=mt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const vt=cn?window:void 0,Dg=cn?window.document:void 0,Tg=cn?window.navigator:void 0;function He(...e){let t,n,s,i;if(yd(e[0])||Array.isArray(e[0])?([n,s,i]=e,t=vt):[t,n,s,i]=e,!t)return Vs;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},r=(u,p,h)=>(u.addEventListener(p,h,i),()=>u.removeEventListener(p,h,i)),c=Ve(()=>At(t),u=>{l(),u&&o.push(...n.flatMap(p=>s.map(h=>r(u,p,h))))},{immediate:!0,flush:"post"}),d=()=>{c(),l()};return Is(d),d}function Pg(e,t,n={}){const{window:s=vt,ignore:i=[],capture:o=!0,detectIframe:l=!1}=n;if(!s)return;let r=!0,c;const d=v=>i.some(y=>{if(typeof y=="string")return Array.from(s.document.querySelectorAll(y)).some(b=>b===v.target||v.composedPath().includes(b));{const b=At(y);return b&&(v.target===b||v.composedPath().includes(b))}}),u=v=>{s.clearTimeout(c);const y=At(e);if(!(!y||y===v.target||v.composedPath().includes(y))){if(v.detail===0&&(r=!d(v)),!r){r=!0;return}t(v)}},p=[He(s,"click",u,{passive:!0,capture:o}),He(s,"pointerdown",v=>{const y=At(e);y&&(r=!v.composedPath().includes(y)&&!d(v))},{passive:!0}),He(s,"pointerup",v=>{if(v.button===0){const y=v.composedPath();v.composedPath=()=>y,c=s.setTimeout(()=>u(v),50)}},{passive:!0}),l&&He(s,"blur",v=>{var y;const b=At(e);((y=s.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(b!=null&&b.contains(s.document.activeElement))&&t(v)})].filter(Boolean);return()=>p.forEach(v=>v())}const Og=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function Fg(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:i=vt,eventName:o="keydown",passive:l=!1}=s,r=Og(t);return He(i,o,d=>{r(d)&&n(d)},l)}function Ng(e={}){var t;const{window:n=vt}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,i=ug(()=>null,()=>s==null?void 0:s.activeElement);return n&&(He(n,"blur",o=>{o.relatedTarget===null&&i.trigger()},!0),He(n,"focus",i.trigger,!0)),i}function fi(e,t=!1){const n=_e(),s=()=>n.value=Boolean(e());return s(),bd(s,t),n}function ps(e,t={}){const{window:n=vt}=t,s=fi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const o=_e(!1),l=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",r):i.removeListener(r))},r=()=>{s.value&&(l(),i=n.matchMedia(wd(e).value),o.value=i.matches,"addEventListener"in i?i.addEventListener("change",r):i.addListener(r))};return $s(r),Is(()=>l()),o}const Kg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Rg=Object.defineProperty,tr=Object.getOwnPropertySymbols,zg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,nr=(e,t,n)=>t in e?Rg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jg=(e,t)=>{for(var n in t||(t={}))zg.call(t,n)&&nr(e,n,t[n]);if(tr)for(var n of tr(t))Ug.call(t,n)&&nr(e,n,t[n]);return e};function Hg(e,t={}){function n(r,c){let d=e[r];return c!=null&&(d=dg(d,c)),typeof d=="number"&&(d=`${d}px`),d}const{window:s=vt}=t;function i(r){return s?s.matchMedia(r).matches:!1}const o=r=>ps(`(min-width: ${n(r)})`,t),l=Object.keys(e).reduce((r,c)=>(Object.defineProperty(r,c,{get:()=>o(c),enumerable:!0,configurable:!0}),r),{});return jg({greater(r){return ps(`(min-width: ${n(r,.1)})`,t)},greaterOrEqual:o,smaller(r){return ps(`(max-width: ${n(r,-.1)})`,t)},smallerOrEqual(r){return ps(`(max-width: ${n(r)})`,t)},between(r,c){return ps(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(r){return i(`(min-width: ${n(r,.1)})`)},isGreaterOrEqual(r){return i(`(min-width: ${n(r)})`)},isSmaller(r){return i(`(max-width: ${n(r,-.1)})`)},isSmallerOrEqual(r){return i(`(max-width: ${n(r)})`)},isInBetween(r,c){return i(`(min-width: ${n(r)}) and (max-width: ${n(c,-.1)})`)}},l)}function Vg(e={}){const{navigator:t=Tg,read:n=!1,source:s,copiedDuring:i=1500,legacy:o=!1}=e,l=["copy","cut"],r=fi(()=>t&&"clipboard"in t),c=T(()=>r.value||o),d=_e(""),u=_e(!1),p=bg(()=>u.value=!1,i);function h(){r.value?t.clipboard.readText().then($=>{d.value=$}):d.value=b()}if(c.value&&n)for(const $ of l)He($,h);async function v($=mt(s)){c.value&&$!=null&&(r.value?await t.clipboard.writeText($):y($),d.value=$,u.value=!0,p.start())}function y($){const L=document.createElement("textarea");L.value=$??"",L.style.position="absolute",L.style.opacity="0",document.body.appendChild(L),L.select(),document.execCommand("copy"),L.remove()}function b(){var $,L,A;return(A=(L=($=document==null?void 0:document.getSelection)==null?void 0:$.call(document))==null?void 0:L.toString())!=null?A:""}return{isSupported:c,text:d,copied:u,copy:v}}function Wg(e){return JSON.parse(JSON.stringify(e))}const ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ta="__vueuse_ssr_handlers__";ea[ta]=ea[ta]||{};const qg=ea[ta];function Gg(e,t){return qg[e]||t}function Yg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Zg=Object.defineProperty,sr=Object.getOwnPropertySymbols,Jg=Object.prototype.hasOwnProperty,Qg=Object.prototype.propertyIsEnumerable,ir=(e,t,n)=>t in e?Zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,or=(e,t)=>{for(var n in t||(t={}))Jg.call(t,n)&&ir(e,n,t[n]);if(sr)for(var n of sr(t))Qg.call(t,n)&&ir(e,n,t[n]);return e};const Xg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Kt(e,t,n,s={}){var i;const{flush:o="pre",deep:l=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:u,window:p=vt,eventFilter:h,onError:v=V=>{console.error(V)}}=s,y=(u?qt:_e)(t);if(!n)try{n=Gg("getDefaultStorage",()=>{var V;return(V=vt)==null?void 0:V.localStorage})()}catch(V){v(V)}if(!n)return y;const b=mt(t),$=Yg(b),L=(i=s.serializer)!=null?i:Xg[$],{pause:A,resume:B}=Eg(y,()=>E(y.value),{flush:o,deep:l,eventFilter:h});return p&&r&&He(p,"storage",G),G(),y;function E(V){try{if(V==null)n.removeItem(e);else{const j=L.write(V),se=n.getItem(e);se!==j&&(n.setItem(e,j),p&&(p==null||p.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:se,newValue:j,storageArea:n}))))}}catch(j){v(j)}}function q(V){const j=V?V.newValue:n.getItem(e);if(j==null)return c&&b!==null&&n.setItem(e,L.write(b)),b;if(!V&&d){const se=L.read(j);return qi(d)?d(se,b):$==="object"&&!Array.isArray(se)?or(or({},b),se):se}else return typeof j!="string"?j:L.read(j)}function G(V){if(!(V&&V.storageArea!==n)){if(V&&V.key==null){y.value=b;return}if(!(V&&V.key!==e)){A();try{y.value=q(V)}catch(j){v(j)}finally{V?Ft(B):B()}}}}}function ef(e){return ps("(prefers-color-scheme: dark)",e)}var tf=Object.defineProperty,nf=Object.defineProperties,sf=Object.getOwnPropertyDescriptors,ar=Object.getOwnPropertySymbols,of=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,lr=(e,t,n)=>t in e?tf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lf=(e,t)=>{for(var n in t||(t={}))of.call(t,n)&&lr(e,n,t[n]);if(ar)for(var n of ar(t))af.call(t,n)&&lr(e,n,t[n]);return e},rf=(e,t)=>nf(e,sf(t));function S5(e,t={}){var n,s,i;const o=(n=t.draggingElement)!=null?n:vt,l=(s=t.handle)!=null?s:e,r=_e((i=mt(t.initialValue))!=null?i:{x:0,y:0}),c=_e(),d=y=>t.pointerTypes?t.pointerTypes.includes(y.pointerType):!0,u=y=>{mt(t.preventDefault)&&y.preventDefault(),mt(t.stopPropagation)&&y.stopPropagation()},p=y=>{var b;if(!d(y)||mt(t.exact)&&y.target!==mt(e))return;const $=mt(e).getBoundingClientRect(),L={x:y.clientX-$.left,y:y.clientY-$.top};((b=t.onStart)==null?void 0:b.call(t,L,y))!==!1&&(c.value=L,u(y))},h=y=>{var b;d(y)&&c.value&&(r.value={x:y.clientX-c.value.x,y:y.clientY-c.value.y},(b=t.onMove)==null||b.call(t,r.value,y),u(y))},v=y=>{var b;d(y)&&c.value&&(c.value=void 0,(b=t.onEnd)==null||b.call(t,r.value,y),u(y))};return cn&&(He(l,"pointerdown",p,!0),He(o,"pointermove",h,!0),He(o,"pointerup",v,!0)),rf(lf({},wg(r)),{position:r,isDragging:T(()=>!!c.value),style:T(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var rr=Object.getOwnPropertySymbols,cf=Object.prototype.hasOwnProperty,df=Object.prototype.propertyIsEnumerable,uf=(e,t)=>{var n={};for(var s in e)cf.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&rr)for(var s of rr(e))t.indexOf(s)<0&&df.call(e,s)&&(n[s]=e[s]);return n};function pf(e,t,n={}){const s=n,{window:i=vt}=s,o=uf(s,["window"]);let l;const r=fi(()=>i&&"ResizeObserver"in i),c=()=>{l&&(l.disconnect(),l=void 0)},d=Ve(()=>At(e),p=>{c(),r.value&&i&&p&&(l=new ResizeObserver(t),l.observe(p,o))},{immediate:!0,flush:"post"}),u=()=>{c(),d()};return Is(u),{isSupported:r,stop:u}}function mf(e,t={width:0,height:0},n={}){const{window:s=vt,box:i="content-box"}=n,o=T(()=>{var c,d;return(d=(c=At(e))==null?void 0:c.namespaceURI)==null?void 0:d.includes("svg")}),l=_e(t.width),r=_e(t.height);return pf(e,([c])=>{const d=i==="border-box"?c.borderBoxSize:i==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&o.value){const u=At(e);if(u){const p=s.getComputedStyle(u);l.value=parseFloat(p.width),r.value=parseFloat(p.height)}}else if(d){const u=Array.isArray(d)?d:[d];l.value=u.reduce((p,{inlineSize:h})=>p+h,0),r.value=u.reduce((p,{blockSize:h})=>p+h,0)}else l.value=c.contentRect.width,r.value=c.contentRect.height},n),Ve(()=>At(e),c=>{l.value=c?t.width:0,r.value=c?t.height:0}),{width:l,height:r}}const cr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function hf(e,t={}){const{document:n=Dg,autoExit:s=!1}=t,i=e||(n==null?void 0:n.querySelector("html")),o=_e(!1);let l=cr[0];const r=fi(()=>{if(n){for(const b of cr)if(b[1]in n)return l=b,!0}else return!1;return!1}),[c,d,u,,p]=l;async function h(){r.value&&(n!=null&&n[u]&&await n[d](),o.value=!1)}async function v(){if(!r.value)return;await h();const b=At(i);b&&(await b[c](),o.value=!0)}async function y(){o.value?await h():await v()}return n&&He(n,p,()=>{o.value=!!(n!=null&&n[u])},!1),s&&Is(h),{isSupported:r,isFullscreen:o,enter:v,exit:h,toggle:y}}function L5(e,t,n={}){const{root:s,rootMargin:i="0px",threshold:o=.1,window:l=vt}=n,r=fi(()=>l&&"IntersectionObserver"in l);let c=Vs;const d=r.value?Ve(()=>({el:At(e),root:At(s)}),({el:p,root:h})=>{if(c(),!p)return;const v=new IntersectionObserver(t,{root:h,rootMargin:i,threshold:o});v.observe(p),c=()=>{v.disconnect(),c=Vs}},{immediate:!0,flush:"post"}):Vs,u=()=>{c(),d()};return Is(u),{isSupported:r,stop:u}}const gf={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function ff(e={}){const{reactive:t=!1,target:n=vt,aliasMap:s=gf,passive:i=!0,onEventFired:o=Vs}=e,l=et(new Set),r={toJSON(){return{}},current:l},c=t?et(r):r,d=new Set,u=new Set;function p(b,$){b in c&&(t?c[b]=$:c[b].value=$)}function h(){l.clear();for(const b of u)p(b,!1)}function v(b,$){var L,A;const B=(L=b.key)==null?void 0:L.toLowerCase(),q=[(A=b.code)==null?void 0:A.toLowerCase(),B].filter(Boolean);B&&($?l.add(B):l.delete(B));for(const G of q)u.add(G),p(G,$);B==="meta"&&!$?(d.forEach(G=>{l.delete(G),p(G,!1)}),d.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&$&&[...l,...q].forEach(G=>d.add(G))}He(n,"keydown",b=>(v(b,!0),o(b)),{passive:i}),He(n,"keyup",b=>(v(b,!1),o(b)),{passive:i}),He("blur",h,{passive:!0}),He("focus",h,{passive:!0});const y=new Proxy(c,{get(b,$,L){if(typeof $!="string")return Reflect.get(b,$,L);if($=$.toLowerCase(),$ in s&&($=s[$]),!($ in c))if(/[+_-]/.test($)){const B=$.split(/[+_-]/g).map(E=>E.trim());c[$]=T(()=>B.every(E=>g(y[E])))}else c[$]=_e(!1);const A=Reflect.get(b,$,L);return t?g(A):A}});return y}var sn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(sn||(sn={}));function vf(e,t={}){const n=wd(e),{threshold:s=50,onSwipe:i,onSwipeEnd:o,onSwipeStart:l}=t,r=et({x:0,y:0}),c=(G,V)=>{r.x=G,r.y=V},d=et({x:0,y:0}),u=(G,V)=>{d.x=G,d.y=V},p=T(()=>r.x-d.x),h=T(()=>r.y-d.y),{max:v,abs:y}=Math,b=T(()=>v(y(p.value),y(h.value))>=s),$=_e(!1),L=_e(!1),A=T(()=>b.value?y(p.value)>y(h.value)?p.value>0?sn.LEFT:sn.RIGHT:h.value>0?sn.UP:sn.DOWN:sn.NONE),B=G=>{var V,j,se;const re=G.buttons===0,ge=G.buttons===1;return(se=(j=(V=t.pointerTypes)==null?void 0:V.includes(G.pointerType))!=null?j:re||ge)!=null?se:!0},E=[He(e,"pointerdown",G=>{var V,j;if(!B(G))return;L.value=!0,(j=(V=n.value)==null?void 0:V.style)==null||j.setProperty("touch-action","none");const se=G.target;se==null||se.setPointerCapture(G.pointerId);const{clientX:re,clientY:ge}=G;c(re,ge),u(re,ge),l==null||l(G)}),He(e,"pointermove",G=>{if(!B(G)||!L.value)return;const{clientX:V,clientY:j}=G;u(V,j),!$.value&&b.value&&($.value=!0),$.value&&(i==null||i(G))}),He(e,"pointerup",G=>{var V,j;B(G)&&($.value&&(o==null||o(G,A.value)),L.value=!1,$.value=!1,(j=(V=n.value)==null?void 0:V.style)==null||j.setProperty("touch-action","initial"))})],q=()=>E.forEach(G=>G());return{isSwiping:bn($),direction:bn(A),posStart:bn(r),posEnd:bn(d),distanceX:p,distanceY:h,stop:q}}var yf=Object.defineProperty,dr=Object.getOwnPropertySymbols,_f=Object.prototype.hasOwnProperty,wf=Object.prototype.propertyIsEnumerable,ur=(e,t,n)=>t in e?yf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bf=(e,t)=>{for(var n in t||(t={}))_f.call(t,n)&&ur(e,n,t[n]);if(dr)for(var n of dr(t))wf.call(t,n)&&ur(e,n,t[n]);return e};const kf={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};bf({linear:cg},kf);function Ht(e,t,n,s={}){var i,o,l;const{clone:r=!1,passive:c=!1,eventName:d,deep:u=!1,defaultValue:p}=s,h=Yt(),v=n||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((l=(o=h==null?void 0:h.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let y=d;t||(t="modelValue"),y=d||y||`update:${t.toString()}`;const b=L=>r?qi(r)?r(L):Wg(L):L,$=()=>ig(e[t])?b(e[t]):p;if(c){const L=$(),A=_e(L);return Ve(()=>e[t],B=>A.value=b(B)),Ve(A,B=>{(B!==e[t]||u)&&v(y,B)},{deep:u}),A}else return T({get(){return $()},set(L){v(y,L)}})}function xf(e={}){const{window:t=vt,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:i=!0,includeScrollbar:o=!0}=e,l=_e(n),r=_e(s),c=()=>{t&&(o?(l.value=t.innerWidth,r.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};return c(),bd(c),He("resize",c,{passive:!0}),i&&He("orientationchange",c,{passive:!0}),{width:l,height:r}}function Cf(){return $d().__VUE_DEVTOOLS_GLOBAL_HOOK__}function $d(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const $f=typeof Proxy=="function",If="devtools-plugin:setup",Mf="plugin:settings:set";let as,na;function Af(){var e;return as!==void 0||(typeof window<"u"&&window.performance?(as=!0,na=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(as=!0,na=global.perf_hooks.performance):as=!1),as}function Sf(){return Af()?na.now():Date.now()}class Lf{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const l in t.settings){const r=t.settings[l];s[l]=r.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},s);try{const l=localStorage.getItem(i),r=JSON.parse(l);Object.assign(o,r)}catch{}this.fallbacks={getSettings(){return o},setSettings(l){try{localStorage.setItem(i,JSON.stringify(l))}catch{}o=l},now(){return Sf()}},n&&n.on(Mf,(l,r)=>{l===this.plugin.id&&this.fallbacks.setSettings(r)}),this.proxiedOn=new Proxy({},{get:(l,r)=>this.target?this.target.on[r]:(...c)=>{this.onQueue.push({method:r,args:c})}}),this.proxiedTarget=new Proxy({},{get:(l,r)=>this.target?this.target[r]:r==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(r)?(...c)=>(this.targetQueue.push({method:r,args:c,resolve:()=>{}}),this.fallbacks[r](...c)):(...c)=>new Promise(d=>{this.targetQueue.push({method:r,args:c,resolve:d})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Bf(e,t){const n=e,s=$d(),i=Cf(),o=$f&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))i.emit(If,e,t);else{const l=o?new Lf(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:l}),l&&t(l.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function Ef(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Ao(e,t){const n={};for(const s in t){const i=t[s];n[s]=xt(i)?i.map(e):e(i)}return n}const Ws=()=>{},xt=Array.isArray;function Me(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const Df=/\/$/,Tf=e=>e.replace(Df,"");function So(e,t,n="/"){let s,i={},o="",l="";const r=t.indexOf("#");let c=t.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,r>-1?r:t.length),i=e(o)),r>-1&&(s=s||t.slice(0,r),l=t.slice(r,t.length)),s=Ff(s??t,n),{fullPath:s+(o&&"?")+o+l,path:s,query:i,hash:l}}function Pf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mr(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&En(t.matched[s],n.matched[i])&&Id(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function En(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Id(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Of(e[n],t[n]))return!1;return!0}function Of(e,t){return xt(e)?hr(e,t):xt(t)?hr(t,e):e===t}function hr(e,t){return xt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Ff(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Me(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var si;(function(e){e.pop="pop",e.push="push"})(si||(si={}));var qs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qs||(qs={}));function Nf(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tf(e)}const Kf=/^[^#]+#/;function Rf(e,t){return e.replace(Kf,"#")+t}function zf(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const go=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uf(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const o=document.querySelector(e.el);if(s&&o){Me(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Me(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){Me(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=zf(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function gr(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function jf(e,t){sa.set(e,t)}function Hf(e){const t=sa.get(e);return sa.delete(e),t}let Vf=()=>location.protocol+"//"+location.host;function Md(e,t){const{pathname:n,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){let r=i.includes(e.slice(o))?e.slice(o).length:1,c=i.slice(r);return c[0]!=="/"&&(c="/"+c),pr(c,"")}return pr(n,e)+s+i}function Wf(e,t,n,s){let i=[],o=[],l=null;const r=({state:h})=>{const v=Md(e,location),y=n.value,b=t.value;let $=0;if(h){if(n.value=v,t.value=h,l&&l===y){l=null;return}$=b?h.position-b.position:0}else s(v);i.forEach(L=>{L(n.value,y,{delta:$,type:si.pop,direction:$?$>0?qs.forward:qs.back:qs.unknown})})};function c(){l=n.value}function d(h){i.push(h);const v=()=>{const y=i.indexOf(h);y>-1&&i.splice(y,1)};return o.push(v),v}function u(){const{history:h}=window;h.state&&h.replaceState(Se({},h.state,{scroll:go()}),"")}function p(){for(const h of o)h();o=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:d,destroy:p}}function fr(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?go():null}}function qf(e){const{history:t,location:n}=window,s={value:Md(e,n)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,d,u){const p=e.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:Vf()+e+c;try{t[u?"replaceState":"pushState"](d,"",h),i.value=d}catch(v){Me("Error with push/replace State",v),n[u?"replace":"assign"](h)}}function l(c,d){const u=Se({},t.state,fr(i.value.back,c,i.value.forward,!0),d,{position:i.value.position});o(c,u,!0),s.value=c}function r(c,d){const u=Se({},i.value,t.state,{forward:c,scroll:go()});t.state||Me(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(u.current,u,!0);const p=Se({},fr(s.value,c,null),{position:u.position+1},d);o(c,p,!1),s.value=c}return{location:s,state:i,push:r,replace:l}}function Gf(e){e=Nf(e);const t=qf(e),n=Wf(e,t.state,t.location,t.replace);function s(o,l=!0){l||n.pauseListeners(),history.go(o)}const i=Se({location:"",base:e,go:s,createHref:Rf.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Yf(e){return typeof e=="string"||e&&typeof e=="object"}function Ad(e){return typeof e=="string"||typeof e=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sd=Symbol("navigation failure");var vr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vr||(vr={}));const Zf={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Qf(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ks(e,t){return Se(new Error(Zf[e](t)),{type:e,[Sd]:!0},t)}function Zt(e,t){return e instanceof Error&&Sd in e&&(t==null||!!(e.type&t))}const Jf=["params","query","hash"];function Qf(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of Jf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const yr="[^/]+?",Xf={sensitive:!1,strict:!1,start:!0,end:!0},ev=/[.+*?^${}()[\]/\\]/g;function tv(e,t){const n=Se({},Xf,t),s=[];let i=n.start?"^":"";const o=[];for(const d of e){const u=d.length?[]:[90];n.strict&&!d.length&&(i+="/");for(let p=0;p<d.length;p++){const h=d[p];let v=40+(n.sensitive?.25:0);if(h.type===0)p||(i+="/"),i+=h.value.replace(ev,"\\$&"),v+=40;else if(h.type===1){const{value:y,repeatable:b,optional:$,regexp:L}=h;o.push({name:y,repeatable:b,optional:$});const A=L||yr;if(A!==yr){v+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+E.message)}}let B=b?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(B=$&&d.length<2?`(?:/${B})`:"/"+B),$&&(B+="?"),i+=B,v+=20,$&&(v+=-8),b&&(v+=-20),A===".*"&&(v+=-50)}u.push(v)}s.push(u)}if(n.strict&&n.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const l=new RegExp(i,n.sensitive?"":"i");function r(d){const u=d.match(l),p={};if(!u)return null;for(let h=1;h<u.length;h++){const v=u[h]||"",y=o[h-1];p[y.name]=v&&y.repeatable?v.split("/"):v}return p}function c(d){let u="",p=!1;for(const h of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const v of h)if(v.type===0)u+=v.value;else if(v.type===1){const{value:y,repeatable:b,optional:$}=v,L=y in d?d[y]:"";if(xt(L)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=xt(L)?L.join("/"):L;if(!A)if($)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);u+=A}}return u||"/"}return{re:l,score:s,keys:o,parse:r,stringify:c}}function nv(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function sv(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const o=nv(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(_r(s))return 1;if(_r(i))return-1}return i.length-s.length}function _r(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const iv={type:0,value:""},ov=/[a-zA-Z0-9_]/;function av(e){if(!e)return[[]];if(e==="/")return[[iv]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(v){throw new Error(`ERR (${n})/"${d}": ${v}`)}let n=0,s=n;const i=[];let o;function l(){o&&i.push(o),o=[]}let r=0,c,d="",u="";function p(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(d&&p(),l()):c===":"?(p(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:ov.test(c)?h():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),p(),l(),i}function lv(e,t,n){const s=tv(av(e.path),n);{const o=new Set;for(const l of s.keys)o.has(l.name)&&Me(`Found duplicated params with name "${l.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),o.add(l.name)}const i=Se(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function rv(e,t){const n=[],s=new Map;t=kr({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function o(u,p,h){const v=!h,y=cv(u);mv(y,p),y.aliasOf=h&&h.record;const b=kr(t,u),$=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of B)$.push(Se({},y,{components:h?h.record.components:y.components,path:E,aliasOf:h?h.record:y}))}let L,A;for(const B of $){const{path:E}=B;if(p&&E[0]!=="/"){const q=p.record.path,G=q[q.length-1]==="/"?"":"/";B.path=p.record.path+(E&&G+E)}if(B.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(L=lv(B,p,b),p&&E[0]==="/"&&hv(L,p),h?(h.alias.push(L),pv(h,L)):(A=A||L,A!==L&&A.alias.push(L),v&&u.name&&!br(L)&&l(u.name)),y.children){const q=y.children;for(let G=0;G<q.length;G++)o(q[G],L,h&&h.children[G])}h=h||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&c(L)}return A?()=>{l(A)}:Ws}function l(u){if(Ad(u)){const p=s.get(u);p&&(s.delete(u),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=n.indexOf(u);p>-1&&(n.splice(p,1),u.record.name&&s.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function r(){return n}function c(u){let p=0;for(;p<n.length&&sv(u,n[p])>=0&&(u.record.path!==n[p].record.path||!Ld(u,n[p]));)p++;n.splice(p,0,u),u.record.name&&!br(u)&&s.set(u.record.name,u)}function d(u,p){let h,v={},y,b;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw ks(1,{location:u});{const A=Object.keys(u.params||{}).filter(B=>!h.keys.find(E=>E.name===B));A.length&&Me(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=h.record.name,v=Se(wr(p.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&wr(u.params,h.keys.map(A=>A.name))),y=h.stringify(v)}else if("path"in u)y=u.path,y.startsWith("/")||Me(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=n.find(A=>A.re.test(y)),h&&(v=h.parse(y),b=h.record.name);else{if(h=p.name?s.get(p.name):n.find(A=>A.re.test(p.path)),!h)throw ks(1,{location:u,currentLocation:p});b=h.record.name,v=Se({},p.params,u.params),y=h.stringify(v)}const $=[];let L=h;for(;L;)$.unshift(L.record),L=L.parent;return{name:b,path:y,params:v,matched:$,meta:uv($)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:d,removeRoute:l,getRoutes:r,getRecordMatcher:i}}function wr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function cv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:dv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function dv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function br(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function uv(e){return e.reduce((t,n)=>Se(t,n.meta),{})}function kr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ia(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function pv(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ia.bind(null,n)))return Me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ia.bind(null,n)))return Me(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function mv(e,t){t&&t.record.name&&!e.name&&!e.path&&Me(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function hv(e,t){for(const n of t.keys)if(!e.keys.find(ia.bind(null,n)))return Me(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Ld(e,t){return t.children.some(n=>n===e||Ld(e,n))}const Bd=/#/g,gv=/&/g,fv=/\//g,vv=/=/g,yv=/\?/g,Ed=/\+/g,_v=/%5B/g,wv=/%5D/g,Dd=/%5E/g,bv=/%60/g,Td=/%7B/g,kv=/%7C/g,Pd=/%7D/g,xv=/%20/g;function ja(e){return encodeURI(""+e).replace(kv,"|").replace(_v,"[").replace(wv,"]")}function Cv(e){return ja(e).replace(Td,"{").replace(Pd,"}").replace(Dd,"^")}function oa(e){return ja(e).replace(Ed,"%2B").replace(xv,"+").replace(Bd,"%23").replace(gv,"%26").replace(bv,"`").replace(Td,"{").replace(Pd,"}").replace(Dd,"^")}function $v(e){return oa(e).replace(vv,"%3D")}function Iv(e){return ja(e).replace(Bd,"%23").replace(yv,"%3F")}function Mv(e){return e==null?"":Iv(e).replace(fv,"%2F")}function ii(e){try{return decodeURIComponent(""+e)}catch{Me(`Error decoding "${e}". Using original value`)}return""+e}function Av(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(Ed," "),l=o.indexOf("="),r=ii(l<0?o:o.slice(0,l)),c=l<0?null:ii(o.slice(l+1));if(r in t){let d=t[r];xt(d)||(d=t[r]=[d]),d.push(c)}else t[r]=c}return t}function xr(e){let t="";for(let n in e){const s=e[n];if(n=$v(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(xt(s)?s.map(o=>o&&oa(o)):[s&&oa(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Sv(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=xt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Lv=Symbol("router view location matched"),Cr=Symbol("router view depth"),Ha=Symbol("router"),Od=Symbol("route location"),aa=Symbol("router view location");function Ds(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function vn(e,t,n,s,i){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,r)=>{const c=p=>{p===!1?r(ks(4,{from:n,to:t})):p instanceof Error?r(p):Yf(p)?r(ks(2,{from:t,to:p})):(o&&s.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),l())},d=e.call(s&&s.instances[i],t,n,Bv(c,t,n));let u=Promise.resolve(d);if(e.length<3&&(u=u.then(c)),e.length>2){const p=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)u=u.then(h=>c._called?h:(Me(p),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!c._called){Me(p),r(new Error("Invalid navigation guard"));return}}u.catch(p=>r(p))})}function Bv(e,t,n){let s=0;return function(){s++===1&&Me(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Lo(e,t,n,s){const i=[];for(const o of e){!o.components&&!o.children.length&&Me(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const l in o.components){let r=o.components[l];{if(!r||typeof r!="object"&&typeof r!="function")throw Me(`Component "${l}" in record with path "${o.path}" is not a valid component. Received "${String(r)}".`),new Error("Invalid route component");if("then"in r){Me(`Component "${l}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=r;r=()=>c}else r.__asyncLoader&&!r.__warnedDefineAsync&&(r.__warnedDefineAsync=!0,Me(`Component "${l}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Ev(r)){const d=(r.__vccOpts||r)[t];d&&i.push(vn(d,n,s,o,l))}else{let c=r();"catch"in c||(Me(`Component "${l}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),i.push(()=>c.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const u=Ef(d)?d.default:d;o.components[l]=u;const h=(u.__vccOpts||u)[t];return h&&vn(h,n,s,o,l)()}))}}}return i}function Ev(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $r(e){const t=O(Ha),n=O(Od),s=T(()=>t.resolve(g(e.to))),i=T(()=>{const{matched:c}=s.value,{length:d}=c,u=c[d-1],p=n.matched;if(!u||!p.length)return-1;const h=p.findIndex(En.bind(null,u));if(h>-1)return h;const v=Ir(c[d-2]);return d>1&&Ir(u)===v&&p[p.length-1].path!==v?p.findIndex(En.bind(null,c[d-2])):h}),o=T(()=>i.value>-1&&Ov(n.params,s.value.params)),l=T(()=>i.value>-1&&i.value===n.matched.length-1&&Id(n.params,s.value.params));function r(c={}){return Pv(c)?t[g(e.replace)?"replace":"push"](g(e.to)).catch(Ws):Promise.resolve()}if(tn){const c=Yt();if(c){const d={route:s.value,isActive:o.value,isExactActive:l.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(d),$s(()=>{d.route=s.value,d.isActive=o.value,d.isExactActive=l.value},{flush:"post"})}}return{route:s,href:T(()=>s.value.href),isActive:o,isExactActive:l,navigate:r}}const Dv=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$r,setup(e,{slots:t}){const n=et($r(e)),{options:s}=O(Ha),i=T(()=>({[Mr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Bn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Tv=Dv;function Pv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ov(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!xt(i)||i.length!==s.length||s.some((o,l)=>o!==i[l]))return!1}return!0}function Ir(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Mr=(e,t,n)=>e??t??n,Fv=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){Kv();const s=O(aa),i=T(()=>e.route||s.value),o=O(Cr,0),l=T(()=>{let d=g(o);const{matched:u}=i.value;let p;for(;(p=u[d])&&!p.components;)d++;return d}),r=T(()=>i.value.matched[l.value]);bt(Cr,T(()=>l.value+1)),bt(Lv,r),bt(aa,i);const c=_e();return Ve(()=>[c.value,r.value,e.name],([d,u,p],[h,v,y])=>{u&&(u.instances[p]=d,v&&v!==u&&d&&d===h&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!En(u,v)||!h)&&(u.enterCallbacks[p]||[]).forEach(b=>b(d))},{flush:"post"}),()=>{const d=i.value,u=e.name,p=r.value,h=p&&p.components[u];if(!h)return Ar(n.default,{Component:h,route:d});const v=p.props[u],y=v?v===!0?d.params:typeof v=="function"?v(d):v:null,$=Bn(h,Se({},y,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[u]=null)},ref:c}));if(tn&&$.ref){const L={depth:l.value,name:p.name,path:p.path,meta:p.meta};(xt($.ref)?$.ref.map(B=>B.i):[$.ref.i]).forEach(B=>{B.__vrv_devtools=L})}return Ar(n.default,{Component:$,route:d})||$}}});function Ar(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nv=Fv;function Kv(){const e=Yt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Me(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ts(e,t){const n=Se({},e,{matched:e.matched.map(s=>Gv(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function Ii(e){return{_custom:{display:e}}}let Rv=0;function zv(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=Rv++;Bf({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((u,p)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ts(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:u,componentInstance:p})=>{if(p.__vrv_devtools){const h=p.__vrv_devtools;u.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Fd})}xt(p.__vrl_devtools)&&(p.__devtoolsApi=i,p.__vrl_devtools.forEach(h=>{let v=Rd,y="";h.isExactActive?(v=Kd,y="This is exactly active"):h.isActive&&(v=Nd,y="This link is active"),u.tags.push({label:h.route.path,textColor:0,tooltip:y,backgroundColor:v})}))}),Ve(t.currentRoute,()=>{c(),i.notifyComponentUpdate(),i.sendInspectorTree(r),i.sendInspectorState(r)});const o="router:navigations:"+s;i.addTimelineLayer({id:o,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((u,p)=>{i.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:i.now(),data:{error:u},groupId:p.meta.__navigationId}})});let l=0;t.beforeEach((u,p)=>{const h={guard:Ii("beforeEach"),from:Ts(p,"Current Location during this navigation"),to:Ts(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:l++}),i.addTimelineEvent({layerId:o,event:{time:i.now(),title:"Start of navigation",subtitle:u.fullPath,data:h,groupId:u.meta.__navigationId}})}),t.afterEach((u,p,h)=>{const v={guard:Ii("afterEach")};h?(v.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},v.status=Ii("❌")):v.status=Ii("✅"),v.from=Ts(p,"Current Location during this navigation"),v.to=Ts(u,"Target location"),i.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:u.fullPath,time:i.now(),data:v,logType:h?"warning":"default",groupId:u.meta.__navigationId}})});const r="router-inspector:"+s;i.addInspector({id:r,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!d)return;const u=d;let p=n.getRoutes().filter(h=>!h.parent);p.forEach(jd),u.filter&&(p=p.filter(h=>la(h,u.filter.toLowerCase()))),p.forEach(h=>Ud(h,t.currentRoute.value)),u.rootNodes=p.map(zd)}let d;i.on.getInspectorTree(u=>{d=u,u.app===e&&u.inspectorId===r&&c()}),i.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===r){const h=n.getRoutes().find(v=>v.record.__vd_id===u.nodeId);h&&(u.state={options:jv(h)})}}),i.sendInspectorTree(r),i.sendInspectorState(r)})}function Uv(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function jv(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${Uv(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Fd=15485081,Nd=2450411,Kd=8702998,Hv=2282478,Rd=16486972,Vv=6710886;function zd(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Hv}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Rd}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Fd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Kd}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Nd}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Vv});let s=n.__vd_id;return s==null&&(s=String(Wv++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(zd)}}let Wv=0;const qv=/^\/(.*)\/([a-z]*)$/;function Ud(e,t){const n=t.matched.length&&En(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>En(s,e.record))),e.children.forEach(s=>Ud(s,t))}function jd(e){e.__vd_match=!1,e.children.forEach(jd)}function la(e,t){const n=String(e.re).match(qv);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(l=>la(l,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const i=e.record.path.toLowerCase(),o=ii(i);return!t.startsWith("/")&&(o.includes(t)||i.includes(t))||o.startsWith(t)||i.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(l=>la(l,t))}function Gv(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function Yv(e){const t=rv(e.routes,e),n=e.parseQuery||Av,s=e.stringifyQuery||xr,i=e.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=Ds(),l=Ds(),r=Ds(),c=qt(mn);let d=mn;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ao.bind(null,S=>""+S),p=Ao.bind(null,Mv),h=Ao.bind(null,ii);function v(S,te){let Z,ne;return Ad(S)?(Z=t.getRecordMatcher(S),ne=te):ne=S,t.addRoute(ne,Z)}function y(S){const te=t.getRecordMatcher(S);te?t.removeRoute(te):Me(`Cannot remove non-existent route "${String(S)}"`)}function b(){return t.getRoutes().map(S=>S.record)}function $(S){return!!t.getRecordMatcher(S)}function L(S,te){if(te=Se({},te||c.value),typeof S=="string"){const he=So(n,S,te.path),f=t.resolve({path:he.path},te),w=i.createHref(he.fullPath);return w.startsWith("//")?Me(`Location "${S}" resolved to "${w}". A resolved location cannot start with multiple slashes.`):f.matched.length||Me(`No match found for location with path "${S}"`),Se(he,f,{params:h(f.params),hash:ii(he.hash),redirectedFrom:void 0,href:w})}let Z;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&Me(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Z=Se({},S,{path:So(n,S.path,te.path).path});else{const he=Se({},S.params);for(const f in he)he[f]==null&&delete he[f];Z=Se({},S,{params:p(S.params)}),te.params=p(te.params)}const ne=t.resolve(Z,te),xe=S.hash||"";xe&&!xe.startsWith("#")&&Me(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),ne.params=u(h(ne.params));const Ie=Pf(s,Se({},S,{hash:Cv(xe),path:ne.path})),we=i.createHref(Ie);return we.startsWith("//")?Me(`Location "${S}" resolved to "${we}". A resolved location cannot start with multiple slashes.`):ne.matched.length||Me(`No match found for location with path "${"path"in S?S.path:S}"`),Se({fullPath:Ie,hash:xe,query:s===xr?Sv(S.query):S.query||{}},ne,{redirectedFrom:void 0,href:we})}function A(S){return typeof S=="string"?So(n,S,c.value.path):Se({},S)}function B(S,te){if(d!==S)return ks(8,{from:te,to:S})}function E(S){return V(S)}function q(S){return E(Se(A(S),{replace:!0}))}function G(S){const te=S.matched[S.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let ne=typeof Z=="function"?Z(S):Z;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=A(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw Me(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Se({query:S.query,hash:S.hash,params:"path"in ne?{}:S.params},ne)}}function V(S,te){const Z=d=L(S),ne=c.value,xe=S.state,Ie=S.force,we=S.replace===!0,he=G(Z);if(he)return V(Se(A(he),{state:typeof he=="object"?Se({},xe,he.state):xe,force:Ie,replace:we}),te||Z);const f=Z;f.redirectedFrom=te;let w;return!Ie&&mr(s,ne,Z)&&(w=ks(16,{to:f,from:ne}),Te(ne,ne,!0,!1)),(w?Promise.resolve(w):se(f,ne)).catch(M=>Zt(M)?Zt(M,2)?M:ke(M):ee(M,f,ne)).then(M=>{if(M){if(Zt(M,2))return mr(s,L(M.to),f)&&te&&(te._count=te._count?te._count+1:1)>10?(Me(`Detected an infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V(Se({replace:we},A(M.to),{state:typeof M.to=="object"?Se({},xe,M.to.state):xe,force:Ie}),te||f)}else M=ge(f,ne,!0,we,xe);return re(f,ne,M),M})}function j(S,te){const Z=B(S,te);return Z?Promise.reject(Z):Promise.resolve()}function se(S,te){let Z;const[ne,xe,Ie]=Zv(S,te);Z=Lo(ne.reverse(),"beforeRouteLeave",S,te);for(const he of ne)he.leaveGuards.forEach(f=>{Z.push(vn(f,S,te))});const we=j.bind(null,S,te);return Z.push(we),ls(Z).then(()=>{Z=[];for(const he of o.list())Z.push(vn(he,S,te));return Z.push(we),ls(Z)}).then(()=>{Z=Lo(xe,"beforeRouteUpdate",S,te);for(const he of xe)he.updateGuards.forEach(f=>{Z.push(vn(f,S,te))});return Z.push(we),ls(Z)}).then(()=>{Z=[];for(const he of S.matched)if(he.beforeEnter&&!te.matched.includes(he))if(xt(he.beforeEnter))for(const f of he.beforeEnter)Z.push(vn(f,S,te));else Z.push(vn(he.beforeEnter,S,te));return Z.push(we),ls(Z)}).then(()=>(S.matched.forEach(he=>he.enterCallbacks={}),Z=Lo(Ie,"beforeRouteEnter",S,te),Z.push(we),ls(Z))).then(()=>{Z=[];for(const he of l.list())Z.push(vn(he,S,te));return Z.push(we),ls(Z)}).catch(he=>Zt(he,8)?he:Promise.reject(he))}function re(S,te,Z){for(const ne of r.list())ne(S,te,Z)}function ge(S,te,Z,ne,xe){const Ie=B(S,te);if(Ie)return Ie;const we=te===mn,he=tn?history.state:{};Z&&(ne||we?i.replace(S.fullPath,Se({scroll:we&&he&&he.scroll},xe)):i.push(S.fullPath,xe)),c.value=S,Te(S,te,Z,we),ke()}let X;function me(){X||(X=i.listen((S,te,Z)=>{if(!dn.listening)return;const ne=L(S),xe=G(ne);if(xe){V(Se(xe,{replace:!0}),ne).catch(Ws);return}d=ne;const Ie=c.value;tn&&jf(gr(Ie.fullPath,Z.delta),go()),se(ne,Ie).catch(we=>Zt(we,12)?we:Zt(we,2)?(V(we.to,ne).then(he=>{Zt(he,20)&&!Z.delta&&Z.type===si.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(Z.delta&&i.go(-Z.delta,!1),ee(we,ne,Ie))).then(we=>{we=we||ge(ne,Ie,!1),we&&(Z.delta&&!Zt(we,8)?i.go(-Z.delta,!1):Z.type===si.pop&&Zt(we,20)&&i.go(-1,!1)),re(ne,Ie,we)}).catch(Ws)}))}let Re=Ds(),Je=Ds(),Fe;function ee(S,te,Z){ke(S);const ne=Je.list();return ne.length?ne.forEach(xe=>xe(S,te,Z)):(Me("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function pe(){return Fe&&c.value!==mn?Promise.resolve():new Promise((S,te)=>{Re.add([S,te])})}function ke(S){return Fe||(Fe=!S,me(),Re.list().forEach(([te,Z])=>S?Z(S):te()),Re.reset()),S}function Te(S,te,Z,ne){const{scrollBehavior:xe}=e;if(!tn||!xe)return Promise.resolve();const Ie=!Z&&Hf(gr(S.fullPath,0))||(ne||!Z)&&history.state&&history.state.scroll||null;return Ft().then(()=>xe(S,te,Ie)).then(we=>we&&Uf(we)).catch(we=>ee(we,S,te))}const yt=S=>i.go(S);let tt;const pt=new Set,dn={currentRoute:c,listening:!0,addRoute:v,removeRoute:y,hasRoute:$,getRoutes:b,resolve:L,options:e,push:E,replace:q,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:o.add,beforeResolve:l.add,afterEach:r.add,onError:Je.add,isReady:pe,install(S){const te=this;S.component("RouterLink",Tv),S.component("RouterView",Nv),S.config.globalProperties.$router=te,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>g(c)}),tn&&!tt&&c.value===mn&&(tt=!0,E(i.location).catch(xe=>{Me("Unexpected error when starting the router:",xe)}));const Z={};for(const xe in mn)Z[xe]=T(()=>c.value[xe]);S.provide(Ha,te),S.provide(Od,et(Z)),S.provide(aa,c);const ne=S.unmount;pt.add(S),S.unmount=function(){pt.delete(S),pt.size<1&&(d=mn,X&&X(),X=null,c.value=mn,tt=!1,Fe=!1),ne()},tn&&zv(S,te,t)}};return dn}function ls(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Zv(e,t){const n=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let l=0;l<o;l++){const r=t.matched[l];r&&(e.matched.find(d=>En(d,r))?s.push(r):n.push(r));const c=e.matched[l];c&&(t.matched.find(d=>En(d,c))||i.push(c))}return[n,s,i]}const Bo=_e(!1),Gs=_e(!1),hs=_e(!1),Jv=_e(!0),ra=Hg({xs:460,...Kg}),Yn=xf(),Hd=ff(),Qv=T(()=>Yn.height.value-Yn.width.value/Cn>180),Vd=hf(cn?document.body:null),_s=Ng(),Xv=T(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=_s.value)==null?void 0:e.tagName)||"")||((t=_s.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),e0=T(()=>{var e;return["BUTTON","A"].includes(((e=_s.value)==null?void 0:e.tagName)||"")});Kt("slidev-camera","default");Kt("slidev-mic","default");const Di=Kt("slidev-scale",0),rt=Kt("slidev-show-overview",!1),Eo=Kt("slidev-presenter-cursor",!0),Sr=Kt("slidev-show-editor",!1);Kt("slidev-editor-width",cn?window.innerWidth*.4:100);const Wd=kd(rt);function Lr(e,t,n,s=i=>i){return e*s(.5-t*(.5-n))}function t0(e){return[-e[0],-e[1]]}function Dt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Mt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Et(e,t){return[e[0]*t,e[1]*t]}function n0(e,t){return[e[0]/t,e[1]/t]}function Ps(e){return[e[1],-e[0]]}function Br(e,t){return e[0]*t[0]+e[1]*t[1]}function s0(e,t){return e[0]===t[0]&&e[1]===t[1]}function i0(e){return Math.hypot(e[0],e[1])}function o0(e){return e[0]*e[0]+e[1]*e[1]}function Er(e,t){return o0(Mt(e,t))}function qd(e){return n0(e,i0(e))}function a0(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Os(e,t,n){let s=Math.sin(n),i=Math.cos(n),o=e[0]-t[0],l=e[1]-t[1],r=o*i-l*s,c=o*s+l*i;return[r+t[0],c+t[1]]}function ca(e,t,n){return Dt(e,Et(Mt(t,e),n))}function Dr(e,t,n){return Dt(e,Et(t,n))}var{min:rs,PI:l0}=Math,Tr=.275,Fs=l0+1e-4;function r0(e,t={}){let{size:n=16,smoothing:s=.5,thinning:i=.5,simulatePressure:o=!0,easing:l=ee=>ee,start:r={},end:c={},last:d=!1}=t,{cap:u=!0,easing:p=ee=>ee*(2-ee)}=r,{cap:h=!0,easing:v=ee=>--ee*ee*ee+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,b=r.taper===!1?0:r.taper===!0?Math.max(n,y):r.taper,$=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,L=Math.pow(n*s,2),A=[],B=[],E=e.slice(0,10).reduce((ee,pe)=>{let ke=pe.pressure;if(o){let Te=rs(1,pe.distance/n),yt=rs(1,1-Te);ke=rs(1,ee+(yt-ee)*(Te*Tr))}return(ee+ke)/2},e[0].pressure),q=Lr(n,i,e[e.length-1].pressure,l),G,V=e[0].vector,j=e[0].point,se=j,re=j,ge=se,X=!1;for(let ee=0;ee<e.length;ee++){let{pressure:pe}=e[ee],{point:ke,vector:Te,distance:yt,runningLength:tt}=e[ee];if(ee<e.length-1&&y-tt<3)continue;if(i){if(o){let Ie=rs(1,yt/n),we=rs(1,1-Ie);pe=rs(1,E+(we-E)*(Ie*Tr))}q=Lr(n,i,pe,l)}else q=n/2;G===void 0&&(G=q);let pt=tt<b?p(tt/b):1,dn=y-tt<$?v((y-tt)/$):1;q=Math.max(.01,q*Math.min(pt,dn));let S=(ee<e.length-1?e[ee+1]:e[ee]).vector,te=ee<e.length-1?Br(Te,S):1,Z=Br(Te,V)<0&&!X,ne=te!==null&&te<0;if(Z||ne){let Ie=Et(Ps(V),q);for(let we=1/13,he=0;he<=1;he+=we)re=Os(Mt(ke,Ie),ke,Fs*he),A.push(re),ge=Os(Dt(ke,Ie),ke,Fs*-he),B.push(ge);j=re,se=ge,ne&&(X=!0);continue}if(X=!1,ee===e.length-1){let Ie=Et(Ps(Te),q);A.push(Mt(ke,Ie)),B.push(Dt(ke,Ie));continue}let xe=Et(Ps(ca(S,Te,te)),q);re=Mt(ke,xe),(ee<=1||Er(j,re)>L)&&(A.push(re),j=re),ge=Dt(ke,xe),(ee<=1||Er(se,ge)>L)&&(B.push(ge),se=ge),E=pe,V=Te}let me=e[0].point.slice(0,2),Re=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),Je=[],Fe=[];if(e.length===1){if(!(b||$)||d){let ee=Dr(me,qd(Ps(Mt(me,Re))),-(G||q)),pe=[];for(let ke=1/13,Te=ke;Te<=1;Te+=ke)pe.push(Os(ee,me,Fs*2*Te));return pe}}else{if(!(b||$&&e.length===1))if(u)for(let pe=1/13,ke=pe;ke<=1;ke+=pe){let Te=Os(B[0],me,Fs*ke);Je.push(Te)}else{let pe=Mt(A[0],B[0]),ke=Et(pe,.5),Te=Et(pe,.51);Je.push(Mt(me,ke),Mt(me,Te),Dt(me,Te),Dt(me,ke))}let ee=Ps(t0(e[e.length-1].vector));if($||b&&e.length===1)Fe.push(Re);else if(h){let pe=Dr(Re,ee,q);for(let ke=1/29,Te=ke;Te<1;Te+=ke)Fe.push(Os(pe,Re,Fs*3*Te))}else Fe.push(Dt(Re,Et(ee,q)),Dt(Re,Et(ee,q*.99)),Mt(Re,Et(ee,q*.99)),Mt(Re,Et(ee,q)))}return A.concat(Fe,B.reverse(),Je)}function c0(e,t={}){var n;let{streamline:s=.5,size:i=16,last:o=!1}=t;if(e.length===0)return[];let l=.15+(1-s)*.85,r=Array.isArray(e[0])?e:e.map(({x:v,y,pressure:b=.5})=>[v,y,b]);if(r.length===2){let v=r[1];r=r.slice(0,-1);for(let y=1;y<5;y++)r.push(ca(r[0],v,y/4))}r.length===1&&(r=[...r,[...Dt(r[0],[1,1]),...r[0].slice(2)]]);let c=[{point:[r[0][0],r[0][1]],pressure:r[0][2]>=0?r[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,u=0,p=c[0],h=r.length-1;for(let v=1;v<r.length;v++){let y=o&&v===h?r[v].slice(0,2):ca(p.point,r[v],l);if(s0(p.point,y))continue;let b=a0(y,p.point);if(u+=b,v<h&&!d){if(u<i)continue;d=!0}p={point:y,pressure:r[v][2]>=0?r[v][2]:.5,vector:qd(Mt(p.point,y)),distance:b,runningLength:u},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function d0(e,t={}){return r0(c0(e,t),t)}var u0=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,i=n.length;s<i;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(i=>t!==i)}}});function Yi(e,t){return e-t}function p0(e){return e<0?-1:1}function Zi(e){return[Math.abs(e),p0(e)]}function Gd(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var m0=2,nn=m0,Ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*s,y:(e.pageY-i.top)*s,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const o=i.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*s,y:o.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(nn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},h0=class extends Ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=d0(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[i,o],l,r)=>{const[c,d]=r[(l+1)%r.length];return s.push(i,o,(i+c)/2,(o+d)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},g0=class extends Ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Zi(e.x-this.start.x),[s,i]=Zi(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,l]=[this.start.x,this.start.x+t*n].sort(Yi),[r,c]=[this.start.y,this.start.y+s*i].sort(Yi);this.attr("cx",(o+l)/2),this.attr("cy",(r+c)/2),this.attr("rx",(l-o)/2),this.attr("ry",(c-r)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Yd(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(i),n.appendChild(s),n}var f0=class extends Ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Gd(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Yd(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let o=s/i;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+i*o,n=this.start.y+i):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},v0=class extends Ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Zi(e.x-this.start.x),[s,i]=Zi(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,l]=[this.start.x,this.start.x+t*n].sort(Yi),[r,c]=[this.start.y,this.start.y+s*i].sort(Yi);this.attr("x",o),this.attr("y",r),this.attr("width",l-o),this.attr("height",c-r)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function y0(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function _0(e,t,n){let s=t.x,i=t.y,o=n.x-s,l=n.y-i;if(o!==0||l!==0){const r=((e.x-s)*o+(e.y-i)*l)/(o*o+l*l);r>1?(s=n.x,i=n.y):r>0&&(s+=o*r,i+=l*r)}return o=e.x-s,l=e.y-i,o*o+l*l}function w0(e,t){let n=e[0];const s=[n];let i;for(let o=1,l=e.length;o<l;o++)i=e[o],y0(i,n)>t&&(s.push(i),n=i);return n!==i&&i&&s.push(i),s}function da(e,t,n,s,i){let o=s,l=0;for(let r=t+1;r<n;r++){const c=_0(e[r],e[t],e[n]);c>o&&(l=r,o=c)}o>s&&(l-t>1&&da(e,t,l,s,i),i.push(e[l]),n-l>1&&da(e,l,n,s,i))}function b0(e,t){const n=e.length-1,s=[e[0]];return da(e,0,n,t,s),s.push(e[n]),s}function Pr(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:w0(e,s),e=b0(e,s),e}var k0=class extends Ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Gd();const t=Yd(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Pr(this.points,1,!0),this.count=0),this.attr("d",Fr(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fr(Pr(this.points,1,!0))),!e.getTotalLength()))}};function x0(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Or(e,t,n,s){const i=t||e,o=n||e,l=.2,r=x0(i,o),c=r.angle+(s?Math.PI:0),d=r.length*l,u=e.x+Math.cos(c)*d,p=e.y+Math.sin(c)*d;return{x:u,y:p}}function C0(e,t,n){const s=Or(n[t-1],n[t-2],e),i=Or(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(nn)},${s.y.toFixed(nn)} ${i.x.toFixed(nn)},${i.y.toFixed(nn)} ${e.x.toFixed(nn)},${e.y.toFixed(nn)}`}function Fr(e){return e.reduce((t,n,s,i)=>s===0?`M ${n.x.toFixed(nn)},${n.y.toFixed(nn)}`:`${t} ${C0(n,s,i)}`,"")}var $0=class extends Ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let i=0;i<n.length;i++){const o=n[i];if(o.getTotalLength){const l=o.getTotalLength();for(let r=0;r<this.pathSubFactor;r++){const c=o.getPointAtLength(l*r/this.pathSubFactor),d=o.getPointAtLength(l*(r+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:d.x,y1:c.y,y2:d.y,segment:r,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,i=t.x1,o=t.x2,l=e.y1,r=e.y2,c=t.y1,d=t.y2,u=(n-s)*(c-d)-(l-r)*(i-o),p=(n*r-l*s)*(i-o)-(n-s)*(i*d-c*o),h=(n*r-l*s)*(c-d)-(l-r)*(i*d-c*o),v=(y,b,$)=>y>=b&&y<=$?!0:y>=$&&y<=b;if(u===0)return!1;{const y={x:p/u,y:h/u};return v(y.x,n,s)&&v(y.y,l,r)&&v(y.x,i,o)&&v(y.y,c,d)}}};function I0(e){return{draw:new k0(e),stylus:new h0(e),line:new f0(e),rectangle:new v0(e),ellipse:new g0(e),eraseLine:new $0(e)}}var M0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=u0(),this._models=I0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function A0(e){return new M0(e)}const ua=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vt=Kt("slidev-drawing-enabled",!1),B5=Kt("slidev-drawing-pinned",!1),S0=_e(!1),L0=_e(!1),B0=_e(!1),oi=_e(!1),Un=pg(Kt("slidev-drawing-brush",{color:ua[0],size:4,mode:"stylus"})),Nr=_e("stylus"),Zd=T(()=>Ee.drawings.syncAll||Pt.value);let ai=!1;const Ns=T({get(){return Nr.value},set(e){Nr.value=e,e==="arrow"?(Un.mode="line",Un.arrowEnd=!0):(Un.mode=e,Un.arrowEnd=!1)}}),E0=et({brush:Un,acceptsInputTypes:T(()=>Vt.value&&(!Ee.drawings.presenterOnly||Pt.value)?void 0:["pen"]),coordinateTransform:!1}),ut=xa(A0(E0));function D0(){ut.clear(),Zd.value&&vd(Ze.value,"")}function Va(){var e;L0.value=ut.canRedo(),S0.value=ut.canUndo(),B0.value=!!((e=ut.el)!=null&&e.children.length)}function T0(e){ai=!0;const t=Wi[e||Ze.value];t!=null?ut.load(t):ut.clear(),Va(),ai=!1}ut.on("changed",()=>{if(Va(),!ai){const e=ut.dump(),t=Ze.value;(Wi[t]||"")!==e&&Zd.value&&vd(t,ut.dump())}});tg(e=>{ai=!0,e[Ze.value]!=null&&ut.load(e[Ze.value]||""),ai=!1,Va()});Ft(()=>{Ve(Ze,()=>{ut.mounted&&T0()},{immediate:!0})});ut.on("start",()=>oi.value=!0);ut.on("end",()=>oi.value=!1);window.addEventListener("keydown",e=>{if(!Vt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ut.redo():ut.undo():e.code==="Escape"?Vt.value=!1:e.code==="KeyL"&&t?Ns.value="line":e.code==="KeyA"&&t?Ns.value="arrow":e.code==="KeyS"&&t?Ns.value="stylus":e.code==="KeyR"&&t?Ns.value="rectangle":e.code==="KeyE"&&t?Ns.value="ellipse":e.code==="KeyC"&&t?D0():e.code.startsWith("Digit")&&t&&+e.code[5]<=ua.length?Un.color=ua[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ge(...e){return T(()=>e.every(t=>mt(t)))}function _t(e){return T(()=>!mt(e))}const Kr=ef(),Do=Kt("slidev-color-schema","auto"),pa=T(()=>Ee.colorSchema!=="auto"),Wa=T({get(){return pa.value?Ee.colorSchema==="dark":Do.value==="auto"?Kr.value:Do.value==="dark"},set(e){pa.value||(Do.value=e===Kr.value?"auto":e?"dark":"light")}}),Jd=kd(Wa);cn&&Ve(Wa,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Ti=_e(1),Pi=T(()=>qe.length-1),kt=_e(0),qa=_e(0);function P0(){kt.value>Ti.value&&(kt.value-=1)}function O0(){kt.value<Pi.value&&(kt.value+=1)}function F0(){if(kt.value>Ti.value){let e=kt.value-qa.value;e<Ti.value&&(e=Ti.value),kt.value=e}}function N0(){if(kt.value<Pi.value){let e=kt.value+qa.value;e>Pi.value&&(e=Pi.value),kt.value=e}}function K0(){const{escape:e,space:t,shift:n,left:s,right:i,up:o,down:l,enter:r,d:c,g:d,o:u}=Hd;let p=[{name:"next_space",key:Ge(t,_t(n)),fn:Zn,autoRepeat:!0},{name:"prev_space",key:Ge(t,n),fn:Jn,autoRepeat:!0},{name:"next_right",key:Ge(i,_t(n),_t(rt)),fn:Zn,autoRepeat:!0},{name:"prev_left",key:Ge(s,_t(n),_t(rt)),fn:Jn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Zn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Jn,autoRepeat:!0},{name:"next_down",key:Ge(l,_t(rt)),fn:Qi,autoRepeat:!0},{name:"prev_up",key:Ge(o,_t(rt)),fn:()=>Xi(!1),autoRepeat:!0},{name:"next_shift",key:Ge(i,n),fn:Qi,autoRepeat:!0},{name:"prev_shift",key:Ge(s,n),fn:()=>Xi(!1),autoRepeat:!0},{name:"toggle_dark",key:Ge(c,_t(Vt)),fn:Jd},{name:"toggle_overview",key:Ge(u,_t(Vt)),fn:Wd},{name:"hide_overview",key:Ge(e,_t(Vt)),fn:()=>rt.value=!1},{name:"goto",key:Ge(d,_t(Vt)),fn:()=>hs.value=!hs.value},{name:"next_overview",key:Ge(i,rt),fn:O0},{name:"prev_overview",key:Ge(s,rt),fn:P0},{name:"up_overview",key:Ge(o,rt),fn:F0},{name:"down_overview",key:Ge(l,rt),fn:N0},{name:"goto_from_overview",key:Ge(r,rt),fn:()=>{Cs(kt.value),rt.value=!1}}];const h=new Set(p.map(y=>y.name));if(p.filter(y=>y.name&&h.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return p}const Qd=Ge(_t(Xv),_t(e0),Jv);function R0(e,t,n=!1){typeof e=="string"&&(e=Hd[e]);const s=Ge(e,Qd);let i=0,o;const l=()=>{if(clearTimeout(o),!s.value){i=0;return}n&&(o=setTimeout(l,Math.max(1e3-i*250,150)),i++),t()};return Ve(s,l,{flush:"sync"})}function z0(e,t){return Fg(e,n=>{Qd.value&&(n.repeat||t())})}function U0(){const e=K0();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&R0(n.key,n.fn,n.autoRepeat)}),z0("f",()=>Vd.toggle())}const j0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H0=a("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),V0=[H0];function W0(e,t){return x(),Q("svg",j0,V0)}const q0={name:"carbon-close",render:W0};function Ga(e,t=""){var i,o;const n=["slidev-page",t],s=(o=(i=e==null?void 0:e.meta)==null?void 0:i.slide)==null?void 0:o.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const G0=De({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;O(K);const n=_e(),s=mf(n),i=T(()=>t.width?t.width:s.width.value),o=T(()=>t.width?t.width/Cn:s.height.value);t.width&&$s(()=>{n.value&&(n.value.style.width=`${i.value}px`,n.value.style.height=`${o.value}px`)});const l=T(()=>i.value/o.value),r=T(()=>t.scale&&!xs.value?t.scale:l.value<Cn?i.value/$n:o.value*Cn/$n),c=T(()=>({height:`${za}px`,width:`${$n}px`,transform:`translate(-50%, -50%) scale(${r.value})`})),d=T(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return bt(gd,r),(u,p)=>(x(),Q("div",{id:"slide-container",ref_key:"root",ref:n,class:ze(g(d))},[a("div",{id:"slide-content",style:st(g(c))},[ft(u.$slots,"default")],4),ft(u.$slots,"controls")],2))}});const R=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Xd=R(G0,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ya=De({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),s=Ht(e,"clicksElements",t),i=Ht(e,"clicksDisabled",t),o=Ht(e,"clicksOrderMap",t);s.value.length=0,bt(Uh,e.route),bt(jh,e.context),bt(pd,n),bt(hd,i),bt(md,s),bt(zh,o)},render(){var e,t;return this.$props.is?Bn(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Y0=["innerHTML"],Z0=De({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return O(K),(t,n)=>g(Wi)[e.page]?(x(),Q("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:g(Wi)[e.page]},null,8,Y0)):Y("v-if",!0)}}),eu=R(Z0,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),J0=Object.freeze(Object.defineProperty({__proto__:null,default:eu},Symbol.toStringTag,{value:"Module"})),Q0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},X0=["onClick"],ey=De({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;O(K);const s=Ht(n,"modelValue",t);function i(){s.value=!1}function o(v){Cs(v),i()}function l(v){return v===kt.value}const r=ra.smaller("xs"),c=ra.smaller("sm"),d=4*16*2,u=2*16,p=T(()=>r.value?Yn.width.value-d:c.value?(Yn.width.value-d-u)/2:300),h=T(()=>Math.floor((Yn.width.value-d)/(p.value+u)));return $s(()=>{kt.value=Ze.value,qa.value=h.value}),(v,y)=>{const b=q0;return x(),Q(Le,null,[C(a("div",Q0,[a("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${g(p)}px,1fr))`)},[(x(!0),Q(Le,null,mi(g(qe).slice(0,-1),($,L)=>(x(),Q("div",{key:$.path,class:"relative"},[a("div",{class:ze(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(L+1),"border-gray-400":!l(L+1)}]),style:st(g(Ua)),onClick:A=>o(+$.path)},[(x(),z(Xd,{key:$.path,width:g(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:_(()=>[m(g(Ya),{is:$==null?void 0:$.component,"clicks-disabled":!0,class:ze(g(Ga)($)),route:$,context:"overview"},null,8,["is","class","route"]),m(eu,{page:+$.path},null,8,["page"])]),_:2},1032,["width"]))],14,X0),a("div",{class:"absolute top-0 opacity-50",style:st(`left: ${g(p)+5}px`)},Mn(L+1),5)]))),128))],4)],512),[[I,g(s)]]),g(s)?(x(),Q("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[m(b)])):Y("v-if",!0)],64)}}});const ty=R(ey,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),ny="/ppopp23-biodynamo-slides/assets/logo-b72bde5d.png",sy={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},iy=De({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;O(K);const s=Ht(n,"modelValue",t);function i(){s.value=!1}return(o,l)=>(x(),z(Fc,null,[g(s)?(x(),Q("div",sy,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=r=>i())}),a("div",{class:ze(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[ft(o.$slots,"default")],2)])):Y("v-if",!0)],1024))}}),oy=R(iy,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Modal.vue"]]),ay={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ly=["innerHTML"],ry=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:ny,alt:"Slidev"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),k("dev ")])])],-1),cy=De({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;O(K);const s=Ht(n,"modelValue",t),i=T(()=>typeof Ee.info=="string");return(o,l)=>(x(),z(oy,{modelValue:g(s),"onUpdate:modelValue":l[0]||(l[0]=r=>Ae(s)?s.value=r:null),class:"px-6 py-4"},{default:_(()=>[a("div",ay,[g(i)?(x(),Q("div",{key:0,class:"mb-4",innerHTML:g(Ee).info},null,8,ly)):Y("v-if",!0),ry])]),_:1},8,["modelValue"]))}});const dy=R(cy,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/InfoDialog.vue"]]),uy=["disabled","onKeydown"],py=De({__name:"Goto",setup(e){O(K);const t=_e(),n=_e(""),s=T(()=>{if(n.value.startsWith("/"))return!!qe.find(l=>l.path===n.value.substring(1));{const l=+n.value;return!isNaN(l)&&l>0&&l<=ku.value}});function i(){s.value&&(n.value.startsWith("/")?Cs(n.value.substring(1)):Cs(+n.value)),o()}function o(){hs.value=!1}return Ve(hs,async l=>{var r,c;l?(await Ft(),n.value="",(r=t.value)==null||r.focus()):(c=t.value)==null||c.blur()}),Ve(n,l=>{l.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(l,r)=>(x(),Q("div",{id:"slidev-goto-dialog",class:ze(["fixed right-5 bg-main transform transition-all",g(hs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[C(a("input",{ref_key:"input",ref:t,"onUpdate:modelValue":r[0]||(r[0]=c=>n.value=c),type:"text",disabled:!g(hs),class:ze(["outline-none bg-transparent",{"text-red-400":!g(s)&&n.value}]),placeholder:"Goto...",onKeydown:[ql(i,["enter"]),ql(o,["escape"])],onBlur:o},null,42,uy),[[Dh,n.value]])],2))}}),my=R(py,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Goto.vue"]]),hy=De({__name:"Controls",setup(e){O(K);const t=qt(),n=qt();return(s,i)=>(x(),Q(Le,null,[m(ty,{modelValue:g(rt),"onUpdate:modelValue":i[0]||(i[0]=o=>Ae(rt)?rt.value=o:null)},null,8,["modelValue"]),m(my),g(t)?(x(),z(g(t),{key:0})):Y("v-if",!0),g(n)?(x(),z(g(n),{key:1,modelValue:g(Bo),"onUpdate:modelValue":i[1]||(i[1]=o=>Ae(Bo)?Bo.value=o:null)},null,8,["modelValue"])):Y("v-if",!0),g(Ee).info?(x(),z(dy,{key:2,modelValue:g(Gs),"onUpdate:modelValue":i[2]||(i[2]=o=>Ae(Gs)?Gs.value=o:null)},null,8,["modelValue"])):Y("v-if",!0)],64))}}),gy=R(hy,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Controls.vue"]]),fy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vy=a("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),yy=[vy];function _y(e,t){return x(),Q("svg",fy,yy)}const wy={name:"carbon-settings-adjust",render:_y},by={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ky=a("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),xy=a("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Cy=[ky,xy];function $y(e,t){return x(),Q("svg",by,Cy)}const Iy={name:"carbon-information",render:$y},My={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ay=a("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Sy=[Ay];function Ly(e,t){return x(),Q("svg",My,Sy)}const By={name:"carbon-download",render:Ly},Ey={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dy=a("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ty=a("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Py=[Dy,Ty];function Oy(e,t){return x(),Q("svg",Ey,Py)}const Fy={name:"carbon-presentation-file",render:Oy},Ny={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ky=a("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ry=[Ky];function zy(e,t){return x(),Q("svg",Ny,Ry)}const Uy={name:"carbon-pen",render:zy},jy={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Hy=a("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Vy=a("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Wy=[Hy,Vy];function qy(e,t){return x(),Q("svg",jy,Wy)}const Gy={name:"ph-cursor-duotone",render:qy},Yy={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Zy=a("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Jy=[Zy];function Qy(e,t){return x(),Q("svg",Yy,Jy)}const tu={name:"ph-cursor-fill",render:Qy},Xy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e1=a("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),t1=[e1];function n1(e,t){return x(),Q("svg",Xy,t1)}const s1={name:"carbon-sun",render:n1},i1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o1=a("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),a1=[o1];function l1(e,t){return x(),Q("svg",i1,a1)}const r1={name:"carbon-moon",render:l1},c1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=a("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),u1=[d1];function p1(e,t){return x(),Q("svg",c1,u1)}const m1={name:"carbon-apps",render:p1},h1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g1=a("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),f1=[g1];function v1(e,t){return x(),Q("svg",h1,f1)}const Za={name:"carbon-arrow-right",render:v1},y1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=a("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),w1=[_1];function b1(e,t){return x(),Q("svg",y1,w1)}const k1={name:"carbon-arrow-left",render:b1},x1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C1=a("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),$1=[C1];function I1(e,t){return x(),Q("svg",x1,$1)}const M1={name:"carbon-maximize",render:I1},A1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S1=a("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),L1=[S1];function B1(e,t){return x(),Q("svg",A1,L1)}const E1={name:"carbon-minimize",render:B1},D1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T1=a("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),P1=[T1];function O1(e,t){return x(),Q("svg",D1,P1)}const F1={name:"carbon-checkmark",render:O1},N1={class:"select-list"},K1={class:"title"},R1={class:"items"},z1=["onClick"],U1=De({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;O(K);const s=Ht(n,"modelValue",t,{passive:!0});return(i,o)=>{const l=F1;return x(),Q("div",N1,[a("div",K1,Mn(e.title),1),a("div",R1,[(x(!0),Q(Le,null,mi(e.items,r=>(x(),Q("div",{key:r.value,class:ze(["item",{active:g(s)===r.value}]),onClick:()=>{var c;s.value=r.value,(c=r.onClick)==null||c.call(r)}},[m(l,{class:ze(["text-green-500",{"opacity-0":g(s)!==r.value}])},null,8,["class"]),k(" "+Mn(r.display||r.value),1)],10,z1))),128))])])}}});const j1=R(U1,[["__scopeId","data-v-3f89fa11"],["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/SelectList.vue"]]),H1={class:"text-sm"},V1=De({__name:"Settings",setup(e){O(K);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(x(),Q("div",H1,[m(j1,{modelValue:g(Di),"onUpdate:modelValue":s[0]||(s[0]=i=>Ae(Di)?Di.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),W1=R(V1,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Settings.vue"]]),q1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},G1=De({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;O(K);const s=Ht(n,"modelValue",t,{passive:!0}),i=_e();return Pg(i,()=>{s.value=!1}),(o,l)=>(x(),Q("div",{ref_key:"el",ref:i,class:"flex relative"},[a("button",{class:ze({disabled:e.disabled}),onClick:l[0]||(l[0]=r=>s.value=!g(s))},[ft(o.$slots,"button",{class:ze({disabled:e.disabled})})],2),(x(),z(Fc,null,[g(s)?(x(),Q("div",q1,[ft(o.$slots,"menu")])):Y("v-if",!0)],1024))],512))}}),Y1=R(G1,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/MenuButton.vue"]]),Z1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},J1={__name:"VerticalDivider",setup(e){return O(K),(t,n)=>(x(),Q("div",Z1))}},Mi=R(J1,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Q1={render(){return[]}},X1={class:"icon-btn"},e_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},t_={class:"my-auto"},n_={class:"opacity-50"},s_=De({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;O(K);const n=ra.smaller("md"),{isFullscreen:s,toggle:i}=Vd,o=T(()=>ha.value?`?password=${ha.value}`:"");T(()=>`/presenter/${Ze.value}${o.value}`);const l=T(()=>`/${Ze.value}${o.value}`),r=_e(),c=()=>{r.value&&_s.value&&r.value.contains(_s.value)&&_s.value.blur()},d=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),u=qt(),p=qt();return gi(()=>import("./DrawingControls-86041468.js"),[]).then(h=>p.value=h.default),(h,v)=>{const y=E1,b=M1,$=k1,L=Za,A=m1,B=r1,E=s1,q=tu,G=Gy,V=Uy,j=Fy,se=pm("RouterLink"),re=By,ge=Iy,X=wy;return x(),Q("nav",{ref_key:"root",ref:r,class:"flex flex-col"},[a("div",{class:ze(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",g(d)]),onMouseleave:c},[g(en)?Y("v-if",!0):(x(),Q("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...me)=>g(i)&&g(i)(...me))},[g(s)?(x(),z(y,{key:0})):(x(),z(b,{key:1}))])),a("button",{class:ze(["icon-btn",{disabled:!g(o5)}]),onClick:v[1]||(v[1]=(...me)=>g(Jn)&&g(Jn)(...me))},[m($)],2),a("button",{class:ze(["icon-btn",{disabled:!g(i5)}]),title:"Next",onClick:v[2]||(v[2]=(...me)=>g(Zn)&&g(Zn)(...me))},[m(L)],2),g(en)?Y("v-if",!0):(x(),Q("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=me=>g(Wd)())},[m(A)])),g(pa)?Y("v-if",!0):(x(),Q("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=me=>g(Jd)())},[g(Wa)?(x(),z(B,{key:0})):(x(),z(E,{key:1}))])),m(Mi),g(en)?Y("v-if",!0):(x(),Q(Le,{key:3},[!g(Pt)&&!g(n)&&g(u)?(x(),Q(Le,{key:0},[m(g(u)),m(Mi)],64)):Y("v-if",!0),g(Pt)?(x(),Q("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=me=>Eo.value=!g(Eo))},[g(Eo)?(x(),z(q,{key:0})):(x(),z(G,{key:1,class:"opacity-50"}))])):Y("v-if",!0)],64)),(!g(Ee).drawings.presenterOnly||g(Pt))&&!g(en)?(x(),Q(Le,{key:4},[a("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=me=>Vt.value=!g(Vt))},[m(V),g(Vt)?(x(),Q("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:g(Un).color})},null,4)):Y("v-if",!0)]),m(Mi)],64)):Y("v-if",!0),g(en)?Y("v-if",!0):(x(),Q(Le,{key:5},[g(Pt)?(x(),z(se,{key:0,to:g(l),class:"icon-btn",title:"Play Mode"},{default:_(()=>[m(j)]),_:1},8,["to"])):Y("v-if",!0),Y("v-if",!0),Y("v-if",!0)],64)),(x(),Q(Le,{key:6},[g(Ee).download?(x(),Q("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...me)=>g(Vr)&&g(Vr)(...me))},[m(re)])):Y("v-if",!0)],64)),!g(Pt)&&g(Ee).info&&!g(en)?(x(),Q("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=me=>Gs.value=!g(Gs))},[m(ge)])):Y("v-if",!0),!g(Pt)&&!g(en)?(x(),z(Y1,{key:8},{button:_(()=>[a("button",X1,[m(X)])]),menu:_(()=>[m(W1)]),_:1})):Y("v-if",!0),g(en)?Y("v-if",!0):(x(),z(Mi,{key:9})),a("div",e_,[a("div",t_,[k(Mn(g(Ze))+" ",1),a("span",n_,"/ "+Mn(g(ku)),1)])]),m(g(Q1))],34)],512)}}}),i_=R(s_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/NavControls.vue"]]),nu={render(){return[]}},o_={__name:"SlideCurrentNo",setup(e){const t=O(K);return(n,s)=>(x(),Q("span",null,Mn(g(t).nav.currentPage),1))}},a_=R(o_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/builtin/SlideCurrentNo.vue"]]);const l_={class:"absolute bottom-0 left-0 right-0 w-full"},r_={class:"flex flex-col gap-2 bg-light-background dark:bg-dark-background bg-opacity-60 p-2 rounded-md"},c_={class:"text-sm"},d_={__name:"global-bottom",setup(e){const t=O(K);return(n,s)=>{const i=a_;return x(),Q("footer",l_,[a("div",{class:ze(["flex w-full p-2",{"justify-start":g(t).configs.globalBottomPosition==="left","justify-end":!g(t).configs.globalBottomPosition}])},[a("div",r_,[Y(` <span class="text-sm"><logos-twitter class="mr-1" />@mokkapps</span> */
        <div class="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/mokkapps/image/upload/v1655359470/website/icon_dt5qn1.png"
            class="w-3 h-3"
          /> `),a("span",c_,[m(i)]),Y("</div>")])],2),Y(' <div class="border-bar"></div> ')])}}},u_=R(d_,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/global-bottom.vue"]]),su={render(){return[Bn(u_)]}},p_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},m_=De({__name:"PresenterMouse",setup(e){return O(K),(t,n)=>{const s=tu;return g(Mo).cursor?(x(),Q("div",p_,[m(s,{class:"absolute",style:st({left:`${g(Mo).cursor.x}%`,top:`${g(Mo).cursor.y}%`})},null,8,["style"])])):Y("v-if",!0)}}}),h_=R(m_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),g_=De({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){O(K),Ve(ct,()=>{var s,i;(s=ct.value)!=null&&s.meta&&ct.value.meta.preload!==!1&&(ct.value.meta.__preloaded=!0),(i=To.value)!=null&&i.meta&&To.value.meta.preload!==!1&&(To.value.meta.__preloaded=!0)},{immediate:!0});const t=qt();gi(()=>import("./DrawingLayer-a61ef89f.js"),[]).then(s=>t.value=s.default);const n=T(()=>qe.filter(s=>{var i;return((i=s.meta)==null?void 0:i.__preloaded)||s===ct.value}));return(s,i)=>(x(),Q(Le,null,[Y(" Global Bottom "),m(g(su)),Y(" Slides "),m(Mh,ae(ie(g(r5))),{default:_(()=>[(x(!0),Q(Le,null,mi(g(n),o=>{var l;return C((x(),z(g(Ya),{key:o.path,is:o==null?void 0:o.component,clicks:o===g(ct)?g(es):0,"clicks-elements":((l=o.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:ze(g(Ga)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[I,o===g(ct)]])}),128))]),_:1},16),Y(" Global Top "),m(g(nu)),g(t)?(x(),z(g(t),{key:0})):Y("v-if",!0),g(Pt)?Y("v-if",!0):(x(),z(h_,{key:1}))],64))}}),f_=R(g_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/SlidesShow.vue"]]),v_=De({__name:"PrintStyle",setup(e){O(K);function t(n,{slots:s}){if(s.default)return Bn("style",s.default())}return(n,s)=>(x(),z(t,null,{default:_(()=>[k(" @page { size: "+Mn(g($n))+"px "+Mn(g(za))+"px; margin: 0px; } ",1)]),_:1}))}}),iu=R(v_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/PrintStyle.vue"]]),y_=De({__name:"Play",setup(e){O(K),U0();const t=_e();function n(o){var l;Sr.value||((l=o.target)==null?void 0:l.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?Zn():Jn())}c5(t);const s=T(()=>Qv.value||Sr.value);qt();const i=qt();return gi(()=>import("./DrawingControls-86041468.js"),[]).then(o=>i.value=o.default),(o,l)=>(x(),Q(Le,null,[g(xs)?(x(),z(iu,{key:0})):Y("v-if",!0),a("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:st(g(Ua))},[m(Xd,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:g(xs)?g(Yn).width.value:void 0,scale:g(Di),onPointerdown:n},{default:_(()=>[m(f_,{context:"slide"})]),controls:_(()=>[a("div",{class:ze(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[g(s)?"opacity-100 right-0":"opacity-0 p-2",g(oi)?"pointer-events-none":""]])},[m(i_,{class:"m-auto",persist:g(s)},null,8,["persist"])],2),!g(Ee).drawings.presenterOnly&&!g(en)&&g(i)?(x(),z(g(i),{key:0,class:"ml-0"})):Y("v-if",!0)]),_:1},8,["style","width","scale"]),Y("v-if",!0)],4),m(gy)],64))}}),__=R(y_,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ou(e){return typeof e>"u"||e===null}function w_(e){return typeof e=="object"&&e!==null}function b_(e){return Array.isArray(e)?e:ou(e)?[]:[e]}function k_(e,t){var n,s,i,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)i=o[n],e[i]=t[i];return e}function x_(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function C_(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $_=ou,I_=w_,M_=b_,A_=x_,S_=C_,L_=k_,Ja={isNothing:$_,isObject:I_,toArray:M_,repeat:A_,isNegativeZero:S_,extend:L_};function au(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function li(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=au(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}li.prototype=Object.create(Error.prototype);li.prototype.constructor=li;li.prototype.toString=function(t){return this.name+": "+au(this,t)};var Rn=li,B_=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],E_=["scalar","sequence","mapping"];function D_(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function T_(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(B_.indexOf(n)===-1)throw new Rn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=D_(t.styleAliases||null),E_.indexOf(this.kind)===-1)throw new Rn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var it=T_;function Rr(e,t){var n=[];return e[t].forEach(function(s){var i=n.length;n.forEach(function(o,l){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(i=l)}),n[i]=s}),n}function P_(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function ma(e){return this.extend(e)}ma.prototype.extend=function(t){var n=[],s=[];if(t instanceof it)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new Rn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof it))throw new Rn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Rn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Rn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof it))throw new Rn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(ma.prototype);return i.implicit=(this.implicit||[]).concat(n),i.explicit=(this.explicit||[]).concat(s),i.compiledImplicit=Rr(i,"implicit"),i.compiledExplicit=Rr(i,"explicit"),i.compiledTypeMap=P_(i.compiledImplicit,i.compiledExplicit),i};var O_=ma,F_=new it("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),N_=new it("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),K_=new it("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),R_=new O_({explicit:[F_,N_,K_]});function z_(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function U_(){return null}function j_(e){return e===null}var H_=new it("tag:yaml.org,2002:null",{kind:"scalar",resolve:z_,construct:U_,predicate:j_,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function V_(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function W_(e){return e==="true"||e==="True"||e==="TRUE"}function q_(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var G_=new it("tag:yaml.org,2002:bool",{kind:"scalar",resolve:V_,construct:W_,predicate:q_,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Y_(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Z_(e){return 48<=e&&e<=55}function J_(e){return 48<=e&&e<=57}function Q_(e){if(e===null)return!1;var t=e.length,n=0,s=!1,i;if(!t)return!1;if(i=e[n],(i==="-"||i==="+")&&(i=e[++n]),i==="0"){if(n+1===t)return!0;if(i=e[++n],i==="b"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(i!=="0"&&i!=="1")return!1;s=!0}return s&&i!=="_"}if(i==="x"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!Y_(e.charCodeAt(n)))return!1;s=!0}return s&&i!=="_"}if(i==="o"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!Z_(e.charCodeAt(n)))return!1;s=!0}return s&&i!=="_"}}if(i==="_")return!1;for(;n<t;n++)if(i=e[n],i!=="_"){if(!J_(e.charCodeAt(n)))return!1;s=!0}return!(!s||i==="_")}function X_(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function ew(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ja.isNegativeZero(e)}var tw=new it("tag:yaml.org,2002:int",{kind:"scalar",resolve:Q_,construct:X_,predicate:ew,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),nw=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function sw(e){return!(e===null||!nw.test(e)||e[e.length-1]==="_")}function iw(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var ow=/^[-+]?[0-9]+e/;function aw(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ja.isNegativeZero(e))return"-0.0";return n=e.toString(10),ow.test(n)?n.replace("e",".e"):n}function lw(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ja.isNegativeZero(e))}var rw=new it("tag:yaml.org,2002:float",{kind:"scalar",resolve:sw,construct:iw,predicate:lw,represent:aw,defaultStyle:"lowercase"}),cw=R_.extend({implicit:[H_,G_,tw,rw]}),dw=cw,lu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ru=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function uw(e){return e===null?!1:lu.exec(e)!==null||ru.exec(e)!==null}function pw(e){var t,n,s,i,o,l,r,c=0,d=null,u,p,h;if(t=lu.exec(e),t===null&&(t=ru.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(n,s,i));if(o=+t[4],l=+t[5],r=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(u=+t[10],p=+(t[11]||0),d=(u*60+p)*6e4,t[9]==="-"&&(d=-d)),h=new Date(Date.UTC(n,s,i,o,l,r,c)),d&&h.setTime(h.getTime()-d),h}function mw(e){return e.toISOString()}var hw=new it("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:uw,construct:pw,instanceOf:Date,represent:mw});function gw(e){return e==="<<"||e===null}var fw=new it("tag:yaml.org,2002:merge",{kind:"scalar",resolve:gw}),Qa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function vw(e){if(e===null)return!1;var t,n,s=0,i=e.length,o=Qa;for(n=0;n<i;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function yw(e){var t,n,s=e.replace(/[\r\n=]/g,""),i=s.length,o=Qa,l=0,r=[];for(t=0;t<i;t++)t%4===0&&t&&(r.push(l>>16&255),r.push(l>>8&255),r.push(l&255)),l=l<<6|o.indexOf(s.charAt(t));return n=i%4*6,n===0?(r.push(l>>16&255),r.push(l>>8&255),r.push(l&255)):n===18?(r.push(l>>10&255),r.push(l>>2&255)):n===12&&r.push(l>>4&255),new Uint8Array(r)}function _w(e){var t="",n=0,s,i,o=e.length,l=Qa;for(s=0;s<o;s++)s%3===0&&s&&(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]),n=(n<<8)+e[s];return i=o%3,i===0?(t+=l[n>>18&63],t+=l[n>>12&63],t+=l[n>>6&63],t+=l[n&63]):i===2?(t+=l[n>>10&63],t+=l[n>>4&63],t+=l[n<<2&63],t+=l[64]):i===1&&(t+=l[n>>2&63],t+=l[n<<4&63],t+=l[64],t+=l[64]),t}function ww(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var bw=new it("tag:yaml.org,2002:binary",{kind:"scalar",resolve:vw,construct:yw,predicate:ww,represent:_w}),kw=Object.prototype.hasOwnProperty,xw=Object.prototype.toString;function Cw(e){if(e===null)return!0;var t=[],n,s,i,o,l,r=e;for(n=0,s=r.length;n<s;n+=1){if(i=r[n],l=!1,xw.call(i)!=="[object Object]")return!1;for(o in i)if(kw.call(i,o))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function $w(e){return e!==null?e:[]}var Iw=new it("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Cw,construct:$w}),Mw=Object.prototype.toString;function Aw(e){if(e===null)return!0;var t,n,s,i,o,l=e;for(o=new Array(l.length),t=0,n=l.length;t<n;t+=1){if(s=l[t],Mw.call(s)!=="[object Object]"||(i=Object.keys(s),i.length!==1))return!1;o[t]=[i[0],s[i[0]]]}return!0}function Sw(e){if(e===null)return[];var t,n,s,i,o,l=e;for(o=new Array(l.length),t=0,n=l.length;t<n;t+=1)s=l[t],i=Object.keys(s),o[t]=[i[0],s[i[0]]];return o}var Lw=new it("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Aw,construct:Sw}),Bw=Object.prototype.hasOwnProperty;function Ew(e){if(e===null)return!0;var t,n=e;for(t in n)if(Bw.call(n,t)&&n[t]!==null)return!1;return!0}function Dw(e){return e!==null?e:{}}var Tw=new it("tag:yaml.org,2002:set",{kind:"mapping",resolve:Ew,construct:Dw});dw.extend({implicit:[hw,fw],explicit:[bw,Iw,Lw,Tw]});function zr(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Pw=new Array(256),Ow=new Array(256);for(var cs=0;cs<256;cs++)Pw[cs]=zr(cs)?1:0,Ow[cs]=zr(cs);function Fw(e){return Array.from(new Set(e))}function Ur(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const i=[];let o=t;for(;o<n;)i.push(o),o+=s||1;return i}function cu(e,t){if(!t||t==="all"||t==="*")return Ur(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[i,o]=s.split("-",2);n.push(...Ur(+i,o?+o+1:e+1))}return Fw(n).filter(s=>s<=e).sort((s,i)=>s-i)}function Nw(e){const t=T(()=>e.value.path),n=T(()=>qe.length-1),s=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=T(()=>tl(s.value)),o=T(()=>qe.find(h=>h.path===`${s.value}`)),l=T(()=>{var h,v,y;return(y=(v=(h=o.value)==null?void 0:h.meta)==null?void 0:v.slide)==null?void 0:y.id}),r=T(()=>{var h,v;return((v=(h=o.value)==null?void 0:h.meta)==null?void 0:v.layout)||(s.value===1?"cover":"default")}),c=T(()=>qe.find(h=>h.path===`${Math.min(qe.length,s.value+1)}`)),d=T(()=>qe.filter(h=>{var v,y;return(y=(v=h.meta)==null?void 0:v.slide)==null?void 0:y.title}).reduce((h,v)=>(nl(h,v),h),[])),u=T(()=>sl(d.value,o.value)),p=T(()=>il(u.value));return{route:e,path:t,total:n,currentPage:s,currentPath:i,currentRoute:o,currentSlideId:l,currentLayout:r,nextRoute:c,rawTree:d,treeWithActiveStatuses:u,tree:p}}function Kw(e,t,n){const s=_e(0);Ft(()=>{In.afterEach(async()=>{await Ft(),s.value+=1})});const i=T(()=>{var c,d;return s.value,((d=(c=t.value)==null?void 0:c.meta)==null?void 0:d.__clicksElements)||[]}),o=T(()=>{var c,d;return+(((d=(c=t.value)==null?void 0:c.meta)==null?void 0:d.clicks)??i.value.length)}),l=T(()=>n.value<qe.length-1||e.value<o.value),r=T(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:o,hasNext:l,hasPrev:r}}const Rw=["id"],zw=De({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Ht(n,"clicksElements",t),i=T(()=>({height:`${za}px`,width:`${$n}px`})),o=qt();gi(()=>Promise.resolve().then(()=>J0),void 0).then(d=>o.value=d.default);const l=T(()=>n.clicks),r=Kw(l,n.nav.currentRoute,n.nav.currentPage),c=T(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return bt(K,et({nav:{...n.nav,...r},configs:Ee,themeConfigs:T(()=>Ee.themeConfig)})),(d,u)=>{var p;return x(),Q("div",{id:g(c),class:"print-slide-container",style:st(g(i))},[m(g(su)),m(g(Ya),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":g(s),"onUpdate:clicksElements":u[0]||(u[0]=h=>Ae(s)?s.value=h:null),clicks:g(l),"clicks-disabled":!1,class:ze(g(Ga)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),g(o)?(x(),z(g(o),{key:0,page:+e.route.path},null,8,["page"])):Y("v-if",!0),m(g(nu))],12,Rw)}}}),jr=R(zw,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Uw=De({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var o;const t=e;O(K);const n=et(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=T(()=>t.route),i=Nw(s);return(l,r)=>(x(),Q(Le,null,[m(jr,{"clicks-elements":n,"onUpdate:clicksElements":r[0]||(r[0]=c=>n=c),clicks:0,nav:g(i),route:g(s)},null,8,["clicks-elements","nav","route"]),g(bu)?Y("v-if",!0):(x(!0),Q(Le,{key:0},mi(n.length,c=>(x(),z(jr,{key:c,clicks:c,nav:g(i),route:g(s)},null,8,["clicks","nav","route"]))),128))],64))}}),jw=R(Uw,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Hw={id:"print-content"},Vw=De({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;O(K);const n=T(()=>t.width),s=T(()=>t.width/Cn),i=T(()=>n.value/s.value),o=T(()=>i.value<Cn?n.value/$n:s.value*Cn/$n);let l=qe.slice(0,-1);Gt.value.query.range&&(l=cu(l.length,Gt.value.query.range).map(d=>l[d-1]));const r=T(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return bt(gd,o),(c,d)=>(x(),Q("div",{id:"print-container",class:ze(g(r))},[a("div",Hw,[(x(!0),Q(Le,null,mi(g(l),u=>(x(),z(jw,{key:u.path,route:u},null,8,["route"]))),128))]),ft(c.$slots,"controls")],2))}});const Ww=R(Vw,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/PrintContainer.vue"]]),qw=De({__name:"Print",setup(e){return O(K),$s(()=>{xs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(x(),Q(Le,null,[g(xs)?(x(),z(iu,{key:0})):Y("v-if",!0),a("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:st(g(Ua))},[m(Ww,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:g(Yn).width.value},null,8,["style","width"])],4)],64))}});const Gw=R(qw,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/internals/Print.vue"]]);const Yw={class:"slidev-layout end"},Zw={__name:"end",setup(e){return O(K),(t,n)=>(x(),Q("div",Yw," END "))}},Jw=R(Zw,[["__scopeId","data-v-e532b98d"],["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/layouts/end.vue"]]),du="/ppopp23-biodynamo-slides/artifacts_available_v1_1.png",uu="/ppopp23-biodynamo-slides/artifacts_evaluated_reusable_v1_1.png",pu="/ppopp23-biodynamo-slides/results_reproduced_v1_1.png",Xa="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg",mu="/ppopp23-biodynamo-slides/logos/eth_logo_kurz_pos_cropped.svg",Qw="/ppopp23-biodynamo-slides/logos/Safari_vector_logo.svg",hu="/ppopp23-biodynamo-slides/logos/tudelft.png",Xw="/ppopp23-biodynamo-slides/assets/bg-cover-b3a8ca5f.png",eb={class:"slidev-layout cover"},tb=a("div",{class:"absolute inset-0 z-1"},[a("img",{src:Xw,alt:""})],-1),nb={class:"my-auto max-w-3xl mx-auto flex flex-col text-center items-center justify-center w-full z-2"},sb={__name:"cover",setup(e){return O(K),(t,n)=>(x(),Q("div",eb,[tb,a("div",nb,[ft(t.$slots,"default")])]))}},ib=R(sb,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/layouts/cover.vue"]]);const As=e=>(Sc("data-v-42c5a5a3"),e=e(),Lc(),e),ob=As(()=>a("h1",null,[a("strong",null,[k("High-Performance and Scalable"),a("br"),k("Agent-Based Simulation With BioDynaMo")])],-1)),ab=As(()=>a("p",null,[a("em",null,[a("strong",null,[a("a",{href:"mailto:lukas.breitwieser@gmail.com",target:"_blank",rel:"noopener"},"Lukas Breitwieser")])]),k(", Ahmad Hesam, Fons Rademakers,"),a("br"),k("Juan Gómez Luna, and Onur Mutlu")],-1)),lb=As(()=>a("p",null,[a("a",{href:"https://arxiv.org/abs/2301.06984",target:"_blank",rel:"noopener"},"https://arxiv.org/abs/2301.06984"),k(", "),a("a",{href:"https://doi.org/10.1145/3572848.3577480",target:"_blank",rel:"noopener"},"https://doi.org/10.1145/3572848.3577480")],-1)),rb=As(()=>a("p",null,[k("ACM SIGPLAN Annual Symposium on Principles and Practice of Parallel Programming "),a("br"),k(" 27 February 2023, Montreal Canada")],-1)),cb=As(()=>a("div",{class:"grid grid-cols-3 gap-2",w:"30%",style:{"margin-left":"auto","margin-right":"auto",position:"absolute",top:"5px",left:"69%"}},[a("img",{src:du,w:"100px"}),a("img",{src:uu,w:"100px"}),a("img",{src:pu,w:"100px"})],-1)),db=As(()=>a("div",{class:"grid grid-cols-4 gap-10",w:"100%",style:{"margin-left":"auto","margin-right":"auto","margin-top":"-12px"}},[a("img",{src:Xa,h:"60px",style:{margin:"auto"}}),a("img",{src:mu,h:"40px",style:{margin:"auto"}}),a("img",{src:Qw,h:"40px",style:{margin:"auto"}}),a("img",{src:hu,h:"40px",style:{margin:"auto"}})],-1)),ub={__name:"1",setup(e){const t={theme:"../slidev-theme-breitwieser",favicon:"favicon.png",colorSchema:"light",selectable:!0,presenter:!1,lineNumbers:!0,remoteAssets:!1,drawings:{persist:!1},css:"unocss",exportFilename:"ppopp23-Breitwieser-BioDynaMo",export:{dark:!1,withClicks:!0},fonts:{provider:"none"}};return O(K),(n,s)=>(x(),z(ib,ae(ie(t)),{default:_(()=>[Y(' <img src="/ppopp23-biodynamo-slides/bdm-logo-large.png" w="120px" /> '),ob,ab,lb,rb,cb,db]),_:1},16))}},pb=R(ub,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),mb={class:"slidev-layout default"},hb={__name:"default",setup(e){return O(K),(t,n)=>(x(),Q("div",mb,[ft(t.$slots,"default")]))}},ce=R(hb,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/layouts/default.vue"]]),gb=a("h1",null,"Key problem",-1),fb=a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--red)","text-align":"center","margin-top":"150px",border:"3px solid var(--redDark)"}},[a("div",{class:"i-icon-park-solid-error",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--redDark)"}}),a("div",{style:{"font-size":"1.5rem",margin:"0",color:"var(--redText)"}},[a("p",null,[k("Most existing agent-based simulation platforms exhibit "),a("strong",null,"low performance")]),Y(" Many existing agent-based simulation platforms<br/>are **not suitable for large-scale studies<br/> due to the low performance** of the underlying simulation engines. ")])],-1),vb={__name:"2",setup(e){const t={};return O(K),(n,s)=>(x(),z(ce,ae(ie(t)),{default:_(()=>[gb,fb]),_:1},16))}},yb=R(vb,[["__file","/@slidev/slides/2.md"]]),vi=De({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var o,l;const e=bl("click"),t=bl("after"),n=(r,c,d)=>C(r,[[c,this.at!=null?+this.at+d:null,"",{hide:this.hide,fade:this.fade}]]);let s=(l=(o=this.$slots).default)==null?void 0:l.call(o);if(!s)return;s=Vh(s);const i=r=>r.map((c,d)=>Ln(c)?n(Bn(c),d%this.every===0?e:t,Math.floor(d/this.every)):c);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?Bn(s[0],{},[i(s[0].children)]):i(s)}}),_b=a("h1",null,"Impact of low performance",-1),wb=a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--red)","text-align":"center","margin-top":"30px",border:"3px solid var(--redDark)"}},[a("div",{class:"i-entypo-resize-100",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--redDark)"}}),a("div",{style:{"font-size":"1.5rem",margin:"0",color:"var(--redText)"}},"Limits the model size and complexity")],-1),bb=a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--petrol)","text-align":"center","margin-top":"20px",border:"3px solid var(--petrolDark)"}},[a("div",{class:"i-material-symbols-hourglass-top-rounded",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--petrolDark)"}}),a("p",{style:{"font-size":"1.5rem",color:"var(--petrolText)"}},"Increases the development time")],-1),kb={class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--red)","text-align":"center","margin-top":"20px",border:"3px solid var(--redDark)"}},xb=a("div",{class:"i-ph-chart-line-bold",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--redDark)"}},null,-1),Cb={style:{"font-size":"1.5rem",color:"var(--redText)"}},$b=a("p",null,[k("Limits the capability to optimize parameters"),a("br")],-1),Ib=a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--petrol)","text-align":"center","margin-top":"20px",border:"3px solid var(--petrolDark)"}},[a("div",{class:"i-material-symbols-euro",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--petrolDark)"}}),a("p",{style:{"font-size":"1.5rem",color:"var(--petrolText)"}},"Increases costs")],-1),Mb={__name:"3",setup(e){const t={};return O(K),(n,s)=>{const i=Za,o=vi;return x(),z(ce,ae(ie(t)),{default:_(()=>[_b,Y(" Icons defined in template style/icons.css"),m(o,null,{default:_(()=>[wb,bb,a("div",kb,[xb,a("p",Cb,[$b,m(i),k(" might lead to less optimal solution ")])]),Ib]),_:1})]),_:1},16)}}},Ab=R(Mb,[["__file","/@slidev/slides/3.md"]]),Sb="/ppopp23-biodynamo-slides/bdm-logo-large.png",Lb="/ppopp23-biodynamo-slides/striking-image-bottom-detail.png",Bb=a("h1",null,[k("Our solution: "),a("strong",null,"BioDynaMo")],-1),Eb=a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--green)","text-align":"center","margin-top":"10px",border:"3px solid var(--greenDark)"}},[a("p",{style:{"font-size":"1.5rem",color:"var(--greenText)"}},[a("img",{src:Sb,w:"100px",style:{"margin-left":"auto","margin-right":"auto"}}),a("p",null,[k("BioDynaMo is a "),a("strong",null,"modular and high-performance"),a("br"),k("agent-based simulation platform written in C++.")]),a("p",null,[a("a",{href:"https://biodynamo.org",target:"_blank",rel:"noopener"},"https://biodynamo.org")])])],-1),Db=a("img",{src:Lb,class:"rounded w-full",style:{"margin-top":"20px"}},null,-1),Tb={__name:"4",setup(e){const t={};return O(K),(n,s)=>(x(),z(ce,ae(ie(t)),{default:_(()=>[Bb,Eb,Db,Y(`
UNUSED_NOTES:

In our paper, we make the following key contributions:

First, we present a novel high-performance agent-based simulation engine.

Second, we present six optimizations to maximize performance.

And third, provide a rigorous performance evaluation. 

`)]),_:1},16))}},Pb=R(Tb,[["__file","/@slidev/slides/4.md"]]);const Ob={class:"slidev-layout section"},Fb={class:"absolute inset-0 z-1"},Nb={class:"flex flex-col justify-center h-full z-2"},Kb=a("hr",{class:"w-48 border-t-5 border-accent"},null,-1),Rb={class:"mt-4"},zb={__name:"section",setup(e){return O(K),(t,n)=>(x(),Q("div",Ob,[a("div",Fb,[m(Ra,{appear:"",name:"section"},{default:_(()=>[ft(t.$slots,"image")]),_:3})]),a("div",Nb,[Kb,a("div",Rb,[ft(t.$slots,"default")])])]))}},fo=R(zb,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/layouts/section.vue"]]),Ub=a("h1",null,"Background",-1),jb={__name:"5",setup(e){const t={layout:"section"};return O(K),(n,s)=>(x(),z(fo,ae(ie(t)),{default:_(()=>[Ub]),_:1},16))}},Hb=R(jb,[["__file","/@slidev/slides/5.md"]]),Vb={key:0,class:"footnotes-sep"},Wb={class:"footnotes"},qb=De({__name:"Footnotes",props:{filled:{default:!1,type:Boolean},separator:{default:!1,type:Boolean},x:{default:"l",type:String,validator:e=>e==="l"||e==="r"}},setup(e){return O(K),(t,n)=>(x(),Q("div",{class:ze(["absolute bottom-0 left-0 w-full",{"bg-main":e.filled}])},[e.separator?(x(),Q("hr",Vb)):Y("v-if",!0),a("section",Wb,[a("span",null,[Y(` <ul
      class="flex flex-wrap !list-none p-2"
      v-bind:class="{
        'justify-start': x === 'l',
        'justify-end': x === 'r',
      }"
    >
      <slot />
    </ul>`),ft(t.$slots,"default")])])],2))}}),Ct=R(qb,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/components/Footnotes.vue"]]),Gb=["w"],Yb=["src"],Zb=De({__name:"Image",props:{src:{type:String},w:{default:"100%",type:String}},setup(e){return O(K),(t,n)=>(x(),Q("div",{class:"rounded-md overflow-hidden drop-shadow",w:e.w,style:{"margin-right":"auto","margin-left":"auto"}},[a("img",{src:e.src},null,8,Yb)],8,Gb))}}),ve=R(Zb,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/components/Image.vue"]]),Jb=["w"],Qb=["src"],Xb=De({__name:"Video",props:{src:{type:String},w:{default:"100%",type:String}},setup(e){return O(K),(t,n)=>(x(),Q("div",{class:"rounded-md overflow-hidden drop-shadow",w:e.w,style:{"margin-right":"auto","margin-left":"auto"}},[a("video",{preload:"auto",controls:"",autoplay:"",loop:"",class:"w-full -m-1px border-none outline-none p-0",src:e.src,type:"video/mp4"},null,8,Qb)],8,Jb))}}),el=R(Xb,[["__file","/home/lukas/Documents/presentation/slidev-theme-breitwieser/components/Video.vue"]]),ot=De({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return m(vi,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),ek="/ppopp23-biodynamo-slides/boids/separation.gif",tk="/ppopp23-biodynamo-slides/boids/alignment.gif",nk="/ppopp23-biodynamo-slides/boids/cohesion.gif",sk=a("h1",null,"Example agent-based model",-1),ik=a("p",null,"Modeling a swarm of birds",-1),ok={class:"grid grid-cols-2",style:{"margin-top":"50px"}},ak={style:{display:"inline-grid"}},lk=a("p",null,[a("strong",null,"Agent is a bird with the following attributes:")],-1),rk=a("ul",null,[a("li",null,"position"),a("li",null,"velocity")],-1),ck=a("p",null,[a("strong",null,"and three behaviors")],-1),dk={grid:"~ cols-3 gap-2",m:"-t-2"},uk=a("div",null,[a("p",null,[a("img",{src:ek,alt:""}),k(" Separation")])],-1),pk=a("div",null,[a("p",null,[a("img",{src:tk,alt:""}),k(" Alignment")])],-1),mk=a("div",null,[a("p",null,[a("img",{src:nk,alt:""}),k(" Cohesion")])],-1),hk={style:{display:"inline-grid"}},gk=a("p",null,[a("strong",null,"Source:"),k(" Craig Reynolds, 1987, "),a("a",{href:"https://doi.org/10.1145/37401.37406",target:"_blank",rel:"noopener"},"https://doi.org/10.1145/37401.37406"),k(", "),a("strong",null,"Simulator:"),k(" Thierry Escande "),a("a",{href:"https://github.com/tescande/boids.git",target:"_blank",rel:"noopener"},"https://github.com/tescande/boids.git")],-1),fk={__name:"6",setup(e){const t={srcSequence:"./swarm-of-birds.md"},n=O(K);return(s,i)=>{const o=ot,l=vi,r=el,c=ve,d=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[sk,ik,a("div",ok,[a("div",ak,[m(o,null,{default:_(()=>[lk,rk]),_:1}),m(o,null,{default:_(()=>[ck]),_:1}),a("div",dk,[m(l,null,{default:_(()=>[uk,pk,mk]),_:1})])]),Y(" right column "),a("div",hk,[C(m(r,{w:"90%",src:"/ppopp23-biodynamo-slides/ShoreBirds-5013-pixabay.mp4",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==0]]),C(m(c,{w:"90%",src:"/ppopp23-biodynamo-slides/boids/boids-random-distribution.png",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==1]]),C(m(r,{w:"90%",src:"/ppopp23-biodynamo-slides/boids/extract-no-behaviors.mp4",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==2]]),C(m(r,{w:"90%",src:"/ppopp23-biodynamo-slides/boids/extract-one-behaviors.mp4",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==3]]),C(m(r,{w:"90%",src:"/ppopp23-biodynamo-slides/boids/extract-two-behaviors.mp4",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==4]]),C(m(r,{w:"90%",src:"/ppopp23-biodynamo-slides/boids/extract-three-behaviors.mp4",style:{"margin-top":"auto","margin-bottom":"auto"}},null,512),[[I,g(n).nav.clicks==5]])])]),m(d,{separator:""},{default:_(()=>[gk]),_:1})]),_:1},16)}}},vk=R(fk,[["__file","/@slidev/slides/6.md"]]),gu="/ppopp23-biodynamo-slides/cell-clustering/secretion.svg",fu="/ppopp23-biodynamo-slides/cell-clustering/chemotaxis.svg",vu="/ppopp23-biodynamo-slides/cell-clustering/forces.svg",yk=a("h1",null,"Cell sorting in BioDynaMo",-1),_k={grid:"~ cols-2 gap-10",style:{"margin-top":"40px"}},wk={style:{margin:"auto"}},bk=a("h2",null,"Agent",-1),kk=a("p",null,"Spherical cell with type attribute (red and blue)",-1),xk=a("h2",null,"Behaviors",-1),Ck={grid:"~ cols-3 gap-2",m:"-t-2"},$k=a("div",null,[a("img",{src:gu,h:"100px"}),k(" Substance secretion ")],-1),Ik=a("div",null,[a("img",{src:fu,h:"100px"}),k(" Chemotaxis ")],-1),Mk=a("div",null,[a("img",{src:vu,h:"100px"}),k(" Mechanical forces ")],-1),Ak=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),Sk={__name:"7",setup(e){const t={};return O(K),(n,s)=>{const i=ve,o=ot,l=vi,r=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[yk,a("div",_k,[Y("column 1 "),a("div",wk,[Y(' <Video v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4" w="90%" /> '),Y(" <v-click> "),m(i,{src:"/ppopp23-biodynamo-slides/cell-clustering/overview.png",w:"100%"}),Y(" </v-click> ")]),Y("column 2 "),a("div",null,[m(o,null,{default:_(()=>[bk,kk,xk]),_:1}),a("div",Ck,[m(l,null,{default:_(()=>[$k,Ik,Mk]),_:1})])])]),m(r,{separator:"",style:{"text-align":"left"}},{default:_(()=>[Ak]),_:1})]),_:1},16)}}},Lk=R(Sk,[["__file","/@slidev/slides/7.md"]]),Bk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ek=a("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Dk=[Ek];function Tk(e,t){return x(),Q("svg",Bk,Dk)}const Pk={name:"ph-clipboard",render:Tk},Ok={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Fk=a("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Nk=[Fk];function Kk(e,t){return x(),Q("svg",Ok,Nk)}const Rk={name:"ph-check-circle",render:Kk},zk=["title"],Uk=De({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;O(K);const n=O(pd),s=O(md),i=O(hd);function o(p=5){const h=[],v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=v.length;for(let b=0;b<p;b++)h.push(v.charAt(Math.floor(Math.random()*y)));return h.join("")}const l=_e(),r=Yt();pi(()=>{const p=t.at==null?s==null?void 0:s.value.length:t.at,h=T(()=>i!=null&&i.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(p||0)),t.ranges.length-1)),v=T(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(i!=null&&i.value)){const y=o(),b=qh(t.ranges.length-1).map($=>y+$);s!=null&&s.value&&(s.value.push(...b),uo(()=>b.forEach($=>Wh(s.value,$)),r))}$s(()=>{if(!l.value)return;const b=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const $ of b){const L=Array.from($.querySelectorAll(".line")),A=cu(L.length,v.value);if(L.forEach((B,E)=>{const q=A.includes(E+1);B.classList.toggle(Hh,!0),B.classList.toggle("highlighted",q),B.classList.toggle("dishonored",!q)}),t.maxHeight){const B=$.querySelector(".line.highlighted");B&&B.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:d}=Vg();function u(){var h,v;const p=(v=(h=l.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:v.textContent;p&&d(p)}return(p,h)=>{const v=Rk,y=Pk;return x(),Q("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:st({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[ft(p.$slots,"default"),g(Ee).codeCopy?(x(),Q("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:g(c)?"Copied":"Copy",onClick:h[0]||(h[0]=b=>u())},[g(c)?(x(),z(v,{key:0,class:"p-2 w-8 h-8"})):(x(),z(y,{key:1,class:"p-2 w-8 h-8"}))],8,zk)):Y("v-if",!0)],4)}}}),yu=R(Uk,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),jk=a("h1",null,"Cell sorting implementation",-1),Hk={grid:"~ cols-2 gap-5",style:{"margin-top":"40px"}},Vk=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark one-dark-pro",style:{"background-color":"#282c34"}},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"// Model initialization")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"AddSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'purple'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"AddSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'light-blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"CreateAgentsRandom"),a("span",{style:{color:"#ABB2BF"}},"(number, "),a("span",{style:{color:"#98C379"}},"'red'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"CreateAgentsRandom"),a("span",{style:{color:"#ABB2BF"}},"(number, "),a("span",{style:{color:"#98C379"}},"'blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"// Simulation ")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#C678DD"}},"for"),a("span",{style:{color:"#ABB2BF"}}," each iteration {")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"UpdateNeighborSearchIndex"),a("span",{style:{color:"#ABB2BF"}},"(); ")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#C678DD"}},"for"),a("span",{style:{color:"#ABB2BF"}}," each agent {")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"SecreteSubstance"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"FollowSubstanceGradient"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"CalculateForces"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   }")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"DiffuseSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'purple'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"DiffuseSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'light-blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"Visualize"),a("span",{style:{color:"#ABB2BF"}},"(); ")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"}")])])]),a("pre",{class:"slidev-code shiki shiki-light one-dark-pro",style:{"background-color":"#282c34"}},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"// Model initialization")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"AddSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'purple'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"AddSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'light-blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"CreateAgentsRandom"),a("span",{style:{color:"#ABB2BF"}},"(number, "),a("span",{style:{color:"#98C379"}},"'red'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#61AFEF"}},"CreateAgentsRandom"),a("span",{style:{color:"#ABB2BF"}},"(number, "),a("span",{style:{color:"#98C379"}},"'blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"// Simulation ")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#C678DD"}},"for"),a("span",{style:{color:"#ABB2BF"}}," each iteration {")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"UpdateNeighborSearchIndex"),a("span",{style:{color:"#ABB2BF"}},"(); ")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#C678DD"}},"for"),a("span",{style:{color:"#ABB2BF"}}," each agent {")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"SecreteSubstance"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"FollowSubstanceGradient"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"     "),a("span",{style:{color:"#61AFEF"}},"CalculateForces"),a("span",{style:{color:"#ABB2BF"}},"(agent);")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   }")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"DiffuseSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'purple'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"DiffuseSubstance"),a("span",{style:{color:"#ABB2BF"}},"("),a("span",{style:{color:"#98C379"}},"'light-blue'"),a("span",{style:{color:"#ABB2BF"}},");")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"   "),a("span",{style:{color:"#61AFEF"}},"Visualize"),a("span",{style:{color:"#ABB2BF"}},"(); ")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"}")])])])],-1),Wk={style:{"margin-top":"100px"}},qk={style:{color:"red"}},Gk={style:{color:"red"}},Yk={style:{color:"red"}},Zk={style:{color:"red"}},Jk={w:"30%",style:{"margin-left":"auto","margin-right":"auto",position:"absolute",top:"53%",left:"50%"}},Qk=a("img",{src:gu,h:"50px"},null,-1),Xk=a("img",{src:fu,h:"50px"},null,-1),ex=a("img",{src:vu,h:"50px"},null,-1),tx=[Qk,Xk,ex],nx={__name:"8",setup(e){const t={},n=O(K);return(s,i)=>{const o=yu;return x(),z(ce,ae(ie(t)),{default:_(()=>[jk,a("div",Hk,[m(o,Ka({},{ranges:["all","1-3","1,4,5","7,8,21","7,8,21,9","7,8,21,11-15","7,8,21,17,18","7,8,21,20","all","9,11-15,20","14","14","4,5"]}),{default:_(()=>[Vk]),_:1},16),a("div",Wk,[C(a("h2",null,"Fundamental operations",512),[[I,g(n).nav.clicks>=8]]),C(a("ul",null,[C(a("li",qk,"Iterate over agents and execute a function",512),[[I,g(n).nav.clicks==9]]),C(a("li",null,"Iterate over agents and execute a function",512),[[I,g(n).nav.clicks>=10]]),C(a("li",Gk,"Determine neighbors",512),[[I,g(n).nav.clicks==10]]),C(a("li",null,"Determine neighbors",512),[[I,g(n).nav.clicks>=11]]),C(a("li",Yk,"Iterate over neighbors and execute a function",512),[[I,g(n).nav.clicks==11]]),C(a("li",null,"Iterate over neighbors and execute a function",512),[[I,g(n).nav.clicks>=12]]),C(a("li",Zk,"Add and remove agents",512),[[I,g(n).nav.clicks==12]])],512),[[I,g(n).nav.clicks>=8]])])]),C(a("div",Jk,tx,512),[[I,g(n).nav.clicks==5]])]),_:1},16)}}},sx=R(nx,[["__file","/@slidev/slides/8.md"]]),ix=a("h1",null,"Benchmark simulations",-1),ox=a("p",null,"The selected simulations cover a broad spectrum of performance related simulation characteristics",-1),ax={grid:"~ cols-2 gap-5",style:{"margin-top":"30px"}},lx={style:{margin:"auto"}},rx={style:{margin:"auto"}},cx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),dx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),ux=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),px=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),mx=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),hx={__name:"9",setup(e){const t={clicks:4},n=O(K);return(s,i)=>{const o=ve,l=el,r=ot,c=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[ix,ox,a("div",ax,[Y(" Column 1 "),a("div",lx,[C(m(o,{src:"/ppopp23-biodynamo-slides/sim-characteristics/00.png",w:"100%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/sim-characteristics/10.png",w:"100%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/sim-characteristics/20.png",w:"100%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/sim-characteristics/30.png",w:"100%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/sim-characteristics/40.png",w:"100%"},null,512),[[I,g(n).nav.clicks==4]])]),Y(" Column 2 "),a("div",rx,[C(m(o,{src:"/ppopp23-biodynamo-slides/cgd-final.png",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(l,{src:"/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png",w:"80%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(l,{src:"/ppopp23-biodynamo-slides/bioinformatics/pyramidal-cell-cropped-fast-2.mp4",w:"80%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(l,{src:"/ppopp23-biodynamo-slides/bioinformatics/tumor-spheroid-cropped-fast.mp4",w:"80%"},null,512),[[I,g(n).nav.clicks==4]])])]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..4}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(r,null,{default:_(()=>[cx]),_:1}),m(r,null,{default:_(()=>[dx]),_:1}),m(r,null,{default:_(()=>[ux]),_:1}),m(r,null,{default:_(()=>[px]),_:1}),m(c,{separator:"",style:{"text-align":"left"}},{default:_(()=>[mx]),_:1}),Y(`
UNUSED_NOTES:
`)]),_:1},16)}}},gx=R(hx,[["__file","/@slidev/slides/9.md"]]),fx=a("h1",null,[k("More details about the "),a("strong",null,"simulations"),a("br"),k("and BioDynaMo’s "),a("strong",null,"modeling features")],-1),vx=a("p",null,[a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"https://doi.org/10.1093/bioinformatics/btab649")],-1),yx={__name:"10",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[fx,vx,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics-paper.png",w:"55%"})]),_:1},16)}}},_x=R(yx,[["__file","/@slidev/slides/10.md"]]),wx=a("h1",null,"Optimizations",-1),bx={__name:"11",setup(e){const t={layout:"section"};return O(K),(n,s)=>(x(),z(fo,ae(ie(t)),{default:_(()=>[wx]),_:1},16))}},kx=R(bx,[["__file","/@slidev/slides/11.md"]]),xx=a("h1",null,[k("Key observation:"),a("br"),k("Agent-based simulations are often "),a("strong",null,"memory-bound")],-1),Cx=a("p",null,"Microarchitecture analysis for five simulations",-1),$x=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Ix={__name:"12",setup(e){const t={class:"text-center",clicks:1,srcSequence:"./memory-bound.md"},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[xx,Cx,C(m(o,{src:"/ppopp23-biodynamo-slides/uarch-analysis/0.svg",w:"38%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/uarch-analysis/1.svg",w:"38%"},null,512),[[I,g(n).nav.clicks==1]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[$x]),_:1})]),_:1},16)}}},Mx=R(Ix,[["__file","/@slidev/slides/12.md"]]);const yi=e=>(Sc("data-v-213e2124"),e=e(),Lc(),e),Ax=yi(()=>a("h1",null,"Key challenges and improvements",-1)),Sx={grid:"~ cols-3 gap-5",m:"-t-2",style:{"margin-top":"0px"}},Lx=yi(()=>a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--blue)","text-align":"center","margin-top":"20px",border:"3px solid var(--blueDark)"}},[a("div",{class:"i-uil-processor",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--blueDark)"}}),a("div",{style:{"font-size":"1.5rem",margin:"0",color:"var(--blueText)"}},[a("p",null,[a("strong",null,"I: Maximize parallelization")]),a("div",{style:{"text-align":"left"}},[a("ul",null,[a("li",null,"Optimize radial neighbor search"),a("li",null,"Parallelize the addition and removal of agents")])])])],-1)),Bx=yi(()=>a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--green)","text-align":"center","margin-top":"20px",border:"3px solid var(--greenDark)"}},[a("div",{class:"i-clarity-memory-solid",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--greenDark)"}}),a("div",{style:{"font-size":"1.5rem",margin:"0",color:"var(--greenText)"}},[a("p",null,[a("strong",null,"II: Memory layout")]),a("div",{style:{"text-align":"left"}},[a("ul",null,[a("li",null,"NUMA-aware iteration"),a("li",null,"Agent sorting and balancing"),a("li",null,"Pool-based memory allocator")])])])],-1)),Ex=yi(()=>a("div",{class:"rounded w-full drop-shadow",style:{padding:"10px","background-color":"var(--nude)","text-align":"center","margin-top":"20px",border:"3px solid var(--nudeDark)"}},[a("div",{class:"i-clarity-tasks-solid",style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--nudeDark)"}}),a("div",{style:{"font-size":"1.5rem",margin:"0",color:"var(--nudeText)"}},[a("p",null,[a("strong",null,"III: Avoid unnecessary work")]),a("div",{style:{"text-align":"left"}},[a("ul",null,[a("li",null,"Pair-wise force calculation for static regions")])])])],-1)),Dx=yi(()=>a("p",null,[a("strong",null,"Improved fundamental operations:")],-1)),Tx={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"0px"}},Px={style:{color:"red"}},Ox={style:{color:"red"}},Fx={style:{color:"red"}},Nx={style:{color:"red"}},Kx={__name:"13",setup(e){const t={},n=O(K);return(s,i)=>{const o=vi;return x(),z(ce,ae(ie(t)),{default:_(()=>[Ax,a("div",Sx,[m(o,null,{default:_(()=>[Lx,Bx,Ex]),_:1})]),Dx,a("div",Tx,[Y(" column 1 "),a("div",null,[a("ul",null,[C(a("li",Px,"Determine neighbors",512),[[I,g(n).nav.clicks==1]]),C(a("li",null,"Determine neighbors",512),[[I,g(n).nav.clicks!=1]]),C(a("li",Ox,"Add and remove agents",512),[[I,g(n).nav.clicks==1]]),C(a("li",null,"Add and remove agents",512),[[I,g(n).nav.clicks!=1]])])]),Y(" column 2 "),a("div",null,[a("ul",null,[C(a("li",Fx,"Iterate over agents and execute a function",512),[[I,g(n).nav.clicks==2]]),C(a("li",null,"Iterate over agents and execute a function",512),[[I,g(n).nav.clicks!=2]]),C(a("li",Nx,"Iterate over neighbors and execute a function",512),[[I,g(n).nav.clicks==2]]),C(a("li",null,"Iterate over neighbors and execute a function",512),[[I,g(n).nav.clicks!=2]])])])])]),_:1},16)}}},Rx=R(Kx,[["__scopeId","data-v-213e2124"],["__file","/@slidev/slides/13.md"]]),zx=a("h1",null,"NUMA-aware iteration",-1),Ux=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),jx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Hx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Vx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Wx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),qx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Gx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Yx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Zx={__name:"14",setup(e){const t={clicks:7},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[zx,C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/10.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/20.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/30.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/40.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/50.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/60.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==5]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/70.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==6]]),C(m(o,{src:"/ppopp23-biodynamo-slides/numa-aware-iteration/80.svg",w:"60%",style:{padding:"20px","margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==7]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..7}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[Ux]),_:1}),m(l,null,{default:_(()=>[jx]),_:1}),m(l,null,{default:_(()=>[Hx]),_:1}),m(l,null,{default:_(()=>[Vx]),_:1}),m(l,null,{default:_(()=>[Wx]),_:1}),m(l,null,{default:_(()=>[qx]),_:1}),m(l,null,{default:_(()=>[Gx]),_:1}),m(l,null,{default:_(()=>[Yx]),_:1})]),_:1},16)}}},Jx=R(Zx,[["__file","/@slidev/slides/14.md"]]),Qx=a("h1",null,"Agent sorting and balancing",-1),Xx=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),e2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),t2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),n2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),s2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),i2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),o2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),a2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),l2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),r2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),c2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),d2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),u2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),p2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),m2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),h2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),g2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),f2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),v2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),y2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),_2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),w2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),b2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),k2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),x2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),C2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),$2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),I2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),M2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),A2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),S2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),L2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),B2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),E2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),D2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),T2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),P2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),O2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),F2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),N2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),K2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),R2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),z2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),U2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),j2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),H2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),V2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),W2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),q2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),G2=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Y2={__name:"15",setup(e){const t={clicks:50,class:"text-center"},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[Qx,Y(`
bash command to generate 
i=0; for f in * ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"load-balancing-mechanism/$f\\" w=\\"48%\\" />" && i=$(($i+1)); done
`),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/00.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/10.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/20.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/30.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/31.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/32.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==5]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/33.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==6]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/34.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==7]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/35.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==8]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/36.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==9]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/37.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==10]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/38.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==11]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/39.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==12]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/40.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==13]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/41.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==14]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/42.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==15]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/43.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==16]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/47.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==17]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/48.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==18]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/49.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==19]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/50.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==20]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/52.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==21]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/53.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==22]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/54.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==23]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/55.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==24]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/56.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==25]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/57.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==26]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/58.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==27]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/59.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==28]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/60.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==29]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/61.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==30]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/62.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==31]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/63.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==32]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/64.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==33]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/65.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==34]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/66.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==35]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/67.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==36]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/68.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==37]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/69.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==38]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/80.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==39]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/81.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==40]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/82.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==41]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/83.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==42]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/90.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==43]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/91.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==44]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/92.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==45]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/93.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==46]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/96.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==47]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/97.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==48]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/98.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==49]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing-mechanism/99.svg",w:"48%"},null,512),[[I,g(n).nav.clicks==50]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..50}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[Xx]),_:1}),m(l,null,{default:_(()=>[e2]),_:1}),m(l,null,{default:_(()=>[t2]),_:1}),m(l,null,{default:_(()=>[n2]),_:1}),m(l,null,{default:_(()=>[s2]),_:1}),m(l,null,{default:_(()=>[i2]),_:1}),m(l,null,{default:_(()=>[o2]),_:1}),m(l,null,{default:_(()=>[a2]),_:1}),m(l,null,{default:_(()=>[l2]),_:1}),m(l,null,{default:_(()=>[r2]),_:1}),m(l,null,{default:_(()=>[c2]),_:1}),m(l,null,{default:_(()=>[d2]),_:1}),m(l,null,{default:_(()=>[u2]),_:1}),m(l,null,{default:_(()=>[p2]),_:1}),m(l,null,{default:_(()=>[m2]),_:1}),m(l,null,{default:_(()=>[h2]),_:1}),m(l,null,{default:_(()=>[g2]),_:1}),m(l,null,{default:_(()=>[f2]),_:1}),m(l,null,{default:_(()=>[v2]),_:1}),m(l,null,{default:_(()=>[y2]),_:1}),m(l,null,{default:_(()=>[_2]),_:1}),m(l,null,{default:_(()=>[w2]),_:1}),m(l,null,{default:_(()=>[b2]),_:1}),m(l,null,{default:_(()=>[k2]),_:1}),m(l,null,{default:_(()=>[x2]),_:1}),m(l,null,{default:_(()=>[C2]),_:1}),m(l,null,{default:_(()=>[$2]),_:1}),m(l,null,{default:_(()=>[I2]),_:1}),m(l,null,{default:_(()=>[M2]),_:1}),m(l,null,{default:_(()=>[A2]),_:1}),m(l,null,{default:_(()=>[S2]),_:1}),m(l,null,{default:_(()=>[L2]),_:1}),m(l,null,{default:_(()=>[B2]),_:1}),m(l,null,{default:_(()=>[E2]),_:1}),m(l,null,{default:_(()=>[D2]),_:1}),m(l,null,{default:_(()=>[T2]),_:1}),m(l,null,{default:_(()=>[P2]),_:1}),m(l,null,{default:_(()=>[O2]),_:1}),m(l,null,{default:_(()=>[F2]),_:1}),m(l,null,{default:_(()=>[N2]),_:1}),m(l,null,{default:_(()=>[K2]),_:1}),m(l,null,{default:_(()=>[R2]),_:1}),m(l,null,{default:_(()=>[z2]),_:1}),m(l,null,{default:_(()=>[U2]),_:1}),m(l,null,{default:_(()=>[j2]),_:1}),m(l,null,{default:_(()=>[H2]),_:1}),m(l,null,{default:_(()=>[V2]),_:1}),m(l,null,{default:_(()=>[W2]),_:1}),m(l,null,{default:_(()=>[q2]),_:1}),m(l,null,{default:_(()=>[G2]),_:1})]),_:1},16)}}},Z2=R(Y2,[["__file","/@slidev/slides/15.md"]]),J2=a("h1",null,"Evaluation",-1),Q2={__name:"16",setup(e){const t={layout:"section"};return O(K),(n,s)=>(x(),z(fo,ae(ie(t)),{default:_(()=>[J2]),_:1},16))}},X2=R(Q2,[["__file","/@slidev/slides/16.md"]]),e4=a("h1",null,"Benchmark hardware",-1),t4={__name:"17",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[e4,m(i,{src:"/ppopp23-biodynamo-slides/hardware.png",w:"80%",style:{"margin-top":"110px"}})]),_:1},16)}}},n4=R(t4,[["__file","/@slidev/slides/17.md"]]),s4=a("h1",null,[k("BioDynaMo "),a("strong",null,"scales well"),k(" across"),a("br"),k("NUMA nodes & large CPU core counts")],-1),i4=a("p",null,"Cell proliferation simulation",-1),o4={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},a4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),l4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),r4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),c4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),d4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),u4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),p4={__name:"18",setup(e){const t={class:"text-center",clicks:5},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[s4,i4,m(o,{src:"/ppopp23-biodynamo-slides/cgd-final.png",w:"85px",style:{float:"left","margin-right":"20px","margin-left":"120px"}}),k(),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-0.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-1.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-2.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-3.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-4.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-5.svg",w:"60%",style:{margin:"0px"}},null,512),[[I,g(n).nav.clicks==5]]),a("div",o4,[C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-2.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-3.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-4.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-5.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==5]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-2.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-3.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-4.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-5.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==5]])]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[a4]),_:1}),m(l,null,{default:_(()=>[l4]),_:1}),m(l,null,{default:_(()=>[r4]),_:1}),m(l,null,{default:_(()=>[c4]),_:1}),m(l,null,{default:_(()=>[d4]),_:1}),m(l,null,{default:_(()=>[u4]),_:1})]),_:1},16)}}},m4=R(p4,[["__file","/@slidev/slides/18.md"]]),h4=a("h1",null,[k("Cell clustering benefits from BioDynaMo’s"),a("br"),a("strong",null,"memory optimizations"),k(" for any number of CPU cores")],-1),g4={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},f4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),v4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),y4={__name:"19",setup(e){const t={class:"text-center",clicks:1},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[h4,m(o,{src:"/ppopp23-biodynamo-slides/cell-clustering/soma-clustering-final-state.png",w:"85px",style:{display:"inline-block","margin-right":"20px"}}),k(),m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-5.svg",w:"60%",style:{"margin-top":"52px",display:"inline-block"}}),a("div",g4,[C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/soma-clustering-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/soma-clustering-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]])]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[f4]),_:1}),m(l,null,{default:_(()=>[v4]),_:1})]),_:1},16)}}},_4=R(y4,[["__file","/@slidev/slides/19.md"]]),w4=a("h1",null,[k("The epidemiology use case benefits from using "),a("strong",null,"additional memory")],-1),b4={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},k4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),x4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),C4={__name:"20",setup(e){const t={class:"text-center",clicks:1},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[w4,m(o,{src:"/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png",w:"85px",style:{display:"inline-block","margin-right":"20px"}}),k(),m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-5.svg",w:"60%",style:{"margin-top":"52px",display:"inline-block"}}),a("div",b4,[C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/epidemiology-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/epidemiology-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]])]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[k4]),_:1}),m(l,null,{default:_(()=>[x4]),_:1})]),_:1},16)}}},$4=R(C4,[["__file","/@slidev/slides/20.md"]]),I4=a("h1",null,[k("The neuroscience use case benefits substantially from "),a("strong",null,"static region detection")],-1),M4={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},A4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),S4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),L4={__name:"21",setup(e){const t={class:"text-center",clicks:1},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[I4,m(o,{src:"/ppopp23-biodynamo-slides/striking-image.png",w:"85px",style:{display:"inline-block","margin-right":"20px"}}),k(),m(o,{src:"/ppopp23-biodynamo-slides/scalability/legend-5.svg",w:"60%",style:{"margin-top":"52px",display:"inline-block"}}),a("div",M4,[C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/pyramidal-cell-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/pyramidal-cell-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-0.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-1.svg",w:"80%"},null,512),[[I,g(n).nav.clicks==1]])]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[A4]),_:1}),m(l,null,{default:_(()=>[S4]),_:1})]),_:1},16)}}},B4=R(L4,[["__file","/@slidev/slides/21.md"]]),E4=a("h1",null,[k("BioDynaMo is up to "),a("strong",null,[k("9"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" more efficient")]),k(" than Biocellion")],-1),D4=a("p",null,"We implement Biocellions cell clustering simulation in BioDynaMo",-1),T4={class:"grid grid-cols-2 gap-10"},P4={style:{display:"inline-grid"}},O4={grid:"~ cols-2 gap-2",style:{"margin-top":"30px"},class:"text-center"},F4=a("p",null,"Initial state",-1),N4=a("p",null,"Final state",-1),K4={style:{display:"inline-grid"}},R4=a("ul",null,[a("li",null,[k("Small-scale with "),a("strong",null,"26.8 million"),k(" cells "),a("ul",null,[a("li",null,"16 CPU cores (Biocellion & BioDynaMo)"),a("li",null,[k("Result: "),a("strong",null,[k("BioDynaMo is 4.2"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" faster")])])])])],-1),z4=a("ul",null,[a("li",null,[k("Large-scale with 281 million cells "),a("ul",null,[a("li",null,"Biocellion: 21 nodes with 672 CPU cores"),a("li",null,"BioDynaMo: 1 node with 72 CPU cores"),a("li",null,[k("Result: same runtime, but BioDynaMo uses "),a("strong",null,[k("9.3"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" fewer CPU cores")])])])])],-1),U4=a("p",null,[a("strong",null,"Biocellion paper:"),k(" Kang et al., 2014, "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btu498",target:"_blank",rel:"noopener"},"https://doi.org/10.1093/bioinformatics/btu498")],-1),j4={__name:"22",setup(e){const t={};return O(K),(n,s)=>{const i=ve,o=ot,l=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[Y(" # BioDynaMo is <Hl>10$\\times$ more efficient</Hl> than Biocellion "),E4,D4,a("div",T4,[a("div",P4,[a("div",O4,[m(i,{src:"/ppopp23-biodynamo-slides/biocellion-cell-clustering-initial-state.png",w:"80%",style:{"margin-top":"auto","margin-bottom":"auto"}}),m(i,{src:"/ppopp23-biodynamo-slides/biocellion-cell-clustering-final-state.png",w:"80%",style:{"margin-top":"auto","margin-bottom":"auto"}}),F4,N4])]),Y(" right column "),a("div",K4,[Y(" Two Benchmarks: "),m(o,null,{default:_(()=>[R4]),_:1}),m(o,null,{default:_(()=>[z4]),_:1})])]),m(l,{separator:""},{default:_(()=>[U4]),_:1})]),_:1},16)}}},H4=R(j4,[["__file","/@slidev/slides/22.md"]]),V4=a("h1",null,[k("BioDynaMo is "),a("strong",null,[k("1000"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" faster")]),k(" than"),a("br"),k("Cortex3D and NetLogo")],-1),W4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),q4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),G4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Y4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Z4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),J4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),Q4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),X4=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),eC=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),tC=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),nC=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),sC=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),iC={__name:"23",setup(e){const t={class:"text-center",clicks:12},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[V4,Y(`
bash command to generate 
i=0; pushd public &&  for f in cx3d-netlogo/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"$f\\" w=\\"65%\\" />" && i=$(($i+1)); done ; popd
`),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/00.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/01.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/02.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/03.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/04.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/10.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==5]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/20.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==6]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/21.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==7]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/30.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==8]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/40.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==9]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/50.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==10]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/51.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==11]]),C(m(o,{src:"/ppopp23-biodynamo-slides/cx3d-netlogo/52.svg",w:"65%"},null,512),[[I,g(n).nav.clicks==12]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[W4]),_:1}),m(l,null,{default:_(()=>[q4]),_:1}),m(l,null,{default:_(()=>[G4]),_:1}),m(l,null,{default:_(()=>[Y4]),_:1}),m(l,null,{default:_(()=>[Z4]),_:1}),m(l,null,{default:_(()=>[J4]),_:1}),m(l,null,{default:_(()=>[Q4]),_:1}),m(l,null,{default:_(()=>[X4]),_:1}),m(l,null,{default:_(()=>[eC]),_:1}),m(l,null,{default:_(()=>[tC]),_:1}),m(l,null,{default:_(()=>[nC]),_:1}),m(l,null,{default:_(()=>[sC]),_:1})]),_:1},16)}}},oC=R(iC,[["__file","/@slidev/slides/23.md"]]),aC="/ppopp23-biodynamo-slides/runtime-complexity.svg",lC="/ppopp23-biodynamo-slides/memory-complexity.svg",rC=a("h1",null,[k("BioDynaMo’s runtime and memory consumption increases "),a("strong",null,"linearly"),k(" with model size")],-1),cC=a("div",{grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},[a("img",{border:"rounded",src:aC,class:"drop-shadow"}),a("img",{border:"rounded",src:lC,class:"drop-shadow"})],-1),dC={__name:"24",setup(e){const t={};return O(K),(n,s)=>(x(),z(ce,ae(ie(t)),{default:_(()=>[rC,cC]),_:1},16))}},uC=R(dC,[["__file","/@slidev/slides/24.md"]]),pC=a("h1",null,"More in the paper",-1),mC=a("p",null,[a("a",{href:"https://arxiv.org/abs/2301.06984",target:"_blank",rel:"noopener"},"https://arxiv.org/abs/2301.06984"),k(", "),a("a",{href:"https://doi.org/10.1145/3572848.3577480",target:"_blank",rel:"noopener"},"https://doi.org/10.1145/3572848.3577480")],-1),hC={__name:"25",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[pC,mC,m(i,{src:"/ppopp23-biodynamo-slides/paper.png",w:"80%"})]),_:1},16)}}},gC=R(hC,[["__file","/@slidev/slides/25.md"]]),fC={class:"slidev-icon",viewBox:"0 0 256 185",width:"1.2em",height:"1.2em"},vC=a("path",{fill:"#2396ED",d:"M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5c-1.2-10-6.725-18.749-16.333-26.499l-5.524-4l-3.844 5.75c-4.803 7.5-7.205 18-6.485 28c.24 3.499 1.441 9.749 5.044 15.249c-3.362 2-10.328 4.5-19.455 4.5H1.155l-.48 2c-1.682 9.999-1.682 41.248 18.014 65.247c14.892 18.249 36.99 27.499 66.053 27.499c62.93 0 109.528-30.25 131.386-84.997c8.647.25 27.142 0 36.51-18.75c.24-.5.72-1.5 2.401-5.249l.961-2l-5.284-3.25ZM139.986 0h-26.42v24.999h26.42V0Zm0 29.999h-26.42v24.999h26.42v-25Zm-31.225 0h-26.42v24.999h26.42v-25Zm-31.225 0H51.115v24.999h26.421v-25ZM46.311 59.998H19.89v24.999h26.42v-25Zm31.225 0H51.115v24.999h26.421v-25Zm31.225 0h-26.42v24.999h26.42v-25Zm31.226 0h-26.422v24.999h26.422v-25Zm31.225 0H144.79v24.999h26.422v-25Z"},null,-1),yC=[vC];function _C(e,t){return x(),Q("svg",fC,yC)}const wC={name:"logos-docker-icon",render:_C},bC={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},kC=a("path",{fill:"currentColor",d:"m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12Zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"},null,-1),xC=[kC];function CC(e,t){return x(),Q("svg",bC,xC)}const $C={name:"material-symbols-code-blocks",render:CC},IC={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},MC=a("path",{fill:"currentColor",d:"M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268z"},null,-1),AC=a("path",{fill:"currentColor",d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"},null,-1),SC=[MC,AC];function LC(e,t){return x(),Q("svg",IC,SC)}const BC={name:"bxs-file-pdf",render:LC},EC={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},DC=De({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return O(K),(n,s)=>(x(),Q("div",EC,[a("div",{class:ze(["col-left",t.class])},[ft(n.$slots,"default")],2),a("div",{class:ze(["col-right",t.class])},[ft(n.$slots,"right")],2)]))}}),TC=R(DC,[["__file","/home/lukas/Documents/presentation/slides/node_modules/@slidev/client/layouts/two-cols.vue"]]),PC=a("h1",null,"Supplementary Materials",-1),OC=a("strong",null,"additional evaluations",-1),FC=a("strong",null,"reproduce",-1),NC=a("ul",null,[a("li",null,[a("a",{href:"https://doi.org/10.5281/zenodo.6463816",target:"_blank",rel:"noopener"},"https://doi.org/10.5281/zenodo.6463816")]),a("li",null,[a("a",{href:"https://github.com/CMU-SAFARI/BioDynaMo",target:"_blank",rel:"noopener"},"https://github.com/CMU-SAFARI/BioDynaMo")])],-1),KC=a("pre",{class:"shiki-container"},[a("pre",{class:"slidev-code shiki shiki-dark one-dark-pro",style:{"background-color":"#282c34"}},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# extract the provided code archive")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"mkdir "),a("span",{style:{color:"#98C379"}},"reproduce")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"tar "),a("span",{style:{color:"#D19A66"}},"-xzf"),a("span",{style:{color:"#ABB2BF"}}," <"),a("span",{style:{color:"#98C379"}},"pat"),a("span",{style:{color:"#ABB2BF"}},"h>"),a("span",{style:{color:"#98C379"}},"/SF2-code.tar.gz"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#D19A66"}},"-C"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#98C379"}},"reproduce")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#56B6C2"}},"cd"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#98C379"}},"reproduce/bdm-paper-examples")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# load the provided self-contained docker image")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"docker/load.sh <"),a("span",{style:{color:"#98C379"}},"pat"),a("span",{style:{color:"#ABB2BF"}},"h>"),a("span",{style:{color:"#98C379"}},"/SF3-bdm-publication-image.tar.gz")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# execute the scripts")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"docker/run.sh "),a("span",{style:{color:"#98C379"}},"./run-main.sh")])])]),a("pre",{class:"slidev-code shiki shiki-light one-dark-pro",style:{"background-color":"#282c34"}},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# extract the provided code archive")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"mkdir "),a("span",{style:{color:"#98C379"}},"reproduce")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"tar "),a("span",{style:{color:"#D19A66"}},"-xzf"),a("span",{style:{color:"#ABB2BF"}}," <"),a("span",{style:{color:"#98C379"}},"pat"),a("span",{style:{color:"#ABB2BF"}},"h>"),a("span",{style:{color:"#98C379"}},"/SF2-code.tar.gz"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#D19A66"}},"-C"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#98C379"}},"reproduce")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#56B6C2"}},"cd"),a("span",{style:{color:"#ABB2BF"}}," "),a("span",{style:{color:"#98C379"}},"reproduce/bdm-paper-examples")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# load the provided self-contained docker image")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"docker/load.sh <"),a("span",{style:{color:"#98C379"}},"pat"),a("span",{style:{color:"#ABB2BF"}},"h>"),a("span",{style:{color:"#98C379"}},"/SF3-bdm-publication-image.tar.gz")]),k(`
`),a("span",{class:"line"}),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#7F848E","font-style":"italic"}},"# execute the scripts")]),k(`
`),a("span",{class:"line"},[a("span",{style:{color:"#ABB2BF"}},"docker/run.sh "),a("span",{style:{color:"#98C379"}},"./run-main.sh")])])])],-1),RC=a("code",null,"SF1-readme.pdf",-1),zC=a("div",{class:"grid grid-cols-3 gap-2",w:"60%",style:{"margin-left":"auto","margin-right":"auto","margin-top":"-10px"}},[a("img",{src:du,w:"100px"}),a("img",{src:uu,w:"100px"}),a("img",{src:pu,w:"100px"})],-1),UC={__name:"26",setup(e){const t={layout:"two-cols"},n=O(K);return(s,i)=>{const o=BC,l=$C,r=wC,c=yu,d=ot,u=Za,p=ve;return x(),z(TC,ae(ie(t)),{right:_(h=>[C(m(p,{src:"/ppopp23-biodynamo-slides/SF1-readme.png",w:"90%"},null,512),[[I,g(n).nav.clicks>=5]])]),default:_(()=>[PC,a("p",null,[k("Provides "),OC,k(" and all files required to "),FC,k(" the results ("),m(o),k(),m(l),k(),m(r),k("):")]),NC,m(d,null,{default:_(()=>[m(c,Ka({},{ranges:["all","1-4","6-7","9-10"]}),{default:_(()=>[KC]),_:1},16)]),_:1}),m(d,null,{default:_(()=>[a("p",null,[k("More details in file "),RC,k(),a("strong",null,[m(u)])])]),_:1}),m(d,null,{default:_(()=>[zC]),_:1})]),_:1},16)}}},jC=R(UC,[["__file","/@slidev/slides/26.md"]]),HC=a("h1",null,"Summary",-1),VC=a("p",null,"Our optimizations to maximize parallelism, improve the memory layout, and avoid unnecessary work are effective and give BioDynaMo the following performance characteristics.",-1),WC=a("div",{class:"rounded w-full drop-shadow",style:{padding:"7px","background-color":"var(--green)","text-align":"center","margin-top":"15px",border:"3px solid var(--greenDark)"}},[a("div",{style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--greenDark)"}}),a("div",{style:{"font-size":"1.35rem",margin:"0",color:"var(--greenText)"}},[k(" BioDynaMo "),a("strong",null,"scales well"),k(" across a large number of CPU cores ")])],-1),qC=a("div",{class:"rounded w-full drop-shadow",style:{padding:"7px","background-color":"var(--green)","text-align":"center","margin-top":"15px",border:"3px solid var(--greenDark)"}},[a("div",{style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--greenDark)"}}),a("div",{style:{"font-size":"1.35rem",margin:"0",color:"var(--greenText)"}},[a("p",null,[a("strong",null,"Runtime and memory"),k(" consumption "),a("strong",null,"increases linearly"),k(" with the number of agents")])])],-1),GC=a("div",{class:"rounded w-full drop-shadow",style:{padding:"7px","background-color":"var(--green)","text-align":"center","margin-top":"15px",border:"3px solid var(--greenDark)"}},[a("div",{style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--greenDark)"}}),a("div",{style:{"font-size":"1.35rem",margin:"0",color:"var(--greenText)"}},[a("p",null,[k("BioDynaMo is more than "),a("strong",null,[k("1000"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" faster")]),k(" than Cortex3D and NetLogo and"),a("br"),k(" up to "),a("strong",null,[k("9"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])]),k(" more efficient")]),k(" than Biocellion")])])],-1),YC=a("div",{class:"rounded w-full drop-shadow",style:{padding:"7px","background-color":"var(--green)","text-align":"center","margin-top":"15px",border:"3px solid var(--greenDark)"}},[a("div",{style:{position:"absolute",top:"-20px",left:"10px",width:"40px",height:"40px",color:"var(--greenDark)"}}),a("div",{style:{"font-size":"1.35rem",margin:"0",color:"var(--greenText)"}},[a("p",null,[k("These performance characteristics enable "),a("strong",null,"simulations with billions of agents"),k(" on a single server.")])])],-1),ZC={__name:"27",setup(e){const t={};return O(K),(n,s)=>{const i=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[HC,VC,m(i,null,{default:_(()=>[WC]),_:1}),m(i,null,{default:_(()=>[qC]),_:1}),m(i,null,{default:_(()=>[GC]),_:1}),m(i,null,{default:_(()=>[YC]),_:1})]),_:1},16)}}},JC=R(ZC,[["__file","/@slidev/slides/27.md"]]),QC=a("h1",null,"Future work",-1),XC=a("p",null,"Distributed simulation engine",-1),e$={__name:"28",setup(e){const t={};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[QC,XC,m(i,{src:"/ppopp23-biodynamo-slides/distributed-bdm.png",w:"70%"})]),_:1},16)}}},t$=R(e$,[["__file","/@slidev/slides/28.md"]]),n$=a("h1",null,[k("BioDynaMo is available under the permissive"),a("br"),k("Apache 2.0 "),a("strong",null,"open source"),k(" license")],-1),s$=a("p",null,[a("a",{href:"https://github.com/BioDynaMo/biodynamo",target:"_blank",rel:"noopener"},"https://github.com/BioDynaMo/biodynamo")],-1),i$={__name:"29",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[n$,s$,m(i,{src:"/ppopp23-biodynamo-slides/bdm-repo.png",w:"58%"})]),_:1},16)}}},o$=R(i$,[["__file","/@slidev/slides/29.md"]]),a$="/ppopp23-biodynamo-slides/logos/newcastle.png",l$="/ppopp23-biodynamo-slides/logos/surrey.png",r$="/ppopp23-biodynamo-slides/logos/cyprus.png",c$="/ppopp23-biodynamo-slides/logos/gsi.png",d$="/ppopp23-biodynamo-slides/logos/scimpulse-full.png",u$="/ppopp23-biodynamo-slides/logos/geneva.jpg",p$="/ppopp23-biodynamo-slides/logos/tum.png",m$="/ppopp23-biodynamo-slides/logos/cbs.jpg",h$=a("h1",null,[a("strong",null,"Join us"),k(" in pushing the limits of agent-based modeling")],-1),g$=a("p",null,[k("BioDynamo is an "),a("strong",null,"open, welcoming, and collaborative project"),k(": "),a("a",{href:"https://biodynamo.org",target:"_blank",rel:"noopener"},"https://biodynamo.org")],-1),f$=a("p",null,"Besides the organizations behind this paper,",-1),v$=a("div",{class:"grid grid-cols-3 gap-10",w:"90%",style:{margin:"auto"}},[a("img",{src:Xa,h:"60px",style:{margin:"auto"}}),a("img",{src:mu,h:"35px",style:{margin:"auto"}}),a("img",{src:hu,h:"40px",style:{margin:"auto"}})],-1),y$=a("p",null,[k("BioDynamo is developed by the "),a("strong",null,"BioDynamo collaboration"),k(",")],-1),_$=a("div",{class:"grid grid-cols-4 gap-10",w:"80%",style:{margin:"auto"}},[a("img",{src:Xa,h:"60px",style:{margin:"auto"}}),a("img",{src:a$,h:"40px",style:{margin:"auto"}}),a("img",{src:l$,h:"40px",style:{margin:"auto"}}),a("img",{src:r$,h:"40px",style:{margin:"auto"}})],-1),w$=a("div",{class:"grid grid-cols-3 gap-10",w:"80%",style:{margin:"auto"}},[a("img",{src:c$,h:"40px",style:{margin:"auto"}}),a("img",{src:d$,h:"60px",style:{margin:"auto"}}),a("img",{src:u$,h:"40px",style:{margin:"auto"}})],-1),b$=a("p",null,"and further organizations.",-1),k$=a("div",{class:"grid grid-cols-2 gap-10",w:"80%",style:{margin:"auto"}},[a("img",{src:p$,h:"40px",style:{margin:"auto"}}),a("img",{src:m$,h:"40px",style:{margin:"auto"}})],-1),x$={__name:"30",setup(e){const t={};return O(K),(n,s)=>(x(),z(ce,ae(ie(t)),{default:_(()=>[h$,g$,Y(" <v-click> "),f$,v$,Y(" </v-click> "),Y(" <v-click> "),y$,_$,w$,Y(" </v-click> "),Y(" <v-click> "),b$,k$,Y(" </v-click> ")]),_:1},16))}},C$=R(x$,[["__file","/@slidev/slides/30.md"]]),$$=a("h1",null,"More in the paper",-1),I$=a("p",null,[a("a",{href:"https://arxiv.org/abs/2301.06984",target:"_blank",rel:"noopener"},"https://arxiv.org/abs/2301.06984"),k(", "),a("a",{href:"https://doi.org/10.1145/3572848.3577480",target:"_blank",rel:"noopener"},"https://doi.org/10.1145/3572848.3577480")],-1),M$={grid:"~ cols-2 gap-2",m:"-t-2",style:{"margin-top":"30px"}},A$={__name:"31",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[$$,I$,a("div",M$,[m(i,{src:"/ppopp23-biodynamo-slides/paper.png",w:"100%"}),m(i,{src:"/ppopp23-biodynamo-slides/arxiv-qrcode.png",w:"70%",style:{margin:"auto"}})])]),_:1},16)}}},S$=R(A$,[["__file","/@slidev/slides/31.md"]]),L$=a("h1",null,"Appendix",-1),B$={__name:"32",setup(e){const t={layout:"section"};return O(K),(n,s)=>(x(),z(fo,ae(ie(t)),{default:_(()=>[L$]),_:1},16))}},E$=R(B$,[["__file","/@slidev/slides/32.md"]]),D$=a("h1",null,"Memory allocation",-1),T$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),P$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),O$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),F$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),N$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),K$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),R$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),z$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),U$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),j$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),H$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),V$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),W$=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),q$={__name:"33",setup(e){const t={clicks:12,class:"text-center",srcSequence:"./memory-allocator.md"},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[D$,Y(`
bash command to generate 
i=0; pushd public &&  for f in bdm-allocator/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"/$f\\" w=\\"60%\\" style=\\"margin-top:20px\\" />" && i=$(($i+1)); done ; popd
`),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/00.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/01.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/02.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/03.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/20.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/21.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==5]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/22.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==6]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/23.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==7]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/30.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==8]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/31.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==9]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/32.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==10]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/33.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==11]]),C(m(o,{src:"/ppopp23-biodynamo-slides/bdm-allocator/34.svg",w:"60%",style:{"margin-top":"20px"}},null,512),[[I,g(n).nav.clicks==12]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[T$]),_:1}),m(l,null,{default:_(()=>[P$]),_:1}),m(l,null,{default:_(()=>[O$]),_:1}),m(l,null,{default:_(()=>[F$]),_:1}),m(l,null,{default:_(()=>[N$]),_:1}),m(l,null,{default:_(()=>[K$]),_:1}),m(l,null,{default:_(()=>[R$]),_:1}),m(l,null,{default:_(()=>[z$]),_:1}),m(l,null,{default:_(()=>[U$]),_:1}),m(l,null,{default:_(()=>[j$]),_:1}),m(l,null,{default:_(()=>[H$]),_:1}),m(l,null,{default:_(()=>[V$]),_:1}),m(l,null,{default:_(()=>[W$]),_:1})]),_:1},16)}}},G$=R(q$,[["__file","/@slidev/slides/33.md"]]),Y$=a("h1",null,"Parallel agent removal",-1),Z$={__name:"34",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[Y$,m(i,{src:"/ppopp23-biodynamo-slides/parallel-remove.svg",w:"75%"})]),_:1},16)}}},J$=R(Z$,[["__file","/@slidev/slides/34.md"]]),Q$=a("h1",null,"Performance-related simulation characteristics",-1),X$={__name:"35",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[Q$,m(i,{src:"/ppopp23-biodynamo-slides/sim-characteristics.png",w:"65%"})]),_:1},16)}}},eI=R(X$,[["__file","/@slidev/slides/35.md"]]),tI=a("h1",null,"Operation runtime breakdown",-1),nI={__name:"36",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[tI,m(i,{src:"/ppopp23-biodynamo-slides/operation-breakdown.svg",w:"45%"})]),_:1},16)}}},sI=R(nI,[["__file","/@slidev/slides/36.md"]]),iI=a("h1",null,"BioDynaMo / Biocellion comparison analysis",-1),oI={__name:"37",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[iI,m(i,{src:"/ppopp23-biodynamo-slides/biocellion-speedup-analysis.png",w:"100%",style:{"margin-top":"80px"}})]),_:1},16)}}},aI=R(oI,[["__file","/@slidev/slides/37.md"]]),lI=a("h1",null,"Optimization overview for larger scale simulations",-1),rI={__name:"38",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[lI,m(i,{src:"/ppopp23-biodynamo-slides/optimization-overview-all.svg",w:"100%",style:{"margin-top":"30px"}})]),_:1},16)}}},cI=R(rI,[["__file","/@slidev/slides/38.md"]]),dI=a("h1",null,"Optimization overview for larger scale simulations",-1),uI={__name:"39",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[dI,m(i,{src:"/ppopp23-biodynamo-slides/optimization-overview-all-memory.svg",w:"100%",style:{"margin-top":"30px"}})]),_:1},16)}}},pI=R(uI,[["__file","/@slidev/slides/39.md"]]),mI=a("h1",null,"Full simulation scalability",-1),hI={__name:"40",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[mI,m(i,{src:"/ppopp23-biodynamo-slides/full-simulation-scalability.svg",w:"80%"})]),_:1},16)}}},gI=R(hI,[["__file","/@slidev/slides/40.md"]]),fI=a("h1",null,"Radial neighbor search comparison",-1),vI=a("p",null,"Whole simulation (144 threads and 4 NUMA domains)",-1),yI={__name:"41",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[fI,vI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-144.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},_I=R(yI,[["__file","/@slidev/slides/41.md"]]),wI=a("h1",null,"Radial neighbor search comparison",-1),bI=a("p",null,"Build time (144 threads and 4 NUMA domains)",-1),kI={__name:"42",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[wI,bI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-144-update-environment.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},xI=R(kI,[["__file","/@slidev/slides/42.md"]]),CI=a("h1",null,"Radial neighbor search comparison",-1),$I=a("p",null,"Search time indirect (144 threads and 4 NUMA domains)",-1),II={__name:"43",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[CI,$I,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-144-agent-ops.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},MI=R(II,[["__file","/@slidev/slides/43.md"]]),AI=a("h1",null,"Radial neighbor search comparison",-1),SI=a("p",null,"Memory consumption (144 threads and 4 NUMA domains)",-1),LI={__name:"44",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[AI,SI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-144-memory.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},BI=R(LI,[["__file","/@slidev/slides/44.md"]]),EI=a("h1",null,"Radial neighbor search comparison",-1),DI=a("p",null,"Whole simulation (18 threads and one NUMA domain)",-1),TI={__name:"45",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[EI,DI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-18.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},PI=R(TI,[["__file","/@slidev/slides/45.md"]]),OI=a("h1",null,"Radial neighbor search comparison",-1),FI=a("p",null,"Build time (18 threads and one NUMA domain)",-1),NI={__name:"46",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[OI,FI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-18-update-environment.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},KI=R(NI,[["__file","/@slidev/slides/46.md"]]),RI=a("h1",null,"Radial neighbor search comparison",-1),zI=a("p",null,"Search time indirect (18 threads and one NUMA domain)",-1),UI={__name:"47",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[RI,zI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-18-agent-ops.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},jI=R(UI,[["__file","/@slidev/slides/47.md"]]),HI=a("h1",null,"Radial neighbor search comparison",-1),VI=a("p",null,"Memory consumption (18 threads and one NUMA domain)",-1),WI={__name:"48",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[HI,VI,m(i,{src:"/ppopp23-biodynamo-slides/environment/all-18-memory.svg",w:"75%",style:{"margin-top":"20px"}})]),_:1},16)}}},qI=R(WI,[["__file","/@slidev/slides/48.md"]]),GI=a("h1",null,[k("Agent sorting speeds up simulations up to "),a("strong",null,[k("6"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"×")]),a("annotation",{encoding:"application/x-tex"},"\\times")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"×")])])])])],-1),YI=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),ZI=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),JI=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),QI=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),XI=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),e3=a("div",{style:{display:"hidden","margin-top":"100%"}},".",-1),t3={__name:"49",setup(e){const t={clicks:5,class:"text-center"},n=O(K);return(s,i)=>{const o=ve,l=ot;return x(),z(ce,ae(ie(t)),{default:_(()=>[GI,C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/0.svg",w:"55%"},null,512),[[I,g(n).nav.clicks==0]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/1.svg",w:"55%"},null,512),[[I,g(n).nav.clicks==1]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/2.svg",w:"55%"},null,512),[[I,g(n).nav.clicks==2]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/3.svg",w:"55%"},null,512),[[I,g(n).nav.clicks==3]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/4.svg",w:"55%"},null,512),[[I,g(n).nav.clicks==4]]),C(m(o,{src:"/ppopp23-biodynamo-slides/load-balancing/5.svg",w:"55%"},null,512),[[I,g(n).nav.clicks>=5]]),Y(`
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 `),m(l,null,{default:_(()=>[YI]),_:1}),m(l,null,{default:_(()=>[ZI]),_:1}),m(l,null,{default:_(()=>[JI]),_:1}),m(l,null,{default:_(()=>[QI]),_:1}),m(l,null,{default:_(()=>[XI]),_:1}),m(l,null,{default:_(()=>[e3]),_:1})]),_:1},16)}}},n3=R(t3,[["__file","/@slidev/slides/49.md"]]),s3=a("h1",null,"Agent sorting speedup for one NUMA domain",-1),i3={__name:"50",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[s3,m(i,{src:"/ppopp23-biodynamo-slides/all-18-threads.svg",w:"55%"})]),_:1},16)}}},o3=R(i3,[["__file","/@slidev/slides/50.md"]]),a3=a("h1",null,"Memory allocator comparison",-1),l3={__name:"51",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[a3,m(i,{src:"/ppopp23-biodynamo-slides/mem-alloc-comp/all.svg",w:"70%",style:{"margin-top":"60px"}})]),_:1},16)}}},r3=R(l3,[["__file","/@slidev/slides/51.md"]]),c3=a("h1",null,"Memory allocator comparison",-1),d3={__name:"52",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve;return x(),z(ce,ae(ie(t)),{default:_(()=>[c3,m(i,{src:"/ppopp23-biodynamo-slides/mem-alloc-comp/all-memory.svg",w:"70%",style:{"margin-top":"60px"}})]),_:1},16)}}},u3=R(d3,[["__file","/@slidev/slides/52.md"]]),p3=a("h1",null,"Modularity",-1),m3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),h3={__name:"53",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[p3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/class-diagram.svg",w:"100%",style:{"margin-top":"20px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[m3]),_:1})]),_:1},16)}}},g3=R(h3,[["__file","/@slidev/slides/53.md"]]),f3=a("h1",null,"Abstraction layers and modeling features",-1),v3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),y3={__name:"54",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[f3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/bdm-layers.svg",w:"70%",style:{"margin-top":"0px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[v3]),_:1})]),_:1},16)}}},_3=R(y3,[["__file","/@slidev/slides/54.md"]]),w3=a("h1",null,"Cell sorting",-1),b3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),k3={__name:"55",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[w3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/cell-sorting.png",w:"100%",style:{"margin-top":"60px",padding:"10px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[b3]),_:1})]),_:1},16)}}},x3=R(k3,[["__file","/@slidev/slides/55.md"]]),C3=a("h1",null,"Neuroscience use case",-1),$3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),I3={__name:"56",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[C3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/neuroscience.png",w:"60%",style:{padding:"10px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[$3]),_:1})]),_:1},16)}}},M3=R(I3,[["__file","/@slidev/slides/56.md"]]),A3=a("h1",null,"Epidemiology use case",-1),S3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),L3={__name:"57",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[A3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/epidemiology.png",w:"60%",style:{padding:"10px","margin-top":"0px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[S3]),_:1})]),_:1},16)}}},B3=R(L3,[["__file","/@slidev/slides/57.md"]]),E3=a("h1",null,"Oncology use case",-1),D3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),T3={__name:"58",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[E3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/oncology.png",w:"90%",style:{padding:"10px","margin-top":"0px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[D3]),_:1})]),_:1},16)}}},P3=R(T3,[["__file","/@slidev/slides/58.md"]]),O3=a("h1",null,"Pyramidal cell growth video",-1),F3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),N3={__name:"59",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=el,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[O3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/SV1-single-pyramidal-cell.mp4",w:"40%",style:{"margin-top":"-150px",transform:"rotate(90deg)"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[F3]),_:1})]),_:1},16)}}},K3=R(N3,[["__file","/@slidev/slides/59.md"]]),R3=a("h1",null,"Performance data table",-1),z3=a("p",null,[a("strong",null,"Source:"),k(" Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")],-1),U3={__name:"60",setup(e){const t={class:"text-center"};return O(K),(n,s)=>{const i=ve,o=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[R3,m(i,{src:"/ppopp23-biodynamo-slides/bioinformatics/perf-data-table.png",w:"56%",style:{"margin-top":"0px"}}),m(o,{separator:"",style:{"text-align":"left"}},{default:_(()=>[z3]),_:1})]),_:1},16)}}},j3=R(U3,[["__file","/@slidev/slides/60.md"]]),H3="/ppopp23-biodynamo-slides/bioinformatics-paper.png",V3="/ppopp23-biodynamo-slides/ahmad-gpu-paper.png",W3=a("h1",null,"BioDynaMo’s GPU offloading capabilities",-1),q3=a("div",{grid:"~ cols-2 gap-10",m:"-t-2",style:{"margin-top":"30px"}},[a("img",{border:"rounded",src:H3,class:"drop-shadow",style:{margin:"auto"}}),a("img",{border:"rounded",src:V3,class:"drop-shadow"})],-1),G3=a("ul",null,[a("li",null,[k("Lukas Breitwieser et al., 2022, DOI: "),a("a",{href:"https://doi.org/10.1093/bioinformatics/btab649",target:"_blank",rel:"noopener"},"10.1093/bioinformatics/btab649")]),a("li",null,[k("Ahmad Hesam et al., 2021, DOI: "),a("a",{href:"https://doi.org/10.1109/IPDPSW52791.2021.00040",target:"_blank",rel:"noopener"},"10.1109/IPDPSW52791.2021.00040")])],-1),Y3={__name:"61",setup(e){const t={};return O(K),(n,s)=>{const i=Ct;return x(),z(ce,ae(ie(t)),{default:_(()=>[W3,q3,m(i,{separator:"",style:{"text-align":"left"}},{default:_(()=>[Y(" **Source:**  "),G3]),_:1})]),_:1},16)}}},Z3=R(Y3,[["__file","/@slidev/slides/61.md"]]),J3=[{path:"1",name:"page-1",component:pb,meta:{theme:"../slidev-theme-breitwieser",favicon:"favicon.png",colorSchema:"light",selectable:!0,presenter:!1,lineNumbers:!0,remoteAssets:!1,drawings:{persist:!1},css:"unocss",exportFilename:"ppopp23-Breitwieser-BioDynaMo",export:{dark:!1,withClicks:!0},fonts:{provider:"none"},title:"**High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**",slide:{raw:`---
theme: ../slidev-theme-breitwieser
favicon: favicon.png
colorSchema: light
selectable: true
presenter: false
lineNumbers: true
remoteAssets: false
drawings:
  persist: false
css: unocss
exportFilename: 'ppopp23-Breitwieser-BioDynaMo'
export:
  dark: false
  withClicks: true
fonts:
  provider: 'none'
title: '**High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**'
---

<!-- <img src="/ppopp23-biodynamo-slides/bdm-logo-large.png" w="120px" /> -->

# **High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**

<style>
.slidev-layout.cover h1, .slidev-layout.intro h1 {
  font-size: 2.5rem;
  line-height: 3rem; 
  margin-top: 120px;
  margin-bottom: 2.5rem;
  color:white;
  background-color:rgba(0, 0, 0, 0.6);
  border-radius:0.25rem;
}
</style>


_**[Lukas Breitwieser](mailto:lukas.breitwieser@gmail.com)**_, Ahmad Hesam, Fons Rademakers,<br/>Juan Gómez Luna, and Onur Mutlu

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), 
[https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480)

ACM SIGPLAN Annual Symposium on Principles and Practice of Parallel Programming <br>
27 February 2023, Montreal Canada

<div class="grid grid-cols-3 gap-2" w="30%" style="margin-left:auto;margin-right:auto;position: absolute;top:5px;left: 69%;">

<img src="/ppopp23-biodynamo-slides/artifacts_available_v1_1.png" w="100px" />
<img src="/ppopp23-biodynamo-slides/artifacts_evaluated_reusable_v1_1.png" w="100px" />
<img src="/ppopp23-biodynamo-slides/results_reproduced_v1_1.png" w="100px" />

</div>

<div class="grid grid-cols-4 gap-10" w="100%" style="margin-left:auto;margin-right:auto;margin-top:-12px">

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/eth_logo_kurz_pos_cropped.svg" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/Safari_vector_logo.svg" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/tudelft.png" h="40px" style="margin:auto" />

</div>

<!--
* Good afternoon, my name is Lukas Breitwieser and I am glad to present our high-performance agent-based simulation platform called BioDynaMo.

* ABS is an important and versatile methodology to study complex systems.

* It is used in fields like biology, epidemiology, sociology, and many more.

* In this talk, I am addressing the question: what does it take to efficiently execute these models in using shared-memory parallelism and scale them to billions of agents?

* **CLICK**
-->
`,title:"**High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**",level:1,content:`<!-- <img src="/ppopp23-biodynamo-slides/bdm-logo-large.png" w="120px" /> -->

# **High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**

<style>
.slidev-layout.cover h1, .slidev-layout.intro h1 {
  font-size: 2.5rem;
  line-height: 3rem; 
  margin-top: 120px;
  margin-bottom: 2.5rem;
  color:white;
  background-color:rgba(0, 0, 0, 0.6);
  border-radius:0.25rem;
}
</style>


_**[Lukas Breitwieser](mailto:lukas.breitwieser@gmail.com)**_, Ahmad Hesam, Fons Rademakers,<br/>Juan Gómez Luna, and Onur Mutlu

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), 
[https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480)

ACM SIGPLAN Annual Symposium on Principles and Practice of Parallel Programming <br>
27 February 2023, Montreal Canada

<div class="grid grid-cols-3 gap-2" w="30%" style="margin-left:auto;margin-right:auto;position: absolute;top:5px;left: 69%;">

<img src="/ppopp23-biodynamo-slides/artifacts_available_v1_1.png" w="100px" />
<img src="/ppopp23-biodynamo-slides/artifacts_evaluated_reusable_v1_1.png" w="100px" />
<img src="/ppopp23-biodynamo-slides/results_reproduced_v1_1.png" w="100px" />

</div>

<div class="grid grid-cols-4 gap-10" w="100%" style="margin-left:auto;margin-right:auto;margin-top:-12px">

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/eth_logo_kurz_pos_cropped.svg" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/Safari_vector_logo.svg" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/tudelft.png" h="40px" style="margin:auto" />

</div>`,frontmatter:{theme:"../slidev-theme-breitwieser",favicon:"favicon.png",colorSchema:"light",selectable:!0,presenter:!1,lineNumbers:!0,remoteAssets:!1,drawings:{persist:!1},css:"unocss",exportFilename:"ppopp23-Breitwieser-BioDynaMo",export:{dark:!1,withClicks:!0},fonts:{provider:"none"},title:"**High-Performance and Scalable<br>Agent-Based Simulation With BioDynaMo**"},note:`* Good afternoon, my name is Lukas Breitwieser and I am glad to present our high-performance agent-based simulation platform called BioDynaMo.

* ABS is an important and versatile methodology to study complex systems.

* It is used in fields like biology, epidemiology, sociology, and many more.

* In this talk, I am addressing the question: what does it take to efficiently execute these models in using shared-memory parallelism and scale them to billions of agents?

* **CLICK**`,index:0,start:0,end:74,notesHTML:`<ul>
<li>
<p>Good afternoon, my name is Lukas Breitwieser and I am glad to present our high-performance agent-based simulation platform called BioDynaMo.</p>
</li>
<li>
<p>ABS is an important and versatile methodology to study complex systems.</p>
</li>
<li>
<p>It is used in fields like biology, epidemiology, sociology, and many more.</p>
</li>
<li>
<p>In this talk, I am addressing the question: what does it take to efficiently execute these models in using shared-memory parallelism and scale them to billions of agents?</p>
</li>
<li>
<p><strong>CLICK</strong></p>
</li>
</ul>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:yb,meta:{slide:{raw:`
# Key problem

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 150px;border: 3px solid var(--redDark);" >
  <div class="i-icon-park-solid-error" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--redText)">

Most existing agent-based simulation platforms exhibit **low performance**
<!-- Many existing agent-based simulation platforms<br/>are **not suitable for large-scale studies<br/> due to the low performance** of the underlying simulation engines. -->

</div> 
</div>

<!--

The key problem that we identified together with our domain experts is that most existing agent-based simulation platforms exhibit low performance.

-->
`,title:"Key problem",level:1,content:`# Key problem

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 150px;border: 3px solid var(--redDark);" >
  <div class="i-icon-park-solid-error" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--redText)">

Most existing agent-based simulation platforms exhibit **low performance**
<!-- Many existing agent-based simulation platforms<br/>are **not suitable for large-scale studies<br/> due to the low performance** of the underlying simulation engines. -->

</div> 
</div>`,frontmatter:{},note:"The key problem that we identified together with our domain experts is that most existing agent-based simulation platforms exhibit low performance.",index:1,start:75,end:94,notesHTML:`<p>The key problem that we identified together with our domain experts is that most existing agent-based simulation platforms exhibit low performance.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Ab,meta:{slide:{raw:`
# Impact of low performance

<!-- Icons defined in template style/icons.css--> 

<v-clicks>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 30px;border: 3px solid var(--redDark);" >
  <div class="i-entypo-resize-100" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--redText)">Limits the model size and complexity</div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--petrol);text-align: center;margin-top: 20px;border: 3px solid var(--petrolDark);" >
  <div class="i-material-symbols-hourglass-top-rounded" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--petrolDark)" />
  <p style="font-size: 1.5rem;color:var(--petrolText)">Increases the development time</p> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 20px;border: 3px solid var(--redDark);" >
  <div class="i-ph-chart-line-bold" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <p style="font-size: 1.5rem;color:var(--redText)">

  Limits the capability to optimize parameters<br>
  <carbon-arrow-right /> might lead to less optimal solution 

  </p> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--petrol);text-align: center;margin-top: 20px;border: 3px solid var(--petrolDark);" >
  <div class="i-material-symbols-euro" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--petrolDark)" />
  <p style="font-size: 1.5rem;color:var(--petrolText)">Increases costs</p> 
</div>

</v-clicks>

<!--
Low performance has the following profound implications.

* **CLICK** It limits the model size and complexity

* **CLICK** It increases the development time, because AB models are developed in an iterative way.

* **CLICK** It limits the capability to optimize parameters, which might lead to less optimal model solutions.

* **CLICK** And lastly, it increases costs.
-->
`,title:"Impact of low performance",level:1,content:`# Impact of low performance

<!-- Icons defined in template style/icons.css--> 

<v-clicks>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 30px;border: 3px solid var(--redDark);" >
  <div class="i-entypo-resize-100" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--redText)">Limits the model size and complexity</div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--petrol);text-align: center;margin-top: 20px;border: 3px solid var(--petrolDark);" >
  <div class="i-material-symbols-hourglass-top-rounded" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--petrolDark)" />
  <p style="font-size: 1.5rem;color:var(--petrolText)">Increases the development time</p> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--red);text-align: center;margin-top: 20px;border: 3px solid var(--redDark);" >
  <div class="i-ph-chart-line-bold" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--redDark)" />
  <p style="font-size: 1.5rem;color:var(--redText)">

  Limits the capability to optimize parameters<br>
  <carbon-arrow-right /> might lead to less optimal solution 

  </p> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--petrol);text-align: center;margin-top: 20px;border: 3px solid var(--petrolDark);" >
  <div class="i-material-symbols-euro" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--petrolDark)" />
  <p style="font-size: 1.5rem;color:var(--petrolText)">Increases costs</p> 
</div>

</v-clicks>`,frontmatter:{},note:`Low performance has the following profound implications.

* **CLICK** It limits the model size and complexity

* **CLICK** It increases the development time, because AB models are developed in an iterative way.

* **CLICK** It limits the capability to optimize parameters, which might lead to less optimal model solutions.

* **CLICK** And lastly, it increases costs.`,index:2,start:95,end:141,notesHTML:`<p>Low performance has the following profound implications.</p>
<ul>
<li>
<p><strong>CLICK</strong> It limits the model size and complexity</p>
</li>
<li>
<p><strong>CLICK</strong> It increases the development time, because AB models are developed in an iterative way.</p>
</li>
<li>
<p><strong>CLICK</strong> It limits the capability to optimize parameters, which might lead to less optimal model solutions.</p>
</li>
<li>
<p><strong>CLICK</strong> And lastly, it increases costs.</p>
</li>
</ul>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Pb,meta:{slide:{raw:`
# Our solution: **BioDynaMo**


<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--green);text-align: center;margin-top: 10px;border: 3px solid var(--greenDark);" >
  <p style="font-size: 1.5rem;color:var(--greenText)">

<img src="/ppopp23-biodynamo-slides/bdm-logo-large.png" w="100px" style="margin-left:auto;margin-right:auto" />

BioDynaMo is a **modular and high-performance**<br>agent-based simulation platform written in C++.

[https://biodynamo.org](https://biodynamo.org)

  </p> 
</div>

<img src="/ppopp23-biodynamo-slides/striking-image-bottom-detail.png" class="rounded w-full" style="margin-top:20px"/>

<!--
UNUSED_NOTES:

In our paper, we make the following key contributions:

First, we present a novel high-performance agent-based simulation engine.

Second, we present six optimizations to maximize performance.

And third, provide a rigorous performance evaluation. 

-->

<!--
To address all these issues, we started the development of BioDynaMo.

The novel simulation engine is the main contribution of this paper.
-->
`,title:"Our solution: **BioDynaMo**",level:1,content:`# Our solution: **BioDynaMo**


<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--green);text-align: center;margin-top: 10px;border: 3px solid var(--greenDark);" >
  <p style="font-size: 1.5rem;color:var(--greenText)">

<img src="/ppopp23-biodynamo-slides/bdm-logo-large.png" w="100px" style="margin-left:auto;margin-right:auto" />

BioDynaMo is a **modular and high-performance**<br>agent-based simulation platform written in C++.

[https://biodynamo.org](https://biodynamo.org)

  </p> 
</div>

<img src="/ppopp23-biodynamo-slides/striking-image-bottom-detail.png" class="rounded w-full" style="margin-top:20px"/>

<!--
UNUSED_NOTES:

In our paper, we make the following key contributions:

First, we present a novel high-performance agent-based simulation engine.

Second, we present six optimizations to maximize performance.

And third, provide a rigorous performance evaluation. 

-->`,frontmatter:{},note:`To address all these issues, we started the development of BioDynaMo.

The novel simulation engine is the main contribution of this paper.`,index:3,start:142,end:179,notesHTML:`<p>To address all these issues, we started the development of BioDynaMo.</p>
<p>The novel simulation engine is the main contribution of this paper.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Hb,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Background

<!-- 
Before I go into more depth about BioDynaMo, I want to provide more information about agent based modeling
-->

`,title:"Background",level:1,content:"# Background",frontmatter:{layout:"section"},note:"Before I go into more depth about BioDynaMo, I want to provide more information about agent based modeling",index:4,start:179,end:190,notesHTML:`<p>Before I go into more depth about BioDynaMo, I want to provide more information about agent based modeling</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:vk,meta:{title:"Example agent-based model",srcSequence:"./swarm-of-birds.md",slide:{raw:null,title:"Example agent-based model",level:1,content:`# Example agent-based model

Modeling a swarm of birds

<div class="grid grid-cols-2" style="margin-top:50px">
<div style="display:inline-grid;">

<v-click>

**Agent is a bird with the following attributes:**

* position
* velocity

</v-click>
<v-click>

**and three behaviors**

</v-click>
<div grid="~ cols-3 gap-2" m="-t-2">
<v-clicks>

<div>

![](/boids/separation.gif)
Separation

</div>

<div>

![](/boids/alignment.gif)
Alignment

</div>

<div>

![](/boids/cohesion.gif)
Cohesion

</div>
</v-clicks>
</div>

</div>

<!-- right column -->
<div style="display:inline-grid;">

<Video v-show="$slidev.nav.clicks == 0" w="90%" src="/ppopp23-biodynamo-slides/ShoreBirds-5013-pixabay.mp4" style="margin-top:auto;margin-bottom:auto" />
<Image v-show="$slidev.nav.clicks == 1" w="90%" src="/ppopp23-biodynamo-slides/boids/boids-random-distribution.png" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 2" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-no-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 3" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-one-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 4" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-two-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 5" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-three-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />

</div>
</div>

<Footnotes separator>

**Source:** Craig Reynolds, 1987, [https://doi.org/10.1145/37401.37406](https://doi.org/10.1145/37401.37406), **Simulator:** Thierry Escande [https://github.com/tescande/boids.git](https://github.com/tescande/boids.git)

</Footnotes>`,frontmatter:{title:"Example agent-based model",srcSequence:"./swarm-of-birds.md"},note:`I want to start with an example that models swarm behavior.

In this example, the agent is a bird which has two attributes: a position and a velocity. 
**CLICK** In the simplified 2D model on the right, birds are represented as a dot and are initially randomly distributed.

**CLICK** By default, these birds move straight ahead.

Craig Reynolds distilled three bird behaviors.

Let's activate them one after the other and see what happens in the simulation.

**CLICK** First, the agents are avoiding collisions with nearby flock mates. 

**CLICK** Second, birds align to the velocity vector of their neighbors 

 **CLICK** And third, birds try to stay close to each other. 

We can observe that these three simple rules give rise to the natural swarm dynamics although we did not program them directly.
This phenomenon is called emergent behavior and describes that in ABM the whole is greater than the sum of its parts.

The other AB characteristic is local interaction, as we can see from the three behaviors.
Agents only interact with their immediate surrounding.

**CLICK**`,index:5,start:0,end:98,source:{filepath:"/home/lukas/Documents/presentation/slides/swarm-of-birds.md",raw:`---
title: Example agent-based model
---

# Example agent-based model

Modeling a swarm of birds

<div class="grid grid-cols-2" style="margin-top:50px">
<div style="display:inline-grid;">

<v-click>

**Agent is a bird with the following attributes:**

* position
* velocity

</v-click>
<v-click>

**and three behaviors**

</v-click>
<div grid="~ cols-3 gap-2" m="-t-2">
<v-clicks>

<div>

![](/boids/separation.gif)
Separation

</div>

<div>

![](/boids/alignment.gif)
Alignment

</div>

<div>

![](/boids/cohesion.gif)
Cohesion

</div>
</v-clicks>
</div>

</div>

<!-- right column -->
<div style="display:inline-grid;">

<Video v-show="$slidev.nav.clicks == 0" w="90%" src="/ppopp23-biodynamo-slides/ShoreBirds-5013-pixabay.mp4" style="margin-top:auto;margin-bottom:auto" />
<Image v-show="$slidev.nav.clicks == 1" w="90%" src="/ppopp23-biodynamo-slides/boids/boids-random-distribution.png" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 2" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-no-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 3" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-one-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 4" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-two-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 5" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-three-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />

</div>
</div>

<Footnotes separator>

**Source:** Craig Reynolds, 1987, [https://doi.org/10.1145/37401.37406](https://doi.org/10.1145/37401.37406), **Simulator:** Thierry Escande [https://github.com/tescande/boids.git](https://github.com/tescande/boids.git)

</Footnotes>

<!--
I want to start with an example that models swarm behavior.

In this example, the agent is a bird which has two attributes: a position and a velocity. 
**CLICK** In the simplified 2D model on the right, birds are represented as a dot and are initially randomly distributed.

**CLICK** By default, these birds move straight ahead.

Craig Reynolds distilled three bird behaviors.

Let's activate them one after the other and see what happens in the simulation.

**CLICK** First, the agents are avoiding collisions with nearby flock mates. 

**CLICK** Second, birds align to the velocity vector of their neighbors 

 **CLICK** And third, birds try to stay close to each other. 

We can observe that these three simple rules give rise to the natural swarm dynamics although we did not program them directly.
This phenomenon is called emergent behavior and describes that in ABM the whole is greater than the sum of its parts.

The other AB characteristic is local interaction, as we can see from the three behaviors.
Agents only interact with their immediate surrounding.

**CLICK**
-->
`,title:"Example agent-based model",level:1,content:`# Example agent-based model

Modeling a swarm of birds

<div class="grid grid-cols-2" style="margin-top:50px">
<div style="display:inline-grid;">

<v-click>

**Agent is a bird with the following attributes:**

* position
* velocity

</v-click>
<v-click>

**and three behaviors**

</v-click>
<div grid="~ cols-3 gap-2" m="-t-2">
<v-clicks>

<div>

![](/boids/separation.gif)
Separation

</div>

<div>

![](/boids/alignment.gif)
Alignment

</div>

<div>

![](/boids/cohesion.gif)
Cohesion

</div>
</v-clicks>
</div>

</div>

<!-- right column -->
<div style="display:inline-grid;">

<Video v-show="$slidev.nav.clicks == 0" w="90%" src="/ppopp23-biodynamo-slides/ShoreBirds-5013-pixabay.mp4" style="margin-top:auto;margin-bottom:auto" />
<Image v-show="$slidev.nav.clicks == 1" w="90%" src="/ppopp23-biodynamo-slides/boids/boids-random-distribution.png" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 2" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-no-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 3" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-one-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 4" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-two-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />
<Video v-show="$slidev.nav.clicks == 5" w="90%" src="/ppopp23-biodynamo-slides/boids/extract-three-behaviors.mp4" style="margin-top:auto;margin-bottom:auto" />

</div>
</div>

<Footnotes separator>

**Source:** Craig Reynolds, 1987, [https://doi.org/10.1145/37401.37406](https://doi.org/10.1145/37401.37406), **Simulator:** Thierry Escande [https://github.com/tescande/boids.git](https://github.com/tescande/boids.git)

</Footnotes>`,frontmatter:{title:"Example agent-based model"},note:`I want to start with an example that models swarm behavior.

In this example, the agent is a bird which has two attributes: a position and a velocity. 
**CLICK** In the simplified 2D model on the right, birds are represented as a dot and are initially randomly distributed.

**CLICK** By default, these birds move straight ahead.

Craig Reynolds distilled three bird behaviors.

Let's activate them one after the other and see what happens in the simulation.

**CLICK** First, the agents are avoiding collisions with nearby flock mates. 

**CLICK** Second, birds align to the velocity vector of their neighbors 

 **CLICK** And third, birds try to stay close to each other. 

We can observe that these three simple rules give rise to the natural swarm dynamics although we did not program them directly.
This phenomenon is called emergent behavior and describes that in ABM the whole is greater than the sum of its parts.

The other AB characteristic is local interaction, as we can see from the three behaviors.
Agents only interact with their immediate surrounding.

**CLICK**`,index:0,start:0,end:98},inline:{raw:`---
src: ./swarm-of-birds.md
---
`,content:"",frontmatter:{},index:5,start:190,end:194},filepath:"/home/lukas/Documents/presentation/slides/swarm-of-birds.md",notesHTML:`<p>I want to start with an example that models swarm behavior.</p>
<p>In this example, the agent is a bird which has two attributes: a position and a velocity.
<strong>CLICK</strong> In the simplified 2D model on the right, birds are represented as a dot and are initially randomly distributed.</p>
<p><strong>CLICK</strong> By default, these birds move straight ahead.</p>
<p>Craig Reynolds distilled three bird behaviors.</p>
<p>Let's activate them one after the other and see what happens in the simulation.</p>
<p><strong>CLICK</strong> First, the agents are avoiding collisions with nearby flock mates.</p>
<p><strong>CLICK</strong> Second, birds align to the velocity vector of their neighbors</p>
<p><strong>CLICK</strong> And third, birds try to stay close to each other.</p>
<p>We can observe that these three simple rules give rise to the natural swarm dynamics although we did not program them directly.
This phenomenon is called emergent behavior and describes that in ABM the whole is greater than the sum of its parts.</p>
<p>The other AB characteristic is local interaction, as we can see from the three behaviors.
Agents only interact with their immediate surrounding.</p>
<p><strong>CLICK</strong></p>
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Lk,meta:{slide:{raw:`
# Cell sorting in BioDynaMo

<div grid="~ cols-2 gap-10" style="margin-top:40px">

<!--column 1 -->
<div style="margin:auto">
<!-- <Video v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4" w="90%" /> -->
<!-- <v-click> -->
<Image src="/ppopp23-biodynamo-slides/cell-clustering/overview.png" w="100%" />
<!-- </v-click> -->
</div>

<!--column 2 -->
<div>
<v-click>

## Agent
Spherical cell with type attribute (red and blue)


## Behaviors

</v-click>

<div grid="~ cols-3 gap-2" m="-t-2">
<v-clicks>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/secretion.svg" h="100px" />
Substance secretion

</div>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/chemotaxis.svg" h="100px" />
Chemotaxis

</div>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/forces.svg" h="100px" />
Mechanical forces

</div>
</v-clicks>
</div>

</div>

</div>

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>

<!--
Let's go a bit deeper by investigating a biological model to sort cells.

We start with a random distribution of two types of cells 
and want to obtain clusters of the same cell type at the end.

**CLICK** In this model, the agent represents a spherical cell. 

**CLICK** Cells release a substance 

**CLICK** move in the direction of high substance concentration,

**CLICK** and exert forces on each other when they collide.
-->
`,title:"Cell sorting in BioDynaMo",level:1,content:`# Cell sorting in BioDynaMo

<div grid="~ cols-2 gap-10" style="margin-top:40px">

<!--column 1 -->
<div style="margin:auto">
<!-- <Video v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4" w="90%" /> -->
<!-- <v-click> -->
<Image src="/ppopp23-biodynamo-slides/cell-clustering/overview.png" w="100%" />
<!-- </v-click> -->
</div>

<!--column 2 -->
<div>
<v-click>

## Agent
Spherical cell with type attribute (red and blue)


## Behaviors

</v-click>

<div grid="~ cols-3 gap-2" m="-t-2">
<v-clicks>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/secretion.svg" h="100px" />
Substance secretion

</div>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/chemotaxis.svg" h="100px" />
Chemotaxis

</div>

<div>

<img src="/ppopp23-biodynamo-slides/cell-clustering/forces.svg" h="100px" />
Mechanical forces

</div>
</v-clicks>
</div>

</div>

</div>

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{},note:`Let's go a bit deeper by investigating a biological model to sort cells.

We start with a random distribution of two types of cells 
and want to obtain clusters of the same cell type at the end.

**CLICK** In this model, the agent represents a spherical cell. 

**CLICK** Cells release a substance 

**CLICK** move in the direction of high substance concentration,

**CLICK** and exert forces on each other when they collide.`,index:6,start:195,end:271,notesHTML:`<p>Let's go a bit deeper by investigating a biological model to sort cells.</p>
<p>We start with a random distribution of two types of cells
and want to obtain clusters of the same cell type at the end.</p>
<p><strong>CLICK</strong> In this model, the agent represents a spherical cell.</p>
<p><strong>CLICK</strong> Cells release a substance</p>
<p><strong>CLICK</strong> move in the direction of high substance concentration,</p>
<p><strong>CLICK</strong> and exert forces on each other when they collide.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:sx,meta:{slide:{raw:`
# Cell sorting implementation

<div grid="~ cols-2 gap-5" style="margin-top:40px">

\`\`\`cpp{all|1-3|1,4,5|7,8,21|7,8,21,9|7,8,21,11-15|7,8,21,17,18|7,8,21,20|all|9,11-15,20|14|14|4,5}
// Model initialization
AddSubstance('purple');
AddSubstance('light-blue');
CreateAgentsRandom(number, 'red');
CreateAgentsRandom(number, 'blue');

// Simulation 
for each iteration {
   UpdateNeighborSearchIndex(); 

   for each agent {
     SecreteSubstance(agent);
     FollowSubstanceGradient(agent);
     CalculateForces(agent);
   }

   DiffuseSubstance('purple');
   DiffuseSubstance('light-blue');

   Visualize(); 
}
\`\`\`

<div style="margin-top:100px">

<h2 v-show="$slidev.nav.clicks >= 8">Fundamental operations</h2>

<ul v-show="$slidev.nav.clicks >= 8">
 <li v-show="$slidev.nav.clicks == 9" style="color:red">Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks >= 10" >Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks == 10" style="color:red">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks >= 11">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks == 11" style="color:red">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks >= 12">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks == 12" style="color:red">Add and remove agents</li>
</ul>

</div>
</div>

<div v-show="$slidev.nav.clicks == 5" w="30%" style="margin-left:auto;margin-right:auto;position: absolute;top:53%;left: 50%;">

<img src="/ppopp23-biodynamo-slides/cell-clustering/secretion.svg" h="50px" />
<img src="/ppopp23-biodynamo-slides/cell-clustering/chemotaxis.svg" h="50px" />
<img src="/ppopp23-biodynamo-slides/cell-clustering/forces.svg" h="50px" />

</div>

<!--
Let's see how this model is implemented in BioDynaMo.

In the initialization stage, **CLICK** we create two substances, and **CLICK**
all the randomly distributed agents.

**CLICK** In the simulation stage,  BioDynaMo executes a couple of functions for each iteration.

**CLICK** BDM updates the neighbor search index

**CLICK** executes the three behaviors for each agent.

**CLICK** diffuses the two substances

**CLICK** and visualizes the output.

===================================
  
**CLICK** From this example, we can derive fundamental operations that we must implement efficiently in order to achieve high performance.
The highlighted code shows where this is important.

**CLICK** Iterate over agents and execute a function. 

**CLICK** Determine neighbors

**CLICK** Iterate over these neighbors and execute a function

**CLICK** Add agents and remove them
-->
`,title:"Cell sorting implementation",level:1,content:`# Cell sorting implementation

<div grid="~ cols-2 gap-5" style="margin-top:40px">

\`\`\`cpp{all|1-3|1,4,5|7,8,21|7,8,21,9|7,8,21,11-15|7,8,21,17,18|7,8,21,20|all|9,11-15,20|14|14|4,5}
// Model initialization
AddSubstance('purple');
AddSubstance('light-blue');
CreateAgentsRandom(number, 'red');
CreateAgentsRandom(number, 'blue');

// Simulation 
for each iteration {
   UpdateNeighborSearchIndex(); 

   for each agent {
     SecreteSubstance(agent);
     FollowSubstanceGradient(agent);
     CalculateForces(agent);
   }

   DiffuseSubstance('purple');
   DiffuseSubstance('light-blue');

   Visualize(); 
}
\`\`\`

<div style="margin-top:100px">

<h2 v-show="$slidev.nav.clicks >= 8">Fundamental operations</h2>

<ul v-show="$slidev.nav.clicks >= 8">
 <li v-show="$slidev.nav.clicks == 9" style="color:red">Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks >= 10" >Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks == 10" style="color:red">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks >= 11">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks == 11" style="color:red">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks >= 12">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks == 12" style="color:red">Add and remove agents</li>
</ul>

</div>
</div>

<div v-show="$slidev.nav.clicks == 5" w="30%" style="margin-left:auto;margin-right:auto;position: absolute;top:53%;left: 50%;">

<img src="/ppopp23-biodynamo-slides/cell-clustering/secretion.svg" h="50px" />
<img src="/ppopp23-biodynamo-slides/cell-clustering/chemotaxis.svg" h="50px" />
<img src="/ppopp23-biodynamo-slides/cell-clustering/forces.svg" h="50px" />

</div>`,frontmatter:{},note:`Let's see how this model is implemented in BioDynaMo.

In the initialization stage, **CLICK** we create two substances, and **CLICK**
all the randomly distributed agents.

**CLICK** In the simulation stage,  BioDynaMo executes a couple of functions for each iteration.

**CLICK** BDM updates the neighbor search index

**CLICK** executes the three behaviors for each agent.

**CLICK** diffuses the two substances

**CLICK** and visualizes the output.

===================================
  
**CLICK** From this example, we can derive fundamental operations that we must implement efficiently in order to achieve high performance.
The highlighted code shows where this is important.

**CLICK** Iterate over agents and execute a function. 

**CLICK** Determine neighbors

**CLICK** Iterate over these neighbors and execute a function

**CLICK** Add agents and remove them`,index:7,start:272,end:356,notesHTML:`<p>Let's see how this model is implemented in BioDynaMo.</p>
<p>In the initialization stage, <strong>CLICK</strong> we create two substances, and <strong>CLICK</strong>
all the randomly distributed agents.</p>
<p><strong>CLICK</strong> In the simulation stage,  BioDynaMo executes a couple of functions for each iteration.</p>
<p><strong>CLICK</strong> BDM updates the neighbor search index</p>
<p><strong>CLICK</strong> executes the three behaviors for each agent.</p>
<p><strong>CLICK</strong> diffuses the two substances</p>
<p><strong>CLICK</strong> and visualizes the output.</p>
<p>===================================</p>
<p><strong>CLICK</strong> From this example, we can derive fundamental operations that we must implement efficiently in order to achieve high performance.
The highlighted code shows where this is important.</p>
<p><strong>CLICK</strong> Iterate over agents and execute a function.</p>
<p><strong>CLICK</strong> Determine neighbors</p>
<p><strong>CLICK</strong> Iterate over these neighbors and execute a function</p>
<p><strong>CLICK</strong> Add agents and remove them</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:gx,meta:{clicks:4,slide:{raw:`---
clicks: 4
---

# Benchmark simulations

The selected simulations cover a broad spectrum of performance related simulation characteristics

<div grid="~ cols-2 gap-5" style="margin-top:30px">

<!-- Column 1 -->
<div style="margin:auto">

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/sim-characteristics/00.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/sim-characteristics/10.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/sim-characteristics/20.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/sim-characteristics/30.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/sim-characteristics/40.png" w="100%" />

</div>

<!-- Column 2 -->
<div style="margin:auto">

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/cgd-final.png" w="80%" />
<Video v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4" w="80%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png" w="80%" />
<Video v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/bioinformatics/pyramidal-cell-cropped-fast-2.mp4" w="80%" />
<Video v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/bioinformatics/tumor-spheroid-cropped-fast.mp4" w="80%" />

</div>

</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..4}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>

<!--
UNUSED_NOTES:
-->

<!--
We chose the following simulations to represent the workload. 
These simulations cover a broad spectrum of performance relevant performance characteristics, as you can see in the table.

**CLICK** The first is cell proliferation

**CLICK** Second, the already discussed cell clustering and use cases in

**CLICK** epidemiology

**CLICK** neuroscience

**CLICK** and oncology

-->
`,title:"Benchmark simulations",level:1,content:`# Benchmark simulations

The selected simulations cover a broad spectrum of performance related simulation characteristics

<div grid="~ cols-2 gap-5" style="margin-top:30px">

<!-- Column 1 -->
<div style="margin:auto">

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/sim-characteristics/00.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/sim-characteristics/10.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/sim-characteristics/20.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/sim-characteristics/30.png" w="100%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/sim-characteristics/40.png" w="100%" />

</div>

<!-- Column 2 -->
<div style="margin:auto">

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/cgd-final.png" w="80%" />
<Video v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/bioinformatics/soma-clustering-cropped-fast.mp4" w="80%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png" w="80%" />
<Video v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/bioinformatics/pyramidal-cell-cropped-fast-2.mp4" w="80%" />
<Video v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/bioinformatics/tumor-spheroid-cropped-fast.mp4" w="80%" />

</div>

</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..4}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>

<!--
UNUSED_NOTES:
-->`,frontmatter:{clicks:4},note:`We chose the following simulations to represent the workload. 
These simulations cover a broad spectrum of performance relevant performance characteristics, as you can see in the table.

**CLICK** The first is cell proliferation

**CLICK** Second, the already discussed cell clustering and use cases in

**CLICK** epidemiology

**CLICK** neuroscience

**CLICK** and oncology`,index:8,start:356,end:426,notesHTML:`<p>We chose the following simulations to represent the workload.
These simulations cover a broad spectrum of performance relevant performance characteristics, as you can see in the table.</p>
<p><strong>CLICK</strong> The first is cell proliferation</p>
<p><strong>CLICK</strong> Second, the already discussed cell clustering and use cases in</p>
<p><strong>CLICK</strong> epidemiology</p>
<p><strong>CLICK</strong> neuroscience</p>
<p><strong>CLICK</strong> and oncology</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:_x,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# More details about the **simulations**<br/>and BioDynaMo's **modeling features**

[https://doi.org/10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

<Image src="/ppopp23-biodynamo-slides/bioinformatics-paper.png" w="55%" />

<!--
More details about the simulations and BDM's modeling features can be found in our Bioinformatics paper.
-->
`,title:"More details about the **simulations**<br/>and BioDynaMo's **modeling features**",level:1,content:`# More details about the **simulations**<br/>and BioDynaMo's **modeling features**

[https://doi.org/10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

<Image src="/ppopp23-biodynamo-slides/bioinformatics-paper.png" w="55%" />`,frontmatter:{class:"text-center"},note:"More details about the simulations and BDM's modeling features can be found in our Bioinformatics paper.",index:9,start:426,end:440,notesHTML:`<p>More details about the simulations and BDM's modeling features can be found in our Bioinformatics paper.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:kx,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Optimizations

<!-- 
Next, I want to talk about the performance optimizations of BioDynaMo.
-->
`,title:"Optimizations",level:1,content:"# Optimizations",frontmatter:{layout:"section"},note:"Next, I want to talk about the performance optimizations of BioDynaMo.",index:10,start:440,end:450,notesHTML:`<p>Next, I want to talk about the performance optimizations of BioDynaMo.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Mx,meta:{class:"text-center",clicks:1,title:"Key observation:<br>Agent-based simulations are often **memory-bound**",srcSequence:"./memory-bound.md",slide:{raw:null,title:"Key observation:<br>Agent-based simulations are often **memory-bound**",level:1,content:`# Key observation:<br>Agent-based simulations are often **memory-bound**
Microarchitecture analysis for five simulations

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/uarch-analysis/0.svg" w="38%"/>
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/uarch-analysis/1.svg" w="38%"/>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:1,title:"Key observation:<br>Agent-based simulations are often **memory-bound**",srcSequence:"./memory-bound.md"},note:`On this slide you can see the microarchitecture analysis for our five different simulations.
This analysis shows inefficiencies in the processors pipeline.

We make the following key observation that **CLICK** these agent-based models are
predominantly memory bound.`,index:11,start:0,end:27,source:{filepath:"/home/lukas/Documents/presentation/slides/memory-bound.md",raw:`---
class: text-center
clicks: 1
title: Key observation:<br>Agent-based simulations are often **memory-bound**
---

# Key observation:<br>Agent-based simulations are often **memory-bound**
Microarchitecture analysis for five simulations

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/uarch-analysis/0.svg" w="38%"/>
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/uarch-analysis/1.svg" w="38%"/>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
On this slide you can see the microarchitecture analysis for our five different simulations.
This analysis shows inefficiencies in the processors pipeline.

We make the following key observation that **CLICK** these agent-based models are
predominantly memory bound.
-->
`,title:"Key observation:<br>Agent-based simulations are often **memory-bound**",level:1,content:`# Key observation:<br>Agent-based simulations are often **memory-bound**
Microarchitecture analysis for five simulations

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/uarch-analysis/0.svg" w="38%"/>
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/uarch-analysis/1.svg" w="38%"/>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:1,title:"Key observation:<br>Agent-based simulations are often **memory-bound**"},note:`On this slide you can see the microarchitecture analysis for our five different simulations.
This analysis shows inefficiencies in the processors pipeline.

We make the following key observation that **CLICK** these agent-based models are
predominantly memory bound.`,index:0,start:0,end:27},inline:{raw:`---
src: ./memory-bound.md
---
`,content:"",frontmatter:{},index:11,start:450,end:454},filepath:"/home/lukas/Documents/presentation/slides/memory-bound.md",notesHTML:`<p>On this slide you can see the microarchitecture analysis for our five different simulations.
This analysis shows inefficiencies in the processors pipeline.</p>
<p>We make the following key observation that <strong>CLICK</strong> these agent-based models are
predominantly memory bound.</p>
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Rx,meta:{slide:{raw:`
# Key challenges and improvements

<div grid="~ cols-3 gap-5" m="-t-2" style="margin-top:0px">

<v-clicks>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--blue);text-align: center;margin-top: 20px;border: 3px solid var(--blueDark);" >
  <div class="i-uil-processor" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--blueDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--blueText)">

**I: Maximize parallelization**
  
  <div style="text-align:left" >

  * Optimize radial neighbor search
  * Parallelize the addition and removal of agents

  </div> 
  </div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--green);text-align: center;margin-top: 20px;border: 3px solid var(--greenDark);" >
  <div class="i-clarity-memory-solid" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--greenText)">

**II: Memory layout**
  
  <div style="text-align:left" >

  * NUMA-aware iteration
  * Agent sorting and balancing
  * Pool-based memory allocator

  </div> 
  </div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--nude);text-align: center;margin-top: 20px;border: 3px solid var(--nudeDark);" >
  <div class="i-clarity-tasks-solid" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--nudeDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--nudeText)">

**III: Avoid unnecessary work**

  <div style="text-align:left" >

  * Pair-wise force calculation for static regions

  </div> 
  </div> 
</div>

</v-clicks>

</div>

**Improved fundamental operations:**

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:0px">
<!-- column 1 -->
<div>

<ul>
 <li v-show="$slidev.nav.clicks == 1" style="color:red">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks != 1">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks == 1" style="color:red">Add and remove agents</li>
 <li v-show="$slidev.nav.clicks != 1" >Add and remove agents</li>
</ul>

</div>
<!-- column 2 -->
<div>

<ul>
 <li v-show="$slidev.nav.clicks == 2" style="color:red">Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks != 2" >Iterate over agents and execute a function</li>
  <li v-show="$slidev.nav.clicks == 2" style="color:red">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks != 2">Iterate over neighbors and execute a function</li>
</ul>

</div>
</div>

<style>
.slidev-layout li {
  line-height: 1.5em; 
}
</style>

<!--
In our novel simulation engine, we address three key challenges and make the following improvements
At the bottom you can see, which fundamental operation is improved.

* **CLICK** First, we maximize parallelization by optimizing the radial neighbor search and parallelizing the additions and removals of agents

* **CLICK** Second, we minimize data transfers
  with NUMA-aware iteration, agent sorting, and an optimized memory allocator

* **CLICK** And third, we avoid unnecessary work, by avoiding pair-wise force calculations for static regions, where agents don't move.

Due to the time limit, I will focus on the first two memory layout improvements.
-->
`,title:"Key challenges and improvements",level:1,content:`# Key challenges and improvements

<div grid="~ cols-3 gap-5" m="-t-2" style="margin-top:0px">

<v-clicks>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--blue);text-align: center;margin-top: 20px;border: 3px solid var(--blueDark);" >
  <div class="i-uil-processor" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--blueDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--blueText)">

**I: Maximize parallelization**
  
  <div style="text-align:left" >

  * Optimize radial neighbor search
  * Parallelize the addition and removal of agents

  </div> 
  </div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--green);text-align: center;margin-top: 20px;border: 3px solid var(--greenDark);" >
  <div class="i-clarity-memory-solid" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--greenText)">

**II: Memory layout**
  
  <div style="text-align:left" >

  * NUMA-aware iteration
  * Agent sorting and balancing
  * Pool-based memory allocator

  </div> 
  </div> 
</div>

<div class="rounded w-full drop-shadow" style="padding: 10px; background-color: var(--nude);text-align: center;margin-top: 20px;border: 3px solid var(--nudeDark);" >
  <div class="i-clarity-tasks-solid" style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--nudeDark)" />
  <div style="font-size: 1.5rem;margin:0;color:var(--nudeText)">

**III: Avoid unnecessary work**

  <div style="text-align:left" >

  * Pair-wise force calculation for static regions

  </div> 
  </div> 
</div>

</v-clicks>

</div>

**Improved fundamental operations:**

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:0px">
<!-- column 1 -->
<div>

<ul>
 <li v-show="$slidev.nav.clicks == 1" style="color:red">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks != 1">Determine neighbors</li>
 <li v-show="$slidev.nav.clicks == 1" style="color:red">Add and remove agents</li>
 <li v-show="$slidev.nav.clicks != 1" >Add and remove agents</li>
</ul>

</div>
<!-- column 2 -->
<div>

<ul>
 <li v-show="$slidev.nav.clicks == 2" style="color:red">Iterate over agents and execute a function</li>
 <li v-show="$slidev.nav.clicks != 2" >Iterate over agents and execute a function</li>
  <li v-show="$slidev.nav.clicks == 2" style="color:red">Iterate over neighbors and execute a function</li>
 <li v-show="$slidev.nav.clicks != 2">Iterate over neighbors and execute a function</li>
</ul>

</div>
</div>

<style>
.slidev-layout li {
  line-height: 1.5em; 
}
</style>`,frontmatter:{},note:`In our novel simulation engine, we address three key challenges and make the following improvements
At the bottom you can see, which fundamental operation is improved.

* **CLICK** First, we maximize parallelization by optimizing the radial neighbor search and parallelizing the additions and removals of agents

* **CLICK** Second, we minimize data transfers
  with NUMA-aware iteration, agent sorting, and an optimized memory allocator

* **CLICK** And third, we avoid unnecessary work, by avoiding pair-wise force calculations for static regions, where agents don't move.

Due to the time limit, I will focus on the first two memory layout improvements.`,index:12,start:455,end:558,notesHTML:`<p>In our novel simulation engine, we address three key challenges and make the following improvements
At the bottom you can see, which fundamental operation is improved.</p>
<ul>
<li>
<p><strong>CLICK</strong> First, we maximize parallelization by optimizing the radial neighbor search and parallelizing the additions and removals of agents</p>
</li>
<li>
<p><strong>CLICK</strong> Second, we minimize data transfers
with NUMA-aware iteration, agent sorting, and an optimized memory allocator</p>
</li>
<li>
<p><strong>CLICK</strong> And third, we avoid unnecessary work, by avoiding pair-wise force calculations for static regions, where agents don't move.</p>
</li>
</ul>
<p>Due to the time limit, I will focus on the first two memory layout improvements.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Jx,meta:{clicks:7,slide:{raw:`---
clicks: 7
---

# NUMA-aware iteration

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/numa-aware-iteration/10.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/numa-aware-iteration/20.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/numa-aware-iteration/30.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/numa-aware-iteration/40.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/numa-aware-iteration/50.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/numa-aware-iteration/60.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/numa-aware-iteration/70.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/numa-aware-iteration/80.svg" w="60%" style="padding:20px;margin-top:20px"/>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..7}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
Let's start with NUMA-aware iteration.

* The figure shows a server with two CPUs and two corresponding NUMA domains.
  Each CPU has two threads, and local DRAM with lower access latency than accesses to remote DRAM.

* **CLICK** The agents in the simulation are balanced between the two NUMA nodes. 

* **CLICK** In BioDynaMo, we store agent pointers in separate vectors for each NUMA domain.

* If we want to execute an operation for each agent, **CLICK** BDM partitions these agent pointers and assigns them to 
  threads from the same NUMA domain. 

* **CLICK** The color illustrates the execution progress of each thread. 

* **CLICK** To avoid an imbalanced execution, we implement a two-level work stealing mechanism. 

* **CLICK** First, threads try to steal work from the same NUMA domain.

* **CLICK** And in the second step, if the whole NUMA domain is finished, threads are allowed to steal from a different NUMA domain.

This mechanism minimizes the accesses to remote DRAM and thus reduces the overall memory access latency.
-->
`,title:"NUMA-aware iteration",level:1,content:`# NUMA-aware iteration

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/numa-aware-iteration/10.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/numa-aware-iteration/20.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/numa-aware-iteration/30.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/numa-aware-iteration/40.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/numa-aware-iteration/50.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/numa-aware-iteration/60.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/numa-aware-iteration/70.svg" w="60%" style="padding:20px;margin-top:20px"/>
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/numa-aware-iteration/80.svg" w="60%" style="padding:20px;margin-top:20px"/>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..7}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{clicks:7},note:`Let's start with NUMA-aware iteration.

* The figure shows a server with two CPUs and two corresponding NUMA domains.
  Each CPU has two threads, and local DRAM with lower access latency than accesses to remote DRAM.

* **CLICK** The agents in the simulation are balanced between the two NUMA nodes. 

* **CLICK** In BioDynaMo, we store agent pointers in separate vectors for each NUMA domain.

* If we want to execute an operation for each agent, **CLICK** BDM partitions these agent pointers and assigns them to 
  threads from the same NUMA domain. 

* **CLICK** The color illustrates the execution progress of each thread. 

* **CLICK** To avoid an imbalanced execution, we implement a two-level work stealing mechanism. 

* **CLICK** First, threads try to steal work from the same NUMA domain.

* **CLICK** And in the second step, if the whole NUMA domain is finished, threads are allowed to steal from a different NUMA domain.

This mechanism minimizes the accesses to remote DRAM and thus reduces the overall memory access latency.`,index:13,start:558,end:611,notesHTML:`<p>Let's start with NUMA-aware iteration.</p>
<ul>
<li>
<p>The figure shows a server with two CPUs and two corresponding NUMA domains.
Each CPU has two threads, and local DRAM with lower access latency than accesses to remote DRAM.</p>
</li>
<li>
<p><strong>CLICK</strong> The agents in the simulation are balanced between the two NUMA nodes.</p>
</li>
<li>
<p><strong>CLICK</strong> In BioDynaMo, we store agent pointers in separate vectors for each NUMA domain.</p>
</li>
<li>
<p>If we want to execute an operation for each agent, <strong>CLICK</strong> BDM partitions these agent pointers and assigns them to
threads from the same NUMA domain.</p>
</li>
<li>
<p><strong>CLICK</strong> The color illustrates the execution progress of each thread.</p>
</li>
<li>
<p><strong>CLICK</strong> To avoid an imbalanced execution, we implement a two-level work stealing mechanism.</p>
</li>
<li>
<p><strong>CLICK</strong> First, threads try to steal work from the same NUMA domain.</p>
</li>
<li>
<p><strong>CLICK</strong> And in the second step, if the whole NUMA domain is finished, threads are allowed to steal from a different NUMA domain.</p>
</li>
</ul>
<p>This mechanism minimizes the accesses to remote DRAM and thus reduces the overall memory access latency.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Z2,meta:{clicks:50,class:"text-center",slide:{raw:`---
clicks: 50
class: text-center
---

# Agent sorting and balancing

<!--
bash command to generate 
i=0; for f in * ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"load-balancing-mechanism/$f\\" w=\\"48%\\" />" && i=$(($i+1)); done
-->

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/00.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/10.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/20.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/30.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/31.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/32.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/33.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/34.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/35.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/36.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/37.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/38.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/39.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 13" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/40.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 14" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/41.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 15" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/42.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 16" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/43.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 17" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/47.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 18" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/48.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 19" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/49.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 20" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/50.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 21" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/52.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 22" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/53.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 23" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/54.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 24" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/55.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 25" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/56.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 26" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/57.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 27" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/58.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 28" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/59.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 29" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/60.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 30" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/61.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 31" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/62.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 32" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/63.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 33" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/64.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 34" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/65.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 35" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/66.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 36" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/67.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 37" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/68.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 38" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/69.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 39" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/80.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 40" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/81.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 41" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/82.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 42" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/83.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 43" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/90.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 44" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/91.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 45" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/92.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 46" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/93.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 47" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/96.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 48" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/97.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 49" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/98.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 50" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/99.svg" w="48%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..50}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
On the last slide, we assumed that the agents were already partitioned between NUMA nodes.
Now I want to show you how we achieve that.

Additionally, we also want to sort agents such that agents which are close in 3D space are also stored close in memory. 

This is important because the update of an agent also accesses the agents around it.

Let’s assume the following scenario.
 
Agents are stored in a 3×3 uniform grid as we can see in Figure A. The agents are denoted with lower case characters. 

**CLICK** The box indices of the uniform grid are shown in Figure B.
 
**CLICK** Preserving the neighborhood relation and reducing the dimensionality is the main characteristic of space-filling curves.
Therefore, we apply a Morton order space-filling curve on the uniform grid as shown in Figure C.

Our goal is to sort the agents in the nine boxes **CLICK** in increasing Morton order.  **KEEP CLICKING** The desired result can be seen at the bottom of the slide.

=================================
 
**CLICK** The Morton order is only contiguous for quadratic simulation spaces where the length is a power of two. Therefore, C shows a 4×4 grid.
 
For the 3×3 simulation space, there are gaps between Morton code **CLICK** four and six, **CLICK** six and eight, **CLICK**and nine and twelve.
 
Now let's see how to achieve the desired agent ordering. 
 
**CLICK** First, the algorithm determines the sequence of boxes in Morton order. 
**CLICK** We exploit the fact that the Morton order is a depth-first traversal of a quadtree. **KEEP CLICKING** We traverse the tree and keep track of three auxiliary variables. If we detect a gap we append the information to the offsets vector.

=================================

**3 CLICKS** Based on the offsets vector we can determine the sequence of boxes in morton order in parallel.

Afterwards, the algorithm partitions the boxes into segments, determine the number of agents **3 CLICKS**, and calculates the prefix sum **CLICK**.

Based on the prefix sum we divide the agents between NUMA domains and threads. 

**CLICK** Here we assume a system with two NUMA domains and **CLICK** two threads per domain, resulting in four threads in total.
 
**CLICK** In the last step, the algorithm copies the agents to their new position in the resource manager (G).
The obsolete agent copies can be deleted immediately or at the very end which requires extra memory, but results in a better memory layout.

With agent sorting and balancing, we increase the cache hit ratio and minimize remote DRAM accesses.
-->
`,title:"Agent sorting and balancing",level:1,content:`# Agent sorting and balancing

<!--
bash command to generate 
i=0; for f in * ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"load-balancing-mechanism/$f\\" w=\\"48%\\" />" && i=$(($i+1)); done
-->

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/00.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/10.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/20.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/30.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/31.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/32.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/33.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/34.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/35.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/36.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/37.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/38.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/39.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 13" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/40.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 14" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/41.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 15" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/42.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 16" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/43.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 17" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/47.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 18" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/48.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 19" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/49.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 20" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/50.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 21" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/52.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 22" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/53.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 23" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/54.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 24" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/55.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 25" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/56.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 26" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/57.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 27" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/58.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 28" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/59.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 29" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/60.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 30" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/61.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 31" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/62.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 32" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/63.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 33" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/64.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 34" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/65.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 35" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/66.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 36" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/67.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 37" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/68.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 38" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/69.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 39" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/80.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 40" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/81.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 41" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/82.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 42" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/83.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 43" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/90.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 44" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/91.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 45" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/92.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 46" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/93.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 47" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/96.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 48" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/97.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 49" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/98.svg" w="48%" />
<Image v-show="$slidev.nav.clicks == 50" src="/ppopp23-biodynamo-slides/load-balancing-mechanism/99.svg" w="48%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..50}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{clicks:50,class:"text-center"},note:`On the last slide, we assumed that the agents were already partitioned between NUMA nodes.
Now I want to show you how we achieve that.

Additionally, we also want to sort agents such that agents which are close in 3D space are also stored close in memory. 

This is important because the update of an agent also accesses the agents around it.

Let’s assume the following scenario.
 
Agents are stored in a 3×3 uniform grid as we can see in Figure A. The agents are denoted with lower case characters. 

**CLICK** The box indices of the uniform grid are shown in Figure B.
 
**CLICK** Preserving the neighborhood relation and reducing the dimensionality is the main characteristic of space-filling curves.
Therefore, we apply a Morton order space-filling curve on the uniform grid as shown in Figure C.

Our goal is to sort the agents in the nine boxes **CLICK** in increasing Morton order.  **KEEP CLICKING** The desired result can be seen at the bottom of the slide.

=================================
 
**CLICK** The Morton order is only contiguous for quadratic simulation spaces where the length is a power of two. Therefore, C shows a 4×4 grid.
 
For the 3×3 simulation space, there are gaps between Morton code **CLICK** four and six, **CLICK** six and eight, **CLICK**and nine and twelve.
 
Now let's see how to achieve the desired agent ordering. 
 
**CLICK** First, the algorithm determines the sequence of boxes in Morton order. 
**CLICK** We exploit the fact that the Morton order is a depth-first traversal of a quadtree. **KEEP CLICKING** We traverse the tree and keep track of three auxiliary variables. If we detect a gap we append the information to the offsets vector.

=================================

**3 CLICKS** Based on the offsets vector we can determine the sequence of boxes in morton order in parallel.

Afterwards, the algorithm partitions the boxes into segments, determine the number of agents **3 CLICKS**, and calculates the prefix sum **CLICK**.

Based on the prefix sum we divide the agents between NUMA domains and threads. 

**CLICK** Here we assume a system with two NUMA domains and **CLICK** two threads per domain, resulting in four threads in total.
 
**CLICK** In the last step, the algorithm copies the agents to their new position in the resource manager (G).
The obsolete agent copies can be deleted immediately or at the very end which requires extra memory, but results in a better memory layout.

With agent sorting and balancing, we increase the cache hit ratio and minimize remote DRAM accesses.`,index:14,start:611,end:777,notesHTML:`<p>On the last slide, we assumed that the agents were already partitioned between NUMA nodes.
Now I want to show you how we achieve that.</p>
<p>Additionally, we also want to sort agents such that agents which are close in 3D space are also stored close in memory.</p>
<p>This is important because the update of an agent also accesses the agents around it.</p>
<p>Let’s assume the following scenario.</p>
<p>Agents are stored in a 3×3 uniform grid as we can see in Figure A. The agents are denoted with lower case characters.</p>
<p><strong>CLICK</strong> The box indices of the uniform grid are shown in Figure B.</p>
<p><strong>CLICK</strong> Preserving the neighborhood relation and reducing the dimensionality is the main characteristic of space-filling curves.
Therefore, we apply a Morton order space-filling curve on the uniform grid as shown in Figure C.</p>
<p>Our goal is to sort the agents in the nine boxes <strong>CLICK</strong> in increasing Morton order.  <strong>KEEP CLICKING</strong> The desired result can be seen at the bottom of the slide.</p>
<p>=================================</p>
<p><strong>CLICK</strong> The Morton order is only contiguous for quadratic simulation spaces where the length is a power of two. Therefore, C shows a 4×4 grid.</p>
<p>For the 3×3 simulation space, there are gaps between Morton code <strong>CLICK</strong> four and six, <strong>CLICK</strong> six and eight, <strong>CLICK</strong>and nine and twelve.</p>
<p>Now let's see how to achieve the desired agent ordering.</p>
<p><strong>CLICK</strong> First, the algorithm determines the sequence of boxes in Morton order.
<strong>CLICK</strong> We exploit the fact that the Morton order is a depth-first traversal of a quadtree. <strong>KEEP CLICKING</strong> We traverse the tree and keep track of three auxiliary variables. If we detect a gap we append the information to the offsets vector.</p>
<p>=================================</p>
<p><strong>3 CLICKS</strong> Based on the offsets vector we can determine the sequence of boxes in morton order in parallel.</p>
<p>Afterwards, the algorithm partitions the boxes into segments, determine the number of agents <strong>3 CLICKS</strong>, and calculates the prefix sum <strong>CLICK</strong>.</p>
<p>Based on the prefix sum we divide the agents between NUMA domains and threads.</p>
<p><strong>CLICK</strong> Here we assume a system with two NUMA domains and <strong>CLICK</strong> two threads per domain, resulting in four threads in total.</p>
<p><strong>CLICK</strong> In the last step, the algorithm copies the agents to their new position in the resource manager (G).
The obsolete agent copies can be deleted immediately or at the very end which requires extra memory, but results in a better memory layout.</p>
<p>With agent sorting and balancing, we increase the cache hit ratio and minimize remote DRAM accesses.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:X2,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Evaluation

<!--
Now let's see how BioDynaMo performs using our representative simulations.
 -->
`,title:"Evaluation",level:1,content:"# Evaluation",frontmatter:{layout:"section"},note:"Now let's see how BioDynaMo performs using our representative simulations.",index:15,start:777,end:787,notesHTML:`<p>Now let's see how BioDynaMo performs using our representative simulations.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:n4,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Benchmark hardware

<Image src="/ppopp23-biodynamo-slides/hardware.png" w="80%" style="margin-top:110px" />

<!-- 
Here you can see a brief overview of the hardware we used.
Our most powerful system has 72 physical CPU cores, four NUMA domains and up to 1TB of memory.


================
**Biocellion**:

* Small-scale study: 2x Intel Xeon Xeon E5-2670 2.6GHz  (8 cores each)
* Large-scale study: AMD Opteron 6272 (has 16 cores -> 32 cores per node -> 4096 CPU cores)
 -->

`,title:"Benchmark hardware",level:1,content:`# Benchmark hardware

<Image src="/ppopp23-biodynamo-slides/hardware.png" w="80%" style="margin-top:110px" />`,frontmatter:{class:"text-center"},note:`Here you can see a brief overview of the hardware we used.
Our most powerful system has 72 physical CPU cores, four NUMA domains and up to 1TB of memory.


================
**Biocellion**:

* Small-scale study: 2x Intel Xeon Xeon E5-2670 2.6GHz  (8 cores each)
* Large-scale study: AMD Opteron 6272 (has 16 cores -> 32 cores per node -> 4096 CPU cores)`,index:16,start:787,end:808,notesHTML:`<p>Here you can see a brief overview of the hardware we used.
Our most powerful system has 72 physical CPU cores, four NUMA domains and up to 1TB of memory.</p>
<p>================
<strong>Biocellion</strong>:</p>
<ul>
<li>Small-scale study: 2x Intel Xeon Xeon E5-2670 2.6GHz  (8 cores each)</li>
<li>Large-scale study: AMD Opteron 6272 (has 16 cores -&gt; 32 cores per node -&gt; 4096 CPU cores)</li>
</ul>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:m4,meta:{class:"text-center",clicks:5,slide:{raw:`---
class: text-center
clicks: 5
---

# BioDynaMo **scales well** across<br/>NUMA nodes & large CPU core counts
Cell proliferation simulation

<Image src="/ppopp23-biodynamo-slides/cgd-final.png" w="85px" style="float:left;margin-right:20px;margin-left:120px" /> 

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/legend-0.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/legend-1.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/legend-2.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/legend-3.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/legend-4.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin:0px" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-1.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-2.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-3.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-4.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-5.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-1.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-2.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-3.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-4.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-5.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
Let's start our evaluation with the strong scaling analysis for cell proliferation.
The right figure plots the speedup with respect to a single threaded execution, while the left one
plots the absolute runtime in milliseconds.

We enable our optimizations step by step to see the impact on speedup and runtime.

* **CLICK** The BDM standard implementation without any optimizations performs poorly.
* **CLICK** This situation is improved dramatically by using the optimized radial neighbor search mechanism
* **CLICK** The presented memory improvements are combined into one group, and help BDM to scale across NUMA domains and large numbers of CPU cores.
* **CLICK** Using extra memory during agent sorting improves the runtime slighlty.
* **CLICK** And the static region detection mechanism decreases performance, bc this simulation does not have static regions.

We conclude that BDM scales well across a large number of CPU cores.
-->
`,title:"BioDynaMo **scales well** across<br/>NUMA nodes & large CPU core counts",level:1,content:`# BioDynaMo **scales well** across<br/>NUMA nodes & large CPU core counts
Cell proliferation simulation

<Image src="/ppopp23-biodynamo-slides/cgd-final.png" w="85px" style="float:left;margin-right:20px;margin-left:120px" /> 

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/legend-0.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/legend-1.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/legend-2.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/legend-3.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/legend-4.svg" w="60%" style="margin:0px" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin:0px" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-1.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-2.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-3.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-4.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-5.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-1.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-2.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-3.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-4.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/scalability/cell-grow-divide-runtime-5.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:5},note:`Let's start our evaluation with the strong scaling analysis for cell proliferation.
The right figure plots the speedup with respect to a single threaded execution, while the left one
plots the absolute runtime in milliseconds.

We enable our optimizations step by step to see the impact on speedup and runtime.

* **CLICK** The BDM standard implementation without any optimizations performs poorly.
* **CLICK** This situation is improved dramatically by using the optimized radial neighbor search mechanism
* **CLICK** The presented memory improvements are combined into one group, and help BDM to scale across NUMA domains and large numbers of CPU cores.
* **CLICK** Using extra memory during agent sorting improves the runtime slighlty.
* **CLICK** And the static region detection mechanism decreases performance, bc this simulation does not have static regions.

We conclude that BDM scales well across a large number of CPU cores.`,index:17,start:808,end:869,notesHTML:`<p>Let's start our evaluation with the strong scaling analysis for cell proliferation.
The right figure plots the speedup with respect to a single threaded execution, while the left one
plots the absolute runtime in milliseconds.</p>
<p>We enable our optimizations step by step to see the impact on speedup and runtime.</p>
<ul>
<li><strong>CLICK</strong> The BDM standard implementation without any optimizations performs poorly.</li>
<li><strong>CLICK</strong> This situation is improved dramatically by using the optimized radial neighbor search mechanism</li>
<li><strong>CLICK</strong> The presented memory improvements are combined into one group, and help BDM to scale across NUMA domains and large numbers of CPU cores.</li>
<li><strong>CLICK</strong> Using extra memory during agent sorting improves the runtime slighlty.</li>
<li><strong>CLICK</strong> And the static region detection mechanism decreases performance, bc this simulation does not have static regions.</li>
</ul>
<p>We conclude that BDM scales well across a large number of CPU cores.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:_4,meta:{class:"text-center",clicks:1,slide:{raw:`---
class: text-center
clicks: 1
---

# Cell clustering benefits from BioDynaMo's<br/>**memory optimizations** for any number of CPU cores
  
<Image src="/ppopp23-biodynamo-slides/cell-clustering/soma-clustering-final-state.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!-- 
Here is the same analysis for the cell clustering simulation.

The important observation here is that **CLICK** the memory optimizations reduce the runtime 
more significantly and for any number of CPU cores.
  -->
`,title:"Cell clustering benefits from BioDynaMo's<br/>**memory optimizations** for any number of CPU cores",level:1,content:`# Cell clustering benefits from BioDynaMo's<br/>**memory optimizations** for any number of CPU cores
  
<Image src="/ppopp23-biodynamo-slides/cell-clustering/soma-clustering-final-state.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/soma-clustering-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:1},note:`Here is the same analysis for the cell clustering simulation.

The important observation here is that **CLICK** the memory optimizations reduce the runtime 
more significantly and for any number of CPU cores.`,index:18,start:869,end:902,notesHTML:`<p>Here is the same analysis for the cell clustering simulation.</p>
<p>The important observation here is that <strong>CLICK</strong> the memory optimizations reduce the runtime
more significantly and for any number of CPU cores.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:$4,meta:{class:"text-center",clicks:1,slide:{raw:`---
class: text-center
clicks: 1
---

# The epidemiology use case benefits from using **additional memory**
  
<Image src="/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/epidemiology-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/epidemiology-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
The epidemiology use case **CLICK** benefits from using additional memory
-->
`,title:"The epidemiology use case benefits from using **additional memory**",level:1,content:`# The epidemiology use case benefits from using **additional memory**
  
<Image src="/ppopp23-biodynamo-slides/bioinformatics/influenza.0014.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/epidemiology-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/epidemiology-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/epidemiology-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:1},note:"The epidemiology use case **CLICK** benefits from using additional memory",index:19,start:902,end:932,notesHTML:`<p>The epidemiology use case <strong>CLICK</strong> benefits from using additional memory</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:B4,meta:{class:"text-center",clicks:1,slide:{raw:`---
class: text-center
clicks: 1
---

# The neuroscience use case benefits substantially from **static region detection**
  
<Image src="/ppopp23-biodynamo-slides/striking-image.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
And the neuroscience use case benefits substantially **CLICK** from static region detection
-->
`,title:"The neuroscience use case benefits substantially from **static region detection**",level:1,content:`# The neuroscience use case benefits substantially from **static region detection**
  
<Image src="/ppopp23-biodynamo-slides/striking-image.png" w="85px" style="display:inline-block;margin-right:20px" /> 
<Image src="/ppopp23-biodynamo-slides/scalability/legend-5.svg" w="60%" style="margin-top:52px;display:inline-block;" />

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-0.svg" w="80%"/>
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-1.svg" w="80%"/>

  <Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-0.svg" w="80%" />
  <Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/scalability/pyramidal-cell-runtime-1.svg" w="80%" />
</div>

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..1}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:1},note:"And the neuroscience use case benefits substantially **CLICK** from static region detection",index:20,start:932,end:962,notesHTML:`<p>And the neuroscience use case benefits substantially <strong>CLICK</strong> from static region detection</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:H4,meta:{slide:{raw:`
<!-- # BioDynaMo is <Hl>10$\\times$ more efficient</Hl> than Biocellion -->
# BioDynaMo is up to **9$\\times$ more efficient** than Biocellion

We implement Biocellions cell clustering simulation in BioDynaMo   

<div class="grid grid-cols-2 gap-10">
<div style="display:inline-grid;">

<div grid="~ cols-2 gap-2" style="margin-top:30px;" class="text-center" >
<Image src="/ppopp23-biodynamo-slides/biocellion-cell-clustering-initial-state.png" w="80%" style="margin-top:auto;margin-bottom:auto" />
<Image src="/ppopp23-biodynamo-slides/biocellion-cell-clustering-final-state.png" w="80%" style="margin-top:auto;margin-bottom:auto" />

Initial state

Final state

</div>

</div>

<!-- right column -->
<div style="display:inline-grid;">

<!-- Two Benchmarks: -->

<v-click>

* Small-scale with **26.8 million** cells
  - 16 CPU cores (Biocellion & BioDynaMo)
  - Result: **BioDynaMo is 4.2$\\times$ faster** 

</v-click>
<v-click>

* Large-scale with 281 million cells
  - Biocellion: 21 nodes with 672 CPU cores
  - BioDynaMo:   1 node  with  72 CPU cores
  - Result: same runtime, but BioDynaMo uses **9.3$\\times$ fewer CPU cores**

</v-click>

</div>
</div>


<Footnotes separator>

**Biocellion paper:** Kang et al., 2014, [https://doi.org/10.1093/bioinformatics/btu498](https://doi.org/10.1093/bioinformatics/btu498)

</Footnotes>

<!--
We compare BioDynaMo with Biocellion, which is an agent-based framework for tissue models also optimized for performance. 
We implement the cell sorting simulation presented in the Biocellion paper and use identical model parameters.
 
The visualization of the BioDynaMo simulation
with 50k cells can be seen here and is in good agreement with the Biocellion results.
 
We replicate two benchmarks from the Biocellion paper albeit on slightly different hardware because we did not have access to the Biocellion code.
 
**CLICK** For the single-node benchmark with 27 million cells, we observe that BDM is 4.2 times faster.
 
**CLICK** Second, for the large-scale benchmark with 281 million cells we observe that BioDynaMo achieves the same wall-clock runtime, but uses 9.3 x fewer CPU cores
-->
`,title:"BioDynaMo is up to **9$\\times$ more efficient** than Biocellion",level:1,content:`<!-- # BioDynaMo is <Hl>10$\\times$ more efficient</Hl> than Biocellion -->
# BioDynaMo is up to **9$\\times$ more efficient** than Biocellion

We implement Biocellions cell clustering simulation in BioDynaMo   

<div class="grid grid-cols-2 gap-10">
<div style="display:inline-grid;">

<div grid="~ cols-2 gap-2" style="margin-top:30px;" class="text-center" >
<Image src="/ppopp23-biodynamo-slides/biocellion-cell-clustering-initial-state.png" w="80%" style="margin-top:auto;margin-bottom:auto" />
<Image src="/ppopp23-biodynamo-slides/biocellion-cell-clustering-final-state.png" w="80%" style="margin-top:auto;margin-bottom:auto" />

Initial state

Final state

</div>

</div>

<!-- right column -->
<div style="display:inline-grid;">

<!-- Two Benchmarks: -->

<v-click>

* Small-scale with **26.8 million** cells
  - 16 CPU cores (Biocellion & BioDynaMo)
  - Result: **BioDynaMo is 4.2$\\times$ faster** 

</v-click>
<v-click>

* Large-scale with 281 million cells
  - Biocellion: 21 nodes with 672 CPU cores
  - BioDynaMo:   1 node  with  72 CPU cores
  - Result: same runtime, but BioDynaMo uses **9.3$\\times$ fewer CPU cores**

</v-click>

</div>
</div>


<Footnotes separator>

**Biocellion paper:** Kang et al., 2014, [https://doi.org/10.1093/bioinformatics/btu498](https://doi.org/10.1093/bioinformatics/btu498)

</Footnotes>`,frontmatter:{},note:`We compare BioDynaMo with Biocellion, which is an agent-based framework for tissue models also optimized for performance. 
We implement the cell sorting simulation presented in the Biocellion paper and use identical model parameters.
 
The visualization of the BioDynaMo simulation
with 50k cells can be seen here and is in good agreement with the Biocellion results.
 
We replicate two benchmarks from the Biocellion paper albeit on slightly different hardware because we did not have access to the Biocellion code.
 
**CLICK** For the single-node benchmark with 27 million cells, we observe that BDM is 4.2 times faster.
 
**CLICK** Second, for the large-scale benchmark with 281 million cells we observe that BioDynaMo achieves the same wall-clock runtime, but uses 9.3 x fewer CPU cores`,index:21,start:963,end:1029,notesHTML:`<p>We compare BioDynaMo with Biocellion, which is an agent-based framework for tissue models also optimized for performance.
We implement the cell sorting simulation presented in the Biocellion paper and use identical model parameters.</p>
<p>The visualization of the BioDynaMo simulation
with 50k cells can be seen here and is in good agreement with the Biocellion results.</p>
<p>We replicate two benchmarks from the Biocellion paper albeit on slightly different hardware because we did not have access to the Biocellion code.</p>
<p><strong>CLICK</strong> For the single-node benchmark with 27 million cells, we observe that BDM is 4.2 times faster.</p>
<p><strong>CLICK</strong> Second, for the large-scale benchmark with 281 million cells we observe that BioDynaMo achieves the same wall-clock runtime, but uses 9.3 x fewer CPU cores</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:oC,meta:{class:"text-center",clicks:12,slide:{raw:`---
class: text-center
clicks: 12
---

# BioDynaMo is **1000$\\times$ faster** than<br/>Cortex3D and NetLogo

<!--
bash command to generate 
i=0; pushd public &&  for f in cx3d-netlogo/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"$f\\" w=\\"65%\\" />" && i=$(($i+1)); done ; popd
-->
<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/cx3d-netlogo/00.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/cx3d-netlogo/01.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/cx3d-netlogo/02.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/cx3d-netlogo/03.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/cx3d-netlogo/04.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/cx3d-netlogo/10.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/cx3d-netlogo/20.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/cx3d-netlogo/21.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/cx3d-netlogo/30.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/cx3d-netlogo/40.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/cx3d-netlogo/50.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/cx3d-netlogo/51.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/cx3d-netlogo/52.svg" w="65%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
We also compare BioDynaMo with **CLICK** Cortex3D  and **CLICK** NetLogo  which are both single-threaded programs.
Therefore, we restrict BDM to use only one thread **CLICK**. Only for the last benchmark, we remove this restriction, and allow BDM to use all available threads. **CLICK**

Like before, we enable the optimizations step-by-step. 

* We see that even the BDM standard implemenations with all optimizations turned off is already significantly faster than Cortex3D and NetLogo.

* **CLICK** The optimized uniform grid significantly improves performance, especially **CLICK** in the multithreaded case. 

* **CLICK** Due to the small model size for these specific benchmarks, the memory optimizations do not improve performance much. 

* **CLICK** Which also applies for the use of extra memory.

* **CLICK** The static region detection on the other hand, improves performance up to 9$\\times$ for the neuroscience use case. Which is the only one with static regions.

**CLICK** For NetLogo we observe a 1300$\\times$ speedup directly. 
For Cortex3D, we have to combine the results from the scalability analysis. The strong scalaing analysis showed that BDM using all threads is at least  60 times faster than one thread. And on this slide we see that BDM with one thread is at least 22 times faster than Cortex3d. By multiplying these numbers we can conclude that BDM with all threads is three orders of magnitude faster than Cortex3d.
-->
`,title:"BioDynaMo is **1000$\\times$ faster** than<br/>Cortex3D and NetLogo",level:1,content:`# BioDynaMo is **1000$\\times$ faster** than<br/>Cortex3D and NetLogo

<!--
bash command to generate 
i=0; pushd public &&  for f in cx3d-netlogo/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"$f\\" w=\\"65%\\" />" && i=$(($i+1)); done ; popd
-->
<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/cx3d-netlogo/00.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/cx3d-netlogo/01.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/cx3d-netlogo/02.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/cx3d-netlogo/03.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/cx3d-netlogo/04.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/cx3d-netlogo/10.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/cx3d-netlogo/20.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/cx3d-netlogo/21.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/cx3d-netlogo/30.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/cx3d-netlogo/40.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/cx3d-netlogo/50.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/cx3d-netlogo/51.svg" w="65%" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/cx3d-netlogo/52.svg" w="65%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{class:"text-center",clicks:12},note:`We also compare BioDynaMo with **CLICK** Cortex3D  and **CLICK** NetLogo  which are both single-threaded programs.
Therefore, we restrict BDM to use only one thread **CLICK**. Only for the last benchmark, we remove this restriction, and allow BDM to use all available threads. **CLICK**

Like before, we enable the optimizations step-by-step. 

* We see that even the BDM standard implemenations with all optimizations turned off is already significantly faster than Cortex3D and NetLogo.

* **CLICK** The optimized uniform grid significantly improves performance, especially **CLICK** in the multithreaded case. 

* **CLICK** Due to the small model size for these specific benchmarks, the memory optimizations do not improve performance much. 

* **CLICK** Which also applies for the use of extra memory.

* **CLICK** The static region detection on the other hand, improves performance up to 9$\\times$ for the neuroscience use case. Which is the only one with static regions.

**CLICK** For NetLogo we observe a 1300$\\times$ speedup directly. 
For Cortex3D, we have to combine the results from the scalability analysis. The strong scalaing analysis showed that BDM using all threads is at least  60 times faster than one thread. And on this slide we see that BDM with one thread is at least 22 times faster than Cortex3d. By multiplying these numbers we can conclude that BDM with all threads is three orders of magnitude faster than Cortex3d.`,index:22,start:1029,end:1092,notesHTML:`<p>We also compare BioDynaMo with <strong>CLICK</strong> Cortex3D  and <strong>CLICK</strong> NetLogo  which are both single-threaded programs.
Therefore, we restrict BDM to use only one thread <strong>CLICK</strong>. Only for the last benchmark, we remove this restriction, and allow BDM to use all available threads. <strong>CLICK</strong></p>
<p>Like before, we enable the optimizations step-by-step.</p>
<ul>
<li>
<p>We see that even the BDM standard implemenations with all optimizations turned off is already significantly faster than Cortex3D and NetLogo.</p>
</li>
<li>
<p><strong>CLICK</strong> The optimized uniform grid significantly improves performance, especially <strong>CLICK</strong> in the multithreaded case.</p>
</li>
<li>
<p><strong>CLICK</strong> Due to the small model size for these specific benchmarks, the memory optimizations do not improve performance much.</p>
</li>
<li>
<p><strong>CLICK</strong> Which also applies for the use of extra memory.</p>
</li>
<li>
<p><strong>CLICK</strong> The static region detection on the other hand, improves performance up to 9$\\times$ for the neuroscience use case. Which is the only one with static regions.</p>
</li>
</ul>
<p><strong>CLICK</strong> For NetLogo we observe a 1300$\\times$ speedup directly.
For Cortex3D, we have to combine the results from the scalability analysis. The strong scalaing analysis showed that BDM using all threads is at least  60 times faster than one thread. And on this slide we see that BDM with one thread is at least 22 times faster than Cortex3d. By multiplying these numbers we can conclude that BDM with all threads is three orders of magnitude faster than Cortex3d.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:uC,meta:{slide:{raw:`
# BioDynaMo's runtime and memory consumption increases **linearly** with model size

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">

<img border="rounded" src="/ppopp23-biodynamo-slides/runtime-complexity.svg" class="drop-shadow">

<img border="rounded" src="/ppopp23-biodynamo-slides/memory-complexity.svg" class="drop-shadow">

</div>

<!--
We also investigate the runtime and memory consumption with varying simulation sizes from 1000 agents up to 1 billion agents and see that runtime and memory increases linearly,
once the  simulation reaches a size that fully utilizes each processor core.
-->
`,title:"BioDynaMo's runtime and memory consumption increases **linearly** with model size",level:1,content:`# BioDynaMo's runtime and memory consumption increases **linearly** with model size

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">

<img border="rounded" src="/ppopp23-biodynamo-slides/runtime-complexity.svg" class="drop-shadow">

<img border="rounded" src="/ppopp23-biodynamo-slides/memory-complexity.svg" class="drop-shadow">

</div>`,frontmatter:{},note:`We also investigate the runtime and memory consumption with varying simulation sizes from 1000 agents up to 1 billion agents and see that runtime and memory increases linearly,
once the  simulation reaches a size that fully utilizes each processor core.`,index:23,start:1093,end:1109,notesHTML:`<p>We also investigate the runtime and memory consumption with varying simulation sizes from 1000 agents up to 1 billion agents and see that runtime and memory increases linearly,
once the  simulation reaches a size that fully utilizes each processor core.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:gC,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# More in the paper

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), [https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480)

<Image src="/ppopp23-biodynamo-slides/paper.png" w="80%" />

<!-- 
Much more details about the optimizations and evaluations can be found in our paper.
-->
`,title:"More in the paper",level:1,content:`# More in the paper

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), [https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480)

<Image src="/ppopp23-biodynamo-slides/paper.png" w="80%" />`,frontmatter:{class:"text-center"},note:"Much more details about the optimizations and evaluations can be found in our paper.",index:24,start:1109,end:1123,notesHTML:`<p>Much more details about the optimizations and evaluations can be found in our paper.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:jC,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Supplementary Materials

Provides **additional evaluations** and all files required to **reproduce** the results (<bxs-file-pdf /> <material-symbols-code-blocks /> <logos-docker-icon />):

* [https://doi.org/10.5281/zenodo.6463816](https://doi.org/10.5281/zenodo.6463816)
* [https://github.com/CMU-SAFARI/BioDynaMo](https://github.com/CMU-SAFARI/BioDynaMo)

<v-click>

\`\`\`bash {all|1-4|6-7|9-10}
# extract the provided code archive
mkdir reproduce
tar -xzf <path>/SF2-code.tar.gz -C reproduce
cd reproduce/bdm-paper-examples

# load the provided self-contained docker image
docker/load.sh <path>/SF3-bdm-publication-image.tar.gz

# execute the scripts
docker/run.sh ./run-main.sh
\`\`\`

</v-click>
<v-click>

More details in file \`SF1-readme.pdf\` **<carbon-arrow-right />**

</v-click>

<v-click>
<div class="grid grid-cols-3 gap-2" w="60%" style="margin-left:auto;margin-right:auto;margin-top:-10px">

<img src="/ppopp23-biodynamo-slides/artifacts_available_v1_1.png" w="100px" />

<img src="/ppopp23-biodynamo-slides/artifacts_evaluated_reusable_v1_1.png" w="100px" />

<img src="/ppopp23-biodynamo-slides/results_reproduced_v1_1.png" w="100px" />

</div>
</v-click>

::right::

<Image v-show="$slidev.nav.clicks >= 5" src="/ppopp23-biodynamo-slides/SF1-readme.png" w="90%" />

<!--
We provide all files to reproduce the results...

**CLICK** which is very straight forward:

1) **CLICK** First, extracting the provided code archive
2) **CLICK** Second, loading the provided self-contained docker image
3) **CLICK** And third, executing the scripts.

**CLICK** Very detailed instructions can be found in provided README.

**CLICK** We are very happy that the reviewer were able to  reproduce all our results and awarded
us with all available badges.
-->
`,title:"Supplementary Materials",level:1,content:`# Supplementary Materials

Provides **additional evaluations** and all files required to **reproduce** the results (<bxs-file-pdf /> <material-symbols-code-blocks /> <logos-docker-icon />):

* [https://doi.org/10.5281/zenodo.6463816](https://doi.org/10.5281/zenodo.6463816)
* [https://github.com/CMU-SAFARI/BioDynaMo](https://github.com/CMU-SAFARI/BioDynaMo)

<v-click>

\`\`\`bash {all|1-4|6-7|9-10}
# extract the provided code archive
mkdir reproduce
tar -xzf <path>/SF2-code.tar.gz -C reproduce
cd reproduce/bdm-paper-examples

# load the provided self-contained docker image
docker/load.sh <path>/SF3-bdm-publication-image.tar.gz

# execute the scripts
docker/run.sh ./run-main.sh
\`\`\`

</v-click>
<v-click>

More details in file \`SF1-readme.pdf\` **<carbon-arrow-right />**

</v-click>

<v-click>
<div class="grid grid-cols-3 gap-2" w="60%" style="margin-left:auto;margin-right:auto;margin-top:-10px">

<img src="/ppopp23-biodynamo-slides/artifacts_available_v1_1.png" w="100px" />

<img src="/ppopp23-biodynamo-slides/artifacts_evaluated_reusable_v1_1.png" w="100px" />

<img src="/ppopp23-biodynamo-slides/results_reproduced_v1_1.png" w="100px" />

</div>
</v-click>

::right::

<Image v-show="$slidev.nav.clicks >= 5" src="/ppopp23-biodynamo-slides/SF1-readme.png" w="90%" />`,frontmatter:{layout:"two-cols"},note:`We provide all files to reproduce the results...

**CLICK** which is very straight forward:

1) **CLICK** First, extracting the provided code archive
2) **CLICK** Second, loading the provided self-contained docker image
3) **CLICK** And third, executing the scripts.

**CLICK** Very detailed instructions can be found in provided README.

**CLICK** We are very happy that the reviewer were able to  reproduce all our results and awarded
us with all available badges.`,index:25,start:1123,end:1187,notesHTML:`<p>We provide all files to reproduce the results...</p>
<p><strong>CLICK</strong> which is very straight forward:</p>
<ol>
<li><strong>CLICK</strong> First, extracting the provided code archive</li>
<li><strong>CLICK</strong> Second, loading the provided self-contained docker image</li>
<li><strong>CLICK</strong> And third, executing the scripts.</li>
</ol>
<p><strong>CLICK</strong> Very detailed instructions can be found in provided README.</p>
<p><strong>CLICK</strong> We are very happy that the reviewer were able to  reproduce all our results and awarded
us with all available badges.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:JC,meta:{slide:{raw:`
# Summary

Our optimizations to maximize parallelism, improve the memory layout, and avoid unnecessary work are effective
and give BioDynaMo the following performance characteristics.

<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">
  BioDynaMo <strong>scales well</strong> across a large number of CPU cores
  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

 **Runtime and memory** consumption **increases linearly** with the number of agents 

  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

  BioDynaMo is more than **1000$\\times$ faster** than Cortex3D and NetLogo
  and<br /> up to **9$\\times$ more efficient** than Biocellion

  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

These performance characteristics enable **simulations with billions of agents** on a single server.

  </div> 
</div>

</v-click>

<!--
Let me summarize:
We have seen that our performance optimizations are effective and give BioDynaMo the following performance characteristics.

* **CLICK** BioDynamo ...
* **CLICK** 
* **CLICK** 
* **CLICK**
-->
`,title:"Summary",level:1,content:`# Summary

Our optimizations to maximize parallelism, improve the memory layout, and avoid unnecessary work are effective
and give BioDynaMo the following performance characteristics.

<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">
  BioDynaMo <strong>scales well</strong> across a large number of CPU cores
  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

 **Runtime and memory** consumption **increases linearly** with the number of agents 

  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

  BioDynaMo is more than **1000$\\times$ faster** than Cortex3D and NetLogo
  and<br /> up to **9$\\times$ more efficient** than Biocellion

  </div> 
</div>

</v-click>
<v-click>

<div class="rounded w-full drop-shadow" style="padding: 7px; background-color: var(--green);text-align: center;margin-top: 15px;border: 3px solid var(--greenDark);" >
  <div style="position:absolute;top:-20px;left:10px;width:40px;height:40px;color:var(--greenDark)" />
  <div style="font-size: 1.35rem;margin:0;color:var(--greenText)">

These performance characteristics enable **simulations with billions of agents** on a single server.

  </div> 
</div>

</v-click>`,frontmatter:{},note:`Let me summarize:
We have seen that our performance optimizations are effective and give BioDynaMo the following performance characteristics.

* **CLICK** BioDynamo ...
* **CLICK** 
* **CLICK** 
* **CLICK**`,index:26,start:1188,end:1252,notesHTML:`<p>Let me summarize:
We have seen that our performance optimizations are effective and give BioDynaMo the following performance characteristics.</p>
<ul>
<li><strong>CLICK</strong> BioDynamo ...</li>
<li><strong>CLICK</strong></li>
<li><strong>CLICK</strong></li>
<li><strong>CLICK</strong></li>
</ul>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:t$,meta:{slide:{raw:`
# Future work

Distributed simulation engine

<Image src="/ppopp23-biodynamo-slides/distributed-bdm.png" w="70%" />

<!-- 

In my future work, I will focus on developing a distributed simulation engine to 
 further improve BioDynamo's capabilities.

 -->
`,title:"Future work",level:1,content:`# Future work

Distributed simulation engine

<Image src="/ppopp23-biodynamo-slides/distributed-bdm.png" w="70%" />`,frontmatter:{},note:`In my future work, I will focus on developing a distributed simulation engine to 
 further improve BioDynamo's capabilities.`,index:27,start:1253,end:1267,notesHTML:`<p>In my future work, I will focus on developing a distributed simulation engine to
further improve BioDynamo's capabilities.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:o$,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# BioDynaMo is available under the permissive<br/>Apache 2.0 **open source** license

[https://github.com/BioDynaMo/biodynamo](https://github.com/BioDynaMo/biodynamo)

<Image src="/ppopp23-biodynamo-slides/bdm-repo.png" w="58%"/>

<!--
I want to mention that BioDynaMo is fully open source.
-->
`,title:"BioDynaMo is available under the permissive<br/>Apache 2.0 **open source** license",level:1,content:`# BioDynaMo is available under the permissive<br/>Apache 2.0 **open source** license

[https://github.com/BioDynaMo/biodynamo](https://github.com/BioDynaMo/biodynamo)

<Image src="/ppopp23-biodynamo-slides/bdm-repo.png" w="58%"/>`,frontmatter:{class:"text-center"},note:"I want to mention that BioDynaMo is fully open source.",index:28,start:1267,end:1281,notesHTML:`<p>I want to mention that BioDynaMo is fully open source.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:C$,meta:{slide:{raw:`
# **Join us** in pushing the limits of agent-based modeling 

BioDynamo is an **open, welcoming, and collaborative project**: [https://biodynamo.org](https://biodynamo.org)

<!-- <v-click> -->

Besides the organizations behind this paper,

<div class="grid grid-cols-3 gap-10" w="90%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/eth_logo_kurz_pos_cropped.svg" h="35px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/tudelft.png" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->
<!-- <v-click> -->

BioDynamo is developed by the **BioDynamo collaboration**,
  
<div class="grid grid-cols-4 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/newcastle.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/surrey.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/cyprus.png" h="40px" style="margin:auto" />

</div>

<div class="grid grid-cols-3 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/gsi.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/scimpulse-full.png" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/geneva.jpg" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->
<!-- <v-click> -->

and further organizations.

<div class="grid grid-cols-2 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/tum.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/cbs.jpg" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->

<!--

Let me close by welcoming you to join our efforts in pushing the limits of agent-based simulation.

 -->
`,title:"**Join us** in pushing the limits of agent-based modeling",level:1,content:`# **Join us** in pushing the limits of agent-based modeling 

BioDynamo is an **open, welcoming, and collaborative project**: [https://biodynamo.org](https://biodynamo.org)

<!-- <v-click> -->

Besides the organizations behind this paper,

<div class="grid grid-cols-3 gap-10" w="90%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/eth_logo_kurz_pos_cropped.svg" h="35px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/tudelft.png" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->
<!-- <v-click> -->

BioDynamo is developed by the **BioDynamo collaboration**,
  
<div class="grid grid-cols-4 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/LogoOutline-Blue.svg" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/newcastle.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/surrey.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/cyprus.png" h="40px" style="margin:auto" />

</div>

<div class="grid grid-cols-3 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/gsi.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/scimpulse-full.png" h="60px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/geneva.jpg" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->
<!-- <v-click> -->

and further organizations.

<div class="grid grid-cols-2 gap-10" w="80%" style="margin:auto" >

<img src="/ppopp23-biodynamo-slides/logos/tum.png" h="40px" style="margin:auto" />
<img src="/ppopp23-biodynamo-slides/logos/cbs.jpg" h="40px" style="margin:auto" />

</div>
<!-- </v-click> -->`,frontmatter:{},note:"Let me close by welcoming you to join our efforts in pushing the limits of agent-based simulation.",index:29,start:1282,end:1338,notesHTML:`<p>Let me close by welcoming you to join our efforts in pushing the limits of agent-based simulation.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:S$,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# More in the paper

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), [https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480) 

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image src="/ppopp23-biodynamo-slides/paper.png" w="100%" />
  <Image src="/ppopp23-biodynamo-slides/arxiv-qrcode.png" w="70%" style="margin:auto" />
</div>
`,title:"More in the paper",level:1,content:`# More in the paper

[https://arxiv.org/abs/2301.06984](https://arxiv.org/abs/2301.06984), [https://doi.org/10.1145/3572848.3577480](https://doi.org/10.1145/3572848.3577480) 

<div grid="~ cols-2 gap-2" m="-t-2" style="margin-top:30px">
  <Image src="/ppopp23-biodynamo-slides/paper.png" w="100%" />
  <Image src="/ppopp23-biodynamo-slides/arxiv-qrcode.png" w="70%" style="margin:auto" />
</div>`,frontmatter:{class:"text-center"},index:30,start:1338,end:1351,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:E$,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Appendix
`,title:"Appendix",level:1,content:"# Appendix",frontmatter:{layout:"section"},index:31,start:1351,end:1357,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:G$,meta:{clicks:12,class:"text-center",title:"Memory allocation",srcSequence:"./memory-allocator.md",slide:{raw:null,title:"Memory allocation",level:1,content:`# Memory allocation

<!--
bash command to generate 
i=0; pushd public &&  for f in bdm-allocator/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"/$f\\" w=\\"60%\\" style=\\"margin-top:20px\\" />" && i=$(($i+1)); done ; popd
-->

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bdm-allocator/00.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/bdm-allocator/01.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/bdm-allocator/02.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/bdm-allocator/03.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/bdm-allocator/20.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/bdm-allocator/21.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/bdm-allocator/22.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/bdm-allocator/23.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/bdm-allocator/30.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/bdm-allocator/31.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/bdm-allocator/32.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/bdm-allocator/33.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/bdm-allocator/34.svg" w="60%" style="margin-top:20px" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{clicks:12,class:"text-center",title:"Memory allocation",srcSequence:"./memory-allocator.md"},note:`On the last slide we have seen how we sorted the agents pointers in the resource manager of BioDynaMo.
But this is not enough. 

We want that the actual agent instances are stored next to each other.
That's why we introduced the BioDynaMo memory allocator to gain full control over where memory is allocated.

Furthermore, the allocator ensures fast multithreaded allocations and deallocations. 

Our solution is built on a pool allocator that divides a memory block **CLICK** first into N-page aligned
segments and afterwards **CLICK** into equal-sized elements.

We separate the pool allocator into multiple NUMA domains (class NumaPoolAllocator) to fully control where memory is allocated. 

**CLICK** At the beginning of each N-aligned segment, we write the pointer to the corresponding NumaPoolAllocator instance. 

=================================
 
**CLICK** Free memory locations are stored in a linked list. 

Allocations **CLICK** are performed by removing an element from the linked list and writing the data to the list nodes memory address.

After a few allocations and deallocations **2 CLICKS**, the memory allocator state might look like this.

=================================

**CLICK**
Deallocations can be performed in constant time.

**CLICK** Allocated memory elements can calculate the address of the NUMAPoolAllocator pointer.

Afterwards, we perform a check if the NUMA id from the allocator matches the NUMA id of the thread that performs the deallocation.

If they match **CLICK**, the element is added to the tread local list without the need for thread synchronization.

If the comparison evaluates to false **CLICK**, the element is added to the central list which requires thread protection.`,index:32,start:0,end:85,source:{filepath:"/home/lukas/Documents/presentation/slides/memory-allocator.md",raw:`---
clicks: 12
class: text-center
---

# Memory allocation

<!--
bash command to generate 
i=0; pushd public &&  for f in bdm-allocator/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"/$f\\" w=\\"60%\\" style=\\"margin-top:20px\\" />" && i=$(($i+1)); done ; popd
-->

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bdm-allocator/00.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/bdm-allocator/01.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/bdm-allocator/02.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/bdm-allocator/03.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/bdm-allocator/20.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/bdm-allocator/21.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/bdm-allocator/22.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/bdm-allocator/23.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/bdm-allocator/30.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/bdm-allocator/31.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/bdm-allocator/32.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/bdm-allocator/33.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/bdm-allocator/34.svg" w="60%" style="margin-top:20px" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
On the last slide we have seen how we sorted the agents pointers in the resource manager of BioDynaMo.
But this is not enough. 

We want that the actual agent instances are stored next to each other.
That's why we introduced the BioDynaMo memory allocator to gain full control over where memory is allocated.

Furthermore, the allocator ensures fast multithreaded allocations and deallocations. 

Our solution is built on a pool allocator that divides a memory block **CLICK** first into N-page aligned
segments and afterwards **CLICK** into equal-sized elements.

We separate the pool allocator into multiple NUMA domains (class NumaPoolAllocator) to fully control where memory is allocated. 

**CLICK** At the beginning of each N-aligned segment, we write the pointer to the corresponding NumaPoolAllocator instance. 

=================================
 
**CLICK** Free memory locations are stored in a linked list. 

Allocations **CLICK** are performed by removing an element from the linked list and writing the data to the list nodes memory address.

After a few allocations and deallocations **2 CLICKS**, the memory allocator state might look like this.

=================================

**CLICK**
Deallocations can be performed in constant time.

**CLICK** Allocated memory elements can calculate the address of the NUMAPoolAllocator pointer.

Afterwards, we perform a check if the NUMA id from the allocator matches the NUMA id of the thread that performs the deallocation.

If they match **CLICK**, the element is added to the tread local list without the need for thread synchronization.

If the comparison evaluates to false **CLICK**, the element is added to the central list which requires thread protection.
-->


`,title:"Memory allocation",level:1,content:`# Memory allocation

<!--
bash command to generate 
i=0; pushd public &&  for f in bdm-allocator/* ; do echo "<Image v-show=\\"\\$slidev.nav.clicks == $i\\" src=\\"/$f\\" w=\\"60%\\" style=\\"margin-top:20px\\" />" && i=$(($i+1)); done ; popd
-->

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/bdm-allocator/00.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/bdm-allocator/01.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/bdm-allocator/02.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/bdm-allocator/03.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/bdm-allocator/20.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 5" src="/ppopp23-biodynamo-slides/bdm-allocator/21.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 6" src="/ppopp23-biodynamo-slides/bdm-allocator/22.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 7" src="/ppopp23-biodynamo-slides/bdm-allocator/23.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 8" src="/ppopp23-biodynamo-slides/bdm-allocator/30.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 9" src="/ppopp23-biodynamo-slides/bdm-allocator/31.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 10" src="/ppopp23-biodynamo-slides/bdm-allocator/32.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 11" src="/ppopp23-biodynamo-slides/bdm-allocator/33.svg" w="60%" style="margin-top:20px" />
<Image v-show="$slidev.nav.clicks == 12" src="/ppopp23-biodynamo-slides/bdm-allocator/34.svg" w="60%" style="margin-top:20px" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..12}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{clicks:12,class:"text-center",title:"Memory allocation"},note:`On the last slide we have seen how we sorted the agents pointers in the resource manager of BioDynaMo.
But this is not enough. 

We want that the actual agent instances are stored next to each other.
That's why we introduced the BioDynaMo memory allocator to gain full control over where memory is allocated.

Furthermore, the allocator ensures fast multithreaded allocations and deallocations. 

Our solution is built on a pool allocator that divides a memory block **CLICK** first into N-page aligned
segments and afterwards **CLICK** into equal-sized elements.

We separate the pool allocator into multiple NUMA domains (class NumaPoolAllocator) to fully control where memory is allocated. 

**CLICK** At the beginning of each N-aligned segment, we write the pointer to the corresponding NumaPoolAllocator instance. 

=================================
 
**CLICK** Free memory locations are stored in a linked list. 

Allocations **CLICK** are performed by removing an element from the linked list and writing the data to the list nodes memory address.

After a few allocations and deallocations **2 CLICKS**, the memory allocator state might look like this.

=================================

**CLICK**
Deallocations can be performed in constant time.

**CLICK** Allocated memory elements can calculate the address of the NUMAPoolAllocator pointer.

Afterwards, we perform a check if the NUMA id from the allocator matches the NUMA id of the thread that performs the deallocation.

If they match **CLICK**, the element is added to the tread local list without the need for thread synchronization.

If the comparison evaluates to false **CLICK**, the element is added to the central list which requires thread protection.`,index:0,start:0,end:85},inline:{raw:`---
src: ./memory-allocator.md
---
`,content:"",frontmatter:{},index:32,start:1357,end:1361},filepath:"/home/lukas/Documents/presentation/slides/memory-allocator.md",notesHTML:`<p>On the last slide we have seen how we sorted the agents pointers in the resource manager of BioDynaMo.
But this is not enough.</p>
<p>We want that the actual agent instances are stored next to each other.
That's why we introduced the BioDynaMo memory allocator to gain full control over where memory is allocated.</p>
<p>Furthermore, the allocator ensures fast multithreaded allocations and deallocations.</p>
<p>Our solution is built on a pool allocator that divides a memory block <strong>CLICK</strong> first into N-page aligned
segments and afterwards <strong>CLICK</strong> into equal-sized elements.</p>
<p>We separate the pool allocator into multiple NUMA domains (class NumaPoolAllocator) to fully control where memory is allocated.</p>
<p><strong>CLICK</strong> At the beginning of each N-aligned segment, we write the pointer to the corresponding NumaPoolAllocator instance.</p>
<p>=================================</p>
<p><strong>CLICK</strong> Free memory locations are stored in a linked list.</p>
<p>Allocations <strong>CLICK</strong> are performed by removing an element from the linked list and writing the data to the list nodes memory address.</p>
<p>After a few allocations and deallocations <strong>2 CLICKS</strong>, the memory allocator state might look like this.</p>
<p>=================================</p>
<p><strong>CLICK</strong>
Deallocations can be performed in constant time.</p>
<p><strong>CLICK</strong> Allocated memory elements can calculate the address of the NUMAPoolAllocator pointer.</p>
<p>Afterwards, we perform a check if the NUMA id from the allocator matches the NUMA id of the thread that performs the deallocation.</p>
<p>If they match <strong>CLICK</strong>, the element is added to the tread local list without the need for thread synchronization.</p>
<p>If the comparison evaluates to false <strong>CLICK</strong>, the element is added to the central list which requires thread protection.</p>
`,id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:J$,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Parallel agent removal

<Image src="/ppopp23-biodynamo-slides/parallel-remove.svg" w="75%"/>
`,title:"Parallel agent removal",level:1,content:`# Parallel agent removal

<Image src="/ppopp23-biodynamo-slides/parallel-remove.svg" w="75%"/>`,frontmatter:{class:"text-center"},index:33,start:1361,end:1369,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:eI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Performance-related simulation characteristics

<Image src="/ppopp23-biodynamo-slides/sim-characteristics.png" w="65%" />

<!-- 
This table shows that the selected simulations cover a broad spectrum of performance related
simulation characteristics.
 -->
`,title:"Performance-related simulation characteristics",level:1,content:`# Performance-related simulation characteristics

<Image src="/ppopp23-biodynamo-slides/sim-characteristics.png" w="65%" />`,frontmatter:{class:"text-center"},note:`This table shows that the selected simulations cover a broad spectrum of performance related
simulation characteristics.`,index:34,start:1369,end:1382,notesHTML:`<p>This table shows that the selected simulations cover a broad spectrum of performance related
simulation characteristics.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:sI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Operation runtime breakdown

<Image src="/ppopp23-biodynamo-slides/operation-breakdown.svg" w="45%"/>
`,title:"Operation runtime breakdown",level:1,content:`# Operation runtime breakdown

<Image src="/ppopp23-biodynamo-slides/operation-breakdown.svg" w="45%"/>`,frontmatter:{class:"text-center"},index:35,start:1382,end:1390,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:aI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# BioDynaMo / Biocellion comparison analysis

<Image src="/ppopp23-biodynamo-slides/biocellion-speedup-analysis.png" w="100%" style="margin-top:80px" />
`,title:"BioDynaMo / Biocellion comparison analysis",level:1,content:`# BioDynaMo / Biocellion comparison analysis

<Image src="/ppopp23-biodynamo-slides/biocellion-speedup-analysis.png" w="100%" style="margin-top:80px" />`,frontmatter:{class:"text-center"},index:36,start:1390,end:1398,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:cI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Optimization overview for larger scale simulations

<Image src="/ppopp23-biodynamo-slides/optimization-overview-all.svg" w="100%" style="margin-top:30px" />
`,title:"Optimization overview for larger scale simulations",level:1,content:`# Optimization overview for larger scale simulations

<Image src="/ppopp23-biodynamo-slides/optimization-overview-all.svg" w="100%" style="margin-top:30px" />`,frontmatter:{class:"text-center"},index:37,start:1398,end:1406,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:pI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Optimization overview for larger scale simulations

<Image src="/ppopp23-biodynamo-slides/optimization-overview-all-memory.svg" w="100%" style="margin-top:30px" />
`,title:"Optimization overview for larger scale simulations",level:1,content:`# Optimization overview for larger scale simulations

<Image src="/ppopp23-biodynamo-slides/optimization-overview-all-memory.svg" w="100%" style="margin-top:30px" />`,frontmatter:{class:"text-center"},index:38,start:1406,end:1414,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:gI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Full simulation scalability

<Image src="/ppopp23-biodynamo-slides/full-simulation-scalability.svg" w="80%"/>
`,title:"Full simulation scalability",level:1,content:`# Full simulation scalability

<Image src="/ppopp23-biodynamo-slides/full-simulation-scalability.svg" w="80%"/>`,frontmatter:{class:"text-center"},index:39,start:1414,end:1422,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:_I,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Whole simulation (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Whole simulation (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:40,start:1422,end:1432,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:xI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Build time (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-update-environment.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Build time (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-update-environment.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:41,start:1432,end:1442,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:MI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Search time indirect (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-agent-ops.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Search time indirect (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-agent-ops.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:42,start:1442,end:1452,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:BI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Memory consumption (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-memory.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Memory consumption (144 threads and 4 NUMA domains)

<Image src="/ppopp23-biodynamo-slides/environment/all-144-memory.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:43,start:1452,end:1462,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:PI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Whole simulation (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Whole simulation (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:44,start:1462,end:1472,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:KI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Build time (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-update-environment.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Build time (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-update-environment.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:45,start:1472,end:1482,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:jI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Search time indirect (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-agent-ops.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Search time indirect (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-agent-ops.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:46,start:1482,end:1492,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:qI,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Radial neighbor search comparison

Memory consumption (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-memory.svg" w="75%" style="margin-top:20px" />
`,title:"Radial neighbor search comparison",level:1,content:`# Radial neighbor search comparison

Memory consumption (18 threads and one NUMA domain)

<Image src="/ppopp23-biodynamo-slides/environment/all-18-memory.svg" w="75%" style="margin-top:20px" />`,frontmatter:{class:"text-center"},index:47,start:1492,end:1502,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:n3,meta:{clicks:5,class:"text-center",slide:{raw:`---
clicks: 5
class: text-center
---

# Agent sorting speeds up simulations up to **6$\\times$**

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/load-balancing/0.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/load-balancing/1.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/load-balancing/2.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/load-balancing/3.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/load-balancing/4.svg" w="55%" />
<Image v-show="$slidev.nav.clicks >= 5" src="/ppopp23-biodynamo-slides/load-balancing/5.svg" w="55%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>

<!--
In the next study we investigate the impact of the agent sorting frequency on performance.
A frequency of one means that agents are sorted in every iteration; a frequency of 10 means that sorting is executed every 10 iterations.

* **CLICK** The oncology and **CLICK** cell clustering simulations benefit most
of this performance improvement with a peak speedup of 5.77x). Both simulations are initial-
ized with a random distribution of agents.

The speedup is much lower for the other simulations due to various reasons.

* **CLICK** The cell proliferation simulation has a more regular initialization pattern.

* **CLICK** The epidemiology use case has randomly moving agents which counteract the optimization.

* **CLICK** And the neuroscience use case does not access many neighbors due to the static region detection mechanism.
-->
`,title:"Agent sorting speeds up simulations up to **6$\\times$**",level:1,content:`# Agent sorting speeds up simulations up to **6$\\times$**

<Image v-show="$slidev.nav.clicks == 0" src="/ppopp23-biodynamo-slides/load-balancing/0.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 1" src="/ppopp23-biodynamo-slides/load-balancing/1.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 2" src="/ppopp23-biodynamo-slides/load-balancing/2.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 3" src="/ppopp23-biodynamo-slides/load-balancing/3.svg" w="55%" />
<Image v-show="$slidev.nav.clicks == 4" src="/ppopp23-biodynamo-slides/load-balancing/4.svg" w="55%" />
<Image v-show="$slidev.nav.clicks >= 5" src="/ppopp23-biodynamo-slides/load-balancing/5.svg" w="55%" />

<!--
Workaround for: https://github.com/slidevjs/slidev/issues/858
Generate using bash:
for i in {0..5}; do echo '<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>' ; done
 -->
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>
<v-click><div style="display:hidden;margin-top:100%">.</div></v-click>`,frontmatter:{clicks:5,class:"text-center"},note:`In the next study we investigate the impact of the agent sorting frequency on performance.
A frequency of one means that agents are sorted in every iteration; a frequency of 10 means that sorting is executed every 10 iterations.

* **CLICK** The oncology and **CLICK** cell clustering simulations benefit most
of this performance improvement with a peak speedup of 5.77x). Both simulations are initial-
ized with a random distribution of agents.

The speedup is much lower for the other simulations due to various reasons.

* **CLICK** The cell proliferation simulation has a more regular initialization pattern.

* **CLICK** The epidemiology use case has randomly moving agents which counteract the optimization.

* **CLICK** And the neuroscience use case does not access many neighbors due to the static region detection mechanism.`,index:48,start:1502,end:1545,notesHTML:`<p>In the next study we investigate the impact of the agent sorting frequency on performance.
A frequency of one means that agents are sorted in every iteration; a frequency of 10 means that sorting is executed every 10 iterations.</p>
<ul>
<li><strong>CLICK</strong> The oncology and <strong>CLICK</strong> cell clustering simulations benefit most
of this performance improvement with a peak speedup of 5.77x). Both simulations are initial-
ized with a random distribution of agents.</li>
</ul>
<p>The speedup is much lower for the other simulations due to various reasons.</p>
<ul>
<li>
<p><strong>CLICK</strong> The cell proliferation simulation has a more regular initialization pattern.</p>
</li>
<li>
<p><strong>CLICK</strong> The epidemiology use case has randomly moving agents which counteract the optimization.</p>
</li>
<li>
<p><strong>CLICK</strong> And the neuroscience use case does not access many neighbors due to the static region detection mechanism.</p>
</li>
</ul>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:o3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Agent sorting speedup for one NUMA domain

<Image src="/ppopp23-biodynamo-slides/all-18-threads.svg" w="55%" />
`,title:"Agent sorting speedup for one NUMA domain",level:1,content:`# Agent sorting speedup for one NUMA domain

<Image src="/ppopp23-biodynamo-slides/all-18-threads.svg" w="55%" />`,frontmatter:{class:"text-center"},index:49,start:1545,end:1553,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:r3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Memory allocator comparison

<Image src="/ppopp23-biodynamo-slides/mem-alloc-comp/all.svg" w="70%" style="margin-top:60px" />
`,title:"Memory allocator comparison",level:1,content:`# Memory allocator comparison

<Image src="/ppopp23-biodynamo-slides/mem-alloc-comp/all.svg" w="70%" style="margin-top:60px" />`,frontmatter:{class:"text-center"},index:50,start:1553,end:1561,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:u3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Memory allocator comparison

<Image src="/ppopp23-biodynamo-slides/mem-alloc-comp/all-memory.svg" w="70%" style="margin-top:60px" />
`,title:"Memory allocator comparison",level:1,content:`# Memory allocator comparison

<Image src="/ppopp23-biodynamo-slides/mem-alloc-comp/all-memory.svg" w="70%" style="margin-top:60px" />`,frontmatter:{class:"text-center"},index:51,start:1561,end:1569,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:g3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Modularity

<Image src="/ppopp23-biodynamo-slides/bioinformatics/class-diagram.svg" w="100%" style="margin-top:20px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Modularity",level:1,content:`# Modularity

<Image src="/ppopp23-biodynamo-slides/bioinformatics/class-diagram.svg" w="100%" style="margin-top:20px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:52,start:1569,end:1583,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:_3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Abstraction layers and modeling features

<Image src="/ppopp23-biodynamo-slides/bioinformatics/bdm-layers.svg" w="70%" style="margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Abstraction layers and modeling features",level:1,content:`# Abstraction layers and modeling features

<Image src="/ppopp23-biodynamo-slides/bioinformatics/bdm-layers.svg" w="70%" style="margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:53,start:1583,end:1597,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:x3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Cell sorting 

<Image src="/ppopp23-biodynamo-slides/bioinformatics/cell-sorting.png" w="100%" style="margin-top:60px;padding:10px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Cell sorting",level:1,content:`# Cell sorting 

<Image src="/ppopp23-biodynamo-slides/bioinformatics/cell-sorting.png" w="100%" style="margin-top:60px;padding:10px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:54,start:1597,end:1611,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:M3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Neuroscience use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/neuroscience.png" w="60%" style="padding:10px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Neuroscience use case",level:1,content:`# Neuroscience use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/neuroscience.png" w="60%" style="padding:10px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:55,start:1611,end:1625,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:B3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Epidemiology use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/epidemiology.png" w="60%" style="padding:10px;margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Epidemiology use case",level:1,content:`# Epidemiology use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/epidemiology.png" w="60%" style="padding:10px;margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:56,start:1625,end:1639,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:P3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Oncology use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/oncology.png" w="90%" style="padding:10px;margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Oncology use case",level:1,content:`# Oncology use case

<Image src="/ppopp23-biodynamo-slides/bioinformatics/oncology.png" w="90%" style="padding:10px;margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:57,start:1639,end:1653,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:K3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Pyramidal cell growth video 

<Video src="/ppopp23-biodynamo-slides/bioinformatics/SV1-single-pyramidal-cell.mp4" w="40%" style="margin-top:-150px;transform: rotate(90deg);" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Pyramidal cell growth video",level:1,content:`# Pyramidal cell growth video 

<Video src="/ppopp23-biodynamo-slides/bioinformatics/SV1-single-pyramidal-cell.mp4" w="40%" style="margin-top:-150px;transform: rotate(90deg);" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:58,start:1653,end:1667,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:j3,meta:{class:"text-center",slide:{raw:`---
class: text-center
---

# Performance data table

<Image src="/ppopp23-biodynamo-slides/bioinformatics/perf-data-table.png" w="56%" style="margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>
`,title:"Performance data table",level:1,content:`# Performance data table

<Image src="/ppopp23-biodynamo-slides/bioinformatics/perf-data-table.png" w="56%" style="margin-top:0px" />

<Footnotes separator style="text-align:left">

**Source:** Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)

</Footnotes>`,frontmatter:{class:"text-center"},index:59,start:1667,end:1681,notesHTML:"",filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:Z3,meta:{slide:{raw:`
# BioDynaMo's GPU offloading capabilities

<div grid="~ cols-2 gap-10" m="-t-2" style="margin-top:30px">
  <img border="rounded" src="/ppopp23-biodynamo-slides/bioinformatics-paper.png" class="drop-shadow" style="margin:auto">
  <img border="rounded" src="/ppopp23-biodynamo-slides/ahmad-gpu-paper.png" class="drop-shadow">
</div>

<Footnotes separator style="text-align:left">

<!-- **Source:**  -->
* Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)
* Ahmad Hesam et al., 2021, DOI: [10.1109/IPDPSW52791.2021.00040](https://doi.org/10.1109/IPDPSW52791.2021.00040)

</Footnotes>

<!--

**BioDynaMo paper**

Compared an NVidia Tesla V100 GPU with 32 CPU cores (64
threads) **two Intel Xeon Gold 6130 CPUs @ 2.10GHz**,. 
We observed a speedup of 1.01× for cell growth and division,
and 4.16× for soma clustering. The speedup correlated with the number of
collisions in the simulation. The computational intensity is directly linked
with the number of collisions between agents.

**Ahmad's paper**
Therefore, the reported speedups are much higher.
Uses an early version of BDM with a structure of arrays data layout that is more amenable for acceleration.
And this early BioDynaMo version does not yet contain all optimizations in this paper.

-->
`,title:"BioDynaMo's GPU offloading capabilities",level:1,content:`# BioDynaMo's GPU offloading capabilities

<div grid="~ cols-2 gap-10" m="-t-2" style="margin-top:30px">
  <img border="rounded" src="/ppopp23-biodynamo-slides/bioinformatics-paper.png" class="drop-shadow" style="margin:auto">
  <img border="rounded" src="/ppopp23-biodynamo-slides/ahmad-gpu-paper.png" class="drop-shadow">
</div>

<Footnotes separator style="text-align:left">

<!-- **Source:**  -->
* Lukas Breitwieser et al., 2022, DOI: [10.1093/bioinformatics/btab649](https://doi.org/10.1093/bioinformatics/btab649)
* Ahmad Hesam et al., 2021, DOI: [10.1109/IPDPSW52791.2021.00040](https://doi.org/10.1109/IPDPSW52791.2021.00040)

</Footnotes>`,frontmatter:{},note:`**BioDynaMo paper**

Compared an NVidia Tesla V100 GPU with 32 CPU cores (64
threads) **two Intel Xeon Gold 6130 CPUs @ 2.10GHz**,. 
We observed a speedup of 1.01× for cell growth and division,
and 4.16× for soma clustering. The speedup correlated with the number of
collisions in the simulation. The computational intensity is directly linked
with the number of collisions between agents.

**Ahmad's paper**
Therefore, the reported speedups are much higher.
Uses an early version of BDM with a structure of arrays data layout that is more amenable for acceleration.
And this early BioDynaMo version does not yet contain all optimizations in this paper.`,index:60,start:1682,end:1716,notesHTML:`<p><strong>BioDynaMo paper</strong></p>
<p>Compared an NVidia Tesla V100 GPU with 32 CPU cores (64
threads) <strong>two Intel Xeon Gold 6130 CPUs @ 2.10GHz</strong>,.
We observed a speedup of 1.01× for cell growth and division,
and 4.16× for soma clustering. The speedup correlated with the number of
collisions in the simulation. The computational intensity is directly linked
with the number of collisions between agents.</p>
<p><strong>Ahmad's paper</strong>
Therefore, the reported speedups are much higher.
Uses an early version of BDM with a structure of arrays data layout that is more amenable for acceleration.
And this early BioDynaMo version does not yet contain all optimizations in this paper.</p>
`,filepath:"/home/lukas/Documents/presentation/slides/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",component:Jw,meta:{layout:"end"}}],qe=J3,Q3=[{name:"play",path:"/",component:__,children:[...qe]},{name:"print",path:"/print",component:Gw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}],In=Yv({history:Gf("/ppopp23-biodynamo-slides/"),routes:Q3});function X3(e,t,{mode:n="replace"}={}){return T({get(){const s=In.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ft(()=>{In[g(n)]({query:{...In.currentRoute.value.query,[e]:s}})})}})}const _u=_e(0);Ft(()=>{In.afterEach(async()=>{await Ft(),_u.value+=1})});const wu=_e(0),Gt=T(()=>In.currentRoute.value),xs=T(()=>Gt.value.query.print!==void 0),e5=T(()=>Gt.value.query.print==="clicks"),en=T(()=>Gt.value.query.embedded!==void 0),Pt=T(()=>Gt.value.path.startsWith("/presenter")),bu=T(()=>xs.value&&!e5.value),ha=T(()=>Gt.value.query.password);T(()=>!Pt.value&&(!Ee.remote||ha.value===Ee.remote));const Hr=X3("clicks","0"),ku=T(()=>qe.length-1),t5=T(()=>Gt.value.path),Ze=T(()=>parseInt(t5.value.split(/\//g).slice(-1)[0])||1);T(()=>tl(Ze.value));const ct=T(()=>qe.find(e=>e.path===`${Ze.value}`));T(()=>{var e,t,n;return(n=(t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});T(()=>{var e,t;return((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ze.value===1?"cover":"default")});const To=T(()=>qe.find(e=>e.path===`${Math.min(qe.length,Ze.value+1)}`)),n5=T(()=>qe.find(e=>e.path===`${Math.max(1,Ze.value-1)}`)),s5=T(()=>{var e,t;return _u.value,((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),es=T({get(){if(bu.value)return 99999;let e=+(Hr.value||0);return isNaN(e)&&(e=0),e},set(e){Hr.value=e.toString()}}),Ji=T(()=>{var e,t;return+(((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.clicks)??s5.value.length)}),i5=T(()=>Ze.value<qe.length-1||es.value<Ji.value),o5=T(()=>Ze.value>1||es.value>0),a5=T(()=>qe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(nl(e,t),e),[])),l5=T(()=>sl(a5.value,ct.value));T(()=>il(l5.value));const r5=T(()=>p5(wu.value,ct.value,n5.value));Ve(ct,(e,t)=>{wu.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Zn(){Ji.value<=es.value?Qi():es.value+=1}async function Jn(){es.value<=0?await Xi():es.value-=1}function tl(e){return Pt.value?`/presenter/${e}`:`/${e}`}function Qi(){const e=Math.min(qe.length,Ze.value+1);return Cs(e)}async function Xi(e=!0){const t=Math.max(1,Ze.value-1);await Cs(t),e&&Ji.value&&In.replace({query:{...Gt.value.query,clicks:Ji.value}})}function Cs(e,t){return In.push({path:tl(e),query:{...Gt.value.query,clicks:t}})}function c5(e){const t=_e(0),{direction:n,distanceX:s,distanceY:i}=vf(e,{onSwipeStart(o){o.pointerType==="touch"&&(oi.value||(t.value=ag()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||oi.value)return;const l=Math.abs(s.value),r=Math.abs(i.value);l/window.innerWidth>.3||l>100?n.value===sn.LEFT?Zn():Jn():(r/window.innerHeight>.4||r>200)&&(n.value===sn.DOWN?Xi():Qi())}})}async function Vr(){const{saveAs:e}=await gi(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(yd(Ee.download)?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/ppopp23-biodynamo-slides/slidev-exported.pdf",`${Ee.title}.pdf`)}async function E5(e){var t,n;if(e==null){const s=(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function nl(e,t,n=1){var i,o,l,r,c;const s=(o=(i=t.meta)==null?void 0:i.slide)==null?void 0:o.level;s&&s>n&&e.length>0?nl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(r=t.meta)==null?void 0:r.slide)==null?void 0:c.title})}function sl(e,t,n=!1,s){return e.map(i=>{const o={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:n};return o.children.length>0&&(o.children=sl(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function il(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:il(n.children,t+1)}))}const d5={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function u5(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:d5[e.name]||e.name;if(n.includes("|")){const[s,i]=n.split("|").map(o=>o.trim());n=t?i:s}if(n)return{...e,name:n}}function p5(e,t,n){var i,o;let s=e>0?(i=n==null?void 0:n.meta)==null?void 0:i.transition:(o=t==null?void 0:t.meta)==null?void 0:o.transition;return s||(s=Ee.transition),u5(s,e<0)}export{hd as $,m as A,x as B,g5 as C,et as D,Bn as E,Le as F,T as G,Da as H,Su as I,M5 as J,I5 as K,He as L,L5 as M,At as N,A5 as O,ec as P,zu as Q,pi as R,Ka as S,Ln as T,xa as U,h5 as V,m5 as W,bu as X,Hh as Y,Wh as Z,R as _,Ve as a,md as a0,pd as a1,zh as a2,_5 as a3,w5 as a4,b5 as a5,v5 as a6,y5 as a7,Nw as a8,Kw as a9,C as aA,I as aB,B5 as aC,ut as aD,Mi as aE,Uy as aF,gd as aG,T0 as aH,Vr as aa,Zn as ab,Qi as ac,E5 as ad,Jn as ae,Xi as af,Gt as ag,f5 as ah,a as ai,Kt as aj,S5 as ak,ft as al,st as am,z as an,_ as ao,ze as ap,Ns as aq,Y as ar,mi as as,Un as at,Vt as au,ua as av,S0 as aw,L0 as ax,B0 as ay,D0 as az,sm as b,nm as c,Ae as d,Ee as e,k5 as f,Yt as g,$5 as h,O as i,In as j,x5 as k,Ze as l,es as m,Ft as n,Ta as o,tl as p,Pt as q,_e as r,C5 as s,De as t,g as u,Dl as v,$s as w,K as x,pm as y,Q as z};
