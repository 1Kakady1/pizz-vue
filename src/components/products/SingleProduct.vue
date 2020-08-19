<template>
    <div class="single-product-container">
        <vue-headful
            :title="'Product - '+prod.title"
            description="Description from vue-headful"
        />
        <div class="single-product">
             
                <div class="single-product-imgs-wrapper">
                    <transition name="slide-fade">

                            <swiper  v-if="prod.id !== undefined"  ref="mySwiper" class="slideInDown single-product-imgs" :options="swiperOptions">
                                <swiper-slide v-for="(item,index) in prod.gallary" :key="`gal-${prod.id}-${index}`">
                                    <img :src="item">
                                </swiper-slide>
                            </swiper>
                  
                        <div v-else class="preload-img">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <circle cx="50" cy="50" r="0" fill="none" stroke="#242424" stroke-width="2">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                                </circle>
                                <circle cx="50" cy="50" r="0" fill="none" stroke="#9b040c" stroke-width="2">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                                </circle>
                            </svg>
                        </div>

                    </transition>

                    <!-- <transition name="slide-fade">

                    </transition> -->
                    
                    <div v-if="prod.id !== undefined" 
                        class="swiper-button-prev swiper-button-white" 
                        @click="swiper.slidePrev()"  slot="button-prev"></div>
                    <div v-if="prod.id !== undefined" class="swiper-button-next swiper-button-white" @click="swiper.slideNext()"  slot="button-next"></div>

                    <div class="close" @click="close">&times;</div>
                    <div class="single-product-cat">{{$route.params.cat}}</div>


                </div>
                <transition name="slide-fade">
                    <div class="single-nav"  v-if="prod.id !== undefined">
                        <div class="single-product-price">
                            Price: 
                            {{prod.price.toFixed(2)}} 
                            {{cur}}
                        </div>
                        <div class="single-offer-menu2-cart--btn">
                            <button class="product-btn product-sub" @click="subCart(prod.id,prod.price)">-</button>
                            <div class="single-offer-menu2-count">{{prod.count}}</div>
                            <button class="product-btn product-add" @click="addCart(prod.id,prod.price)">+</button>
                        </div>
                    </div>
                </transition>

                <h1 class="single-product-title" >{{prod.title}}</h1>

                <div class="single-product-info-contain" v-if="prod.info !== undefined && prod.info !== null">
                    <div class="single-product-info-title"> 
                        Energy value per 100 grams:
                    </div>
                    <ul class="single-product-info">
                        <li v-for="(item,index) in prod.info" :key="`${index}-info-item-${prod.id}`">
                            {{item.title}}: {{item.value}}
                        </li>
                    </ul> 
                </div>


                <p class="single-product-desc">
                     {{prod.desc}}
                </p>

                <div class="single-product-info-contain">
                    <div class="single-product-info-title"> 
                        Composition:
                    </div>
                    <p>
                        {{prod.composition}}
                    </p>
                </div>
            


            
        </div>
        <div class="single-product-overlay" @click="close"> </div>
    </div>
    

</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { TweenMax } from 'gsap';
import { ADD_TO_CART, SUB_TO_CART, GET_PRODUCT } from '../../store/mutation-type'
import {cur} from '../../helpers/const.js'
import vueHeadful from 'vue-headful';

