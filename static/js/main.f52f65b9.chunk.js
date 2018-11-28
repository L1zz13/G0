(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var a=o(0),r=o.n(a),n=o(8),i=o.n(n),s=(o(14),o(1)),c=o(2),l=o(5),p=o(3),h=o(6),u=(o(16),o(4)),d=o.n(u),b=function e(t){this.current_color=e.BLACK,this.size=t,this.board=this.create_board(t),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1,this.history=[],this.captures=[]},f=[];b.EMPTY=0,b.BLACK=1,b.WHITE=2,b.prototype.create_board=function(e){for(var t=[],o=0;o<e;o++){t[o]=[];for(var a=0;a<e;a++)t[o][a]=b.EMPTY}return t},b.prototype.switch_player=function(){this.current_color=this.current_color===b.BLACK?b.WHITE:b.BLACK},b.prototype.pass=function(){this.last_move_passed&&this.end_game(),this.last_move_passed=!0,this.switch_player()},b.prototype.undo=function(){if(this.history.length){var e=this.history.pop(),t=e.board,o=e.current_color;this.board=t,this.current_color=o,console.log("board undo",this)}else console.log("no history")},b.prototype.end_game=function(){console.log("GAME OVER")},b.prototype.play=function(e,t){if(console.log("Played at "+e+", "+t),this.attempted_suicide=this.in_atari=!1,this.board[e][t]!==b.EMPTY)return!1;var o=this.board[e][t]=this.current_color,a=[],r=this.get_adjacent_intersections(e,t),n=!1,i=this;if(d.a.each(r,function(e){var t=i.board[e[0]][e[1]];if(t!==b.EMPTY&&t!==o){var r=i.get_group(e[0],e[1]);console.log(r),0===r.liberties?a.push(r):1===r.liberties&&(n=!0)}}),d.a.isEmpty(a)&&0===this.get_group(e,t).liberties)return this.board[e][t]=b.EMPTY,this.attempted_suicide=!0,!1;d.a.each(a,function(e){d.a.each(e.stones,function(e){i.board[e[0]][e[1]]=b.EMPTY,f++})});var s=f;console.log(s),n&&(this.in_atari=!0),this.last_move_passed=!1,this.switch_player();var c={current_color:this.current_color,board:d.a.cloneDeep(i.board)};return this.history.push(c),console.log("history",this.history),!0},b.prototype.get_adjacent_intersections=function(e,t){var o=[];return e>0&&o.push([e-1,t]),t<this.size-1&&o.push([e,t+1]),e<this.size-1&&o.push([e+1,t]),t>0&&o.push([e,t-1]),o},b.prototype.get_group=function(e,t){var o=this.board[e][t];if(o===b.EMPTY)return null;for(var a={},r=[],n=[[e,t]],i=0,s=function(e){var t=p.board[e[0]][e[1]];t===b.EMPTY&&i++,t===o&&n.push([e[0],e[1]])};n.length>0;){var c=n.pop();if(!a[c]){var l=this.get_adjacent_intersections(c[0],c[1]),p=this;d.a.each(l,s),a[c]=!0,r.push(c)}}return{liberties:i,stones:r}};var m=b,v=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){o.props.board.play(o.props.row,o.props.col)&&o.props.onPlay()},o}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={top:40*this.props.row,left:40*this.props.col,backgroundColor:this.props.color!==m.EMPTY?this.props.color===m.BLACK?window._PLAYER_ONE_COLOR:window._PLAYER_TWO_COLOR:void 0},t="intersection";return this.props.color!==m.EMPTY&&(t+=this.props.color===m.BLACK?" black":" white"),r.a.createElement("div",{onClick:this.handleClick,className:t,style:e})}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.board.size;t++)for(var o=0;o<this.props.board.size;o++)e.push(r.a.createElement(v,Object.assign({key:"".concat(t,"-").concat(o)},{board:this.props.board,color:this.props.board.board[t][o],row:t,col:o,onPlay:this.props.onPlay})));var a={width:40*this.props.board.size,height:40*this.props.board.size};return r.a.createElement("div",{style:a,id:"board"},e)}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";return this.props.board.in_atari?e="ATARI":this.props.board.attempted_suicide&&(e="INVALID MOVE"),r.a.createElement("div",{id:"alerts"},e)}}]),t}(a.Component),_=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){o.props.board.pass()},o}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{id:"pass-btn",type:"button",value:"Pass",onClick:this.handleClick})}}]),t}(a.Component),g=(a.Component,function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).undo=function(){console.log("undo...");var e=o.state.history;if(e.length<=1)return console.log("nothing to undo"),void(m.prototype.create_board=function(e){for(var t=[],o=0;o<e;o++){t[o]=[];for(var a=0;a<e;a++)t[o][a]=m.EMPTY}return t});console.log("popping:",e.pop());var t=e[e.length-1];console.log("set board to",t),o.setState({board:t,history:e}),console.log("board was updated and component shall render")},o}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({board:this.props.board,history:[]})}},{key:"onBoardUpdate",value:function(){var e=this.state.history;e.push(d.a.cloneDeep(this.state.board)),this.setState({board:this.state.board,history:e}),console.log("board was updated and component shall render")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ContainerView"},r.a.createElement("div",{className:"ContainerViewBoard"},r.a.createElement(y,{board:this.state.board,onPlay:this.onBoardUpdate.bind(this)})),r.a.createElement("div",{className:"ContainerViewSidebar"},r.a.createElement("a",{href:"https://l1zz13.github.io/G0/"},"Source Code"),r.a.createElement(E,{board:this.state.board}),r.a.createElement(_,{board:this.state.board}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.undo},"Undo"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," Player 1 Color:"),r.a.createElement("select",{name:"playerOneColor",onChange:function(e){console.log(e.target.value),window._PLAYER_ONE_COLOR=e.target.value}},r.a.createElement("option",{name:"red",value:"#ff0000"},"red"),r.a.createElement("option",{name:"yellow",value:"#fff000"},"yellow"),r.a.createElement("option",{name:"blue",value:"#0000ff"},"blue")),r.a.createElement("p",null,"Player 2 Color:"),r.a.createElement("select",{name:"playerTwoColor",onChange:function(e){console.log(e),window._PLAYER_TWO_COLOR=e.target.value}},r.a.createElement("option",{name:"red",value:"#ff0000"},"red"),r.a.createElement("option",{name:"yellow",value:"#fff000"},"yellow"),r.a.createElement("option",{name:"blue",value:"#0000ff"},"blue"))))}}]),t}(a.Component)),O=new m(19),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{board:O}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){e.exports=o(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.f52f65b9.chunk.js.map