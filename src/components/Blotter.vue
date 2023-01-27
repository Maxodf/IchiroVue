<!-- <template>
<div id="blotter-container"></div>
</template>

<script>
export default {

  props: {
    text: String,
  },

  mounted() {
    const text = new Blotter.Text('pk', {
      family:"ahsingregular",
  size: 1000,
	paddingLeft: 50,
  paddingRight: 50,
	fill: '#c91745',
  family:"ahsingregular",
});

// Use a material
// https://blotter.js.org/#/materials
let material = new Blotter.LiquidDistortMaterial();

// Set material opts
material.uniforms.uSpeed.value = 0.1;
material.uniforms.uVolatility.value = 0.05;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

// Apply to element
let scope = blotter.forText(text);
let elem = document.getElementById('blotter-container');
scope.appendTo(elem);
  }
}
</script>

<style lang="scss" scoped>

</style> -->

<!-- 

<template>
  <div id="text">
    <div v-for="(line, index) in lines" :id="`line-${index}`"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lines: ['Not fake', 'Nails,', 'Art']
    }
  },
  mounted() {
    let vh = window.innerHeight * 0.030
    
    let params = {
      family: "'ahsingregular'",      
      fill: "#c91745",
      paddingLeft: vh * 1,
      lineHeight: 1,
      paddingRight: vh * 1,
      size: vh * 4,      
      weight: "bold"
    }
    
    let texts = this.lines.map(line => {
      return new Blotter.Text(line, params)
    })
    
    let material = new Blotter.LiquidDistortMaterial()
    
    material.uniforms.uSpeed.value = 0.1
    
    let blotter = new Blotter(material, {
      texts: texts
    })
    
    let scopes = texts.map(text => {
      return blotter.forText(text)
    })
    
    scopes.forEach((scope, index) => {
      scope.appendTo(document.getElementById(`line-${index}`))
    })
  }
}
</script>

<style>
  
  #text{
    align-items: left;
    display: flex;
    flex-direction: column;
  }
</style> -->