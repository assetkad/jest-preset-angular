"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4828],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||u;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),u="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,o),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7462),a=n(7294),u=n(6010),o=n(6775),i=n(5238),l=n(3609),s=n(2560);function c(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(u.location.search);t.set(l,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[l,u])]}function m(e){var t,n,r,u,o=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,m=p(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),v=b[0],g=b[1],h=f({queryString:l,groupId:c}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],u=n[1],[r,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),j=k[0],N=k[1],E=function(){var e=null!=y?y:j;return d({value:e,tabValues:m})?e:null}();return(0,a.useEffect)((function(){E&&g(E)}),[E]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),N(e)}),[w,N,m]),tabValues:m}}var b=n(2957),v=n(1048),g="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,b.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==o&&(c(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var u,o=s.indexOf(e.currentTarget)-1;n=null!=(u=s[o])?u:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:p},i,{className:(0,u.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var u=n.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function j(e){var t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},3519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),u=(n(7294),n(4137)),o=n(3992),i=n(425),l=["components"],s={id:"using-with-babel",title:"Using with Babel"},c=void 0,p={unversionedId:"guides/using-with-babel",id:"version-12.0/guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-12.0/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/guides/using-with-babel",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/guides/using-with-babel.md",tags:[],version:"12.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1674885465,formattedLastUpdatedAt:"Jan 28, 2023",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"version-12.0-docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports"}},d={},f=[],m={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"If you wish to use ",(0,u.kt)("inlineCode",{parentName:"p"},"Babel"),", you need to say jest to transpile such files manually."),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Install dependencies required by the official Jest documentation for ",(0,u.kt)("a",{parentName:"p",href:"https://jest-bot.github.io/jest/docs/babel.html"},"Babel integration"),".")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Install ",(0,u.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and add ",(0,u.kt)("inlineCode",{parentName:"p"},"babel.config.js")," (or modify existing if needed) with the following content:"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"Note: do not use a ",(0,u.kt)("inlineCode",{parentName:"em"},".babelrc")," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,u.kt)("a",{parentName:"em",href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case"},"Babel documentation")," and the comment ",(0,u.kt)("inlineCode",{parentName:"em"},"You want to compile node_modules? babel.config.js is for you!")),"."),(0,u.kt)("ol",{start:3},(0,u.kt)("li",{parentName:"ol"},"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):")),(0,u.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n"))),(0,u.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n\nexport default jestConfig;\n")))))}b.isMDXComponent=!0}}]);