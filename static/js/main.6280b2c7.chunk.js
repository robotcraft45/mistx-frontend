(this["webpackJsonpmistx-frontend"]=this["webpackJsonpmistx-frontend"]||[]).push([[9],{140:function(e,t){},147:function(e,t){},155:function(e,t,n){"use strict";n.r(t);n(129);var a,o=n(195),r=n(62),l=Object(o.a)({config:{initialColorMode:"dark",useSystemColorMode:!1},colors:{brand:{50:"#E7F3FE",100:"#BBDDFC",200:"#8FC7FA",300:"#63B1F8",400:"#379CF6",500:"#0B86F4",600:"#096BC3",700:"#075092",800:"#043662",900:"#021B31"}},fonts:{heading:"Poppins",body:"Poppins"},components:{Heading:{baseStyle:{fontWeight:700}},Button:{baseStyle:{fontWeight:600,borderRadius:r.theme.radii.xl},variants:{solid:{bg:"brand.500",color:"white"},outline:{borderColor:"brand.500",color:"brand.500"}}}}}),c=n(8),i=n.n(c),d=n(110),s=n.n(d),b=n(15),u=n(90),m=n(111),O=n(112);!function(e){e[e.MAINNET=1]="MAINNET",e[e.ROPSTEN=3]="ROPSTEN",e[e.RINKEBY=4]="RINKEBY",e[e.GOERLI=5]="GOERLI",e[e.KOVAN=42]="KOVAN",e[e.xDAI=100]="xDAI"}(a||(a={}));var j=a.MAINNET,f=Object({NODE_ENV:"production",PUBLIC_URL:"/mistx-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RPC_URL,v=Object({NODE_ENV:"production",PUBLIC_URL:"/mistx-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_D_APP_ID,w=Object({NODE_ENV:"production",PUBLIC_URL:"/mistx-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NAME;var h=n(19),S=Object(c.createContext)(void 0);function p(e){var t=e.children,n=Object(c.useState)(),a=Object(b.a)(n,2),o=a[0],r=a[1],l=Object(c.useState)(),i=Object(b.a)(l,2),d=i[0],s=i[1],p=Object(c.useState)(),N=Object(b.a)(p,2),E=N[0],_=N[1],x=Object(c.useState)(),C=Object(b.a)(x,2),T=C[0],k=C[1],P=Object(c.useState)(),g=Object(b.a)(P,2),R=g[0],A=g[1],D=Object(c.useState)(!0),I=Object(b.a)(D,2),F=I[0],y=I[1],W=Object(c.useState)(),K=Object(b.a)(W,2),B=K[0],L=K[1],U=Object(c.useState)(),H=Object(b.a)(U,2),M=H[0],V=H[1];Object(c.useEffect)((function(){var e,t=(e={address:s,network:_,balance:function(e){e&&k(u.a.utils.formatEther(e))},wallet:function(e){var t;(null===e||void 0===e||null===(t=e.provider)||void 0===t?void 0:t.selectedAddress)?(A(e),G(e),y(!1)):(r(void 0),A(void 0),k(void 0),y(!1))}},Object(m.a)({dappId:v,networkId:j,darkMode:!0,subscriptions:e,walletSelect:{wallets:[{walletName:"metamask",preferred:!0},{walletName:"trust",preferred:!0},{walletName:"authereum",preferred:!0},{walletName:"coinbase",preferred:!0},{walletName:"walletConnect",infuraKey:"d5e29c9b9a9d4116a7348113f57770a8",preferred:!0},{walletName:"portis",label:"Portis",apiKey:"e86e917b-b682-4a5c-bbc5-0f8c3b787562",preferred:!0},{walletName:"opera"},{walletName:"torus"},{walletName:"status"},{walletName:"walletLink",appName:w,rpcUrl:f},{walletName:"frame"},{walletName:"operaTouch"},{walletName:"imToken",rpcUrl:f},{walletName:"meetone"},{walletName:"mykey",rpcUrl:f},{walletName:"wallet.io",rpcUrl:f},{walletName:"huobiwallet",rpcUrl:f},{walletName:"hyperpay"},{walletName:"atoken"},{walletName:"liquality"}]},walletCheck:[{checkName:"derivationPath"},{checkName:"connect"},{checkName:"accounts"},{checkName:"network"}]}));L(t),V(Object(O.a)({dappId:v,networkId:j}))}),[]),Object(c.useEffect)((function(){var e=window.localStorage.getItem("selectedWallet");e&&B&&B.walletSelect(e)}),[B]);var G=function(e){var t=new u.a.providers.Web3Provider(e.provider);r(t),window.localStorage.setItem("selectedWallet",e.name||"")};return Object(h.jsx)(S.Provider,{value:{provider:o,address:d,network:E,balance:T,wallet:R,loading:F,onboard:B,notify:M},children:t})}function N(){var e=Object(c.useContext)(S);if(void 0===e)throw new Error("useWallet must be used within a WalletProvider");return e}var E=n(199),_=n(200),x=n(201),C=n(203);var T=function(e){var t=e.connected,n=N(),a=n.onboard,o=n.loading;return Object(h.jsx)(C.a,{mt:4,size:"lg",colorScheme:"brand",onClick:function(){return t?null===a||void 0===a?void 0:a.walletReset():null===a||void 0===a?void 0:a.walletSelect()},isLoading:o,children:t?"Disconnect":"Connect"})},k=n(198),P=n(204);var g=function(){var e=N().balance;return Object(h.jsx)(k.a,{mt:8,children:Object(h.jsx)(P.b,{width:"sm",children:Object(h.jsxs)(P.a,{flex:"initial",children:[Object(h.jsx)(P.c,{children:"Eth"}),Object(h.jsx)(P.d,{children:e})]})})})};var R,A=function(){var e=N(),t=e.provider,n=e.wallet,a=e.balance;return Object(h.jsxs)(E.a,{minH:"100vh",flexDir:"column",alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(_.a,{fontSize:["6xl","6xl","8xl"],bgGradient:"linear(to-r, #FF0080, #7928CA)",bgClip:"text",children:"mistX"}),Object(h.jsx)(x.a,{color:"gray.400",fontSize:"2xl",children:"Gasless DEX"}),Object(h.jsx)(T,{connected:!!n&&!!t}),a&&Object(h.jsx)(g,{})]})},D=function(e){e&&e instanceof Function&&n.e(53).then(n.bind(null,1174)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),o(e),r(e),l(e)}))},I=n(202),F=n(118),y=n(32),W=Object(y.b)(R||(R=Object(F.a)(["\n  /*\n    This will hide the focus indicator if the element receives focus    via the mouse,\n    but it will still show up on keyboard focus.\n  */\n  .js-focus-visible :focus:not([data-focus-visible-added]) {\n    outline: none;\n    box-shadow: none;\n  }\n  .bn-onboard-custom.bn-onboard-dark-mode {\n    background: #2f3747 !important;\n  }\n  .bn-onboard-custom.bn-onboard-dark-mode-background-hover:hover,\n  .bn-onboard-custom.bn-onboard-dark-mode-background {\n    background: #1a202c !important;\n  }\n  .bn-onboard-custom.bn-onboard-dark-mode-link {\n    color: #0b86f4 !important;\n    border-color: #0b86f4 !important;\n  }\n"])));s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(p,{children:Object(h.jsxs)(I.a,{theme:l,children:[Object(h.jsx)(y.a,{styles:W}),Object(h.jsx)(A,{})]})})}),document.getElementById("root")),D()}},[[155,10,13]]]);
//# sourceMappingURL=main.6280b2c7.chunk.js.map