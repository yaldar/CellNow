(this["webpackJsonptesting-app"]=this["webpackJsonptesting-app"]||[]).push([[0],{69:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n(0),a=n.n(r),i=n(24),o=n.n(i),d=n(20),l=n(2),u=n(38),s=n(55),b=n(5),p=n(53),h=n.n(p),f=n(56),j=[{title:"iPhone",desc:"The new iPhone!",price:"123.213",image:"https://via.placeholder.com/150",id:1},{title:"Phone case",desc:"Phone case for your iPhone",price:"312",image:"https://via.placeholder.com/150",id:2}],O=function(t){var e=0;return t.forEach((function(t){e+=t.quantity})),e},m={"*":{margin:0,padding:0}},g={display:"flex",flexDirection:"column",alignItems:"center"},v=function(t){return t.reduce((function(t,e){return t+e.quantity*(n=e.product.price,parseInt(n));var n}),0)},y="SEK",x=n(48),C=n.n(x),w=function(t){var e=t.cart,n=Object(r.useState)(O(e)),c=Object(d.a)(n,2),a=c[0],i=c[1];Object(r.useEffect)((function(){i(O(e)),console.log(e)}),[e]);return Object(l.b)("a",{href:"/cart",css:{marginLeft:"auto",marginRight:"20px",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center",justifyItems:"center"},children:[Object(l.a)(C.a,{}),a>0&&Object(l.b)("p",{css:{marginTop:"0",marginBottom:"0"},children:["(",a,")"]})]})},S=n(52),k=n.n(S),q=function(){return Object(l.a)("a",{href:"/",css:{height:"100%"},children:Object(l.a)(k.a,{css:{height:"100%"}})})},I=function(){var t={textDecoration:"none",display:"flex",alignItems:"center",paddingLeft:"20px",paddingRight:"20px",height:"100%","&:hover":{backgroundColor:"aqua"}};return Object(l.b)("nav",{css:{marginLeft:"auto",display:"flex",alignContent:"center"},children:[Object(l.a)("a",{href:"/",css:t,children:"Nav link one"}),Object(l.a)("a",{href:"/",css:t,children:"Nav link two"}),Object(l.a)("a",{href:"/",css:t,children:"Nav link three"})]})},D=(n(69),function(t){var e=t.cart,n=Object(r.useState)(!1),c=Object(d.a)(n,2),a=c[0],i=c[1],o=Object(r.useRef)(null),u=function(){i(!1)},s=function(t){var e=t.target;e.id&&"icon"!==e.id&&i(!1)};return Object(r.useEffect)((function(){return document.addEventListener("scroll",u),document.addEventListener("click",s),function(){document.removeEventListener("scroll",u),document.removeEventListener("click",s)}}),[]),Object(l.b)("div",{className:"header ".concat(a?"expanded":""),id:"navbar",css:{display:"flex",flexDirection:"".concat(a?"column":"row"),height:"70px",width:"100%",backgroundColor:"rgba(19, 180, 255, 0.74)"},children:[Object(l.a)(h.a,{className:"icon",onClick:function(){return i((function(t){return!t}))},ref:o}),Object(l.a)(q,{}),Object(l.a)(I,{}),Object(l.a)(w,{cart:e})]})}),N=n(91),E=function(t){var e=t.e,n=t.setCart,c=t.cart,a=e.product,i=e.quantity,o=Object(r.useState)(i.toString()),u=Object(d.a)(o,2),s=u[0],b=u[1],p=a.id.toString(),h=Object(r.useRef)(null);return Object(l.b)("div",{css:{display:"flex",flexDirection:"column"},children:[Object(l.b)("div",{css:{display:"flex"},children:[Object(l.a)("img",{src:e.product.image,alt:""}),Object(l.b)("div",{css:{marginLeft:"20px"},children:[Object(l.b)("h3",{children:[" ",e.product.title]}),Object(l.b)("p",{children:["quantity: ",e.quantity]}),Object(l.b)("p",{children:["price: ",e.quantity," ",y]})]})]}),Object(l.b)("form",{onSubmit:function(t){t.preventDefault(),n(function(t,e,n){return t.map((function(t){return t.product.id===e.id?{product:t.product,quantity:n}:t}))}(c,a,parseInt(s)))},ref:h,children:[Object(l.a)("input",{type:"number",min:"0",id:p,value:s,onChange:function(t){var e=t.target.value;b(e)}}),Object(l.a)(N.a,{onClick:function(t){var e;t.preventDefault(),null===(e=h.current)||void 0===e||e.requestSubmit()},children:"update quantity"})]}),Object(l.a)(N.a,{onClick:function(t){n(function(t,e){return t.filter((function(t){return t.product.id!==e.id}))}(c,a)),console.log(c)},children:"remove"})]},p)},L=function(t){var e=t.cart,n=t.setCart;return Object(l.b)("div",{css:g,children:[Object(l.a)("h3",{children:"Your cart"}),Object(l.a)("h3",{children:0===e.length?Object(l.b)("div",{css:g,children:[Object(l.a)("p",{children:" You have no items in your cart"}),Object(l.a)(N.a,{href:"/",color:"secondary",variant:"contained",children:"continue shopping"})]}):Object(l.b)("div",{children:[e.map((function(t){return Object(l.a)(E,{cart:e,e:t,setCart:n})})),Object(l.a)("hr",{}),Object(l.b)("div",{css:[{display:"flex",flexDirection:"column",paddingTop:"100px",justifyItems:"space-between"}],children:[Object(l.b)("p",{children:["Your total is: ",v(e)," ",y]}),Object(l.a)(N.a,{href:"/",color:"secondary",variant:"contained",children:"continue shopping"}),Object(l.a)(N.a,{href:"/checkout",color:"primary",variant:"contained",children:"checkout"})]})]})})]})},T=n(54),P=n.p+"static/media/banner.6c07dfb7.png";function R(){var t=Object(T.a)(["\nfrom {\n  transform: translateY(-10px);\n  opacity: 0;\n}\nto {\n  transform: translateY(0);\n  opacity: 1;\n}\n"]);return R=function(){return t},t}var Y=Object(u.b)(R()),B=function(){return Object(l.b)("div",{css:{display:"flex",marginTop:"10px",animation:"".concat(Y," 500ms ease-in")},children:[Object(l.a)("img",{src:P,alt:"banner",css:{width:"100%",height:"25vw"}}),Object(l.a)("h1",{css:{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",marginTop:"10vw",color:"gray",fontSize:"3.5vw"},children:"Welcome to CellNow!"})]})},F=function(t){var e=t.children;return Object(l.b)("div",{className:"cart-page",css:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.a)(B,{}),e]})},J=function(t){var e=t.product,n=t.cart,c=t.setCart;return Object(l.b)("div",{css:{display:"flex",flexDirection:"column",margin:"20px",paddingTop:"15px",paddingBottom:"15px",alignItems:"center",width:"10vw",maxWidth:"600px",minWidth:"200px",border:"gray 1px solid",borderRadius:"8px"},children:[Object(l.a)("h3",{css:{margin:"20px"},children:e.title}),Object(l.a)("img",{src:e.image,alt:e.title}),Object(l.a)("hr",{css:{width:"100%"}}),Object(l.a)("p",{children:e.desc}),Object(l.b)("p",{children:[e.price," ",y]}),Object(l.a)(N.a,{variant:"contained",color:"primary",onClick:function(){c(function(t,e){return t.some((function(t){return t.product.id===e.id}))?function(t,e){return t.map((function(t){return t.product.id===e.id?{product:t.product,quantity:t.quantity+1}:t}))}(t,e):[].concat(Object(f.a)(t),[{product:e,quantity:1}])}(n,e))},children:"add to cart"})]})},W=function(t){var e=t.products,n=t.cart,c=t.setCart;return Object(l.a)("div",{css:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:null===e||void 0===e?void 0:e.map((function(t){return Object(l.a)(J,{cart:n,setCart:c,product:t})}))})};var z=function(){return Object(l.b)("div",{css:g,children:[Object(l.a)("h1",{children:"Page not found or not implemented yet"}),Object(l.a)(N.a,{href:"/",color:"primary",variant:"contained",children:"Home"})]})},A=function(){var t=Object(r.useState)(function(){var t=localStorage.getItem("cart");return t?JSON.parse(t):[]}()),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(n))}),[n]),Object(l.b)("div",{className:"App",children:[Object(l.a)(D,{cart:n}),Object(l.a)("div",{className:"body",children:Object(l.a)(s.a,{children:Object(l.b)(b.c,{children:[Object(l.a)(b.a,{exact:!0,path:"/cart",children:Object(l.a)(L,{cart:n,setCart:c})}),Object(l.a)(b.a,{exact:!0,path:"/",children:Object(l.a)(F,{children:Object(l.a)(W,{products:j,cart:n,setCart:c})})}),"TODO ",Object(l.a)(b.a,{component:z})]})})}),Object(l.a)(u.a,{styles:m})]})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},K=n(90);o.a.render(Object(c.jsxs)(a.a.StrictMode,{children:[Object(c.jsx)(K.a,{}),Object(c.jsx)(A,{})]}),document.getElementById("root")),H()}},[[74,1,2]]]);
//# sourceMappingURL=main.b69da392.chunk.js.map