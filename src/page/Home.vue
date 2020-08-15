<template>
  <div id="home">
      <vue-headful
        title="Pizza home page"
        description="Description from vue-headful"
      />
    <Header />
    <SliderHome 
      :slidesItem="slidesItem"
    />
    <FooterMob />
  </div>
</template>

<script>
import { db } from '../main'
import Header from "../components/header/Header.vue"
import FooterMob from "../components/FooterMobail"
import SliderHome from "../components/sliders/SliderHome.vue"
import vueHeadful from 'vue-headful';

export default {
  name: 'Home',
  components: {
    Header,
    SliderHome,
    FooterMob,
    vueHeadful
  },
  data(){
    return{
      post: [],
      slidesItem:[
        {bg:'https://media-cdn.tripadvisor.com/media/photo-s/0e/a0/60/f3/salamina.jpg',type:"img",title:"We have the Best ",desc:"We have the Best "},
        {bg:'https://firebasestorage.googleapis.com/v0/b/pizza-vue-fb264.appspot.com/o/video%2Fvideo.mp4?alt=media&token=ce0c9dcb-14e3-4794-858d-3026c4a3522f',type:"video"},
        {bg:'https://www.pizzachicago.com/wp-content/uploads/pizza-joliet-lake.jpg',type:"img",title:"We have the Best ",desc:"We have the Best "},
        {bg:'https://content3.jdmagicbox.com/comp/chandigarh/x3/0172px172.x172.170113080932.p8x3/catalogue/pizzeria-chandigarh-pizza-outlets-9cv4h.jpg',type:"img"}
      ],
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
//    firestore () {
//     return {
//       post: db.collection('products')
//     }
//  }
}
</script>

<style lang="sass">

</style>

