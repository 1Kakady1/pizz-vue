<template>
    <div id="header" class="header-wrapper" v-bind:style="{ backgroundImage: `url(${bgMenu})` }">
        <div class="logo">
            <a href="/" >
                <img class="logoImage" :src="logo" alt="" />
                <!-- <img class="logoImageRetina" src="images/logo-retina.png" alt="ALBERTOS - Pizza HTML Theme" /> -->
            </a>
            <div class="clear"></div>
        </div>
        <div class="menu-wrapper">
            <transition name="slide">
                <div class="main-menu" v-if="isShow">
                    <div class="menu-main-nav-menu-container">
                        <ul id="menu-main-nav-menu" class="sf-menu">
                            <li v-for="item in renderMenuList" :class="{active: $route.path === item.path,'menu-item':true}" :key="item.title">
                               <router-link  :to="item.path" >{{item.title}}</router-link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>    
                <div :class="{ opened: isShow,'menu-icon menu-icon-mobile':true, 'menu-icons-inside': true }" @click="menuSlide">
                    <div class="menu-icon menu-icon-mobile"><span class="menu-icon-create"></span></div>
                </div>
            
        </div>
        <div class="clear"></div>
        <div class="footer">
            
            <SocialList 
                v-bind:social="[{icon:['fab','vk']},{icon:['fab','facebook']}]"
            />

            <div class="footer-content">
                @ 2017 Alberto's. Made by
            </div>
        </div>
    </div>
</template>

<script>
    import menuBg from "../../assets/img/bg-menu.jpg"
    import logoDef from "../../assets/img/logo.png"
    import SocialList from "./Social.vue"
    import router from "../../routes/routes"
    export default {
        name: 'Header',
        data(){
            return{
              isShow: true,
              menuList: router  
            }
            
        },
        components: {
            SocialList,
        },
        methods:{
            menuSlide(){
                console.log("------->",router.options.routes)
                this.isShow = !this.isShow
            }
        },
        computed:{
            renderMenuList(){
                return this.menuList.options.routes
            }
        },
        props: {
            bgMenu: {
                type:  String,
                default: menuBg
            },
            logo:{
                type: String,
                default: logoDef
            },
        },
    }
</script>

<style>

    .slide-enter-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }

    .header-wrapper {
        width: 250px;
        height: 100%;
        /*background-image: url(../images/bg-menu.jpg);*/
        background-repeat: round;
        background-size: cover;
        display: block;
        position: fixed;
        z-index: 2;
        padding: 0 30px;
    }

    @-webkit-keyframes bg-anim {
        0% {
            background-position-y: 0
        }
        to {
            background-position-y: 216000%
        }
    }

    @keyframes bg-anim {
        0% {
            background-position-y: 0
        }
        to {
            background-position-y: 216000%
        }
    }

    body.admin-bar .header-wrapper {
        top: 0px;
    }

    .logoImageRetina {
        display: none;
    }

    .logo {
        text-align: center;
        margin-top: 60px;
        margin-bottom: 80px;
    }

    ul.sf-menu {
    list-style: none;
    text-align: center;
    list-style-position: inside;
}

ul.sf-menu li {
    list-style: none;
    text-align: center;
    list-style-position: inside;
	padding: 0;
    margin: 0;
}

ul.sf-menu li.active{
    background: rgba(0,0,0,0.6);
    border-bottom: 1px solid #000;
} 

ul.sf-menu li a {
    color: #fcf6ec;
    font-family: 'Patua One', cursive;
    font-size: 24px;
    line-height: 1.6;
    text-transform: uppercase;
}

ul.sf-menu li.current_page_item a, ul.sf-menu li a:hover {
    color: #fab940;
}

ul.sf-menu li ul li  {
    font-size: 16px;
	line-height: 1;
	margin-bottom: 10px;
}

ul.sf-menu li ul li a {
    font-size: 16px;
	line-height: 1;
}

/* mobile menu */


.mobile-menu-wrapper {
	display: none;
}

.mobile-menu-wrapper {
	width: 100%;
	height: auto;
	background: rgba(0,0,0,0.85);
	display: none;
	position: absolute;
	height: auto;
	z-index: 11;
	float: left;
	margin-bottom: 30px;
	display: none;
}

.mobile-menu-wrapper ul {
	list-style: none;
}

.mobile-menu-wrapper ul.mobile-menu  li {
	display: block;
	margin: 0;
}

.mobile-menu-wrapper ul.mobile-menu  li:before {
	content: '';
}

.mobile-menu-wrapper ul.mobile-menu  li a {
	padding-left: 40px;
}

.mobile-menu-wrapper ul.mobile-menu  li li a {
	padding-left: 60px;
}

