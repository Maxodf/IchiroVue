<script>
export default {

    data() {
        return{
     search: '',
     items: [
       {name: 'Stackoverflow', type: 'development'},
       {name: 'Game of Thrones', type: 'serie'},
       {name: 'Jon Snow', type: 'actor'}
     ]
    }
  },

  computed: {
    filteredItems() {
      return this.items.filter(item => {
         return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
    }
  }
};


  
</script>




<template>

<!-- <div id="myBtnContainer">
    <button class="btn active" onclick="filterSelection('all')"> Voir tous </button>
    <div>
        <p>
            Formules ongles naturels
        </p>
  <button class="btn" onclick="filterSelection('limpide')"> Limpide </button>
  <button class="btn" onclick="filterSelection('modeste')"> Modeste </button>
  <button class="btn" onclick="filterSelection('audacieuse')"> Audacieuse </button>
    </div>
    <div>
        <p>
            Formules extensions chablon
        </p>
  <button class="btn" onclick="filterSelection('humble')"> Humble </button>
  <button class="btn" onclick="filterSelection('exigenate')"> Exigeante </button>
  <button class="btn" onclick="filterSelection('intrepide')"> Intrépide </button>
  <button class="btn" onclick="filterSelection('pretentieuse')"> Prétentieuse </button>
    </div>
</div> -->


  <button @click.prevent="search=''">ALL</button>
  <button @click.prevent="search='actor'">ACTOR</button>
    <button @click.prevent="search='serie'">SERIE</button>
    <button @click.prevent="search='development'">DEVELOPMENT</button>
    <div v-for="item in filteredItems" >
      <p>{{item.name}}</p>
    </div>


</template>




<style lang="scss" scoped>


</style>