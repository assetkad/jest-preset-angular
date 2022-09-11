"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7471],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),s=n(6010),o=n(1048),i=n(3609),l=n(1943),u=n(2957),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,f=e.values,g=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,l.U)(),N=j.tabGroupChoices,E=j.setTabGroupChoices,T=(0,a.useState)(y),x=T[0],w=T[1],S=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=N[g];null!=C&&C!==x&&v.some((function(e){return e.value===C}))&&w(C)}var M=function(e){var t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==x&&(O(t),w(r),null!=g&&E(g,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var s,o=S.indexOf(e.currentTarget)-1;n=null!=(s=S[o])?s:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:M,onClick:M},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=n(4259),i=n(425),l=["components"],u={id:"esm-support",title:"ESM Support"},p=void 0,c={unversionedId:"guides/esm-support",id:"guides/esm-support",title:"ESM Support",description:"To use jest-preset-angular with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/docs/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/jest-preset-angular/docs/next/guides/esm-support",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/esm-support.md",tags:[],version:"current",lastUpdatedBy:"anh.pham",lastUpdatedAt:1662933671,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"docs",previous:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/next/guides/angular-13+"},next:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/next/guides/jsdom-version"}},m={},d=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}],f={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," with ESM support, you'll first need to check ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," supports ESM via a ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," config option ",(0,s.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM"},"useESM")," in combination with jest config option ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm"),"."),(0,s.kt)("p",null,"There is also a ",(0,s.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/next/getting-started/presets"},"preset")," to work with ESM."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We have ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples"},"example apps")," which contains base ESM setup to work with Jest and Angular.")),(0,s.kt)("p",null,"Besides, there is ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.mjs")," to add to Jest setup file to ensure that Jest can set up test environment properly."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest.mjs';\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n\nexport default jestConfig;\n"))),(0,s.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  //...\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "<rootDir>/tsconfig.spec.json",\n        "stringifyContentPathRegex": "\\\\.html$",\n        "useESM": true\n      }\n    }\n  }\n}\n')))),(0,s.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Jest will attempt to load ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files from ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," with default ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-resolve")," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,s.kt)("strong",{parentName:"p"},"ESM")," built files or ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files which are outside ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," might not be loaded\ncorrectly."),(0,s.kt)("p",{parentName:"admonition"},"To fix that, one can use ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in jest config to instruct Jest to load the correct ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files or create a\ncustom Jest ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#resolver-string"},"resolver"),".")),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n\nexport default jestConfig;\n"))),(0,s.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'// OR package.json\n{\n  //...\n  "jest": {\n    "preset": "jest-preset-angular/presets/defaults-esm"\n  }\n}\n')))))}g.isMDXComponent=!0}}]);