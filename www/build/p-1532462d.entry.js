import{r as s,h as t,g as i}from"./p-a8d474fb.js";import{d as o}from"./p-645b10d6.js";import{e}from"./p-9ad606bb.js";import"./p-3ccfdba5.js";import"./p-83892410.js";import"./p-b80ea12f.js";import{u as r}from"./p-f8cfb79a.js";const p=class{constructor(t){s(this,t),this.type="filled",this.spin=!1}componentWillLoad(){this.name=this.name||this.el.textContent,this.el.innerHTML=""}render(){const s=o(this.name)?null:`uni-mat-${r(this.type)}-${this.name}`;return t(s,null)}componentDidLoad(){const{el:s,color:t,size:i,angle:o,spin:r,speed:p,steps:n}=this;e({el:s,color:t,size:i,angle:o,spin:r,speed:p,steps:n,selector:"svg"})}get el(){return i(this)}};export{p as uni_icon_mat}