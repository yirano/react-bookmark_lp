(this["webpackJsonpreact-frontend-bookmark_lp"]=this["webpackJsonpreact-frontend-bookmark_lp"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg-dots.7c66c472.svg"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo-bookmark.d312eb74.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-hero.dfa0cd82.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-features-tab-1.25a23733.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-features-tab-2.11b0ec33.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-features-tab-3.7f696303.svg"},function(e,t,a){e.exports=a.p+"static/media/logo-chrome.3e1ab00b.svg"},function(e,t,a){e.exports=a.p+"static/media/logo-firefox.e5023c2b.svg"},function(e,t,a){e.exports=a.p+"static/media/logo-opera.3d8f7bcc.svg"},function(e,t,a){e.exports=a.p+"static/media/logo-bookmark-footer.7c456d71.svg"},function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),s=(a(24),a(1)),o=a(2),c=a(4),m=a(3),u=a(5),d=(a(25),a(26),a(27),a(10)),p=a.n(d),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).setStyle=function(){return e.state.displayMenu?{display:"block"}:{display:"none"}},e.toggleMenu=function(){var t=document.getElementById("hOne"),a=document.getElementById("hTwo"),n=document.getElementById("hThree");t.classList.toggle("hOneAnimate"),a.classList.toggle("hTwoAnimate"),n.classList.toggle("hThreeAnimate"),e.setState((function(e){return e.displayMenu=!e.displayMenu}))},e.state={displayMenu:!1,display:"block"},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){window.innerWidth>1023?e.setState((function(e){return e.displayMenu=!0})):e.setState((function(e){return e.displayMenu=!1}))})),window.addEventListener("load",(function(){window.innerWidth>1023?e.setState((function(e){return e.displayMenu=!0})):e.setState((function(e){return e.displayMenu=!1}))}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"navContainer"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:p.a,alt:"logo"})),l.a.createElement("button",{className:"responsive-menu",onClick:this.toggleMenu},l.a.createElement("div",{className:"hOne",id:"hOne"}),l.a.createElement("div",{className:"hTwo",id:"hTwo"}),l.a.createElement("div",{className:"hThree",id:"hThree"})),l.a.createElement("nav",{style:this.setStyle()},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Pricing")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("button",{className:"login"},"Login"))))))}}]),t}(l.a.Component),E=(a(28),a(11)),f=a.n(E);function g(){return l.a.createElement("section",{className:"section-1"},l.a.createElement("div",{className:"leftContent"},l.a.createElement("div",{className:"leftContentWrap"},l.a.createElement("h1",null,"A Simple Bookmark Manager"),l.a.createElement("p",{className:"caption"},"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."),l.a.createElement("div",{className:"header-button-wrapper"},l.a.createElement("button",{className:"purple-bg"},"Get it on Chrome"),l.a.createElement("button",{className:"grey-bg"},"Get it on Firefox")))),l.a.createElement("div",{className:"rightContent"},l.a.createElement("div",{className:"purpleBox"}),l.a.createElement("img",{src:f.a,alt:"Illustration Hero"})))}a(8);function v(e){return l.a.createElement("div",{className:"slide-link-wrapper"},e.item.map((function(t){var a=t.title,n=t.id,r=t.show;return l.a.createElement("button",{key:n,onClick:function(){e.onClick(n)},className:!0===r?"currentSlide":""},a)})))}function w(e){return l.a.createElement("div",{className:"slideContainer"},e.content.map((function(e){var t=e.subtitle,a=e.id,n=e.caption,r=e.src,i=e.show;return l.a.createElement("div",{className:"slideContent",key:a,style:{display:i?"inherit":"none"}},l.a.createElement("div",{className:"slideImg"},l.a.createElement("div",{className:"purpleBox"}),l.a.createElement("img",{src:r,alt:"features"})),l.a.createElement("div",{className:"slideWordWrap"},l.a.createElement("h3",{className:"sectionHeader"},t),l.a.createElement("p",{className:"caption"},n),l.a.createElement("button",null,"More Info")))})))}var b=a(12),k=a.n(b),y=a(13),N=a.n(y),C=a(14),O=a.n(C),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).displaySlides=function(e){console.log(e),a.setState((function(t){return t.slides.map((function(t){return t.id===e?t.show=!0:t.show=!1}))}))},a.state={slides:[{id:1,show:!0,title:"Simple Bookmarking",subtitle:"Bookmark in one click",caption:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",src:k.a},{id:2,show:!1,title:"Speedy Searching",subtitle:"Intelligent Search",caption:"Our Powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",src:N.a},{id:3,show:!1,title:"Easy Sharing",subtitle:"Share Your Bookmarks",caption:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",src:O.a}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"section-2"},l.a.createElement("div",{className:"sectionHeader"},l.a.createElement("h3",null,"Features"),l.a.createElement("p",{className:"caption"},"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.")),l.a.createElement(v,{item:this.state.slides,onClick:this.displaySlides}),l.a.createElement(w,{content:this.state.slides}))}}]),t}(l.a.Component),q=(a(29),a(15)),S=a.n(q),M=a(16),j=a.n(M),A=a(17),B=a.n(A),F=a(6),I=a.n(F);function L(){return l.a.createElement("section",null,l.a.createElement("div",{className:"sectionHeader"},l.a.createElement("h3",null,"Download the extension"),l.a.createElement("p",{className:"caption"},"We\u2019ve got more browsers in the pipeline. Please do let us know if you\u2019ve got a favourite you\u2019d like us to prioritize.")),l.a.createElement("div",{className:"card-wrapper"},l.a.createElement("div",{className:"cardOne card"},l.a.createElement("img",{src:S.a,alt:"Chrome Logo"}),l.a.createElement("h4",null,"Add to Chrome"),l.a.createElement("p",{className:"card-caption"},"Minimum version 62"),l.a.createElement("img",{className:"bgCircle",src:I.a,alt:"dotted border"}),l.a.createElement("button",{className:"purple-bg"},"Add & Install Extension")),l.a.createElement("div",{className:"cardTwo card"},l.a.createElement("img",{src:j.a,alt:"Firefox Logo"}),l.a.createElement("h4",null,"Add to Firefox"),l.a.createElement("p",{className:"card-caption"},"Minimum version 55"),l.a.createElement("img",{className:"bgCircle",src:I.a,alt:"dotted border"}),l.a.createElement("button",{className:"purple-bg"},"Add & Install Extension")),l.a.createElement("div",{className:"cardThree card"},l.a.createElement("img",{src:B.a,alt:"Opera Logo"}),l.a.createElement("h4",null,"Add to Opera"),l.a.createElement("p",{className:"card-caption"},"Minimum version 46"),l.a.createElement("img",{className:"bgCircle",src:I.a,alt:"dotted border"}),l.a.createElement("button",{className:"purple-bg"},"Add & Install Extension"))))}a(30);function T(e){var t=l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"12"},l.a.createElement("path",{id:"arrow",fill:"none",stroke:"hsl(229, 31%, 21%)",strokeWidth:"3",d:"M1 1l8 8 8-8"})),a=l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"12"},l.a.createElement("path",{id:"arrow",fill:"none",stroke:"red",strokeWidth:"3",d:"M1 1l8 8 8-8"})),n={transform:"rotate(180deg)",marginTop:"-6px"};return l.a.createElement("div",{className:"faqsContainer caption question"},e.items.map((function(r){var i=r.question,s=r.id,o=r.answer,c=r.show;return l.a.createElement("div",{key:s,className:"faqsContent"},l.a.createElement("div",{className:"question",onClick:function(){return e.onClick(s)}},l.a.createElement("p",null,i,c?l.a.createElement("span",{style:n},a):l.a.createElement("span",null,t))),l.a.createElement("div",{className:"answer toggleAnswers"},c?l.a.createElement("p",null,o):""))})))}var W=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).toggleBody=function(t){e.setState((function(a){return e.state.faqs.map((function(e){return e.id===t?e.show=!e.show:e.show=!1}))}))},e.state={faqs:[{id:1,question:"What is Bookmark?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justoeget ultricies fringilla.Phasellus blandit ipsum quis quam ornare mattis.",show:!1},{id:2,question:"How can I request a new browser?",answer:"Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa,ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.",show:!1},{id:3,question:"Is there a mobile app?",answer:"Sed consectetur quam id neque fermentum accumsan.Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis est pharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum. ",show:!1},{id:4,question:"What about other Chromium browsers?",answer:"Integer condimentum ipsum id imperdiet finibus.Vivamus in placerat mi, at euismod dui.Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",show:!1}]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement("div",{className:"sectionHeader"},l.a.createElement("h3",null,"Frequently Asked Questions"),l.a.createElement("p",{className:"caption"},"Here are some of our FAQs. If you have any other questions you\u2019d like answered please feel free to email us.")),l.a.createElement(T,{key:this.state.faqs.id,items:this.state.faqs,onClick:this.toggleBody}))}}]),t}(l.a.Component),H=(a(31),a(18)),V=a.n(H);function z(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footerTop"},l.a.createElement("p",{className:"footerCaption"},"35,000+ already joined"),l.a.createElement("h2",{className:"footerHeading"},"Stay up-to-date with what we\u2019re doing"),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"email"}),l.a.createElement("input",{type:"email",placeholder:"Enter your email address"}),l.a.createElement("button",{className:"contactUs"},"Contact Us")))),l.a.createElement("div",{className:"footerBottom"},l.a.createElement("div",{className:"footerLinks"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:V.a,alt:"Bookmark Logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Pricing")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Contact")))),l.a.createElement("div",{className:"footerSocialLinks"},l.a.createElement("ul",{className:"socialLinks"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("svg",{viewBox:"0 0 30 30",width:"30px"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},l.a.createElement("path",{fill:"#FFF",fillRule:"evenodd",className:"icon",d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"}))))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("svg",{viewBox:"0 0 30 30",width:"30px"},l.a.createElement("path",{fill:"#FFF",fillRule:"evenodd",className:"icon",d:"M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"})))),l.a.createElement("li",null)))))}var P=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main"},l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(x,null),l.a.createElement(L,null),l.a.createElement(W,null)),l.a.createElement(z,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[19,1,2]]]);
//# sourceMappingURL=main.bd69b6d8.chunk.js.map