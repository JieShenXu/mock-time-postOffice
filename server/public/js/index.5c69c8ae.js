(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"28a1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("publicLetter")])])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,l=r("2877"),c=Object(l["a"])(i,n,a,!1,null,"83667378",null);t["default"]=c.exports},"2afa":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("about")])])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,l=r("2877"),c=Object(l["a"])(i,n,a,!1,null,"0ce7e04a",null);t["default"]=c.exports},"37f9":function(e,t,r){"use strict";r.r(t);var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"index-box"},[e._m(0),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"190px",size:"small","label-position":"left"}},[r("el-form-item",{attrs:{label:"你的姓名",prop:"name"}},[r("el-input",{attrs:{placeholder:"请填写姓名, 将在邮件的标题中出现"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"收件邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"可以是你自己, 或是任何一个你想倾诉的人. 填写TA的邮箱地址, 形如 abc@163.com"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"发信时间",required:""}},[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date1"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1)],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date2"}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(t){e.$set(e.ruleForm,"date2",t)},expression:"ruleForm.date2"}})],1)],1)],1),r("el-form-item",{attrs:{label:"是否公开",prop:"type"}},[r("el-checkbox",{attrs:{label:'选中后, 信的内容将在"公开信"中展示, 所有人都可以浏览和评论'},model:{value:e.ruleForm.public,callback:function(t){e.$set(e.ruleForm,"public",t)},expression:"ruleForm.public"}})],1),r("div",{staticClass:"edit_container"},[r("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},change:function(t){return e.onEditorChange(t)}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("el-form-item",[r("div",{staticClass:"verification-box"},[r("img",{attrs:{src:e.imgSrc},on:{click:e.changeImg}}),r("el-input",{staticStyle:{width:"140px","margin-right":"20px"},attrs:{placeholder:"输入验证码"},model:{value:e.ruleForm.verificationCode,callback:function(t){e.$set(e.ruleForm,"verificationCode",t)},expression:"ruleForm.verificationCode"}}),r("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)])],1)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-box"},[r("span",[e._v("时光邮局")])])}],i=(r("b0c0"),r("2fa7")),l=(r("560b"),r("450d"),r("dcdc")),c=r.n(l),u=(r("f4f9"),r("c2cc")),s=r.n(u),m=(r("4ffc"),r("946e")),f=r.n(m),d=(r("826b"),r("c263")),p=r.n(d),b=(r("eca7"),r("3787")),h=r.n(b),v=(r("425f"),r("4105")),_=r.n(v),F=r("953d"),g=(r("a753"),r("8096"),r("14e1"),{components:(n={},Object(i["a"])(n,_.a.name,_.a),Object(i["a"])(n,h.a.name,h.a),Object(i["a"])(n,p.a.name,p.a),Object(i["a"])(n,f.a.name,f.a),Object(i["a"])(n,s.a.name,s.a),Object(i["a"])(n,c.a.name,c.a),Object(i["a"])(n,"quillEditor",F["quillEditor"]),n),data:function(){return{ruleForm:{name:"",email:"",date1:"",date2:"",public:!1,content:"",verificationCode:""},rules:{name:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],email:[{required:!0,message:"请输入收件邮箱",trigger:"blur"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{required:!1}]},editorOption:{},imgSrc:"http://192.168.0.106:3000/captcha"}},beforeMount:function(){},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},mounted:function(){},methods:{handleSelect:function(){},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},onEditorReady:function(e){},onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){},changeImg:function(e){this.imgSrc="http://192.168.0.106:3000/captcha?"+Math.random()}}}),x=g,E=(r("c9ed"),r("2877")),$=Object(E["a"])(x,a,o,!1,null,"0d146b91",null);t["default"]=$.exports},"4d17":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("FAQ")])])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,l=r("2877"),c=Object(l["a"])(i,n,a,!1,null,"6b1e850c",null);t["default"]=c.exports},6900:function(e,t,r){},"729f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("manua")])])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,l=r("2877"),c=Object(l["a"])(i,n,a,!1,null,"07c40435",null);t["default"]=c.exports},"856f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("letterslist")])])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,l=r("2877"),c=Object(l["a"])(i,n,a,!1,null,"000770fd",null);t["default"]=c.exports},c9ed:function(e,t,r){"use strict";var n=r("6900"),a=r.n(n);a.a}}]);