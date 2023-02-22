<!-- eslint-disable prettier/prettier -->
<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>


<template>


  <div v-motion-pop-visible class="btn-contain">
    <div class="btn">
      <router-link v-if="link" :to="link" class="button">{{ text }}</router-link>
      <button v-else class="button">{{ text }} </button>
      <svg class="wavyHover" xmlns="http://www.w3.org/2000/svg" width="300" height="90" viewBox="0 0 138.4 9.8">
        <path id="Tracé_3" data-name="Tracé 3" d="M518.376,628.8s3.657-8.8,15.034-8.8,12.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8" transform="translate(-517.915 -619.5)" fill="none" stroke="#ffaebf" stroke-width="0.5"/>
      </svg>

      <svg class="wavyMobileBtn" xmlns="http://www.w3.org/2000/svg" width="300" height="90" viewBox="0 0 138.4 9.8">
        <path id="Tracé_3" data-name="Tracé 3" d="M518.376,628.8s3.657-8.8,15.034-8.8,12.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8" transform="translate(-517.915 -619.5)" fill="none" stroke="#ffaebf" stroke-width="0.5"/>
      </svg>

    </div>
</div>

</template>





<style lang="scss" scoped>


.btn-contain{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: px(50);
  margin-bottom: px(100);

  .btn{
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: ($mobile - 1)){
    // margin-top: px(400);
    // border: 1px solid $colorPrimary;
    // border-radius: 100px;
    }  

  .wavyMobileBtn{
    display: none;
    position: absolute;
    margin-top: px(-20);
    // margin-left: px(10);
    z-index: -1;

    @media screen and (max-width: ($mobile - 1)){
    display: block;
    }  

    path{
          animation: wavyHover 3s infinite;
        }
  }

  .wavyHover{
    position: absolute;
    margin-top: px(-20);
    // margin-left: px(10);
    z-index: -1;
    display: none;

        path{
          animation: wavyHover 3s infinite;
        }
      }

              @keyframes wavyHover{
              0%{
                  d: path("M518.376,628.8s3.657-8.8,15.034-8.8,12.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8")
              }
              25%{
                d: path("M520.376,630.8s3.700-8.8,15.034-8.8,15.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8")
              }
              50%{
                d: path("M520.376,630.8s3.750-8.8,15.034-8.8,17.7,11.8,26.363,10.8S568.15,620,580.12,620s10.513,10.8,21.535,8.8,11.072-8.8,25.316-8.8,7.908,8.8,16.659,8.8,18.400-8.8,18.357-8.8")
              }
              75%{
                d: path("M520.376,630.8s3.700-8.8,15.034-8.8,15.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8")
              }
              100%{
                d: path("M518.376,628.8s3.657-8.8,15.034-8.8,12.7,8.8,23.363,8.8S568.15,620,579.12,620s10.513,8.8,21.535,8.8,11.072-8.8,20.316-8.8,7.908,8.8,16.659,8.8,18.347-8.8,18.347-8.8")
              }

            }

      .button{
        color: $colorPrimary;
        font-family: $textFontFamily;
        text-transform: uppercase;
        // border-top: 1px solid $colorPrimary;
        // border-bottom: 1px solid $colorPrimary;
        font-size: $textFontSize;
        padding: px(15);
        // border-radius: px(100);
        padding-left: px(30);
        padding-right: px(30);
        z-index: 1;

    //     @media screen and (max-width: ($mobile - 1)){
    //     font-size: px(16);
    // }  

      }

        &:hover{

          .button{
          color: $colorSecondary;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid $colorSecondary;
          // transition: 0.6s;
          border: none;
          }

          .trait{
            transition: 0.4s;
            opacity: 0;
          }

          svg{
            display: block;
          }

        }

        }
      
  }





 // liquid button
//  &--changeGradient {
//     background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
//     background-size: 400%;

//     &:hover {
//       animation: changeGradientAnimation 8s linear infinite;
//     }
//     @keyframes changeGradientAnimation {
//       0% {
//         background-position: 0%;
//       }
//       100% {
//         background-position: 400%;
//       }
//     }
//   }






</style>