.mobile-menu-wrapper ul.mobile-menu  li li  li a  {
	padding-left: 80px;
}

.mobile-menu-wrapper ul.mobile-menu li a {
    width: 100%;
    padding: 12px 20px 10px;
    display: block;
    color: #fcf6ec;
    border-bottom: 1px solid #000;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Patua One', cursive;
}

.mobile-menu-wrapper ul.mobile-menu  li a:hover, .mobile-menu-wrapper ul.mobile-menu  li.current_page_item a {
	color: #fab940;
	background: rgba(0,0,0,0.6); 
}

.menu-icons-inside {
	width: 100%;
	text-align: center;
    display: none;
}	
.menu-icon {
	position: relative;
	cursor: pointer;
	color: #fff;
	float: none;
	height: 26px;
	margin-right: 0;
	margin-top: 10px;
	display: inline-block;
}

.menu-icon:hover {
	color: #fff;
}

.menu-icon-close {
	display: none;
}

.menu-icon.menu-icon-close {
	font-size: 48px;
	top: 3px;
	right: 25px;
}

.menu-icon-create {
	display: inline-block;
	width: 23px;
	height: 2px;
	position: relative;
	top: 12px;
	vertical-align: bottom;
	background: #fff;
	white-space: nowrap;
	-webkit-transition: all ease .3s;
	-moz-transition: all ease .3s;
	-o-transition: all ease .3s;
	transition: all ease .3s;
	float: left;
}

.menu-icon-create:after, .menu-icon-create:before {	
	position: absolute;
	content: '';
	display: inline-block;
	width: 23px;
	height: 2px;
	-webkit-transition: all ease .3s;
	-moz-transition: all ease .3s;
	-o-transition: all ease .3s;
	transition: all ease .3s;
	outline: 1px solid transparent;
	left: 0;
	background: #fff;	
}
.menu-icon-create:before {
	top: -8px;
}

.menu-icon-create:after {
	top: 8px;
}

.menu-icon.opened .menu-icon-create:before {
	top: 100%;
	-webkit-transform: rotate(-48deg) translate(2px, 0);
	-moz-transform: rotate(-48deg) translate(2px, 0);
	-ms-transform: rotate(-48deg) translate(2px, 0);
	-o-transform: rotate(-48deg) translate(2px, 0);
	transform: rotate(-48deg) translate(2px, 0)
}

.menu-icon.opened .menu-icon-create:after{
	-webkit-transform: rotate(45deg) translate(0, 1px);
	-moz-transform: rotate(45deg) translate(0, 1px);
	-ms-transform: rotate(45deg) translate(0, 1px);
	-o-transform: rotate(45deg) translate(0, 1px);
	transform: rotate(45deg) translate(0, 1px);
	-webkit-transform-origin: 100% 0;
	-moz-transform-origin: 100% 0;
	-ms-transform-origin: 100% 0;
	-o-transform-origin: 100% 0;
	transform-origin: 100% 0
}

.menu-icon.opened  .menu-icon-create { 
	background: none;
}

.footer {
    position: absolute;
    bottom: 50px;
	padding: 0 30px 0 0;
}


.footer-content {
    color: #fcf6ec;
    text-align: center;
    border-top: 3px solid #fab940;
    padding-top: 10px;
    line-height: 1.6;
    padding-bottom: 10px;
}

.footer-content a {
     color: #c6b08c;
}

.footer-content a:hover {
     color: #fab940;
}

.footer2 {
    display: none;
    width: 100%;
    background: #000;
    position: relative;
    float: left;
}

.main-menu{
    position: absolute;
    width: 100%;
    left: 0px;
    top: 113px;
    background: rgba(0,0,0,0.85);
}

@media only screen and (min-width: 996px) {

    .header-wrapper {
        animation: bg-anim 86400s linear infinite;
    }

    .main-menu{
        position: relative;
        width: 100%;
        left: unset;
        top: unset;
        background: rgba(0,0,0,0);
    }

    ul.sf-menu li.active{
        background: transparent;
        border-bottom: 1px solid transparent;
    } 
}

@media only screen and (max-width: 996px) {

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
    /* .main-menu {
        display: none;
    } */
    .menu-icons-inside {
        display: inline-block;
    }

    .container-wrapper {
        max-width: 650px;
        margin: 0 auto;
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
}

@media only screen and (max-height: 768px) { 
    .logo {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    
    .footer-content {
        padding-bottom: 0px;
    }
    
    .footer {
        bottom: 20px;
    }
}

@media only screen and (max-width: 400px) {
    .logo img {
        max-width: 100px;
    }
    
    .footer-content {
        padding-bottom: 13px;
    }
    
}

</style>