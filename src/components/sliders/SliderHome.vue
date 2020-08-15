<template>
    <div class="container-wrapper">
        <swiper class="swiper slider-pos" ref="mySwiper" :options="swiperOption">
            
            <swiper-slide v-for="(item,index) in slidesItem" :key="`home-slide-${index}`" :class="['text-color', 'slide-'+index]">
                <span  v-if="item.type === 'img'"       :style="{backgroundImage: `url(${item.bg})`}"></span>
                <video v-if="item.type === 'video'"     class="video-full" muted="true" loop="true" autoplay="true" preload="metadata" playsinline="true" webkit-playsinline="true" ref="videoT">
                    <source :src="item.bg" type="video/mp4">
                 </video>
                <div class="desc-v1" v-if="item.desc !== undefined">
                    {{item.desc}}
                </div>
                <div class="title-v1" v-if="item.title !== undefined">
                    {{item.title}}
                </div>
            </swiper-slide>


            <div class="swiper-pagination swiper-pagination-white"  slot="pagination">
                <span 
                    v-for="(item,index) in slidesItem" :key="`home-slide-dot-${index}`" 
                    @click="slideGoTo(index)" 
                    :style="{backgroundImage: `url(${item.type === 'video' ? imgNo : item.bg})`}"
                    class="swiper-pagination__dot" 
                >
                   
                </span>
            </div>

            <div class="swiper-button-prev swiper-button-white" @click="slidePrev"  slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" @click="slideNext"  slot="button-next"></div>

        </swiper>
        <Preloader 
            :nextSlide="()=>this.swiper.slideNext()"
            :prevSlide="()=>this.swiper.slidePrev()"
        />
    </div>

</template>

<script>

    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    //import 'swiper/css/swiper.css'
    import 'swiper/swiper-bundle.css'
    import Preloader from "../Preloader"
    import { eventEmmiter } from '../../main'
    import noImg from '../../assets/img/bmm.jpg'
    
    export default {
        name: 'SliderHome',
        components: {
            Swiper,
            SwiperSlide,
            Preloader
        },
        props:{
            slidesItem: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                imgNo: noImg,
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
        },

    }
</script>

<style lang="sass">
    .desc-v1
        position: absolute;
        top: 30%
        left: 50%
        z-index: 5;
        white-space: nowrap;
        font-size: 22px;
        line-height: 92px;
        font-weight: 400;
        color: rgb(255, 255, 255);
        font-family: "Patua One";
        text-shadow: rgba(0, 0, 0, 0.6) 0px 2px 2px;
        visibility: inherit;
        border-width: 0px;
        margin: 0px;
        letter-spacing: 0px;
        transform: translateX(-7%)
        opacity: 0;
    .title-v1
        position: absolute;
        top: 50%
        left: 50%
        z-index: 6;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 400;
        color: rgb(250, 185, 64);
        font-family: "Patua One";
        background-color: rgba(36, 36, 36,0.7);
        border-radius: 10px;
        transform: translateX(-7%)
        border-width: 0px;
        margin: 0px;
        padding: 5px 40px;
        letter-spacing: 0px;
        opacity: 0;
    .swiper-slide
        .title-v1,.desc-v1
            opacity: 0;
            transform: translate(-16%, -50%);
        &.swiper-slide-active
            .title-v1,.desc-v1
                opacity: 1;
                transform: translate(-50%, -50%);
                transition: opacity 5000ms ease, transform  5000ms ease;
                transition-delay: 400ms
            .desc-v1
                transition-delay: 600ms
    .swiper-slide
        overflow: hidden
        span
            background-size: 280%
            background-repeat: no-repeat
            background-position: center
            width: 100%;
            height: 100%;
            display: block;
        &.swiper-slide-active
            span
                background-size: 350%
                transition: background-size 6s ease
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
            border: 2px solid #fab940
            border-radius: 100%
            display: block
            background: red
            background-size: cover
            background-repeat: no-repeat
            background-position: center
            cursor: pointer
            margin: 10px
            transform: scale(1)
            transition: transform 600ms ease
            &:hover
                transform: scale(0.8)
                transition: transform 600ms ease
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
        display: inline-block;
        vertical-align: baseline;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    @media screen and (min-width: 996px)
        .desc-v1
            top: 15%
            left: 6%
            font-size: 40px;
        .title-v1
            top: 25%
            left: 12%
            font-size: 30px;
        .swiper-slide
            .title-v1,.desc-v1
                transform: translateX(-16%)
            &.swiper-slide-active
                .title-v1,.desc-v1
                    transform: translateX(0%)
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
    @media screen and (min-width: 1200px)
        .desc-v1
            top: 15%
            left: 6%
            font-size: 92px;
        .title-v1
            top: 36%
            left: 12%
            font-size: 58px;
        .swiper-slide
            .title-v1,.desc-v1
                transform: translateX(-16%)
            &.swiper-slide-active
                .title-v1,.desc-v1
                    transform: translateX(0%)
    @media screen and (min-width: 1700px)
        .title-v1
            top: 25%



</style>