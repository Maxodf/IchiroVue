<!-- eslint-disable prettier/prettier -->
<script>
import { transform } from "@vue/compiler-core";
import gsap from "gsap";
import { TimelineLite, Back, Bounce } from 'gsap'
import MyFooter from "./MyFooter.vue";

export default {

  components: {
    MyFooter,
  },

  
  data() {
    return {
      selectedIndex: null,
      items: [
      // {
      //     id: "1",
      //     link: "/home",
      //     label: "Ichiro",
      //   },
        {
          id: "2",
          link: "/works",
          label: "Works",
        },
        {
          id: "3",
          link: "/about",
          label: "About",
        },
        {
          id: "4",
          link: "/contact",
          label: "Contact",
        },
      ],

      burgerDown: new TimelineLite({ paused: true }),

      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  methods: {
    handleClick(index) {
      this.selectedIndex = index;
    },
    click: function () {
      this.burgerDown.reversed(!this.burgerDown.reversed());
    },
    openInstagramInNewTab() {
      window.open('https://www.instagram.com/ichiro_______/', '_blank');
    },
    

    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    
  },


  mounted() {
  this.burgerDown = gsap.timeline()
    .to(this.$refs.menu, {
      // translateY: "0%",
      display: 'block',
      opacity: 1,
      duration: 0.7,
      ease: Back.easeInOut,
    })
    .to(this.$refs.burger, {
      rotate: '360deg',
      transformOrigin: "25px 25px",
    },0)
    .to(this.$refs.pathColor, {
      stroke: "#ffaebf"
    },0)
    .to(this.$refs.menuNav, {
     opacity: 0,
     duration: 0.3
    },0)
    .to(this.$refs.wave, {
      display: 'block',
      // translateY: "10%",
    },0)
    .reverse();

    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
},

beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },



  



  // mounted() {

  //   const click = ()  => {
  //     console.log('hey')
  //   }

  //   return click


  // }

  


};
</script>
<template>
  <nav ref="nav">
    <div class="nav-close header" :class="{ 'is-hidden': !showHeader }">
      <div @click="openInstagramInNewTab" class="icon-nav">
        <fa class="icon-nav__instagram" :icon="['fab', 'instagram']" />
      </div>
      <div class="menu-desktop">
        <ul ref="menuNav" class="menu-desktop__list">
          <li
            class="menu-desktop__list__li"
            v-for="(item, index) in items"
            @click="handleClick(index)"
            :key="item.id"
          >
            <a
              :class="`menu-desktop__link ${
                index === selectedIndex ? '-active' : ''
              }`"
              :href="item.link"
              >{{ item.label }}</a
            >
          </li>
        </ul>
      </div>
      <a href="/">
        <img
          class="logo-nav"
          src="./../../src/assets/img/ichiro officiel.png"
          alt=""
        />
      </a>
      <div v-on:click="click" ref="burger" class="icon-burger">
        <svg
          class="icon-burger__arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="134.518"
          height="54.418"
          viewBox="0 0 134.518 54.418"
        >
          <path
            ref="pathColor"
            id="Tracé_1"
            data-name="Tracé 1"
            d="M431.5,286.5c17.608,32.74,30.861,42.065,40.891,40.89,18.178-2.129,22.3-38.344,40.33-40.33,13.4-1.477,27.323,16.736,39.77,40.33"
            transform="translate(-424.728 -279.728)"
            fill="none"
            stroke="#c91745"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="10"
          />
        </svg>
      </div>
    </div>
    <div ref="menu" class="menu">
      <ul class="menu__list">
        <li
          v-for="(item, index) in items"
          @click="handleClick(index)"
          :key="item.id"
        >
          <a
            :class="`menu__link ${index === selectedIndex ? '-active' : ''}`"
            :href="item.link"
            >{{ item.label }}</a
          >
        </li>
      </ul>

      <svg ref="wave" class="wave" viewBox="0 0 1000 400">
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

      <MyFooter class="footer"></MyFooter>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.wave {
  // opacity: 0;
  // transform: translateY(-100vh);
  right: 0;
  position: absolute;
  rotate: 90deg;
  z-index: -1;


  @media screen and (max-width: ($mobile - 1)) {
      margin-top: 40vh;
      transform: scale(2.5);
    }



  path {
    animation: waveAnim 20s infinite;
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

.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
  transform: translateY(-100%);
}


.menu-desktop {
  position: absolute;
  margin-left: 5%;
  opacity: 1;

  &__list {
    display: flex;

    &__li {
      display: flex;
      align-items: center;
    }
  }

  &__link {
    display: inline-block;
    text-decoration: none;
    font-size: px(50);
    font-family: $textFontFamily;
    font-size: $textFontSize;
    margin-left: px(30);
    font-weight: 700;
    // border-bottom: 1px solid $colorPrimary;
    color: $colorPrimary;

    &:hover {
      color: $colorSecondary;
    }

    &.-active {
      background: $colorPrimary;
      color: white;
    }
  }
}
.nav-close {
  z-index: 999999999 !important;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: px(12);
  background-color: transparent;
  backdrop-filter: blur(10px);

  @media screen and (max-width: ($mobile - 1)) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .menu-desktop {
    @media screen and (max-width: ($mobile - 1)) {
      display: none;
    }
  }
}

.icon-burger {
  &__arrow {
    margin-right: px(50);
    color: $colorPrimary;
    width: px(50);
    height: px(50);
    // z-index: 10000000000;

    &:hover {
      color: $colorSecondary;
      cursor: pointer;
    }
  }
  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    right: 0;
    margin-right: px(-20);
  }
}

.icon-nav {
  z-index: 1;

  &__instagram {
    margin-left: px(50);
    color: $colorPrimary;
    width: px(40);
    height: px(40);

    &:hover {
      color: $colorSecondary;
      cursor: pointer;
    }
  }

  @media screen and (max-width: ($mobile - 1)) {
    display: none;
  }
}
.logo-nav {
  width: px(100);

  @media screen and (max-width: ($mobile - 1)) {
    width: px(80);
  }
}

li {
  font-family: $titleFontFamily;
  font-size: px(100);
  font-weight: 400;

  @media screen and (max-width: ($mobile - 1)) {
      font-size: px(80);
    }

}

.menu {
  z-index: 99999999 !important;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100vh;
  text-align: center;
  // transform: translateY(-100vh);
  opacity: 0;
  display: none;
  // display: none;
  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
  }
  &__link {
    display: inline-block;
    text-decoration: none;
    // border-bottom: 1px solid $colorPrimary;
    color: $colorPrimary;


    &:hover {
      color: $colorSecondary;
    }
    &.-active {
      background: $colorPrimary;
      color: white;
    }
  }
}
</style>
