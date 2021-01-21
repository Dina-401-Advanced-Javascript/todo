(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{54:function(e,t,a){e.exports=a(84)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(24),c=a(25),r=a(35),l=a(32),o=a(0),i=a.n(o),u=a(18),m=a.n(u),s=a(8),d=a(9),f=a(28),p=a(6),E=a(39),b=function(e){var t=Object(o.useState)({}),a=Object(s.a)(t,2),n=a[0],c=a[1];return[function(e){c(Object(E.a)(Object(E.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))},function(t){t.preventDefault(),t.target.text.value&&(t.target.reset(),e("post",n),c(n))}]},h=i.a.createContext(),g=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={itemsPerPage:3,sortBy:"difficulty",showComplete:!0,currentPageNumber:0},c}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(i.a.Component);a(41);var v=function(e){var t,a=b((function(t,a){e.handleSubmit(t,a)})),n=Object(s.a)(a,2),c=n[0],r=n[1],l=Object(o.useContext)(h);return i.a.createElement(p.a,{onSubmit:r},i.a.createElement(p.a.Group,{controlId:"toDoItem"},i.a.createElement(p.a.Label,null,"Add a to do item"),i.a.createElement(p.a.Control,{type:"text","data-testid":"toDoItem",name:"text",placeholder:"Enter item details",onChange:c})),i.a.createElement(p.a.Group,{controlId:"assignedTo"},i.a.createElement(p.a.Control,{type:"text","data-testid":"assignedTo",name:"assignee",placeholder:"Enter name of assignee",onChange:c})),i.a.createElement(p.a.Group,{controlId:"dueDate"},i.a.createElement(p.a.Label,null,"Due date"),i.a.createElement(p.a.Control,{type:"date","data-testid":"dueDate",name:"duedate",placeholder:"Date",onChange:c})),i.a.createElement(p.a.Group,{controlId:"difficultyRange"},i.a.createElement(p.a.Label,null,"Difficulty Rating"),i.a.createElement(p.a.Control,(t={type:"range","data-testid":"difficultyRange",defaultValue:"1"},Object(d.a)(t,"type","range"),Object(d.a)(t,"min","1"),Object(d.a)(t,"max","5"),Object(d.a)(t,"name","difficulty"),Object(d.a)(t,"onChange",c),t))),i.a.createElement(f.a,{"data-testid":"submitButton",variant:"primary",type:"submit"},"Submit"),i.a.createElement(p.a.Group,{controlId:"formBasicCheckbox"},i.a.createElement(p.a.Check,{type:"checkbox",label:"Show Completed Items",onClick:function(t){l.showComplete=t.target.checked,e.handleSubmit("get",null)}})))},j=a(53),O=a(21),y=a.n(O),C="https://dina-basic-api-server.herokuapp.com/todo",x=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(o.useContext)(h),r=function(){console.log("getting...");var e=c.sortBy;y.a.get(C).then((function(t){return t.data.sort((function(t,a){return a[e]-t[e]})),t})).then((function(e){c.showComplete?n(e.data):n(e.data.filter((function(e){return!e.complete})))})).catch(console.error)};return[a,function(e,t){if(console.log({method:e},{id:t}),"put"===e){console.log("updating the item");var c=a.filter((function(e){return e._id===t}))[0]||{};if(c){c.complete=!c.complete;var l="".concat(C,"/").concat(t);y.a.put(l,{complete:c.complete}).then((function(e){n(a.map((function(t){return t._id===c._id?e.data:t})))})).catch(console.error)}}else if("post"===e)console.log("adding the item"),y.a.post(C,{text:t.text,assignee:t.assignee,duedate:t.duedate,difficulty:t.difficulty,complete:!1}).then((function(e){n([].concat(Object(j.a)(a),[e]))})).then((function(e){r()})).catch(console.error);else if("delete"===e){if(console.log("deleting the item"),t){var o="".concat(C,"/").concat(t);y.a.delete(o).then((function(e){r()})).catch(console.error)}}else"get"===e&&r()}]},D=a(51),k=a(36);a(80);var B=function(e){var t=Object(o.useContext)(h),a=t.itemsPerPage,n=t.currentPageNumber,c=Math.ceil(e.list.length/a),r=Object(o.useState)([]),l=Object(s.a)(r,2),u=l[0],m=l[1];return Object(o.useEffect)((function(){var t=e.list.slice(n*a,n*a+a);m(t)}),[e.list]),i.a.createElement("div",null,i.a.createElement("div",{className:"todolist"},u.map((function(t){return i.a.createElement(k.a,{key:t._id,id:t._id,onClose:function(){return e.updateDB("delete",t._id)}},i.a.createElement(k.a.Header,null,i.a.createElement(D.a,{variant:t.complete?"success":"danger",onClick:function(){return e.updateDB("put",t._id)}},i.a.createElement("strong",{className:"mr-auto"},t.complete?"Complete":"Pending")),i.a.createElement("strong",{className:"mr-auto"}," \xa0",t.assignee)),i.a.createElement(k.a.Body,null,t.text,i.a.createElement("small",null,t.duedate?i.a.createElement("div",null," Due ",t.duedate," "):""),i.a.createElement("small",null,i.a.createElement("div",{id:"difficulty"},"Difficulty: ",t.difficulty))))}))),i.a.createElement("div",{id:"pagination"},n>0?i.a.createElement("div",{id:"previous"},i.a.createElement("button",{id:"previousButton",onClick:function(){t.currentPageNumber--,n--,m(e.list.slice(n*a,n*a+a))}},"Previous")):"",c>n?i.a.createElement("div",{id:"next"},i.a.createElement("button",{id:"nextButton",onClick:function(){t.currentPageNumber++,n++,m(e.list.slice(n*a,n*a+a))}},"Next")):""))};a(81);var N=function(e){var t=x(),a=Object(s.a)(t,2),n=a[0],c=a[1];Object(o.useEffect)((function(){c("get")}),[]),Object(o.useEffect)((function(){return function(){var e=n.length,t=n.filter((function(e){return!e.complete})).length;document.title="To Do App - ".concat(t," of ").concat(e," items left")}()}));var r=n.filter((function(e){return!e.complete})).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("h2",null,"There ",r>1||0===r?"are ".concat(r," items"):"is 1 item"," left to complete")),i.a.createElement("section",null,i.a.createElement("div",{className:"toDoDiv"},i.a.createElement(v,{handleSubmit:c})),i.a.createElement("div",{className:"listDiv"},i.a.createElement(B,{list:n,updateDB:c}))))};a(82);var P=function(e){return i.a.createElement("div",{id:"footer"},i.a.createElement("hr",null),"\xa9 Dina Ayoub - Code Fellows 401")},S=(a(83),a(22)),I=a(52),w=a(27);var _=function(e){return i.a.createElement(S.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(S.a.Brand,{href:"/"},"To Do App"),i.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(I.a,{className:"mr-auto"}),i.a.createElement(p.a,{inline:!0},i.a.createElement(w.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),i.a.createElement(f.a,{variant:"outline-success"},"Search"))))};var T=function(e){return i.a.createElement("div",{id:"header"},i.a.createElement(_,null))};var G=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null,i.a.createElement(T,null),i.a.createElement(N,null),i.a.createElement(P,null)))},A=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(G,null)}}]),a}(i.a.Component),F=document.getElementById("root");m.a.render(i.a.createElement(A,null),F)}},[[54,1,2]]]);
//# sourceMappingURL=main.12934799.chunk.js.map