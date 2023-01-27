<template>
  <main>
    <header>
      <slot name="header"></slot>
    </header>
    <article><slot name="article"></slot></article>
    <aside><slot name="aside"></slot></aside>
    <footer><slot name="footer"></slot></footer>
  </main>
</template>

<style lang="scss" scoped>
// main{
//     display: grid;
//     grid-template: "header" "article" "aside" "footer";
//     @include mobile-up {
//         grid-template: "header header header"
//                        "aside article article"
//                        "footer footer footer";
//     }
//     header{
//         grid-area: header;
//         width: 100vw;
//         background-color: rgb(255, 0, 0);
//     }
//     footer{
//         grid-area: footer;
//         background: rgb(0, 204, 255);
//     }
//     aside{
//         grid-area: aside;
//         background: blue;
//     }
//     article{
//         grid-area: article;
//         background: rgb(255, 0, 255);
//     }
// }
</style>
