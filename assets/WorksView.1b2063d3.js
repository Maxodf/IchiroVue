import{_ as y,T as w,g as u,D as C,M as B,a as A,b as G}from"./index.7c5c67e4.js";import{f as l,m as o,q as e,G as I,C as r,F as f,D as n,L as m,H as L,M as v,v as M,x as E,j as D,E as _}from"./vue.49ecfbbb.js";const F={props:{linkImg:String},methods:{clickBig:function(){this.bigOnClick.reversed(!this.bigOnClick.reversed())}},data(){return{bigOnClick:new w({paused:!0})}},mounted(){window.innerWidth<400?this.bigOnClick=u.timeline().to(this.$refs.imgItem,{position:"fixed",scale:1.2,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse():window.innerWidth<1400?this.bigOnClick=u.timeline().to(this.$refs.imgItem,{position:"fixed",scale:2,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001,color:"blue"}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse():this.bigOnClick=u.timeline().to(this.$refs.imgItem,{position:"fixed",scale:3,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse()}},S={ref:"overlay",class:"overlay"},$={class:"item"},N=["src"];function P(t,s,d,h,a,g){return l(),o(I,null,[e("span",S,null,512),e("div",$,[e("img",{ref:"imgItem",onClick:s[0]||(s[0]=(...c)=>g.clickBig&&g.clickBig(...c)),class:"item__img",src:d.linkImg,alt:""},null,8,N)])],64)}const O=y(F,[["render",P],["__scopeId","data-v-81518263"]]);const H={components:{MyItem:O},props:{images:{type:Array,required:!0}},data(){return{showMenu:!1,showMenuEC:!1,search:"",items:[{name:'id="limpide"',type:"limpide"},{name:"modeste",type:"modeste"},{name:"audacieuse",type:"audacieuse"},{name:"hubmle",type:"humble"},{name:"exigente",type:"exigeante"},{name:"intr\xE9pide",type:"intrepide"},{name:"pr\xE9tentieuse",type:"pretentieuse"}]}},computed:{filteredItems(){return this.items.filter(t=>t.type.toLowerCase().indexOf(this.search.toLowerCase())>-1)}},mounted(){document.addEventListener("click",t=>{t.target.closest(".dropdown")||(this.showMenu=!1)}),document.addEventListener("click",t=>{t.target.closest(".dropdown")||(this.showMenuEC=!1)})}},p=t=>(M("data-v-49b3717b"),t=t(),E(),t),j={class:"author-archive"},z={class:"container"},T=v('<input type="radio" id="All" name="categories" value="All" checked data-v-49b3717b><input type="radio" id="Limpide" name="categories" value="Limpide" data-v-49b3717b><input type="radio" id="Modeste" name="categories" value="Modeste" data-v-49b3717b><input type="radio" id="Audacieuse" name="categories" value="Audacieuse" data-v-49b3717b><input type="radio" id="Humble" name="categories" value="Humble" data-v-49b3717b><input type="radio" id="Exigeante" name="categories" value="Exigeante" data-v-49b3717b><input type="radio" id="Intr\xE9pide" name="categories" value="Intr\xE9pide" data-v-49b3717b><input type="radio" id="Pr\xE9tentieuse" name="categories" value="Pr\xE9tentieuse" data-v-49b3717b>',8),V={class:"dropdown"},W={key:0},X=p(()=>e("li",null,[e("label",{for:"All"},"All")],-1)),R=p(()=>e("li",null,[e("label",{for:"Limpide"},"Limpide")],-1)),U=p(()=>e("li",null,[e("label",{for:"Modeste"},"Modeste")],-1)),Y=p(()=>e("li",null,[e("label",{for:"Audacieuse"},"Audacieuse")],-1)),q=[X,R,U,Y],J={class:"dropdown"},K={key:0},Q=v('<li data-v-49b3717b><label for="All" data-v-49b3717b>All</label></li><li data-v-49b3717b><label for="Humble" data-v-49b3717b>Humble</label></li><li data-v-49b3717b><label for="Exigeante" data-v-49b3717b>Exigeante</label></li><li data-v-49b3717b><label for="Intr\xE9pide" data-v-49b3717b>Intr\xE9pide</label></li><li data-v-49b3717b><label for="Pr\xE9tentieuse" data-v-49b3717b>Pr\xE9tentieuse</label></li>',5),Z=[Q],ee=v('<ol class="filters" data-v-49b3717b><div class="" data-v-49b3717b><li data-v-49b3717b><label for="All" data-v-49b3717b>All</label></li></div><div class="col-5 on" data-v-49b3717b><p class="pon" data-v-49b3717b> \xA0\xA0FORMULES ONGLES NATURELS \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </p><li data-v-49b3717b><label for="Limpide" data-v-49b3717b>Limpide</label></li><li data-v-49b3717b><label for="Modeste" data-v-49b3717b>Modeste</label></li><li data-v-49b3717b><label for="Audacieuse" data-v-49b3717b>Audacieuse</label></li></div><div class="col-6 ec" data-v-49b3717b><p class="pec" data-v-49b3717b> \xA0\xA0FORMULES EXTENSIONS CHABLON \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </p><li data-v-49b3717b><label for="Humble" data-v-49b3717b>Humble</label></li><li data-v-49b3717b><label for="Exigeante" data-v-49b3717b>Exigeante</label></li><li data-v-49b3717b><label for="Intr\xE9pide" data-v-49b3717b>Intr\xE9pide</label></li><li data-v-49b3717b><label for="Pr\xE9tentieuse" data-v-49b3717b>Pr\xE9tentieuse</label></li></div></ol>',1),te={class:"posts"},se=["data-category"],ae={key:0},ie=["src"];function le(t,s,d,h,a,g){const c=r("fa"),b=r("MyItem");return l(),o("section",j,[e("div",z,[T,e("div",V,[e("button",{onClick:s[0]||(s[0]=i=>a.showMenu=!a.showMenu)},[f(" ONGLES NATURELS "),n(c,{class:"icon-nav__instagram",icon:["fa","angle-down"]})]),a.showMenu?(l(),o("ul",W,q)):m("",!0)]),e("div",J,[e("button",{onClick:s[1]||(s[1]=i=>a.showMenuEC=!a.showMenuEC)},[f(" EXTENSIONS CHABLON "),n(c,{class:"icon-nav__instagram",icon:["fa","angle-down"]})]),a.showMenuEC?(l(),o("ul",K,Z)):m("",!0)]),ee,e("ol",te,[(l(!0),o(I,null,L(d.images,i=>(l(),o("li",{class:"post",key:i.src,"data-category":i.category},[n(b,{linkImg:i.src},null,8,["linkImg"])],8,se))),128))])]),e("div",null,[t.selectedImage?(l(),o("div",ae,[e("img",{src:t.selectedImage,alt:"Selected Image"},null,8,ie),e("button",{onClick:s[2]||(s[2]=i=>{t.selectedImage=null,t.isExpanded=!1})},"Close")])):m("",!0)])])}const oe=y(H,[["render",le],["__scopeId","data-v-49b3717b"]]);const re={components:{MyGallery:oe,DefaultLayout:C,MyNav:B,MyButton:A,MyFooter:G},data(){return{images:[{src:"/src/assets/img/gallery/7F6F3CF0-A005-4C88-8B29-918ABA675BED.jpg",category:"Audacieuse"},{src:"/src/assets/img/gallery/132D9631-A86A-4EDC-BEDE-BD6C3C85761F.jpg",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/48920AD1-454B-487E-AEA3-B16B5CD13708.jpg",category:"Modeste"},{src:"/src/assets/img/gallery/6F0C32B8-5FB8-490D-BAC0-2B604F266AD9.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/7ED3BDFD-BB15-4072-B02D-6ED485DEECB1.jpg",category:"Modeste"},{src:"/src/assets/img/gallery/D977B44E-F991-4B23-9F84-529DB5EFF0F1.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/F7400826-67B3-4A32-ABFD-04AB0E66DAF5.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1436.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1437.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1438.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1440.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1441.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1442.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1443.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1445.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1447.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1449.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1450.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1451.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1452.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1454.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_2718.png",category:"Humble"},{src:"/src/assets/img/gallery/IMG_2720.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_2722.png",category:"Limpide"},{src:"/src/assets/img/gallery/IMG_2723.png",category:"Modeste"},{src:"/src/assets/img/gallery/IMG_2733.png",category:"Limpide"},{src:"/src/assets/img/gallery/IMG_2732.png",category:"Humble"},{src:"/src/assets/img/gallery/IMG_2717.png",category:"Humble"}]}}},ne=t=>(M("data-v-cea8b69f"),t=t(),E(),t),ce=ne(()=>e("h1",{class:"title"}," My Works ",-1));function de(t,s,d,h,a,g){const c=r("MyNav"),b=r("MyGallery"),i=r("MyButton"),x=r("MyFooter"),k=r("DefaultLayout");return l(),D(k,null,{header:_(()=>[n(c),ce]),article:_(()=>[n(b,{images:a.images},null,8,["images"]),n(i,{text:"Prendre rendez-vous",link:"/contact"})]),footer:_(()=>[n(x)]),_:1})}const be=y(re,[["render",de],["__scopeId","data-v-cea8b69f"]]);export{be as default};