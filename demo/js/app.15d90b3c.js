(function(e){function t(t){for(var r,i,a=t[0],u=t[1],c=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,a=1;a<s.length;a++){var u=s[a];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"2d49":function(e,t,s){"use strict";s("e6e3")},"56d7":function(e,t,s){"use strict";s.r(t);s("139e"),s("fae9"),s("3ff7"),s("d6dc");var r=s("a593"),n=s("e1fd"),o=s.n(n),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[s("router-view")],1)},a=[],u={components:{},data:function(){return{}},methods:{}},c=u,l=s("c701"),d=Object(l["a"])(c,i,a,!1,null,"b3c4ecce",null),p=d.exports,h=s("a81e"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{"margin-top":"20px"}},[s("el-dialog",{attrs:{visible:e.showInfo,title:"输入信息"},on:{"update:visible":function(t){e.showInfo=t}}},[s("p",[e._v("用户名")]),s("el-input",{model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),s("div",[s("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary"},on:{click:e.joinRoom}},[e._v("加入")])],1)],1),s("div",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[s("el-select",{on:{focus:e.listRoomUsers},model:{value:e.currentUser,callback:function(t){e.currentUser=t},expression:"currentUser"}},e._l(e.userList,(function(e,t){return s("el-option",{key:t,attrs:{value:e.userId,label:e.userId}})})),1),s("el-button",{attrs:{type:"primary"},on:{click:e.changeView}},[e._v("选择用户推流")]),s("el-button",{on:{click:e.stopView}},[e._v("停止推流")])],1)],1),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showInfo=!0}}},[e._v("加入房间")]),s("el-dropdown",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"click",placement:"bottom-start"},on:{"visible-change":e.listRoomUsers}},[s("el-badge",{staticClass:"item",attrs:{value:e.newMessages.length,hidden:0==e.newMessages.length}},[s("el-button",{attrs:{type:"primary"}},[e._v(" 聊天"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.userList,(function(t,r){return s("el-dropdown-item",{key:r},[s("el-badge",{staticClass:"item",attrs:{value:e.computeNum(t.userId),hidden:e.computeHidden(t.userId)}},[s("div",{staticStyle:{width:"80px",height:"50px","line-height":"50px"},on:{click:function(s){return e.initChat(t.userId)}}},[e._v(e._s(t.userId))])])],1)})),1)],1),s("el-dialog",{attrs:{visible:e.showChat},on:{"update:visible":function(t){e.showChat=t},close:e.removeMessage}},[s("div",{staticClass:"chatBlock"},e._l(e.chatMessage,(function(t,r){return s("div",{key:r,staticStyle:{height:"50px","line-height":"50px","margin-top":"10px"}},[s("div",{class:t.userId==e.userId?"right":"left"},[s("span",{staticStyle:{background:"rgba(64,158,255,0.3)","border-radius":"20px",padding:"10px 16px"}},[e._v(e._s(t.data))])])])})),0),s("div",[s("el-input",{staticStyle:{width:"80%"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("发送")])],1)]),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users"},[s("p",[e._v("本地视频")]),s("div",{staticStyle:{width:"500px"},attrs:{id:"localvideo"}}),s("p",[e._v("会议内容")]),s("div",{attrs:{id:"remote"}},[s("div",{staticStyle:{width:"50%"},attrs:{id:"mobile"}}),s("div",{staticStyle:{width:"50%"},attrs:{id:"ppt"}})])])}],m=(s("cb3c"),s("72b3"),s("402f"),s("270f"),s("1377")),g=(s("6a61"),s("2e91")),b=s("0c68"),I=s("82ae"),w=s.n(I),y=w.a.create({baseURL:"./index.php",timeout:5e3}),M=y;function x(){return M.post("./index.php",{function:"listActiveRooms"})}function k(e,t,s){return M.post("./index.php",{function:"createRoomToken",room:e,userId:t,type:s})}function S(e){return M.post("./index.php",{function:"listRoomUsers",room:e})}var U=new b["StreamModeSession"];console.log("current version is",b["version"]);var _={data:function(){return{audioDevice:"",videoDevice:"",audioDevices:[],videoDevices:[],roomToken:"",userList:[],currentUser:"",lastUser:"",showInfo:!1,showToken:!1,room:"",userId:"",userToken:"",room_list:[],type:"",currentRoom:"",message:"",toUserId:"",showChat:!1,chatMessage:[],allMessages:{},newMessages:[]}},mounted:function(){var e=this;this.listActiveRooms(),b["deviceManager"].deviceInfo&&this.addDeviceToSelect(b["deviceManager"].deviceInfo),b["deviceManager"].on("device-update",(function(t){e.addDeviceToSelect(t)}))},methods:{addDeviceToSelect:function(e){var t=[],s=[];e.forEach((function(e){"audioinput"===e.kind?t.push(e):"videoinput"===e.kind&&s.push(e)})),this.audioDevices=t,this.videoDevices=s},joinRoom:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,r,n,o,i,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showInfo=!1,t.next=3,e.createRoomToken();case 3:return s=t.sent,t.prev=4,t.next=7,U.joinRoomWithToken(s);case 7:r=t.sent,n=Object(m["a"])(r);try{for(n.s();!(o=n.n()).done;)i=o.value,i.userId!==U.userId&&i.published&&("mobile"==i.userId?e.subscribeUser(i.userId,"mobile"):"ppt"==i.userId?e.subscribeUser(i.userId,"ppt"):(a=document.createElement("div"),a.setAttribute("id",i.userId),a.style.width="300px",a.style.height="200px",u=document.getElementById("remote"),u.appendChild(a),e.subscribeUser(i.userId,i.userId)))}catch(c){n.e(c)}finally{n.f()}t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](4),console.error(t.t0),alert("加入房间失败！ErrorCode: ".concat(t.t0.code||"")),t.abrupt("return");case 17:return U.on("user-publish",(function(t){if("mobile"==t.userId)e.subscribeUser(t.userId,"mobile");else if("ppt"==t.userId)e.subscribeUser(t.userId,"ppt");else{var s=document.createElement("div");s.setAttribute("id",t.userId),s.style.width="640px",s.style.height="500px";var r=document.getElementById("remote");r.appendChild(s),e.subscribeUser(t.userId,t.userId)}})),U.on("messages-received",(function(t){if(console.log("我收到了消息"),console.log(t),void 0!==e.allMessages[t[0].userId]){var s=e.allMessages[t[0].userId];s.push(t[0]),e.allMessages[t[0].userId]=s}else{e.allMessages[t[0].userId]=[];var r=e.allMessages[t[0].userId];r.push(t[0]),e.allMessages[t[0].userId]=r}if(e.updateMessage(),t[0].userId==e.toUserId&&1==e.showChat);else{var n=e.newMessages;n.push(t[0]),e.newMessages=n}})),U.on("user-join",(function(t){e.$message({message:t.userId+"加入了房间~",type:"success"})})),t.next=22,e.publishScreen(U);case 22:case"end":return t.stop()}}),t,null,[[4,12]])})))()},updateMessage:function(){this.chatMessage=this.allMessages[this.toUserId]},publishScreen:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b["deviceManager"].getLocalStream({screen:{enabled:!0,source:"window",bitrate:600,height:1080,width:1920},audio:{enabled:!1}});case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e["catch"](0),console.error(e.t0),alert("采集失败，请检查您的设备。ErrorCode: ".concat(e.t0.code)),e.abrupt("return");case 11:return s=document.getElementById("localvideo"),t.play(s,!0),e.prev=13,e.next=16,U.publish(t);case 16:e.next=22;break;case 18:e.prev=18,e.t1=e["catch"](13),console.error(e.t1),alert("发布失败，ErrorCode: ".concat(e.t1.code));case 22:case"end":return e.stop()}}),e,null,[[0,6],[13,18]])})))()},publish:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b["deviceManager"].getLocalStream({video:{enabled:!0,deviceId:e.videoDevice,bitrate:1e3,height:1080,width:1920},audio:{enabled:!0,deviceId:e.audioDevice}});case 3:s=t.sent,t.next=11;break;case 6:return t.prev=6,t.t0=t["catch"](0),console.error(t.t0),alert("采集失败，请检查您的设备。ErrorCode: ".concat(t.t0.code)),t.abrupt("return");case 11:return r=document.getElementById("localvideo"),s.play(r,!0),t.prev=13,t.next=16,U.publish(s);case 16:t.next=22;break;case 18:t.prev=18,t.t1=t["catch"](13),console.error(t.t1),alert("发布失败，ErrorCode: ".concat(t.t1.code));case 22:case"end":return t.stop()}}),t,null,[[0,6],[13,18]])})))()},subscribeUser:function(e,t){var s=document.getElementById(t);U.subscribe(e).then((function(e){e.play(s)}))},listActiveRooms:function(){var e=this;x().then((function(t){e.room_list=t.data.rooms}))},createRoomToken:function(){var e=this;return new Promise((function(t,s){e.room="test",k(e.room,e.userId,"user").then((function(e){t(e.data.data)}))}))},listRoomUsers:function(e){var t=this;e&&""!==this.room&&S("test").then((function(e){t.userList=e.data.users}))},changeView:function(){var e,t=Object(m["a"])(this.userList);try{for(t.s();!(e=t.n()).done;){var s=e.value;s.userId==this.currentUser?U.setMergeStreamLayout(this.currentUser,{x:0,y:0,w:1920,h:1080,hidden:!1,muted:!1}):U.setMergeStreamLayout(s.userId,{x:0,y:0,w:0,h:0,hidden:!1,muted:!1})}}catch(r){t.e(r)}finally{t.f()}},stopView:function(){U.stopMergeStream()},initChat:function(e){var t=this;this.toUserId=e,this.message="",this.showChat=!0,console.log(this.allMessages),this.allMessages[e]?this.chatMessage=this.allMessages[e]:this.chatMessage=[];var s=this.newMessages.filter((function(e){return e.userId!==t.toUserId}));this.newMessages=s},sendMessage:function(){U.sendCustomMessage(this.message,[this.toUserId]);var e={data:this.message,type:"normal",userId:this.userId};if(this.allMessages[this.toUserId]){var t=this.allMessages[this.toUserId];t.push(e),this.allMessages[this.toUserId]=t}else{this.allMessages[this.toUserId]=[];var s=this.allMessages[this.toUserId];s.push(e),this.allMessages[this.toUserId]=s}this.updateMessage()},removeMessage:function(){this.chatMessage=[]},computeNum:function(e){var t=[];return t=this.newMessages.filter((function(t){return t.userId==e})),t.length},computeHidden:function(e){var t=[];return t=this.newMessages.filter((function(t){return t.userId==e})),0==t.length}}},j=_,R=(s("2d49"),Object(l["a"])(j,v,f,!1,null,null,null)),C=R.exports;r["default"].use(h["a"]);var O=h["a"].prototype.push;h["a"].prototype.push=function(e){return O.call(this,e).catch((function(e){return e}))};var E=new h["a"]({routes:[{path:"/",component:C}]}),T=E,D=(s("f56d"),s("9f35"),s("cf6b")),L=s("6ff8");r["default"].use(D["a"]);var P=new D["a"].Store({state:{},mutations:{},plugins:[Object(L["a"])()]}),B=P;r["default"].config.productionTip=!1,r["default"].use(o.a),new r["default"]({router:T,store:B,render:function(e){return e(p)}}).$mount("#app")},e6e3:function(e,t,s){}});
//# sourceMappingURL=app.15d90b3c.js.map