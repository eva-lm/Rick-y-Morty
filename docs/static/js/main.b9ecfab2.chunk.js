(window["webpackJsonpevaluacion-m3-proyecto-eva"]=window["webpackJsonpevaluacion-m3-proyecto-eva"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},24:function(e,a,t){e.exports=t(42)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),l=t.n(n),s=(t(29),t(16)),i=t(17),m=t(22),o=t(18),u=t(9),h=t(23),E=t(6),d=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()}))},p=t(19),f=t.n(p),_=(t(30),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"header__container"},c.a.createElement("img",{className:"image__logo",src:f.a,alt:"header logo"})))}),v=(t(31),function(e){var a=e.getCharacterFilter,t=e.search;return c.a.createElement("div",{className:"filter__container"},c.a.createElement("input",{className:"filter__name",type:"text",onChange:a,value:t,placeholder:" busca tu personaje..."}))}),g=(t(32),function(e){var a=e.character;return c.a.createElement("div",null,c.a.createElement("div",{className:"character__image-container"},c.a.createElement("img",{src:a.image,alt:a.name})),c.a.createElement("p",{className:"status__icon"},"Alive"===a.status?c.a.createElement("i",{class:"far fa-smile"}):"Dead"===a.status?c.a.createElement("i",{class:"fas fa-skull-crossbones"}):c.a.createElement("i",{class:"far fa-question-circle"})),c.a.createElement("h2",{className:"character__name"},a.name),c.a.createElement("p",{className:"character__specie"},a.species))}),N=t(5),b=(t(33),function(e){var a=e.characters,t=e.search;return c.a.createElement("ul",{className:"character__list"},a.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e,a){return c.a.createElement("li",{className:"character__item",key:a},c.a.createElement(N.b,{to:"/character-detail/".concat(e.id),className:"character__link"},c.a.createElement(g,{character:e})))})))}),k=function(e){var a=e.getCharacterFilter,t=e.search,n=e.characters;return c.a.createElement(r.Fragment,null,c.a.createElement(v,{getCharacterFilter:a,search:t}),c.a.createElement(b,{characters:n,search:t}))},y=(t(39),t(40),function(e){var a=e.routerProps,t=e.characters,n=parseInt(a.match.params.characterId),l=t.filter((function(e){return e.id===n}));if(l[0]){var s=l[0],i=s.name,m=s.image,o=s.status,u=s.origin,h=s.episode,E=s.species;return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"character__detail"},c.a.createElement("div",{className:"detail__image-container"},c.a.createElement(N.b,{to:"/",className:"back"},c.a.createElement("button",{className:"back__button"}," Volver al listado ")),c.a.createElement("img",{src:m,alt:i})),c.a.createElement("div",{className:"detail__card"},c.a.createElement("h2",{className:"detail__name"},i),c.a.createElement("ul",{className:"detail__list"},c.a.createElement("li",{className:"detail__status"},"Status: ",o),c.a.createElement("li",{className:"detail__specie"},"Specie: ",E),c.a.createElement("li",{className:"detail__origin"},"Origin: ",u.name),c.a.createElement("li",{className:"detail__episode"},"Episodes: ",h.length)))))}return c.a.createElement(r.Fragment,null,c.a.createElement("p",null,"Esta p\xe1gina no existe"),c.a.createElement(N.b,{to:"/",className:"back"},"Volver al listado"))}),F=(t(41),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"footer__container"},c.a.createElement("p",{className:"footer__copy"},"Realizado por Eva, \xa9 2019 ")))}),C=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={characters:[],search:""},e.getCharacterFilter=e.getCharacterFilter.bind(Object(u.a)(e)),e}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(a){e.setState({characters:a.results})}))}},{key:"getCharacterFilter",value:function(e){var a=e.currentTarget.value;this.setState({search:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.characters,r=a.search;return c.a.createElement("div",{className:"App"},c.a.createElement(_,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return c.a.createElement(k,{getCharacterFilter:e.getCharacterFilter,handleSpeciesFilter:e.handleSpeciesFilter,search:r,characters:t})}}),c.a.createElement(E.a,{path:"/character-detail/:characterId",render:function(e){return c.a.createElement(y,{routerProps:e,characters:t})}})),c.a.createElement(F,null))}}]),a}(c.a.Component);l.a.render(c.a.createElement(N.a,null,c.a.createElement(C,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b9ecfab2.chunk.js.map