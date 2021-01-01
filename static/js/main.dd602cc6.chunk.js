(this.webpackJsonpsaucepan=this.webpackJsonpsaucepan||[]).push([[0],{137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),r=n(11),c=n.n(r),s=n(142),d=n(12),u=n(13),l=n(15),p=n(14),b=n(34),j=n(6),m=function(e){var t="uppercase text-sm";return t+=e.marginY||" my-1 ",t+=e.hintColor||" text-gray-200 ",t+=e.fontWeight||" font-semibold",Object(a.jsx)("label",{className:t,htmlFor:e.htmlFor,children:e.hint})},h=function(e){var t="rounded-md outline-none ring-2 ";return t+=e.marginY||"my-2",t+=e.paddingX||" px-2 ",t+=e.paddingY||" py-1 ",t+=e.background||" bg-gray-800 ",t+=e.ringColor||" ring-gray-500 ",t+=e.ringColorFocus||" focus:ring-indigo-500 ",t+=e.textColor||" text-white ",Object(a.jsx)("input",{className:t,type:e.type,id:e.id,name:e.name,value:e.value,onChange:e.onChange})},x=function(e){return Object(a.jsx)("button",{className:"w-max mr-2 p-2 rounded-md bg-transparent hover:bg-red-500 text-white",type:e.type,id:e.id,name:e.name,onClick:e.onClick,children:Object(a.jsx)("span",{className:"flex items-center h-4",children:Object(a.jsx)(j.IconX,{})})})},f=function(e){var t="w-max box-border rounded-md font-medium";return t+=e.paddingX||" px-2.5 ",t+=e.paddingY||" py-2 ",t+=e.marginX||" my-4 ",t+=e.marginY||" ",t+=e.background||" bg-indigo-500 ",t+=e.backgroundHover||" bg-indigo-700 ",t+=e.textColor||" text-white ",Object(a.jsx)("button",{className:t,type:e.type,id:e.id,name:e.name,"aria-label":e.label,onClick:e.onClick,children:e.icon})},g=function(e){var t="w-full box-border rounded-md font-medium ";return t+=e.paddingX||" px-2",t+=e.paddingY||" py-2",t+=e.marginY||" my-4",t+=e.background||" bg-indigo-500",t+=e.backgroundHover||" hover:bg-indigo-700",t+=e.textColor||" text-white",Object(a.jsx)("button",{className:t,type:e.type,id:e.id,name:e.name,"aria-label":e.text,onClick:e.onClick,children:e.text})},v=function(e){var t="w-full mt-2 p-2 rounded-md text-left hover:bg-indigo-700 hover:text-white ";return t+=e.isActive?" bg-indigo-400 bg-opacity-10 text-indigo-400":" text-white ",Object(a.jsx)("button",{className:t,id:e.id,name:e.name,onClick:e.onClick,"aria-label":e.header,children:e.header})},O=n(33),_=n(49),S=n(50);O.a.use(_.a).init({resources:{en:{translations:S}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}}).then();var C=O.a,w="_insert_id",k="_insert_question",y="_insert_answer",I="_update_id",E="_update_question",M="_update_answer",N=function(e){return Object(a.jsxs)("div",{className:"mb-8 flex flex-row items-center",children:[Object(a.jsx)(x,{onClick:function(){return e.onDismiss()}}),Object(a.jsx)("span",{className:"my-1 font-semibold text-white text-2xl",children:C.t(e.header)})]})},H=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t="p-4 bg-gray-800 ";return t+=(this.props.isShown,NaN),Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)(N,{header:"header_create_sauce",onDismiss:function(){return e.props.onDismiss()}}),Object(a.jsxs)("form",{onSubmit:function(t){return e.props.onSubmit(e.props.saucepanId,t)},children:[Object(a.jsx)("input",{type:"hidden",id:w,name:w}),Object(a.jsx)(m,{hint:C.t("input_question"),htmlFor:k}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{background:"bg-gray-700",type:"text",id:k,name:k}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{hint:C.t("input_answer"),htmlFor:y}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{background:"bg-gray-700",type:"text",id:y,name:y}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{type:"submit",text:C.t("button_save")})]})]})}}]),n}(i.Component),R=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onInputChanged=function(e){switch(e.target.id){case I:a.setState({id:e.target.value});break;case E:a.setState({question:e.target.value});break;case M:a.setState({answer:e.target.value})}},a.state={id:a.props.id,question:a.props.question,answer:a.props.answer},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t="p-4 bg-gray-800 ";return t+=(this.props.isShown,NaN),Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)(N,{header:"header_edit_sauce",onDismiss:function(){return e.props.onDismiss()}}),Object(a.jsxs)("form",{onSubmit:function(t){return e.props.onSubmit(e.props.saucepanId,e.props.id,t)},children:[Object(a.jsx)("input",{type:"hidden",id:I,name:I,value:this.state.id,onChange:function(t){return e.onInputChanged(t)}}),Object(a.jsx)(m,{hint:C.t("input_question"),htmlFor:E}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{background:"bg-gray-700",type:"text",id:E,name:E,value:this.state.question,onChange:function(t){return e.onInputChanged(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{hint:C.t("input_answer"),htmlFor:M}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{background:"bg-gray-700",type:"text",id:M,name:M,value:this.state.answer,onChange:function(t){return e.onInputChanged(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{type:"submit",text:C.t("button_save")})]})]})}}]),n}(i.Component),T=n(32),q=n.n(T),D=(n(48),function(e){return Object(a.jsxs)("div",{className:"my-4 grid gap-2 grid-cols-auto-sauce grid-rows-auto-sauce",children:[Object(a.jsx)("button",{className:"bg-gray-800 border border-dashed rounded-md border-gray-500 hover:bg-gray-600 hover:shadow-md transition text-white",onClick:function(){return e.onCreate()},children:Object(a.jsx)(j.IconPlus,{className:"mx-auto"})}),e.sauces.map((function(t){return function(t){return Object(a.jsx)(F,{sauce:t,saucepanId:e.saucepanId,autoRenderToMarkdown:e.autoRenderToMarkdown,onEdit:e.onEdit,onRemove:e.onRemove,onCopy:e.onCopy},t._id)}(t)}))]})}),F=function(e){var t=e.sauce,n="**".concat(t.question).concat("**"),i="```".concat(t.answer).concat("```"),o=n.concat("  ").concat(i);return Object(a.jsxs)("div",{className:"flex flex-col justify-center p-4 border rounded-md text-white cursor-pointer hover:bg-indigo-500 hover:border-indigo-500",onClick:function(){return e.onCopy(o)},children:[Object(a.jsx)("div",{className:"text-lg",children:e.autoRenderToMarkdown?Object(a.jsx)(q.a,{children:n}):Object(a.jsx)("span",{children:n})}),Object(a.jsx)("div",{className:"text-md",children:e.autoRenderToMarkdown?Object(a.jsx)(q.a,{children:i}):Object(a.jsx)("span",{children:i})}),Object(a.jsxs)("div",{className:"space-x-2",children:[Object(a.jsx)(f,{icon:Object(a.jsx)(j.IconPencil,{}),label:C.t("button_edit"),onClick:function(n){return e.onEdit(t,n)}}),Object(a.jsx)(f,{icon:Object(a.jsx)(j.IconTrash,{}),label:C.t("button_remove"),onClick:function(n){return e.onRemove(e.saucepanId,t,n)}})]})]})},P="input_name",Y=function(e){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)(A,{id:e.data._id,header:e.data.name,isInHeaderEditMode:e.isInHeaderEditMode,onHeaderEdit:e.onHeaderEdit,onHeaderChanged:e.onHeaderChanged}),Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(D,{saucepanId:e.data._id,sauces:e.data.sauces,autoRenderToMarkdown:e.autoRenderToMarkdown,onCreate:e.onCreate,onEdit:e.onEdit,onRemove:e.onRemove,onCopy:e.onCopy})})]})},A=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onInputChanged=function(e){a.setState({header:e.target.value})},a.state={header:null!==a.props.header?a.props.header:C.t("saucepan_name_fallback")},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"p-1",children:[Object(a.jsx)("button",{className:"mr-2 p-2 text-white md:hidden",children:Object(a.jsx)(j.IconMenu2,{})}),e.props.isInHeaderEditMode?Object(a.jsxs)("form",{className:"inline-block",onSubmit:function(t){return e.props.onHeaderChanged(t)},children:[Object(a.jsx)("input",{type:"hidden",id:"input_id",name:P,value:e.props.id}),Object(a.jsx)(h,{type:"text",id:P,name:P,value:e.state.header,onChange:function(t){return e.onInputChanged(t)}}),Object(a.jsx)("input",{className:"hidden",type:"submit",id:"input_submit"})]}):Object(a.jsx)("span",{className:"font-bold text-3xl text-white",onClick:function(){return e.props.onHeaderEdit(!0)},children:e.state.header}),function(){if(!e.props.isInHeaderEditMode)return Object(a.jsx)("button",{className:"text-xs text-transparent hover:text-white",onClick:function(){return e.props.onHeaderEdit(!0)},children:Object(a.jsx)(j.IconPencil,{})})}()]})}}]),n}(i.Component),X=(n(136),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).onSaucepanAdded=function(){a.setState({saucepans:a.state.saucepans.concat({_id:Date.now(),name:null,sauces:[]})}),a.onShowToastNotification("feedback_saucepan_added")},a.onSaucepanModified=function(e){var t=a.state.saucepans,n=t.findIndex((function(t){return e._id===t._id}));n>-1&&(t[n]=e,a.setState({saucepans:t}))},a.onSaucepanSwitched=function(e){a.setState({currentSaucepanId:e._id})},a.onSaucepanHeaderEdit=function(e){a.setState({isInHeaderEditMode:e})},a.onSaucepanHeaderChanged=function(e){e.preventDefault();var t=+e.target[0].value,n=e.target[1].value;if(null!==t&&null!==n){var i=a.state.saucepans.find((function(e){return e._id===t}));i&&(i.name=n,a.onSaucepanHeaderEdit(!1),a.onSaucepanModified(i))}},a.onSauceInsert=function(e,t){t.preventDefault();var n=t.target[1].value,i=t.target[2].value;if(""!==n&&""!==i){var o={_id:Date.now(),question:n,answer:i},r=a.state.saucepans.find((function(t){return e===t._id}));r&&(r.sauces=r.sauces.concat(o),a.onSaucepanModified(r),a.onShowToastNotification("feedback_sauce_added"),a.onExitCreateMode())}},a.onSauceRemove=function(e,t,n){n.stopPropagation();var i=a.state.saucepans.find((function(t){return t._id===e}));i&&(i.sauces=i.sauces.filter((function(e){return e._id!==t._id})),a.onSaucepanModified(i),a.onShowToastNotification("feedback_sauce_removed"))},a.onSauceEdit=function(e,t){t.stopPropagation(),a.setState({isInEditMode:!0,currentSauce:e})},a.onSauceUpdate=function(e,t,n){n.preventDefault();var i=n.target[1].value,o=n.target[2].value;if(""!==i&&""!==o){var r=a.state.saucepans.find((function(t){return t._id===e}));if(r){var c=r.sauces.findIndex((function(e){return e._id===t}));if(c>-1){var s=r.sauces[c];s.question=i,s.answer=o,r.sauces[c]=s,a.onSaucepanModified(r),a.onShowToastNotification("feedback_sauce_updated"),a.onExitEditMode()}}}},a.onSauceCopied=function(e){navigator.clipboard.writeText(e).then((function(){a.onShowToastNotification("feedback_sauce_copied")}))},a.onShowToastNotification=function(e){b.b.dark(C.t(e),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a.onEnterCreateMode=function(){a.setState({isInCreateMode:!0,isInEditMode:!1})},a.onExitCreateMode=function(){a.setState({isInCreateMode:!1,currentSauce:null})},a.onEnterEditMode=function(){a.setState({isInEditMode:!0})},a.onExitEditMode=function(){a.setState({isInCreateMode:!1,isInEditMode:!1,currentSauce:null})};var i={_id:Date.now(),name:null,sauces:[]};return a.state={saucepans:[i],currentSaucepanId:i._id,isSauceRenderedInMarkdown:!0,isInCreateMode:!1,isInEditMode:!1,isInHeaderEditMode:!1,currentSauce:null},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=function(e){return null!==e.name?Object(a.jsx)("span",{children:e.name}):Object(a.jsx)("span",{children:C.t("saucepan_name_fallback")})};return Object(a.jsxs)("div",{className:"min-w-screen min-h-screen bg-gray-900",children:[Object(a.jsxs)("div",{className:"w-screen min-h-screen fixed z-10 md:flex md:flex-row",children:[Object(a.jsx)("div",{className:"top-0 left-0 overflow-x-hidden hidden p-2 border-r-2 border-gray-700 flex-shrink-0 flex-grow-0 flex-navigation md:flex-md-navigation md:block",children:Object(a.jsxs)("div",{className:"p-1",children:[Object(a.jsx)("div",{className:"my-4 font-medium text-2xl text-indigo-100",children:C.t("app_name")}),Object(a.jsx)(f,{icon:Object(a.jsx)(j.IconPlus,{}),onClick:this.onSaucepanAdded,label:C.t("button_add")}),Object(a.jsx)(i.Fragment,{children:e.state.saucepans.map((function(n){var i=!1;return n._id===e.state.currentSaucepanId&&(i=!0),Object(a.jsx)(v,{header:t(n),isActive:i,onClick:function(){return e.onSaucepanSwitched(n)}},n._id)}))})]})}),Object(a.jsx)("div",{className:"w-full p-4 flex-content md:flex-md-content",children:function(){var t=e.state.saucepans.findIndex((function(t){return t._id===e.state.currentSaucepanId}));if(t>-1){var n=e.state.saucepans[t];return Object(a.jsx)(Y,{data:n,autoRenderToMarkdown:e.state.isSauceRenderedInMarkdown,isInHeaderEditMode:e.state.isInHeaderEditMode,onRemove:e.onSauceRemove,onEdit:e.onSauceEdit,onCreate:e.onEnterCreateMode,onCopy:e.onSauceCopied,onHeaderEdit:e.onSaucepanHeaderEdit,onHeaderChanged:e.onSaucepanHeaderChanged})}}()}),function(){if(null!==e.state.currentSauce&&e.state.isInEditMode){var t=e.state.currentSauce;return Object(a.jsx)(R,{id:t._id,question:t.question,answer:t.answer,saucepanId:e.state.currentSaucepanId,isShown:e.state.isInEditMode,onSubmit:e.onSauceUpdate,onDismiss:e.onExitEditMode})}if(e.state.isInCreateMode)return Object(a.jsx)(H,{saucepanId:e.state.currentSaucepanId,isShown:e.state.isInCreateMode,onSubmit:e.onSauceInsert,onDismiss:e.onExitCreateMode})}()]}),Object(a.jsx)(b.a,{})]})}}]),n}(i.Component));n(137);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(s.a,{i18n:C,children:Object(a.jsx)(X,{})})}),document.getElementById("root"))},48:function(e,t,n){},50:function(e){e.exports=JSON.parse('{"app_name":"Saucepan","button_add":"Add","button_new":"New","button_save":"Save","button_copy":"Copy","button_edit":"Edit","button_remove":"Remove","button_cancel":"Cancel","input_question":"Question","input_answer":"Answer","feedback_saucepan_added":"Saucepan added","feedback_sauce_added":"Sauce added","feedback_sauce_removed":"Sauce removed","feedback_sauce_updated":"Sauce updated","feedback_sauce_copied":"Sauce copied","header_create_sauce":"Create Sauce","header_edit_sauce":"Edit Sauce","saucepan_name_fallback":"Unnamed Saucepan "}')}},[[138,1,2]]]);
//# sourceMappingURL=main.dd602cc6.chunk.js.map