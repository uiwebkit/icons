import{r as s,h as t,g as e}from"./p-a8d474fb.js";import{d as o}from"./p-d8f3608d.js";import{f as i}from"./p-05337bf9.js";import{u as r}from"./p-f8cfb79a.js";const n=class{constructor(t){s(this,t),this.type="filled",this.rotate=!1}componentWillLoad(){this.name=this.name||this.el.textContent,this.el.innerHTML=""}render(){const s=`uni-mat-${r(this.type)}-${this.name}`;return o(this.name)?null:t(s,null)}componentDidLoad(){const{el:s,color:t,size:e,rotate:o,degree:r,speed:n,steps:a}=this;i({el:s,color:t,size:e,rotate:o,degree:r,speed:n,steps:a,selector:"svg"})}get el(){return e(this)}};n.style="uni-icon-mat {line-height: 1}";export{n as uni_icon_mat}