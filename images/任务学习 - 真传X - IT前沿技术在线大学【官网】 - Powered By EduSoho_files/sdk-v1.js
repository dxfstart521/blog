!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).VideoPlayerSDK=e()}}(function(){return function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return r(n||e)},l,l.exports,e,t,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){"use strict";function i(e){console.log("SDK Options:",e);var t=this;this.options=Object.assign({},this.defaultOptions,e),this.currentTime=0,this.element=document.getElementById(e.id),this.initIframe(this.element),this.messager=new r(this.iframe,this),this.on("timeupdate",function(e,n){t.currentTime=e.currentTime})}e("./utils/polyfill.js");var r=e("./messager.js");i.prototype={defaultOptions:{autoplay:!0,playUrl:window.location.href,version:"1.1.35"},start:function(){this.trigger("start")},getCurrentTime:function(){return this.currentTime},destory:function(){this.trigger("destory"),this._sendMessageToIframe({op:"destory"}),this.iframe.parentNode.removeChild(this.iframe)},initIframe:function(e){function t(e){var t=n.options;n._sendMessageToIframe({op:"init",params:{options:t}})}var n=this,i=this.iframe=document.createElement("iframe");return i.style.border=0,i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("allowfullscreen","true"),i.setAttribute("webkitallowfullscreen","true"),i.setAttribute("mozallowfullscreen","true"),i.src="//service-cdn.qiqiuyun.net/js-sdk/video-player/1.1.35/player.html",e.appendChild(i),i.attachEvent?i.attachEvent("onload",t):i.onload=t,i},_sendMessageToIframe:function(e){this.messager.sendMessage(e)},on:function(e,t){this.eventManager||(this.eventManager={}),this.eventManager[e]||(this.eventManager[e]=[]),this.eventManager[e].push(t)},trigger:function(e,t){this.eventManager&&this.eventManager[e]&&this.eventManager[e].map(function(e){e.call(this,t)})}},["setCurrentTime","setExams","play","pause","requestFullscreen","openModal","closeModal"].map(function(e){i.prototype[e]=function(t){this._sendMessageToIframe({op:e,params:t})}}),t.exports=i},{"./messager.js":2,"./utils/polyfill.js":3}],2:[function(e,t,n){"use strict";function i(e,t){this.iframe=e,this.onMessage(function(e){if("{"===e.data[0]||"["===e.data[0]){var n=JSON.parse(e.data);"videoplayer"===n.license&&t.trigger(n.op,n.params)}})}i.prototype={sendMessage:function(e){var e=JSON.stringify(e);this.iframe.contentWindow.postMessage(e,"*")},onMessage:function(e){window.addEventListener?window.addEventListener("message",function(t){e(t)}):window.attachEvent("onmessage",function(t){e(t)})}},t.exports=i},{}],3:[function(e,t,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n}),Array.prototype.map||(Array.prototype.map=function(e,t){var n=this.length,t=t||this,i=0;for(i;i<n;i++)e.apply(t,[this[i],i,this])})},{}]},{},[1])(1)});