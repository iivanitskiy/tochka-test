(this["webpackJsonptochka-test"]=this["webpackJsonptochka-test"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),l=s.n(c),n=s(4),a=s.n(n),i=(s(14),s(15),s(16),s(17),s(0));function r(e){var t=e.formTitle,s=e.placeHolder,c=e.fullWidth;return Object(i.jsx)("div",{className:"form ".concat(c?"fullWidth":"halfWidth"),children:Object(i.jsxs)("div",{className:"form__field",children:[Object(i.jsx)("p",{className:"form__title",children:t}),Object(i.jsx)("input",{type:"text",placeholder:s})]})})}s(19);var j=s(3),o=s(5),d=s(6),h=s(9),b=s(8),x=(s(20),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state=Object(j.a)(Object(j.a)({},e.props),{},{items:e.props.items||[],selectedItem:{value:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",id:0}||e.props.selectedItem,showItems:!1,defaultValue:!0,widthBox:e.props.widthBox}),e.dropDown=function(){e.setState((function(e){return{showItems:!e.showItems}}))},e.selectItem=function(t){e.setState({selectedItem:t,showItems:!1,defaultValue:!1})},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"select-box__box",children:[Object(i.jsxs)("div",{className:"select-box__container",children:[Object(i.jsx)("div",{className:"select-box__selected-item ".concat(this.state.defaultValue?"":"black"),children:this.state.selectedItem.value}),Object(i.jsx)("div",{className:"select-box__arrow",onClick:this.dropDown,children:Object(i.jsx)("span",{className:"".concat(this.state.showItems?"select-box__arrow_up":"select-box__arrow_down")})})]}),Object(i.jsx)("div",{className:"select-box__items ".concat(this.props.widthBox?"":"halfWidth"),style:{display:this.state.showItems?"block":"none"},children:this.state.items.map((function(t){return Object(i.jsx)("div",{onClick:function(){return e.selectItem(t)},className:e.state.selectedItem===t?"selected":"",children:t.value},t.id)}))})]})}}]),s}(l.a.Component)),m=function(e){var t=e.selectTitle,s=e.fullWidth,c=e.widthBox;return Object(i.jsxs)("div",{className:"select ".concat(s?"fullWidth":"halfWidth"),children:[Object(i.jsx)("p",{className:"select__title",children:t}),Object(i.jsx)(x,{items:[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 1",id:1},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2",id:2},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 3",id:3},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 4",id:4},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 5",id:5}],widthBox:c})]})},u=s(7);s(21);function O(){var e=l.a.useState(!1),t=Object(u.a)(e,2),s=t[0],c=t[1];return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsxs)("label",{className:"checkbox",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("input",{type:"checkbox",checked:s,onChange:function(){return c(!s)}}),Object(i.jsx)("span",{})]}),Object(i.jsx)("p",{className:"checkbox__text",children:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"})]}),s&&Object(i.jsxs)("div",{className:"checkbox__container",children:[Object(i.jsx)("div",{style:{marginRight:12},children:Object(i.jsx)(r,{formTitle:"\u041e\u0442, \xb0C",placeHolder:"0",fullWidth:!1})}),Object(i.jsx)(r,{formTitle:"\u0414\u043e, \xb0C",placeHolder:"0",fullWidth:!1})]})]})}s(22);function f(e){var t=e.className;return Object(i.jsxs)("form",{className:t,children:[Object(i.jsx)("input",{type:"text",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"}),Object(i.jsx)("button",{children:"\u041d\u0415 \u0412\u042b\u0411\u0420\u0410\u041d\u041e"})]})}s(23);function p(){return Object(i.jsxs)("form",{className:"comment",children:[Object(i.jsx)("p",{className:"comment__title",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"}),Object(i.jsx)("textarea",{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u044a\u0435\u0437\u0434\u0430 \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e \u0441\u043a\u043b\u0430\u0434\u0430 \u0438\u043b\u0438 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0430 \u043a \u0430\u0434\u0440\u0435\u0441\u0443"})]})}s(24);function N(){return Object(i.jsx)("div",{className:"tip",children:Object(i.jsx)("p",{className:"tip__text",children:"\u0414\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0433\u0440\u0443\u0437\u0430, \u043f\u0443\u043d\u043a\u0442\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438 \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f."})})}function _(){return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"title",children:"FTL: \u041f\u0440\u044f\u043c\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430"})}),Object(i.jsxs)("main",{className:"content",children:[Object(i.jsxs)("section",{className:"section route",children:[Object(i.jsxs)("p",{className:"subtitle",children:[Object(i.jsx)("span",{className:"number",children:"1"})," \u041c\u0430\u0440\u0448\u0440\u0443\u0442"]}),Object(i.jsx)(r,{formTitle:"\u041e\u0442\u043a\u0443\u0434\u0430",fullWidth:!0}),Object(i.jsx)(r,{formTitle:"\u041a\u0443\u0434\u0430",fullWidth:!0})]}),Object(i.jsxs)("section",{className:"section transport",children:[Object(i.jsxs)("p",{className:"subtitle",children:[Object(i.jsx)("span",{className:"number",children:"2"})," \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442"]}),Object(i.jsxs)("div",{className:"select__container",children:[Object(i.jsx)(m,{selectTitle:"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0451\u043c\u043d\u043e\u0441\u0442\u044c",fullWidth:!1,widthBox:!1}),Object(i.jsx)(m,{selectTitle:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0438",fullWidth:!1,widthBox:!1})]})]}),Object(i.jsxs)("section",{className:"section cargo",children:[Object(i.jsxs)("p",{className:"subtitle",children:[Object(i.jsx)("span",{className:"number",children:"3"})," \u0413\u0440\u0443\u0437"]}),Object(i.jsx)(m,{selectTitle:"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430",fullWidth:!0,widthBox:!0}),Object(i.jsxs)("div",{className:"cargo__container",children:[Object(i.jsx)(m,{selectTitle:"\u041a\u043b\u0430\u0441\u0441 \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438",fullWidth:!1,widthBox:!1}),Object(i.jsx)(r,{formTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c,\u2006\u20bd",placeHolder:"\u2265 1",fullWidth:!1})]}),Object(i.jsx)(O,{})]}),Object(i.jsxs)("section",{className:"section time",children:[Object(i.jsxs)("p",{className:"subtitle",children:[Object(i.jsx)("span",{className:"number",children:"4"})," \u0412\u0440\u0435\u043c\u044f"]}),Object(i.jsxs)("div",{className:"adress__container",children:[Object(i.jsx)("p",{className:"adress__text",children:"\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0431\u044b\u0442\u044c \u043d\u0430 \u0442\u043e\u0447\u043a\u0443"}),Object(i.jsx)("p",{className:"adress__text",children:"700 \u043a\u043c \u0432 \u0434\u0435\u043d\u044c"})]}),Object(i.jsx)(f,{className:"adress"}),Object(i.jsx)(f,{className:"adress second"})]}),Object(i.jsx)("section",{className:"section comments",children:Object(i.jsx)(p,{})}),Object(i.jsx)(N,{})]})]})}var v=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(_,{})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),l(e),n(e),a(e)}))};a.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),w()}],[[25,1,2]]]);
//# sourceMappingURL=main.15f13232.chunk.js.map