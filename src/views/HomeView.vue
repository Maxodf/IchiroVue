<script>
import MyButton from "./../components/MyButton.vue";
import MyNav from "./../components/MyNav.vue";
import MyFlowFlow from "./../components/MyFlowFlow.vue";
import MyLocTryp from "./../components/MyLocTryp.vue";
import MyFooter from "./../components/MyFooter.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TimelineLite, Back } from "gsap";

export default {
  components: {
    MyButton,
    MyNav,
    MyLocTryp,
    MyFlowFlow,
    MyFooter,
    DefaultLayout,
    // Blotter
  },

  mounted: function () {
    ScrollTrigger.refresh();

    this.scrollAnimation();
    this.scrollAnimation2();
    this.scrollAnimation3();
    this.scrollAnimation4();
    // this.scrollAnimation5();
    this.scrollAnimation6();

    const { svg__1 } = this.$refs;
    const { img__1 } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(
      svg__1,
      {
        scale: 0,
        delay: 0,
        opacity: 0,
      },
      0
    );
    timeline.from(
      img__1,
      {
        scale: 0,
        delay: 0,
        opacity: 0,
      },
      0.3
    );
    // timeline.to(svg__1, {
    //   scale:1,
    //   // translateY: 5,
    //   duration: 2,
    //   repeat: -1,
    //   yoyo: true,
    //   // y: 0,
    //   opacity: 1,
    //   rotate: '20deg',
    //   ease: Back.easeInOut,
    // })
    timeline.to(img__1, {
      scale: 1,
      // translateX: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      // y: 0,
      opacity: 1,
      rotate: "20deg",
      ease: Back.easeInOut,
    });
  },

  methods: {
    scrollAnimation() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".slogan",
              start: "top 10%",
              end: "70% 20%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".slogan", {});
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".slogan",
              start: "top 10%",
              end: "70% 20%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".slogan", { y: -500 });
      }
    },

    scrollAnimation2() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".describe",
              start: "0% 90%",
              end: "center 70%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .from(".describe", {x: 50,});
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".describe",
              start: "0% 100%",
              end: "150% center",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .from(".describe", { x: 400, opacity: 0 });
      }
    },

    scrollAnimation3() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".svg__1",
              start: "center 60%",
              end: "30% 30%",
              markers:false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".svg__1", {rotate: 100});
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".svg__1",
              start: "center 60%",
              end: "30% 30%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".svg__1", { y: 100, x: 50, rotate: 100 });
      }
    },

    scrollAnimation4() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".img__home",
              start: "center 60%",
              end: "30% 30%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".img__home", {});
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".img__home",
              start: "center 60%",
              end: "30% 30%",
              markers: false,
              scrub: 1,
              pin: false,
            },
          })
          .to(".img__home", { y: 100, x: 50 });
      }
    },

    // scrollAnimation5() {
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: ".wave",
    //         start: "20% 70%",
    //         end: "0% 20%",
    //         markers: true,
    //         scrub: 1,
    //         pin: false,
    //       },
    //     })
    //     .from(".wave", { x: "-100vw" });
    // },

    scrollAnimation6() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".locDiv",
              start: "center 60%",
              end: "60% 30%",
              markers: false,
              scrub: 2,
              pin: false,
            },
          })
          .to(".locDiv", {});
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".locDiv",
              start: "center 60%",
              end: "60% 30%",
              markers: false,
              scrub: 2,
              pin: false,
            },
          })
          .to(".locDiv", { x: -200 });
      }
    },
  },
};
</script>

