<template>
  <div id="Menu">
      <vue-headful
        title="Title from vue-headful"
        description="Description from vue-headful"
      />
    <Header />

          <div class="container-wrapper">
            <div class="page-bg" :style=" {backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fpizza-shop.jpg?alt=media&token=fac5a434-ab21-4acc-a6ae-cdcfc79946b1)'}"></div>
            <div id="fullwidth-container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <span class="page-title-icon flaticon-pizza-slice"></span>
                            <h1 class="page-title">Pizzas</h1>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="page-wrapper">
                    <div class="offer-menu2-wrapper">
                        <div class="offer-menu2-items">
                          <u-animate-container class="pizza-wow">
                            <u-animate
                                  name="fadeInUp"
                                  delay="0s"
                                  duration="1s"
                                  :iteration="1"
                                  :offset="0"
                                  animateClass="animated"
                                  :begin="false"
                            >
                              <div class="offer-menu2-item-single">
                                  <img class="offer-menu2-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fframe.png?alt=media&token=ac9b28ad-4c20-4227-9af2-d288f7377a6d" />
                                  <div class="offer-menu2-shadow"></div>
                                  <div class="offer-menu2-thumb">
                                      <img class="offer-menu2-inner-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fshadow-frame.png?alt=media&token=7a91e219-96b2-46fd-8e05-26c3ac9d70fa" />
                                  </div>
                                  <div class="offer-menu2-thumb-image">
                                    <img src="upload/hawaii-313x220.jpg" width="313" height="220" alt="hawaii" />
                                  </div>
                                  <div class="clear"></div>
                                  <span class="offer-menu2-icon flaticon-pizza-slice"></span>
                                  <div class="offer-menu2-details">
                                      <div class="single-offer-menu2-title">Hawaii</div>
                                      <div class="single-offer-menu2-content">
                                          <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                      </div>
                                      <div class="single-offer-menu2-price">$5.50</div>

                                      <div class="single-offer-menu2-nav">
                                        <button class="product-open">Подробно</button>
                                        <div class="single-offer-menu2-cart--btn">
                                          <button class="product-btn product-sub">-</button>
                                          <div class="single-offer-menu2-count">0</div>
                                          <button class="product-btn product-add">+</button>
                                        </div>

                                      </div>
                                  </div>
                              </div>
                            </u-animate>
                            <u-animate
                                  name="fadeInUp"
                                  delay="0s"
                                  duration="1s"
                                  :iteration="1"
                                  :offset="0"
                                  animateClass="animated"
                                  :begin="false"
                            >
                              <div class="offer-menu2-item-single">
                                  <img class="offer-menu2-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fframe.png?alt=media&token=ac9b28ad-4c20-4227-9af2-d288f7377a6d" />
                                  <div class="offer-menu2-shadow"></div>
                                  <div class="offer-menu2-thumb">
                                      <img class="offer-menu2-inner-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fshadow-frame.png?alt=media&token=7a91e219-96b2-46fd-8e05-26c3ac9d70fa" />
                                  </div>
                                  <div class="offer-menu2-thumb-image">
                                    <img src="upload/hawaii-313x220.jpg" width="313" height="220" alt="hawaii" />
                                  </div>
                                  <div class="clear"></div>
                                  <span class="offer-menu2-icon flaticon-pizza-slice"></span>
                                  <div class="offer-menu2-details">
                                      <div class="single-offer-menu2-title">Hawaii</div>
                                      <div class="single-offer-menu2-content">
                                          <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                      </div>
                                      <div class="single-offer-menu2-price">$5.50</div>
                                  </div>
                              </div>
                            </u-animate>
                                                        <u-animate
                                  name="fadeInUp"
                                  delay="0s"
                                  duration="1s"
                                  :iteration="1"
                                  :offset="0"
                                  animateClass="animated"
                                  :begin="false"
                            >
                              <div class="offer-menu2-item-single">
                                  <img class="offer-menu2-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fframe.png?alt=media&token=ac9b28ad-4c20-4227-9af2-d288f7377a6d" />
                                  <div class="offer-menu2-shadow"></div>
                                  <div class="offer-menu2-thumb">
                                      <img class="offer-menu2-inner-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fshadow-frame.png?alt=media&token=7a91e219-96b2-46fd-8e05-26c3ac9d70fa" />
                                  </div>
                                  <div class="offer-menu2-thumb-image">
                                    <img src="upload/hawaii-313x220.jpg" width="313" height="220" alt="hawaii" />
                                  </div>
                                  <div class="clear"></div>
                                  <span class="offer-menu2-icon flaticon-pizza-slice"></span>
                                  <div class="offer-menu2-details">
                                      <div class="single-offer-menu2-title">Hawaii</div>
                                      <div class="single-offer-menu2-content">
                                          <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                      </div>
                                      <div class="single-offer-menu2-price">$5.50</div>
                                  </div>
                              </div>
                            </u-animate>
                            <u-animate
                                  name="fadeInUp"
                                  delay="0s"
                                  duration="1s"
                                  :iteration="1"
                                  :offset="0"
                                  animateClass="animated"
                                  :begin="false"
                            >
                              <div class="offer-menu2-item-single">
                                  <img class="offer-menu2-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fframe.png?alt=media&token=ac9b28ad-4c20-4227-9af2-d288f7377a6d" />
                                  <div class="offer-menu2-shadow"></div>
                                  <div class="offer-menu2-thumb">
                                      <img class="offer-menu2-inner-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fshadow-frame.png?alt=media&token=7a91e219-96b2-46fd-8e05-26c3ac9d70fa" />
                                  </div>
                                  <div class="offer-menu2-thumb-image">
                                    <img src="upload/hawaii-313x220.jpg" width="313" height="220" alt="hawaii" />
                                  </div>
                                  <div class="clear"></div>
                                  <span class="offer-menu2-icon flaticon-pizza-slice"></span>
                                  <div class="offer-menu2-details">
                                      <div class="single-offer-menu2-title">Hawaii</div>
                                      <div class="single-offer-menu2-content">
                                          <p>Pineapple, mushrooms, black olives, tomato sauce</p>
                                      </div>
                                      <div class="single-offer-menu2-price">$5.50</div>
                                  </div>
                              </div>
                            </u-animate>
                          </u-animate-container>
                           
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- end page wrapper -->
            </div>
            <!-- end container -->
            <div class="clear"></div>
        </div>
   
    <FooterMob />
  </div>
