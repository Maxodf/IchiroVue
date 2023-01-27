<script>
import MyGallery from "../components/MyGallery.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import MyButton from "../components/MyButton.vue";
import MyNav from "../components/MyNav.vue";
import MyFooter from "../components/MyFooter.vue";
import { transform } from "@vue/compiler-core";
// import MyFilters from "../components/MyFilters.vue";
export default {
  components: {
    MyGallery,
    DefaultLayout,
    MyNav,
    MyButton,
    MyFooter,
    // MyFilters
  },
};
</script>




<template><DefaultLayout>

  <template #header>
    <MyNav />

      <h1     v-motion
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
        My Works    
      </h1>

  </template>

  <template #article>

    <!-- <MyFilters></MyFilters> -->

<!-- <div  v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, 
              scale: 1, 
                  transition: {
                      type: 'spring',
                      stiffness: 250,
                      damping: 25,
                      mass: 0.5,
                      }, 
            }"
    :delay="100"> -->

    <MyGallery></MyGallery>



<!-- </div> -->

<MyButton text="Prendre rendez-vous" link="/contact"></MyButton>

  </template>


  <template #footer>
    <MyFooter></MyFooter>
  </template>

</DefaultLayout> 

</template>

<style lang="scss" scoped>

.title{
  margin-top: px(150);
  margin-bottom: px(80);

  @media screen and (max-width: ($mobile - 1)) {
    margin-bottom: px(50);
  }

}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
