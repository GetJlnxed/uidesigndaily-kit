(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/my-hub/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1044:function(t,e,n){"use strict";n("5cad")},"17f0":function(t,e,n){"use strict";n("355d")},"20ec":function(t,e,n){"use strict";n("d011")},"312c":function(t,e,n){},"355d":function(t,e,n){},"455e":function(t,e,n){"use strict";n("9818")},5205:function(t,e,n){},5307:function(t,e,n){"use strict";n("ecba")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container fluid container--column nowrap",attrs:{id:"app"}},["/"!==t.route.fullPath?n("header",{staticClass:"app-header container",class:{"app-header--starred":"/sky"===t.route.path}},[n("p",{staticClass:"app-header__title text text--h4",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._v("HUB")]),n("div",{staticClass:"links container"},[n("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Board"})}}},[t._v("Board")]),n("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Sky"})}}},[t._v("Sky")]),n("button",{staticClass:"links__button button"},[t._v("Contacts")])])]):t._e(),n("router-view")],1)},s=[],r={name:"App",computed:{route:function(){return this.$route}}},c=r,o=(n("7faf"),n("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],staticClass:"home container container--column fluid align-center justify-center"},[n("transition",{attrs:{name:"fade",appear:""},on:{"after-appear":t.titleAppeared}},[n("p",{staticClass:"home__title text text--h4"},[t._v("Welcome to my hub")])]),t.isTitleAppeared?n("transition",{attrs:{name:"fade",appear:""}},[n("div",{staticClass:"links container container--row align-center justify-center"},[n("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Board"})}}},[t._v("Board")]),n("button",{staticClass:"links__button button",on:{click:function(e){return t.$router.push({name:"Sky"})}}},[t._v("Sky")]),n("button",{staticClass:"links__button button"},[t._v("Contacts")])])]):t._e()],1)])},f=[],h={data:function(){return{pageVisible:!0}}},b={name:"Home",mixins:[h],data:function(){return{isTitleAppeared:!1}},methods:{titleAppeared:function(){var t=this;setTimeout((function(){t.isTitleAppeared=!0}),600)}}},m=b,_=(n("1044"),Object(o["a"])(m,p,f,!1,null,"1395c382",null)),v=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],staticClass:"container fluid container--column"},[n("v-row",[n("v-col",[n("Card")],1),n("v-col",[n("Menu")],1),n("v-col",[n("div",{staticClass:"case container container--column"},t._l(t.inputs,(function(e){return n("div",{key:e.id,staticClass:"container align-center"},[n("p",{staticClass:"input-value text"},[t._v(t._s(e.value))]),n("Slider",{attrs:{minValue:e.min,maxValue:e.max,disabled:e.disabled,bold:e.bold},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"input.value"}})],1)})),0)])],1),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("Search")],1)],1)],1)])},x=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-menu container container--column justify-space-around"},[n("button",{staticClass:"button app-menu__button"},[t._v("Add new")]),n("MenuRow",{attrs:{icon:["fas","file-upload"],title:"Upload files"}}),n("MenuRow",{attrs:{icon:["fas","upload"],title:"Upload files"}}),n("MenuRow",{attrs:{icon:["fas","folder"],title:"New folder"}}),n("MenuRow",{attrs:{title:"Exit"}})],1)},C=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-row container align-center"},[t.icon?n("font-awesome-icon",{staticClass:"app-row__icon",attrs:{icon:t.icon}}):t._e(),n("p",{staticClass:"app-row__link text text--bold"},[t._v(t._s(t.title))])],1)},g=[],V={name:"AppRow",props:{icon:{type:Array,required:!1},title:{type:String,default:"No title",require:!1}}},S=V,$=(n("b0bc"),Object(o["a"])(S,w,g,!1,null,"b6caffb8",null)),j=$.exports,O={name:"AppMenu",components:{MenuRow:j}},E=O,A=(n("455e"),Object(o["a"])(E,y,C,!1,null,"a9bea7f4",null)),M=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card container container--fluid container--column",class:{dark:t.isDark,light:!t.isDark}},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"button card__button",on:{click:t.changeTheme}},[t._v("Accept")])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__header container container--column"},[n("div",{staticClass:"card__title text text--h5 text--bold"},[t._v("Free")]),n("div",{staticClass:"card__subtitle text"},[t._v("for freelancers")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",{staticClass:"text text--h3 text--bold card__price"},[t._v("$0")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container container--column card__checks"},[n("label",{staticClass:"check text card__check"},[n("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),n("span",{staticClass:"check__label text"},[t._v("Perfomance")])]),n("label",{staticClass:"check text card__check"},[n("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),n("span",{staticClass:"check__label text"},[t._v("Perfomance")])]),n("label",{staticClass:"check text card__check"},[n("input",{staticClass:"check__checkbox card__checkbox",attrs:{type:"checkbox",name:"check",checked:"",disabled:""}}),n("span",{staticClass:"check__label text"},[t._v("Perfomance")])])])}],N={name:"AppCard",data:function(){return{isDark:!1}},props:{dark:{type:Boolean,default:!1,required:!1}},created:function(){this.isDark=this.dark},methods:{changeTheme:function(){this.isDark=!this.isDark}}},B=N,q=(n("20ec"),Object(o["a"])(B,P,H,!1,null,"4f1ecad2",null)),T=q.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search container",class:{"search--focused":t.focused}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"search__input",attrs:{name:"input"},domProps:{value:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),n("label",{staticClass:"search__label text text--bold",class:{"search__label--hidden":t.isLabelInvisible},attrs:{for:"input"}},[t._v("Search")]),n("button",{staticClass:"search__button button"},[t._v("Search")])])},R=[],W={name:"Search",data:function(){return{focused:!1,isLabelInvisible:!1,inputValue:""}},methods:{focusHandler:function(){this.focused=!0,this.isLabelInvisible=!0},blurHandler:function(){console.log(this.inputValue),0==this.inputValue.length&&(this.isLabelInvisible=!1),this.focused=!1}}},I=W,L=(n("e544"),Object(o["a"])(I,D,R,!1,null,"86166052",null)),U=L.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"slider",class:{bold:t.bold},style:{background:t.background},attrs:{type:"range",min:t.minValue,max:t.maxValue,disabled:t.disabled},domProps:{value:t.currentValue},on:{input:t.inputHandler,__r:function(e){t.currentValue=e.target.value}}})},F=[],z=(n("a9e3"),{name:"AppSlider",data:function(){return{currentValue:0}},created:function(){this.value&&(this.currentValue=this.value)},props:{value:{type:[Number,String],default:0,required:!1},minValue:{type:Number,default:0,required:!1},maxValue:{type:Number,default:100,required:!1},disabled:{type:Boolean,default:!1,required:!1},bold:{type:Boolean,default:!1,required:!1}},methods:{inputHandler:function(t){this.$emit("input",t.target.value)}},computed:{background:function(){var t=(this.currentValue-this.minValue)/(this.maxValue-this.minValue)*100;return"linear-gradient(to right, #979EE8 0%, #979EE8 "+t+"%, #fff "+t+"%, white 100%)"}}}),G=z,K=(n("5307"),Object(o["a"])(G,J,F,!1,null,"5061dde4",null)),Q=K.exports,X={name:"nBoard",mixins:[h],components:{Menu:M,Card:T,Search:U,Slider:Q},data:function(){return{inputs:[{id:0,min:0,max:100,value:30,disabled:!1,bold:!1},{id:1,min:30,max:100,value:60,disabled:!1,bold:!1},{id:2,min:60,max:100,value:90,disabled:!1,bold:!1},{id:3,min:0,max:100,value:50,disabled:!1,bold:!0},{id:4,min:0,max:100,value:100,disabled:!0,bold:!0}]}}},Y=X,Z=(n("d0b6"),Object(o["a"])(Y,k,x,!1,null,"2d6dac87",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.pageVisible,expression:"pageVisible"}],ref:"sky",staticClass:"sky container fluid"},t._l(t.sky.stars,(function(t){return n("div",{key:t,staticClass:"star",style:{left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.width+"px"}})})),0)])},nt=[];function at(t,e){return Math.random()*(e-t)+t}var it={name:"Sky",mixins:[h],data:function(){return{sky:{star_count:330,minWidth:1,maxWidth:15,stars:[]}}},mounted:function(){this.createStars()},methods:{createStars:function(){var t=this.$refs.sky,e=t.clientWidth-10,n=t.clientHeight-10,a=0;while(a<this.sky.star_count){var i={width:at(this.sky.minWidth,this.sky.maxWidth),left:at(1,e),top:at(1,n)};this.sky.stars.push(i),a++}}}},st=it,rt=(n("b539"),Object(o["a"])(st,et,nt,!1,null,"efe2142e",null)),ct=rt.exports;a["a"].use(d["a"]);var ot=[{path:"/",name:"Home",component:v},{path:"/board",name:"Board",component:tt},{path:"/sky",name:"Sky",component:ct}],lt=new d["a"]({base:"/my-hub/",routes:ot}),ut=lt,dt=n("2f62");a["a"].use(dt["a"]);var pt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ft=(n("fe46"),n("ecee")),ht=n("c074"),bt=n("ad3d"),mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._t("default")],2)},_t=[],vt=(n("e776"),{}),kt=Object(o["a"])(vt,mt,_t,!1,null,"583de28b",null),xt=kt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col",class:t.colsClass},[t._t("default")],2)},Ct=[],wt={name:"VCol",props:{cols:{type:[String,Number],required:!1,validator:function(t){return t>0&&t<=12}}},computed:{colsClass:function(){return this.cols&&this.cols>0&&this.cols<=12?"col-".concat(this.cols):null}}},gt=wt,Vt=(n("17f0"),Object(o["a"])(gt,yt,Ct,!1,null,"3dac1bd4",null)),St=Vt.exports;a["a"].component("v-col",St),a["a"].component("v-row",xt),ft["c"].add(ht["b"],ht["c"],ht["a"]),a["a"].component("font-awesome-icon",bt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:ut,store:pt,render:function(t){return t(u)}}).$mount("#app")},"5cad":function(t,e,n){},"5f4b":function(t,e,n){},"7b7f":function(t,e,n){},"7faf":function(t,e,n){"use strict";n("8e59")},"8e59":function(t,e,n){},"95df":function(t,e,n){},9818:function(t,e,n){},b0bc:function(t,e,n){"use strict";n("7b7f")},b539:function(t,e,n){"use strict";n("5205")},d011:function(t,e,n){},d0b6:function(t,e,n){"use strict";n("312c")},e544:function(t,e,n){"use strict";n("95df")},e776:function(t,e,n){"use strict";n("5f4b")},ecba:function(t,e,n){},fe46:function(t,e,n){}});
//# sourceMappingURL=app.31356896.js.map