</template>

<script>
//import { db } from '../main'
import Vue from 'vue';
import Header from "../components/header/Header.vue"
import FooterMob from "../components/FooterMobail"
import vueHeadful from 'vue-headful';
import {UAnimateContainer, UAnimate} from 'vue-wow'

Vue.component('vue-headful', vueHeadful);

export default {
  name: 'Home',
  components: {
    Header,
    FooterMob,
    UAnimateContainer,
    UAnimate
  },
  data(){
    return{
      products: [],
    }
  },
  methods:{
        // getProducts: async (dataProd)=>{

        //     const refDoc = db.collection(' products').doc('pizza')

        //     await refDoc.get().then(doc=>{

        //        const catList = doc.data().catList;
        //        const catName = doc.data().catName;

        //        catList.forEach(async (item,index)=>{
                 
        //           await refDoc.collection(item).get().then(prodVirt =>{
                    
        //             let prodBuf = prodVirt.docs.map(prod=>{
        //                     return prod.data()
        //             })

        //             dataProd.push({
        //                 cat: item,
        //                 catTitle: catName[index],
        //                 products: prodBuf
        //             });

        //            });
        //        })
               
               
        //     });
            
        // },
  },
}
</script>

<style>

.page-bg {
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    z-index: 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.pizza-wow{
  display: flex;
  flex-wrap: wrap;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}

#fullwidth-container {
    width: 100%;
    float: left;
    margin-top: 100px;
    z-index: 2;
    position: relative;
}

.offer-menu2-items {
    margin-left: -15px;
    margin-right: -15px;
}


.offer-menu2-item-single {
    position: relative;
    margin-bottom: 50px;
    float: left;
    padding: 0 15px;
}

.offer-menu2-thumb {
    display: block;
    line-height: 0;
    position: absolute;
    top: 28px;
    left: 43px;
    z-index: 9;
}

.offer-menu2-thumb-image {
    display: block;
    line-height: 0;
    position: absolute;
    top: 28px;
    left: 43px;
}

.offer-menu2-shadow {
    /* background: url(../images/shadow-frame.png) no-repeat; */
    width: 369px;
    height: 17px;
    margin-top: -10px;
    margin-bottom: 10px;
}


span.offer-menu2-icon {
    float: left;
    width: 70px;
	color: #242424;
}

