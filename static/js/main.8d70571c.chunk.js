(this["webpackJsonpfav-recipes"]=this["webpackJsonpfav-recipes"]||[]).push([[0],{88:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(10),c=n.n(r),o=(n(88),n(138)),l=n(32),s=n(126),d=n(130),j=n(3),u=function(e){var t=e.bgcolor,n=e.children;return Object(j.jsx)(o.a,{width:"100%",height:"100%",bgcolor:t,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:10,children:Object(j.jsx)(o.a,{display:"flex",flexDirection:"column",children:n})})},p=n(16),m=n(52),h=n(61),f={ingredients:[],favStores:[],totalPrice:0,selectedStoreLocation:[],deliveryHours:0},b=function(e,t){if(t.type in f)return Object(h.a)(Object(h.a)({},e),{},Object(m.a)({},t.type,t.payload));throw new Error("mutation type not defined")},x=n(74),g=[{name:"bread",emoji:"\ud83c\udf5e",price:2},{name:"lettuce",emoji:"\ud83e\udd6c",price:1.5},{name:"tomato",emoji:"\ud83c\udf45",price:1},{name:"pickle",emoji:"\ud83e\udd52",price:1.75},{name:"meat",emoji:"\ud83e\udd69",price:5}],O=[{name:"wholefoods",image:"https://upload.wikimedia.org/wikipedia/commons/archive/a/a2/20200709125950%21Whole_Foods_Market_201x_logo.svg",locations:[{city:"Bellingham",state:"MA",hours:2},{city:"Framingham",state:"MA",hours:1},{city:"Hopkinton",state:"MA",hours:3},{city:"Ashland",state:"MA",hours:1}],ingredients:[{name:"bread",emoji:"\ud83c\udf5e",price:2.6},{name:"lettuce",emoji:"\ud83e\udd6c",price:1.75},{name:"tomato",emoji:"\ud83c\udf45",price:1.23},{name:"pickle",emoji:"\ud83e\udd52",price:2},{name:"meat",emoji:"\ud83e\udd69",price:6}]},{name:"bjs",image:"https://upload.wikimedia.org/wikipedia/commons/4/48/BJs_Wholesale_Club_Logo.svg",locations:[{city:"Framingham",state:"MA",hours:1},{city:"Hopkinton",state:"MA",hours:3},{city:"Ashland",state:"MA",hours:1}],ingredients:[{name:"bread",emoji:"\ud83c\udf5e",price:2.8},{name:"lettuce",emoji:"\ud83e\udd6c",price:2},{name:"tomato",emoji:"\ud83c\udf45",price:1.56},{name:"pickle",emoji:"\ud83e\udd52",price:2.2},{name:"meat",emoji:"\ud83e\udd69",price:4.5}]},{name:"target",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",locations:[{city:"Bellingham",state:"MA",hours:2},{city:"Framingham",state:"MA",hours:1}],ingredients:[{name:"bread",emoji:"\ud83c\udf5e",price:2.8},{name:"lettuce",emoji:"\ud83e\udd6c",price:1.5},{name:"tomato",emoji:"\ud83c\udf45",price:1},{name:"pickle",emoji:"\ud83e\udd52",price:2.5},{name:"meat",emoji:"\ud83e\udd69",price:5}]}],y=function(e,t){return{getIngredients:function(){var e=0;g.forEach((function(t){e+=t.price})),t({type:"ingredients",payload:g}),t({type:"totalPrice",payload:e})},updateTotal:function(n){var i,a=n.type,r=n.price,c=e.totalPrice;"increase"===a?i=c+r:"decrease"===a&&(i=c-r),t({type:"totalPrice",payload:i})},deleteSelectedIngredient:function(n){var i=e.ingredients.filter((function(e,t){return e.name!==n.name}));t({type:"ingredients",payload:Object(x.a)(i)})},getFavStores:function(){t({type:"favStores",payload:O})},getStoreLocations:function(n){var i,a,r=e.ingredients,c=O.filter((function(e){return e.name===n})),o=function(e,t){var n=[];return t.forEach((function(t){var i=e.filter((function(e){return e.name===t.name}));n.push(i[0])})),n}(null===(i=c[0])||void 0===i?void 0:i.ingredients,r);t({type:"selectedStoreLocation",payload:null===(a=c[0])||void 0===a?void 0:a.locations}),t({type:"ingredients",payload:o})},setDeliveryHours:function(e){t({type:"deliveryHours",payload:e})}}},v=Object(i.createContext)(),w=function(e){var t=Object(i.useReducer)(b,f),n=Object(p.a)(t,2),a=n[0],r=n[1],c=y(a,r);return Object(j.jsx)(v.Provider,{value:{appState:a,appActions:c},children:e.children})},S=n(124),C=function(){var e=Object(i.useContext)(v).appState,t=e.totalPrice,n=e.deliveryHours;return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)(o.a,{display:"flex",flexDirection:"column",padding:3,children:[Object(j.jsx)(S.a,{style:{width:400}}),Object(j.jsxs)(o.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:2,children:[Object(j.jsx)(s.a,{variant:"h6",children:"Sub Total  "}),Object(j.jsxs)(s.a,{variant:"h5",style:{width:75},children:["$",t]})]})]}),n?Object(j.jsxs)(s.a,{variant:"subtitle1",style:{marginLeft:25},children:["Expected Delivery : ",n," Hours "]}):null]})},D=n(96),k=function(e){var t=e.icon,n=void 0===t?"\ud83c\udf5e":t,i=(e.onDelete,Object(l.a)());return Object(j.jsx)(o.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:2,borderColor:i.palette.primary.main,borderRadius:12,width:48,height:48,padding:1,children:Object(j.jsx)(s.a,{variant:"h4",children:n})})},A=n(127),L=n(139),F=n(72),I=n.n(F),M=n(70),P=n.n(M),T=n(71),E=n.n(T),H=function(e){var t=e.onChange,n=e.value,a=e.onDelete,r=Object(i.useState)(n),c=Object(p.a)(r,2),l=c[0],s=c[1],d=function(e){var n;"decrease"===e&&l>=0?n=l-1:"increase"===e&&(n=l+1),n>=0&&(s(n),t({type:e,updatedQuantity:n}))};return Object(j.jsxs)(o.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(j.jsx)(A.a,{size:"small",onClick:function(){return d("decrease")},children:Object(j.jsx)(P.a,{})}),0!==l?Object(j.jsx)(L.a,{variant:"outlined",inputMode:"numeric",value:l,size:"small",style:{marginLeft:10,marginRight:10,width:50,textAlign:"center"},inputProps:{min:0,style:{textAlign:"center"}}}):Object(j.jsx)(o.a,{width:"50px",height:"40px",marginX:"10px",display:"flex",alignItems:"center",justifyContent:"center",children:Object(j.jsx)(A.a,{onClick:a,children:Object(j.jsx)(E.a,{color:"error"})})}),Object(j.jsx)(A.a,{size:"small",onClick:function(){return d("increase")},children:Object(j.jsx)(I.a,{})})]})};H.defaultProps={value:1};var _=H,B=function(e){var t=e.item,n=e.onPriceChange,a=e.onItemDelete,r=Object(i.useState)(1),c=Object(p.a)(r,2),l=c[0],d=c[1],u=Object(i.useState)(0),m=Object(p.a)(u,2),h=m[0],f=m[1];Object(i.useEffect)((function(){f(l*t.price)}),[l,t,h]);return Object(j.jsx)(D.a,{children:Object(j.jsxs)(o.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",padding:1,children:[Object(j.jsx)(k,{icon:t.emoji}),Object(j.jsx)(_,{onChange:function(e){var i=e.type,a=e.updatedQuantity;d(a),n({type:i,price:t.price})},value:l,onDelete:function(){a(t)}}),Object(j.jsxs)(s.a,{style:{width:75},variant:"h6",children:["$",h]})]})},t.name)},z=function(){var e=Object(l.a)(),t=Object(i.useContext)(v),n=t.appState,a=t.appActions;Object(i.useEffect)((function(){a.getIngredients()}),[]);var r=n.ingredients,c=a.updateTotal,p=a.deleteSelectedIngredient,m=function(e){c(e)},h=function(e){p(e)};return Object(j.jsxs)(u,{bgcolor:e.palette.secondary.main,children:[Object(j.jsx)(s.a,{variant:"h4",style:{fontWeight:600,textAlign:"center"},children:"My Cart"}),Object(j.jsxs)(o.a,{width:"100%",minWidth:"450px",marginY:8,display:"flex",flexDirection:"column",children:[Object(j.jsxs)(o.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:"35px",children:[Object(j.jsx)(o.a,{width:"48px",height:"48px"}),Object(j.jsx)(s.a,{style:{width:80},variant:"h5",children:"Quantity"}),Object(j.jsx)(s.a,{style:{width:65},variant:"h5",children:"Total"})]}),Object(j.jsx)(d.a,{children:r.map((function(e){return Object(j.jsx)(B,{item:e,onPriceChange:m,onItemDelete:h},e.name)}))}),Object(j.jsx)(C,{})]})]})},R=n(133),W=n(136),J=n(131),Q=function(e){var t=e.selectedStoreLocation,n=e.onLocationSelect,a=Object(i.useState)(""),r=Object(p.a)(a,2),c=r[0],l=r[1];Object(i.useEffect)((function(){l("")}),[t]);return Object(j.jsxs)(o.a,{display:"flex",flexDirection:"column",marginTop:3,children:[Object(j.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:"Location :"}),Object(j.jsx)(W.a,{value:c,onChange:function(e){l(e.target.value);var i=t.filter((function(t){return t.city===e.target.value}));n(i[0])},variant:"outlined",children:t.map((function(e){return Object(j.jsxs)(J.a,{value:e.city,children:[e.city," - ",e.state]},e.city)}))})]})},Y=n(132),$=n(142),X=function(e){var t=e.favStores,n=e.onStoreSelect,a=Object(i.useState)(),r=Object(p.a)(a,2),c=r[0],l=r[1];return Object(j.jsxs)(o.a,{display:"flex",flexDirection:"column",marginTop:20,children:[Object(j.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:"Order From Your Favorite Store :"}),Object(j.jsx)($.a,{size:"large",value:c,exclusive:!0,onChange:function(e,t){l(t),n(t)},children:t.map((function(e){return Object(j.jsx)(Y.a,{value:e.name,children:Object(j.jsx)("img",{alt:e.name,src:e.image,width:60,height:60})})}))})]})},q=function(){var e=Object(l.a)(),t=Object(i.useContext)(v),n=t.appState,a=t.appActions;Object(i.useEffect)((function(){a.getFavStores()}),[]);var r=n.favStores,c=n.selectedStoreLocation,s=n.deliveryHours,d=a.getStoreLocations,p=a.setDeliveryHours;return Object(j.jsxs)(u,{bgcolor:e.palette.background.default,children:[Object(j.jsx)(X,{favStores:r,onStoreSelect:function(e){p(0),d(e)}}),c.length>0?Object(j.jsx)(Q,{selectedStoreLocation:c,onLocationSelect:function(e){p(e.hours)}}):null,Object(j.jsx)(o.a,{display:"flex",marginTop:4,flexDirection:"row-reverse",children:s?Object(j.jsx)(R.a,{variant:"contained",color:"primary",children:"Checkout"}):null})]})};var G=function(){return Object(j.jsx)(w,{children:Object(j.jsxs)(o.a,{width:"100vw",height:"100vh",display:"flex",flexDirection:"row",children:[Object(j.jsx)(z,{}),Object(j.jsx)(q,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))},N=n(53),U=n(73),V=Object(U.a)({palette:{primary:{main:"#0f0c3d"},secondary:{main:"#ffd773"},error:{main:N.a.A400},background:{default:"#f7f7f7"}}}),Z=n(134),ee=n(135);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsxs)(Z.a,{theme:V,children:[Object(j.jsx)(ee.a,{}),Object(j.jsx)(G,{})]})}),document.getElementById("root")),K()}},[[94,1,2]]]);
//# sourceMappingURL=main.8d70571c.chunk.js.map