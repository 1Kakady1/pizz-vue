<template>
    <div class="container-wrapper">
        <swiper class="swiper slider-pos" ref="mySwiper" :options="swiperOption">
            
            <swiper-slide v-for="(item,index) in slidesItem" :key="`home-slide-${index}`" :class="['text-color', 'slide-'+index]">
                <span  v-if="item.type === 'img'"       :style="{backgroundImage: `url(${item.bg})`}"></span>
                <video v-if="item.type === 'video'"     class="video-full" muted="true" loop="true" autoplay="true" preload="metadata" playsinline="true" webkit-playsinline="true" ref="videoT">
                    <source :src="item.bg" type="video/mp4">
                 </video>
            </swiper-slide>


            <div class="swiper-pagination swiper-pagination-white"  slot="pagination">
                <span 
                    v-for="(item,index) in slidesItem" :key="`home-slide-dot-${index}`" 
                    @click="slideGoTo(index)" 
                    :style="{backgroundImage: `url(${item.bg})`}"
                    class="swiper-pagination__dot" 
                >
                   
                </span>
            </div>

            <div class="swiper-button-prev swiper-button-white" @click="slidePrev"  slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" @click="slideNext"  slot="button-next"></div>

        </swiper>
        <!-- <Preloader 
            :nextSlide="()=>this.swiper.slideNext()"
            :prevSlide="()=>this.swiper.slidePrev()"
        /> -->
    </div>

</template>

<script>

    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    //import 'swiper/css/swiper.css'
    import 'swiper/swiper-bundle.css'
   // import Preloader from "../Preloader"
    import { eventEmmiter } from '../../main'
    
    export default {
        name: 'SliderHome',
        components: {
            Swiper,
            SwiperSlide,
            //Preloader
        },
        props:{
            slidesItem: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                swiperOption: {
                effect: 'fade',
                loop: true,
                touchRatio: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                    }
                },
            }
        },
        mounted(){
            this.$refs.videoT[0].pause();
            this.swiper.on('transitionEnd', (e) =>{
                if(e.activeIndex == 2){
                   this.$refs.videoT[0].play();
                } else {
                    this.$refs.videoT[0].pause();
                }
            });
        },
        destroyed() {
            this.swiper.off('transitionEnd');
        },
        methods:{
            slideNext(){
                eventEmmiter.$emit("showPreloader",()=>this.swiper.slideNext())
            },
            slidePrev(){
                eventEmmiter.$emit("showPreloader",()=>this.swiper.slidePrev())
            },
            slideGoTo(index){
                 eventEmmiter.$emit("showPreloader",()=>this.swiper.slideTo(index, 1000, false))
            }
        },
        directives: {
            swiper: directive
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
            swiper2() {
                return this.$refs.mySwiper
            },
        },

    }
</script>

<style lang="sass">
    .swiper-slide
        overflow: hidden
        span
            background-size: cover
            background-repeat: no-repeat
            background-position: center
            width: 100%;
            height: 100%;
            display: block;
    .text-color
        color: red
    .container-wrapper
        height: 100vh;
    .swiper-pagination
        bottom: 0px
        left: 50%
        position: absolute;
        transform: translateX(-50%)
        display: flex
        align-items: center
        .swiper-pagination__dot
            width: 60px
            height: 60px
            display: block
            background: red
            background-size: cover
            background-repeat: no-repeat
            background-position: center
            margin: 10px
    .slider-pos
        position: relative;
        width: 100%;
        height: 100vh;
        margin-top: 0px;
        margin-bottom: 0px;
    .video-full
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    @media screen and (min-width: 996px)
        .swiper-slide
            overflow: hidden
            span
                background-size: 120%
                background-repeat: no-repeat
                background-position: center
                width: 100%;
                height: 100%;
                display: block;
            &.swiper-slide-active
                span
                    background-size: 100%
                    transition: background-size 6s ease


</style>