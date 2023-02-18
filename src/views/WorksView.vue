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

  data() {
    return {
      images: [
        {src: "/src/assets/img/gallery/7F6F3CF0-A005-4C88-8B29-918ABA675BED.jpg", category: "Audacieuse"},
        {src: "/src/assets/img/gallery/132D9631-A86A-4EDC-BEDE-BD6C3C85761F.jpg", category: "Intrépide"},
        {src: "/src/assets/img/gallery/48920AD1-454B-487E-AEA3-B16B5CD13708.jpg", category: "Modeste"},
        {src: "/src/assets/img/gallery/6F0C32B8-5FB8-490D-BAC0-2B604F266AD9.jpg", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/7ED3BDFD-BB15-4072-B02D-6ED485DEECB1.jpg", category: "Modeste"},
        {src: "/src/assets/img/gallery/D977B44E-F991-4B23-9F84-529DB5EFF0F1.jpg", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/F7400826-67B3-4A32-ABFD-04AB0E66DAF5.jpg", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_1436.png", category: "Exigeante"},
        {src: "/src/assets/img/gallery/IMG_1437.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_1438.png", category: "Exigeante"},
        {src: "/src/assets/img/gallery/IMG_1440.png", category: "Intrépide"},
        {src: "/src/assets/img/gallery/IMG_1441.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_1442.png", category: "Intrépide"},
        {src: "/src/assets/img/gallery/IMG_1443.png", category: "Intrépide"},
        {src: "/src/assets/img/gallery/IMG_1445.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_1447.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_1449.png", category: "Intrépide"},
        {src: "/src/assets/img/gallery/IMG_1450.png", category: "Exigeante"},
        {src: "/src/assets/img/gallery/IMG_1451.png", category: "Exigeante"},
        {src: "/src/assets/img/gallery/IMG_1452.png", category: "Exigeante"},
        {src: "/src/assets/img/gallery/IMG_1454.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_2718.png", category: "Humble"},
        {src: "/src/assets/img/gallery/IMG_2720.png", category: "Prétentieuse"},
        {src: "/src/assets/img/gallery/IMG_2722.png", category: "Limpide"},
        {src: "/src/assets/img/gallery/IMG_2723.png", category: "Modeste"},
        {src: "/src/assets/img/gallery/IMG_2733.png", category: "Limpide"},
        {src: "/src/assets/img/gallery/IMG_2732.png", category: "Humble"},
        {src: "/src/assets/img/gallery/IMG_2717.png", category: "Humble"},
      ]
    }
  }
};
</script>




<template><DefaultLayout>

  <template #header>
    <MyNav />

      <h1     
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

    <MyGallery :images="images"></MyGallery>



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
