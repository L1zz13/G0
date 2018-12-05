(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(8),i=o.n(r),s=(o(14),o(1)),c=o(2),l=o(5),h=o(3),u=o(6),p=(o(16),o(4)),d=o.n(p),b=function e(t){this.current_color=e.BLACK,this.size=t,this.board=this.create_board(t),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1,this.history=[],this.captures=[m,f],this.moveCount=0,this.ko=[]},m=[],f=[];b.EMPTY=0,b.BLACK=1,b.WHITE=2,b.prototype.create_board=function(e){for(var t=[],o=0;o<e;o++){t[o]=[];for(var a=0;a<e;a++)t[o][a]=b.EMPTY}return t},b.prototype.reset=function(){this.current_color=b.BLACK,this.board=this.create_board(this.size),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1,this.history=[],this.captures=[],this.moveCount=0},b.prototype.switch_player=function(){this.current_color=this.current_color===b.BLACK?b.WHITE:b.BLACK},b.prototype.pass=function(){this.last_move_passed&&this.end_game(),this.last_move_passed=!0,this.switch_player()},b.prototype.undo=function(){if(this.history.length){var e=this.history.pop(),t=e.board,o=e.current_color;this.board=t,this.current_color=o,console.log("board undo",this)}else console.log("no history")},b.prototype.end_game=function(){console.log("GAME OVER")};var v=[],y=[];b.prototype.play=function(e,t){v.push(e),y.push(t),this.moveCount++,this.ko.push({i:e,j:t}),console.log(this.ko);var o=this.moveCount-1,a=this.moveCount-2,n=this.moveCount-3;console.log(this.moveCount),console.log("Played at "+e+", "+t);var r=v[o],i=v[n],s=y[o],c=y[n],l=v[a],h=y[a];if(this.moveCount>=5&&r===i&&s===c)return console.log("INVALID MOVE: KO RULE"),!1;if(this.moveCount>=3&&r===l&&s===h)return console.log("INVALID MOVE: KO RULE"),!1;if(this.attempted_suicide=this.in_atari=!1,this.board[e][t]!==b.EMPTY)return console.log("INVALID MOVE"),!1;var u=this.board[e][t]=this.current_color,p=[],E=this.get_adjacent_intersections(e,t),_=!1,g=this;if(d.a.each(E,function(e){var t=g.board[e[0]][e[1]];if(t!==b.EMPTY&&t!==u){var o=g.get_group(e[0],e[1]);console.log(o),0===o.liberties?p.push(o):1===o.liberties&&(_=!0)}}),d.a.isEmpty(p)&&0===this.get_group(e,t).liberties)return this.board[e][t]=b.EMPTY,this.attempted_suicide=!0,!1;d.a.each(p,function(e){d.a.each(e.stones,function(e){g.board[e[0]][e[1]]=b.EMPTY,1===u?m++:2===u&&f++})});var O=["Captures by Black: "+m,"Captures by White: "+f];m>=1||f>=1?console.log(O):console.log(""),_&&(this.in_atari=!0),this.last_move_passed=!1,this.switch_player();var C={current_color:this.current_color,board:d.a.cloneDeep(g.board)};return this.history.push(C),console.log("history",this.history),!0},b.prototype.get_adjacent_intersections=function(e,t){var o=[];return e>0&&o.push([e-1,t]),t<this.size-1&&o.push([e,t+1]),e<this.size-1&&o.push([e+1,t]),t>0&&o.push([e,t-1]),o},b.prototype.get_group=function(e,t){var o=this.board[e][t];if(o===b.EMPTY)return null;for(var a={},n=[],r=[[e,t]],i=0,s=function(e){var t=h.board[e[0]][e[1]];t===b.EMPTY&&i++,t===o&&r.push([e[0],e[1]])};r.length>0;){var c=r.pop();if(!a[c]){var l=this.get_adjacent_intersections(c[0],c[1]),h=this;d.a.each(l,s),a[c]=!0,n.push(c)}}return{liberties:i,stones:n}};var E=b,_=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){o.props.board.play(o.props.row,o.props.col)&&o.props.onPlay()},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={top:40*this.props.row,left:40*this.props.col,backgroundColor:this.props.color!==E.EMPTY?this.props.color===E.BLACK?window._PLAYER_ONE_COLOR:window._PLAYER_TWO_COLOR:void 0},t="intersection";return this.props.color!==E.EMPTY&&(t+=this.props.color===E.BLACK?" black":" white"),n.a.createElement("div",{onClick:this.handleClick,className:t,style:e})}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.board.size;t++)for(var o=0;o<this.props.board.size;o++)e.push(n.a.createElement(_,Object.assign({key:"".concat(t,"-").concat(o)},{board:this.props.board,color:this.props.board.board[t][o],row:t,col:o,onPlay:this.props.onPlay})));var a={width:40*this.props.board.size,height:40*this.props.board.size};return n.a.createElement("div",{style:a,id:"board"},e)}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";return this.props.board.in_atari?e="ATARI":this.props.board.attempted_suicide&&(e="INVALID MOVE"),n.a.createElement("div",{id:"alerts"},e)}}]),t}(a.Component),C=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){o.props.board.pass()},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("input",{id:"pass-btn",type:"button",value:"Pass",onClick:this.handleClick})}}]),t}(a.Component),w=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){o.props.board.reset(),o.props.onReset()},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("input",{id:"newgame-btn",type:"button",value:"New Game",onClick:this.handleClick})}}]),t}(a.Component),j=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).undo=function(){console.log("undo...");var e=o.state.history;if(e.length<=1)return window.location.reload(!1),void console.log("nothing to undo");console.log("popping:",e.pop());var t=e[e.length-1];console.log("set board to",t),o.setState({board:t,history:e}),console.log("board was updated and component shall render")},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({board:this.props.board,history:[]})}},{key:"onBoardUpdate",value:function(){var e=this.state.history;e.push(d.a.cloneDeep(this.state.board)),this.setState({board:this.state.board,history:e}),console.log("board was updated and component shall render")}},{key:"render",value:function(){return n.a.createElement("div",{className:"ContainerView"},n.a.createElement("div",{className:"ContainerViewBoard"},n.a.createElement(g,{board:this.state.board,onPlay:this.onBoardUpdate.bind(this)})),n.a.createElement("div",{className:"ContainerViewSidebar"},n.a.createElement("a",{href:"https://github.com/L1zz13/G0/"},"Source Code"),n.a.createElement(O,{board:this.state.board}),n.a.createElement(C,{board:this.state.board}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(w,{board:this.state.board,onReset:this.onBoardUpdate.bind(this)}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{onClick:this.undo},"Undo"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null," Player 1 Color:"),n.a.createElement("select",{name:"playerOneColor",onChange:function(e){console.log(e.target.value),window._PLAYER_ONE_COLOR=e.target.value}},n.a.createElement("option",{name:"default",value:"#5632a8"},"default"),n.a.createElement("option",{name:"black",value:"#000000"},"black"),n.a.createElement("option",{name:"red",value:"#ff0000"},"red"),n.a.createElement("option",{name:"blue",value:"#0000ff"},"blue")),n.a.createElement("p",null,"Player 2 Color:"),n.a.createElement("select",{name:"playerTwoColor",onChange:function(e){console.log(e),window._PLAYER_TWO_COLOR=e.target.value}},n.a.createElement("option",{name:"default",value:"#faef5c"},"default"),n.a.createElement("option",{name:"default",value:"#ffffff"},"white"),n.a.createElement("option",{name:"pink",value:"#ffb6c1"},"pink"),n.a.createElement("option",{name:"yellow",value:"#fff000"},"yellow"))))}}]),t}(a.Component),k=new E(19),A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,{board:k}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){e.exports=o(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.ed0b3a8d.chunk.js.map