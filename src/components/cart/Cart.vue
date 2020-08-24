<template>
    <div class="cart-product-container" ref="cart_container">
        
        <div class="cart-product" ref="cart_product">
                <div class="cart-preview">
                    <img :class="['cart-preview__full', isOpen === true ? 'slideInDown':'']" src="@/assets/img/cart-img.jpg" alt="">
                    <p>Cart</p>
                    <img class="cart-preview__decor" src="@/assets/img/single-top-border.png" alt="">
                </div>
                <div class="close" @click="close">×</div>

                <div class="cart-order-wrapp" v-if="cart.length > 0">
                    <div class="cart-products" >
                        <ProductMiniItem
                                v-for="item in cart"
                                :key="item.url"
                                :prodItem = "item"
                        />
                    </div>
                    <form action="#" class="cart-order">
                        <p class="form-title"> Заполните форму для оформления заказа: </p>
                        <!-- https://www.npmjs.com/package/vue2-datepicker -->
                        <!-- https://www.npmjs.com/package/vue-input-mask -->
                        <div class="row">
                            <div class="col-6">
                                <div class="form-control">
                                    <input 
                                        v-model="name" 
                                        class="input input-name" 
                                        type="text" 
                                        placeholder="Name"
                                        @blur="handlerInputValid('name')"
                                    >
                                    <transition name="input-error-anim">
                                        <div class="form-control-error" v-if="$v.name.$error">

                                            <div class="error" v-if="!$v.name.required">
                                                {{error.required}}
                                            </div>
                                            <div class="error" v-if="!$v.name.minLength">
                                                {{error.minLength}} {{$v.name.$params.minLength.min}}
                                            </div>

                                        </div>
                                    </transition> 

                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-control">
                                    <input-mask 
                                        v-model="phone" 
                                        mask="+49(999)-999-99-99" 
                                        maskChar="" 
                                        placeholder="Phone"
                                        class="input"
                                        @blur="handlerInputValid('phone')"
                                    >
                                    </input-mask>
                                    
                                    <transition name="input-error-anim">
                                        <div class="form-control-error" v-if="$v.phone.$error">

                                            <div class="error" v-if="!$v.phone.required">
                                                {{error.required}}
                                            </div>
                                            <div class="error" v-if="!$v.phone.minLength">
                                                {{error.minLength}} {{$v.phone.$params.minLength.min}}
                                            </div>

                                        </div>
                                    </transition> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-control">
                                    <date-picker 
                                        placeholder="Date"
                                        v-model="dateTime"
                                        @blur="handlerInputValid('dateTime')" 
                                        type="datetime" 
                                        format="YYYY/MM/DD HH:mm"
                                        :default-value="new Date().setHours(11, 0, 0, 0)"
                                        :disabled-time="excludeTime"
                                        :disabled-date="excludeDay"
                                        :time-picker-options="{
                                            start:  `${timeStart}:00`,
                                            step:   '00:30',
                                            end:    `${timeEnd}:30`,
                                        }"
                                    >
                                    </date-picker>
                                    <transition name="input-error-anim">
                                        <div class="form-control-error" v-if="$v.dateTime.$error">
                                            <div class="error" v-if="!$v.dateTime.required">
                                                {{error.required}}
                                            </div>
                                        </div>
                                    </transition> 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-control">
                                    <input 
                                        v-model="adress" 
                                        class="input input-adress" 
                                        type="text" 
                                        placeholder="Adress"
                                        @blur="handlerInputValid('adress')"
                                    >
                                    <transition name="input-error-anim">
                                        <div class="form-control-error" v-if="$v.adress.$error">

                                            <div class="error" v-if="!$v.adress.required">
                                                {{error.required}}
                                            </div>
                                            <div class="error" v-if="!$v.adress.minLength">
                                                {{error.minLength}} {{$v.adress.$params.minLength.min}}
                                            </div>
                                            <div class="error" v-if="!$v.adress.maxLength">
                                                {{error.maxLength}} {{$v.adress.$params.maxLength.min}}
                                            </div>

                                        </div>
                                    </transition> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 button-form-wrap">
                    
                                    <button class="product-open sebd-btn" @click.prevent="sendForm">Send</button>
                            
                                    <div class="form-status">

                                        <transition name="input-error-anim">
                                            <svg 
                                                v-if="formStatus === 'loading'"
                                                xmlns="http://www.w3.org/2000/svg" class="form-loader" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                                <circle cx="50" cy="50" r="0" fill="none" stroke="#242424" stroke-width="2">
                                                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                                                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                                                </circle>
                                                <circle cx="50" cy="50" r="0" fill="none" stroke="#9b040c" stroke-width="2">
                                                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                                                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
                                                </circle>
                                            </svg>
                                        </transition>

                                        <transition name="input-error-anim" >
                                            <span v-if="formStatus !== 'empty'"> 
                                                {{error.formStatus[formStatus]}}   
                                            </span>    
                                        </transition>
                                
                                
                                
                                </div>
                            </div>
                        </div>




                    </form>
                </div>


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

                <!-- <div class="cart-loading" ref="cart_loading" v-if="dataCart.length <= 0 && isLoadCart === true">
                    загрузка
                </div> -->

        </div>

        <div class="cart-product-overlay" @click="close" ref="cart_overlay" > </div>
    </div>
    

