(this["webpackJsonpmistx-frontend"]=this["webpackJsonpmistx-frontend"]||[]).push([[47],{192:function(t,n,e){"use strict";e.r(n);var r=e(4),o=e.n(r),i=(e(65),e(97));e(28),e(84),e(85);function a(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.heading,e=t.description,r=t.icon,a=t.html,u=t.button;return function(){var t=c(o.a.mark((function t(c){var s,f,l,w,h,p;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=c.network,f=c.appNetworkId,l=c.walletSelect,w=c.exit,h=c.stateSyncStatus,p=c.stateStore,null!==s){t.next=5;break}if(!h.network){t.next=5;break}return t.next=5,new Promise((function(t){h.network&&h.network.then(t),setTimeout((function(){null===s&&t()}),500)}));case 5:if(p.network.get()==f){t.next=7;break}return t.abrupt("return",{heading:n||"You Must Change Networks",description:e||"We've detected that you need to switch your wallet's network from <b>".concat(Object(i.g)(s),"</b> to <b>").concat(Object(i.g)(f),'</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),eventCode:"networkFail",button:u||{onclick:function(){w(),l()},text:"Switch Wallet"},html:a,icon:r||i.b});case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=47.55052823.chunk.js.map