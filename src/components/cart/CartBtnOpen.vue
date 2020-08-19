<template>
    <button class="cart-open" @click="open">
        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" 
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 512.008 512.008" xml:space="preserve">

            <path d="M508.288,85.764c-3.04-3.648-7.552-5.76-12.288-5.76H119.936l-13.92-52.128c-1.856-7.008-8.192-11.872-15.456-11.872H16
                c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h62.272l13.76,51.552c0.032,0.192-0.032,0.384,0.032,0.608l51.2,191.36
                c0,0.032,0.032,0.032,0.032,0.064l17.248,64.544c1.856,7.008,8.192,11.872,15.456,11.872h256c8.832,0,16-7.168,16-16
                c0-8.832-7.168-16-16-16H188.288l-8.992-33.664L464.8,287.972c7.392-0.384,13.6-5.792,14.944-13.088l32-176
                C512.608,94.18,511.328,89.38,508.288,85.764z M224,224.004c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-64
                c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16V224.004z M320,224.004c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-64
                c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16V224.004z M416,224.004c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-64
                c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16V224.004z"
            />
            <circle cx="208" cy="448.004" r="48"/>
            <circle cx="400" cy="448.004" r="48"/>
        </svg>
        <div class="cart-counter">
            {{cart}}
        </div>
    </button>
</template>

<script>

import { eventEmmiter } from '../../main'

export default {
    name: 'CartOpenBtn',
    methods:{
        open(){
            eventEmmiter.$emit('openCart')
        }
    },
    computed: {
        cart(){
            
            const cart = this.$store.getters.getCart;
            let countFull = 0;

            if(cart.length > 0){

                cart.forEach(({count})=>{
                    countFull += count;
                })
            }

             return countFull;
            
        }
    },
}
</script>

<style scope lang="sass">
    .cart-open
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 95;
        width: 46px;
        height: 46px;
        border: 1px solid #9b040c;
        padding: 10px;
        background-color: #fab940
        display: flex
        align-items: center;
        justify-content: center
        border-radius: 46px
        cursor: pointer
        transition: transform 300ms ease
        transform: scale(1)
        &:hover
            transition: transform 300ms ease
            transform: scale(0.8)
        svg
            width: 100%
            height: 100%
            fill: #fff
        .cart-counter
            min-width: 12px
            min-height: 12px
            border-radius: 100%
            background-color: #9b040c
            color: #fff
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 1px;
            right: -1px;
            font-size: 11px;

</style>

