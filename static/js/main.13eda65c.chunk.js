(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var o=a(0),r=a.n(o),n=a(8),i=a.n(n),s=(a(14),a(1)),c=a(2),h=a(4),p=a(3),l=a(5),u=(a(16),a(6)),d=a.n(u),b=function t(e){this.current_color=t.BLACK,this.size=e,this.board=this.create_board(e),this.last_move_passed=!1,this.in_atari=!1,this.attempted_suicide=!1,this.history=[]};b.EMPTY=0,b.BLACK=1,b.WHITE=2,b.prototype.create_board=function(t){for(var e=[],a=0;a<t;a++){e[a]=[];for(var o=0;o<t;o++)e[a][o]=b.EMPTY}return e},b.prototype.switch_player=function(){this.current_color=this.current_color===b.BLACK?b.WHITE:b.BLACK},b.prototype.pass=function(){this.last_move_passed&&this.end_game(),this.last_move_passed=!0,this.switch_player()},b.prototype.undo=function(){console.log("Stubbed undo method"),this.board=this.history[this.history.length-2],console.log("board",this.board),this.switch_player()},b.prototype.end_game=function(){console.log("GAME OVER")},b.prototype.play=function(t,e){if(console.log("Played at "+t+", "+e),this.attempted_suicide=this.in_atari=!1,this.board[t][e]!==b.EMPTY)return!1;var a=this.board[t][e]=this.current_color,o=[],r=this.get_adjacent_intersections(t,e),n=!1,i=this;return d.a.each(r,function(t){var e=i.board[t[0]][t[1]];if(e!==b.EMPTY&&e!==a){var r=i.get_group(t[0],t[1]);console.log(r),0===r.liberties?o.push(r):1===r.liberties&&(n=!0)}}),d.a.isEmpty(o)&&0===this.get_group(t,e).liberties?(this.board[t][e]=b.EMPTY,this.attempted_suicide=!0,!1):(d.a.each(o,function(t){d.a.each(t.stones,function(t){i.board[t[0]][t[1]]=b.EMPTY})}),n&&(this.in_atari=!0),this.last_move_passed=!1,this.switch_player(),this.history.push(d.a.cloneDeep(i.board)),console.log("history",this.history),!0)},b.prototype.get_adjacent_intersections=function(t,e){var a=[];return t>0&&a.push([t-1,e]),e<this.size-1&&a.push([t,e+1]),t<this.size-1&&a.push([t+1,e]),e>0&&a.push([t,e-1]),a},b.prototype.get_group=function(t,e){var a=this.board[t][e];if(a===b.EMPTY)return null;for(var o={},r=[],n=[[t,e]],i=0,s=function(t){var e=p.board[t[0]][t[1]];e===b.EMPTY&&i++,e===a&&n.push([t[0],t[1]])};n.length>0;){var c=n.pop();if(!o[c]){var h=this.get_adjacent_intersections(c[0],c[1]),p=this;d.a.each(h,s),o[c]=!0,r.push(c)}}return{liberties:i,stones:r}};var f=b,y=function(t){function e(){var t,a;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(){a.props.board.play(a.props.row,a.props.col)&&a.props.onPlay()},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t={top:40*this.props.row,left:40*this.props.col},e="intersection";return this.props.color!==f.EMPTY&&(e+=this.props.color===f.BLACK?" black":" white"),r.a.createElement("div",{onClick:this.handleClick,className:e,style:t})}}]),e}(o.Component),m=function(t){function e(){return Object(s.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.board.size;e++)for(var a=0;a<this.props.board.size;a++)t.push(r.a.createElement(y,Object.assign({key:"".concat(e,"-").concat(a)},{board:this.props.board,color:this.props.board.board[e][a],row:e,col:a,onPlay:this.props.onPlay})));var o={width:40*this.props.board.size,height:40*this.props.board.size};return r.a.createElement("div",{style:o,id:"board"},t)}}]),e}(o.Component),v=function(t){function e(){return Object(s.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t="";return this.props.board.in_atari?t="ATARI":this.props.board.attempted_suicide&&(t="INVALID MOVE"),r.a.createElement("div",{id:"alerts"},t)}}]),e}(o.Component),j=function(t){function e(){var t,a;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(t){a.props.board.pass()},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("input",{id:"pass-btn",type:"button",value:"Pass",onClick:this.handleClick})}}]),e}(o.Component),O=function(t){function e(){var t,a;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).handleClick=function(t){a.props.board.undo(),a.props.doUpdate(a.props.board)},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("input",{id:"undo-btn",type:"button",value:"Undo",onClick:this.handleClick})}}]),e}(o.Component),_=function(t){function e(){return Object(s.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.setState({board:this.props.board})}},{key:"onBoardUpdate",value:function(){this.setState({board:this.props.board})}},{key:"updateBoard",value:function(t){this.setState({board:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ContainerView"},r.a.createElement("div",{className:"ContainerViewBoard"},r.a.createElement(m,{board:this.state.board,onPlay:this.onBoardUpdate.bind(this)})),r.a.createElement("div",{className:"ContainerViewSidebar"},r.a.createElement("a",{href:"https://github.com/OR13/G0"},"Source Code"),r.a.createElement(v,{board:this.state.board}),r.a.createElement(j,{board:this.state.board}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,{board:this.state.board,doUpdate:this.updateBoard.bind(this)})))}}]),e}(o.Component),E=new f(19),g=function(t){function e(){return Object(s.a)(this,e),Object(h.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,{board:E}))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.13eda65c.chunk.js.map