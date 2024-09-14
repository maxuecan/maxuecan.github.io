Blockly.Blocks.none={init:function(){this.setColour(65),this.appendDummyInput().appendField("None"),this.setOutput(!0),this.setTooltip("")}},Blockly.Python.none=function(e){return["None",Blockly.Python.ORDER_NONE]},Blockly.Blocks.tostr={init:function(){this.setColour(65),this.appendValueInput("input").appendField("to String"),this.setOutput(!0,"String"),this.setTooltip("")}},Blockly.Python.tostr=function(e){return["str("+Blockly.Python.valueToCode(e,"input",Blockly.Python.ORDER_ATOMIC)+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.copy={init:function(){this.setColour(45),this.appendValueInput("image").setCheck("image").appendField("copy"),this.setOutput(!0,"image"),this.setInputsInline(!0),this.setTooltip("")}},Blockly.Python.copy=function(e){return[Blockly.Python.valueToCode(e,"image",Blockly.Python.ORDER_ATOMIC)+".copy()",Blockly.Python.ORDER_NONE]},Blockly.Blocks.convertTo={init:function(){this.setColour(45),this.appendValueInput("input").setCheck("image").appendField("convertTo"),this.appendDummyInput().appendField(new Blockly.FieldDropdown([["float","np.float32"],["uchar","np.uint8"],["int","np.int32"]]),"flag"),this.setOutput(!0,"image"),this.setInputsInline(!0),this.setTooltip("")}},Blockly.Python.convertTo=function(e){return["np.asarray("+Blockly.Python.valueToCode(e,"input",Blockly.Python.ORDER_ATOMIC)+", dtype="+e.getFieldValue("flag")+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.roi={init:function(){this.setColour(45),this.appendValueInput("input").setCheck("image"),this.appendDummyInput().appendField("roi").appendField("y").appendField(new Blockly.FieldTextInput(""),"y0").appendField(":").appendField(new Blockly.FieldTextInput(""),"y1").appendField("x").appendField(new Blockly.FieldTextInput(""),"x0").appendField(":").appendField(new Blockly.FieldTextInput(""),"x1"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("")}},Blockly.Python.roi=function(e){return[Blockly.Python.valueToCode(e,"input",Blockly.Python.ORDER_ATOMIC)+"["+e.getFieldValue("y0")+":"+e.getFieldValue("y1")+","+e.getFieldValue("x0")+":"+e.getFieldValue("x1")+"]",Blockly.Python.ORDER_NONE]},Blockly.Blocks.indexed={init:function(){this.setColour(45),this.appendDummyInput().appendField("indexed"),this.appendValueInput("input").setCheck("image"),this.appendValueInput("index").appendField("index"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("")}},Blockly.Python.indexed=function(e){var t=Blockly.Python.valueToCode(e,"index",Blockly.Python.ORDER_ATOMIC);return[Blockly.Python.valueToCode(e,"input",Blockly.Python.ORDER_ATOMIC)+"["+t+"]",Blockly.Python.ORDER_NONE]},Blockly.Blocks.lists_append={init:function(){this.setColour(45),this.appendDummyInput().appendField("append"),this.appendValueInput("list"),this.appendValueInput("item").appendField("item"),this.setInputsInline(!0),this.setTooltip("append items to a list"),this.setPreviousStatement(!0),this.setNextStatement(!0)}},Blockly.Python.lists_append=function(e){return Blockly.Python.valueToCode(e,"list",Blockly.Python.ORDER_ATOMIC)+".append("+Blockly.Python.valueToCode(e,"item",Blockly.Python.ORDER_ATOMIC)+")\n"},Blockly.Blocks.imgsize={init:function(){this.setColour(45),this.appendDummyInput().appendField("imgsize"),this.appendValueInput("image"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("")}},Blockly.Python.imgsize=function(e){return["np.shape("+Blockly.Python.valueToCode(e,"image",Blockly.Python.ORDER_ATOMIC)+")[:2]",Blockly.Python.ORDER_NONE]},Blockly.Blocks.load={init:function(){this.setColour(45),this.appendDummyInput().appendField("load").appendField(new Blockly.FieldVariable("image"),"image").appendField(new Blockly.FieldTextInput("media/lena.jpg"),"filename").appendField("gray").appendField(new Blockly.FieldCheckbox("FALSE"),"grey"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")},getVars:function(){return[this.getFieldValue("image")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("image"))&&this.setFieldValue(t,"image")}},Blockly.Python.load=function(e){return e.getFieldValue("image")+" = cv2.imread('"+e.getFieldValue("filename")+"',"+("TRUE"==e.getFieldValue("grey")?0:1)+")\n"},Blockly.Blocks.imshow={init:function(){this.setColour(45),this.appendDummyInput().appendField("imshow").appendField(new Blockly.FieldVariable("mywin"),"windowname"),this.appendValueInput("image").setCheck("image"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Python.imshow=function(e){var t=Blockly.Python.valueToCode(e,"image",Blockly.Python.ORDER_ATOMIC);return"cv2.imshow('"+e.getFieldValue("windowname")+"',"+t+")\r\n"},Blockly.Blocks.waitkey={init:function(){this.setColour(45),this.setInputsInline(!0),this.appendDummyInput().appendField("waitKey"),this.appendDummyInput().appendField("millis").appendField(new Blockly.FieldTextInput("0"),"millis"),this.appendDummyInput().appendField("key").appendField(new Blockly.FieldTextInput("27"),"key"),this.appendStatementInput("statement"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Python.waitkey=function(e){return"if cv2.waitKey("+e.getFieldValue("millis")+")&0xff == "+e.getFieldValue("key")+":\n"+(Blockly.Python.statementToCode(e,"statement")||"  pass\n")},Blockly.Blocks.onmouse={init:function(){this.setColour(45),this.setInputsInline(!0),this.appendDummyInput().appendField("onmouse").appendField(new Blockly.FieldVariable("mywin"),"windowname").appendField(new Blockly.FieldVariable("button"),"button").appendField(new Blockly.FieldVariable("x"),"x").appendField(new Blockly.FieldVariable("y"),"y").appendField(new Blockly.FieldVariable("state"),"state"),this.appendStatementInput("statement"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")},getVars:function(){return[this.getFieldValue("windowname"),this.getFieldValue("button"),this.getFieldValue("x"),this.getFieldValue("y"),this.getFieldValue("state")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("windowname"))&&this.setFieldValue(t,"windowname"),Blockly.Names.equals(e,this.getFieldValue("button"))&&this.setFieldValue(t,"button"),Blockly.Names.equals(e,this.getFieldValue("x"))&&this.setFieldValue(t,"x"),Blockly.Names.equals(e,this.getFieldValue("y"))&&this.setFieldValue(t,"y"),Blockly.Names.equals(e,this.getFieldValue("state"))&&this.setFieldValue(t,"state")}},Blockly.Python.onmouse=function(e){var t=e.getFieldValue("windowname");e.getFieldValue("key");return"def onmouse(button, x, y, state, param):\n"+(Blockly.Python.statementToCode(e,"statement")||"  pass\n")+"\ncv2.setMouseCallback('"+t+"', onmouse)\n"},Blockly.Blocks.cascade={init:function(){this.setColour(290),this.appendDummyInput().appendField("create").appendField(new Blockly.FieldVariable("cascade"),"cascade").appendField(new Blockly.FieldTextInput("opencv/data/haarcascades/haarcascade_frontalface_alt2.xml"),"xmlfile"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")},getVars:function(){return[this.getFieldValue("cascade")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("cascade"))&&this.setFieldValue(t,"cascade")}},Blockly.Python.cascade=function(e){var t=e.getFieldValue("xmlfile"),l=e.getFieldValue("cascade");return l+" = cv2.CascadeClassifier('"+t+"')\nif "+l+'.empty(): raise Exception("your cascade is empty. are you sure, the path is correct ?")\n'},Blockly.Blocks.findobjects={init:function(){this.setColour(290),this.appendDummyInput().appendField("detect").appendField(new Blockly.FieldVariable("cascade"),"cascade"),this.appendValueInput("image").setCheck("image"),this.setOutput(!0),this.setTooltip("find objects in an image and return a list of rects.\nto draw them, you will need the tl and br items")},getVars:function(){return[this.getFieldValue("cascade")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("cascade"))&&this.setFieldValue(t,"cascade")}},Blockly.Python.findobjects=function(e){var t=Blockly.Python.valueToCode(e,"image",Blockly.Python.ORDER_ATOMIC);e.getFieldValue("cascade");return["cascade.detectMultiScale("+t+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.videocapture={init:function(){this.setColour(135),this.appendDummyInput().appendField("VideoCapture").appendField(new Blockly.FieldTextInput("0"),"input").appendField(new Blockly.FieldVariable("img"),"img"),this.appendStatementInput("statements").setCheck("image"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")},getVars:function(){return[this.getFieldValue("img")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("img"))&&this.setFieldValue(t,"img")}},Blockly.Python.videocapture=function(e){var t=e.getFieldValue("input"),l=Blockly.Python.statementToCode(e,"statements");return"cap=cv2.VideoCapture("+t+')\nif not cap.isOpened(): raise Exception("your input:'+t+' could not be opened !")\nwhile cap.isOpened():\n  r,'+e.getFieldValue("img")+"=cap.read()\n  if r==False: break\n"+l},Blockly.Blocks.VideoWriter_VideoWriter={init:function(){this.setColour(22),this.appendDummyInput().appendField("VideoWriter").appendField(new Blockly.FieldVariable("writer"),"writer"),this.appendDummyInput().appendField("filename").appendField(new Blockly.FieldTextInput("my.asf"),"filename"),this.appendDummyInput().appendField("fourcc").appendField(new Blockly.FieldTextInput("XVID"),"fourcc"),this.appendDummyInput().appendField("fps").appendField(new Blockly.FieldTextInput("24"),"fps"),this.appendValueInput("frameSize").appendField("frameSize").setCheck("size"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setInputsInline(!0),this.setTooltip("videoio_VideoWriter_VideoWriter")},getVars:function(){return[this.getFieldValue("writer")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("writer"))&&this.setFieldValue(t,"writer")}},Blockly.Blocks.VideoWriter_write={init:function(){this.setColour(22),this.appendDummyInput().appendField("write").appendField(new Blockly.FieldVariable("writer"),"writer"),this.appendValueInput("image").appendField("image").setCheck("image"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("videoio_VideoWriter_write")},getVars:function(){return[this.getFieldValue("writer")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("writer"))&&this.setFieldValue(t,"writer")}},Blockly.Python.VideoWriter_VideoWriter=function(e){var t=e.getFieldValue("writer"),l=t+" = cv2.VideoWriter('"+e.getFieldValue("filename")+"',cv2.VideoWriter_fourcc(*'"+e.getFieldValue("fourcc")+"'),"+e.getFieldValue("fps")+","+Blockly.Python.valueToCode(e,"frameSize",Blockly.Python.ORDER_ATOMIC)+")\n";return l+="if not "+t+'.isOpened(): raise Exception("your writer failed to open!")\n'},Blockly.Python.VideoWriter_write=function(e){return e.getFieldValue("writer")+".write("+Blockly.Python.valueToCode(e,"image",Blockly.Python.ORDER_ATOMIC)+")\n"},Blockly.Blocks.cvtcolor={init:function(){this.setColour(65),this.appendDummyInput().appendField(new Blockly.FieldDropdown([["BGR2GRAY","cv2.COLOR_BGR2GRAY"],["GRAY2BGR","cv2.COLOR_GRAY2BGR"],["BGR2HSV","cv2.COLOR_BGR2HSV"],["HSV2BGR","cv2.COLOR_HSV2BGR"]]),"flag"),this.appendValueInput("img").setCheck("image").appendField("cvtColor"),this.setOutput(!0,"image"),this.setTooltip("")}},Blockly.Python.cvtcolor=function(e){return["cv2.cvtColor("+Blockly.Python.valueToCode(e,"img",Blockly.Python.ORDER_ATOMIC)+","+e.getFieldValue("flag")+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.threshold={init:function(){this.setColour(65),this.appendDummyInput().appendField(new Blockly.FieldTextInput("30"),"thresh_val").appendField(new Blockly.FieldTextInput("255"),"thresh_to").appendField(new Blockly.FieldDropdown([["BINARY","cv2.THRESH_BINARY"],["BINARY_INV","cv2.THRESH_BINARY_INV"],["OTSU","cv2.THRESH_OTSU"]]),"flag"),this.appendValueInput("img").appendField("threshold").setCheck("image"),this.setOutput(!0,"image"),this.setTooltip("")}},Blockly.Python.threshold=function(e){var t=Blockly.Python.valueToCode(e,"img",Blockly.Python.ORDER_ATOMIC),l=e.getFieldValue("flag");return["cv2.threshold("+t+","+e.getFieldValue("thresh_val")+","+e.getFieldValue("thresh_to")+","+l+")[1]",Blockly.Python.ORDER_NONE]},Blockly.Blocks.newimage={init:function(){this.setColour(65),this.appendDummyInput().appendField("new image").appendField(new Blockly.FieldTextInput("100"),"w").appendField(new Blockly.FieldTextInput("100"),"h").appendField(new Blockly.FieldDropdown([["bgr","bgr"],["gray","gray"],["float","float"]]),"type"),this.appendValueInput("color").appendField("color"),this.setOutput(!0,"image"),this.setTooltip("make a new, empty image")}},Blockly.Python.newimage=function(e){var t=e.getFieldValue("w"),l=e.getFieldValue("h"),i=e.getFieldValue("type"),n=Blockly.Python.valueToCode(e,"color",Blockly.Python.ORDER_ATOMIC);return code="np.ones(("+l+","+t+"),np.uint8)","bgr"==i&&(code="np.ones(("+l+","+t+",3),np.uint8)"),"float"==i&&(code="np.ones(("+l+","+t+"),np.float)"),n&&(code+=" * "+n),[code,Blockly.Python.ORDER_NONE]},Blockly.Blocks.point={init:function(){this.setColour(65),this.appendDummyInput().appendField("point").appendField(new Blockly.FieldTextInput("0"),"x").appendField(new Blockly.FieldTextInput("0"),"y"),this.setOutput(!0,"point"),this.setTooltip("")}},Blockly.Python.point=function(e){return["("+e.getFieldValue("x")+","+e.getFieldValue("y")+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.point_tl={init:function(){this.setColour(65),this.appendValueInput("rect").appendField("tl").setCheck("rect"),this.setOutput(!0,"point"),this.setTooltip("")}},Blockly.Python.point_tl=function(e){var t=Blockly.Python.valueToCode(e,"rect",Blockly.Python.ORDER_ATOMIC);return["("+t+"[0],"+t+"[1])",Blockly.Python.ORDER_NONE]},Blockly.Blocks.point_br={init:function(){this.setColour(65),this.appendValueInput("rect").appendField("br").setCheck("rect"),this.setOutput(!0,"point"),this.setTooltip("")}},Blockly.Python.point_br=function(e){var t=Blockly.Python.valueToCode(e,"rect",Blockly.Python.ORDER_ATOMIC);return["("+t+"[0]+"+t+"[2],"+t+"[1]+"+t+"[3])",Blockly.Python.ORDER_NONE]},Blockly.Blocks.size={init:function(){this.setColour(65),this.appendDummyInput().appendField("size").appendField(new Blockly.FieldTextInput("0"),"w").appendField(new Blockly.FieldTextInput("0"),"h"),this.setOutput(!0,"size"),this.setTooltip("")}},Blockly.Python.size=function(e){return["("+e.getFieldValue("w")+","+e.getFieldValue("h")+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.tuple={init:function(){this.setColour(65),this.appendDummyInput().appendField("tuple"),this.appendValueInput("X"),this.setOutput(!0),this.setTooltip("")}},Blockly.Python.tuple=function(e){return["("+Blockly.Python.valueToCode(e,"X",Blockly.Python.ORDER_ATOMIC)+")",Blockly.Python.ORDER_NONE]},Blockly.Blocks.forRange={init:function(){this.setColour(135),this.setInputsInline(!0),this.appendDummyInput().appendField("for"),this.appendDummyInput().appendField(new Blockly.FieldVariable("i"),"i").appendField("in range"),this.appendValueInput("rend").setCheck("Number"),this.appendStatementInput("statement"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Python.forRange=function(e){return"for "+e.getFieldValue("i")+" in range("+Blockly.Python.valueToCode(e,"rend",Blockly.Python.ORDER_ATOMIC)+"):\n"+(Blockly.Python.statementToCode(e,"statement")||"  pass\n")},Blockly.Blocks.forEnum={init:function(){this.setColour(135),this.setInputsInline(!0),this.appendDummyInput().appendField("enumerate"),this.appendDummyInput().appendField(new Blockly.FieldVariable("index"),"index").appendField("and").appendField(new Blockly.FieldVariable("i"),"i").appendField("in"),this.appendValueInput("list"),this.appendStatementInput("statement"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")},getVars:function(){return[this.getFieldValue("index"),this.getFieldValue("i")]},renameVar:function(e,t){Blockly.Names.equals(e,this.getFieldValue("index"))&&this.setFieldValue(t,"index"),Blockly.Names.equals(e,this.getFieldValue("i"))&&this.setFieldValue(t,"i")}},Blockly.Python.forEnum=function(e){return"for "+e.getFieldValue("index")+","+e.getFieldValue("i")+" in enumerate("+Blockly.Python.valueToCode(e,"list",Blockly.Python.ORDER_ATOMIC)+"):\n"+(Blockly.Python.statementToCode(e,"statement")||"  pass\n")},Blockly.Blocks.text_eval={init:function(){this.setColour(45),this.setInputsInline(!0),this.appendDummyInput().appendField("eval").appendField(new Blockly.FieldTextInput(""),"text"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("direct python eval")}},Blockly.Python.text_eval=function(e){return e.getFieldValue("text")+"\n"};