<template>
    <transition name="fade">
        <div class="product-mini-item-container" :key="prodItem.id" v-if="isShow">
            <div class="product-mini-item-preview" :style="{backgroundImage: `url(${prodItem.preview})`}"></div>
            <div class="product-mini-item-info">
                <div class="product-mini-item-title">{{prodItem.title}}</div>
                <div class="product-mini-item-price">
                    Price for one: {{prodItem.price.toFixed(2)}}{{cur}}
                </div>
                <div class="product-mini-item-price product-mini-item-price__full">
                    Price: {{(prodItem.price*prodItem.count).toFixed(2)}}{{cur}}
                </div>
                <div class="product-mini-item-user-wishes form-control">
                    <input @blur="handlerWishes" v-model="wishes" class="input input_h26 input-wishes" type="text" placeholder="Wishes">
                </div>
            </div>

       
            <div class="product-mini-item-cart__btn-wrapper">
                <button class="product-btn product-sub" @click="subCart(prodItem.id,prodItem.price)">-</button>
                <div class="single-offer-menu2-count">{{prodItem.count}}</div>
                <button class="product-btn product-add" @click="addCart(prodItem.id,prodItem.price)">+</button>
            </div>
            <div class="product-mini-item-del" @click="delItem(prodItem.id,prodItem.price)">×</div>
        </div>
    </transition>
    
</template>

<script>

import { ADD_TO_CART, SUB_TO_CART, DEL_TO_CART,CHANGE_WISHES_TO_CART } from '../../store/mutation-type'
import {cur} from '../../helpers/const.js'

export default {
    name: 'ProductMiniItem',
    data(){
        return{
            cur: cur,
            isShow: true,
            wishes:"",
        }
    },
    props:{
        prodItem:{
             type: Object,
             required: true
         }
    },
    mounted(){

        if(typeof this.prodItem.wishes !== undefined){
            this.wishes = this.prodItem.wishes
        }

    },
    methods:{

        addCart(id,price){
            this.$store.commit(ADD_TO_CART,{id,price});
        },

        handlerWishes(){
            this.$store.commit(CHANGE_WISHES_TO_CART,{
                id: this.prodItem.id,
                wishes: this.wishes.length > 250 ? this.wishes.substring(0,250) : this.wishes
            });
        },

        subCart(id,price){

            if(this.prodItem.count - 1 <=0){
                this.isShow = false;
                setTimeout(()=>{
                    this.$store.commit(SUB_TO_CART,{id,price});
                },310)
            } else{
                this.$store.commit(SUB_TO_CART,{id,price});
            }
            
        },

        delItem(id,price){
            this.isShow = false;
            setTimeout(()=>{
                this.$store.commit(DEL_TO_CART,{id,price});
            },310)
        }
    },
}
</script>

<style scope lang="sass">

.input
    border: 1px solid #fab940
    border-radius: 26px
    padding-left: 10px
    padding-right: 10px
    height: 40px
    width: 100%;
    &.input_h26
        height: 26px
.mx-datepicker
    height: 40px
    width: 100%
.mx-input-wrapper > input
    border: 1px solid #fab940
    border-radius: 26px
    padding-left: 6px
    padding-right: 6px
    height: 40px
    width: 100%
.form-control-error
    color: red

.fade-enter-active, .fade-leave-active
    transition: opacity .5s

.fade-enter, .fade-leave-to
    opacity: 0

.single-offer-menu2-count
    margin-left: 6px;
    margin-right: 6px;
    color: #9b040c;
    font-weight: bold;
    font-size: 18px;
.product-mini-item-cart__btn-wrapper
    display: flex
    justify-content: space-between
    align-items: center
    max-width: 100px
    width: 100%
.product-mini-item
    &-container
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap
        width: 100%
        min-height: 80px
        padding: 
            top: 8px;
            left: 14px
            right: 14px
            bottom: 8px
    &-preview
        width: 120px
        height: 120px
        background-size: cover
        background-repeat: no-repeat
        margin-right: 6px
    &-info
        width: calc(100% - 130px)
    &-title
        font-weight: bold
    &-price__full
        color: #9b040c
    &-del
        width: 16px
        height: 16px
        border-radius: 16px
        background-color: #fab940
        transition: background-color 400ms ease
        cursor: pointer
        color: #fff
        display: flex
        align-items: center
        justify-content: center
        &:hover
            background-color: #9b040c
            transition: background-color 400ms ease

.product-btn
    border-radius: 100%;
    border: 4px solid #fab940;
    background-color: #9b040c;
    cursor: pointer;
    color: #fab940;
    width: 32px;
    height: 32px;
    transition: all 450ms ease;

.product-btn:hover
    border: 2px solid #fab940;
    transition: all 450ms ease;

@media screen and (min-width: 420px)
    .product-mini-item
        &-container
            flex-wrap: nowrap
        &-preview
            width: 80px
            height: 80px
            background-size: cover
            background-repeat: no-repeat
        &-info
            width: auto

</style>

