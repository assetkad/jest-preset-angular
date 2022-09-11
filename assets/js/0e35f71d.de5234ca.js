"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4828],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={id:"using-with-babel",title:"Using with Babel"},l=void 0,u={unversionedId:"guides/using-with-babel",id:"version-12.0/guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-12.0/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/guides/using-with-babel",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/guides/using-with-babel.md",tags:[],version:"12.0",lastUpdatedBy:"anh.pham",lastUpdatedAt:1662933671,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"version-12.0-docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports"}},p={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you wish to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Babel"),", you need to say jest to transpile such files manually."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install dependencies required by the official Jest documentation for ",(0,a.kt)("a",{parentName:"p",href:"https://jest-bot.github.io/jest/docs/babel.html"},"Babel integration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," (or modify existing if needed) with the following content:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: do not use a ",(0,a.kt)("inlineCode",{parentName:"em"},".babelrc")," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,a.kt)("a",{parentName:"em",href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case"},"Babel documentation")," and the comment ",(0,a.kt)("inlineCode",{parentName:"em"},"You want to compile node_modules? babel.config.js is for you!")),"."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n")))}f.isMDXComponent=!0}}]);