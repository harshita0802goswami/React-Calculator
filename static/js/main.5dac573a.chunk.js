(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(_,e,t){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_WebD_Projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function App(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState2=Object(C_WebD_Projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),expression=_React$useState2[0],setExpression=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),_React$useState4=Object(C_WebD_Projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState3,2),answer=_React$useState4[0],setAnswer=_React$useState4[1],display=function(_){setExpression((function(e){return e+_})),"="==expression[expression.length-1]&&(/[0-9.]/.test(_)?setExpression(_):setExpression(answer+_))},calculate=function calculate(){setAnswer(eval(expression)),setExpression((function(_){return _+"="}))},allClear=function(){setExpression(""),setAnswer(0)},clear=function(){setExpression((function(_){return _.split("").slice(0,_.length-1).join("")})),setAnswer(0)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"dis",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:expression,placeholder:"0",disabled:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"total",children:answer})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:clear,className:"click-btns C red",children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:allClear,className:"click-btns AC red",children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("/")},className:"click-btns div",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("*")},className:"click-btns mult",children:"x"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("7")},className:"click-btns seven dark",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("8")},className:"click-btns eight dark",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("9")},className:"click-btns nine dark",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("-")},className:"click-btns minus",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("4")},className:"click-btns four dark",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("5")},className:"click-btns five dark",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("6")},className:"click-btns six dark",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("+")},className:"click-btns add",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("1")},className:"click-btns one dark",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("2")},className:"click-btns two dark",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("3")},className:"click-btns three dark",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:calculate,className:"click-btns equals blue",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display("0")},className:"click-btns zero dark",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onClick:function(){return display(".")},className:"click-btns dot dark",children:"."})]})})}__webpack_exports__.a=App},6:function(_,e,t){"use strict";t.r(e);t(1);var c=t(4),s=t.n(c),r=t(5),n=(t(12),t(0));s.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(r.a,{})}),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.5dac573a.chunk.js.map