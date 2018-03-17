webpackJsonp([1],{100:function(t,e){},101:function(t,e,n){"use strict";var o,r,a=n(102),i=n.n(a),s=n(26),u=n.n(s),c=n(45),l=n(51),f=n(24),d=n(127),m={errors:null,user:{},isAuthenticated:!!l.a.getToken()},p={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},v=(o={},i()(o,f.b,function(t,e){console.log("body",{user:e});var n={user:e};c.a.post("users/login",n).then(function(t){console.log(t)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})}),i()(o,f.c,function(t){t.commit(d.a)}),i()(o,f.d,function(t,e){return new u.a(function(n,o){c.a.post("users",{user:e}).then(function(e){var o=e.data;t.commit(d.b,o.user),n(o)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})})}),i()(o,f.a,function(t){l.a.getToken()?(c.a.setHeader(),c.a.get("user").then(function(e){var n=e.data;t.commit(d.b,n.user)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})):t.commit(d.a)}),i()(o,f.e,function(t,e){var n=e.email,o=e.username,r=e.password,a=e.image,i=e.bio,s={email:n,username:o,bio:i,image:a};return r&&(s.password=r),c.a.put("user",s).then(function(e){var n=e.data;return t.commit(d.b,n.user),n})}),o),h=(r={},i()(r,d.c,function(t,e){t.errors=e}),i()(r,d.b,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},l.a.saveToken(t.user.token)}),i()(r,d.a,function(t){t.isAuthenticated=!1,t.user={},t.errors={},l.a.destroyToken()}),r);e.a={state:m,actions:v,mutations:h,getters:p}},126:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o="http://localhost:8000/api/"},127:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a});var o="logOut",r="setUser",a="setError"},24:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return s});var o="checkAuth",r="login",a="logout",i="register",s="updateUser"},43:function(t,e,n){"use strict";e.a={name:"App"}},44:function(t,e,n){"use strict";var o=n(24);e.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){console.log(t,e),this.$store.dispatch(o.b,{email:t,password:e}).then(function(t){console.log(t)})}}}},45:function(t,e,n){"use strict";var o=n(15),r=n(106),a=n.n(r),i=n(125),s=n.n(i),u=n(51),c=n(126),l={init:function(){o.a.use(s.a,a.a),o.a.axios.defaults.baseURL=c.a},setHeader:function(){o.a.axios.defaults.headers.common.Authorization="Token "+u.a.getToken()},query:function(t,e){return o.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return o.a.axios.post(""+t,e)},update:function(t,e,n){return o.a.axios.put(t+"/"+e,n)},put:function(t,e){return o.a.axios.put(""+t,e)},delete:function(t){return o.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}};e.a=l},51:function(t,e,n){"use strict";e.a={getToken:function(){return window.localStorage.getItem("id_token")},saveToken:function(t){window.localStorage.setItem("id_token",t)},destroyToken:function(){window.localStorage.removeItem("id_token")}}},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),r=n.n(o),a=n(15),i=n(89),s=n(93),u=n(98),c=n(24),l=n(45);a.a.config.productionTip=!1,l.a.init(),s.a.beforeEach(function(t,e,n){return r.a.all([u.a.dispatch(c.a)]).then(n)}),new a.a({el:"#app",router:s.a,store:u.a,template:"<App/>",components:{App:i.a}})},89:function(t,e,n){"use strict";function o(t){n(90)}var r=n(43),a=n(92),i=n(42),s=o,u=i(r.a,a.a,!1,s,null,null);e.a=u.exports},90:function(t,e){},92:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={render:o,staticRenderFns:r};e.a=a},93:function(t,e,n){"use strict";var o=n(15),r=n(94),a=n(95);o.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:a.a}]})},95:function(t,e,n){"use strict";function o(t){n(96)}var r=n(44),a=n(97),i=n(42),s=o,u=i(r.a,a.a,!1,s,null,null);e.a=u.exports},96:function(t,e){},97:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("form",{on:{submit:function(e){t.onSubmit(t.email,t.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])])])},r=[],a={render:o,staticRenderFns:r};e.a=a},98:function(t,e,n){"use strict";var o=n(15),r=n(99),a=n(100),i=n.n(a),s=n(101);o.a.use(r.a),e.a=new r.a.Store({modules:{home:i.a,auth:s.a}})}},[52]);
//# sourceMappingURL=app.fd828e872a6d94b773a4.js.map