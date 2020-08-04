<template>
            <div class="container-wrapper">
            <!-- <div class="page-bg" style=" background-image: url(upload/bg-pizza.jpg); "></div> -->
            <div class="page-bg" :style="{backgroundImage: `url(${bgMenu})`}"></div> 
            <div id="container">
                <!-- start container -->
                <div class="page-title-wrapper">
                    <div class="page-title-outher">
                        <div class="page-title-inner">
                            <svg  class="page-title-icon flaticon-pizza-slice" enable-background="new 0 0 512.003 512.003" viewBox="0 0 512.003 512.003" xmlns="http://www.w3.org/2000/svg">
                                <path d="m386.279 111.831c3.536 2.353 8.259 2.19 11.636-.38 3.181-2.421 4.598-6.666 3.568-10.517-1.104-4.129-4.846-7.163-9.113-7.394-4.247-.23-8.267 2.354-9.831 6.303-1.705 4.303-.151 9.438 3.74 11.988z"/>
                                <path d="m429.848 131.761c-3.338-4.399-9.609-5.264-14.011-1.923-4.399 3.337-5.261 9.61-1.923 14.011 39.529 52.112 61.093 113.87 62.589 179.033l-38.835 12.324c-4.112-29.492-10.702-56.996-19.635-81.911-.001-.002-.001-.004-.002-.006-9.099-25.404-20.867-48.756-34.98-69.41-.005-.007-.009-.013-.013-.02-47.371-69.326-122.763-111.476-224.21-125.394l12.371-38.384c65.514 1.462 127.636 22.738 180.094 61.755 1.793 1.333 3.885 1.977 5.96 1.977 3.054 0 6.069-1.395 8.032-4.033 3.296-4.432 2.375-10.695-2.057-13.992-57.864-43.039-126.778-65.788-199.286-65.788-4.341 0-8.187 2.801-9.518 6.933l-76.8 238.298-26.516 82.265c-.017.053-.033.107-.049.16l-33.998 105.49c-3.909 12.145-.734 25.316 8.286 34.375 9.111 9.149 22.434 12.405 34.772 8.488l146.18-46.393v40.064c0 22.72 18.271 41.698 40.729 42.307.395.011.79.017 1.184.017 11.026 0 21.391-4.196 29.295-11.89 8.12-7.903 12.593-18.477 12.593-29.773v-67.322l52.53-16.672v45.353c0 19.426 15.898 35.229 35.44 35.229 9.441 0 18.327-3.653 25.028-10.296 6.707-6.665 10.401-15.52 10.401-24.934v-67.844l76.112-24.152c4.154-1.317 6.976-5.174 6.976-9.531 0-72.242-23.078-140.852-66.739-198.411zm-59.205 69.603c10.08 15.716 18.775 33.018 25.935 51.604-4.179 2.257-8.886 3.461-13.719 3.461-15.925 0-28.88-12.955-28.88-28.88 0-11.349 6.72-21.517 16.664-26.185zm-267.268 110.596c-8.033 7.971-18.872 11.879-29.819 11.092l22.67-70.34c2.583 1.567 4.985 3.441 7.141 5.58 7.232 7.176 11.214 16.709 11.214 26.843-.001 10.128-3.98 19.655-11.206 26.825zm-32.745 139.726c.143-15.604 12.881-28.257 28.519-28.257 9.317 0 17.881 4.594 23.145 11.862zm162.174-56.755c-14.619 14.509-38.406 14.508-53.025 0-7.058-7.003-10.943-16.308-10.943-26.2 0-9.894 3.886-19.198 10.943-26.202 7.31-7.254 16.911-10.881 26.513-10.881s19.203 3.627 26.513 10.881c7.057 7.003 10.943 16.309 10.943 26.202-.001 9.892-3.887 19.198-10.944 26.2zm167.669-47.922c-4.153 1.319-6.974 5.175-6.974 9.531v75.16c0 4.047-1.598 7.863-4.49 10.738-2.922 2.896-6.807 4.491-10.939 4.491-8.514 0-15.44-6.832-15.44-15.229v-59.02c0-3.189-1.522-6.186-4.095-8.07-2.573-1.883-5.891-2.426-8.931-1.461l-72.53 23.021c-4.153 1.318-6.975 5.174-6.975 9.531v74.64c0 5.852-2.323 11.335-6.542 15.44-4.284 4.17-9.936 6.391-15.987 6.214-11.729-.318-21.271-10.328-21.271-22.315v-47.439c7.517-2.76 14.565-7.131 20.593-13.113 0 0 0 0 0-.001 10.869-10.786 16.855-25.133 16.855-40.397 0-15.265-5.986-29.611-16.855-40.397-22.387-22.217-58.813-22.218-81.201-.001-10.87 10.786-16.855 25.134-16.855 40.398s5.985 29.611 16.855 40.397c3.493 3.466 7.328 6.392 11.397 8.777l-35.156 11.158c-8.322-15.477-24.719-25.631-42.783-25.631-26.754 0-48.52 21.767-48.52 48.521 0 1.892.109 3.772.325 5.636-4.218.404-8.335-1.063-11.435-4.177-3.771-3.788-5.05-9.072-3.421-14.133l31.203-96.817c3.019.471 6.045.705 9.057.705 15.168 0 29.926-5.913 41.105-17.007 11.038-10.954 17.117-25.523 17.117-41.022 0-15.505-6.082-30.08-17.126-41.039-4.396-4.363-9.472-7.999-14.983-10.763l50.123-155.522c92.169 11.962 161.537 47.925 206.497 107.028-15.118 8.474-25.113 24.716-25.113 42.711 0 26.952 21.928 48.88 48.88 48.88 7.099 0 14.037-1.537 20.373-4.442 6.763 21.378 11.821 44.622 15.087 69.354z"/>
                                <path d="m269.769 169.329c0-16.081-6.307-31.195-17.758-42.56-23.588-23.406-61.969-23.406-85.557 0-11.451 11.364-17.758 26.478-17.758 42.56 0 16.081 6.307 31.195 17.758 42.56 11.794 11.703 27.286 17.555 42.778 17.555s30.984-5.852 42.778-17.555c11.452-11.365 17.759-26.479 17.759-42.56zm-31.846 28.362c-15.82 15.699-41.561 15.699-57.381 0-7.64-7.58-11.846-17.652-11.846-28.362s4.206-20.782 11.846-28.362c7.91-7.85 18.3-11.774 28.69-11.774 10.391 0 20.78 3.925 28.69 11.774 7.64 7.58 11.846 17.652 11.846 28.362.001 10.71-4.205 20.782-11.845 28.362z"/>
                                <path d="m308.857 255.15c-20.34-21.006-54.085-21.444-75.224-.978-1.905 1.846-3 4.372-3.043 7.023-.042 2.651.97 5.212 2.815 7.117l59.864 61.824c1.961 2.026 4.571 3.044 7.185 3.044 2.505 0 5.014-.936 6.955-2.815 21.138-20.467 21.788-54.208 1.448-75.215zm-9.23 52.803-43.844-45.279c12.65-6.379 28.436-4.217 38.705 6.389 10.271 10.606 11.922 26.453 5.139 38.89z"/>
                            </svg>
                            
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

        // db.collection(' products').doc('pizza').collection('cat-pizza-slice').add({
        //     composition: "Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion",
        //     createdAt: new Date(),
        //     desc: "desc",
        //     order: 2,
        //     price: 6.90,
        //     title: "MARGHERITA",
        //     hide: false,
        //     top: false
        // })
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
<style scorped>

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

    @media only screen and (max-width: 1550px) {
    .offer-menu2-items .offer-menu2-item-single:nth-child(3n+1){
       clear: none;
    } 
    .offer-menu2-items .offer-menu2-item-single:nth-child(2n+1){
       clear: both;
    } 
}

