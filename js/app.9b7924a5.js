(function(e){function t(t){for(var n,s,i=t[0],l=t[1],o=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==c[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/uidesigndaily-kit/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0086":function(e,t,a){},"17e2":function(e,t,a){"use strict";a("aaeb")},"2c53":function(e,t,a){},5229:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container fluid container--column",attrs:{id:"app"}},[e._m(0),a("router-view")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"app-header container"},[a("p",{staticClass:"text text--h4"},[e._v("UIDESIGNDAILY KIT")])])}],s=(a("7faf"),a("2877")),i={},l=Object(s["a"])(i,c,r,!1,null,null,null),o=l.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"})},p=[],f={name:"Home"},h=f,b=Object(s["a"])(h,d,p,!1,null,null,null),_=b.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"board"},[a("div",{staticClass:"box app-card"},[a("AppCard",{attrs:{dark:!0}})],1),a("div",{staticClass:"box app-menu"},[a("AppMenu")],1),a("div",{staticClass:"box search"},[a("Search")],1),a("div",{staticClass:"box sliders"},[a("AppSlider",{attrs:{minValue:10,maxValue:100,value:25}}),a("AppSlider",{attrs:{minValue:10,maxValue:100,value:50,bold:!0}}),a("AppSlider",{attrs:{minValue:10,maxValue:100,value:100,disabled:!0}})],1),a("div",{staticClass:"box checks container container--row align-center justify-center"},[a("div",{staticClass:"container container--column check-container align-center justify-center"},[a("SwitchCheck",{attrs:{background:!1}})],1),a("div",{staticClass:"container container--column check-container align-center justify-center"},[a("SwitchCheck",{attrs:{checked:""}})],1),a("div",{staticClass:"container container--column check-container align-center justify-center"},[a("SwitchCheck",{attrs:{stretch:""}})],1),a("div",{staticClass:"container container--column check-container align-center justify-center"},[a("SwitchCheck",{attrs:{squared:""}})],1),a("div",{staticClass:"container container--column check-container align-center justify-center"},[a("SwitchCheck",{attrs:{squared:"",stretch:"",checked:""}})],1)])])},v=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-menu container container--column justify-space-around"},[a("button",{staticClass:"button app-menu__button"},[e._v("Add new")]),a("AppRow",{attrs:{icon:["fas","file-upload"],title:"Upload files"}}),a("AppRow",{attrs:{icon:["fas","upload"],title:"Upload files"}}),a("AppRow",{attrs:{icon:["fas","folder"],title:"New folder"}}),a("AppRow",{attrs:{title:"Exit"}})],1)},C=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-row container align-center"},[e.icon?a("font-awesome-icon",{staticClass:"app-row__icon",attrs:{icon:e.icon}}):e._e(),a("p",{staticClass:"app-row__link text text--bold"},[e._v(e._s(e.title))])],1)},w=[],g={name:"AppRow",props:{icon:{type:Array,required:!1},title:{type:String,default:"No title",require:!1}}},y=g,S=(a("17e2"),Object(s["a"])(y,x,w,!1,null,"b43c515e",null)),j=S.exports,A={name:"AppMenu",components:{AppRow:j}},V=A,O=(a("ea6a"),Object(s["a"])(V,k,C,!1,null,"b1f7abf4",null)),E=O.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card container container--fluid container--column",class:{dark:e.isDark,light:!e.isDark}},[e._m(0),e._m(1),e._m(2),a("div",{staticClass:"button card__button",on:{click:e.changeTheme}},[e._v("Accept")])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card__header container container--column"},[a("div",{staticClass:"card__title text text--h5 text--bold"},[e._v("Free")]),a("div",{staticClass:"card__subtitle text"},[e._v("for freelancers")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("p",{staticClass:"text text--h3 text--bold card__price"},[e._v("$0")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container container--column card__checks"},[a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[e._v("Perfomance")])]),a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[e._v("Perfomance")])]),a("label",{staticClass:"check text card__check"},[a("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),a("span",{staticClass:"check__label text"},[e._v("Perfomance")])])])}],P={name:"AppCard",data:function(){return{isDark:!1}},props:{dark:{type:Boolean,default:!1,required:!1}},created:function(){this.isDark=this.dark},methods:{changeTheme:function(){this.isDark=!this.isDark}}},B=P,M=(a("9120"),Object(s["a"])(B,q,$,!1,null,"0d0ab97e",null)),N=M.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search container",class:{"search--focused":e.focused}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"search__input",attrs:{name:"input"},domProps:{value:e.inputValue},on:{focus:e.focusHandler,blur:e.blurHandler,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),a("label",{staticClass:"search__label text text--bold",class:{"search__label--hidden":e.isLabelInvisible},attrs:{for:"input"}},[e._v("Search")]),a("button",{staticClass:"search__button button"},[e._v("Search")])])},I=[],H={name:"Search",data:function(){return{focused:!1,isLabelInvisible:!1,inputValue:""}},methods:{focusHandler:function(){this.focused=!0,this.isLabelInvisible=!0},blurHandler:function(){console.log(this.inputValue),0==this.inputValue.length&&(this.isLabelInvisible=!1),this.focused=!1}}},R=H,T=(a("f563"),Object(s["a"])(R,D,I,!1,null,"8baf7812",null)),L=T.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"slider",class:{bold:e.bold},style:{background:e.background},attrs:{type:"range",min:e.minValue,max:e.maxValue,disabled:e.disabled},domProps:{value:e.currentValue},on:{__r:function(t){e.currentValue=t.target.value}}})},J=[],F=(a("a9e3"),{name:"AppSlider",data:function(){return{currentValue:0}},created:function(){this.value&&(this.currentValue=this.value)},props:{value:{type:Number,default:0,required:!1},minValue:{type:Number,default:0,required:!1},maxValue:{type:Number,default:100,required:!1},disabled:{type:Boolean,default:!1,required:!1},bold:{type:Boolean,default:!1,required:!1}},computed:{background:function(){var e=(this.currentValue-this.minValue)/(this.maxValue-this.minValue)*100;return"linear-gradient(to right, #979EE8 0%, #979EE8 "+e+"%, #fff "+e+"%, white 100%)"}}}),G=F,K=(a("7fea"),Object(s["a"])(G,U,J,!1,null,"06ef76c2",null)),Y=K.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"switchingCheck",class:{"switchingCheck--stretchable":e.stretch,"switchingCheck--square":e.squared}},[a("input",{staticClass:"switchingCheck__checkbox",attrs:{type:"checkbox"},domProps:{checked:e.checked}}),e.background?a("div",{staticClass:"switchingCheck__background"}):e._e(),a("div",{staticClass:"switchingCheck__knob"})])},Q=[],W={name:"SwitchCheck",props:{squared:{type:Boolean,default:!1,required:!1},stretch:{type:Boolean,default:!1,required:!1},background:{type:Boolean,default:!0,required:!1},checked:{type:Boolean,default:!1,required:!1}}},X=W,Z=(a("7bb3"),Object(s["a"])(X,z,Q,!1,null,"6179dac0",null)),ee=Z.exports,te={name:"Board",components:{AppMenu:E,AppCard:N,Search:L,AppSlider:Y,SwitchCheck:ee}},ae=te,ne=(a("a1ae"),Object(s["a"])(ae,m,v,!1,null,"040101c9",null)),ce=ne.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container fluid container--column"},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("AppCard")],1),a("v-col",{attrs:{cols:"2"}},[a("AppMenu")],1),a("v-col",{attrs:{cols:"2"}},[a("AppMenu")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("Search")],1),a("v-col",[a("AppSlider")],1),a("v-col",[a("SwitchCheck")],1)],1)],1)},se=[],ie={name:"nBoard",components:{AppMenu:E,AppCard:N,Search:L,AppSlider:Y,SwitchCheck:ee}},le=ie,oe=Object(s["a"])(le,re,se,!1,null,null,null),ue=oe.exports;n["a"].use(u["a"]);var de=[{path:"/",name:"Home",component:_,redirect:{name:"Board"}},{path:"/board",name:"Board",component:ce},{path:"/nboard",name:"nBoard",component:ue}],pe=new u["a"]({base:"/uidesigndaily-kit/",routes:de}),fe=pe,he=a("2f62");n["a"].use(he["a"]);var be=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_e=(a("fe46"),a("ecee")),me=a("c074"),ve=a("ad3d"),ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[e._t("default")],2)},Ce=[],xe=(a("e3ee"),{}),we=Object(s["a"])(xe,ke,Ce,!1,null,"4ba21ab0",null),ge=we.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col",class:e.colsClass},[e._t("default")],2)},Se=[],je={name:"VCol",props:{cols:{type:[String,Number],required:!1,validator:function(e){return e>0&&e<=12}}},computed:{colsClass:function(){return this.cols&&this.cols>0&&this.cols<=12?"col-".concat(this.cols):null}}},Ae=je,Ve=(a("8af9"),Object(s["a"])(Ae,ye,Se,!1,null,"23dc62b6",null)),Oe=Ve.exports;n["a"].component("v-col",Oe),n["a"].component("v-row",ge),_e["c"].add(me["b"],me["c"],me["a"]),n["a"].component("font-awesome-icon",ve["a"]),n["a"].config.productionTip=!1,new n["a"]({router:fe,store:be,render:function(e){return e(o)}}).$mount("#app")},6264:function(e,t,a){},"71c5":function(e,t,a){},"7bb3":function(e,t,a){"use strict";a("5229")},"7faf":function(e,t,a){"use strict";a("8e59")},"7fea":function(e,t,a){"use strict";a("f80e")},"8af9":function(e,t,a){"use strict";a("0086")},"8e59":function(e,t,a){},9120:function(e,t,a){"use strict";a("2c53")},a1ae:function(e,t,a){"use strict";a("f884")},aaeb:function(e,t,a){},e3ee:function(e,t,a){"use strict";a("6264")},e59c:function(e,t,a){},ea6a:function(e,t,a){"use strict";a("71c5")},f563:function(e,t,a){"use strict";a("e59c")},f80e:function(e,t,a){},f884:function(e,t,a){},fe46:function(e,t,a){}});
//# sourceMappingURL=app.9b7924a5.js.map