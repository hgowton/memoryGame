(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Spiderman","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg"},{"id":2,"name":"Ironman","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"},{"id":3,"name":"Black Panther","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/1/c0/537ba2bfd6bab/standard_xlarge.jpg"},{"id":4,"name":"Deadpool","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg"},{"id":5,"name":"Captian America","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"},{"id":6,"name":"Jessica Jones","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/b/40/jessica.jpg"},{"id":7,"name":"Ant-Man","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/6/90/54ad7297b0a59/standard_xlarge.jpg"},{"id":8,"name":"Captain Marvel","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg"},{"id":9,"name":"Guardians of the Galaxy","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/c/10/537babe1c1f66/standard_xlarge.jpg"},{"id":10,"name":"Wolverine","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg"},{"id":11,"name":"Luke Cage","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/5/e0/537bb460046bd/standard_xlarge.jpg"},{"id":12,"name":"Avengers","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/3/a0/537ba3793915b/standard_xlarge.jpg"},{"id":13,"name":"A-Bomb","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_xlarge.jpg"},{"id":14,"name":"Thor","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg"},{"id":15,"name":"Scarlet Witch","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/6/03/53177154d219d/standard_xlarge.jpg"},{"id":16,"name":"Hawkeye","clicked":false,"image":"https://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b/standard_xlarge.jpg"}]')},,,function(e,a,n){e.exports=n(19)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(3),c=n.n(i),l=n(1),s=n(4),d=n(5),m=n(8),o=n(7);n(14);var u=function(e){return r.a.createElement("div",{className:"card select",onClick:function(){e.updateFriend(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,e.name)))};n(15);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};n(16);var g=function(e){return r.a.createElement("div",{className:"container scoreCard"},r.a.createElement("div",{className:"row"},"Score: ",e.score),r.a.createElement("div",{className:"row"},"High Score: ",e.topScore))},h=n(6),f=(n(17),function(e){Object(m.a)(n,e);var a=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={count:0,score:0,friends:h,topScore:0},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e.handleScoreIncrement=function(){e.setState({score:e.state.score+10})},e.handleTopScoreIncrement=function(){e.state.score>=e.state.topScore&&e.setState({topScore:e.state.score+10})},e.updateFriend=function(a){var n=!1,t=e.state.friends.map((function(e){var t=Object(l.a)({},e);return t.id===a&&(console.log(t.name),t.clicked?console.log("already clicked "+t.clicked):(n=!0,t.clicked=!0)),t}));if(!n)return e.resetGame();e.handleIncrement(),e.handleScoreIncrement(),e.handleTopScoreIncrement(),t.sort((function(e,a){return Math.random()-.5})),e.setState({friends:t})},e.resetGame=function(){var a=e.state.friends.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{clicked:!1})}));e.setState({count:0,score:0,friends:a})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4-md"},r.a.createElement("img",{src:"./img/MarvelLogo.png"})),r.a.createElement("div",{className:"col-8-md"},r.a.createElement(g,{count:this.state.count,score:this.state.score,topScore:this.state.topScore}))))),r.a.createElement(p,null,this.state.friends.map((function(a){return r.a.createElement(u,{updateFriend:e.updateFriend,count:e.state.count,handleIncrement:e.handleIncrement,handleScoreIncrement:e.handleScoreIncrement,handleTopScoreIncrement:e.handleTopScoreIncrement,id:a.id,key:a.id,name:a.name,image:a.image})}))))}}]),n}(t.Component));n(18);c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.25dbb1f8.chunk.js.map