(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BAho:function(t,o,e){"use strict";e.r(o),e.d(o,"ArquivosModule",(function(){return h}));var c=e("ofXK"),r=e("tyNb"),i=e("fXoL"),n=e("AytR"),b=e("vkgz"),s=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t}getArquivos(){return this.http.get("http://localhost:3000/arquivo/lista").pipe(Object(b.a)(t=>console.log(t)))}getArquivoByKey(t){return this.http.get(`${n.a.api}/arquivo/${t}`,{responseType:"blob"}).pipe(Object(b.a)(t=>console.log(t)))}}return t.\u0275fac=function(o){return new(o||t)(i.Xb(s.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function u(t,o){if(1&t){const t=i.Qb();i.Pb(0,"tr"),i.Pb(1,"th",5),i.xc(2),i.Ob(),i.Pb(3,"td"),i.xc(4),i.Ob(),i.Pb(5,"td"),i.xc(6),i.cc(7,"date"),i.Ob(),i.Pb(8,"td"),i.Pb(9,"button",6),i.Zb("click",(function(){i.pc(t);const e=o.$implicit;return i.bc().downloadPlanilha(e.Key)})),i.xc(10,"Baixar"),i.Ob(),i.Ob(),i.Ob()}if(2&t){const t=o.$implicit,e=o.index;i.xb(2),i.yc(e+1),i.xb(2),i.yc(t.Key),i.xb(2),i.yc(i.ec(7,3,t.LastModified,"short"))}}let l=(()=>{class t{constructor(t){this.arquivosService=t}ngOnInit(){this.arquivosService.getArquivos().subscribe(t=>this.arquivos=t)}downloadPlanilha(t){this.arquivosService.getArquivoByKey(t).subscribe(o=>{const e=window.URL.createObjectURL(o),c=document.createElement("a");c.download=t,c.href=e,c.click()})}}return t.\u0275fac=function(o){return new(o||t)(i.Kb(a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-arquivos"]],decls:17,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[3,"click"]],template:function(t,o){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.Pb(2,"h4"),i.xc(3,"Arquivos"),i.Ob(),i.Pb(4,"table",2),i.Pb(5,"thead"),i.Pb(6,"tr"),i.Pb(7,"th",3),i.xc(8,"#"),i.Ob(),i.Pb(9,"th",3),i.xc(10,"nome"),i.Ob(),i.Pb(11,"th",3),i.xc(12,"\xdaltima Modifica\xe7\xe3o"),i.Ob(),i.Pb(13,"th",3),i.xc(14,"Download"),i.Ob(),i.Ob(),i.Ob(),i.Pb(15,"tbody"),i.vc(16,u,11,6,"tr",4),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.xb(16),i.hc("ngForOf",o.arquivos))},directives:[c.j],pipes:[c.d],styles:[""]}),t})();const p=[{path:"",component:l}];let d=(()=>{class t{}return t.components=[l],t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(o){return new(o||t)},imports:[[r.b.forChild(p)],r.b]}),t})(),h=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(o){return new(o||t)},imports:[[c.b,d]]}),t})()}}]);