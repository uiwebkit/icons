import{r as s,h as i,g as t}from"./p-5a0390f3.js";import{u as e}from"./p-0cf3447f.js";import{a as r}from"./p-e4c57e6d.js";import{f as n}from"./p-4beeeeb2.js";import"./p-20208d3b.js";let o=class{constructor(i){s(this,i),this.img=!1,this.url="https://cdn.jsdelivr.net/npm/@uiwebkit/icn",this.version="0.1.0",this.alter="uni-icon-bi",this.spin=!1}render(){const s=this.name||e(this.el),t=r(s)?null:`uni-bi-${s}`;return this.img?i("img",{src:`${this.url}@${this.version}/dist/assets/svg/bi/${s}.svg`,alt:this.alter}):i(t,null)}componentDidRender(){const{el:s,color:i,size:t,angle:e,spin:r,speed:o,steps:p}=this;n({el:s,color:i,size:t,angle:e,spin:r,speed:o,steps:p,selector:this.img?"img":"svg"})}get el(){return t(this)}};export{o as uni_icon_bi}