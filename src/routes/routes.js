import VueRouter from 'vue-router'

import Home from "../page/Home"
import Menu from "../page/Menu"


export default new VueRouter({
    routes:[
        { 
            path: '/', 
            component: Home,
            title: "Home" 
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