export default {
  name: 'SingleProduct',
    data(){
        return{
            isLoad: false,
            cur: cur,
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                    }
                },
        }
    },
    components:{
        Swiper,
        SwiperSlide,
        vueHeadful
    },
    props:{
        id:{default: undefined},
        cat:{default: undefined},
    },
    mounted(){

        const getProductMounted = async ()=>{
            await this.$store.dispatch(GET_PRODUCT,this.$route.params);
            //this.isLoad = false;
        }

        getProductMounted();

        document.querySelector("body").style.overflow="hidden";
        //bodyFixPosition() // для ios

        TweenMax.staggerFromTo(".single-product", 1, {
            x: '110%',
            delay: 0.5
        }, {
            x: "0px",
            delay: 0
        }, 0.05);

        TweenMax.staggerFromTo(".single-product-overlay", 1, {
            alpha: '0',
            delay: 0.5
        }, {
            alpha: "1",
            delay: 0
        }, 0.05);
        
    },

    computed: {
        cart(){
            return this.$store.getters.getCart
        },
        prod(){
            return this.$store.getters.getProduct(this.id !== undefined ? this.id : this.$route.params.product )
        },
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },
    methods:{
        addCart(id,price){
            this.$store.commit(ADD_TO_CART,{id,price});
        },
        subCart(id,price){
            this.$store.commit(SUB_TO_CART,{id,price});
        },

        close(){
            TweenMax.staggerFromTo(".single-product", 1, {
                x: '0%',
                delay: 0.5
            }, {
                x: "110%",
                delay: 0
            }, 0.05,()=>{
                    this.$router.go(-1)
            });
            
             TweenMax.staggerFromTo(".single-product-overlay", 1, {
                    alpha: '1',
                    delay: 0.5
                }, {
                    alpha: "0",
                    delay: 0
                }, 0.05,()=>{
                    //bodyUnfixPosition() // для ios
                    document.querySelector("body").style.overflow="";
                });
            } 
    },
    directives: {
        swiper: directive
    },
    watch:{
        prod:(newValue, oldValue)=>{
            console.log(`Updating from ${oldValue} to ${newValue}`);
        },
    }
}
</script>

<style scope>

.single-product-info-contain{
     padding-left: 20px;
     padding-right: 20px;
     font-size: 18px;
     font-weight: 700;
}

.single-product-cat{
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    background-color: #fab940;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    z-index: 2;
    min-width: 120px;
    border-radius: 0px 0px 30px 0px;
}

    .single-product-title{
        padding: 20px;
    }
    .single-product-desc{
         padding: 20px;
    }

    .slide-down-leave-active,.slide-down-enter {
        /* opacity: 0; */
        transform: translateY(0%);
        transition: all 2600ms ease;
    }
    .slide-down-leave-active,.slide-down-enter {
    /* opacity: 0; */
    transform: translateY(-110%);
    transition: all 2600ms ease;
    }

    @keyframes slideInDown {
        from {
            transform: translate3d(0, -100%, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
            }
        }

    .slideInDown {
        animation-name: slideInDown;
        animation-duration: 2s;
        animation-fill-mode: both;
        animation-delay: 300ms;
    }

    .single-nav{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .single-product-price{
        font-size: 22px;
        font-weight: bold;
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

    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }

    .swiper-button-prev,.swiper-button-next{
        top: 25%;
        color: #9b040c;
    }

    .close{
        font-size: 28px;
        color: #fff;
        cursor: pointer;
        transform: scale(1);
        transition: transform 400ms ease;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 2;
        background-color: #fab940;
        height: 30px;
        width: 30px;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%
    }

    .close:hover{
        transform: scale(1.2);
        transition: transform 400ms ease;
    }
    .single-product-imgs img{
        width: 100%;
        height: 100%;
    }
    .single-product-imgs,.preload-img{
        width: 100%;
        height: 320px;
        background-color: #fab940;
        position: relative;
    }

    .preload-img{
        position: absolute;
        top: 0;
        left: 0;
    }

    .preload-img svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 80px;
        height: 80px;
    }

    .single-product-overlay{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        background-color: rgb(250 185 64 / 0.7);
        z-index: 98;
    }
    .single-product-container{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 98;
        /* transform: translateX(110%); */
    }
    .single-product{
        height: 100vh;
        width: 100%;
        position: fixed;
        right: 0px;
        top: 0px;
        background-color: #fff;
        z-index: 99;
        overflow: auto;
        border-left: 1px solid rgb(155 4 12 / 0.7);
    }

    @media screen and (min-width: 768px){
        .single-product{
            width: 76%;
        }
    }

    @media screen and (min-width: 996px){
        .single-product{
            width: 50%;
        }
    }

</style>

