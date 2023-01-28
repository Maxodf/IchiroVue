<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/require-v-for-key -->
<script>
import MyItem from "./MyItem.vue";

export default {
  components: {
    MyItem,
  },

  data() {
    return {
      showMenu: false,
      showMenuEC: false,
      search: "",
      items: [
        { name: 'id="limpide"', type: "limpide" },
        { name: "modeste", type: "modeste" },
        { name: "audacieuse", type: "audacieuse" },
        { name: "hubmle", type: "humble" },
        { name: "exigente", type: "exigeante" },
        { name: "intrépide", type: "intrepide" },
        { name: "prétentieuse", type: "pretentieuse" },
      ],
    };
  },

  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },

  mounted() {
  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) {
      this.showMenu = false;
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) {
      this.showMenuEC = false;
    }
  });
}

};
</script>

<template>

  <section class="author-archive">
    <div class="container">
      <input type="radio" id="All" name="categories" value="All" checked />
      <input type="radio" id="Limpide" name="categories" value="Limpide" />
      <input type="radio" id="Modeste" name="categories" value="Modeste" />
      <input
        type="radio"
        id="Audacieuse"
        name="categories"
        value="Audacieuse"
      />
      <input type="radio" id="Humble" name="categories" value="Humble" />
      <input type="radio" id="Exigeante" name="categories" value="Exigeante" />
      <input type="radio" id="Intrépide" name="categories" value="Intrépide" />
      <input
        type="radio"
        id="Prétentieuse"
        name="categories"
        value="Prétentieuse"
      />


    <div class="dropdown">
    <button @click="showMenu = !showMenu"> ONGLES NATURELS <fa class="icon-nav__instagram" :icon="['fa', 'angle-down']" /></button>
    <ul v-if="showMenu">
      <li>
            <label for="All">All</label>
          </li>
          <!-- <p class="pon">
            &nbsp;&nbsp;&nbsp;&nbsp;FORMULES ONGLES NATURELS &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
          </p> -->
          <li>
            <label for="Limpide">Limpide</label>
          </li>
          <li>
            <label for="Modeste">Modeste</label>
          </li>
          <li>
            <label for="Audacieuse">Audacieuse</label>
          </li>
    </ul>
  </div>

  <div class="dropdown">
    <button @click="showMenuEC = !showMenuEC"> EXTENSIONS CHABLON <fa class="icon-nav__instagram" :icon="['fa', 'angle-down']" /> </button>
    <ul v-if="showMenuEC">
      <li>
            <label for="All">All</label>
          </li>
      <li>
            <label for="Humble">Humble</label>
          </li>
          <li>
            <label for="Exigeante">Exigeante</label>
          </li>
          <li>
            <label for="Intrépide">Intrépide</label>
          </li>
          <li>
            <label for="Prétentieuse">Prétentieuse</label>
          </li>
    </ul>
  </div>



      <ol class="filters">
        <div class="">
          <li>
            <label for="All">All</label>
          </li>
        </div>
        <div class="col-5 on">
          <p class="pon">
            &nbsp;&nbsp;FORMULES ONGLES NATURELS &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <li>
            <label for="Limpide">Limpide</label>
          </li>
          <li>
            <label for="Modeste">Modeste</label>
          </li>
          <li>
            <label for="Audacieuse">Audacieuse</label>
          </li>
        </div>
        <div class="col-6 ec">
          <p class="pec">
            &nbsp;&nbsp;FORMULES EXTENSIONS CHABLON &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <li>
            <label for="Humble">Humble</label>
          </li>
          <li>
            <label for="Exigeante">Exigeante</label>
          </li>
          <li>
            <label for="Intrépide">Intrépide</label>
          </li>
          <li>
            <label for="Prétentieuse">Prétentieuse</label>
          </li>
        </div>
      </ol>

      <ol class="posts">
        <li class="post" data-category="Audacieuse">
          <MyItem
            linkImg="/src/assets/img/gallery/7F6F3CF0-A005-4C88-8B29-918ABA675BED.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem
            linkImg="/src/assets/img/gallery/132D9631-A86A-4EDC-BEDE-BD6C3C85761F.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Modeste">
          <MyItem
            linkImg="/src/assets/img/gallery/48920AD1-454B-487E-AEA3-B16B5CD13708.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem
            linkImg="/src/assets/img/gallery/6F0C32B8-5FB8-490D-BAC0-2B604F266AD9.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Modeste">
          <MyItem
            linkImg="/src/assets/img/gallery/7ED3BDFD-BB15-4072-B02D-6ED485DEECB1.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem
            linkImg="/src/assets/img/gallery/D977B44E-F991-4B23-9F84-529DB5EFF0F1.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem
            linkImg="/src/assets/img/gallery/F7400826-67B3-4A32-ABFD-04AB0E66DAF5.jpg"
          ></MyItem>
        </li>
        <li class="post" data-category="Exigeante">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1436.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1437.PNG"></MyItem>
        </li>
        <li class="post" data-category="Exigeante">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1438.PNG"></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1440.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1441.PNG"></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1442.PNG"></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1443.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1445.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1447.PNG"></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1448.PNG"></MyItem>
        </li>
        <li class="post" data-category="Intrépide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1449.PNG"></MyItem>
        </li>
        <li class="post" data-category="Exigeante">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1450.PNG"></MyItem>
        </li>
        <li class="post" data-category="Exigeante">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1451.PNG"></MyItem>
        </li>
        <li class="post" data-category="Exigeante">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1452.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_1454.PNG"></MyItem>
        </li>
        <li class="post" data-category="Humble">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2718.PNG"></MyItem>
        </li>
        <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2720.PNG"></MyItem>
        </li>
        <li class="post" data-category="Limpide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2722.PNG"></MyItem>
        </li>
        <li class="post" data-category="Modeste">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2723.PNG"></MyItem>
        </li>
        <li class="post" data-category="Limpide">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2733.PNG"></MyItem>
        </li>
        <li class="post" data-category="Humble">
          <MyItem class="center" linkImg="/src/assets/img/gallery/IMG_2732.PNG"></MyItem>
        </li>
        <li class="post" data-category="Humble">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2717.PNG"></MyItem>
        </li>
        <!-- <li class="post" data-category="Prétentieuse">
          <MyItem linkImg="/src/assets/img/gallery/IMG_2729.PNG"></MyItem>
        </li> -->
      </ol>
    </div>

    <div>
    <div>
      <img 
      v-for="image in images" 
      :src="image" 
      :class="{'small': !isExpanded, 'large': isExpanded}"
      @click="isExpanded = !isExpanded"
      alt="Gallery Image" 
      />
    </div>
    <div v-if="selectedImage">
      <img :src="selectedImage" alt="Selected Image" />
      <button @click="selectedImage = null; isExpanded = false">Close</button>
    </div>
  </div>
  </section>

