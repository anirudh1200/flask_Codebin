(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(286)},139:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),l=a.n(r),i=(a(139),a(11)),c=a(12),s=a(15),u=a(13),d=a(14),p=a(290),h=a(289),m=a(133),g=a(43),f=a(117),y=a.n(f),b=a(118),E=a.n(b),v=a(21),j=a.n(v),w=a(10),C=a.n(w),O=a(38),S=a.n(O),k=a(287),x=a(24),D=a.n(x),L=a(119),M=a.n(L),T=a(53),A=a.n(T),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0},a.handleClose=function(){a.props.handleClose(),a.setState({open:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(A.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},o.a.createElement("div",{style:{top:"15%",left:"10%",height:"60%",width:"80%"},className:e.paper},o.a.createElement(j.a,{variant:"h2",align:"center",style:{marginTop:"3%",marginBottom:"5%",fontFamily:"Major Mono Display"}},"how it works"),o.a.createElement(j.a,{variant:"h6",align:"center",style:{fontFamily:"Major Mono Display",marginBottom:"3%"}},"upload a code snippet"),o.a.createElement(j.a,{variant:"h6",align:"center",style:{fontFamily:"Major Mono Display",marginBottom:"3%"}},"go to codebinn.herokuapp.com/d/(url) to download in txt format"),o.a.createElement(j.a,{variant:"h6",align:"center",style:{fontFamily:"Major Mono Display",marginBottom:"3%"}},"go to codebinn.herokuapp.com/d/pdf/(url) to download in pdf format"),o.a.createElement(j.a,{variant:"h6",align:"center",style:{fontFamily:"Major Mono Display",marginBottom:"3%"}},"go to codebinn.herokuapp.com/d/pdf/size/(url) to download in pdf format with specific font size"))))}}]),t}(o.a.Component),U=Object(g.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"}}})(F);var z=Object(g.withStyles)({root:{flexGrow:1,justifyContent:"center",alignItems:"center"}})(function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],i=e.classes,c=C.a[900],s=function(){return l("")};return o.a.createElement("div",{className:i.root},o.a.createElement(y.a,{position:"static",style:{backgroundColor:c}},o.a.createElement(E.a,{className:i.root},o.a.createElement(k.a,{to:"/",style:{textDecoration:"none"}},o.a.createElement(j.a,{variant:"h6",style:{color:"white",letterSpacing:"0.5em",fontSize:"1.5em"}},"CODEBIN")),o.a.createElement(k.a,{to:"/panel",style:{margin:0,padding:0}},o.a.createElement(D.a,{"aria-label":"Add",style:{position:"absolute",right:"12%",top:"5%",backgroundColor:c}},o.a.createElement(M.a,{style:{color:"white"}}))),o.a.createElement(D.a,{"aria-label":"Add",style:{position:"absolute",fontSize:"1.2em",right:"8%",top:"5%",backgroundColor:c,color:"white"},onClick:function(){return l(o.a.createElement(U,{handleClose:s}))}},"\u2139"),o.a.createElement(k.a,{to:"/uploadform",style:{margin:0,padding:0}},o.a.createElement(D.a,{"aria-label":"Add",style:{position:"absolute",right:"4%",top:"5%",backgroundColor:c}},o.a.createElement(S.a,{style:{color:"white"}}))))),r)}),P=a(44),B=a.n(P),H=a(28),N=a.n(H),R=a(30),V=a.n(R),W=a(55),I=a.n(W),J=a(32),_=a.n(J),q=a(56),Y=a.n(q),$=a(80),G=a.n($),K=a(120),Q=a.n(K),X=a(121),Z=a.n(X),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isHovered:!1},a.downloadFile=function(e){var t=a.props.paste.url;".txt"===e?fetch("/d/".concat(t)).then(function(e){return e.blob()}).then(function(a){var n=window.URL.createObjectURL(a),o=document.createElement("a");o.href=n,o.download=t+e,document.body.appendChild(o),o.click(),o.remove()}).catch(console.log):fetch("/d/pdf/".concat(t)).then(function(e){return e.blob()}).then(function(a){var n=window.URL.createObjectURL(a),o=document.createElement("a");o.href=n,o.download=t+e,document.body.appendChild(o),o.click(),o.remove()}).catch(console.log)},a.redirect=function(e){var t=a.props.paste.url;a.props.history.push("/"+e+"/".concat(t))},a.handleMouseEnter=function(){a.setState({isHovered:!0})},a.handleMouseLeave=function(){a.setState({isHovered:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.paste;e=this.state.isHovered?{backgroundColor:C.a[200],margin:"0.5%"}:{margin:"0.5%"};var n={width:"8%",margin:"auto"};return o.a.createElement(N.a,{style:e,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},o.a.createElement(I.a,null,o.a.createElement(_.a,null,o.a.createElement(Y.a,null))),o.a.createElement(V.a,{style:{letterSpacing:"0.05em"},primary:a.url,secondary:a.date}),o.a.createElement(Q.a,{style:n,onClick:function(){return t.redirect("edit")}}),o.a.createElement(Z.a,{style:n,onClick:function(){return t.redirect("view")}}),o.a.createElement(G.a,{style:n,onClick:function(){return t.downloadFile(".txt")}}),o.a.createElement(G.a,{style:n,onClick:function(){return t.downloadFile(".pdf")}}))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pasteList:[]},a.componentDidMount=function(){fetch("/d/getall").then(function(e){return e.json()}).then(function(e){return a.setState({pasteList:e})})},a.redirectToUpload=function(){a.props.history.push("/uploadform")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=C.a[900],a={width:"8%",padding:"auto",textAlign:"center"},n=this.state.pasteList.map(function(t,a){return o.a.createElement(ee,{paste:t,key:a,history:e.props.history})});return o.a.createElement("div",{style:{margin:"0% 5%"}},o.a.createElement(B.a,{style:{width:"100%"}},o.a.createElement(N.a,null,o.a.createElement(V.a,null),o.a.createElement("p",{style:a},"Edit"),o.a.createElement("p",{style:a},"View"),o.a.createElement("p",{style:a},".txt"),o.a.createElement("p",{style:a},".pdf")),n),o.a.createElement(D.a,{"aria-label":"Add",style:{position:"fixed",bottom:"10%",right:"5%",backgroundColor:t,color:"white"},onClick:this.redirectToUpload},o.a.createElement(S.a,{fontSize:"large"})))}}]),t}(n.Component),ae=a(40),ne=a(57),oe=a(41),re=a.n(oe),le=a(39),ie=a.n(le),ce=function(e){var t=e.getMonth()+1;return t<10&&(t="0"+t),e.getDate()+"-"+t+"-"+e.getFullYear()},se=a(54),ue=a(122),de=a.n(ue),pe=a(123),he=a.n(pe),me=a(45),ge=a.n(me),fe=["c","c#","clojure","cobol","coffee","cpp","css","dart","django","ejs","elixir","erlang","f#","fortran","golang","groovy","haml","haskell","html","java","javascript","json","jsx","julia","kotlin","less","lua","matlab","mysql","objectivec","pascal","perl","perl6","pgsql","php","plaintext","prolog","python","r","ruby","rust","sass","scala","scss","sql","svg","swift","text","tsx","typescript","xml"],ye=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,language:"plaintext"},a.componentDidMount=function(){a.props.getDropdown(Object(se.a)(a))},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=Boolean(t);return o.a.createElement("div",null,o.a.createElement(ge.a,{"aria-label":"More","aria-owns":a?"long-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},this.state.language),o.a.createElement(de.a,{id:"long-menu",anchorEl:t,open:a,onClose:this.handleClose,PaperProps:{style:{maxHeight:264,width:200}}},fe.map(function(t){return o.a.createElement(he.a,{key:t,selected:t===e.state.language,onClick:function(){e.handleClose(),e.setState({language:t}),e.props.changeLanguage(t)}},t)})))}}]),t}(o.a.Component),be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={editorText:"Loading...",editor:""},a.changeLanguage=function(e){switch(e){case"c":case"cpp":e="c_cpp";break;case"c#":e="csharp";break;case"f#":e="fsharp";break;case"plaintext":e="plain_text"}a.state.editor.getSession().setMode("ace/mode/".concat(e)),a.props.handleLanguageChange(e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=window.ace,t=Object(r.findDOMNode)(this.refs.root),a=e.edit(t);this.setState({editor:a}),a.setTheme("ace/theme/dark"),a.getSession().setMode("ace/mode/plain_text"),a.setShowPrintMargin(!1),a.setOptions({minLines:this.props.numberOfLines}),a.setOptions({maxLines:this.props.numberOfLines}),a.setOption("fontSize",18),a.setValue(this.state.editorText,-1),this.props.getEditor(a)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(ye,{style:{marginLeft:"30%"},changeLanguage:this.changeLanguage,getDropdown:this.props.getDropdown}),o.a.createElement("div",{ref:"root",style:{fontSize:"14px !important",border:"1px solid lightgray"}},this.props.code))}}]),t}(n.Component),Ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pasteData:"",url:"",date:ce(new Date),status:"",language:"plain_text",editor:""},a.handleChange=function(e){a.setState(Object(ne.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=a.state.editor.getValue().replace(/\t/g,"    ");a.setState({pasteData:e},a.upload)},a.handleLanguageChange=function(e){a.setState({language:e})},a.getDropdown=function(e){},a.upload=function(){if(a.validateForm()){var e=a.state,t=(e.editor,e.status,Object(ae.a)(e,["editor","status"]));fetch("/d/upload",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.displayChip({type:"success",displayText:"Uploaded Successfully !!"}),a.props.history.push("/")):e.status?a.setState({status:e.status}):a.props.displayChip({type:"fail"})}).catch(function(e){console.log(e),a.props.displayChip({type:"fail"})})}},a.getEditor=function(e){a.setState({editor:e}),e.setValue("")},a.validateForm=function(){for(var e=a.state.url,t=["download","panel","upload","pdf","delete","uploadform"],n=0;n<t.length;n++)if(e===t[n])return a.setState({status:"* Url is a reserved word. Please change it"}),!1;for(var o=0;o<e.length;o++)if(-1!=="* |,\":<>[]{}`\\';()@&$#%".indexOf(e[o]))return a.setState({status:"* URL cannot contain special characters or spaces"}),!1;return a.state.pasteData?!!e||(a.setState({status:"* Please Enter URL"}),!1):(a.setState({status:"* Your Paste cannot be empty!"}),!1)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(j.a,{variant:"h4",style:{width:"100%",margin:"1% 0%",textAlign:"center",color:C.a[800]}},"Upload Your Paste"),o.a.createElement("form",{autoComplete:"off",style:{width:"90%",margin:"0% 5%"}},o.a.createElement(be,{initialValue:"",name:"pasteData",getEditor:this.getEditor,numberOfLines:34,handleLanguageChange:this.handleLanguageChange,getDropdown:this.getDropdown}),o.a.createElement(re.a,{disabled:!0,id:"standard-disabled",value:"codebinn.herokuapp.com/d/",margin:"normal",style:{maxWidth:"62%",width:"210px"}}),o.a.createElement(re.a,{id:"standard-name",label:"Url",value:this.state.name,name:"url",onChange:this.handleChange,margin:"none",style:{maxWidth:"36%"}}),o.a.createElement("div",{style:{marginTop:"2%",textAlign:"center",marginBottom:"30px"}},o.a.createElement("div",{style:{color:"red"}},this.state.status),o.a.createElement(D.a,{variant:"extended","aria-label":"Delete",onClick:this.handleSubmit,style:{color:C.a[50],backgroundColor:C.a[800]}},o.a.createElement(ie.a,{style:{color:C.a[50]}}),"Upload"))))}}]),t}(n.Component),ve=a(58),je=a.n(ve),we=function(e){var t=C.a[900];return o.a.createElement(n.Fragment,null,o.a.createElement("div",{style:{backgroundImage:"url(".concat(je.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"91vh",position:"flexible",top:"8%",bottom:0,left:0,right:0}},o.a.createElement(j.a,{align:"center",variant:"h2",style:{fontFamily:"Major Mono Display",fontSize:"10vh",marginBottom:15,paddingTop:"30vh",fontWeight:"bold"}},"codebin"),o.a.createElement(j.a,{align:"center",variant:"h6",style:{fontFamily:"Major Mono Display"}},"enjoy the ease of sharing"),o.a.createElement(D.a,{variant:"extended","aria-label":"Delete",onClick:function(){e.history.push("/uploadform")},size:"large",style:{backgroundColor:t,color:"white",fontSize:"1.5em",minHeight:"50px",minWidth:"120px",marginTop:"2%",display:"block",marginLeft:"auto",marginRight:"auto"}},o.a.createElement(ie.a,{size:"large"}),"Upload")))},Ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){setTimeout(a.redirect,1500)},a.redirect=function(){a.props.history.push("/")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundImage:"url(".concat(je.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"91vh",position:"flexible",top:"8%",bottom:0,left:0,right:0}},o.a.createElement(j.a,{align:"center",variant:"h2",style:{fontFamily:"Major Mono Display",fontSize:"4em",marginBottom:15,paddingTop:"30vh",fontWeight:"bold"}},"404....not found :("))}}]),t}(n.Component),Oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={url:"",editor:"",dropdown:""},a.componentDidMount=function(){var e=a.props.location.pathname.slice(6);a.setState({url:e}),a.getData(e)},a.getData=function(e){fetch("/d/view/".concat(e)).then(function(e){return e.json()}).then(function(e){a.state.editor.setValue(e.pasteData),a.state.editor.getSession().setMode("ace/mode/".concat(e.language)),a.state.dropdown.setState({language:e.language})}).catch(console.log)},a.getEditor=function(e){a.setState({editor:e})},a.handleLanguageChange=function(e){},a.getDropdown=function(e){a.setState({dropdown:e})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(j.a,{variant:"h4",style:{width:"100%",margin:"1% 0%",textAlign:"center",color:C.a[800]}},this.state.url),o.a.createElement("div",{style:{width:"90%",margin:"0% 4%"}},o.a.createElement(be,{name:"pasteData",getEditor:this.getEditor,numberOfLines:40,handleLanguageChange:this.handleLanguageChange,getDropdown:this.getDropdown})))}}]),t}(n.Component),Se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pasteData:"",url:"",language:"",dropdown:"",editor:""},a.componentDidMount=function(){var e=a.props.location.pathname.slice(6);a.setState({url:e}),a.getData(e)},a.getData=function(e){fetch("/d/view/".concat(e)).then(function(e){return e.json()}).then(function(e){a.state.editor.setValue(e.pasteData),a.state.editor.getSession().setMode("ace/mode/".concat(e.language)),a.state.dropdown.setState({language:e.language})}).catch(console.log)},a.handleSubmit=function(){var e=a.state.editor.getValue().replace(/\t/g,"    ");a.setState({pasteData:e},a.upload)},a.handleLanguageChange=function(e){a.setState({language:e})},a.upload=function(){var e=a.state,t=(e.dropdown,e.editor,Object(ae.a)(e,["dropdown","editor"]));fetch("/d/edit",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.success?(a.props.displayChip({type:"success",displayText:"File Edited Successfully"}),a.props.history.push("/")):a.props.displayChip({type:"fail"})}).catch(function(e){console.log(e),a.props.displayChip({type:"fail"})})},a.getEditor=function(e){a.setState({editor:e})},a.getDropdown=function(e){a.setState({dropdown:e})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(j.a,{variant:"h4",style:{width:"100%",margin:"1% 0%",textAlign:"center",color:C.a[800]}},"Update ",this.state.url),o.a.createElement("form",{autoComplete:"off",style:{width:"90%",margin:"0% 5%"}},o.a.createElement(be,{initialValue:this.state.pasteData,name:"pasteData",getEditor:this.getEditor,numberOfLines:36,handleLanguageChange:this.handleLanguageChange,getDropdown:this.getDropdown}),o.a.createElement("div",{style:{marginTop:"2%",textAlign:"center",marginBottom:"30px"}},o.a.createElement("div",{style:{color:"red"}},this.state.status),o.a.createElement(D.a,{variant:"extended","aria-label":"Delete",onClick:this.handleSubmit,style:{color:C.a[50],backgroundColor:C.a[800]}},o.a.createElement(ie.a,{style:{color:C.a[50]}}),"Update"))))}}]),t}(n.Component),ke=a(124),xe=a.n(ke),De=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isHovered:!1},a.handleDelete=function(){var e=a.props.paste.url;fetch("/d/delete/".concat(e)).then(function(e){return e.json()}).then(function(t){t.success?(a.props.displayChip({type:"success",displayText:"Deleted Successfully !!"}),a.props.handleDelete(e)):a.props.displayChip({type:"fail"})}).catch(function(e){console.log(e),a.props.displayChip({type:"fail"})})},a.handleMouseEnter=function(){a.setState({isHovered:!0})},a.handleMouseLeave=function(){a.setState({isHovered:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props.paste;e=this.state.isHovered?{backgroundColor:C.a[200],margin:"0.5%"}:{margin:"0.5%"};return o.a.createElement(N.a,{style:e,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},o.a.createElement(I.a,null,o.a.createElement(_.a,null,o.a.createElement(Y.a,null))),o.a.createElement(V.a,{style:{letterSpacing:"0.05em"},primary:t.url,secondary:t.date}),o.a.createElement(xe.a,{style:{width:"20%",margin:"auto"},onClick:this.handleDelete}))}}]),t}(n.Component),Le=a(125),Me=a.n(Le),Te=a(129),Ae=a.n(Te),Fe=a(127),Ue=a.n(Fe),ze=a(128),Pe=a.n(ze),Be=a(126),He=a.n(Be),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0,username:"",password:"",status:""},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){a.setState(Object(ne.a)({},e.target.name,e.target.value))},a.handleLogin=function(){if(a.validateForm()){var e=a.state,t=(e.open,e.status,Object(ae.a)(e,["open","status"]));fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e.login?a.handleClose():a.setState({status:"Credentials are incorrect"})}).catch(console.log)}},a.validateForm=function(){return a.state.username?!!a.state.password||(a.setState({status:"** Please Enter Password !!"}),!1):(a.setState({status:"** Please Enter Username !!"}),!1)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=o.a.createElement("span",{style:{color:"red",fontSize:"1em",marginLeft:"5%"}},this.state.status);return o.a.createElement("div",null,o.a.createElement(Me.a,{open:this.state.open,"aria-labelledby":"form-dialog-title"},o.a.createElement(He.a,{id:"form-dialog-title"},"Login"),o.a.createElement(Ue.a,null,o.a.createElement(Pe.a,null,"Please login to delete files"),o.a.createElement(re.a,{autoFocus:!0,margin:"dense",name:"username",label:"Username",type:"text",onChange:this.handleChange,fullWidth:!0}),o.a.createElement(re.a,{margin:"dense",name:"password",label:"Password",type:"password",onChange:this.handleChange,fullWidth:!0})),e,o.a.createElement(Ae.a,null,o.a.createElement(ge.a,{onClick:this.handleLogin,color:"primary"},"Login"))))}}]),t}(o.a.Component),Re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pasteList:[],chip:""},a.componentDidMount=function(){fetch("/d/download").then(function(e){return e.json()}).then(function(e){return a.setState({pasteList:e})})},a.redirectToUpload=function(){a.props.history.push("/uploadform")},a.handleDelete=function(e){var t=a.state.pasteList.filter(function(t){return t.url!==e});a.setState({pasteList:t})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=C.a[900],a=this.state.pasteList.map(function(t,a){return o.a.createElement(De,{paste:t,key:a,handleDelete:e.handleDelete,displayChip:e.props.displayChip})});return o.a.createElement(n.Fragment,null,o.a.createElement(Ne,null),o.a.createElement("div",{style:{margin:"0% 5%"}},o.a.createElement(B.a,{style:{width:"100%"}},o.a.createElement(N.a,null,o.a.createElement(V.a,null),o.a.createElement("p",{style:{width:"20%",padding:"auto",textAlign:"center"}},"Delete")),a),o.a.createElement(D.a,{"aria-label":"Add",style:{position:"fixed",bottom:"10%",right:"5%",backgroundColor:t,color:"white"},onClick:this.redirectToUpload},o.a.createElement(S.a,{fontSize:"large"}))))}}]),t}(n.Component),Ve=a(81),We=a.n(Ve),Ie=a(130),Je=a.n(Ie),_e=a(131),qe=a.n(_e),Ye=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={chip:""},a.createChip=function(e){var t=e.type,a=e.displayText;return"success"===t?o.a.createElement(We.a,{style:{fontSize:"1.1em",color:C.a[50],backgroundColor:C.a[800]},label:a,avatar:o.a.createElement(_.a,{style:{color:C.a[50],backgroundColor:C.a[800]}},o.a.createElement(Je.a,null))}):o.a.createElement(We.a,{style:{fontSize:"1.1em",color:C.a[50],backgroundColor:C.a[800]},label:"An Error Occured",avatar:o.a.createElement(_.a,{style:{color:C.a[50],backgroundColor:C.a[800]}},o.a.createElement(qe.a,null))})},a.displayChip=function(e){var t=a.createChip(e);a.setState({chip:t}),setTimeout(function(){a.setState({chip:""})},2e3)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(z,null),o.a.createElement(p.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:we}),o.a.createElement(h.a,{path:"/view",component:Oe}),o.a.createElement(h.a,{exact:!0,path:"/error",component:Ce}),o.a.createElement(h.a,{exact:!0,path:"/panel",component:te}),o.a.createElement(h.a,{exact:!0,path:"/uploadform",render:function(t){return o.a.createElement(Ee,Object.assign({},t,{displayChip:e.displayChip}))}}),o.a.createElement(h.a,{path:"/edit",render:function(t){return o.a.createElement(Se,Object.assign({},t,{displayChip:e.displayChip}))}}),o.a.createElement(h.a,{path:"/delete",render:function(t){return o.a.createElement(Re,Object.assign({},t,{displayChip:e.displayChip}))},displayChip:this.displayChip})),o.a.createElement("span",{style:{position:"fixed",bottom:0}},"Made with",o.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f"),"by anirudh1200"),o.a.createElement("span",{style:{width:"100%",position:"fixed",bottom:"5%",display:"flex",alignItems:"center",justifyContent:"center"}},this.state.chip))}}]),t}(n.Component),$e=a(288);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement($e.a,null,o.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a.p+"static/media/background.eba7f9c9.jpg"}},[[134,2,1]]]);
//# sourceMappingURL=main.2050c5a8.chunk.js.map