<template>
  <div id="Menu">
      <vue-headful
        title="Title from vue-headful"
        description="Description from vue-headful"
      />
    <Header />

          <div class="container-wrapper" id="Products">
            <div class="page-bg" :style=" {backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fpizza-shop.jpg?alt=media&token=fac5a434-ab21-4acc-a6ae-cdcfc79946b1)'}"></div>
            <div id="fullwidth-container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <span class="page-title-icon flaticon-pizza-slice flaticon-pizza-slice--svg">
                              <svg  enable-background="new 0 0 64 64"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><path d="m50.385 18.615c-.391-.391-1.023-.391-1.414 0l-15.971 15.971v-22.586c0-.552-.448-1-1-1-14.336 0-26 11.664-26 26s11.664 26 26 26 26-11.664 26-26c0-6.945-2.705-13.474-7.615-18.385zm-2.146 33.21c3.366-3.684 5.496-8.512 5.735-13.825h2.001c-.242 5.864-2.599 11.189-6.325 15.236zm-40.214-15.825c.242-5.864 2.599-11.189 6.325-15.236l1.411 1.411c-3.366 3.684-5.496 8.512-5.735 13.825zm9.166-12.395 12.395 12.395h-17.535c.237-4.759 2.136-9.077 5.14-12.395zm13.809 10.981-12.395-12.395c3.318-3.004 7.635-4.904 12.395-5.141zm-1.414 3.414-12.395 12.395c-3.004-3.318-4.903-7.635-5.14-12.395zm1.414 1.414v17.535c-4.759-.237-9.077-2.137-12.395-5.14zm2 0 12.395 12.395c-3.318 3.004-7.635 4.904-12.395 5.141zm1.414-1.414h17.535c-.237 4.759-2.137 9.077-5.141 12.395zm0-2 12.401-12.4c3.114 3.436 4.909 7.769 5.136 12.4zm15.25-15.249c3.867 4.196 6.057 9.548 6.29 15.249h-2.003c-.231-5.165-2.233-9.999-5.722-13.814zm-18.664-5.726c-5.313.239-10.142 2.37-13.825 5.735l-1.412-1.412c4.048-3.727 9.372-6.087 15.237-6.328zm-22.952 22.975h1.977c.239 5.313 2.369 10.141 5.735 13.825l-1.416 1.416c-3.725-4.047-6.053-9.379-6.296-15.241zm7.711 16.655 1.416-1.416c3.684 3.366 8.512 5.496 13.825 5.735v2.005c-5.865-.241-11.193-2.597-15.241-6.324zm17.241 4.32c5.313-.239 10.142-2.37 13.825-5.735l1.412 1.412c-4.048 3.727-9.372 6.087-15.237 6.328z"/><path d="m35.617 27.924c.124.051.254.076.383.076.26 0 .516-.102.707-.293l17.678-17.678c.188-.188.293-.442.293-.707s-.105-.52-.293-.707c-4.911-4.91-11.441-7.615-18.385-7.615-.552 0-1 .448-1 1v25c0 .404.244.769.617.924zm1.383-20.875c4.631.228 8.964 2.023 12.4 5.136l-12.4 12.401zm15.249 2.287-1.435 1.435c-3.815-3.489-8.649-5.492-13.814-5.722v-2.028c5.703.231 11.052 2.447 15.249 6.315z"/><circle cx="47" cy="29" r="2"/><circle cx="48" cy="41" r="2"/><circle cx="37" cy="48" r="2"/><circle cx="26" cy="52" r="2"/><circle cx="17" cy="42" r="2"/><circle cx="18" cy="29" r="2"/><circle cx="28" cy="27" r="2"/><path d="m23.5 20.919h2v3.162h-2z" transform="matrix(.316 -.949 .949 .316 -4.595 38.623)"/><path d="m27 19h2v2h-2z"/><circle cx="41" cy="13" r="2"/><path d="m39 17h2v2h-2z"/><path d="m44 12h2v2h-2z"/><path d="m42.5 31.197h2v3.606h-2z" transform="matrix(.555 -.832 .832 .555 -8.087 50.889)"/><path d="m48 32h2v2h-2z"/><path d="m40 39.586h2v2.828h-2z" transform="matrix(.707 -.707 .707 .707 -16.983 41)"/><path d="m45 44.382h2v2.236h-2z" transform="matrix(.447 -.894 .894 .447 -15.268 66.295)"/><path d="m36 52h2v2h-2z"/><path d="m40 50.382h2v2.236h-2z" transform="matrix(.447 -.894 .894 .447 -23.399 65.14)"/><path d="m26.586 46h2.828v2h-2.828z" transform="matrix(.707 -.707 .707 .707 -25.033 33.565)"/><path d="m21 40h2v2h-2z"/><path d="m20 32h3v2h-3z"/><path d="m14.382 32h2.236v2h-2.236z" transform="matrix(.447 -.894 .894 .447 -20.948 32.106)"/></g></svg>
                            </span>
                            <h1 class="page-title">Pizzas</h1>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="page-wrapper">
                    <div class="offer-menu2-wrapper">
                      <transition name="slide-fade">
                        <div class="offer-menu2-items" v-if="products.length > 0">
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
                        <div class="loader" v-if="products.length <= 0">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#242424" stroke-width="2">
                              <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                              <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#fab940" stroke-width="2">
                              <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                              <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                            </circle>
                          </svg>
                        </div>
                      </transition>
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

        if(this.$store.getters.getProducts.length <= 0){
          this.$store.dispatch(GET_PRODUCTS);
        }
        
    },
    methods:{

    },
}
</script>

<style>
#Products .page-wrapper{
  min-height: 80vh;
  position: relative;
}
.flaticon-pizza-slice--svg{
           fill: #fab940;
    margin-left: 5px;
    margin-right: 5px; 
}
.flaticon-pizza-slice--svg svg{
      width: 36px;
    height: 36px;
}

#Products .loader{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

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

