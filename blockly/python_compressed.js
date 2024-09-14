!function(e,t){"function"==typeof define&&define.amd?define(["./blockly_compressed.js"],t):"object"==typeof exports?module.exports=t(require("./blockly_compressed.js")):(e.python=t(e.Blockly),e.Blockly.Python=e.python.pythonGenerator)}(this,(function(e){var t,r,o=e.__namespace__,n=function(e,r){let o,n,i=0,a="";r.STATEMENT_PREFIX&&(a+=r.injectId(r.STATEMENT_PREFIX,e));do{n=r.valueToCode(e,"IF"+i,t.NONE)||"False",o=r.statementToCode(e,"DO"+i)||r.PASS,r.STATEMENT_SUFFIX&&(o=r.prefixLines(r.injectId(r.STATEMENT_SUFFIX,e),r.INDENT)+o),a+=(0===i?"if ":"elif ")+n+":\n"+o,i++}while(e.getInput("IF"+i));return(e.getInput("ELSE")||r.STATEMENT_SUFFIX)&&(o=r.statementToCode(e,"ELSE")||r.PASS,r.STATEMENT_SUFFIX&&(o=r.prefixLines(r.injectId(r.STATEMENT_SUFFIX,e),r.INDENT)+o),a+="else:\n"+o),a},i=function(e,r){let n;n=e.getField("TIMES")?String(parseInt(e.getFieldValue("TIMES"),10)):r.valueToCode(e,"TIMES",t.NONE)||"0",n=o.isNumber$$module$build$src$core$utils$string(n)?parseInt(n,10):"int("+n+")";let i=r.statementToCode(e,"DO");return i=r.addLoopTrap(i,e)||r.PASS,"for "+r.nameDB_.getDistinctName("count",o.NameType$$module$build$src$core$names.VARIABLE)+" in range("+n+"):\n"+i},a=function(e,r){const o=e.getFieldValue("OP");let n;if("NEG"===o)return n=r.valueToCode(e,"NUM",t.UNARY_SIGN)||"0",["-"+n,t.UNARY_SIGN];if("NOT"===o)return n=r.valueToCode(e,"NUM",t.UNARY_SIGN)||"0",["~"+n,t.BITWISE_NOT];switch(r.definitions_.import_math="import math",e="SIN"===o||"COS"===o||"TAN"===o?r.valueToCode(e,"NUM",t.MULTIPLICATIVE)||"0":r.valueToCode(e,"NUM",t.NONE)||"0",o){case"ABS":n="math.fabs("+e+")";break;case"ROOT":n="math.sqrt("+e+")";break;case"LN":n="math.log("+e+")";break;case"LOG10":n="math.log10("+e+")";break;case"EXP":n="math.exp("+e+")";break;case"POW10":n="math.pow(10,"+e+")";break;case"ROUND":n="round("+e+")";break;case"ROUNDUP":n="math.ceil("+e+")";break;case"ROUNDDOWN":n="math.floor("+e+")";break;case"SIN":n="math.sin("+e+" / 180.0 * math.pi)";break;case"COS":n="math.cos("+e+" / 180.0 * math.pi)";break;case"TAN":n="math.tan("+e+" / 180.0 * math.pi)"}if(n)return[n,t.FUNCTION_CALL];switch(o){case"ASIN":n="math.asin(math.sin(math.radians("+e+")))";break;case"ACOS":n="math.acos(math.cos(math.radians("+e+")))";break;case"ATAN":n="math.atan(math.tan(math.radians("+e+")))";break;default:throw Error("Unknown math operator: "+o)}return[n,t.MULTIPLICATIVE]},l=function(e,r){var n=[],i=e.workspace,a=o.allUsedVarModels$$module$build$src$core$variables(i)||[];for(var l of a)a=l.name,e.getVars().includes(a)||n.push(r.getVariableName(a));for(i=o.allDeveloperVariables$$module$build$src$core$variables(i),l=0;l<i.length;l++)n.push(r.nameDB_.getName(i[l],o.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE));i=n.length?r.INDENT+"global "+n.join(", ")+"\n":"",n=r.getProcedureName(e.getFieldValue("NAME")),l="",r.STATEMENT_PREFIX&&(l+=r.injectId(r.STATEMENT_PREFIX,e)),r.STATEMENT_SUFFIX&&(l+=r.injectId(r.STATEMENT_SUFFIX,e)),l&&(l=r.prefixLines(l,r.INDENT)),a="",r.INFINITE_LOOP_TRAP&&(a=r.prefixLines(r.injectId(r.INFINITE_LOOP_TRAP,e),r.INDENT));let s="";e.getInput("STACK")&&(s=r.statementToCode(e,"STACK"));let u="";e.getInput("RETURN")&&(u=r.valueToCode(e,"RETURN",t.NONE)||"");let _="";s&&u&&(_=l),u?u=r.INDENT+"return "+u+"\n":s||(s=r.PASS);const m=[],d=e.getVars();for(let e=0;e<d.length;e++)m[e]=r.getVariableName(d[e]);return i="def "+n+"("+m.join(", ")+"):\n"+i+l+a+s+_+u,i=r.scrub_(e,i),r.definitions_["%"+n]=i,null},s=function(e,r){var o=r.provideFunction_("text_prompt",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(msg):\n  try:\n    return raw_input(msg)\n  except NameError:\n    return input(msg)\n`);return o=o+"("+(r=e.getField("TEXT")?r.quote_(e.getFieldValue("TEXT")):r.valueToCode(e,"TEXT",t.NONE)||"''")+")","NUMBER"===e.getFieldValue("TYPE")&&(o="float("+o+")"),[o,t.FUNCTION_CALL]},u=function(e,r){return[r.getVariableName(e.getFieldValue("VAR")),t.ATOMIC]},_=function(e,r){const o=r.valueToCode(e,"VALUE",t.NONE)||"0";return r.getVariableName(e.getFieldValue("VAR"))+" = "+o+"\n"};(r=t||(t={}))[r.ATOMIC=0]="ATOMIC",r[r.COLLECTION=1]="COLLECTION",r[r.STRING_CONVERSION=1]="STRING_CONVERSION",r[r.MEMBER=2.1]="MEMBER",r[r.FUNCTION_CALL=2.2]="FUNCTION_CALL",r[r.EXPONENTIATION=3]="EXPONENTIATION",r[r.UNARY_SIGN=4]="UNARY_SIGN",r[r.BITWISE_NOT=4]="BITWISE_NOT",r[r.MULTIPLICATIVE=5]="MULTIPLICATIVE",r[r.ADDITIVE=6]="ADDITIVE",r[r.BITWISE_SHIFT=7]="BITWISE_SHIFT",r[r.BITWISE_AND=8]="BITWISE_AND",r[r.BITWISE_XOR=9]="BITWISE_XOR",r[r.BITWISE_OR=10]="BITWISE_OR",r[r.RELATIONAL=11]="RELATIONAL",r[r.LOGICAL_NOT=12]="LOGICAL_NOT",r[r.LOGICAL_AND=13]="LOGICAL_AND",r[r.LOGICAL_OR=14]="LOGICAL_OR",r[r.CONDITIONAL=15]="CONDITIONAL",r[r.LAMBDA=16]="LAMBDA",r[r.NONE=99]="NONE";var m=class extends o.CodeGenerator$$module$build$src$core$generator{constructor(e="Python"){super(e),this.ORDER_OVERRIDES=[[t.FUNCTION_CALL,t.MEMBER],[t.FUNCTION_CALL,t.FUNCTION_CALL],[t.MEMBER,t.MEMBER],[t.MEMBER,t.FUNCTION_CALL],[t.LOGICAL_NOT,t.LOGICAL_NOT],[t.LOGICAL_AND,t.LOGICAL_AND],[t.LOGICAL_OR,t.LOGICAL_OR]],this.PASS="",this.isInitialized=!1;for(const r in t)"string"!=typeof(e=t[r])&&(this["ORDER_"+r]=e);this.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip")}init(e){super.init(e),this.PASS=this.INDENT+"pass\n",this.nameDB_?this.nameDB_.reset():this.nameDB_=new o.Names$$module$build$src$core$names(this.RESERVED_WORDS_),this.nameDB_.setVariableMap(e.getVariableMap()),this.nameDB_.populateVariables(e),this.nameDB_.populateProcedures(e);const t=[];var r=o.allDeveloperVariables$$module$build$src$core$variables(e);for(let e=0;e<r.length;e++)t.push(this.nameDB_.getName(r[e],o.Names$$module$build$src$core$names.DEVELOPER_VARIABLE_TYPE)+" = None");for(e=o.allUsedVarModels$$module$build$src$core$variables(e),r=0;r<e.length;r++)t.push(this.getVariableName(e[r].getId())+" = None");this.definitions_.variables=t.join("\n"),this.isInitialized=!0}finish(e){const t=[],r=[];for(let e in this.definitions_){const o=this.definitions_[e];o.match(/^(from\s+\S+\s+)?import\s+\S+/)?t.push(o):r.push(o)}return e=super.finish(e),this.isInitialized=!1,this.nameDB_.reset(),(t.join("\n")+"\n\n"+r.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+e}scrubNakedValue(e){return e+"\n"}quote_(e){let t="'";return(e=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n")).includes("'")&&(e.includes('"')?e=e.replace(/'/g,"\\'"):t='"'),t+e+t}multiline_quote_(e){return e.split(/\n/g).map(this.quote_).join(" + '\\n' + \n")}scrub_(e,t,r=!1){let n="";if(!e.outputConnection||!e.outputConnection.targetConnection){var i=e.getCommentText();i&&(i=o.wrap$$module$build$src$core$utils$string(i,this.COMMENT_WRAP-3),n+=this.prefixLines(i+"\n","# "));for(let t=0;t<e.inputList.length;t++)e.inputList[t].type===o.inputTypes$$module$build$src$core$inputs$input_types.VALUE&&(i=e.inputList[t].connection.targetBlock())&&(i=this.allNestedComments(i))&&(n+=this.prefixLines(i,"# "))}return e=e.nextConnection&&e.nextConnection.targetBlock(),n+t+(r=r?"":this.blockToCode(e))}getAdjustedInt(e,r,n=0,i=!1){e.workspace.options.oneBasedIndex&&n--;const a=e.workspace.options.oneBasedIndex?"1":"0";return e=this.valueToCode(e,r,n?t.ADDITIVE:t.NONE)||a,o.isNumber$$module$build$src$core$utils$string(e)?(e=parseInt(e,10)+n,i&&(e=-e)):(e=0<n?"int("+e+" + "+n+")":0>n?"int("+e+" - "+-n+")":"int("+e+")",i&&(e="-"+e)),e}},d={};d.Order=t,d.PythonGenerator=m;var c={lists_create_empty:function(e,r){return["[]",t.ATOMIC]},lists_create_with:function(e,r){const o=Array(e.itemCount_);for(let n=0;n<e.itemCount_;n++)o[n]=r.valueToCode(e,"ADD"+n,t.NONE)||"None";return["["+o.join(", ")+"]",t.ATOMIC]},lists_getIndex:function(e,r){const o=e.getFieldValue("MODE")||"GET",n=e.getFieldValue("WHERE")||"FROM_START";var i=r.valueToCode(e,"VALUE","RANDOM"===n?t.NONE:t.MEMBER)||"[]";switch(n){case"FIRST":if("GET"===o)return[i+"[0]",t.MEMBER];if("GET_REMOVE"===o)return[i+".pop(0)",t.FUNCTION_CALL];if("REMOVE"===o)return i+".pop(0)\n";break;case"LAST":if("GET"===o)return[i+"[-1]",t.MEMBER];if("GET_REMOVE"===o)return[i+".pop()",t.FUNCTION_CALL];if("REMOVE"===o)return i+".pop()\n";break;case"FROM_START":if(e=r.getAdjustedInt(e,"AT"),"GET"===o)return[i+"["+e+"]",t.MEMBER];if("GET_REMOVE"===o)return[i+".pop("+e+")",t.FUNCTION_CALL];if("REMOVE"===o)return i+".pop("+e+")\n";break;case"FROM_END":if(e=r.getAdjustedInt(e,"AT",1,!0),"GET"===o)return[i+"["+e+"]",t.MEMBER];if("GET_REMOVE"===o)return[i+".pop("+e+")",t.FUNCTION_CALL];if("REMOVE"===o)return i+".pop("+e+")\n";break;case"RANDOM":if(r.definitions_.import_random="import random","GET"===o)return["random.choice("+i+")",t.FUNCTION_CALL];if(i=r.provideFunction_("lists_remove_random_item",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(myList):\n  x = int(random.random() * len(myList))\n  return myList.pop(x)\n`)+"("+i+")","GET_REMOVE"===o)return[i,t.FUNCTION_CALL];if("REMOVE"===o)return i+"\n"}throw Error("Unhandled combination (lists_getIndex).")},lists_getSublist:function(e,r){const n=r.valueToCode(e,"LIST",t.MEMBER)||"[]";var i=e.getFieldValue("WHERE1");const a=e.getFieldValue("WHERE2");switch(i){case"FROM_START":0===(i=r.getAdjustedInt(e,"AT1"))&&(i="");break;case"FROM_END":i=r.getAdjustedInt(e,"AT1",1,!0);break;case"FIRST":i="";break;default:throw Error("Unhandled option (lists_getSublist)")}switch(a){case"FROM_START":e=r.getAdjustedInt(e,"AT2",1);break;case"FROM_END":e=r.getAdjustedInt(e,"AT2",0,!0),o.isNumber$$module$build$src$core$utils$string(String(e))?0===e&&(e=""):(r.definitions_.import_sys="import sys",e+=" or sys.maxsize");break;case"LAST":e="";break;default:throw Error("Unhandled option (lists_getSublist)")}return[n+"["+i+" : "+e+"]",t.MEMBER]},lists_indexOf:function(e,r){const o=r.valueToCode(e,"FIND",t.NONE)||"[]",n=r.valueToCode(e,"VALUE",t.NONE)||"''";let i=" -1",a="",l=" - 1";return e.workspace.options.oneBasedIndex&&(i=" 0",a=" + 1",l=""),[("FIRST"===e.getFieldValue("END")?r.provideFunction_("first_index",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):\n  try: index = my_list.index(elem)${a}\n  except: index =${i}\n  return index\n`):r.provideFunction_("last_index",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(my_list, elem):\n  try: index = len(my_list) - my_list[::-1].index(elem)${l}\n  except: index =${i}\n  return index\n`))+"("+n+", "+o+")",t.FUNCTION_CALL]},lists_isEmpty:function(e,r){return["not len("+(r.valueToCode(e,"VALUE",t.NONE)||"[]")+")",t.LOGICAL_NOT]},lists_length:function(e,r){return["len("+(r.valueToCode(e,"VALUE",t.NONE)||"[]")+")",t.FUNCTION_CALL]},lists_repeat:function(e,r){return["["+(r.valueToCode(e,"ITEM",t.NONE)||"None")+"] * "+(e=r.valueToCode(e,"NUM",t.MULTIPLICATIVE)||"0"),t.MULTIPLICATIVE]},lists_reverse:function(e,r){return["list(reversed("+(r.valueToCode(e,"LIST",t.NONE)||"[]")+"))",t.FUNCTION_CALL]},lists_setIndex:function(e,r){let n=r.valueToCode(e,"LIST",t.MEMBER)||"[]";const i=e.getFieldValue("MODE")||"GET";var a=e.getFieldValue("WHERE")||"FROM_START";const l=r.valueToCode(e,"TO",t.NONE)||"None";switch(a){case"FIRST":if("SET"===i)return n+"[0] = "+l+"\n";if("INSERT"===i)return n+".insert(0, "+l+")\n";break;case"LAST":if("SET"===i)return n+"[-1] = "+l+"\n";if("INSERT"===i)return n+".append("+l+")\n";break;case"FROM_START":if(r=r.getAdjustedInt(e,"AT"),"SET"===i)return n+"["+r+"] = "+l+"\n";if("INSERT"===i)return n+".insert("+r+", "+l+")\n";break;case"FROM_END":if(r=r.getAdjustedInt(e,"AT",1,!0),"SET"===i)return n+"["+r+"] = "+l+"\n";if("INSERT"===i)return n+".insert("+r+", "+l+")\n";break;case"RANDOM":if(r.definitions_.import_random="import random",n.match(/^\w+$/)?e="":(a=(e=r.nameDB_.getDistinctName("tmp_list",o.NameType$$module$build$src$core$names.VARIABLE))+" = "+n+"\n",n=e,e=a),e+=(r=r.nameDB_.getDistinctName("tmp_x",o.NameType$$module$build$src$core$names.VARIABLE))+" = int(random.random() * len("+n+"))\n","SET"===i)return e+(n+"[")+r+"] = "+l+"\n";if("INSERT"===i)return e+(n+".insert(")+r+", "+l+")\n"}throw Error("Unhandled combination (lists_setIndex).")},lists_sort:function(e,r){const o=r.valueToCode(e,"LIST",t.NONE)||"[]",n=e.getFieldValue("TYPE");return e="1"===e.getFieldValue("DIRECTION")?"False":"True",[r.provideFunction_("lists_sort",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(my_list, type, reverse):\n  def try_float(s):\n    try:\n      return float(s)\n    except:\n      return 0\n  key_funcs = {\n    "NUMERIC": try_float,\n    "TEXT": str,\n    "IGNORE_CASE": lambda s: str(s).lower()\n  }\n  key_func = key_funcs[type]\n  list_cpy = list(my_list)\n  return sorted(list_cpy, key=key_func, reverse=reverse)\n`)+"("+o+', "'+n+'", '+e+")",t.FUNCTION_CALL]},lists_split:function(e,r){var o=e.getFieldValue("MODE");if("SPLIT"===o)e=(o=r.valueToCode(e,"INPUT",t.MEMBER)||"''")+".split("+(e=r.valueToCode(e,"DELIM",t.NONE))+")";else{if("JOIN"!==o)throw Error("Unknown mode: "+o);o=r.valueToCode(e,"INPUT",t.NONE)||"[]",e=(r.valueToCode(e,"DELIM",t.MEMBER)||"''")+".join("+o+")"}return[e,t.FUNCTION_CALL]}},E={};E.controls_if=n,E.controls_ifelse=n,E.logic_boolean=function(e,r){return["TRUE"===e.getFieldValue("BOOL")?"True":"False",t.ATOMIC]},E.logic_compare=function(e,r){const o={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[e.getFieldValue("OP")],n=t.RELATIONAL;return[(r.valueToCode(e,"A",n)||"0")+" "+o+" "+(e=r.valueToCode(e,"B",n)||"0"),n]},E.logic_negate=function(e,r){return["not "+(r.valueToCode(e,"BOOL",t.LOGICAL_NOT)||"True"),t.LOGICAL_NOT]},E.logic_null=function(e,r){return["None",t.ATOMIC]},E.logic_operation=function(e,r){const o="AND"===e.getFieldValue("OP")?"and":"or",n="and"===o?t.LOGICAL_AND:t.LOGICAL_OR;let i=r.valueToCode(e,"A",n);return e=r.valueToCode(e,"B",n),i||e?(r="and"===o?"True":"False",i||(i=r),e||(e=r)):e=i="False",[i+" "+o+" "+e,n]},E.logic_ternary=function(e,r){const o=r.valueToCode(e,"IF",t.CONDITIONAL)||"False";return[(r.valueToCode(e,"THEN",t.CONDITIONAL)||"None")+" if "+o+" else "+(e=r.valueToCode(e,"ELSE",t.CONDITIONAL)||"None"),t.CONDITIONAL]};var T={control_forever:function(e,t){let r=t.statementToCode(e,"DO");return r=t.addLoopTrap(r,e)||t.PASS,"while True:\n"+r},control_repeat_until:function(e,r){let o=r.valueToCode(e,"BOOL",t.NONE)||"False",n=r.statementToCode(e,"DO");return n=r.addLoopTrap(n,e)||r.PASS,"while not "+o+":\n"+n},control_wait_until:function(e,r){return r.definitions_.import_time="import time",`time.sleep(${r.valueToCode(e,"number",t.NONE)||"0"});\n`},controls_flow_statements:function(e,t){let r="";if(t.STATEMENT_PREFIX&&(r+=t.injectId(t.STATEMENT_PREFIX,e)),t.STATEMENT_SUFFIX&&(r+=t.injectId(t.STATEMENT_SUFFIX,e)),t.STATEMENT_PREFIX){const o=e.getSurroundLoop();o&&!o.suppressPrefixSuffix&&(r+=t.injectId(t.STATEMENT_PREFIX,o))}switch(e.getFieldValue("FLOW")){case"BREAK":return r+"break\n";case"CONTINUE":return r+"continue\n"}throw Error("Unknown flow statement.")},controls_for:function(e,r){const n=r.getVariableName(e.getFieldValue("VAR"));var i=r.valueToCode(e,"FROM",t.NONE)||"0",a=r.valueToCode(e,"TO",t.NONE)||"0",l=r.valueToCode(e,"BY",t.NONE)||"1";let s=r.statementToCode(e,"DO");s=r.addLoopTrap(s,e)||r.PASS;let u="";e=function(){return r.provideFunction_("upRange",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):\n  while start <= stop:\n    yield start\n    start += abs(step)\n`)};const _=function(){return r.provideFunction_("downRange",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(start, stop, step):\n  while start >= stop:\n    yield start\n    start -= abs(step)\n`)};if(o.isNumber$$module$build$src$core$utils$string(i)&&o.isNumber$$module$build$src$core$utils$string(a)&&o.isNumber$$module$build$src$core$utils$string(l))i=Number(i),a=Number(a),l=Math.abs(Number(l)),0==i%1&&0==a%1&&0==l%1?(i<=a?(a++,e=0===i&&1===l?a:i+", "+a,1!==l&&(e+=", "+l)):e=i+", "+--a+", -"+l,e="range("+e+")"):(e=i<a?e():_(),e+="("+i+", "+a+", "+l+")");else{const t=function(e,t){return o.isNumber$$module$build$src$core$utils$string(e)?e=String(Number(e)):e.match(/^\w+$/)||(t=r.nameDB_.getDistinctName(n+t,o.NameType$$module$build$src$core$names.VARIABLE),u+=t+" = "+e+"\n",e=t),e};i=t(i,"_start"),a=t(a,"_end"),l=t(l,"_inc"),"number"==typeof i&&"number"==typeof a?(e=i<a?e():_(),e+="("+i+", "+a+", "+l+")"):e="("+i+" <= "+a+") and "+e()+"("+i+", "+a+", "+l+") or "+_()+"("+i+", "+a+", "+l+")"}return u+="for "+n+" in "+e+":\n"+s},controls_forEach:function(e,r){const o=r.getVariableName(e.getFieldValue("VAR")),n=r.valueToCode(e,"LIST",t.RELATIONAL)||"[]";let i=r.statementToCode(e,"DO");return i=r.addLoopTrap(i,e)||r.PASS,"for "+o+" in "+n+":\n"+i}};T.controls_repeat=i,T.controls_repeat_ext=i,T.controls_whileUntil=function(e,r){const o="UNTIL"===e.getFieldValue("MODE");let n=r.valueToCode(e,"BOOL",o?t.LOGICAL_NOT:t.NONE)||"False",i=r.statementToCode(e,"DO");return i=r.addLoopTrap(i,e)||r.PASS,o&&(n="not "+n),"while "+n+":\n"+i};var N={math_arithmetic:function(e,r){var o={ADD:[" + ",t.ADDITIVE],MINUS:[" - ",t.ADDITIVE],MULTIPLY:[" * ",t.MULTIPLICATIVE],DIVIDE:[" / ",t.MULTIPLICATIVE],POWER:[" ** ",t.EXPONENTIATION],EXACT_DIVISION:[" // ",t.MULTIPLICATIVE],REMAINDER:[" % ",t.MULTIPLICATIVE],POSITION_AND:[" & ",t.BITWISE_AND],POSITION_OR:[" | ",t.BITWISE_OR],XOR:[" ^ ",t.BITWISE_XOR],LEFT_SHIFT:[" << ",t.BITWISE_SHIFT],RIGHT_SHIFT:[" >> ",t.BITWISE_SHIFT]}[e.getFieldValue("OP")];const n=o[0];o=o[1];return[(r.valueToCode(e,"A",o)||"0")+n+(e=r.valueToCode(e,"B",o)||"0"),o]},math_atan2:function(e,r){r.definitions_.import_math="import math";const o=r.valueToCode(e,"X",t.NONE)||"0";return["math.atan2("+(r.valueToCode(e,"Y",t.NONE)||"0")+", "+o+") / math.pi * 180",t.MULTIPLICATIVE]},math_change:function(e,r){r.definitions_.from_numbers_import_Number="from numbers import Number";const o=r.valueToCode(e,"DELTA",t.ADDITIVE)||"0";return(e=r.getVariableName(e.getFieldValue("VAR")))+" = ("+e+" if isinstance("+e+", Number) else 0) + "+o+"\n"},math_constant:function(e,r){const o={PI:["math.pi",t.MEMBER],E:["math.e",t.MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",t.MULTIPLICATIVE],SQRT2:["math.sqrt(2)",t.MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",t.MEMBER],INFINITY:["float('inf')",t.ATOMIC]};return"INFINITY"!==(e=e.getFieldValue("CONSTANT"))&&(r.definitions_.import_math="import math"),o[e]},math_constrain:function(e,r){return["min(max("+(r.valueToCode(e,"VALUE",t.NONE)||"0")+", "+(r.valueToCode(e,"LOW",t.NONE)||"0")+"), "+(e=r.valueToCode(e,"HIGH",t.NONE)||"float('inf')")+")",t.FUNCTION_CALL]},math_decimal_conversion:function(e,r){r.definitions_.import_math="import math";let o=e.getFieldValue("s_bin");r=r.valueToCode(e,"val",t.NONE)||"0";let n={bin:2,oct:8,dec:10,hex:16},i="";return"bin"===(e=e.getFieldValue("e_bin"))?i=`bin(int(str(${r}), ${n[o]}))`:"oct"===e?i=`oct(int(str(${r}), ${n[o]}))`:"dec"===e?i=`int(str(${r}), ${n[o]})`:"hex"===e&&(i=`hex(int(str(${r}), ${n[o]}))`),[i,t.FUNCTION_CALL]},math_half_adjust:function(e,r){return[`round(${r.valueToCode(e,"s_math",t.NONE)||"0"}, ${e=r.valueToCode(e,"e_math",t.NONE)||"0"})`,t.FUNCTION_CALL]},math_modulo:function(e,r){return[(r.valueToCode(e,"DIVIDEND",t.MULTIPLICATIVE)||"0")+" % "+(e=r.valueToCode(e,"DIVISOR",t.MULTIPLICATIVE)||"0"),t.MULTIPLICATIVE]},math_new_random_float:function(e,r){return r.definitions_.import_random="import random",["random.uniform("+(r.valueToCode(e,"s_float",t.NONE)||"0")+", "+(e=r.valueToCode(e,"e_float",t.NONE)||"0")+")",t.FUNCTION_CALL]},math_number:function(e,r){return 1/0===(e=Number(e.getFieldValue("NUM")))?['float("inf")',t.FUNCTION_CALL]:-1/0===e?['-float("inf")',t.UNARY_SIGN]:[String(e),0>e?t.UNARY_SIGN:t.ATOMIC]},math_number_property:function(e,r){var o={EVEN:[" % 2 == 0",t.MULTIPLICATIVE,t.RELATIONAL],ODD:[" % 2 == 1",t.MULTIPLICATIVE,t.RELATIONAL],WHOLE:[" % 1 == 0",t.MULTIPLICATIVE,t.RELATIONAL],POSITIVE:[" > 0",t.RELATIONAL,t.RELATIONAL],NEGATIVE:[" < 0",t.RELATIONAL,t.RELATIONAL],DIVISIBLE_BY:[null,t.MULTIPLICATIVE,t.RELATIONAL],PRIME:[null,t.NONE,t.FUNCTION_CALL]};const n=e.getFieldValue("PROPERTY"),[i,a,l]=o[n];if(o=r.valueToCode(e,"NUMBER_TO_CHECK",a)||"0","PRIME"===n)r.definitions_.import_math="import math",r.definitions_.from_numbers_import_Number="from numbers import Number",e=r.provideFunction_("math_isPrime",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(n):\n  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods\n  # If n is not a number but a string, try parsing it.\n  if not isinstance(n, Number):\n    try:\n      n = float(n)\n    except:\n      return False\n  if n == 2 or n == 3:\n    return True\n  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.\n  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:\n    return False\n  # Check all the numbers of form 6k +/- 1, up to sqrt(n).\n  for x in range(6, int(math.sqrt(n)) + 2, 6):\n    if n % (x - 1) == 0 or n % (x + 1) == 0:\n      return False\n  return True\n`)+"("+o+")";else if("DIVISIBLE_BY"===n){if("0"===(e=r.valueToCode(e,"DIVISOR",t.MULTIPLICATIVE)||"0"))return["False",t.ATOMIC];e=o+" % "+e+" == 0"}else e=o+i;return[e,l]},math_on_list:function(e,r){const o=e.getFieldValue("OP");switch(e=r.valueToCode(e,"LIST",t.NONE)||"[]",o){case"SUM":r="sum("+e+")";break;case"MIN":r="min("+e+")";break;case"MAX":r="max("+e+")";break;case"AVERAGE":r.definitions_.from_numbers_import_Number="from numbers import Number",r=r.provideFunction_("math_mean",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(myList):\n  localList = [e for e in myList if isinstance(e, Number)]\n  if not localList: return\n  return float(sum(localList)) / len(localList)\n`)+"("+e+")";break;case"MEDIAN":r.definitions_.from_numbers_import_Number="from numbers import Number",r=r.provideFunction_("math_median",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(myList):\n  localList = sorted([e for e in myList if isinstance(e, Number)])\n  if not localList: return\n  if len(localList) % 2 == 0:\n    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0\n  else:\n    return localList[(len(localList) - 1) // 2]\n`)+"("+e+")";break;case"MODE":r=r.provideFunction_("math_modes",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(some_list):\n  modes = []\n  # Using a lists of [item, count] to keep count rather than dict\n  # to avoid "unhashable" errors when the counted item is itself a list or dict.\n  counts = []\n  maxCount = 1\n  for item in some_list:\n    found = False\n    for count in counts:\n      if count[0] == item:\n        count[1] += 1\n        maxCount = max(maxCount, count[1])\n        found = True\n    if not found:\n      counts.append([item, 1])\n  for counted_item, item_count in counts:\n    if item_count == maxCount:\n      modes.append(counted_item)\n  return modes\n`)+"("+e+")";break;case"STD_DEV":r.definitions_.import_math="import math",r=r.provideFunction_("math_standard_deviation",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(numbers):\n  n = len(numbers)\n  if n == 0: return\n  mean = float(sum(numbers)) / n\n  variance = sum((x - mean) ** 2 for x in numbers) / n\n  return math.sqrt(variance)\n`)+"("+e+")";break;case"RANDOM":r.definitions_.import_random="import random",r="random.choice("+e+")";break;default:throw Error("Unknown operator: "+o)}return[r,t.FUNCTION_CALL]},math_random_float:function(e,r){return r.definitions_.import_random="import random",["random.random()",t.FUNCTION_CALL]},math_random_int:function(e,r){r.definitions_.import_random="import random";return["random.randint("+(r.valueToCode(e,"FROM",t.NONE)||"0")+", "+(e=r.valueToCode(e,"TO",t.NONE)||"0")+")",t.FUNCTION_CALL]}};N.math_round=a,N.math_single=a,N.math_trig=a,N.math_type_change=function(e,r){return r=r.valueToCode(e,"value",t.NONE)||"0",[`${e.getFieldValue("type")}(${r})`,t.FUNCTION_CALL]};var I={procedures_callnoreturn:function(e,t){return t.forBlock.procedures_callreturn(e,t)[0]+"\n"},procedures_callreturn:function(e,r){const o=r.getProcedureName(e.getFieldValue("NAME")),n=[],i=e.getVars();for(let o=0;o<i.length;o++)n[o]=r.valueToCode(e,"ARG"+o,t.NONE)||"None";return[o+"("+n.join(", ")+")",t.FUNCTION_CALL]}};I.procedures_defnoreturn=l,I.procedures_defreturn=l,I.procedures_ifreturn=function(e,r){let o="if "+(r.valueToCode(e,"CONDITION",t.NONE)||"False")+":\n";return r.STATEMENT_SUFFIX&&(o+=r.prefixLines(r.injectId(r.STATEMENT_SUFFIX,e),r.INDENT)),e.hasReturnValue_?(e=r.valueToCode(e,"VALUE",t.NONE)||"None",o+=r.INDENT+"return "+e+"\n"):o+=r.INDENT+"return\n",o};var f=/^\s*'([^']|\\')*'\s*$/,C=function(e){return f.test(e)?[e,t.ATOMIC]:["str("+e+")",t.FUNCTION_CALL]},A={text:function(e,r){return[r.quote_(e.getFieldValue("TEXT")),t.ATOMIC]},text_append:function(e,r){const o=r.getVariableName(e.getFieldValue("VAR"));return e=r.valueToCode(e,"TEXT",t.NONE)||"''",o+" = str("+o+") + "+C(e)[0]+"\n"},text_changeCase:function(e,r){const o={UPPERCASE:".upper()",LOWERCASE:".lower()",TITLECASE:".title()"}[e.getFieldValue("CASE")];return[(r.valueToCode(e,"TEXT",t.MEMBER)||"''")+o,t.FUNCTION_CALL]},text_charAt:function(e,r){const o=e.getFieldValue("WHERE")||"FROM_START",n=r.valueToCode(e,"VALUE","RANDOM"===o?t.NONE:t.MEMBER)||"''";switch(o){case"FIRST":return[n+"[0]",t.MEMBER];case"LAST":return[n+"[-1]",t.MEMBER];case"FROM_START":return[n+"["+(e=r.getAdjustedInt(e,"AT"))+"]",t.MEMBER];case"FROM_END":return[n+"["+(e=r.getAdjustedInt(e,"AT",1,!0))+"]",t.MEMBER];case"RANDOM":return r.definitions_.import_random="import random",[r.provideFunction_("text_random_letter",`\ndef ${r.FUNCTION_NAME_PLACEHOLDER_}(text):\n  x = int(random.random() * len(text))\n  return text[x]\n`)+"("+n+")",t.FUNCTION_CALL]}throw Error("Unhandled option (text_charAt).")},text_count:function(e,r){return[(r.valueToCode(e,"TEXT",t.MEMBER)||"''")+".count("+(e=r.valueToCode(e,"SUB",t.NONE)||"''")+")",t.FUNCTION_CALL]},text_getSubstring:function(e,r){var n=e.getFieldValue("WHERE1");const i=e.getFieldValue("WHERE2"),a=r.valueToCode(e,"STRING",t.MEMBER)||"''";switch(n){case"FROM_START":0===(n=r.getAdjustedInt(e,"AT1"))&&(n="");break;case"FROM_END":n=r.getAdjustedInt(e,"AT1",1,!0);break;case"FIRST":n="";break;default:throw Error("Unhandled option (text_getSubstring)")}switch(i){case"FROM_START":e=r.getAdjustedInt(e,"AT2",1);break;case"FROM_END":e=r.getAdjustedInt(e,"AT2",0,!0),o.isNumber$$module$build$src$core$utils$string(String(e))?0===e&&(e=""):(r.definitions_.import_sys="import sys",e+=" or sys.maxsize");break;case"LAST":e="";break;default:throw Error("Unhandled option (text_getSubstring)")}return[a+"["+n+" : "+e+"]",t.MEMBER]},text_indexOf:function(e,r){const o="FIRST"===e.getFieldValue("END")?"find":"rfind",n=r.valueToCode(e,"FIND",t.NONE)||"''";return r=(r.valueToCode(e,"VALUE",t.MEMBER)||"''")+"."+o+"("+n+")",e.workspace.options.oneBasedIndex?[r+" + 1",t.ADDITIVE]:[r,t.FUNCTION_CALL]},text_isEmpty:function(e,r){return["not len("+(r.valueToCode(e,"VALUE",t.NONE)||"''")+")",t.LOGICAL_NOT]},text_join:function(e,r){switch(e.itemCount_){case 0:return["''",t.ATOMIC];case 1:return e=r.valueToCode(e,"ADD0",t.NONE)||"''",C(e);case 2:var n=r.valueToCode(e,"ADD0",t.NONE)||"''";return e=r.valueToCode(e,"ADD1",t.NONE)||"''",[C(n)[0]+" + "+C(e)[0],t.ADDITIVE];default:n=[];for(let o=0;o<e.itemCount_;o++)n[o]=r.valueToCode(e,"ADD"+o,t.NONE)||"''";return["''.join([str("+(e=r.nameDB_.getDistinctName("x",o.NameType$$module$build$src$core$names.VARIABLE))+") for "+e+" in ["+n.join(", ")+"]])",t.FUNCTION_CALL]}},text_length:function(e,r){return["len("+(r.valueToCode(e,"VALUE",t.NONE)||"''")+")",t.FUNCTION_CALL]},text_print:function(e,r){return"print("+(r.valueToCode(e,"TEXT",t.NONE)||"''")+")\n"}};A.text_prompt=s,A.text_prompt_ext=s,A.text_replace=function(e,r){return[(r.valueToCode(e,"TEXT",t.MEMBER)||"''")+".replace("+(r.valueToCode(e,"FROM",t.NONE)||"''")+", "+(e=r.valueToCode(e,"TO",t.NONE)||"''")+")",t.MEMBER]},A.text_reverse=function(e,r){return[(r.valueToCode(e,"TEXT",t.MEMBER)||"''")+"[::-1]",t.MEMBER]},A.text_str_concat=function(e,r){return[`${r.valueToCode(e,"STR1",t.NONE)||"''"} + ${e=r.valueToCode(e,"STR2",t.NONE)||"''"}`,t.ATOMIC]},A.text_str_diagnosis=function(e,r){let o=r.valueToCode(e,"STR1",t.NONE)||"''",n=e.getFieldValue("SEL");switch(e=r.valueToCode(e,"STR2",t.NONE)||"''",r="",n){case"start_with":r=`${o}.startswith(${e})`;break;case"end_with":r=`${o}.endswith(${e})`;break;case"equal":r=`${o} == ${e}`}return[r,t.ATOMIC]},A.text_str_replace=function(e,r){return[`${r.valueToCode(e,"STR1",t.NONE)||"0"}.replace(${r.valueToCode(e,"STR2",t.NONE)||"0"}, ${e=r.valueToCode(e,"STR3",t.NONE)||"0"})`,t.ATOMIC]},A.text_str_res_code=function(e,r){let o=e.getFieldValue("SEL1"),n=e.getFieldValue("SEL2");return[`${r.valueToCode(e,"STR",t.NONE)||"''"}.${n}('${o}')`,t.ATOMIC]},A.text_str_split=function(e,r){return[`${r.valueToCode(e,"STR1",t.NONE)||"0"}.split(${e=r.valueToCode(e,"STR2",t.NONE)||"0"})`,t.ATOMIC]},A.text_to_char=function(e,r){return[`chr(${r.valueToCode(e,"NUMBER",t.NONE)||"0"})`,t.MEMBER]},A.text_to_number=function(e,r){return[`ord(${r.valueToCode(e,"TEXT",t.NONE)||"''"})`,t.ATOMIC]},A.text_to_string=function(e,r){return[`str(${r.valueToCode(e,"NUMBER",t.NONE)||"0"})`,t.ATOMIC]},A.text_trim=function(e,r){const o={LEFT:".lstrip()",RIGHT:".rstrip()",BOTH:".strip()"}[e.getFieldValue("MODE")];return[(r.valueToCode(e,"TEXT",t.MEMBER)||"''")+o,t.FUNCTION_CALL]};var p={};p.variables_get=u,p.variables_set=_;var O={};O.variables_get_dynamic=u,O.variables_set_dynamic=_;var L={extension_car_camera_angle:function(e,t){return t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",t=e.getFieldValue("direction"),e=e.getFieldValue("angle"),`Control_Motor.set_gimbal(${["top","bottom","left","right"].indexOf(t)}, ${e})\n`},extension_car_column_power:function(e,t){t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",t=e.getFieldValue("direction"),e=e.getFieldValue("speed");let r="";return"front"===t?r=`Control_Motor.Advance(${e})`:"after"===t&&(r=`Control_Motor.Back(${e})`),r+"\n"},extension_car_column_power_time:function(e,t){t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",t=e.getFieldValue("direction");let r=e.getFieldValue("speed");e=e.getFieldValue("ms");let o="";return"front"===t?o=`Control_Motor.Advance(${r}, ${e/1e3})`:"after"===t&&(o=`Control_Motor.Back(${r}, ${e/1e3})`),o+"\n"},extension_car_driving_power:function(e,t){return t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",`Control_Motor.GS_run(${t=e.getFieldValue("lt")}, ${e.getFieldValue("rt")}, ${e.getFieldValue("lb")}, ${e=e.getFieldValue("rb")})\n`},extension_car_initialization:function(e,t){return t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",`Control_Motor.GS_run(${e.getFieldValue("speed")})\n`},extension_car_row_power:function(e,t){t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",t=e.getFieldValue("direction"),e=e.getFieldValue("speed");let r="";return"left"===t?r=`Control_Motor.Move_Left(${e})`:"right"===t&&(r=`Control_Motor.Move_Right(${e})`),r+"\n"},extension_car_row_power_time:function(e,t){t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",t=e.getFieldValue("direction");let r=e.getFieldValue("speed");e=e.getFieldValue("ms");let o="";return"left"===t?o=`Control_Motor.Move_Left(${r}, ${e/1e3})`:"right"===t&&(o=`Control_Motor.Move_Right(${r}, ${e/1e3})`),o+"\n"},extension_car_stop:function(e,t){return t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor","Control_Motor.close()\n"},extension_car_uniform_driving_power:function(e,t){return t.definitions_["from_sk_car.motor_import_Control_Motor"]="from sk_car.motor import Control_Motor",`Control_Motor.GS_run(${t=e.getFieldValue("lt")}, ${e.getFieldValue("rt")}, ${e.getFieldValue("lb")}, ${e.getFieldValue("rb")}, ${(e=e.getFieldValue("ms"))/1e3})\n`}},M={mechanical_arm_air_pump:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.suck_mode(${e.getFieldValue("type")})\n`},mechanical_arm_air_pump_angle:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.suck_rotate_angle(${e.getFieldValue("angle")})\n`},mechanical_arm_coordinates:function(e,r){return r.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",[`Control_Arm.get_axis_point(${e.getFieldValue("coordinates")})\n`,t.ATOMIC]},mechanical_arm_grap:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.gripper_angle(${t=e.getFieldValue("type")}, ${e.getFieldValue("angle")}, ${e=e.getFieldValue("ms")})\n`},mechanical_arm_initialization:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm","\n"},mechanical_arm_move_coordinates:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.move_point(${t=e.getFieldValue("x")}, ${e.getFieldValue("y")}, ${e.getFieldValue("z")}, ${e=e.getFieldValue("time")})\n`},mechanical_arm_move_photo:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.move_pixel_wh(${t=e.getFieldValue("x")}, ${e.getFieldValue("y")}, ${e.getFieldValue("z")}, ${e.getFieldValue("width")}, ${e=e.getFieldValue("height")})\n`},mechanical_arm_reset:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm","Control_Arm.reset_position()\n"},mechanical_arm_servo_parameters:function(e,t){t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",t=e.getFieldValue("servo");let r=e.getFieldValue("pulse"),o=e.getFieldValue("ms"),n="";return(e=e.getFieldValue("bol"))?1===t&&0>r&&2400<r?alert("舵机1脉冲值[0, 2400]"):2===t&&0>r&&1679<r?alert("舵机2脉冲值[0, 1679]"):3===t&&1081>r&&2400<r?alert("舵机3脉冲值[1081, 2400]"):n+=`Control_Arm.servo_set_position(${t}, ${r}, ${o}, ${e})\n`:n+=`Control_Arm.servo_set_position(${t}, ${r}, ${o}, ${e})\n`,n},mechanical_arm_servo_pulse:function(e,r){return r.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",[`Control_Arm.servo_get_position(${e.getFieldValue("servo")})\n`,t.ATOMIC]},mechanical_arm_uniform_move_coordinates:function(e,t){return t.definitions_.from_arm_module_import_Control_Arm="from arm_module import Control_Arm",`Control_Arm.move_axis_point(${t=e.getFieldValue("coordinates")}, ${e.getFieldValue("mm")}, ${e=e.getFieldValue("time")})\n`}},g=new m;g.addReservedWords("math,random,Number");var F=Object.assign({},c,E,T,N,I,A,p,O,L,M);for(const e in F)g.forBlock[e]=F[e];var $={};return $.Order=t,$.PythonGenerator=m,$.pythonGenerator=g,$.__namespace__=o,$}));