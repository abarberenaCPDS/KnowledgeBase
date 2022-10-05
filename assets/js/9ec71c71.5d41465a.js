"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9107],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?i.createElement(f,n(n({ref:t},c),{},{components:r})):i.createElement(f,n({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var d=2;d<a;d++)n[d]=r[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(7462),o=(r(7294),r(4137));const a={title:"How to configure system-wide blocking with AdGuard for iOS",sidebar_position:2},n=void 0,l={unversionedId:"adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking",id:"adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking",title:"How to configure system-wide blocking with AdGuard for iOS",description:"About system-wide blocking",source:"@site/docs/adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/how-to-configure-system-wide-blocking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to configure system-wide blocking with AdGuard for iOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to activate premium features",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/premium-activation"},next:{title:"How to avoid compatibility problem with FaceTime",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/how-to-avoid-compatibility-issues-with-facetime"}},s={},d=[{value:"About system-wide blocking",id:"about-system-wide-blocking",level:2},{value:"How to add a DNS filter/hosts file",id:"how-to-add-a-dns-filterhosts-file",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-system-wide-blocking"},"About system-wide blocking"),(0,o.kt)("p",null,"System-wide blocking means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to set it up on your iOS device."),(0,o.kt)("p",null,"On iOS, the only way to block ads and trackers system-wide is to use ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS filtering"),". First, you have to enable DNS protection. To do so, open ",(0,o.kt)("em",{parentName:"p"},"AdGuard for iOS settings")," \u2014> ",(0,o.kt)("em",{parentName:"p"},"DNS protection")," and switch it on."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection.PNG",alt:"DNS protection screen"})),(0,o.kt)("p",null,"Now, if your purpose is to block ads and trackers system-wide, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable AdGuard DNS server (",(0,o.kt)("em",{parentName:"li"},"Settings")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"DNS server")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"AdGuard DNS"),")."),(0,o.kt)("li",{parentName:"ol"},"Add a DNS filter/hosts file that will block ad and tracking domains, e.g. AdGuard DNS filter.")),(0,o.kt)("p",null,"The second option takes a bit more time to set up but has several advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use any DNS server at your discretion and you are not tied up to a specific blocking server."),(0,o.kt)("li",{parentName:"ul"},"You can add multiple DNS filters and/or hosts files at the same time, but you can't use multiple DNS servers at once.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"How DNS filtering works"})),(0,o.kt)("h2",{id:"how-to-add-a-dns-filterhosts-file"},"How to add a DNS filter/hosts file"),(0,o.kt)("p",null,"You can add any DNS filter or hosts file, the instruction will be the same for all of them. For the sake of the example, let's add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"AdGuard DNS filter"),". It is composed of several other filters (AdGuard Base filter, Social Media filter, Tracking Protection filter, Mobile Ads filter, EasyList, EasyPrivacy, etc.) and it's simplified specifically to be better compatible with DNS-level ad blocking."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("em",{parentName:"li"},"AdGuard for iOS settings")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"General"),"."),(0,o.kt)("li",{parentName:"ol"},"Enable ",(0,o.kt)("em",{parentName:"li"},"Advanced mode"),". The 'Advanced settings' tab will appear. Open it.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg",alt:"Open AdGuard Settings and enable Advanced mode"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings.PNG",alt:"Advanced settings screen"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: We don't recommend touching other settings you'll find inside the ",(0,o.kt)("em",{parentName:"p"},"Advanced settings")," tab, especially when it comes to ",(0,o.kt)("em",{parentName:"p"},"Low-level settings"),". Some of them might break the Internet connection or compromise your privacy and security, so it's better to be careful. The text below describes the exact actions required to add AdGuard DNS filter.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy this link: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt")," (it's a link for AdGuard DNS filter)"),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("em",{parentName:"li"},"AdGuard for iOS settings")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," \u2014> ",(0,o.kt)("em",{parentName:"li"},"DNS filtering")," (available while ",(0,o.kt)("em",{parentName:"li"},"Advanced mode")," is enabled) \u2014> ",(0,o.kt)("em",{parentName:"li"},"DNS filters"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Add a filter"),", paste the link into the filter URL field, and click 'Next'.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/ios_adding_a_filter.PNG",alt:"Adding a DNS filter screen"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add any number of other DNS filters the same way by pasting a different URL at step 3. You can find various filters and links to them ",(0,o.kt)("a",{parentName:"p",href:"https://filterlists.com"},"here"),".")))}p.isMDXComponent=!0}}]);