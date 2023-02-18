<script>

import gsap from "gsap";
import { TimelineLite, Back, Bounce } from 'gsap'

export default {
  props: {
    linkImg: String,
  },

  methods: {
    clickBig: function () {
      this.bigOnClick.reversed(!this.bigOnClick.reversed());
    },
  },


  data() {
    return {
      bigOnClick: new TimelineLite({ paused: true }),
    }
  },


  
  mounted() {
    if (window.innerWidth < 400) {
  this.bigOnClick = gsap.timeline()
    .to(this.$refs.imgItem, {
      position: "fixed",
      scale: 1.2,
      zIndex: 2,
      width: "400px",
      height: "400px",
      left: "50%",
      top: "50%",
      translateY: "-50%",
      translateX: "-50%",
      duration: 0.001
    })
    .to(this.$refs.overlay,{
      display: "block",
      position: "fixed",
      width: "100vw",
      height: "100vh",
      left: 0,
      top: 0,
      backgroundColor: "black",
      opacity: 0.8,
      duration: 0.001,
      zIndex: 1
    },0)
    .reverse();
  } 
  else if (window.innerWidth < 1400) {
    this.bigOnClick = gsap.timeline()
    .to(this.$refs.imgItem, {
    position: "fixed",
    scale: 2,
    zIndex: 2,
    width: "400px",
    height: "400px",
    left: "50%",
    top: "50%",
    translateY: "-50%",
    translateX: "-50%",
    duration: 0.001,
    color: "blue"
    })
    .to(this.$refs.overlay,{
      display: "block",
      position: "fixed",
      width: "100vw",
      height: "100vh",
      left: 0,
      top: 0,
      backgroundColor: "black",
      opacity: 0.8,
      duration: 0.001,
      zIndex: 1
    },0)
    .reverse();
    }
  else {
    this.bigOnClick = gsap.timeline()
        .to(this.$refs.imgItem, {
        position: "fixed",
        scale: 3,
        zIndex: 2,
        width: "400px",
        height: "400px",
        left: "50%",
        top: "50%",
        translateY: "-50%",
        translateX: "-50%",
        duration: 0.001
        })
        .to(this.$refs.overlay,{
      display: "block",
      position: "fixed",
      width: "100vw",
      height: "100vh",
      left: 0,
      top: 0,
      backgroundColor: "black",
      opacity: 0.8,
      duration: 0.001,
      zIndex: 1
    },0)
        .reverse();
        }
},

};
</script>

<template>
  <span ref="overlay" class="overlay"></span>
  <div class="item">
    <img ref="imgItem" v-on:click="clickBig" class="item__img" :src="linkImg" alt="" />
  </div>
</template>

<style lang="scss" scoped>

.overlay{
  display: none;
}
.item {
  width: px(380);
  height: px(380);
  position: relative;

  @media screen and (max-width: ($mobile - 1)) {
     height: px(320);
     width: px(320);
     margin: auto;
  }

  &__img {
    object-fit: cover;
    width: px(380);
    height: px(380);
    width: 100%;
    // filter: contrast(100%)

    @media screen and (max-width: ($mobile - 1)) {
     height: px(320);
     width: px(320);
     background-color: #fff;
  }
  }

  &:hover {
  }
}
</style>