span.offer-menu2-icon:before {
    font-size: 46px;
	padding: 0;
	margin: 0;
	line-height: 1;
}

.offer-menu2-details {
    margin-left: 70px;
    width: 300px;
}

.single-offer-menu2-title {
    font-size: 30px;
    color: #242424;
    font-family: 'Patua One', cursive;
    line-height: 1;
    margin-bottom: 10px;
}

.single-offer-menu2-price {
    font-size: 26px;
    color: #9b040c;
    font-family: 'Patua One', cursive;
    line-height: 1;
}

.offer-menu2-items .offer-menu2-item-single:nth-child(3n+1){
   clear: both;
} 

@media only screen and (max-width: 1550px) {
    .offer-menu2-items .offer-menu2-item-single:nth-child(3n+1){
       clear: none;
    } 
    .offer-menu2-items .offer-menu2-item-single:nth-child(2n+1){
       clear: both;
    } 
}

@media only screen and (max-width: 1160px) {
    .offer-menu2-item-single {
        width: 50%;
    }
    .offer-menu2-thumb-image {
        top: 24px;
        left: 36px;
    }
    
    .offer-menu2-thumb-image img {
        width: 264px;
    }
    
    .offer-menu2-thumb {
        top: 24px;
        left: 36px;
    }
    
    .offer-menu2-inner-frame {
        width: 264px;
    }
    .offer-menu2-shadow {
        width: 100%;
    }
    .offer-menu2-details {
        width: auto;
    }

}
    
    
    
@media only screen and (max-width: 1010px) {
    
    .offer-menu2-thumb-image {
        top: 18px;
        left: 35px;
    }
    
    .offer-menu2-thumb-image img {
        width: 223px;
    }
    
    .offer-menu2-thumb {
        top: 18px;
        left: 35px;
    }
    
    .offer-menu2-inner-frame {
        width: 223px;
    }
    .offer-menu2-details {
        margin-left: 50px;
    }
    
    span.offer-menu2-icon {
        width: 50px;
    }
}


@media only screen and (max-width: 650px) {
    .container-wrapper {
        max-width: 500px;
    }
    .offer-menu2-item-single {
        width: 100%;
        max-width: 370px;
        padding: 0;
        left: auto;
        float: none;
        margin: 0 auto 40px;
        clear: both;
    }
    .offer-menu2-items {
        margin: 0;
    }
    .offer-menu2-thumb-image {
        top: 28px;
        left: 30px;
    }
    
    .offer-menu2-thumb-image img {
        width: 100%;
    }

    .offer-menu2-thumb {
            top: 28px;
            left: 30px;
        }

    .offer-menu2-inner-frame {
        width: 100%;
    }
    .page-wrapper {
        padding: 20px;
    }

}


@media only screen and (max-width: 400px) {
    .offer-menu2-item-single {
        width: 100%;
        max-width: 313px;
        padding: 0;
        left: auto;
        float: none;
        margin: 0 auto 40px;
        clear: both;
    }
    
    .offer-menu2-thumb-image {
        position: relative;
        left: 0;
        top: 0;
        margin-bottom: 20px;
    }
    .offer-menu2-thumb {
        left: 0;
        top: 0;
    }
    .offer-menu2-shadow {
        display: none;
    }

}

.single-offer-menu2-nav{
  padding-top: 10px;
  display: flex;
  align-content: center;
  justify-self: space-between;
  width: 100%;
}

.single-offer-menu2-cart--btn{
  display: flex;
  align-content: center;
  justify-content: flex-end;
}

.product-open{
  background-color: #fab940;
  border: 1px solid #9b040c;
  color: #fff;
  transition: all 450ms ease;
  cursor: pointer;
  font-weight: bold;
  padding: 6px;
  border-radius: 8px;
}

.product-open:hover{
  background-color: #9b040c;
  border: 1px solid #fab940;
  color: #fab940;
  transition: all 450ms ease;
}

.single-offer-menu2-count{
  margin-left: 6px;
  margin-right: 6px;
  color: #9b040c;
  font-weight: bold;
  font-size: 18px;
}

.product-btn{
  border-radius: 100%;
  border: 4px solid #fab940;
  background-color: #9b040c;
  cursor: pointer;
  color: #fab940;
  width: 32px;
  height: 32px;
  transition: all 450ms ease;
}

.product-btn:hover{
  border: 2px solid #fab940;
  transition: all 450ms ease;
}

</style>

