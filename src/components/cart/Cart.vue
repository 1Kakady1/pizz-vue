<template>
    <div class="cart-product-container" ref="cart_container">


        <div class="cart-product" ref="cart_product">
                <div class="close" @click="close">X</div>


                <div class="cart-empty" v-if="cart.length <= 0">
                    <div> Ваша корзина пуста </div>
                    <svg height="200px" viewBox="0 0 480 480" width="200px" xmlns="http://www.w3.org/2000/svg" >
                        <path d="m480 72c0 39.765625-32.234375 72-72 72s-72-32.234375-72-72 32.234375-72 72-72 72 32.234375 72 72zm0 0" fill="#fab940"/>
                        <path d="m272 176h176c17.671875 0 32 14.328125 32 32s-14.328125 32-32 32h-416c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32h176" fill="#bc8f6f"/>
                        <path d="m448 200h-416c-13.425781 0-24.871094 8.28125-29.625 20 4.753906 11.71875 16.199219 20 29.625 20h416c13.425781 0 24.871094-8.28125 29.625-20-4.753906-11.71875-16.199219-20-29.625-20zm0 0" fill="#cb9e78"/>
                        <path d="m240 0c-17.671875 0-32 14.328125-32 32v160c0 17.671875 14.328125 32 32 32s32-14.328125 32-32v-160c0-17.671875-14.328125-32-32-32zm0 0" fill="#52575f"/>
                        <path d="m228 2.375c-11.71875 4.753906-20 16.199219-20 29.625v160c0 13.425781 8.28125 24.871094 20 29.625 11.71875-4.753906 20-16.199219 20-29.625v-160c0-13.425781-8.28125-24.871094-20-29.625zm0 0" fill="#666d77"/>
                        <path d="m448 240v208c0 17.671875-14.328125 32-32 32h-352c-17.671875 0-32-14.328125-32-32v-208" fill="#fab940"/><path d="m64 480h350.871094c.664062-2.566406 1.128906-5.222656 1.128906-8v-208h-384v184c0 17.671875 14.328125 32 32 32zm0 0" fill="#fab940"/>
                        <g fill="#fff"><path d="m184 432c-13.257812 0-24-10.742188-24-24v-96c0-13.257812 10.742188-24 24-24s24 10.742188 24 24v96c0 13.257812-10.742188 24-24 24zm0 0"/>
                            <path d="m104 432c-13.257812 0-24-10.742188-24-24v-96c0-13.257812 10.742188-24 24-24s24 10.742188 24 24v96c0 13.257812-10.742188 24-24 24zm0 0"/>
                            <path d="m296 432c-13.257812 0-24-10.742188-24-24v-96c0-13.257812 10.742188-24 24-24s24 10.742188 24 24v96c0 13.257812-10.742188 24-24 24zm0 0"/>
                            <path d="m376 432c-13.257812 0-24-10.742188-24-24v-96c0-13.257812 10.742188-24 24-24s24 10.742188 24 24v96c0 13.257812-10.742188 24-24 24zm0 0"/>
                        </g>
                        <path d="m360 64h96v16h-96zm0 0" fill="#fff"/>
                    </svg>
                </div> 

        </div>

        <div class="cart-product-overlay" @click="close" ref="cart_overlay" > </div>
    </div>
    

</template>

<script>

import { TweenMax } from 'gsap';
import { ADD_TO_CART, SUB_TO_CART} from '../../store/mutation-type'
import {cur} from '../../helpers/const.js'
import { eventEmmiter } from '../../main'

export default {
  name: 'Cart',
    data(){
        return{
            cur: cur,
            cartProduct: []
        }
    },
    components:{
    },
    props:{

    },
    created(){

        eventEmmiter.$on("openCart",()=>{
                this.open();
        })
    },
    computed: {
        cart(){
            return this.$store.getters.getCart
        },
        prod(){
            return this.$store.getters.getProduct(this.id !== undefined ? this.id : this.$route.params.product )
        },
    },
    methods:{

        addCart(id,price){
            this.$store.commit(ADD_TO_CART,{id,price});
        },
        subCart(id,price){
            this.$store.commit(SUB_TO_CART,{id,price});
        },

        open(){

            document.querySelector("body").style.overflow="hidden";
            this.$refs.cart_container.style.visibility  = 'visible';
            this.$refs.cart_container.style.zIndex  = '98';

            TweenMax.staggerFromTo(this.$refs.cart_product, 1, {
                x: '110%',
                delay: 0.5
            }, {
                x: "0px",
                delay: 0
            }, 0.05);

            TweenMax.staggerFromTo(this.$refs.cart_overlay, 1, {
                alpha: '0',
                delay: 0.5
            }, {
                alpha: "1",
                delay: 0
            }, 0.05,()=>{
                
            });

            

        },

        close(){
            TweenMax.staggerFromTo(this.$refs.cart_product, 1, {
                x: '0%',
                delay: 0.5
            }, {
                x: "110%",
                delay: 0
            }, 0.05);
            
             TweenMax.staggerFromTo(this.$refs.cart_overlay, 1, {
                    alpha: '1',
                    delay: 0.5
                }, {
                    alpha: "0",
                    delay: 0
                }, 0.05,()=>{
                    //bodyUnfixPosition() // для ios
                    this.$refs.cart_container.style.visibility  = 'hidden';
                    this.$refs.cart_container.style.zIndex  = '-1';
                    document.querySelector("body").style.overflow="";
                });
            } 
    },

}
</script>

<style scope>
.cart-empty{
    position: relative;
    height: 100vh;
    width: 100%;
}
.cart-empty > div{

    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%) 
}

.cart-empty svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) 
}

.cart-product-overlay{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        background-color: rgb(250 185 64 / 0.7);
        z-index: 98;
        opacity: 0;
        
    }
    .cart-product-container{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: -1;
        visibility: hidden;
    }

    .cart-product-info-contain{
        padding-left: 20px;
        padding-right: 20px;
        font-size: 18px;
        font-weight: 700;
    }

.cart-product-cat{
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

    .cart-product-title{
        padding: 20px;
    }
    .cart-product-desc{
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

    .cart-nav{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cart-product-price{
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

    .cart-product{
        height: 100vh;
        width: 100%;
        position: fixed;
        right: 0px;
        top: 0px;
        background-color: #fff;
        z-index: 99;
        overflow: auto;
        transform: translateX(110%);
        border-left: 1px solid rgb(155 4 12 / 0.7);
    }

    @media screen and (min-width: 768px){
        .cart-product{
            width: 76%;
        }
    }

    @media screen and (min-width: 996px){
        .cart-product{
            width: 50%;
        }
    }

</style>

