(this["webpackJsonpmistx-frontend"]=this["webpackJsonpmistx-frontend"]||[]).push([[40],{173:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r),o=n(559);function a(t,e,n,r,i,o,a){try{var l=t[o](a),s=l.value}catch(c){return void n(c)}l.done?e(s):Promise.resolve(s).then(r,i)}e.default=function(t){var e=t.rpcUrl,r=t.appName,l=t.appLogoUrl,s=t.networkId,c=t.preferred,f=t.label,u=t.iconSrc;return{name:f||"WalletLink",svg:t.svg||o.a,iconSrc:u,wallet:function(){var t,o=(t=i.a.mark((function t(o){var a,c,f,u,d,p,h;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.getBalance,c=o.getAddress,f=o.getNetwork,t.next=3,Promise.all([n.e(0),n.e(1),n.e(7),n.e(14),n.e(20)]).then(n.t.bind(null,1122,7));case 3:return u=t.sent,d=u.default,p=new d({appName:r,appLogoUrl:l}),h=p.makeWeb3Provider(e,s),t.abrupt("return",{provider:h,interface:{name:"WalletConnect",connect:function(){return new Promise((function(t,e){h.enable().then((function(e){return t(e)})).catch((function(){return e({message:"This dapp needs access to your account information."})}))}))},disconnect:function(){h.disconnect()},address:{get:function(){return c(h)}},network:{get:function(){return f(h)}},balance:{get:function(){return a(h)}}}});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function l(t){a(o,r,i,l,s,"next",t)}function s(t){a(o,r,i,l,s,"throw",t)}l(void 0)}))});return function(t){return o.apply(this,arguments)}}(),type:"sdk",desktop:!0,preferred:c}}},559:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r='\n\t<svg width="40" height="40" viewBox="0 0 383 383" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<g clip-path="url(#clip0)">\n\t\t<g filter="url(#filter0_dd)">\n\t\t\t<path d="M0.998047 0.572266L382.78 0.572266V382.354H0.998047L0.998047 0.572266Z" fill="url(#paint0_linear)"/>\n\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M59.1074 191.572C59.1074 264.966 118.605 324.463 191.998 324.463C265.392 324.463 324.889 264.966 324.889 191.572C324.889 118.179 265.392 58.6816 191.998 58.6816C118.605 58.6816 59.1074 118.179 59.1074 191.572ZM158.037 148.752C153.144 148.752 149.178 152.718 149.178 157.611V225.533C149.178 230.426 153.144 234.393 158.037 234.393H225.959C230.852 234.393 234.818 230.426 234.818 225.533V157.611C234.818 152.718 230.852 148.752 225.959 148.752H158.037Z" fill="white"/>\n\t\t</g>\n\t\t</g>\n\t\t<defs>\n\t\t\t<filter id="filter0_dd" x="-23.002" y="-7.42773" width="429.782" height="429.782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n\t\t\t\t<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset dy="16"/>\n\t\t\t\t<feGaussianBlur stdDeviation="12"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>\n\t\t\t\t<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset/>\n\t\t\t\t<feGaussianBlur stdDeviation="4"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n\t\t\t\t<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>\n\t\t\t\t<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>\n\t\t\t</filter>\n\t\t\t<linearGradient id="paint0_linear" x1="191.889" y1="0.572266" x2="191.889" y2="382.354" gradientUnits="userSpaceOnUse">\n\t\t\t\t<stop stop-color="#2E66F8"/>\n\t\t\t\t<stop offset="1" stop-color="#124ADB"/>\n\t\t\t</linearGradient>\n\t\t\t<clipPath id="clip0">\n\t\t\t\t<rect width="381.782" height="381.782" fill="white" transform="translate(0.998047 0.572266)"/>\n\t\t\t</clipPath>\n\t\t</defs>\n\t</svg>\n'}}]);
//# sourceMappingURL=40.fdceb266.chunk.js.map