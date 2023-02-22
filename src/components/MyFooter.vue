<script>

export default {

};

</script>




<template>

    <div class="footer">

        <router-link to="/"> Mentions légales</router-link>
        <router-link to="/"> Ichiro - 2022</router-link>
    </div>


</template>

<style lang="scss" scoped>

a{
    color: $colorPrimary;
    font-size: $textFontSize;
    font-family: $textFontFamily;

    @media screen and (max-width: ($mobile - 1)){
        font-size: px(18);
    }  

}

.footer{
    background-color: black;
    width: 100%;
    // height: px(200);
    display: flex;
    justify-content: center;
    gap: px(40);
    padding: px(20);
    // height: px(100);
}

</style>
