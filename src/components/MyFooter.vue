<script>

export default {

};

</script>




<template>

    <div class="footer">

        <a href=""> Mentions légales</a>
        <a href="/"> Ichiro - 2022</a>
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
