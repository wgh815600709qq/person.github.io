(function(A){function t(t){for(var a,e,c=t[0],l=t[1],o=t[2],v=0,r=[];v<c.length;v++)e=c[v],n[e]&&r.push(n[e][0]),n[e]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(A[a]=l[a]);p&&p(t);while(r.length)r.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var A,t=0;t<i.length;t++){for(var s=i[t],a=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),A=e(e.s=s[0]))}return A}var a={},n={1:0},i=[];function e(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return A[t].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=A,e.c=a,e.d=function(A,t,s){e.o(A,t)||Object.defineProperty(A,t,{configurable:!1,enumerable:!0,get:s})},e.r=function(A){Object.defineProperty(A,"__esModule",{value:!0})},e.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var p=l;i.push([13,0]),s()})({"0hf6":function(A,t,s){"use strict";var a=s("qoG8"),n=s.n(a);n.a},13:function(A,t,s){A.exports=s("Vtdi")},"2UfU":function(A,t,s){},"6wjO":function(A,t,s){},"7AtH":function(A,t,s){"use strict";var a=s("wIRq"),n=s.n(a);n.a},"7g+Y":function(A,t,s){},EGO0:function(A,t,s){},GtZ9:function(A,t,s){"use strict";var a=s("7g+Y"),n=s.n(a);n.a},H3cv:function(A,t,s){"use strict";var a=s("el+H"),n=s.n(a);n.a},HcDZ:function(A,t,s){},Vtdi:function(A,t,s){"use strict";s.r(t);s("B1wg");var a=s("NeLz"),n=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{attrs:{id:"app"}},[s("keep-alive",[s("router-view")],1)],1)},i=[],e={name:"app",components:{}},c=e,l=(s("ZL7j"),s("Lq4n")),o=Object(l["a"])(c,n,i,!1,null,null,null),p=o.exports,v=s("wxi0"),r=s.n(v),u=(s("UgMF"),s("uOVN")),m=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"resume"},[a("el-container",[a("el-header",[a("span",[A._v("个人简历")]),a("span",{staticClass:"right-side"},[a("el-button",{on:{click:A.download}},[A._v("下载简历")])],1)]),a("el-container",{staticClass:"containers"},[a("el-aside",{attrs:{width:"200px"}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:s("eohg"),alt:"头像"}}),a("p",{staticStyle:{color:"#999","font-size":"12px"}},[A._v("在职-考虑机会")])]),a("div",{staticClass:"basic-info"},[a("div",{staticClass:"info-item"},[a("i",{staticClass:"iconfont icon-xingming"}),a("span",[A._v("吴罡皇")]),a("i",{staticClass:"iconfont icon-nan"})]),a("div",{staticClass:"info-item"},[a("i",{staticClass:"iconfont icon-gongzuoshijian"}),a("span",[A._v("2016年7月起")])]),a("div",{staticClass:"info-item"},[a("i",{staticClass:"iconfont icon-youxiang"}),a("span",[A._v("815600709@qq.com")])]),a("div",{staticClass:"info-item"},[a("i",{staticClass:"iconfont icon-dianhua"}),a("span",[A._v("+86 13631469158")])])]),a("div",{staticClass:"menu"},[a("div",{class:["menu-item",0===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(0,"/main/brief")}}},[A._v("个人简介"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",1===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(1,"/main/technology")}}},[A._v("技术能力"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",2===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(2,"/main/job")}}},[A._v("求职意向"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",3===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(3,"/main/working")}}},[A._v("工作经历"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",4===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(4,"/main/suffer")}}},[A._v("创业经历"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",5===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(5,"/main/project")}}},[A._v("项目经验"),a("span",{staticClass:"inner"})]),a("div",{class:["menu-item",6===A.hotIndex?"menu-hover":""],on:{click:function(t){A.linkTo(6,"/main/aboutme")}}},[A._v("自我介绍"),a("span",{staticClass:"inner"})])])]),a("el-main",{style:{height:A.height+"px"}},[a("el-collapse-transition",[0===A.hotIndex?a("Brief"):A._e(),1===A.hotIndex?a("Technology"):A._e(),2===A.hotIndex?a("Job"):A._e(),3===A.hotIndex?a("Work"):A._e(),4===A.hotIndex?a("Suffer"):A._e(),5===A.hotIndex?a("Project"):A._e(),6===A.hotIndex?a("AboutMe"):A._e()],1)],1)],1),a("el-footer",[A._v("©拒绝外包、外派性质工作,非诚勿扰!")])],1)],1)},d=[],C=(s("ak19"),s("qmFY"),s("hDHi"),s("uNxX"),function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)}),h=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"brief"},[s("h5",[A._v("个人简介")]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("姓名:")]),s("span",{staticClass:"cox"},[A._v("吴罡皇")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("英文名:")]),s("span",{staticClass:"cox"},[A._v("Johnson")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("籍贯:")]),s("span",{staticClass:"cox"},[A._v("广东")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("现住地:")]),s("span",{staticClass:"cox"},[A._v("中国广东省深圳市")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("毕业学校:")]),s("span",{staticClass:"cox"},[A._v("广东工业大学")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("学历:")]),s("span",{staticClass:"cox"},[A._v("本科")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("专业:")]),s("span",{staticClass:"cox"},[A._v("自动化")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("英语:")]),s("span",{staticClass:"cox"},[A._v("CET六级")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("联系方式:")]),s("span",{staticClass:"cox"},[A._v("13631469158")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("婚姻状况:")]),s("span",{staticClass:"cox"},[A._v("未婚")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("github:")]),s("span",{staticClass:"cox"},[s("a",{attrs:{href:"https://github.com/wgh815600709qq",target:"_blank"}},[A._v("去瞧瞧")])])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("邮箱:")]),s("span",{staticClass:"cox"},[A._v("815600709@qq.com")])])])])}],f={name:"brief",data:function(){return{}}},x=f,_=(s("7AtH"),Object(l["a"])(x,C,h,!1,null,"4689f358",null)),g=_.exports,b=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},w=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"technology"},[s("h5",[A._v("技术能力")]),s("div",{staticClass:"content"},[s("p",[A._v("1、熟悉HTML5，CSS3，ES6，Less，HTTP协议；")]),s("p",[A._v("2、熟练使用主流框架vue.js、jquery.js、nuxt.js以及原生js,对react.js、angular.js、avalon.js框架有了解以及使用;")]),s("p",[A._v("3、良好的源码阅读能力, github活跃者;")]),s("p",[A._v("4、熟悉主流ui库,也具备封装UI库、JS类库能力；")]),s("p",[A._v("5、熟悉微信公众号平台、微信小程序、微信小游戏开发，并有相关的开发经验；")]),s("p",[A._v("6、熟悉webpack2.0，能根据需求独立搭建脚手架；")]),s("p",[A._v("7、熟练使用Nodejs中常用的框架express，koa2；")]),s("p",[A._v("8、了解Hybrid App混合应用开发、electron桌面语言;")]),s("p",[A._v("9、对移动端H5项目有一定的经验;")]),s("div",{staticClass:"person"},[s("p",[A._v("个人目前主要技术栈:")]),s("p",[A._v("客户端: vue.js + vue-router + vuex (react + react-router-dom + react-redux)")]),s("p",[A._v("服务端: nodejs + express + sequelize + mysql + redis")])])])])}],j={name:"technology",data:function(){return{}}},I=j,k=(s("bwEt"),Object(l["a"])(I,b,w,!1,null,"c8ceaef4",null)),S=k.exports,E=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},K=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"job"},[s("h5",[A._v("求职意向")]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("职业方向:")]),s("span",{staticClass:"cox"},[A._v("web前端开发/nodejs开发")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("期望薪资(税前):")]),s("span",{staticClass:"cox"},[A._v("月薪>=￥12k/年薪>=￥15w")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("期望行业:")]),s("span",{staticClass:"cox"},[A._v("互联网、金融、医疗、云服务等")])]),s("div",{staticClass:"content-item"},[s("span",{staticClass:"tls"},[A._v("期望地点:")]),s("span",{staticClass:"cox"},[A._v("广东省深圳市")])]),s("div",{staticClass:"content-item",staticStyle:{"border-top":"1px solid #eee"}},[s("span",{staticClass:"tls"},[A._v("其他需求:")]),s("div",{staticClass:"cox",staticStyle:{"margin-left":"140px"}},[s("p",[A._v("1、生存压力巨大,五险一金齐全不过分吧;")]),s("p",[A._v("2、程序员需要劳逸结合,双休是提升效率的根本;")]),s("p",[A._v("3、过分加班的话,不合适吧；")])])])])])}],y={name:"job",data:function(){return{}}},q=y,Q=(s("0hf6"),Object(l["a"])(q,E,K,!1,null,"3c5588bc",null)),B=Q.exports,U=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"working"},[s("h5",[A._v("工作经历")]),s("span",{staticStyle:{color:"#999","font-size":"12px",float:"left","margin-top":"10px"}},[A._v("说明: 点击对应的工作经历可查看详情")]),s("div",{staticClass:"content"},[s("el-collapse",[s("el-collapse-item",{attrs:{title:"【深圳蓝凌股份有限公司】 2016/07 -- 2017/06",name:"1"}},[s("div",[s("span",{staticClass:"tls"},[A._v("岗位名称:")]),s("span",{staticClass:"cox"},[A._v("前端开发工程师")])]),s("div",[s("span",{staticClass:"tls"},[A._v("工作职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责企业云平台相关应用的开发与维护、web端产品的开发与优化；")]),s("p",[A._v("2、负责公司基础类库、框架和相关模块的维护与改进，提升产品的用户体验；")]),s("p",[A._v("3、与后端工程师协作，实现数据交互、动态信息展现和界面交互；")]),s("p",[A._v("4、与设计、产品团队紧密配合，能快速理解、消化各方需求，准确输出体验最佳的页面")]),s("p",[A._v("5、配合团队整体建设，优化前端团队的开发方式和流程、规范，提高团队效率。")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("工作业绩:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        《企业邮箱v2.0》框架重选、改进业务的实现方式等，经过迭代以后:\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --应用的流畅性得到很大的提升;\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --不同手机的兼容性问题得到有效地解决;\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --功能更全面,具体,用户使用更便捷\n                        ")]),s("div",{staticClass:"border"}),A._v("\n                        《帮助中心》应用采用nodejs服务端渲染，数据与模板绑定,优势有:\n                         "),s("p",{staticClass:"imp"},[A._v("-- 首屏渲染速度比其他前后端分离应用速度得到极大地提升")]),s("p",{staticClass:"imp"},[A._v("-- ejs模板可读性较高,易于维护 ")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("离职原因:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        受“创业风潮”影响，想出去创业。\n                    ")])])]),s("el-collapse-item",{attrs:{title:"【深圳普天阳科技有限公司】 2017/10 -- 至今",name:"2"}},[s("div",[s("span",{staticClass:"tls"},[A._v("岗位名称:")]),s("span",{staticClass:"cox"},[A._v("前端开发工程师")])]),s("div",[s("span",{staticClass:"tls"},[A._v("工作职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责公司产品线前端研发(PC端、移动端H5、小程序)；")]),s("p",[A._v("2、负责公司业务代码层的封装、解耦、优化；")]),s("p",[A._v("3、与后端工程师协作，实现数据交互、动态信息展现和界面交互；")]),s("p",[A._v("4、与设计、产品团队紧密配合，能快速理解、消化各方需求，准确输出体验最佳的页面;")]),s("p",[A._v("5、提升产品的用户体验。")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("工作业绩:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        《普天阳-采购平台v1.0》从零到上线,项目优点:\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --平台代理商的权限控制做得比较完备;\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --对用户的支付安全、个人信息等保障;\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --对于订单的流程控制做得比较完备，上线之后极少bug\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --对于同浏览器多账号登陆做了限制(类同淘宝)\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --优秀项目奖!!!(最关键)\n                        ")]),s("a",{attrs:{href:"http://www.ptyqx.com/web/#/login",target:"_blank"}},[A._v("采购平台线上地址")]),s("div",{staticClass:"border"}),A._v("\n                        《公司官网v1.0》应用采用nuxt.js服务端渲染,nodejs作为后台,优势有:\n                         "),s("p",{staticClass:"imp"},[A._v("-- 利于seo(公司申请百度推广)")]),s("p",{staticClass:"imp"},[A._v("-- 首屏渲染快(待优化:图片懒加载与预加载) ")]),s("p",{staticClass:"imp"},[A._v("--内容可配置(运维人员可以在后台管理系统完全自定义配置官网展示模块的内容)")]),s("a",{attrs:{href:"http://www.centermed.com",target:"_blank"}},[A._v("公司官网线上地址")]),s("div",{staticClass:"border"}),A._v("\n                        《医数聚小程序》完整的下单流程，订单聊天:\n                         "),s("p",{staticClass:"imp"},[A._v("-- 集成在线聊天功能与订单功能相互绑定，便于医生与手术设计师之间沟通")]),s("p",{staticClass:"imp"},[A._v("-- 贴心的在线客服功能")]),s("p",{staticClass:"imp"},[A._v("-- 较好的手机兼容性")]),A._v('\n                         微信小程序搜索"医数聚"\n                        '),s("div",{staticClass:"border"}),A._v('\n                        《医数聚各端》完整的"下单-审核-支付-设计-生产-评价"流程:\n                         '),s("p",{staticClass:"imp"},[A._v("-- 业务复杂度较高")]),s("p",{staticClass:"imp"},[A._v("-- 对流程控制较严格")])])])])],1)],1)])},T=[],N={name:"working",data:function(){return{}}},W=N,D=(s("qg9K"),Object(l["a"])(W,U,T,!1,null,"1446ce36",null)),H=D.exports,O=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"suffer"},[s("h5",[A._v("创业经历")]),s("div",{staticClass:"content"},[s("div",{staticStyle:{"text-align":"right"}},[s("el-Button",{on:{click:A.toggleMusic}},[A._v(A._s(A.musicIsOpen?"关闭":"播放")+"音乐")])],1),s("p",{staticStyle:{"font-size":"16px"}},[A._v("- - 理想总是很丰满，现实却很骨感。")]),s("p",[A._v("这可能是一个悲伤、很真实的故事。")]),s("p",[A._v("2017年,那年夏天,创业之风迎面而来。在深圳这个创业的摇篮里,许许多多的ideas、各种政策倾斜、层出不穷的市场需求、永远不差钱的风投家们,于是诞生了无数渴望成功的宝宝们。\n            我便是其中一个被吸引的孩子,目标很明确，定位很精准，行动很迅速，我就是要迎合市场需求、快速地从风投市场、从盲目从众的中国消费群体中开拓出我们的道路，\n            赚得一桶金以后我就不用再被生计所困扰，甚至可以过自己想要的生活。\n        ")]),s("p",[A._v('\n            于是乎，我毅然辞去"朝九晚六、三点一线"稳定的公司生活，靠着圈内的人脉关系，成功混进去了一个创业团队里面。年轻气盛的我们，很有冲劲，团队leader对于规划的饼画得很大，\n            大到你甚至觉得只要团队每个人付出了努力，以后的回报已经溢出你的认知;或者正是因为饼大，大到遮住了本应该平行于市场的视线，总是感觉自己一定可以成功捞金。\n        ')]),s("p",[A._v("\n            你可能很难想象，一个小团队的人甚至可以在连续三个月内换了五批人员是什么情况;\n            你可能很难想象，创业团队里面的压力、执行模式其实不亚于传销活动;\n            你可能很难想象，连续三个月从早上九点上班到深夜十二点是什么体验，没有双休，只有无尽的加班，无尽的需求。\n            你可能很难想象, 到了后期，因为缺乏资金，我们甚至基本工资都发不来还在咬牙坚持...\n            因为我们要快速出来产品，因为我们要控制在低成本，\n            就注定了我们团队的规模在前期根本不可能做大;\n            但是在如此高压、高频繁、缺乏人力的催命式工作下，\n            出来的产品如何以高质量、如何以优质的用户体验来面向市场;\n            一个好的产品，不可能是一蹴而就的;\n            没有产品的迭代，做不到产品的优化与升级;\n            没有广大的用户响应，你根本不知道你闭门造车出来的东西是否能满足大众需求;\n            没有长期的运营推广,如何让你的产品众所周知;\n            而没有长期的技术积累，做出来的产品又如何能凌驾于市场之上?\n        ")]),s("p",[A._v('\n            诸如这些，其实都是很浅显的道理，可正是当局者迷。直到后来某天经过药店凑巧去称体重，发现自己整整瘦了20斤，打开手机，照下镜子，啊，这还是我吗？\n            整个人瘦了一圈，憔悴的样子像极了"东亚病夫",肿黑的眼圈堪比大熊猫，整个人看起来像被蒸干了一样。此刻，所有浅显的道理幡然醒悟。\n            所有的饼，哪怕画得再大，也得有命去吃；这并不是正常的、合理的创业方式，这是病态的、畸形的、违背常理与市场的，注定是失败的。\n            翌日，脱离了那个整整折磨了我三个月的深潭。\n        ')]),s("p",[A._v("那个企图以某会员管理系统“统治”所有酒店、餐饮等服务业的发财泡沫梦就此破灭，那个睡梦中的人再一次回到现实，脚踏实地的走好下一步。")])]),s("audio",{attrs:{src:"background.mp3",id:"music"}},[A._v("\n        您的浏览器不支持播放音乐。\n    ")])])},Y=[],L={name:"suffer",data:function(){return{musicIsOpen:!1}},methods:{toggleMusic:function(){var A=document.getElementById("music");this.musicIsOpen?A.pause():A.play(),this.musicIsOpen=!this.musicIsOpen}},mounted:function(){this.$nextTick(function(){var A=document.getElementById("music");A.currentTime=0})}},G=L,J=(s("tWQy"),Object(l["a"])(G,O,Y,!1,null,"70088d0e",null)),V=J.exports,F=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"project"},[s("h5",[A._v("项目经验")]),s("span",{staticStyle:{color:"#999","font-size":"12px",float:"left","margin-top":"10px"}},[A._v("说明: 点击对应的项目可查看详情")]),s("div",{staticClass:"content"},[s("el-collapse",{attrs:{accordion:""}},[s("el-collapse-item",{attrs:{title:"《医数聚》 2018/02 -- 至今",name:"1"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("div",{staticClass:"cox mf"},[A._v("旨在给医生优质的手术辅助设计方案的应用，集医生下单（PC、手机App、小程序下单）、支付(多入口)、上传资料、\n                   客服、财务、分割设计师、手术设计师、生产部门各端的订单流转、审批（pc各端）、订单沟通协商于一体。    \n                ")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责医数聚各端模块的开发与维护；")]),s("p",[A._v("2、负责公共类工具函数的优化封装；")]),s("p",[A._v("3、配合后端开发人员完成功能点；")]),s("p",[A._v("4、较严格的闭环自测")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        如何解决PC端IE8对于vue.js、angular.js、react.js支持性差的问题?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --采用了兼容IE8的mvvm框架avalonjs"),s("a",{attrs:{href:"http://avalonjs.coding.me/",target:"_blank"}},[A._v("链接")])]),A._v("\n                        如何实现小程序订单聊天长列表上拉加载，渲染完成后滚动位置保持原点？\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --页面内定义对于滚动高度的状态管理,在加载前记录滚动位置,渲染完后根据差值精确计算出渲染后的滚动高度,在渲染完成的过程中加loading保证友好体验;\n                        ")]),A._v("\n                        如何在移动端不耗费大量流量情况下，保持订单状态的实时更新?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --前端在不使用定时器轮询、socket长链接时候，基本无法做到实时更新;\n                            最后的解决方案：后端人员配合，对于某些敏感涉及订单状态的接口返回特定的标记码，前端获取到这个码阻断后续的操作，重新去发起请求更新状态。\n                        ")])])])]),s("el-collapse-item",{attrs:{title:"《官网》 2018/01 -- 2018/01",name:"2"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("span",{staticClass:"cox"},[A._v("在短期内（两周）打造一个易于推广SEO,展示内容后台可控的公司官网")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责官网PC客户端的开发；")]),s("p",[A._v("2、负责官网管理后台的开发；")]),s("p",[A._v("3、负责官网后端接口的开发；")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        框架的技术选型:\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            -- 放弃传统nodejs的express + ejs模板渲染方式(jquery实在不是好的体验);\n                        ")]),s("p",{staticClass:"imp"},[A._v("   \n                            -- 采用vuejs服务端渲染比较成熟的框架nuxt.js, \n                               后端技术选型 nodejs + express + sequelize + mysql;\n                        ")]),A._v("\n                        上传的文件如何处理？\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --当时公司的文件服务器尚未搭好，也不想把一些核心的资料托付给第三方平台管理，故当时的处理方案是把流文件存储到upload文件夹并在数据库建立索引集中管理(multer)\n                        ")]),A._v("\n                        对接口的权限处理?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --手写一个路由拦截中间件，对于无需验权的接口直接通过,对于验证接口进行校验token\n                        ")]),s("a",{attrs:{href:"http://www.centermed.com",target:"_blank"}},[A._v("公司官网线上地址")]),s("br"),s("a",{attrs:{href:"http://www.centermed.com/backend/login",target:"_blank"}},[A._v("公司官网后台管理线上地址")])])])]),s("el-collapse-item",{attrs:{title:"《采购平台》 2017/11 -- 2018/01",name:"3"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("span",{staticClass:"cox"},[A._v("一个加了权限控制的医疗器械电商平台")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责采购平台PC客户端的研发")]),s("p",[A._v("2、负责采购平台PC客户端公用组件、公用函数的封装、维护；")]),s("p",[A._v("3、负责采购平台PC客户端用户信息安全的保障；")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        如何做到权限控制?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --平台后台的管理员可以对每个代理商的权限进行操作,数据保存后，在每个代理商登陆后，\n                            客户端根据权限列表展示对应的权限，服务端对每个权限接口对token进行校验。\n                        ")]),A._v("\n                        如何做到同个浏览器只能始终保证一个账户登陆状态?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --用vuex内token与请求返回的token对比,若不一致则返回到登陆页;\n                        ")]),A._v("\n                        如何保证用户信息的安全性?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --有一个优化的点在于,用户登陆后的token有效期设置在20分钟内，在20分钟内如果用户没有进行请求操作，默认为用户已经离开页面，此时会返回到登陆页;\n                        ")]),s("a",{attrs:{href:"http://www.ptyqx.com/web/#/login",target:"_blank"}},[A._v("采购平台线上地址")]),s("br"),s("a",{attrs:{href:"http://www.ptyqx.com/admin/#/login",target:"_blank"}},[A._v("采购平台后台线上地址")])])])]),s("el-collapse-item",{attrs:{title:"《EKP平台-微创新大赛》 2017/05 -- 2017/06",name:"4"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("span",{staticClass:"cox"},[A._v("这是一个给乙方关于汽车创意大赛的项目(极似外包)")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责《微创新大赛》业务模块的梳理；")]),s("p",[A._v("2、负责《微创新大赛》业务模块的开发；")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        如何在一个vue项目优雅地融进wangEditor?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --进入 wangEditor的github地址：cd wangEditor/example/demo/in-vue/,查看src/components/Editor.vue;\n                            (其实当初就应该用基于vue的富文本编辑器插件)\n                        ")])])])]),s("el-collapse-item",{attrs:{title:"《蓝凌云平台-帮助中心》 2017/01 -- 2017/04",name:"5"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("span",{staticClass:"cox"},[A._v("蓝凌云平台上企业用户的意见反馈应用")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责《帮助中心》手机兼容性问题；")]),s("p",[A._v("2、负责《帮助中心》业务模板的编写；")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        如何维护ejs模板库？\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --业务分层,组件分离（其实就是组件的思想）;\n                        ")]),A._v("\n                        首屏长列表的处理?\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --避免请求数据过多，只请求前三条，其他的在更多里面去请求，保证首屏进入速度\n                        ")]),s("p",{staticClass:"imp"},[A._v("\n                            --函数节流处理用户频繁上拉行为\n                        ")])])])]),s("el-collapse-item",{attrs:{title:"《蓝凌云平台-企业邮箱》 2016/07 -- 2016/12",name:"6"}},[s("div",[s("span",{staticClass:"tls"},[A._v("项目概述:")]),s("span",{staticClass:"cox"},[A._v("蓝凌云平台上企业邮箱,收发邮件")])]),s("div",[s("span",{staticClass:"tls"},[A._v("项目职责:")]),s("div",{staticClass:"cox mf"},[s("p",[A._v("1、负责《企业邮箱》手机兼容性问题；")]),s("p",[A._v("2、负责《企业邮箱》业务代码层的封装、解耦、优化；")]),s("p",[A._v("3、负责《企业邮箱》体验流畅性提升;")])])]),s("div",[s("span",{staticClass:"tls"},[A._v("遇到的困难/解决:")]),s("div",{staticClass:"cox mf"},[A._v("\n                        附件的在线预览问题？\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --对.doc/.docx、.txt, .pdf, .xls/.xlsx, .ppt/.pptx等文件类型java后端进行解析,通过jsp渲染方式,渲染好页面，在线预览的链接指定到该链接。\n                        ")]),A._v("\n                        对于webview的手机默认返回键对于应用的控制的干扰？\n                        "),s("p",{staticClass:"imp"},[A._v("\n                            --用一个state的状态库存储路由的跳转与用户的操作状态，进行判断去动态触发阻止默认行为与重定向;\n                        ")])])])])],1)],1)])},z=[],R={name:"project",data:function(){return{}}},M=R,P=(s("egaf"),Object(l["a"])(M,F,z,!1,null,"bbe2f4fe",null)),X=P.exports,Z=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"aboutme"},[s("h5",[A._v("自我介绍")]),s("div",{staticClass:"content"},[s("p",[A._v("很高兴您能来到简陋的小站，也很感谢您宝贵的时间。")]),s("p",{staticClass:"tls"},[A._v("- - 我是谁？")]),s("p",{staticClass:"ctx"},[A._v("一个90后的"),s("el-tag",{attrs:{type:"danger"}},[A._v("技术宅")]),A._v(",\n        集成了程序员\n            "),s("el-tag",{attrs:{type:"warning"}},[A._v("闷骚")]),A._v("、\n            "),s("el-tag",{attrs:{type:"success"}},[A._v("热爱探索")]),A._v("、\n            "),s("el-tag",{attrs:{type:"info"}},[A._v("轻度代码洁癖")]),A._v("、\n            "),s("el-tag",[A._v("单身")]),A._v("\n            等诸多特点一身;\n        ")],1),s("p",{staticClass:"ctx"},[A._v("喜欢天马行空的想象，有主见, 对于一些问题的认知，有独树一帜的看法;")]),s("p",{staticClass:"ctx"},[A._v("喜欢阅读，不管你是文章、小说、传记、言录还是历史、博客、分享,总喜欢从中发掘其中的闪光点，从中学习;")]),s("p",{staticClass:"ctx"},[A._v("喜欢学习新的东西,探索未知的领域，求知欲让我总停不下来;")]),s("p",{staticClass:"ctx"},[A._v("我坚持认为,"),s("el-tag",{attrs:{type:"warning"}},[A._v("菜")]),A._v("是一种常态,从"),s("el-tag",{attrs:{type:"warning"}},[A._v("菜")]),A._v("到"),s("el-tag",[A._v("神")]),A._v("的道路上，汗水不会缺席，困难不会缺席，坚持不会缺席，如果你想变强，成"),s("el-tag",[A._v("神")]),A._v("，\n        那你就要长期付出比他人多几倍的努力并持之以恒。")],1),s("div",{staticClass:"border"}),s("p",{staticClass:"tls"},[A._v("- - 我能做什么？")]),s("p",{staticClass:"ctx"},[A._v("专耕于web前端技术,受任于客户需求之际,奔走于产品、设计、后端、测试之间,尔来有两年矣;")]),s("p",{staticClass:"ctx"},[A._v("追求提升网站性能、优化用户体验,把自己当成用户,把产品优化到自己从各方面觉得最佳为目标;")]),s("p",{staticClass:"ctx"},[A._v("追求最优雅、易懂、易维护、易推广地写代码;")]),s("p",{staticClass:"ctx"},[A._v("追求开发工作融入人工智能的思想,尽可能少用低效的、反复的人工介入,而更多用程序自动化去执行、追求高效、高质量;")]),s("div",{staticClass:"border"}),s("p",{staticClass:"tls"},[A._v("- - 我做得怎么样？")]),s("p",{staticClass:"ctx"},[A._v("实践是检验真理的唯一标准,评价优劣的尺度应该选取业界最优秀的作品来对比。")]),s("p",{staticClass:"ctx"},[A._v("诚然，差距是一定存在的，为什么会有差距？因为我所在的技术的层面局限了我的做法，大型优秀网站有许多大胆的尝试，很多新奇有效的hack做法,\n            开源框架甚至有一些特立独行的做法，这里面很多是值得借鉴的。正是有差距，所以我应该高兴，因为这意味着我还有提升的空间...\n        ")]),s("p",{staticClass:"tls"},[A._v("- - 我的择业原则？")]),s("p",{staticClass:"ctx"},[A._v("拒绝外包、外派性质工作，不喜欢出差奔波。")])])])},$=[],AA={name:"aboutme",data:function(){return{}}},tA=AA,sA=(s("YYCc"),Object(l["a"])(tA,Z,$,!1,null,"32b27328",null)),aA=sA.exports,nA={key:"888888"},iA={name:"resume",data:function(){return{hotIndex:0,height:625}},methods:{linkTo:function(A,t){this.hotIndex=+A;var s=this.$route.query;s&&Object.keys(s).length>0&&this.$router.push({path:t,query:s})},download:function(){var A=document.createElement("a");A.href="resume.rar",A.download="简历.rar",document.body.append(A),A.click(),document.body.removeChild(A)}},components:{Brief:g,Technology:S,Job:B,Work:H,Suffer:V,Project:X,AboutMe:aA},mounted:function(){var A=this;console.log(1111),this.$nextTick(function(){A.height=document.documentElement.clientHeight-160,console.log(A.height)});var t=this.$route.path;switch(t){case"/main":this.hotIndex=0;break;case"/main/brief":this.hotIndex=0;break;case"/main/technology":this.hotIndex=1;break;case"/main/job":this.hotIndex=2;break;case"/main/working":this.hotIndex=3;break;case"/main/suffer":this.hotIndex=4;break;case"/main/project":this.hotIndex=5;break;case"/main/aboutme":this.hotIndex=6;break;default:this.$router.push({path:"/"})}var s=this.$route.query;s&&s.code===nA.key?console.log("校验成功"):this.$router.replace({path:"/"})}},eA=iA,cA=(s("H3cv"),s("GtZ9"),Object(l["a"])(eA,m,d,!1,null,"1d1034c4",null)),lA=cA.exports,oA=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"code"},[s("div",{staticClass:"wrapper"},[A._v("\n        该网站内容涉及到隐私信息, 请输入授权码确认\n        "),s("el-input",{on:{keyup:function(t){return"button"in t||!A._k(t.keyCode,"enter",13,t.key,"Enter")?A.commit(t):null}},model:{value:A.code,callback:function(t){A.code=t},expression:"code"}}),s("div",{staticStyle:{"text-align":"right"}},[s("el-button",{attrs:{type:"primary"},on:{click:A.commit}},[A._v("校验")])],1)],1)])},pA=[],vA={name:"codes",data:function(){return{code:""}},methods:{commit:function(){this.code===nA.key?this.$router.replace({path:"/main?code="+this.code}):this.$message.error("请输入正确的授权码")}}},rA=vA,uA=(s("xJuZ"),Object(l["a"])(rA,oA,pA,!1,null,"076a7497",null)),mA=uA.exports;a["default"].use(u["a"]);var dA=new u["a"]({mode:"hash",routes:[{path:"/",component:mA},{path:"/main",redirect:"/main/brief",component:lA,children:[{path:"brief",component:g},{path:"technology",component:S},{path:"aboutme",component:aA},{path:"job",component:B},{path:"working",component:H},{path:"project",component:X},{path:"suffer",component:V}]}]}),CA=dA;s("vjVy");a["default"].use(r.a),a["default"].config.productionTip=!1,new a["default"]({render:function(A){return A(p)},router:CA}).$mount("#app")},WCnj:function(A,t,s){},"XSf/":function(A,t,s){},YYCc:function(A,t,s){"use strict";var a=s("HcDZ"),n=s.n(a);n.a},ZL7j:function(A,t,s){"use strict";var a=s("EGO0"),n=s.n(a);n.a},bwEt:function(A,t,s){"use strict";var a=s("XSf/"),n=s.n(a);n.a},egaf:function(A,t,s){"use strict";var a=s("xL8g"),n=s.n(a);n.a},"el+H":function(A,t,s){},eohg:function(A,t){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr//gN2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"},qg9K:function(A,t,s){"use strict";var a=s("WCnj"),n=s.n(a);n.a},qoG8:function(A,t,s){},tWQy:function(A,t,s){"use strict";var a=s("2UfU"),n=s.n(a);n.a},vjVy:function(A,t,s){},wIRq:function(A,t,s){},xJuZ:function(A,t,s){"use strict";var a=s("6wjO"),n=s.n(a);n.a},xL8g:function(A,t,s){}});
//# sourceMappingURL=app.c70a0998.js.map