</template>

<script>

import { TweenMax } from 'gsap';
import InputMask from 'vue-input-mask';
const { required, minLength,maxLength} = require('vuelidate/lib/validators')
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import { ADD_TO_CART, SUB_TO_CART} from '../../store/mutation-type'

import {cur,error} from '../../helpers/const.js'
import {hashCode} from '../../helpers/function'
//import {formError} from '../../helpers/form'
import {eventEmmiter } from '../../main'
import ProductMiniItem from "../products/ProductMiniItem"

export default {
  name: 'Cart',
    data(){
        return{
            cur: cur,
            cartProduct: [],
            isOpen: false,

            name: '',
            phone: '',
            dateTime: null,
            adress:'',
            
            timeStart: 10,
            timeEnd: 19,
            
            error,
            formStatus: "empty"

            
        }
    },
    components:{
        ProductMiniItem,
        InputMask,
        DatePicker
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
    },
    methods:{

        hash_code(str){return hashCode(str)},

        sendForm(){

            //this.formStatus = "loading";
            let flagError = false;

            if(this.$v.$anyDirty === false){

                 this.formStatus = "warning"
                
            } else{
                
                const keys = Object.keys(this.$v.$params);

                for(let i =0;i<keys.length;i++){

                    if(this.$v[keys[i]].$error === true){
                        this.formStatus = "warning"
                        flagError = true;
                        break;
                    }
                }

                // keys.forEach(key=>{
                //     if(this.$v[key].$error === true){
                //         this.formStatus = "warning"
                //         flagError = true;
                //         break;
                //     }
                // });

                if(flagError === false){

                    this.formStatus = "loading";

                    setTimeout(()=>{
                        this.formStatus = "send";
                        setTimeout(() => { 
                            this.$v.$reset();
                             
                        }, 0)
                    },5000);
                }
                
            
            }
        },

        addCart(id,price){
            this.$store.commit(ADD_TO_CART,{id,price});
        },
        subCart(id,price){
            this.$store.commit(SUB_TO_CART,{id,price});
        },

        handlerInputValid(key){
            this.$v[key].$touch();
             console.log(`valid key:${key}`,this.$v)
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
                this.isOpen = true;
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
                    this.isOpen = false;
                });
        },
        
        excludeDay(date) {

            const today = new Date();

            if(today.getHours()>= this.timeEnd ){
                today.setDate(today.getDate() + 1)
            }

            today.setHours(0, 0, 0, 0);

            return date < today;

        },

        excludeTime(date) {
            const dateNow = new Date();
            if( date.getDay() > dateNow.getDay() ){
                return date.getHours() < 0;
            }

             return date.getHours() < dateNow.getHours();
            
        },


    },

      validations: {
        name: {
            required,
            minLength: minLength(4),
        },
        phone: {
            required,
            minLength: minLength(18),
        },
        dateTime:{
            required,
        },
        adress:{
             required,
             minLength: minLength(6),
             maxLength: maxLength(120),
        }

  }

}
</script>

<style scope>
    .col-6{
        width: 100%;
        padding: 10px;
    }

    .col-12{
        width: 100%;
        display: flex;
    }

    .row{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-form-wrap{
        position: relative;
        justify-content: center;
        padding-bottom: 30px;
        overflow: hidden;
    }
    @media screen and (min-width: 768px) {

        .col-6{
            width: 50%;
        }

        .row{
            flex-direction: row;
        }

        .button-form-wrap{
            justify-content: flex-end;
        }
    }

.sebd-btn{
    width: 120px;
    padding: 12px!important;
}
.form-status{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
}
.form-status svg{
    width: 26px;
    height: 26px;
}
.cart-order{
    padding-left: 14px;
    padding-right: 14px;
    margin-bottom: 26px;
}
.form-title{
    font-weight: bold;
}
.form-control{
    position: relative;
    overflow: hidden;
    padding-bottom: 26px;
}
.form-control-error{
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    color: red;
}
.cart-preview{
    position: relative;
    width: 100%;
    height: 234px;
}

.input-error-anim-leave-active,
.input-error-anim-enter-active {
  transition: 1s;
}
.input-error-anim-enter {
  transform: translate(100%, 0);
}
.input-error-anim-leave-to {
  transform: translate(-100%, 0);
}

.overflov_h{
    overflow: hidden;
}


.cart-preview > p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    color: #fab940;
    font-weight: bold;
    font-family: 'Patua One', cursive;
    font-size: 50px;
    text-shadow: 1px 1px 2px black, 0 0 1em red;
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
    }
.cart-preview__full{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    transform: translate3d(0, -100%, 0);
    animation-delay: 400ms;
}
.cart-preview__decor{
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 2;
    left: 0px;
    bottom: -20px;
}

.cart-empty,.cart-loading{
    position: relative;
    height: 100vh;
    width: 100%;
}

.cart-loading{
    opacity: 0;
    z-index: -1;
}

.cart-empty > div,.cart-loading > div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) 
}

.cart-empty svg, .cart-loading svg{
    position: absolute;
    top: 30%;
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

