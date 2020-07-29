<template>
            <div class="container-wrapper">
            <!-- <div class="page-bg" style=" background-image: url(upload/bg-pizza.jpg); "></div> -->
            <div class="page-bg" :style="{backgroundImage: `url(${bgMenu})`}"></div> 
            <div id="container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <span class="page-title-icon flaticon-pizza-slice"></span>
                            <h1 class="page-title">Menu</h1>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>

                <MenuListItem 
                    :prodCat="prodCat"
                />

                <!-- end page wrapper -->
            </div>
            <!-- end container -->
            <div class="clear"></div>
        </div>
</template>
<script>
import menuBg from "../assets/img/bg-menu-of.jpg"
import { db } from '../main'
import MenuListItem from "./MenuListItem"
export default {
    name: 'MenuOffer',
    components:{
        MenuListItem
    },
    data(){
        return {
            bgMenu: menuBg,
            prodCat:[],
        }
    },
    props:{
    },
    created(){
        this.getProducts(this.prodCat);
    },
    methods:{
        getProducts: async (dataProd)=>{

            const refDoc = db.collection(' products').doc('pizza')

            await refDoc.get().then(doc=>{

               const catList = doc.data().catList;
               const catName = doc.data().catName;
        
               catList.forEach(async (item,index)=>{
                  
                  await refDoc.collection(item).get().then(prodVirt =>{

                    let prodBuf = prodVirt.docs.map(prod=>{
                            return prod.data()
                    })

                    dataProd.push({
                        cat: item,
                        catTitle: catName[index],
                        products: prodBuf
                    });

                   });
               })
               
               
            });
            
        },
    }
  }
</script>
<style>

.page-wrapper{
    overflow: hidden;
}

.single-offer-category-filter {
    float: left;
    list-style: none;
    text-align: right;
    border-right: 1px solid #242424;
    padding-right: 20px;
    width: 120px;
}

ul.single-offer-category-filter li {
       margin-left: 0;
}

.offer-menu-items {
    margin-left: 140px;
    position: relative;
    height: 510px;
    transition: height 600ms ease;
}

.single-offer-category-filter li  {
    margin: 10px 0;
}

.single-offer-category-filter li a {
    text-transform: uppercase;
    font-family: 'Patua One', cursive;
    font-size: 16px;
    line-height: 1;
}

.single-offer-category-filter li a.selected {
    color: #fab940;
}

#fullwidth-container {
    width: 100%;
    float: left;
    margin-top: 100px;
    z-index: 2;
    position: relative;
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
    position: absolute;
    top: 28px;
    left: 43px;
}
.single-offer-category-item{
    transition: all 600ms ease;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0px;
    left: 0px;
    transform: scale3d(0, 0, 1);
    visibility: hidden;
}
.single-offer-category-item.active{
    transition: all 600ms ease;
    transform: scale3d(1, 1, 1);
    visibility: visible;
}

.get_height{
    visibility: hidden;
    transform: scale3d(1, 1, 1);
    transition: all 0ms ease;
}
.offer-menu2-shadow {
    /* background: url(../images/shadow-frame.png) no-repeat; */
    width: 369px;
    height: 17px;
    margin-top: -10px;
    margin-bottom: 10px;
}

.single-offer-title {
    font-size: 22px;
    color: #242424;
    font-family: 'Patua One', cursive;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.single-offer-details {
    float: left;
    width: 420px;
	margin-right: 10px;
}

.single-offer-details p { margin-bottom: 0; }

.single-offer-price {
    float: left;
    width: 80px;
    font-size: 30px;
    color: #fab940;
    font-family: 'Patua One', cursive;
    line-height: 1;
    text-align: right;
}

.single-offer-item { margin-bottom: 30px; }

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

.archive .offer-menu-items {
    margin-left: 0;
}
.archive .single-offer-details {
    width: 560px;
}

.offer-menu2-items .offer-menu2-item-single:nth-child(3n+1){
   clear: both;
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

</style>