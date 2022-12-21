"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1438],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(r),c=n,u=f["".concat(s,".").concat(c)]||f[c]||m[c]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const i={title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/firefox-certificates",id:"adguard-for-android/solving-problems/firefox-certificates",title:"Manual installation of the security certificate into the Firefox browser",description:"For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox.",source:"@site/docs/adguard-for-android/solving-problems/firefox-certificates.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/firefox-certificates",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/firefox-certificates",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/firefox-certificates.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Manual installation of the security certificate into the Firefox browser",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Problems caused by using a Restricted Mode profile",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/restricted-profile"},next:{title:"\u0421ertificate installation issues on devices with Android 11+",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/manual-certificate"}},s={},d=[{value:"Method 1",id:"method-1",level:4},{value:"Method 2",id:"method-2",level:4}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox."),(0,n.kt)("h4",{id:"method-1"},"Method 1"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This method works in Firefox for Android version 90.0 and later. ")),(0,n.kt)("p",null,"To make Firefox trust the AdGuard certificate, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the browser."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"About Firefox"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg",alt:"About Firefox *mobile"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Tap the Firefox logo five times."),(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("strong",{parentName:"li"},"Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Secret Settings"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg",alt:"Secret Settings *mobile"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Toggle ",(0,n.kt)("strong",{parentName:"li"},"Use third party CA certificates"),".")),(0,n.kt)("h4",{id:"method-2"},"Method 2"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This method will only work on ",(0,n.kt)("strong",{parentName:"p"},"rooted")," devices.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; ",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"On the Windows platform, ",(0,n.kt)("strong",{parentName:"p"},"Samsung")," owners may need to install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),"."))),(0,n.kt)("li",{parentName:"ol"},"Activate the ",(0,n.kt)("strong",{parentName:"li"},"developer mode")," and enable ",(0,n.kt)("strong",{parentName:"li"},"USB debugging"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," application on your phone;"),(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section find sub-item ",(0,n.kt)("strong",{parentName:"li"},"About phone"),";"),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,n.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"System Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Developer Options")," > Scroll down and enable ",(0,n.kt)("strong",{parentName:"li"},"USB debugging")," > Confirm debugging is enabled in the window ",(0,n.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully."))),(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/releases/"},"Firefox")," browser (release version);"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"AdGuard settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Network")," > ",(0,n.kt)("strong",{parentName:"li"},"HTTPS Filtering")," > Install the certificate in ",(0,n.kt)("strong",{parentName:"li"},"Firefox")," > ",(0,n.kt)("strong",{parentName:"li"},"INSTALL FOR OLD VERSIONS"),";"),(0,n.kt)("li",{parentName:"ol"},"Open the folder ",(0,n.kt)("inlineCode",{parentName:"li"},"data/data/org.mozilla.firefox/files/mozilla")," using ",(0,n.kt)("inlineCode",{parentName:"li"},"adb shell su")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"cd data/data/..."),", then browse to the folder named ",(0,n.kt)("inlineCode",{parentName:"li"},"xxxxxxx.default")," and memorize its name;"),(0,n.kt)("li",{parentName:"ol"},"In the specified folder we are interested in two files:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cert9.db")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key4.db")))),(0,n.kt)("li",{parentName:"ol"},"We need to move these files to a folder of the browser where the security certificate issue occurred: ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default"),".")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"The full command will look like this:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))))),(0,n.kt)("p",null,"In case you received the system notification ",(0,n.kt)("strong",{parentName:"p"},"permission denied"),", you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser."),(0,n.kt)("p",null,"The full command should look something like this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"adb shell su")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default"))),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell su")," does not work, you should try ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell")," initially, and then ",(0,n.kt)("inlineCode",{parentName:"p"},"su"),"."))}m.isMDXComponent=!0}}]);