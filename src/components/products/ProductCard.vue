<template>
    <div class="offer-menu2-item-single offer-menu2-item-single--def">
        
        <img class="offer-menu2-frame" src="https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/images%2Fdesign%2Fframe-v2.png?alt=media&token=67f31d41-82d7-4157-8768-c162caf2defa" />
        <div class="offer-menu2-thumb-image">
            <img :src="product.image" width="313" height="220" alt="" />
        </div>
        <div class="clear"></div>
        <span class="offer-menu2-icon flaticon-pizza-slice">
            <svg  enable-background="new 0 0 512 512" class="tada" :style="{animationDelay: `${Math.floor(Math.random() * (10 - 1 + 1)) + 1}s`}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m408.635 409.475-408.635 102.525 102.525-408.635s95.892-116.128 258.854 46.834 47.256 259.276 47.256 259.276z" fill="#fed841"/><path d="m0 512 408.635-102.525s115.603-96.23-47.046-259.064z" fill="#fdb118"/><path d="m188.963 397.908c-34.544 8.889-55.427 43.905-46.972 78.457l126.194-31.662c-8.955-34.798-44.424-55.75-79.222-46.795z" fill="#ff1f2e"/><path d="m392.636 119.365c-71.347-71.348-164.344-113.18-264.177-119.365l-25.934 103.365c28.552 0 59.612-21.829 85.965-14.762 27.241 7.304 43.154 41.975 67.021 55.806 24.195 14.021 62.125 10.654 81.775 30.305 19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.935c-6.185-99.833-48.018-192.83-119.364-264.176z" fill="#bf5c15"/><path d="m392.636 119.364-55.35 55.349c19.65 19.65 16.284 57.58 30.305 81.775 13.831 23.867 48.502 39.78 55.806 67.021 7.067 26.353-14.762 57.414-14.762 85.966l103.365-25.934c-6.185-99.833-48.018-192.83-119.364-264.177z" fill="#994910"/><ellipse cx="235.859" cy="276.141" fill="#ff4d55" rx="62.982" ry="62.982" transform="matrix(.099 -.995 .995 .099 -62.179 483.642)"/><path d="m191.324 320.676c11.398 11.398 27.143 18.447 44.535 18.447 34.784 0 62.982-28.198 62.982-62.982 0-17.392-7.049-33.138-18.447-44.535z" fill="#ff1f2e"/><path d="m65.73 250.016-26.951 107.42c29.733 7.182 59.658-11.1 66.84-40.833 7.105-29.415-10.719-59.002-39.889-66.587z" fill="#ff4d55"/><path d="m82.649 400.373h28.978v28.987h-28.978z" fill="#7ad425"/><path d="m82.649 429.351v.008h28.979v-28.986z" fill="#6ebd21"/><path d="m310.241 343.483h28.978v28.987h-28.978z" fill="#6ebd21"/><path d="m145.225 167.085h28.978v28.987h-28.978z" fill="#7ad425"/></g></svg>
        </span>
        <div class="offer-menu2-details">
            <div class="single-offer-menu2-title">{{product.title}}</div>
            <div class="single-offer-menu2-content">
                <p>{{product.composition}}</p>
            </div>
            <div class="single-offer-menu2-price">{{product.price.toFixed(2)}} {{cur}}</div>

            <div class="single-offer-menu2-nav">
                <router-link to="/products/pizza/pr-1">
<button class="product-open">Подробно</button>
                </router-link>
            
            <div class="single-offer-menu2-cart--btn">
                <button class="product-btn product-sub" @click="subCart(product.id,product.price.toFixed(2))">-</button>
                <div class="single-offer-menu2-count">{{product.count}}</div>
                <button class="product-btn product-add" @click="addCart(product.id,product.price.toFixed(2))">+</button>
            </div>
            </div>
        </div>
    </div>
                           
</template>

<script>

import { ADD_TO_CART, SUB_TO_CART } from '../../store/mutation-type'
import {cur} from '../../helpers/const.js'

export default {
  name: 'ProductCard',
    data(){
        return{
            cur: cur
        }
    },
    props:{
         product:{
             type: Object,
             required: true
         }
    },

    mounted(){
        console.log("prod",this.product)
    },
    computed: {
        cart(){
            return this.$store.getters.getCart
        }
    },
    methods:{
        addCart(id,price){
            this.$store.commit(ADD_TO_CART,{id,price});
        },
        subCart(id,price){
            this.$store.commit(SUB_TO_CART,{id,price});
        }
  },
}
</script>

<style>
.offer-menu2-thumb-image img{
    height: 220px;
}
.offer-menu2-item-single--def .offer-menu2-icon.flaticon-pizza-slice svg{
    width: 55px;
    height: 55px;
   -webkit-animation-duration: 5s;
    animation-duration: 5s; 
    -webkit-animation-fill-mode: both; 
    animation-fill-mode: both;
    animation-iteration-count: infinite; 
}

         @-webkit-keyframes tada { 
            0% {-webkit-transform: scale(1);}
            10%, 20% {-webkit-transform: scale(0.9) rotate(-3deg);} 
            30%, 50%, 70%, 90% {-webkit-transform: scale(1.1) rotate(3deg);}
            40%, 60%, 80% {-webkit-transform: scale(1.1) rotate(-3deg);} 
            100% {-webkit-transform: scale(1) rotate(0);} 
         }
         
         @keyframes tada { 
            0% {transform: scale(1);} 
            10%, 20% {transform: scale(0.9) rotate(-3deg);} 
            30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);} 
            40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);} 
            100% {transform: scale(1) rotate(0);}
         }
         
         .tada { 
            -webkit-animation-name: tada; 
            animation-name: tada; 
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
    position: relative;
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
        width: 100%;
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
  align-items: center;
  justify-content: space-between;
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

    .offer-menu2-frame{
        display: none;  
    }

    .offer-menu2-thumb-image{
        border: 3px solid #96603d
    }

    .pizza-wow > div{
        width: 100%;
    }


@media screen and (min-width: 651px){
    .offer-menu2-thumb-image{
        border: none;
        margin-bottom: 32px;
        text-align: center;
    }
}

@media screen and (min-width: 768px){
    .pizza-wow > div{
        width: 50%;
    }
    .offer-menu2-thumb-image{
        border: none;
        margin-bottom: 32px;
        text-align: left;
    }
}

@media screen and (min-width: 1161px){
    .offer-menu2-frame{
        display: block;  
    }

    .offer-menu2-thumb-image{
        border: none
    }

    
    .offer-menu2-thumb-image {
        position: absolute;
    }
}



</style>

