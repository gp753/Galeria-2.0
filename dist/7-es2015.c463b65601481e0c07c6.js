(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{tt8O:function(t,e,c){"use strict";c.r(e),c.d(e,"SearchViewModule",(function(){return y}));var n=c("SVse"),a=c("iInd"),r=c("Fj/B"),o=c("8Y7J"),i=c("IheW");let s=(()=>{class t{constructor(t){this.http=t}getCountries(t){return this.http.get("https://restcountries.eu/rest/v2/name/"+t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(i.c))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=c("w9WL");function u(t,e){1&t&&o.Kc(0," Flag ")}function b(t,e){1&t&&o.Sb(0,"img",11),2&t&&o.oc("src",e.value,o.Dc)}function m(t,e){1&t&&o.Kc(0," Name ")}function h(t,e){1&t&&o.Kc(0),2&t&&o.Mc(" ",e.value," ")}function p(t,e){1&t&&o.Kc(0," Region ")}function d(t,e){1&t&&o.Kc(0),2&t&&o.Mc(" ",e.value," ")}function g(t,e){1&t&&o.Kc(0," Capital ")}function f(t,e){1&t&&o.Kc(0),2&t&&o.Mc(" ",e.value," ")}function x(t,e){1&t&&o.Kc(0," Population ")}function W(t,e){1&t&&o.Kc(0),2&t&&o.Mc(" ",e.value," ")}const v=[{path:"",component:(()=>{class t{constructor(t,e){this.searchService=t,this.countryService=e}ngOnInit(){this.searchTermSub=this.searchService.searchTerm$.subscribe(t=>{this.countries$=this.countryService.getCountries(t)})}ngOnDestroy(){this.searchTermSub&&this.searchTermSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(r.a),o.Rb(s))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-result-page"]],decls:22,vars:17,consts:[[1,"m-333"],[1,"mt-0"],[1,"mat-box-shadow","margin-333"],[1,"material","bg-white",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","scrollbarH"],["name","flag",3,"maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","name",3,"maxWidth"],["name","region",3,"maxWidth"],["name","capital",3,"maxWidth"],["name","population",3,"maxWidth"],["height","32px","width","auto","alt","",2,"border-radius","4px",3,"src"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Xb(1,"h6",1),o.Kc(2),o.kc(3,"async"),o.Wb(),o.Wb(),o.Xb(4,"div",2),o.Xb(5,"ngx-datatable",3),o.kc(6,"async"),o.Xb(7,"ngx-datatable-column",4),o.Ic(8,u,1,0,"ng-template",5),o.Ic(9,b,1,1,"ng-template",6),o.Wb(),o.Xb(10,"ngx-datatable-column",7),o.Ic(11,m,1,0,"ng-template",5),o.Ic(12,h,1,1,"ng-template",6),o.Wb(),o.Xb(13,"ngx-datatable-column",8),o.Ic(14,p,1,0,"ng-template",5),o.Ic(15,d,1,1,"ng-template",6),o.Wb(),o.Xb(16,"ngx-datatable-column",9),o.Ic(17,g,1,0,"ng-template",5),o.Ic(18,f,1,1,"ng-template",6),o.Wb(),o.Xb(19,"ngx-datatable-column",10),o.Ic(20,x,1,0,"ng-template",5),o.Ic(21,W,1,1,"ng-template",6),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Db(2),o.Mc('Search result for "',o.lc(3,13,e.searchService.searchTerm$),'"'),o.Db(3),o.oc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight",50)("limit",8)("rows",o.lc(6,15,e.countries$))("scrollbarH",!0),o.Db(2),o.oc("maxWidth",160),o.Db(3),o.oc("maxWidth",250),o.Db(3),o.oc("maxWidth",250),o.Db(3),o.oc("maxWidth",250),o.Db(3),o.oc("maxWidth",250))},directives:[l.d,l.b,l.c,l.a],pipes:[n.b],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[a.k.forChild(v)],a.k]}),t})();var I=c("PDjf");let y=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[I.c,n.c,l.e,w]]}),t})()}}]);