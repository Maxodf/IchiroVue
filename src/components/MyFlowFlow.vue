<script>
export default {
    created() {
    var scripts = [
      "https://apps.elfsight.com/p/platform.js",
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  }
};
</script>

<template>

<div class="elfsight-app-5b0b7ec9-aa89-4963-9ae6-478947b724b6 flowflow"></div>
<div class="blocCache"></div>
  
</template>

<style lang="scss" scoped>

.eapps-instagram-feed-title{
    color: white !important;
}

.flowflow{
  @media screen and (max-width: ($mobile - 1)){
    // margin-top: px(400);
    }  
}


.blocCache{
  background-color: $colorTertiary;
  height: 50px;
  width: 100%;
  position: absolute;
  margin-top: -50px;
  z-index: 999999 !important;
}
</style>
