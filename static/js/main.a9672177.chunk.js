(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",ContactForm__form:"ContactForm_ContactForm__form__17iU_",ContactForm__subtitle:"ContactForm_ContactForm__subtitle__YPPZW",ContactForm__text:"ContactForm_ContactForm__text__3mhDi"}},27:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList__form:"ContactList_ContactList__form__x38ur",contact:"ContactList_contact__3ZIyH",deleteBtn:"ContactList_deleteBtn__TISf7"}},28:function(t,e,n){t.exports={FilterForm__text:"Filter_FilterForm__text__88W6t"}},29:function(t,e,n){t.exports={code:"App_code__2uyOK",title:"App_title__-GfWs"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(9),i=n.n(r),s=(n(17),n(8)),l=n(11),u=n(3),m=n(4),b=n(6),_=n(5),d=n(10),h=n.n(d),f=(n(26),function(t){Object(b.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChange=function(e){var n=e.currentTarget.value;t.setState({name:n})},t.handlePhoneChange=function(e){var n=e.currentTarget.value;t.setState({number:n})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmitProp(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"ContactForm",children:Object(a.jsxs)("form",{className:"ContactForm__form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"ContactForm__subtitle",children:["Name",Object(a.jsx)("input",{className:"ContactForm__text",type:"text",value:this.state.name,onChange:this.handleNameChange})]}),Object(a.jsxs)("label",{className:"ContactForm__subtitle",children:["Number",Object(a.jsx)("input",{className:"ContactForm__text",type:"text",value:this.state.number,onChange:this.handlePhoneChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component));n(27);var j=function(t){var e=t.contactsProp,n=t.onDeleteProp,c=t.children;return Object(a.jsxs)("div",{className:"ContactList",children:[c,Object(a.jsx)("ul",{className:"ContactList__form",children:e.map((function(t){var e=t.id,c=t.number,o=t.name;return Object(a.jsxs)("li",{className:"contact",children:[o,": ",c,Object(a.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})},C=(n(28),function(t){var e=t.value,n=t.filterProp;return Object(a.jsxs)("label",{className:"ContactForm",children:["Find contacts by name",Object(a.jsx)("input",{className:"FeilterForm__text",type:"text",value:e,onChange:n})]})}),p=(n(29),function(t){Object(b.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c=t.state.contacts;c.find((function(t){return t.name.toLocaleLowerCase()===n.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):c.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):t.setState((function(t){return{contacts:[Object(s.a)(Object(s.a)({},e),{},{id:h.a.generate()})].concat(Object(l.a)(t.contacts))}})),console.log(e),console.log(c)},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(n)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter;t.contacts;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"title",children:"Phonebook"}),Object(a.jsx)(f,{onSubmitProp:this.formSubmitHandler}),Object(a.jsx)("h2",{className:"title",children:"Contacts"}),Object(a.jsx)(j,{contactsProp:this.getVisibleContacts(),onDeleteProp:this.deleteContact,children:Object(a.jsx)(C,{value:e,filterProp:this.changeFilter})})]})}}]),n}(c.Component));i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a9672177.chunk.js.map