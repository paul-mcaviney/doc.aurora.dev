"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[720],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(9624),a=n(42),o=(n(9496),n(9613)),i=["components"],s={title:"Rainbow Bridge",sidebar_position:1},l="Overview",d={unversionedId:"bridge/rainbow-bridge",id:"bridge/rainbow-bridge",title:"Rainbow Bridge",description:"For bridging the origin chain of the token matters. It is not possible to mint a token on Aurora and move it to Ethereum.",source:"@site/docs/bridge/rainbow-bridge.md",sourceDirName:"bridge",slug:"/bridge/rainbow-bridge",permalink:"/bridge/rainbow-bridge",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/bridge/rainbow-bridge.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Rainbow Bridge",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Verify a contract",permalink:"/interact/verify-contract"},next:{title:"The Graph",permalink:"/integrate/indexers/the-graph"}},u=[{value:"Bridging ETH Balances",id:"bridging-eth-balances",children:[],level:2},{value:"Add token to Rainbow Bridge",id:"add-token-to-rainbow-bridge",children:[],level:2},{value:"Mint on Ethereum \u2192 Bridge to Near &amp; Aurora",id:"mint-on-ethereum--bridge-to-near--aurora",children:[],level:2}],c={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"For bridging the origin chain of the token matters. It is not possible to mint a token on Aurora and move it to Ethereum."),(0,o.kt)("p",null,"Tokens that originated on Ethereum can be bridged to NEAR"),(0,o.kt)("p",null,"Tokens that are presented on NEAR (originated ones and transferred from Ethereum) can be bridged to Aurora."),(0,o.kt)("p",null,"Tokens originated on Aurora cannot be bridged to NEAR."),(0,o.kt)("p",null,"Tokens originated on NEAR cannot be bridged to Ethereum."),(0,o.kt)("p",null,"So, if you want your token to trade on three networks, then deploy it on Ethereum, then bridge to NEAR, then bridge to Aurora. Deploy \u2192 Approve \u2192 Bridge"),(0,o.kt)("h2",{id:"bridging-eth-balances"},"Bridging ETH Balances"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Bridging ETH is currently only enabled for Ropsten Testnet to Aurora Testnet."))),(0,o.kt)("p",null,"If you need Ropsten ETH to transfer, you can get some from faucets such as ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.metamask.io/"},"MetaMask's")," or ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.ropsten.be/"},"DeFi Karen's"),".\nFor this tutorial, you should have (at least) 2 Ropsten ETH already on your account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"metamask-two-ropsten-eth",src:n(7801).Z})),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.aurora.dev/bridge"},"Bridge UI"),".\nEnter the amount of ETH to transfer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Amount")," box (in this example we send 1 ETH) then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora",src:n(8049).Z})),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm"),", then confirm the transaction in the MetaMask pop-up."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora-confirm",src:n(7415).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora-metamask-confirm",src:n(8687).Z})),(0,o.kt)("p",null,"After a minute or two the transaction on the Ropsten network will confirm in MetaMask.\nAt this point the ETH is locked on the Ropsten side in a contract, and it has emitted a ",(0,o.kt)("inlineCode",{parentName:"p"},"Deposit")," event.\nThe Aurora relayers watch for such events and automatically forward a transaction to the NEAR network (where Aurora runs).\nThis takes some time because we must wait for multiple block confirmations on Ropsten to be sure it will not revert.\nWhile this is happening you will see an intermediate message in the Bridge UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora-waiting",src:n(1768).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora-processing-transfer",src:n(2694).Z})),(0,o.kt)("p",null,'After the transaction is complete (several minutes later) it will appear as "Completed" in the UI.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bridge-send-one-eth-to-aurora-completed",src:n(6584).Z})),(0,o.kt)("p",null,"You can now see your balance in MetaMask by switching to the Aurora Testnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"metamask-aurora-testnet-with-one-eth",src:n(5551).Z})),(0,o.kt)("h2",{id:"add-token-to-rainbow-bridge"},"Add token to Rainbow Bridge"),(0,o.kt)("p",null,"If you are a developer, and you can deploy tokens using the Rainbow Bridge:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethereum ERC-20 tokens can be deployed to NEAR and Aurora."),(0,o.kt)("li",{parentName:"ul"},"NEAR NEP-141 tokens can be deployed to Aurora.")),(0,o.kt)("p",null,"Following is the process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("a",{parentName:"li",href:"https://rainbowbridge.app/deploy"},"Rainbow Bridge deployment")," feature."),(0,o.kt)("li",{parentName:"ol"},"The UI will walk you through the deployment steps."),(0,o.kt)("li",{parentName:"ol"},"Once deployed, raise a pull request ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aurora-is-near/bridge-assets"},"on this repository")," to have the Aurora team add your metadata."),(0,o.kt)("li",{parentName:"ol"},"Once the Aurora team process and approve your PR, your token will be searchable by symbol on the\nbridge transfer form and other dApps will be able to display balances correctly.")),(0,o.kt)("p",null,"For questions, you can reach the bridge team at ",(0,o.kt)("a",{parentName:"p",href:"mailto:bridge@aurora.dev"},"bridge@aurora.dev"),"."),(0,o.kt)("h2",{id:"mint-on-ethereum--bridge-to-near--aurora"},"Mint on Ethereum \u2192 Bridge to Near & Aurora"))}p.isMDXComponent=!0},8049:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora-f3840490ca1325d4406914794eeb25ed.png"},6584:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora_completed-b109a2559254ce7b6154021c82311372.png"},7415:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora_confirm-9e872233c68012ec79ffd17e3b2232d3.png"},8687:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora_metamask_confirm-54189697c7aea99a5939b11dc55ae7ae.png"},2694:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora_processing_transfer-7b3b455a0a60807f0fcb06666df24b0e.png"},1768:function(e,t,n){t.Z=n.p+"assets/images/bridge_send_one_eth_to_aurora_waiting-5dbe6bcba53d2f9b9772d1c1c1e9448d.png"},5551:function(e,t,n){t.Z=n.p+"assets/images/metamask_aurora_testnet_with_one_eth-60ef85d0ab961049f6207749ab0b15cc.png"},7801:function(e,t,n){t.Z=n.p+"assets/images/metamask_two_ropsten_eth-8801355c2c5a1fd9568a415574884b92.png"}}]);