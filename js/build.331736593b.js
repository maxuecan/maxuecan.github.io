"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[451],{529:function(e,t,c){c.d(t,{Z:function(){return o}});class o{constructor(e){this.type=e.type,this.o_val=e.o_val}initEvent(){$(".create-project-close").on("click",this.close.bind(this)),$(".create-project-cancle").on("click",this.close.bind(this)),$(".create-project-confirm").on("click",this.confirm.bind(this))}removeEvent(){$(".create-project-close").off("click",this.close),$(".create-project-cancle").off("click",this.close),$(".create-project-confirm").off("click",this.confirm)}close(){this.removeEvent(),$(".create-project").remove(),this.type="",this.o_val=""}confirm(){let e=$(".create-project-input").val(),t="create"===this.type?"createProject":"updateProject",c="create"===this.type?{name:e}:{new_name:e,old_name:this.o_val};Channel.websocket.ws.send(JSON.stringify({uuid:Channel.websocket.uuid,action:t,params:c})),this.close()}setDefaultValue(e){this.type=e.type,this.o_val=e.o_val}render(){return'\n        <div class="create-project">\n            <div class="create-project-container">\n                <div class="com-header create-project-header">\n                    <h4 class="create-project-name"></h4>\n                    <div class="com-close create-project-close"></div>\n                </div>\n                <div class="create-project-content">\n                    <span>项目名称:</span>\n                    <input type="text" class="create-project-input">\n                </div>\n                <div class="com-footer create-project-footer">\n                    <button class="com-device-footer-btn create-project-cancle">取消</button>\n                    <button class="com-device-footer-btn create-project-confirm">确定</button>\n                </div>\n            </div>\n        </div>\n        '}}}},function(e){var t;t=529,e(e.s=t)}]);