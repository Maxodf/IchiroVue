import{_ as v,T as k,g as m,D as w,M as A,a as B,b as C}from"./index.396043ac.js";import{f as r,q as n,t as e,G,k as i,x as b,F as l,L as _,M as h,z as I,A as M,j as L,v as y}from"./vue.2410d426.js";const D={props:{linkImg:String},methods:{clickBig:function(){this.bigOnClick.reversed(!this.bigOnClick.reversed())}},data(){return{bigOnClick:new k({paused:!0})}},mounted(){window.innerWidth<400?this.bigOnClick=m.timeline().to(this.$refs.imgItem,{position:"fixed",scale:1.2,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse():window.innerWidth<1400?this.bigOnClick=m.timeline().to(this.$refs.imgItem,{position:"fixed",scale:2,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001,color:"blue"}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse():this.bigOnClick=m.timeline().to(this.$refs.imgItem,{position:"fixed",scale:3,zIndex:2,width:"400px",height:"400px",left:"50%",top:"50%",translateY:"-50%",translateX:"-50%",duration:.001}).to(this.$refs.overlay,{display:"block",position:"fixed",width:"100vw",height:"100vh",left:0,top:0,backgroundColor:"black",opacity:.8,duration:.001,zIndex:1},0).reverse()}},F={ref:"overlay",class:"overlay"},$={class:"item"},N=["src"];function S(t,s,p,f,a,c){return r(),n(G,null,[e("span",F,null,512),e("div",$,[e("img",{ref:"imgItem",onClick:s[0]||(s[0]=(...o)=>c.clickBig&&c.clickBig(...o)),class:"item__img",src:p.linkImg,alt:""},null,8,N)])],64)}const P=v(D,[["render",S],["__scopeId","data-v-81518263"]]);const O={components:{MyItem:P},props:{images:{type:Array,required:!0}},data(){return{showMenu:!1,showMenuEC:!1,search:"",items:[{name:'id="limpide"',type:"limpide"},{name:"modeste",type:"modeste"},{name:"audacieuse",type:"audacieuse"},{name:"hubmle",type:"humble"},{name:"exigente",type:"exigeante"},{name:"intr\xE9pide",type:"intrepide"},{name:"pr\xE9tentieuse",type:"pretentieuse"}]}},computed:{filteredItems(){return this.items.filter(t=>t.type.toLowerCase().indexOf(this.search.toLowerCase())>-1)}},mounted(){document.addEventListener("click",t=>{t.target.closest(".dropdown")||(this.showMenu=!1)}),document.addEventListener("click",t=>{t.target.closest(".dropdown")||(this.showMenuEC=!1)})}},g=t=>(I("data-v-85e3e51e"),t=t(),M(),t),H={class:"author-archive"},j={class:"container"},z=h('<input type="radio" id="All" name="categories" value="All" checked data-v-85e3e51e><input type="radio" id="Limpide" name="categories" value="Limpide" data-v-85e3e51e><input type="radio" id="Modeste" name="categories" value="Modeste" data-v-85e3e51e><input type="radio" id="Audacieuse" name="categories" value="Audacieuse" data-v-85e3e51e><input type="radio" id="Humble" name="categories" value="Humble" data-v-85e3e51e><input type="radio" id="Exigeante" name="categories" value="Exigeante" data-v-85e3e51e><input type="radio" id="Intr\xE9pide" name="categories" value="Intr\xE9pide" data-v-85e3e51e><input type="radio" id="Pr\xE9tentieuse" name="categories" value="Pr\xE9tentieuse" data-v-85e3e51e>',8),T={class:"dropdown"},V={key:0},W=g(()=>e("li",null,[e("label",{for:"All"},"All")],-1)),X=g(()=>e("li",null,[e("label",{for:"Limpide"},"Limpide")],-1)),R=g(()=>e("li",null,[e("label",{for:"Modeste"},"Modeste")],-1)),U=g(()=>e("li",null,[e("label",{for:"Audacieuse"},"Audacieuse")],-1)),Y=[W,X,R,U],q={class:"dropdown"},J={key:0},K=h('<li data-v-85e3e51e><label for="All" data-v-85e3e51e>All</label></li><li data-v-85e3e51e><label for="Humble" data-v-85e3e51e>Humble</label></li><li data-v-85e3e51e><label for="Exigeante" data-v-85e3e51e>Exigeante</label></li><li data-v-85e3e51e><label for="Intr\xE9pide" data-v-85e3e51e>Intr\xE9pide</label></li><li data-v-85e3e51e><label for="Pr\xE9tentieuse" data-v-85e3e51e>Pr\xE9tentieuse</label></li>',5),Q=[K],Z=h('<ol class="filters" data-v-85e3e51e><div class="" data-v-85e3e51e><li data-v-85e3e51e><label for="All" data-v-85e3e51e>All</label></li></div><div class="col-5 on" data-v-85e3e51e><p class="pon" data-v-85e3e51e> \xA0\xA0FORMULES ONGLES NATURELS \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </p><li data-v-85e3e51e><label for="Limpide" data-v-85e3e51e>Limpide</label></li><li data-v-85e3e51e><label for="Modeste" data-v-85e3e51e>Modeste</label></li><li data-v-85e3e51e><label for="Audacieuse" data-v-85e3e51e>Audacieuse</label></li></div><div class="col-6 ec" data-v-85e3e51e><p class="pec" data-v-85e3e51e> \xA0\xA0FORMULES EXTENSIONS CHABLON \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </p><li data-v-85e3e51e><label for="Humble" data-v-85e3e51e>Humble</label></li><li data-v-85e3e51e><label for="Exigeante" data-v-85e3e51e>Exigeante</label></li><li data-v-85e3e51e><label for="Intr\xE9pide" data-v-85e3e51e>Intr\xE9pide</label></li><li data-v-85e3e51e><label for="Pr\xE9tentieuse" data-v-85e3e51e>Pr\xE9tentieuse</label></li></div></ol>',1),ee={class:"posts"},te={class:"post","data-category":"Limpide"},se={key:0},ae=["src"];function ie(t,s,p,f,a,c){const o=i("fa"),u=i("MyItem");return r(),n("section",H,[e("div",j,[z,e("div",T,[e("button",{onClick:s[0]||(s[0]=d=>a.showMenu=!a.showMenu)},[b(" ONGLES NATURELS "),l(o,{class:"icon-nav__instagram",icon:["fa","angle-down"]})]),a.showMenu?(r(),n("ul",V,Y)):_("",!0)]),e("div",q,[e("button",{onClick:s[1]||(s[1]=d=>a.showMenuEC=!a.showMenuEC)},[b(" EXTENSIONS CHABLON "),l(o,{class:"icon-nav__instagram",icon:["fa","angle-down"]})]),a.showMenuEC?(r(),n("ul",J,Q)):_("",!0)]),Z,e("ol",ee,[e("li",te,[l(u,{linkImg:"./assets/img/gallery/IMG_2722.PNG"})])])]),e("div",null,[t.selectedImage?(r(),n("div",se,[e("img",{src:t.selectedImage,alt:"Selected Image"},null,8,ae),e("button",{onClick:s[2]||(s[2]=d=>{t.selectedImage=null,t.isExpanded=!1})})])):_("",!0)])])}const le=v(O,[["render",ie],["__scopeId","data-v-85e3e51e"]]);const oe={components:{MyGallery:le,DefaultLayout:w,MyNav:A,MyButton:B,MyFooter:C},data(){return{images:[{src:"/src/assets/img/gallery/7F6F3CF0-A005-4C88-8B29-918ABA675BED.jpg",category:"Audacieuse"},{src:"/src/assets/img/gallery/132D9631-A86A-4EDC-BEDE-BD6C3C85761F.jpg",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/48920AD1-454B-487E-AEA3-B16B5CD13708.jpg",category:"Modeste"},{src:"/src/assets/img/gallery/6F0C32B8-5FB8-490D-BAC0-2B604F266AD9.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/7ED3BDFD-BB15-4072-B02D-6ED485DEECB1.jpg",category:"Modeste"},{src:"/src/assets/img/gallery/D977B44E-F991-4B23-9F84-529DB5EFF0F1.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/F7400826-67B3-4A32-ABFD-04AB0E66DAF5.jpg",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1436.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1437.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1438.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1440.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1441.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1442.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1443.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1445.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1447.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_1449.png",category:"Intr\xE9pide"},{src:"/src/assets/img/gallery/IMG_1450.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1451.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1452.png",category:"Exigeante"},{src:"/src/assets/img/gallery/IMG_1454.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_2718.png",category:"Humble"},{src:"/src/assets/img/gallery/IMG_2720.png",category:"Pr\xE9tentieuse"},{src:"/src/assets/img/gallery/IMG_2722.png",category:"Limpide"},{src:"/src/assets/img/gallery/IMG_2723.png",category:"Modeste"},{src:"/src/assets/img/gallery/IMG_2733.png",category:"Limpide"},{src:"/src/assets/img/gallery/IMG_2732.png",category:"Humble"},{src:"/src/assets/img/gallery/IMG_2717.png",category:"Humble"}]}}},re=t=>(I("data-v-cea8b69f"),t=t(),M(),t),ne=re(()=>e("h1",{class:"title"}," My Works ",-1));function ce(t,s,p,f,a,c){const o=i("MyNav"),u=i("MyGallery"),d=i("MyButton"),E=i("MyFooter"),x=i("DefaultLayout");return r(),L(x,null,{header:y(()=>[l(o),ne]),article:y(()=>[l(u,{images:a.images},null,8,["images"]),l(d,{text:"Prendre rendez-vous",link:"/contact"})]),footer:y(()=>[l(E)]),_:1})}const pe=v(oe,[["render",ce],["__scopeId","data-v-cea8b69f"]]);export{pe as default};