</template>

<style lang="scss" scoped>

li {
  list-style: none;
}

.on {
  // background-color: yellow;
  margin-left: px(20);
}

.ec {
  // background-color: blue;
}

.pon {
  font-size: px(24);
}
.pec {
  font-size: px(24);
}

.gallery {
  // max-width: 1700px;
  height: auto;
  /* border: 1px solid #333; */
  display: grid;
  grid-template-columns: repeat(auto-fill, px(380));
  justify-content: center;
  grid-gap: px(10);
  position: relative;
}

.filters {
  margin-bottom: 2rem;


  @media screen and (max-width: ($mobile - 1)) {
   display: none;
  }
}



.dropdown{
  display: none;
  @media screen and (max-width: ($mobile - 1)) {
  display: block;
  margin-bottom: px(30);

  button{
    color: $colorPrimary;
    border: none;
    background: transparent;
    margin-left: px(30);
    font-size: px(20);
    font-weight: 500;
  }
  }
}


// .dropdown-button {
//   display: none;

//   @media screen and (max-width: ($mobile - 1)) {
//   display: block;
//   }
// }

.dropdown-menu {
  display: none;
  
  @media screen and (max-width: ($mobile - 1)) {
  display: block;
  }
}

.filters * {
  display: inline-block;
}

.filters label {
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  // border-radius: 2rem;
  min-width: 50px;
  line-height: normal;
  cursor: pointer;
  transition: all 0.1s;
  font-size: px(24);
}

