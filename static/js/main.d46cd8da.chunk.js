(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={FilterForm__text:"Filter_FilterForm__text__88W6t"}},11:function(t,e,n){t.exports={code:"App_code__2uyOK",title:"App_title__-GfWs"}},2:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",ContactForm__form:"ContactForm_ContactForm__form__17iU_",ContactForm__subtitle:"ContactForm_ContactForm__subtitle__YPPZW",ContactForm__text:"ContactForm_ContactForm__text__3mhDi"}},21:function(t,e,n){},3:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList__form:"ContactList_ContactList__form__x38ur",contact:"ContactList_contact__3ZIyH",deleteBtn:"ContactList_deleteBtn__TISf7"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(13),i=n.n(r),s=(n(21),n(12)),l=n(15),u=n(5),m=n(6),b=n(8),_=n(7),d=n(14),h=n.n(d),f=n(2),j=n.n(f),C=function(t){Object(b.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChange=function(e){var n=e.currentTarget.value;t.setState({name:n})},t.handlePhoneChange=function(e){var n=e.currentTarget.value;t.setState({number:n})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;a&&c?(t.props.onSubmitProp(t.state),t.reset()):alert("You try submit empty field, please add Name or Number")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:j.a.ContactForm,children:Object(a.jsxs)("form",{className:j.a.ContactForm__form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:j.a.ContactForm__subtitle,children:["Name",Object(a.jsx)("input",{className:j.a.ContactForm__text,type:"text",value:this.state.name,onChange:this.handleNameChange})]}),Object(a.jsxs)("label",{className:j.a.ContactForm__subtitle,children:["Number",Object(a.jsx)("input",{className:j.a.ContactForm__text,type:"tel",value:this.state.number,onChange:this.handlePhoneChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),p=n(3),x=n.n(p);var O=function(t){var e=t.contactsProp,n=t.onDeleteProp,c=t.children;return Object(a.jsxs)("div",{className:x.a.ContactList,children:[c,Object(a.jsx)("ul",{className:x.a.ContactList__form,children:e.map((function(t){var e=t.id,c=t.number,o=t.name;return Object(a.jsxs)("li",{className:x.a.contact,children:[o,": ",c,Object(a.jsx)("button",{className:x.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})},v=n(10),F=n.n(v),g=function(t){var e=t.value,n=t.filterProp;return Object(a.jsxs)("label",{className:F.a.ContactForm,children:["Find contacts by name",Object(a.jsx)("input",{className:F.a.FeilterForm__text,type:"text",value:e,onChange:n})]})},N=n(11),y=n.n(N),S=function(t){Object(b.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c=t.state.contacts;c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):c.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):t.setState((function(t){return{contacts:[Object(s.a)(Object(s.a)({},e),{},{id:h.a.generate()})].concat(Object(l.a)(t.contacts))}})),console.log(e),console.log(c)},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(n)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(a.jsx)(C,{onSubmitProp:this.formSubmitHandler}),Object(a.jsx)("h2",{className:y.a.title,children:"Contacts"}),Object(a.jsx)(O,{contacts:this.getVisibleContacts(),onDelete:this.deleteContact,children:Object(a.jsx)(g,{value:t,filterProp:this.changeFilter})})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d46cd8da.chunk.js.map