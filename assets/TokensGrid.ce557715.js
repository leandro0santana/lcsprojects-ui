var s=Object.defineProperty;var i=(r,n)=>s(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime.5171a12b.js";function l({tokens:r,hasRemValue:n=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixel"})]})}),e("tbody",{children:Object.entries(r).map(([d,a])=>t("tr",{children:[e("td",{children:d}),e("td",{children:a}),n&&t("td",{children:[Number(a.replace("rem",""))*16,"px"]})]},d))})]})}i(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid.ce557715.js.map