@media only screen and (max-width: 1160px) {
     #fullwidth-container {
        width: 750px;
    }
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
    .index-page .main-blog {
        width: 100%;
    }
    
    .index-page .sidebar {
        border: none;
        padding: 0;
        width: 100%;
    }
}
    
    
    
@media only screen and (max-width: 1010px) {
    #container {
        width: 650px;
    }
    #fullwidth-container {
        width: 650px;
    }
    .single-offer-details {
        width: 320px;
    }
    ul.post-details li {
        margin: 0 10px;
    }
    h1.post-title a, h1.post-title-single {
        font-size: 28px;
    }
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

@media only screen and (max-width: 920px) {
    #fullwidth-container, #container {
        margin-top: 20px;
        width: 100%;
    }
    .header-wrapper {
        width: 100%;
        height: auto;
        position: relative;
        float: left;
        display: table;
        padding: 15px;
    }
    .logo {
        float: none;
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }
    .menu-wrapper {
        float: none;
        display: table-cell;
        vertical-align: middle;
    }
    .logo  img {
        max-width: 130px;
    }

    .menu-icons-inside {
        display: inline-block;
    }
    .page-bg {
        left: 0;
    }
    .container-wrapper {
        max-width: 650px;
        margin: 0 auto;
    }
    .page-title-inner {
        margin-left: 0;
        width: 100%;
        float: left;
    }
    span.page-title-icon {
        float: left;
    }

    h1.page-title {
        float: left;
    }
    .footer {
        display: none;
    }
    .footer2 {
        display: block;
    }
    .footer-socials ul.socials-sh {
        margin: 15px 0;
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
    .contact-maps {
        margin-left: -20px;
        margin-right: -20px;
        margin-top: -20px;
    }
    .contact-details {
        display: inline-block;
        width: 100%;
        float: left;
        text-align: center;
        padding-right: 0;
    }
    .single-offer-category-filter {
        width: 100%;
        border: none;
        padding: 0;
        text-align: center;
        clear: both;
        padding: 0;
        border-bottom: 1px solid #242424;
    }
    
    .contact-form-wrapper {
        width: 100%;
        text-align: center;
    }
    ul.single-offer-category-filter li {
        margin: 5px; 
        display: inline-block;
    }
    
    .single-offer-category-filter li a {
        margin: 5px;
    }
    .offer-menu-items {
        margin-left: 0;
        width: 100%;
    }
    .single-offer-details {
        width: 100%;
        text-align: center;
    }
    .single-offer-price {
        float: none;
        display: inline-block;
    }
    .single-offer-item {
        text-align: center;
    }
    .single-offer-category-item {
        width: 100%;
    }
    ul.post-details li {
        display: block;
        width: 100%;
        text-align: center; 
    }
}



@media only screen and (max-height: 768px) { 
    .logo {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    
    ul.sf-menu li a {
        color: #fcf6ec;
        font-family: 'Patua One', cursive;
        font-size: 18px;
        line-height: 1.6;
        text-transform: uppercase;
    }

    ul.sf-menu li.current_page_item a, ul.sf-menu li a:hover {
        color: #fab940;
    }

}

.single-offer-category-item{
    margin-top: 56px;
}

    .flaticon-pizza-slice{
        width: 38px;
        height: 38px;
        fill: #fab940;
        margin-left: 5px;
        margin-right: 5px;
    }




</style>