.filters label:hover {
  color: $colorPrimary;
}

label {
  color: $colorSecondary;
  font-family: $textFontFamily;
  font-size: px(20);
  font-weight: 600;

  @media screen and (max-width: ($mobile - 1)) {
    font-weight: 600;
    line-height: px(50);
    padding: px(10);
  }
}

/* FILTERED ELEMENTS (POSTS)
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.posts {
  // display: grid;
  // grid-gap: 1.5rem;
  // grid-template-columns: repeat(4, 1fr);
  // max-width: 1700px;
  height: auto;
  /* border: 1px solid #333; */
  display: grid;
  grid-template-columns: repeat(auto-fill, px(380));
  justify-content: center;
  grid-gap: px(10);
  position: relative;

  @media screen and (max-width: ($mobile - 1)) {
    // display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    // max-width: 100%;
    display: block;
    padding: 0;
    // grid-gap: px(10);
    // display: flex;
    //  justify-content: center;
  }
}


.post{
  @media screen and (max-width: ($mobile - 1)) {
    // margin-bottom: px(50);
    margin-bottom: px(10);
  }
}

input {
  display: none !important;
}

input[type="radio"] {
  display: none !important;
}

/* FILTERING RULES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
[value="All"]:checked ~ .filters [for="All"],
[value="Limpide"]:checked ~ .filters [for="Limpide"],
[value="Modeste"]:checked ~ .filters [for="Modeste"],
[value="Audacieuse"]:checked ~ .filters [for="Audacieuse"],
[value="Humble"]:checked ~ .filters [for="Humble"],
[value="Exigeante"]:checked ~ .filters [for="Exigeante"],
[value="Intrépide"]:checked ~ .filters [for="Intrépide"],
[value="Prétentieuse"]:checked ~ .filters [for="Prétentieuse"],
[value="All"]:checked ~ .dropdown [for="All"],
[value="Limpide"]:checked ~ .dropdown [for="Limpide"],
[value="Modeste"]:checked ~ .dropdown [for="Modeste"],
[value="Audacieuse"]:checked ~ .dropdown [for="Audacieuse"],
[value="Humble"]:checked ~ .dropdown [for="Humble"],
[value="Exigeante"]:checked ~ .dropdown [for="Exigeante"],
[value="Intrépide"]:checked ~ .dropdown [for="Intrépide"],
[value="Prétentieuse"]:checked ~ .dropdown [for="Prétentieuse"]{
  background: $colorPrimary;
  color: white;
}

[value="All"]:checked ~ .posts [data-category] {
  display: block;
}

[value="Limpide"]:checked ~ .posts .post:not([data-category~="Limpide"]),
[value="Modeste"]:checked ~ .posts .post:not([data-category~="Modeste"]),
[value="Audacieuse"]:checked ~ .posts .post:not([data-category~="Audacieuse"]),
[value="Humble"]:checked ~ .posts .post:not([data-category~="Humble"]),
[value="Exigeante"]:checked ~ .posts .post:not([data-category~="Exigeante"]),
[value="Intrépide"]:checked ~ .posts .post:not([data-category~="Intrépide"]),
[value="Prétentieuse"]:checked
  ~ .posts
  .post:not([data-category~="Prétentieuse"]) {
  display: none;
}

@media screen and (max-width: 900px) {
  .posts {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 650px) {
  html {
    font-size: 14px;
  }

  .posts {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
