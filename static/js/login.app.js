webpackJsonp([1],{"1dGy":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(t){s("NsnX")},null,null).exports,o=s("Rf8U"),c=s.n(o),l=s("WrNK"),r=s("mtWM"),u=s.n(r),d=s("/ocq"),v={name:"Signin",data:function(){return{user:null,password:null}},mounted:function(){},methods:{signin:function(){console.log("signin")}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container center"},[s("h1",[t._v("Sign In")]),t._v(" "),s("div",{staticClass:"row"},[s("form",{staticClass:"col offset-m4 m4 s12"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12"},[s("a",{staticClass:"waves-effect waves-light btn",on:{click:t.signin}},[t._v("Sign in")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"login",type:"text"}}),this._v(" "),e("label",{attrs:{for:"login"}},[this._v("User")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"password",type:"password"}}),this._v(" "),e("label",{attrs:{for:"password"}},[this._v("Password")])])])}]};var f=s("VU/8")(v,h,!1,function(t){s("xQFV")},"data-v-4073fa66",null).exports,p=s("mvHQ"),m=s.n(p),g={name:"Login",data:function(){return{user:null,password:null,logedin:null,response:null}},mounted:function(){},methods:{login:function(){console.log("entra funcion");var t=this.$data,e=this.$router;u()({method:"post",url:globaldata.baseurl+"/auth",params:{user:t.user,password:t.password}}).then(function(t){console.log("correcto");var s=resp.data.token;localStorage.setItem("user-token",s),e.push({name:"welcome",query:{msg:"Hola"}})}).catch(function(t){console.log("Incorrecto"),localStorage.removeItem("user-token"),e.push({name:"signin",query:{msg:"Adios"}})})},login2:function(){this.$auth.login({email:email,password:password}).then(function(){var t=resp.data.token;localStorage.setItem("user-token",t),route.push({name:"welcome",query:{msg:"Hola"}})})},register:function(){this.$auth.register({name:name,email:email,password:password}).then(function(){})},sign:function(){console.log("login"),this.$router.push({name:"signin"})},logout:function(){console.log("login"),localStorage.removeItem("user-token")},authenticate:function(t){console.log("storage"+m()(this.$auth)),this.$auth.isAuthenticated()&&this.$auth.logout(),this.response=null,this.$auth.authenticate(t).then(function(t){console.log("response"+m()(t)),this.response=t})}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container center"},[t.logedin?s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col s12"},[s("a",{staticClass:"waves-effect waves-light btn",on:{click:t.logout}},[t._v("Log out")])])])]):s("div",[s("h1",[t._v("Agent access")]),t._v(" "),s("div",{staticClass:"row"},[s("form",{staticClass:"col offset-m4 m4 s12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",t._b({staticClass:"validate",attrs:{id:"user",type:"text"}},"input",t.user,!1)),t._v(" "),s("label",{attrs:{for:"user"}},[t._v("User")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",t._b({staticClass:"validate",attrs:{id:"password",type:"password"}},"input",t.password,!1)),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Password")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12"},[s("a",{staticClass:"waves-effect waves-light btn",on:{click:t.login2}},[t._v("Log in")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12"},[s("a",{staticClass:"waves-effect waves-light btn",on:{click:t.register}},[t._v("Sign in")])])]),t._v(" "),s("button",{on:{click:function(e){t.authenticate("github")}}},[t._v("auth Github")]),t._v(" "),s("button",{on:{click:function(e){t.authenticate("facebook")}}},[t._v("auth Facebook")]),t._v(" "),s("button",{on:{click:function(e){t.authenticate("google")}}},[t._v("auth Google")]),t._v(" "),s("button",{on:{click:function(e){t.authenticate("twitter")}}},[t._v("auth Twitter")])])])])])},staticRenderFns:[]};var w=s("VU/8")(g,_,!1,function(t){s("1dGy")},"data-v-c22b8954",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container center"},[e("h1",[this._v("Welcome XXXX!")]),this._v(" "),e("i",{staticClass:"material-icons green large circle"},[this._v("done")]),this._v(" "),e("h4",[this._v("Ready to start")])])}]};var C=s("VU/8")({name:"Ok",data:function(){return{bookingId:null}},mounted:function(){this.$data.bookingId=this.$route.query.bookingId}},b,!1,function(t){s("mzIo")},"data-v-0dc949ad",null).exports;n.a.use(d.a),n.a.use(l.a,{tokenName:"access_token",baseUrl:"https://pedantic-williams-fc3e0c.netlify.com",storageType:"localStorage",providers:{github:{clientId:"baefe3743fb81b6828f4",clientSecret:"7fc0fabb5eae3c3a2fc31632d1351e1849f76ddb",redirectUri:"https://pedantic-williams-fc3e0c.netlify.com",url:"/login/welcome"},google:{clientId:"1234",redirectUri:"http://localhost:8080/welcome"}}}),n.a.use(c.a,u.a);new l.a(n.a.prototype.$http,{baseUrl:"http://localhost:8080"});var k=new d.a({mode:"history",routes:[{path:"/",name:"login",component:w},{path:"welcome",name:"welcome",component:C},{path:"signin",name:"signin",component:f}]});n.a.config.productionTip=!1,new n.a({el:"#login",router:k,components:{App:i},template:"<App/>"})},NsnX:function(t,e){},mzIo:function(t,e){},xQFV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=login.app.js.map