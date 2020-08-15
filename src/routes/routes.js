import VueRouter from 'vue-router'
import Home from "../page/Home"

const Menu = () => import(/* webpackChunkName: "Menu" */ '../page/Menu.vue')
const Contact = () => import(/* webpackChunkName: "Menu" */ '../page/Contact.vue')
const SingleProduct = () => import(/* webpackChunkName: "SingleProduct" */ '../components/products/SingleProduct.vue')
//import SingleProduct from '../components/products/SingleProduct.vue'
import Products from "../page/Products"

export default new VueRouter({
    routes:[
        { 
            path: '/', 
            pathNav: '/',
            component: Home,
            title: "Home" 
        },
        { 
            path: '/products/:cat', 
            pathNav: '/products/pizza',
            component: Products ,
            title: "Products",
            name: 'productsPizza',
            //redirect: '/products/pizza/',
            children:[
                {
                    path: ':product',
                    component: SingleProduct
                },
            ]
        },
        { 
            path: '/contact', 
            pathNav: '/contact',
            component: Contact ,
            title: "Contact",
            name: "contact"
        },
        { 
            path: '/menu', 
            pathNav: '/menu',
            component: Menu ,
            title: "Menu",
            name: "menu"

        }
    ],
    mode: 'history',
    //linkActiveClass: "active", 
   // linkExactActiveClass: "active"
})
