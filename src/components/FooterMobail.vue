<template>
    <div class="footer2">
            <div class="footer-socials">
                <SocialList 
                    v-bind:social="[{icon:['fab','vk']},{icon:['fab','facebook']}]"
                />
            </div>
            <div class="footer-content">
                @ 2017 Alberto's. Made by <a href="http://themeforest.net/user/max-themes/portfolio" title="Pego HTML Themes">Pego</a> &amp; <a href="https://HTML.org/" title="HTML Themes">HTML</a>. </div>
        </div>
</template>

<script>

//import Vue from 'vue';
import SocialList from "./header/Social"

export default {
  name: 'Home',
  components:{
    SocialList
  },
  data(){
    return{
      post: [],
    }
  },
  methods:{
  },
}
</script>

<style lang="sass">
.footer2
	margin-top: 113px;
</style>

