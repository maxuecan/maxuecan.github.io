(self.webpackChunkui=self.webpackChunkui||[]).push([[278,981],{23:function(e,i,t){"use strict";t.d(i,{Z:function(){return s}});var c=t(354);class s{constructor(){this.type="device",this.active=-1,this.list=c.PRO_CONFIG,this.online_list=[],this.use_list=[]}initEvent(){$(".device-close").on("click",this.close.bind(this)),$(".device-nav").on("click",this.nav.bind(this)),$(".device-list").on("click",this.deviceList.bind(this)),$(".device-start").on("click",this.start.bind(this)),$(".device-connect").on("click",this.connect.bind(this)),$(".device-confirm").on("click",this.comfirm.bind(this)),this.createDeviceContent()}removeEvent(){$(".device-close").off("click",this.close),$(".device-nav").off("click",this.nav),$(".device-list").off("click",this.deviceList),$(".device-start").off("click",this.start),$(".device-connect").off("click",this.connect),$(".device-confirm").off("click",this.comfirm)}close(){this.removeEvent(),$(".device-dialog").remove(),$(".com-mask").css("display","none"),this.type="device",this.active=-1}nav(e){let i=e.target.getAttribute("key");if(!i||this.type===i)return!1;this.type=i,this.createDeviceContent()}deviceList(e){let i=e.target.getAttribute("key");if(null===i)return!1;-1!==this.active&&($(".device-list").children()[this.active].className=""),$(".device-list").children()[+i].className=+i===this.active?"":"device-list-act",this.active=+i===this.active?-1:+i,$(".device-footer").css("display",-1!==this.active?"block":"none")}comfirm(){$(".device-dialog").css("display","none"),Channel.NODE_EVENT_EMITTER.emit("show-search-device-dialog",this.list[this.active])}start(){}connect(){}createDeviceContent(){this.resetDeviceDom();let e="device"===this.type?this.list:this.online_list;for(let i in e){let t=$("<li>").attr("key",i),c=$("<div>").addClass("device-icon").attr("key",i),s=$("<div>").text(e[i].name).attr("key",i);$(".device-list").append(t.append(c).append(s))}for(let e in this.use_list){let i=$("<li>"),t=$("<div>").addClass("device-use-icon"),c=$("<div>").text(this.use_list[e].url.substring(5,this.use_list[e].url.length-1));$(".device-use-content").append(i.append(t).append(c))}}resetDeviceDom(){let e=this.type,i=this.active;$(".device-list").empty(),$(".device-use-content").empty(),$(".device-nav").children()[0].className="device"===e?"device-nav-act":"",$(".icon-device")[0].className="device"===e?"icon-device":"icon-device icon-device-not-act",$(".device-confirm").css("display","device"===e?"inline-block":"none"),$(".device-start").css("display","pc"===e?"inline-block":"none"),$(".device-connect").css("display","pc"===e?"inline-block":"none"),$(".device-footer").css("display",-1!==i?"block":"none")}setUseList(e){this.use_list=e}render(){return'\n        <div class="com-dialog device-dialog">\n            <div class="com-header device-header">\n                <h4>选择设备</h4>\n                <ul class="device-nav">\n                    <li class="device-nav-act" key="device">\n                        <div class="icon-device" key="device"></div>\n                        <span key="device">选择设备</span>\n                    </li>\n                    \x3c!-- <li key="pc">\n                        <div class="icon-pc" key="pc"></div>\n                        <span key="pc">联机实验</span>\n                    </li> --\x3e\n                </ul>\n                <div class="com-close device-close"></div>\n            </div>\n            <div class="device-content">\n                <ul class="device-list"></ul>\n                <div class="device-use">\n                    <div>已选择设备</div>\n                    <ul class="device-use-content"></ul>\n                </div>\n            </div>\n            <div class="com-footer device-footer">\n                <button class="com-device-footer-btn device-confirm">确定</button>\n                <button class="com-device-footer-btn device-start">直接开始</button>\n                <button class="com-device-footer-btn device-connect">连接主控</button>\n            </div>\n        </div>\n        '}}},354:function(e){e.exports={PRO_CONFIG:[{name:"飞腾派",fun:"websocket",network:"192.168.180",port:9001,type:"system-cat",xml:"ESP32basic"},{name:"ESP32-BASIC",fun:"websocket",network:"192.168.1",port:8266,type:"firmware-esp32",xml:"ESP32basic"},{name:"ESP32",fun:"websocket",network:"192.168.1",port:8266,type:"firmware-esp32",xml:"ESP32"}],DEV_CONFIG:[{name:"飞腾派",fun:"websocket",network:"192.168.1",port:9001,type:"system-cat",xml:"ESP32basic"},{name:"ESP32-BASIC",fun:"websocket",network:"192.168.1",port:8266,type:"firmware-esp32",xml:"ESP32basic"},{name:"ESP32",fun:"websocket",network:"192.168.1",port:8266,type:"firmware-esp32",xml:"ESP32"}]}}},function(e){var i;i=23,e(e.s=i)}]);