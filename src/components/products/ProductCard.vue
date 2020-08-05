<template>
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
            <div class="single-offer-menu2-title">{{product.title}}</div>
            <div class="single-offer-menu2-content">
                <p>{{product.composition}}</p>
            </div>
            <div class="single-offer-menu2-price">{{product.price}}</div>

            <div class="single-offer-menu2-nav">
            <button class="product-open">Подробно</button>
            <div class="single-offer-menu2-cart--btn">
                <button class="product-btn product-sub" @click="subCart(product.id,product.price)">-</button>
                <div class="single-offer-menu2-count">{{product.count}}</div>
                <button class="product-btn product-add" @click="addCart(product.id,product.price)">+</button>
            </div>
            </div>
        </div>
    </div>
                           
</template>

<script>

import { ADD_TO_CART, SUB_TO_CART } from '../../store/mutation-type'

export default {
  name: 'ProductCard',

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

