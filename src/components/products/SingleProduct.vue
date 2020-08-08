<template>
    <div class="single-product-container">
        <div class="single-product">
            <div class="close" @click="$router.go(-1)">X</div>
            <h1>Product</h1>
        </div>
        <!-- <div class="single-product-overlay" @click="$router.go(-1)"> </div> -->
    </div>
    

</template>

<script>

import { ADD_TO_CART, SUB_TO_CART } from '../../store/mutation-type'
import {cur} from '../../helpers/const.js'

export default {
  name: 'SingleProduct',
    data(){
        return{
            cur: cur,
            show: true
        }
    },
    props:{
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
        },

        close(){
            this.$router.go(-1)
        }

    //   beforeEnter: function (el) {
    //     el.style.transform = 'translateX(-110%)'
    //     },

    //     enter: function (el, done) {
    //         Velocity(el, { translateX: '0px' },{ duration: 300 }, { complete: done })
    //     },

    //     leave: function (el, done) {
    //         Velocity(el, {
    //             translateX: '-110%',
    //         },{ duration: 300 }, { complete: done })
    //      },  
    }
}
</script>

<style>
    .single-product-overlay{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        background-color: rgb(155 4 12 / 0.7);
        z-index: 98;
    }
    .single-product-container{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 98;
    }
    .single-product{
        height: 100vh;
        width: 50%;
        position: fixed;
        right: 0px;
        top: 0px;
        background-color: #fff;
        z-index: 99;
    }

</style>

