webpackJsonp([2],{umBL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("WT6e"),u=function(){},r=n("NxsC"),o=n("3aP1"),a=n("0izs"),i=n("1xvn"),s=n("dyjq"),c=n("Gw93"),d=n("MwZf"),p=n("7DMc"),m=n("5Bs0"),E=(n("65Uj"),n("MzHx")),f=n("bfOx"),R=[{type:"INPUT",name:"image",placeholder:"URL of profile picture",validator:[]},{type:"INPUT",name:"username",placeholder:"Your Name",validator:[p.l.required]},{type:"TEXTAREA",name:"bio",placeholder:"Short bio about you",validator:[]},{type:"INPUT",name:"email",placeholder:"Email",validator:[p.l.required]},{type:"INPUT",name:"password",placeholder:"New Password",validator:[p.l.required],attrs:{type:"password"}}],h=function(){function t(t,e,n){this.store=t,this.localStorageSevice=e,this.router=n}return t.prototype.ngOnInit=function(){var t=this;this.store.dispatch({type:"[ngrxForms] SET_STRUCTURE",payload:R}),this.store.select(m.e).subscribe(function(e){t.store.dispatch({type:"[ngrxForms] SET_DATA",payload:e})}),this.data$=this.store.select(E.a),this.structure$=this.store.select(E.b)},t.prototype.updateForm=function(t){this.store.dispatch({type:"[ngrxForms] UPDATE_DATA",payload:t})},t.prototype.submit=function(){this.store.dispatch({type:"[settings] EDIT_SETTINGS"})},t.prototype.logout=function(){this.store.dispatch(new m.b)},t}(),y=n("H4Rp"),b=l["\u0275crt"]({encapsulation:0,styles:[[".edit-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}"]],data:{}});function S(t){return l["\u0275vid"](2,[(t()(),l["\u0275eld"](0,0,null,null,31,"div",[["class","settings-page"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t"])),(t()(),l["\u0275eld"](2,0,null,null,28,"div",[["class","container page"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t"])),(t()(),l["\u0275eld"](4,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t"])),(t()(),l["\u0275eld"](6,0,null,null,22,"div",[["class","col-md-6 offset-md-3 col-xs-12"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t"])),(t()(),l["\u0275eld"](8,0,null,null,1,"h1",[["class","text-xs-center"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["Your Settings"])),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](11,0,null,null,1,"app-list-errors",[],null,null,null,a.b,a.a)),l["\u0275did"](12,245760,null,0,i.a,[s.Store,l.ChangeDetectorRef],null,null),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](14,0,null,null,2,"app-dynamic-form",[],null,[[null,"updateForm"]],function(t,e,n){var l=!0;return"updateForm"===e&&(l=!1!==t.component.updateForm(n)&&l),l},c.b,c.a)),l["\u0275did"](15,245760,null,0,d.a,[p.d],{structure$:[0,"structure$"],data$:[1,"data$"]},{updateForm:"updateForm"}),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t"])),(t()(),l["\u0275eld"](18,0,null,null,4,"div",[["class","edit-button-container"]],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t\t"])),(t()(),l["\u0275eld"](20,0,null,null,1,"button",[["class","btn btn-lg btn-primary pull-xs-right"],["type","submit"]],null,[[null,"click"]],function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.submit()&&l),l},null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t\t\tUpdate Settings\n\t\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](24,0,null,null,0,"hr",[],null,null,null,null,null)),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(t()(),l["\u0275eld"](26,0,null,null,1,"button",[["class","btn btn-outline-danger"]],null,[[null,"click"]],function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.logout()&&l),l},null,null)),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t\t\tOr click here to logout.\n\t\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\n\t\t"])),(t()(),l["\u0275ted"](-1,null,["\n\t"])),(t()(),l["\u0275ted"](-1,null,["\n"]))],function(t,e){var n=e.component;t(e,12,0),t(e,15,0,n.structure$,n.data$)},null)}var T=l["\u0275ccf"]("app-settings",h,function(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-settings",[],null,null,null,S,b)),l["\u0275did"](1,114688,null,0,h,[s.Store,y.a,f.m],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),g=n("Xjw4"),_=n("sia5");function v(t,e){return t}var F=n("yTZN"),U=n("8AXl"),O=(n("08jl"),n("HdCx")),A=function(){function t(t){this.apiService=t}return t.prototype.update=function(t){return this.apiService.put("/user",{user:t}).pipe(Object(O.a)(function(t){return t.user}))},t}(),j=n("A4oF"),x=n("TToO"),C=(n("VwFy"),n("YWe0")),D=n("T4hI"),k=n("6VmJ"),w=n("Qnch"),M=n("Y8Mu"),N=this&&this.__assign||Object.assign||function(t){for(var e,n=1,l=arguments.length;n<l;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t},I=function(){function t(t,e,n){var l=this;this.actions=t,this.store=e,this.settingsService=n,this.editSettings=this.actions.ofType("[settings] EDIT_SETTINGS").pipe(Object(M.a)(this.store.select(E.a),this.store.select(m.e)),Object(O.a)(function(t){var e=t[1];return N({},t[2],{image:e.image,username:e.username,bio:e.bio,pass:e.pass,email:e.email})}),Object(k.a)(function(t){return l.settingsService.update(t).pipe(Object(w.a)(function(t){return[new m.a,{type:"[Router] Go",payload:{path:["profile",t.username]}}]}),Object(D.a)(function(t){return Object(C.of)({type:"[ngrxForms] SET_ERRORS",payload:t.error.errors})}))}))}return Object(x.__decorate)([Object(U.Effect)(),Object(x.__metadata)("design:type",Object)],t.prototype,"editSettings",void 0),t}(),P=n("J+rA");n.d(e,"SettingsModuleNgFactory",function(){return $});var $=l["\u0275cmf"](u,[],function(t){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,o.a,T]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,g.n,g.m,[l.LOCALE_ID,[2,g.r]]),l["\u0275mpd"](4608,p.d,p.d,[]),l["\u0275mpd"](4608,p.o,p.o,[]),l["\u0275mpd"](512,g.c,g.c,[]),l["\u0275mpd"](512,p.m,p.m,[]),l["\u0275mpd"](512,p.k,p.k,[]),l["\u0275mpd"](1024,s.STORE_FEATURES,function(){return[{key:"ngrxForms",reducerFactory:s.combineReducers,metaReducers:[],initialState:{data:{},structure:[],valid:!0,errors:{},touched:!1}},{key:"settings",reducerFactory:s.combineReducers,metaReducers:[],initialState:{}}]},[]),l["\u0275mpd"](1024,s._FEATURE_REDUCERS,function(){return[_.e,v]},[]),l["\u0275mpd"](1024,s._FEATURE_REDUCERS_TOKEN,function(t,e){return[t,e]},[s._FEATURE_REDUCERS,s._FEATURE_REDUCERS]),l["\u0275mpd"](1024,s.FEATURE_REDUCERS,function(t,e,n,l,u,r){return[s._createFeatureReducers(t,e,n),s._createFeatureReducers(l,u,r)]},[l.Injector,s._FEATURE_REDUCERS,s._FEATURE_REDUCERS_TOKEN,l.Injector,s._FEATURE_REDUCERS,s._FEATURE_REDUCERS_TOKEN]),l["\u0275mpd"](131584,s.StoreFeatureModule,s.StoreFeatureModule,[s.STORE_FEATURES,s.FEATURE_REDUCERS,s.ReducerManager,s.StoreRootModule]),l["\u0275mpd"](512,F.a,F.a,[U.Actions]),l["\u0275mpd"](512,A,A,[j.a]),l["\u0275mpd"](512,I,I,[U.Actions,s.Store,A]),l["\u0275mpd"](1024,U["\u0275e"],function(t,e){return[U["\u0275a"](t),U["\u0275a"](e)]},[F.a,I]),l["\u0275mpd"](512,U["\u0275c"],U["\u0275c"],[U["\u0275b"],U["\u0275e"],[2,s.StoreRootModule],[2,s.StoreFeatureModule]]),l["\u0275mpd"](512,P.a,P.a,[]),l["\u0275mpd"](512,f.p,f.p,[[2,f.v],[2,f.m]]),l["\u0275mpd"](512,u,u,[]),l["\u0275mpd"](1024,f.k,function(){return[[{path:"",pathMatch:"full",component:h}]]},[])])})}});