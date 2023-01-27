<script>
export default {
  props: {
    linkImg: String,
  },
};
</script>

<template>
  <div class="item">
    <img class="item__img" :src="linkImg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: px(380);
  height: px(380);
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;

  @media screen and (max-width: ($mobile - 1)) {
     height: px(320);
     width: px(320);
     border: 2px solid green;
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
     border: 2px solid rgb(255, 217, 4);
  }
  }

  &:hover {
  }
}
</style>
