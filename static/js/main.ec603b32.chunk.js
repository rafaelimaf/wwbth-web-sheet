(this["webpackJsonpwwbth-web-sheet"]=this["webpackJsonpwwbth-web-sheet"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(11),c=a.n(i),o=(a(16),a(2)),s=a(3),l=a(5),u=a(4),d=a(6),m=a(7),h=(a(10),a(0)),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=t.category,n=t.type,r=t.sample,i=t.inputName,c=e.changeState,o=e.itemValue;return Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("h3",{className:"category-title",children:a}),Object(h.jsx)("input",{type:n,placeholder:r,onChange:c,name:i,value:o,className:"category-input"})]})})}}]),a}(n.Component),b=[{category:"Apelido (NP):",type:"text",sample:"Apelido (NP)",inputName:"userNp"},{category:"Nome:",type:"text",sample:"Nome + Sobrenome",inputName:"userName"},{category:"Ocupa\xe7\xe3o:",type:"text",sample:"Insurgente",inputName:"userOcupation"},{category:"Idade:",type:"text",sample:"18",inputName:"userAge"},{category:"Nascimento:",type:"date",sample:"DD/MM/AAAA",inputName:"userBorn"},{category:"G\xeanero:",type:"text",sample:"Masculino/Feminino",inputName:"userGender"},{category:"Local de Nascimento:",type:"text",sample:"Cidade + Sigla do Estado",inputName:"userBornPlace"},{category:"Local de Resid\xeancia:",type:"text",sample:"Cidade + Sigla do Estado",inputName:"userLivePlace"},{category:"Parentesco:",type:"text",sample:"Nome + Sobrenome(Pai) + Nome + Sobrenome(M\xe3e)",inputName:"userFolks"},{category:"Pessoas Importantes:",type:"text",sample:"",inputName:"userFavPeople"},{category:"Objetos Importantes:",type:"text",sample:"",inputName:"userFavObjects"},{category:"Locais Importantes:",type:"text",sample:"",inputName:"userFavPlaces"},{category:"Conflitos:",type:"text",sample:"Ler Cap\xedtulo 1: Criando um Personagem, Conflitos",inputName:"userConflicts"}],p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Description Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={userNp:"",userName:"",userOcupation:"",userAge:"",userBorn:"",userGender:"",userBornPlace:"",userLivePlace:"",userFolks:"",userFavPeople:"",userFavObjects:"",userFavPlaces:"",userConflicts:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Description Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"description-sheet",children:[Object(h.jsx)("h2",{className:"description-sheet-title",children:"Ficha Descritiva"}),b.map((function(t,a){return Object(h.jsx)(j,{data:t,changeState:e.handleChanger,itemValue:e.state[t.inputName]},a)}))]})}}]),a}(n.Component),v=(a(18),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).isAttributeNegativo=function(){var t=e.props.itemValue;console.log(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data.attribute,a=e.changeState,n=e.itemValue;return Object(h.jsxs)("div",{className:"attributes-sheet-item",children:[Object(h.jsx)("h3",{className:"attribute-title",children:t}),Object(h.jsx)("input",{id:"attribute-value",className:"attribute-input",type:"number",onChange:a,name:t,value:n})]})}}]),a}(n.Component)),O=[{attribute:"FOR"},{attribute:"VON"},{attribute:"DES"},{attribute:"AGI"},{attribute:"PRE"},{attribute:"INT"}],g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Attribute Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={FOR:0,VON:0,DES:0,AGI:0,PRE:0,INT:0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Attribute Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"attributes-sheet",children:[Object(h.jsx)("h2",{className:"attributes-sheet-title",children:"Atributos B\xe1sicos"}),Object(h.jsx)("div",{className:"attributes-sheet-items",children:O.map((function(t,a){return Object(h.jsx)(v,{data:t,changeState:e.handleChanger,itemValue:e.state[t.attribute]},a)}))})]})}}]),a}(n.Component),f=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data.attribute,a=e.changeState,n=e.itemValue;return Object(h.jsxs)("div",{className:"action-item",children:[Object(h.jsx)("h3",{className:"action-item-title",children:t}),Object(h.jsx)("input",{type:"text",onChange:a,name:t,value:n,className:"action-input"})]})}}]),a}(n.Component)),C=[{attribute:"PA"},{attribute:"PM"},{attribute:"Carga"},{attribute:"Iniciativa"}],y=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Vital Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={PA:"0/0",PM:"0/0",Carga:"0/0",Iniciativa:"0",Vida:"0/0",Armadura:"0/0",Iventario:"",Conditions:"",Vantagens:"",Talentos:"",Mutacoes:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Vital Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state,a=t.Iventario,n=t.Vida,r=t.Armadura,i=t.Conditions,c=t.Vantagens,o=t.Talentos,s=t.Mutacoes;return Object(h.jsxs)("div",{className:"vital-sheet",children:[Object(h.jsx)("h2",{className:"vital-sheet-title",children:"Atributos Vitais"}),Object(h.jsxs)("section",{className:"vital-sheet-status",children:[Object(h.jsxs)("div",{className:"life-sheet",children:[Object(h.jsx)("h3",{className:"life-title",children:"Vida"}),Object(h.jsx)("input",{type:"text",name:"Vida",onChange:this.handleChanger,value:n,className:"life-input"})]}),Object(h.jsxs)("div",{className:"armor-sheet",children:[Object(h.jsx)("h3",{className:"armor-title",children:"Armadura"}),Object(h.jsx)("input",{type:"text",name:"Armadura",onChange:this.handleChanger,value:r,className:"armor-input"})]})]}),Object(h.jsx)("section",{className:"action-attributes",children:C.map((function(t,a){return Object(h.jsx)(f,{data:t,changeState:e.handleChanger,itemValue:e.state[t.attribute]},a)}))}),Object(h.jsx)("h3",{className:"inventory-title",children:"Invent\xe1rio"}),Object(h.jsx)("div",{className:"inventory-area",children:Object(h.jsx)("textarea",{name:"Iventario",id:"",cols:"30",rows:"5",onChange:this.handleChanger,value:a,className:"inventory",placeholder:" - Nome do Item | Peso: X { Descri\xe7\xe3o }",children:a})}),Object(h.jsx)("h3",{className:"condition-title",children:"Condi\xe7\xf5es"}),Object(h.jsx)("div",{className:"condition-area",children:Object(h.jsx)("textarea",{name:"Conditions",id:"",cols:"30",rows:"5",onChange:this.handleChanger,value:i,className:"conditions",placeholder:"- Atordoado { X Rodadas }; ",children:a})}),Object(h.jsx)("h3",{className:"condition-title",children:"Vantagens"}),Object(h.jsx)("div",{className:"condition-area",children:Object(h.jsx)("textarea",{name:"Vantagens",id:"",cols:"30",rows:"5",onChange:this.handleChanger,value:c,className:"conditions",placeholder:"- Vantagem:: Descri\xe7\xe3o; ",children:c})}),Object(h.jsx)("h3",{className:"condition-title",children:"Talentos"}),Object(h.jsx)("div",{className:"condition-area",children:Object(h.jsx)("textarea",{name:"Talentos",id:"",cols:"30",rows:"5",onChange:this.handleChanger,value:o,className:"conditions",placeholder:"- Talento:: Descri\xe7\xe3o; ",children:o})}),Object(h.jsx)("h3",{className:"condition-title",children:"Muta\xe7\xf5es"}),Object(h.jsx)("div",{className:"condition-area",children:Object(h.jsx)("textarea",{name:"Mutacoes",id:"",cols:"30",rows:"5",onChange:this.handleChanger,value:s,className:"conditions",placeholder:"- Muta\xe7\xe3o:: Descri\xe7\xe3o; ",children:s})})]})}}]),a}(n.Component)),x=(a(21),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"readImport",value:function(e){var t=new FileReader;t.onload=function(e){var t=JSON.parse(e.target.result);Object.keys(t).forEach((function(e){localStorage.setItem(e,t[e])})),window.location.reload()},t.readAsText(e.target.files[0])}},{key:"downloadExport",value:function(){var e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(localStorage)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","data.json"),document.body.appendChild(t),t.click(),t.remove()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-menu",children:[Object(h.jsx)("button",{type:"button",className:"import-button",onClick:function(){document.querySelector(".file-picker").click()},children:"Import Data"}),Object(h.jsx)("button",{type:"button",className:"export-button",onClick:this.downloadExport,children:"Export Data"}),Object(h.jsx)("input",{type:"file",className:"file-picker",accept:"application/json",multiple:!1,onChange:this.readImport,hidden:!0})]})}}]),a}(n.Component)),N=(a(22),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"wwbth-sheet-header",children:[Object(h.jsx)("h1",{className:"header-title",children:"WWBTH | Ficha de Personagem"}),Object(h.jsx)("h3",{className:"header-subtitle",children:"All Rights Reserved to Rafael de Lima | Copia n\xe3o com\xe9dia :]"}),Object(h.jsx)("div",{className:"import-export-btn",children:Object(h.jsx)(x,{})})]})}}]),a}(n.Component)),D=(a(23),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"wwbth-footer",children:Object(h.jsx)("a",{href:"https://github.com/rafaelimaf",target:"_blank",className:"footer-link-github",rel:"noreferrer",children:"| Github"})})}}]),a}(n.Component)),S=[{category:"Descritivo",throwCategories:"Arremessar",unarmedCategories:"Desarmado",parryCategories:"Bloquear",dodgeCategories:"Esquivar",treatmentCategories:"Medicina"},{category:"Pericia",throwCategories:"Combate \xe0 Dist",unarmedCategories:"Combate C \xe0 C",parryCategories:"Bloqueio",dodgeCategories:"Esquiva",treatmentCategories:"Tratamento"},{category:"Teste",throwCategories:"Teste",unarmedCategories:"Teste",parryCategories:"Teste",dodgeCategories:"Teste",treatmentCategories:"Teste"},{category:"Modificadores",throwCategories:"Dano, Alcance",unarmedCategories:"Dano",parryCategories:"Aparar",dodgeCategories:"",treatmentCategories:"Cura"},{category:"N\xedvel",throwCategories:"1",unarmedCategories:"1",parryCategories:"N\xedvel",dodgeCategories:"",treatmentCategories:"N\xedvel"},{category:"Custo",throwCategories:"5PA",unarmedCategories:"3PA",parryCategories:"2PA",dodgeCategories:"2PA",treatmentCategories:"3PA"},{category:"Efeito",throwCategories:"1d4 + 5",unarmedCategories:"1d4 + 5",parryCategories:"1d4 + 5",treatmentCategories:"1d4 + 5"}],k=(a(8),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("First Skill Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("First Skill Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component)),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Fourth Skill Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Fourth Skill Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Parry Skill Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Parry Skill Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.parryCategories,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Second Skill Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Second Skill Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Third Skill Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Third Skill Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Throw Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Throw Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.throwCategories,name:t.throwCategories,value:e.state[t.throwCategories],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Unharmed Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Unharmed Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.unarmedCategories,name:t.unarmedCategories,className:"skill-input",onChange:e.handleChanger,value:e.state[t.unarmedCategories]},a)}))})}}]),a}(n.Component),M=(a(24),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Treatment Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Treatment Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.treatmentCategories,name:t.treatmentCategories,onChange:e.handleChanger,value:e.state[t.treatmentCategories],className:"skill-input"},a)}))})}}]),a}(n.Component)),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("First Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("First Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Third Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Third Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.category,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Dodge Reaction Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={Descritivo:"",Pericia:"",Modificadores:"",Custo:"",Teste:"",CD:"",Efeito:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Dodge Reaction Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"skill-item",children:S.map((function(t,a){return Object(h.jsx)("input",{type:"text",placeholder:t.dodgeCategories,name:t.category,value:e.state[t.category],onChange:e.handleChanger,className:"skill-input"},a)}))})}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onClickCreateSkill=function(){var e=document.querySelector(".skill-items"),t=document.createElement("div");e.appendChild(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"skill-items",children:[Object(h.jsxs)("div",{className:"char-skills",children:[Object(h.jsx)("h2",{className:"skills-title",children:"Poderes Habilidades e Equipamentos"}),Object(h.jsx)("h3",{className:"made-skills-title",children:"Habilidades de A\xe7\xe3o"}),Object(h.jsx)(k,{}),Object(h.jsx)(P,{}),Object(h.jsx)(A,{}),Object(h.jsx)(I,{}),Object(h.jsx)("br",{}),Object(h.jsx)(T,{}),Object(h.jsx)(w,{})]}),Object(h.jsxs)("div",{className:"default-skills",children:[Object(h.jsx)("h3",{className:"default-skills-title",children:"Habilidades de Rea\xe7\xe3o"}),Object(h.jsx)(E,{}),Object(h.jsx)(J,{}),Object(h.jsx)("br",{}),Object(h.jsx)(R,{}),Object(h.jsx)(V,{}),Object(h.jsx)(M,{})]})]})}}]),a}(n.Component),U=[{name:"cac",attribute:"Combate C a C (FOR)"},{name:"bloqueio",attribute:"Bloqueio (FOR)"},{name:"cad",attribute:"Combate a Dist (DES)"},{name:"esquiva",attribute:"Esquiva (AGI)"},{name:"luta",attribute:"Luta (FOR)"},{name:"atletismo",attribute:"Atletismo (VON)"},{name:"acrobacia",attribute:"Acrobacia (AGI)"},{name:"pontaria",attribute:"Pontaria (DES)"},{name:"furtividade",attribute:"Furtividade (AGI)"},{name:"percepcao",attribute:"Percep\xe7\xe3o (PRE)"},{name:"indimidacao",attribute:"Intimida\xe7\xe3o (PRE)"},{name:"constituicao",attribute:"Constitui\xe7\xe3o (VON)"},{name:"persuasao",attribute:"Persuas\xe3o (PRE)"},{name:"intuicao",attribute:"Intui\xe7\xe3o (PRE)"},{name:"tecnologia",attribute:"Tecnologia (INT)"},{name:"investigacao",attribute:"Investiga\xe7\xe3o (INT)"},{name:"prestidigitacao",attribute:"Prestidigita\xe7\xe3o (INT)"},{name:"direcao",attribute:"Dire\xe7\xe3o (INT)"},{name:"oficio",attribute:"Of\xedcio (INT)"},{name:"tratamento",attribute:"Tratamento (INT)"}],q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).isAttributeNegativo=function(){var t=e.props.itemValue;console.log(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=t.attribute,n=t.name,r=e.changeState,i=e.itemValue;return Object(h.jsxs)("div",{className:"expertise-sheet-item",children:[Object(h.jsx)("h3",{className:"expertise-title",children:a}),Object(h.jsx)("input",{id:"expertise-value",className:"expertise-input",type:"text",onChange:r,name:n,value:i,placeholder:"+X"})]})}}]),a}(n.Component),B=(a(25),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderRecoveredData=function(){var t=JSON.parse(localStorage.getItem("Expertise Data"));e.setState(Object(m.a)({},t))},e.handleChanger=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n))},e.state={cac:"",cad:"",luta:"",furtividade:"",acrobacia:"",indimidacao:"",persuasao:"",bloqueio:"",esquiva:"",atletismo:"",percepcao:"",pontaria:"",constituicao:"",intuicao:"",tecnologia:"",investigacao:"",prestidigitacao:"",direcao:"",oficio:"",tratamento:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderRecoveredData()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("Expertise Data",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"expertise-sheet",children:[Object(h.jsx)("h2",{className:"expertise-sheet-title",children:"Per\xedcias"}),Object(h.jsx)("div",{className:"expertise-sheet-items",children:U.map((function(t,a){return Object(h.jsx)(q,{data:t,changeState:e.handleChanger,itemValue:e.state[t.name]},a)}))})]})}}]),a}(n.Component)),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("main",{className:"wwbth-sheets",children:[Object(h.jsx)(N,{}),Object(h.jsxs)("section",{className:"first-sheets",children:[Object(h.jsx)(p,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{}),Object(h.jsx)(g,{})]})]}),Object(h.jsxs)("section",{className:"second-sheets",children:[Object(h.jsx)(F,{}),Object(h.jsx)(B,{})]}),Object(h.jsx)(D,{})]})}}]),a}(n.Component);var L=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(G,{})})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.ec603b32.chunk.js.map