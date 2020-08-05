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
                                  v-for="(item) in products" :key="`${item.id}-id-prod`"
                            >
                                <ProductCard 
                                    :product = "item"
                                />
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
import Vue from 'vue';
import Header from "../components/header/Header.vue"
import FooterMob from "../components/FooterMobail"
import vueHeadful from 'vue-headful';
import {UAnimateContainer, UAnimate} from 'vue-wow'
import { GET_PRODUCTS  } from '../store/mutation-type.js'
import ProductCard from '../components/products/ProductCard.vue'

Vue.component('vue-headful', vueHeadful);

export default {
    name: 'Home',
    components: {
        Header,
        FooterMob,
        UAnimateContainer,
        UAnimate,
        ProductCard
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        }
    },
    mounted(){
        this.$store.dispatch(GET_PRODUCTS);
    },
    methods:{

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

</style>

