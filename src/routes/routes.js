import VueRouter from 'vue-router'
import Home from "../page/Home"
//import Menu from "../page/Menu"
const Menu = () => import(/* webpackChunkName: "Menu" */ '../page/Menu.vue')
import Products from "../page/Products"

export default new VueRouter({
    routes:[
        { 
            path: '/', 
            component: Home,
            title: "Home" 
        },
        { 
            path: '/products', 
            component: Products ,
            title: "Products"
        },
        { 
            path: '/menu', 
            component: Menu ,
            title: "Menu"
        }
    ],
    mode: 'history',
    //linkActiveClass: "active", 
   // linkExactActiveClass: "active"
})
