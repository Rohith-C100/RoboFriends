(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{128:function(e,t,n){},424:function(e,t,n){},425:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),s=n(16),a=n.n(s),o=(n(128),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,426)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),i=(n(129),n(48)),h=n(49),l=n(51),u=n(50),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})},j=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},e.id)}))})},b=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa3 own",children:Object(r.jsx)("input",{type:"search",placeholder:"search robots",onChange:t})})},f=(n(130),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops!, that's not good"}):this.props.children}}]),n}(c.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).OnsearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robots,c=(t.searchfield,this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())})));return n.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1 own",children:"Robofriends"}),Object(r.jsx)(b,{searchChange:this.OnsearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(p,{children:Object(r.jsx)(j,{robots:c})})})]}):Object(r.jsx)("h1",{children:"loading"})}}]),n}(c.Component);n(424);a.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),o()}},[[425,1,2]]]);
//# sourceMappingURL=main.69c836e0.chunk.js.map