import{r as s,h as t,g as e}from"./p-a8d474fb.js";import{d as o}from"./p-d8f3608d.js";import{f as i}from"./p-05337bf9.js";import{u as r}from"./p-45714bdf.js";const n=class{constructor(t){s(this,t),this.type="solid",this.rotate=!1}componentWillLoad(){this.name=this.name||this.el.textContent,this.el.innerHTML=""}render(){const s=`uni-${r(this.type)}-${this.name}`;return o(this.name)?null:t(s,null)}componentDidLoad(){const{el:s,color:t,size:e,rotate:o,degree:r,speed:n,steps:l}=this;i({el:s,color:t,size:e,rotate:o,degree:r,speed:n,steps:l,selector:"svg"})}get el(){return e(this)}};n.style="uni-icon-fa {line-height: 1}";export{n as uni_icon_fa}