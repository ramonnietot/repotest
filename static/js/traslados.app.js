webpackJsonp([1],{"+B2u":function(t,e){},"0gAj":function(t,e){},CBJ6:function(t,e){},Fbgs:function(t,e){},FqI1:function(t,e){},GF9y:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},i,!1,function(t){a("VOLx")},null,null).exports,n=a("Rf8U"),r=a.n(n),l=a("WrNK"),c=a("mtWM"),d=a.n(c),u=a("/ocq"),v=a("mvHQ"),m=a.n(v),h={name:"Login",data:function(){return{user:null,password:null,openForm:null,response:null,providers:null,userProfile:globaldata.userprofile}},mounted:function(){var t=this,e=this.$data;e.openForm=null,this.$emit("clicked",e.openForm),d.a.post("http://localhost:4000/providers").then(function(t){return t.data}).then(function(a){for(var s in e.providers=a,e.providers)for(var i in t.$auth.options.providers)s===i&&(t.$auth.options.providers[i].clientId=e.providers[s].clientId,t.$auth.options.providers[i].clientSecret=e.providers[s].clientSecret,t.$auth.options.providers[i].redirectUri=e.providers[s].redirectUri)})},methods:{login:function(){var t=this,e=this.$data,a={email:e.user,password:e.password};this.$auth.isAuthenticated()&&this.$auth.logout(),this.$auth.login(a).then(function(a){200===a.status?(e.response=a,e.errorLogin=null,globaldata.userprofile=a.data,e.userProfile=globaldata.userprofile,sessionStorage.setItem("userprofile",m()(globaldata.userprofile)),t.$emit("clicked",!1)):(e.userProfile=null,sessionStorage.clear(),globaldata.userprofile=null,e.errorLogin="error al logarse intentelo de nuevo")})},register:function(){this.$router.push({name:"welcome"})},logout:function(){this.$auth.isAuthenticated()&&this.$auth.logout();var t=this.$data;t.userProfile=null,sessionStorage.clear(),globaldata.userprofile=null,t.openForm=null,this.$emit("clicked",t.openForm)},cancel:function(){this.$auth.isAuthenticated()&&this.$auth.logout();var t=this.$data;t.userProfile=null,sessionStorage.clear(),globaldata.userprofile=null,t.openForm=null,this.$emit("clicked",t.openForm)},authenticate:function(t){var e=this.$data;this.$auth.isAuthenticated()&&this.$auth.logout(),this.response=null,this.$auth.authenticate(t).then(function(t){e.response=t,e.logedin=!0}).catch(function(t){console.log("Incorrecto "+t)})},openformdata:function(){var t=this.$data;t.openForm=!0,this.$emit("clicked",t.openForm)}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!==t.userProfile?a("div",[a("div",{staticClass:"row"},[t._v("\n      Logado como "+t._s(t.userProfile.name)+" "),a("a",{staticClass:"waves-effect waves-light btn right ",on:{click:t.logout}},[t._v("Log out")])])]):a("div",[t.openForm?a("div",[a("div",{staticClass:"row"},[a("a",{staticClass:"waves-effect red waves-light btn right",on:{click:t.cancel}},[t._v("X")]),t._v(" "),a("div",{staticClass:"col s12 m4 offset-m4"},[a("div",{attrs:{id:"classicLogin"}},[a("h4",{staticClass:"center"},[t._v("Iniciar sesión en QuoTravel")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col offset-s1 s10 "},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",t._b({staticClass:"validate",attrs:{id:"user",type:"text"}},"input",t.user,!1)),t._v(" "),a("label",{attrs:{for:"user"}},[t._v("User")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",t._b({staticClass:"validate",attrs:{id:"password",type:"password"}},"input",t.password,!1)),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 waves-effect waves-light btn",on:{click:t.login}},[t._v("Log in\n                    ")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 waves-effect waves-light btn",on:{click:t.register}},[t._v("Sign in\n                    ")])]),t._v(" "),t.providers?a("div",{attrs:{id:"oauth"}},[t._m(0),t._v(" "),t._l(t.providers,function(e){return a("div",{staticClass:"row"},[a("div",{class:"btn_social "+e.name,on:{click:function(a){t.authenticate(e.name)}}},[t._v("Login With "+t._s(e.name))])])})],2):t._e()])])])])])]):a("div",[a("div",{staticClass:"row"},[a("a",{staticClass:"waves-effect waves-light btn  right",on:{click:function(e){t.openformdata()}}},[t._v("Login")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row center"},[e("h4",[this._v(" Or log with ...")])])}]};var f=a("VU/8")(h,p,!1,function(t){a("qjld")},null,null).exports,_={name:"Reserva",components:{Login:f},data:function(){return{openForm:null}},methods:{onclicklogin:function(t){this.$data.openForm=t}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app-logic"}},[e("Login",{on:{clicked:this.onclicklogin}}),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!0!==this.openForm,expression:"openForm !== true"}]},[e("router-view")],1)],1)},staticRenderFns:[]};var C=a("VU/8")(_,g,!1,function(t){a("Fbgs")},"data-v-c6a94f7e",null).exports,b=globaldata.baseurl,y={name:"Ok",data:function(){return{bookingId:null,baseurl:b}},mounted:function(){this.$data.bookingId=this.$route.query.bookingId},methods:{pago:function(t){this.$router.push({name:"pago"})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("h1",[t._v("Thank you!")]),t._v(" "),a("i",{staticClass:"material-icons green large circle"},[t._v("done")]),t._v(" "),a("h4",[t._v("Your booking has been confirmed with ID: "+t._s(t.bookingId))]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",attrs:{src:t.baseurl}},[t._v("Añadir servicios")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.pago()}}},[t._v("Realizar Pago")])])])},staticRenderFns:[]};var k=a("VU/8")(y,w,!1,function(t){a("CBJ6")},"data-v-eb236c20",null).exports,$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container center"},[e("h1",[this._v("We are sorry. It did not work")]),this._v(" "),e("i",{staticClass:"material-icons red large circle"},[this._v("error")]),this._v(" "),e("h4",[this._v(this._s(this.error))])])},staticRenderFns:[]};var x=a("VU/8")({name:"Ko",data:function(){return{error:null}},mounted:function(){this.$data.error=this.$route.query.error}},$,!1,function(t){a("GF9y")},"data-v-2dd8c784",null).exports,F={name:"Config",methods:{set:function(t){console.log(t),globaldata.baseurl=t,this.$data.u=t}},data:function(){return{u:globaldata.baseurl}},mounted:function(){M.updateTextFields()},watch:{u:function(t){console.log("baseurl ha cambiado a "+t),localStorage.setItem("baseurl",t),globaldata.baseurl=t}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Config")]),t._v(" "),a("form",[a("div",{staticClass:"input-field inline",staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.u,expression:"u"}],staticClass:"validate",attrs:{type:"text",id:"baseurl"},domProps:{value:t.u},on:{input:function(e){e.target.composing||(t.u=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"baseurl","data-error":"wrong","data-success":"right"}},[t._v("Base URL")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.set("http://test.easytravelapi.com/rest/yourauthtoken")}}},[t._v("Mock")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.set("http://localhost:9998/yourauthtoken")}}},[t._v("Local")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.set("http://admin.test.quoon.net/resources/ewogICJhZ2VudElkIiA6ICIzIiwKICAicGFzcyIgOiAidzM4a1dwIiwKICAibGFuIiA6ICJlbiIsCiAgImxvZ2luIiA6ICJERU1PIFhNTCBBR0VOVCIKfQ==")}}},[t._v("QuoOn test")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.set("http://comprahotelbeds.quoon.net/v2ukv2f2kvgy3tu5j8yxdzpt:dprMMrfFsz")}}},[t._v("Traductor Hotelbeds")])])])])},staticRenderFns:[]};var q=a("VU/8")(F,I,!1,function(t){a("hTsF")},"data-v-03c9fe24",null).exports,E={name:"Welcome",components:{Login:f},data:function(){return{bookingId:null,openForm:null}},mounted:function(){this.$data.bookingId=this.$route.query.bookingId,console.log(globaldata.userprofile),console.log(m()(globaldata.userprofile))},methods:{onclicklogin:function(t){console.log("entra en onclick"),console.log(t),this.$data.openForm=t}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Login",{on:{clicked:t.onclicklogin}}),t._v(" "),!0!==t.openForm?a("div",[a("h1",[t._v("Welcome XXXX!")]),t._v(" "),a("i",{staticClass:"material-icons green large circle"},[t._v("done")]),t._v(" "),a("h4",[t._v("Ready to start")])]):t._e()],1)},staticRenderFns:[]};var P=a("VU/8")(E,A,!1,function(t){a("nOqy")},"data-v-06ab80ae",null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  pasarela de pago\n")])},staticRenderFns:[]};var L=a("VU/8")({name:"Pago"},S,!1,function(t){a("+B2u")},"data-v-319a5e76",null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};a("VU/8")({name:"Traslado"},N,!1,function(t){a("FqI1")},"data-v-555b666c",null).exports;var R,T,U={name:"Formulario",data:function(){return{destino:".",iddestino:null,llegada:"2018-06-01",horallegada:"12:00",salida:"2018-06-08",horasalida:"12:00",trayecto:"roundtrip",portfolio:null,busqueda:null,coincidencias:{matches:[]}}},methods:{elegirdestino:function(t){T.open(),M.Tabs.init(document.querySelector("#tabsdestino"),{})},seleccionardestino:function(t){this.$data.destino=t.srcElement.getAttribute("data-name"),this.$data.iddestino=t.srcElement.getAttribute("data-key"),T.close()},buscardestino:function(t){var e=!1;if(e|=37===t.keyCode,e|=38===t.keyCode,e|=39===t.keyCode,!(e|=40===t.keyCode)){console.log(t.keyCode),console.log(this.$data.busqueda);var a=this.$data.coincidencias;d()({method:"get",url:globaldata.baseurl+"/commons/search",params:{language:"es",query:this.$data.busqueda}}).then(function(t){console.log(t.data.matches),a.matches=t.data.matches}).catch(function(t){console.log(t)})}},buscardestinox:function(t){var e=!1;e|=37===t.keyCode,e|=38===t.keyCode,e|=39===t.keyCode,(e|=40===t.keyCode)||(console.log(t.keyCode),console.log(this.$data.destino),d()({method:"get",url:globaldata.baseurl+"/commons/search",params:{language:"es",query:this.$data.destino}}).then(function(t){console.log(t.data.matches);var e={};for(var a in R=t.data.matches)e[R[a].name]=null;console.log(e),(void 0).updateData(e)}).catch(function(t){console.log(t)}))},buscar:function(t){t.preventDefault(),console.log(this.$data),this.$router.push({name:"traslado_dispo",query:{destino:this.$data.iddestino,llegada:this.$data.llegada,salida:this.$data.salida,idioma:this.$data.idioma}})}},mounted:function(){var t=this.$data;M.Modal.init(document.querySelector("#modal1"),{}),T=M.Modal.getInstance(document.querySelector("#modal1")),M.updateTextFields();var e=document.querySelectorAll("select"),a=(M.FormSelect.init(e,{}),document.querySelectorAll(".datepicker")),s=(M.Datepicker.init(a,{}),document.querySelectorAll(".timepicker"));M.Timepicker.init(s,{});d()({method:"get",url:globaldata.baseurl+"/commons/portfolio"}).then(function(e){console.log(t),t.portfolio=e.data,t.destino=t.portfolio.countries[0].states[0].name.en,t.iddestino=t.portfolio.countries[0].states[0].resourceId,console.log("destino ok")}).catch(function(t){console.log(t)})}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{attrs:{method:"get"},on:{submit:t.buscar}},[a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.destino,expression:"destino"}],staticClass:"autocomplete validate",attrs:{type:"text",id:"destino"},domProps:{value:t.destino},on:{keyup:t.elegirdestino,focus:t.elegirdestino,input:function(e){e.target.composing||(t.destino=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"destino","data-error":"wrong","data-success":"right"}},[t._v("Hotel")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"btn-floating btn-small waves-effect waves-light blue",on:{click:t.elegirdestino}},[a("i",{staticClass:"material-icons"},[t._v("edit")])])]),t._v(" "),"roundtrip"==t.trayecto||"inbound"==t.trayecto?a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.llegada,expression:"llegada"}],staticClass:"validate datepicker",attrs:{id:"entrada",type:"text"},domProps:{value:t.llegada},on:{input:function(e){e.target.composing||(t.llegada=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"entrada","data-error":"wrong","data-success":"right"}},[t._v("Llegada")])]):t._e(),t._v(" "),"roundtrip"==t.trayecto||"inbound"==t.trayecto?a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.horallegada,expression:"horallegada"}],staticClass:"validate timepicker",attrs:{id:"entradahora",type:"text"},domProps:{value:t.horallegada},on:{input:function(e){e.target.composing||(t.horallegada=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"entradahora","data-error":"wrong","data-success":"right"}},[t._v("Hora")])]):t._e(),t._v(" "),"roundtrip"==t.trayecto||"outbound"==t.trayecto?a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.salida,expression:"salida"}],staticClass:"validate datepicker",attrs:{id:"salida",type:"text"},domProps:{value:t.salida},on:{input:function(e){e.target.composing||(t.salida=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"salida","data-error":"wrong","data-success":"right"}},[t._v("Salida")])]):t._e(),t._v(" "),"roundtrip"==t.trayecto||"outbound"==t.trayecto?a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.horasalida,expression:"horasalida"}],staticClass:"validate timepicker",attrs:{id:"salidahora",type:"text"},domProps:{value:t.horasalida},on:{input:function(e){e.target.composing||(t.horasalida=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"salidahora","data-error":"wrong","data-success":"right"}},[t._v("Hora")])]):t._e(),t._v(" "),a("div",{staticClass:"input-field inline"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.trayecto,expression:"trayecto"}],attrs:{id:"idioma"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.trayecto=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"roundtrip"}},[t._v("Llegada y salida")]),t._v(" "),a("option",{attrs:{value:"inbound"}},[t._v("Solo llegada")]),t._v(" "),a("option",{attrs:{value:"outbound"}},[t._v("Solo salida")])]),t._v(" "),a("label",{attrs:{for:"idioma","data-error":"wrong","data-success":"right"}},[t._v("Trayecto")])]),t._v(" "),a("div",{staticClass:"input-field inline"},[a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.buscar}},[t._v("Buscar")])])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"modal1"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12",attrs:{id:"elegir"}},[t.portfolio?a("ul",{staticClass:"browser-default"},t._l(t.portfolio.countries,function(e){return a("li",[e.name?[a("a",{attrs:{"data-key":e.resourceId,"data-name":e.name.en},on:{click:t.seleccionardestino}},[t._v(t._s(e.name.en))]),t._v(" "),a("ul",{staticClass:"browser-default"},t._l(e.states,function(e){return a("li",[e.name?[a("a",{attrs:{"data-key":e.resourceId,"data-name":e.name.en},on:{click:t.seleccionardestino}},[t._v(t._s(e.name.en))]),t._v(" "),a("ul",{staticClass:"browser-default"},t._l(e.cities,function(e){return a("li",[e.name?[a("a",{attrs:{"data-key":e.resourceId,"data-name":e.name.en},on:{click:t.seleccionardestino}},[t._v(t._s(e.name.en))])]:[t._v("FALTA EL NOMBRE DE LA CIUDAD "+t._s(e))]],2)}))]:[t._v("FALTA EL NOMBRE DE LA PROVINCIA "+t._s(e))]],2)}))]:[t._v("FALTA EL NOMBRE DEL PAIS "+t._s(e))]],2)})):t._e()]),t._v(" "),a("div",{staticClass:"col s12",attrs:{id:"buscar"}},[a("div",[a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.busqueda,expression:"busqueda"}],staticClass:"validate",attrs:{id:"busqueda",type:"text"},domProps:{value:t.busqueda},on:{keyup:t.buscardestino,input:function(e){e.target.composing||(t.busqueda=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"busqueda","data-error":"wrong","data-success":"right"}},[t._v("Search text")])]),t._v(" "),t._l(t.coincidencias.matches,function(e){return a("div",[a("h5",[a("a",{attrs:{"data-key":e.resourceId,"data-name":e.name},on:{click:t.seleccionardestino}},[t._v(t._s(e.name))])]),t._v("\n\n            "+t._s(e.description)+"\n          ")])})],2)])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"tabs",attrs:{id:"tabsdestino"}},[e("li",{staticClass:"tab col s3"},[e("a",{staticClass:"active",attrs:{href:"#elegir"}},[this._v("Choose destination")])]),this._v(" "),e("li",{staticClass:"tab col s3"},[e("a",{staticClass:"active",attrs:{href:"#buscar"}},[this._v("Search destination")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"modal-close waves-effect waves-green btn-flat"},[this._v("Agree")])])}]};var V=a("VU/8")(U,O,!1,function(t){a("0gAj")},"data-v-c7024e54",null).exports,B={name:"TrasladoDispo",data:function(){return{dispo:null}},methods:{abrirdetalle:function(t){console.log(t),this.$router.push({name:"traslado_detalle",query:{key:t}})}},mounted:function(){console.log(this.$route.query);var t=this.$data;d()({method:"get",url:globaldata.baseurl+"/transfer/available",params:{resorts:this.$route.query.destino,checkin:this.$route.query.entrada?this.$route.query.entrada.replace(/-/g,""):null,checkout:this.$route.query.salida?this.$route.query.salida.replace(/-/g,""):null,language:this.$route.query.idioma}}).then(function(e){console.log(e.data),t.dispo=e.data}).catch(function(t){console.log(t)})}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dispo?a("div",[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.dispo.msg))])]),t._v(" "),t._l(t.dispo.availableTransfers,function(e){return a("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.abrirdetalle(e.key)}}},[a("li",{staticClass:"collection-item"},[a("div",[t._v(t._s(e.description)),a("a",{staticClass:"secondary-content"},[t._v(t._s(e.total.retailPrice.value)+" "+t._s(e.total.retailPrice.currencyIsoCode))])])])])})],2)]):t._e()},staticRenderFns:[]};var j=a("VU/8")(B,D,!1,function(t){a("Oq0l")},"data-v-ae4671a8",null).exports,H={name:"Detalle",data:function(){return{detalles:null,fecha:{shifts:[],variants:[]},turno:null,variante:null,titular:null,comentarios:null,habitacion:null,telefono:null,email:null,touroperador:null}},watch:{fecha:function(t){setTimeout(function(){var t=document.querySelectorAll("select");M.FormSelect.init(t,{})})}},methods:{procesar:function(t){200===t.data.statusCode?this.$router.push({name:"ok",query:{bookingId:t.data.bookingId}}):this.$router.push({name:"ko",query:{msg:t.data.msg}})},book:function(t){var e=this;d()({method:"put",url:globaldata.baseurl+"/transfer/booking",data:{key:this.$route.params.key,leadName:this.$data.titular,commentsToProvider:this.$data.comentarios}}).then(function(t){console.log(t.data),e.procesar(t)}).catch(function(t){console.log(t)})}},mounted:function(){console.log(this.$route.query);var t=this.$data;d()({method:"get",url:globaldata.baseurl+"/transfer/pricedetails/"+this.$route.query.keys,params:{}}).then(function(e){console.log(e.data),t.detalles=e.data,setTimeout(function(){var t=document.querySelectorAll("select");M.FormSelect.init(t,{})})}).catch(function(t){console.log(t)})}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Almost done")]),t._v(" "),t.detalles?a("div",[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col m3 s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m12 s12"},[a("h4",[t._v("Remarks")]),t._v(" "),t._l(t.detalles.remarks,function(e){return a("div",[a("p",[t._v(t._s(e.text))])])})],2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col m12 s12"},[a("h4",[t._v("Cancellation costs")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.detalles.cancellationCosts,function(e){return a("tr",[a("td",[t._v(t._s(e.gmttime))]),t._v(" "),a("td",{staticClass:"right"},[t._v(t._s(e.net.value)+" "+t._s(e.net.currencyIsoCode))])])}))])])])]),t._v(" "),a("div",{staticClass:"col offset-m1 m4 s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("h4",[t._v("Please fill")]),t._v(" "),a("div",[a("label",{attrs:{for:"to"}},[t._v("Touroperator")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.touroperador,expression:"touroperador"}],attrs:{type:"text",id:"to",placeholder:"Enter your name"},domProps:{value:t.touroperador},on:{input:function(e){e.target.composing||(t.touroperador=e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"name"}},[t._v("Lead name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.titular,expression:"titular"}],attrs:{type:"text",id:"name",placeholder:"Enter your name"},domProps:{value:t.titular},on:{input:function(e){e.target.composing||(t.titular=e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"habitacion"}},[t._v("Room number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.habitacion,expression:"habitacion"}],attrs:{type:"text",id:"habitacion",placeholder:"Enter your room number"},domProps:{value:t.habitacion},on:{input:function(e){e.target.composing||(t.habitacion=e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"tel"}},[t._v("Mobile")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.telefono,expression:"telefono"}],attrs:{type:"text",id:"tel",placeholder:"Enter your mobile telephone number"},domProps:{value:t.telefono},on:{input:function(e){e.target.composing||(t.telefono=e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",placeholder:"Enter your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",[a("label",{attrs:{for:"comentarios"}},[t._v("Special requests")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comentarios,expression:"comentarios"}],attrs:{id:"comentarios",placeholder:"If you have any"},domProps:{value:t.comentarios},on:{input:function(e){e.target.composing||(t.comentarios=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"col offset-m1 m3 s12 pago"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m12 s12"},[a("h4",[t._v("Totals")]),t._v(" "),t._m(1),t._v(" "),t._l(t.detalles.paymentMethods,function(e){return a("div",{staticClass:"row"},[a("div",{staticClass:"col m3 s3"},[a("p",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"col m3 s3"},[a("p",[t._v(t._s(e.currencyIsoCode))])]),t._v(" "),a("div",{staticClass:"col m3 s3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"m.value"}],attrs:{type:"number"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})]),t._v(" "),t._m(2,!0)])}),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)],2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col m12 s12 center"},[a("br"),a("br"),t._v(" "),a("a",{staticClass:"waves-effect waves-light btn",on:{click:t.book}},[t._v("BOOK")])])])])])])]):t._e(),t._v(" "),a("div",{staticClass:"cantidad"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("After")]),this._v(" "),e("th",[this._v("Cost")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col m3 s3"},[this._v("Method")]),this._v(" "),e("div",{staticClass:"col m3 s3"},[this._v("Currency")]),this._v(" "),e("div",{staticClass:"col m3 s3"},[this._v("Paid")]),this._v(" "),e("div",{staticClass:"col m3 s3"},[this._v("EUR")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col m3 s3"},[e("p",{staticClass:"right"},[this._v("35.12")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col m8 s8"},[e("p",{staticClass:"right"},[this._v("Paid")])]),this._v(" "),e("div",{staticClass:"col m4 s4"},[e("p",{staticClass:"right"},[this._v("35.12")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col m8 s8"},[e("p",{staticClass:"right"},[this._v("Total")])]),this._v(" "),e("div",{staticClass:"col m4 s4"},[e("p",{staticClass:"right"},[this._v("35.12")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col m8 s8"},[e("p",{staticClass:"right"},[this._v("Balance")])]),this._v(" "),e("div",{staticClass:"col m4 s4"},[e("p",{staticClass:"right"},[this._v("35.12")])])])}]};var z=a("VU/8")(H,W,!1,function(t){a("mjtS")},"data-v-efe677f8",null).exports;s.a.use(u.a),s.a.use(r.a,d.a);s.a.use(l.a,{tokenName:"access_token",baseUrl:"http://localhost:4000",storageType:"localStorage"});var J=new u.a({routes:[{path:"/",name:"reserva",component:C,children:[{path:"",name:"traslado_formulario",component:V},{path:"dispo",name:"traslado_dispo",component:j},{path:"detalle",name:"traslado_detalle",component:z},{path:"ok",name:"ok",component:k},{path:"ko",name:"ko",component:x},{path:"config",name:"config",component:q},{path:"login",name:"login",component:f},{path:"welcome",name:"welcome",component:P},{path:"pago",name:"pago",component:L}]}]});s.a.config.productionTip=!1,new s.a({el:"#traslados",router:J,components:{App:o},template:"<App/>"})},Oq0l:function(t,e){},VOLx:function(t,e){},hTsF:function(t,e){},mjtS:function(t,e){},nOqy:function(t,e){},qjld:function(t,e){}},["NHnr"]);
//# sourceMappingURL=traslados.app.js.map