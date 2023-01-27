<script>
import DefaultLayout from "../layout/DefaultLayout.vue";
import MyButton from "../components/MyButton.vue";
import MyNav from "../components/MyNav.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TimelineLite, Back, Bounce, Elastic } from 'gsap'

export default {
  components: {
    DefaultLayout,
    MyNav,
    MyButton
  },

mounted: function() {

  const { photoRosie } = this.$refs;
    const timeline = new TimelineLite();
    timeline.to(photoRosie, {
      scale: 1.2,
      duration: 2,
      // repeat: -1,
      // yoyo: true,
      ease: Back.easeInOut,
    });


// this.scrollAnimation();

},

// methods: {
//     scrollAnimation() {
//       gsap.timeline({
//       scrollTrigger: {
//         trigger: ".slogan",
//         start: "center center",
//         end: "bottom top",
//         markers: true,
//         scrub: true,
//         pin: true,
//       }
//     })
//     .from(".describe", { x : innerWidth * 1, opacity: 0 })
//     .from(".text2", { x : innerWidth * 1, opacity: 0 })

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".box2",
//         start: "center center",
//         end: "bottom top",
//         markers: true,
//         scrub: true,
//         pin: true,
//       }
//     })
//     .from(".text4", { x : innerWidth * 1, opacity: 0 })
//     .from(".text5", { x : innerWidth * 1, opacity: 0 })
//     },
//   },


};

</script>




<template>

<DefaultLayout>

  <template #header>
    <MyNav />

      <h1 v-motion
                          :initial="{ opacity: 0, y: -500}"
                          :enter="{ opacity: 1,
                                    y: 0, 
                                        transition: {
                                            type: 'spring',
                                            stiffness: 250,
                                            damping: 25,
                                            mass: 2,
                                            }, 
                                  }"
                          :delay="100" 
       class="title">
       About me  
      </h1>

  </template>



  <template #article>

    <div class="container">
        <div class="row">  
            <div class="col-6">
                <p>
                    Moi c’est Rosie, <br><br> Passionnée d’Art depuis des siècles, j’ai touché à mon premier pot de gel il y a 4 ans et ce fut une révélation. En parallèle de mes études je fais les ongles à mes amies, mais j’en veux d’avantage ! Je me fais donc former pour obtenir mon attestation de  prothésiste ongulaire, puis je perfectionne mes techniques chez  <b>Khun mimi</b> et <b>Lilicreuk</b>.<br><br> Après un long temps de réflexion et beaucoup de doutes je me lance enfin en free-lance à Besançon où j’exerce à mon domicile, et je m’épanouie dans ce métier ! <br><br> Se présente à moi l’opportunité de travailler au <b>Triptych</b>, un shop d’artistes très coté à Paris ! Je fonce, et commence à me faire une clientèle et à me rendre compte que c’est vraiment ça que je veux faire de ma vie. <br><br>
Je ne me considère plus comme prothésiste ongulaire mais comme <b>Nail artiste</b>, je réalise tous mes rallongements sur mesure au chablon et tous mes nail arts au pinceau avec des produits choisis pour leur qualité, ce qui fait l’authenticité de mes poses ! J’y consacre beaucoup de temps, d’énergie et surtout d’imagination, comme vous pourrez le connstater dans la page <b><a class="worksa" href="/works">works.</a> </b> <br><br> A bientôt !
                </p>
            </div>
            <div class="containIMG col-6">
                <img ref="photoRosie" class="img-about" src="./../assets/img/IMG_2963.jpg" alt=""/>
                <img ref="photoDragon" class="img-dragon" src="./../assets/img/gallery/IMG_2729.PNG" alt=""/>
            </div>
        </div>
    </div>

    <div>
      bandeau des  logos lilcreuk etc et insta
    </div>

    <MyButton text="Prendre rendez-vous" link="/contact"></MyButton>

  </template>


  <template #footer>
    <p>Un texte dans mon Footer</p>
  </template>

</DefaultLayout> 

</template>

<style lang="scss" scoped>


.img-dragon{
    display: block;
    position: absolute;
    margin-left: px(600);
    object-fit: cover;
    height: px(420);
    width: px(420);
    z-index: 1;
    padding: px(20);
    border: 2px dashed $colorPrimary;
}

.img-about{
  padding: px(20);
  border: 2px dashed $colorSecondary;
}

.containIMG{
  // border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.worksa{
color: $colorPrimary;

  &:hover{
    color: $colorSecondary;
  }
}
.img-about{
    width: px(400);
    height: px(600);
    object-fit: cover;
}
.title{
  margin-top: px(150);
  margin-bottom: px(80);

 @media screen and (max-width: ($mobile - 1)){
  margin-bottom: px(50);
  
 }
}
</style>
