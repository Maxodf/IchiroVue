<script>
export default{}
</script>

<template>

<div class="bloc-loc-tryp">
    <div class="bloc-loc-tryp__img">
        <img src="./../assets/img/loc_tryptich.png" alt="">
    </div>
    <div class="bloc-loc-tryp__text">
        <a target="_blank" href="https://www.google.fr/maps/place/3+Rue+Dautancourt,+75017+Paris/@48.8890873,2.3213207,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fad2162425f:0x1ab08a55f038d51f!8m2!3d48.8890873!4d2.3235094">3 rue dautancourt, <i>"Le Tryptich"</i>, 75017 Paris</a>
    </div>
</div>

</template>

<style lang="scss" scoped>

.bloc-loc-tryp{

    position: relative;
    width: px(600);
    height: px(400);

    &__img{
        object-fit: cover;
        width: 100%;

        @media screen and (max-width: ($desktop - 1)) {
            width: 85%;
  }

  @media screen and (max-width: ($mobile - 1)){
    width: 100vw;
    }  
    }

    &__text{

        font-family: $textFontFamily;
        font-size: $textFontSize;
        text-align: center;

        @media screen and (max-width: ($desktop - 1)) {
            width:85%;
         }
         @media screen and (max-width: ($mobile - 1)){
            font-size: px(18);
            text-align: center;
            width: 100vw;
    }  

        a{
        text-decoration: none;
        color: $colorPrimary;

        &:hover{
        color: $colorSecondary;
    }
        }

    }

    @media screen and (max-width: ($mobile - 1)){
    width: 100vw;
    height: px(0);
    position: absolute;
    left: 0;
    margin-top: px(220);
    }  

}




</style>