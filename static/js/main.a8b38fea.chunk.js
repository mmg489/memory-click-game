(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"/assets/images/AbbyDahlkemper.png",clicked:!1},{id:2,image:"/assets/images/AlexMorgan.png",clicked:!1},{id:3,image:"/assets/images/AlyssaNaeher.png",clicked:!1},{id:4,image:"/assets/images/BeckySauerbrunn.png",clicked:!1},{id:5,image:"/assets/images/CarliLloyd.png",clicked:!1},{id:6,image:"/assets/images/ChristenPress.png",clicked:!1},{id:7,image:"/assets/images/CrystalDunn.png",clicked:!1},{id:8,image:"/assets/images/JulieErtz.png",clicked:!1},{id:9,image:"/assets/images/KelleyOHara.png",clicked:!1},{id:10,image:"/assets/images/LindsayHoran.png",clicked:!1},{id:11,image:"/assets/images/MeganRapinoe.png",clicked:!1},{id:12,image:"/assets/images/RoseLavelle.png",clicked:!1},{id:13,image:"/assets/images/SamanthaMewis.png",clicked:!1},{id:14,image:"/assets/images/TobinHeath.png",clicked:!1},{id:15,image:"/assets/images/MalloryPugh.png",clicked:!1},{id:16,image:"/assets/images/JessicaMcDonald.png",clicked:!1}]},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),o=a(6),s=a(1),l=a(2),u=a(4),m=a(3),d=a(5),g=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.score,n=e.topScore,i={animating:!0};i.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",this.setState(i,function(){return setTimeout(function(){return t.setState({animating:!1})},500)})}},{key:"render",value:function(){return i.a.createElement("li",{className:this.state.animating?this.state.message:""},this.renderMessage())}}]),t}(n.Component)),f=(a(17),function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Clicky Game")),i.a.createElement(g,{score:e.score,topScore:e.topScore}),i.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))}),h=(a(18),function(e){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}),p=(a(19),function(e){return i.a.createElement("main",{className:"container"},e.children)}),k=(a(20),function(e){return i.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})}),v=(a(21),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"bottom"},"React Memory Click Game ",i.a.createElement("img",{alt:"react",src:"assets/images/starGif.gif"})))}),y=a(9),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={data:y,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,i=t.score+1,c=i>n?i:n;a.setState({data:a.shuffleData(e),score:i,topScore:c})},a.handleIncorrectGuess=function(e){a.setState({data:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map(function(e){return Object(o.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleItemClick=function(e){var t=!1,n=a.state.data.map(function(a){var n=Object(o.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n});t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(h,null),i.a.createElement(p,null,this.state.data.map(function(t){return i.a.createElement(k,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})})),i.a.createElement(v,null))}}]),t}(n.Component),E=function(){return i.a.createElement(w,null)},b=(a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/memory-click-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/memory-click-game","/service-worker.js");b?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.a8b38fea.chunk.js.map