webpackJsonp([1],{105:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.isAuthenticated?n("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(t.email,t.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])]):t._e(),t._v(" "),t.isAuthenticated?t._e():n("div",[t._v("\n    Tu es identifié\n  ")])])},o=[],a={render:r,staticRenderFns:o};e.a=a},106:function(t,e,n){"use strict";var r=n(15),o=n(49),a=n(107),i=n.n(a),u=n(108);r.a.use(o.a),e.a=new o.a.Store({modules:{home:i.a,auth:u.a}})},107:function(t,e){},108:function(t,e,n){"use strict";var r,o,a=n(109),i=n.n(a),u=n(48),s=n.n(u),c=n(27),l=n.n(c),f=n(50),d=n(56),m=n(25),p=n(134),v={errors:null,user:{},isAuthenticated:!!d.a.getToken()},h={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},g=(r={},i()(r,m.b,function(t,e){var n={};return new l.a(function(r){f.a.post("users/login",s()({},n,{user:e})).then(function(e){var n=e.data;t.commit(p.b,n.user),r(n)}).catch(function(e){var n=e.response;t.commit(p.c,n.data.errors)})})}),i()(r,m.c,function(t){t.commit(p.a)}),i()(r,m.d,function(t,e){return new l.a(function(n,r){f.a.post("users",{user:e}).then(function(e){var r=e.data;t.commit(p.b,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(p.c,n.data.errors)})})}),i()(r,m.a,function(t){d.a.getToken()?(f.a.setHeader(),f.a.get("user").then(function(e){var n=e.data;t.commit(p.b,n.user)}).catch(function(e){var n=e.response;t.commit(p.c,n.data.errors)})):t.commit(p.a)}),i()(r,m.e,function(t,e){var n=e.email,r=e.username,o=e.password,a=e.image,i=e.bio,u={email:n,username:r,bio:i,image:a};return o&&(u.password=o),f.a.put("user",u).then(function(e){var n=e.data;return t.commit(p.b,n.user),n})}),r),w=(o={},i()(o,p.c,function(t,e){t.errors=e}),i()(o,p.b,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},d.a.saveToken(t.user.token)}),i()(o,p.a,function(t){t.isAuthenticated=!1,t.user={},t.errors={},d.a.destroyToken()}),o);e.a={state:v,actions:g,mutations:w,getters:h}},133:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="http://localhost:8000/api/"},134:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a});var r="logOut",o="setUser",a="setError"},25:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return u});var r="checkAuth",o="login",a="logout",i="register",u="updateUser"},46:function(t,e,n){"use strict";e.a={name:"App"}},47:function(t,e,n){"use strict";var r=n(48),o=n.n(r),a=n(49),i=n(25);e.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var n=this;this.$store.dispatch(i.b,{email:t,password:e}).then(function(){console.log("Go to hello"),n.$router.push({name:"hello"})})}},computed:o()({},Object(a.b)(["isAuthenticated"]))}},50:function(t,e,n){"use strict";var r=n(15),o=n(113),a=n.n(o),i=n(132),u=n.n(i),s=n(56),c=n(133),l={init:function(){r.a.use(u.a,a.a),r.a.axios.defaults.baseURL=c.a},setHeader:function(){r.a.axios.defaults.headers.common.Authorization="Token "+s.a.getToken()},query:function(t,e){return r.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return r.a.axios.post(""+t,e)},update:function(t,e,n){return r.a.axios.put(t+"/"+e,n)},put:function(t,e){return r.a.axios.put(""+t,e)},delete:function(t){return r.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}};e.a=l},56:function(t,e,n){"use strict";e.a={getToken:function(){return window.localStorage.getItem("id_token")},saveToken:function(t){window.localStorage.setItem("id_token",t)},destroyToken:function(){window.localStorage.removeItem("id_token")}}},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),o=n.n(r),a=n(15),i=n(91),u=n(95),s=n(106),c=n(25),l=n(50);a.a.config.productionTip=!1,l.a.init(),u.a.beforeEach(function(t,e,n){return o.a.all([s.a.dispatch(c.a)]).then(n)}),new a.a({el:"#app",router:u.a,store:s.a,template:"<App/>",components:{App:i.a}})},91:function(t,e,n){"use strict";function r(t){n(92)}var o=n(46),a=n(94),i=n(45),u=r,s=i(o.a,a.a,!1,u,null,null);e.a=s.exports},92:function(t,e){},94:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},95:function(t,e,n){"use strict";var r=n(15),o=n(96),a=n(97);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:a.a}]})},97:function(t,e,n){"use strict";function r(t){n(98)}var o=n(47),a=n(105),i=n(45),u=r,s=i(o.a,a.a,!1,u,null,null);e.a=s.exports},98:function(t,e){}},[57]);
//# sourceMappingURL=app.41c5b233accb99fd740c.js.map