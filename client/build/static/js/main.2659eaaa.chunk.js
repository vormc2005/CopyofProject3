(this.webpackJsonpauction=this.webpackJsonpauction||[]).push([[0],{48:function(e,a,t){e.exports=t(82)},53:function(e,a,t){},58:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(43),c=t.n(r),o=t(5),m=t(8),i=(t(53),t(25)),s=t(27);t(58);function u(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.twitter.com/bidbot4",className:"twitter social",target:"Twitter"},l.a.createElement(i.a,{icon:s.b,size:"2x"})),l.a.createElement("a",{href:"https://www.instagram.com/bid.b0t/",className:"instagram social",target:"Instagram"},l.a.createElement(i.a,{icon:s.a,size:"2x"})))}var d=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{id:"bidbot"},"BidBot \xa92020",l.a.createElement(u,null))))},E=(t(23),t(13));var p=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{class:"card text-center"},l.a.createElement("div",{class:"card-header home1"},l.a.createElement("img",{src:"https://ofcc.ohio.gov/portals/0/Images/Resources/Bid%203D_Med.jpg",width:"100px",height:"100px",alt:"Bid_Med",className:"pic"}),l.a.createElement("h1",{className:"header"},l.a.createElement(o.b,{to:"./BidPost",className:"link1"},"Search, ")," ",l.a.createElement(o.b,{to:"./PostPage",className:"link2"},"Post "),l.a.createElement("span",{className:"fun2"},"& "),l.a.createElement(o.b,{to:"./BidPost",className:"link3"},"Bid")," "),l.a.createElement("img",{src:"/images/act.png",width:"100px",height:"100px",alt:"act",className:"pic2"})),l.a.createElement("div",{class:"card-body home"},l.a.createElement("div",{className:"carousel"},l.a.createElement(E.a,{indicators:!1},l.a.createElement(E.a.Item,null,l.a.createElement("img",{src:"/images/pic3.jpg",height:"200px",alt:"pic3",width:"500px"})),l.a.createElement(E.a.Item,null,l.a.createElement("img",{src:"/images/pic6.jpg",height:"200px",alt:"pic6",width:"500px"})),l.a.createElement(E.a.Item,null,l.a.createElement("img",{src:"/images/pic8.jpg",height:"200px",alt:"pic8",width:"500px"})),l.a.createElement(E.a.Item,null,l.a.createElement("img",{src:"/images/pic7.jpg",height:"200px",alt:"pic7",width:"500px"})),l.a.createElement(E.a.Item,null,l.a.createElement("img",{src:"/images/pic5.jpg",height:"200px",alt:"pic5",width:"500px"})))),l.a.createElement("h4",{className:"text"},"BidBot is an auction site, selling items from jewelry to home appliances for unbeatable prices! Discover our best deals and start saving now!")),l.a.createElement("div",{className:"card-footer"}))))),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,null))},h=t(30),b=t.n(h),g=t(47),f=t(16),v=t(9),N=t(17),w=t(18),y=t(20),x=t(19),C=t(21),B=t(12),j=t.n(B),k=function(){return j.a.get("/api/items")},I=function(e){return j.a.get("/api/items?category="+e)},O=function(e,a){return j.a.put("/api/items/"+e,a)},S=function(e){return j.a.delete("/api/items/"+e)},P=function(e){return console.log("api route hit"),j.a.post("/api/items",e)},F=function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(y.a)(this,Object(x.a)(a).call(this,e))).displayAll=function(){k().then((function(e){t.setState({results:e.data,buyOut:e.data.buyout})})).catch((function(e){return console.log(e)}))},t.displayData=function(e){I(e).then((function(e){t.setState({results:e.data})})).catch((function(e){return console.log(e)}))},t.deleteItem=function(e){S(e).then((function(e){return t.displayAll()})).catch((function(e){return console.log(e)}))},t.handleInputChange=function(e){var a=e.target.value,n=e.target.name;t.setState(Object(v.a)({},n,a))},t.handleBidPriceInput=function(e){var a=e.target.value,n=e.target.name;t.setState((function(e){return{highestbid:Object(f.a)({},e.highestbid,Object(v.a)({},n,a))}}))},t.handleBidSubmit=function(e,a){e.preventDefault();var n=parseInt(a.startingbid),l=parseInt(a.buyout),r=parseInt(t.state.highestbid[a._id]);console.log(r),r>l?t.handleBuyNow(a):r>n?O(a._id,{startingbid:r}).then((function(e){alert("Your bid of $"+r+" was accepted!"),window.location.reload(!1)})):alert("Stop bein' so stingy! Need to fork over more than that, cheapskate!")},t.handleBuyNow=function(){var e=Object(g.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteItem(a._id);case 2:alert("Congratulations, you are now the proud owner of a ".concat(a.itemname));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.state={results:[],search:"",items:[],highestbid:{},buyOut:[],purchased:{}},t}return Object(C.a)(a,e),Object(w.a)(a,[{key:"componentDidMount",value:function(){this.query?this.displayData():this.displayAll()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("form",{className:"form-inline cat-form"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("h3",{className:"cats"},"Shop ",l.a.createElement("span",{className:"fun"},"by")," category"),l.a.createElement("select",{className:"itemSearch custom-select",name:"search",onChange:this.handleInputChange},l.a.createElement("option",{id:"allItems",value:"",name:"search"},"..."),l.a.createElement("option",{id:"homeAndGarden",name:"search",value:"homeAndGarden"},"Home and Garden"),l.a.createElement("option",{id:"electronics",name:"search",value:"electronics"},"Electronics"),l.a.createElement("option",{id:"fashion",name:"search",value:"fashion"},"Fashion"),l.a.createElement("option",{id:"sportsGoods",name:"search",value:"sportsGoods"},"Sporting Goods"),l.a.createElement("option",{id:"businessIndustrial",name:"search",value:"businessIndustrial"},"Business and Industrial"))),l.a.createElement("h3",{className:"searchByName"},l.a.createElement("span",{className:"fun"},"or "),"search ",l.a.createElement("span",{className:"fun"},"by "),"name"),l.a.createElement("div",null,l.a.createElement("input",{className:"input form-control filter",placeholder:"Search by name",type:"text",onChange:this.handleInputChange.bind(this),name:"search",value:this.state.search}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},this.state.results.filter((function(a){return a.itemname.toLowerCase().trim().includes(e.state.search.toLowerCase().trim())||a.category.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-xsm-12 col-md-4 col-sm-12"},l.a.createElement("div",{className:"card item-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("nav",{className:"card-title"},a.itemname),l.a.createElement("img",{src:a.image,className:"card-img",alt:a.name})),l.a.createElement("br",null),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("br",null),l.a.createElement("li",{key:a.toString()},l.a.createElement("strong",null,"Condition:")," ",a.condition),l.a.createElement("br",null),l.a.createElement("li",{key:a.toString()},l.a.createElement("strong",null,"Current bid: $ "),a.startingbid),l.a.createElement("br",null),l.a.createElement("li",{key:a.toString()},l.a.createElement("strong",null,"Buyout price: $ "),a.buyout," ")),l.a.createElement("button",{className:"btn btn-outline-secondary buy",onClick:function(){return e.handleBuyNow(a)}},"Buy Now"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-outline-secondary bid",type:"text",onClick:function(t){return e.handleBidSubmit(t,a)}},"Place bid"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-sm-8"},l.a.createElement("input",{id:a._id,type:"number",className:"form-control placeBid",name:a._id,value:e.state.highestbid[a._id],placeholder:"Bid Here",onChange:e.handleBidPriceInput}))))))),l.a.createElement("br",null)))}))))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,null))}}]),a}(n.Component),_=t(31);var A=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(_.a)(c,2),m=o[0],i=o[1];function s(){k().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}function u(e){var a=e.target,t=a.name,n=a.value;i(Object(f.a)({},m,Object(v.a)({},t,n)))}return console.log(t),Object(n.useEffect)((function(){s()}),[]),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-sm-3"},l.a.createElement("h3",null,"Fill ",l.a.createElement("span",{className:"fun"},"out")," a ",l.a.createElement("span",{className:"fun"},"form")," to ",l.a.createElement("span",{className:"fun"},"upload")," your ",l.a.createElement("span",{className:"fun"},"product"),"!"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4  offset-sm-4 col-sm-12"},l.a.createElement("div",{className:"card"},l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",{htmlFor:"itemname"},"Enter Item Name"),l.a.createElement("input",{name:"itemname",type:"text",className:"form-control post-form",onChange:u}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",{htmlFor:"startingbid"},"Starting Price"),l.a.createElement("input",{name:"startingbid",type:"startingbid",className:"form-control post-form",onChange:u})),l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",{htmlFor:"buyout"},"Buy out price"),l.a.createElement("input",{id:"buyout",name:"buyout",type:"buyout",className:"form-control post-form",onChange:u}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",{htmlFor:"category"},"Choose a category"),l.a.createElement("select",{name:"category",className:"form-control",onChange:u},l.a.createElement("option",null,"..."),l.a.createElement("option",null,"Home and garden"),l.a.createElement("option",null,"Electronics"),l.a.createElement("option",null,"Fashion"),l.a.createElement("option",null,"Sporting goods"),l.a.createElement("option",null,"Business and industrial")))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",{htmlFor:"condition"},"Add item condition"),l.a.createElement("select",{name:"condition",className:"form-control",onChange:u},l.a.createElement("option",null,"..."),l.a.createElement("option",null,"New"),l.a.createElement("option",null,"Good"),l.a.createElement("option",null,"Used")))),l.a.createElement("br",null),l.a.createElement("button",{id:"myForm",className:"postButton btn",onClick:function(e){e.preventDefault(),P(m).then((function(e){s(),alert("Your item has been added!"),window.location.reload(!1)})).catch((function(e){return console.log(e)}))}},"Post Item!"),l.a.createElement("br",null))),l.a.createElement("br",null)),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(d,null))};t(80);var D=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-white"},l.a.createElement("img",{src:"/images/bot1.png",width:"100px",height:"100px",className:"d-inline-block align-top",alt:""}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Home ",l.a.createElement("span",null," |"))),l.a.createElement("li",{className:"nav-item categories"},l.a.createElement(o.b,{to:"/BidPost",className:"/BidPost"===window.location.pathname?"nav-link active":"nav-link"},"Categories ",l.a.createElement("span",null," |"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/PostPage",className:"/PostPage"===window.location.pathname?"nav-link active":"nav-link"},"Add item ",l.a.createElement("span",null," |"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/Cart",className:"/PostPage"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement("ion-icon",{name:"basket"}),"Cart")))))},G=function(e){function a(){return Object(N.a)(this,a),Object(y.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Cart page is under construction"),l.a.createElement(d,null))}}]),a}(n.Component);var H=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(p,null)),l.a.createElement(m.a,{exact:!0,path:"/BidPost"},l.a.createElement(F,null)),l.a.createElement(m.a,{exact:!0,path:"/PostPage"},l.a.createElement(A,null)),l.a.createElement(m.a,{exact:!0,path:"/Cart"},l.a.createElement(G,null)))))};t(81);c.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2659eaaa.chunk.js.map