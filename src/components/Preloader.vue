<template>
    <div class="preloader" :style="{zIndex: zIndex}">
       
        <div class="preloader-item preloader-item_left">
            <div class="preloader-item__line">
                 <span>
                    {{textPreloader[0]}}
                </span>
            </div>
            <div class="preloader-item__border">
            </div>
        </div>

        <div class="preloader-item" v-for="index in 8" :key="`preloader-${index}`">
            <div class="preloader-item__line">
                <span v-if="textPreloader[index].svg === undefined">
                    {{textPreloader[index]}}
                </span>
                <span v-else v-html="textPreloader[index].svg" class="pr-svg"></span>
            </div>
            <div class="preloader-item__border"></div>
        </div>

        <div class="preloader-item preloader-item_right">
            <div class="preloader-item__line">
                <span>
                    {{textPreloader[textPreloader-2]}}
                </span>
            </div>
            <div class="preloader-item__border"></div>
        </div>
    </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { eventEmmiter } from '../main'

export default {
  name: 'Preloader',
  data(){
      return {
        zIndex: -1,
        sliderTimer: undefined,
      }
  },
  props:{
      nextSlide:{
          default: undefined
      },
      prevSlide:{
          default: undefined
      },
    textPreloader:{
          type: Array,
          default: () => [
              "","",
            {svg: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="filled_outline" data-name="filled outline"><path d="m192 312h176v176h-176z" fill="#d0b288"/><path d="m200 456c-2.68 0-5.344-.066-8-.163v32.163h176v-112.248a215.572 215.572 0 0 1 -168 80.248z" fill="#ad8f6c"/><path d="m234.531 432.43 101.469 23.57-23.57-101.469-48.43 29.469z" fill="#ffc933"/><path d="m240 433.4a16.011 16.011 0 0 1 -15.033-21.478 111.783 111.783 0 0 1 66.952-66.952 16 16 0 0 1 10.947 30.069 79.859 79.859 0 0 0 -47.83 47.83 16.006 16.006 0 0 1 -15.036 10.531z" fill="#fb6f00"/><path d="m24 120h56v80h-56z" fill="#808080"/><path d="m55.999 104h80v112h-80z" fill="#b3b3b3"/><path d="m24 292.572 108.272 3.406a43.331 43.331 0 0 0 42.079-58.129 43.33 43.33 0 0 0 -69.6-17.481z" fill="#fb0200"/><path d="m24 27.428 80.752 72.2a43.33 43.33 0 0 0 69.6-17.481 43.331 43.331 0 0 0 -42.079-58.129z" fill="#fb0200"/><path d="m488 160a355.079 355.079 0 0 0 -251.078-104 362.469 362.469 0 0 0 -147.214 31.241l-1.708.759v144l1.708.759a362.469 362.469 0 0 0 147.214 31.241 355.079 355.079 0 0 0 251.078-104z" fill="#e6e6e6"/><circle cx="264" cy="160" fill="#808080" r="64"/><path d="m209.352 193.321a64 64 0 0 0 110.526-64.521 169.343 169.343 0 0 1 -110.526 64.521z" fill="#666"/><circle cx="264" cy="160" fill="#95d7fe" r="32"/><path d="m488 160a354.986 354.986 0 0 0 -112-75.6v151.2a354.986 354.986 0 0 0 112-75.6z" fill="#e50000"/><path d="m336 456-9.507-40.927a215.5 215.5 0 0 1 -50.226 27.052z" fill="#ffb600"/><circle cx="304" cy="400" r="8"/><circle cx="312" cy="432" r="8"/><circle cx="280" cy="424" r="8"/><path d="m375.866 75.638a361.283 361.283 0 0 0 -138.944-27.638 372.018 372.018 0 0 0 -54.286 3.961 51.382 51.382 0 0 0 -50.615-35.935l-108.272 3.406a8 8 0 0 0 -5.082 13.96l61.333 54.84v7.768h-24a8 8 0 0 0 -8 8v8h-24a8 8 0 0 0 -8 8v80a8 8 0 0 0 8 8h24v8a8 8 0 0 0 8 8h24v7.768l-61.333 54.84a8 8 0 0 0 5.082 13.96l108.272 3.406c.545.017 1.086.025 1.628.025a51.456 51.456 0 0 0 48.985-35.96q16.547 2.438 33.366 3.374v32.587h-24a8 8 0 0 0 -8 8v176a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-176a8 8 0 0 0 -8-8h-24v-48.148q16.122-4.99 31.866-11.49a361.282 361.282 0 0 0 117.791-78.7 8 8 0 0 0 0-11.314 361.282 361.282 0 0 0 -117.791-78.71zm-7.866 14.084v140.556a345.32 345.32 0 0 1 -131.078 25.722 352.189 352.189 0 0 1 -140.922-29.215v-133.57a352.192 352.192 0 0 1 140.922-29.215 345.32 345.32 0 0 1 131.078 25.722zm-235.477-57.7a35.371 35.371 0 0 1 34.13 22.662 368.847 368.847 0 0 0 -74.631 22.833l-47.78-42.717zm-100.523 159.978v-64h16v64zm32 16v-96h16v96zm68.523 79.981-88.281-2.776 47.78-42.722a368.854 368.854 0 0 0 74.625 22.835 35.4 35.4 0 0 1 -34.124 22.663zm227.477 192.019h-160v-160h160zm-32-176h-96v-32.032q2.459.031 4.922.032a361.543 361.543 0 0 0 91.078-11.6zm56-80.7v-126.6a344.826 344.826 0 0 1 92.555 63.3 344.826 344.826 0 0 1 -92.555 63.3z"/><path d="m264 232a72 72 0 1 0 -72-72 72.081 72.081 0 0 0 72 72zm0-128a56 56 0 1 1 -56 56 56.064 56.064 0 0 1 56-56z"/><path d="m231.794 439.948a24.035 24.035 0 0 0 4.921 1.2l97.475 22.642a8 8 0 0 0 9.6-9.6l-22.606-97.323a24 24 0 0 0 -32-19.414 119.763 119.763 0 0 0 -71.732 71.732 24.028 24.028 0 0 0 14.342 30.763zm28.49-9.749a23.774 23.774 0 0 0 2.272-4.593 71.877 71.877 0 0 1 43.05-43.05 24.024 24.024 0 0 0 4.6-2.257l15.1 65zm-27.8-15.54a103.8 103.8 0 0 1 62.172-62.172 7.985 7.985 0 0 1 10.12 4.461l.6 2.58a8.011 8.011 0 0 1 -5.246 7.994 87.841 87.841 0 0 0 -52.61 52.61 8.028 8.028 0 0 1 -7.52 5.268c-.157 0-.314-.012-.47-.021l-2.581-.6a8 8 0 0 1 -4.462-10.12z"/><path d="m264 200a40 40 0 1 0 -40-40 40.045 40.045 0 0 0 40 40zm0-64a24 24 0 1 1 -24 24 24.028 24.028 0 0 1 24-24z"/></g></svg>'}
            ,"P","I","Z","Z","A","","","",""
          ],
      },
  },
  mounted(){


      this.sliderTimer = setInterval(()=>{
            this.hideSlide(	{   
                x1: '-106%',x2:"0%"},
                undefined,
                this.nextSlide
            );
      },10000)
  },
  destroyed() {
    clearInterval(this.sliderTimer);
  },
  created(){

        eventEmmiter.$on("showPreloader",(slide=undefined)=>{
            
           if(this.sliderTimer !== undefined && this.sliderTimer !== null){
               clearInterval(this.sliderTimer);
           }
            
            this.hideSlide(	{   
                    x1: '-106%',x2:"0%"},
                    undefined,
                    slide
            );

            this.sliderTimer = setInterval(()=>{

                this.hideSlide(	{   
                    x1: '-106%',x2:"0%"},
                    undefined,
                    slide
                );

            },10000)

        })
  },
  methods: {
    hideSlide(x={x1: '-106%',x2:"0%"},callback=undefined,callbackChildren=undefined,callbackChildrenParam={x1: '0%',x2:"120%"}){

       this.zIndex = 16;

        TweenMax.staggerFromTo(".preloader-item__border", 1, {
            y: '-106%',
            delay: 0.5
        }, {
            y: "0px",
            delay: 0
        }, 0.05);


        TweenMax.staggerFromTo(".preloader-item__line", 1, {
            x: x.x1,
            delay: 0.5
        }, {
            x: x.x2,
            delay: 1.6
        }, 0.05,()=>{this.showSlide(callbackChildrenParam,callbackChildren)});

        if( typeof callback != "undefined" && typeof callback !== undefined){
            callback();
        }
    },

    showSlide(x={x1: '0%',x2:"120%"},callback = undefined ){

        if( typeof callback != "undefined" && typeof callback !== undefined ){
            callback();
        }

        

		TweenMax.staggerFromTo(".preloader-item__line", 1, {
			x: x.x1,
			delay: 0.5
		}, {
			x: x.x2,
			delay: 0.6
        }, 0.05);
        
        TweenMax.staggerFromTo(".preloader-item__border",1, {
            y: '0px',
            delay: 0.5
        }, {
            y: "-106%",
            delay: 1
        }, 0.05,()=>{this.zIndex = -1;});
    }
    
  },
}
</script>

<style lang="sass">
    .preloader
        position: absolute;
        width: 100%;
        top: 113px;
        left: 0;
        z-index: -1;
        height: 100%;
        display: flex;
    .preloader-item
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        position: relative;
        width: calc(100% / 10)
        &_left,&_right
            width: calc(100% / 8)
        &__line
            background-color: #fab940
            width: calc(100% - 2px)
            height: 100%
            display: flex
            align-items: center
            justify-content: center
            transform: translate(-120%);
            span
                font-size: 16px
                color: #fcf6ec
                font-weigt: 900
                font-family: 'Patua One', cursive;
                text-align: center
                svg
                    width: 20px
                    height: 20px
                    animation-name: bounce-1;
                    animation-duration: 2.5s;
                    animation-iteration-count: infinite;
        &__border
            background-color: #fcf6ec
            width: 2px
            height: 100%   
            transform: translateY(-106%);
    @keyframes bounce-1
        0%
            transform: translateY(0);
        50%
            transform: translateY(-20px);
        100%
            transform: translateY(0);

    @media screen and (min-width: 996px)
            .preloader-item
                &__line
                    span
                        font-size: 22px
                        svg
                            width: 60px
                            height: 60px
            .preloader
                top: 0;
</style>
