<template>
  <div id="Menu">
      <vue-headful
        title="Title from vue-headful"
        description="Description from vue-headful"
      />
    <Header />
    <Menu />
    <FooterMob />
  </div>
</template>

<script>
import { db } from '../main'
import Vue from 'vue';
import Header from "../components/header/Header.vue"
import FooterMob from "../components/FooterMobail"
import Menu from "../components/MenuList"
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);

export default {
  name: 'Home',
  components: {
    Header,
    Menu,
    FooterMob
  },
  data(){
    return{
      post: [],
    }
  },
  methods:{
    send: async ()=> {
      await db.collection('products').get().then(
        r => {
          r.forEach((doc) => {
            console.log("======>",doc.data())
          })
        }
      ).catch(e=>console.log("error ======>",e))
      
      }
  },
}
</script>

<style>

</style>

