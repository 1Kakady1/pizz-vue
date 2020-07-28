import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueRouter from 'vue-router'
import router from "./routes/routes"


Vue.use(firestorePlugin)
Vue.use(VueRouter)


firebase.initializeApp({
  apiKey: "AIzaSyDWlF4SN4zWZ8V6NJpUUesM1l6hEUh40G4",
  authDomain: "pizza-vue-fb264.firebaseapp.com",
  databaseURL: "https://pizza-vue-fb264.firebaseio.com",
  projectId: "pizza-vue-fb264",
  storageBucket: "pizza-vue-fb264.appspot.com",
  messagingSenderId: "994689946555",
  appId: "1:994689946555:web:f772ac2eefea3e05846a9e"
});

export const db = firebase.firestore()
export const eventEmmiter = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
