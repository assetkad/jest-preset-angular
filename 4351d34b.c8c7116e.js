(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(110)),s={id:"jsdom-version",title:"Configure other JSDOM versions"},a={unversionedId:"guides/jsdom-version",id:"guides/jsdom-version",isDocsHomePage:!1,title:"Configure other JSDOM versions",description:"Jest v26+ by default uses JSDOM 16 to support Node 10+.",source:"@site/docs/guides/jsdom-version.md",slug:"/guides/jsdom-version",permalink:"/jest-preset-angular/docs/next/guides/jsdom-version",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/docs/guides/jsdom-version.md",version:"current",sidebar:"docs",previous:{title:"ESM Support",permalink:"/jest-preset-angular/docs/next/guides/esm-support"},next:{title:"Combining with babel-jest",permalink:"/jest-preset-angular/docs/next/guides/babel-jest"}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Jest")," v26+ by default uses ",Object(i.b)("strong",{parentName:"p"},"JSDOM")," 16 to support Node 10+."),Object(i.b)("p",null,"If you need a different JSDOM version than the one that ships with Jest, you can install a jsdom environment\npackage, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"jest-environment-jsdom-sixteen")," and edit your Jest config like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "testEnvironment": "jest-environment-jsdom-sixteen"\n}\n')),Object(i.b)("p",null,"If you use JSDOM v11 or lower, you might have to mock ",Object(i.b)("inlineCode",{parentName:"p"},"localStorage")," or ",Object(i.b)("inlineCode",{parentName:"p"},"sessionStorage")," on your own or using some third-party library by loading it in ",Object(i.b)("inlineCode",{parentName:"p"},"setupFilesAfterEnv"),"."),Object(i.b)("p",null,"Reference: ",Object(i.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"},"https://jestjs.io/docs/en/configuration.html#testenvironment-string"),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/blob/master/Changelog.md#1200"},"https://github.com/jsdom/jsdom/blob/master/Changelog.md#1200")))}p.isMDXComponent=!0}}]);