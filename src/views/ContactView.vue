<script>
import DefaultLayout from "../layout/DefaultLayout.vue";
import MyButton from "../components/MyButton.vue";
import MyNav from "../components/MyNav.vue";
import MyFooter from "../components/MyFooter.vue";

export default {
  components: {
    DefaultLayout,
    MyNav,
    MyButton,
    MyFooter
  },

  data() {
    return {
      email: 'info@example.com'
    }
  },

  methods: {
    goToEmail() {
      window.open('mailto:   ');
    },
    goToInsta() {
      window.open('https://www.instagram.com/ichiro_______/', '_blank');
    },
  },

};
</script>




<template>


<DefaultLayout>
  

  

  <template #header>
    <MyNav />

      <h1  v-motion
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
        Contact me  
      </h1>
  </template>

  <template #article>

    <div class="container">
      <div class="row">
        <div class="col-6">
          <p class="textContact"> Pour <b>toutes demandes</b> et/ou <b>prises de rendez-vous</b>, contactez moi sur Instagram de préférence, ou via mail :  </p>
          <p class="instaLink" @click="goToInsta"> instagram : <span>Ichiro_______</span></p>
          <p class="mailLink" @click="goToEmail" >mail : <span>ichiro@gmail.com </span></p>
        </div>
        <div class="col-2"></div>
        <div class="locloc col-4">
          <p class="localisation"> Besançon <br/></p>
          <a target="_blank" href="https://www.google.fr/maps/place/9+Av.+de+l'Observatoire,+25000+Besan%C3%A7on/@47.2460103,5.9957615,17z/data=!3m1!4b1!4m5!3m4!1s0x478d63a9b3c03b5f:0x22a1c74bb57aef83!8m2!3d47.2460103!4d5.9979502"><i class="adresseB"> 9 avenue  de l'Observatoire, 25000 </i> </a>
          <p class="grand"><i> & </i></p>
          <p class="localisationParis"> Paris <i>(Le Tryptich)</i> <br/></p> 
          <a target="_blank" href="https://www.google.fr/maps/place/3+Rue+Dautancourt,+75017+Paris/@48.8890873,2.3213207,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fad2162425f:0x1ab08a55f038d51f!8m2!3d48.8890873!4d2.3235094"> <i class="adresseP"> 3 rue dautancourt, 75017 </i> </a> 
        </div>
      </div>
    </div>


  </template>


  <template #footer>
    <MyFooter class="footer"></MyFooter>
  </template>

</DefaultLayout> 

</template>

<style lang="scss" scoped>



.textContact{
  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    font-size: px(16);
    max-width: 80;
    text-align: center;
    left: 10%;
    right: 10%;
  }
}

.locloc{
  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    left: px(30);
    margin-top: px(300);
  }
}

.localisation{
  font-size: px(60);
  font-style: italic;
  font-family: $titleFontFamily;
  margin-bottom: px(15);

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(40);
  }
  
}
.localisationParis{
  font-size: px(60);
  font-style: italic;
  font-family: $titleFontFamily;
  margin-bottom: px(5);

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(40);
    margin-left: px(120);
    width: px(220);
  }
}

a{
        text-decoration: none;
        color: $colorPrimary;
        &:hover{
          color: $colorSecondary;
        }
        }

i{
  font-size: $textFontSize;
  font-family: $textFontFamily;
}

.adresseB{
  @media screen and (max-width: ($mobile - 1)) {
    display: block;
    width: px(200);

  }
}

.adresseP{
  @media screen and (max-width: ($mobile - 1)) {
    display: block;
    width: px(200);
    margin-left: px(120);
  }
}

.grand{
  margin-top: px(30);
  margin-bottom: px(40);

  i{
    font-size: px(50);
  }
  text-align: left;

  @media screen and (max-width: ($mobile - 1)) {
    display: block;
    width: 100vw;
    margin-left: px(-30);
    text-align: center;

  }
}

.instaLink{
  position: absolute;
  margin-top: px(85);
  left: 10%;
  animation: move-right 45s infinite;
  animation-timing-function: linear;

  @media screen and (max-width: ($desktop - 1)) {
    margin-top: px(50);
  }

  @media screen and (max-width: ($mobile - 1)) {
    margin-top: px(100);
    font-size: px(18);
    animation: none;
    text-align: center;
    display: block;
    width: 100vw;
    left: 0;
  }
}
.instaLink:hover{
  animation-play-state: paused;
}
.mailLink{
  position: absolute;
  margin-top: px(200);
  left: 30%;
  animation: move-left 45s infinite;
  animation-timing-function: linear;

  @media screen and (max-width: ($desktop - 1)) {
    margin-top: px(150);
  }

  @media screen and (max-width: ($mobile - 1)) {
    margin-top: px(175);
    font-size: px(18);
    animation: none;
    text-align: center;
    display: block;
    width: 100vw;
    left: 0;
  }
}
.mailLink:hover{
  animation-play-state: paused;
}

.footer{
  position: absolute;
  bottom: px(-100);

  @media screen and (max-width: ($mobile - 1)) {
    position: absolute;
    top: px(900);
    height: px(60);
}
}

span{
  font-size: px(50);
  line-height: px(50);
  color: $colorSecondary;

  @media screen and (max-width: ($mobile - 1)) {
    font-size: px(30);
  }

  &:hover{
    cursor: pointer;
  }
}

.title{
  margin-top: px(150);
  margin-bottom: px(80);

  @media screen and (max-width: ($mobile - 1)){
  margin-bottom: px(50);
  
 }
}





@keyframes move-right {
  0% {
    left: 10%;
  }
  50% {
    left: 30%;
  }
}

@keyframes move-left {
  0% {
    left: 30%;
  }
  50% {
    left: 10%;
  }
}


</style>
