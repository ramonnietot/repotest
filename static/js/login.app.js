webpackJsonp([1],{"+RN+":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},n,!1,function(t){a("NsnX")},null,null).exports,i=a("Rf8U"),c=a.n(i),l=a("WrNK"),r=a("mtWM"),u=a.n(r),d=a("/ocq"),h={name:"Signin",data:function(){return{user:null,password:null}},mounted:function(){},methods:{signin:function(){console.log("signin")}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("h1",[t._v("Sign In")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col offset-m4 m4 s12"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.signin}},[t._v("Sign in")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"login",type:"text"}}),this._v(" "),e("label",{attrs:{for:"login"}},[this._v("User")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{staticClass:"validate",attrs:{id:"password",type:"password"}}),this._v(" "),e("label",{attrs:{for:"password"}},[this._v("Password")])])])}]};var v=a("VU/8")(h,f,!1,function(t){a("xQFV")},"data-v-4073fa66",null).exports,g=a("mvHQ"),p=a.n(g),m={name:"Login",data:function(){return{user:null,password:null,logedin:null,response:null,providers:null}},mounted:function(){this.$data.providers={facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:"http://localhost:8080/",clientId:"baefe3743fb81b6828f4",clientSecret:"7fc0fabb5eae3c3a2fc31632d1351e1849f76ddb",state:"kh3"},github:{name:"github",redirectUri:"https://pedantic-williams-fc3e0c.netlify.com/login/#/welcome",clientId:"baefe3743fb81b6828f4",clientSecret:"7fc0fabb5eae3c3a2fc31632d1351e1849f76ddb",state:"kh3"}},console.log(p()(this.$auth.options.providers))},methods:{login:function(){console.log("entra funcion");var t=this.$data,e=this.$router;u()({method:"post",url:globaldata.baseurl+"/auth",params:{user:t.user,password:t.passwordl}}).then(function(t){console.log("correcto");var a=resp.data.token;localStorage.setItem("user-token",a),e.push({name:"welcome",query:{msg:"Hola"}})}).catch(function(t){console.log("Incorrecto"),localStorage.removeItem("vueauth_access_token"),e.push({name:"signin",query:{msg:"Adios"}})})},login2:function(){var t=this.$data;this.$auth.isAuthenticated()&&this.$auth.logout(),this.$auth.login({email:"john.doe@domain.com",password:"pass123456"}).then(function(e){console.log("llega aqui"),200===e.status?(t.response=e,t.logedin=!0,t.errorLogin=null,console.log(localStorage.removeItem("vueauth_access_token"))):(t.logedin=null,t.errorLogin="error al logarse intentelo de nuevo")})},register:function(){this.$router.push({name:"welcome"})},sign:function(){console.log("login"),this.$router.push({name:"signin"})},logout:function(){this.$auth.isAuthenticated()&&this.$auth.logout()},authenticate:function(t){var e=this.$data;console.log("storage"+p()(this.$auth)),this.$auth.isAuthenticated()&&this.$auth.logout(),this.response=null,this.$auth.authenticate(t).then(function(t){console.log("response"+p()(t)),e.response=t,e.logedin=!0;for(var a=0;a<localStorage.length;a++)console.log(localStorage.key(a)+" --\x3e "+localStorage.getItem(localStorage.key(a)))}).catch(function(t){console.log("Incorrecto "+t)})}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[t.logedin?a("div",[t._v("\n    hola "+t._s(t.response.data.name)+"\n  "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.logout}},[t._v("Log out")])])])]):a("div",[a("h1",[t._v("Agent access")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col offset-m4 m4 s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",t._b({staticClass:"validate",attrs:{id:"user",type:"text"}},"input",t.user,!1)),t._v(" "),a("label",{attrs:{for:"user"}},[t._v("User")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",t._b({staticClass:"validate",attrs:{id:"password",type:"password"}},"input",t.password,!1)),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.login2}},[t._v("Log in")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.register}},[t._v("Sign in")])])]),t._v(" "),a("button",{on:{click:function(e){t.authenticate("github")}}},[t._v("auth Github")]),t._v(" "),a("button",{on:{click:function(e){t.authenticate("facebook")}}},[t._v("auth Facebook")]),t._v(" "),a("button",{on:{click:function(e){t.authenticate("google")}}},[t._v("auth Google")]),t._v(" "),a("button",{on:{click:function(e){t.authenticate("twitter")}}},[t._v("auth Twitter")]),t._v(" "),a("ul",{attrs:{id:"authenticate"}},t._l(t.providers,function(e){return a("li",[a("button",{on:{click:function(e){t.authenticate("{{provider.name}}")}}},[t._v("auth "+t._s(e.name))])])}))])])])])},staticRenderFns:[]};var b=a("VU/8")(m,_,!1,function(t){a("+RN+")},"data-v-75f1542c",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container center"},[e("h1",[this._v("Welcome XXXX!")]),this._v(" "),e("i",{staticClass:"material-icons green large circle"},[this._v("done")]),this._v(" "),e("h4",[this._v("Ready to start")])])}]};var C=a("VU/8")({name:"Ok",data:function(){return{bookingId:null}},mounted:function(){this.$data.bookingId=this.$route.query.bookingId}},w,!1,function(t){a("mzIo")},"data-v-0dc949ad",null).exports;s.a.use(d.a),s.a.use(l.a,{tokenName:"access_token",baseUrl:"http://localhost:4000",storageType:"localStorage",providers:{github:{clientId:"baefe3743fb81b6828f4",clientSecret:"7fc0fabb5eae3c3a2fc31632d1351e1849f76ddb",redirectUri:"https://pedantic-williams-fc3e0c.netlify.com/login/#/welcome",state:function(){return(new Date).getTime().toString()},optionalUrlParams:["scope","state"]},facebook:{clientId:"1234",clientSecret:"0",redirectUri:"http://localhost:8080/welcome"}}}),s.a.use(c.a,u.a);new l.a(s.a.prototype.$http,{baseUrl:"https://pedantic-williams-fc3e0c.netlify.com"});var k=new d.a({routes:[{path:"/",name:"login",component:b},{path:"/welcome",name:"welcome",component:C},{path:"/signin",name:"signin",component:v}]});s.a.config.productionTip=!1,new s.a({el:"#login",router:k,components:{App:o},template:"<App/>"})},NsnX:function(t,e){},mzIo:function(t,e){},xQFV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=login.app.js.map