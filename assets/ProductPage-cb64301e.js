var P=Object.defineProperty;var R=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var g=(e,t,a)=>(R(e,typeof t!="symbol"?t+"":t,a),a);import{g as O,j as s,R as u,r as f}from"./index-4f9a99dc.js";var y={exports:{}},A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Q=A,B=Q;function S(){}function I(){}I.resetWarningCache=S;var H=function(){function e(r,i,c,m,N,h){if(h!==B){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:I,resetWarningCache:S};return a.PropTypes=a,a};y.exports=H();var W=y.exports;const l=O(W),C=({breadcrumbItems:e})=>s.jsx("nav",{"aria-label":"breadcrumb",children:s.jsx("ol",{className:"breadcrumb",children:e.map((t,a)=>s.jsxs("li",{className:"breadcrumb__item",children:[s.jsx("a",{href:"/",children:t}),a!==e.length-1&&s.jsx("span",{className:"breadcrumb__slash",children:"/"})]},a))})});C.propTypes={breadcrumbItems:l.arrayOf(l.shape({title:l.string.isRequired,url:l.string})).isRequired};const p=({vertical:e,color:t})=>{const a=`divider${e?" vertical":""}`,r={backgroundColor:t};return s.jsx("div",{className:a,style:r})};const q="/add-to-cart/assets/1-093b3a64.jpeg",J="/add-to-cart/assets/2-0b8b3558.png",U="/add-to-cart/assets/3-f2196520.jpeg",z="/add-to-cart/assets/4-e8a14cf1.jpeg",D="/add-to-cart/assets/5-8ac98850.jpeg",n={blackTShirt1:q,blackTShirt2:J,blackTShirt3:U,blackTShirt4:z,blackTShirt5:D},F="/add-to-cart/assets/adidasLogo-6c77ee37.svg",M="/add-to-cart/assets/yeshteryLogo-c437594a.svg",Y="/add-to-cart/assets/Logo-34d7b0da.svg",x={adidasIcon:F,yeshteryLogo:M,BaseYeshteryLogo:Y};var T={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=u.createContext&&u.createContext(T),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},d.apply(this,arguments)},X=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function E(e){return e&&e.map(function(t,a){return u.createElement(t.tag,d({key:a},t.attr),E(t.child))})}function G(e){return function(t){return u.createElement(Z,d({attr:d({},e.attr)},t),E(e.child))}}function Z(e){var t=function(a){var r=e.attr,i=e.size,c=e.title,m=X(e,["attr","size","title"]),N=i||a.size||"1em",h;return a.className&&(h=a.className),e.className&&(h=(h?h+" ":"")+e.className),u.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,m,{className:h,style:d(d({color:e.color||a.color},a.style),e.style),height:N,width:N,xmlns:"http://www.w3.org/2000/svg"}),c&&u.createElement("title",null,c),e.children)};return k!==void 0?u.createElement(k.Consumer,null,function(a){return t(a)}):t(T)}function V(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}const v=({rating:e})=>{const t=()=>{const a=[];for(let r=1;r<=5;r++){const i={fill:r<=e?"#FFB900":"none",color:"black",stroke:"#E09B00",strokeWidth:2,width:"20px",height:"20px"};a.push(s.jsx(V,{style:i},r))}return a};return s.jsx("div",{className:"rating-stars",children:t()})};v.propTypes={rating:l.number.isRequired};const K=()=>s.jsxs("div",{className:"product-card",children:[s.jsx("div",{className:"product-card__image",children:s.jsx("img",{src:`${n.blackTShirt2}`,alt:"Product"})}),s.jsxs("div",{className:"product-card__details",children:[s.jsx("h3",{className:"product-card__title",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),s.jsxs("div",{className:"product-card__price",children:[s.jsx("p",{children:"9,999"}),s.jsx("img",{src:`${x.adidasIcon}`,className:"product-image",alt:"Product"})]}),s.jsxs("div",{className:"product-card__rating",children:[s.jsx(v,{rating:4}),s.jsx("span",{children:"4.9 of 5"})]}),s.jsxs("p",{className:"product-card__location",children:["Pickup From: ",s.jsx("span",{children:"Genena Mall"})]})]})]});const $="/add-to-cart/assets/hamburgerIcon-f1267e23.svg",ss="/add-to-cart/assets/findStore-d64645d3.svg",es="/add-to-cart/assets/contactUs-90cfbdcd.svg",as="/add-to-cart/assets/trackOrder-33580654.svg",ts="/add-to-cart/assets/cartIcon-af0e3191.svg",rs="/add-to-cart/assets/wishlistIcon-a445bb1e.svg",is="/add-to-cart/assets/loginIcon-b6eefa41.svg",cs="/add-to-cart/assets/searchIcon-4d69b6a5.svg",o={hamburgerIcon:$,findAStore:ss,contactUs:es,trackOrder:as,cartIcon:ts,wishListIcon:rs,loginIcon:is,searchIcon:cs},w=({links:e})=>s.jsx("nav",{className:"navbar",children:s.jsxs("div",{className:"navbar__content container",children:[s.jsxs("div",{className:"navbar__left",children:[s.jsx("div",{className:"navbar__hamburger",children:s.jsxs("span",{className:"hamburger-icon",children:[s.jsx("img",{src:o.hamburgerIcon,alt:"hamburger icon"})," "]})}),s.jsx("div",{className:"navbar__logo",children:s.jsx("img",{src:x.BaseYeshteryLogo,alt:"Logo"})})]}),s.jsx("div",{className:"navbar__fill",children:s.jsx("div",{className:"carousel",children:s.jsxs("p",{children:["Valentine’s Day Offers! Buy Two Get One Free Shop Now"," ",s.jsx("a",{href:"#",children:"Shop Now"})]})})}),s.jsx("div",{className:"navbar__right",children:s.jsx("ul",{className:"support-links",children:e.map((t,a)=>s.jsxs("li",{children:[s.jsx("img",{src:t.icon,alt:t.label}),s.jsx("a",{href:"#",children:t.label})]},a))})})]})});w.propTypes={links:l.arrayOf(l.shape({title:l.string.isRequired,url:l.string.isRequired})).isRequired};const ns=({itemCount:e,onClick:t})=>s.jsxs("div",{onClick:t,style:{display:"flex",gap:"10px"},children:[s.jsxs("div",{children:[s.jsx("div",{className:"badge",children:s.jsx("span",{className:"badge-number",children:e})}),s.jsx("img",{src:o.cartIcon,alt:"cart Icon"})]}),s.jsx("a",{href:"#",children:"Cart"})]}),ls=({item:e})=>s.jsx("div",{className:"cart-item",children:s.jsxs("div",{style:{display:"flex",gap:"20px"},className:"item-details",children:[s.jsx("p",{className:"item-name",children:e.name}),s.jsx("p",{className:"item-price",children:e.quantity})]})}),os=({cartItems:e})=>s.jsx("div",{style:{display:"flex",alignItems:"center",position:"absolute",background:"white",minHeight:"100px",top:"30px",border:"solid 1px gray",borderRadius:"20px",padding:"2rem"},className:"cart-dropdown",children:e.length===0?s.jsx("p",{className:"empty-cart-message",children:"Your cart is empty."}):s.jsx("div",{className:"cart-items",children:e.map(t=>s.jsx(ls,{item:t},t.id))})});class ds extends f.Component{constructor(a){super(a);g(this,"handleToggleCart",()=>{this.setState(a=>({isCartOpen:!a.isCartOpen}))});this.state={isCartOpen:!1}}render(){const{isCartOpen:a}=this.state,{cartItems:r}=this.props;return s.jsxs("div",{children:[s.jsx(ns,{itemCount:r.length,onClick:this.handleToggleCart}),a&&s.jsx(os,{cartItems:r})]})}}class ms extends f.Component{constructor(a){super(a);g(this,"toggleCart",()=>{this.setState(a=>({isCartOpen:!a.isCartOpen}))});this.state={isCartOpen:!1}}render(){const{links:a,cartItems:r}=this.props;return s.jsx("nav",{className:"navbar navbar--middle",children:s.jsxs("div",{className:"navbar__content container",children:[s.jsx("div",{className:"navbar__left",children:s.jsxs("div",{className:"search-input",children:[s.jsx("input",{type:"text",placeholder:"Search"}),s.jsx("img",{src:o.searchIcon,className:"search-icon",alt:"Search icon"})]})}),s.jsx("div",{className:"navbar__fill",children:s.jsx("div",{className:"carousel",children:s.jsx("a",{href:"#",children:s.jsx("img",{src:x.adidasIcon,alt:"Adidas Logo"})})})}),s.jsx("div",{className:"navbar__right",children:s.jsxs("ul",{className:"support-links ",children:[s.jsx("li",{children:s.jsx(ds,{cartItems:r})}),a.slice(1).map((i,c)=>s.jsxs("li",{children:[s.jsx("img",{src:i.icon,alt:i==null?void 0:i.label}),s.jsx("a",{href:"#",children:i.label})]},c))]})})]})})}}const hs=({links:e})=>s.jsx("nav",{className:"navbar navbar--bottom",children:s.jsx("div",{className:"navbar__content container",children:s.jsx("ul",{className:"support-links",children:e.map((t,a)=>s.jsx("li",{children:s.jsx("a",{href:"#",children:t.label})},a))})})});const us="/add-to-cart/assets/facebookIcon-e1b0b202.svg",ps="/add-to-cart/assets/instagramIcon-dd0b4bd0.svg",xs="/add-to-cart/assets/twitterIcon-0adb158a.svg",gs="/add-to-cart/assets/LinkedInIcon-35fa633b.svg",j={facebook:us,instagram:ps,twitter:xs,linkedin:gs},js="/add-to-cart/assets/C-948ab7cd.png",bs="/add-to-cart/assets/visa-38763e9d.png",Ns="/add-to-cart/assets/mastercard-20c30161.png",fs="data:image/png;base64,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",b={cashOnDelivery:js,visa:bs,masterCard:Ns,nasnnav:fs},vs=()=>s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"footer__container",children:[s.jsxs("div",{className:"footer__grid",children:[s.jsxs("div",{className:"footer__column",children:[s.jsx("div",{className:"footer__logo",children:s.jsx("img",{src:`${x.yeshteryLogo}`,className:"product-image",alt:"Product"})}),s.jsx("p",{className:"footer__description",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam in hendrerit in Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam in hendrerit in"})]}),s.jsx(p,{vertical:!0,color:"#868686"}),s.jsxs("div",{className:"footer__column",children:[s.jsxs("div",{className:"footer__subscribe",children:[s.jsx("h3",{className:"footer__subscribe-title",children:"Subscribe to our newsletter"}),s.jsxs("form",{className:"footer__subscribe-form",children:[s.jsx("input",{name:"email",type:"email",required:!0,placeholder:"Enter Your Mail",className:"footer__subscribe-input"}),s.jsx("button",{className:"footer__subscribe-button",children:"Subscribe"})]})]}),s.jsxs("div",{className:"footer__links-grid",children:[s.jsx("div",{className:"footer__links-column",children:s.jsxs("ul",{className:"footer__links-list",children:[s.jsx("li",{children:s.jsx("a",{href:"/",className:"footer__link",children:"About Us"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"footer__link",children:"Contact Us"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"footer__link",children:"Track Order"})}),s.jsx("li",{children:s.jsx("a",{href:"/sell-with-us",className:"footer__link",children:"Sell With Us"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"footer__link",children:"Shipping And Returns"})})]})}),s.jsx(p,{vertical:!0,color:"#868686"}),s.jsx("div",{className:"footer__links-column",children:s.jsxs("ul",{className:"footer__links-list",children:[s.jsxs("li",{children:[s.jsx("div",{className:"footer__social-icon",children:s.jsx("img",{src:j.facebook,className:"footer__social-icon-image",alt:"Facebook"})}),s.jsx("a",{href:"https://www.facebook.com/yeshtery/",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:"Facebook"})]}),s.jsxs("li",{children:[s.jsx("div",{className:"footer__social-icon",children:s.jsx("img",{src:j.instagram,className:"footer__social-icon-image",alt:"Instagram"})}),s.jsx("a",{href:"https://www.instagram.com/yeshtery/",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:"Instagram"})]}),s.jsxs("li",{children:[s.jsx("div",{className:"footer__social-icon",children:s.jsx("img",{src:j.twitter,className:"footer__social-icon-image",alt:"Twitter"})}),s.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:"Twitter"})]}),s.jsxs("li",{children:[s.jsx("div",{className:"footer__social-icon",children:s.jsx("img",{src:j.linkedin,className:"footer__social-icon-image",alt:"LinkedIn"})}),s.jsx("a",{href:"https://www.linkedin.com/company/yeshtery",target:"_blank",rel:"noopener noreferrer",className:"footer__link",children:"LinkedIn"})]})]})})]})]})]}),s.jsx(p,{color:"#868686"}),s.jsxs("div",{className:"footer__copyright",children:[s.jsx("p",{className:"footer__copyright-text",children:"© 2023 yeshtery, all rights reserved."}),s.jsxs("div",{className:"footer__payments",children:[s.jsx("img",{alt:"cash",src:b.cashOnDelivery,className:"footer__payment-image"}),s.jsx("img",{alt:"visa",src:b.visa,className:"footer__payment-image"}),s.jsx("img",{alt:"mastercard",src:b.masterCard,className:"footer__payment-image"})]}),s.jsxs("p",{className:"footer__powered-by",children:["Powered By"," ",s.jsx("img",{src:b.nasnnav,alt:"NasNav",className:"footer__powered-by-icon"})]})]})]})}),_s=[{label:"Contact Us",link:"/contact-us",icon:o.contactUs},{label:"Track Order",link:"/track-order",icon:o.trackOrder},{label:"Find A Store",link:"/find-a-Store",icon:o.findAStore}],ks=[{label:"Men",link:"/men"},{label:"Women",link:"/Women"},{label:"Unisex",link:"/Unisex"},{label:"Kids",link:"/kids"},{label:"Best Sellers",link:"/best-sellers"},{label:"New Arrivals",link:"/new-arrivals"},{label:"Offers",link:"/offers"}],ys=[{label:"Cart",link:"/cart",icon:o.cartIcon},{label:"Wishlist",link:"/Wishlist",icon:o.wishListIcon},{label:"Login",link:"/login",icon:o.loginIcon}],Ss=["Men","Clothing","Tops","Adidas","Adidas Black T-Shirt"],L=()=>({topNavbarLinks:_s,middleNavbarLinks:ys,bottomNavbarLinks:ks,breadcrumbItems:Ss});const Is=({children:e,cartItems:t})=>{const{topNavbarLinks:a,middleNavbarLinks:r,bottomNavbarLinks:i}=L();return s.jsxs("div",{className:"layout",children:[s.jsxs("header",{className:"layout__header",children:[s.jsx(w,{links:a}),s.jsx(ms,{cartItems:t,links:r})]}),s.jsx("main",{className:"layout__children",children:s.jsxs(s.Fragment,{children:[s.jsx(hs,{links:i}),e]})}),s.jsx(vs,{})]})};const Cs=({onAddToCart:e})=>s.jsxs("div",{className:"product-details ",children:[s.jsxs("div",{className:"product-details__image",children:[s.jsx("div",{className:"product-details__image-main",children:s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"})}),s.jsxs("div",{className:"product-details__image-paging",children:[s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"}),s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"}),s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"}),s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"}),s.jsx("img",{src:`${n.blackTShirt1}`,alt:"hamburger icon"})]})]}),s.jsxs("div",{className:"product-details__description",children:[s.jsx("a",{className:"product-details__logo",href:"#",children:s.jsx("img",{src:x.adidasIcon,alt:"Adidas Logo"})}),s.jsx("h2",{className:"product-details__title ",children:"Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),s.jsx("h3",{className:"product-details__cat-name",children:"Men"}),s.jsxs("div",{className:"product-details__rating",children:[s.jsx(v,{rating:4}),s.jsx("span",{className:"rating-text-1",children:"4.9 of 5"}),s.jsx("span",{className:"rating-text-2",children:"22 Rates"})]}),s.jsxs("div",{className:"product-details__price",children:[s.jsxs("span",{className:"product-details__price--value",children:["9,999 ",s.jsx("span",{children:"LE"})]}),s.jsx("span",{className:"product-details__price--original",children:"9,999"}),s.jsx("span",{className:"product-details__price--discount",children:"30% off"})]}),s.jsx(p,{}),s.jsx("h2",{className:"product-details__subtitle",children:"Size"}),s.jsxs("div",{className:"product-details__sizes",children:[s.jsx("div",{className:"product-details__sizes--item",children:"Small"}),s.jsx("div",{className:"product-details__sizes--item",children:"Medium"}),s.jsx("div",{className:"product-details__sizes--item",children:"Large"}),s.jsx("div",{className:"product-details__sizes--item",children:"X Large"}),s.jsx("div",{className:"product-details__sizes--item",children:"XX Large"})]}),s.jsx(p,{}),s.jsx("h2",{className:"product-details__subtitle",children:"Color"}),s.jsxs("div",{className:"product-details__colors",children:[s.jsx("div",{className:"color-img",children:s.jsx("img",{src:`${n.blackTShirt1}`,alt:"Shirts icon"})}),s.jsx("div",{className:"color-img",children:s.jsx("img",{src:`${n.blackTShirt1}`,alt:"Shirts icon"})})]}),s.jsx(p,{}),s.jsx("h2",{className:"product-details__subtitle",children:"Quantity"}),s.jsxs("div",{className:"quantity-control",children:[s.jsx("button",{className:"quantity-circle minus",children:"-"}),s.jsx("span",{className:"quantity-number",children:1}),s.jsx("button",{className:"quantity-circle plus",children:"+"})]}),s.jsxs("div",{className:"cta-buttons",children:[s.jsx("button",{onClick:e,className:"cta-buttons__add-to-cart",children:"Add to Cart"}),s.jsx("button",{className:"cta-buttons__pick-up",children:"Pick Up from Store"})]})]})]});class ws extends f.Component{constructor(a){super(a);g(this,"onAddToCart",()=>{const a={id:1,name:"product",quantity:1},{cartItems:r}=this.state;if(r.find(c=>c.id===a.id)){const c=r.map(m=>m.id===a.id?{...m,quantity:m.quantity+1}:m);this.setState({cartItems:c})}else this.setState({cartItems:[...r,{...a,quantity:1}]})});this.state={cartItems:[]}}render(){const{breadcrumbItems:a}=L(),{cartItems:r}=this.state;return s.jsxs(Is,{cartItems:r,children:[s.jsxs("section",{className:"product-page",children:[s.jsx("div",{className:"product-page__breadcrumb ",children:s.jsx(C,{breadcrumbItems:a})}),s.jsx(p,{}),s.jsx(Cs,{onAddToCart:this.onAddToCart})]}),s.jsxs("section",{className:"similar-products",children:[s.jsxs("div",{className:"similar-products__heading",children:[s.jsx("h2",{className:"similar-products__title",children:"Similar Products"}),s.jsx("p",{className:"similar-products__subtitle",children:"You may like these products also"})]}),s.jsx("div",{className:"similar-products__cards",children:[1,2,3,4,5].map((i,c)=>s.jsx(K,{},c.toString()))})]})]})}}export{ws as default};