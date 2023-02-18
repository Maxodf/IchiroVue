
<script>

import DefaultLayout from "../layout/DefaultLayout.vue";
import MyButton from "../components/MyButton.vue";
import MyNav from "../components/MyNav.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TimelineLite, Back, Bounce, Elastic } from 'gsap'
import MyFooter from "../components/MyFooter.vue";

export default {
  components: {
    DefaultLayout,
    MyNav,
    MyButton,
    MyFooter
  },

mounted: function() {

  const { photoRosie } = this.$refs;
  const { svgPhoto } = this.$refs;
  const { photoDragon } = this.$refs;
  const { svgDragon } = this.$refs;

    const timeline = new TimelineLite();
    timeline.from(photoRosie, {
      scale: 0.1,
      opacity: 0,
      duration: 1,
      // repeat: -1,
      // yoyo: true,
      ease: Back.easeInOut,
      delay: 0.5
    })

    .from(svgPhoto,{
      scale: 1.2,
      duration: 1,
      opacity: 0,
      // repeat: -1,
      // yoyo: true,
      ease: Back.easeInOut,
      delay: 0.5

    },0)

    // .from(photoDragon,{
    //   x: "100px",
    //   duration: 1,
    //   ease: Back.easeInOut,
    //   opacity: 0
    // },1)
    // .from(svgDragon,{
    //   x: "-100px",
    //   duration: 1,
    //   ease: Back.easeInOut,
    //   opacity: 0
    // },1);


    // timeline.to(svgDragon, {
    //   // translateX: 10,
    //   duration: 2,
    //   repeat: -1,
    //   yoyo: true,
    //   // y: 0,
    //   opacity: 1,
    //   rotate: "5deg",
    //   ease: Back.easeInOut,
    // });


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
                    Moi c’est Rosie, <br><br> Passionnée d’Art depuis toujours, j’ai touché à mon premier pot de gel il y a 4 ans et ce fut une révélation. En parallèle de mes études je fais les ongles à mes amies, mais j’en veux d’avantage ! Je me forme donc pour obtenir mon attestation de  prothésiste ongulaire, puis je perfectionne mes techniques chez  <b>Khun mimi</b> et <b>Lilicreuk</b>.<br><br> Après un long temps de réflexion et beaucoup de doutes je me lance enfin en free-lance à Besançon où j’exerce à mon domicile, et je m’épanouie dans ce métier ! <br><br> Se présente à moi l’opportunité de travailler au <b>Triptych</b>, un shop d’artistes très coté à Paris ! Je fonce, et commence à me faire une clientèle et à me rendre compte que c’est vraiment ça que je veux faire de ma vie. <br><br>
Je ne me considère plus comme prothésiste ongulaire mais comme <b>Nail artiste</b>, je réalise tous mes rallongements sur mesure au chablon et tous mes nail arts au pinceau avec des produits choisis pour leur qualité, ce qui fait l’authenticité de mes poses ! J’y consacre beaucoup de temps, d’énergie et surtout d’imagination, comme vous pourrez le constater dans la page <b><a class="worksa" href="/works">works.</a> </b> <br><br> A bientôt !
                </p>
            </div>
            <div class="containIMG col-6">

              <div class="containImgRosie">
                <img ref="photoRosie" class="img-about" src="./../assets/img/IMG_2963.jpg" alt=""/>

<svg ref="svgPhoto" xmlns="http://www.w3.org/2000/svg" width="530" height="980" viewBox="0 0 774.691 1066.255"  class="svgImg">
  <path id="Tracé_1" data-name="Tracé 1" d="M706.134,1105.905l-10.366-13.879c-43.7-48.059-104.632-47.284-147.728,1.88h0c-21.19,24.173-50.67,26.774-73.77,6.511l-20.224-17.74c-25-21.926-55.928-24.794-82.688-7.664h0c-32.692,47.447-90.584,7.863-115.626-9.777h0c-29.92-17.95-72.873,43.445-72.873,43.445-20.476,14.434-43.257-12.515-37.238-44.054h0c4.464-23.4-3.576-47.979-18.981-58.036l-6.882-4.493c-32.266-21.063-40.137-81.64-15.321-117.927l10.393-15.2c20.3-29.69,17.46-78.292-6.012-102.724h0c-28.551-29.719-30.771-89.552-4.58-123.441l28.051-36.3c10.316-13.349,8.373-37.286-3.807-46.886h0C90.9,530.008,83.624,457.043,113.909,413.53h0c22.221-31.927,23.413-83.044,2.729-117.025l0-.006c-18.576-30.518-16.018-76.95,5.672-102.913h0c20.473-24.508,37.094-54.948,48.77-89.318L181.325,74.1c6.364-18.736,23.245-24.1,34.544-10.981l39.139,45.459c23.37,27.143,57.3,24.458,78.442-6.207l14.841-21.527c16.743-24.286,43.85-25.441,61.571-2.622l29.878,38.472c17.319,22.3,43.771,21.395,60.326-2.07L519.3,87.357c17.759-25.172,46.281-25.5,64.317-.73l20.207,27.747c17.43,23.934,44.632,25.28,63.172,3.124l14.625-17.475c13.938-16.655,33.494-19.689,49.6-7.694l40.072,29.847c23.678,17.635,30.015,62.029,13.073,91.568l-.043.074c-24.2,42.189-20.093,104.452,9.192,139.4l1.262,1.507c11.369,13.567,10.736,38.855-1.288,51.206q-1.416,1.455-2.884,2.962c-40.031,41.119-43.409,124.656-6.956,172.117l2.218,2.887c17.525,22.817,18.768,60.466,3.307,84.764l-1.189,1.869c-30.926,48.6-32.142,122.416-2.856,173.058l1.95,3.373c17.361,30.018,17.921,73.24,1.356,104.168l-.906,1.691c-6.828,12.749-8.648,29.607-4.827,44.715l6.223,24.607a142.622,142.622,0,0,1,4.75,35.808C793.382,1093.565,742.346,1122.087,706.134,1105.905Z" transform="translate(-81.915 -51.753)" fill="none" stroke="#ffaebf" stroke-miterlimit="10" stroke-width="8"/>

</svg>


              </div>

          <!-- <div class="containImgSvg">
            <img ref="photoDragon" class="img-dragon" src="./../assets/img/gallery/IMG_2729.PNG" alt="" />
            <div>
              <svg ref="svgDragon" xmlns="http://www.w3.org/2000/svg" width="450" height="450" viewBox="0 0 496.362 502.963" class="svgAbout">
                <path id="Tracé_1" data-name="Tracé 1"
                  d="M536,564l-105.126-8.985a118.865,118.865,0,0,0-23.713.348l-119.839,13.8a273.582,273.582,0,0,1-66.584-.49l-77.643-10.1a108.6,108.6,0,0,0-24.237-.424L57,564l4.277-28.625A405.02,405.02,0,0,0,61.7,418.563L57,385.477h0c-7.114-62.527,32.631-67.16,15.074-141.182a106.969,106.969,0,0,1,2.111-57.166c3.412-10.7,6.22-20.677,5.6-22.822L71,84l63.788-7.072a171.025,171.025,0,0,1,55.859,3.408l35.273,8.083a177.122,177.122,0,0,0,66.619,2.4l39.474-6.1a199.564,199.564,0,0,1,73.532,2.358l24.592,5.433a133.638,133.638,0,0,0,50,1.458L536,85l6.712,61.018a223.712,223.712,0,0,1-4.94,77.1h0a243.328,243.328,0,0,0-.17,113.809h0a249.462,249.462,0,0,1,.833,112.343l-5.143,30.923a182.428,182.428,0,0,0-1.157,51.784Z"
                  transform="translate(-52.156 -72.004)" fill="none" stroke="#c91745" stroke-miterlimit="10" stroke-width="8" />
              </svg>
            </div>
          </div> -->


            </div>
        </div>
    </div>

    <!-- <div class="bandeau col-6">
      <img class="lilicreuklogo" src="../assets/img/LILICREUKLOGO.webp" alt="">
      <img class="khunmimilogo" src="../assets/img/khun_mimi_logo.gif" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div> -->

    <MyButton  class="btn-works" text="Prendre rendez-vous" link="/contact"></MyButton>

  </template>


  <template #footer>
    <MyFooter></MyFooter>
  </template>

</DefaultLayout> 

</template>

<style lang="scss" scoped>

.containImgRosie{
  position: relative;

  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    left: 0;
    top: px(350);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
}

.img-about{
  padding: px(10);
  opacity: 1;
  scale: 1.2;
  width: px(400);
  height: px(600);
  object-fit: cover;

  @media screen and (max-width: ($mobile - 1)) {
    width: px(270);
    height: px(400);
  }
}
.svgImg{
  position: absolute;
  top: -190px;
  left: -50px;

  @media screen and (max-width: ($mobile - 1)) {
    width: px(350);
    position: absolute;
    left: 50%;
    transform: translate(-48%);
    margin-top: px(-100);
  }
}
.containImgSvg{
  position: absolute;
  width: px(420);
  height: px(420);
  margin-left: px(600);
  // margin-top: -400px;
}
.svgAbout{
  position: absolute;
  z-index: 1;
  left: -20px;
  top: -15px;
  // rotate: -10deg;
}

.img-dragon{
    display: block;
    position: absolute;
    // margin-left: px(600);
    object-fit: cover;
    height: px(420);
    width: px(420);
    z-index: 1;
    box-shadow: -10px 10px 20px 0px rgb(255, 255, 255);
    // padding: px(10);
    // border: 2px dashed $colorSecondary;
    // border: 20px solid $colorTertiary;
}




.bandeau{
  width: 100%;
  // height: px(100);
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: right;

  .lilicreuklogo{
    width: px(150);
    // position: absolute;
  }
  .khunmimilogo{
    width: px(150);
    // position: absolute;
  }
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

.btn-works{
  @media screen and (max-width: ($mobile - 1)) {
   margin-top: px(1300);
  }
}

.title{
  margin-top: px(150);
  margin-bottom: px(80);

 @media screen and (max-width: ($mobile - 1)){
  margin-bottom: px(50);
  
 }
}


p{
  text-align: justify;


  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    margin-right: px(30);
    margin-left: px(30);
    left: 0;
    text-align: justify;
    top: px(850);
  }
}





</style>