<template>
  <DefaultLayout class="view">
    <template #header>
      <MyNav />

      <div class="contain">
        <h1 ref="slogan" class="slogan">
          <span
            v-motion
            :initial="{ opacity: 0, y: -500 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 2,
              },
            }"
            :delay="100"
            class="nf"
          >
            Not fake
          </span>
          <span
            v-motion
            :initial="{ opacity: 0, x: -500 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 2,
              },
            }"
            :delay="100"
            class="n"
          >
            nails,
          </span>
          <span
            v-motion
            :initial="{ opacity: 0, y: 500 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 2,
              },
            }"
            :delay="100"
            class="a"
          >
            art.
          </span>
        </h1> -->

        <transition
          appear
          @before-enter="imgBefore"
          @enter="imgEnter"
          @after-enter="imgAfter"
        >
          <img
            ref="img__1"
            class="img__home"
            src="./../assets/img/gallery/resize.png"
            alt=""
          />
        </transition>

        <transition
          appear
          @before-enter="svg__1Before"
          @enter="svg__1Enter"
          @after-enter="svg__1After"
        >
          <svg
            ref="svg__1"
            class="svg__1"
            xmlns="http://www.w3.org/2000/svg"
            width="496.362"
            height="502.963"
            viewBox="0 0 496.362 502.963"
          >
            <path
              id="Tracé_1"
              data-name="Tracé 1"
              d="M536,564l-105.126-8.985a118.865,118.865,0,0,0-23.713.348l-119.839,13.8a273.582,273.582,0,0,1-66.584-.49l-77.643-10.1a108.6,108.6,0,0,0-24.237-.424L57,564l4.277-28.625A405.02,405.02,0,0,0,61.7,418.563L57,385.477h0c-7.114-62.527,32.631-67.16,15.074-141.182a106.969,106.969,0,0,1,2.111-57.166c3.412-10.7,6.22-20.677,5.6-22.822L71,84l63.788-7.072a171.025,171.025,0,0,1,55.859,3.408l35.273,8.083a177.122,177.122,0,0,0,66.619,2.4l39.474-6.1a199.564,199.564,0,0,1,73.532,2.358l24.592,5.433a133.638,133.638,0,0,0,50,1.458L536,85l6.712,61.018a223.712,223.712,0,0,1-4.94,77.1h0a243.328,243.328,0,0,0-.17,113.809h0a249.462,249.462,0,0,1,.833,112.343l-5.143,30.923a182.428,182.428,0,0,0-1.157,51.784Z"
              transform="translate(-52.156 -72.004)"
              fill="none"
              stroke="#ffaebf"
              stroke-miterlimit="10"
              stroke-width="8"
            />
          </svg>
        </transition>
      </div>
    </template>

    <template #article>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-6">
            <p class="describe">
              Prothésiste Ongulaire <br />
              et Nail Artiste certifiée, <br />
              inspirée par l'art et la tendance
            </p>
          </div>
        </div>
        <div class="row loc">
          <div class="col-7">
            <svg class="wave" viewBox="0 0 1320 500">
              <path
                d="M0, 192 
                            C100, 100, 200, 100, 300, 200
                            C400, 300, 600, 200, 600, 200
                            C700, 150, 700, 100, 900, 200
                            C1000, 250, 1200, 300, 1320, 200
                            "
                stroke-width="5"
                stroke="#ffaebf"
                fill="transparent"
              />
            </svg>
          </div>
          <div class="col-5 locDiv">
            <p class="localisation">
              Besançon <i class="grand">&</i> <br />Paris <i>(Le Tryptich)</i>
              <br />
            </p>
            <MyLocTryp></MyLocTryp>
          </div>
        </div>
      </div>
      <div id="myflowflow">
        <h2>Mes dernières créations</h2>
        <MyFlowFlow></MyFlowFlow>
        <MyButton text="Voir toutes les créations" link="/works" />
      </div>
    </template>

    <template #footer>
      <MyFooter></MyFooter>
    </template>
  </DefaultLayout>
</template>

<style lang="scss" scoped>


.view{
@media screen and (max-width: ($mobile - 1)){
  overflow-x: hidden;
  }  
}

.loc {
  position: relative;
}

.wave {
  top: px(140);
  right: 0;
  position: absolute;
  path {
    animation: waveAnim 20s infinite;
  }

  @media screen and (max-width: ($mobile - 1)) {
    top: px(500);
  }
}

@keyframes waveAnim {
  0% {
    d: path(
      "M0, 192 C100, 100, 200, 100, 300, 200 C400, 300, 600, 200, 600, 200 C700, 150, 700, 100, 900, 200 C1000, 250, 1200, 300, 1320, 200"
    );
  }
  25% {
    d: path(
      "M0, 210 C150, 150, 300, 150, 400, 250 C500, 350, 600, 250, 600, 250 C650, 200, 800, 150, 950, 250 C1150, 400, 1250, 350, 1320, 210"
    );
  }
  50% {
    d: path(
      "M0, 220 C120, 120, 250, 150, 350, 250 C450, 350, 600, 200, 600, 200 C700, 100, 750, 120, 930, 220 C1100, 300, 1150, 320, 1320, 250"
    );
  }
  75% {
    d: path(
      "M0, 210 C150, 150, 300, 150, 400, 250 C500, 350, 600, 250, 600, 250 C650, 200, 800, 150, 950, 250 C1150, 400, 1250, 350, 1320, 210"
    );
  }
  100% {
    d: path(
      "M0, 192 C100, 100, 200, 100, 300, 200 C400, 300, 600, 200, 600, 200 C700, 150, 700, 100, 900, 200 C1000, 250, 1200, 300, 1320, 200"
    );
  }
}

