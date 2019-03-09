define("ace/theme/dark",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-dark";
exports.cssText = ".ace-dark .ace_gutter {\
background: #191919;\
color: rgb(137,137,134)\
}\
.ace-dark .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-dark {\
background-color: #191919;\
color: #F8F8F2\
}\
.ace-dark .ace_cursor {\
color: #F8F8F0\
}\
.ace-dark .ace_marker-layer .ace_selection {\
background: #515151\
}\
.ace-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #191919;\
border-radius: 2px\
}\
.ace-dark .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3B3A32\
}\
.ace-dark .ace_marker-layer .ace_active-line {\
background: rgba(61, 61, 61, 0.33)\
}\
.ace-dark .ace_gutter-active-line {\
background-color: rgba(61, 61, 61, 0.33)\
}\
.ace-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid #515151\
}\
.ace-dark .ace_fold {\
background-color: #8cdaff;\
border-color: #F8F8F2\
}\
.ace-dark .ace_keyword {\
color: #ff5e5e\
}\
.ace-dark .ace_constant.ace_language {\
color: #ff8942\
}\
.ace-dark .ace_constant.ace_numeric {\
color: #fdb082\
}\
.ace-dark .ace_constant.ace_character {\
color: #fdb082\
}\
.ace-dark .ace_constant.ace_other {\
color: #fdb082\
}\
.ace-dark .ace_support.ace_function {\
color: #6699cc\
}\
.ace-dark .ace_support.ace_constant {\
color: #ecfdb9\
}\
.ace-dark .ace_support.ace_class {\
color: #fbe3bf\
}\
.ace-dark .ace_support.ace_type {\
color: #fbe3bf\
}\
.ace-dark .ace_storage {\
color: #ff5e5e\
}\
.ace-dark .ace_storage.ace_type {\
font-style: italic;\
color: #fbdfb5\
}\
.ace-dark .ace_invalid {\
color: #F8F8F0;\
background-color: #f92649\
}\
.ace-dark .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #ff9664\
}\
.ace-dark .ace_string {\
color: #fbe3bf\
}\
.ace-dark .ace_comment {\
color: #6d6d6d\
}\
.ace-dark .ace_variable {\
color: #e9fdac\
}\
.ace-dark .ace_variable.ace_parameter {\
font-style: italic;\
color: #fc9354\
}\
.ace-dark .ace_entity.ace_other.ace_attribute-name {\
color: #97d8ea\
}\
.ace-dark .ace_entity.ace_name.ace_function {\
color: #8cdaff\
}\
.ace-dark .ace_entity.ace_name.ace_tag {\
color: #ff5e5e\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    window.require(["ace/theme/dark"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            