<template>

    <div class="page-wrapper">
        
            <div class="offer-menu-wrapper">
                <ul id="filters" class="single-offer-category-filter option-set" data-option-key="filter" ref="singleOfferCategoryLink">
                    <li class="filter-cat" v-for="(item,index) in prodCat" :key="item.cat">
                        <a :class="['', index===0 ? 'selected':'']" @click="tabs(item.cat)">{{item.catTitle}}</a>
                    </li>
                </ul>

                <div class="offer-menu-items" ref="singleOfferCategoryItem">

                        <div  v-for="(item,index) in prodCat" :key="`${item.cat}-per-cat`"  :class="['single-offer-category-item', 'isotope-item',item.cat , index === 0 ? 'active':'']">
                            <div class="single-offer-item" v-for="(itemProd) in item.products" :key="itemProd.title">
                                 
                                
                                    <div  class="single-offer-details">
                                        <div class="single-offer-title">{{itemProd.title}}</div>
                                        <div class="single-offer-content">
                                            <p>{{itemProd.composition}}</p>
                                        </div>
                                    </div>
                                    <div class="single-offer-price">${{itemProd.price.toFixed(2)}}</div>
                                    <div class="clear"></div>
                                

                            </div>
                        </div>
                   

                </div>
                <div class="clear"></div>
            </div>
    </div>

</template>
<script>

export default {
    name: 'MenuListItem',

    props:{
         prodCat:{
             type: Array,
             required: true
         }
    },

    mounted(){

        setTimeout(()=>{
           this.$refs.singleOfferCategoryItem.style.height = document.querySelector(".single-offer-category-item.active").clientHeight+"px";
        },1000)
        
    },
    methods:{
        tabs(cat){
            const tabs = this.$refs.singleOfferCategoryItem;
            const tabsLink = this.$refs.singleOfferCategoryLink.children;
            //let h_buf = 0; filter-cat
            console.log("tabsLink----------->",tabsLink)
            tabs.children.forEach((element,index) => {

                element.classList.remove("active")
                tabsLink[index].children[0].classList.remove("selected");

                if(element.classList.contains(cat)){
                
                    element.classList.add("active");
                     tabsLink[index].children[0].classList.add("selected");    
                   // setTimeout(()=>{
                       
                        tabs.style.height = element.clientHeight+"px";
                    //},605)
                }
            });

            
        }
    }
  }
</script>
<style>

    .page-wrapper{
        overflow: hidden;
    }

    .slideMenu-enter-active {
        -moz-transition-duration: 2s!important;
        -webkit-transition-duration: 2s!important;
        -o-transition-duration: 2s!important;
        transition-duration: 2s!important;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slideMenu-leave-active {
        -moz-transition-duration: 2s!important;
        -webkit-transition-duration: 2s!important;
        -o-transition-duration: 2s!important;
        transition-duration: 2s!important;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slideMenu-enter-to, .slideMenu-leave {
        max-height: 100vh;
        overflow: hidden;
    }

    .slideMenu-enter, .slideMenu-leave-to {
        overflow: hidden;
        max-height: 0;
    }

    .filter-cat{
        cursor: pointer;
    }

    #filters{
        position: relative;
        z-index: 10;
    }

</style>