import{_ as T,J as V,c as A,A as k,K as B,Z as N,$ as P,a0 as W,a1 as q,m as p,u as G,X as O,r as e,o as l,E as h,g as a,e as c,w as t,H as g,a2 as j,n,t as d,d as f,a3 as D,I as E,p as H,f as z}from"./index-66e099a6.js";const F={name:"internal-search",props:{internalText:{type:Object,required:!0},query:{type:String}},emits:["changePage"],components:{WraButton:V,WraTextInput:A,WraHeader:k,WraSubheader:B,GdsSumCard:N,GdsSumCardActions:P,GdsSummaryAccom:W},data(){return{searchInput:""}},methods:{accomComplete(o){return q(o)}},computed:{...p(G,["account"]),...p(O,["providers"]),accomText(){return this.internalText.accomView},getAccoms(){return this.providersStore.getAccoms}},created(){this.searchInput=this.query}},J=o=>(H("data-v-f7d91ade"),o=o(),z(),o),K={class:"internal-title-layout mb-6"},L={class:"internal-accom-search mb-10"},U={class:"gds-sum-card-title"},X=J(()=>a("li",null,[a("button",{class:"button-anchor",id:"change-accommodaiton"}," View ")],-1)),Z=["onClick"];function M(o,m,Q,R,u,s){const b=e("wra-header"),w=e("wra-subheader"),x=e("wra-text-input"),S=e("wra-button"),v=e("gds-tag"),I=e("gds-sum-card-actions"),y=e("gds-summary-accom"),C=e("gds-sum-card");return l(),h(g,null,[a("div",K,[c(b,{size:"h2"},{default:t(()=>[n(d(s.accomText.title),1)]),_:1}),c(w,null,{default:t(()=>[n(d(s.accomText.subtitle),1)]),_:1})]),a("div",L,[c(x,{modelValue:u.searchInput,"onUpdate:modelValue":m[0]||(m[0]=r=>u.searchInput=r),placeholder:s.accomText.search.placeholder},null,8,["modelValue","placeholder"]),c(S,{color:"obsidian",variant:"flat",ripple:!1,id:"searchButton","prepend-icon":"mdi-magnify"},{default:t(()=>[n(d(s.accomText.search.button),1)]),_:1})]),(l(!0),h(g,null,j(s.getAccoms,(r,i)=>(l(),f(C,null,{title:t(()=>{var _;return[a("div",U,[c(D,{class:"mr-4 pb-1"},{default:t(()=>[n("mdi-home")]),_:1}),a("h3",null,[Object.hasOwn(r,"deregister")?(l(),f(v,{key:0,class:"deregistered-tag",color:"red"},{default:t(()=>[n(d("Deregistered"))]),_:1})):E("",!0),n(" "+d(((_=r.accommodation)==null?void 0:_.accomName)??`${s.accomText.noNamePlaceholder} ${i+1}`),1)])]),c(I,null,{default:t(()=>[X,a("li",null,[a("button",{class:"button-anchor",id:"change-accommodation",onClick:Y=>o.editProvider(i)}," Change ",8,Z)])]),_:2},1024)]}),default:t(()=>[c(y,{"accommodation-details":r.accommodation,"show-edit-buttons":!1},null,8,["accommodation-details"])]),_:2},1024))),256))],64)}const ee=T(F,[["render",M],["__scopeId","data-v-f7d91ade"]]);export{ee as default};
