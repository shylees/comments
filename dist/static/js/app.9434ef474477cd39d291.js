webpackJsonp([0],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),r={name:"TextArea",data:function(){return{user:""}},methods:{addComment:function(){var e=this.$refs.addCommentArea.value.trim();if(""!=e){var t={content:e,time:(new Date).getTime(),user:this.user,triangle:"up",reply:!1,children:[]};this.$emit("onAddComment",t),this.$refs.addCommentArea.value=""}}},mounted:function(){this.user="shylees"}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"textarea"},[t("div",{staticClass:"area"},[t("textarea",{ref:"addCommentArea",staticClass:"addCommentArea",attrs:{cols:"50",rows:"8"}})]),this._v(" "),t("div",{staticClass:"btn"},[t("input",{attrs:{type:"button",value:"add Comment"},on:{click:this.addComment}})])])},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(e){n("Vigb")},"data-v-bf61a7a4",null).exports,o=n("mvHQ"),l=n.n(o),c={name:"Children",props:["childrenComments"],data:function(){return{user:""}},methods:{setStorage:function(){localStorage.setItem("comments",l()(this.comments))},getTimeToNow:function(e){var t=new Date(new Date-new Date(e));return t.getFullYear()-1970!=0?t.getFullYear()-1970+" years":0!=t.getMonth()?t.getMonth()+" months":t.getDate()-1!=0?t.getDate()+" days":t.getHours()-8!=0?t.getHours()-8+" hours":0!=t.getMinutes()?t.getMinutes()+" minutes":0!=t.getSeconds()?t.getSeconds()+" Seconds":"0 Seconds"},fold:function(e){return"up"==e?"down":"up"},reply:function(e){return!e},addReply:function(e){console.log(this.$refs.editReply);var t=this.$refs.editReply[0].value.trim();if(console.log(t),t){var n={content:t,time:(new Date).getTime(),user:this.user,triangle:"up",reply:!1,children:[]};n.id=e.children.length,e.children.unshift(n),this.$refs.editReply[0].value="",e.reply=!1,this.$emit("addReply")}}},mounted:function(){this.user=localStorage.getItem("commentUser")}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"item"},e._l(e.childrenComments,function(t){return n("li",{key:t.id,staticClass:"comments-item"},[n("p",{staticClass:"message"},[n("span",[e._v(e._s(t.user))]),e._v(" "),n("span",[e._v(e._s(e.getTimeToNow(t.time))+" ago ")]),e._v(" "),n("span",{ref:"foldBtn",refInFor:!0,staticClass:"foldBtn",on:{click:function(n){t.triangle=e.fold(t.triangle)}}},[e._v("\n\t\t\t\t["+e._s("up"===t.triangle?"-":"+")+"]\n\t\t\t")])]),e._v(" "),n("div",{staticClass:"content"},[e._v(e._s(t.content))]),e._v(" "),n("a",{staticClass:"reply",on:{click:function(n){t.reply=e.reply(t.reply)}}},[e._v("\n\t\t\t"+e._s(t.reply?"close":"reply")+"\n\t\t")]),e._v(" "),t.reply?n("div",[n("textarea",{ref:"editReply",refInFor:!0,staticClass:"editReply",attrs:{rows:"2",cols:"40"}}),e._v(" "),n("input",{staticClass:"btnReply",attrs:{type:"button",value:"add reply"},on:{click:function(n){return e.addReply(t)}}})]):e._e(),e._v(" "),t.children.length>0?n("div",{directives:[{name:"show",rawName:"v-show",value:"up"==t.triangle,expression:"item.triangle == 'up'"}],staticClass:"children"},[n("Children",{attrs:{childrenComments:t.children}})],1):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length>0&&"up"!=t.triangle,expression:"item.children.length > 0 && item.triangle != 'up'"}]},[e._v("...")])])}),0)},staticRenderFns:[]};var d=n("VU/8")(c,m,!1,function(e){n("vSE6"),n("uaTV")},"data-v-62af64e6",null).exports,u={components:{Children:d},name:"Comment",component:{Children:d},data:function(){return{comments:[],newCom:{}}},methods:{addReply:function(){localStorage.setItem("comments",l()(this.comments))},addCom:function(e){e.id=this.comments.length+1,this.comments.unshift(e),this.addReply()}},mounted:function(){var e=localStorage.getItem("comments"),t=localStorage.getItem("commentUser");e&&(this.comments=JSON.parse(e)),t?this.user=t:(this.user="defaultUser",localStorage.setItem("commentUser",this.user))}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment"},[e.comments.length>0?n("div",{staticClass:"commentsArea"},[n("Children",{attrs:{childrenComments:e.comments},on:{addReply:e.addReply}})],1):e._e(),e._v(" "),0==e.comments.length?n("div",[e._v("没有评论哦~")]):e._e()])},staticRenderFns:[]};var f={name:"Index",components:{TextArea:i,Comment:n("VU/8")(u,h,!1,function(e){n("ZWRp"),n("h0lq")},"data-v-507f2bb0",null).exports},data:function(){return{}},methods:{onAddComment:function(e){this.$refs.comment.addCom(e)}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"index"},[t("TextArea",{on:{onAddComment:this.onAddComment}}),this._v(" "),t("Comment",{ref:"comment"})],1)},staticRenderFns:[]};var v={name:"App",components:{Index:n("VU/8")(f,p,!1,function(e){n("hj58")},"data-v-1b34f713",null).exports}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Index")],1)},staticRenderFns:[]};var C=n("VU/8")(v,g,!1,function(e){n("X58T")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",render:function(e){return e(C)}})},Vigb:function(e,t){},X58T:function(e,t){},ZWRp:function(e,t){},h0lq:function(e,t){},hj58:function(e,t){},uaTV:function(e,t){},vSE6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9434ef474477cd39d291.js.map