.img__home {
  // position: absolute;
  // width: px(500);
  // object-fit: cover;
  // height: px(500);
  // right: px(300);
  // top: px(300);
  // rotate: 15deg;

  //   @media screen and (min-width: $desktop){
  //     position: absolute;
  //   width: px(500);
  //   object-fit: cover;
  //   height: px(500);
  //   right: px(300);
  //   top: px(300);
  //   rotate: 15deg;
  //   border: 1px solid rgb(238, 255, 0);
  // }

  // @media screen and (min-width: ($desktop + 1)) {
  position: absolute;
  width: px(500);
  object-fit: cover;
  height: px(500);
  right: px(300);
  top: px(300);
  rotate: 15deg;
  // border: 1px solid rgb(251, 255, 0);
  // }

  @media screen and (max-width: ($desktop - 1)) {
    width: px(390);
    height: px(390);
    right: px(150);
    top: px(200);
  }

  @media screen and (max-width: ($tablet - 1)) {
    // position: absolute;
    width: px(250);
    // object-fit: cover;
    height: px(250);
    right: px(50);
    top: px(100);
    // rotate: 15deg;
    // border: 1px solid blue;
  }
  @media screen and (max-width: ($mobile - 1)) {
    width: px(230);
    height: px(230);
    margin-top: px(450);
    left: 50%;
    transform: translateX(-50%);
  }
}
.svg__1 {
  position: absolute;
  width: px(550);
  height: px(550);
  right: px(280);
  top: px(280);
  rotate: 25deg;

  @media screen and (max-width: ($desktop - 1)) {
    width: px(420);
    height: px(420);
    right: px(140);
    top: px(180);
    rotate: -15deg;
  }

  @media screen and (max-width: ($mobile - 1)) {
    width: px(250);
    height: px(250);
    margin-top: px(362);
    rotate: 15deg;
    left: 50%;
    transform: translateX(-50%);
  }
}

#myflowflow {
  margin-top: px(100);

  @media screen and (max-width: ($mobile - 1)) {
    margin-top: px(650);
  }
}

i {
  font-size: px(30);
  font-family: $textFontFamily;

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(20);
  }
}
.grand {
  font-size: px(50);

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(40);
  }
}

.contain {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: $colorTertiary;
}
.slogan {
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  font-size: px(180);
  line-height: px(140);
  text-align: left;
  margin-left: px(50);

  @media screen and (max-width: ($desktop - 1)) {
    font-size: px(160);
    line-height: px(130);
  }

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(80);
    line-height: px(60);
    text-align: center;
    margin-left: 0;
    // display: block;
    margin-top: px(200);
  }

  .nf {
    margin-top: px(10);
    display: block;
    width: 100%;
  }
  .n {
    display: block;
    width: 100vw;
  }
  .a {
    display: block;
    width: 100%;
  }
}

.describe {
  margin-top: px(180);
  margin-left: px(-100);
  font-size: px(50);
  line-height: px(50);
  color: $colorSecondary;

  @media screen and (max-width: ($desktop - 1)) {
    font-size: px(40);
    line-height: px(40);
    margin-top: px(0);
  }

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(25);
    line-height: px(25);
    margin-left: px(-50);
    margin-top: px(50);
    width: 270px;
  }

  @media screen and (max-width: 380px) {
    margin-top: px(200);
  }
}

.localisation {
  font-size: px(60);
  line-height: px(60);
  font-style: italic;
  font-family: $titleFontFamily;
  margin-top: px(150);

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(35);
    position: absolute;
    text-align: center;
    line-height: px(40);
    left: 50%;
    transform: translateX(-50%);
    width: px(300);
    margin-top: px(120);
  }
}
</style>
